import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, DollarSign, Zap, TrendingUp, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedReads from '../../components/RelatedReads';

const relatedReads = [
    {
        href: '/seo-for-tradies',
        title: 'SEO for Tradies',
        description: 'The complete SEO system for Australian trade businesses — keyword targeting, local ranking, and suburb pages.'
    },
    {
        href: '/marketing-for-tradies',
        title: 'Marketing for Tradies',
        description: 'How to build a full enquiry pipeline — not just traffic, but calls, enquiries, and booked jobs.'
    },
    {
        href: '/resources/website-roi-calculation',
        title: 'Website ROI Calculation',
        description: 'Measure whether your website is producing profitable jobs — and what it needs to do more of it.'
    }
];

const TradiWebsiteCostAustralia = () => {
    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans">
            <Helmet>
                <title>Tradie Website Cost Australia: 2026 Honest Breakdown</title>
                <meta name="description" content="A tradie website costs $500–$8,000+ in Australia. But cost isn't the question — which website actually gets your phone ringing? Plain numbers, no fluff." />
                <meta name="keywords" content="tradie website cost australia, how much does a tradie website cost, tradie website pricing, trade website design cost, website cost for tradies" />
                <link rel="canonical" href="https://yourtradepartner.com.au/resources/tradie-website-cost-australia" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Tradie Website Cost Australia: 2026 Honest Breakdown" />
                <meta property="og:description" content="A tradie website costs $500–$8,000+ in Australia. But cost isn't the question — which website actually gets your phone ringing?" />
                <meta property="og:type" content="article" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": "Tradie Website Cost Australia: 2026 Honest Breakdown",
                    "description": "A tradie website costs $500–$8,000+ in Australia. But cost isn't the question — which website actually gets your phone ringing? Plain numbers, no fluff.",
                    "url": "https://yourtradepartner.com.au/resources/tradie-website-cost-australia",
                    "datePublished": "2026-05-30",
                    "dateModified": "2026-05-30",
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
                        currentLabel="Tradie Website Cost Australia"
                        currentPath="/resources/tradie-website-cost-australia"
                        className="mt-5"
                    />
                </div>
            </header>

            {/* Hero */}
            <section className="py-12 md:py-16 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <Badge className="bg-safety-orange/10 text-safety-orange mb-6 hover:bg-safety-orange/10 pointer-events-none uppercase tracking-widest text-xs">
                            Pricing
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-tight">
                            How Much Does a Tradie Website Cost in Australia? <span className="text-safety-orange">Honest 2026 Breakdown</span>
                        </h1>
                        <div className="flex items-center gap-6 text-white/40 text-sm font-bold uppercase tracking-wider mb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 min read</span>
                            </div>
                            <div>May 2026</div>
                        </div>
                        <p className="text-xl md:text-2xl text-white/80 font-bold leading-relaxed">
                            A professional tradie website in Australia costs between $1,500 and $5,000 upfront. But that's not the right question. The right question is: which one actually gets your phone ringing?
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* The Price Ranges */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                The Price Ranges (Straight Answer)
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Here's what you're actually buying at each price point in the Australian market:
                            </p>

                            <div className="bg-white/5 border border-white/10 overflow-hidden mb-6">
                                <table className="w-full text-sm">
                                    <thead className="bg-black/40">
                                        <tr>
                                            <th className="text-left p-4 font-black uppercase">Type</th>
                                            <th className="text-left p-4 font-black uppercase">Cost</th>
                                            <th className="text-left p-4 font-black uppercase">What You Get</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10">
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">DIY builder (Wix / Squarespace)</td>
                                            <td className="p-4 text-safety-orange font-black">$0–$50/mo</td>
                                            <td className="p-4 text-white/60">You build it. Mobile-friendly. Won't rank on Google.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Budget agency / template</td>
                                            <td className="p-4 text-safety-orange font-black">$500–$1,500</td>
                                            <td className="p-4 text-white/60">3–5 pages, cookie-cutter design. Gets you online, nothing more.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Professional tradie website</td>
                                            <td className="p-4 text-safety-orange font-black">$2,000–$4,000</td>
                                            <td className="p-4 text-white/60">Custom design, click-to-call, quote forms, mobile-first.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Full enquiry system</td>
                                            <td className="p-4 text-safety-orange font-black">$4,000–$8,000</td>
                                            <td className="p-4 text-white/60">Suburb pages, SEO foundation, Google reviews, AI automation.</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Enterprise / multi-location</td>
                                            <td className="p-4 text-safety-orange font-black">$10,000+</td>
                                            <td className="p-4 text-white/60">Complex builds across multiple trades, locations, and integrations.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-black/40 border-l-4 border-safety-orange p-6">
                                <p className="font-black mb-2 text-safety-orange">The Australian sweet spot:</p>
                                <p className="text-white/80 font-bold">
                                    Most established Australian tradies who want consistent work land between $2,500 and $4,500. Anything under $1,500 will look the part but sit there doing nothing.
                                </p>
                            </div>
                        </div>

                        {/* What the price difference means */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                What the Price Difference Actually Means
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Most guides stop at feature lists. Let's talk outcomes instead.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <DollarSign className="w-6 h-6 text-white/40" />
                                        <h3 className="text-xl font-black uppercase">The $900 Website</h3>
                                    </div>
                                    <p className="text-sm text-white/70 font-bold mb-3">A digital business card.</p>
                                    <ul className="space-y-2 text-sm text-white/60">
                                        <li>✓ Confirms you exist online</li>
                                        <li>✗ Won't rank on Google</li>
                                        <li>✗ Won't convert visitors into callers</li>
                                        <li>✗ Won't generate a single enquiry on its own</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <TrendingUp className="w-6 h-6 text-safety-orange" />
                                        <h3 className="text-xl font-black uppercase">The $3,500 Website</h3>
                                    </div>
                                    <p className="text-sm text-white/80 font-bold mb-3">A conversion system.</p>
                                    <ul className="space-y-2 text-sm text-white/70">
                                        <li>✓ Ranks for suburb + trade searches</li>
                                        <li>✓ Converts visitors into callers</li>
                                        <li>✓ Generates 5–15 enquiries/month</li>
                                        <li>✓ Pays for itself in 1–2 months</li>
                                    </ul>
                                </div>
                            </div>

                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                One job worth $1,200 pays for a $3,500 website in three months. That's the frame worth thinking in — not the upfront cost.
                            </p>
                        </div>

                        {/* Hidden ongoing costs */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                The Ongoing Costs Nobody Mentions Upfront
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                The build price is only part of it. Every website carries ongoing costs — whether you're told about them or not.
                            </p>

                            <div className="bg-white/5 border border-white/10 overflow-hidden mb-6">
                                <table className="w-full text-sm">
                                    <thead className="bg-black/40">
                                        <tr>
                                            <th className="text-left p-4 font-black uppercase">Cost</th>
                                            <th className="text-left p-4 font-black uppercase">Typical Range</th>
                                            <th className="text-left p-4 font-black uppercase">Notes</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10">
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Domain name</td>
                                            <td className="p-4 text-safety-orange font-black">$20–$40/year</td>
                                            <td className="p-4 text-white/60">Should be registered in your name</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Hosting</td>
                                            <td className="p-4 text-safety-orange font-black">$10–$50/month</td>
                                            <td className="p-4 text-white/60">Often bundled into your build package</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">SSL certificate</td>
                                            <td className="p-4 text-safety-orange font-black">Usually free</td>
                                            <td className="p-4 text-white/60">Included with good hosting — verify before you sign</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Maintenance</td>
                                            <td className="p-4 text-safety-orange font-black">$50–$150/month</td>
                                            <td className="p-4 text-white/60">Updates, security, content changes — or DIY</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">SEO</td>
                                            <td className="p-4 text-safety-orange font-black">$400–$2,000/month</td>
                                            <td className="p-4 text-white/60">Only needed if you want to rank and stay ranked</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="bg-black/40 border-l-4 border-safety-orange p-6">
                                <p className="font-black mb-3 text-safety-orange">First-year total cost of ownership:</p>
                                <p className="text-white/80 font-bold mb-2">Budget build ($1,000) + ongoing: <span className="text-white">~$2,000 all-in</span></p>
                                <p className="text-white/80 font-bold">Professional build ($3,500) + hosting + basic SEO: <span className="text-white">~$5,000–$6,000 all-in</span></p>
                            </div>
                        </div>

                        {/* Monthly subscription vs upfront */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Monthly Subscription vs Upfront — Which Is Smarter?
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                A growing number of tradie website providers offer subscription models: pay $99–$250/month, no upfront cost, site goes live within a week. The appeal is obvious. The catch is ownership.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-4">Subscription Model</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li className="text-white/70 font-bold">✓ Low upfront cost</li>
                                        <li className="text-white/70 font-bold">✓ Fast to launch</li>
                                        <li className="text-red-400 font-bold">✗ You never own the site</li>
                                        <li className="text-red-400 font-bold">✗ Stop paying = site disappears</li>
                                        <li className="text-red-400 font-bold">✗ $150/mo × 36 months = $5,400 for nothing</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-4">Upfront Build</h3>
                                    <ul className="space-y-3 text-sm">
                                        <li className="text-red-400 font-bold">✗ Higher initial cost</li>
                                        <li className="text-white/70 font-bold">✓ You own it outright</li>
                                        <li className="text-white/70 font-bold">✓ Lower 3-year total cost</li>
                                        <li className="text-white/70 font-bold">✓ Domain, content, rankings — all yours</li>
                                        <li className="text-white/70 font-bold">✓ Walk away with a real asset</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bg-black/40 border-l-4 border-red-400 p-6">
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                                    <div>
                                        <p className="font-black mb-2 text-red-400">Watch out for this:</p>
                                        <p className="text-white/80 font-bold">
                                            Some providers charge monthly AND register the domain in their name. If you leave, you lose your web address and start from zero. Read the contract before you sign.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* What converts */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                What Your Website Actually Needs to Convert
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                A site can tick every feature box and still not generate a single call. These are the elements that separate a converting site from a brochure:
                            </p>

                            <div className="grid md:grid-cols-2 gap-4 mb-6">
                                {[
                                    { title: "Click-to-call above the fold", desc: "Visible without scrolling on mobile. If a customer has to hunt for your number, they won't call." },
                                    { title: "Quote form — 3 fields max", desc: "Name, phone, job description. More than that and they abandon. Less than that and you can't respond properly." },
                                    { title: "Load time under 3 seconds", desc: "Most tradie sites fail this on mobile. Google ranks slow sites lower and customers leave faster." },
                                    { title: "Google reviews visible", desc: "Embedded or clearly linked. Customers check before calling — make it easy to see social proof." },
                                    { title: "Suburb / service area pages", desc: "One page per suburb you service. Without these, your site won't rank for '[trade] + [suburb]' searches." },
                                    { title: "Individual service pages", desc: "One page per service type — not a single 'Services' page covering everything. Google ranks specificity." },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-4">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-safety-orange mt-0.5 shrink-0" />
                                            <div>
                                                <p className="font-black text-sm uppercase mb-1">{item.title}</p>
                                                <p className="text-xs text-white/60">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                A site missing click-to-call and fast mobile performance won't convert — regardless of what was paid to build it.
                            </p>
                        </div>

                        {/* AI Automation — Prominent Section */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                AI Automation: The Part Most Websites Are Still Missing
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                A converting website captures enquiries during business hours. An automated system captures them at 9pm on a Sunday when your competitor's phone is off.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                78% of customers call once and move on. Most don't leave voicemails. If your site can't respond to after-hours enquiries automatically — with a smart chatbot that qualifies the job, collects contact details, and books a callback — you're handing those jobs to whoever can.
                            </p>

                            <div className="bg-white/5 border border-safety-orange/30 p-6 mb-6">
                                <div className="flex items-start gap-4">
                                    <Zap className="w-8 h-8 text-safety-orange shrink-0 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-black uppercase mb-4">What an automated tradie website does differently:</h3>
                                        <ul className="space-y-3 text-sm text-white/80 font-bold">
                                            <li className="flex items-start gap-2">
                                                <span className="text-safety-orange mt-0.5 shrink-0">→</span>
                                                <span>AI chat captures after-hours enquiries automatically — name, job type, suburb, best time to call</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-safety-orange mt-0.5 shrink-0">→</span>
                                                <span>Automated follow-up via SMS or email when a quote form is submitted — response in minutes, not days</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-safety-orange mt-0.5 shrink-0">→</span>
                                                <span>Booking confirmation sent automatically so customers don't wonder if you received their message</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-safety-orange mt-0.5 shrink-0">→</span>
                                                <span>Google review requests sent after a job completes — without you having to remember to ask</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                This is the difference between a website that cost $3,000 and a system that earns. Adding automation to a tradie website typically adds $1,000–$2,500 to the build, depending on complexity. The return is immediate — every after-hours enquiry you capture that would have otherwise bounced straight to a competitor.
                            </p>

                            <div className="bg-black/40 border-l-4 border-safety-orange p-6">
                                <p className="font-black mb-2 text-safety-orange">Want to see what automation looks like for a trade business?</p>
                                <p className="text-white/80 font-bold mb-4">
                                    We've built an enquiry automation system specifically for Australian tradies — AI chatbot, follow-up sequences, Google review automation, and booking tools, all connected to your site.
                                </p>
                                <a href="/automation" className="inline-flex items-center gap-2 text-safety-orange font-black uppercase tracking-wider hover:underline">
                                    See how the automation system works <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* ROI question */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                The Real Question: Cost Per Job
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                An average tradie job in Australia is worth $800–$3,000. Frame the website cost against that number, not against the invoice on its own.
                            </p>

                            <div className="grid md:grid-cols-3 gap-4 mb-6">
                                {[
                                    { label: "Website generates", value: "3 extra enquiries/month" },
                                    { label: "You convert", value: "2 into jobs" },
                                    { label: "Extra revenue", value: "$1,600–$6,000/month" },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-6 text-center">
                                        <p className="text-xs text-white/40 uppercase tracking-wider font-bold mb-2">{item.label}</p>
                                        <p className="text-xl font-black text-safety-orange">{item.value}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                A $4,000 website that generates those numbers pays for itself in the first month. An $800 website that generates zero enquiries costs you money every single month it exists — in jobs that were searching for you and found someone else instead.
                            </p>

                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                Price is irrelevant. Return is everything. Work out your numbers with the <a href="/resources/website-roi-calculation" className="text-safety-orange hover:underline">Website ROI Calculator</a>.
                            </p>
                        </div>

                        {/* Red flags */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Red Flags Before You Sign Anything
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Ask these questions directly before hiring any web agency:
                            </p>

                            <div className="space-y-4">
                                {[
                                    { flag: "Who owns the domain name?", detail: "It must be registered in your name, not the agency's. If you leave, you keep your web address." },
                                    { flag: "Is there a lock-in contract?", detail: "12–24 month lock-ins are common. If results are poor, you're still paying. Negotiate a 3-month exit clause minimum." },
                                    { flag: "Do they take a cut of your enquiries?", detail: "Some 'lead management' services charge per job or take a commission. That model is designed for their profit, not yours." },
                                    { flag: "Are suburb pages included?", detail: "Without individual suburb pages, your site won't rank for '[trade] + [suburb]' searches — which is where most tradie traffic comes from." },
                                    { flag: "What happens to your site if you stop paying?", detail: "Should be a straight answer. If it isn't, walk away." },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-5">
                                        <div className="flex items-start gap-3">
                                            <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                                            <div>
                                                <p className="font-black uppercase mb-1">{item.flag}</p>
                                                <p className="text-sm text-white/60">{item.detail}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Cost by trade */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Quick Cost Guide by Trade
                            </h2>

                            <div className="bg-white/5 border border-white/10 overflow-hidden">
                                <table className="w-full text-sm">
                                    <thead className="bg-black/40">
                                        <tr>
                                            <th className="text-left p-4 font-black uppercase">Trade</th>
                                            <th className="text-left p-4 font-black uppercase">Typical Build Cost</th>
                                            <th className="text-left p-4 font-black uppercase">What to Prioritise</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10">
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Electrician (solo, metro)</td>
                                            <td className="p-4 text-safety-orange font-black">$2,500–$3,500</td>
                                            <td className="p-4 text-white/60">Suburb pages, licence details, click-to-call</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Plumber (2-person crew)</td>
                                            <td className="p-4 text-safety-orange font-black">$2,500–$4,500</td>
                                            <td className="p-4 text-white/60">Quote form, emergency CTA, suburb coverage</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Builder (custom homes)</td>
                                            <td className="p-4 text-safety-orange font-black">$4,000–$8,000</td>
                                            <td className="p-4 text-white/60">Portfolio, detailed service pages, Google reviews</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Painter / landscaper</td>
                                            <td className="p-4 text-safety-orange font-black">$1,500–$2,500</td>
                                            <td className="p-4 text-white/60">Before/after gallery, fast mobile, quote form</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">HVAC / air conditioning</td>
                                            <td className="p-4 text-safety-orange font-black">$2,000–$3,500</td>
                                            <td className="p-4 text-white/60">Seasonal offers, suburb pages, urgency CTAs</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Which option is right for you */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Which Option Is Right for You?
                            </h2>

                            <div className="bg-white/5 border border-white/10 overflow-hidden mb-6">
                                <table className="w-full text-sm">
                                    <thead className="bg-black/40">
                                        <tr>
                                            <th className="text-left p-4 font-black uppercase">Your Situation</th>
                                            <th className="text-left p-4 font-black uppercase">What Makes Sense</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10">
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Just starting out (under 1 year)</td>
                                            <td className="p-4 text-white/70">$1,000–$1,500 template — get something live, build the system later</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Established tradie wanting more jobs</td>
                                            <td className="p-4 text-white/70"><strong className="text-safety-orange">$2,500–$4,000</strong> professional build with conversion focus</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Multi-suburb operation</td>
                                            <td className="p-4 text-white/70"><strong className="text-safety-orange">$4,000–$6,000</strong> with suburb pages and local SEO foundation</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-bold text-white/80">Want to rank, convert, and automate</td>
                                            <td className="p-4 text-white/70"><strong className="text-safety-orange">Full system:</strong> website + SEO + AI automation working together</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                Not sure where you sit? <a href="/marketing-for-tradies" className="text-safety-orange hover:underline">Read the full marketing system guide</a> to understand what the full picture looks like before you spend anything.
                            </p>
                        </div>

                        {/* Bottom Line */}
                        <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                            <h2 className="text-2xl font-black uppercase italic mb-4">The Bottom Line</h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                <strong className="text-safety-orange">A cheap website</strong> confirms you exist. It won't rank, won't convert, and won't get your phone ringing.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                <strong className="text-safety-orange">A professional build ($2,500–$4,500)</strong> converts visitors into callers and pays for itself inside three months when it's working properly.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                <strong className="text-safety-orange">A full system</strong> — website + SEO foundation + AI automation — runs your enquiry pipeline around the clock without you having to think about it. That's the version that wins long-term.
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
                            Not Sure What Your Site Is <span className="text-safety-orange">Missing?</span>
                        </h2>
                        <p className="text-xl text-white/70 font-bold mb-8 max-w-2xl mx-auto">
                            We do free website audits for Australian tradies. Tell us what you're chasing — more calls, better-quality jobs, less wasted quoting time — and we'll tell you exactly what's in the way.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/#packages">
                                <Button className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    See Our Packages <ArrowRight className="ml-3 w-5 h-5" />
                                </Button>
                            </a>
                            <a href="/#contact">
                                <Button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    Get a Free Website Audit
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

export default TradiWebsiteCostAustralia;
