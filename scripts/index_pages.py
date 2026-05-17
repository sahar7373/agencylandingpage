#!/usr/bin/env python3
"""
Google Indexing API — submit URLs for recrawl.

Reads all URLs from the sitemap (or a supplied list) and submits each to
the Google Indexing API with type URL_UPDATED.

Credentials live in ~/keys/indexing_client_secret.json and
~/keys/indexing_token.json (OAuth user flow, scope: indexing).

Usage:
    python3 scripts/index_pages.py                    # all sitemap URLs
    python3 scripts/index_pages.py --urls URL [URL…]  # specific URLs only
    python3 scripts/index_pages.py --dry-run          # print URLs, no API calls
"""

import argparse
import json
import os
import time
import xml.etree.ElementTree as ET
from datetime import datetime

import requests
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow

# ── Config ─────────────────────────────────────────────────────────────────────

CLIENT_SECRET_PATH = os.environ.get(
    "GOOGLE_CLIENT_SECRET",
    os.path.expanduser("~/keys/indexing_client_secret.json"),
)
TOKEN_PATH = os.path.expanduser("~/keys/indexing_token.json")

SITEMAP_URL = "https://yourtradepartner.com.au/sitemap.xml"

SCOPES = ["https://www.googleapis.com/auth/indexing"]

INDEXING_API = "https://indexing.googleapis.com/v3/urlNotifications:publish"
REQUEST_DELAY = 0.5  # seconds between API calls

LOG_PATH = os.path.join(os.path.dirname(__file__), "indexing_log.json")

# ── Auth ───────────────────────────────────────────────────────────────────────


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
                    "Set GOOGLE_CLIENT_SECRET env var or place the file at that path."
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


# ── Sitemap ─────────────────────────────────────────────────────────────────────


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


# ── Indexing ────────────────────────────────────────────────────────────────────


def submit_url(creds, url: str) -> dict:
    resp = requests.post(
        INDEXING_API,
        json={"url": url, "type": "URL_UPDATED"},
        headers=auth_headers(creds),
        timeout=15,
    )
    return {"url": url, "status": resp.status_code, "response": resp.json()}


# ── Main ────────────────────────────────────────────────────────────────────────


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--urls", nargs="+", metavar="URL", help="Specific URLs to index (skips sitemap)")
    parser.add_argument("--dry-run", action="store_true", help="Print URLs without making API calls")
    args = parser.parse_args()

    if args.urls:
        urls = args.urls
        print(f"Targeting {len(urls)} URL(s) supplied via --urls")
    else:
        print(f"Fetching sitemap from {SITEMAP_URL}…")
        urls = fetch_sitemap_urls(SITEMAP_URL)
        print(f"Found {len(urls)} URLs in sitemap")

    if args.dry_run:
        print("\n[dry-run] Would submit:")
        for u in urls:
            print(f"  {u}")
        return

    print(f"\nAuthenticating with Google…")
    creds = get_credentials()

    results = []
    ok = 0
    errors = 0

    print(f"\nSubmitting {len(urls)} URL(s) to Indexing API:\n")
    for i, url in enumerate(urls, 1):
        result = submit_url(creds, url)
        status = result["status"]
        icon = "✓" if status == 200 else "✗"
        print(f"  [{i:>3}/{len(urls)}] {icon}  HTTP {status}  {url}")
        if status == 200:
            ok += 1
        else:
            errors += 1
            detail = result.get("response", {})
            print(f"           {detail}")
        results.append(result)
        time.sleep(REQUEST_DELAY)

    print(f"\nDone — {ok} submitted, {errors} errors")

    log = {
        "submitted_at": datetime.now().isoformat(),
        "total": len(urls),
        "ok": ok,
        "errors": errors,
        "results": results,
    }
    with open(LOG_PATH, "w") as f:
        json.dump(log, f, indent=2)
    print(f"Log saved → {LOG_PATH}")


if __name__ == "__main__":
    main()
