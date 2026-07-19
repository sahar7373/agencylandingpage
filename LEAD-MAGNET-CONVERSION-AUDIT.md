# Lead Magnet & Conversion Audit — YourTradePartner Landing Page

> Critical CRO analysis of `src/pages/LandingPage.jsx`. Focus: lead magnet placement, visual hierarchy, and capture friction.
> Date: 2026-07-18

---

## Section Map — Where Every Lead Capture Lives

The page has 21 sections. Here's where every lead capture sits and how deep it's buried:

| # | Section | Lead Capture? | Approx. Scroll Depth |
|---|---------|--------------|-------------|
| 1 | Hero | CTA → opens modal | **0%** |
| 2 | Client proof band | — | ~5% |
| 3 | Automation teaser | — | ~10% |
| 4 | Problem agitation | — | ~15% |
| 5 | Survey stats | — | ~22% |
| 6 | Solution section | **Blueprint download** | ~28% |
| 7 | What we fix | — | ~33% |
| 8 | Who this is for | — | ~38% |
| 9 | Case studies | — | ~46% |
| 10 | **FREE AUDIT SECTION** | **Email + website URL form** | ~53% |
| 11 | Packages | — | ~60% |
| 12 | ROI Calculator | — | ~66% |
| 13 | Free Guide section | **Email gate (guide download)** | ~70% |
| 14 | Results timeline | — | ~75% |
| 15 | Guarantee | — | ~79% |
| 16 | Revisions policy | — | ~83% |
| 17 | FAQ | — | ~87% |
| 18 | Growth system effect | — | ~91% |
| 19 | Blog resources | — | ~94% |
| 20 | **Contact form** | **6-field form** | **~97%** |
| 21 | Footer | — | 100% |

---

## The 9 Critical Problems

### 1. The primary lead magnet (Free Audit) is 53% down the page
Industry benchmark: **70–80% of visitors never scroll past 50%** on a long-form landing page. The majority of traffic never sees the free audit form with the email gate. The page is designed for the 20% who scroll, not the 80% who don't.

**The irony:** The Free Audit section is the best-designed lead capture on the page — clear offer, two-field form, specific promise ("instant diagnosis in 60 seconds") — and it's hidden behind 9 sections of content.

### 2. Four competing lead capture mechanisms are confusing the visitor
1. "CHECK MY JOB FLOW" → opens MissedJobReviewModal
2. "Download the free blueprint" → BlueprintModal at ~28%
3. Free Audit form (email + URL) at ~53%
4. "Download Free Guide" at ~70%
5. 6-field contact form at ~97%

When visitors see multiple competing lead magnets, they experience choice paralysis and take none of them. There should be a *single* primary CTA plus one backup for the not-ready segment. There are currently five.

### 3. The hero has no inline email capture
The hero CTA opens a modal — one extra click of friction before a visitor can give details. The highest-converting agency pages put a dead-simple form directly in the hero (email or phone only, full form as step 2). Currently it's: big orange button → modal → form inside modal. That's 3 interactions before someone can register interest. Every extra interaction loses ~20% of the previous step's visitors.

### 4. The contact form has 6 required fields — for cold traffic
Full Name · Phone · Email · Trade Type (dropdown) · Location · Message. Appropriate for a **warm lead who already decided to talk**. For cold traffic who scrolled 97% down and is still unsure, this is commitment-heavy. Every field beyond 3 measurably reduces conversion; a 6-field form can perform 3–4x worse than a 2-field form on cold traffic.

### 5. "Not ready to commit? Download Free Guide" is in the wrong spot
It's placed *immediately after the ROI calculator* — the highest-intent moment on the page (someone just read the math on why this is worth $7,900). Telling the person closest to converting "actually, you don't have to commit" works against itself. This exit-ramp offer belongs earlier (for fence-sitters who haven't warmed up), not after the hardest persuasion work is done.

### 6. No visual hierarchy differentiation between lead magnet elements
On the dark page, all sections have similar weight. The FREE AUDIT card uses `bg-gradient-to-r from-safety-orange/10 to-safety-orange/5` — a barely-perceptible 10% orange tint. Meanwhile Package 3 has `border-4 border-safety-orange`, a pulsing animated border, and `shadow-2xl shadow-safety-orange/10`. The best lead capture form looks weaker than a mid-tier pricing card.

### 7. No sticky/persistent lead capture on desktop
Mobile gets the sticky footer ("Call Now" + "Get Started"). Desktop gets nothing. A desktop visitor who scrolls past the audit section has no persistent nudge to return to it.

### 8. The free audit's promise creates a trust gap
The form says "Get instant diagnosis in 60 seconds," but it submits to Google Sheets and fires `alert('Thanks! Check your email for the free audit report.')` — manual or delayed. The user expects instant, automated results. If they wait and nothing comes, trust drops hard.

### 9. Social proof is placed before lead capture, not adjacent to it
Case studies (section 9) come before the free audit (section 10) — right rough order. But there's no social proof *directly adjacent* to either form. Placing even a one-line testimonial inside the form box converts significantly better: at the moment of commitment, seeing someone like you who trusted this and won reduces risk.

---

## Recommended Restructure

```
CURRENT ORDER:                    BETTER ORDER:
─────────────────────────────    ─────────────────────────────
1. Hero (modal CTA)             → 1. Hero (hero + INLINE email capture below CTA)
2. Client proof band            → 2. Client proof band (keep)
3. Automation teaser            → 3. Problem agitation (move up)
4. Problem agitation            → 4. Survey stats (move up)
5. Survey stats                 → 5. ★ FREE AUDIT FORM (move WAY up — before 50% scroll)
6. Solution + Blueprint CTA     → 6. Solution + Blueprint CTA
7. What we fix                  → 7. Case studies with testimonials
8. Who this is for              → 8. Packages
9. Case studies                 → 9. ROI Calculator
10. ★ FREE AUDIT FORM           → 10. Results timeline
11. Packages                    → 11. Guarantee
12. ROI Calculator              → 12. FAQ
13. Free Guide section          → 13. Contact form (simplified to 3 fields)
...                             → 14. Footer
```

---

## Specific Fixes, Ranked by Impact

### HIGH IMPACT

**Fix 1 — Add inline email capture in the hero, below the button**
```jsx
{/* Below the primary button */}
<div className="mt-4 text-center">
  <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Or get a free site audit emailed to you</p>
  <div className="flex gap-2 max-w-sm mx-auto">
    <input
      type="email"
      placeholder="your@email.com"
      className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-sm text-white focus:border-safety-orange focus:outline-none"
    />
    <Button className="bg-white text-black font-black uppercase tracking-wider text-xs px-5 rounded-none">
      Free Audit
    </Button>
  </div>
</div>
```
Captures curious visitors who won't click the orange button — no scrolling required.

**Fix 2 — Move the FREE AUDIT section above the packages** (ideally right after problem agitation). It's the lowest-friction, highest-value capture. The ask should come while the visitor is still uncertain, not after a $7,900 price tag.

**Fix 3 — Reduce the contact form to 3 fields.** Name + Phone + Email. Ask trade/location after submission (confirmation page or automated follow-up). Remove the optional Message field.

**Fix 4 — Give the FREE AUDIT card the same visual weight as Package 3.**
Replace `bg-gradient-to-r from-safety-orange/10 to-safety-orange/5` / `border-2 border-safety-orange/40`
with `border-4 border-safety-orange` / `shadow-[0_0_40px_rgba(234,88,12,0.3)]`. Optionally add the pulsing border animation.

### MEDIUM IMPACT

**Fix 5 — Move "Not Ready to Commit" free guide** to section 5–6 (before pricing) or convert it into a small sticky corner element. Don't leave it right after the ROI calculator.

**Fix 6 — Add a single testimonial inside the free audit form card** (only if real):
```jsx
<div className="border-l-2 border-safety-orange/40 pl-3 mb-4">
  <p className="text-[10px] text-white/50 italic">
    "Claimed the free audit and within a week knew exactly why we weren't getting calls online."
  </p>
  <p className="text-[9px] text-white/30 uppercase font-bold mt-1">— Painter, Adelaide SA</p>
</div>
```

**Fix 7 — Add a sticky desktop CTA:**
```jsx
<div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col">
  <a href="#free-audit" className="bg-safety-orange text-white font-black uppercase tracking-widest text-[9px] px-3 py-4 hover:bg-safety-orange-hover transition-colors shadow-xl">
    Free Audit →
  </a>
</div>
```

### LOWER IMPACT

**Fix 8 — Consolidate from 4 lead magnets to 2.**
- Keep: Free Audit form (best offer, lowest friction)
- Keep: Full contact form at bottom (for committed warm leads)
- Demote: Blueprint Modal → link, not a competing CTA button
- Demote: Free Guide → merge its email capture into the Free Audit flow

**Fix 9 — Add honest scarcity/urgency near the audit form** (e.g. "Available for Australian trades only · Takes 60 seconds"). Only if backed by data — fabricated urgency backfires on skeptical tradies.

**Fix 10 — Fix the audit form's delivery mechanism** before promoting it. Either ensure the email actually sends automatically, or change the copy to "We'll review your site and email you within 24 hours" — honest and still valuable.

---

## The Problem in One Sentence

**The page has the persuasion architecture of a long-form sales page, but the lead capture is placed at the end of it instead of threaded throughout it at the moments where intent is highest.**

The top 5 changes that matter most:
1. Inline email capture in the hero
2. Move the Free Audit section from #10 to #5
3. Reduce the contact form from 6 fields to 3
4. Give the audit card dominant visual weight
5. Kill 2 of the 4 competing lead magnets
