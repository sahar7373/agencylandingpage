import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, AlertCircle, CheckCircle2, PhoneMissed, Clock, MessageSquare, Zap, Calculator } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedReads from '../../components/RelatedReads';

const relatedReads = [
    {
        href: '/resources/ai-receptionist-for-tradies',
        title: 'How to Handle Missed Calls Without Hiring Staff',
        description: 'The exact systems that answer every call and text the enquiry back before they ring the next tradie.'
    },
    {
        href: '/resources/why-tradie-websites-dont-get-calls',
        title: "Why Most Tradie Websites Don't Get Calls",
        description: 'The other half of the problem — the site sends them to your phone, then the phone lets them down.'
    },
    {
        href: '/resources/website-roi-calculation',
        title: 'How Many Jobs Does a Website Need to Pay for Itself?',
        description: 'Work out what each captured enquiry is actually worth to your business.'
    }
];

// FAQ content — also emitted as FAQPage schema below for AEO / AI search.
const faqs = [
    {
        q: 'What is a missed call text back?',
        a: "A missed call text back is an automatic SMS that fires the second you can't answer. The moment a call rings out, the customer gets a text — \"Sorry we missed you, we're on a job. What do you need done and which suburb?\" — so the enquiry stays with you instead of going to the next tradie."
    },
    {
        q: 'How many calls do tradies actually miss?',
        a: "Most trade businesses miss a big share of their calls simply because they're on the tools, up a ladder, or driving between jobs. You physically can't answer with both hands on a job. The problem isn't effort — it's that nothing catches the call when you can't pick up."
    },
    {
        q: 'Do I need to hire a receptionist to stop losing jobs?',
        a: "No. A receptionist costs wages, super and sick days, and still clocks off at 5pm. A missed-call text-back plus an AI answering service covers every call — during jobs, after hours and weekends — for a fraction of a wage."
    },
    {
        q: 'How fast do I need to respond to a new enquiry?',
        a: "Fast. Harvard Business Review found businesses that reply to an enquiry within the hour are nearly 7× more likely to reach the customer than those who wait even an hour longer. Homeowners with a burst pipe call the next number the moment yours rings out — so being first to answer usually wins the job."
    }
];

const WhatMissedCallsCost = () => {
    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans">
            <Helmet>
                <title>What Every Missed Call Really Costs a Tradie (And How to Stop It)</title>
                <meta name="description" content="A missed call isn't a missed call — it's a lost job that went to the next tradie. Here's what missed calls really cost Australian tradies, and the missed-call text-back and AI answering systems that stop the bleed." />
                <meta name="keywords" content="missed call text back, missed call service for tradies, how to get more plumbing leads, electrician marketing, ai answering service for tradies, speed to lead, tradie missed calls, stop losing jobs to voicemail" />
                <link rel="canonical" href="https://yourtradepartner.com.au/resources/what-missed-calls-cost-tradies" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="What Every Missed Call Really Costs a Tradie (And How to Stop It)" />
                <meta property="og:description" content="A missed call isn't a missed call — it's a lost job that went to the next tradie. Here's the real cost, and how to stop losing jobs to voicemail." />
                <meta property="og:type" content="article" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": "What Every Missed Call Really Costs a Tradie (And How to Stop It)",
                    "description": "A missed call isn't a missed call — it's a lost job that went to the next tradie. Here's what missed calls really cost Australian tradies, and the systems that stop the bleed.",
                    "url": "https://yourtradepartner.com.au/resources/what-missed-calls-cost-tradies",
                    "datePublished": "2026-07-19",
                    "dateModified": "2026-07-19",
                    "author": { "@type": "Organization", "name": "Your Trade Partner", "url": "https://yourtradepartner.com.au" },
                    "publisher": { "@type": "Organization", "name": "Your Trade Partner", "url": "https://yourtradepartner.com.au" }
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(f => ({
                        "@type": "Question",
                        "name": f.q,
                        "acceptedAnswer": { "@type": "Answer", "text": f.a }
                    }))
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
                        currentLabel="What Missed Calls Cost Tradies"
                        currentPath="/resources/what-missed-calls-cost-tradies"
                        className="mt-5"
                    />
                </div>
            </header>

            {/* Hero */}
            <section className="py-12 md:py-16 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <Badge className="bg-safety-orange/10 text-safety-orange mb-6 hover:bg-safety-orange/10 pointer-events-none uppercase tracking-widest text-xs">
                            Lead Generation
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-tight">
                            What Every Missed Call <span className="text-safety-orange">Really Costs You</span>
                        </h1>
                        <div className="flex items-center gap-6 text-white/40 text-sm font-bold uppercase tracking-wider mb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>6 min read</span>
                            </div>
                            <div>July 2026</div>
                        </div>
                        <p className="text-xl md:text-2xl text-white/80 font-bold leading-relaxed">
                            A missed call isn't a missed call. It's a lost job that just rang the next tradie on Google. The homeowner with a burst pipe isn't leaving a voicemail — they're already on the phone to someone else.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* Introduction */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                You're up a ladder. You're under a sink. You're driving between jobs with the phone in the door pocket. It rings, you can't get to it, and by smoko you've forgotten it happened.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                That call wasn't nothing. It was a customer who needed a job done today, had money ready, and picked your number off Google. When you didn't answer, they didn't wait. They rang the next tradie on the list — and that tradie booked your job.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                This isn't about working harder or answering faster. You can't answer with both hands on a job. It's about having a system that catches the call when you can't.
                            </p>
                        </div>

                        {/* Problem Section */}
                        <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 flex items-center gap-3">
                                <AlertCircle className="w-8 h-8 text-safety-orange" />
                                The Real Problem
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                Homeowners don't leave one enquiry and wait. When something's broken, they work down the search results until someone picks up. The job goes to whoever answers first — not whoever's best.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                So every missed call is a fork in the road. Answer it, and it's usually your job. Miss it, and you've handed a warm, ready-to-book customer straight to a competitor — and paid nothing to find out.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mt-4">
                                The research on this is blunt. Harvard Business Review tracked how fast businesses replied to online enquiries and found the ones that responded within an hour were nearly seven times more likely to actually reach the customer than those who waited even an hour longer. Speed isn't a nice-to-have. It's the whole game.
                            </p>
                        </div>

                        {/* Statistics Section — figures sourced to HBR 2011 (see citation below) */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-black/40 border border-white/10 p-6 text-center">
                                <div className="text-4xl font-black text-safety-orange mb-2">7×</div>
                                <p className="text-sm text-white/60 font-bold uppercase tracking-wider">More likely to reach the customer if you respond within the hour</p>
                            </div>
                            <div className="bg-black/40 border border-white/10 p-6 text-center">
                                <div className="text-4xl font-black text-safety-orange mb-2">60×</div>
                                <p className="text-sm text-white/60 font-bold uppercase tracking-wider">More likely than if you wait a day to call back</p>
                            </div>
                            <div className="bg-black/40 border border-white/10 p-6 text-center">
                                <div className="text-4xl font-black text-safety-orange mb-2">1st</div>
                                <p className="text-sm text-white/60 font-bold uppercase tracking-wider">To answer usually wins the job</p>
                            </div>
                        </div>
                        <p className="text-xs text-white/40 font-bold leading-relaxed -mt-6">
                            Source: Harvard Business Review, <a href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads" target="_blank" rel="noopener noreferrer" className="text-safety-orange/80 hover:text-safety-orange underline">“The Short Life of Online Sales Leads”</a> (2011) — businesses that contacted an enquiry within an hour were nearly 7× more likely to have a real conversation with the customer than those who waited even an hour longer, and 60× more than those who waited a day.
                        </p>

                        {/* The Cost Calculator */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 flex items-center gap-3">
                                <Calculator className="w-8 h-8 text-safety-orange" />
                                Do the Maths on Your Own Numbers
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Forget industry averages. The only numbers that matter are yours. Run your own through this — it takes ten seconds and it's usually the wake-up call.
                            </p>
                            <div className="bg-black/40 border border-white/10 p-8 space-y-4">
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-white/70 font-bold">Calls you miss in a week</span>
                                    <span className="text-safety-orange font-black text-xl">e.g. 5</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-white/70 font-bold">Your average job value</span>
                                    <span className="text-safety-orange font-black text-xl">e.g. $350</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                    <span className="text-white/70 font-bold">Say just 1 in 5 would've booked</span>
                                    <span className="text-safety-orange font-black text-xl">= 1 job/week</span>
                                </div>
                                <div className="flex justify-between items-center pt-2">
                                    <span className="text-white font-black uppercase">Walking out the door each year</span>
                                    <span className="text-safety-orange font-black text-2xl md:text-3xl">≈ $18,200</span>
                                </div>
                            </div>
                            <p className="text-sm text-white/50 font-bold leading-relaxed mt-4 italic">
                                Illustration only — plug in your real call volume and job value. Most tradies who run their own numbers land on a figure far bigger than any system to fix it costs.
                            </p>
                        </div>

                        {/* Why It Happens */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-8 border-b-2 border-safety-orange pb-2 inline-block">
                                Why Good Tradies Miss the Money Calls
                            </h2>
                            <div className="space-y-8">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-3 text-safety-orange">You're On the Tools, Not the Phone</h3>
                                    <p className="text-white/80 font-bold">
                                        The busier you are, the more calls you miss — which means you lose the most enquiries exactly when you're already flat out and can least afford to chase them back.
                                    </p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-3 text-safety-orange">After Hours Is Prime Time</h3>
                                    <p className="text-white/80 font-bold">
                                        Hot water systems die on Sunday night. Homeowners search and call in the evenings and on weekends — right when your phone's on the bench and you're done for the day.
                                    </p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-3 text-safety-orange">Voicemail Is Where Jobs Go to Die</h3>
                                    <p className="text-white/80 font-bold">
                                        Almost nobody leaves a voicemail for a tradie anymore. If the only thing catching your missed call is a message bank, you're not capturing the enquiry — you're burying it.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* What Actually Works */}
                        <div className="bg-safety-orange/10 border border-safety-orange/20 p-8">
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 flex items-center gap-3">
                                <CheckCircle2 className="w-8 h-8 text-safety-orange" />
                                How to Stop Losing Jobs to Voicemail
                            </h2>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <MessageSquare className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-black text-lg mb-1">Missed-Call Text Back</h3>
                                        <p className="text-white/80 font-bold">The second a call rings out, an automatic SMS goes to the customer: "Sorry we missed you — what do you need done and which suburb?" The enquiry stays with you instead of walking to the next tradie.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <Zap className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-black text-lg mb-1">An AI Answering Service That Never Clocks Off</h3>
                                        <p className="text-white/80 font-bold">Every call answered — on jobs, after hours, weekends. It qualifies the enquiry, books the appointment and sends you the details, without wages, super or sick days.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <PhoneMissed className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-black text-lg mb-1">Speed to Lead, Not Speed on the Tools</h3>
                                        <p className="text-white/80 font-bold">You don't have to be faster on the phone. The system is first to answer for you — so you win the job while your competitor's still driving.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <CheckCircle2 className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-black text-lg mb-1">One Place for Every Enquiry</h3>
                                        <p className="text-white/80 font-bold">Calls, texts and website forms land in one spot with the customer's name, suburb and job — so nothing slips through and you only quote warm, ready-to-book work.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-8 border-b-2 border-safety-orange pb-2 inline-block">
                                Missed Calls: Quick Answers
                            </h2>
                            <div className="space-y-6">
                                {faqs.map((f, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 p-6">
                                        <h3 className="text-xl font-black uppercase mb-3 text-safety-orange">{f.q}</h3>
                                        <p className="text-white/80 font-bold leading-relaxed">{f.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Key Takeaway */}
                        <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                            <h2 className="text-2xl font-black uppercase italic mb-4">The Bottom Line</h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                You're not losing jobs on price or on the quality of your work. You're losing them because a ready-to-book customer couldn't reach you and found someone who answered first.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mt-4">
                                Fix the answer, not the effort. Catch every call, text back in seconds, and be first to answer — and the jobs that used to walk out the door stay yours.
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
                            Stop Handing Jobs <span className="text-safety-orange">to Voicemail</span>
                        </h2>
                        <p className="text-xl text-white/70 font-bold mb-8 max-w-2xl mx-auto">
                            We set up the systems that catch every call, text the customer back in seconds, and make sure you're first to answer — even when you're on the tools.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/#packages">
                                <Button className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    See Our Packages <ArrowRight className="ml-3 w-5 h-5" />
                                </Button>
                            </a>
                            <a href="/#contact">
                                <Button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    Get a Free Consultation
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

export default WhatMissedCallsCost;
