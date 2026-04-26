import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Hammer, ArrowRight, Check, ChevronDown, ChevronUp, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import Breadcrumbs from '../components/Breadcrumbs';
import TradeNavDropdown from '../components/TradeNavDropdown';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';

const CollapsibleDetail = ({ title, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div>
            <div
                className="flex items-center gap-2 cursor-pointer group/collapsible"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <ChevronDown className={`w-5 h-5 text-safety-orange transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} group-hover/collapsible:scale-125`} />
            </div>
            {isOpen && (
                <div className="animate-in fade-in slide-in-from-top-1 duration-200">
                    {children}
                </div>
            )}
        </div>
    );
};

const BuilderWebsites = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        business: '',
        location: '',
        trade: 'Builder',
        message: ''
    });

    const [formStatus, setFormStatus] = React.useState('idle'); // idle, submitting, success
    const [phoneError, setPhoneError] = React.useState('');
    const [expandedPackages, setExpandedPackages] = React.useState([2]); // Default Package 2 open
    const [pricingVariesOpen, setPricingVariesOpen] = React.useState(false);
    const [openFaqIndex, setOpenFaqIndex] = React.useState(null); // Track which FAQ is open

    const shouldReduceMotion = useReducedMotion();

    // Animation variants - EXACT same as landing page
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 60, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const sectionVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const hoverLift = shouldReduceMotion ? {} : { y: -10, scale: 1.02 };
    const hoverTap = shouldReduceMotion ? {} : { scale: 0.98 };

    const togglePackage = (id) => {
        setExpandedPackages(prev =>
            prev.includes(id)
                ? prev.filter(p => p !== id)
                : [...prev, id]
        )
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            const re = /^[0-9\b]+$/;
            if ((value === '' || re.test(value)) && value.length <= 10) {
                setFormData(prev => ({ ...prev, [name]: value }));
                setPhoneError('');
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.phone.length !== 10) {
            setPhoneError("Please enter the correct phone number");
            return;
        }

        setFormStatus('submitting');

        // Simulate submission (replace with actual submission logic)
        setTimeout(() => {
            setFormStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                business: '',
                location: '',
                trade: 'Builder',
                message: ''
            });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans selection:bg-safety-orange selection:text-white">
            <Helmet>
                <title>Builder Website Design Australia | Websites That Get More Calls | Your Trade Partner</title>
                <meta name="description" content="We build websites for Australian builders that rank on Google and turn visitors into calls. New homes, renovations, extensions, commercial construction — we know your trade. Clear pricing, 2–4 week turnaround." />
                <link rel="canonical" href="https://yourtradepartner.com.au/builder-websites" />
                <meta name="robots" content="index, follow" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Builder Website Design Australia | Your Trade Partner" />
                <meta property="og:description" content="We build websites for Australian builders that rank on Google and turn visitors into calls." />
                <meta property="og:url" content="https://yourtradepartner.com.au/builder-websites" />
                <meta property="og:image" content="https://yourtradepartner.com.au/og-image.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Builder Website Design",
                            "provider": {
                                "@type": "ProfessionalService",
                                "name": "Your Trade Partner",
                                "areaServed": {
                                    "@type": "Country",
                                    "name": "Australia"
                                }
                            },
                            "audience": {
                                "@type": "Audience",
                                "name": "Builders and Building Businesses in Australia"
                            }
                        }
                    `}
                </script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "How long does it take to build an builder's website?", "acceptedAnswer": { "@type": "Answer", "text": "Depending on the package, most builder websites are live within 2-4 weeks. The Local Jobs Engine (Package 2) typically takes 2-3 weeks, while the Growth System (Package 3) with advanced features can take 3-4 weeks. We'll give you a clear timeline during the scoping call." } },
                        { "@type": "Question", "name": "Will my builder website show up on Google?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every website we build is optimised for local search from day one. This includes proper page structure, fast loading speeds, mobile responsiveness, and suburb-specific service pages. For Package 3, we also implement advanced local SEO and AI visibility strategies to help you rank higher for 'builder near me' searches." } },
                        { "@type": "Question", "name": "Do I need to provide content and photos?", "acceptedAnswer": { "@type": "Answer", "text": "We make it easy. You provide your business details, service info, and any existing photos. We'll handle the rest—writing professional copy, sourcing additional images if needed, and structuring everything for maximum impact. If you have great project photos, even better." } },
                        { "@type": "Question", "name": "What if I need changes after the website is live?", "acceptedAnswer": { "@type": "Answer", "text": "That's included. Package 2 and 3 both include ongoing updates and support within scope. Need to add a new service? Update your service area? Change a phone number? We handle it. Major redesigns or additional pages may be quoted separately." } },
                        { "@type": "Question", "name": "Can I get more leads without running ads?", "acceptedAnswer": { "@type": "Answer", "text": "Organic leads are possible, but they take time and consistent effort beyond just having a website. SEO, content updates, and Google Business Profile management all require ongoing work—and even then, results aren't guaranteed. If you want predictable, scalable lead flow without waiting months, ads are the faster path. Package 3 includes Google & Facebook Ads management with a $89.99 free ad credit, so you can start getting calls within days, not months." } },
                        { "@type": "Question", "name": "How much does a builder website cost in Australia?", "acceptedAnswer": { "@type": "Answer", "text": "A professional builder website in Australia typically costs between $1,900 and $7,900+ depending on the package. Our Package 1 starts at $1,900 for a trade-ready presence, while Package 2 at $3,900 includes full local SEO and suburb pages. Considering new home builds often exceed $350,000 and renovation projects regularly reach $50,000–$150,000, the website ROI for builders is enormous." } },
                        { "@type": "Question", "name": "What should a builder website include?", "acceptedAnswer": { "@type": "Answer", "text": "A builder website should showcase completed projects with professional photos, display your builder's licence (legally required in Australia), list your specific services (new homes, renovations, extensions), provide a clear process for getting a quote, and include verified testimonials. Insurance and warranty information also build significant trust." } },
                        { "@type": "Question", "name": "Do builders need suburb pages on their website?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — suburb pages are particularly valuable for builders. Clients often search specifically for builders in their area when planning a renovation or new build. Suburb-specific pages improve your local Google rankings and signal that you're familiar with local council requirements, building codes, and housing styles in that area." } }
                    ]
                })}</script>
            </Helmet>

            <TradeNavDropdown />

            {/* Hero Section - COPIED EXACT STRUCTURE FROM LANDING PAGE */}
            <header className="relative pt-8 pb-24 md:pt-24 md:pb-44 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <Breadcrumbs
                        items={[{ label: 'Home', href: '/' }]}
                        currentLabel="Builder Websites"
                        currentPath="/builder-websites"
                        className="mb-8"
                    />
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Audience Clarifier */}
                        <motion.p className="text-xs md:text-sm text-white/50 font-bold tracking-[0.2em] uppercase mb-6" variants={itemVariants}>
                            FOR AUSTRALIAN BUILDERS
                        </motion.p>

                        {/* Main Headline - EXACT same typography scale */}
                        <motion.h1 className="text-[52px] md:text-[80px] font-black leading-[0.9] mb-8 uppercase italic" variants={itemVariants}>
                            Builder Websites <br />
                            <span className="text-safety-orange">That Get You Booked</span>
                        </motion.h1>

                        {/* SEO Keyword Subtitle */}
                        <motion.p className="text-xs text-white/35 font-bold tracking-widest mb-2 -mt-4" variants={itemVariants}>
                            Professional builder website design for Australian construction businesses
                        </motion.p>

                        {/* Sub Headline */}
                        <motion.p className="text-lg md:text-xl text-white/90 font-medium mb-10 leading-relaxed max-w-3xl mx-auto" variants={itemVariants}>
                            When a homeowner is ready to renovate or build, they shortlist the builder with the most professional online presence — not whoever answers the phone first. Your website wins that shortlist.
                        </motion.p>

                        {/* Trust Position Strip - EXACT same as landing page */}
                        <motion.div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 mb-10 rounded-full md:text-sm backdrop-blur-sm" variants={itemVariants}>
                            <ShieldCheck className="text-safety-orange w-5 h-5 flex-shrink-0" />
                            <p className="font-semibold text-white/80">
                                Websites built specifically for Australian builders — <span className="text-white/40">not generic templates.</span>
                            </p>
                        </motion.div>

                        {/* Primary CTA - EXACT same styling */}
                        <motion.div className="flex flex-col items-center gap-4" variants={itemVariants}>
                            <a href="#packages" className="w-full sm:w-auto">
                                <Button
                                    size="xl"
                                    whileHover={hoverLift}
                                    whileTap={hoverTap}
                                    className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-6 md:px-12 py-6 md:py-8 text-sm md:text-2xl font-black uppercase tracking-widest group shadow-2xl shadow-safety-orange/30 w-full sm:w-auto transform-none transition-all duration-200"
                                >
                                    <span className="whitespace-normal text-center">VIEW PACKAGES</span>
                                    <ArrowRight className="hidden md:block ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </a>

                            {/* Micro Reassurance */}
                            <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest font-bold">
                                Clear pricing • No lock-in contracts • Built for builders
                            </p>
                        </motion.div>

                        {/* Proof Strip - EXACT same as landing page */}
                        <motion.div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-12 text-sm text-white/60 font-bold uppercase tracking-wider" variants={itemVariants}>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Built for Australian builders</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Local SEO optimized</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Enquiries into booked jobs</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </header>

            {/* Problem Section - EXACT same structure as landing page */}
            <motion.section
                className="py-24 md:py-32 border-b border-white/5 bg-black/20"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase italic text-center md:text-left">
                            Why builder businesses <br className="hidden md:block" /> need professional websites
                        </h2>

                        <motion.div
                            className="grid md:grid-cols-2 gap-8 mb-16"
                            variants={containerVariants}
                        >
                            {[
                                {
                                    title: "Emergency calls need immediate trust",
                                    detail: "When a circuit breaker keeps tripping at 2 AM, homeowners don't have time to vet every sparky. They need to see your licensing, insurance, and certifications instantly. A professional website displays these credentials upfront, giving anxious callers the confidence to choose you over a competitor."
                                },
                                {
                                    title: "Homeowners check licenses before calling",
                                    detail: "85% of Australians research a tradie online before making contact. If your website looks outdated or doesn't show your electrical license number, they'll move to the next search result. Your site is often the first—and only—impression you get to make."
                                },
                                {
                                    title: "Certifications build authority",
                                    detail: "Licensed builder? Level 2 ASP? Solar accredited? These aren't just credentials—they're deal-makers. Displaying them prominently on your website builds authority and separates you from unlicensed competitors who undercut on price."
                                },
                                {
                                    title: "Price shoppers vs quality clients",
                                    detail: "A well-designed website attracts clients who value expertise, reliability, and quality work—not just the cheapest quote. It positions you as a professional business, not a one-person operation racing to the bottom on price."
                                }
                            ].map((item, i) => (
                                <motion.div key={i} variants={itemVariants} className="bg-white/5 p-8 border border-white/5 hover:border-white/20 transition-colors">
                                    <div className="flex items-start gap-6 mb-4">
                                        <AlertCircle className="text-red-500 w-10 h-10 flex-shrink-0 mt-1" />
                                        <div className="flex-grow">
                                            <CollapsibleDetail title={<span className="text-xl md:text-2xl font-black uppercase">{item.title}</span>}>
                                                <p className="mt-4 text-sm text-white/60 font-bold leading-relaxed">{item.detail}</p>
                                            </CollapsibleDetail>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="text-center md:text-right">
                            <p className="text-3xl md:text-5xl font-black italic uppercase leading-tight">
                                A professional website isn't about looking fancy — <br />
                                <span className="text-safety-orange underline decoration-white/20 underline-offset-8">it's about being trusted enough to get the call.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* What Makes an Builder's Website Actually Work Section */}
            <motion.section
                className="py-24 md:py-32 border-b border-white/5 bg-black/30"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic text-center">
                            What Makes an Builder's Website <span className="text-safety-orange">Actually Work</span>
                        </h2>
                        <p className="text-white/40 text-center font-bold uppercase tracking-widest mb-16">
                            It's not just about looking good — it's about getting found, trusted, and called.
                        </p>

                        <motion.div
                            className="grid md:grid-cols-3 gap-8"
                            variants={containerVariants}
                        >
                            {[
                                {
                                    icon: "🔍",
                                    title: "Shows Up on Google",
                                    features: [
                                        "Optimised for 'builder near me' searches",
                                        "Service pages targeting local suburbs",
                                        "Fast loading speeds Google rewards",
                                        "Mobile-friendly (most searches are on phones)",
                                        "Schema markup so AI assistants find you"
                                    ]
                                },
                                {
                                    icon: "✓",
                                    title: "Builds Trust Fast",
                                    features: [
                                        "Licensing & insurance displayed upfront",
                                        "Real project photos (not stock images)",
                                        "Clear contact info & service areas",
                                        "Professional design signals reliability",
                                        "Testimonials from local homeowners"
                                    ]
                                },
                                {
                                    icon: "📞",
                                    title: "Converts Visitors into Calls",
                                    features: [
                                        "Click-to-call buttons everywhere",
                                        "Simple quote forms (no 20 fields)",
                                        "Clear pricing expectations (no sticker shock)",
                                        "Live chat or after-hours handling",
                                        "Emergency contact prominently placed"
                                    ]
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="bg-white/5 p-8 border border-white/5 hover:border-safety-orange/30 transition-all"
                                >
                                    <div className="text-5xl mb-6">{item.icon}</div>
                                    <h3 className="text-2xl font-black uppercase mb-6 text-safety-orange">{item.title}</h3>
                                    <ul className="space-y-3">
                                        {item.features.map((feature, j) => (
                                            <li key={j} className="flex items-start gap-3 text-sm font-bold text-white/80">
                                                <Check className="text-safety-orange w-4 h-4 flex-shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Building Services Grid */}
            <motion.section
                className="py-24 md:py-32 border-b border-white/5 bg-black/30"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic text-center">
                            Websites Built for Every <span className="text-safety-orange">Building Service</span>
                        </h2>
                        <p className="text-white/40 text-center font-bold uppercase tracking-widest mb-16">
                            We know the building trade — your website will speak your clients' language.
                        </p>
                        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" variants={containerVariants}>
                            {[
                                "New Home Construction", "Home Renovations", "Home Extensions", "Knockdown Rebuilds",
                                "Granny Flats", "Bathroom Renovations", "Kitchen Renovations", "Commercial Construction",
                                "Structural Repairs", "Duplex Construction", "Garage Construction", "Project Management"
                            ].map((service, i) => (
                                <motion.div key={i} variants={itemVariants} className="bg-white/5 border border-white/10 p-4 text-center hover:border-safety-orange/30 transition-all">
                                    <p className="text-sm font-black uppercase tracking-wide text-white/80">{service}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Service Areas */}
            <motion.section
                className="py-24 md:py-32 border-b border-white/5 bg-black/20"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic text-center">
                            We Help Builders <span className="text-safety-orange">Across All of Australia</span>
                        </h2>
                        <p className="text-white/40 text-center font-bold uppercase tracking-widest mb-16">
                            Whether you're in a major city or regional area — we build websites that win local work.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { city: "Sydney", suburbs: "Parramatta, Chatswood, Penrith, Liverpool, Bondi" },
                                { city: "Melbourne", suburbs: "Dandenong, Frankston, Geelong, Ringwood, Werribee" },
                                { city: "Brisbane", suburbs: "Ipswich, Gold Coast, Sunshine Coast, Logan, Redlands" },
                                { city: "Perth", suburbs: "Fremantle, Joondalup, Rockingham, Mandurah, Armadale" },
                                { city: "Adelaide", suburbs: "Salisbury, Port Adelaide, Marion, Onkaparinga, Tea Tree Gully" },
                                { city: "Regional & Rural", suburbs: "Cairns, Toowoomba, Ballarat, Bendigo, Canberra, Darwin & more" }
                            ].map((area, i) => (
                                <motion.div key={i} variants={itemVariants} className="bg-white/5 border border-white/10 p-6 hover:border-safety-orange/30 transition-all">
                                    <h3 className="text-xl font-black uppercase text-safety-orange mb-3">{area.city}</h3>
                                    <p className="text-sm text-white/60 font-bold leading-relaxed">{area.suburbs}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section
                className="py-24 md:py-32 border-b border-white/5 bg-black/20"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase italic text-center">
                            Common Questions <span className="text-safety-orange">From Builders</span>
                        </h2>

                        <motion.div className="space-y-6" variants={containerVariants}>
                            {[
                                {
                                    question: "How long does it take to build a builder's website?",
                                    answer: "Depending on the package, most builder websites are live within 2-4 weeks. The Local Jobs Engine (Package 2) typically takes 2-3 weeks, while the Growth System (Package 3) with advanced features can take 3-4 weeks. We'll give you a clear timeline during the scoping call."
                                },
                                {
                                    question: "Will my building website show up on Google?",
                                    answer: "Yes. Every website we build is optimised for local search from day one. This includes proper page structure, fast loading speeds, mobile responsiveness, and suburb-specific service pages. For Package 3, we also implement advanced local SEO and AI visibility strategies to help you rank higher for 'builder near me' searches."
                                },
                                {
                                    question: "Do I need to provide content and photos?",
                                    answer: "We make it easy. You provide your business details, service info, and any existing photos. We'll handle the rest—writing professional copy, sourcing additional images if needed, and structuring everything for maximum impact. If you have great project photos, even better."
                                },
                                {
                                    question: "What if I need changes after the website is live?",
                                    answer: "That's included. Package 2 and 3 both include ongoing updates and support within scope. Need to add a new service? Update your service area? Change a phone number? We handle it. Major redesigns or additional pages may be quoted separately."
                                },
                                {
                                    question: "Can I get more leads without running ads?",
                                    answer: "Organic leads are possible, but they take time and consistent effort beyond just having a website. SEO, content updates, and Google Business Profile management all require ongoing work—and even then, results aren't guaranteed. If you want predictable, scalable lead flow without waiting months, ads are the faster path. Package 3 includes Google & Facebook Ads management with a $89.99 free ad credit, so you can start getting calls within days, not months."
                                },
                                {
                                    question: "How much does a builder website cost in Australia?",
                                    answer: "A professional builder website in Australia typically costs between $1,900 and $7,900+ depending on the package. Our Package 1 starts at $1,900 for a trade-ready presence, while Package 2 at $3,900 includes full local SEO and suburb pages. Considering new home builds often exceed $350,000 and renovation projects regularly reach $50,000–$150,000, the website ROI for builders is enormous."
                                },
                                {
                                    question: "What should a builder website include?",
                                    answer: "A builder website should showcase completed projects with professional photos, display your builder's licence (legally required in Australia), list your specific services (new homes, renovations, extensions), provide a clear process for getting a quote, and include verified testimonials. Insurance and warranty information also build significant trust."
                                },
                                {
                                    question: "Do builders need suburb pages on their website?",
                                    answer: "Yes — suburb pages are particularly valuable for builders. Clients often search specifically for builders in their area when planning a renovation or new build. Suburb-specific pages improve your local Google rankings and signal that you're familiar with local council requirements, building codes, and housing styles in that area."
                                }
                            ].map((faq, i) => {
                                const isOpen = openFaqIndex === i;
                                return (
                                    <motion.div
                                        key={i}
                                        variants={itemVariants}
                                        className="bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                                    >
                                        <div
                                            className="p-6 cursor-pointer flex justify-between items-center gap-4"
                                            onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                                        >
                                            <h3 className="text-lg md:text-xl font-black uppercase text-white">{faq.question}</h3>
                                            {isOpen ? (
                                                <ChevronUp className="w-6 h-6 text-safety-orange flex-shrink-0" />
                                            ) : (
                                                <ChevronDown className="w-6 h-6 text-white/40 flex-shrink-0" />
                                            )}
                                        </div>
                                        {isOpen && (
                                            <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-1 duration-200">
                                                <p className="text-sm text-white/70 font-bold leading-relaxed">{faq.answer}</p>
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* How We're Different Section */}
            <motion.section
                className="py-24 md:py-32 border-b border-white/5 bg-black/40"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic text-center">
                            How We're <span className="text-safety-orange">Different</span>
                        </h2>
                        <p className="text-white/40 text-center font-bold uppercase tracking-widest mb-16">
                            Built by people who understand tradies — not generic web agencies.
                        </p>

                        <motion.div
                            className="grid md:grid-cols-3 gap-8"
                            variants={containerVariants}
                        >
                            {[
                                {
                                    icon: <Hammer className="w-12 h-12 text-safety-orange" />,
                                    title: "We Understand Tradies",
                                    description: "We're not a corporate agency pushing cookie-cutter templates. We've worked with trades businesses across Australia and understand what actually brings in calls—not just pretty designs."
                                },
                                {
                                    icon: <CheckCircle2 className="w-12 h-12 text-safety-orange" />,
                                    title: "Fast Turnaround",
                                    description: "No 3-month timelines or endless revision rounds. We scope your project clearly, build it efficiently, and get you live fast so you can start generating leads. Most projects are done within 2-4 weeks."
                                },
                                {
                                    icon: <ShieldCheck className="w-12 h-12 text-safety-orange" />,
                                    title: "No Lock-In Contracts",
                                    description: "We don't trap you in 12-month agreements. Our ongoing support is quarterly and reviewed annually. If it's not working, you're free to walk away. We earn your business every quarter."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={itemVariants}
                                    className="bg-white/5 p-8 border border-white/5 hover:border-safety-orange/30 transition-all text-center"
                                >
                                    <div className="flex justify-center mb-6">{item.icon}</div>
                                    <h3 className="text-2xl font-black uppercase mb-4">{item.title}</h3>
                                    <p className="text-sm text-white/70 font-bold leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="mt-16 text-center">
                            <a href="#contact">
                                <Button className="bg-safety-orange hover:bg-safety-orange-hover text-white px-8 py-6 text-lg font-black uppercase tracking-widest rounded-none">
                                    Get Started — No Obligation Chat
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Packages Section - COPIED EXACT structure from landing page */}
            <motion.section
                id="packages"
                className="py-12 md:py-20 border-b border-white/5 bg-black/40"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="container mx-auto px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase italic">
                            Clear Pricing <br className="hidden md:block" /> (No Guesswork)
                        </h2>
                        <p className="text-white/40 font-black uppercase tracking-widest italic">One-time setup + simple partnership structure · No confusing monthly retainers</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 items-start mt-2.5">
                        {/* PACKAGE 1 - EXACT structure from landing page */}
                        <motion.div whileHover={hoverLift} className="h-full">
                            <Card className="bg-white/5 border-2 border-white/10 rounded-none h-full flex flex-col">
                                <CardHeader
                                    className="p-5 md:p-6 border-b border-white/10 cursor-pointer md:cursor-default transition-colors hover:bg-white/5 md:hover:bg-transparent"
                                    onClick={() => togglePackage(1)}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-xs uppercase font-black tracking-widest text-white/40 mb-2">Package 1</CardTitle>
                                            <div className="text-xl font-black uppercase mb-4">Trade-Ready Online Setup</div>
                                            <div className="text-3xl font-black italic text-safety-orange italic">$1,900</div>
                                            <p className="text-xs font-black uppercase tracking-widest text-white/40 mt-2">+ $299/quarter</p>
                                        </div>
                                        <div className="md:hidden mt-2">
                                            {expandedPackages.includes(1) ? <ChevronUp className="w-6 h-6 text-safety-orange" /> : <ChevronDown className="w-6 h-6 text-white/40" />}
                                        </div>
                                    </div>
                                </CardHeader>
                                <div className={`${expandedPackages.includes(1) ? 'block' : 'hidden'} md:block flex-grow flex flex-col`}>
                                    <CardContent className="p-5 md:p-6 space-y-4 flex-grow">
                                        <p className="text-xs font-black uppercase tracking-widest text-safety-orange mb-4">FOR BUILDERS WHO WANT TO LOOK PROFESSIONAL AND STOP LOSING JOBS DUE TO WEAK ONLINE PRESENCE.</p>

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
                                            "You stop looking like a "maybe" and start looking like a real business people call."
                                        </div>
                                        <a href="#contact" className="w-full">
                                            <Button className="w-full bg-white text-black hover:bg-white/90 rounded-none h-12 font-black uppercase tracking-widest">
                                                Check Availability
                                            </Button>
                                        </a>
                                    </CardFooter>
                                </div>
                            </Card>
                        </motion.div>

                        {/* PACKAGE 3 (Highlighted Middle) - EXACT structure from landing page */}
                        <motion.div whileHover={hoverLift} className="h-full relative scale-105 z-10 shadow-2xl shadow-safety-orange/10">
                            <Card className="bg-white/5 border-4 border-safety-orange rounded-none h-full flex flex-col relative">
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
                                            <div className="text-[35px] font-black italic text-safety-orange">From $7,900</div>
                                            <div className="mt-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                                                (Most projects land between $8,500 – $15,000)
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
                                            FOR TRADES READY TO CAPTURE MORE OPPORTUNITIES AND RUN A MORE AUTOMATED, RELIABLE JOB FLOW.</p>

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
                                                <div className="space-y-4">
                                                    {/* HIGHLIGHTED ITEMS CONTAINER */}
                                                    <div className="border border-safety-orange/80 bg-safety-orange/5 p-4 rounded-md shadow-[0_0_15px_rgba(255,107,0,0.3)] relative overflow-hidden">
                                                        {/* Pulsing overlay effect */}
                                                        <div className="absolute inset-0 border-2 border-safety-orange/50 rounded-md animate-pulse pointer-events-none"></div>

                                                        <ul className="space-y-3 relative z-10">
                                                            {[
                                                                "SETUP DESIGNED TO HELP YOU SHOW UP MORE WHEN SEARCHING LOCALLY AND IN AI",
                                                                {
                                                                    content: (
                                                                        <CollapsibleDetail title="AFTER-HOURS, MISSED-CALL & RECEPTIONIST HANDLING">
                                                                            <ul className="pl-4 mt-2 space-y-1 list-disc text-xs text-white/60 font-normal">
                                                                                <li>HANDLES MULTIPLE CALLERS AT THE SAME TIME (NO HOLD, NO VOICEMAIL)</li>
                                                                                <li>EVERY CALL ANSWERED, EVEN WHEN YOU'RE ALREADY BUSY</li>
                                                                            </ul>
                                                                        </CollapsibleDetail>
                                                                    )
                                                                },
                                                                "ENQUIRIES ROUTED SO NOTHING SLIPS THROUGH THE CRACKS",
                                                                "LINKEDIN PROFILE SETUP",
                                                                {
                                                                    content: (
                                                                        <CollapsibleDetail title="PROMOTIONAL VIDEOS OR AI VISUAL CONTENT">
                                                                            <ul className="pl-4 mt-2 space-y-1 list-disc text-xs text-white/60 font-normal uppercase">
                                                                                <li>USED ON YOUR WEBSITE OR ADS TO BUILD TRUST FAST</li>
                                                                                <li>3 videos x 10-15 secs included in the package, additional videos quote separately</li>
                                                                            </ul>
                                                                        </CollapsibleDetail>
                                                                    )
                                                                }
                                                            ].map((item, i) => (
                                                                <li key={`highlight-${i}`} className="flex items-start gap-3 text-sm font-bold text-white">
                                                                    <Check className="text-safety-orange w-4 h-4 flex-shrink-0 mt-0.5" />
                                                                    <div>
                                                                        {item.content || item}
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* STANDARD ITEMS (BOTTOM) */}
                                                    <ul className="space-y-3 px-1">
                                                        {[
                                                            "EXTRA SERVICE & SUBURB PAGES BUILT AROUND REAL LOCAL SEARCHES",
                                                            {
                                                                content: (
                                                                    <CollapsibleDetail title="SIMPLE TRACKING TO SEE:">
                                                                        <ul className="pl-4 mt-2 space-y-1 list-disc text-xs text-white/60 font-normal">
                                                                            <li>WHERE ENQUIRIES COME FROM</li>
                                                                            <li>WHICH PAGES BRING CALLS</li>
                                                                            <li>WHAT'S WORTH SPENDING MONEY ON</li>
                                                                        </ul>
                                                                    </CollapsibleDetail>
                                                                )
                                                            },
                                                            {
                                                                content: (
                                                                    <CollapsibleDetail title="SYSTEMS SELECTED BASED ON:">
                                                                        <ul className="pl-4 mt-2 space-y-1 list-disc text-xs text-white/60 font-normal">
                                                                            <li>YOUR TRADE</li>
                                                                            <li>YOUR WORKLOAD</li>
                                                                            <li>HOW AGGRESSIVE YOU WANT TO GROW</li>
                                                                        </ul>
                                                                    </CollapsibleDetail>
                                                                )
                                                            }
                                                        ].map((item, i) => (
                                                            <li key={`standard-${i}`} className="flex items-start gap-3 text-sm font-bold text-white/80">
                                                                <Check className="text-safety-orange w-4 h-4 flex-shrink-0 mt-0.5" />
                                                                <div>
                                                                    {item.content || item}
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
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
                                                        Receptionist usage is billed separately based on call volume. We set this up to be cost-effective and scale only when needed.
                                                    </p>
                                                    <p className="text-[10px] uppercase font-bold text-white/40 mt-2 italic animate-in fade-in slide-in-from-top-1 duration-200 delay-75">We scope this before anything is built — no surprises.</p>
                                                </>
                                            )}
                                        </div>
                                        <a href="#contact" className="w-full">
                                            <Button className="w-full bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none h-12 font-black uppercase tracking-widest">
                                                Check Growth Availability
                                            </Button>
                                        </a>
                                    </CardFooter>
                                </div>
                            </Card>
                        </motion.div>

                        {/* PACKAGE 2 (Standard Right) - EXACT structure from landing page */}
                        <motion.div whileHover={hoverLift} className="h-full">
                            <Card className="bg-white/5 border-2 border-white/10 rounded-none h-full flex flex-col">
                                <CardHeader
                                    className="p-5 md:p-6 border-b border-white/10 cursor-pointer md:cursor-default transition-colors hover:bg-white/5 md:hover:bg-transparent"
                                    onClick={() => togglePackage(2)}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-xs uppercase font-black tracking-widest text-white/40 mb-2">PACKAGE 2</CardTitle>
                                            <div className="text-xl font-black uppercase mb-4">LOCAL JOBS ENGINE</div>
                                            <div className="text-3xl font-black italic text-safety-orange">$3,900</div>
                                            <div className="mt-2">
                                                <p className="text-xs font-black uppercase tracking-widest text-white/40">+ $399 / quarter</p>
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
                                        <p className="text-xs font-black uppercase tracking-widest text-safety-orange mb-4">FOR BUILDERS WHO WANT STEADY ENQUIRIES WITHOUT ADDING ADMIN OR MISSED CALLS.</p>

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

                                        <div className="space-y-4">
                                            {[
                                                "Contact & quote forms",
                                                "Enquiry tracking (nothing gets lost)",
                                                "Website assistance chatbot",
                                                "Custom branded trade templates (SWMS / reports)",
                                                "Service & suburb pages (basic)",
                                                "Ongoing updates & support (within scope)"
                                            ].map((item, i) => (
                                                <div key={i} className="flex gap-3 text-sm font-bold uppercase tracking-tight">
                                                    <Check className="text-safety-orange w-4 h-4 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="p-5 md:p-6 pt-0 flex flex-col gap-4">
                                        <div className="bg-white/10 p-4 text-xs font-black uppercase tracking-widest text-center italic w-full">
                                            "You miss fewer calls, look more established, and turn attention into booked work."
                                        </div>
                                        <a href="#contact" className="w-full">
                                            <Button className="w-full bg-white text-black hover:bg-white/90 rounded-none h-12 font-black uppercase tracking-widest">
                                                Get The Jobs Engine Ready
                                            </Button>
                                        </a>
                                    </CardFooter>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Contact Section - COPIED EXACT structure from landing page */}
            <motion.section
                id="contact"
                className="py-20 text-center relative overflow-hidden"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="absolute inset-0 blueprint-grid opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">

                    {formStatus === 'success' ? (
                        <div className="max-w-xl mx-auto bg-green-950/20 border border-green-500/30 p-8 md:p-12 rounded-sm">
                            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-4 text-white">
                                You're in the queue.
                            </h2>
                            <p className="text-lg md:text-xl text-white/80 font-medium mb-6">
                                Check your email shortly for your booking options and next steps.
                            </p>
                            <p className="text-xs font-black uppercase tracking-widest text-white/40 border-t border-white/10 pt-4">
                                No pressure. No hard sell.
                            </p>
                        </div>
                    ) : (
                        <div className="max-w-xl mx-auto">
                            <div className="mb-10">
                                <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase italic leading-none tracking-tighter text-white">
                                    Ready To Get More <br /> <span className="text-safety-orange">Quality Building Jobs?</span>
                                </h2>
                            </div>

                            <form onSubmit={handleSubmit} className="text-left space-y-6 bg-zinc-900/80 p-6 md:p-8 border border-white/10 backdrop-blur-sm shadow-2xl">

                                {/* Full Name */}
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Full Name <span className="text-red-500">*</span></label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full bg-white/5 border border-white/10 p-3 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange transition-colors rounded-sm font-medium"
                                        placeholder="Your Name"
                                    />
                                </div>

                                {/* Phone & Email Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Phone Number <span className="text-red-500">*</span></label>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            maxLength="12"
                                            className={`w-full bg-white/5 border ${phoneError ? 'border-red-500' : 'border-white/10'} p-3 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange transition-colors rounded-sm font-medium`}
                                            placeholder="Best number to reach you"
                                        />
                                        {phoneError && (
                                            <p className="text-red-500 text-xs font-bold mt-1 uppercase tracking-wider">{phoneError}</p>
                                        )}
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Email <span className="text-red-500">*</span></label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/5 border border-white/10 p-3 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange transition-colors rounded-sm font-medium"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>

                                {/* Business Name & Location */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Business Name</label>
                                        <input
                                            type="text"
                                            name="business"
                                            value={formData.business}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/5 border border-white/10 p-3 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange transition-colors rounded-sm font-medium"
                                            placeholder="Your building business"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Service Area / Location <span className="text-red-500">*</span></label>
                                        <input
                                            required
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/5 border border-white/10 p-3 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange transition-colors rounded-sm font-medium"
                                            placeholder="Where do you service?"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Message / Additional Info</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full bg-white/5 border border-white/10 p-3 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange transition-colors rounded-sm font-medium min-h-[100px]"
                                        placeholder="Anything else we should know?"
                                    />
                                </div>

                                <div className="pt-2 gap-4 flex flex-col items-center">
                                    <Button
                                        type="submit"
                                        disabled={formStatus === 'submitting'}
                                        className="w-full bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none py-6 text-xl font-black uppercase tracking-widest shadow-xl shadow-safety-orange/20"
                                    >
                                        {formStatus === 'submitting' ? (
                                            <span className="flex items-center gap-2">
                                                <Loader2 className="w-6 h-6 animate-spin" /> Sending...
                                            </span>
                                        ) : (
                                            "GET MY CUSTOM QUOTE"
                                        )}
                                    </Button>

                                    <p className="text-center text-xs md:text-sm font-bold text-white/80 mt-2">
                                        You'll receive a detailed quote tailored to your building business.
                                    </p>

                                    <div className="flex flex-col md:flex-row gap-4 mt-2">
                                        <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest font-bold flex items-center gap-2">
                                            <CheckCircle2 className="w-3 h-3 text-green-500" /> No sales pressure
                                        </p>
                                        <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest font-bold flex items-center gap-2">
                                            <CheckCircle2 className="w-3 h-3 text-green-500" /> Real improvement suggestions
                                        </p>
                                    </div>
                                </div>

                            </form>
                        </div>
                    )}
                </div>
            </motion.section>

            {/* Footer - Same structure */}
            <motion.footer
                className="bg-black py-20 border-t border-white/10"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="container mx-auto px-6">
                    <div className="text-center">
                        <p className="font-black uppercase tracking-widest text-white/40 text-sm mb-4">Your Trade Partner</p>
                        <p className="text-white/40 mb-6">Websites & Digital Growth Systems for Australian Trades</p>
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-black uppercase tracking-widest text-white/60">
                            <a href="/" className="hover:text-safety-orange transition-colors">Home</a>
                            <span className="text-white/20">•</span>
                            <a href="/guide" className="hover:text-safety-orange transition-colors">Guide</a>
                            <span className="text-white/20">•</span>
                            <a href="/blueprint" className="hover:text-safety-orange transition-colors">Blueprint</a>
                            <span className="text-white/20">•</span>
                            <a href="/#packages" className="hover:text-safety-orange transition-colors">All Packages</a>
                        </div>
                    </div>
                </div>
            </motion.footer>
        </div>
    );
};

export default BuilderWebsites;
