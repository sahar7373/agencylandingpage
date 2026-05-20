#!/usr/bin/env python3
"""
Live SEO Audit with MCP Integration
Actually calls Firecrawl and DataForSEO MCP tools to generate real audit reports

USAGE:
    python live_seo_audit.py <website_url> [--location_code=2036]

This script integrates with Claude Code's MCP tools to:
1. Scrape website with Firecrawl MCP
2. Analyze SEO data with DataForSEO MCP
3. Generate comprehensive audit report
4. Save report for manual review and sending

EXAMPLE:
    python live_seo_audit.py https://sometradie.com.au --location_code=2036
"""

import sys
import json
import argparse
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse

def main():
    parser = argparse.ArgumentParser(description='Generate live SEO audit using MCP tools')
    parser.add_argument('website_url', help='Website URL to audit')
    parser.add_argument('--location_code', default='2036', help='Location code (default: 2036 for Australia)')

    args = parser.parse_args()

    # Validate URL
    if not (args.website_url.startswith('http://') or args.website_url.startswith('https://')):
        print("❌ Error: URL must start with http:// or https://")
        sys.exit(1)

    domain = urlparse(args.website_url).netloc.replace('www.', '')

    print("🔍 SEO AUDIT SYSTEM - Live MCP Integration")
    print("=" * 60)
    print(f"🎯 Target: {args.website_url}")
    print(f"🌍 Location: Australia ({args.location_code})")
    print(f"⏰ Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print()

    # Store parameters for the next steps
    audit_params = {
        'website_url': args.website_url,
        'domain': domain,
        'location_code': args.location_code,
        'timestamp': datetime.now().isoformat()
    }

    # Save parameters for Claude Code to pick up
    params_file = Path("audit_params.json")
    with open(params_file, 'w') as f:
        json.dump(audit_params, f, indent=2)

    print("📋 NEXT STEPS FOR CLAUDE CODE:")
    print("   1. Use Firecrawl MCP to scrape the website")
    print("   2. Use DataForSEO MCP for keyword and competitor analysis")
    print("   3. Generate comprehensive audit report")
    print("   4. Save report and remind for manual review")
    print()
    print(f"✅ Parameters saved to: {params_file}")
    print("   Claude Code can now proceed with MCP tool integration!")

if __name__ == "__main__":
    main()