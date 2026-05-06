#!/usr/bin/env python3
"""
Google Indexing API — submits all URLs from sitemap to Google for indexing.

First run: opens browser for one-time Google login, saves token to ~/keys/indexing_token.json
Subsequent runs: uses saved token automatically (no browser needed).

Usage:
    pip3 install google-auth google-auth-oauthlib requests
    python3 scripts/index_pages.py
"""

import json
import os
import time
import xml.etree.ElementTree as ET

import requests
from google_auth_oauthlib.flow import InstalledAppFlow
from google.oauth2.credentials import Credentials
from google.auth.transport.requests import Request

# ── Config ────────────────────────────────────────────────────────────────────

CLIENT_SECRET_PATH = os.environ.get(
    "GOOGLE_CLIENT_SECRET",
    os.path.expanduser("~/keys/indexing_client_secret.json"),
)
TOKEN_PATH = os.path.expanduser("~/keys/indexing_token.json")
SITEMAP_URL = "https://yourtradepartner.com.au/sitemap.xml"
INDEXING_ENDPOINT = "https://indexing.googleapis.com/v3/urlNotifications:publish"
SCOPES = ["https://www.googleapis.com/auth/indexing"]

REQUEST_DELAY = 0.5  # seconds between requests

# ── Auth ──────────────────────────────────────────────────────────────────────

def get_credentials():
    creds = None

    if os.path.exists(TOKEN_PATH):
        creds = Credentials.from_authorized_user_file(TOKEN_PATH, SCOPES)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRET_PATH, SCOPES)
            creds = flow.run_local_server(port=0)

        os.makedirs(os.path.dirname(TOKEN_PATH), exist_ok=True)
        with open(TOKEN_PATH, "w") as f:
            f.write(creds.to_json())
        print(f"Token saved to {TOKEN_PATH}")

    return creds


# ── Sitemap parsing ───────────────────────────────────────────────────────────

NS = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}

def fetch_urls_from_sitemap(sitemap_url: str) -> list:
    print(f"Fetching sitemap: {sitemap_url}")
    resp = requests.get(sitemap_url, timeout=15)
    resp.raise_for_status()

    root = ET.fromstring(resp.content)
    urls = []

    for sitemap in root.findall("sm:sitemap", NS):
        loc = sitemap.find("sm:loc", NS)
        if loc is not None:
            urls.extend(fetch_urls_from_sitemap(loc.text.strip()))

    for url_entry in root.findall("sm:url", NS):
        loc = url_entry.find("sm:loc", NS)
        if loc is not None:
            urls.append(loc.text.strip())

    return urls


# ── Indexing ──────────────────────────────────────────────────────────────────

def submit_url(url: str, token: str) -> dict:
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
    }
    payload = {"url": url, "type": "URL_UPDATED"}
    resp = requests.post(INDEXING_ENDPOINT, json=payload, headers=headers, timeout=15)
    return {"status": resp.status_code, "body": resp.json()}


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    if not os.path.exists(CLIENT_SECRET_PATH):
        print(f"ERROR: Client secret not found at {CLIENT_SECRET_PATH}")
        print("Set GOOGLE_CLIENT_SECRET env var or place file at that path.")
        return

    print("Authenticating with Google...")
    creds = get_credentials()

    print(f"\nFetching URLs from {SITEMAP_URL}...")
    urls = fetch_urls_from_sitemap(SITEMAP_URL)
    print(f"Found {len(urls)} URLs\n")

    results = {"success": [], "error": []}

    for i, url in enumerate(urls, 1):
        print(f"[{i}/{len(urls)}] Submitting: {url}")

        if creds.expired:
            creds.refresh(Request())

        result = submit_url(url, creds.token)

        if result["status"] == 200:
            results["success"].append(url)
            print(f"  ✓ OK")
        else:
            results["error"].append({"url": url, "detail": result["body"]})
            print(f"  ✗ {result['status']} — {result['body']}")

        time.sleep(REQUEST_DELAY)

    print(f"\n── Results ──────────────────────────────")
    print(f"  Submitted: {len(results['success'])} URLs")
    print(f"  Failed:    {len(results['error'])} URLs")

    if results["error"]:
        print("\nFailed URLs:")
        for item in results["error"]:
            print(f"  {item['url']} → {item['detail']}")

    log_path = os.path.join(os.path.dirname(__file__), "indexing_log.json")
    with open(log_path, "w") as f:
        json.dump(results, f, indent=2)
    print(f"\nLog saved to {log_path}")


if __name__ == "__main__":
    main()
