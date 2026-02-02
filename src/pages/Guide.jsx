import React from 'react';
import { Helmet } from 'react-helmet-async';
import { X, Check, ArrowDown, AlertTriangle, Hammer } from 'lucide-react';
import { Button } from '../components/ui/button';

// GuidePrintable: A print-optimized version of the Guide content.
// Changes from Guide.jsx:
// - Removed mobile sticky footer.
// - Added specific print styles to ensure background colors and text colors are preserved.
// - ensured container width is optimal for printing.

const Guide = () => {
    return (
        // CANVAS: Deep Charcoal background, forced print settings
        <div className="min-h-screen bg-construction-charcoal text-white font-sans flex justify-center py-6 px-4 md:px-8 print:bg-construction-charcoal print:text-white print:p-0 print:m-0" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}>
            <Helmet>
                <title>The Trade Guide | What Customers Don't Tell You</title>
                <meta name="description" content="Discover why most trades lose work before the job even starts. A guide to fixing the hidden leaks in your enquiry process." />
                <meta property="og:title" content="The Trade Guide | What Customers Don't Tell You" />
                <meta property="og:description" content="Discover why most trades lose work before the job even starts. A guide to fixing the hidden leaks in your enquiry process." />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://yourtradepartner.com.au/guide" />
            </Helmet>
            <style>{`
                @media print {
                    @page { size: landscape; margin: 0.5cm; }
                    body { margin: 0; background-color: #1a1a1a !important; -webkit-print-color-adjust: exact; }
                }
            `}</style>

            {/* ARTBOARD: Wider max-width for 3-column layout */}
            <div className="w-full max-w-[1200px] flex flex-col gap-4 print:w-full print:max-w-none">

                {/* --- HEADER BLOCK (Compact) --- */}
                <header className="bg-white/5 p-8 rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center gap-8 break-inside-avoid print:break-inside-avoid">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 text-safety-orange mb-3">
                            <AlertTriangle className="w-5 h-5" />
                            <span className="text-xs font-black uppercase tracking-widest">Crucial Insight</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black uppercase leading-[1.1] mb-4 text-white">
                            What Customers <br />
                            <span className="text-white opacity-40">Don’t Tell Trades</span> <br />
                            Before Moving On
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 font-medium">
                            Most jobs are lost <span className="text-white underline decoration-safety-orange/50 underline-offset-4">earlier than you think.</span>
                        </p>
                    </div>

                    {/* Compact Branding */}
                    <div className="flex flex-col items-end gap-2 opacity-90">
                        <div className="flex items-center gap-2">
                            <Hammer className="text-safety-orange w-6 h-6" />
                            <span className="font-black uppercase tracking-tighter text-xl text-white">
                                YourTradePartner<span className="text-safety-orange">.</span>
                            </span>
                        </div>
                        <div className="flex flex-col text-right">
                            <a href="tel:0451044751" className="text-xs font-bold text-white hover:text-safety-orange transition-colors">0451 044 751</a>
                            <a href="mailto:hello@yourtradepartner.com.au" className="text-xs font-bold text-gray-400 hover:text-safety-orange transition-colors">hello@yourtradepartner.com.au</a>
                        </div>
                    </div>
                </header>

                {/* --- MAIN GRID CONTENT (3 Columns) --- */}
                <div className="grid md:grid-cols-3 gap-4 items-stretch">

                    {/* --- COLUMN 1: THE LEAK --- */}
                    <div className="bg-white/5 rounded-2xl p-6 border border-red-500/20 flex flex-col h-full relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 font-black text-8xl text-red-500 leading-none select-none">1</div>
                        <h2 className="text-2xl font-black uppercase text-red-500 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-sm border border-red-500/20">1</span>
                            The Leak
                        </h2>

                        <div className="flex-grow space-y-6">
                            <div>
                                <p className="text-xs font-bold text-gray-300 uppercase tracking-wide mb-3">Here’s what’s happening:</p>
                                <ul className="space-y-3">
                                    {[
                                        "Calls go unanswered while you’re on site",
                                        "Enquiries sit in emails or DMs too long",
                                        "Customers lose confidence waiting for a reply"
                                    ].map((text, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-gray-300 font-medium leading-tight">
                                            <X className="w-5 h-5 text-red-500 shrink-0" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-red-500/5 rounded p-4 border border-red-500/20 mt-auto">
                                <h4 className="text-red-500 font-bold uppercase text-[10px] tracking-widest mb-2">Industry Snapshot</h4>
                                <div className="space-y-1">
                                    <p className="text-sm font-bold text-white">• 7 out of 10 customers contact more than one trade</p>
                                    <p className="text-sm font-bold text-white">• Most book the first one who responds clearly</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- COLUMN 2: THE TRUTH --- */}
                    <div className="bg-white/5 rounded-2xl p-6 border border-safety-orange flex flex-col h-full relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 font-black text-8xl text-safety-orange leading-none select-none">2</div>
                        <h2 className="text-2xl font-black uppercase text-safety-orange mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-safety-orange/10 flex items-center justify-center text-sm border border-safety-orange/20">2</span>
                            The Truth
                        </h2>

                        <div className="flex-grow flex flex-col justify-between">
                            <p className="text-base font-medium text-white mb-6 leading-relaxed">
                                Good trades aren’t losing work on site. <br />
                                <span className="text-gray-400">They’re losing it before the job even starts.</span>
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs font-bold text-safety-orange uppercase tracking-wide mb-3 opacity-80">By the time you call back:</p>
                                    <ul className="space-y-2">
                                        <li className="text-sm text-gray-400 font-medium">• The customer has moved on</li>
                                        <li className="text-sm text-gray-400 font-medium">• The job feels “too hard”</li>
                                        <li className="text-sm text-gray-400 font-medium">• Trust has already dropped</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 rounded p-4 text-center border border-white/5">
                                    <p className="text-sm font-black text-white uppercase tracking-wider">No Feedback.<br />No Second Chance.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- COLUMN 3: THE FIX --- */}
                    <div className="bg-white/5 rounded-2xl p-6 border border-green-500/20 flex flex-col h-full relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 font-black text-8xl text-green-500 leading-none select-none">3</div>
                        <h2 className="text-2xl font-black uppercase text-green-500 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-sm border border-green-500/20">3</span>
                            The Fix
                        </h2>

                        <div className="flex-grow space-y-6">
                            <p className="text-base font-medium text-white leading-relaxed">
                                The fix isn’t working harder. <br />
                                <span className="text-gray-400">It’s removing friction before the job.</span>
                            </p>

                            <ul className="space-y-3">
                                {[
                                    "Every enquiry captured (24/7)",
                                    "Clear next steps for customers",
                                    "Confidence built before contact"
                                ].map((text, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-white font-medium leading-tight">
                                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                                        {text}
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-green-500/10 border-l-4 border-green-500 p-4 rounded-r mt-auto">
                                <h4 className="text-[10px] font-black uppercase text-green-500 tracking-widest mb-1">The Result</h4>
                                <ul className="space-y-1">
                                    <li className="text-sm font-bold text-white">✓ Fewer missed jobs</li>
                                    <li className="text-sm font-bold text-white">✓ Less admin</li>
                                    <li className="text-sm font-bold text-white">✓ More work without chasing</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                {/* --- FOOTER CTA (Compact) --- */}
                <footer className="bg-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 break-inside-avoid print:break-inside-avoid">
                    <div className="text-center md:text-left">
                        <p className="text-lg font-bold text-white mb-1">
                            This isn’t marketing hype.
                        </p>
                        <p className="text-sm text-safety-orange font-bold uppercase tracking-wide">
                            It’s how customers choose trades today.
                        </p>
                        <div className="mt-4 pt-4 border-t border-white/5 md:hidden">
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                                Built by someone with 4+ years managing real construction projects.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <a href="tel:0451044751" className="inline-block">
                            <Button className="bg-white hover:bg-gray-200 text-black font-black uppercase tracking-widest text-sm px-8 py-4 h-auto rounded-full shadow-xl">
                                Let's set up your system today
                            </Button>
                        </a>
                        <p className="hidden md:block text-xs text-gray-400 font-bold uppercase tracking-widest leading-relaxed text-right max-w-[300px]">
                            Built by someone with 4+ years (and counting) managing real construction projects.
                        </p>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default Guide;
