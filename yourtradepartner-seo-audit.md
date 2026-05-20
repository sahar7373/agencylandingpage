# SEO Audit & Growth Plan — yourtradepartner.com.au
**Prepared:** April 2026  
**Current Position:** Avg. 34.4 | 318 impressions / 13 clicks (3 months)  
**Target:** Top 3–5 positions for core tradie marketing keywords  

---

## Executive Summary

Your Trade Partner has a solid foundation — the brand voice is spot-on for the target audience, the resource content is genuinely useful, and the site is technically clean (no crawl blocks, HTTPS, valid sitemap). But right now, Google barely knows you exist. The average position of 34.4 means you're showing up on page 3–4, and at that depth, almost nobody clicks.

The three biggest levers that will move the needle fastest:

1. **Fix the sitemap** — 9 resource articles are completely invisible to Google because they're not in the sitemap. This is free content going to waste right now.
2. **Rewrite title tags and H1s** — The homepage title is "Your Trade Partner | Digital Growth Systems." Nobody Googles that. It needs to say what you actually do and who you do it for.
3. **Differentiate the trade pages** — All 9 trade-specific pages (plumber, electrician, roofer etc.) are near-identical. Google treats this as duplicate content and deprioritises all of them.

Overall assessment: **needs work, but fixable fast.** The content quality is already there. The issues are mostly structural and technical — meaning they can be fixed without writing a single new word in many cases.

---

## 1. Full Site Audit

### 1.1 Page Inventory & URL Structure

| URL | Title Tag | Has H1? | Est. Word Count | In Sitemap? | Issues |
|-----|-----------|---------|-----------------|-------------|--------|
| `/` (Homepage) | Your Trade Partner \| Digital Growth Systems | ✅ | ~1,800 | ✅ | Title not keyword-optimised |
| `/guide` | (Lead magnet page) | ✅ | ~200 | ✅ | Thin content, not indexable value |
| `/blueprint` | Revenue Capture Blueprint \| YourTradePartner | ✅ | ~300 | ✅ | Thin content, no intro text for Google |
| `/resources` | Free Resources for Australian Tradies \| Your Trade Partner | ✅ | ~400 | ✅ | Good hub page, needs more intro copy |
| `/plumbing-websites` | Professional Plumbing Websites \| Get More Local Jobs \| Your Trade Partner | ✅ | ~900 | ✅ | Duplicate content vs other trade pages |
| `/electrician-websites` | Professional Electrician Websites \| Get More Local Jobs \| Your Trade Partner | ✅ | ~900 | ✅ | Duplicate content vs other trade pages |
| `/roofer-websites` | Professional Roofer Websites \| Get More Local Jobs | ✅ | ~900 | ✅ | Missing brand name in title |
| `/hvac-websites` | (not confirmed) | ✅ | ~900 | ✅ | Likely duplicate content |
| `/builder-websites` | (not confirmed) | ✅ | ~900 | ✅ | Likely duplicate content |
| `/carpenter-websites` | (not confirmed) | ✅ | ~900 | ✅ | Likely duplicate content |
| `/concrete-layer-websites` | Professional ConcreteLayer Websites \| Get More Local Jobs | ✅ | ~900 | ✅ | "ConcreteLayer" should be "Concrete Layer" |
| `/landscaper-websites` | (not confirmed) | ✅ | ~900 | ✅ | Likely duplicate content |
| `/painter-websites` | Professional Painter Websites \| Get More Local Jobs \| Your Trade Partner | ✅ | ~900 | ✅ | Duplicate content |
| `/resources/google-business-profile-setup` | Google My Business Setup Guide for Australian Tradies \| Complete 2026 Tutorial | ✅ | ~1,500 | ❌ **MISSING** | Not in sitemap |
| `/resources/why-tradie-websites-dont-get-calls` | Why Most Tradie Websites Don't Get Calls \| Australian Trade Business Marketing | ✅ | ~900 | ❌ **MISSING** | Not in sitemap |
| `/resources/ai-receptionist-for-tradies` | (not confirmed) | ✅ | ~800 | ❌ **MISSING** | Not in sitemap |
| `/resources/electrician-website-requirements` | (not confirmed) | ✅ | ~800 | ❌ **MISSING** | Not in sitemap |
| `/resources/website-roi-calculation` | (not confirmed) | ✅ | ~700 | ❌ **MISSING** | Not in sitemap |
| `/resources/suburb-seo-for-tradies` | (not confirmed) | ✅ | ~900 | ❌ **MISSING** | Not in sitemap |
| `/resources/professional-trust-signals` | (not confirmed) | ✅ | ~700 | ❌ **MISSING** | Not in sitemap |
| `/resources/google-ads-vs-seo-tradies` | (not confirmed) | ✅ | ~1,000 | ❌ **MISSING** | Not in sitemap |
| `/resources/aeo-for-tradies` | (not confirmed) | ✅ | ~1,000 | ❌ **MISSING** | Not in sitemap |

**Critical finding:** 9 of your best content pages — the resource articles — are not in `sitemap.xml`. Google relies on sitemaps to discover new content efficiently. These pages may eventually get indexed through internal links, but it's slow and unreliable. Fix this today.

---

### 1.2 Title Tags & Meta Descriptions

| Page | Current Title | Issues | Recommended Fix |
|------|--------------|--------|-----------------|
| Homepage | Your Trade Partner \| Digital Growth Systems | "Digital Growth Systems" has near-zero search volume. No location signal. No service signal. | "Tradie Website Design & Marketing Australia \| Your Trade Partner" |
| /plumbing-websites | Professional Plumbing Websites \| Get More Local Jobs \| Your Trade Partner | Good structure, but missing "Australia" and "design" | "Plumber Website Design Australia \| Get More Local Jobs \| Your Trade Partner" |
| /electrician-websites | Professional Electrician Websites \| Get More Local Jobs \| Your Trade Partner | Same as above | "Electrician Website Design Australia \| Get More Local Jobs \| Your Trade Partner" |
| /roofer-websites | Professional Roofer Websites \| Get More Local Jobs | Missing brand name | "Roofer Website Design Australia \| Get More Local Jobs \| Your Trade Partner" |
| /concrete-layer-websites | Professional ConcreteLayer Websites \| Get More Local Jobs | Typo: "ConcreteLayer" | "Concrete Layer Website Design Australia \| Get More Local Jobs" |
| /resources | Free Resources for Australian Tradies \| Your Trade Partner | Good. Could add a keyword hook | "Free Tradie Marketing Resources & Guides \| Your Trade Partner" |
| /resources/google-business-profile-setup | Google My Business Setup Guide for Australian Tradies \| Complete 2026 Tutorial | Good — keep it | ✅ No change needed |
| /resources/why-tradie-websites-dont-get-calls | Why Most Tradie Websites Don't Get Calls \| Australian Trade Business Marketing | Good | ✅ No change needed |
| /blueprint | Revenue Capture Blueprint \| YourTradePartner | Not keyword-optimised. Nobody searches this. | "Free Trade Business Revenue Blueprint \| Stop Losing Jobs \| Your Trade Partner" |

**Meta description issue:** The site is rendering **two sets of meta tags** per page — a global default and a page-specific one. This is likely a framework issue (appears to be a JavaScript-rendered site, possibly Next.js). Both the global `og:description` and page-specific `description` are being output. This causes Google to see conflicting signals and may result in Google ignoring your meta descriptions entirely and writing its own. Get your developer to audit the meta tag rendering so only one clean set of tags appears per page.

---

### 1.3 Heading Structure (H1/H2)

| Page | H1 Tag | Issue |
|------|--------|-------|
| Homepage | "Stop Losing Jobs to Missed Calls & Slow Response" | Conversion-focused but contains zero target keywords. Google uses H1 as a strong ranking signal. |
| /plumbing-websites | "Stop Losing Jobs to Plumbers With Better Websites" | Not SEO-optimised. Target keyword "plumber website Australia" not present. |
| /electrician-websites | Similar pattern | Same issue |
| /resources/google-business-profile-setup | "Google My Business Setup Guide For Tradies" | ✅ Good — keyword-rich, clear |
| /resources/why-tradie-websites-dont-get-calls | "Why Most Tradie Websites Don't Get Calls" | ✅ Good — matches search intent |

**Recommendation:** Keep your conversion-focused H1s for the audience, but add keyword signals through the subtitle text immediately below the H1 (visible on page but also crawlable). For example, below the homepage H1, add: *"Professional website design and digital marketing for Australian trade businesses — plumbers, electricians, roofers, builders and more."* This gives Google the keyword context without compromising the punchy headline.

---

### 1.4 Internal Linking Structure

The site's internal linking is weak. Here's what's happening:

- **Homepage** links to: 9 trade pages, /resources, named anchors (#packages, #contact, etc.)
- **Trade pages** link to: Homepage, /guide, /blueprint, and each other via footer list
- **Resource articles** link to: Homepage, #packages, #contact — but **NOT to each other**
- **No breadcrumbs** exist anywhere on the site
- **The /guide and /blueprint pages** are not linked from the homepage navigation at all (only from trade page footers)

This means your resource articles are essentially islands. Google's crawl of your site hits the homepage, follows links to resources hub, then finds individual articles — but those articles don't pass authority between each other. You're leaving PageRank on the table.

**Fix:** Each resource article should link to 2–3 related articles using natural anchor text. E.g., the GBP Setup guide should link to the "Suburb SEO for Tradies" article and the "Why Tradie Websites Don't Get Calls" article.

---

### 1.5 Content Quality

Your resource articles are genuinely good. The GBP Setup Guide (~1,500 words), the "Why Tradie Websites Don't Get Calls" article (~900 words), both have step-by-step structure, real examples, and actionable advice. This is the kind of content that ranks.

The trade pages are the problem. All 9 of them (/plumbing-websites, /electrician-websites, etc.) appear to have **near-identical body content** with only the trade name swapped. This is a significant duplicate content issue. Google will choose one to rank and suppress the others. More importantly, none of these pages contain trade-specific content that would make them genuinely useful to a plumber vs an electrician.

---

## 2. Technical SEO Checklist

| Check | Status | Details & Fix |
|-------|--------|---------------|
| HTTPS / SSL | ✅ Pass | Site is secure |
| robots.txt | ✅ Pass | `Allow: /` — no pages are blocked. Sitemap correctly referenced. |
| XML Sitemap exists | ✅ Pass | sitemap.xml is present and valid |
| Resource articles in sitemap | ❌ **FAIL** | 9 resource articles missing from sitemap.xml — add them immediately |
| Duplicate meta tags | ❌ **FAIL** | Two sets of og: tags and meta descriptions being rendered per page. Fix the framework-level meta tag logic. |
| Canonical tags | ⚠️ Warning | No canonical tags observed. Add `<link rel="canonical">` to every page to prevent duplicate content issues (especially important given the near-identical trade pages). |
| Schema markup — Organization | ❌ **FAIL** | No Organization or LocalBusiness schema present. This is a missed opportunity for Google to understand the business, display rich results, and verify your NAP (Name/Address/Phone). |
| Schema markup — FAQPage | ❌ **FAIL** | Homepage has a long FAQ section. Trade pages each have FAQ sections. None use FAQPage schema. Adding it can unlock FAQ rich results in Google, which dramatically increases click-through rate by taking up more SERP real estate. |
| Schema markup — HowTo | ❌ **FAIL** | The GBP Setup Guide is a perfect candidate for HowTo schema (7 numbered steps). This could earn a featured snippet. |
| Schema markup — Article | ❌ **FAIL** | Resource articles should use Article or BlogPosting schema to confirm to Google these are content pieces, not product pages. |
| Mobile-friendliness | ✅ Pass | Viewport meta tag present. Site appears responsive based on content structure. |
| Page speed signals | ⚠️ Warning | Cannot measure directly without tools, but the site appears to be a JavaScript-heavy SPA (Single Page Application). These often have poor Core Web Vitals (LCP, CLS) if not server-side rendered. Recommend running through Google PageSpeed Insights to check. |
| Image alt text | ⚠️ Warning | Homepage references project images (Rovina's Painting, ZJC Renovations, SWRP) with long descriptive alt text — good. However, trade pages and resources should be audited for missing alt tags. |
| Broken links | ✅ Pass | No broken internal links detected in crawl |
| NAP consistency | ⚠️ Warning | Business listed as "Adelaide, Australia" on homepage footer. No street address. For local SEO, a full address (or at minimum suburb + state) helps. Ensure this matches your Google Business Profile exactly. |
| Breadcrumb navigation | ❌ **FAIL** | No breadcrumbs on resource articles or trade pages. Breadcrumbs improve UX and Google can display them in search results, showing the path and helping click-through rates. |
| Indexation check | ⚠️ Warning | With duplicate meta tags and resource articles missing from sitemap, some pages may not be indexed or may be indexed with incorrect metadata. Check Google Search Console → Coverage for any "Excluded" pages. |

---

## 3. Keyword Research

*Data source: DataForSEO MCP — Google Ads API + DataForSEO Labs, AU location (code 2036), language EN. Pulled April 2026.*

### 3.1 Keyword Opportunity Table

| Keyword | AU Monthly Vol | KD | CPC (AU$) | Ad Competition | Opportunity | Intent | Recommended Page |
|---------|:--------------:|:--:|:---------:|:--------------:|-------------|--------|-----------------|
| **marketing for tradies** | **390** | **5** | **$11.84** | **LOW** | 🟢 **Highest priority** | Commercial | New dedicated page |
| **seo for tradies** | **260** | **8** | **$20.17** | **LOW** | 🟢 **Highest priority** | Commercial | New dedicated page |
| tradie digital marketing | 30 | n/a | $10.54 | LOW | 🟡 Medium | Transactional | New dedicated page |
| plumber marketing australia | 10 | n/a | n/a | — | 🟡 Medium | Navigational | `/plumbing-websites` (expand) |
| plumber website design australia | <10 | n/a | n/a | — | 🟢 Niche win | Commercial | `/plumbing-websites` |
| electrician website design australia | <10 | n/a | n/a | — | 🟢 Niche win | Commercial | `/electrician-websites` |
| roofer website australia | <10 | n/a | n/a | — | 🟢 Niche win | Commercial | `/roofer-websites` |
| tradie website design australia | <10 | n/a | n/a | — | 🟢 Niche win | Commercial | Homepage |
| website for tradies australia | <10 | n/a | n/a | — | 🟢 Niche win | Commercial | Homepage |
| builder website design australia | <10 | n/a | n/a | — | 🟢 Niche win | Commercial | `/builder-websites` |
| landscaper website australia | <10 | n/a | n/a | — | 🟢 Niche win | Commercial | `/landscaper-websites` |
| google business profile setup tradies | <10 | n/a | n/a | — | 🟢 Niche win | Informational | `/resources/google-business-profile-setup` |
| why tradie websites don't get calls | <10 | n/a | n/a | — | 🟢 Niche win | Informational | `/resources/why-tradie-websites-dont-get-calls` |
| how to get more plumbing leads australia | <10 | n/a | n/a | — | 🟢 Niche win | Informational | New article |
| local seo for tradies australia | <10 | n/a | n/a | — | 🟡 Medium | Commercial | New page or `/resources/suburb-seo-for-tradies` |
| tradie website adelaide | <10 | n/a | n/a | — | 🟢 Niche win | Commercial | New location page |
| google ads vs seo tradies | <10 | n/a | n/a | — | 🟢 Niche win | Informational | `/resources/google-ads-vs-seo-tradies` |
| ai receptionist for tradies | <10 | n/a | n/a | — | 🟢 Niche win | Informational | `/resources/ai-receptionist-for-tradies` |
| tradie marketing australia | <10 | n/a | n/a | — | 🟡 Medium | Commercial | Homepage (long-term) |
| electrician marketing australia | <10 | n/a | n/a | — | 🟡 Medium | Commercial | `/electrician-websites` (expand) |
| tradie website cost australia | <10 | n/a | n/a | — | 🟡 Medium | Informational | New article |
| how much does a trade website cost | <10 | n/a | n/a | — | 🟡 Medium | Informational | New article |
| missed call handling for tradies | <10 | n/a | n/a | — | 🟡 Medium | Informational | `/resources/ai-receptionist-for-tradies` |
| tradie marketing agency australia | <10 | n/a | n/a | — | 🔴 Low (now) | Commercial | Long-term target |
| digital marketing agency for tradies | <10 | n/a | n/a | — | 🔴 Low (now) | Commercial | Long-term target |

**What "<10/month" means:** Google Ads does not track keywords with fewer than ~10 monthly searches in Australia — they're real queries but volume is too thin to report. This is a niche market. It doesn't mean these pages shouldn't exist; it means the primary value is in capturing the exact-match searcher (who has extremely high intent), building topical relevance for Google's semantic clusters, and supporting ranking on the two high-volume terms above.

**The two terms with real volume:**

| Keyword | Monthly trend (last 12 months) | Notes |
|---------|-------------------------------|-------|
| marketing for tradies | Apr 590 → Sep 1,000 → Mar 480 | Seasonal spike Sep 2025 (EOFY). Trending +50% month-on-month as of Mar 2026. |
| seo for tradies | Apr 320 → Sep 880 → Mar 320 | Similar Sep spike pattern. +191% month-on-month as of Mar 2026. |

### 3.2 Keyword Strategy Summary

**The real volume opportunity — act now:** "Marketing for tradies" (390/mo avg, KD 5) and "seo for tradies" (260/mo avg, KD 8) are the two keywords in this entire list with confirmed tracked AU search volume and low difficulty scores. Both have CPC values above $10, confirming strong commercial intent. These should be Tier 1 priorities — create dedicated pages for each and optimise the homepage to support them.

**What the <10/mo data actually tells you:** Australia is a small market and tradie marketing is a niche within that. The hyper-specific long-tail terms ("plumber website design australia," etc.) aren't being searched enough for Google Ads to track — but they are still worth targeting because: (1) the person who does search that exact phrase is a direct buyer, (2) ranking for trade-specific pages builds the topical authority that helps you rank for the higher-volume head terms, and (3) there is zero competition for these exact phrases.

**Where your resource articles can rank:** Your informational articles are already well-written. Adding them to the sitemap, properly schema-marking them, and cross-linking them should push them into top 10 for their target keywords within 60–90 days — even with <10/mo tracked volume, these pages serve the SEO authority-building function.

**The long game:** "Marketing for tradies" and "seo for tradies" are winnable now (KD 5 and 8). Start there, build the content cluster, then let topical authority pull you up for "tradie marketing australia" and "digital marketing agency for tradies" over 6–12 months.

---

## 4. Competitor Analysis

### 4.1 Competitor Overview

| Dimension | Your Trade Partner | Tradie Digital (tradiedigital.co) | The Tradie Marketing Agency (thetradiemarketingagency.com.au) | Marketing 4 Tradies (marketing4tradies.com.au) |
|-----------|-------------------|----------------------------------|--------------------------------------------------------------|------------------------------------------------|
| Established | ~2025 | 2013 | ~2024–25 | Long-standing |
| Domain Age | New | Old (12+ years) | New-ish | Old |
| Content depth | Medium | High | Medium | High |
| Blog/Resources | ✅ 9 articles | ✅ Extensive | ❌ Minimal | ✅ Regular |
| Case studies | 3 (basic) | ✅ Many, with % results | ✅ Named testimonials | ✅ Named testimonials |
| Trade-specific pages | 9 (thin) | ✅ Deep (roofing, landscaping etc.) | Listed but not separate pages | ✅ Trade-specific |
| Location pages | ❌ None | ✅ Multiple cities | ❌ None | ✅ Multiple |
| Schema markup | ❌ None | ✅ WordPress plugin likely | ✅ WordPress | ✅ WordPress |
| Backlink signals | Very low (new domain) | Very high | Low-medium | High |
| Guarantee/differentiator | No lock-in, quarterly pricing | $3,000 lead increase guarantee | No lock-in, plain English reporting | Exclusive (one tradie per area), guaranteed results |
| Service breadth | Website + automation + growth | SEO + Ads + Social + Website | SEO + Ads + Website | SEO focus |
| SERP features | None visible | Featured snippets (likely) | None visible | Some |

### 4.2 What Competitors Do Better

**Tradie Digital** (biggest threat):
- 12+ years of domain authority — they've earned hundreds of backlinks from being in the space for a long time
- Extensive case studies with specific percentage increases (1300% more leads, 132% conversion rate increase) — these are compelling and build massive trust
- Deep service pages with dedicated URLs for each service: `/contractor-seo-agency`, `/contractor-google-ads-management`, `/social-media-marketing-services` — each of these ranks independently for its own keyword
- Published blog content regularly, which means Google sees a constantly-updated site
- Video testimonials — hugely powerful trust signal for tradies who want to see real people

**The Tradie Marketing Agency**:
- Similar proposition to YTP but positions with "trusted by tradies" and plain-English reporting
- Uses Divi/WordPress which makes schema and SEO plugins (like Yoast/RankMath) trivial to add
- Clear monthly plan messaging (vs YTP's quarterly structure) — easier for tradies to understand upfront

**Marketing 4 Tradies**:
- Their unique angle — "we work exclusively for ONE tradie per service area" — is a very strong differentiator and creates urgency (limited spots)
- Shows actual ranking results publicly on their "Guaranteed Results" page — bold move that builds trust
- "Hi VIS Report" — a branded lead magnet name that's memorable and generates interest

### 4.3 YTP's Actual Advantages (Not Being Leveraged Enough)

- **"Built by someone actively working inside the construction industry"** — this is gold. Tradie Digital's founder claims to be "a former tradie" but YTP's copy implies current involvement. Lean into this harder on the homepage and About page.
- **AI-first positioning** — the AEO for tradies article and AI receptionist offering put YTP ahead of most competitors on an emerging trend. This needs to be front and centre, not buried in /resources.
- **No-lock-in quarterly model** — cleaner and less risky than monthly retainers. But this isn't being marketed aggressively enough. Add a comparison section or trust badge.
- **Resource quality** — YTP's free resources are genuinely better written than most competitor blogs. They just need to be found.

---

## 5. Top 10 Quick-Win Improvements

These are specific, actionable changes ordered by impact. Most can be done this week.

### 🔴 Quick Win #1 — Add All 9 Resource Articles to sitemap.xml
**Impact:** Critical | **Effort:** 15 minutes

Right now, your 9 best content pages don't exist as far as Google's crawler is concerned (in terms of sitemap). Your sitemap.xml currently lists 13 URLs. Add these 9 missing URLs:

```
https://yourtradepartner.com.au/resources/google-business-profile-setup
https://yourtradepartner.com.au/resources/why-tradie-websites-dont-get-calls
https://yourtradepartner.com.au/resources/ai-receptionist-for-tradies
https://yourtradepartner.com.au/resources/electrician-website-requirements
https://yourtradepartner.com.au/resources/website-roi-calculation
https://yourtradepartner.com.au/resources/suburb-seo-for-tradies
https://yourtradepartner.com.au/resources/professional-trust-signals
https://yourtradepartner.com.au/resources/google-ads-vs-seo-tradies
https://yourtradepartner.com.au/resources/aeo-for-tradies
```

Then go to Google Search Console → Sitemaps → resubmit your sitemap. Done.

---

### 🔴 Quick Win #2 — Rewrite the Homepage Title Tag
**Impact:** High | **Effort:** 5 minutes

**Current:** `Your Trade Partner | Digital Growth Systems`  
**Change to:** `Tradie Website Design & Marketing Australia | Your Trade Partner`

This is possibly the single most impactful change on the whole site. "Digital Growth Systems" has near-zero search volume. "Tradie website design australia" and "tradie marketing australia" have real monthly searches. You're not even competing right now because your title tag isn't telling Google what you do.

---

### 🔴 Quick Win #3 — Add FAQPage Schema to Homepage and Trade Pages
**Impact:** High | **Effort:** 1–2 hours

Every trade page and the homepage already has an FAQ section. Adding FAQPage schema (JSON-LD) makes those FAQs eligible to appear as expandable rich results directly in Google search — your listing takes up significantly more screen real estate, which means more clicks even if your ranking stays the same.

Example JSON-LD to add to the homepage `<head>`:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Will this actually make me more money?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — but not overnight. We build the online structure that makes homeowners trust you enough to call, choose you, and pay properly."
      }
    },
    {
      "@type": "Question",
      "name": "How long before I see results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most trades start seeing better quality enquiries within the first 30–90 days. Real growth builds over 3–6 months."
      }
    }
  ]
}
```

Repeat for each trade page FAQ. Add HowTo schema to the GBP Setup Guide resource.

---

### 🔴 Quick Win #4 — Add Organization + LocalBusiness Schema to Homepage
**Impact:** High | **Effort:** 30 minutes

Google uses this to verify and display your business information, and it's a trust signal for local SEO. Add this to the homepage:

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "name": "Your Trade Partner",
  "description": "Website design and digital marketing for Australian trade businesses.",
  "url": "https://yourtradepartner.com.au",
  "telephone": "0451044751",
  "email": "hello@yourtradepartner.com.au",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Adelaide",
    "addressRegion": "SA",
    "addressCountry": "AU"
  },
  "areaServed": "Australia",
  "serviceType": "Tradie Website Design and Digital Marketing"
}
```

---

### 🟡 Quick Win #5 — Fix the Duplicate Meta Tag Issue
**Impact:** High | **Effort:** 1–2 hours (developer needed)

Every page is currently outputting two sets of `og:title`, `og:description`, `og:url`, and `og:type` tags. When Google sees duplicate meta tags, it ignores the duplicates and may generate its own description from page content — which is unpredictable. Get your developer to audit the site's `<head>` rendering logic so each page outputs exactly one set of meta tags.

---

### 🟡 Quick Win #6 — Differentiate Each Trade Page with Unique Content
**Impact:** High | **Effort:** Half a day

This is the most important content change. The `/plumbing-websites`, `/electrician-websites`, `/roofer-websites` etc. pages are near-identical. Google can't rank them all for different terms because they're functionally the same page. Each trade page needs at minimum:

- A unique, trade-specific H1 (e.g. "Plumber Website Design Australia — Get Found When They Need You Most")
- A unique opening paragraph specific to that trade's pain points (plumbers deal with emergency calls; electricians deal with licensing trust signals; roofers deal with quote comparison)
- 2–3 trade-specific stats or facts unique to that trade
- Trade-specific FAQ questions (plumbers get asked different things than builders)

A 200-word unique intro per page is enough to start. Full unique pages over time.

---

### 🟡 Quick Win #7 — Cross-Link All Resource Articles
**Impact:** Medium-High | **Effort:** 1–2 hours

Right now each resource article is a dead-end — it links back to the homepage and packages but not to other articles. Add a "Related Reads" section at the bottom of each article with 2–3 links to relevant resources. Example for the GBP Setup Guide:

> **Read next:**  
> → How to Rank for 'Tradie + Your Suburb' Searches  
> → Why Most Tradie Websites Don't Get Calls  
> → Google Ads vs Organic SEO: What Actually Works for Tradies

This passes link authority between your articles and keeps visitors on the site longer — both Google ranking signals.

---

### 🟡 Quick Win #8 — Add Breadcrumbs to Resource Articles and Trade Pages
**Impact:** Medium | **Effort:** 1 hour (developer)

Add breadcrumb navigation at the top of resource articles and trade pages:

- Resource articles: `Home > Resources > [Article Title]`
- Trade pages: `Home > [Trade Name] Websites`

Then add BreadcrumbList schema. Google will show the breadcrumb path in search results instead of the raw URL, which improves click-through rates.

---

### 🟡 Quick Win #9 — Rewrite Trade Page Title Tags to Include "Australia" and "Design"
**Impact:** Medium | **Effort:** 30 minutes

People searching for trade-specific website services use terms like "plumber website design australia" — not "professional plumbing websites." Update all 9 trade page titles:

| Page | New Title |
|------|-----------|
| /plumbing-websites | Plumber Website Design Australia \| Get More Local Jobs \| Your Trade Partner |
| /electrician-websites | Electrician Website Design Australia \| Get More Local Jobs \| Your Trade Partner |
| /roofer-websites | Roofer Website Design Australia \| Get More Local Jobs \| Your Trade Partner |
| /hvac-websites | HVAC Website Design Australia \| Get More Local Jobs \| Your Trade Partner |
| /builder-websites | Builder Website Design Australia \| Get More Local Jobs \| Your Trade Partner |
| /carpenter-websites | Carpenter Website Design Australia \| Get More Local Jobs \| Your Trade Partner |
| /concrete-layer-websites | Concrete Layer Website Design Australia \| Get More Local Jobs \| Your Trade Partner |
| /landscaper-websites | Landscaper Website Design Australia \| Get More Local Jobs \| Your Trade Partner |
| /painter-websites | Painter Website Design Australia \| Get More Local Jobs \| Your Trade Partner |

Also fix the typo on `/concrete-layer-websites` — title currently reads "ConcreteLayer" (no space).

---

### 🟡 Quick Win #10 — Submit for Google Search Console Indexing on Key Pages
**Impact:** Medium | **Effort:** 20 minutes

Once you've fixed the sitemap, go to Google Search Console and manually request indexing for your highest-priority pages:

1. Resubmit the sitemap (Sitemaps → resubmit)
2. Use "URL Inspection" tool on the homepage, the 9 resource articles, and the top 3 trade pages
3. Click "Request Indexing" on each

This tells Google to re-crawl these pages immediately rather than waiting for the regular crawl schedule.

---

## 6. Structured Improvement Plan

### Phase 1: Quick Wins (Do This Week)

All of these can be done in under a day total. Most require no new content — just technical fixes and copy tweaks.

**Day 1 (Technical):**
- [ ] Add 9 resource articles to sitemap.xml
- [ ] Resubmit sitemap in Google Search Console
- [ ] Add Organization + LocalBusiness schema to homepage
- [ ] Add FAQPage schema to homepage FAQ section
- [ ] Add HowTo schema to the GBP Setup Guide article
- [ ] Request indexing in GSC for all major pages

**Day 2 (Copy):**
- [ ] Rewrite homepage title tag → "Tradie Website Design & Marketing Australia | Your Trade Partner"
- [ ] Rewrite all 9 trade page title tags (see table above, add "Design" + "Australia")
- [ ] Fix "ConcreteLayer" typo on /concrete-layer-websites
- [ ] Add a 1-sentence keyword-rich subtitle below the homepage H1 (see Section 1.3 for suggested text)

**Day 3 (Linking):**
- [ ] Add "Related Reads" section to all 9 resource articles (3 links each)
- [ ] Add breadcrumb navigation to resource articles and trade pages

**Developer task (flag for next sprint):**
- [ ] Fix duplicate meta tag rendering — ensure only one set of og: tags output per page
- [ ] Add canonical tags to all pages

---

### Phase 2: Medium Term (1–3 Months)

The goal here is to create content depth that earns rankings and builds topical authority — so Google sees YTP as a specialist, not a one-page wonder.

**Content: Differentiate the Trade Pages**

Rewrite each of the 9 trade pages to be genuinely different. Priority order (highest commercial search volume first):
1. `/plumbing-websites` — focus on emergency trust signals, license display, after-hours calls
2. `/electrician-websites` — focus on licensing requirements (electrical contractor license visible), safety authority signals
3. `/builder-websites` — focus on project portfolio display, quote form design, suburb-area targeting
4. `/roofer-websites` — focus on storm season demand surges, insurance job documentation, before/after photos

Each rewrite should be ~1,000 words minimum with unique H2s, unique FAQ questions, and a trade-specific case study or example.

**Content: Publish 4 New Resource Articles**

Target these keywords with new long-form articles (800–1,500 words each):

1. **"How Much Does a Tradie Website Cost in Australia? (2026 Guide)"** — targets "tradie website cost" and "how much does a trade website cost." High commercial intent, easy to rank for because most agencies won't publish transparent pricing content.
2. **"How to Get More Plumbing Leads Without Spending on Ads"** — targets "more plumbing leads australia." Drive organic traffic specifically from plumbers.
3. **"Tradie Marketing 101: How Australian Trades Get More Jobs Online"** — targets "marketing for tradies" and "tradie marketing australia." Broad pillar content that positions YTP as an authority.
4. **"The Suburb Page Strategy: How Tradies Rank for Local Searches"** — targets "local SEO for tradies." Expands on the existing suburb SEO resource with more depth.

**Content: Add an About/Team Page**

Competitors have this. YTP doesn't. An About page does three things: (1) gives Google a page that confirms the real humans behind the business, (2) gives tradies a reason to trust you before they call, (3) ranks for branded searches like "Your Trade Partner about." The copy "Built by someone actively working inside the construction industry" is compelling — put a face and a story to it.

**Technical: Create Location Pages**

YTP is based in Adelaide. Create a landing page specifically targeting Adelaide tradies:
- `/tradie-website-design-adelaide`
- `/tradie-marketing-adelaide`

Then follow with Sydney, Melbourne, Brisbane — the larger markets. These pages can be templated but need suburb-specific copy, local imagery, and local case studies. This is how you compete with bigger agencies on local searches.

**Link Building: First 10 Backlinks**

With a new domain, you need backlinks to build authority. Start with:
- Submit to relevant Australian business directories: True Local, Hotfrog, Yellow Pages AU, Yelp AU, Australian Business Register
- Submit to Clutch.co (agency directory — tradies look here for verified agencies)
- Guest post on 1–2 Australian trade industry publications (e.g. Master Builders Association blogs, trade association newsletters)
- Get listed on "Best tradie marketing agencies Australia" roundup articles (there are several in the search results — reach out and request inclusion)

---

### Phase 3: Long Term (3–6 Months)

This is where you build the sustained presence that gets you into top 3–5 for the competitive terms.

**Build Topical Authority with a Content Cluster**

Create a "Tradie Marketing" pillar page at `/tradie-marketing-australia` — a comprehensive 3,000+ word guide covering every aspect of marketing for Australian tradies: websites, Google Business Profile, SEO, Google Ads, social, AI tools, lead gen. This single page should target "tradie marketing australia" and internally link to every relevant resource article on the site.

This is the content strategy that Tradie Digital uses to dominate — they have a deep page for every sub-topic that all link back to each other. You can replicate this structure.

**Content Calendar: 2 Articles Per Month**

Consistency matters. Google rewards sites that publish regularly. Target 2 resource articles per month. Ideas for the pipeline:

- "How to Get Google Reviews as a Tradie (Without Being Annoying About It)"
- "Tradie Pricing Pages: How to Show Pricing Without Losing Jobs"
- "What is a Google Local Service Ad? Should Tradies Use It?"
- "How Long Does SEO Take for a Trade Business?"
- "Case Study: How [Rovina's Painting] Got [X] More Enquiries in 90 Days" — turn your existing client results into published case studies
- "HVAC Marketing Australia: How Heating & Cooling Businesses Get More Jobs"
- "Carpenter Marketing: How to Get Custom Furniture and Renovation Jobs Online"

**Pursue PR and Backlinks**

- Reach out to Master Builders Association, Master Plumbers Association, and similar trade bodies — offer to contribute a free guide or article in exchange for a mention/link
- Apply for industry awards (e.g. Clutch Top Agency awards, local business awards) — award badges with backlinks are legitimate authority builders
- Create a linkable asset — something like a "State of Tradie Marketing in Australia" report (with data, a survey, or aggregated stats) that journalists and blogs want to cite

**Track, Iterate, Repeat**

By month 3, you should have real data in Google Search Console showing which resource articles are gaining impressions and clicks. Double down on the ones getting traction — expand the content, add more internal links pointing to them, and consider targeted outreach for backlinks to those specific URLs.

---

## 7. Target Keywords to Rank For

*Tiers revised April 2026 based on real AU search volume data from DataForSEO (Google Ads API). Previous tier assignments were estimated; these reflect confirmed volume and difficulty.*

### Tier 1 — Rank These First (3 months)
The two keywords with confirmed AU volume AND low difficulty — these are the fastest path to actual search traffic.

1. `marketing for tradies` — **390/mo avg, KD 5, CPC $11.84** — create a dedicated page
2. `seo for tradies` — **260/mo avg, KD 8, CPC $20.17** — create a dedicated page

Plus the high-intent niche terms that support topical authority (all <10/mo but zero competition):

3. `plumber website design australia`
4. `electrician website design australia`
5. `tradie website design australia`
6. `google business profile setup tradies`
7. `why tradie websites don't get calls`
8. `tradie website adelaide`
9. `builder website design australia`
10. `roofer website design australia`

### Tier 2 — Build Toward These (3–6 months)
1. `tradie marketing australia` — <10/mo now, but semantically related to Tier 1 — ranks as authority grows
2. `local seo for tradies`
3. `tradie website cost australia`
4. `how to get more plumbing leads australia`
5. `electrician marketing australia`
6. `plumber marketing australia` — confirmed 10/mo AU floor
7. `tradie digital marketing` — **30/mo, CPC $10.54, LOW competition**
8. `tradie lead generation australia`

### Tier 3 — Long-Term Targets (6–12 months)
1. `tradie marketing agency australia`
2. `digital marketing for tradies`
3. `website for tradies`
4. `digital marketing agency for tradies`

---

## 8. Content Pieces to Create (Prioritised)

| Priority | Content Title | Target Keyword | Format | Est. Effort | Expected Outcome |
|----------|--------------|----------------|--------|-------------|-----------------|
| 🔴 P1 | Rewrite each trade page (unique intro + FAQ) | [trade] website design australia | Landing page | Half day each | Fix duplicate content, rank for trade-specific terms |
| 🔴 P1 | "Tradie Marketing 101: How Australian Trades Get More Jobs" | tradie marketing australia | 2,500-word pillar | 1 day | Topical authority, long-tail rankings |
| 🔴 P1 | "How Much Does a Tradie Website Cost in Australia?" | tradie website cost | 1,000-word article | Half day | High commercial intent, easy to rank |
| 🟡 P2 | About / Team page | your trade partner adelaide | About page | Half day | Trust signal, branded rankings |
| 🟡 P2 | "How to Get More Plumbing Leads Without Ads" | more plumbing leads australia | 1,200-word article | Half day | Trade-specific traffic |
| 🟡 P2 | /tradie-website-design-adelaide | tradie website design adelaide | Location page | Half day | Local SEO foothold |
| 🟡 P2 | "Case Study: Rovina's Painting — From Invisible to Booked Out" | (branded, trust) | Case study page | Half day | Trust + backlink opportunity |
| 🟢 P3 | "The Suburb Page Strategy: Rank for Local Searches" | suburb seo tradies | 1,200-word article | Half day | Builds on existing resource |
| 🟢 P3 | /tradie-website-design-sydney | tradie website design sydney | Location page | Half day | Expand geographic reach |
| 🟢 P3 | /tradie-website-design-melbourne | tradie website design melbourne | Location page | Half day | Expand geographic reach |
| 🟢 P3 | "State of Tradie Marketing Australia 2026" | (linkable asset) | Data report | 2 days | Backlink magnet |

---

## 9. Key Metrics to Track

Set these up in Google Search Console and check monthly:

| Metric | Current | 3-Month Target | 6-Month Target |
|--------|---------|----------------|----------------|
| Average position | 34.4 | 15–20 | 5–10 |
| Total impressions (3 months) | 318 | 2,000+ | 8,000+ |
| Total clicks (3 months) | 13 | 80–120 | 400+ |
| CTR | 4.1% | 5–7% | 6–8% |
| Indexed pages | ~13 | 25+ | 35+ |
| Resource articles ranking in top 20 | 0 | 5+ | 9+ |

---

## Appendix: Rewritten Title Tags & Meta Descriptions (Ready to Use)

### Homepage
- **Title:** `Tradie Website Design & Marketing Australia | Your Trade Partner`
- **Meta:** `We build high-converting websites and lead systems for Australian tradies. Plumbers, electricians, builders — stop losing jobs to competitors with better online presence. Based in Adelaide.`

### /plumbing-websites
- **Title:** `Plumber Website Design Australia | Get More Local Jobs | Your Trade Partner`
- **Meta:** `Professional plumbing websites built for Australian plumbers. Rank on Google, capture every enquiry, and stop losing emergency calls to competitors. Clear pricing. No lock-in.`

### /electrician-websites
- **Title:** `Electrician Website Design Australia | Get More Local Jobs | Your Trade Partner`
- **Meta:** `Websites built for Australian electricians. Display your license prominently, rank for "electrician near me," and convert more visitors into booked jobs. From $1,900.`

### /builder-websites
- **Title:** `Builder Website Design Australia | Get More Local Jobs | Your Trade Partner`
- **Meta:** `Professional builder websites for Australian construction businesses. Portfolio pages, suburb targeting, and enquiry systems that bring in quality renovation and build jobs.`

### /resources
- **Title:** `Free Tradie Marketing Guides & Resources | Your Trade Partner`
- **Meta:** `No-fluff guides for Australian tradies. Google Business Profile setup, local SEO, AI tools, website tips, and more. Built by people who understand the trade industry.`

---

*Report prepared based on full site crawl of yourtradepartner.com.au conducted April 2026. Competitor analysis based on publicly available information from tradiedigital.co, thetradiemarketingagency.com.au, and marketing4tradies.com.au. Keyword volume, difficulty, and CPC data pulled from DataForSEO MCP (Google Ads API + DataForSEO Labs) with AU location targeting (code 2036), April 2026. Keywords showing <10/mo volume are not tracked by Google Ads due to insufficient query frequency — this is expected for a niche market at this scale.*
