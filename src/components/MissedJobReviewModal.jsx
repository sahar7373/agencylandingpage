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

                <div className="p-8 md:p-10">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-black uppercase italic mb-2">Missed Job Review</h2>
                        <div className="w-16 h-1 bg-safety-orange mx-auto"></div>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-6 text-white/90">
                        <p className="font-medium text-lg text-center text-white/80 leading-relaxed">
                            Good trades are losing work — not on site, but between the phone ringing and a customer waiting for a reply.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-8">
                            <div className="bg-white/5 p-6 rounded-sm border border-white/5">
                                <h3 className="font-black uppercase text-safety-orange mb-4 text-sm tracking-wide">This short session looks at:</h3>
                                <ul className="space-y-3">
                                    {[
                                        "how enquiries come in today",
                                        "where jobs may be slipping through",
                                        "what’s causing unnecessary back-and-forth",
                                        "what can realistically be simplified"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-bold text-white/70">
                                            <AlertCircle className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white/5 p-6 rounded-sm border border-white/5">
                                <h3 className="font-black uppercase text-green-500 mb-4 text-sm tracking-wide">You’ll walk away with:</h3>
                                <ul className="space-y-3">
                                    {[
                                        "3–5 clear improvement points",
                                        "a priority order (what matters now vs later)",
                                        "Clear steps that won’t add more admin to your day"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-bold text-white/70">
                                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="text-center border-t border-white/10 pt-6">
                            <p className="text-sm font-medium italic text-white/60 mb-6">
                                This is not a sales pitch and not a generic audit. <br />
                                It’s a practical review based on how trade businesses actually operate day to day.
                            </p>

                            <div className="flex flex-col items-center gap-4">
                                <div className="text-2xl font-black uppercase">
                                    <span className="text-white/40 text-sm block mb-1 font-bold tracking-widest not-italic">Session length: 30 minutes</span>
                                    <span className="text-safety-orange">One-off cost: $89.99</span>
                                </div>

                                <Button
                                    onClick={() => {
                                        onClose();
                                        window.location.href = "#contact";
                                    }}
                                    className="w-full md:w-auto bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest shadow-xl shadow-safety-orange/20"
                                >
                                    Book Missed Job Review
                                </Button>

                                <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                                    Takes 30 seconds to book · No pressure · Built for trades
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissedJobReviewModal;
