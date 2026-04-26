import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Zap, Shield, FileText, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedReads from '../../components/RelatedReads';

const relatedReads = [
    {
        href: '/resources/professional-trust-signals',
        title: 'Professional Trust Signals',
        description: 'Strengthen the credibility cues homeowners look for before they call an electrician.'
    },
    {
        href: '/resources/why-tradie-websites-dont-get-calls',
        title: "Why Most Tradie Websites Don't Get Calls",
        description: 'See how missing proof, suburb signals, and mobile friction kill enquiries.'
    },
    {
        href: '/resources/suburb-seo-for-tradies',
        title: 'Suburb SEO for Tradies',
        description: 'Add location pages and service-area clarity to bring in higher-intent local traffic.'
    }
];

const ElectricianWebsiteRequirements = () => {
    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans">
            <Helmet>
                <title>Electrician Website Checklist: 7 Must-Haves to Get More Calls in Australia</title>
                <meta name="description" content="Is your electrician website losing jobs to competitors? See the 7 trust signals, licence displays, and page elements Australian homeowners look for before they call — with real examples." />
                <meta name="keywords" content="electrician website checklist, electrician website requirements, Australian electrician website, electrical contractor website, trade website trust signals" />
                <link rel="canonical" href="https://yourtradepartner.com.au/resources/electrician-website-requirements" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Electrician Website Checklist: 7 Must-Haves to Get More Calls in Australia" />
                <meta property="og:description" content="Is your electrician website losing jobs to competitors? See the 7 trust signals and page elements Australian homeowners look for before they call." />
                <meta property="og:type" content="article" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": "Electrician Website Checklist: 7 Must-Haves to Get More Calls in Australia",
                    "description": "Is your electrician website losing jobs to competitors? See the 7 trust signals, licence displays, and page elements Australian homeowners look for before they call — with real examples.",
                    "url": "https://yourtradepartner.com.au/resources/electrician-website-requirements",
                    "datePublished": "2026-03-18",
                    "dateModified": "2026-03-18",
                    "author": { "@type": "Organization", "name": "Your Trade Partner", "url": "https://yourtradepartner.com.au" },
                    "publisher": { "@type": "Organization", "name": "Your Trade Partner", "url": "https://yourtradepartner.com.au" }
                })}</script>
            </Helmet>

            {/* Header */}
            <header className="border-b border-white/5 py-6">
                <div className="container mx-auto px-6">
                    <a href="/resources" className="inline-flex items-center gap-2 text-white hover:text-safety-orange transition-colors">
                        <span className="text-xl md:text-2xl font-black uppercase tracking-tight">← Back to Resources</span>
                    </a>
                    <Breadcrumbs
                        items={[
                            { label: 'Home', href: '/' },
                            { label: 'Resources', href: '/resources' }
                        ]}
                        currentLabel="Electrician Website Requirements"
                        currentPath="/resources/electrician-website-requirements"
                        className="mt-5"
                    />
                </div>
            </header>

            {/* Hero */}
            <section className="py-12 md:py-16 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <Badge className="bg-safety-orange/10 text-safety-orange mb-6 hover:bg-safety-orange/10 pointer-events-none uppercase tracking-widest text-xs">
                            Trade-Specific
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-tight">
                            What Electricians Need <span className="text-safety-orange">(That Plumbers Don't)</span>
                        </h1>
                        <div className="flex items-center gap-6 text-white/40 text-sm font-bold uppercase tracking-wider mb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>6 min read</span>
                            </div>
                            <div>March 2026</div>
                        </div>
                        <p className="text-xl md:text-2xl text-white/80 font-bold leading-relaxed">
                            Every trade has specific trust signals and licensing requirements. Generic websites miss these details—and lose customers because of it.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* Why Generic Fails */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Why "One-Size-Fits-All" Fails
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Most website builders sell the same template to electricians, plumbers, carpenters, and HVAC techs. Change the logo, swap "plumbing" for "electrical," call it done.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Problem: homeowners searching for an electrician have <strong className="text-safety-orange">different concerns</strong> than those searching for a plumber.
                            </p>

                            <div className="bg-white/5 border-l-4 border-safety-orange p-6">
                                <p className="font-black text-lg mb-3">Here's the difference:</p>
                                <div className="grid md:grid-cols-2 gap-6 text-sm">
                                    <div>
                                        <p className="font-black text-white/80 mb-2">Plumber Concerns:</p>
                                        <ul className="space-y-1 text-white/60">
                                            <li>• Can they fix this leak fast?</li>
                                            <li>• Do they do hot water systems?</li>
                                            <li>• What's the callout fee?</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-black text-safety-orange mb-2">Electrician Concerns:</p>
                                        <ul className="space-y-1 text-white/80">
                                            <li>• Are they properly licensed? (Electrical work is regulated)</li>
                                            <li>• Will they issue a compliance certificate?</li>
                                            <li>• Is this safe or a fire risk?</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <p className="text-lg text-white/80 font-bold leading-relaxed mt-6">
                                Electrical work carries legal liability. Homeowners know this. Your website needs to address it—explicitly.
                            </p>
                        </div>

                        {/* What Electricians MUST Show */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-8">
                                What Electricians MUST Show (Non-Negotiable)
                            </h2>

                            <div className="space-y-6">
                                {/* 1. License */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <Shield className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-2">1. Electrical Contractor License (Front & Center)</h3>
                                            <p className="text-white/60 text-sm font-bold uppercase tracking-wider">Literally the first thing customers check</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>In NSW, it's illegal to do electrical work without an electrical contractor license. Homeowners know this—and they check.</p>

                                        <div className="bg-black/40 border-l-4 border-safety-orange p-4">
                                            <p className="font-black mb-2">✓ What to Display:</p>
                                            <ul className="space-y-2 text-sm">
                                                <li>• <strong>License number</strong> (e.g., "EC 123456" in NSW, "EW 12345" in Victoria)</li>
                                                <li>• <strong>Trade qualifications</strong> (e.g., "Certificate III in Electrotechnology Electrician")</li>
                                                <li>• <strong>State/territory</strong> (licenses aren't national—specify which state)</li>
                                                <li>• <strong>Expiry status</strong> ("Licensed & fully insured" reassures it's current)</li>
                                            </ul>
                                        </div>

                                        <div className="bg-black/40 p-4">
                                            <p className="font-black mb-2 text-safety-orange">Where to Show It:</p>
                                            <ul className="space-y-1 text-sm">
                                                <li>• Website header (top right, always visible)</li>
                                                <li>• Homepage hero section (big, bold badge)</li>
                                                <li>• Footer (every page)</li>
                                                <li>• About page (with photo of physical license card)</li>
                                            </ul>
                                        </div>

                                        <p className="text-sm italic text-white/60">
                                            If a homeowner has to hunt for your license number, they'll call someone else.
                                        </p>
                                    </div>
                                </div>

                                {/* 2. Insurance */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <Shield className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-2">2. Public Liability Insurance ($10M+)</h3>
                                            <p className="text-white/60 text-sm font-bold uppercase tracking-wider">Homeowners want proof you're covered</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>Electrical faults can cause house fires. Homeowners need to know: if something goes wrong, are you insured?</p>

                                        <div className="bg-black/40 border-l-4 border-safety-orange p-4">
                                            <p className="font-black mb-2">✓ What to Display:</p>
                                            <ul className="space-y-2 text-sm">
                                                <li>• "$10 million public liability insurance" (or $20M—whatever you carry)</li>
                                                <li>• "WorkCover insured" (if you have employees)</li>
                                                <li>• Optional: Logo/badge from your insurer (Aon, CGU, etc.)</li>
                                            </ul>
                                        </div>

                                        <p className="text-sm">
                                            <strong className="text-safety-orange">Pro tip:</strong> Add a sentence like "All work backed by $10M public liability insurance and 5-year workmanship guarantee." Specific numbers build confidence.
                                        </p>
                                    </div>
                                </div>

                                {/* 3. Compliance Certificates */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <FileText className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-2">3. Compliance Certificates (CCEW/COC)</h3>
                                            <p className="text-white/60 text-sm font-bold uppercase tracking-wider">Required by law in most states</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>In NSW, you must issue a <strong>Certificate of Compliance for Electrical Work (CCEW)</strong> for most jobs. Victoria requires a <strong>Certificate of Electrical Safety (COES)</strong>.</p>

                                        <div className="bg-black/40 p-4">
                                            <p className="font-black mb-2">Why This Matters to Customers:</p>
                                            <ul className="space-y-2 text-sm">
                                                <li>• Required for insurance claims (if there's a fire, insurers ask for it)</li>
                                                <li>• Legally required when selling a home</li>
                                                <li>• Proves work was inspected and safe</li>
                                            </ul>
                                        </div>

                                        <div className="bg-safety-orange/10 border-l-4 border-safety-orange p-4">
                                            <p className="text-sm">
                                                <strong>Add this to your website:</strong> "All electrical work includes a Certificate of Compliance (CCEW) lodged with the NSW regulator within 28 days—as required by law."
                                            </p>
                                        </div>

                                        <p className="text-sm italic text-white/60">
                                            This one sentence separates you from unlicensed handymen who can't issue certificates.
                                        </p>
                                    </div>
                                </div>

                                {/* 4. Safety Focus */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <Zap className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-2">4. Electrical Safety Messaging</h3>
                                            <p className="text-white/60 text-sm font-bold uppercase tracking-wider">Plumbers don't need this—you do</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>Homeowners hiring electricians are often dealing with safety concerns: burning smells, tripping breakers, outdated wiring, smoke alarms not working.</p>

                                        <div className="bg-black/40 p-4">
                                            <p className="font-black mb-2">Safety-Focused Messaging Examples:</p>
                                            <ul className="space-y-2 text-sm">
                                                <li>• "Safety switch (RCD) installation—mandatory in NSW since 2018"</li>
                                                <li>• "Smoke alarm compliance testing—before you sell or lease"</li>
                                                <li>• "Switchboard upgrades—replacing dangerous old ceramic fuses"</li>
                                                <li>• "Emergency callouts for power outages and electrical hazards"</li>
                                            </ul>
                                        </div>

                                        <p className="text-sm">
                                            <strong className="text-safety-orange">Language tip:</strong> Use words like "compliant," "certified," "tested," "approved." Avoid vague terms like "quality work"—be specific about safety standards.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trade-Specific Services */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Services You Must List (That Other Trades Don't)
                            </h2>

                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Homeowners search for specific electrical services—not just "electrician near me." Your service pages need to match these searches exactly.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-4 text-safety-orange">Residential (Must-Have Pages)</h3>
                                    <ul className="space-y-2 text-sm text-white/80 font-bold">
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Safety switch (RCD) installation & testing</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Smoke alarm installation & compliance</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Switchboard upgrades & rewiring</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Power point & light switch installation</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>LED lighting & downlight installation</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Ceiling fan installation & repairs</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Electric hot water system installation</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Emergency electrical repairs (24/7)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-4 text-safety-orange">Commercial (If You Do It)</h3>
                                    <ul className="space-y-2 text-sm text-white/80 font-bold">
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Test & tag services (portable appliances)</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Commercial fit-outs & shop wiring</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>3-phase power installations</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Exit & emergency lighting</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Electrical safety inspections</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Data & communications cabling</span>
                                        </li>
                                    </ul>
                                    <p className="text-xs text-white/40 mt-4 italic">
                                        Note: If you only do residential, don't list commercial services. Focus on what you actually do best.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-safety-orange/10 border border-safety-orange/20 p-6 mt-6">
                                <p className="font-black mb-2">💡 SEO Tip:</p>
                                <p className="text-sm text-white/80 font-bold">
                                    Each service should have its own page: <strong>/switchboard-upgrades</strong>, <strong>/safety-switch-installation</strong>, etc. Homeowners search for specific services—not generic "electrical work."
                                </p>
                            </div>
                        </div>

                        {/* What Plumbers Can Skip (But You Can't) */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6">
                                What Plumbers Can Skip (But You Can't)
                            </h2>

                            <div className="bg-black/40 border border-white/10 p-8">
                                <div className="space-y-4 text-white/80 font-bold">
                                    <div className="flex gap-4 items-start">
                                        <span className="text-2xl text-safety-orange">⚡</span>
                                        <div>
                                            <p className="font-black mb-1">Warranty & Guarantee Details</p>
                                            <p className="text-sm">Electrical work has longer-term risks (fire, electrocution). Homeowners want to know: "If this switchboard fails in 2 years, are you still around?" Offer a 5-year workmanship guarantee prominently.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <span className="text-2xl text-safety-orange">⚡</span>
                                        <div>
                                            <p className="font-black mb-1">Before/After Photos with Safety Context</p>
                                            <p className="text-sm">Don't just show "old switchboard → new switchboard." Explain: "This ceramic fuse board from 1972 had no safety switches—illegal to sell without upgrading." Context sells.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <span className="text-2xl text-safety-orange">⚡</span>
                                        <div>
                                            <p className="font-black mb-1">Emergency Response Time</p>
                                            <p className="text-sm">Electrical emergencies (sparking outlets, burning smells, total power loss) are urgent. If you offer 24/7 callouts, say: "Emergency electrician—on-site within 60 minutes."</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 items-start">
                                        <span className="text-2xl text-safety-orange">⚡</span>
                                        <div>
                                            <p className="font-black mb-1">Compliance with Current Standards</p>
                                            <p className="text-sm">Mention <strong>AS/NZS 3000 (Wiring Rules)</strong> compliance. Most homeowners won't know what it is, but it signals you follow legal standards.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Real Example */}
                        <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                            <h2 className="text-2xl font-black uppercase italic mb-4 text-safety-orange">Real Example: Generic vs Trade-Specific</h2>

                            <div className="space-y-6">
                                <div>
                                    <p className="font-black mb-3 text-white/60">❌ Generic Template (Plumber or Electrician—Same Layout):</p>
                                    <div className="bg-black/40 p-4 text-sm text-white/60">
                                        <p className="mb-2">Hero: "Quality Electrical Services You Can Trust"</p>
                                        <p className="mb-2">License: Hidden in footer (size 10px)</p>
                                        <p className="mb-2">Services: "Residential & Commercial Electrical Work"</p>
                                        <p>CTA: "Contact us for a quote"</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="font-black mb-3 text-safety-orange">✓ Electrician-Specific (Trust-Focused):</p>
                                    <div className="bg-black/40 border-l-4 border-safety-orange p-4 text-sm text-white/80">
                                        <p className="mb-2">Hero: "Licensed Electrician EC 123456 | Safety Switch & Smoke Alarm Compliance | $10M Insured"</p>
                                        <p className="mb-2">License: Badge in header + homepage (impossible to miss)</p>
                                        <p className="mb-2">Services: Individual pages for "Safety Switch Installation," "Switchboard Upgrades," "Smoke Alarm Compliance"</p>
                                        <p className="mb-2">Safety: "All work includes Certificate of Compliance (CCEW) lodged with NSW Fair Trading"</p>
                                        <p>CTA: "Emergency Callout Available 24/7 | Book Online or Call 0400 XXX XXX"</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-white/80 font-bold mt-6">
                                <strong className="text-safety-orange">Result:</strong> The second version converts 3-4x higher because it answers every safety and legal concern upfront.
                            </p>
                        </div>

                        {/* Bottom Line */}
                        <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                            <h2 className="text-2xl font-black uppercase italic mb-4">The Bottom Line</h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                Electricians operate under stricter regulations than most trades. Homeowners know this—and they judge your professionalism by how clearly you display:
                            </p>
                            <ul className="space-y-2 text-white/80 font-bold">
                                <li>• Your contractor license number</li>
                                <li>• Your insurance coverage</li>
                                <li>• Your commitment to compliance certificates</li>
                                <li>• Your focus on electrical safety</li>
                            </ul>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mt-4">
                                Generic templates don't cover this. Trade-specific websites do—and that's why they convert.
                            </p>
                        </div>

                        <RelatedReads items={relatedReads} />

                    </div>
                </div>
            </article>

            {/* CTA Section */}
            <section className="py-16 md:py-20 border-t border-white/5 bg-black/40">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-6">
                            Want a Website Built <span className="text-safety-orange">For Your Trade?</span>
                        </h2>
                        <p className="text-xl text-white/70 font-bold mb-8 max-w-2xl mx-auto">
                            We build trade-specific websites that display your license, insurance, and compliance details exactly where customers expect them.
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

export default ElectricianWebsiteRequirements;
