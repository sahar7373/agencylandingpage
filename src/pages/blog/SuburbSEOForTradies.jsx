import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, MapPin, Search, TrendingUp, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import Breadcrumbs from '../../components/Breadcrumbs';
import RelatedReads from '../../components/RelatedReads';

const relatedReads = [
    {
        href: '/resources/google-business-profile-setup',
        title: 'Google Business Profile Setup Guide',
        description: 'Back up your suburb pages with stronger map pack relevance and service-area signals.'
    },
    {
        href: '/resources/google-ads-vs-seo-tradies',
        title: 'Google Ads vs SEO for Tradies',
        description: 'Decide when local SEO should carry the load and when to supplement it with ads.'
    },
    {
        href: '/resources/aeo-for-tradies',
        title: 'AEO for Tradies',
        description: 'Location-specific content also helps AI tools understand where and who you serve.'
    }
];

const SuburbSEOForTradies = () => {
    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans">
            <Helmet>
                <title>How to Rank for 'Tradie + Your Suburb' Searches | Local SEO Guide for Australian Tradies</title>
                <meta name="description" content="Local SEO for Australian tradies: suburb-specific pages, Google Maps optimization, and content that matches what homeowners actually search for." />
                <meta name="keywords" content="local seo, suburb seo, tradie seo, plumber near me, electrician sydney, australian trades, google maps, local rankings" />
                <link rel="canonical" href="https://yourtradepartner.com.au/resources/suburb-seo-for-tradies" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="How to Rank for 'Tradie + Your Suburb' Searches" />
                <meta property="og:description" content="Complete local SEO guide for Australian trade businesses—rank for suburb-specific searches." />
                <meta property="og:type" content="article" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": "How to Rank for 'Tradie + Your Suburb' Searches | Local SEO Guide for Australian Tradies",
                    "description": "Local SEO for Australian tradies: suburb-specific pages, Google Maps optimization, and content that matches what homeowners actually search for.",
                    "url": "https://yourtradepartner.com.au/resources/suburb-seo-for-tradies",
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
                        currentLabel="Suburb SEO For Tradies"
                        currentPath="/resources/suburb-seo-for-tradies"
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
                            How to Rank for <span className="text-safety-orange">'Tradie + Your Suburb'</span>
                        </h1>
                        <div className="flex items-center gap-6 text-white/40 text-sm font-bold uppercase tracking-wider mb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>8 min read</span>
                            </div>
                            <div>March 2026</div>
                        </div>
                        <p className="text-xl md:text-2xl text-white/80 font-bold leading-relaxed">
                            Local SEO for Australian tradies: suburb-specific pages, Google Maps optimization, and content that matches what homeowners actually search for.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* Why Suburb SEO Matters */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Why "Plumber Sydney" Isn't Enough
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Homeowners in Parramatta don't search "plumber Sydney." They search <strong className="text-safety-orange">"plumber Parramatta"</strong> or <strong className="text-safety-orange">"plumber near me"</strong> (which uses their GPS location).
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                If your website only says "We service Sydney," Google doesn't know if you service Parramatta specifically—so you won't rank.
                            </p>

                            <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                                <h3 className="font-black text-lg mb-4">How People Actually Search:</h3>
                                <div className="grid md:grid-cols-2 gap-6 text-sm">
                                    <div>
                                        <p className="font-black text-white/60 mb-2">❌ Generic (Low Intent):</p>
                                        <ul className="space-y-1 text-white/40">
                                            <li>• "plumber sydney"</li>
                                            <li>• "electrician nsw"</li>
                                            <li>• "best plumber"</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-black text-safety-orange mb-2">✓ Suburb-Specific (High Intent):</p>
                                        <ul className="space-y-1 text-white/80">
                                            <li>• "plumber parramatta"</li>
                                            <li>• "electrician blacktown"</li>
                                            <li>• "emergency plumber penrith"</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <p className="text-lg text-white/80 font-bold leading-relaxed mt-6">
                                <strong className="text-safety-orange">The goal:</strong> Rank for every suburb you actually service—not just the city name.
                            </p>
                        </div>

                        {/* The Strategy */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-8">
                                The 3-Layer Local SEO Strategy
                            </h2>

                            <div className="space-y-8">
                                {/* Layer 1 */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl font-black text-white">1</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-2">Google Business Profile (Base Layer)</h3>
                                            <p className="text-white/60 text-sm font-bold uppercase tracking-wider">This is table stakes—everyone needs this</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>Your Google Business Profile (GBP) lets you list up to <strong className="text-safety-orange">20 service areas</strong>. Use all 20 slots.</p>

                                        <div className="bg-black/40 border-l-4 border-safety-orange p-4">
                                            <p className="font-black mb-2">Example (Plumber in Western Sydney):</p>
                                            <div className="grid md:grid-cols-2 gap-2 text-sm">
                                                <ul className="space-y-1">
                                                    <li>✓ Parramatta, NSW</li>
                                                    <li>✓ Blacktown, NSW</li>
                                                    <li>✓ Penrith, NSW</li>
                                                    <li>✓ Castle Hill, NSW</li>
                                                    <li>✓ Ryde, NSW</li>
                                                    <li>✓ Bankstown, NSW</li>
                                                    <li>✓ Liverpool, NSW</li>
                                                    <li>✓ Campbelltown, NSW</li>
                                                    <li>✓ Fairfield, NSW</li>
                                                    <li>✓ Auburn, NSW</li>
                                                </ul>
                                                <ul className="space-y-1">
                                                    <li>✓ Strathfield, NSW</li>
                                                    <li>✓ Granville, NSW</li>
                                                    <li>✓ Merrylands, NSW</li>
                                                    <li>✓ Wentworthville, NSW</li>
                                                    <li>✓ Homebush, NSW</li>
                                                    <li>✓ Ashfield, NSW</li>
                                                    <li>✓ Burwood, NSW</li>
                                                    <li>✓ Concord, NSW</li>
                                                    <li>✓ Drummoyne, NSW</li>
                                                    <li>✓ Five Dock, NSW</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <p className="text-sm">
                                            <strong className="text-safety-orange">Pro tip:</strong> List suburbs in order of priority—your top 5-10 suburbs first, then secondary areas.
                                        </p>
                                    </div>
                                </div>

                                {/* Layer 2 */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl font-black text-white">2</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-2">Homepage Suburb List (Visual Layer)</h3>
                                            <p className="text-white/60 text-sm font-bold uppercase tracking-wider">Make it obvious to humans AND Google</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>Your homepage should have a section titled <strong>"Service Areas"</strong> or <strong>"Suburbs We Cover"</strong> that lists 15-20 suburbs explicitly.</p>

                                        <div className="bg-black/40 p-6">
                                            <p className="font-black mb-3">Example Section (Electrician):</p>
                                            <div className="text-sm">
                                                <p className="mb-2 text-white/60 italic">&lt;h2&gt;Licensed Electrician Serving Western Sydney&lt;/h2&gt;</p>
                                                <p className="mb-4">We provide emergency electrical repairs, switchboard upgrades, and safety switch installation across:</p>
                                                <p className="text-white/80">
                                                    Parramatta • Blacktown • Penrith • Castle Hill • Ryde • Bankstown • Liverpool • Campbelltown • Fairfield • Auburn • Strathfield • Granville • Merrylands • Homebush • Ashfield
                                                </p>
                                            </div>
                                        </div>

                                        <p className="text-sm">
                                            <strong className="text-safety-orange">Why this works:</strong> Google's algorithm sees suburb names in your content. Homeowners see you explicitly service their area.
                                        </p>
                                    </div>
                                </div>

                                {/* Layer 3 */}
                                <div className="bg-white/5 border border-white/10 p-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-safety-orange flex items-center justify-center flex-shrink-0">
                                            <span className="text-xl font-black text-white">3</span>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black uppercase mb-2">Suburb-Specific Pages (Power Layer)</h3>
                                            <p className="text-white/60 text-sm font-bold uppercase tracking-wider">This is what separates you from competitors</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4 text-white/80 font-bold">
                                        <p>Create individual pages for your top 5-10 suburbs. Each page targets <strong className="text-safety-orange">"[trade] + [suburb]"</strong> searches.</p>

                                        <div className="bg-black/40 p-6">
                                            <p className="font-black mb-3">Page Structure Example:</p>
                                            <div className="text-sm space-y-3">
                                                <div>
                                                    <p className="text-white/40 mb-1">URL:</p>
                                                    <p className="text-safety-orange">yoursite.com.au/plumber-parramatta</p>
                                                </div>
                                                <div>
                                                    <p className="text-white/40 mb-1">H1 Title:</p>
                                                    <p>"Licensed Plumber in Parramatta | Emergency Plumbing Services"</p>
                                                </div>
                                                <div>
                                                    <p className="text-white/40 mb-1">Content Includes:</p>
                                                    <ul className="space-y-1 ml-4">
                                                        <li>• Intro: "We're a licensed plumbing service based in Western Sydney, servicing Parramatta and surrounding suburbs..."</li>
                                                        <li>• Services offered in Parramatta (blocked drains, hot water, etc.)</li>
                                                        <li>• Mention local landmarks: "We've serviced homes near Parramatta Park, Westfield Parramatta, and the Parramatta CBD for over 15 years"</li>
                                                        <li>• Customer testimonials from Parramatta residents</li>
                                                        <li>• Photos of jobs in Parramatta (if you have them)</li>
                                                        <li>• FAQs specific to Parramatta (e.g., "Do you offer same-day service in Parramatta?")</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-safety-orange/10 border border-safety-orange/20 p-4">
                                            <p className="font-black mb-2">⚠️ Don't Do This (Google Penalties):</p>
                                            <p className="text-sm text-white/80">
                                                Don't create 20 identical pages with only the suburb name swapped. Google calls this "doorway pages" and will penalize you. Each page needs unique, useful content.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Which Suburbs to Target */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Which Suburbs to Target First
                            </h2>

                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                You can't create pages for 50 suburbs. Here's how to prioritize:
                            </p>

                            <div className="space-y-6">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-3 flex items-center gap-2">
                                        <span className="text-safety-orange">1.</span> Highest Job Volume
                                    </h3>
                                    <p className="text-white/80 font-bold mb-2">Which suburbs do you currently get the most calls from?</p>
                                    <p className="text-sm text-white/60">If 40% of your jobs come from Parramatta, that's your #1 priority suburb page.</p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-3 flex items-center gap-2">
                                        <span className="text-safety-orange">2.</span> Highest Population + Income
                                    </h3>
                                    <p className="text-white/80 font-bold mb-2">Target suburbs with more homeowners and higher household income.</p>
                                    <p className="text-sm text-white/60">Mosman (high income) vs Mount Druitt (lower income) = different job values. Prioritize high-value suburbs.</p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-3 flex items-center gap-2">
                                        <span className="text-safety-orange">3.</span> Low Competition
                                    </h3>
                                    <p className="text-white/80 font-bold mb-2">Search "[your trade] + [suburb]" and check the results.</p>
                                    <p className="text-sm text-white/60">If only 2-3 tradies have suburb-specific pages, it's easier to rank. If 20 competitors have them, it'll take longer.</p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-3 flex items-center gap-2">
                                        <span className="text-safety-orange">4.</span> Close to Your Base
                                    </h3>
                                    <p className="text-white/80 font-bold mb-2">Suburbs within 15-20 minutes = less travel time, higher margins.</p>
                                    <p className="text-sm text-white/60">Prioritize nearby suburbs first. You can expand outward later.</p>
                                </div>
                            </div>

                            <div className="bg-black/40 border-l-4 border-safety-orange p-6 mt-6">
                                <p className="font-black mb-2 text-safety-orange">Recommended Approach:</p>
                                <p className="text-sm text-white/80">
                                    Start with 5 suburb pages (your top 5). Once those rank, add 5 more. Build systematically—don't try to launch 20 pages at once.
                                </p>
                            </div>
                        </div>

                        {/* Content That Actually Ranks */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6">
                                What to Write on Suburb Pages
                            </h2>

                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                The content can't just be "We service [suburb]." Google wants unique, useful information. Here's a proven template:
                            </p>

                            <div className="bg-white/5 border border-white/10 p-8">
                                <h3 className="text-xl font-black uppercase mb-6 text-safety-orange">
                                    Suburb Page Template (800-1200 words)
                                </h3>

                                <div className="space-y-6 text-sm">
                                    <div>
                                        <p className="font-black mb-2">1. Hero Section (H1)</p>
                                        <p className="text-white/70 italic">"Licensed [Trade] in [Suburb] | [Service 1], [Service 2], [Service 3]"</p>
                                        <p className="text-white/60 mt-1">Example: "Licensed Electrician in Blacktown | Safety Switches, Switchboard Upgrades, Emergency Callouts"</p>
                                    </div>

                                    <div>
                                        <p className="font-black mb-2">2. Intro Paragraph (150-200 words)</p>
                                        <p className="text-white/60">Mention:</p>
                                        <ul className="space-y-1 text-white/60 ml-4 mt-2">
                                            <li>• How long you've been servicing the suburb</li>
                                            <li>• Your license number & insurance</li>
                                            <li>• Typical response time for the area</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-black mb-2">3. Services Section (H2)</p>
                                        <p className="text-white/70 italic">"[Trade] Services in [Suburb]"</p>
                                        <p className="text-white/60 mt-1">List your services with 2-3 sentences each. Use suburb name naturally: "Our [service] in [suburb] includes..."</p>
                                    </div>

                                    <div>
                                        <p className="font-black mb-2">4. Local Context (H2)</p>
                                        <p className="text-white/70 italic">"Serving [Suburb] Homeowners Since [Year]"</p>
                                        <p className="text-white/60 mt-1">Mention local landmarks, neighborhoods, or common property types:</p>
                                        <ul className="space-y-1 text-white/60 ml-4 mt-2">
                                            <li>• "We regularly service homes near Blacktown Station, Westpoint Shopping Centre, and the Blacktown Hospital precinct"</li>
                                            <li>• "Many Blacktown homes were built in the 1960s-70s and need switchboard upgrades for modern safety standards"</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-black mb-2">5. Testimonials (if available)</p>
                                        <p className="text-white/60">Include 2-3 customer reviews from residents in that suburb. Even just "John M., Blacktown" adds local relevance.</p>
                                    </div>

                                    <div>
                                        <p className="font-black mb-2">6. FAQs (H2)</p>
                                        <p className="text-white/70 italic">"Common Questions from [Suburb] Customers"</p>
                                        <ul className="space-y-1 text-white/60 ml-4 mt-2">
                                            <li>• "Do you offer same-day service in Blacktown?"</li>
                                            <li>• "What's your callout fee for Blacktown residents?"</li>
                                            <li>• "Are you licensed to work in Blacktown Council area?"</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <p className="font-black mb-2">7. CTA</p>
                                        <p className="text-white/60">Clear call-to-action: "Call now for [service] in [suburb]" with clickable phone number.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technical SEO Checklist */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                Technical SEO Checklist
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-lg font-black uppercase mb-4 text-safety-orange">On-Page SEO</h3>
                                    <ul className="space-y-2 text-sm text-white/80 font-bold">
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>URL slug: /plumber-parramatta (not /services/plumbing/parramatta)</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>H1 tag includes suburb name + trade</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Meta title: "[Trade] [Suburb] | [Business Name]"</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Meta description mentions suburb 1-2 times</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Image file names: "plumber-parramatta-job.jpg"</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Image alt text includes suburb</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-lg font-black uppercase mb-4 text-safety-orange">Off-Page SEO</h3>
                                    <ul className="space-y-2 text-sm text-white/80 font-bold">
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Google Business Profile lists suburb in service areas</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Google reviews mention suburb name</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>NAP (Name, Address, Phone) consistent across web</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Citations in local directories (True Local, Yellow Pages, etc.)</span>
                                        </li>
                                        <li className="flex gap-2 items-start">
                                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span>Schema markup (LocalBusiness structured data)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="bg-black/40 border border-white/10 p-8">
                            <h2 className="text-2xl font-black uppercase italic mb-6 text-safety-orange">
                                How Long Does It Take to Rank?
                            </h2>

                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="text-2xl font-black text-safety-orange flex-shrink-0">2-4</div>
                                    <div>
                                        <p className="font-black mb-1">Weeks: Google Business Profile</p>
                                        <p className="text-sm text-white/70">Once verified, you'll start showing in "near me" map packs within 2-4 weeks (if optimized properly).</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="text-2xl font-black text-safety-orange flex-shrink-0">2-3</div>
                                    <div>
                                        <p className="font-black mb-1">Months: Suburb Pages (Low Competition)</p>
                                        <p className="text-sm text-white/70">If competitors aren't targeting the suburb, you can rank on page 1 in 8-12 weeks.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="text-2xl font-black text-safety-orange flex-shrink-0">4-6</div>
                                    <div>
                                        <p className="font-black mb-1">Months: Suburb Pages (High Competition)</p>
                                        <p className="text-sm text-white/70">In competitive suburbs (CBD areas, high-income suburbs), expect 4-6 months to crack page 1.</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-white/80 font-bold mt-6">
                                <strong className="text-safety-orange">Key point:</strong> Local SEO is a marathon, not a sprint. But once you rank, you stay ranked—and leads keep coming without ongoing ad spend.
                            </p>
                        </div>

                        {/* Bottom Line */}
                        <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                            <h2 className="text-2xl font-black uppercase italic mb-4">The Bottom Line</h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                Ranking for <strong className="text-safety-orange">"plumber [your suburb]"</strong> is 10x easier than ranking for "plumber Sydney."
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                Start with your Google Business Profile (list 20 service areas). Add a suburb list to your homepage. Then build 5 suburb-specific pages for your highest-value areas.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                Do this, and you'll dominate local searches—while your competitors still say "We service Sydney."
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
                            Want Suburb Pages <span className="text-safety-orange">Built For You?</span>
                        </h2>
                        <p className="text-xl text-white/70 font-bold mb-8 max-w-2xl mx-auto">
                            We build suburb-specific pages that rank—optimized for Australian trade businesses, with proper local SEO from day one.
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

export default SuburbSEOForTradies;
