import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MapPin, TrendingUp, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedReads from '../../components/RelatedReads';

const relatedReads = [
    {
        href: '/resources/suburb-seo-for-tradies',
        title: 'Suburb SEO for Tradies (National Guide)',
        description: 'The full framework: suburb pages, Google Business Profile service areas, and what to write to rank.'
    },
    {
        href: '/resources/suburb-seo-for-adelaide-tradies',
        title: 'Adelaide Suburb SEO for Tradies',
        description: 'The same data-backed approach applied to Adelaide — plumbing and electrical suburb priorities.'
    },
    {
        href: '/tradie-website-design-sydney',
        title: 'Tradie Website Design Sydney',
        description: 'Websites built for Sydney tradies — structured for suburb targeting from the ground up.'
    }
];

const SuburbSEOSydneyRoofers = () => {
    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans">
            <Helmet>
                <title>Sydney Suburb SEO for Roof Tilers & Metal Roofers: Where the Jobs Actually Are</title>
                <meta name="description" content="Real search data for Sydney roof tilers and metal roofers — Blacktown, Penrith, Campbelltown, Sutherland Shire and more. A data-backed priority list for Sydney roofing businesses." />
                <meta name="keywords" content="suburb seo sydney roof tiler, metal roofing sydney seo, roof restoration blacktown seo, roofing penrith local seo, sydney roofer suburb pages, colorbond roofing seo sydney" />
                <link rel="canonical" href="https://yourtradepartner.com.au/resources/suburb-seo-for-sydney-roofers" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Sydney Suburb SEO for Roof Tilers & Metal Roofers: Where the Jobs Actually Are" />
                <meta property="og:description" content="Real search data on where Sydney homeowners are looking for roofers. Which suburbs and service types to target first." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://yourtradepartner.com.au/resources/suburb-seo-for-sydney-roofers" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": "Sydney Suburb SEO for Roof Tilers & Metal Roofers: Where the Jobs Actually Are",
                    "description": "Real search data for Sydney roof tilers and metal roofers — Blacktown, Penrith, Campbelltown, Sutherland Shire and more. A data-backed priority list for Sydney roofing businesses.",
                    "url": "https://yourtradepartner.com.au/resources/suburb-seo-for-sydney-roofers",
                    "datePublished": "2026-06-08",
                    "dateModified": "2026-06-08",
                    "author": { "@type": "Person", "name": "Saharsh", "url": "https://yourtradepartner.com.au/about" },
                    "publisher": { "@type": "Organization", "name": "Your Trade Partner", "url": "https://yourtradepartner.com.au" },
                    "about": {
                        "@type": "Place",
                        "name": "Sydney",
                        "addressRegion": "NSW",
                        "addressCountry": "AU"
                    }
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
                        currentLabel="Sydney Suburb SEO for Roofers"
                        currentPath="/resources/suburb-seo-for-sydney-roofers"
                        className="mt-5"
                    />
                </div>
            </header>

            {/* Hero */}
            <section className="py-12 md:py-16 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <Badge className="bg-safety-orange/10 text-safety-orange hover:bg-safety-orange/10 pointer-events-none uppercase tracking-widest text-xs">
                                Local SEO
                            </Badge>
                            <Badge className="bg-white/5 text-white/50 hover:bg-white/5 pointer-events-none uppercase tracking-widest text-xs flex items-center gap-1">
                                <MapPin className="w-3 h-3" /> Sydney, NSW
                            </Badge>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-tight">
                            Sydney Suburb SEO for Roofers: <span className="text-safety-orange">Where the Jobs Actually Are</span>
                        </h1>
                        <div className="flex items-center gap-6 text-white/40 text-sm font-bold uppercase tracking-wider mb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 min read</span>
                            </div>
                            <div>June 2026</div>
                        </div>
                        <p className="text-xl md:text-2xl text-white/80 font-bold leading-relaxed">
                            Real search data for Sydney roof tilers and metal roofers — which suburbs generate the most demand, where competition is light, and what keyword pattern your suburb pages should actually target.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-14">

                        {/* Section 1: Wrong keyword */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                "Roof Tiler Sydney" Is a Trap
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                "Roof tiler Sydney" gets <strong className="text-safety-orange">50 searches per month</strong>. Google Ads advertisers are paying <strong className="text-safety-orange">$28.29 per click</strong> for it. Competition is HIGH. You'd be fighting established roofing chains and national platforms — for a keyword that barely anyone searches.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Meanwhile: <strong className="text-safety-orange">"metal roofing Sydney"</strong> gets <strong className="text-safety-orange">480 searches per month</strong> with <strong className="text-safety-orange">LOW competition</strong>. Same city, ten times the search volume, a fraction of the fight.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Then look at the suburb level. "Roof restoration Blacktown" gets <strong className="text-safety-orange">390 monthly searches</strong> with MEDIUM competition. Nobody's made an educational blog post about which Sydney suburbs roofers should target with real data — they're all still chasing the city-level terms.
                            </p>
                            <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                                <h3 className="font-black text-lg mb-4">How Sydney Homeowners Actually Search for Roofers:</h3>
                                <div className="grid md:grid-cols-2 gap-6 text-sm">
                                    <div>
                                        <p className="font-black text-white/50 mb-3">❌ What most roofers target:</p>
                                        <ul className="space-y-2 text-white/40">
                                            <li>• "roof tiler Sydney"</li>
                                            <li>• "roofing contractor Sydney"</li>
                                            <li>• "best roofer near me"</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-black text-safety-orange mb-3">✓ What homeowners are actually typing:</p>
                                        <ul className="space-y-2 text-white/80">
                                            <li>• "roof restoration Blacktown"</li>
                                            <li>• "metal roofing Sydney"</li>
                                            <li>• "roofing Penrith"</li>
                                            <li>• "roofing Sutherland Shire"</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Why roofing is different */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Why Roofing Keywords Work Differently to Other Trades
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Plumbing and electrical searches are dominated by a simple pattern: <em>"plumber [suburb]"</em>. Roofing has two dimensions you need to think about at the same time:
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <p className="font-black text-safety-orange mb-3 uppercase tracking-wider text-sm">Dimension 1: Service Type</p>
                                    <ul className="space-y-2 text-sm text-white/70 font-bold">
                                        <li>• <strong className="text-white">"roofing [area]"</strong> — broad searches, includes new builds and full replacements</li>
                                        <li>• <strong className="text-white">"roof restoration [suburb]"</strong> — existing homeowners maintaining or restoring</li>
                                        <li>• <strong className="text-white">"metal roofing / colorbond [suburb]"</strong> — product-specific, already decided on the material</li>
                                    </ul>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <p className="font-black text-safety-orange mb-3 uppercase tracking-wider text-sm">Dimension 2: Geographic Scale</p>
                                    <ul className="space-y-2 text-sm text-white/70 font-bold">
                                        <li>• Some areas search by specific suburb: "roofing Blacktown"</li>
                                        <li>• Others search by region: "roofing Sutherland Shire" outperforms any individual Sutherland suburb</li>
                                        <li>• Match your page to how people actually search the area</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                This means a Sydney roofer needs suburb pages <em>and</em> service-type targeting to cover the full search landscape. "Metal roofing Penrith" and "roof restoration Penrith" are two different searches, likely from two different homeowners — one looking at a full reroof, one with a deteriorating tile roof. You can target both on the same page if you structure it right.
                            </p>
                        </div>

                        {/* Section 3: The data */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                The Real Search Numbers for Sydney Roofing
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-8">
                                Below is actual Google Ads search volume data for Sydney suburb and roofing combinations. CPC is what advertisers are paying per click — a high CPC means roofers in that area are paying serious money per lead because the jobs convert at high values.
                            </p>

                            {/* City-level table */}
                            <div className="mb-10">
                                <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                                    <span className="text-safety-orange">—</span> City-Level Keywords (The Starting Point)
                                </h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="border-b border-white/20">
                                                <th className="text-left py-3 pr-6 font-black uppercase tracking-wider text-white/50">Keyword</th>
                                                <th className="text-right py-3 pr-6 font-black uppercase tracking-wider text-white/50">Monthly Searches</th>
                                                <th className="text-right py-3 pr-6 font-black uppercase tracking-wider text-white/50">Competition</th>
                                                <th className="text-right py-3 font-black uppercase tracking-wider text-white/50">Google Ads CPC</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Metal roofing Sydney</td>
                                                <td className="py-3 pr-6 text-right font-bold text-safety-orange">480</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-green-400 font-bold">LOW</span></td>
                                                <td className="py-3 text-right font-bold text-white">$12.96</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roof restoration Sydney</td>
                                                <td className="py-3 pr-6 text-right font-bold text-safety-orange">480</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$15.08</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Colorbond roofing Sydney</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">140</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$11.73</td>
                                            </tr>
                                            <tr className="opacity-50">
                                                <td className="py-3 pr-6 font-bold text-white">Roof tiler Sydney</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">50</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-red-400 font-bold">HIGH</span></td>
                                                <td className="py-3 text-right font-bold text-white">$28.29</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-xs text-white/40 font-bold mt-3">Note: "metal roofing Sydney" and "metal roofer Sydney" returned identical data — both 480/mo, LOW competition — they're treated as the same keyword intent by Google.</p>
                            </div>

                            {/* Western Sydney table */}
                            <div className="mb-10">
                                <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                                    <span className="text-safety-orange">—</span> Western Sydney — The Volume Market
                                </h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="border-b border-white/20">
                                                <th className="text-left py-3 pr-6 font-black uppercase tracking-wider text-white/50">Search Term</th>
                                                <th className="text-right py-3 pr-6 font-black uppercase tracking-wider text-white/50">Monthly Searches</th>
                                                <th className="text-right py-3 pr-6 font-black uppercase tracking-wider text-white/50">Competition</th>
                                                <th className="text-right py-3 font-black uppercase tracking-wider text-white/50">Google Ads CPC</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roof restoration Blacktown</td>
                                                <td className="py-3 pr-6 text-right font-bold text-safety-orange">390</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$17.02</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roofing Penrith</td>
                                                <td className="py-3 pr-6 text-right font-bold text-safety-orange">210</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-red-400 font-bold">HIGH</span></td>
                                                <td className="py-3 text-right font-bold text-white">$15.08</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roofing Liverpool</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">170</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$8.12</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roofing Campbelltown</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">110</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-green-400 font-bold">LOW</span></td>
                                                <td className="py-3 text-right font-bold text-white">$11.01</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roofing Blacktown</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">110</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$12.93</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roof restoration Penrith</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">110</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-red-400 font-bold">HIGH</span></td>
                                                <td className="py-3 text-right font-bold text-white">$11.84</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roof restoration Campbelltown</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">50</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-red-400 font-bold">HIGH</span></td>
                                                <td className="py-3 text-right font-bold text-white">$15.44</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Northern Corridor + Sutherland Shire */}
                            <div className="mb-10">
                                <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                                    <span className="text-safety-orange">—</span> Northern Corridor & Sutherland Shire
                                </h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="border-b border-white/20">
                                                <th className="text-left py-3 pr-6 font-black uppercase tracking-wider text-white/50">Search Term</th>
                                                <th className="text-right py-3 pr-6 font-black uppercase tracking-wider text-white/50">Monthly Searches</th>
                                                <th className="text-right py-3 pr-6 font-black uppercase tracking-wider text-white/50">Competition</th>
                                                <th className="text-right py-3 font-black uppercase tracking-wider text-white/50">Google Ads CPC</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roofing Hornsby</td>
                                                <td className="py-3 pr-6 text-right font-bold text-safety-orange">140</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$15.10</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roofing Sutherland Shire</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">90</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$21.83</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roofing Ryde</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">40</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$26.67</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roofing Baulkham Hills</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">40</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-green-400 font-bold">LOW</span></td>
                                                <td className="py-3 text-right font-bold text-white">$15.87</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roof restoration Sutherland Shire</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">30</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-red-400 font-bold">HIGH</span></td>
                                                <td className="py-3 text-right font-bold text-white">$16.63</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roofing Castle Hill</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">20</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-green-400 font-bold">LOW</span></td>
                                                <td className="py-3 text-right font-bold text-white">$8.70</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="bg-black/40 border-l-4 border-white/20 p-5 mt-6">
                                <p className="text-sm text-white/50 font-bold">
                                    Note: Search volumes are national figures from Google Ads data (June 2026). Blacktown, Penrith, Campbelltown, Liverpool, and Hornsby are predominantly NSW suburbs — the large majority of these searches originate from Greater Sydney. "Sutherland Shire" as a search term is uniquely Sydney. CPC data is also from Google Ads.
                                </p>
                            </div>
                        </div>

                        {/* Section 4: Three clusters */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-8 border-b-2 border-safety-orange pb-2 inline-block">
                                Three Sydney Clusters. Three Different Approaches.
                            </h2>

                            <div className="space-y-8">

                                {/* Cluster 1 */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <TrendingUp className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-1">Western Sydney: Volume Play</h3>
                                            <p className="text-white/50 text-sm font-bold uppercase tracking-wider">Blacktown · Penrith · Campbelltown · Liverpool · Seven Hills</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>
                                            This is where the bulk of Sydney roofing search volume concentrates. <strong className="text-safety-orange">"Roof restoration Blacktown"</strong> pulls 390 searches per month with MEDIUM competition — the standout keyword in the entire dataset. Large residential populations, high density of freestanding homes from the 1970s–90s with ageing terracotta tile roofs, and strong demand for both restoration and colorbond replacement.
                                        </p>
                                        <p>
                                            Penrith is the other major hub: 210/mo for "roofing Penrith" and 110/mo for "roof restoration Penrith" — though competition is HIGH for Penrith. The SERP for "roof tiler Penrith" shows dedicated location pages from roofranger.com.au (who has built suburb pages for 37 western Sydney areas) and several established local businesses. You're not fighting nothing here.
                                        </p>
                                        <p>
                                            The hidden opportunity in Western Sydney is <strong className="text-safety-orange">Campbelltown</strong>: 110 monthly searches for "roofing Campbelltown" with <strong className="text-safety-orange">LOW competition (index 21)</strong>. Campbelltown is growing rapidly, has plenty of older housing stock, and the data shows fewer roofers have built dedicated pages there compared to Blacktown and Penrith.
                                        </p>
                                        <div className="bg-black/40 p-5 mt-2">
                                            <p className="font-black text-sm mb-2 text-white/60">Best fit:</p>
                                            <p className="text-sm">Roof tilers and metal roofers based in or servicing Western Sydney. Blacktown and Campbelltown offer the best volume-to-competition ratio in the dataset. Liverpool is steady volume with medium competition — worth targeting once Blacktown is ranking.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Cluster 2 */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <span className="text-white font-black text-lg">$</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-1">Northern Corridor: CPC Play</h3>
                                            <p className="text-white/50 text-sm font-bold uppercase tracking-wider">Hornsby · Baulkham Hills · Ryde · Castle Hill · Kellyville</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>
                                            The CPC numbers here are telling. Ryde is paying <strong className="text-safety-orange">$26.67 per click</strong> — the highest in the whole dataset — for only 40 monthly searches. That means the roofers bidding there are doing it because those jobs convert at high values. Established homeowners in middle-ring Sydney suburbs, quality-focused, more willing to pay for premium materials and workmanship.
                                        </p>
                                        <p>
                                            Hornsby has the best volume in this cluster at 140/mo with MEDIUM competition and a $15.10 CPC. It's where most tradies in the northern corridor would start.
                                        </p>
                                        <p>
                                            But the standout here is <strong className="text-safety-orange">Baulkham Hills</strong>. Only 40 monthly searches — but a competition index of <strong className="text-safety-orange">just 8</strong>. A competition index of 8 means almost no one is running Google Ads for that term, which in the roofing context strongly suggests almost no local roofers have built a dedicated page for it either. A well-built "roofing Baulkham Hills" page with genuine local content could own that suburb search with very little resistance.
                                        </p>
                                        <div className="bg-black/40 p-5 mt-2">
                                            <p className="font-black text-sm mb-2 text-white/60">Best fit:</p>
                                            <p className="text-sm">Roofers who service the northern suburbs and want higher average job values over raw volume. Baulkham Hills is an easy win right now. Ryde and Hornsby are worth targeting for established businesses with some domain authority already.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Cluster 3 */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-1">Sutherland Shire: Premium Play</h3>
                                            <p className="text-white/50 text-sm font-bold uppercase tracking-wider">Miranda · Cronulla · Sutherland · Caringbah · Gymea</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>
                                            Something unique happens in the Sutherland Shire: homeowners don't search for individual suburb names — they search for the region. <strong className="text-safety-orange">"Roofing Sutherland Shire"</strong> gets 90 monthly searches at $21.83 CPC. "Roofing Cronulla" or "roofing Miranda" return no trackable search volume individually. The Shire has a strong local identity and that's reflected in how people search.
                                        </p>
                                        <p>
                                            The implication: if you service the Sutherland Shire, you don't need to build 8 individual suburb pages for Cronulla, Miranda, Caringbah, and Gymea separately. <strong className="text-safety-orange">One well-built "roofing Sutherland Shire" page</strong> that mentions all those suburbs is the right move — and MEDIUM competition at $21.83 CPC signals the jobs that come from it are worth chasing.
                                        </p>
                                        <p>
                                            High property values, coastal demographics, and homeowners who maintain and improve their properties make this a quality-over-quantity market. Fewer volume searches, but higher conversion value per lead.
                                        </p>
                                        <div className="bg-black/40 p-5 mt-2">
                                            <p className="font-black text-sm mb-2 text-white/60">Best fit:</p>
                                            <p className="text-sm">Any roofer working the Shire. One page targeting "roofing Sutherland Shire" + covering Cronulla, Miranda, Caringbah, Sutherland, and Gymea in the body copy. That's the right structure — not a page per suburb for this area.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 5: Who you're competing against */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Who You're Actually Up Against
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Here's what comes up when you search "roof tiler Penrith" from Sydney — the highest-volume established roofing suburb in the data:
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="bg-white/5 border border-white/10 p-5">
                                    <p className="font-black text-safety-orange mb-2 text-sm uppercase tracking-wider">Local Pack (Map Results)</p>
                                    <p className="text-white/70 text-sm font-bold">Three local businesses shown — Restore Roof Restorations, Penrith Roof Restoration Experts, and Ready Roof Restorations. All are local operators with 18–47 reviews. None are large national chains. These are businesses that built their Google Business Profile properly and have accumulated reviews consistently.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-5">
                                    <p className="font-black text-safety-orange mb-2 text-sm uppercase tracking-wider">Organic Results</p>
                                    <p className="text-white/70 text-sm font-bold mb-3">Results in order:</p>
                                    <ul className="space-y-2 text-sm text-white/70">
                                        <li><strong className="text-white">1. All Quality Roofing</strong> — dedicated Penrith homepage, 20+ years of experience signals</li>
                                        <li><strong className="text-white">2. Bellan Roofing</strong> — local Penrith operator with a suburb-specific service page</li>
                                        <li><strong className="text-white">3. hipages</strong> — marketplace; always ranks for local tradie searches</li>
                                        <li><strong className="text-white">4. Roof Ranger</strong> — ranks with a dedicated <span className="text-safety-orange">/locations/roof-restoration-western-sydney/penrith/</span> page, part of a 37-suburb hub-and-spoke site</li>
                                        <li><strong className="text-white">5–6. Silverleaf Roofing, penrithroofing.com.au, Rapid Roof Services</strong> — local operators with dedicated suburb pages</li>
                                        <li><strong className="text-white">7. SEEK (jobs)</strong> — ranking on "roof tiler Penrith" because 87 roof tiling job ads exist there — a signal of how active the market is</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-black/40 border-l-4 border-safety-orange p-6">
                                <p className="font-black mb-2 text-safety-orange">The Roof Ranger pattern is the one to watch.</p>
                                <p className="text-white/80 font-bold">
                                    Roof Ranger built 37 separate suburb pages under a single domain — <code className="text-safety-orange">/locations/roof-restoration-western-sydney/[suburb]/</code>. That hub-and-spoke structure lets them rank for dozens of suburb searches with one website. They're the most systematically competitive operator in Western Sydney. Every organic result that isn't a marketplace is a roofing business with a dedicated suburb or location page.
                                </p>
                                <p className="text-white/80 font-bold mt-3">
                                    A general "we cover all of Sydney" page won't outrank any of these. But a well-built "roofing Campbelltown" page targeting the LOW-competition keyword? That's a different fight.
                                </p>
                            </div>
                        </div>

                        {/* Section 6: How to build the page */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                How to Build a Sydney Suburb Page for Roofing
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-8">
                                The structure is straightforward — the differentiation is in the content. Most roofers who do build suburb pages just swap the name in a template. That's not enough to win against operators who have been in those suburbs for years.
                            </p>

                            <div className="bg-white/5 border border-white/10 p-8 space-y-6">
                                <div>
                                    <p className="font-black mb-2 text-safety-orange">URL Structure</p>
                                    <p className="text-sm text-white/70 mb-2">Match the exact keyword pattern that gets volume:</p>
                                    <div className="space-y-2">
                                        <div className="bg-black/40 px-4 py-3 font-mono text-sm text-safety-orange">
                                            yoursite.com.au/roof-restoration-blacktown
                                        </div>
                                        <div className="bg-black/40 px-4 py-3 font-mono text-sm text-safety-orange">
                                            yoursite.com.au/roofing-campbelltown
                                        </div>
                                        <div className="bg-black/40 px-4 py-3 font-mono text-sm text-safety-orange">
                                            yoursite.com.au/roofing-sutherland-shire
                                        </div>
                                    </div>
                                    <p className="text-xs text-white/40 mt-2">The URL should match the primary keyword. "Roof restoration Blacktown" is the highest-volume term — use that, not a generic "/service-areas/blacktown" structure.</p>
                                </div>

                                <div>
                                    <p className="font-black mb-2 text-safety-orange">H1 Title</p>
                                    <div className="bg-black/40 px-4 py-3 font-bold text-white/80 text-sm italic">
                                        "Roof Restoration Blacktown | [Your Business Name] — Free Quote, Licensed"
                                    </div>
                                </div>

                                <div>
                                    <p className="font-black mb-3 text-safety-orange">Content That Earns the Ranking (Not Just Name-Swaps)</p>
                                    <p className="text-sm text-white/60 mb-4">Include details that are specific to that suburb. Roof Ranger mentions "Penrith homes are exposed to intense heat, strong UV and heavy seasonal storms" — that's genuine local context. Include things like:</p>
                                    <ul className="space-y-3 text-sm text-white/70 font-bold">
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Housing stock context: "Most Blacktown homes were built between the 1970s and 1990s — terracotta tile roofs from that era are now 30–50 years old and often due for restoration or replacement."</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Service type signals: if you do both tile restoration and colorbond reroofing, say so explicitly — "We restore existing terracotta roofs or replace with Colorbond steel — whichever makes more financial sense for the age of your roof."</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Surrounding suburb coverage: "We also service Seven Hills, Kings Langley, Toongabbie, and the surrounding western suburbs" — this picks up adjacent suburb searches from the same page.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>FAQ section: "How long does a roof restoration last in Western Sydney?" and "Is Colorbond worth it compared to re-tiling?" — these directly match People Also Ask questions showing up in the Penrith SERP.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-safety-orange/10 border border-safety-orange/20 p-5">
                                    <p className="font-black mb-2">⚠️ Don't build 30 identical pages at once</p>
                                    <p className="text-sm text-white/80">
                                        Roof Ranger's 37-suburb model works because it's an established business with strong domain authority. Starting from scratch with 30 thin suburb pages is a Google penalty risk. Build 4–5 well-differentiated pages first, let them index and rank, then add more. Quality beats volume until your domain has earned some trust.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 7: Priority list */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Where to Start: Priority List by Goal
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-8">
                                Build 4–5 pages first. Let them rank. Then expand. Don't launch 20 at once — Google needs time to crawl, index, and trust new suburb pages.
                            </p>

                            <div className="space-y-6">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="font-black uppercase text-safety-orange mb-4">Roof Tilers — Full Reroof & Tile Work</h3>
                                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">Start here (volume)</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Blacktown (390/mo)</li>
                                                <li>• Penrith (210/mo)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">Add next</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Liverpool (170/mo)</li>
                                                <li>• Hornsby (140/mo)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">Easy wins (low competition)</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Campbelltown (LOW)</li>
                                                <li>• Baulkham Hills (index: 8)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="font-black uppercase text-safety-orange mb-4">Metal Roofers / Colorbond Specialists</h3>
                                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">City-level first</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Metal roofing Sydney (480/mo, LOW comp)</li>
                                                <li>• Colorbond roofing Sydney (140/mo)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">Then suburb pages</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Blacktown</li>
                                                <li>• Penrith</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">Premium market</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Sutherland Shire ($21.83 CPC)</li>
                                                <li>• Ryde ($26.67 CPC)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="font-black uppercase text-safety-orange mb-4">Sutherland Shire Specialists</h3>
                                    <p className="text-white/70 text-sm font-bold">
                                        Build one region page targeting "roofing Sutherland Shire" with suburb mentions (Cronulla, Miranda, Caringbah, Gymea, Sutherland) woven into the body copy and FAQ. Do not build separate suburb pages for each — the data shows people search the region name, not individual suburbs. That page, done well, captures the whole market.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Line */}
                        <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                            <h2 className="text-2xl font-black uppercase italic mb-4">The Short Version</h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                Stop chasing "roof tiler Sydney" — 50 searches, HIGH competition, $28.29 a click. <strong className="text-safety-orange">"Metal roofing Sydney"</strong> is 480/mo with LOW competition. <strong className="text-safety-orange">"Roof restoration Blacktown"</strong> is 390/mo at MEDIUM. <strong className="text-safety-orange">"Roofing Campbelltown"</strong> is 110/mo at LOW competition.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                The searches are there. The competition on the specific suburb terms is not locked up — especially outside of Penrith. Most Sydney roofers are still targeting generic city-wide keywords and hoping the local pack does the rest.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                Build 4 targeted suburb or region pages. Nail the local context for each one — Blacktown housing ages, Campbelltown growth, Sutherland Shire regional identity. A focused suburb page will consistently outrank a generic homepage from a roofer who "covers all of Sydney."
                            </p>
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
                            Want Sydney Suburb Pages <span className="text-safety-orange">Built For You?</span>
                        </h2>
                        <p className="text-xl text-white/70 font-bold mb-8 max-w-2xl mx-auto">
                            We build suburb-specific pages for Sydney roofers — structured for local ranking, written with real local context, not generic name-swap templates.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/#packages">
                                <Button className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    See Our Packages <ArrowRight className="ml-3 w-5 h-5" />
                                </Button>
                            </a>
                            <a href="/tradie-website-design-sydney">
                                <Button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    Sydney Website Info
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

export default SuburbSEOSydneyRoofers;
