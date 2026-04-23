import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Clock } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedReads from '../../components/RelatedReads';

const relatedReads = [
    {
        href: '/resources/aeo-for-tradies',
        title: 'AEO for Tradies: How to Get Featured in ChatGPT & AI Search',
        description: 'The playbook for getting your business recommended by ChatGPT, Perplexity, and Google AI — not just ranked.'
    },
    {
        href: '/resources/suburb-seo-for-tradies',
        title: "How to Rank for 'Tradie + Your Suburb' Searches",
        description: 'Suburb-specific pages and local signals that still drive bookings in the AI era.'
    },
    {
        href: '/resources/why-tradie-websites-dont-get-calls',
        title: "Why Most Tradie Websites Don't Get Calls",
        description: "78% of homeowners research online before contacting a tradie — here's what makes them pick up the phone."
    }
];

const GoogleAIOverviewsTradieLeads = () => {
    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans">
            <Helmet>
                <title>How Google's AI Is Stealing Your Tradie Leads (And What To Do About It) | Your Trade Partner</title>
                <meta name="description" content="Google AI Overviews now intercept 47% of Australian searches before users click. Find out why tradies are losing leads to AI — and the exact steps to get cited instead." />
                <meta name="keywords" content="Google AI Overviews tradies, AI search local SEO Australia, tradie leads 2026" />
                <link rel="canonical" href="https://yourtradepartner.com.au/resources/google-ai-overviews-tradie-leads" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="How Google's AI Is Stealing Your Tradie Leads (And What To Do About It)" />
                <meta property="og:description" content="Google AI Overviews now intercept 47% of Australian searches before users click. Find out why tradies are losing leads to AI — and the exact steps to get cited instead." />
                <meta property="og:type" content="article" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": "How Google's AI Is Stealing Your Tradie Leads (And What To Do About It)",
                    "description": "Google AI Overviews now intercept 47% of Australian searches before users click. Find out why tradies are losing leads to AI — and the exact steps to get cited instead.",
                    "url": "https://yourtradepartner.com.au/resources/google-ai-overviews-tradie-leads",
                    "datePublished": "2026-04-23",
                    "dateModified": "2026-04-23",
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
                        currentLabel="How Google's AI Is Stealing Your Tradie Leads"
                        currentPath="/resources/google-ai-overviews-tradie-leads"
                        className="mt-5"
                    />
                </div>
            </header>

            {/* Hero */}
            <section className="py-12 md:py-16 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <Badge className="bg-safety-orange/10 text-safety-orange mb-6 hover:bg-safety-orange/10 pointer-events-none uppercase tracking-widest text-xs">
                            AI Search
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-tight">
                            How Google's AI Is{' '}
                            <span className="text-safety-orange">Stealing Your Leads</span>
                        </h1>
                        <div className="flex items-center gap-6 text-white/40 text-sm font-bold uppercase tracking-wider mb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>6 min read</span>
                            </div>
                            <div>April 2026</div>
                        </div>
                        <p className="text-xl md:text-2xl text-white/80 font-bold leading-relaxed">
                            Google's AI now answers "best plumber in [suburb]" before anyone visits your website. If your business isn't structured to feed that AI machine, your competitor — probably someone with worse skills but better-formatted content — is getting the call instead.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* Section 1 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                What Are AI Overviews and Why Should Tradies Care Right Now?
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                In October 2025, Google rolled out <strong className="text-safety-orange">AI Mode across Australia</strong>. Instead of showing a list of blue links, Google now generates a written answer at the top of the page — pulling from websites it considers authoritative — before any organic result appears. These are called AI Overviews.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                For a homeowner searching "emergency plumber Parramatta" or "best electrician Sydney north shore," that AI Overview might name one or two businesses directly — and answer the question so completely that the user never scrolls down to click anything else.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                If your business isn't one of the ones being cited, you're invisible. Not just low on page two — genuinely invisible, even if you've been ranking #1 for years.
                            </p>
                        </div>

                        {/* Stat box */}
                        <div className="bg-white/5 border border-white/10 p-8">
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl font-black text-safety-orange mb-2">47%</div>
                                    <p className="text-sm text-white/60 font-bold uppercase tracking-wider">of AU searches now show an AI Overview</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-black text-safety-orange mb-2">70%</div>
                                    <p className="text-sm text-white/60 font-bold uppercase tracking-wider">drop in click-through when AI Overview is present</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-black text-safety-orange mb-2">Oct '25</div>
                                    <p className="text-sm text-white/60 font-bold uppercase tracking-wider">Google AI Mode went live in Australia</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                The 47% Problem: How AI Is Cutting Your Enquiry Rate
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Before AI Overviews, if you ranked #1 for "roof repairs Brisbane Northside," you'd capture roughly 28–35% of clicks for that query. Now, when an AI Overview appears above your result, that click-through rate drops by up to 70%. Your ranking didn't change. Your website didn't change. But your leads did.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                This is the core problem: tradies are judging their online performance by old metrics. If your Google Search Console shows the same impressions but fewer clicks than 6 months ago, you're already seeing the AI Overview effect — you just didn't know what to call it.
                            </p>
                            <div className="bg-safety-orange/10 border-l-4 border-safety-orange p-8">
                                <p className="text-2xl font-black italic">"Ranking #1 used to mean winning the search. Now it might just mean being the first result nobody clicks."</p>
                            </div>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Why "Ranking #1 on Google" Doesn't Mean What It Used To
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Traditional SEO was about ranking position. The higher you were, the more clicks you got. That logic held for 20 years. It's now breaking down — fast.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Today there are effectively <strong className="text-safety-orange">two separate competitions</strong> happening for every local search:
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 bg-safety-orange flex items-center justify-center flex-shrink-0 font-black text-sm">1</div>
                                    <div>
                                        <p className="font-black mb-1">The AI Overview competition</p>
                                        <p className="text-white/70 font-bold text-sm">Google's AI decides which 2–3 businesses to mention in the generated answer at the top of the page. This is won by structured content, schema markup, reviews, and authority — not just keyword density.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 bg-safety-orange flex items-center justify-center flex-shrink-0 font-black text-sm">2</div>
                                    <div>
                                        <p className="font-black mb-1">The organic blue link competition</p>
                                        <p className="text-white/70 font-bold text-sm">The traditional search results that appear below the AI Overview. Still important, but now capturing a far smaller share of clicks. The users who scroll past the AI answer are often already informed and further down the decision funnel.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mt-6">
                                If you're only playing the organic SEO game, you're ignoring the competition that now decides most of the traffic. The good news: the tactics that win AI Overviews also tend to improve your organic rankings anyway.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                The 5 Things That Make Google's AI Cite Your Business
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-8">
                                Google's AI pulls from sources it trusts. Here's what earns that trust for a local tradie business:
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 bg-safety-orange flex items-center justify-center flex-shrink-0 font-black text-sm">1</div>
                                    <div>
                                        <p className="font-black mb-1">Structured data (schema markup)</p>
                                        <p className="text-white/70 font-bold text-sm">LocalBusiness, Service, and FAQPage schema tell Google's AI exactly what you do, where you operate, and what your customers ask. Without it, the AI has to guess — and it often guesses wrong, or picks a competitor with clearer signals.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 bg-safety-orange flex items-center justify-center flex-shrink-0 font-black text-sm">2</div>
                                    <div>
                                        <p className="font-black mb-1">Direct-answer content format</p>
                                        <p className="text-white/70 font-bold text-sm">AI Overviews are generated by extracting concise answers from web pages. If your site buries the answer in fluffy paragraphs, the AI skips you. Write short, factual, question-answer blocks that state the most important point in the first sentence.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 bg-safety-orange flex items-center justify-center flex-shrink-0 font-black text-sm">3</div>
                                    <div>
                                        <p className="font-black mb-1">Google Business Profile with recent reviews</p>
                                        <p className="text-white/70 font-bold text-sm">Your GBP is still the strongest local signal. Businesses with 50+ reviews, a 4.5+ rating, and regular activity (posts, Q&A replies) are far more likely to be surfaced in AI answers for local queries.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 bg-safety-orange flex items-center justify-center flex-shrink-0 font-black text-sm">4</div>
                                    <div>
                                        <p className="font-black mb-1">E-E-A-T signals on your website</p>
                                        <p className="text-white/70 font-bold text-sm">Experience, Expertise, Authoritativeness, Trustworthiness. This means: your licence number displayed, real photos of your team and work, suburb-specific service pages, and testimonials that name the location and job type. Generic "we're the best" copy does nothing for E-E-A-T.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 bg-safety-orange flex items-center justify-center flex-shrink-0 font-black text-sm">5</div>
                                    <div>
                                        <p className="font-black mb-1">Fast, technically clean website</p>
                                        <p className="text-white/70 font-bold text-sm">AI Overviews pull from pages Google can crawl and render quickly. A slow site, broken mobile layout, or missing sitemap actively hurts your chances of being cited — regardless of how good your content is.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Case study */}
                        <div className="bg-black/40 p-6">
                            <p className="font-black mb-3 text-lg">What this looks like in practice:</p>
                            <ul className="space-y-2 text-sm text-white/80 font-bold">
                                <li>• A plumber in Melbourne's inner north added FAQ schema, rewrote service pages with direct-answer formatting, and pushed a review campaign. Within 8 weeks, his business appeared in AI Overviews for 11 suburb-specific queries — queries where he previously only ranked #4–6 organically.</li>
                                <li>• His organic traffic stayed roughly flat. But his phone enquiries from new customers increased 34% in the same period. The AI Overview effect in reverse: instead of losing clicks, he captured them from competitors who weren't cited.</li>
                            </ul>
                        </div>

                        {/* Section 5 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                What a Tradie Website Needs to Win in the AI Era
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Most tradie websites built before 2024 were designed for one thing: looking decent and showing up on Google. That's no longer enough. A website that wins in 2026 needs to be built to feed AI systems, not just impress human visitors.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Concretely, that means:
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 bg-safety-orange flex items-center justify-center flex-shrink-0 font-black text-sm">✓</div>
                                    <div>
                                        <p className="font-black mb-1">Service pages written in Q&A format with schema</p>
                                        <p className="text-white/70 font-bold text-sm">Each major service gets its own page. Each page answers the 3–5 questions homeowners actually search — structured as H2 questions with short, factual answers directly below.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 bg-safety-orange flex items-center justify-center flex-shrink-0 font-black text-sm">✓</div>
                                    <div>
                                        <p className="font-black mb-1">Suburb pages that are genuinely local — not copy-pasted</p>
                                        <p className="text-white/70 font-bold text-sm">AI can detect thin content. A page that just swaps "[suburb]" into a generic template won't get cited. Real suburb pages reference local landmarks, past jobs in the area, and community-specific context.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 bg-safety-orange flex items-center justify-center flex-shrink-0 font-black text-sm">✓</div>
                                    <div>
                                        <p className="font-black mb-1">Licence, insurance, and credentials clearly marked up</p>
                                        <p className="text-white/70 font-bold text-sm">These are trust signals that AI specifically looks for. They need to be on every service page, not just buried in an "About" footer.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="w-8 h-8 bg-safety-orange flex items-center justify-center flex-shrink-0 font-black text-sm">✓</div>
                                    <div>
                                        <p className="font-black mb-1">Core Web Vitals passing on mobile</p>
                                        <p className="text-white/70 font-bold text-sm">Google's AI pulls from pages it can index fast. LCP under 2.5s, no layout shift, instant mobile responsiveness. Most template website builders fail this — purpose-built sites don't.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                                <h2 className="text-2xl font-black uppercase italic mb-4">The Bottom Line</h2>
                                <p className="text-lg text-white/80 font-bold leading-relaxed">
                                    AI Overviews aren't going away — they're expanding. Every month, more Australian search queries trigger an AI-generated answer at the top of the page. Tradies who wait for "things to settle down" are watching their lead pipeline quietly drain. The businesses who move now — who restructure their websites for AI citation, not just organic ranking — are the ones who'll own the next 5 years of local search. The investment is the same as building a proper website. The difference is whether it's built for 2019 or 2026.
                                </p>
                            </div>
                        </div>

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
                                    Get a Free AI Readiness Audit
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

export default GoogleAIOverviewsTradieLeads;
