#!/usr/bin/env python3
"""
Google Analytics 4 — Events & Key Events report

Companion to ga4_report.py. Where that script breaks metrics down by PAGE, this one
breaks them down by EVENT NAME — so you can confirm the conversion tracking is working:

  - Which events are firing (eventName)
  - How many times (eventCount)
  - How many count as Key Events / conversions (keyEvents)

Use this to verify the `generate_lead` (primary lead) and `soft_lead` (freebie email
grab) events are landing after the tracking rollout, and that `generate_lead` is flagged
as a Key Event in GA4 Admin (keyEvents column > 0 confirms the switch is on).

Reuses the SAME OAuth token/scope as ga4_report.py (~/keys/ga4_token.json,
analytics.readonly). If that token is expired, run ga4_report.py once first to
re-authenticate via the browser.

Usage:
    GA4_PROPERTY_ID=521423755 python3 scripts/ga4_events_report.py
    python3 scripts/ga4_events_report.py --property 521423755 --days 28
    python3 scripts/ga4_events_report.py --property 521423755 --start 2026-07-01 --end 2026-07-18
    python3 scripts/ga4_events_report.py --property 521423755 --filter lead   # only events whose name contains "lead"
"""

import argparse
import json
import os
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
TOKEN_PATH = os.path.expanduser("~/keys/ga4_token.json")

SCOPES = [
    "https://www.googleapis.com/auth/analytics.readonly",
]

DIMENSION = "eventName"

METRICS = [
    "eventCount",      # how many times the event fired
    "keyEvents",       # how many of those count as conversions (0 = not flagged in Admin)
    "totalRevenue",    # revenue attributed to the event, if any
]

# ── Auth (identical pattern to ga4_report.py) ──────────────────────────────────

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


# ── API call ──────────────────────────────────────────────────────────────────

def run_report(creds, property_id: str, start_date: str, end_date: str, limit: int) -> dict:
    url = f"https://analyticsdata.googleapis.com/v1beta/properties/{property_id}:runReport"
    payload = {
        "dateRanges": [{"startDate": start_date, "endDate": end_date}],
        "dimensions": [{"name": DIMENSION}],
        "metrics": [{"name": m} for m in METRICS],
        "orderBys": [{"metric": {"metricName": "eventCount"}, "desc": True}],
        "metricAggregations": ["TOTAL"],
        "limit": limit,
    }
    resp = requests.post(url, json=payload, headers=auth_headers(creds), timeout=30)
    if resp.status_code != 200:
        raise RuntimeError(f"GA4 API {resp.status_code}: {resp.text[:500]}")
    return resp.json()


# ── Formatting ────────────────────────────────────────────────────────────────

def parse_rows(data: dict, name_filter: str | None) -> list:
    rows = []
    for r in data.get("rows", []):
        name = r["dimensionValues"][0]["value"]
        if name_filter and name_filter.lower() not in name.lower():
            continue
        vals = [mv["value"] for mv in r["metricValues"]]
        rows.append({
            "event": name,
            "event_count": int(float(vals[0])),
            "key_events": float(vals[1]),
            "total_revenue": float(vals[2]),
        })
    return rows


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--property", default=os.environ.get("GA4_PROPERTY_ID"),
                        help="GA4 numeric Property ID (or set GA4_PROPERTY_ID env var)")
    parser.add_argument("--start", help="Start date YYYY-MM-DD (overrides --days)")
    parser.add_argument("--end", help="End date YYYY-MM-DD (default: today)")
    parser.add_argument("--days", type=int, default=28, help="Date window in days (default: 28)")
    parser.add_argument("--limit", type=int, default=100, help="Max rows (default: 100)")
    parser.add_argument("--filter", dest="name_filter", default=None,
                        help="Only show events whose name contains this substring (e.g. 'lead')")
    args = parser.parse_args()

    if not args.property:
        parser.error("GA4 Property ID required: pass --property or set GA4_PROPERTY_ID")

    end_date = args.end or datetime.now().strftime("%Y-%m-%d")
    if args.start:
        start_date = args.start
    else:
        start_date = (datetime.strptime(end_date, "%Y-%m-%d") - timedelta(days=args.days)).strftime("%Y-%m-%d")

    print("Authenticating with Google…")
    creds = get_credentials()
    print(f"Property: {args.property}")
    print(f"Report window: {start_date} → {end_date}\n")

    data = run_report(creds, args.property, start_date, end_date, args.limit)
    rows = parse_rows(data, args.name_filter)

    # ── Print table ──────────────────────────────────────────────────────────
    header = f"{'Count':>8} {'KeyEvents':>10} {'Revenue':>9}  Event name"
    print(header)
    print("─" * len(header))
    for r in rows:
        print(f"{r['event_count']:>8} {r['key_events']:>10.0f} {r['total_revenue']:>9.2f}  {r['event']}")

    if not rows:
        print("  (no events matched — check the date window, or that the site has PROD traffic)")

    # Highlight the two lead events specifically
    print()
    for target in ("generate_lead", "soft_lead"):
        match = next((r for r in rows if r["event"] == target), None)
        if match:
            flagged = "✅ counted as Key Event" if match["key_events"] > 0 else "⚠️  NOT flagged as Key Event in GA4 Admin"
            print(f"  {target}: {match['event_count']} fires — {flagged}")
        else:
            print(f"  {target}: not seen in this window (no submissions yet, or tracking not live)")

    # ── Save report ──────────────────────────────────────────────────────────
    out = {
        "property_id": args.property,
        "date_range": {"start": start_date, "end": end_date},
        "generated_at": datetime.now().isoformat(),
        "rows": rows,
    }
    log_path = os.path.join(os.path.dirname(__file__), "ga4_events_report.json")
    with open(log_path, "w") as f:
        json.dump(out, f, indent=2)

    print(f"\nFull report saved → {log_path}")
    print("Tip: break a single event down by source once you register `lead_source` as a "
          "custom dimension in GA4 Admin → Custom definitions.")


if __name__ == "__main__":
    main()
