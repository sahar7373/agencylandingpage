#!/usr/bin/env python3
"""
Website Audit Generator
Automated SEO audit system using DataForSEO MCP and Firecrawl

USAGE:
    python website_audit_generator.py <website_url> [--location_code=2036]

EXAMPLE:
    python website_audit_generator.py https://example.com.au --location_code=2036

FEATURES:
    - DataForSEO analysis (domain overview, keywords, backlinks, competitors)
    - Firecrawl website structure analysis
    - Technical SEO audit
    - Automated report generation
    - Manual review and delivery
"""

import sys
import json
import argparse
import asyncio
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse
import re

class WebsiteAuditGenerator:
    def __init__(self, website_url: str, location_code: str = "2036"):
        self.website_url = website_url
        self.location_code = location_code  # 2036 = Australia
        self.domain = urlparse(website_url).netloc.replace('www.', '')
        self.audit_data = {}
        self.report_content = ""

    def generate_report_filename(self) -> str:
        """Generate timestamped report filename"""
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        safe_domain = self.domain.replace('.', '_')
        return f"seo_audit_{safe_domain}_{timestamp}.md"

    def extract_business_info(self, content: str) -> dict:
        """Extract business information from website content"""
        info = {
            'name': '',
            'location': '',
            'phone': '',
            'email': '',
            'services': []
        }

        # Extract business name from title tags
        title_match = re.search(r'<title[^>]*>([^<]+)</title>', content, re.I)
        if title_match:
            info['name'] = title_match.group(1).split('|')[0].strip()

        # Extract phone numbers (Australian format)
        phone_pattern = r'(?:\+61\s?)?(?:\(0\d\)\s?\d{4}\s?\d{4}|0\d{9}|0\d\s\d{4}\s\d{4})'
        phones = re.findall(phone_pattern, content)
        if phones:
            info['phone'] = phones[0]

        # Extract email addresses
        email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        emails = re.findall(email_pattern, content)
        if emails:
            info['email'] = emails[0]

        return info

    def analyze_content_structure(self, content: str) -> dict:
        """Analyze website content structure"""
        analysis = {
            'title_tags': [],
            'meta_descriptions': [],
            'h1_tags': [],
            'h2_tags': [],
            'images_without_alt': 0,
            'internal_links': 0,
            'word_count': 0
        }

        # Extract title tags
        titles = re.findall(r'<title[^>]*>([^<]+)</title>', content, re.I)
        analysis['title_tags'] = titles

        # Extract meta descriptions
        meta_desc = re.findall(r'<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"\']+)["\']', content, re.I)
        analysis['meta_descriptions'] = meta_desc

        # Extract headings
        h1s = re.findall(r'<h1[^>]*>([^<]+)</h1>', content, re.I)
        h2s = re.findall(r'<h2[^>]*>([^<]+)</h2>', content, re.I)
        analysis['h1_tags'] = h1s
        analysis['h2_tags'] = h2s

        # Count images without alt text
        imgs = re.findall(r'<img[^>]*>', content, re.I)
        for img in imgs:
            if 'alt=' not in img.lower() or 'alt=""' in img or "alt=''" in img:
                analysis['images_without_alt'] += 1

        # Count internal links (rough estimate)
        internal_links = re.findall(rf'href=["\'][^"\']*{re.escape(self.domain)}[^"\']*["\']', content, re.I)
        analysis['internal_links'] = len(internal_links)

        # Estimate word count (remove HTML tags)
        text_content = re.sub(r'<[^>]+>', ' ', content)
        words = text_content.split()
        analysis['word_count'] = len([w for w in words if len(w) > 2])

        return analysis

    def generate_technical_seo_checklist(self, content: str) -> list:
        """Generate technical SEO checklist based on content analysis"""
        issues = []

        # Check for basic SEO elements
        if '<title' not in content.lower():
            issues.append("❌ **CRITICAL**: Missing title tags")

        if 'name="description"' not in content.lower():
            issues.append("❌ **CRITICAL**: Missing meta description")

        if 'og:title' not in content and 'property="og:title"' not in content.lower():
            issues.append("⚠️ Missing Open Graph tags")

        if 'rel="canonical"' not in content.lower():
            issues.append("⚠️ Missing canonical tags")

        if 'application/ld+json' not in content.lower():
            issues.append("❌ Missing structured data (Schema.org)")

        # Check for mobile optimization
        if 'viewport' not in content.lower():
            issues.append("❌ **CRITICAL**: Missing mobile viewport meta tag")

        # Check for HTTPS
        if self.website_url.startswith('http://'):
            issues.append("❌ **CRITICAL**: Website not using HTTPS")

        return issues

    def generate_markdown_report(self) -> str:
        """Generate comprehensive markdown audit report"""
        timestamp = datetime.now().strftime('%B %Y')
        business_info = self.audit_data.get('business_info', {})

        report = f"""# SEO Audit & Growth Plan — {business_info.get('name', self.domain)}
**Prepared:** {timestamp}
**Website:** {self.website_url}
**Analysis Type:** Comprehensive Technical + Content + Competitive Audit

---

## Executive Summary

{business_info.get('name', 'This website')} has been analyzed using advanced SEO intelligence tools including DataForSEO's comprehensive keyword and competitor database, combined with deep website structure analysis via Firecrawl.

**Key Findings:**
- **Domain analyzed**: `{self.domain}`
- **Pages crawled**: {len(self.audit_data.get('crawled_pages', []))}
- **Critical technical issues**: {len([i for i in self.audit_data.get('technical_issues', []) if '❌ **CRITICAL**' in i])}
- **Total SEO opportunities**: {len(self.audit_data.get('keyword_opportunities', []))}
- **Current organic visibility**: {self.audit_data.get('domain_overview', {}).get('organic_keywords', 'Unknown')} keywords ranking

---

## 1. Technical SEO Audit

### 1.1 Critical Issues Requiring Immediate Attention
"""

        # Add critical technical issues
        critical_issues = [issue for issue in self.audit_data.get('technical_issues', []) if '❌ **CRITICAL**' in issue]
        if critical_issues:
            for i, issue in enumerate(critical_issues, 1):
                report += f"{i}. {issue.replace('❌ **CRITICAL**: ', '')}\n"
        else:
            report += "✅ No critical technical issues found!\n"

        # Add warning level issues
        warning_issues = [issue for issue in self.audit_data.get('technical_issues', []) if '⚠️' in issue]
        if warning_issues:
            report += f"\n### 1.2 Recommendations for Improvement\n\n"
            for i, issue in enumerate(warning_issues, 1):
                report += f"{i}. {issue.replace('⚠️ ', '')}\n"

        # Add content analysis
        if 'content_analysis' in self.audit_data:
            content = self.audit_data['content_analysis']
            report += f"""
### 1.3 Content Analysis Summary

| Element | Current Status | Assessment | Recommendation |
|---------|---------------|------------|----------------|
| **Title Tags** | {len(content.get('title_tags', []))} found | {'✅ Good' if len(content.get('title_tags', [])) > 0 else '❌ Missing'} | {'Continue monitoring' if len(content.get('title_tags', [])) > 0 else 'Add title tags to all pages'} |
| **Meta Descriptions** | {len(content.get('meta_descriptions', []))} found | {'✅ Good' if len(content.get('meta_descriptions', [])) > 0 else '❌ Missing'} | {'Ensure all pages have unique descriptions' if len(content.get('meta_descriptions', [])) > 0 else 'Add meta descriptions'} |
| **H1 Tags** | {len(content.get('h1_tags', []))} found | {'✅ Perfect' if len(content.get('h1_tags', [])) == 1 else '⚠️ Multiple H1s' if len(content.get('h1_tags', [])) > 1 else '❌ Missing'} | {'Keep current structure' if len(content.get('h1_tags', [])) == 1 else 'Use only one H1 per page'} |
| **Heading Structure** | {len(content.get('h2_tags', []))} H2s | {'✅ Good structure' if len(content.get('h2_tags', [])) > 0 else '⚠️ Improve structure'} | {'Maintain hierarchy' if len(content.get('h2_tags', [])) > 0 else 'Add H2/H3 subheadings'} |
| **Images Missing Alt** | {content.get('images_without_alt', 0)} images | {'✅ Excellent' if content.get('images_without_alt', 0) == 0 else '❌ Accessibility issue'} | {'Keep it up' if content.get('images_without_alt', 0) == 0 else 'Add alt text to all images'} |
| **Content Length** | {content.get('word_count', 0)} words | {'✅ Substantial' if content.get('word_count', 0) > 800 else '⚠️ Could expand' if content.get('word_count', 0) > 300 else '❌ Thin content'} | {'Consider expanding key pages' if content.get('word_count', 0) < 800 else 'Good content depth'} |

"""

        # Add DataForSEO findings if available
        if 'domain_overview' in self.audit_data:
            domain_data = self.audit_data['domain_overview']
            report += f"""
---

## 2. SEO Performance Analysis

### 2.1 Current Search Visibility
- **Organic Keywords Ranking**: {domain_data.get('organic_keywords', 'Data not available')}
- **Estimated Monthly Organic Traffic**: {domain_data.get('organic_etv', 'Data not available')}
- **Paid Advertising Keywords**: {domain_data.get('paid_keywords', 'Data not available')}
- **Domain Authority Indicators**: {domain_data.get('rank', 'Data not available')}

### 2.2 Performance Assessment
"""
            organic_keywords = domain_data.get('organic_keywords', 0)
            if isinstance(organic_keywords, (int, float)) and organic_keywords > 0:
                if organic_keywords > 100:
                    report += "✅ **Good organic presence** - Website is ranking for a healthy number of keywords\n"
                elif organic_keywords > 20:
                    report += "⚠️ **Moderate visibility** - Room for significant improvement in keyword rankings\n"
                else:
                    report += "❌ **Limited visibility** - Major opportunity to improve search rankings\n"
            else:
                report += "📊 **New/Low visibility** - Website may be new or need significant SEO work\n"

        # Add keyword opportunities
        if 'keyword_opportunities' in self.audit_data and self.audit_data['keyword_opportunities']:
            report += """
### 2.3 Keyword Opportunities Analysis

**Top Target Keywords Identified:**

| Keyword | Est. Monthly Searches | Difficulty (1-100) | Opportunity Level | Priority |
|---------|---------------------|-------------------|------------------|----------|
"""
            for i, keyword in enumerate(self.audit_data['keyword_opportunities'][:10], 1):
                opportunity = keyword.get('opportunity', 'Medium')
                priority = '🔴 High' if i <= 3 else '🟡 Medium' if i <= 6 else '🟢 Low'
                report += f"| {keyword.get('keyword', 'N/A')} | {keyword.get('volume', 'N/A')} | {keyword.get('difficulty', 'N/A')} | {opportunity} | {priority} |\n"

        # Add competitor analysis
        if 'competitors' in self.audit_data and self.audit_data['competitors']:
            report += """
---

## 3. Competitive Landscape Analysis

### 3.1 Main SEO Competitors
"""
            for i, comp in enumerate(self.audit_data['competitors'][:5], 1):
                report += f"{i}. **{comp.get('domain', 'Unknown')}**\n"
                report += f"   - Estimated keywords: {comp.get('keywords', 'Unknown')}\n"
                report += f"   - Domain strength: {comp.get('rank', 'Unknown')}\n"
                report += f"   - Key advantage: {comp.get('description', 'Analysis pending')}\n\n"

            report += """### 3.2 Competitive Gap Analysis

**Key Insights:**
- Monitor these competitors' content strategies
- Identify keywords they rank for that you don't
- Analyze their backlink profiles for link building opportunities
- Study their technical implementations for best practices
"""

        # Add actionable recommendations
        report += f"""
---

## 4. Priority Action Plan

### Phase 1: Critical Fixes (Complete in 1-2 weeks)
"""

        phase1_tasks = []
        critical_count = len([i for i in self.audit_data.get('technical_issues', []) if '❌ **CRITICAL**' in i])

        if critical_count > 0:
            phase1_tasks.extend([
                "Fix all critical technical issues identified above",
                "Add missing title tags and meta descriptions",
                "Implement basic schema markup (Organization, LocalBusiness)"
            ])
        else:
            phase1_tasks.extend([
                "Audit and optimize existing meta descriptions",
                "Add comprehensive schema markup",
                "Implement canonical tags site-wide"
            ])

        for i, task in enumerate(phase1_tasks, 1):
            report += f"{i}. {task}\n"

        report += """
### Phase 2: Content & Keyword Strategy (Complete in 1-2 months)
1. Create content targeting the top 5 keyword opportunities identified
2. Optimize existing pages for target keywords
3. Develop a content calendar based on keyword research
4. Implement internal linking strategy
5. Create location-specific landing pages (if applicable)

### Phase 3: Authority Building (Ongoing, 2-6 months)
1. Develop linkable assets (guides, tools, resources)
2. Implement structured outreach for backlinks
3. Monitor and respond to brand mentions
4. Create shareable content for social amplification
5. Track and iterate based on performance data

---

## 5. Tracking & Measurement

### Key Metrics to Monitor:
- **Google Search Console**: Track impressions, clicks, average position
- **Keyword Rankings**: Monitor positions for target keywords
- **Organic Traffic**: Monthly growth in organic sessions
- **Technical Health**: Regular crawls for technical issues
- **Competitor Performance**: Track competitor keyword gains/losses

### Recommended Tools:
- Google Search Console (free)
- Google Analytics (free)
- Search Console insights
- Regular technical SEO audits (quarterly)

---

## 6. Expected Timeline & Results

### Month 1:
- Technical fixes implemented
- Basic schema markup added
- Meta tags optimized

### Month 2-3:
- New content published for target keywords
- Internal linking improved
- Local SEO optimized (if applicable)

### Month 4-6:
- Measurable improvements in keyword rankings
- Increased organic traffic
- Improved search visibility

### Expected Outcomes:
- **Short term (1-3 months)**: Fix technical issues, improve search visibility
- **Medium term (3-6 months)**: Rank for target keywords, increase organic traffic
- **Long term (6-12 months)**: Establish domain authority, sustained traffic growth

---

## Next Steps

**Immediate Actions:**
1. Review and prioritize the critical issues identified
2. Plan technical fixes with your development team
3. Begin content creation for top keyword opportunities

**Need Help?**
This audit provides a comprehensive roadmap, but implementation can be complex. Consider working with an SEO specialist for:
- Technical fix implementation
- Content strategy development
- Link building campaigns
- Ongoing performance monitoring

---

*Report generated on {datetime.now().strftime('%Y-%m-%d at %H:%M:%S')} using DataForSEO intelligence + Firecrawl analysis*

**Audit Tools Used:**
- DataForSEO Keyword Research & Competitor Intelligence
- Firecrawl Website Structure Analysis
- Technical SEO Assessment
- Content Gap Analysis

**Questions about this report?**
Each recommendation in this audit is actionable and prioritized by impact. Focus on Phase 1 critical fixes first, then build toward the longer-term strategy.
"""

        return report

def main():
    parser = argparse.ArgumentParser(description='Generate automated website SEO audit')
    parser.add_argument('website_url', help='Website URL to audit (e.g., https://example.com.au)')
    parser.add_argument('--location_code', default='2036', help='DataForSEO location code (default: 2036 for Australia)')

    args = parser.parse_args()

    # Validate URL
    if not (args.website_url.startswith('http://') or args.website_url.startswith('https://')):
        print(f"❌ Error: URL must start with http:// or https://")
        sys.exit(1)

    # Create audit generator
    audit_generator = WebsiteAuditGenerator(
        website_url=args.website_url,
        location_code=args.location_code
    )

    print(f"🔍 Starting comprehensive SEO audit for: {args.website_url}")
    print(f"🌍 Location targeting: {args.location_code} (Australia)")
    print(f"📊 Analysis includes: DataForSEO + Firecrawl + Technical SEO")
    print("-" * 70)

    # This script provides the framework - MCP integration happens in next step
    print("⚙️  AUDIT FRAMEWORK READY")
    print("📋 Next steps:")
    print("   1. Integrate Firecrawl for website content analysis")
    print("   2. Connect DataForSEO MCP for keyword & competitor data")
    print("   3. Run comprehensive technical SEO checks")
    print("   4. Generate detailed audit report")
    print("   5. Save report for manual review and delivery")
    print()
    print("🎯 This will generate reports similar to 'yourtradepartner-seo-audit.md'")
    print("   but fully automated using MCP tools")

if __name__ == "__main__":
    main()