import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Helmet } from 'react-helmet-async';

const Unsubscribe = () => {
    const [searchParams] = useSearchParams();
    const email = searchParams.get('email');
    const [date, setDate] = useState('');

    useEffect(() => {
        // Set the date only on client side to avoid hydration mismatch if SSR were used (though this is SPA)
        setDate(new Date().toLocaleString('en-AU', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }));
    }, []);

    return (
        <div className="min-h-screen bg-construction-charcoal flex flex-col items-center justify-center p-6 font-sans text-white">
            <Helmet>
                <title>Unsubscribe Confirmation | Your Trade Partner</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <div className="max-w-md w-full bg-white/5 border border-white/10 p-8 rounded-lg shadow-2xl text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">

                {/* Icon */}
                <div className="w-20 h-20 bg-safety-orange/10 rounded-full flex items-center justify-center mx-auto border border-safety-orange/20">
                    <CheckCircle className="w-10 h-10 text-safety-orange" />
                </div>

                {/* Heading */}
                <div className="space-y-2">
                    <h1 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight">
                        Unsubscribed
                    </h1>
                    <p className="text-white/60 font-medium">
                        You've been successfully removed from our list.
                    </p>
                </div>

                {/* Unsubscribe Details */}
                <div className="bg-black/30 p-4 rounded-md border border-white/5 space-y-3 text-left">
                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                        <span className="text-white/40 uppercase font-black tracking-widest text-xs">Email Removed:</span>
                    </div>
                    <div className="font-mono text-safety-orange truncate">
                        {email || "No email provided"}
                    </div>

                    <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2 pt-2">
                        <span className="text-white/40 uppercase font-black tracking-widest text-xs">Date:</span>
                    </div>
                    <div className="text-white/80 text-sm">
                        {date}
                    </div>
                </div>

                {/* Message */}
                <p className="text-xs text-white/40 leading-relaxed">
                    You will no longer receive marketing updates, business insights, or system improvement tips from Your Trade Partner.
                </p>

                {/* Action */}
                <div className="pt-4">
                    <Link to="/">
                        <Button className="w-full bg-white hover:bg-white/90 text-construction-charcoal font-black uppercase tracking-widest h-12">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Return to Homepage
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Footer Minimal */}
            <div className="mt-12 text-center opacity-30">
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Your Trade Partner</p>
            </div>
        </div>
    );
};

export default Unsubscribe;
