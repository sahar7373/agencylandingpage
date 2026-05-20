# YourTradePartner — Agency Landing Page

> React + Vite site for YourTradePartner (yourtradepartner.com.au). Marketing-focused, multi-trade landing pages + blog.

---

## Context Files — Load Before Working

| Need | File |
|------|------|
| Brand voice, tone, copy rules | `YTP-BRAND-VOICE.md` |
| Design inspiration & visual direction | `INSPIRATION.md` |
| DataForSEO MCP tool usage | `dataforseo-mcp-playbook.md` |
| SEO audit (current findings) | `yourtradepartner-seo-audit.md` |
| Agent architecture & skills map | `.agent/ARCHITECTURE.md` |

---

## Tech Stack

- React 19 + Vite 7 + React Router 7
- Tailwind CSS 3 + Framer Motion + Lucide Icons
- Google Generative AI (Gemini Flash) — ChatBot
- Analytics: GA4 (`react-ga4`) + Meta Pixel (`react-facebook-pixel`)
- SEO: `react-helmet-async` + schema markup + breadcrumbs

---

## Key Commands

```bash
npm run dev        # local dev server
npm run build      # production build → dist/
```

**Deploy:** Netlify (auto on push to main). Also wrangler-compatible for Cloudflare Pages.

---

## Project Structure

```
src/
  pages/
    LandingPage.jsx          # Main homepage
    blog/                    # 10 SEO blog articles
    [Trade]Websites.jsx      # 9 trade-specific landing pages
    MarketingForTradies.jsx  # Service page
    SEOForTradies.jsx        # Service page
    Resources.jsx            # Resource hub
    RevenueBlueprint.jsx     # Lead magnet page
  components/
    ChatBot.jsx              # Gemini-powered trade assistant
    TradeNavDropdown.jsx     # Trade switcher (all nav headers)
    LeadMagnetModal.jsx      # Free audit lead capture
    MissedJobReviewModal.jsx # Lead capture modal
    Breadcrumbs.jsx          # SEO breadcrumbs
scripts/
  generate_pdf_report.cjs    # Playwright PDF generator (use this, NOT browser print)
  live_seo_audit.py          # SEO audit runner
reports/                     # Generated SEO audit outputs
```

---

## Project-Specific Rules

1. **Copy** — always match YTP brand voice. Read `YTP-BRAND-VOICE.md` before writing any copy.
2. **PDF reports** — use `scripts/generate_pdf_report.cjs` (Playwright, `printBackground: true`). Never browser print.
3. **Score rings** — recalculate conic-gradient degrees when score changes: `score/100 * 360°`.
4. **Trade pages** — all 9 trade pages share the same structure. Changes to patterns apply to all.
5. **SEO** — every page needs Helmet meta + schema + breadcrumbs. See `yourtradepartner-seo-audit.md` for open items.

---

## Skill Routing

| Task | Skill |
|------|-------|
| Landing page copy or CRO | `marketingskills/page-cro` or `marketingskills/copywriting` (pass `YTP-BRAND-VOICE.md` as context) |
| SEO improvements | `marketingskills/ai-seo` |
| New feature build | gstack `/office-hours` → `/autoplan` → build → `/review` |
| Bug | gstack `/investigate` |
| SEO keyword research | `dataforseo-mcp-playbook.md` → DataForSEO MCP tools |
