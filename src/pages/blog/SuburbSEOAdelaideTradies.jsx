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
        href: '/resources/google-business-profile-setup',
        title: 'Google Business Profile Setup Guide',
        description: 'The foundation every Adelaide tradie needs before suburb pages will work properly.'
    },
    {
        href: '/tradie-website-design-adelaide',
        title: 'Tradie Website Design Adelaide',
        description: 'Websites built for Adelaide tradies — structured for suburb targeting from the ground up.'
    }
];

const SuburbSEOAdelaideTradies = () => {
    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans">
            <Helmet>
                <title>Adelaide Suburb SEO for Tradies: Which Areas Are Worth Targeting?</title>
                <meta name="description" content="Real search data on where Adelaide homeowners look for tradies — Salisbury, Glenelg, Norwood, Gawler and more. Which suburbs should your tradie business target first?" />
                <meta name="keywords" content="suburb seo adelaide tradies, local seo adelaide plumber, plumber salisbury seo, tradie website adelaide suburbs, electrician seo adelaide, local search adelaide tradies" />
                <link rel="canonical" href="https://yourtradepartner.com.au/resources/suburb-seo-for-adelaide-tradies" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Adelaide Suburb SEO for Tradies: Which Areas Are Worth Targeting?" />
                <meta property="og:description" content="Real search data on where Adelaide homeowners look for tradies. Which suburbs to prioritise first." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://yourtradepartner.com.au/resources/suburb-seo-for-adelaide-tradies" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": "Adelaide Suburb SEO for Tradies: Which Areas Are Worth Targeting?",
                    "description": "Real search data on where Adelaide homeowners look for tradies — Salisbury, Glenelg, Norwood, Gawler and more. Which suburbs should your tradie business target first?",
                    "url": "https://yourtradepartner.com.au/resources/suburb-seo-for-adelaide-tradies",
                    "datePublished": "2026-06-08",
                    "dateModified": "2026-06-08",
                    "author": { "@type": "Person", "name": "Saharsh", "url": "https://yourtradepartner.com.au/about" },
                    "publisher": { "@type": "Organization", "name": "Your Trade Partner", "url": "https://yourtradepartner.com.au" },
                    "about": {
                        "@type": "Place",
                        "name": "Adelaide",
                        "addressRegion": "SA",
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
                        currentLabel="Adelaide Suburb SEO for Tradies"
                        currentPath="/resources/suburb-seo-for-adelaide-tradies"
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
                                <MapPin className="w-3 h-3" /> Adelaide, SA
                            </Badge>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-tight">
                            Adelaide Suburb SEO: <span className="text-safety-orange">Which Areas Are Worth Your Time?</span>
                        </h1>
                        <div className="flex items-center gap-6 text-white/40 text-sm font-bold uppercase tracking-wider mb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 min read</span>
                            </div>
                            <div>June 2026</div>
                        </div>
                        <p className="text-xl md:text-2xl text-white/80 font-bold leading-relaxed">
                            Real search data on where Adelaide homeowners are looking for tradies — and a clear priority list for which suburbs to target first, by trade.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-14">

                        {/* Section 1: Why suburb targeting */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                "Plumber Adelaide" Is the Wrong Keyword
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                When an Adelaide homeowner's hot water system dies on a Wednesday morning, they don't open Google and type "plumber Adelaide." They type <strong className="text-safety-orange">"plumber Glenelg"</strong> or <strong className="text-safety-orange">"plumber Salisbury"</strong> — or they just hit "plumber near me" and let GPS do the work.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                A website that only says "we service Adelaide" doesn't rank for any of those searches. Google can't confirm you specifically cover that suburb — so it serves someone who does.
                            </p>
                            <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                                <h3 className="font-black text-lg mb-4">What Adelaide Homeowners Actually Search:</h3>
                                <div className="grid md:grid-cols-2 gap-6 text-sm">
                                    <div>
                                        <p className="font-black text-white/50 mb-3">❌ Too broad (low intent):</p>
                                        <ul className="space-y-2 text-white/40">
                                            <li>• "plumber Adelaide"</li>
                                            <li>• "electrician South Australia"</li>
                                            <li>• "best plumber near me"</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-black text-safety-orange mb-3">✓ Suburb-specific (ready to book):</p>
                                        <ul className="space-y-2 text-white/80">
                                            <li>• "plumber Salisbury"</li>
                                            <li>• "electrician Glenelg"</li>
                                            <li>• "plumber Gawler"</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mt-6">
                                Suburb-specific searches are where the jobs are. The question is which suburbs to target first — and the answer isn't the same for every trade.
                            </p>
                        </div>

                        {/* Section 2: The data */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                The Real Search Numbers for Adelaide Suburbs
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-8">
                                Below is actual Google search volume data for Adelaide suburb + trade combinations. These are monthly search figures. The CPC (cost-per-click) column is what Google Ads advertisers are paying per click — it's a reliable proxy for commercial value. High CPC = tradies in that area are willing to pay a lot per lead because jobs convert.
                            </p>

                            {/* Plumbing table */}
                            <div className="mb-10">
                                <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                                    <span className="text-safety-orange">—</span> Plumbing
                                </h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="border-b border-white/20">
                                                <th className="text-left py-3 pr-6 font-black uppercase tracking-wider text-white/50">Suburb</th>
                                                <th className="text-right py-3 pr-6 font-black uppercase tracking-wider text-white/50">Monthly Searches</th>
                                                <th className="text-right py-3 pr-6 font-black uppercase tracking-wider text-white/50">Competition</th>
                                                <th className="text-right py-3 font-black uppercase tracking-wider text-white/50">Google Ads CPC</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Salisbury</td>
                                                <td className="py-3 pr-6 text-right font-bold text-safety-orange">590</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-red-400 font-bold">HIGH</span></td>
                                                <td className="py-3 text-right font-bold text-white">$53</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Gawler</td>
                                                <td className="py-3 pr-6 text-right font-bold text-safety-orange">590</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$31</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Morphett Vale</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">260</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-red-400 font-bold">HIGH</span></td>
                                                <td className="py-3 text-right font-bold text-white">$53</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Glenelg</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">210</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$48</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Mitcham</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">170</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$37</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Norwood</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">140</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-red-400 font-bold">HIGH</span></td>
                                                <td className="py-3 text-right font-bold text-white">$47</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Burnside</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">140</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$16</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Unley</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">110</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$38</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Marion</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">110</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-green-400 font-bold">LOW</span></td>
                                                <td className="py-3 text-right font-bold text-white">$25</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Electrician table */}
                            <div className="mb-6">
                                <h3 className="text-xl font-black uppercase mb-4 flex items-center gap-2">
                                    <span className="text-safety-orange">—</span> Electrical
                                </h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="border-b border-white/20">
                                                <th className="text-left py-3 pr-6 font-black uppercase tracking-wider text-white/50">Suburb</th>
                                                <th className="text-right py-3 pr-6 font-black uppercase tracking-wider text-white/50">Monthly Searches</th>
                                                <th className="text-right py-3 pr-6 font-black uppercase tracking-wider text-white/50">Competition</th>
                                                <th className="text-right py-3 font-black uppercase tracking-wider text-white/50">Google Ads CPC</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Salisbury</td>
                                                <td className="py-3 pr-6 text-right font-bold text-safety-orange">170</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$30</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Glenelg</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">110</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$35</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Norwood</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">70</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-green-400 font-bold">LOW</span></td>
                                                <td className="py-3 text-right font-bold text-white">$18</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Modbury</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">70</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$30</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Morphett Vale</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">70</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-yellow-400 font-bold">MEDIUM</span></td>
                                                <td className="py-3 text-right font-bold text-white">$35</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 pr-6 font-bold text-white">Marion</td>
                                                <td className="py-3 pr-6 text-right font-bold text-white/70">50</td>
                                                <td className="py-3 pr-6 text-right"><span className="text-green-400 font-bold">LOW</span></td>
                                                <td className="py-3 text-right font-bold text-white">$15</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="bg-black/40 border-l-4 border-white/20 p-5 mt-6">
                                <p className="text-sm text-white/50 font-bold">
                                    Note: Search volumes are national figures from Google Ads data (June 2026). Since there's only one Salisbury, one Glenelg, one Gawler in Australia — the large majority of these searches originate from Adelaide/SA. CPC data is also from Google Ads.
                                </p>
                            </div>
                        </div>

                        {/* Section 3: Three clusters */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-8 border-b-2 border-safety-orange pb-2 inline-block">
                                Three Adelaide Clusters. Three Different Strategies.
                            </h2>

                            <div className="space-y-8">

                                {/* Cluster 1 */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <TrendingUp className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-1">Northern Corridor: Volume Play</h3>
                                            <p className="text-white/50 text-sm font-bold uppercase tracking-wider">Salisbury · Gawler · Elizabeth · Para Hills · Mawson Lakes</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>
                                            Salisbury and Gawler both pull <strong className="text-safety-orange">590 monthly searches</strong> for "plumber [suburb]" — tied for the highest volume in Greater Adelaide. The northern suburbs corridor runs from Elizabeth through Salisbury up to Gawler: large residential populations, older housing stock from the 1960s–80s, and steady maintenance demand.
                                        </p>
                                        <p>
                                            Electrician searches are also strong here: Salisbury alone gets 170 monthly searches for "electrician Salisbury."
                                        </p>
                                        <p>
                                            The trade-off: competition is HIGH in Salisbury. You're competing against established local operators and national brands like Jim's Plumbing who have dedicated location pages. If you're already based in the north, this is a must-target cluster. If you're starting from scratch, consider a different cluster first and come back to Salisbury once you have some domain authority.
                                        </p>
                                        <div className="bg-black/40 p-5 mt-2">
                                            <p className="font-black text-sm mb-2 text-white/60">Best fit:</p>
                                            <p className="text-sm">Plumbers (highest volume), electricians. Builder suburb searches are very low across Adelaide — homeowners search "builder Adelaide" rather than by suburb for major builds.</p>
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
                                            <h3 className="text-2xl font-black uppercase mb-1">Inner-Eastern Suburbs: Value Play</h3>
                                            <p className="text-white/50 text-sm font-bold uppercase tracking-wider">Norwood · Mitcham · Burnside · Unley · Campbelltown</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>
                                            Lower search volumes than the north — but the CPC data tells a different story. A plumber bidding on "plumber Norwood" is paying up to <strong className="text-safety-orange">$47 per click</strong>. Mitcham is $37. Unley is $38. Advertisers pay that because the jobs convert and the job values are higher.
                                        </p>
                                        <p>
                                            These are older character suburbs with more complex plumbing and electrical infrastructure, higher-income homeowners, and more willingness to pay for quality. Fewer tradies are chasing the volume here — but the ones who are paying for ads are signalling strong intent.
                                        </p>
                                        <p>
                                            Electrician opportunity: "electrician Norwood" shows <strong className="text-safety-orange">LOW competition</strong> at 70 monthly searches. That means fewer competitors have a dedicated Norwood page for electrical. Easy ranking win for an electrician based in the inner east.
                                        </p>
                                        <div className="bg-black/40 p-5 mt-2">
                                            <p className="font-black text-sm mb-2 text-white/60">Best fit:</p>
                                            <p className="text-sm">Plumbers and electricians who want higher average job values over raw volume. Good starting cluster if you're Adelaide-based and want quality leads over quantity.</p>
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
                                            <h3 className="text-2xl font-black uppercase mb-1">Southern & Coastal: Balanced Play</h3>
                                            <p className="text-white/50 text-sm font-bold uppercase tracking-wider">Glenelg · Morphett Vale · Marion · Christies Beach · Hallett Cove</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>
                                            Glenelg is the standout in this cluster. <strong className="text-safety-orange">210 monthly searches</strong> for "plumber Glenelg," 110 for "electrician Glenelg" — with medium competition in both. Consistent, year-round demand. The beachside suburbs attract high property values and renovation activity.
                                        </p>
                                        <p>
                                            Morphett Vale has solid plumbing volume (260/month) and high CPCs ($53), but competition is HIGH. Marion is the hidden opportunity: 110 monthly searches for "plumber Marion" with <strong className="text-safety-orange">LOW competition</strong>. Fewer local plumbers have dedicated suburb pages for Marion — which means a well-built page can rank without much of a fight.
                                        </p>
                                        <div className="bg-black/40 p-5 mt-2">
                                            <p className="font-black text-sm mb-2 text-white/60">Best fit:</p>
                                            <p className="text-sm">Any tradie working the southern suburbs. Marion in particular is a low-competition entry point worth targeting early — build the page now before the competition catches on.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 4: Who you're competing against */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Who You're Actually Up Against
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                To understand what it takes to rank in an Adelaide suburb, here's what actually comes up when you search "plumber Salisbury Adelaide":
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="bg-white/5 border border-white/10 p-5">
                                    <p className="font-black text-safety-orange mb-2 text-sm uppercase tracking-wider">Local Pack (Map Results)</p>
                                    <p className="text-white/70 text-sm font-bold">Three local businesses shown. The top business has 13 reviews. The third has 308. Review count clearly matters for map pack ranking — but none of these businesses are giants. They're local operators who've built up their profile.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-5">
                                    <p className="font-black text-safety-orange mb-2 text-sm uppercase tracking-wider">Organic Results</p>
                                    <p className="text-white/70 text-sm font-bold mb-3">Results in order:</p>
                                    <ul className="space-y-2 text-sm text-white/70">
                                        <li><strong className="text-white">1. Jim's Plumbing</strong> — ranks because they have a dedicated page at <span className="text-safety-orange">/locations/adelaide/salisbury</span></li>
                                        <li><strong className="text-white">2. Lucas Plumbing & Gas</strong> — ranks with a suburb page at <span className="text-safety-orange">/plumber-salisbury-east/</span></li>
                                        <li><strong className="text-white">3. Airtasker</strong> — marketplace; always ranks for local service searches</li>
                                        <li><strong className="text-white">4–5. Pride Plumbing, Yellow Pages</strong> — local directory listings</li>
                                        <li><strong className="text-white">6–7. Loyal Plumbing, Paterson Plumbing</strong> — both rank with dedicated suburb pages</li>
                                        <li><strong className="text-white">8. HiPages</strong> — another marketplace</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-black/40 border-l-4 border-safety-orange p-6">
                                <p className="font-black mb-2 text-safety-orange">The pattern is obvious.</p>
                                <p className="text-white/80 font-bold">
                                    Every local business ranking organically has a dedicated suburb page. Not a general "we service Adelaide" page — a specific page built for Salisbury. Jim's Plumbing ranks because of <code className="text-safety-orange">/locations/adelaide/salisbury</code>. Lucas Plumbing ranks because of <code className="text-safety-orange">/plumber-salisbury-east/</code>. Airtasker and Yellow Pages rank because they have suburb-specific content too.
                                </p>
                                <p className="text-white/80 font-bold mt-3">
                                    A targeted suburb page will consistently outrank a generic "contact us" page from a tradie who says they cover all of Adelaide.
                                </p>
                            </div>
                        </div>

                        {/* Section 5: How to build the page */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                How to Build an Adelaide Suburb Page That Ranks
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-8">
                                The structure is straightforward. The execution is where most tradies fall short — either they don't build the page at all, or they build a generic one with just the suburb name swapped in.
                            </p>

                            <div className="bg-white/5 border border-white/10 p-8 space-y-6">
                                <div>
                                    <p className="font-black mb-2 text-safety-orange">URL Structure</p>
                                    <p className="text-sm text-white/70">Keep it flat and clean:</p>
                                    <div className="bg-black/40 px-4 py-3 mt-2 font-mono text-sm text-safety-orange">
                                        yoursite.com.au/plumber-salisbury
                                    </div>
                                    <p className="text-xs text-white/40 mt-2">Not: /services/plumbing/locations/sa/salisbury/residential — that structure dilutes your ranking signal.</p>
                                </div>

                                <div>
                                    <p className="font-black mb-2 text-safety-orange">H1 Title</p>
                                    <div className="bg-black/40 px-4 py-3 font-bold text-white/80 text-sm italic">
                                        "Plumber Salisbury | [Your Business Name] — Licensed, Same-Day"
                                    </div>
                                </div>

                                <div>
                                    <p className="font-black mb-3 text-safety-orange">Content That Actually Differentiates (Not Just Suburb Swaps)</p>
                                    <p className="text-sm text-white/60 mb-4">The page needs to feel like it was written for Salisbury specifically. Include things like:</p>
                                    <ul className="space-y-3 text-sm text-white/70 font-bold">
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Local context: "Most Salisbury homes were built in the 1960s–80s — older pipe materials and hot water systems that are overdue for replacement are common callouts in this area."</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Nearby reference points: Salisbury station, Parabanks Shopping Centre, or local landmarks Google associates with the suburb.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Coverage context: "We also cover Elizabeth, Para Hills, Mawson Lakes, and the surrounding northern suburbs" — this picks up surrounding suburb searches too.</span>
                                        </li>
                                        <li className="flex gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>FAQs: "Do you offer same-day plumbing in Salisbury?" and "What's your callout fee for the northern suburbs?" — these answer the questions homeowners are actually asking.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-safety-orange/10 border border-safety-orange/20 p-5">
                                    <p className="font-black mb-2">⚠️ Avoid "Doorway Pages"</p>
                                    <p className="text-sm text-white/80">
                                        Don't create 15 identical pages with just the suburb name swapped. Google flags this and can penalize the site. Each suburb page needs genuinely different content — at minimum a different intro, different local references, and different FAQ questions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Section 6: Priority list by trade */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Where to Start: Priority List by Trade
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-8">
                                Build 5 suburb pages first. Once they rank, add 5 more. Don't try to launch 20 at once — Google needs time to index and trust new pages.
                            </p>

                            <div className="space-y-6">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="font-black uppercase text-safety-orange mb-4">Plumbers</h3>
                                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">Start here (volume)</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Salisbury (590/mo)</li>
                                                <li>• Gawler (590/mo)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">Add next (value)</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Glenelg (210/mo)</li>
                                                <li>• Morphett Vale (260/mo)</li>
                                                <li>• Mitcham (170/mo)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">Easy wins (low competition)</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Marion (LOW comp)</li>
                                                <li>• Burnside (LOW-MED)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="font-black uppercase text-safety-orange mb-4">Electricians</h3>
                                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">Start here (volume)</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Salisbury (170/mo)</li>
                                                <li>• Glenelg (110/mo)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">Add next</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Modbury (70/mo)</li>
                                                <li>• Morphett Vale (70/mo)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <p className="font-black text-white/50 mb-2 uppercase tracking-wider text-xs">Easy wins (low competition)</p>
                                            <ul className="space-y-1 text-white/80 font-bold">
                                                <li>• Norwood (LOW comp)</li>
                                                <li>• Marion (LOW comp)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="font-black uppercase text-safety-orange mb-4">Roofers, Builders & Other Trades</h3>
                                    <p className="text-white/70 text-sm font-bold">
                                        Suburb-specific searches are much lower for builders and roofers in Adelaide — homeowners tend to search "builder Adelaide" or "roof repairs Adelaide" rather than by suburb. For roofing, "roofer Adelaide" itself gets 590 monthly searches with medium competition — focus on ranking for the city term first, then layer in suburb targeting once you have domain authority.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Line */}
                        <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                            <h2 className="text-2xl font-black uppercase italic mb-4">The Short Version</h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                The searches are there. "Plumber Salisbury" and "plumber Gawler" each get <strong className="text-safety-orange">590 monthly searches</strong>. Most of your Adelaide competitors have no dedicated suburb pages at all — they're still saying "we service all of Adelaide."
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                Build 5 targeted suburb pages. Include local context specific to each suburb, not just a name swap. Make sure your Google Business Profile lists every suburb you're targeting as a service area.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                That's it. A basic suburb page with real content will outrank the tradies who haven't built one — which, in Adelaide right now, is most of them.
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
                            Want Adelaide Suburb Pages <span className="text-safety-orange">Built For You?</span>
                        </h2>
                        <p className="text-xl text-white/70 font-bold mb-8 max-w-2xl mx-auto">
                            We build suburb-specific pages for Adelaide tradies — structured for local ranking, written with real local context, not generic suburb-name swaps.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/#packages">
                                <Button className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    See Our Packages <ArrowRight className="ml-3 w-5 h-5" />
                                </Button>
                            </a>
                            <a href="/tradie-website-design-adelaide">
                                <Button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    Adelaide Website Info
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

export default SuburbSEOAdelaideTradies;
