import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Zap, TrendingUp, DollarSign, Clock, Target, Search } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedReads from '../../components/RelatedReads';

const relatedReads = [
    {
        href: '/resources/google-business-profile-setup',
        title: 'Google Business Profile Setup Guide',
        description: 'Build your local visibility foundation before spending harder on traffic.'
    },
    {
        href: '/resources/suburb-seo-for-tradies',
        title: 'Suburb SEO for Tradies',
        description: 'Create location relevance that compounds long after your ad spend stops.'
    },
    {
        href: '/resources/website-roi-calculation',
        title: 'Website ROI Calculation',
        description: 'Measure whether ads, SEO, and site improvements are producing profitable jobs.'
    }
];

const GoogleAdsVsSEO = () => {
    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans">
            <Helmet>
                <title>Google Ads vs Organic SEO: What Actually Works for Tradies | Australian Trade Marketing Guide</title>
                <meta name="description" content="Ads bring leads this week. SEO brings leads forever. Most successful Australian tradies do both. Here's how to decide what to invest in first." />
                <meta name="keywords" content="google ads, seo, tradie marketing, australian tradies, ppc, organic search, lead generation, digital marketing" />
                <link rel="canonical" href="https://yourtradepartner.com.au/resources/google-ads-vs-seo-tradies" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Google Ads vs Organic SEO: What Actually Works for Tradies" />
                <meta property="og:description" content="Complete comparison for Australian trade businesses—when to use ads, when to use SEO, and how to combine both." />
                <meta property="og:type" content="article" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": "Google Ads vs Organic SEO: What Actually Works for Tradies | Australian Trade Marketing Guide",
                    "description": "Ads bring leads this week. SEO brings leads forever. Most successful Australian tradies do both. Here's how to decide what to invest in first.",
                    "url": "https://yourtradepartner.com.au/resources/google-ads-vs-seo-tradies",
                    "datePublished": "2026-03-18",
                    "dateModified": "2026-03-18",
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
                        currentLabel="Google Ads Vs SEO For Tradies"
                        currentPath="/resources/google-ads-vs-seo-tradies"
                        className="mt-5"
                    />
                </div>
            </header>

            {/* Hero */}
            <section className="py-12 md:py-16 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <Badge className="bg-safety-orange/10 text-safety-orange mb-6 hover:bg-safety-orange/10 pointer-events-none uppercase tracking-widest text-xs">
                            Marketing
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-tight">
                            Google Ads vs SEO: <span className="text-safety-orange">What Works for Tradies</span>
                        </h1>
                        <div className="flex items-center gap-6 text-white/40 text-sm font-bold uppercase tracking-wider mb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>9 min read</span>
                            </div>
                            <div>March 2026</div>
                        </div>
                        <p className="text-xl md:text-2xl text-white/80 font-bold leading-relaxed">
                            Ads bring leads this week. SEO brings leads forever. Most successful Australian tradies do both. Here's how to decide what to invest in first.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* The Simple Truth */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                The Simple Truth
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                When a homeowner searches "emergency plumber Parramatta," Google shows two types of results:
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Zap className="w-6 h-6 text-safety-orange" />
                                        <h3 className="text-xl font-black uppercase">Google Ads (Top 3-4)</h3>
                                    </div>
                                    <p className="text-sm text-white/80 mb-3 font-bold">Marked "Sponsored" — you pay $8-$25 per click</p>
                                    <ul className="space-y-2 text-sm text-white/70">
                                        <li>✓ Instant visibility</li>
                                        <li>✓ Control when you show up</li>
                                        <li>✓ Turn on/off anytime</li>
                                        <li>✓ Trackable ROI</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <TrendingUp className="w-6 h-6 text-safety-orange" />
                                        <h3 className="text-xl font-black uppercase">Organic SEO (Below Ads)</h3>
                                    </div>
                                    <p className="text-sm text-white/80 mb-3 font-bold">Free clicks — but takes 2-6 months to rank</p>
                                    <ul className="space-y-2 text-sm text-white/70">
                                        <li>✓ Free ongoing traffic</li>
                                        <li>✓ Higher trust (not "ads")</li>
                                        <li>✓ Compounds over time</li>
                                        <li>✓ Works 24/7 forever</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-safety-orange/10 border-l-4 border-safety-orange p-6 mt-6">
                                <p className="text-lg font-bold text-white/80">
                                    <strong className="text-safety-orange">The real question isn't which one is better.</strong> It's: which one do you need right now?
                                </p>
                            </div>
                        </div>

                        {/* When to Use Google Ads */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-8">
                                When to Use Google Ads
                            </h2>

                            <div className="space-y-6">
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <h3 className="text-xl font-black uppercase mb-3 flex items-center gap-2">
                                        <span className="text-safety-orange">1.</span> You Need Leads This Week
                                    </h3>
                                    <p className="text-white/80 font-bold mb-3">
                                        SEO takes months. Ads work immediately. Turn them on Monday, get calls Tuesday.
                                    </p>
                                    <div className="bg-black/40 p-4">
                                        <p className="text-sm text-white/70 italic">
                                            "I just started my business. I can't wait 3 months for SEO to kick in—I need jobs now." — Ads are your answer.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-8">
                                    <h3 className="text-xl font-black uppercase mb-3 flex items-center gap-2">
                                        <span className="text-safety-orange">2.</span> You're in a High-Competition Suburb
                                    </h3>
                                    <p className="text-white/80 font-bold mb-3">
                                        Ranking organically for "electrician Sydney CBD" could take 12+ months. Ads get you to the top instantly.
                                    </p>
                                    <p className="text-sm text-white/60">
                                        Example: 20 electricians already rank on page 1 for "electrician Mosman." Running ads bypasses the queue.
                                    </p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-8">
                                    <h3 className="text-xl font-black uppercase mb-3 flex items-center gap-2">
                                        <span className="text-safety-orange">3.</span> You Have Spare Capacity
                                    </h3>
                                    <p className="text-white/80 font-bold mb-3">
                                        Your team is free 2-3 days a week. Turn on ads to fill the gaps. Turn them off when you're fully booked.
                                    </p>
                                    <p className="text-sm text-white/60">
                                        Ads give you control. SEO is "always on"—which is great when you can handle the volume, but you can't pause it easily.
                                    </p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-8">
                                    <h3 className="text-xl font-black uppercase mb-3 flex items-center gap-2">
                                        <span className="text-safety-orange">4.</span> You Offer High-Value Services
                                    </h3>
                                    <p className="text-white/80 font-bold mb-3">
                                        If your average job is $8,000+ (renovations, extensions, full remodels), paying $40 per click is nothing.
                                    </p>
                                    <div className="bg-black/40 p-4">
                                        <p className="text-sm text-white/80 font-bold">Example ROI:</p>
                                        <ul className="space-y-1 text-sm text-white/70 mt-2">
                                            <li>• Ad spend: $1,200/month</li>
                                            <li>• Clicks: 40 ($30/click average)</li>
                                            <li>• Conversion rate: 15% (6 enquiries)</li>
                                            <li>• Close rate: 50% (3 jobs booked)</li>
                                            <li>• Average job value: $12,000</li>
                                            <li className="pt-2 border-t border-white/10">
                                                <strong className="text-safety-orange">Revenue: $36,000 | ROI: 3,000%</strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* When to Use SEO */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-8">
                                When to Use SEO
                            </h2>

                            <div className="space-y-6">
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <h3 className="text-xl font-black uppercase mb-3 flex items-center gap-2">
                                        <span className="text-safety-orange">1.</span> You Want Leads Without Ongoing Ad Spend
                                    </h3>
                                    <p className="text-white/80 font-bold mb-3">
                                        Ads stop = leads stop. SEO keeps working even when you're not paying for it.
                                    </p>
                                    <div className="bg-black/40 p-4">
                                        <p className="text-sm text-white/70 italic">
                                            "I spent $800/month on Google Ads for 3 years. One bad month, I paused them—and my phone went silent. SEO would've kept working." — Melbourne plumber
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-8">
                                    <h3 className="text-xl font-black uppercase mb-3 flex items-center gap-2">
                                        <span className="text-safety-orange">2.</span> You're Already Fully Booked
                                    </h3>
                                    <p className="text-white/80 font-bold mb-3">
                                        If you're turning work away, don't pay for ads. Invest in SEO so you rank organically when you need more work later.
                                    </p>
                                    <p className="text-sm text-white/60">
                                        Think of SEO as planting trees. You don't need the fruit today, but in 6 months, you'll have a steady supply.
                                    </p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-8">
                                    <h3 className="text-xl font-black uppercase mb-3 flex items-center gap-2">
                                        <span className="text-safety-orange">3.</span> You Have Low-Margin Jobs
                                    </h3>
                                    <p className="text-white/80 font-bold mb-3">
                                        If your average job is $400-$800 (blocked drains, leaking taps, small repairs), paying $15-$25 per click eats your margin.
                                    </p>
                                    <div className="bg-black/40 p-4">
                                        <p className="text-sm text-white/80 font-bold">Example:</p>
                                        <ul className="space-y-1 text-sm text-white/70 mt-2">
                                            <li>• Click cost: $18</li>
                                            <li>• Conversion rate: 20% (you need 5 clicks to get 1 enquiry = $90)</li>
                                            <li>• Close rate: 50% (you need 2 enquiries = $180 ad spend per job)</li>
                                            <li>• Job value: $400</li>
                                            <li className="pt-2 border-t border-white/10">
                                                <strong className="text-red-400">Profit after ads: $220 (margin cut in half)</strong>
                                            </li>
                                        </ul>
                                        <p className="text-sm text-white/60 mt-3 italic">SEO = free clicks. Same job, $400 profit instead of $220.</p>
                                    </div>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-8">
                                    <h3 className="text-xl font-black uppercase mb-3 flex items-center gap-2">
                                        <span className="text-safety-orange">4.</span> You're Building Long-Term
                                    </h3>
                                    <p className="text-white/80 font-bold mb-3">
                                        If you plan to be in business 5+ years, SEO compounds. Page 1 rankings in Year 1 = thousands of free leads in Years 2-5.
                                    </p>
                                    <p className="text-sm text-white/60">
                                        Ads are renting traffic. SEO is buying it once and owning it forever.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Cost Comparison */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Real Cost Comparison (12 Months)
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-4 text-safety-orange">Google Ads</h3>
                                    <div className="space-y-3 text-sm text-white/80 font-bold">
                                        <div className="flex justify-between pb-2 border-b border-white/10">
                                            <span>Ad spend (12 months):</span>
                                            <span className="text-safety-orange">$9,600</span>
                                        </div>
                                        <div className="flex justify-between pb-2 border-b border-white/10">
                                            <span>Management fee (10%):</span>
                                            <span className="text-safety-orange">$960</span>
                                        </div>
                                        <div className="flex justify-between font-black text-lg pt-2">
                                            <span>Total Year 1:</span>
                                            <span className="text-safety-orange">$10,560</span>
                                        </div>
                                        <p className="text-xs text-white/40 italic mt-4">Stops working the moment you stop paying.</p>
                                    </div>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-4 text-safety-orange">SEO (Website + Optimization)</h3>
                                    <div className="space-y-3 text-sm text-white/80 font-bold">
                                        <div className="flex justify-between pb-2 border-b border-white/10">
                                            <span>Website setup:</span>
                                            <span className="text-safety-orange">$3,900</span>
                                        </div>
                                        <div className="flex justify-between pb-2 border-b border-white/10">
                                            <span>Quarterly maintenance (×4):</span>
                                            <span className="text-safety-orange">$1,196</span>
                                        </div>
                                        <div className="flex justify-between font-black text-lg pt-2">
                                            <span>Total Year 1:</span>
                                            <span className="text-safety-orange">$5,096</span>
                                        </div>
                                        <p className="text-xs text-white/40 italic mt-4">Keeps working in Year 2, 3, 4... without ongoing spend.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-black/40 border-l-4 border-safety-orange p-6 mt-6">
                                <p className="font-black mb-2 text-safety-orange">3-Year Total Cost:</p>
                                <div className="grid md:grid-cols-2 gap-6 text-sm">
                                    <div>
                                        <p className="text-white/60 mb-1">Google Ads (3 years):</p>
                                        <p className="text-2xl font-black text-white">$31,680</p>
                                    </div>
                                    <div>
                                        <p className="text-white/60 mb-1">SEO (3 years):</p>
                                        <p className="text-2xl font-black text-safety-orange">$8,680</p>
                                        <p className="text-xs text-white/40 mt-1">($3,900 setup + $1,196/year × 3 + $992/year hosting/maintenance)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* The Best Strategy */}
                        <div className="bg-safety-orange/10 border border-safety-orange/20 p-8">
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6">
                                The Best Strategy: Do Both
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Most successful tradies don't choose. They use ads for immediate results while SEO builds long-term traffic.
                            </p>

                            <div className="space-y-6">
                                <div className="bg-black/40 p-6">
                                    <p className="font-black mb-3 text-lg text-safety-orange">Year 1 Strategy (Best ROI):</p>
                                    <div className="space-y-2 text-sm text-white/80 font-bold">
                                        <p><strong>Months 1-3:</strong> Run Google Ads ($600-$800/month) while your website and SEO get set up. Ads keep leads coming.</p>
                                        <p><strong>Months 4-6:</strong> SEO starts ranking for low-competition suburbs. Reduce ad spend to $400-$500/month.</p>
                                        <p><strong>Months 7-12:</strong> SEO brings 40-60% of leads organically. Ads supplement for high-intent keywords or when you have capacity.</p>
                                    </div>
                                </div>

                                <div className="bg-black/40 p-6">
                                    <p className="font-black mb-3 text-lg text-safety-orange">Year 2+:</p>
                                    <div className="space-y-2 text-sm text-white/80 font-bold">
                                        <p>• SEO drives 60-80% of inbound leads (free traffic)</p>
                                        <p>• Ads run only when you need extra work or for specific high-value services</p>
                                        <p>• Total marketing cost drops to $200-$400/month (maintenance + occasional ads)</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-lg font-black text-safety-orange mt-6">
                                Ads = short-term fuel. SEO = long-term engine. Use both, then taper ads as SEO takes over.
                            </p>
                        </div>

                        {/* Quick Decision Matrix */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Quick Decision Matrix
                            </h2>

                            <div className="bg-white/5 border border-white/10 overflow-hidden">
                                <table className="w-full text-sm">
                                    <thead className="bg-black/40">
                                        <tr>
                                            <th className="text-left p-4 font-black uppercase">Your Situation</th>
                                            <th className="text-left p-4 font-black uppercase">Recommended Approach</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10">
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Just started, need jobs NOW</td>
                                            <td className="p-4 text-white/70"><strong className="text-safety-orange">Ads</strong> (100% budget)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Established, consistent work</td>
                                            <td className="p-4 text-white/70"><strong className="text-safety-orange">SEO</strong> (80%) + Ads (20%)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">High-value jobs ($8k+)</td>
                                            <td className="p-4 text-white/70"><strong className="text-safety-orange">Ads</strong> (60%) + SEO (40%)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Low-margin jobs (&lt; $800)</td>
                                            <td className="p-4 text-white/70"><strong className="text-safety-orange">SEO</strong> (90%) + minimal ads (10%)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Fully booked, planning ahead</td>
                                            <td className="p-4 text-white/70"><strong className="text-safety-orange">SEO</strong> (100% — build for future)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Seasonal business (peaks/valleys)</td>
                                            <td className="p-4 text-white/70"><strong className="text-safety-orange">SEO</strong> always on + Ads during slow season</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Bottom Line */}
                        <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                            <h2 className="text-2xl font-black uppercase italic mb-4">The Bottom Line</h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                <strong className="text-safety-orange">Google Ads:</strong> Fast, controllable, expensive long-term. Best for new businesses or high-value services.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                <strong className="text-safety-orange">SEO:</strong> Slow to start, free ongoing, compounds over years. Best for established businesses or low-margin work.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                <strong className="text-safety-orange">The smart play:</strong> Use ads to fill your schedule while SEO builds. After 12 months, SEO carries most of the load—and you dial ads up or down as needed.
                            </p>
                        </div>

                        <RelatedReads items={relatedReads} />

                    </div>
                </div>
            </article>

            {/* CTA Section */}
            <section className="py-16 md:py-20 border-t border-white/5 bg-black/40">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-6">
                            Want a Strategy <span className="text-safety-orange">Built For Your Business?</span>
                        </h2>
                        <p className="text-xl text-white/70 font-bold mb-8 max-w-2xl mx-auto">
                            We help Australian tradies build SEO-optimized websites and run Google Ads campaigns—customized for your trade, budget, and goals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/#packages">
                                <Button className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    See Our Packages <ArrowRight className="ml-3 w-5 h-5" />
                                </Button>
                            </a>
                            <a href="/#contact">
                                <Button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    Get a Free Strategy Session
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

export default GoogleAdsVsSEO;
