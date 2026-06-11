#!/usr/bin/env python3
"""
Google Analytics 4 — Pages & Screens report

Replicates the GA4 "Pages and screens: Page path and screen class" report:
  - Views, Active users, Views per active user
  - Average engagement time per active user
  - Event count, Key events, Total revenue
  ...broken down by Page path and screen class, sorted by Views.

First run opens a browser for Google login (saves token to ~/keys/ga4_token.json).
Subsequent runs are headless. Reuses the same OAuth client as the GSC/indexing
scripts — but a DIFFERENT scope (analytics.readonly), hence a separate token.

Setup (one-time):
  1. Enable the "Google Analytics Data API" in the SAME Cloud project that owns
     ~/keys/indexing_client_secret.json:
     https://console.cloud.google.com/apis/library/analyticsdata.googleapis.com
  2. Find your GA4 numeric Property ID: GA4 → Admin → Property Settings (top-right).
     NOT the G-XXXX measurement ID.

Usage:
    GA4_PROPERTY_ID=123456789 python3 scripts/ga4_report.py
    python3 scripts/ga4_report.py --property 123456789
    python3 scripts/ga4_report.py --property 123456789 --start 2026-05-15 --end 2026-06-11
    python3 scripts/ga4_report.py --property 123456789 --days 28 --limit 50
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

# "Page path and screen class" dimension in the GA4 Data API
DIMENSION = "unifiedPagePathScreen"

# Columns, in the order the GA4 report shows them
METRICS = [
    "screenPageViews",         # Views
    "activeUsers",             # Active users
    "screenPageViewsPerUser",  # Views per active user
    "userEngagementDuration",  # total engagement (sec) → avg per user computed below
    "eventCount",              # Event count
    "keyEvents",               # Key events
    "totalRevenue",            # Total revenue
]

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


# ── API call ──────────────────────────────────────────────────────────────────

def run_report(creds, property_id: str, start_date: str, end_date: str, limit: int) -> dict:
    url = f"https://analyticsdata.googleapis.com/v1beta/properties/{property_id}:runReport"
    payload = {
        "dateRanges": [{"startDate": start_date, "endDate": end_date}],
        "dimensions": [{"name": DIMENSION}],
        "metrics": [{"name": m} for m in METRICS],
        "orderBys": [{"metric": {"metricName": "screenPageViews"}, "desc": True}],
        "metricAggregations": ["TOTAL"],
        "limit": limit,
    }
    resp = requests.post(url, json=payload, headers=auth_headers(creds), timeout=30)
    if resp.status_code != 200:
        raise RuntimeError(f"GA4 API {resp.status_code}: {resp.text[:500]}")
    return resp.json()


# ── Formatting ────────────────────────────────────────────────────────────────

def fmt_duration(seconds: float) -> str:
    seconds = int(round(seconds))
    m, s = divmod(seconds, 60)
    if m >= 60:
        h, m = divmod(m, 60)
        return f"{h}h {m:02d}m {s:02d}s"
    return f"{m}m {s:02d}s"


def parse_rows(data: dict) -> list:
    rows = []
    for r in data.get("rows", []):
        path = r["dimensionValues"][0]["value"]
        vals = [mv["value"] for mv in r["metricValues"]]
        views          = float(vals[0])
        active_users   = float(vals[1])
        views_per_user = float(vals[2])
        engagement_sec = float(vals[3])
        event_count    = float(vals[4])
        key_events     = float(vals[5])
        revenue        = float(vals[6])

        avg_engagement = engagement_sec / active_users if active_users else 0.0

        rows.append({
            "page": path,
            "views": int(views),
            "active_users": int(active_users),
            "views_per_user": round(views_per_user, 2),
            "avg_engagement_time": fmt_duration(avg_engagement),
            "avg_engagement_seconds": round(avg_engagement, 1),
            "event_count": int(event_count),
            "key_events": key_events,
            "total_revenue": revenue,
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
    parser.add_argument("--limit", type=int, default=50, help="Max rows (default: 50)")
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
    rows = parse_rows(data)

    # Totals (GA4 returns these separately; fall back to summing if absent)
    totals_row = None
    if data.get("totals"):
        tv = [mv["value"] for mv in data["totals"][0]["metricValues"]]
        t_active = float(tv[1])
        totals_row = {
            "views": int(float(tv[0])),
            "active_users": int(t_active),
            "avg_engagement_time": fmt_duration(float(tv[3]) / t_active if t_active else 0),
            "event_count": int(float(tv[4])),
            "key_events": float(tv[5]),
            "total_revenue": float(tv[6]),
        }

    # ── Print table ──────────────────────────────────────────────────────────
    header = f"{'Views':>7} {'Users':>6} {'V/User':>7} {'Avg eng.':>11} {'Events':>7}  Page"
    print(header)
    print("─" * len(header))
    for r in rows:
        print(f"{r['views']:>7} {r['active_users']:>6} {r['views_per_user']:>7} "
              f"{r['avg_engagement_time']:>11} {r['event_count']:>7}  {r['page']}")

    if totals_row:
        print("─" * len(header))
        print(f"{totals_row['views']:>7} {totals_row['active_users']:>6} {'':>7} "
              f"{totals_row['avg_engagement_time']:>11} {totals_row['event_count']:>7}  TOTAL")

    # ── Save report ──────────────────────────────────────────────────────────
    out = {
        "property_id": args.property,
        "date_range": {"start": start_date, "end": end_date},
        "generated_at": datetime.now().isoformat(),
        "totals": totals_row,
        "rows": rows,
    }
    log_path = os.path.join(os.path.dirname(__file__), "ga4_report.json")
    with open(log_path, "w") as f:
        json.dump(out, f, indent=2)

    print(f"\nFull report saved → {log_path}")


if __name__ == "__main__":
    main()
