#!/usr/bin/env python3
"""
Google Search Console Report

Pulls:
  - Top pages by clicks and impressions (last 90 days)
  - Top search queries
  - Pages with zero clicks (potential content/SEO gaps)
  - URL inspection — index status, coverage state, last crawl, errors

First run opens a browser for Google login (saves token to ~/keys/gsc_token.json).
Subsequent runs are headless.

Usage:
    python3 scripts/gsc_report.py
    python3 scripts/gsc_report.py --inspect   # also checks each URL's index status (slow)
    python3 scripts/gsc_report.py --days 30   # change date window
"""

import argparse
import json
import os
import time
import urllib.parse
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta

import requests
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow

# ── Config ────────────────────────────────────────────────────────────────────

CLIENT_SECRET_PATH = os.environ.get(
    "GOOGLE_CLIENT_SECRET",
    os.path.expanduser("~/keys/indexing_client_secret.json"),
)
TOKEN_PATH = os.path.expanduser("~/keys/gsc_token.json")

# Must match the property as it appears in Search Console.
# Try "https://yourtradepartner.com.au/" first.
# If you added the property as a Domain property, use "sc-domain:yourtradepartner.com.au"
SITE_URL = "https://yourtradepartner.com.au/"

SITEMAP_URL = "https://yourtradepartner.com.au/sitemap.xml"

SCOPES = [
    "https://www.googleapis.com/auth/webmasters",  # includes URL inspection write access
]

INSPECT_DELAY = 0.5  # seconds between URL inspection calls (avoid rate-limits)

# ── Auth ──────────────────────────────────────────────────────────────────────

def get_credentials():
    creds = None

    if os.path.exists(TOKEN_PATH):
        creds = Credentials.from_authorized_user_file(TOKEN_PATH, SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not os.path.exists(CLIENT_SECRET_PATH):
                raise FileNotFoundError(
                    f"Client secret not found at {CLIENT_SECRET_PATH}\n"
                    "Set GOOGLE_CLIENT_SECRET env var or place file at that path."
                )
            flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRET_PATH, SCOPES)
            creds = flow.run_local_server(port=0)

        os.makedirs(os.path.dirname(TOKEN_PATH), exist_ok=True)
        with open(TOKEN_PATH, "w") as f:
            f.write(creds.to_json())
        print(f"Token saved → {TOKEN_PATH}")

    return creds


def auth_headers(creds):
    if creds.expired:
        creds.refresh(Request())
    return {
        "Authorization": f"Bearer {creds.token}",
        "Content-Type": "application/json",
    }


# ── API calls ─────────────────────────────────────────────────────────────────

def fetch_performance(creds, start_date: str, end_date: str, dimension: str, row_limit=50) -> list:
    encoded = urllib.parse.quote(SITE_URL, safe="")
    url = f"https://www.googleapis.com/webmasters/v3/sites/{encoded}/searchAnalytics/query"
    payload = {
        "startDate": start_date,
        "endDate": end_date,
        "dimensions": [dimension],
        "rowLimit": row_limit,
        "orderBy": [{"fieldName": "clicks", "sortOrder": "DESCENDING"}],
    }
    resp = requests.post(url, json=payload, headers=auth_headers(creds), timeout=15)
    resp.raise_for_status()
    return resp.json().get("rows", [])


def inspect_url(creds, page_url: str) -> dict:
    """Returns inspection result dict or an error dict."""
    url = "https://searchconsole.googleapis.com/v1/urlInspection/index:inspect"
    payload = {"inspectionUrl": page_url, "siteUrl": SITE_URL}
    resp = requests.post(url, json=payload, headers=auth_headers(creds), timeout=15)
    if resp.status_code != 200:
        return {"error": resp.status_code, "detail": resp.text[:200]}
    return resp.json().get("inspectionResult", {})


# ── Sitemap ───────────────────────────────────────────────────────────────────

NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}


def fetch_sitemap_urls(sitemap_url: str) -> list:
    resp = requests.get(sitemap_url, timeout=15)
    resp.raise_for_status()
    root = ET.fromstring(resp.content)
    urls = []
    for sitemap in root.findall("sm:sitemap", NS):
        loc = sitemap.find("sm:loc", NS)
        if loc is not None:
            urls.extend(fetch_sitemap_urls(loc.text.strip()))
    for entry in root.findall("sm:url", NS):
        loc = entry.find("sm:loc", NS)
        if loc is not None:
            urls.append(loc.text.strip())
    return urls


# ── Report formatting ─────────────────────────────────────────────────────────

def section(title: str):
    print(f"\n{'─' * 60}")
    print(f"  {title}")
    print(f"{'─' * 60}")


def fmt_row(row: dict) -> dict:
    return {
        "url":         row["keys"][0],
        "clicks":      row.get("clicks", 0),
        "impressions": row.get("impressions", 0),
        "ctr":         f"{row.get('ctr', 0) * 100:.1f}%",
        "position":    f"{row.get('position', 0):.1f}",
    }


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--inspect", action="store_true", help="Check index status for every sitemap URL")
    parser.add_argument("--days", type=int, default=90, help="Date window in days (default: 90)")
    args = parser.parse_args()

    end_date   = datetime.now().strftime("%Y-%m-%d")
    start_date = (datetime.now() - timedelta(days=args.days)).strftime("%Y-%m-%d")

    print(f"Authenticating with Google…")
    creds = get_credentials()
    print(f"Report window: {start_date} → {end_date}")

    report = {}

    # ── Top pages by clicks ──────────────────────────────────────────────────
    section(f"Top pages by clicks (last {args.days} days)")
    try:
        page_rows = fetch_performance(creds, start_date, end_date, "page", row_limit=50)
        report["top_pages"] = [fmt_row(r) for r in page_rows]
        for r in report["top_pages"][:10]:
            print(f"  {r['clicks']:>6} clicks  {r['impressions']:>8} impr  pos {r['position']:>6}  {r['url']}")
        print(f"\n  (showing 10 of {len(page_rows)} pages)")
    except Exception as e:
        print(f"  ERROR: {e}")
        report["top_pages"] = []

    # ── Pages with zero clicks (impressions but no clicks) ───────────────────
    section("Pages with impressions but ZERO clicks (content / title gaps)")
    zero_click = [
        fmt_row(r) for r in page_rows
        if r.get("impressions", 0) > 0 and r.get("clicks", 0) == 0
    ]
    report["zero_click_pages"] = zero_click
    if zero_click:
        for r in zero_click[:15]:
            print(f"  {r['impressions']:>8} impr  pos {r['position']:>6}  {r['url']}")
    else:
        print("  None found — all impression-receiving pages have at least one click.")

    # ── Top queries ──────────────────────────────────────────────────────────
    section(f"Top search queries (last {args.days} days)")
    try:
        query_rows = fetch_performance(creds, start_date, end_date, "query", row_limit=20)
        report["top_queries"] = [fmt_row(r) for r in query_rows]
        for r in report["top_queries"]:
            print(f"  {r['clicks']:>6} clicks  {r['impressions']:>8} impr  pos {r['position']:>6}  {r['url']}")
    except Exception as e:
        print(f"  ERROR: {e}")
        report["top_queries"] = []

    # ── URL inspection ───────────────────────────────────────────────────────
    if args.inspect:
        section("URL Inspection — index status for all sitemap URLs")
        try:
            sitemap_urls = fetch_sitemap_urls(SITEMAP_URL)
            print(f"  Checking {len(sitemap_urls)} URLs…\n")
        except Exception as e:
            print(f"  Could not fetch sitemap: {e}")
            sitemap_urls = []

        inspection_results = []
        not_indexed = []
        errors = []

        for i, page_url in enumerate(sitemap_urls, 1):
            result = inspect_url(creds, page_url)
            idx = result.get("indexStatusResult", {})
            coverage = idx.get("coverageState", "UNKNOWN")
            verdict  = idx.get("indexingState", "UNKNOWN")
            last_crawl = idx.get("lastCrawlTime", "never")[:10] if idx.get("lastCrawlTime") else "never"

            status = "✓" if verdict == "INDEXING_ALLOWED" and "Indexed" in coverage else "✗"
            print(f"  [{i:>3}/{len(sitemap_urls)}] {status}  {coverage:<35}  crawled {last_crawl}  {page_url}")

            row = {
                "url": page_url,
                "coverage": coverage,
                "indexing_state": verdict,
                "last_crawl": last_crawl,
            }
            inspection_results.append(row)

            if "error" in result or "Error" in coverage or verdict != "INDEXING_ALLOWED":
                if "error" in result:
                    errors.append(row)
                else:
                    not_indexed.append(row)

            time.sleep(INSPECT_DELAY)

        report["url_inspection"] = inspection_results

        section("URL Inspection Summary")
        indexed_count = len(inspection_results) - len(not_indexed) - len(errors)
        print(f"  Indexed:     {indexed_count}")
        print(f"  Not indexed: {len(not_indexed)}")
        print(f"  Errors:      {len(errors)}")

        if not_indexed:
            print("\n  Not indexed:")
            for r in not_indexed:
                print(f"    {r['coverage']:<35} {r['url']}")
        if errors:
            print("\n  Errors:")
            for r in errors:
                print(f"    {r['url']}")

    # ── Save report ──────────────────────────────────────────────────────────
    report["generated_at"] = datetime.now().isoformat()
    report["date_range"]   = {"start": start_date, "end": end_date}

    log_path = os.path.join(os.path.dirname(__file__), "gsc_report.json")
    with open(log_path, "w") as f:
        json.dump(report, f, indent=2)

    print(f"\n\nFull report saved → {log_path}")


if __name__ == "__main__":
    main()
