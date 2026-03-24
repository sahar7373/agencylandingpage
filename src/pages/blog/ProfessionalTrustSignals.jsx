import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Shield, Star, Award, CheckCircle2, Clock, Camera } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

const ProfessionalTrustSignals = () => {
    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans">
            <Helmet>
                <title>Why Looking 'Professional' Online Actually Matters | Trust Signals for Australian Tradies</title>
                <meta name="description" content="Homeowners judge your Australian trade business in 3 seconds. A DIY Wix site vs a professional setup can be the difference between a $4,000 job and getting ghosted." />
                <meta name="keywords" content="professional website, trust signals, tradie website, australian tradies, credibility, business branding, first impressions" />
                <link rel="canonical" href="https://yourtradepartner.com.au/resources/professional-trust-signals" />
                <meta property="og:title" content="Why Looking 'Professional' Online Actually Matters" />
                <meta property="og:description" content="How Australian homeowners judge tradie professionalism in 3 seconds—and what to fix." />
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
                            Branding
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-tight">
                            Why Looking 'Professional' <span className="text-safety-orange">Actually Matters</span>
                        </h1>
                        <div className="flex items-center gap-6 text-white/40 text-sm font-bold uppercase tracking-wider mb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>5 min read</span>
                            </div>
                            <div>March 2026</div>
                        </div>
                        <p className="text-xl md:text-2xl text-white/80 font-bold leading-relaxed">
                            Homeowners judge your business in 3 seconds. A DIY Wix site vs a professional setup can be the difference between a $4,000 job and getting ghosted.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* The 3-Second Test */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                The 3-Second Judgment
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                A homeowner Googles "plumber Parramatta." They click your Google Business listing. Your website loads. In the next 3 seconds, they decide:
                            </p>

                            <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <p className="font-black mb-3 text-safety-orange text-lg">✓ "These guys look legit"</p>
                                        <p className="text-sm text-white/70">Result: They read your services, check your pricing, and call you.</p>
                                    </div>
                                    <div>
                                        <p className="font-black mb-3 text-red-400 text-lg">✕ "This looks dodgy"</p>
                                        <p className="text-sm text-white/70">Result: They hit the back button and call someone else.</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-lg text-white/80 font-bold leading-relaxed mt-6">
                                That 3-second judgment isn't about your skills. You could be the best plumber in Sydney—but if your website screams "built in 2004" or "my nephew made this," you've lost them.
                            </p>
                        </div>

                        {/* What "Professional" Actually Means */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6">
                                What "Professional" Actually Means
                            </h2>

                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                "Professional" doesn't mean fancy animations or a $20,000 custom design. It means <strong className="text-safety-orange">instant credibility</strong>—the site answers their concerns before they even think to ask.
                            </p>

                            <div className="space-y-6">
                                {/* Trust Signal 1 */}
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <div className="flex items-start gap-4 mb-3">
                                        <Shield className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-black uppercase">1. Licensing & Credentials (Visible Immediately)</h3>
                                    </div>
                                    <p className="text-white/80 font-bold mb-3">
                                        Homeowners need to know you're legit. If they have to hunt for your license number, they won't.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div className="bg-black/40 p-4">
                                            <p className="font-black mb-2 text-red-400">❌ Unprofessional:</p>
                                            <p className="text-white/60">License number buried in footer (8px font)</p>
                                        </div>
                                        <div className="bg-black/40 border-l-4 border-safety-orange p-4">
                                            <p className="font-black mb-2 text-safety-orange">✓ Professional:</p>
                                            <p className="text-white/80">Badge in header: "Licensed EC 123456 | Fully Insured"</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Trust Signal 2 */}
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <div className="flex items-start gap-4 mb-3">
                                        <Camera className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-black uppercase">2. Real Photos (Not Stock Images)</h3>
                                    </div>
                                    <p className="text-white/80 font-bold mb-3">
                                        Stock photos of smiling tradies in clean uniforms = "template site, probably fake."
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div className="bg-black/40 p-4">
                                            <p className="font-black mb-2 text-red-400">❌ Unprofessional:</p>
                                            <p className="text-white/60">10 stock photos from Shutterstock, all different people</p>
                                        </div>
                                        <div className="bg-black/40 border-l-4 border-safety-orange p-4">
                                            <p className="font-black mb-2 text-safety-orange">✓ Professional:</p>
                                            <p className="text-white/80">Your ute, your team, your actual completed projects</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-white/40 mt-3 italic">
                                        Pro tip: iPhone photos of real work beat polished stock photos every time.
                                    </p>
                                </div>

                                {/* Trust Signal 3 */}
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <div className="flex items-start gap-4 mb-3">
                                        <Star className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-black uppercase">3. Google Reviews (Front Page)</h3>
                                    </div>
                                    <p className="text-white/80 font-bold mb-3">
                                        "5-star rated on Google" means nothing if they can't see the reviews.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div className="bg-black/40 p-4">
                                            <p className="font-black mb-2 text-red-400">❌ Unprofessional:</p>
                                            <p className="text-white/60">"Check out our reviews!" (no link, no widget)</p>
                                        </div>
                                        <div className="bg-black/40 border-l-4 border-safety-orange p-4">
                                            <p className="font-black mb-2 text-safety-orange">✓ Professional:</p>
                                            <p className="text-white/80">Google review widget embedded on homepage showing 5 recent reviews</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Trust Signal 4 */}
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <div className="flex items-start gap-4 mb-3">
                                        <Award className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-black uppercase">4. Clear, Upfront Pricing</h3>
                                    </div>
                                    <p className="text-white/80 font-bold mb-3">
                                        Vague pricing = "They're going to gouge me." Even rough ranges build trust.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div className="bg-black/40 p-4">
                                            <p className="font-black mb-2 text-red-400">❌ Unprofessional:</p>
                                            <p className="text-white/60">"Contact us for a quote" (no pricing info anywhere)</p>
                                        </div>
                                        <div className="bg-black/40 border-l-4 border-safety-orange p-4">
                                            <p className="font-black mb-2 text-safety-orange">✓ Professional:</p>
                                            <p className="text-white/80">"Safety switch install: From $350 | Switchboard upgrade: $1,800-$3,200"</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Trust Signal 5 */}
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <div className="flex items-start gap-4 mb-3">
                                        <CheckCircle2 className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                        <h3 className="text-xl font-black uppercase">5. Mobile-Friendly (Tap-to-Call)</h3>
                                    </div>
                                    <p className="text-white/80 font-bold mb-3">
                                        67% of tradie website traffic is mobile. If your phone number isn't a clickable button, you're losing calls.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div className="bg-black/40 p-4">
                                            <p className="font-black mb-2 text-red-400">❌ Unprofessional:</p>
                                            <p className="text-white/60">Phone number as plain text (can't click to call on mobile)</p>
                                        </div>
                                        <div className="bg-black/40 border-l-4 border-safety-orange p-4">
                                            <p className="font-black mb-2 text-safety-orange">✓ Professional:</p>
                                            <p className="text-white/80">Big orange button: "Call Now: 0400 123 456" (tap to dial)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* The Cost of "Close Enough" */}
                        <div className="bg-safety-orange/10 border border-safety-orange/20 p-8">
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6">
                                The Cost of "Close Enough"
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                "My DIY site is fine—I still get calls." Sure. But how many are you <em>not</em> getting?
                            </p>

                            <div className="bg-black/40 p-6">
                                <p className="font-black mb-4">Scenario: Two plumbers, same suburb, same Google ranking</p>
                                <div className="grid md:grid-cols-2 gap-6 text-sm">
                                    <div>
                                        <p className="font-black mb-3 text-white/60">Plumber A (DIY Wix site):</p>
                                        <ul className="space-y-2 text-white/60">
                                            <li>• 100 website visitors/month</li>
                                            <li>• 12% call or email (12 leads)</li>
                                            <li>• Stock photos, hidden license, no reviews visible</li>
                                            <li>• Phone number not clickable</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-black mb-3 text-safety-orange">Plumber B (Professional site):</p>
                                        <ul className="space-y-2 text-white/80">
                                            <li>• 100 website visitors/month</li>
                                            <li>• <strong className="text-safety-orange">34% call or email (34 leads)</strong></li>
                                            <li>• Real photos, license badge, Google reviews embedded</li>
                                            <li>• Tap-to-call button, upfront pricing</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-safety-orange/10 border-l-4 border-safety-orange p-4 mt-6">
                                    <p className="font-black mb-2">The Math:</p>
                                    <ul className="space-y-1 text-sm text-white/80">
                                        <li>• Plumber B gets <strong>22 extra leads/month</strong> from the same traffic</li>
                                        <li>• 22 leads × 30% conversion rate = <strong>6.6 extra jobs/month</strong></li>
                                        <li>• 6.6 jobs × $2,200 average = <strong>$14,520/month extra revenue</strong></li>
                                        <li>• <strong className="text-safety-orange">Annual difference: $174,240</strong></li>
                                    </ul>
                                </div>

                                <p className="text-lg font-black text-safety-orange mt-6">
                                    Same traffic. Different website. $174k difference.
                                </p>
                            </div>
                        </div>

                        {/* Red Flags That Kill Trust */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                8 Red Flags That Kill Trust Instantly
                            </h2>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white/5 border border-white/10 p-5">
                                    <p className="font-black mb-2 flex items-center gap-2">
                                        <span className="text-red-400">1.</span> Broken Images
                                    </p>
                                    <p className="text-sm text-white/60">"If they can't maintain their own website, how will they maintain my pipes?"</p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-5">
                                    <p className="font-black mb-2 flex items-center gap-2">
                                        <span className="text-red-400">2.</span> Spelling Errors
                                    </p>
                                    <p className="text-sm text-white/60">"Profesional Plumber Servises"—instant credibility loss</p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-5">
                                    <p className="font-black mb-2 flex items-center gap-2">
                                        <span className="text-red-400">3.</span> No Contact Info
                                    </p>
                                    <p className="text-sm text-white/60">Phone number hidden behind "Contact Us" form = dodgy</p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-5">
                                    <p className="font-black mb-2 flex items-center gap-2">
                                        <span className="text-red-400">4.</span> "Coming Soon" Pages
                                    </p>
                                    <p className="text-sm text-white/60">Half-finished site = half-finished business</p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-5">
                                    <p className="font-black mb-2 flex items-center gap-2">
                                        <span className="text-red-400">5.</span> Auto-Play Music/Video
                                    </p>
                                    <p className="text-sm text-white/60">Instant close—no one wants surprise audio at work</p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-5">
                                    <p className="font-black mb-2 flex items-center gap-2">
                                        <span className="text-red-400">6.</span> Generic Email (Gmail/Hotmail)
                                    </p>
                                    <p className="text-sm text-white/60">bobsplumbing@gmail.com vs info@bobsplumbing.com.au—which looks legit?</p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-5">
                                    <p className="font-black mb-2 flex items-center gap-2">
                                        <span className="text-red-400">7.</span> Slow Loading (3+ Seconds)
                                    </p>
                                    <p className="text-sm text-white/60">53% of mobile users abandon sites that take >3 seconds to load</p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-5">
                                    <p className="font-black mb-2 flex items-center gap-2">
                                        <span className="text-red-400">8.</span> "Under Construction" Banner
                                    </p>
                                    <p className="text-sm text-white/60">Screams "We started this 2 years ago and gave up"</p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Wins */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6">
                                5 Quick Wins (Fix These Today)
                            </h2>

                            <div className="space-y-4">
                                <div className="bg-white/5 border-l-4 border-safety-orange p-6">
                                    <h3 className="font-black text-lg mb-2">1. Make Your Phone Number Massive</h3>
                                    <p className="text-sm text-white/80 mb-2">Top of every page. Orange. Clickable on mobile. Size 18-20px minimum.</p>
                                    <p className="text-xs text-white/40 italic">Takes 5 minutes. Instantly increases calls.</p>
                                </div>

                                <div className="bg-white/5 border-l-4 border-safety-orange p-6">
                                    <h3 className="font-black text-lg mb-2">2. Add Your License to the Header</h3>
                                    <p className="text-sm text-white/80 mb-2">Put it where everyone sees it: "Licensed EC 123456 | Fully Insured"</p>
                                    <p className="text-xs text-white/40 italic">Instant credibility boost.</p>
                                </div>

                                <div className="bg-white/5 border-l-4 border-safety-orange p-6">
                                    <h3 className="font-black text-lg mb-2">3. Replace Stock Photos with Real Ones</h3>
                                    <p className="text-sm text-white/80 mb-2">Even quick iPhone photos of your ute, team, and projects beat generic stock images.</p>
                                    <p className="text-xs text-white/40 italic">Grab 10 photos this week.</p>
                                </div>

                                <div className="bg-white/5 border-l-4 border-safety-orange p-6">
                                    <h3 className="font-black text-lg mb-2">4. Embed Google Reviews</h3>
                                    <p className="text-sm text-white/80 mb-2">Use a widget (Google Reviews Badge, Elfsight, etc.) to show your 5-star reviews on the homepage.</p>
                                    <p className="text-xs text-white/40 italic">Social proof = instant trust.</p>
                                </div>

                                <div className="bg-white/5 border-l-4 border-safety-orange p-6">
                                    <h3 className="font-black text-lg mb-2">5. Add Pricing Ranges</h3>
                                    <p className="text-sm text-white/80 mb-2">"Safety switch: From $350" beats "Contact for pricing." Transparency builds trust.</p>
                                    <p className="text-xs text-white/40 italic">Filters tire-kickers, attracts serious buyers.</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Line */}
                        <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                            <h2 className="text-2xl font-black uppercase italic mb-4">The Bottom Line</h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                "Professional" doesn't mean expensive. It means <strong className="text-safety-orange">trustworthy at a glance</strong>.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                Your license visible. Real photos. Google reviews embedded. Clear pricing. Mobile-friendly.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                Get those five things right, and homeowners will trust you enough to call—even if your competitor's site has fancier animations.
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
                            Want a Site That <span className="text-safety-orange">Screams "Legit"?</span>
                        </h2>
                        <p className="text-xl text-white/70 font-bold mb-8 max-w-2xl mx-auto">
                            We build tradie websites with all the trust signals homeowners look for—license badges, real photos, embedded reviews, and mobile-friendly design.
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

export default ProfessionalTrustSignals;
