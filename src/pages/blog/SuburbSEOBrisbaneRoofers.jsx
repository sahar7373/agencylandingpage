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
        href: '/resources/suburb-seo-for-sydney-roofers',
        title: 'Sydney Suburb SEO for Roof Tilers & Metal Roofers',
        description: 'The same data-backed approach applied to Sydney — Blacktown, Penrith, Sutherland Shire and more.'
    },
    {
        href: '/tradie-website-design-brisbane',
        title: 'Tradie Website Design Brisbane',
        description: 'Websites built for Brisbane tradies — structured for suburb targeting from the ground up.'
    }
];

const SuburbSEOBrisbaneRoofers = () => {
    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans">
            <Helmet>
                <title>Brisbane Suburb SEO for Roofers: Where the Jobs Actually Are (The Data Surprises)</title>
                <meta name="description" content="Real search data for Brisbane roof tilers and metal roofers — Caboolture, Ipswich, Logan, Sunshine Coast and more. A data-backed priority list for Brisbane roofing businesses." />
                <meta name="keywords" content="suburb seo brisbane roofer, roofing caboolture seo, metal roofing brisbane seo, roof restoration ipswich, brisbane roofer suburb pages, sunshine coast roofing seo" />
                <link rel="canonical" href="https://yourtradepartner.com.au/resources/suburb-seo-for-brisbane-roofers" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Brisbane Suburb SEO for Roofers: Where the Jobs Actually Are (The Data Surprises)" />
                <meta property="og:description" content="Real search data on where Brisbane homeowners are looking for roofers. Which suburbs and regions to target first — including one market most Brisbane roofers completely ignore." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://yourtradepartner.com.au/resources/suburb-seo-for-brisbane-roofers" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": "Brisbane Suburb SEO for Roofers: Where the Jobs Actually Are (The Data Surprises)",
                    "description": "Real search data for Brisbane roof tilers and metal roofers — Caboolture, Ipswich, Logan, Sunshine Coast and more. A data-backed priority list for Brisbane roofing businesses.",
                    "url": "https://yourtradepartner.com.au/resources/suburb-seo-for-brisbane-roofers",
                    "datePublished": "2026-06-08",
                    "dateModified": "2026-06-08",
                    "author": { "@type": "Person", "name": "Saharsh", "url": "https://yourtradepartner.com.au/about" },
                    "publisher": { "@type": "Organization", "name": "Your Trade Partner", "url": "https://yourtradepartner.com.au" },
                    "about": {
                        "@type": "Place",
                        "name": "Brisbane",
                        "addressRegion": "QLD",
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
                        currentLabel="Brisbane Suburb SEO for Roofers"
                        currentPath="/resources/suburb-seo-for-brisbane-roofers"
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
                                <MapPin className="w-3 h-3" /> Brisbane, QLD
                            </Badge>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-tight">
                            Brisbane Suburb SEO for Roofers: <span className="text-safety-orange">The Biggest Opportunity Isn't in Brisbane</span>
                        </h1>
                        <div className="flex items-center gap-6 text-white/40 text-sm font-bold uppercase tracking-wider mb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 min read</span>
                            </div>
                            <div>June 2026</div>
                        </div>
                        <p className="text-xl md:text-2xl text-white/80 font-bold leading-relaxed">
                            Real search data for Brisbane roof tilers and metal roofers — which suburbs generate demand, where competition traps you, and why the highest-volume roofing keyword within reach of your Brisbane operation isn't a Brisbane suburb at all.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-14">

                        {/* Section 1: The setup */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                "Roof Tiler Brisbane" Is Almost Nobody's Search
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                "Roof tiler Brisbane" gets <strong className="text-safety-orange">20 searches per month</strong>. The whole city. Twenty. If you've been using "roof tiler" in your homepage headline and meta title, you've been optimising for a ghost keyword.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                "Roofing Brisbane" is 1,900 per month — ninety-five times the volume, with MEDIUM competition and a $16.32 CPC. That's what homeowners actually type when they need a roofer in Brisbane. But even that isn't the most interesting number in this dataset.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                The keyword "roofing Sunshine Coast" gets <strong className="text-safety-orange">880 searches per month</strong> with MEDIUM competition at $15.87 CPC. Most Brisbane roofers don't have a page for it. It sits 90 minutes north — within delivery range for plenty of QLD roofing businesses — and it's generating more search traffic than almost any individual Brisbane suburb in this analysis.
                            </p>
                            <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                                <h3 className="font-black text-lg mb-4">How Brisbane Homeowners Actually Search for Roofers:</h3>
                                <div className="grid md:grid-cols-2 gap-6 text-sm">
                                    <div>
                                        <p className="font-black text-white/50 mb-3">❌ What most roofers target:</p>
                                        <ul className="space-y-2 text-white/40">
                                            <li>• "roof tiler Brisbane"</li>
                                            <li>• "roofing contractors Brisbane"</li>
                                            <li>• "best roofer near me"</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-black text-safety-orange mb-3">✓ What homeowners are actually typing:</p>
                                        <ul className="space-y-2 text-white/80">
                                            <li>• "roofing Caboolture"</li>
                                            <li>• "roof restoration Ipswich"</li>
                                            <li>• "roof restoration Logan"</li>
                                            <li>• "roofing Sunshine Coast"</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: How Brisbane roofing differs */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Why Brisbane Roofing Keywords Work Differently
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Like Sydney, Brisbane roofing searches split across two dimensions. But QLD has an extra layer: regional cities and coastal areas within the state's roofing market that generate standalone demand.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mb-8">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <p className="font-black text-safety-orange mb-3 uppercase tracking-wider text-sm">Dimension 1: Service Type</p>
                                    <ul className="space-y-2 text-sm text-white/70 font-bold">
                                        <li>• <strong className="text-white">"roofing [area]"</strong> — broad searches, new builds, replacements, general repairs</li>
                                        <li>• <strong className="text-white">"roof restoration [area]"</strong> — existing homeowners restoring or maintaining older roofs</li>
                                        <li>• <strong className="text-white">"metal roofing / colorbond [area]"</strong> — product-decided searches, often reroof jobs</li>
                                    </ul>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <p className="font-black text-safety-orange mb-3 uppercase tracking-wider text-sm">Dimension 2: Geographic Scale</p>
                                    <ul className="space-y-2 text-sm text-white/70 font-bold">
                                        <li>• Brisbane metro suburbs: individual suburb names generate trackable volume</li>
                                        <li>• Regional areas: Sunshine Coast and Toowoomba search by city name — not by individual suburb</li>
                                        <li>• Some corridors (like Ipswich) are saturated; adjacent corridors (Logan) are not</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                A Brisbane roofer covering the north side, south side, and potentially Sunshine Coast needs fundamentally different pages for each market — not just name-swapped templates. The competition landscape, housing stock, and job values are different enough that each area deserves real local content.
                            </p>
                        </div>

                        {/* Section 3: The data tables */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                The Real Numbers for Brisbane Roofing
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-8">
                                Below is actual Google Ads search volume data for Brisbane and QLD roofing keyword combinations. CPC reflects what advertisers pay per click — high CPC in a suburb means roofers are paying serious money there because the jobs convert at high ticket values.
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
                                                <td className="py-3 pr-6 font-bold text-white">Roofing Brisbane</td>
                                                <td className="py-3 pr-6 text-right font-bold text-safety-orange">1,900</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$16.32</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roof restoration Brisbane</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">1,000</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-red-400 font-bold">HIGH</span></td>
                                                <td className="py-3 text-right font-bold text-white">$14.87</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roof repairs Brisbane</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">1,000</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$15.36</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Metal roofing Brisbane</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">320</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$15.66</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Colorbond roofing Brisbane</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">70</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$11.04</td>
                                            </tr>
                                            <tr className="opacity-50">
                                                <td className="py-3 pr-6 font-bold text-white">Roof tiler Brisbane</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">20</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$22.09</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-xs text-white/40 font-bold mt-3">Note: "roof tiler Brisbane" faded out — 20 monthly searches is statistically negligible. The $22.09 CPC is misleadingly high for a term that generates almost no real traffic.</p>
                            </div>

                            {/* Regional / "Think Bigger" table */}
                            <div className="mb-10">
                                <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                                    <span className="text-safety-orange">—</span> Beyond Brisbane Metro — The Regional Opportunity
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
                                                <td className="py-3 pr-6 font-bold text-white">Roofing Sunshine Coast</td>
                                                <td className="py-3 pr-6 text-right font-bold text-safety-orange">880</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$15.87</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roof restoration Gold Coast</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">480</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$10.52</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roofing Toowoomba</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">390</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$7.04</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roof restoration Toowoomba</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">260</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$6.93</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-xs text-white/40 font-bold mt-3">Note: Toowoomba is 130km west of Brisbane — a separate roofing market. Lower CPC reflects lower property values than Brisbane, not lower job sizes. Sunshine Coast and Gold Coast are coastal growth markets with strong roofing demand and MEDIUM competition.</p>
                            </div>

                            {/* North Corridor */}
                            <div className="mb-10">
                                <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                                    <span className="text-safety-orange">—</span> North Brisbane — Moreton Bay Corridor
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
                                                <td className="py-3 pr-6 font-bold text-white">Roofing Caboolture</td>
                                                <td className="py-3 pr-6 text-right font-bold text-safety-orange">170</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$4.84</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roofing Redcliffe</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">50</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-red-400 font-bold">HIGH</span></td>
                                                <td className="py-3 text-right font-bold text-white">$11.64</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roof restoration Caboolture</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">20</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$8.77</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roofing North Lakes</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">10</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-green-400 font-bold">LOW</span></td>
                                                <td className="py-3 text-right font-bold text-white">$8.25</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* South Corridor */}
                            <div className="mb-10">
                                <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                                    <span className="text-safety-orange">—</span> South West — Ipswich, Logan & Springfield
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
                                            <tr className="opacity-60">
                                                <td className="py-3 pr-6 font-bold text-white">Roof restoration Ipswich</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">320</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-red-400 font-bold">HIGH (74)</span></td>
                                                <td className="py-3 text-right font-bold text-white">$12.17</td>
                                            </tr>
                                            <tr className="opacity-60">
                                                <td className="py-3 pr-6 font-bold text-white">Metal roofing Ipswich</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">170</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-red-400 font-bold">HIGH (96!)</span></td>
                                                <td className="py-3 text-right font-bold text-white">$23.11</td>
                                            </tr>
                                            <tr className="opacity-60">
                                                <td className="py-3 pr-6 font-bold text-white">Roofer Ipswich</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">140</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-red-400 font-bold">HIGH (87)</span></td>
                                                <td className="py-3 text-right font-bold text-white">$16.84</td>
                                            </tr>
                                            <tr className="opacity-60">
                                                <td className="py-3 pr-6 font-bold text-white">Roofing Ipswich</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">110</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-red-400 font-bold">HIGH (76)</span></td>
                                                <td className="py-3 text-right font-bold text-white">$18.21</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roof restoration Logan</td>
                                                <td className="py-3 pr-6 text-right font-bold text-safety-orange">110</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$18.28</td>
                                            </tr>
                                            <tr className="opacity-60">
                                                <td className="py-3 pr-6 font-bold text-white">Roofing Springfield</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">50</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-red-400 font-bold">HIGH (84)</span></td>
                                                <td className="py-3 text-right font-bold text-white">$17.73</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-xs text-white/40 font-bold mt-3">Faded rows = HIGH competition — not worth targeting first. "Roof restoration Logan" (MEDIUM) is the standout in this corridor despite lower raw volume than Ipswich. The $18.28 CPC on Logan confirms the job values are there.</p>
                            </div>

                            {/* Inner West Premium */}
                            <div className="mb-6">
                                <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                                    <span className="text-safety-orange">—</span> Inner West Premium (Low Volume, High Value)
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
                                                <td className="py-3 pr-6 font-bold text-white">Roofing Chapel Hill</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">10</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-red-400 font-bold">HIGH (91)</span></td>
                                                <td className="py-3 text-right font-bold text-safety-orange">$37.67</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roofing Manly</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">50</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$9.17</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Roofing Kenmore</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">10</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$12.37</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-xs text-white/40 font-bold mt-3">Chapel Hill: $37.67 CPC is the highest in the entire Brisbane dataset. Even at 10 searches/month, roofers are paying that much per click because the jobs in inner-western Brisbane suburbs convert at premium values. One targeted page for Chapel Hill/Kenmore/Toowong is worth building for any roofer active in that area.</p>
                            </div>

                            <div className="bg-black/40 border-l-4 border-white/20 p-5 mt-4">
                                <p className="text-sm text-white/50 font-bold">
                                    Search volumes are national figures from Google Ads data (June 2026). Brisbane and South East QLD dominate these searches for QLD-specific suburb names. Sunshine Coast and Gold Coast are coastal QLD markets — included here because they're within the service radius of many Brisbane roofing businesses.
                                </p>
                            </div>
                        </div>

                        {/* Section 4: Three clusters */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-8 border-b-2 border-safety-orange pb-2 inline-block">
                                Three Brisbane Opportunities. Three Different Plays.
                            </h2>

                            <div className="space-y-8">

                                {/* Cluster 1: The Regional Escape */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <TrendingUp className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-1">The Regional Escape: Volume Without the Competition</h3>
                                            <p className="text-white/50 text-sm font-bold uppercase tracking-wider">Sunshine Coast · Toowoomba · Gold Coast</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>
                                            "Roofing Sunshine Coast" generates <strong className="text-safety-orange">880 searches per month</strong> — more than any individual Brisbane suburb in this analysis — at MEDIUM competition and $15.87 CPC. Most Brisbane roofers don't have a dedicated page for it because they think of the Sunshine Coast as a different market.
                                        </p>
                                        <p>
                                            It is a different market. That's exactly why the competition is lower. Any Brisbane roofer who services Caloundra, Noosa, or Maroochydore and builds a well-structured "roofing Sunshine Coast" page is competing against a much thinner field than they face for "roofing Brisbane" suburb pages.
                                        </p>
                                        <p>
                                            Toowoomba operates the same way from the other direction. <strong className="text-safety-orange">390/mo for "roofing Toowoomba"</strong> and 260/mo for "roof restoration Toowoomba" — both MEDIUM competition. The CPC is lower ($7 range) reflecting lower property values, but a Darling Downs roofer or a Brisbane operator willing to run a Toowoomba crew is looking at consistent, uncontested demand from a city of 170,000 people that most SEO-savvy roofers have ignored.
                                        </p>
                                        <div className="bg-black/40 p-5 mt-2">
                                            <p className="font-black text-sm mb-2 text-white/60">Best fit:</p>
                                            <p className="text-sm">Any Brisbane roofer with genuine service reach to the Sunshine Coast or Toowoomba. The page investment is small — one well-built location page per market. The lack of competition means ranking is achievable at a domain authority level that wouldn't work in central Brisbane metro.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Cluster 2: The Ipswich Trap / Logan Opportunity */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <span className="text-white font-black text-lg">!</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-1">The Ipswich Trap — and the Logan Opportunity Next Door</h3>
                                            <p className="text-white/50 text-sm font-bold uppercase tracking-wider">Logan · Ipswich · Springfield</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>
                                            Ipswich looks attractive on paper. "Roof restoration Ipswich" gets 320 monthly searches — one of the highest suburb-level numbers in the Brisbane dataset. But every single Ipswich roofing keyword is HIGH competition: roofing Ipswich is HIGH (76), roofer Ipswich is HIGH (87), and <strong className="text-safety-orange">metal roofing Ipswich hits a competition index of 96</strong> — essentially the saturation ceiling. Advertisers are paying $23.11 per click there, which means local roofers know it converts and they're fighting hard for every lead.
                                        </p>
                                        <p>
                                            Springfield is the same story: 50/mo at HIGH (84). The south-west growth corridor has been well and truly claimed by established roofing businesses.
                                        </p>
                                        <p>
                                            Logan tells a different story. <strong className="text-safety-orange">"Roof restoration Logan"</strong> is 110/mo with <strong className="text-safety-orange">MEDIUM competition (50)</strong> and a $18.28 CPC — the best CPC in the south corridor dataset. Logan City has a large residential housing stock, significant numbers of homes built in the 1970s–90s that are overdue for restoration, and noticeably fewer roofers who have built dedicated suburb pages for it compared to Ipswich. That gap is the opportunity.
                                        </p>
                                        <div className="bg-black/40 p-5 mt-2">
                                            <p className="font-black text-sm mb-2 text-white/60">Best fit:</p>
                                            <p className="text-sm">Roofers working the south side. Skip Ipswich on organic SEO — it's overcrowded. Build a "roof restoration Logan" page first, cover nearby suburbs like Beenleigh, Springwood, and Browns Plains in the body copy. Once ranking, Ipswich can follow as domain authority builds.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Cluster 3: North Brisbane anchor */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-1">North Brisbane: Caboolture Is the Anchor</h3>
                                            <p className="text-white/50 text-sm font-bold uppercase tracking-wider">Caboolture · North Lakes · Redcliffe · Narangba</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>
                                            Caboolture is the north Brisbane suburb keyword with the best volume-to-competition ratio in the data: <strong className="text-safety-orange">170/mo at MEDIUM competition (49)</strong>. The SERP for "roofing Caboolture" shows local operators who have been in that market for decades — Suncity Roofing (20+ years), Caboolture Roofing Service (30+ years) — plus Beards Roofing which operates a hub-and-spoke model with dedicated location pages under `/locations/roofing-caboolture`.
                                        </p>
                                        <p>
                                            The CPC here is notably lower than Brisbane metro ($4.84 vs $16.32) — a Moreton Bay characteristic. The Caboolture area is a fast-growing outer metropolitan corridor; the homes are newer but the older housing pockets within it are aging. Volume over job premium is the right expectation here.
                                        </p>
                                        <p>
                                            Redcliffe (50/mo, HIGH comp) and North Lakes (10/mo, LOW comp) round out the north corridor. North Lakes has a competition index of just 27 — very few businesses competing — but the volume is minimal. Worth a mention on a broader Moreton Bay page rather than its own standalone page.
                                        </p>
                                        <div className="bg-black/40 p-5 mt-2">
                                            <p className="font-black text-sm mb-2 text-white/60">Best fit:</p>
                                            <p className="text-sm">North Brisbane roofers servicing the Moreton Bay region. Build "roofing Caboolture" as the anchor page — include Narangba, Morayfield, and Burpengary in the body copy to capture adjacent suburb searches. One page covers the Moreton Bay north cluster effectively.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 5: Competitor landscape */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Who You're Actually Up Against in Brisbane
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Here's what the "roofing Caboolture" SERP looks like — the highest-volume north Brisbane suburb keyword in the data:
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="bg-white/5 border border-white/10 p-5">
                                    <p className="font-black text-safety-orange mb-2 text-sm uppercase tracking-wider">Local Pack (Map Results)</p>
                                    <p className="text-white/70 text-sm font-bold">Three local businesses shown: Suncity Roofing & Supplies (4.3 stars, 44 reviews, 20+ years in Caboolture), roofreplacementsbrisbane.com.au with a dedicated Caboolture suburb page, and Caboolture Roofing Service (4.9 stars, 31 reviews). All are established local operators with solid review counts — not national chains.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-5">
                                    <p className="font-black text-safety-orange mb-2 text-sm uppercase tracking-wider">Organic Results</p>
                                    <p className="text-white/70 text-sm font-bold mb-3">Results in order:</p>
                                    <ul className="space-y-2 text-sm text-white/70">
                                        <li><strong className="text-white">1. Suncity Roofing</strong> — homepage ranking on their branded name + service area coverage</li>
                                        <li><strong className="text-white">2. roofingservicesbrisbane.com.au</strong> — generic Brisbane roofing site targeting Caboolture</li>
                                        <li><strong className="text-white">3. Beards Roofing & Plumbing</strong> — ranks with a dedicated <span className="text-safety-orange">/locations/roofing-caboolture</span> page — hub-and-spoke model</li>
                                        <li><strong className="text-white">4. Caboolture Roofing Service</strong> — local specialist domain</li>
                                        <li><strong className="text-white">5. hipages</strong> — marketplace; always ranks for these searches</li>
                                        <li><strong className="text-white">6. roofreplacementsbrisbane.com.au</strong> — dedicated <span className="text-safety-orange">/caboolture/</span> suburb page</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-black/40 border-l-4 border-safety-orange p-6">
                                <p className="font-black mb-2 text-safety-orange">Beards Roofing is the hub-and-spoke operator to watch.</p>
                                <p className="text-white/80 font-bold">
                                    Like roofranger.com.au in Sydney, Beards Roofing has built dedicated location pages across Queensland — <code className="text-safety-orange">/locations/roofing-[suburb]</code> — which allows them to rank for multiple suburb-level searches from one domain. roofreplacementsbrisbane.com.au uses a similar model with suburb subdirectories. These are the systematic operators in the Brisbane market.
                                </p>
                                <p className="text-white/80 font-bold mt-3">
                                    Neither of them is unbeatable. A local roofer with genuine Caboolture presence, real reviews, and a well-built suburb page is a credible challenger against a Brisbane-headquartered business that created a location page from a template. The hub-and-spoke model wins on scale, but individual suburb pages from local operators win on authenticity signals.
                                </p>
                            </div>
                        </div>

                        {/* Section 6: How to build the page */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                How to Build a Queensland Suburb Page for Roofing
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-8">
                                The structure is the same as any suburb page. The differentiation is in the content — QLD-specific housing context, weather, and local housing stock details that a template page from a Brisbane agency can't replicate.
                            </p>

                            <div className="bg-white/5 border border-white/10 p-8 space-y-6">
                                <div>
                                    <p className="font-black mb-2 text-safety-orange">URL Structure</p>
                                    <p className="text-sm text-white/70 mb-2">Match the exact keyword that has volume:</p>
                                    <div className="space-y-2">
                                        <div className="bg-black/40 px-4 py-3 font-mono text-sm text-safety-orange">
                                            yoursite.com.au/roofing-caboolture
                                        </div>
                                        <div className="bg-black/40 px-4 py-3 font-mono text-sm text-safety-orange">
                                            yoursite.com.au/roof-restoration-logan
                                        </div>
                                        <div className="bg-black/40 px-4 py-3 font-mono text-sm text-safety-orange">
                                            yoursite.com.au/roofing-sunshine-coast
                                        </div>
                                    </div>
                                    <p className="text-xs text-white/40 mt-2">Don't use generic service-area subdirectories like "/service-areas/caboolture" — the URL should match the primary keyword directly.</p>
                                </div>

                                <div>
                                    <p className="font-black mb-2 text-safety-orange">H1 Title</p>
                                    <div className="bg-black/40 px-4 py-3 font-bold text-white/80 text-sm italic">
                                        "Roofing Caboolture | [Your Business Name] — Licensed, Local, Free Quote"
                                    </div>
                                </div>

                                <div>
                                    <p className="font-black mb-3 text-safety-orange">QLD-Specific Content That Earns the Ranking</p>
                                    <p className="text-sm text-white/60 mb-4">Generic name-swap pages don't rank long. Include context specific to QLD and the area:</p>
                                    <ul className="space-y-3 text-sm text-white/70 font-bold">
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>QLD weather context: "Caboolture homes deal with intense UV, high humidity, and hail season from November to March — terracotta tile roofs from the 1980s–90s deteriorate faster here than in the southern states."</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Housing stock detail: "The Moreton Bay region has a large proportion of weatherboard and older brick homes with terracotta tile roofs — these are the homes most likely to need restoration or full Colorbond replacement after 25–30 years."</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Service type signalling: explicitly separate roof restoration (cleaning, sealing, repointing, painting) from full reroof and metal roofing — these are different jobs, different budgets, different homeowners.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Surrounding suburb coverage: "We also service Narangba, Morayfield, Burpengary, and Wamuran" — captures adjacent suburb searches from a single page without building separate thin pages for each.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>FAQ: "How much does a roof restoration cost in Caboolture?" and "Is Colorbond worth it vs repointing terracotta?" — these match the People Also Ask questions appearing in the Caboolture SERP ("How much to reroof a house in QLD?", "Is $30,000 too much for a roof?").</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-safety-orange/10 border border-safety-orange/20 p-5">
                                    <p className="font-black mb-2">⚠️ Don't build 20 identical pages at launch</p>
                                    <p className="text-sm text-white/80">
                                        Beards Roofing's hub-and-spoke model works because it's an established business with domain authority behind it. A new site launching with 20 thin suburb pages is a Google penalty risk. Build 3–5 well-differentiated pages first — Caboolture, Sunshine Coast, Logan — let them index and build topical authority, then expand.
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
                                Build 3–4 pages first. Let them rank. Then expand. Match your geographic reality — if you don't service the Sunshine Coast, don't build a page for it.
                            </p>

                            <div className="space-y-6">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="font-black uppercase text-safety-orange mb-4">North Brisbane / Moreton Bay Roofers</h3>
                                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">Start here (volume)</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Roofing Caboolture (170/mo, MEDIUM)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">Add next</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Roofing Sunshine Coast (880/mo)</li>
                                                <li>• Roof restoration Caboolture</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">Easy win</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Roofing North Lakes (LOW comp)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="font-black uppercase text-safety-orange mb-4">South Side / Ipswich Corridor Roofers</h3>
                                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">Start here (skip Ipswich!)</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Roof restoration Logan (MEDIUM)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">Add once ranking</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Roofing Ipswich (higher comp)</li>
                                                <li>• Roof restoration Gold Coast</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">Premium CPC signal</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Roofing Chapel Hill ($37.67 CPC)</li>
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
                                                <li>• Metal roofing Brisbane (320/mo, MEDIUM)</li>
                                                <li>• Roofing Brisbane (1,900/mo)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">Regional pages</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Metal roofing Sunshine Coast</li>
                                                <li>• Roofing Toowoomba (MEDIUM)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">Skip (too competitive)</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Metal roofing Ipswich (comp: 96)</li>
                                                <li>• Metal roofing Caboolture (HIGH)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Line */}
                        <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                            <h2 className="text-2xl font-black uppercase italic mb-4">The Short Version</h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                "Roof tiler Brisbane" is a non-keyword — 20 searches a month. "Roofing Brisbane" is 1,900/mo at MEDIUM competition. That's where your city-level page should point.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                At the suburb level: <strong className="text-safety-orange">avoid the Ipswich trap</strong> — every Ipswich roofing keyword is HIGH competition (up to index 96). <strong className="text-safety-orange">Logan is the south side play</strong> — 110/mo MEDIUM comp at $18.28 CPC. <strong className="text-safety-orange">Caboolture anchors the north</strong> — 170/mo MEDIUM, and real room to compete against the hub-and-spoke operators already there.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                And if you service beyond metro Brisbane: "roofing Sunshine Coast" at 880/mo MEDIUM is sitting there with almost no educational content competing for it. One well-built page covering Caloundra, Maroochydore, and Noosa from a roofer who actually services the area is a serious SEO opportunity that most Brisbane competitors have simply skipped.
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
                            Want Brisbane Suburb Pages <span className="text-safety-orange">Built For You?</span>
                        </h2>
                        <p className="text-xl text-white/70 font-bold mb-8 max-w-2xl mx-auto">
                            We build suburb-specific pages for Brisbane roofers — structured for local ranking, written with real QLD housing context, not generic templates.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/#packages">
                                <Button className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    See Our Packages <ArrowRight className="ml-3 w-5 h-5" />
                                </Button>
                            </a>
                            <a href="/tradie-website-design-brisbane">
                                <Button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    Brisbane Website Info
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

export default SuburbSEOBrisbaneRoofers;
