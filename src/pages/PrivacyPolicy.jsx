import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import PrivacyPolicyContent, { LAST_UPDATED } from '../components/legal/PrivacyPolicyContent';

// Standalone page for the same text shown in the homepage modal. It exists as a
// real URL because a modal has none, and Google's OAuth consent screen — plus
// anyone who simply wants to read the policy without hunting for a button —
// needs a link that can be visited directly.
const PrivacyPolicy = () => (
    <div className="relative min-h-screen bg-construction-charcoal text-white/80 font-sans">
        <Helmet>
            <title>Privacy Policy | Your Trade Partner</title>
            <meta name="description" content="How Your Trade Partner collects, uses, stores and protects your personal information when you visit our site, contact us, book services or make payments." />
            <meta property="og:title" content="Privacy Policy | Your Trade Partner" />
            <meta property="og:description" content="How Your Trade Partner collects, uses, stores and protects your personal information when you visit our site, contact us, book services or make payments." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://yourtradepartner.com.au/privacy" />
            <link rel="canonical" href="https://yourtradepartner.com.au/privacy" />
        </Helmet>

        <nav className="relative z-20 border-b border-white/10 bg-construction-charcoal/90 backdrop-blur-sm sticky top-0">
            <div className="container mx-auto px-6 py-4">
                <a href="/" className="inline-flex items-center gap-3 text-white/70 hover:text-safety-orange transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-xs font-black uppercase tracking-widest">Your Trade Partner</span>
                </a>
            </div>
        </nav>

        <div className="relative z-10 container mx-auto px-6">
            <div className="max-w-3xl mx-auto pt-12 pb-24 md:pt-16 md:pb-32">
                <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy', href: '/privacy' }]} />

                <header className="mt-8 mb-10 pb-8 border-b border-white/10">
                    <h1 className="text-3xl md:text-5xl font-black uppercase italic text-white mb-3">Privacy Policy</h1>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Last updated: {LAST_UPDATED}</p>
                </header>

                <div className="space-y-8">
                    <PrivacyPolicyContent />
                </div>
            </div>
        </div>
    </div>
);

export default PrivacyPolicy;
