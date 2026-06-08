import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import Breadcrumbs from '../components/Breadcrumbs';

const AboutPage = () => {
    const shouldReduceMotion = useReducedMotion();

    const fadeUp = shouldReduceMotion
        ? {}
        : { hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };

    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans">
            <Helmet>
                <title>About | Your Trade Partner</title>
                <meta name="description" content="Saharsh is an Adelaide-based civil engineer and insurance project manager who built Your Trade Partner after hours — because too many good trade businesses were invisible online." />
                <meta property="og:title" content="About | Your Trade Partner" />
                <meta property="og:description" content="Saharsh is an Adelaide-based civil engineer and insurance project manager who built Your Trade Partner after hours — because too many good trade businesses were invisible online." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourtradepartner.com.au/about" />
                <link rel="canonical" href="https://yourtradepartner.com.au/about" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "name": "About Your Trade Partner",
                    "url": "https://yourtradepartner.com.au/about",
                    "description": "Your Trade Partner was built by Saharsh, an Adelaide-based civil engineer and insurance project manager, to help Australian trade businesses get found online.",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Your Trade Partner",
                        "url": "https://yourtradepartner.com.au"
                    }
                })}</script>
            </Helmet>

            {/* Nav */}
            <nav className="border-b border-white/10 bg-construction-charcoal/95 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <a href="/" className="flex items-center gap-3 text-white hover:text-safety-orange transition-colors group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-xs font-black uppercase tracking-widest">Your Trade Partner</span>
                        </a>
                        <Badge className="bg-safety-orange/10 text-safety-orange border-safety-orange/20 hover:bg-safety-orange/10 pointer-events-none">
                            About
                        </Badge>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto px-6 py-16 max-w-2xl">
                <Breadcrumbs
                    items={[{ label: 'Home', href: '/' }]}
                    currentLabel="About"
                    currentPath="/about"
                    className="mb-12"
                />

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    className="space-y-12"
                >
                    {/* Intro */}
                    <div>
                        <p className="text-xs text-white/40 font-bold tracking-[0.2em] uppercase mb-4">Who's behind this</p>
                        <h1 className="text-4xl md:text-5xl font-black uppercase italic leading-tight mb-6">
                            Saharsh.<br />
                            <span className="text-safety-orange">Adelaide, SA.</span>
                        </h1>
                        <p className="text-white/70 text-lg leading-relaxed">
                            Civil Engineering background. Early career in hands-on construction. Currently working as a Project Manager and Assessor for one of Australia's leading insurance builders — scoping claimed damages, coordinating subcontractors, managing repairs through to handover, every day.
                        </p>
                    </div>

                    <hr className="border-white/10" />

                    {/* Why it exists */}
                    <div>
                        <p className="text-xs text-white/40 font-bold tracking-[0.2em] uppercase mb-4">Why this exists</p>
                        <div className="space-y-4 text-white/70 text-lg leading-relaxed">
                            <p>
                                Working alongside trade businesses every day, the same thing kept appearing: genuinely solid operators who were nearly impossible to find online.
                            </p>
                            <p>
                                No proper Google presence. Websites that didn't reflect the quality of their work. Enquiries falling through the cracks because there was no system behind them.
                            </p>
                            <p className="text-white/90">
                                The opportunity sitting there, uncaptured, was hard to ignore.
                            </p>
                        </div>
                    </div>

                    <hr className="border-white/10" />

                    {/* How it started */}
                    <div>
                        <p className="text-xs text-white/40 font-bold tracking-[0.2em] uppercase mb-4">How it started</p>
                        <div className="space-y-4 text-white/70 text-lg leading-relaxed">
                            <p>
                                Started after hours — weeknights from 5pm, most weekends. No investors, no big announcement.
                            </p>
                            <p>
                                No agency background. Just an Engineering mindset applied to a marketing problem: find the system that's broken, fix the system.
                            </p>
                            <p>
                                Still learning a lot. I post what I find along the way — the real stuff, not just the wins. If you want to see what's working for Australian trade businesses online right now, <a href="/resources" className="text-safety-orange hover:underline">the resources section</a> is where I put it.
                            </p>
                        </div>
                    </div>

                    <hr className="border-white/10" />

                    {/* Contact */}
                    <div className="pb-8">
                        <p className="text-white/40 text-sm font-bold uppercase tracking-widest mb-3">Get in touch</p>
                        <a href="mailto:hello@yourtradepartner.com.au" className="text-safety-orange hover:underline text-lg font-bold">
                            hello@yourtradepartner.com.au
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutPage;
