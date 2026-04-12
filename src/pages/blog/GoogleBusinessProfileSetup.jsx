import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MapPin, Star, CheckCircle2, AlertTriangle, Clock, Search } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedReads from '../../components/RelatedReads';

const relatedReads = [
    {
        href: '/resources/suburb-seo-for-tradies',
        title: 'How to Rank for Tradie + Suburb Searches',
        description: 'Turn your service areas into pages and signals Google can actually rank.'
    },
    {
        href: '/resources/why-tradie-websites-dont-get-calls',
        title: "Why Most Tradie Websites Don't Get Calls",
        description: 'Fix the trust and conversion issues that waste the traffic your profile earns.'
    },
    {
        href: '/resources/google-ads-vs-seo-tradies',
        title: 'Google Ads vs SEO for Tradies',
        description: 'See how local SEO and paid traffic work together when you need enquiries now.'
    }
];

const GoogleBusinessProfileSetup = () => {
    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans">
            <Helmet>
                <title>Google My Business Setup Guide for Australian Tradies | Complete 2026 Tutorial</title>
                <meta name="description" content="Step-by-step guide to setting up and optimizing your Google Business Profile. Show up when customers search 'plumber near me' or 'electrician [your suburb]' in Australia." />
                <meta name="keywords" content="google business profile, google my business, tradie marketing, local SEO, Australian tradies, near me searches, google maps, local business" />
                <link rel="canonical" href="https://yourtradepartner.com.au/resources/google-business-profile-setup" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Google My Business Setup Guide for Tradies" />
                <meta property="og:description" content="Complete guide to setting up Google Business Profile for Australian trade businesses." />
                <meta property="og:type" content="article" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "HowTo",
                    "name": "How to Set Up Google Business Profile for Australian Tradies",
                    "description": "Step-by-step guide to setting up and optimizing your Google Business Profile so Australian customers can find you in local searches and the Google Maps pack.",
                    "totalTime": "PT30M",
                    "estimatedCost": { "@type": "MonetaryAmount", "currency": "AUD", "value": "0" },
                    "step": [
                        {
                            "@type": "HowToStep",
                            "position": 1,
                            "name": "Create Your Profile",
                            "text": "Go to google.com/business and sign in with your business Gmail account. Enter your exact business name, select your trade category (e.g. Plumber, Electrician), and add your service area. If you work from a ute, select 'I deliver goods and services to my customers' — do not use your home address."
                        },
                        {
                            "@type": "HowToStep",
                            "position": 2,
                            "name": "Verify Your Business",
                            "text": "Google will send a postcard with a 5-digit verification code to your business address, or offer instant phone verification for some categories. Enter the code in your dashboard once received. Your listing goes live within 24 hours — fill out the rest of your profile while you wait."
                        },
                        {
                            "@type": "HowToStep",
                            "position": 3,
                            "name": "Set Your Service Areas",
                            "text": "Add 10–20 individual suburbs you actually service (e.g. Parramatta NSW, Blacktown NSW, Penrith NSW). Do not use broad areas like 'Greater Sydney' — Google ignores them. Google checks your listed suburbs against customer searches, so if a suburb isn't listed you won't appear for that area."
                        },
                        {
                            "@type": "HowToStep",
                            "position": 4,
                            "name": "Add Services and Pricing",
                            "text": "List specific services rather than generic labels (e.g. 'Blocked drain clearing' and 'Hot water system installation' instead of just 'Plumbing Services'). Add pricing ranges where possible — even 'From $150' helps your listing stand out and filters unqualified enquiries."
                        },
                        {
                            "@type": "HowToStep",
                            "position": 5,
                            "name": "Upload Real Photos",
                            "text": "Upload at least 20 real photos: your ute with signage, your team on site, completed before/after projects, certificates and licences. Avoid stock photos — Google penalises generic imagery. Aim for 100+ photos over time; listings with 100+ photos receive 520% more calls than those with none."
                        },
                        {
                            "@type": "HowToStep",
                            "position": 6,
                            "name": "Write a Killer Business Description",
                            "text": "Use all 750 characters. Include your trade, the suburbs you service, your licence number, years of experience, key services, and trust signals like 'fully insured', 'upfront pricing', and 'workmanship guarantee'. Incorporate keywords customers actually search, such as your suburbs and licence type."
                        },
                        {
                            "@type": "HowToStep",
                            "position": 7,
                            "name": "Get Your First 10 Reviews",
                            "text": "Create a short Google review link and text it to happy customers the same day you finish the job. Reviews drop off sharply after 24 hours. Never offer incentives for reviews — it violates Google's Terms of Service and can get your profile suspended. Aim for 10 reviews in your first month."
                        }
                    ]
                })}</script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": "Google My Business Setup Guide for Australian Tradies | Complete 2026 Tutorial",
                    "description": "Step-by-step guide to setting up and optimizing your Google Business Profile. Show up when customers search 'plumber near me' or 'electrician [your suburb]' in Australia.",
                    "url": "https://yourtradepartner.com.au/resources/google-business-profile-setup",
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
                        currentLabel="Google Business Profile Setup"
                        currentPath="/resources/google-business-profile-setup"
                        className="mt-5"
                    />
                </div>
            </header>

            {/* Hero */}
            <section className="py-12 md:py-16 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <Badge className="bg-safety-orange/10 text-safety-orange mb-6 hover:bg-safety-orange/10 pointer-events-none uppercase tracking-widest text-xs">
                            Local SEO
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-tight">
                            Google My Business Setup Guide <span className="text-safety-orange">For Tradies</span>
                        </h1>
                        <div className="flex items-center gap-6 text-white/40 text-sm font-bold uppercase tracking-wider mb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>10 min read</span>
                            </div>
                            <div>March 2026</div>
                        </div>
                        <p className="text-xl md:text-2xl text-white/80 font-bold leading-relaxed">
                            Step-by-step guide to setting up and optimizing your Google Business Profile. Show up when Australian customers search "plumber near me" or "electrician [your suburb]."
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* Why It Matters */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Why This Actually Matters
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                When someone in Parramatta searches "emergency plumber near me," Google shows 3 businesses in the map pack at the top—before any website links. If your Google Business Profile isn't set up properly, you're invisible.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 mb-6">
                                <div className="bg-black/40 border border-white/10 p-6 text-center">
                                    <div className="text-4xl font-black text-safety-orange mb-2">46%</div>
                                    <p className="text-sm text-white/60 font-bold uppercase tracking-wider">Of all Google searches are local</p>
                                </div>
                                <div className="bg-black/40 border border-white/10 p-6 text-center">
                                    <div className="text-4xl font-black text-safety-orange mb-2">76%</div>
                                    <p className="text-sm text-white/60 font-bold uppercase tracking-wider">Visit within 24 hours of search</p>
                                </div>
                                <div className="bg-black/40 border border-white/10 p-6 text-center">
                                    <div className="text-4xl font-black text-safety-orange mb-2">28%</div>
                                    <p className="text-sm text-white/60 font-bold uppercase tracking-wider">Of local searches result in purchase</p>
                                </div>
                            </div>

                            <div className="bg-white/5 border-l-4 border-safety-orange p-6">
                                <p className="text-white/80 font-bold text-lg">
                                    Translation: <strong className="text-safety-orange">If you're not in the map pack, you don't exist.</strong>
                                </p>
                            </div>
                        </div>

                        {/* Step-by-Step Setup */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-8 text-center">
                                Complete Setup Guide (30 Minutes)
                            </h2>

                            <div className="space-y-8">
                                {/* Step 1 */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl font-black text-white">1</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-2">Create Your Profile</h3>
                                            <p className="text-white/60 text-sm font-bold uppercase tracking-wider">5 minutes</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>1. Go to <strong className="text-safety-orange">google.com/business</strong></p>
                                        <p>2. Click "Manage now" and sign in with your business Gmail account (not personal)</p>
                                        <p>3. Enter your exact business name: <strong>"[Your Business Name] Plumbing"</strong> not "[Your Name]"</p>
                                        <p>4. Select your business category:</p>
                                        <div className="bg-black/40 border-l-4 border-safety-orange p-4 ml-6">
                                            <ul className="space-y-2 text-sm">
                                                <li>• Plumber ✓</li>
                                                <li>• Electrician ✓</li>
                                                <li>• HVAC contractor ✓</li>
                                                <li>• Roofing contractor ✓</li>
                                                <li>• General contractor (NOT "Handyman") ✓</li>
                                            </ul>
                                        </div>
                                        <p>5. Add your service area (more on this in Step 3)</p>
                                    </div>

                                    <div className="bg-safety-orange/10 border border-safety-orange/20 p-4 mt-6">
                                        <div className="flex gap-3">
                                            <AlertTriangle className="w-5 h-5 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-black mb-2">⚠️ Common Mistake:</p>
                                                <p className="text-sm text-white/80 font-bold">
                                                    Don't use your home address if you work from a ute. Select "I deliver goods and services to my customers" instead.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl font-black text-white">2</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-2">Verify Your Business</h3>
                                            <p className="text-white/60 text-sm font-bold uppercase tracking-wider">2-5 business days</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>Google will send a postcard with a 5-digit code to your business address (or instant verification via phone for some categories).</p>

                                        <div className="bg-black/40 p-4">
                                            <p className="font-black mb-2">Options:</p>
                                            <ul className="space-y-2 text-sm">
                                                <li>• <strong>Postcard verification</strong> (most common, takes 5-7 days)</li>
                                                <li>• <strong>Phone verification</strong> (instant if available)</li>
                                                <li>• <strong>Email verification</strong> (rare for new businesses)</li>
                                            </ul>
                                        </div>

                                        <p>Once you receive the code, enter it in your Google Business Profile dashboard. Your listing will go live within 24 hours.</p>
                                    </div>

                                    <div className="bg-safety-orange/10 border border-safety-orange/20 p-4 mt-6">
                                        <div className="flex gap-3">
                                            <AlertTriangle className="w-5 h-5 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-black mb-2">⚠️ Don't Wait to Optimize:</p>
                                                <p className="text-sm text-white/80 font-bold">
                                                    You can fill out everything else (photos, hours, services) while waiting for verification. Do it now—don't leave it half-done.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl font-black text-white">3</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-2">Set Your Service Areas (CRITICAL)</h3>
                                            <p className="text-white/60 text-sm font-bold uppercase tracking-wider">10 minutes</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>This is where most tradies lose 50% of their potential leads. Here's how to do it right:</p>

                                        <div className="bg-black/40 p-6">
                                            <p className="font-black mb-3 text-lg text-safety-orange">✓ The Right Way:</p>
                                            <p className="mb-3">Add individual suburbs you actually service:</p>
                                            <ul className="space-y-1 text-sm ml-6">
                                                <li>• Parramatta, NSW</li>
                                                <li>• Blacktown, NSW</li>
                                                <li>• Penrith, NSW</li>
                                                <li>• Castle Hill, NSW</li>
                                                <li>• Ryde, NSW</li>
                                            </ul>
                                            <p className="text-xs text-white/60 mt-3">Add 10-20 suburbs minimum. Google allows up to 20 service areas.</p>
                                        </div>

                                        <div className="bg-black/40 border-l-4 border-red-500 p-6">
                                            <p className="font-black mb-3 text-lg text-red-400">✕ The Wrong Way:</p>
                                            <ul className="space-y-2 text-sm">
                                                <li className="flex gap-2">
                                                    <span className="text-red-400">✕</span>
                                                    <span>"Greater Sydney" (too vague, Google ignores it)</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-red-400">✕</span>
                                                    <span>"All of NSW" (no one searches this way)</span>
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-red-400">✕</span>
                                                    <span>Only 3-4 suburbs (you're leaving leads on the table)</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <p className="text-lg">
                                            <strong className="text-safety-orange">Why this matters:</strong> When someone in Blacktown searches "plumber near me," Google checks if "Blacktown" is in your service areas. If it's not listed, you won't show up—even if you're 10 minutes away.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl font-black text-white">4</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-2">Add Services & Pricing</h3>
                                            <p className="text-white/60 text-sm font-bold uppercase tracking-wider">10 minutes</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>Don't just list "Plumbing Services." Be specific. Google matches your services to search queries.</p>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-black/40 p-4">
                                                <p className="font-black mb-3 text-safety-orange">Example: Plumber</p>
                                                <ul className="space-y-2 text-sm">
                                                    <li>• Emergency plumbing repairs</li>
                                                    <li>• Hot water system installation</li>
                                                    <li>• Blocked drain clearing</li>
                                                    <li>• Leaking tap repairs</li>
                                                    <li>• Toilet repairs & installation</li>
                                                    <li>• Gas fitting & repairs</li>
                                                </ul>
                                            </div>

                                            <div className="bg-black/40 p-4">
                                                <p className="font-black mb-3 text-safety-orange">Example: Electrician</p>
                                                <ul className="space-y-2 text-sm">
                                                    <li>• Safety switch installation</li>
                                                    <li>• Switchboard upgrades</li>
                                                    <li>• Power point installation</li>
                                                    <li>• Lighting installation</li>
                                                    <li>• Smoke alarm installation</li>
                                                    <li>• Emergency electrical repairs</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-safety-orange/10 border border-safety-orange/20 p-4">
                                            <p className="font-black mb-2">💡 Pro Tip: Add Pricing Ranges</p>
                                            <p className="text-sm text-white/80">
                                                Google lets you add "From $X" pricing. Even rough ranges ("From $150" or "$200-$400") make your listing stand out and filter tire-kickers.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 5 */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl font-black text-white">5</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-2">Upload Real Photos</h3>
                                            <p className="text-white/60 text-sm font-bold uppercase tracking-wider">15 minutes</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>Listings with 100+ photos get 520% more calls than those with none. You don't need professional photography—iPhone photos work fine.</p>

                                        <div className="bg-black/40 p-6">
                                            <p className="font-black mb-3 text-lg">What to Upload (Minimum 20 Photos):</p>
                                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <p className="font-black text-white mb-2">✓ Must-Have:</p>
                                                    <ul className="space-y-1">
                                                        <li>• Your ute with signage (exterior)</li>
                                                        <li>• Your team in uniform on-site</li>
                                                        <li>• Completed projects (before/after)</li>
                                                        <li>• Tools & equipment</li>
                                                        <li>• Certificates & licenses (photo of physical docs)</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="font-black text-white mb-2">✓ Bonus:</p>
                                                    <ul className="space-y-1">
                                                        <li>• Work-in-progress shots</li>
                                                        <li>• Safety equipment in use</li>
                                                        <li>• Customer interactions (with permission)</li>
                                                        <li>• Office/warehouse (if you have one)</li>
                                                        <li>• Awards or industry memberships</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-safety-orange/10 border border-safety-orange/20 p-4">
                                            <div className="flex gap-3">
                                                <AlertTriangle className="w-5 h-5 text-safety-orange flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-black mb-2">⚠️ Avoid Stock Photos:</p>
                                                    <p className="text-sm text-white/80">
                                                        Google penalizes profiles with generic stock imagery. Real (even ugly) iPhone photos beat polished stock every time.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 6 */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl font-black text-white">6</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-2">Write a Killer Description</h3>
                                            <p className="text-white/60 text-sm font-bold uppercase tracking-wider">5 minutes</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>You get 750 characters. Use them. Include:</p>

                                        <div className="bg-black/40 p-6">
                                            <p className="font-black mb-3 text-safety-orange">Template (Customize This):</p>
                                            <div className="text-sm text-white/70 italic leading-relaxed">
                                                <p className="mb-3">
                                                    "Licensed [Trade] serving [Suburbs]. [X] years experience. We specialize in [Service 1], [Service 2], and [Service 3].
                                                </p>
                                                <p className="mb-3">
                                                    ✓ Fully licensed & insured ([License #]) <br />
                                                    ✓ Emergency callouts available <br />
                                                    ✓ Upfront pricing—no hidden fees <br />
                                                    ✓ [Warranty period] workmanship guarantee
                                                </p>
                                                <p>
                                                    Family-owned and operated. [X] 5-star Google reviews from local homeowners. Call now for a free quote."
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-sm">
                                            <strong>Keywords to include:</strong> Your suburbs, your license type (e.g., "VBA licensed plumber"), "emergency," "24/7" (if true), "free quote," "upfront pricing."
                                        </p>
                                    </div>
                                </div>

                                {/* Step 7 */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl font-black text-white">7</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-2">Get Your First 10 Reviews</h3>
                                            <p className="text-white/60 text-sm font-bold uppercase tracking-wider">Ongoing (start immediately)</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>Listings with 5+ reviews get 70% more clicks. Here's how to get them fast:</p>

                                        <div className="space-y-3">
                                            <div className="bg-black/40 p-4">
                                                <p className="font-black mb-2">1. Send a Review Link (Not a Request)</p>
                                                <p className="text-sm">Google lets you create a short review link (e.g., g.page/yourname/review). Text it to happy customers right after finishing the job:</p>
                                                <div className="bg-white/5 border-l-4 border-safety-orange p-3 mt-2 text-sm italic">
                                                    "Thanks for choosing us! If you're happy with the work, we'd love a quick review: [link]"
                                                </div>
                                            </div>

                                            <div className="bg-black/40 p-4">
                                                <p className="font-black mb-2">2. Make It Easy</p>
                                                <p className="text-sm">Most customers won't write a review if it's hard. The link should go straight to the review form—not your profile page where they have to hunt for the button.</p>
                                            </div>

                                            <div className="bg-black/40 p-4">
                                                <p className="font-black mb-2">3. Ask Within 24 Hours</p>
                                                <p className="text-sm">Strike while the iron's hot. Customers who wait 3+ days rarely follow through. Text the link same-day or next morning.</p>
                                            </div>
                                        </div>

                                        <div className="bg-safety-orange/10 border border-safety-orange/20 p-4">
                                            <p className="font-black mb-2">⚠️ Never Offer Incentives</p>
                                            <p className="text-sm text-white/80">
                                                "Leave a review and get 10% off your next service" violates Google's TOS. Your profile can get suspended. Just ask—most happy customers will do it.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ongoing Optimization */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Weekly Maintenance (15 Minutes)
                            </h2>

                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-black text-lg mb-1">Post Updates (Google Posts)</h3>
                                        <p className="text-white/80 font-bold">Share recent jobs, seasonal tips, or promotions. Posts appear in your profile and boost rankings.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-black text-lg mb-1">Respond to ALL Reviews</h3>
                                        <p className="text-white/80 font-bold">Even 5-star ones. Thank them by name, mention the specific job. Shows you're engaged.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-black text-lg mb-1">Add Fresh Photos Weekly</h3>
                                        <p className="text-white/80 font-bold">Google prioritizes active profiles. Upload 2-3 job photos every week, even quick iPhone shots.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-safety-orange flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-black text-lg mb-1">Answer Questions</h3>
                                        <p className="text-white/80 font-bold">Customers can ask questions on your profile. Respond within 24 hours—or pre-load FAQs yourself.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Common Mistakes */}
                        <div className="bg-black/40 border border-white/10 p-8">
                            <h2 className="text-2xl font-black uppercase italic mb-6 text-safety-orange">7 Mistakes That Kill Your Rankings</h2>

                            <div className="space-y-3">
                                <div className="flex gap-3 items-start">
                                    <span className="text-red-400 flex-shrink-0">✕</span>
                                    <p className="text-white/80 font-bold">Incomplete profile (missing photos, services, or hours)</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="text-red-400 flex-shrink-0">✕</span>
                                    <p className="text-white/80 font-bold">Wrong business category (don't pick "Handyman" if you're a licensed electrician)</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="text-red-400 flex-shrink-0">✕</span>
                                    <p className="text-white/80 font-bold">Ignoring reviews (not responding makes you look unprofessional)</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="text-red-400 flex-shrink-0">✕</span>
                                    <p className="text-white/80 font-bold">Inconsistent NAP (Name, Address, Phone) across the web</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="text-red-400 flex-shrink-0">✕</span>
                                    <p className="text-white/80 font-bold">Not verifying your profile (unverified = invisible)</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="text-red-400 flex-shrink-0">✕</span>
                                    <p className="text-white/80 font-bold">Keyword stuffing in business name ("Best Plumber Sydney 24/7 Emergency"—Google will suspend you)</p>
                                </div>
                                <div className="flex gap-3 items-start">
                                    <span className="text-red-400 flex-shrink-0">✕</span>
                                    <p className="text-white/80 font-bold">Letting it go stale (no updates in months = rankings drop)</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Line */}
                        <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                            <h2 className="text-2xl font-black uppercase italic mb-4">The Bottom Line</h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                Your Google Business Profile is the #1 way Australian homeowners find tradies. It's more important than your website, Facebook page, or any advertising.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                Set it up properly once (30 minutes), maintain it weekly (15 minutes), and watch "near me" searches turn into booked jobs.
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
                            Want Us to Set Up <span className="text-safety-orange">Everything For You?</span>
                        </h2>
                        <p className="text-xl text-white/70 font-bold mb-8 max-w-2xl mx-auto">
                            We create and optimize Google Business Profiles for tradie businesses—done properly, no shortcuts, verified and ranking fast.
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

export default GoogleBusinessProfileSetup;
