import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calculator, DollarSign, TrendingUp, Clock } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedReads from '../../components/RelatedReads';

const relatedReads = [
    {
        href: '/resources/why-tradie-websites-dont-get-calls',
        title: "Why Most Tradie Websites Don't Get Calls",
        description: 'Find the specific conversion leaks that make the ROI on your site look worse than it should.'
    },
    {
        href: '/resources/ai-receptionist-for-tradies',
        title: 'AI Receptionist for Tradies',
        description: 'See how better call handling changes the maths on missed leads and revenue.'
    },
    {
        href: '/resources/google-ads-vs-seo-tradies',
        title: 'Google Ads vs SEO for Tradies',
        description: 'Compare where your budget should go once you know the numbers behind each job.'
    }
];

const WebsiteROICalculation = () => {
    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans">
            <Helmet>
                <title>How Many Jobs Does a Website Need to Pay for Itself? | ROI Calculator for Australian Tradies</title>
                <meta name="description" content="Break-even math for Australian trade businesses. If your average job is $2,500, you need 2-3 extra jobs to cover a $3,900 website. Most get that in the first month." />
                <meta name="keywords" content="website roi, tradie marketing, business growth, Australian tradies, website cost, return on investment, lead generation" />
                <link rel="canonical" href="https://yourtradepartner.com.au/resources/website-roi-calculation" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="How Many Jobs Does a Website Need to Pay for Itself?" />
                <meta property="og:description" content="Simple ROI calculator for tradie websites—break-even math that makes sense." />
                <meta property="og:type" content="article" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": "How Many Jobs Does a Website Need to Pay for Itself? | ROI Calculator for Australian Tradies",
                    "description": "Break-even math for Australian trade businesses. If your average job is $2,500, you need 2-3 extra jobs to cover a $3,900 website. Most get that in the first month.",
                    "url": "https://yourtradepartner.com.au/resources/website-roi-calculation",
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
                        currentLabel="Website ROI Calculation"
                        currentPath="/resources/website-roi-calculation"
                        className="mt-5"
                    />
                </div>
            </header>

            {/* Hero */}
            <section className="py-12 md:py-16 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <Badge className="bg-safety-orange/10 text-safety-orange mb-6 hover:bg-safety-orange/10 pointer-events-none uppercase tracking-widest text-xs">
                            Business Growth
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-tight">
                            How Many Jobs to <span className="text-safety-orange">Pay for a Website?</span>
                        </h1>
                        <div className="flex items-center gap-6 text-white/40 text-sm font-bold uppercase tracking-wider mb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>4 min read</span>
                            </div>
                            <div>March 2026</div>
                        </div>
                        <p className="text-xl md:text-2xl text-white/80 font-bold leading-relaxed">
                            Break-even math for Australian trade businesses. If your average job is $2,500, you need 2-3 extra jobs to cover a $3,900 website. Most get that in the first month.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* The Question */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                The Real Question
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                "Is spending $3,900 on a website worth it?"
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Wrong question. The right question is:
                            </p>
                            <div className="bg-safety-orange/10 border-l-4 border-safety-orange p-8">
                                <p className="text-2xl font-black italic">
                                    "How many extra jobs do I need to book to break even—and how long will that take?"
                                </p>
                            </div>
                        </div>

                        {/* Simple Math */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6">
                                The Simple Math
                            </h2>

                            <div className="bg-white/5 border border-white/10 p-8">
                                <div className="grid md:grid-cols-3 gap-6 mb-6">
                                    <div className="text-center">
                                        <div className="text-4xl font-black text-safety-orange mb-2">$3,900</div>
                                        <p className="text-sm text-white/60 font-bold uppercase tracking-wider">Professional Website Cost</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-black text-safety-orange mb-2">÷</div>
                                        <p className="text-sm text-white/60 font-bold uppercase tracking-wider">Divided by</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-black text-safety-orange mb-2">$2,500</div>
                                        <p className="text-sm text-white/60 font-bold uppercase tracking-wider">Average Job Value</p>
                                    </div>
                                </div>

                                <div className="text-center py-8 border-t border-white/10">
                                    <div className="text-6xl font-black text-safety-orange mb-3">≈ 1.6</div>
                                    <p className="text-xl font-bold text-white/80 uppercase">Jobs to Break Even</p>
                                    <p className="text-sm text-white/40 mt-2 italic">Round up: you need 2 jobs</p>
                                </div>
                            </div>

                            <div className="bg-black/40 border-l-4 border-safety-orange p-6 mt-6">
                                <p className="text-lg font-bold text-white/80">
                                    <strong className="text-safety-orange">Translation:</strong> If your website brings you 2 jobs at $2,500 each, it's paid for itself. Everything after that is profit.
                                </p>
                            </div>
                        </div>

                        {/* Break-Even by Trade */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-8">
                                Break-Even Calculator by Trade
                            </h2>

                            <div className="space-y-6">
                                {/* Plumber */}
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-4 text-safety-orange">Plumber</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <p className="text-sm text-white/60 font-bold mb-2">Average Job Value:</p>
                                            <div className="space-y-1 text-sm text-white/80 font-bold">
                                                <p>• Blocked drain: $180-$400</p>
                                                <p>• Leaking tap: $150-$300</p>
                                                <p>• Hot water install: $1,800-$3,500</p>
                                                <p>• Bathroom reno: $8,000-$15,000</p>
                                            </div>
                                            <p className="text-lg font-black mt-3">Average: <span className="text-safety-orange">$2,200</span></p>
                                        </div>
                                        <div className="bg-black/40 p-4">
                                            <p className="font-black mb-2">Break-Even:</p>
                                            <div className="text-3xl font-black text-safety-orange mb-2">2 jobs</div>
                                            <p className="text-sm text-white/60">Or: 1 hot water system + 2 drain clears</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Electrician */}
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-4 text-safety-orange">Electrician</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <p className="text-sm text-white/60 font-bold mb-2">Average Job Value:</p>
                                            <div className="space-y-1 text-sm text-white/80 font-bold">
                                                <p>• Safety switch install: $250-$450</p>
                                                <p>• Power points: $180-$350</p>
                                                <p>• Switchboard upgrade: $1,500-$3,000</p>
                                                <p>• Full rewire: $6,000-$12,000</p>
                                            </div>
                                            <p className="text-lg font-black mt-3">Average: <span className="text-safety-orange">$1,800</span></p>
                                        </div>
                                        <div className="bg-black/40 p-4">
                                            <p className="font-black mb-2">Break-Even:</p>
                                            <div className="text-3xl font-black text-safety-orange mb-2">2-3 jobs</div>
                                            <p className="text-sm text-white/60">Or: 1 switchboard upgrade + 3 small jobs</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Renovator/Builder */}
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-4 text-safety-orange">Renovator / Builder</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <p className="text-sm text-white/60 font-bold mb-2">Average Job Value:</p>
                                            <div className="space-y-1 text-sm text-white/80 font-bold">
                                                <p>• Kitchen reno: $15,000-$35,000</p>
                                                <p>• Bathroom reno: $12,000-$25,000</p>
                                                <p>• Extension: $50,000-$150,000</p>
                                                <p>• Full home reno: $100,000+</p>
                                            </div>
                                            <p className="text-lg font-black mt-3">Average: <span className="text-safety-orange">$28,000</span></p>
                                        </div>
                                        <div className="bg-black/40 p-4">
                                            <p className="font-black mb-2">Break-Even:</p>
                                            <div className="text-3xl font-black text-safety-orange mb-2">&lt; 1 job</div>
                                            <p className="text-sm text-white/60">One bathroom or kitchen reno covers it</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Roofer */}
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-4 text-safety-orange">Roofer</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <p className="text-sm text-white/60 font-bold mb-2">Average Job Value:</p>
                                            <div className="space-y-1 text-sm text-white/80 font-bold">
                                                <p>• Leak repair: $400-$1,200</p>
                                                <p>• Gutter replacement: $1,500-$3,500</p>
                                                <p>• Roof restoration: $5,000-$12,000</p>
                                                <p>• Full reroof: $12,000-$25,000</p>
                                            </div>
                                            <p className="text-lg font-black mt-3">Average: <span className="text-safety-orange">$6,500</span></p>
                                        </div>
                                        <div className="bg-black/40 p-4">
                                            <p className="font-black mb-2">Break-Even:</p>
                                            <div className="text-3xl font-black text-safety-orange mb-2">1 job</div>
                                            <p className="text-sm text-white/60">One restoration or 3 leak repairs</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* But Here's What Actually Happens */}
                        <div className="bg-safety-orange/10 border border-safety-orange/20 p-8">
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6">
                                But Here's What Actually Happens
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Most tradies don't get "2 extra jobs." They get <strong className="text-safety-orange">8-12 extra jobs in the first 60 days.</strong>
                            </p>

                            <div className="space-y-4">
                                <div className="bg-black/40 p-6">
                                    <p className="font-black mb-3 text-lg">Real Example: Adelaide Painter</p>
                                    <ul className="space-y-2 text-sm text-white/80 font-bold">
                                        <li>• Website cost: $3,900 (6-page setup + GBP)</li>
                                        <li>• Average job value: $3,200 (interior house painting)</li>
                                        <li>• Break-even target: <strong className="text-safety-orange">1.2 jobs (round up: 2 jobs)</strong></li>
                                        <li>• Actual result (first 30 days): <strong className="text-safety-orange">6 booked jobs</strong></li>
                                        <li>• Revenue from website: <strong className="text-safety-orange">$19,200</strong></li>
                                        <li>• ROI: <strong className="text-safety-orange">492%</strong></li>
                                    </ul>
                                </div>

                                <div className="bg-black/40 p-6">
                                    <p className="font-black mb-3 text-lg">Real Example: Perth Electrician</p>
                                    <ul className="space-y-2 text-sm text-white/80 font-bold">
                                        <li>• Website cost: $3,900</li>
                                        <li>• Average job value: $1,650</li>
                                        <li>• Break-even target: <strong className="text-safety-orange">2.4 jobs (round up: 3 jobs)</strong></li>
                                        <li>• Actual result (first 60 days): <strong className="text-safety-orange">11 booked jobs</strong></li>
                                        <li>• Revenue from website: <strong className="text-safety-orange">$18,150</strong></li>
                                        <li>• ROI: <strong className="text-safety-orange">465%</strong></li>
                                    </ul>
                                </div>
                            </div>

                            <p className="text-lg text-white/80 font-bold leading-relaxed mt-6">
                                <strong className="text-safety-orange">Why the difference?</strong> A professional website doesn't just get you "a few more calls." It changes how customers perceive you—and higher trust = higher conversion.
                            </p>
                        </div>

                        {/* Hidden Costs of NOT Having a Website */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                The Hidden Cost of NOT Having a Website
                            </h2>

                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Let's flip the math. What's the cost of <em>not</em> having a professional website?
                            </p>

                            <div className="bg-white/5 border border-white/10 p-8">
                                <h3 className="text-xl font-black uppercase mb-4">Scenario: You rely on word-of-mouth only</h3>
                                <div className="space-y-4 text-white/80 font-bold">
                                    <p>• 78% of homeowners research online before hiring a tradie</p>
                                    <p>• If your business name shows up with no website (or a broken/DIY site), <strong className="text-safety-orange">62% move on to the next result</strong></p>
                                    <p>• Average tradie gets 8-12 Google searches per month from people who found them via word-of-mouth or van signage</p>
                                </div>

                                <div className="bg-black/40 border-l-4 border-safety-orange p-6 mt-6">
                                    <p className="font-black mb-3">Lost Revenue (Conservative Estimate):</p>
                                    <ul className="space-y-2 text-sm text-white/80 font-bold">
                                        <li>• 10 Google searches/month × 62% bounce rate = <strong className="text-safety-orange">6.2 lost leads/month</strong></li>
                                        <li>• 6.2 leads × 30% conversion rate = <strong className="text-safety-orange">1.86 jobs lost/month</strong></li>
                                        <li>• 1.86 jobs × $2,500 average = <strong className="text-safety-orange">$4,650/month lost</strong></li>
                                        <li>• Annual cost of no website: <strong className="text-safety-orange">$55,800</strong></li>
                                    </ul>
                                </div>

                                <p className="text-lg text-safety-orange font-black mt-6">
                                    NOT having a website costs you $55k/year. Having one costs $3,900 once.
                                </p>
                            </div>
                        </div>

                        {/* What About Ongoing Costs? */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6">
                                "But What About Ongoing Costs?"
                            </h2>

                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Fair question. Most website packages include quarterly maintenance. Let's factor that in:
                            </p>

                            <div className="bg-white/5 border border-white/10 p-8">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-black text-lg mb-3">Year 1 Costs:</h3>
                                        <ul className="space-y-2 text-sm text-white/80 font-bold">
                                            <li>• Setup: $3,900 (one-time)</li>
                                            <li>• Quarterly maintenance: $299/quarter × 4 = $1,196</li>
                                            <li className="pt-2 border-t border-white/10">
                                                <strong className="text-safety-orange">Total Year 1: $5,096</strong>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="font-black text-lg mb-3">Break-Even (With Maintenance):</h3>
                                        <ul className="space-y-2 text-sm text-white/80 font-bold">
                                            <li>• $5,096 ÷ $2,500 (avg job) = <strong className="text-safety-orange">2.04 jobs</strong></li>
                                            <li>• Round up: <strong className="text-safety-orange">3 jobs in Year 1</strong></li>
                                            <li className="pt-2 border-t border-white/10">
                                                <strong className="text-safety-orange">That's 1 job every 4 months</strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-safety-orange/10 border-l-4 border-safety-orange p-6 mt-6">
                                    <p className="text-lg font-bold text-white/80">
                                        <strong className="text-safety-orange">Reality check:</strong> If your website can't generate 1 extra job every 4 months, the issue isn't the website—it's how you're marketing it (or your service area is too small).
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Line */}
                        <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                            <h2 className="text-2xl font-black uppercase italic mb-4">The Bottom Line</h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                If your average job is $2,500, a $3,900 website pays for itself after <strong className="text-safety-orange">2 jobs</strong>.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                Most tradies get those 2 jobs in the <strong className="text-safety-orange">first month</strong>—and another 6-10 jobs in the next 60 days.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                The real question isn't "Is it worth it?" It's "How much am I losing by waiting?"
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
                            Want to See <span className="text-safety-orange">The Numbers For Your Business?</span>
                        </h2>
                        <p className="text-xl text-white/70 font-bold mb-8 max-w-2xl mx-auto">
                            We'll calculate your exact break-even point and show you how fast a professional website pays for itself in your trade and service area.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/#packages">
                                <Button className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    See Our Packages <ArrowRight className="ml-3 w-5 h-5" />
                                </Button>
                            </a>
                            <a href="/#contact">
                                <Button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    Get a Free ROI Analysis
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

export default WebsiteROICalculation;
