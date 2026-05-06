# DataForSEO MCP Playbook
## SEO + AEO Operations Guide for Your Trade Partner

*Last Updated: 2026-04-25*

---

## Setup Status

- **MCP Name:** `dfs-mcp`
- **Scope:** User global (`~/.claude.json`) — works across all projects
- **Transport:** stdio via `npx -y dataforseo-mcp-server`
- **Credentials:** Stored securely in user config, not in repo

---

## Tool Reference (All 79 Tools)

The MCP exposes tools across 8 categories. Below is every tool, what it does, and when to use it.

---

### 1. SERP Tools (Live Search Results)

| Tool | What it does | When to use |
|------|-------------|-------------|
| `serp_organic_live_advanced` | Pull live Google organic results for any keyword + location | Check current rankings, identify featured snippet holders, see PAA boxes |
| `serp_locations` | List all supported Google SERP locations | Confirm AU location codes before running searches |
| `serp_youtube_organic_live_advanced` | Pull live YouTube search results | Research video content gaps, see what videos rank for tradie queries |
| `serp_youtube_locations` | YouTube location codes | Set AU geo for YouTube queries |
| `serp_youtube_video_info_live_advanced` | Full metadata on a YouTube video | Analyse competitor video SEO (title, description, tags, views) |
| `serp_youtube_video_comments_live_advanced` | Pull YouTube video comments | Mine audience language and pain points from popular videos |
| `serp_youtube_video_subtitles_live_advanced` | Pull full transcript of a YouTube video | Extract content from competitor videos for gap analysis |

**Primary use:** Before writing any content or landing page, run `serp_organic_live_advanced` for target AU keyword to see exactly what you're competing against.

---

### 2. Keyword Data (Volume + Trends)

| Tool | What it does | When to use |
|------|-------------|-------------|
| `kw_data_google_ads_search_volume` | Monthly search volume + CPC + competition from Google Ads API | Core volume data for any keyword — use AU location code 2036 |
| `kw_data_google_ads_locations` | Available location codes for Google Ads data | Confirm AU state/city codes (e.g. Sydney = 1000286) |
| `kw_data_google_trends_explore` | Google Trends interest over time | Spot seasonal patterns (e.g. "ducted heating" spikes in AU winter) |
| `kw_data_google_trends_categories` | Available Trends categories | Filter Trends data by industry category |
| `kw_data_dfs_trends_explore` | DataForSEO's own trend index (broader than Google Trends) | Cross-reference trend data when Google Trends is vague |
| `kw_data_dfs_trends_demography` | Demographic breakdown of keyword interest | Understand who searches a keyword (age, gender) |
| `kw_data_dfs_trends_subregion_interests` | Keyword interest broken down by AU state/region | Find where demand is highest — useful for location-specific pages |

**AU Location Code:** Use `2036` for Australia national. For cities: Sydney `1000286`, Melbourne `1000287`, Brisbane `1000288`, Perth `1000290`.

---

### 3. DataForSEO Labs (Deep Keyword + Domain Intelligence)

| Tool | What it does | When to use |
|------|-------------|-------------|
| `dataforseo_labs_google_keyword_overview` | Full data snapshot for a keyword (volume, difficulty, intent, CPC, SERP features) | Primary keyword research starting point |
| `dataforseo_labs_google_keyword_ideas` | Generate keyword ideas from a seed term | Expand from a root keyword into a full cluster |
| `dataforseo_labs_google_keyword_suggestions` | Autocomplete-style keyword suggestions | Find long-tail variations with lower difficulty |
| `dataforseo_labs_google_related_keywords` | Semantically related keywords | Build topical authority maps — what else do searchers look for? |
| `dataforseo_labs_google_historical_keyword_data` | 12 months of historical volume + ranking data | Detect seasonal patterns and demand trends |
| `dataforseo_labs_bulk_keyword_difficulty` | Keyword difficulty score for a list of keywords | Prioritise which keywords to target first (low KD = quick wins) |
| `dataforseo_labs_bulk_traffic_estimation` | Estimate organic traffic for a keyword list at target positions | Forecast the ROI value of ranking — powerful for client pitches |
| `dataforseo_labs_search_intent` | Classify keyword intent (informational / commercial / transactional / navigational) | Match content type to what the searcher actually wants |
| `dataforseo_labs_google_ranked_keywords` | All keywords a domain currently ranks for | Audit competitor keyword footprint |
| `dataforseo_labs_google_keywords_for_site` | Keywords a site is visible for across all pages | Full keyword visibility map of any domain |
| `dataforseo_labs_google_competitors_domain` | Find competing domains for a set of keywords | Identify true SEO competitors (not just who you think they are) |
| `dataforseo_labs_google_domain_rank_overview` | Overall organic visibility score + traffic estimate for a domain | Quick health check on any domain |
| `dataforseo_labs_google_domain_intersection` | Keywords that two domains both rank for | Compare YTP against a competitor — find shared battleground |
| `dataforseo_labs_google_page_intersection` | Pages from two domains ranking for the same keywords | Page-level competitive analysis |
| `dataforseo_labs_google_relevant_pages` | Most relevant pages on a domain for a keyword set | Find the highest-value competitor pages to study |
| `dataforseo_labs_google_serp_competitors` | Who consistently appears in SERPs for a keyword set | Map the full competitive landscape |
| `dataforseo_labs_google_historical_serp` | What the SERP looked like at a specific date | Track how rankings have shifted over time |
| `dataforseo_labs_google_historical_rank_overview` | Domain ranking history over time | See if a site gained/lost visibility after a Google update |
| `dataforseo_labs_google_subdomains` | Subdomains of a domain + their ranking data | Useful for large competitor sites (blog.x.com vs x.com) |
| `dataforseo_labs_google_top_searches` | Top searched queries in a location + date range | Discover what Australians are actually searching for right now |
| `dataforseo_labs_available_filters` | List all available filter parameters | Reference when building advanced queries |

---

### 4. Backlinks

| Tool | What it does | When to use |
|------|-------------|-------------|
| `backlinks_summary` | Domain Authority, total backlinks, referring domains, spam score | First-pass health check on any domain's link profile |
| `backlinks_backlinks` | Full list of backlinks to a page or domain | Audit inbound links — find toxic or lost links |
| `backlinks_anchors` | Anchor text distribution for a domain | Check if anchor text looks natural or over-optimised |
| `backlinks_referring_domains` | All domains linking to a target | Find link sources — who is linking and how authoritative are they? |
| `backlinks_referring_networks` | IP networks of referring domains | Detect link schemes / PBN signals |
| `backlinks_competitors` | Domains with similar link profiles | Find competitors you might not know about |
| `backlinks_domain_intersection` | Links pointing to multiple domains simultaneously | Find link sources that link to competitors but not to you |
| `backlinks_domain_pages` | All pages on a domain + their backlink counts | Find a competitor's most linked-to content |
| `backlinks_domain_pages_summary` | Summary stats per page | Quick overview of link equity distribution |
| `backlinks_page_intersection` | Shared link sources across multiple pages | Find high-value link opportunities from pages your competitors share |
| `backlinks_bulk_backlinks` | Backlink data for multiple domains at once | Batch-process a competitor list |
| `backlinks_bulk_ranks` | Domain Authority rank for a list of domains | Quick batch scoring |
| `backlinks_bulk_referring_domains` | Referring domain counts for a list of domains | Compare link profiles at scale |
| `backlinks_bulk_spam_score` | Spam score for a list of domains | Pre-screen potential link partners |
| `backlinks_bulk_new_lost_backlinks` | New and lost backlinks over a time period | Monitor link velocity — are you gaining or losing authority? |
| `backlinks_bulk_new_lost_referring_domains` | New/lost referring domains over time | Track campaign results — are outreach efforts working? |
| `backlinks_bulk_pages_summary` | Summary stats for multiple pages | Batch page-level analysis |
| `backlinks_timeseries_summary` | Backlink growth over time chart data | Visualise link-building progress |
| `backlinks_timeseries_new_lost_summary` | New vs lost backlinks charted over time | Detect manual penalties or link decay |
| `backlinks_available_filters` | Available filter parameters for backlink queries | Reference for advanced queries |

---

### 5. On-Page Analysis

| Tool | What it does | When to use |
|------|-------------|-------------|
| `on_page_instant_pages` | Crawl a single URL and return on-page SEO data (title, meta, headings, word count, internal links, images) | Audit any page before publishing or after a competitor publishes |
| `on_page_content_parsing` | Extract and parse the full content of a page | Get clean text from any URL for analysis |
| `on_page_lighthouse` | Run a Google Lighthouse audit on any URL (performance, accessibility, SEO, best practices) | Technical SEO and Core Web Vitals check |

---

### 6. Content Analysis

| Tool | What it does | When to use |
|------|-------------|-------------|
| `content_analysis_search` | Find web pages mentioning a specific phrase or brand | Monitor brand mentions, find PR opportunities, track topic coverage |
| `content_analysis_summary` | Aggregate metrics on how a phrase/topic is covered across the web | Measure topic authority and content gaps |
| `content_analysis_phrase_trends` | How frequently a phrase appears in web content over time | Track emerging topics before they become competitive |

---

### 7. Domain Analytics

| Tool | What it does | When to use |
|------|-------------|-------------|
| `domain_analytics_technologies_domain_technologies` | What tech stack a domain uses (CMS, hosting, analytics, plugins) | Competitor tech analysis — are they on WordPress or custom? |
| `domain_analytics_technologies_available_filters` | Filter options for tech queries | Reference |
| `domain_analytics_whois_overview` | WHOIS data for a domain (registration date, registrar, expiry) | Assess domain age and legitimacy |
| `domain_analytics_whois_available_filters` | Filter options for WHOIS | Reference |

---

### 8. Business Data

| Tool | What it does | When to use |
|------|-------------|-------------|
| `business_data_business_listings_search` | Search business listings (Google Business Profile data) | Pull GBP data for competitors or prospects — reviews, rating, categories, address |

---

### 9. AI Optimization (AEO — Answer Engine Optimization)

This is the most forward-looking category. These tools track how **AI search engines** (ChatGPT, Perplexity, Gemini) respond to queries — critical for AEO strategy.

| Tool | What it does | When to use |
|------|-------------|-------------|
| `ai_optimization_llm_response` | Get actual responses from ChatGPT/other LLMs for a query | See what AI search says when someone asks a question in your niche |
| `ai_optimization_chat_gpt_scraper` | Scrape ChatGPT responses and see which sources it cites | Find out who ChatGPT recommends for tradie marketing — are you there? |
| `ai_optimization_chat_gpt_scraper_locations` | Location codes for ChatGPT scraper | Target AU-specific AI responses |
| `ai_optimization_keyword_data_search_volume` | Search volume data specific to AI search queries | Understand what people are asking AI vs Google |
| `ai_optimization_llm_mentions_filters` | Filter options for LLM mention tracking | Reference |
| `ai_optimization_llm_models` | Available LLM models to query | Choose which AI model to test against |
| `ai_opt_kw_data_loc_and_lang` | AI keyword data filtered by location and language | AU-specific AI search volume |
| `ai_opt_llm_ment_search` | Search for brand/domain mentions across LLM responses | Check if YTP or client sites are mentioned in AI answers |
| `ai_opt_llm_ment_agg_metrics` | Aggregate metrics on LLM mentions for a domain | Overall AEO visibility score |
| `ai_opt_llm_ment_cross_agg_metrics` | Cross-model aggregate mention metrics | Compare visibility across ChatGPT vs Perplexity vs Gemini |
| `ai_opt_llm_ment_loc_and_lang` | LLM mentions broken down by location and language | Track AU-specific AI visibility |
| `ai_opt_llm_ment_top_domains` | Top domains mentioned by LLMs for a topic | Who does AI recommend in the tradie marketing space? |
| `ai_opt_llm_ment_top_pages` | Top specific pages mentioned by LLMs | Which content gets cited by AI — what format/topic earns citation? |

---

## SEO Workflows

### Workflow 1: New Keyword Research Sprint
```
1. dataforseo_labs_google_keyword_ideas          → seed keyword → 50-100 ideas
2. kw_data_google_ads_search_volume              → pull AU volume for all candidates
3. dataforseo_labs_bulk_keyword_difficulty       → score difficulty for the full list
4. dataforseo_labs_search_intent                 → classify intent for top candidates
5. kw_data_dfs_trends_subregion_interests        → find where demand concentrates (NSW? VIC?)
6. serp_organic_live_advanced                    → check SERPs for top 10 targets
```

### Workflow 2: Competitor Analysis
```
1. dataforseo_labs_google_domain_rank_overview   → their overall visibility score
2. dataforseo_labs_google_ranked_keywords        → every keyword they rank for
3. dataforseo_labs_google_domain_intersection    → keywords both you and competitor rank for
4. backlinks_summary                             → their domain authority + link profile
5. backlinks_domain_pages                        → their most linked content
6. backlinks_domain_intersection                 → link sources that link to them but not you
```

### Workflow 3: Page Audit Before Publishing
```
1. serp_organic_live_advanced                    → study the top 3 ranking pages
2. on_page_instant_pages                         → crawl each competitor page
3. dataforseo_labs_google_keyword_overview       → confirm target keyword data
4. dataforseo_labs_search_intent                 → verify content type matches intent
5. on_page_lighthouse                            → after publishing, check Core Web Vitals
```

### Workflow 4: Monthly Client Rank Report
```
1. dataforseo_labs_google_domain_rank_overview   → current visibility vs last month
2. dataforseo_labs_google_ranked_keywords        → all keywords + positions
3. backlinks_timeseries_new_lost_summary         → link gains/losses this month
4. kw_data_dfs_trends_subregion_interests        → any seasonal shifts to flag
```

### Workflow 5: Link Building Prospecting
```
1. backlinks_competitors                         → find domains with similar profiles
2. backlinks_domain_intersection                 → find sites linking to 2+ competitors
3. backlinks_bulk_spam_score                     → filter out toxic sites
4. backlinks_anchors                             → understand the anchor strategy
```

---

## AEO Workflows (Answer Engine Optimization)

AEO is about being cited and recommended by AI search (ChatGPT, Perplexity, Gemini) — the fastest-growing search channel in 2025-26.

### Workflow 1: AI Visibility Audit
```
1. ai_opt_llm_ment_search                        → is your domain mentioned by any LLMs?
2. ai_opt_llm_ment_cross_agg_metrics             → compare visibility across ChatGPT/Perplexity/Gemini
3. ai_opt_llm_ment_top_domains                   → who does AI recommend in your niche?
4. ai_optimization_llm_response                  → get actual AI answer for "best tradie website designer Australia"
5. ai_optimization_chat_gpt_scraper              → see which URLs ChatGPT cites
```

### Workflow 2: Identify Citation-Worthy Content Gaps
```
1. ai_opt_llm_ment_top_pages                     → what specific pages does AI cite?
2. content_analysis_summary                      → how is this topic covered across the web?
3. content_analysis_phrase_trends                → is this topic growing in web content?
→ Build content that matches the format AI tends to cite (structured answers, lists, how-tos)
```

### Workflow 3: Monitor AI Presence Over Time
```
Weekly:
1. ai_opt_llm_ment_agg_metrics                   → overall AI mention score
2. ai_optimization_chat_gpt_scraper              → new queries your niche gets asked

Monthly:
3. ai_opt_llm_ment_cross_agg_metrics             → trend across models
4. ai_opt_llm_ment_top_domains                   → are competitors growing AI visibility faster?
```

### What Makes Content Get Cited by AI?
Based on how LLMs retrieve and cite web content:
- **Structured Q&A format** — direct answers to "how do I" and "what is" questions
- **Lists and tables** — easy for AI to parse and quote
- **Schema markup** — FAQ, HowTo, and Article schema increases parsability
- **Authoritative backlinks** — AI tends to cite pages with high link authority
- **Freshness** — recently updated content preferred
- **Specificity** — "plumber Sydney pricing 2026" beats "plumber pricing"

---

## Selling This as a Service to Trades

### The Product: AI-Powered SEO Monitoring

You now have access to the same data stack that $10,000/month SEO agencies use. The opportunity is to package it as a productised service for tradies.

---

### Tier 1: SEO Health Report — $297/month

**What you deliver monthly:**
- Keyword ranking report (top 20 target keywords + position changes)
- Competitor comparison (1 competitor, ranked keywords overlap)
- New/lost backlinks summary
- 3 quick-win opportunities identified

**Tools used:**
- `dataforseo_labs_google_ranked_keywords`
- `dataforseo_labs_google_domain_rank_overview`
- `backlinks_timeseries_new_lost_summary`
- `dataforseo_labs_google_domain_intersection`

**Time to produce:** ~30 minutes with MCP (was 3-4 hours manually)
**Margin:** Very high. Mostly automated.

---

### Tier 2: Full SEO + AEO Audit — $997 one-time

**What you deliver:**
- Complete keyword opportunity map (50+ keywords, difficulty, volume, intent)
- Technical on-page audit of top 5 pages
- Backlink profile analysis + competitor link gap
- AI visibility audit (are they appearing in ChatGPT/Perplexity answers?)
- Priority action plan with 90-day roadmap

**Tools used:**
- Full Labs suite for keyword research
- `on_page_instant_pages` + `on_page_lighthouse` for technical
- Full backlinks suite
- Full AI Optimization suite for AEO

**Deliverable format:** PDF report + 45-min strategy call
**Time to produce:** 2-3 hours with MCP

---

### Tier 3: Ongoing SEO Management — $1,497/month

**What you do:**
- Weekly ranking check
- Monthly full audit cycle
- Content brief production (2 per month) based on keyword gaps
- AI visibility monitoring — track whether content earns AI citations
- Quarterly competitor gap analysis

**Tools used:** All of the above on a recurring basis

**Position this as:** "Agency-quality SEO without the agency price tag"

---

### Sales Messaging for Tradies

**The problem to lead with:**
> "Right now when a homeowner asks ChatGPT 'best plumber in Sydney', your name doesn't come up. Google is only half the battle in 2026."

**The differentiation:**
- Most tradie SEO agencies only track Google rankings
- You track Google AND AI search visibility (ChatGPT, Perplexity, Gemini)
- You show clients data, not just claims

**Proof points to show:**
- Run a live demo: ask `ai_optimization_llm_response` "best plumber in [their suburb]" — most tradies are invisible
- Pull their domain through `dataforseo_labs_google_domain_rank_overview` — show them the number
- Run a competitor through the same tool — show them what they're up against

**Objection handling:**
| Objection | Response |
|-----------|----------|
| "I already have someone doing SEO" | "Ask them to show you your AI search visibility score. They probably can't." |
| "SEO takes too long to see results" | "We track 5 different ranking signals weekly so you see movement within 30 days, not 6 months." |
| "I get leads from hipages, don't need SEO" | "hipages charges you per lead forever. SEO pays you back over time and compounds." |

---

### Discovery Call Script

**Question 1:** "When a homeowner Googles '[your trade] + [your suburb]', do you know where you rank?"
→ Most don't know → run `serp_organic_live_advanced` live in the call

**Question 2:** "Have you ever typed your trade into ChatGPT and asked who to call?"
→ Do it together → most tradies are invisible → immediate emotional impact

**Question 3:** "Who are your top 2 competitors? Let's look at what they're doing differently."
→ Run `dataforseo_labs_google_domain_rank_overview` on competitor → reveal the gap

---

## Quick Reference: AU Location Codes

| Target | Code |
|--------|------|
| Australia (national) | `2036` |
| Sydney, NSW | `1000286` |
| Melbourne, VIC | `1000287` |
| Brisbane, QLD | `1000288` |
| Perth, WA | `1000290` |
| Adelaide, SA | `1000289` |
| Canberra, ACT | `1000291` |

Language code for all AU queries: `en`

---

## Next Immediate Actions

1. **Replace keyword placeholders** in `yourtradepartner-seo-audit.md` — run `kw_data_google_ads_search_volume` for all 24 keywords with AU location code `2036`
2. **Baseline domain audit** — run `dataforseo_labs_google_domain_rank_overview` on `yourtradepartner.com.au`
3. **Competitor analysis** — run `dataforseo_labs_google_competitors_domain` to find true SEO competitors
4. **AI visibility check** — run `ai_optimization_chat_gpt_scraper` for "tradie website designer Australia" to see who ChatGPT recommends
5. **Technical audit** — run `on_page_lighthouse` on the homepage and top 3 landing pages

---

*This playbook covers all 79 DataForSEO MCP tools available as of April 2026.*
