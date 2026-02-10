import React, { useState } from 'react';
import { X, Lock, Download, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga4';

import { GOOGLE_SHEET_URL } from '../config';

const LeadMagnetModal = ({ isOpen, onClose }) => {
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
            const sheetUrl = GOOGLE_SHEET_URL;

            // Payload for Sheet 2 ("Leads from Guide")
            const payload = {
                sheetName: "Leads from Guide",
                Email: formData.email,
                phone: "", // Phone removed as per request
                timestamp: new Date().toISOString()
            };

            // Fire and forget - don't wait for Google Sheets
            fetch(sheetUrl, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "text/plain" },
                body: JSON.stringify(payload),
            }).catch(err => console.error("Background submission error:", err));

            // Tracking
            ReactPixel.track('Lead', { content_name: 'Lead Magnet Download' });
            ReactGA.event({ category: "Lead", action: "Submit_Lead_Magnet", label: "Guide Download" });

            setStep('success');

            // Redirect to Guide almost instantly (small delay for UI transition)
            setTimeout(() => {
                window.open('/guide', '_blank');
                onClose();
            }, 300);

        } catch (error) {
            console.error("Submission error:", error);
            // Even if something fails locally, try to give them the guide
            window.open('/guide', '_blank');
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
            <div className="relative bg-construction-charcoal border border-white/10 w-full max-w-md rounded-lg shadow-2xl overflow-hidden font-sans animate-in fade-in zoom-in-95 duration-200">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-10"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-8 text-center">

                    {step === 'form' ? (
                        <>
                            <div className="w-12 h-12 bg-safety-orange/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-safety-orange/20">
                                <Lock className="w-6 h-6 text-safety-orange" />
                            </div>

                            <h3 className="text-2xl font-black uppercase italic text-white mb-2">
                                Unlock The Guide
                            </h3>
                            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                                Enter your details below to get instant access to the <span className="text-white font-bold">Trade Growth Guide</span>.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email"
                                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-safety-orange transition-colors text-sm"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-white hover:bg-gray-200 text-black font-black uppercase tracking-widest text-sm py-6 rounded-sm shadow-xl"
                                >
                                    {isLoading ? (
                                        <span className="flex items-center gap-2">
                                            <Loader2 className="w-4 h-4 animate-spin" /> Unlocking...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Unlock Access <Download className="w-4 h-4" />
                                        </span>
                                    )}
                                </Button>
                            </form>
                            <p className="text-[10px] text-gray-500 mt-4 uppercase tracking-wider">
                                100% Free. No Spam.
                            </p>
                        </>
                    ) : (
                        <div className="py-8 animate-in fade-in slide-in-from-bottom-2">
                            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/20">
                                <CheckCircle className="w-8 h-8 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-black uppercase italic text-white mb-2">
                                Access Granted
                            </h3>
                            <p className="text-sm text-gray-400">
                                Opening your guide now...
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LeadMagnetModal;
