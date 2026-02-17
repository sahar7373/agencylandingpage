import React, { useState } from 'react';
import { X, Lock, Download, CheckCircle, Loader2, Zap, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga4';

import { GOOGLE_SHEET_URL } from '../config';

const BlueprintModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState('form'); // 'form' | 'success'
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Payload for Sheet 2 ("Leads from Blueprint")
            const payload = {
                sheetName: "Leads from Blueprint",
                Name: "Anonymous", // Name field removed
                Email: formData.email,
                phone: "",
                timestamp: new Date().toISOString()
            };

            // Post to webhook - fire and forget
            fetch(GOOGLE_SHEET_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "text/plain" },
                body: JSON.stringify(payload),
            }).catch(err => console.error("Background submission error:", err));

            // Tracking
            ReactPixel.track('Lead', { content_name: 'Revenue Blueprint Download' });
            ReactGA.event({ category: "Lead", action: "Submit_Blueprint_Magnet", label: "Blueprint Download" });

            setStep('success');

            // Redirect to Blueprint
            setTimeout(() => {
                window.open('/blueprint', '_blank');
                onClose();
            }, 500);

        } catch (error) {
            console.error("Submission error:", error);
            window.open('/blueprint', '_blank');
            onClose();
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-zinc-900 border border-white/10 w-full max-w-md rounded-none shadow-2xl overflow-hidden font-sans animate-in fade-in zoom-in-95 duration-200">

                <div className="absolute top-0 left-0 w-full h-1 bg-safety-orange"></div>

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-8 text-center">

                    {step === 'form' ? (
                        <>
                            <div className="w-16 h-16 bg-safety-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-safety-orange/20 shadow-xl shadow-safety-orange/5 hidden">
                                <Zap className="w-8 h-8 text-safety-orange fill-current" />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-black uppercase italic text-white mb-3 tracking-tighter">
                                Secure The Blueprint
                            </h3>
                            <p className="text-sm text-white/60 mb-8 leading-relaxed font-bold uppercase tracking-wide px-4">
                                Get instant access to the <span className="text-white">Revenue Capture Blueprint</span> for trades.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    {/* Name field removed as requested */}
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email to unlock"
                                        className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange transition-colors text-base font-medium"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-safety-orange hover:bg-safety-orange-hover text-white font-black uppercase tracking-widest text-lg py-8 rounded-none shadow-2xl shadow-safety-orange/20"
                                >
                                    {isLoading ? (
                                        <span className="flex items-center gap-2">
                                            <Loader2 className="w-5 h-5 animate-spin" /> Authorizing...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Access Blueprint <ArrowRight className="w-5 h-5" />
                                        </span>
                                    )}
                                </Button>
                            </form>
                            <p className="text-[10px] text-white/20 mt-6 uppercase tracking-widest font-black">
                                Professional Tool • Instant Access • No Spam
                            </p>
                        </>
                    ) : (
                        <div className="py-12 animate-in fade-in slide-in-from-bottom-2">
                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20 shadow-xl shadow-green-500/5">
                                <CheckCircle className="w-10 h-10 text-green-500" />
                            </div>
                            <h3 className="text-3xl font-black uppercase italic text-white mb-3 tracking-tighter">
                                Access Granted
                            </h3>
                            <p className="text-sm font-bold text-white/60 uppercase tracking-widest">
                                Loading your blueprint now...
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BlueprintModal;
