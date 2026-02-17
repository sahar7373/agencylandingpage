import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
    CheckCircle2,
    ArrowRight,
    Timer,
    MapPin,
    Calculator,
    Hammer,
    Zap,
    BarChart3,
    Shield,
    Users,
    Mail,
    Phone,
    TrendingUp,
    Target,
    Globe
} from 'lucide-react';
import { Button } from '../components/ui/button';

const RevenueBlueprint = () => {
    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans flex justify-center py-12 px-4 md:px-8 print:bg-white print:text-black print:p-0" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}>
            <Helmet>
                <title>Revenue Capture Blueprint | YourTradePartner</title>
                <meta name="description" content="The Local Visibility & Revenue Capture Blueprint for Trades. Stop losing enquiries and double your revenue." />
            </Helmet>

            <style>{`
                @media print {
                    @page { size: portrait; margin: 0.5cm; }
                    body { margin: 0; background-color: white !important; -webkit-print-color-adjust: exact; color: black !important; }
                    .print-dark-text { color: black !important; }
                    .print-bg-white { background-color: white !important; border-color: #e4e4e7 !important; }
                    .print-hide { display: none !important; }
                    .print-border { border: 1px solid #e4e4e7 !important; }
                    .print-invert { filter: invert(1) !important; }
                }
            `}</style>

            <div className="w-full max-w-[900px] flex flex-col gap-12 print:gap-8">

                {/* HERO - CLEAN PROFESSIONAL */}
                <header className="border-b border-white/10 pb-12 print:border-zinc-200">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3 text-safety-orange">
                            <Hammer className="w-6 h-6 fill-current" />
                            <span className="text-sm font-black uppercase tracking-[0.3em]">Your Trade Partner</span>
                        </div>
                        <div className="hidden md:flex flex-col items-end gap-1 text-[10px] font-black uppercase tracking-widest text-zinc-500 print:text-zinc-400">
                            <span>hello@yourtradepartner.com.au</span>
                            <span>0451 044 751</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-black uppercase italic leading-[0.9] mb-8 tracking-tighter text-white print:text-black">
                        Revenue Capture <br />
                        <span className="text-safety-orange">Blueprint</span>
                    </h1>

                    <p className="text-xl text-zinc-400 font-bold max-w-3xl leading-relaxed print:text-zinc-600 border-l-4 border-safety-orange pl-6">
                        Most trades lose <span className="text-white print:text-black">30–50% of enquiries</span> due to slow response, missed calls, and weak local positioning. <br />
                        This document outlines the precise standards to stop that loss.
                    </p>
                </header>

                {/* THE REALITY CHECK - SIMPLE CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { val: "78%", label: "of jobs go to the first business that answers.", icon: <Zap size={24} /> },
                        { val: "5 MIN", label: "max response time before lead quality drops 400%.", icon: <Timer size={24} /> },
                        { val: "TOP 2", label: "Google positions capture ~80% of all calls.", icon: <MapPin size={24} /> }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-8 flex flex-col items-start text-left print-bg-white print:border-zinc-200">
                            <div className="text-safety-orange mb-4 print:text-zinc-800">{stat.icon}</div>
                            <div className="text-4xl font-black italic text-white print:text-black mb-2">{stat.val}</div>
                            <div className="text-sm font-bold text-zinc-500 leading-snug">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* 4 CRITICAL VISIBILITY SCORES - STRUCTURED LIST */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-2xl font-black uppercase italic text-white print:text-black tracking-tight">
                            The 4 Critical Visibility Scores
                        </h2>
                        <div className="h-px w-full bg-white/10 print:bg-zinc-200"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Response Speed",
                                def: "Time taken to answer or return a missed call.",
                                impact: "If you wait 30 minutes, the job is already gone.",
                                elite: "Auto-reply or live answer within 60 seconds."
                            },
                            {
                                title: "Live Answer Rate",
                                def: "Percentage of calls answered by a human.",
                                impact: "Voicemail is where revenue goes to die.",
                                elite: "90%+ Live Answer Rate (via overflow routing)."
                            },
                            {
                                title: "Review Momentum",
                                def: "Frequency of new 5-star reviews.",
                                impact: "Google promotes recent activity, not just total count.",
                                elite: "Automated review request sent after every job."
                            },
                            {
                                title: "Service Area Precision",
                                def: "Density of work within core suburbs.",
                                impact: "Broad targeting dilutes ranking power.",
                                elite: "Dominate 3-5 core suburbs completely."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 print-bg-white print:border-zinc-200 hover:border-white/20 transition-colors">
                                <h3 className="text-xl font-black uppercase italic text-safety-orange mb-6">{item.title}</h3>

                                <div className="space-y-4">
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block mb-1">Definition</span>
                                        <p className="text-sm text-zinc-300 print:text-zinc-700 font-medium">{item.def}</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500 block mb-1">Business Impact</span>
                                        <p className="text-sm text-zinc-300 print:text-zinc-700 font-medium">{item.impact}</p>
                                    </div>
                                    <div className="pt-4 mt-4 border-t border-white/10 print:border-zinc-100">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white/50 print:text-zinc-400 block mb-1">Elite Standard</span>
                                        <p className="text-base font-black text-white print:text-black italic">{item.elite}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* REVENUE GAP - COMPARISON TABLE */}
                <section className="bg-white/5 border border-white/10 text-white p-10 md:p-12 rounded-[2rem] print-border print:bg-white print:text-black">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                        <div>
                            <h2 className="text-3xl font-black uppercase italic leading-none mb-2 text-white print:text-black">The Revenue Gap</h2>
                            <p className="text-zinc-400 font-bold text-sm">Same leads. Different outcome.</p>
                        </div>
                        <div className="bg-white text-black px-4 py-2 text-xs font-black uppercase tracking-widest border border-white/20">
                            ROI Calculation
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {/* Standard - Darker & Faded */}
                        <div className="p-8 bg-black/20 flex flex-col gap-6 opacity-60 grayscale blur-[0.5px]">
                            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-500">Standard Contractor</h3>
                            <div className="space-y-1">
                                <div className="text-lg font-bold text-zinc-600">20 Leads</div>
                                <div className="text-lg font-bold text-zinc-600">30% Close Rate</div>
                            </div>
                            <div className="text-3xl font-black text-zinc-700 pt-6 border-t border-white/5">
                                6 JOBS
                            </div>
                        </div>

                        {/* Elite - White Card Pop */}
                        <div className="p-8 bg-white text-black shadow-2xl scale-105 z-10 flex flex-col gap-6 relative overflow-hidden ring-1 ring-black/5 rounded-xl md:-my-4 md:py-12">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-safety-orange/10 rounded-bl-full"></div>
                            <h3 className="text-xs font-black uppercase tracking-widest text-safety-orange">Elite System Operator</h3>
                            <div className="space-y-1">
                                <div className="text-xl font-bold text-black">20 Leads</div>
                                <div className="text-xl font-bold text-black">60% Close Rate</div>
                            </div>
                            <div className="text-6xl font-black text-safety-orange pt-6 border-t border-zinc-100 leading-none">
                                12 JOBS
                            </div>
                        </div>
                    </div>

                    <p className="mt-8 text-center text-sm font-bold text-zinc-500">
                        *By fixing response time and follow-up, you double revenue without spending a cent more on ads.
                    </p>
                </section>

                {/* 3 SYSTEM SOLUTION - SIMPLE LIST */}
                <div className="border border-white/10 p-10 print-border print:border-zinc-200">
                    <h2 className="text-xl font-black uppercase italic text-zinc-500 mb-8">Required Infrastructure</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Auto-Response System", desc: "Instant SMS & Email acknowledgement for every enquiry." },
                            { title: "Lead Recovery Protocol", desc: "Automated follow-up sequence for missed calls." },
                            { title: "Review Engine", desc: "Systematic review generation to build local authority." }
                        ].map((item, i) => (
                            <div key={i}>
                                <h4 className="font-black uppercase text-white print:text-black text-lg mb-2">{item.title}</h4>
                                <p className="text-sm text-zinc-400 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FOOTER - SIMPLE CONTACT */}
                <footer className="py-12 flex flex-col items-center gap-8 text-center border-t border-white/10 print:border-zinc-100">
                    <div className="print-hide w-full max-w-sm">
                        <Button
                            data-cal-link="saharsh-patel-fr7cuf/strategy-session"
                            data-cal-config='{"layout":"month_view"}'
                            className="w-full bg-safety-orange hover:bg-safety-orange-hover text-white font-black uppercase tracking-widest text-base py-6 h-auto rounded-none"
                        >
                            Book Strategy Session
                        </Button>
                    </div>

                    <div className="flex gap-8 text-zinc-500 print:text-zinc-600">
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                            <Phone size={12} className="text-safety-orange" />
                            0451 044 751
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                            <Mail size={12} className="text-safety-orange" />
                            hello@yourtradepartner.com.au
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                            <Globe size={12} className="text-safety-orange" />
                            <a href="https://yourtradepartner.com.au/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                yourtradepartner.com.au
                            </a>
                        </div>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default RevenueBlueprint;
