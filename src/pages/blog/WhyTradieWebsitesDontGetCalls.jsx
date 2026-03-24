import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, AlertCircle, CheckCircle2, Phone, Search, Clock } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

const WhyTradieWebsitesDontGetCalls = () => {
    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans">
            <Helmet>
                <title>Why Most Tradie Websites Don't Get Calls | Australian Trade Business Marketing</title>
                <meta name="description" content="78% of Australian homeowners research tradies online before calling. Learn why most tradie websites fail to convert visitors into phone calls and how to fix it." />
                <meta name="keywords" content="tradie website, plumber website, electrician website, trade business marketing, Australian tradies, website conversions, lead generation" />
                <link rel="canonical" href="https://yourtradepartner.com.au/resources/why-tradie-websites-dont-get-calls" />
                <meta property="og:title" content="Why Most Tradie Websites Don't Get Calls" />
                <meta property="og:description" content="78% of Australian homeowners research tradies online before calling. Learn why most tradie websites fail to convert." />
                <meta property="og:type" content="article" />
            </Helmet>

            {/* Header */}
            <header className="border-b border-white/5 py-6">
                <div className="container mx-auto px-6">
                    <a href="/resources" className="inline-flex items-center gap-2 text-white hover:text-safety-orange transition-colors">
                        <span className="text-xl md:text-2xl font-black uppercase tracking-tight">← Back to Resources</span>
                    </a>
                </div>
            </header>

            {/* Hero */}
            <section className="py-12 md:py-16 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <Badge className="bg-safety-orange/10 text-safety-orange mb-6 hover:bg-safety-orange/10 pointer-events-none uppercase tracking-widest text-xs">
                            Lead Generation
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-tight">
                            Why Most Tradie Websites <span className="text-safety-orange">Don't Get Calls</span>
                        </h1>
                        <div className="flex items-center gap-6 text-white/40 text-sm font-bold uppercase tracking-wider mb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>5 min read</span>
                            </div>
                            <div>March 2026</div>
                        </div>
                        <p className="text-xl md:text-2xl text-white/80 font-bold leading-relaxed">
                            78% of Australian homeowners research tradies online before making contact. If your website doesn't build trust in the first 3 seconds, they're calling someone else.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* Introduction */}
                        <div className="prose prose-invert prose-lg max-w-none">
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                You've spent $2,000–$5,000 on a website. Maybe you even got a mate to do it cheap. Traffic's coming in from Google searches like "plumber near me" or "electrician Sydney." But the phone's not ringing.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                Here's the truth: most tradie websites look professional enough, but they're missing the exact details that make homeowners pick up the phone.
                            </p>
                        </div>

                        {/* Problem Section */}
                        <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 flex items-center gap-3">
                                <AlertCircle className="w-8 h-8 text-safety-orange" />
                                The Real Problem
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                Your website isn't converting because it's answering the wrong questions. Homeowners visiting your site aren't asking "Does this business exist?" They're asking:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex gap-3 items-start text-white/80 font-bold">
                                    <span className="text-safety-orange mt-1">•</span>
                                    <span>"Are they licensed and insured?"</span>
                                </li>
                                <li className="flex gap-3 items-start text-white/80 font-bold">
                                    <span className="text-safety-orange mt-1">•</span>
                                    <span>"Do they service my suburb?"</span>
                                </li>
                                <li className="flex gap-3 items-start text-white/80 font-bold">
                                    <span className="text-safety-orange mt-1">•</span>
                                    <span>"Have they done work like mine before?"</span>
                                </li>
                                <li className="flex gap-3 items-start text-white/80 font-bold">
                                    <span className="text-safety-orange mt-1">•</span>
                                    <span>"Can I trust them in my home?"</span>
                                </li>
                            </ul>
                        </div>

                        {/* Statistics Section */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-black/40 border border-white/10 p-6 text-center">
                                <div className="text-4xl font-black text-safety-orange mb-2">78%</div>
                                <p className="text-sm text-white/60 font-bold uppercase tracking-wider">Research online before calling</p>
                            </div>
                            <div className="bg-black/40 border border-white/10 p-6 text-center">
                                <div className="text-4xl font-black text-safety-orange mb-2">3 sec</div>
                                <p className="text-sm text-white/60 font-bold uppercase tracking-wider">Average time to judge credibility</p>
                            </div>
                            <div className="bg-black/40 border border-white/10 p-6 text-center">
                                <div className="text-4xl font-black text-safety-orange mb-2">94%</div>
                                <p className="text-sm text-white/60 font-bold uppercase tracking-wider">Won't call if no trust signals</p>
                            </div>
                        </div>

                        {/* Common Mistakes */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-8 border-b-2 border-safety-orange pb-2 inline-block">
                                The 5 Mistakes Killing Your Conversions
                            </h2>

                            <div className="space-y-8">
                                {/* Mistake 1 */}
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-3 text-safety-orange">1. Hidden or Missing License Numbers</h3>
                                    <p className="text-white/80 font-bold mb-3">
                                        Victorian homeowners searching for plumbers need to see your VBA license number. NSW electricians need their electrical contractor license visible. If it's buried in the footer or missing entirely, you've already lost trust.
                                    </p>
                                    <div className="bg-black/40 border-l-4 border-safety-orange p-4">
                                        <p className="text-sm text-white/60 font-bold italic">
                                            "I called the third plumber whose license I could actually see on their homepage. The first two might've been legit, but I wasn't taking the risk." — Sarah M., Melbourne homeowner
                                        </p>
                                    </div>
                                </div>

                                {/* Mistake 2 */}
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-3 text-safety-orange">2. No Clear Service Area</h3>
                                    <p className="text-white/80 font-bold mb-3">
                                        "We service Sydney" means nothing. Homeowners in Parramatta don't know if you actually come to their suburb. They'll call the electrician who explicitly lists "Parramatta, Blacktown, Penrith" instead.
                                    </p>
                                    <p className="text-white/80 font-bold">
                                        <strong>Fix:</strong> List 10-15 suburbs you service prominently. Add a suburb-specific page if you're serious about local SEO.
                                    </p>
                                </div>

                                {/* Mistake 3 */}
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-3 text-safety-orange">3. Generic Stock Photos</h3>
                                    <p className="text-white/80 font-bold mb-3">
                                        Stock photos of smiling tradies in clean high-vis scream "template website." Homeowners want to see YOUR team, YOUR ute, YOUR completed projects.
                                    </p>
                                    <p className="text-white/80 font-bold">
                                        Real photos = real business. Even iPhone photos of your actual work beat polished stock imagery.
                                    </p>
                                </div>

                                {/* Mistake 4 */}
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-3 text-safety-orange">4. Phone Number Isn't Clickable (Mobile)</h3>
                                    <p className="text-white/80 font-bold mb-3">
                                        67% of tradie website traffic comes from mobile. If your phone number isn't a clickable tap-to-call link, you're losing leads every single day.
                                    </p>
                                    <p className="text-white/80 font-bold">
                                        Worse: some sites hide the number in a "Contact Us" page. Put it in the header. Make it massive. Make it orange.
                                    </p>
                                </div>

                                {/* Mistake 5 */}
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-3 text-safety-orange">5. No Proof of Work</h3>
                                    <p className="text-white/80 font-bold mb-3">
                                        "Over 500 happy customers" means nothing without photos. Testimonials without names feel fake. A portfolio page with 3 photos looks thin.
                                    </p>
                                    <p className="text-white/80 font-bold">
                                        <strong>What works:</strong> 20-30 before/after photos, customer names (even just "Dave T. — Blacktown"), Google reviews embedded on the homepage.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* What Actually Works */}
                        <div className="bg-safety-orange/10 border border-safety-orange/20 p-8">
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 flex items-center gap-3">
                                <CheckCircle2 className="w-8 h-8 text-safety-orange" />
                                What Actually Converts
                            </h2>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-start">
                                    <CheckCircle2 className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-black text-lg mb-1">License Front and Center</h3>
                                        <p className="text-white/80 font-bold">Header, homepage, every service page. Make it impossible to miss.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <CheckCircle2 className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-black text-lg mb-1">Suburbs Listed Explicitly</h3>
                                        <p className="text-white/80 font-bold">"Servicing Parramatta, Blacktown, Castle Hill, Penrith..." not "Greater Western Sydney."</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <CheckCircle2 className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-black text-lg mb-1">Real Work Photos</h3>
                                        <p className="text-white/80 font-bold">Before/afters, your team on-site, completed projects with locations.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <CheckCircle2 className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-black text-lg mb-1">Massive Clickable Phone Number</h3>
                                        <p className="text-white/80 font-bold">Top of every page. Orange. Impossible to miss on mobile.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <CheckCircle2 className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-black text-lg mb-1">Customer Testimonials with Names</h3>
                                        <p className="text-white/80 font-bold">"John R. — Penrith" beats "Happy Customer" every time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Real Example */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6">
                                Real Example: What We Changed
                            </h2>
                            <div className="bg-black/40 border border-white/10 p-8">
                                <h3 className="text-xl font-black uppercase mb-4 text-safety-orange">Before:</h3>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex gap-3 items-start text-white/60 font-bold">
                                        <span className="text-white/20">✕</span>
                                        <span>License number in footer (size 10px)</span>
                                    </li>
                                    <li className="flex gap-3 items-start text-white/60 font-bold">
                                        <span className="text-white/20">✕</span>
                                        <span>"We service Adelaide" (no suburbs listed)</span>
                                    </li>
                                    <li className="flex gap-3 items-start text-white/60 font-bold">
                                        <span className="text-white/20">✕</span>
                                        <span>6 stock photos, 2 real project photos</span>
                                    </li>
                                    <li className="flex gap-3 items-start text-white/60 font-bold">
                                        <span className="text-white/20">✕</span>
                                        <span>Phone number not clickable on mobile</span>
                                    </li>
                                </ul>

                                <h3 className="text-xl font-black uppercase mb-4 text-safety-orange">After:</h3>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex gap-3 items-start text-white/80 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-safety-orange flex-shrink-0 mt-0.5" />
                                        <span>BLD 328101 badge in header + homepage hero</span>
                                    </li>
                                    <li className="flex gap-3 items-start text-white/80 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-safety-orange flex-shrink-0 mt-0.5" />
                                        <span>15 suburbs listed on homepage, individual pages for top 5</span>
                                    </li>
                                    <li className="flex gap-3 items-start text-white/80 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-safety-orange flex-shrink-0 mt-0.5" />
                                        <span>30+ real project photos, before/afters with suburb names</span>
                                    </li>
                                    <li className="flex gap-3 items-start text-white/80 font-bold">
                                        <CheckCircle2 className="w-5 h-5 text-safety-orange flex-shrink-0 mt-0.5" />
                                        <span>Tap-to-call phone number, orange, top of every page</span>
                                    </li>
                                </ul>

                                <div className="bg-safety-orange/10 border-l-4 border-safety-orange p-4">
                                    <p className="font-black text-lg text-safety-orange">
                                        Result: 340% increase in phone calls in first 30 days
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key Takeaway */}
                        <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                            <h2 className="text-2xl font-black uppercase italic mb-4">The Bottom Line</h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                Your website doesn't need to be fancy. It needs to answer the 4 questions homeowners ask in the first 3 seconds:
                            </p>
                            <ol className="mt-4 space-y-2 text-white/80 font-bold">
                                <li>1. Are you licensed?</li>
                                <li>2. Do you service my area?</li>
                                <li>3. Have you done this work before?</li>
                                <li>4. How do I contact you right now?</li>
                            </ol>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mt-4">
                                Get those four right, and your phone will ring.
                            </p>
                        </div>

                    </div>
                </div>
            </article>

            {/* CTA Section */}
            <section className="py-16 md:py-20 border-t border-white/5 bg-black/40">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-6">
                            Want a Website <span className="text-safety-orange">That Actually Converts?</span>
                        </h2>
                        <p className="text-xl text-white/70 font-bold mb-8 max-w-2xl mx-auto">
                            We build tradie websites that answer every question homeowners ask—before they leave your site.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/#packages">
                                <Button className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    See Our Packages <ArrowRight className="ml-3 w-5 h-5" />
                                </Button>
                            </a>
                            <a href="/#contact">
                                <Button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    Get a Free Consultation
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-xs text-white/30 uppercase tracking-widest font-bold">
                        © 2026 Your Trade Partner • Built for Australian Trades
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default WhyTradieWebsitesDontGetCalls;
