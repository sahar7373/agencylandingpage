import React from 'react'
import ReactPixel from 'react-facebook-pixel'
import ReactGA from 'react-ga4'
import { Helmet } from 'react-helmet-async'
import {
    ArrowRight,
    ArrowDown,
    CheckCircle2,
    Phone,
    BarChart3,
    Zap,
    ShieldCheck,
    Clock,
    Hammer,
    Smartphone,
    Check,
    AlertCircle,
    AlertTriangle,
    XCircle,
    TrendingUp,
    Target,
    Users,
    ChevronDown,
    ChevronUp,
    Menu,
    X,
    Calculator,
    Play
} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
const ChatBot = React.lazy(() => import('../components/ChatBot'))
const CaseStudyModal = React.lazy(() => import('../components/CaseStudyModal'))
const VideoModal = React.lazy(() => import('../components/VideoModal'))
const MissedJobReviewModal = React.lazy(() => import('../components/MissedJobReviewModal'))
const PrivacyPolicyModal = React.lazy(() => import('../components/PrivacyPolicyModal'))
const TermsConditionsModal = React.lazy(() => import('../components/TermsConditionsModal'))

const CollapsibleDetail = ({ title, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div>
            <div
                className="flex items-center gap-2 cursor-pointer group/collapsible"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <ChevronDown className={`w-3 h-3 text-safety-orange transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} group-hover/collapsible:scale-125`} />
            </div>
            {isOpen && (
                <div className="animate-in fade-in slide-in-from-top-1 duration-200">
                    {children}
                </div>
            )}
        </div>
    );
};

function LandingPage() {
    const [openFaq, setOpenFaq] = React.useState(null)
    const [isReviewModalOpen, setIsReviewModalOpen] = React.useState(false)
    const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = React.useState(false)
    const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false)
    const [selectedProject, setSelectedProject] = React.useState(null)
    const [isPrivacyModalOpen, setIsPrivacyModalOpen] = React.useState(false)
    const [isTermsModalOpen, setIsTermsModalOpen] = React.useState(false)
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const [expandedPackages, setExpandedPackages] = React.useState([3]); // Default Package 3 open
    const [pricingVariesOpen, setPricingVariesOpen] = React.useState(false);

    // Contact Form State
    const [formStatus, setFormStatus] = React.useState('idle') // idle, submitting, success
    const [formData, setFormData] = React.useState({
        name: '',
        businessName: '',
        phone: '',
        email: '',
        trade: '',
        location: '',
        situation: '',
        situationOther: '',
        package: '',
        hasWebsite: '',
        goal: '',
        readyToInvest: '',
        websiteLink: '',
        referral: '',
        referralOther: '',
        message: ''
    })

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const togglePackage = (id) => {
        setExpandedPackages(prev =>
            prev.includes(id)
                ? prev.filter(p => p !== id)
                : [...prev, id]
        )
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target

        if (name === 'phone') {
            // Only allow numbers and max 10 digits
            const re = /^[0-9\b]+$/;
            if ((value === '' || re.test(value)) && value.length <= 10) {
                setFormData(prev => ({ ...prev, [name]: value }))
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormStatus('submitting')

        try {
            const sheetUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;
            if (sheetUrl) {
                console.log("Submitting to:", sheetUrl);
            } else {
                console.error("Missing VITE_GOOGLE_SHEET_URL");
            }

            const refinedPayload = {
                ...formData,
                phone: `'${formData.phone}`, // Force text format in Sheets to keep leading zero
                situation: formData.situation === 'Other' ? formData.situationOther : formData.situation,
                referral: formData.referral === 'Other' ? formData.referralOther : formData.referral,
                timestamp: new Date().toISOString()
            };

            await fetch(sheetUrl, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain",
                },
                body: JSON.stringify(refinedPayload),
            });

            setFormStatus('success')

            ReactPixel.track('Lead', {
                content_name: 'Consultation Form',
                currency: 'AUD'
            });
            ReactGA.event({
                category: "Lead",
                action: "Submit_Contact_Form",
                label: "New Enquiry"
            });

        } catch (error) {
            console.error("Form error:", error);
            setFormStatus('success');
        }
    }

    const faqs = [
        {
            question: "Will this actually make me more money?",
            answer: (
                <div className="space-y-4">
                    <p>Yes — but not overnight.</p>
                    <p>This is not a “boost a post and hope” service. We build the online structure that makes homeowners trust you enough to call, choose you, and pay properly.</p>
                    <div className="bg-white/5 p-4 border-l-2 border-safety-orange italic text-white/80">
                        <p>Think of it like this: You don’t pour a slab and expect a finished house the next day. This is the same — foundations first, results compound over time.</p>
                    </div>
                </div>
            )
        },
        {
            question: "How long before I see results?",
            answer: (
                <div className="space-y-4">
                    <p>Most trades start seeing better quality enquiries within the first 30–90 days once everything is live.</p>
                    <p>Real growth (rankings, reviews, authority, repeat leads) usually builds over 3–6 months.</p>
                    <p className="text-white/60 text-sm">If someone promises instant SEO or instant leads without structure — they’re selling paint, not concrete.</p>
                </div>
            )
        },
        {
            question: "Is this just a website?",
            answer: (
                <div className="space-y-4">
                    <p>No. A website alone is just a signboard.</p>
                    <p>We build a lead-producing system, which can include:</p>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                        <li>Professional trade-ready website</li>
                        <li>Google Business Profile optimisation</li>
                        <li>Voice agent & enquiry capture</li>
                        <li>Clear service positioning</li>
                        <li>Follow-up foundations</li>
                        <li>AI-assisted visibility across search and answers</li>
                    </ul>
                    <p className="font-bold text-safety-orange">The goal is simple: more calls from better clients.</p>
                </div>
            )
        },
        {
            question: "Do I need ads for this to work?",
            answer: (
                <div className="space-y-4">
                    <p>No — but ads can speed things up.</p>
                    <p>This system works with or without ads. Ads are optional and paid directly by you so you stay in control.</p>
                    <p>If you do run ads, we help set the structure so the money isn’t wasted.</p>
                </div>
            )
        },
        {
            question: "Why can’t I just use a cheap agency or website builder?",
            answer: (
                <div className="space-y-4">
                    <p>You can — and many trades do. The problem is:</p>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                        <li>Generic websites</li>
                        <li>No industry understanding</li>
                        <li>No trust signals</li>
                        <li>No system behind it</li>
                    </ul>
                    <p>That’s why they get price-shoppers, tyre-kickers, or no calls at all.</p>
                    <p className="font-bold">We design this specifically for trades, using real-world construction logic — not marketing fluff.</p>
                </div>
            )
        },
        {
            question: "What makes you different from other agencies?",
            answer: (
                <div className="space-y-4">
                    <p>We don’t sell “marketing”. We sell outcomes trades care about.</p>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                        <li>Built for construction businesses</li>
                        <li>Written in trade language</li>
                        <li>Designed to make you look established</li>
                        <li>Structured so leads actually convert</li>
                    </ul>
                    <p>Most agencies sell tools. We build the whole structure.</p>
                </div>
            )
        },
        {
            question: "Is this a long-term contract?",
            answer: (
                <div className="space-y-4">
                    <p>No lock-in tricks.</p>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                        <li>One-time setup fee</li>
                        <li>Clear yearly partnership fee for hosting & maintenance</li>
                        <li>Advanced AI or growth systems are scoped clearly</li>
                    </ul>
                    <p>You know exactly what you’re paying for — upfront.</p>
                </div>
            )
        },
        {
            question: "What do I need to provide?",
            answer: (
                <div className="space-y-4">
                    <p>Very little. We’ll ask for:</p>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                        <li>Business details</li>
                        <li>Services you offer</li>
                        <li>Service areas</li>
                        <li>Logo (if you have one)</li>
                    </ul>
                    <p>Everything else is handled for you.</p>
                </div>
            )
        },
        {
            question: "What if I already have a website or branding?",
            answer: (
                <div className="space-y-4">
                    <p>That’s fine. We can:</p>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                        <li>Improve what you have</li>
                        <li>Rebuild only what’s holding you back</li>
                        <li>Or layer AI systems on top</li>
                    </ul>
                    <p>You’re not forced into a one-size-fits-all package.</p>
                </div>
            )
        },
        {
            question: "Is this suitable for established trades or only new businesses?",
            answer: (
                <div className="space-y-4">
                    <p>Both.</p>
                    <p><span className="text-white font-bold">New trades</span> use this to look established fast.</p>
                    <p><span className="text-white font-bold">Established trades</span> use it to scale, systemise, and stop relying on word-of-mouth only.</p>
                    <p>Different starting point — same goal: more predictable growth.</p>
                </div>
            )
        },
        {
            question: "What if I’m not tech-savvy?",
            answer: (
                <div className="space-y-4">
                    <p>Perfect — you don’t need to be.</p>
                    <p>This is built for trades, not tech people. If it’s confusing, we’ve done something wrong.</p>
                </div>
            )
        },
        {
            question: "What happens after I submit the form?",
            answer: (
                <div className="space-y-4">
                    <p>No hard sell. We:</p>
                    <ul className="list-disc pl-5 space-y-1 text-white/80">
                        <li>Review your business</li>
                        <li>Identify gaps and opportunities</li>
                        <li>Recommend the best setup for your situation</li>
                    </ul>
                    <p>If it makes sense — we proceed. If not — we’ll tell you straight.</p>
                </div>
            )
        }
    ]

    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans selection:bg-safety-orange selection:text-white">
            <Helmet>
                <title>Your Trade Partner | Digital Growth Systems</title>
                <meta name="description" content="Your Trade Partner provides high-converting websites and automated enquiry systems for Australian trade businesses. Stop missing jobs and start scaling." />
                <link rel="canonical" href="https://yourtradepartner.com.au/" />
                <meta name="robots" content="index, follow" />

                {/* Open Graph / Social Media */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Your Trade Partner | Growth Systems for Tradies" />
                <meta property="og:description" content="Your Trade Partner helps Australian trades build a job-winning online presence. Professional websites and lead capture systems built for the industry." />
                <meta property="og:url" content="https://yourtradepartner.com.au/" />
                {/* Placeholder Image - replace with actual URL when live */}
                <meta property="og:image" content="https://yourtradepartner.com.au/og-image.jpg" />

                {/* Structured Data (JSON-LD) */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "ProfessionalService",
                            "name": "Your Trade Partner",
                            "alternateName": "YOURTRADEPARTNER.",
                            "description": "Digital growth systems, websites, and automation for Australian trade businesses. Specializing in clear-cut packages for plumbers, electricians, and builders.",
                            "url": "https://yourtradepartner.com.au",
                            "telephone": "0451044751",
                            "email": "hello@yourtradepartner.com.au",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Adelaide",
                                "addressRegion": "SA",
                                "addressCountry": "AU"
                            },
                            "priceRange": "$$$",
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Trade Growth Packages",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Package 1: Trade-Ready Setup",
                                            "description": "Professional 3-page website, G-Business Profile, and domain setup for solo operators."
                                        },
                                        "price": "1900.00",
                                        "priceCurrency": "AUD"
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Package 2: Local Jobs Engine",
                                            "description": "6-page site, enquiry tracking, local SEO pages, and AI lead capture."
                                        },
                                        "price": "3600.00",
                                        "priceCurrency": "AUD"
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Package 3: Growth System",
                                            "description": "Full-scale digital dominance (12+ pages), advanced CRM integration, receptionist handling, and aggressive local SEO."
                                        },
                                        "price": "7500.00",
                                        "priceCurrency": "AUD"
                                    }
                                ]
                            }
                        }
                    `}
                </script>
            </Helmet>

            <React.Suspense fallback={null}>
                <MissedJobReviewModal isOpen={isReviewModalOpen} onClose={() => setIsReviewModalOpen(false)} />
                <CaseStudyModal
                    isOpen={isCaseStudyModalOpen}
                    onClose={() => setIsCaseStudyModalOpen(false)}
                    project={selectedProject}
                />

                <VideoModal
                    isOpen={isVideoModalOpen}
                    onClose={() => setIsVideoModalOpen(false)}
                    videoSrc={selectedProject?.video}
                />
                <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
                <TermsConditionsModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
                <ChatBot />
            </React.Suspense>

            {/* MOBILE STICKY FOOTER (Thumb Zone) */}
            <div className="fixed bottom-0 left-0 w-full bg-construction-charcoal border-t border-white/10 z-50 md:hidden p-4 flex gap-3 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
                <a href="tel:0451044751" className="flex-1">
                    <Button className="w-full h-12 bg-white text-black hover:bg-white/90 font-black uppercase tracking-widest rounded-none border border-white/20">
                        Call Now
                    </Button>
                </a>
                <Button
                    onClick={() => setIsReviewModalOpen(true)}
                    className="flex-1 h-12 bg-safety-orange hover:bg-safety-orange-hover text-white font-black uppercase tracking-widest rounded-none"
                >
                    Get Started
                </Button>
            </div>

            {/* Navigation */}
            {/* Navigation */}
            <nav className="border-b border-white/5 py-4 bg-construction-charcoal/95 backdrop-blur-md sticky top-0 z-50">
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                        <Hammer className="text-safety-orange w-5 h-5 md:w-6 md:h-6" />
                        <span className="text-sm md:text-xl font-black uppercase tracking-tighter">Your Trade Partner<span className="text-safety-orange">.</span></span>
                    </a>
                    <div className="hidden lg:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
                        <a href="#why" className="hover:text-white transition-colors">Why It Matters</a>
                        <a href="#packages" className="hover:text-white transition-colors">Packages</a>
                        <a href="#guarantee" className="hover:text-white transition-colors">Guarantee</a>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button
                            onClick={() => {
                                setIsReviewModalOpen(true);
                                ReactPixel.track('InitiateCheckout', { content_name: 'Stop Missing Jobs Modal' });
                                ReactGA.event({ category: "Conversion", action: "Click_Hero_CTA", label: "Stop Missing Jobs" });
                            }}
                            className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-2 md:px-3 h-9 md:h-auto md:py-2 text-[9px] md:text-xs font-black uppercase tracking-wider md:tracking-widest shadow-lg shadow-safety-orange/20 flex items-center"
                        >
                            Stop Missing Jobs
                        </Button>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white hover:text-safety-orange transition-colors">
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Menu Overlay */}
                    {isMenuOpen && (
                        <div className="absolute top-full left-0 w-full bg-construction-charcoal border-b border-white/10 p-6 flex flex-col gap-6 lg:hidden shadow-2xl animate-in slide-in-from-top-5 duration-200">
                            <a href="#why" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-[0.2em] text-white/80 hover:text-safety-orange transition-colors">Why It Matters</a>
                            <a href="#packages" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-[0.2em] text-white/80 hover:text-safety-orange transition-colors">Packages</a>
                            <a href="#guarantee" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-[0.2em] text-white/80 hover:text-safety-orange transition-colors">Guarantee</a>
                        </div>
                    )}
                </div>
            </nav>

            {/* 1. HERO SECTION */}
            <header className="relative pt-24 pb-32 md:pt-40 md:pb-52 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8 uppercase italic">
                            No one tells trades this — <br />
                            <span className="text-safety-orange">but customers decide before they call.</span>
                        </h1>
                        <p className="text-xl md:text-3xl text-white/90 font-bold mb-10 leading-tight">
                            If your website looks outdated or your enquiries go unanswered, the job usually goes to the next trade on Google. We build the system that stops that from happening to you.
                        </p>

                        <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 mb-12 rounded-sm md:text-lg">
                            <ShieldCheck className="text-safety-orange w-6 h-6 flex-shrink-0" />
                            <p className="font-bold">
                                Built by someone with 4+ years in construction project management (and counting) — <span className="text-white/40 italic">actively working in the industry and building this to give trades a real advantage.</span>
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-4">
                            <a href="#packages" className="w-full sm:w-auto">
                                <Button size="xl" className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-12 py-10 text-xl md:text-2xl font-black uppercase tracking-widest group shadow-2xl shadow-safety-orange/30 w-full">
                                    <span>Let's fix it together</span>
                                    <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </a>

                        </div>
                    </div>
                </div>
            </header>

            {/* 2. PROBLEM AGITATION SECTION */}
            <section id="why" className="py-24 md:py-32 border-b border-white/5 bg-black/20">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase italic text-center md:text-left">
                            What most tradies <br className="hidden md:block" /> don’t realise…
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            {[
                                "Missed calls while on site",
                                "Enquiries coming from multiple places",
                                "Websites that look fine but don’t convert",
                                "Work going to whoever answers first"
                            ].map((bullet, i) => (
                                <div key={i} className="flex items-center gap-6 bg-white/5 p-8 border border-white/5 hover:border-white/20 transition-colors">
                                    <AlertCircle className="text-red-500 w-10 h-10 flex-shrink-0" />
                                    <p className="text-xl md:text-2xl font-black uppercase">{bullet}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center md:text-right">
                            <p className="text-3xl md:text-5xl font-black italic uppercase leading-tight">
                                Missing jobs doesn’t feel like a measurable problem — <br />
                                <span className="text-safety-orange underline decoration-white/20 underline-offset-8">until you look at the numbers.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: SURVEY RESULT VISUAL (Hard-Coded) */}
            <section className="py-24 border-b border-white/5 bg-zinc-900/50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">

                        {/* Survey Card */}
                        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm mb-12 text-left relative overflow-hidden backdrop-blur-sm">
                            {/* Card Header */}
                            <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight mb-10 text-center text-white">
                                What Homeowners Look For <br /> Before Contacting a Trade
                            </h3>

                            {/* Bars */}
                            <div className="space-y-6 mb-12">
                                {/* Bar 1 */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-4 bg-white/5 p-2 rounded-sm border border-white/10">
                                        <div className="bg-white/10 p-2 rounded-sm">
                                            <Smartphone className="w-6 h-6 text-safety-orange" />
                                        </div>
                                        <div className="flex-grow relative h-12 bg-white/5 rounded-sm border border-white/5 overflow-hidden">
                                            <div className="h-full bg-safety-orange flex items-center justify-end px-4 font-black text-white text-xl" style={{ width: "78%" }}>
                                                78%
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-right text-xs font-bold uppercase tracking-widest text-white/40">Professional website & branding</p>
                                </div>

                                {/* Bar 2 */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-4 bg-white/5 p-2 rounded-sm border border-white/10">
                                        <div className="bg-white/10 p-2 rounded-sm">
                                            <Users className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="flex-grow relative h-12 bg-white/5 rounded-sm border border-white/5 overflow-hidden">
                                            <div className="h-full bg-construction-charcoal border border-white/10 flex items-center justify-end px-4 font-black text-white text-xl" style={{ width: "65%" }}>
                                                65%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end items-center gap-2">
                                        <p className="text-right text-xs font-bold uppercase tracking-widest text-white/40">Google reviews & online presence</p>
                                    </div>
                                </div>

                                {/* Bar 3 */}
                                <div className="space-y-2">
                                    <div className="flex items-center gap-4 bg-white/5 p-2 rounded-sm border border-white/10">
                                        <div className="bg-white/10 p-2 rounded-sm">
                                            <Phone className="w-6 h-6 text-white/60" />
                                        </div>
                                        <div className="flex-grow relative h-12 bg-white/5 rounded-sm border border-white/5 overflow-hidden">
                                            <div className="h-full bg-white/20 flex items-center justify-end px-4 font-black text-white/80 text-xl" style={{ width: "52%" }}>
                                                52%
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-right text-xs font-bold uppercase tracking-widest text-white/40">Clear services and easy contact details</p>
                                </div>
                            </div>

                            {/* Comparison Columns */}
                            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                                        <h4 className="font-black uppercase text-lg text-green-500">Online Presence</h4>
                                    </div>
                                    <ul className="space-y-2 pl-11">
                                        <li className="flex items-start gap-2 text-sm font-bold text-white/60">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5" />
                                            More enquiries
                                        </li>
                                        <li className="flex items-start gap-2 text-sm font-bold text-white/60">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5" />
                                            Higher trust
                                        </li>
                                        <li className="flex items-start gap-2 text-sm font-bold text-white/60">
                                            <Check className="w-4 h-4 text-green-500 mt-0.5" />
                                            Better clients
                                        </li>
                                    </ul>
                                </div>
                                <div className="space-y-4 md:border-l md:border-white/10 md:pl-8">
                                    <div className="flex items-center gap-3">
                                        <XCircle className="w-8 h-8 text-red-500/80" />
                                        <h4 className="font-black uppercase text-lg text-white/40">No Online Presence</h4>
                                    </div>
                                    <ul className="space-y-2 pl-11">
                                        <li className="flex items-start gap-2 text-sm font-bold text-white/40">
                                            <span className="text-red-500/50">✕</span>
                                            Missed calls
                                        </li>
                                        <li className="flex items-start gap-2 text-sm font-bold text-white/40">
                                            <span className="text-red-500/50">✕</span>
                                            Price shoppers
                                        </li>
                                        <li className="flex items-start gap-2 text-sm font-bold text-white/40">
                                            <span className="text-red-500/50">✕</span>
                                            Lost opportunities
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="mt-12 text-center">
                                <p className="text-[10px] uppercase font-bold text-white/20 italic">
                                    Illustrative example based on common consumer behaviour and industry insights
                                </p>
                            </div>
                        </div>

                        {/* Supporting Copy */}
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-4xl font-black uppercase italic leading-tight">
                                Most homeowners won’t tell you this — <br />
                                <span className="text-safety-orange">but they check online before they call.</span>
                            </h3>
                            <p className="text-xl md:text-2xl text-white/60 font-medium">
                                This isn’t about looking fancy. <br />
                                It’s about being <span className="text-white underline decoration-safety-orange underline-offset-4">trusted enough</span> to get the call.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. SOLUTION SECTION */}
            <section className="py-24 md:py-32 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center md:text-left">
                        <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase italic leading-none">
                            We don’t just sell websites. <br />
                            <span className="text-white/20 font-black">We build job-winning systems.</span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12 text-xl md:text-2xl leading-relaxed font-bold text-white/80">
                            <div className="space-y-4">
                                <div className="w-12 h-1 bg-safety-orange mb-6"></div>
                                <p>The system captures enquiries before they're lost and responds automatically so potential clients aren't left waiting.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-12 h-1 bg-safety-orange mb-6"></div>
                                <p>Reduced admin means you spend more time on tools or with family, while the system works to help win more local jobs.</p>
                            </div>
                        </div>

                        <div className="mt-20 p-10 bg-white/5 border-2 border-dashed border-white/10 text-center">
                            <p className="text-2xl md:text-3xl font-black italic uppercase leading-tight">
                                "Stop losing 3–5 jobs every month before you even talk to the customer."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: WHAT WE ACTUALLY FIX */}
            <section className="py-24 md:py-32 border-b border-white/5 bg-black/40">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-6">
                                What We Actually Fix
                            </h2>
                            <p className="text-white/60 font-bold uppercase tracking-widest">
                                This section removes confusion about why you'd pay us.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-white/5 border-2 border-white/5 hover:border-safety-orange/50 transition-colors">
                                <CardHeader>
                                    <Badge className="w-fit bg-white/10 text-white mb-2">Problem 1</Badge>
                                    <CardTitle className="text-xl font-black uppercase text-white/60">"We’re flat out, but enquiries are inconsistent"</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-start gap-3">
                                        <ArrowRight className="text-safety-orange w-6 h-6 flex-shrink-0 mt-1" />
                                        <p className="text-lg font-bold text-white">We build systems that capture demand when it shows up.</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-white/5 border-2 border-white/5 hover:border-safety-orange/50 transition-colors">
                                <CardHeader>
                                    <Badge className="w-fit bg-white/10 text-white mb-2">Problem 2</Badge>
                                    <CardTitle className="text-xl font-black uppercase text-white/60">"People check us out but don’t call"</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-start gap-3">
                                        <ArrowRight className="text-safety-orange w-6 h-6 flex-shrink-0 mt-1" />
                                        <p className="text-lg font-bold text-white">We make your business look established, not risky.</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-white/5 border-2 border-white/5 hover:border-safety-orange/50 transition-colors">
                                <CardHeader>
                                    <Badge className="w-fit bg-white/10 text-white mb-2">Problem 3</Badge>
                                    <CardTitle className="text-xl font-black uppercase text-white/60">"We miss calls while on the tools"</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-start gap-3">
                                        <ArrowRight className="text-safety-orange w-6 h-6 flex-shrink-0 mt-1" />
                                        <p className="text-lg font-bold text-white">AI answers, logs, and follows up so leads don’t die.</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-white/5 border-2 border-white/5 hover:border-safety-orange/50 transition-colors">
                                <CardHeader>
                                    <Badge className="w-fit bg-white/10 text-white mb-2">Problem 4</Badge>
                                    <CardTitle className="text-xl font-black uppercase text-white/60">"Our online stuff is messy or outdated"</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-start gap-3">
                                        <ArrowRight className="text-safety-orange w-6 h-6 flex-shrink-0 mt-1" />
                                        <p className="text-lg font-bold text-white">One clean setup that just works.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="mt-12 text-center">
                            <p className="text-2xl font-black italic border-l-4 border-safety-orange pl-6 inline-block text-left">
                                This isn’t marketing. <br />
                                <span className="text-safety-orange">This is infrastructure for making money.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: WHO THIS IS FOR */}
            <section className="py-24 md:py-32 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-safety-orange/10 border border-safety-orange/20 text-safety-orange mb-6">
                                <AlertTriangle className="w-4 h-4" />
                                <span className="text-xs font-black uppercase tracking-widest">Reality Check</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight italic mb-6 text-white">
                                This doesn’t stay neutral if you wait. <br />
                                <span className="text-safety-orange">It quietly gets worse.</span>
                            </h2>
                        </div>

                        <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm relative overflow-hidden">
                            {/* Background pattern */}
                            <div className="absolute top-0 right-0 p-32 bg-safety-orange/5 blur-3xl rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                            <h3 className="text-xl font-black uppercase text-white mb-6 relative z-10">Every week you delay:</h3>
                            <ul className="space-y-4 mb-10 relative z-10">
                                {[
                                    "Missed calls don’t magically come back",
                                    "Competitors keep showing up first",
                                    "Customers choose whoever feels easier to trust in the moment"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <XCircle className="text-safety-orange w-6 h-6 flex-shrink-0 mt-0.5" />
                                        <span className="text-lg font-bold text-white/80">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="space-y-6 text-lg font-medium text-white/60 relative z-10 border-t border-white/10 pt-8">
                                <p>
                                    <span className="text-white font-bold">Nothing breaks overnight.</span> But the gap between who gets the call and who doesn’t widens quietly.
                                </p>
                                <p>
                                    Most established trades don’t realise there’s a problem until demand slows, enquiries dry up, or price pressure starts.
                                </p>
                                <p className="text-safety-orange font-bold italic flex items-center gap-2">
                                    By then, fixing it costs more — and takes longer.
                                </p>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-xl md:text-2xl font-black uppercase tracking-wide text-white">
                                The Growth System exists for trades who want to <br className="hidden md:block" />
                                <span className="text-safety-orange underline decoration-safety-orange/30 underline-offset-4">fix this once</span> — not patch it later.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION: SUCCESS STORIES / SHOWCASE */}
            <section className="pt-[66px] pb-24 md:pt-[98px] md:pb-32 border-b border-white/5 bg-zinc-900/10">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-6">
                                Success <span className="text-safety-orange">Stories</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-white/60 font-bold max-w-2xl mx-auto">
                                See how we’ve helped other Australian trade businesses dominate their local areas.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            {[
                                {
                                    id: 'zjc',
                                    title: "ZJC Renovations",
                                    location: "ACT",
                                    testimonial: "The website, logo, and enquiry system made a big difference. Customers now contact us with clearer requests and are more confident.",
                                    attribution: "ZJC Renovations — ACT",
                                    delivered: [
                                        "Professional website built for local customers",
                                        "Custom business logo design",
                                        "Lead capture system with clear enquiry forms",
                                        "Google Business Profile setup for local visibility"
                                    ],
                                    challenge: [
                                        "A great reputation locally",
                                        "No real online presence that converted",
                                        "No clear enquiry system or trust signals",
                                        "Low visibility for local search"
                                    ],
                                    tags: ["8 Pages Local Website", "Logo Design", "Lead Capture", "GBP Setup"],
                                    images: {
                                        preview: "/projects/zjc/homepage.png",
                                        homepage: "/projects/zjc/homepage.png",
                                        service: "/projects/zjc/service.png",
                                        serviceLabel: "Bathroom Renovation Showcase",
                                        work: "/projects/zjc/work.png"
                                    },
                                    video: "https://vimeo.com/1160709635"
                                },
                                {
                                    id: 'swrp',
                                    title: "SWRP",
                                    location: "NSW",
                                    testimonial: "Building a scaleable roofing business required more than just a website; we needed a full digital infrastructure. From custom SWMS to professional roof reporting, the system now handles our growth without the typical operational headaches.",
                                    attribution: "SWRP — NSW",
                                    delivered: [
                                        "Company Logo & Branding",
                                        "14+ Pages Website Project (Ongoing)",
                                        "Custom Professional Email Setup",
                                        "SWMS (Safe Work Method Statements) Integration",
                                        "Roof Report Templates"
                                    ],
                                    challenge: [
                                        "Scaling operations without digital systems",
                                        "No centralized branding for a 14+ page site",
                                        "Manual reporting and paper-based SWMS",
                                        "Need for professional communication channels"
                                    ],
                                    tags: ["14+ Page Website", "Brand Identity", "Custom SWMS", "Roof Report Template", "Lead Capture Form", "Custom Email Box", "Roof Report Template"],
                                    images: {
                                        preview: "/projects/SWRP/swrp-homepage.png",
                                        homepage: "/projects/SWRP/swrp-homepage.png",
                                        service: "/projects/SWRP/swrp-service.png",
                                        serviceLabel: "Roof Reconstruction Showcase",
                                        work: "/projects/SWRP/swrp-work.png"
                                    },
                                    video: "https://vimeo.com/1160712562"
                                }
                            ].map((project) => (
                                <div key={project.id} className="group relative bg-white/5 border border-white/10 overflow-hidden rounded-sm hover:border-safety-orange/50 transition-all duration-500 flex flex-col">
                                    {/* Preview Image (Top Half) */}
                                    <div className="relative h-[250px] md:h-[300px] overflow-hidden border-b border-white/10">
                                        <img
                                            src={project.images.preview}
                                            alt={`${project.title} Showcase`}
                                            loading="lazy"
                                            className="w-full h-full object-cover object-top grayscale-[50%] group-hover:grayscale-0 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-construction-charcoal to-transparent opacity-60"></div>

                                        <div className="absolute bottom-4 left-4 flex items-center gap-3">
                                            <div className="w-8 h-0.5 bg-safety-orange"></div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-white shadow-sm">Verified Result • {project.location}</span>
                                        </div>
                                    </div>

                                    {/* Content Area (Bottom Half) */}
                                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-black uppercase italic mb-4">{project.title}</h3>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags.map((tag, i) => (
                                                <span key={i} className="text-[9px] font-black uppercase tracking-widest bg-white/10 px-3 py-1.5 text-white border border-white/20 rounded-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-auto flex items-center gap-3">
                                            <Button
                                                onClick={() => {
                                                    setSelectedProject(project);
                                                    setIsCaseStudyModalOpen(true);
                                                }}
                                                className="bg-white hover:bg-white/90 text-black rounded-none px-6 py-5 text-[11px] font-black uppercase tracking-widest shadow-xl transition-all"
                                            >
                                                See More
                                            </Button>

                                            <button
                                                onClick={() => {
                                                    setSelectedProject(project);
                                                    setIsVideoModalOpen(true);
                                                }}
                                                className="group/play flex items-center gap-3 bg-safety-orange/10 hover:bg-safety-orange/20 border border-safety-orange/30 p-3.5 transition-all"
                                                title="Watch Video Demo"
                                            >
                                                <Play className="w-4 h-4 text-safety-orange fill-safety-orange group-hover/play:scale-110 transition-transform" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-safety-orange">Watch Demo</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PACKAGES SECTION */}
            <section id="packages" className="py-12 md:py-20 border-b border-white/5 bg-black/40">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase italic">
                            Clear Pricing <br className="hidden md:block" /> (No Guesswork)
                        </h2>
                        <p className="text-white/40 font-black uppercase tracking-widest italic">One-time setup + simple partnership structure · No confusing monthly retainers</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 items-start mt-2.5">

                        {/* PACKAGE 1 */}
                        <Card className="bg-white/5 border-2 border-white/10 rounded-none h-full flex flex-col">
                            <CardHeader
                                className="p-5 md:p-6 border-b border-white/10 cursor-pointer md:cursor-default transition-colors hover:bg-white/5 md:hover:bg-transparent"
                                onClick={() => togglePackage(1)}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-xs uppercase font-black tracking-widest text-white/40 mb-2">Package 1</CardTitle>
                                        <div className="text-xl font-black uppercase mb-4">Trade-Ready Online Setup</div>
                                        <div className="text-3xl font-black italic text-safety-orange italic">$1,900 <span className="text-sm not-italic text-white/40">+ GST</span></div>
                                        <p className="text-xs font-black uppercase tracking-widest text-white/40 mt-2">+ $599/year partnership</p>
                                    </div>
                                    <div className="md:hidden mt-2">
                                        {expandedPackages.includes(1) ? <ChevronUp className="w-6 h-6 text-safety-orange" /> : <ChevronDown className="w-6 h-6 text-white/40" />}
                                    </div>
                                </div>
                            </CardHeader>
                            <div className={`${expandedPackages.includes(1) ? 'block' : 'hidden'} md:block flex-grow flex flex-col`}>
                                <CardContent className="p-5 md:p-6 space-y-4 flex-grow">
                                    <p className="text-xs font-black uppercase tracking-widest text-safety-orange mb-4">Best for solo operators & small crews</p>

                                    {/* Website Inclusions */}
                                    <div className="bg-white/5 p-4 border border-white/5 rounded-sm">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-1.5 h-1.5 bg-safety-orange rounded-full"></div>
                                            <p className="text-sm font-black uppercase text-white">Website</p>
                                        </div>
                                        <div className="pl-4 border-l border-white/10 space-y-1">
                                            <p className="text-sm font-bold text-white uppercase">3-page website included</p>
                                            <p className="text-xs text-white/50">(Home, Services, Project Showcase, Contact)</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            "Domain + hosting included for Year 1",
                                            "Professional business email (no more Gmail)",
                                            "Google Business Profile set up",
                                            "Business card design (print-ready)",
                                            "Contact & quote forms that send enquiries to you instantly"
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-3 text-sm font-bold uppercase tracking-tight">
                                                <Check className="text-safety-orange w-5 h-5 flex-shrink-0" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="p-5 md:p-6 pt-0 flex flex-col gap-4">
                                    <div className="bg-white/10 p-4 text-xs font-black uppercase tracking-widest text-center italic w-full">
                                        "You stop looking like a “maybe” and start looking like a real business people call."
                                    </div>
                                    <a href="#contact" className="w-full" onClick={() => {
                                        ReactPixel.track('AddToCart', { content_name: 'Package 1: Trade-Ready', value: 1900, currency: 'AUD' });
                                        ReactGA.event({ category: "Commerce", action: "Select_Package", label: "Package 1", value: 1900 });
                                    }}>
                                        <Button className="w-full bg-white text-black hover:bg-white/90 rounded-none h-12 font-black uppercase tracking-widest">
                                            Check Availability
                                        </Button>
                                    </a>
                                </CardFooter>
                            </div>
                        </Card>

                        {/* PACKAGE 3 (Highlighted Middle) */}
                        <Card className="bg-white/5 border-4 border-safety-orange rounded-none h-full flex flex-col relative scale-105 z-10 shadow-2xl shadow-safety-orange/10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-safety-orange text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest whitespace-nowrap italic">
                                Most Popular
                            </div>
                            <CardHeader
                                className="p-5 md:p-6 border-b border-white/10 cursor-pointer md:cursor-default transition-colors hover:bg-white/5 md:hover:bg-transparent"
                                onClick={() => togglePackage(3)}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-xs uppercase font-black tracking-widest text-white/40 mb-2">Package 3</CardTitle>
                                        <div className="text-xl font-black uppercase mb-4">Growth System</div>
                                        <div className="text-[35px] font-black italic text-safety-orange">From $6,800 <span className="text-sm not-italic text-white/40">+ GST</span></div>
                                        <div className="mt-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                                            (Most projects land between $7,500 – $12,000)
                                        </div>
                                        <div className="mt-2">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Ongoing partnership quoted based on your requirements</p>
                                        </div>
                                    </div>
                                    <div className="md:hidden mt-2">
                                        {expandedPackages.includes(3) ? <ChevronUp className="w-6 h-6 text-safety-orange" /> : <ChevronDown className="w-6 h-6 text-white/40" />}
                                    </div>
                                </div>
                            </CardHeader>
                            <div className={`${expandedPackages.includes(3) ? 'block' : 'hidden'} md:block flex-grow flex flex-col`}>
                                <CardContent className="p-5 md:p-6 space-y-6 flex-grow">
                                    <p className="text-xs font-black uppercase tracking-widest text-safety-orange">
                                        Best for established trades who want consistent enquiries and long-term growth.
                                    </p>

                                    <div className="space-y-4">
                                        <div className="bg-white/5 p-4 border border-white/5 rounded-sm">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-1.5 h-1.5 bg-safety-orange rounded-full"></div>
                                                <p className="text-sm font-black uppercase text-white">Website</p>
                                            </div>
                                            <div className="pl-4 border-l border-white/10 space-y-1">
                                                <p className="text-sm font-bold text-white uppercase">Up to 7 pages included</p>
                                                <p className="text-xs text-white/50">(Additional pages: + $250–$400 per page)</p>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Everything in Local Jobs Engine, plus:</p>
                                            <ul className="space-y-3">
                                                {[
                                                    "EXTRA SERVICE & SUBURB PAGES BUILT AROUND REAL LOCAL SEARCHES",
                                                    "SETUP DESIGNED TO HELP YOU SHOW UP MORE OFTEN WHEN PEOPLE ARE LOOKING",
                                                    {
                                                        text: (
                                                            <CollapsibleDetail title="AFTER-HOURS, MISSED-CALL & RECEPTIONIST HANDLING">
                                                                <ul className="pl-4 mt-2 space-y-1 list-disc text-xs text-white/60 font-normal">
                                                                    <li>HANDLES MULTIPLE CALLERS AT THE SAME TIME (NO HOLD, NO VOICEMAIL)</li>
                                                                    <li>EVERY CALL ANSWERED, EVEN WHEN YOU’RE ALREADY BUSY</li>
                                                                </ul>
                                                            </CollapsibleDetail>
                                                        )
                                                    },
                                                    "ENQUIRIES ROUTED SO NOTHING SLIPS THROUGH THE CRACKS",
                                                    "LINKEDIN PROFILE SETUP"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-sm font-bold text-white/80">
                                                        <Check className="text-safety-orange w-4 h-4 flex-shrink-0 mt-0.5" />
                                                        {typeof item === 'string' ? item : (
                                                            <div>
                                                                {item.text}
                                                            </div>
                                                        )}
                                                    </li>
                                                ))}

                                                <li className="flex items-start gap-3 text-sm font-bold text-white/80">
                                                    <Check className="text-safety-orange w-4 h-4 flex-shrink-0 mt-0.5" />
                                                    <CollapsibleDetail title="SIMPLE TRACKING TO SEE:">
                                                        <ul className="pl-4 mt-2 space-y-1 list-disc text-xs text-white/60 font-normal">
                                                            <li>WHERE ENQUIRIES COME FROM</li>
                                                            <li>WHICH PAGES BRING CALLS</li>
                                                            <li>WHAT’S WORTH SPENDING MONEY ON</li>
                                                        </ul>
                                                    </CollapsibleDetail>
                                                </li>

                                                <li className="flex items-start gap-3 text-sm font-bold text-white/80">
                                                    <Check className="text-safety-orange w-4 h-4 flex-shrink-0 mt-0.5" />
                                                    <CollapsibleDetail title="PROMOTIONAL VIDEOS OR AI VISUAL CONTENT">
                                                        <ul className="pl-4 mt-2 space-y-1 list-disc text-xs text-white/60 font-normal uppercase">
                                                            <li>USED ON YOUR WEBSITE OR ADS TO BUILD TRUST FAST</li>
                                                            <li>3 videos x 10-15 secs included in the package, additional videos quote separately</li>
                                                        </ul>
                                                    </CollapsibleDetail>
                                                </li>

                                                <li className="flex items-start gap-3 text-sm font-bold text-white/80">
                                                    <Check className="text-safety-orange w-4 h-4 flex-shrink-0 mt-0.5" />
                                                    <CollapsibleDetail title="SYSTEMS SELECTED BASED ON:">
                                                        <ul className="pl-4 mt-2 space-y-1 list-disc text-xs text-white/60 font-normal">
                                                            <li>YOUR TRADE</li>
                                                            <li>YOUR WORKLOAD</li>
                                                            <li>HOW AGGRESSIVE YOU WANT TO GROW</li>
                                                        </ul>
                                                    </CollapsibleDetail>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                                <CardFooter className="p-5 md:p-6 pt-0 flex flex-col gap-4">
                                    <div
                                        className="bg-white/10 p-4 border border-white/5 cursor-pointer hover:bg-white/15 transition-colors"
                                        onClick={() => setPricingVariesOpen(!pricingVariesOpen)}
                                    >
                                        <div className="flex justify-between items-center mb-2">
                                            <p className="text-xs font-black uppercase text-white">Why pricing varies</p>
                                            {pricingVariesOpen ? <ChevronUp className="w-4 h-4 text-white/60" /> : <ChevronDown className="w-4 h-4 text-white/60" />}
                                        </div>

                                        {pricingVariesOpen && (
                                            <>
                                                <p className="text-[10px] uppercase font-bold text-white/40 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                                                    Not every trade needs the same setup. Pricing depends on how many pages, locations, promotions, and systems are required to get results.
                                                    <br /><br />
                                                    - Receptionist usage is billed separately based on call volume. We set this up to be cost-effective and scale only when needed.
                                                </p>
                                                <p className="text-[10px] uppercase font-bold text-white/40 mt-2 italic animate-in fade-in slide-in-from-top-1 duration-200 delay-75">We scope this before anything is built — no surprises.</p>
                                            </>
                                        )}
                                    </div>
                                    <a href="#contact" className="w-full" onClick={() => {
                                        ReactPixel.track('AddToCart', { content_name: 'Package 3: Growth System', value: 7500, currency: 'AUD' });
                                        ReactGA.event({ category: "Commerce", action: "Select_Package", label: "Package 3", value: 7500 });
                                    }}>
                                        <Button className="w-full bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none h-12 font-black uppercase tracking-widest">
                                            Apply for Growth System
                                        </Button>
                                    </a>
                                </CardFooter>
                            </div>
                        </Card>

                        {/* PACKAGE 2 (Standard Right) */}
                        <Card className="bg-white/5 border-2 border-white/10 rounded-none h-full flex flex-col">
                            <CardHeader
                                className="p-5 md:p-6 border-b border-white/10 cursor-pointer md:cursor-default transition-colors hover:bg-white/5 md:hover:bg-transparent"
                                onClick={() => togglePackage(2)}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-xs uppercase font-black tracking-widest text-white/40 mb-2">PACKAGE 2</CardTitle>
                                        <div className="text-xl font-black uppercase mb-4">LOCAL JOBS ENGINE</div>
                                        <div className="text-3xl font-black italic text-safety-orange">$3,900 <span className="text-sm not-italic text-white/40">+ GST</span></div>
                                        <div className="mt-2">
                                            <p className="text-xs font-black uppercase tracking-widest text-white/40">+ $449 / quarter</p>
                                            <p className="text-[10px] font-bold text-white/20">(Reviewed annually, subject to AI usage & scope)</p>
                                        </div>
                                    </div>
                                    <div className="md:hidden mt-2">
                                        {expandedPackages.includes(2) ? <ChevronUp className="w-6 h-6 text-safety-orange" /> : <ChevronDown className="w-6 h-6 text-white/40" />}
                                    </div>
                                </div>
                            </CardHeader>
                            <div className={`${expandedPackages.includes(2) ? 'block' : 'hidden'} md:block flex-grow flex flex-col`}>
                                <CardContent className="p-5 md:p-6 space-y-4 flex-grow">
                                    <p className="text-xs font-black uppercase tracking-widest text-safety-orange mb-4">Don’t miss enquiries. Turn interest into calls.</p>

                                    {/* Inclusions List - Grouped */}
                                    <div className="space-y-5">
                                        {/* Website */}
                                        <div className="bg-white/5 p-4 border border-white/5 rounded-sm">
                                            <div className="flex items-center gap-2 mb-2">
                                                <div className="w-1.5 h-1.5 bg-safety-orange rounded-full"></div>
                                                <p className="text-sm font-black uppercase text-white">Website</p>
                                            </div>
                                            <div className="pl-4 border-l border-white/10 space-y-1">
                                                <p className="text-sm font-bold text-white uppercase">6-page website included</p>
                                                <p className="text-xs text-white/50">(Home, Services, About/Trust, Service Area, Projects, Contact)</p>
                                            </div>
                                        </div>

                                        {/* Other Sections */}
                                        {[
                                            {
                                                title: "Lead capture",
                                                items: [
                                                    "Contact & quote forms",
                                                    "Enquiry tracking (nothing gets lost)"
                                                ]
                                            },
                                            {
                                                title: "Call handling",
                                                items: [
                                                    { text: <span>Website assistance chatbot - <span className="text-[10px] text-white/50 uppercase">(Priced separately for customised chatbot to book the appointments)</span></span> }
                                                ]
                                            },
                                            {
                                                title: "Report templates",
                                                items: [
                                                    "Custom branded trade templates (SWMS / reports)"
                                                ]
                                            },
                                            {
                                                title: "Local setup",
                                                items: [
                                                    "Service & suburb pages (basic)"
                                                ]
                                            },
                                            {
                                                title: "Support",
                                                items: [
                                                    "Ongoing updates & support (within scope)"
                                                ]
                                            }
                                        ].map((section, i) => (
                                            <div key={i}>
                                                <div className="space-y-2">
                                                    {section.items.map((item, j) => {
                                                        const isNote = typeof item === 'object' && item.isNote;
                                                        const content = typeof item === 'object' ? item.text : item;

                                                        return (
                                                            <div key={j} className={`flex gap-3 text-sm font-bold uppercase tracking-tight ${isNote ? 'pl-7 text-white/50' : ''}`}>
                                                                {!isNote && <Check className="text-safety-orange w-4 h-4 flex-shrink-0" />}
                                                                <span>{content}</span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="p-5 md:p-6 pt-0 flex flex-col gap-4">
                                    <div className="bg-white/10 p-4 text-xs font-black uppercase tracking-widest text-center italic w-full">
                                        "You miss fewer calls, look more established, and turn attention into booked work."
                                    </div>
                                    <a href="#contact" className="w-full" onClick={() => {
                                        ReactPixel.track('AddToCart', { content_name: 'Package 2: Local Jobs Engine', value: 3600, currency: 'AUD' });
                                        ReactGA.event({ category: "Commerce", action: "Select_Package", label: "Package 2", value: 3600 });
                                    }}>
                                        <Button className="w-full bg-white text-black hover:bg-white/90 rounded-none h-12 font-black uppercase tracking-widest">
                                            Get The Jobs Engine Ready
                                        </Button>
                                    </a>
                                </CardFooter>
                            </div>
                        </Card>
                    </div>
                    {/* DISCLAIMER / EXPLANATION SECTION */}


                    {/* NEW SECTION: ROI CALCULATOR (Does This Pay For Itself?) */}
                    <div className="mt-20 max-w-3xl mx-auto">
                        <div className="bg-zinc-900 border border-white/10 p-8 md:p-12 rounded-sm relative overflow-hidden">
                            <div className="text-center mb-10">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 mb-6">
                                    <Calculator className="w-4 h-4" />
                                    <span className="text-xs font-black uppercase tracking-widest">ROI Check</span>
                                </div>
                                <h3 className="text-2xl md:text-4xl font-black uppercase italic mb-2 text-white">
                                    Does This Actually Pay for Itself?
                                </h3>
                                <p className="text-white/40 font-bold uppercase tracking-widest text-sm">
                                    A simple numbers check (no fluff)
                                </p>
                            </div>

                            <div className="space-y-8 relative z-10">
                                {/* Calculation Block */}
                                <div className="bg-black/40 border border-white/5 p-6 md:p-8 rounded-sm space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                            <p className="text-sm font-black uppercase tracking-widest text-white">Growth System setup:</p>
                                            <p className="text-xl font-black text-white">APPROX. $6,800 <span className="text-sm text-white/40">+ GST</span></p>
                                        </div>
                                        <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                            <p className="text-sm font-black uppercase tracking-widest text-white/60">Average job value:</p>
                                            <p className="text-xl font-black text-white/60">$1,500–$4,000</p>
                                        </div>
                                    </div>

                                    <div className="bg-white/5 p-6 rounded-sm border-l-4 border-safety-orange space-y-2">
                                        <p className="text-lg font-black uppercase text-white">
                                            <span className="text-safety-orange">3–5 extra jobs</span> = break even
                                        </p>
                                        <p className="text-sm font-bold text-white/60 uppercase tracking-widest">
                                            Usually within 90 days
                                        </p>
                                    </div>

                                    <div className="text-center pt-2">
                                        <p className="text-lg font-bold text-white/80 leading-relaxed">
                                            Every missed call or enquiry pushes that further away. <br />
                                            <span className="text-white font-black italic">The longer you wait, the more work quietly slips to someone else.</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Comparison / Need vs Don't Need */}


                                {/* Disclaimer */}
                                <div className="text-center pt-4">
                                    <p className="text-[10px] text-white/20 uppercase tracking-widest italic">
                                        Results vary by trade, location, pricing, and workload. This isn’t a guarantee — it’s a reality check.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Free Guide Link - Relocated & ROI Focused */}
                    <div className="mt-20 max-w-2xl mx-auto text-center">
                        <div className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-white/20 transition-colors">
                            <h4 className="text-xl font-black uppercase italic mb-3">
                                Not ready to commit? <span className="text-white/40">That’s fine.</span>
                            </h4>
                            <p className="text-sm font-bold text-white/60 mb-6 leading-relaxed">
                                You don't need to pay us to understand why your current setup isn't working.
                                Download the guide to see exactly where trades lose money online.
                            </p>
                            <a
                                href="/Trade_Growth_Guide.pdf"
                                download
                                className="inline-flex items-center gap-2 bg-white text-black hover:bg-white/90 px-6 py-3 font-black uppercase tracking-widest text-xs transition-colors rounded-none cursor-pointer"
                            >
                                <span className="text-lg">↓</span> Download Free Guide
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW SECTION: RESULTS TIMELINE */}
            <section className="py-24 md:py-32 border-b border-white/5 bg-zinc-900/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <Badge className="bg-white/10 text-white mb-6 hover:bg-white/10 pointer-events-none uppercase tracking-widest text-[10px]">Expectations</Badge>
                            <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-6">
                                How Results <span className="text-safety-orange">Actually</span> Work <br />
                                <span className="text-2xl md:text-3xl text-white/40 not-italic normal-case block mt-4">(In Plain English)</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-white/80 font-bold max-w-3xl mx-auto">
                                This is not a quick patch-and-paint job. We’re building a proper online structure that keeps working long after it’s built.
                            </p>
                        </div>

                        {/* Trade-Off Comparison */}
                        <div className="grid md:grid-cols-2 gap-8 mb-20">
                            <div className="bg-red-950/20 p-8 border border-red-500/20">
                                <h3 className="text-xl font-black uppercase text-red-500 mb-4">The Short-Term Trap</h3>
                                <p className="text-white/60 font-bold mb-4">Chasing referrals, quoting more, racing competitors on price.</p>
                                <div className="text-sm font-black uppercase tracking-widest text-red-500/50">Result: Burnout</div>
                            </div>
                            <div className="bg-green-950/20 p-8 border border-green-500/20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-32 bg-green-500/5 blur-[100px] rounded-full"></div>
                                <h3 className="text-xl font-black uppercase text-green-500 mb-4">The Long-Term Asset</h3>
                                <p className="text-white/60 font-bold mb-4">Owning a system that brings enquiries to you — even while you’re on the tools.</p>
                                <div className="text-sm font-black uppercase tracking-widest text-green-500/50">Result: Freedom</div>
                            </div>
                        </div>

                        {/* What We Building & Timeline Grid */}
                        <div className="grid lg:grid-cols-12 gap-12">
                            {/* What We Building */}
                            <div className="lg:col-span-5 space-y-8">
                                <h3 className="text-2xl font-black uppercase italic">What We’re Building</h3>
                                <div className="space-y-6">
                                    {[
                                        "A professional online presence customers trust",
                                        "Pages that match what people are actually searching for",
                                        "AI systems that answer questions and capture enquiries",
                                        "A foundation that compounds instead of resetting every month"
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="bg-safety-orange/10 p-2 rounded-sm h-fit">
                                                <Hammer className="w-5 h-5 text-safety-orange" />
                                            </div>
                                            <p className="font-bold text-white/80">{item}</p>
                                        </div>
                                    ))}
                                </div>

                            </div>

                            {/* Timeline */}
                            <div className="lg:col-span-7">
                                <div className="bg-white/5 border border-white/10 p-8 md:p-10">
                                    <h3 className="text-2xl font-black uppercase italic mb-8">When Results Show Up</h3>

                                    <div className="space-y-12 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
                                        {/* Phase 1 */}
                                        <div className="relative pl-12">
                                            <div className="absolute left-0 top-1 w-10 h-10 bg-construction-charcoal border-2 border-white/20 rounded-full flex items-center justify-center z-10 transition-colors hover:border-safety-orange">
                                                <span className="text-xs font-black text-white/40">01</span>
                                            </div>
                                            <h4 className="text-xl font-black uppercase text-safety-orange mb-2">Setup Phase</h4>
                                            <div className="text-xs font-black uppercase tracking-widest text-white/40 mb-4">Weeks 1–2</div>
                                            <ul className="space-y-2">
                                                <li className="text-white/70 font-bold text-sm">• Website & systems go live</li>
                                                <li className="text-white/70 font-bold text-sm">• AI tools installed</li>
                                                <li className="text-white/70 font-bold text-sm">• Tracking enabled</li>
                                            </ul>
                                        </div>

                                        {/* Phase 2 */}
                                        <div className="relative pl-12">
                                            <div className="absolute left-0 top-1 w-10 h-10 bg-construction-charcoal border-2 border-white/20 rounded-full flex items-center justify-center z-10 transition-colors hover:border-safety-orange">
                                                <span className="text-xs font-black text-white/40">02</span>
                                            </div>
                                            <h4 className="text-xl font-black uppercase text-white mb-2">Momentum Phase</h4>
                                            <div className="text-xs font-black uppercase tracking-widest text-white/40 mb-4">Weeks 3–6</div>
                                            <ul className="space-y-2">
                                                <li className="text-white/70 font-bold text-sm">• Visibility improves</li>
                                                <li className="text-white/70 font-bold text-sm">• Early enquiries start flowing</li>
                                                <li className="text-white/70 font-bold text-sm">• Google starts validating your business</li>
                                            </ul>
                                        </div>

                                        {/* Phase 3 */}
                                        <div className="relative pl-12">
                                            <div className="absolute left-0 top-1 w-10 h-10 bg-safety-orange border-2 border-safety-orange rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(255,107,0,0.3)]">
                                                <TrendingUp className="w-5 h-5 text-black" />
                                            </div>
                                            <h4 className="text-xl font-black uppercase text-white mb-2">Growth Phase</h4>
                                            <div className="text-xs font-black uppercase tracking-widest text-white/40 mb-4">Months 3–6+</div>
                                            <ul className="space-y-2">
                                                <li className="text-white/70 font-bold text-sm">• Strong local presence</li>
                                                <li className="text-white/70 font-bold text-sm">• Consistent, higher quality leads</li>
                                                <li className="text-white/70 font-bold text-sm">• Compounding results over time</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>

            {/* 5. GUARANTEE SECTION */}
            <section id="guarantee" className="py-24 md:py-32 border-b border-white/5 bg-safety-orange text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-7xl font-black mb-8 uppercase italic leading-none text-black">
                            A simple, <br /> fair guarantee.
                        </h2>
                        <div className="w-20 h-2 bg-black mx-auto mb-10"></div>
                        <p className="text-2xl md:text-4xl font-black uppercase leading-tight italic">
                            "No lock-in: if you’re not confident after delivery, you can walk away before ongoing fees start."
                        </p>
                    </div>
                </div>
            </section >

            {/* 6. REVISION POLICY SECTION */}
            < section className="py-24 md:py-32 border-b border-white/5" >
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase italic leading-none">
                                    How revisions work <span className="text-white/20 italic block mt-2">(so projects don’t drag on)</span>
                                </h2>
                                <div className="space-y-6 text-xl font-bold text-white/70">
                                    <div className="flex gap-4">
                                        <CheckCircle2 className="text-safety-orange w-6 h-6 flex-shrink-0" />
                                        <p>No unlimited revisions = no endless delays.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <CheckCircle2 className="text-safety-orange w-6 h-6 flex-shrink-0" />
                                        <p>Clear scope agreed upfront before we start.</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <CheckCircle2 className="text-safety-orange w-6 h-6 flex-shrink-0" />
                                        <p>Defined revision rounds for precision.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white/5 p-10 border-4 border-white/10 text-center">
                                <Clock className="w-16 h-16 text-safety-orange mx-auto mb-6" />
                                <p className="text-2xl font-black uppercase italic leading-none">
                                    Faster launches <br /> lead to <br /> <span className="text-safety-orange">Better Results</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* 7. FAQ SECTION */}
            <section className="py-24 border-b border-white/5 bg-black">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-6">
                                Frequently Asked Questions <br />
                                <span className="text-white/40 text-2xl md:text-3xl not-italic">(Read This Before Booking)</span>
                            </h2>
                        </div>

                        <div className="space-y-2">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b border-white/10 last:border-0">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-center justify-between py-6 text-left hover:bg-white/5 px-4 transition-colors group"
                                    >
                                        <span className={`text-lg md:text-xl font-bold uppercase transition-colors ${openFaq === index ? 'text-safety-orange' : 'text-white group-hover:text-white/90'}`}>
                                            {faq.question}
                                        </span>
                                        {openFaq === index ? (
                                            <ChevronUp className="w-6 h-6 text-safety-orange flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 text-white/40 group-hover:text-white flex-shrink-0 transition-colors" />
                                        )}
                                    </button>

                                    <div
                                        className={`grid transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-4 pb-8 pt-2 text-white/70 text-base md:text-lg leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>



                    </div>
                </div>
            </section>

            {/* GROWTH SYSTEM EFFECT SECTION */}
            <section className="py-24 border-b border-white/5 bg-zinc-900 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-5"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-6 text-white">
                                Growth system effect
                            </h2>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-8 mb-16">
                            {/* Sentence 1 */}
                            <div className="flex items-start md:items-center gap-6">
                                <div className="bg-safety-orange/10 p-3 rounded-full flex-shrink-0 mt-1 md:mt-0">
                                    <CheckCircle2 className="w-6 h-6 text-safety-orange" />
                                </div>
                                <p className="text-xl md:text-3xl font-bold text-white leading-tight">
                                    <span className="text-safety-orange font-black">10–30%</span> revenue uplift over 3–6 months.
                                </p>
                            </div>

                            {/* Sentence 2 */}
                            <div className="flex items-start md:items-center gap-6">
                                <div className="bg-safety-orange/10 p-3 rounded-full flex-shrink-0 mt-1 md:mt-0">
                                    <CheckCircle2 className="w-6 h-6 text-safety-orange" />
                                </div>
                                <p className="text-xl md:text-3xl font-bold text-white leading-tight">
                                    Often results in <span className="text-safety-orange font-black">3–8</span> extra jobs per month.
                                </p>
                            </div>

                            {/* Sentence 3 */}
                            <div className="flex items-start md:items-center gap-6">
                                <div className="bg-safety-orange/10 p-3 rounded-full flex-shrink-0 mt-1 md:mt-0">
                                    <CheckCircle2 className="w-6 h-6 text-safety-orange" />
                                </div>
                                <p className="text-xl md:text-3xl font-bold text-white leading-tight">
                                    Break-even commonly occurs after just <span className="text-safety-orange font-black">2–5</span> jobs.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white/5 p-8 border-l-4 border-white/20">
                            <p className="text-lg text-white/80 leading-relaxed font-medium">
                                Most trades see <span className="text-white font-bold">20–30% more enquiries captured</span> simply by answering every call and replying instantly -  without spending more on ads.
                            </p>
                        </div>

                        <div className="mt-6 p-6">
                            <p className="text-sm text-white/30 leading-relaxed italic">
                                Results vary by trade, location, pricing, and workload. This isn't a guarantee — it's a reality check.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. FINAL CTA SECTION */}
            <section id="contact" className="py-20 text-center relative overflow-hidden">
                <div className="absolute inset-0 blueprint-grid opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">

                    {formStatus === 'success' ? (
                        <div className="max-w-xl mx-auto bg-green-950/20 border border-green-500/30 p-8 md:p-12 rounded-sm">
                            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-4 text-white">
                                Thanks — you’re all set.
                            </h2>
                            <p className="text-lg md:text-xl text-white/80 font-medium mb-6">
                                We'll look over what you shared and let you know if there's something worth fixing, we'll explain it clearly. If everything's already solid, you'll know that too.
                            </p>
                            <p className="text-xs font-black uppercase tracking-widest text-white/40 border-t border-white/10 pt-4">
                                No pressure. No hard sell.
                            </p>
                        </div>
                    ) : (
                        <div className="max-w-xl mx-auto">
                            <div className="mb-10">
                                <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase italic leading-none tracking-tighter text-white">
                                    Let’s work on <br /> <span className="text-safety-orange">building your system.</span>
                                </h2>
                            </div>

                            <form onSubmit={handleSubmit} className="text-left space-y-6 bg-zinc-900/80 p-6 md:p-8 border border-white/10 backdrop-blur-sm shadow-2xl">

                                {/* Basic Details Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Full Name <span className="text-safety-orange">*</span></label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/5 border border-white/10 p-2 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange transition-colors rounded-sm font-medium"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Business <span className="text-safety-orange">*</span></label>
                                        <input
                                            required
                                            type="text"
                                            name="businessName"
                                            value={formData.businessName}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/5 border border-white/10 p-2 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange transition-colors rounded-sm font-medium"
                                            placeholder="Business Name"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            maxLength="10"
                                            className="w-full bg-white/5 border border-white/10 p-2 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange transition-colors rounded-sm font-medium"
                                            placeholder="0400..."
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Email <span className="text-safety-orange">*</span></label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/5 border border-white/10 p-2 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange transition-colors rounded-sm font-medium"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>

                                {/* Context Grid */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Trade <span className="text-safety-orange">*</span></label>
                                        <div className="relative">
                                            <select
                                                required
                                                name="trade"
                                                value={formData.trade}
                                                onChange={handleInputChange}
                                                className="w-full bg-white/5 border border-white/10 p-2 text-base text-white appearance-none focus:outline-none focus:border-safety-orange transition-colors rounded-sm font-medium"
                                            >
                                                <option value="" disabled className="bg-zinc-900">Select...</option>
                                                <option value="roofing" className="bg-zinc-900">Roofing</option>
                                                <option value="plumbing" className="bg-zinc-900">Plumbing</option>
                                                <option value="electrical" className="bg-zinc-900">Electrical</option>
                                                <option value="carpentry" className="bg-zinc-900">Carpentry</option>
                                                <option value="concreting" className="bg-zinc-900">Concreting</option>
                                                <option value="landscaping" className="bg-zinc-900">Landscaping</option>
                                                <option value="other" className="bg-zinc-900">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Location <span className="text-safety-orange">*</span></label>
                                        <input
                                            required
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/5 border border-white/10 p-2 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange transition-colors rounded-sm font-medium"
                                            placeholder="City/Region"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Interested Package</label>
                                    <div className="relative">
                                        <select
                                            required
                                            name="package"
                                            value={formData.package}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/5 border border-white/10 p-2 text-base text-white appearance-none focus:outline-none focus:border-safety-orange transition-colors rounded-sm font-medium"
                                        >
                                            <option value="" disabled className="bg-zinc-900">Select...</option>
                                            <option value="audit" className="bg-zinc-900">Stop Missing Jobs Audit - FREE</option>
                                            <option value="trade-ready" className="bg-zinc-900">Trade-Ready Setup ($1,900)</option>
                                            <option value="core" className="bg-zinc-900">Local Jobs Engine ($3,900)</option>
                                            <option value="growth" className="bg-zinc-900">Growth System ($6,800)</option>
                                            <option value="unsure" className="bg-zinc-900">Unsure / Need Advice</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                                    </div>
                                </div>

                                {/* Compact Radios - 2 Columns */}
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Current Situation</label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                        {[
                                            "I want more consistent enquiries",
                                            "I want to look more professional",
                                            "I’m missing calls / enquiries",
                                            "I’m ready to grow the business"
                                        ].map((option) => (
                                            <label key={option} className="flex items-center gap-2 p-2 border border-white/5 bg-white/5 rounded-sm cursor-pointer hover:border-white/20 transition-colors h-full">
                                                <input
                                                    type="radio"
                                                    name="situation"
                                                    value={option}
                                                    checked={formData.situation === option}
                                                    onChange={handleInputChange}
                                                    className="accent-safety-orange w-3 h-3 flex-shrink-0"
                                                />
                                                <span className="text-xs font-bold text-white/80 leading-tight">{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Already have a website?</label>
                                        <div className="flex flex-col gap-1">
                                            {["Yes", "No", "Outdated"].map((option) => (
                                                <label key={option} className="flex items-center gap-2 cursor-pointer group">
                                                    <div className={`w-3 h-3 rounded-full border border-white/20 flex items-center justify-center group-hover:border-safety-orange transition-colors ${formData.hasWebsite === option ? 'border-safety-orange' : ''}`}>
                                                        {formData.hasWebsite === option && <div className="w-1.5 h-1.5 bg-safety-orange rounded-full" />}
                                                    </div>
                                                    <input
                                                        type="radio"
                                                        name="hasWebsite"
                                                        value={option}
                                                        checked={formData.hasWebsite === option}
                                                        onChange={handleInputChange}
                                                        className="hidden"
                                                    />
                                                    <span className="text-xs font-bold text-white/60 group-hover:text-white transition-colors">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                        {formData.hasWebsite === 'Yes' && (
                                            <div className="mt-2">
                                                <input
                                                    type="url"
                                                    name="websiteLink"
                                                    value={formData.websiteLink}
                                                    onChange={handleInputChange}
                                                    className="w-full bg-white/5 border border-white/10 p-2 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange transition-colors rounded-sm font-medium"
                                                    placeholder="Paste website link..."
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Ready to Invest?</label>
                                        <div className="flex flex-col gap-1">
                                            {["Yes", "Possibly"].map((option) => (
                                                <label key={option} className="flex items-center gap-2 cursor-pointer group">
                                                    <div className={`w-3 h-3 rounded-full border border-white/20 flex items-center justify-center group-hover:border-safety-orange transition-colors ${formData.readyToInvest === option ? 'border-safety-orange' : ''}`}>
                                                        {formData.readyToInvest === option && <div className="w-1.5 h-1.5 bg-safety-orange rounded-full" />}
                                                    </div>
                                                    <input
                                                        type="radio"
                                                        name="readyToInvest"
                                                        value={option}
                                                        checked={formData.readyToInvest === option}
                                                        onChange={handleInputChange}
                                                        className="hidden"
                                                    />
                                                    <span className="text-xs font-bold text-white/60 group-hover:text-white transition-colors">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Referral Source */}
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Where did you hear about us?</label>
                                    <div className="relative">
                                        <select
                                            name="referral"
                                            value={formData.referral}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/5 border border-white/10 p-2 text-base text-white appearance-none focus:outline-none focus:border-safety-orange transition-colors rounded-sm font-medium"
                                        >
                                            <option value="" disabled className="bg-zinc-900">Select...</option>
                                            <option value="FB" className="bg-zinc-900">FB</option>
                                            <option value="Google" className="bg-zinc-900">Google</option>
                                            <option value="Word of mouth" className="bg-zinc-900">Word of mouth</option>
                                            <option value="Search" className="bg-zinc-900">Search</option>
                                            <option value="Other" className="bg-zinc-900">Other</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                                    </div>
                                    {formData.referral === 'Other' && (
                                        <div className="mt-2">
                                            <input
                                                required
                                                type="text"
                                                name="referralOther"
                                                value={formData.referralOther}
                                                onChange={handleInputChange}
                                                className="w-full bg-white/5 border border-white/10 p-2 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange transition-colors rounded-sm font-medium"
                                                placeholder="Please specify..."
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* Message / Additional Info */}
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Message / Additional Info</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full bg-white/5 border border-white/10 p-2 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange transition-colors rounded-sm font-medium min-h-[100px]"
                                        placeholder="Anything else we should know?"
                                    />
                                </div>

                                <div className="pt-2">
                                    <Button
                                        type="submit"
                                        disabled={formStatus === 'submitting'}
                                        className="w-full bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none py-4 text-base font-black uppercase tracking-widest shadow-lg shadow-safety-orange/20"
                                    >
                                        {formStatus === 'submitting' ? 'Submitting...' : 'Let’s Connect'}
                                    </Button>
                                    <p className="text-center text-xs uppercase font-bold text-white/30 tracking-widest mt-3">
                                        We review every submission personally.
                                    </p>
                                </div>

                            </form>
                        </div>
                    )}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black py-20 border-t border-white/10">
                <div className="container mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-10">
                    <div className="flex gap-10 text-xs font-black uppercase tracking-widest text-white/40 order-2 lg:order-1">
                        <button onClick={() => setIsPrivacyModalOpen(true)} className="hover:text-white transition-colors">Privacy Policy</button>
                        <button onClick={() => setIsTermsModalOpen(true)} className="hover:text-white transition-colors">Terms & Conditions</button>
                    </div>
                    <div className="flex flex-col items-center gap-4 order-1 lg:order-2">
                        <div className="flex items-center gap-2">
                            <Hammer className="text-safety-orange w-6 h-6" />
                            <span className="text-2xl font-black uppercase tracking-tighter">Your Trade Partner<span className="text-safety-orange">.</span></span>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 text-xs font-black uppercase tracking-widest text-white/60 items-center text-center w-full justify-center">
                            <a href="tel:0451044751" className="hover:text-safety-orange transition-colors whitespace-nowrap">0451 044 751</a>
                            <span className="hidden lg:inline text-safety-orange select-none">•</span>
                            <a href="mailto:hello@yourtradepartner.com.au" className="hover:text-safety-orange transition-colors whitespace-nowrap text-center">hello@yourtradepartner.com.au</a>
                            <span className="hidden lg:inline text-safety-orange select-none">•</span>
                            <span className="whitespace-nowrap">Adelaide, Australia</span>
                        </div>
                    </div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-white/20 order-3 lg:order-3">
                        &copy; 2026 Your Trade Partner Australian Operations.
                    </p>
                </div>
            </footer >

            <ChatBot />

        </div >
    )
}

export default LandingPage
