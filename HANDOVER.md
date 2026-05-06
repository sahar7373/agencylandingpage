# YourTradePartner Agency Landing Page — Laptop Handover Doc

**Date:** May 2026  
**Branch at handover:** `feature/automation-page`  
**Prod URL:** https://yourtradepartner.com.au  
**Deploy:** Netlify auto-deploys from `main` branch push

---

## 1. Project at a Glance

React 19 + Vite 7 + React Router 7 marketing site for YourTradePartner — a tradie web design/marketing agency. Multi-trade landing pages, blog articles, lead capture modals, Gemini-powered chatbot.

**Stack:**
- React 19 + Vite 7 + React Router 7
- Tailwind CSS 3 + Framer Motion + Lucide Icons
- Google Generative AI (Gemini Flash) — ChatBot
- Analytics: GA4 (`react-ga4`) + Meta Pixel (`react-facebook-pixel`)
- SEO: `react-helmet-async` + schema markup + breadcrumbs

---

## 2. Git State at Handover

**Active branch:** `feature/automation-page`  
**Branch is pushed to remote:** yes (`remotes/origin/feature/automation-page`)  

**WIP commits on this branch (NOT yet merged to main):**
```
c997818  wip: update automation page and landing page with latest changes
e84d9cf  wip: save automation page progress before switching to main
2b21d27  feat: add AI automation page with AnimatedBeam connection diagram
```

The automation page (`src/pages/AutomationPage.jsx`) is in progress. It has an AnimatedBeam connection diagram. Do **not** merge to main until it's polished and reviewed.

**Files NOT yet committed (untracked — only exist locally):**

| File/Folder | What it is |
|---|---|
| `.agent/skills/blog-builder/` | Custom blog-builder skill (Claude skill file) |
| `.claude/` | Claude Code project settings and memory |
| `CLAUDE.md` | Project-level Claude instructions (critical — re-create this on new machine) |
| `Competition.md` | Competitor analysis notes (Tradie Web Mate, Tradiemate, etc.) |
| `YTP-BRAND-VOICE.md` | **Brand voice doc — essential for all copy work** |
| `dataforseo-mcp-playbook.md` | DataForSEO MCP tool usage playbook |
| `public/Agency-hammer-favicon.jpeg` | Favicon asset |
| `public/logos/` | Partner/integration logos for marquee (11labs, Fergus, Xero, ServiceM8, Twilio, RetellAI, SafetyCulture, QuickBooks, etc.) |
| `reports/` | Generated SEO audit PDF outputs |
| `scripts/generate_pdf_report.cjs` | **Playwright PDF generator** — use this, NEVER browser print |
| `scripts/index_pages.py` | Page indexing script |
| `scripts/live_seo_audit.py` | SEO audit runner |
| `scripts/run_seo_audit.py` | SEO audit orchestrator |
| `scripts/website_audit_generator.py` | Website audit HTML/PDF generator |
| `src/components/ui/marquee-logo-scroller.jsx` | Logo marquee component for integration logos |
| `src/pages/generate_remaining_trades.sh` | Shell script to scaffold remaining trade pages |
| `yourtradepartner-seo-audit.md` | **Full SEO audit doc with open action items** |

> **ACTION ON NEW MACHINE:** After cloning, manually copy these files over from a backup before committing. The `.claude/` folder especially contains project memory.

---

## 3. Open Work / What to Pick Up Next

### Automation Page (feature/automation-page branch)
- The page exists at `/automation` and is in WIP state
- It uses `AnimatedBeam` component (`src/components/ui/animated-beam.jsx`) to show connections between tradie tools
- Needs: copy polish, mobile responsiveness check, nav link wiring, then merge to main
- Pattern to follow: look at `LandingPage.jsx` and any `[Trade]Websites.jsx` for style consistency

### SEO — Critical Open Items (from `yourtradepartner-seo-audit.md`)
1. **9 blog/resource pages missing from sitemap.xml** — Google can't find them
   - Affected: all pages under `/resources/*`
   - Fix: update `public/sitemap.xml` to include all resource article URLs
2. **Duplicate meta tags** — global defaults + page-specific Helmet tags both rendering
   - Fix: audit `index.html` default meta tags, strip any that conflict with Helmet
3. **Duplicate content across 9 trade pages** — all near-identical
   - Fix: add 1–2 trade-specific paragraphs per page (case study, local keyword, unique angle)
4. **Title tags not keyword-optimised** — homepage title "Digital Growth Systems" has zero search volume
   - Fix: per the SEO audit table in `yourtradepartner-seo-audit.md`
5. **H1s are conversion-focused, not keyword-focused** — good for humans, bad for Google ranking
   - Fix: rework H1s to include primary keyword (e.g. "Plumber Website Design Australia")

### Current SEO Performance (April 2026 baseline)
- Avg position: 34.4 (page 3–4)
- 318 impressions / 13 clicks over 3 months
- Target: top 3–5 for core tradie marketing keywords

---

## 4. Site Structure

```
src/
  pages/
    LandingPage.jsx              # Main homepage
    AutomationPage.jsx           # WIP — AI automation services page
    MarketingForTradies.jsx      # Service page
    SEOForTradies.jsx            # Service page
    Resources.jsx                # Resource hub page
    RevenueBlueprint.jsx         # Lead magnet / blueprint page
    Guide.jsx                    # Lead magnet page
    Unsubscribe.jsx              # Unsubscribe page (private)
    BuilderWebsites.jsx          # 9 trade-specific pages (same structure):
    CarpenterWebsites.jsx
    ConcreteLayerWebsites.jsx
    ElectricianWebsites.jsx
    HVACWebsites.jsx
    LandscaperWebsites.jsx
    PainterWebsites.jsx
    PlumbingWebsites.jsx
    RooferWebsites.jsx
    blog/                        # 10 SEO blog articles
  components/
    ChatBot.jsx                  # Gemini Flash-powered assistant
    TradeNavDropdown.jsx         # Trade switcher in all nav headers
    LeadMagnetModal.jsx          # Free audit lead capture modal
    MissedJobReviewModal.jsx     # Lead capture modal
    BlueprintModal.jsx
    CaseStudyModal.jsx
    Breadcrumbs.jsx              # SEO breadcrumbs (on all pages)
    VideoModal.jsx
    RelatedReads.jsx
    PrivacyPolicyModal.jsx
    TermsConditionsModal.jsx
    ui/
      animated-beam.jsx          # Used by AutomationPage
      marquee-logo-scroller.jsx  # Logo marquee (untracked — copy over)
      accordion.jsx
      badge.jsx
      button.jsx
      card.jsx
      card-spotlight.jsx
scripts/
  generate_pdf_report.cjs        # Playwright PDF generator (ES module safe — .cjs)
  live_seo_audit.py
  run_seo_audit.py
  index_pages.py
  website_audit_generator.py
public/
  logos/                         # Integration logos for marquee
  Agency-hammer-favicon.jpeg     # Favicon (untracked — copy over)
```

---

## 5. Key Lessons Learned (from Claude Memory)

### PDF Report Generation
- **NEVER use browser print** — strips all background colors, gradients, score rings become invisible
- Always use `scripts/generate_pdf_report.cjs` with Playwright (`printBackground: true`)
- Package.json has `"type": "module"` so Playwright scripts must be `.cjs` extension
- Add `@media print` CSS fallbacks for gradient text elements (use solid color)

### Score Rings (in audit reports)
- `conic-gradient` degrees must be recalculated every time score changes: `score/100 * 360`
- Never leave template placeholder degree values when changing a score number

### Template Cloning Rule
- When matching existing branding (e.g., client SEO reports), clone from the actual template file
- Never regenerate fresh HTML — read the template, make surgical text replacements only
- Verify file paths with `ls` before running any script that reads template files

### Trade Pages Pattern
- All 9 trade pages share identical structure — changes to the pattern apply to ALL
- If you update one section's layout, update it across all 9 trades

---

## 6. Competitors Tracked

See `Competition.md` for full notes. Key competitors:
- **Tradie Web Mate** (tradiewebmate.com.au) — WordPress + Divi, schema markup
- **Tradiemate** (tradiemate.au) — similar value prop, good service structure to study

---

## 7. Claude Code Setup (Recreate on New Machine)

### Install Claude Code
```bash
npm install -g @anthropic-ai/claude-code
```

### Project CLAUDE.md
The file `CLAUDE.md` in the project root is untracked. You'll need to either:
- Copy it from backup, OR
- Recreate it — it tells Claude the tech stack, key commands, skill routing rules, and which context files to load

### Claude Memory
The `.claude/` folder (in project root, untracked) contains:
- Project-specific Claude memory (SEO report lessons, feedback)
- Restore from backup so Claude remembers lessons from this laptop

### Key Skills Available in `.claude/`
The global Claude skills live at `~/.claude/skills/` and include:
- `marketingskills/` — page-cro, copywriting, content-strategy, ai-seo, lead-magnets, cold-email
- `gstack/` — office-hours, autoplan, review, qa, ship, investigate
- Plus superpowers: brainstorming, dispatching-parallel-agents, systematic-debugging, etc.

**Skill routing for this project:**
| Task | Use |
|---|---|
| Copy / CRO | `marketingskills/page-cro` or `marketingskills/copywriting` (pass `YTP-BRAND-VOICE.md`) |
| SEO work | `marketingskills/ai-seo` |
| New feature | gstack `/office-hours` → `/autoplan` → build → `/review` |
| Bug | gstack `/investigate` |
| Keyword research | DataForSEO MCP (see `dataforseo-mcp-playbook.md`) |

### MCP Tools (re-configure on new machine)
Check `~/.claude/settings.json` for any MCP server configs (DataForSEO, Google integrations).

---

## 8. Environment Variables / API Keys Needed

Audit `.env` or Netlify dashboard for:
- `VITE_GEMINI_API_KEY` — Gemini Flash for ChatBot
- `VITE_GA_MEASUREMENT_ID` — Google Analytics 4
- `VITE_META_PIXEL_ID` — Meta Pixel
- Any DataForSEO API credentials (for SEO scripts)

---

## 9. Deploy Process

1. Push `main` branch → Netlify auto-deploys
2. For the automation page: merge `feature/automation-page` → `main` only when polished
3. After deploy, run `scripts/index_pages.py` to trigger Google Search Console indexing for any new pages

---

## 10. First Steps on New Machine

```bash
# 1. Clone the repo
git clone <repo-url>
cd Agency-landing-page

# 2. Restore untracked files from backup
# (CLAUDE.md, YTP-BRAND-VOICE.md, Competition.md, dataforseo-mcp-playbook.md,
#  yourtradepartner-seo-audit.md, scripts/, public/logos/, .claude/, reports/)

# 3. Install dependencies
npm install

# 4. Start dev server
npm run dev

# 5. Check out the WIP branch
git checkout feature/automation-page

# 6. Install Claude Code globally
npm install -g @anthropic-ai/claude-code

# 7. Re-configure MCP servers in Claude Code settings
```
