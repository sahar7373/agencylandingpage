import React from 'react';
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
        <div className="min-h-screen bg-construction-charcoal text-white font-sans flex justify-center py-8 px-4 md:px-0 print:bg-construction-charcoal print:text-white print:p-0 print:m-0" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}>
            <style>{`
                @media print {
                    @page { margin: 0; }
                    body { margin: 0; background-color: #1a1a1a !important; -webkit-print-color-adjust: exact; }
                }
            `}</style>

            {/* ARTBOARD: Max width restricted for optimal reading length (approx 700px) */}
            <div className="w-full max-w-[700px] flex flex-col gap-6 print:w-full print:max-w-none">

                {/* --- BRANDING --- */}
                <div className="flex flex-col items-center pb-6 gap-4">
                    <a href="https://yourtradepartner.com.au" className="flex items-center gap-2 hover:opacity-80 transition-opacity text-decoration-none">
                        <Hammer className="text-safety-orange w-6 h-6" />
                        <span className="font-black uppercase tracking-tighter text-2xl text-white">
                            YourTradePartner<span className="text-safety-orange">.</span>
                        </span>
                    </a>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 text-[10px] md:text-xs font-bold text-gray-400 text-center uppercase tracking-widest leading-relaxed items-center w-full justify-center">
                        <a href="tel:0451044751" className="hover:text-safety-orange transition-colors whitespace-nowrap">0451 044 751</a>
                        <span className="hidden md:inline text-safety-orange select-none">•</span>
                        <a href="mailto:hello@yourtradepartner.com.au" className="hover:text-safety-orange transition-colors break-all text-center">hello@yourtradepartner.com.au</a>
                        <span className="hidden md:inline text-safety-orange select-none">•</span>
                        <span className="whitespace-nowrap">Adelaide, Australia</span>
                    </div>
                </div>

                {/* --- HEADER BLOCK --- */}
                <header className="bg-construction-charcoal p-8 md:p-10 rounded-2xl border-l-8 border-safety-orange shadow-lg break-inside-avoid print:break-inside-avoid">
                    <div className="flex items-center gap-3 text-safety-orange mb-4">
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
                </header>


                {/* --- SECTION 1: THE LEAK --- */}
                <div className="bg-white/5 rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden group border border-red-500/20 break-inside-avoid print:break-inside-avoid">
                    {/* Number Watermark */}
                    <div className="absolute top-0 right-0 p-6 opacity-5 font-black text-8xl text-red-500 leading-none select-none">1</div>

                    <div className="relative z-10">
                        <h2 className="text-2xl font-black uppercase text-red-500 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-sm border border-red-500/20">1</span>
                            The Leak
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <p className="text-sm font-bold text-gray-300 uppercase tracking-wide mb-3">Here’s what’s happening:</p>
                                <ul className="space-y-3">
                                    {[
                                        "Calls go unanswered while you’re on site",
                                        "Enquiries sit in emails or DMs too long",
                                        "Customers lose confidence waiting for a reply"
                                    ].map((text, i) => (
                                        <li key={i} className="flex gap-3 text-gray-400 font-medium">
                                            <X className="w-5 h-5 text-red-500 shrink-0" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-red-500/5 rounded-lg p-5 border border-red-500">
                                <h4 className="text-red-500 font-bold uppercase text-xs tracking-widest mb-2">Industry Snapshot</h4>
                                <div className="space-y-1">
                                    <p className="text-sm font-bold text-white">• 7 out of 10 customers contact more than one trade</p>
                                    <p className="text-sm font-bold text-white">• Most book the first one who responds clearly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* --- CONNECTOR ARROW --- */}
                <div className="flex justify-center -my-3 z-10 break-inside-avoid print:break-inside-avoid">
                    <div className="bg-construction-charcoal p-2 rounded-full border border-white/5">
                        <ArrowDown className="w-5 h-5 text-gray-600" />
                    </div>
                </div>


                {/* --- SECTION 2: THE TRUTH --- */}
                <div className="bg-white/5 rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden border border-safety-orange break-inside-avoid print:break-inside-avoid">
                    <div className="absolute top-0 right-0 p-6 opacity-5 font-black text-8xl text-safety-orange leading-none select-none">2</div>

                    <div className="relative z-10">
                        <h2 className="text-2xl font-black uppercase text-safety-orange mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-safety-orange/10 flex items-center justify-center text-sm border border-safety-orange/20">2</span>
                            The Truth
                        </h2>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-lg font-medium text-white mb-6">
                                Good trades aren’t losing work on site. <br />
                                <span className="text-gray-400">They’re losing it before the job even starts.</span>
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-xs font-bold text-safety-orange uppercase tracking-wide mb-3">By the time you call back:</p>
                                    <ul className="space-y-2">
                                        <li className="text-sm text-gray-400">• The customer has moved on</li>
                                        <li className="text-sm text-gray-400">• The job feels “too hard”</li>
                                        <li className="text-sm text-gray-400">• Trust has already dropped</li>
                                    </ul>
                                </div>
                                <div className="flex items-center justify-center bg-white/5 rounded-lg p-4 border border-safety-orange text-center">
                                    <p className="text-sm font-black text-white uppercase leading-relaxed">
                                        No feedback. <br />
                                        No second chance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* --- CONNECTOR ARROW --- */}
                <div className="flex justify-center -my-3 z-10 break-inside-avoid print:break-inside-avoid">
                    <div className="bg-construction-charcoal p-2 rounded-full border border-white/5">
                        <ArrowDown className="w-5 h-5 text-gray-600" />
                    </div>
                </div>


                {/* --- SECTION 3: THE FIX --- */}
                <div className="bg-white/5 rounded-2xl p-8 md:p-10 shadow-lg relative overflow-hidden border border-green-500/20 break-inside-avoid print:break-inside-avoid">
                    <div className="absolute top-0 right-0 p-6 opacity-5 font-black text-8xl text-green-500 leading-none select-none">3</div>

                    <div className="relative z-10">
                        <h2 className="text-2xl font-black uppercase text-green-500 mb-6 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-sm border border-green-500/20">3</span>
                            The Fix
                        </h2>

                        <p className="text-lg font-medium text-white mb-6">
                            The fix isn’t working harder. <br />
                            <span className="text-gray-400">It’s removing friction before the job.</span>
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <ul className="space-y-3">
                                {[
                                    "Every enquiry captured (24/7)",
                                    "Clear next steps for customers",
                                    "Confidence built before contact"
                                ].map((text, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-white font-medium">
                                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                                        {text}
                                    </li>
                                ))}
                            </ul>

                            <div className="bg-green-500/10 border-l-4 border-green-500 p-4 rounded-r-lg">
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


                {/* --- FOOTER CTA --- */}
                <footer className="text-center pt-8 pb-12 px-6 break-inside-avoid print:break-inside-avoid">
                    <p className="text-lg md:text-xl font-bold text-white mb-2">
                        This isn’t marketing hype.
                    </p>
                    <p className="text-safety-orange font-bold uppercase tracking-wide mb-8">
                        It’s how customers choose trades today.
                    </p>

                    <a href="tel:0451044751" className="inline-block">
                        <Button className="w-full md:w-auto bg-white hover:bg-gray-200 text-black font-black uppercase tracking-widest text-sm px-10 py-5 h-auto rounded-full shadow-xl mb-12">
                            Reach Out!
                        </Button>
                    </a>

                    <div className="mt-8 pt-8 border-t border-white/5 mx-12">
                        <p className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-widest leading-relaxed">
                            Built by someone with 4+ years (and counting) <br /> managing real construction projects.
                        </p>
                    </div>
                </footer>

            </div>
        </div>
    );
};

export default Guide;
