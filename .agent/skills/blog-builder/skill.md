---
name: blog-builder
description: Build a new YTP blog post with consistent structure, styling, SEO, and registration. Use when creating any new article under /resources/. Always runs Firecrawl research first to identify a trending, agency-relevant topic before writing anything.
allowed-tools: Read, Write, Edit, Bash, mcp__firecrawl__firecrawl_search, mcp__firecrawl__firecrawl_scrape
---

# Blog Builder — YTP Agency Landing Page

Produces a complete, production-ready blog post for yourtradepartner.com.au. Every article must follow the canonical structure below — no deviations to layout, class patterns, or SEO fields.

---

## Step 0 — Firecrawl Research (MANDATORY — always runs first)

Before touching any inputs or writing any code, run Firecrawl to identify what's trending right now that Your Trade Partner can credibly write about. This step is non-negotiable — never skip it, even if the user has already suggested a topic. Research sharpens the angle and grounds the content in real data.

### 0a — Run two searches in parallel

**Search 1 — Broad trend scan:**
```
query: "trending topics trade businesses website digital marketing 2026 Australia tradies"
sources: [web, news]
limit: 8
```

**Search 2 — Deep-dive on the most interesting signal from Search 1:**
Pick the single most timely and YTP-relevant theme that emerged and run a focused follow-up. Example:
```
query: "Google AI Overviews local SEO tradies Australia 2026" (or whatever theme fits)
limit: 5
scrapeOptions: { formats: ["summary"] }
```

### 0b — Check what's already been written

Read `src/pages/Resources.jsx` and note every existing article slug and category. The new post must cover an angle that is **not already published**. If a topic is partially covered, find a differentiated sub-angle.

### 0c — Synthesise and propose

From the research, derive:

| Field | Value |
|-------|-------|
| **Why this topic now** | 1–2 sentences — what trend or event makes this timely |
| **Differentiation** | How it differs from existing YTP articles |
| **Proposed title** | Draft H1 |
| **Proposed slug** | kebab-case |
| **Category** | One of the valid categories |
| **Lead paragraph** | Blunt, specific, tradie-relevant (1–2 sentences) |
| **5 section titles** | What the article will cover |
| **Related reads** | 3 existing slugs that connect naturally |
| **CTA secondary label** | e.g. `Get a Free AI Readiness Audit` |
| **Key stat or data point** | One real number from the research to anchor the post |

Present this summary to the user and **wait for explicit approval before proceeding**. Do not start writing JSX until the user confirms the topic and angle.

---

## Step 1 — Confirm inputs

After user approval, lock in these values (most will be pre-filled from research):

Before writing any code, confirm these values with the user (or derive them from context):

| Input | Example |
|-------|---------|
| `TITLE` | "5 Signs Your Tradie Website Is Losing You Jobs" |
| `SLUG` | `signs-tradie-website-losing-jobs` (kebab-case, no trailing slash) |
| `COMPONENT_NAME` | `SignsTradieWebsiteLosing` (PascalCase, no "Page" suffix) |
| `CATEGORY` | One of: `Local SEO`, `Lead Generation`, `Business Growth`, `AI Search`, `Trade-Specific`, `Branding`, `Marketing`, `Automation` |
| `READ_TIME` | Integer minutes, e.g. `5` |
| `MONTH_YEAR` | e.g. `April 2026` |
| `DATE_ISO` | e.g. `2026-04-23` |
| `META_DESCRIPTION` | 150–160 chars. Answers the reader's core question. |
| `LEAD_PARAGRAPH` | 1–2 sentences. Blunt, specific, tradie-relevant. |
| `H1_PLAIN` | First part of headline (plain white) |
| `H1_ORANGE` | Second part of headline (safety-orange span) |
| `SECTIONS` | 4–6 section titles for the article body |
| `RELATED_READS` | 3 existing slugs + titles + one-line descriptions |
| `CTA_SECONDARY_LABEL` | e.g. `Get a Free Website Audit` |

---

## Step 2 — Create the JSX file (ground content in research findings)

**File path:** `src/pages/blog/{COMPONENT_NAME}.jsx`

Use the exact template below. Fill every `{PLACEHOLDER}`. Do not rename classes, change structural order, or add extra wrappers.

**Content quality requirement:** Every stat, data point, and claim in the article body must come from the Firecrawl research findings from Step 0. Do not invent numbers. If a section needs supporting data that wasn't found, run an additional `mcp__firecrawl__firecrawl_search` call before writing that section.

```jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Clock } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedReads from '../../components/RelatedReads';

const relatedReads = [
    {
        href: '/resources/{RELATED_SLUG_1}',
        title: '{RELATED_TITLE_1}',
        description: '{RELATED_DESC_1}'
    },
    {
        href: '/resources/{RELATED_SLUG_2}',
        title: '{RELATED_TITLE_2}',
        description: '{RELATED_DESC_2}'
    },
    {
        href: '/resources/{RELATED_SLUG_3}',
        title: '{RELATED_TITLE_3}',
        description: '{RELATED_DESC_3}'
    }
];

const {COMPONENT_NAME} = () => {
    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans">
            <Helmet>
                <title>{TITLE} | Your Trade Partner</title>
                <meta name="description" content="{META_DESCRIPTION}" />
                <meta name="keywords" content="{KEYWORD_1}, {KEYWORD_2}, {KEYWORD_3}, Australian tradies" />
                <link rel="canonical" href="https://yourtradepartner.com.au/resources/{SLUG}" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="{TITLE}" />
                <meta property="og:description" content="{META_DESCRIPTION}" />
                <meta property="og:type" content="article" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": "{TITLE}",
                    "description": "{META_DESCRIPTION}",
                    "url": "https://yourtradepartner.com.au/resources/{SLUG}",
                    "datePublished": "{DATE_ISO}",
                    "dateModified": "{DATE_ISO}",
                    "author": { "@type": "Organization", "name": "Your Trade Partner", "url": "https://yourtradepartner.com.au" },
                    "publisher": { "@type": "Organization", "name": "Your Trade Partner", "url": "https://yourtradepartner.com.au" }
                })}</script>
            </Helmet>

            {/* Header */}
            <header className="border-b border-white/5 py-6">
                <div className="container mx-auto px-6">
                    <a href="/resources" className="inline-flex items-center gap-2 text-white hover:text-safety-orange transition-colors">
                        <span className="text-xl md:text-2xl font-black uppercase tracking-tight">← Back to Resources</span>
                    </a>
                    <Breadcrumbs
                        items={[
                            { label: 'Home', href: '/' },
                            { label: 'Resources', href: '/resources' }
                        ]}
                        currentLabel="{TITLE}"
                        currentPath="/resources/{SLUG}"
                        className="mt-5"
                    />
                </div>
            </header>

            {/* Hero */}
            <section className="py-12 md:py-16 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <Badge className="bg-safety-orange/10 text-safety-orange mb-6 hover:bg-safety-orange/10 pointer-events-none uppercase tracking-widest text-xs">
                            {CATEGORY}
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-tight">
                            {H1_PLAIN} <span className="text-safety-orange">{H1_ORANGE}</span>
                        </h1>
                        <div className="flex items-center gap-6 text-white/40 text-sm font-bold uppercase tracking-wider mb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{READ_TIME} min read</span>
                            </div>
                            <div>{MONTH_YEAR}</div>
                        </div>
                        <p className="text-xl md:text-2xl text-white/80 font-bold leading-relaxed">
                            {LEAD_PARAGRAPH}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* SECTIONS GO HERE — use the content block patterns below */}

                        <RelatedReads items={relatedReads} />

                    </div>
                </div>
            </article>

            {/* CTA */}
            <section className="py-16 md:py-20 border-t border-white/5 bg-black/40">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-6">
                            Ready to <span className="text-safety-orange">Fix This?</span>
                        </h2>
                        <p className="text-xl text-white/70 font-bold mb-8 max-w-2xl mx-auto">
                            We build websites that actually bring in work. No templates, no fluff — just a site engineered to convert your suburb's searchers into booked jobs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/#packages">
                                <Button className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    See Our Packages <ArrowRight className="ml-3 w-5 h-5" />
                                </Button>
                            </a>
                            <a href="/#contact">
                                <Button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    {CTA_SECONDARY_LABEL}
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-xs text-white/30 uppercase tracking-widest font-bold">
                        © 2026 Your Trade Partner • Built for Australian Trades
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default {COMPONENT_NAME};
```

---

## Content block library

Pick the right block for each section. Mix freely — most articles use 3–5 different block types.

### Standard prose section
```jsx
<div>
    <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
        {SECTION_TITLE}
    </h2>
    <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">{BODY_COPY}</p>
</div>
```

### Callout / pull-quote (key insight)
```jsx
<div className="bg-safety-orange/10 border-l-4 border-safety-orange p-8">
    <p className="text-2xl font-black italic">{QUOTE_TEXT}</p>
</div>
```

### Numbered / warning list inside a section
```jsx
<div className="space-y-4">
    <div className="flex gap-4 items-start">
        <div className="w-8 h-8 bg-safety-orange flex items-center justify-center flex-shrink-0 font-black text-sm">1</div>
        <div>
            <p className="font-black mb-1">{POINT_TITLE}</p>
            <p className="text-white/70 font-bold text-sm">{POINT_BODY}</p>
        </div>
    </div>
</div>
```

### Stat / data box
```jsx
<div className="bg-white/5 border border-white/10 p-8">
    <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center">
            <div className="text-4xl font-black text-safety-orange mb-2">{STAT}</div>
            <p className="text-sm text-white/60 font-bold uppercase tracking-wider">{STAT_LABEL}</p>
        </div>
    </div>
</div>
```

### Real example / case study
```jsx
<div className="bg-black/40 p-6">
    <p className="font-black mb-3 text-lg">{EXAMPLE_HEADING}</p>
    <ul className="space-y-2 text-sm text-white/80 font-bold">
        <li>• {POINT}</li>
    </ul>
</div>
```

### Inline accent (within any paragraph)
```jsx
<strong className="text-safety-orange">{HIGHLIGHTED_TEXT}</strong>
```

### Section with highlighted background (summary / bottom line)
```jsx
<div className="bg-white/5 border-l-4 border-safety-orange p-8">
    <h2 className="text-2xl font-black uppercase italic mb-4">{TITLE}</h2>
    <p className="text-lg text-white/80 font-bold leading-relaxed">{BODY}</p>
</div>
```

---

## Typography rules

| Element | Classes |
|---------|---------|
| H1 | `text-4xl md:text-6xl font-black uppercase italic leading-tight` |
| H2 | `text-2xl md:text-3xl font-black uppercase italic` |
| H3 | `text-xl font-black uppercase` |
| Body | `text-lg text-white/80 font-bold leading-relaxed` |
| Small / meta | `text-sm text-white/60 font-bold uppercase tracking-wider` |
| Orange accent text | `text-safety-orange` |
| Muted text | `text-white/40` |

---

## Step 3 — Back-link from related articles (MANDATORY — always runs)

After the JSX is written, open the JSX files for **2 of the 3** articles in `relatedReads` and add the new post as a back-link. This creates the bidirectional cluster Google needs to see.

For each of the 2 chosen articles:
1. Read the file to find its `const relatedReads = [...]` array
2. If the array already has 3 items, replace the **least topically related** entry with the new post
3. If it has fewer than 3, append the new post

Use this format when inserting:
```js
{
    href: '/resources/{SLUG}',
    title: '{TITLE}',
    description: '{META_DESCRIPTION truncated to ~100 chars}'
}
```

Pick the 2 articles whose readers have the highest likelihood of benefiting from the new post — not just the first 2 alphabetically.

---

## Step 4 — Register the route

Open `src/App.jsx`. Add the import near the other blog imports:

```jsx
import {COMPONENT_NAME} from './pages/blog/{COMPONENT_NAME}';
```

Add the route inside the router (alongside the other `/resources/*` routes):

```jsx
<Route path="/resources/{SLUG}" element={<{COMPONENT_NAME} />} />
```

---

## Step 5 — Add the hub card

Open `src/pages/Resources.jsx`. Find the `articles` array and append:

```js
{
    title: '{TITLE}',
    description: '{META_DESCRIPTION}',
    href: '/resources/{SLUG}',
    category: '{CATEGORY}',
    readTime: '{READ_TIME} min read',
    date: '{MONTH_YEAR}'
},
```

Ensure the `category` value exactly matches one of the filter strings already in use (check the existing `categories` array in Resources.jsx).

---

## Step 6 — Self-verify checklist

Before marking the task done, confirm all of the following:

- [ ] Firecrawl research ran (Step 0) — at least 2 searches completed
- [ ] Blog summary was presented to user and approved before any JSX was written
- [ ] All stats and data points in the article are sourced from Step 0 research — no invented numbers
- [ ] File created at `src/pages/blog/{COMPONENT_NAME}.jsx`
- [ ] All 6 structural regions present (root div → Helmet → header → hero → article → CTA+footer)
- [ ] `<Breadcrumbs>` rendered with correct `currentLabel` and `currentPath`
- [ ] `<Badge>` category matches a valid Resources.jsx filter category
- [ ] H1 split into plain + `<span className="text-safety-orange">` suffix
- [ ] Helmet has: title, description, keywords, canonical, robots, og:title, og:description, og:type, JSON-LD BlogPosting
- [ ] JSON-LD `datePublished` and `dateModified` set to `{DATE_ISO}`
- [ ] `<RelatedReads items={relatedReads} />` placed at the bottom of `<article>` content
- [ ] CTA section has both primary (`/#packages`) and secondary (`/#contact`) buttons
- [ ] Footer copyright line is unchanged
- [ ] 2 related existing articles updated with a back-link to the new post (Step 3)
- [ ] Route added to `src/App.jsx` with matching import
- [ ] Card added to `articles` array in `src/pages/Resources.jsx`
- [ ] `npm run build` passes with no errors
