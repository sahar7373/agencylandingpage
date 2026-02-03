import React from 'react';
import { X, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MissedJobReviewModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-construction-charcoal border border-white/10 w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden font-sans animate-in fade-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-10"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="p-8 md:p-10 max-h-[85vh] overflow-y-auto custom-scrollbar">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-3">Stop Missing Jobs</h2>
                        <div className="w-16 h-1 bg-safety-orange mx-auto mb-4"></div>
                        <p className="text-lg font-medium text-white/80 max-w-lg mx-auto leading-relaxed">
                            A quick, free business check to find where enquiries, calls, and confidence are leaking — and how to fix it.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-8 text-white/90">

                        {/* What This Is */}
                        <div className="bg-white/5 p-6 rounded-sm border-l-4 border-safety-orange">
                            <h3 className="font-black uppercase text-white mb-2 text-sm tracking-widest">What This Is</h3>
                            <p className="text-sm font-medium text-white/70 leading-relaxed mb-2">
                                This is a 30-minute free strategy session where we review how customers actually experience your business before they call or request a quote.
                            </p>
                            <p className="text-sm font-bold text-white leading-relaxed">
                                We look at what’s costing you jobs — not in theory, but in real life.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* What We Review */}
                            <div className="bg-white/5 p-6 rounded-sm border border-white/5">
                                <h3 className="font-black uppercase text-safety-orange mb-4 text-xs tracking-widest">What We Review</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Your website & enquiry flow",
                                        "How calls & messages are handled",
                                        "Trust signals affecting confidence",
                                        "Where simple systems save time"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-bold text-white/70">
                                            <AlertCircle className="w-4 h-4 text-safety-orange mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-[10px] uppercase font-bold text-white/30 mt-4 tracking-widest">No jargon. No tech overwhelm.</p>
                            </div>

                            {/* What You Get */}
                            <div className="bg-white/5 p-6 rounded-sm border border-white/5">
                                <h3 className="font-black uppercase text-green-500 mb-4 text-xs tracking-widest">What You Get</h3>
                                <ul className="space-y-3">
                                    {[
                                        "3–5 clear improvement points",
                                        "A priority order (now vs later)",
                                        "One clear recommendation to fix first"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-bold text-white/70">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4 pt-3 border-t border-white/10">
                                    <p className="text-xs font-medium text-white/50 italic">
                                        You’ll know if things need fixing, or if your setup is fine to leave alone.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Price & How It Works */}
                        <div className="flex justify-center border-t border-white/10 pt-8">



                            {/* How It Works */}
                            <div className="space-y-3">
                                <h4 className="font-black uppercase text-white -mb-1 text-xs tracking-widest">How It Works</h4>
                                <ol className="space-y-2">
                                    <li className="text-sm font-medium text-white/70 flex gap-3">
                                        <span className="font-black text-safety-orange">1.</span> You book a time that suits you
                                    </li>
                                    <li className="text-sm font-medium text-white/70 flex gap-3">
                                        <span className="font-black text-safety-orange">2.</span> We review your setup together
                                    </li>
                                    <li className="text-sm font-medium text-white/70 flex gap-3">
                                        <span className="font-black text-safety-orange">3.</span> You leave knowing exactly what to do next
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-4 pt-4">
                            <Button
                                data-cal-link="saharsh-patel-fr7cuf/strategy-session"
                                data-cal-namespace="strategy-session"
                                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                                className="w-full bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-4 py-4 md:px-8 md:py-6 text-sm md:text-lg font-black uppercase tracking-widest shadow-xl shadow-safety-orange/20 text-center h-auto whitespace-normal leading-tight"
                            >
                                Book a Free Strategy Session
                            </Button>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissedJobReviewModal;
