import React from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import TermsConditionsContent, { LAST_UPDATED } from './legal/TermsConditionsContent';

const TermsConditionsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-construction-charcoal border border-white/10 w-full max-w-3xl rounded-lg shadow-2xl overflow-hidden font-sans animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">

                {/* Header */}
                <div className="p-6 md:p-8 bg-black/20 border-b border-white/10 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-1">Terms & Conditions</h2>
                        <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Last updated: {LAST_UPDATED}</p>
                    </div>
                    <button
                        onClick={onClose}
                        aria-label="Close"
                        className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Main Content (Scrollable) */}
                <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar text-white/80 space-y-8">

                    <TermsConditionsContent />

                    <div className="pt-6 border-t border-white/10 flex justify-center">
                        <Button
                            onClick={onClose}
                            className="bg-white/10 hover:bg-white/20 text-white font-bold px-8"
                        >
                            Close Terms
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsConditionsModal;
