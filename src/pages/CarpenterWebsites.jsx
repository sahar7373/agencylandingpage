import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Ruler, ArrowRight, Check, ChevronDown, ChevronUp, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';
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

const CarpenterWebsites = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        business: '',
        location: '',
        trade: 'Carpenter',
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
                trade: 'Carpenter',
                message: ''
            });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans selection:bg-safety-orange selection:text-white">
            <Helmet>
                <title>Carpenter Website Design Australia | Websites That Get More Calls | Your Trade Partner</title>
                <meta name="description" content="We build websites for Australian carpenters that rank on Google and turn visitors into calls. Custom cabinets, decks, fit-outs, framing — we know your trade. Clear pricing, 2–4 week turnaround." />
                <link rel="canonical" href="https://yourtradepartner.com.au/carpenter-websites" />
                <meta name="robots" content="index, follow" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Carpenter Website Design Australia | Your Trade Partner" />
                <meta property="og:description" content="We build websites for Australian carpenters that rank on Google and turn visitors into calls." />
                <meta property="og:url" content="https://yourtradepartner.com.au/carpenter-websites" />
                <meta property="og:image" content="https://yourtradepartner.com.au/og-image.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Carpenter Website Design",
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
                                "name": "Carpenters and Carpentry Businesses in Australia"
                            }
                        }
                    `}
                </script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "How long does it take to build a carpenter's website?", "acceptedAnswer": { "@type": "Answer", "text": "Depending on the package, most carpenter websites are live within 2-4 weeks. The Local Jobs Engine (Package 2) typically takes 2-3 weeks, while the Growth System (Package 3) with advanced features can take 3-4 weeks. We'll give you a clear timeline during the scoping call." } },
                        { "@type": "Question", "name": "Will my carpenter website show up on Google?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every website we build is optimised for local search from day one. This includes proper page structure, fast loading speeds, mobile responsiveness, and suburb-specific service pages. For Package 3, we also implement advanced local SEO and AI visibility strategies to help you rank higher for 'carpenter near me' searches." } },
                        { "@type": "Question", "name": "Do I need to provide content and photos?", "acceptedAnswer": { "@type": "Answer", "text": "We make it easy. You provide your business details, service info, and any existing photos. We'll handle the rest—writing professional copy, sourcing additional images if needed, and structuring everything for maximum impact. If you have great project photos, even better." } },
                        { "@type": "Question", "name": "What if I need changes after the website is live?", "acceptedAnswer": { "@type": "Answer", "text": "That's included. Package 2 and 3 both include ongoing updates and support within scope. Need to add a new service? Update your service area? Change a phone number? We handle it. Major redesigns or additional pages may be quoted separately." } },
                        { "@type": "Question", "name": "Can I get more leads without running ads?", "acceptedAnswer": { "@type": "Answer", "text": "Organic leads are possible, but they take time and consistent effort beyond just having a website. SEO, content updates, and Google Business Profile management all require ongoing work—and even then, results aren't guaranteed. If you want predictable, scalable lead flow without waiting months, ads are the faster path. Package 3 includes Google & Facebook Ads management with a $89.99 free ad credit, so you can start getting calls within days, not months." } },
                        { "@type": "Question", "name": "How much does a carpenter website cost in Australia?", "acceptedAnswer": { "@type": "Answer", "text": "A professional carpentry website in Australia typically costs between $1,900 and $7,900+ depending on the package. Our Package 1 starts at $1,900 for a solid trade presence, while Package 2 at $3,900 includes full local SEO and suburb pages. With custom joinery and renovation jobs often worth $5,000–$30,000, a single new client easily covers the entire website investment." } },
                        { "@type": "Question", "name": "What should a carpenter website include?", "acceptedAnswer": { "@type": "Answer", "text": "A carpentry website should showcase your craftsmanship with detailed project photos, list your specific services (custom cabinetry, decking, fit-outs), display your licence and insurance credentials, and make it simple for clients to request quotes. Testimonials from previous clients and before-and-after photos are especially effective for carpenters." } },
                        { "@type": "Question", "name": "Do carpenters need suburb pages on their website?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — suburb pages are essential for carpenters. When a homeowner searches 'carpenter in [suburb]' they want someone local who can visit for a quote. Suburb-specific pages tell Google you serve that area, improving your rankings for local searches and putting your business in front of the right customers at the right time." } }
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
                        currentLabel="Carpenter Websites"
                        currentPath="/carpenter-websites"
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
                            FOR AUSTRALIAN CARPENTERS
                        </motion.p>

                        {/* Main Headline - EXACT same typography scale */}
                        <motion.h1 className="text-[52px] md:text-[80px] font-black leading-[0.9] mb-8 uppercase italic" variants={itemVariants}>
                            Carpenter Websites <br />
                            <span className="text-safety-orange">That Get You Booked</span>
                        </motion.h1>

                        {/* SEO Keyword Subtitle */}
                        <motion.p className="text-xs text-white/35 font-bold tracking-widest mb-2 -mt-4" variants={itemVariants}>
                            Professional carpenter website design for Australian carpentry and joinery businesses
                        </motion.p>

                        {/* Sub Headline */}
                        <motion.p className="text-lg md:text-xl text-white/90 font-medium mb-10 leading-relaxed max-w-3xl mx-auto" variants={itemVariants}>
                            When a homeowner needs custom cabinetry, a deck, or a fit-out, they go with the carpenter whose work looks polished online — not the one with no web presence. Your website showcases the craftsmanship that closes the job.
                        </motion.p>

                        {/* Trust Position Strip - EXACT same as landing page */}
                        <motion.div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 mb-10 rounded-full md:text-sm backdrop-blur-sm" variants={itemVariants}>
                            <ShieldCheck className="text-safety-orange w-5 h-5 flex-shrink-0" />
                            <p className="font-semibold text-white/80">
                                Websites built specifically for Australian carpenters — <span className="text-white/40">not generic templates.</span>
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
                                Clear pricing • No lock-in contracts • Built for carpenters
                            </p>
                        </motion.div>

                        {/* Proof Strip - EXACT same as landing page */}
                        <motion.div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-12 text-sm text-white/60 font-bold uppercase tracking-wider" variants={itemVariants}>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Built for Australian carpenters</span>
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
                            Why carpenter businesses <br className="hidden md:block" /> need professional websites
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
                                    detail: "Licensed carpenter? Level 2 ASP? Solar accredited? These aren't just credentials—they're deal-makers. Displaying them prominently on your website builds authority and separates you from unlicensed competitors who undercut on price."
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

            {/* What Makes an Carpenter's Website Actually Work Section */}
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
                            What Makes an Carpenter's Website <span className="text-safety-orange">Actually Work</span>
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
                                        "Optimised for 'carpenter near me' searches",
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

            {/* Carpentry Services Grid */}
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
                            Websites Built for Every <span className="text-safety-orange">Carpentry Service</span>
                        </h2>
                        <p className="text-white/40 text-center font-bold uppercase tracking-widest mb-16">
                            We know the carpentry trade — your website will speak your customers' language.
                        </p>
                        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" variants={containerVariants}>
                            {[
                                "Custom Cabinetry", "Decking & Pergolas", "Timber Framing", "Interior Fit-Outs",
                                "Door & Window Installation", "Staircase Construction", "Flooring Installation", "Renovations & Extensions",
                                "Built-In Wardrobes", "Commercial Fitouts", "Timber Cladding", "Emergency Repairs"
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
                            We Help Carpenters <span className="text-safety-orange">Across All of Australia</span>
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
                            Common Questions <span className="text-safety-orange">From Carpenters</span>
                        </h2>

                        <motion.div className="space-y-6" variants={containerVariants}>
                            {[
                                {
                                    question: "How long does it take to build a carpenter's website?",
                                    answer: "Depending on the package, most carpenter websites are live within 2-4 weeks. The Local Jobs Engine (Package 2) typically takes 2-3 weeks, while the Growth System (Package 3) with advanced features can take 3-4 weeks. We'll give you a clear timeline during the scoping call."
                                },
                                {
                                    question: "Will my carpentry website show up on Google?",
                                    answer: "Yes. Every website we build is optimised for local search from day one. This includes proper page structure, fast loading speeds, mobile responsiveness, and suburb-specific service pages. For Package 3, we also implement advanced local SEO and AI visibility strategies to help you rank higher for 'carpenter near me' searches."
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
                                    question: "How much does a carpenter website cost in Australia?",
                                    answer: "A professional carpentry website in Australia typically costs between $1,900 and $7,900+ depending on the package. Our Package 1 starts at $1,900 for a solid trade presence, while Package 2 at $3,900 includes full local SEO and suburb pages. With custom joinery and renovation jobs often worth $5,000–$30,000, a single new client easily covers the entire website investment."
                                },
                                {
                                    question: "What should a carpenter website include?",
                                    answer: "A carpentry website should showcase your craftsmanship with detailed project photos, list your specific services (custom cabinetry, decking, fit-outs), display your licence and insurance credentials, and make it simple for clients to request quotes. Testimonials from previous clients and before-and-after photos are especially effective for carpenters."
                                },
                                {
                                    question: "Do carpenters need suburb pages on their website?",
                                    answer: "Yes — suburb pages are essential for carpenters. When a homeowner searches 'carpenter in [suburb]' they want someone local who can visit for a quote. Suburb-specific pages tell Google you serve that area, improving your rankings for local searches and putting your business in front of the right customers at the right time."
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

            {/* ── Licensing Section ── */}
            <motion.section
                className="py-24 md:py-32 border-b border-white/5 bg-black/40"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-4">
                            <span className="text-xs font-black uppercase tracking-widest text-safety-orange border border-safety-orange/30 px-4 py-1.5 inline-block mb-6">
                                Australian Compliance Guide
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic text-center mb-4">
                            What Your Carpentry Website Must Display <span className="text-safety-orange">(By Australian Law)</span>
                        </h2>
                        <p className="text-white/40 text-center font-bold uppercase tracking-widest mb-16 max-w-2xl mx-auto">
                            Licensing rules vary by state. Displaying the right credentials builds trust and keeps you legally covered.
                        </p>

                        {/* 3 Licence Type Cards */}
                        <div className="mb-12">
                            <h3 className="text-2xl md:text-3xl font-black uppercase italic text-center mb-8">
                                The 3 Carpenter Licence <span className="text-safety-orange">Types</span>
                            </h3>
                            <motion.div
                                className="grid md:grid-cols-3 gap-6"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                {[
                                    {
                                        title: "Trade Certificate",
                                        description: "Proves you completed your apprenticeship and hold a Certificate III in Carpentry. Required to work as a qualified carpenter anywhere in Australia. This is your baseline credential — display it upfront.",
                                    },
                                    {
                                        title: "Contractor Licence",
                                        description: "Required to quote and contract independently. Different from your trade certificate. Each state sets its own dollar threshold — from $5,000 in NSW to $20,000 in WA. This is what clients look for when hiring a sole trader or small carpentry business.",
                                    },
                                    {
                                        title: "Owner-Builder Permit",
                                        description: "What homeowners use to do their own building work. Showing you hold a proper Contractor Licence — not an owner-builder permit — is a major trust signal. Clients want a qualified professional, not someone operating under an exemption.",
                                    },
                                ].map((item, i) => (
                                    <motion.div key={i} variants={itemVariants} className="bg-white/5 border border-white/10 p-6">
                                        <div className="mb-4"><ShieldCheck className="w-6 h-6 text-safety-orange" /></div>
                                        <h4 className="font-black uppercase text-white mb-3 text-sm tracking-tight">{item.title}</h4>
                                        <p className="text-xs text-white/60 leading-relaxed">{item.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* State Cards */}
                        <div className="mb-12">
                            <h3 className="text-2xl md:text-3xl font-black uppercase italic text-center mb-8">
                                State-by-State <span className="text-safety-orange">Requirements</span>
                            </h3>
                            <motion.div
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                {[
                                    {
                                        state: "NSW",
                                        authority: "NSW Fair Trading",
                                        act: "Home Building Act 1989",
                                        licenceType: "Contractor Licence (Carpentry)",
                                        requirement: "Work over $5,000 (incl. GST) requires a licence. Display your licence number on your website, quotes, invoices, and all advertising.",
                                        tip: "A Contractor Licence (Carpentry) also covers joinery — useful if you do fit-outs alongside framing work.",
                                    },
                                    {
                                        state: "VIC",
                                        authority: "Victorian Building Authority (VBA)",
                                        act: "Building Act 1993",
                                        licenceType: "Domestic Builder (Limited / Unlimited)",
                                        requirement: "Domestic building work over $10,000 requires VBA registration. Display your registration number on all advertising and documentation.",
                                        tip: "Structural framing, floor, or roof work as part of a larger domestic job may require Domestic Builder registration — not just a trade cert.",
                                    },
                                    {
                                        state: "QLD",
                                        authority: "Queensland Building & Construction Commission",
                                        act: "QBCC Act 1991",
                                        licenceType: "Carpenter / Joiner Trade Licence",
                                        requirement: "QBCC licence number must appear on all advertising including your website. Required for any residential or commercial carpentry work.",
                                        tip: "QBCC also requires a Minimum Financial Requirements (MFR) report — showing clients you meet this standard adds an extra credibility layer.",
                                    },
                                    {
                                        state: "WA",
                                        authority: "DMIRS / Building Services Board",
                                        act: "Building Services (Registration) Act 2011",
                                        licenceType: "Building Contractor (Carpentry Specialty)",
                                        requirement: "Work over $20,000 requires registration. Registration number must be displayed on all advertising and signage.",
                                        tip: "No specific carpenter's licence is needed if employed by a registered builder — but contracting independently over $20,000 triggers full registration.",
                                    },
                                    {
                                        state: "SA",
                                        authority: "Consumer & Business Services (CBS)",
                                        act: "Building Work Contractors Act 1995",
                                        licenceType: "Building Work Contractor Licence (Carpentry)",
                                        requirement: "Work over $12,000 requires a licence. Licence number on all advertising and contracts. Non-compliance can result in significant fines.",
                                        tip: "SA distinguishes between general and specialist contractor licences — confirm which class covers your scope of work before advertising.",
                                    },
                                    {
                                        state: "ACT",
                                        authority: "Access Canberra (ACT Planning)",
                                        act: "Construction Occupations (Licensing) Act 2004",
                                        licenceType: "Construction Occupation Licence",
                                        requirement: "All building work requires an occupational licence. Licence class and number must be displayed on all advertising materials.",
                                        tip: "ACT is the strictest — even minor structural carpentry may need a licensed builder to sign off. Keep your credentials clearly visible on your site.",
                                    },
                                ].map((item, i) => (
                                    <motion.div key={i} variants={itemVariants} className="bg-white/5 border border-white/10 hover:border-safety-orange/30 transition-colors p-6 flex flex-col gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-safety-orange/10 border border-safety-orange/30 flex items-center justify-center flex-shrink-0">
                                                <span className="text-safety-orange font-black text-sm">{item.state}</span>
                                            </div>
                                            <div>
                                                <p className="font-black uppercase text-white text-sm tracking-tight">{item.authority}</p>
                                                <p className="text-xs text-white/40 font-bold">{item.act}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs font-black uppercase tracking-widest text-safety-orange mb-1">Licence Type</p>
                                            <p className="text-sm text-white/70 font-bold">{item.licenceType}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs font-black uppercase tracking-widest text-white/50 mb-1">What to Display</p>
                                            <p className="text-xs text-white/60 leading-relaxed">{item.requirement}</p>
                                        </div>
                                        <div className="mt-auto pt-4 border-t border-white/5 flex items-start gap-2">
                                            <ShieldCheck className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <p className="text-xs text-white/50 italic">{item.tip}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Universal Requirements */}
                        <div className="mb-12">
                            <h3 className="text-2xl md:text-3xl font-black uppercase italic text-center mb-8">
                                Plus These <span className="text-safety-orange">Everywhere</span>
                            </h3>
                            <motion.div
                                className="grid md:grid-cols-3 gap-6"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                            >
                                {[
                                    {
                                        icon: <ShieldCheck className="w-6 h-6 text-safety-orange" />,
                                        title: "Public Liability Insurance",
                                        description: "Minimum $5M–$20M coverage required by most builders and clients before a carpenter sets foot on site. Display your insurer and policy number — clients ask for this before signing off any job.",
                                    },
                                    {
                                        icon: <ShieldCheck className="w-6 h-6 text-safety-orange" />,
                                        title: "White Card (Construction Induction)",
                                        description: "Mandatory for all construction site workers across Australia. Reference your White Card on your website to show clients you operate to worksite safety standards — not every carpenter does.",
                                    },
                                    {
                                        icon: <ShieldCheck className="w-6 h-6 text-safety-orange" />,
                                        title: "Certificate III in Carpentry",
                                        description: "Your trade qualification. Displaying it prominently separates you from unlicensed operators who cut corners on price. Clients use it to verify you're a qualified professional — not a DIY cowboy.",
                                    },
                                ].map((item, i) => (
                                    <motion.div key={i} variants={itemVariants} className="bg-white/5 border border-white/10 p-6">
                                        <div className="mb-4">{item.icon}</div>
                                        <h4 className="font-black uppercase text-white mb-3 text-sm tracking-tight">{item.title}</h4>
                                        <p className="text-xs text-white/60 leading-relaxed">{item.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>

                        <div className="text-center mt-4">
                            <a href="#contact">
                                <Button className="bg-safety-orange hover:bg-safety-orange/90 text-black font-black uppercase tracking-wider px-8 py-4 text-sm">
                                    Get a Compliant Carpentry Website <ArrowRight className="w-4 h-4 ml-2 inline" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* ── Comparison Table ── */}
            <motion.section
                className="py-24 md:py-32 border-b border-white/5 bg-black/20"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic text-center mb-4">
                            How We're <span className="text-safety-orange">Different</span>
                        </h2>
                        <p className="text-white/40 text-center font-bold uppercase tracking-widest mb-16">
                            Built by people who understand tradies — not generic web agencies.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="text-left p-4 text-sm font-black uppercase tracking-widest text-white/40 w-2/5"></th>
                                        <th className="p-4 text-center bg-safety-orange/10 border-t-4 border-safety-orange">
                                            <p className="text-safety-orange font-black uppercase text-sm tracking-widest">Your Trade Partner</p>
                                        </th>
                                        <th className="p-4 text-center">
                                            <p className="text-white/40 font-black uppercase text-sm tracking-widest">Generic Agency</p>
                                        </th>
                                        <th className="p-4 text-center">
                                            <p className="text-white/40 font-black uppercase text-xs tracking-widest">DIY (Wix / Squarespace)</p>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { label: "Built for Australian carpenters", ytp: true, agency: false, diy: false },
                                        { label: "State licensing compliance copy", ytp: true, agency: false, diy: false },
                                        { label: "Project portfolio / before-after", ytp: true, agency: "varies", diy: "maybe" },
                                        { label: "Suburb-specific SEO pages", ytp: true, agency: "extra cost", diy: false },
                                        { label: "Mobile-first, click-to-call", ytp: true, agency: "varies", diy: "maybe" },
                                        { label: "Ongoing updates included", ytp: true, agency: "extra cost", diy: false },
                                        { label: "AI visibility (schema + AEO)", ytp: true, agency: false, diy: false },
                                        { label: "No lock-in contract", ytp: true, agency: false, diy: false },
                                    ].map((row, i) => (
                                        <tr key={i} className={`border-t border-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
                                            <td className="p-4 text-sm font-bold text-white/70 uppercase tracking-tight">{row.label}</td>
                                            <td className="p-4 text-center bg-safety-orange/5">
                                                {row.ytp === true ? <Check className="w-5 h-5 text-green-500 mx-auto" /> :
                                                 row.ytp === false ? <span className="text-red-500 font-black text-lg">✗</span> :
                                                 <span className="text-yellow-500 text-xs font-black uppercase">{row.ytp}</span>}
                                            </td>
                                            <td className="p-4 text-center">
                                                {row.agency === true ? <Check className="w-5 h-5 text-green-500 mx-auto" /> :
                                                 row.agency === false ? <span className="text-red-500 font-black text-lg">✗</span> :
                                                 <span className="text-yellow-500 text-xs font-black uppercase">{row.agency}</span>}
                                            </td>
                                            <td className="p-4 text-center">
                                                {row.diy === true ? <Check className="w-5 h-5 text-green-500 mx-auto" /> :
                                                 row.diy === false ? <span className="text-red-500 font-black text-lg">✗</span> :
                                                 <span className="text-yellow-500 text-xs font-black uppercase">{row.diy}</span>}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className="text-center text-white/30 font-bold uppercase tracking-widest text-xs mt-10">
                                We build websites and automation systems — not lead generation retainers. You own your foundation.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* ── How It Works ── */}
            <motion.section
                className="py-24 md:py-32 border-b border-white/5 bg-black/30"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic text-center mb-4">
                            How It <span className="text-safety-orange">Works</span>
                        </h2>
                        <p className="text-white/40 text-center font-bold uppercase tracking-widest mb-16">
                            From first chat to live website — clear, fast, no surprises.
                        </p>

                        <motion.div
                            className="grid md:grid-cols-4 gap-8 relative"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {[
                                {
                                    step: "01",
                                    title: "Quick Chat",
                                    description: "15-minute call to understand your trade, the services you offer, and the suburbs you want to dominate.",
                                },
                                {
                                    step: "02",
                                    title: "We Scope & Build",
                                    description: "We write the copy, handle the design, and build your site around your carpentry services — no templates.",
                                },
                                {
                                    step: "03",
                                    title: "You Review & Launch",
                                    description: "One clear round of feedback. You approve, we publish. Most carpenter sites go live within 2–4 weeks.",
                                },
                                {
                                    step: "04",
                                    title: "Ongoing Partnership",
                                    description: "Updates, SEO monitoring, and performance tracking. Your site keeps working as your business grows.",
                                },
                            ].map((item, i) => (
                                <motion.div key={i} variants={itemVariants} className="text-center">
                                    <div className="w-20 h-20 bg-safety-orange/10 border-2 border-safety-orange/30 flex items-center justify-center mx-auto mb-6">
                                        <span className="text-3xl font-black text-safety-orange">{item.step}</span>
                                    </div>
                                    <h3 className="text-xl font-black uppercase mb-4">{item.title}</h3>
                                    <p className="text-sm text-white/60 font-bold leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="mt-16 text-center">
                            <a href="#contact">
                                <Button className="bg-safety-orange hover:bg-safety-orange-hover text-white px-8 py-6 text-lg font-black uppercase tracking-widest rounded-none">Book Your Free Strategy Call</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* SUCCESS STORY — ZJC Renovations */}
            <motion.section
                className="py-24 md:py-32 border-b border-white/5 bg-zinc-950 relative overflow-hidden"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="absolute inset-0 bg-safety-orange/5 pointer-events-none" />
                <div className="absolute top-0 left-0 right-0 h-1 bg-safety-orange pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 bg-safety-orange px-4 py-2 mb-6">
                                <span className="text-[10px] font-black uppercase tracking-widest text-white">✓ Real Client Result — Carpenter</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-4">
                                See What We Built for a <span className="text-safety-orange">Real Carpenter</span>
                            </h2>
                            <p className="text-white/50 font-bold uppercase tracking-widest text-sm">
                                ZJC Renovations — ACT
                            </p>
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className="bg-white overflow-hidden shadow-[0_0_60px_rgba(255,102,0,0.25)] border-2 border-safety-orange/60"
                        >
                            <div className="grid md:grid-cols-2">
                                <div className="relative h-[280px] md:h-auto min-h-[420px] overflow-hidden">
                                    <img
                                        src="/projects/zjc/homepage.png"
                                        alt="ZJC Renovations website — ACT carpenter case study by Your Trade Partner"
                                        className="w-full h-full object-cover object-top"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                                    <div className="absolute top-4 left-4 bg-safety-orange px-3 py-1.5">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-white">Live Website ↗</span>
                                    </div>
                                </div>

                                <div className="p-8 md:p-12 flex flex-col justify-between bg-white">
                                    <div>
                                        <div className="text-7xl text-safety-orange/15 font-serif leading-none -mb-4">"</div>
                                        <p className="text-zinc-800 font-bold text-lg md:text-xl leading-relaxed mb-6 italic">
                                            The website, logo, and enquiry system made a big difference. Customers now contact us with clearer requests and are more confident in choosing us before we even pick up the phone.
                                        </p>
                                        <div className="flex items-center gap-3 mb-10">
                                            <div className="w-8 h-0.5 bg-safety-orange flex-shrink-0" />
                                            <span className="text-xs font-black uppercase tracking-widest text-zinc-400">ZJC Renovations — ACT</span>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">What We Delivered</p>
                                        <ul className="space-y-2.5">
                                            {[
                                                "8-page professional website built for local customers",
                                                "Custom business logo design",
                                                "Lead capture system with clear enquiry forms",
                                                "Google Business Profile setup for local visibility"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <div className="w-1.5 h-1.5 bg-safety-orange rounded-full mt-2 flex-shrink-0" />
                                                    <span className="text-sm font-bold text-zinc-700">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <a
                                            href="https://www.zjcrenovations.com.au/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center bg-safety-orange hover:bg-safety-orange-hover text-white px-6 py-4 text-sm font-black uppercase tracking-widest transition-colors"
                                        >
                                            View Live Website →
                                        </a>
                                        <a
                                            href="#contact"
                                            className="inline-flex items-center justify-center border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white px-6 py-4 text-sm font-black uppercase tracking-widest transition-colors"
                                        >
                                            Get One Like This
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="mt-10 text-center">
                            <p className="text-white/30 text-xs font-black uppercase tracking-widest mb-4">Also See Our Work For</p>
                            <div className="flex justify-center gap-8">
                                <a href="/painter-websites" className="text-sm font-black uppercase tracking-widest text-white/50 hover:text-safety-orange transition-colors border-b border-white/20 hover:border-safety-orange pb-1">
                                    Painters →
                                </a>
                                <a href="/roofer-websites" className="text-sm font-black uppercase tracking-widest text-white/50 hover:text-safety-orange transition-colors border-b border-white/20 hover:border-safety-orange pb-1">
                                    Roofers →
                                </a>
                            </div>
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
                                        <p className="text-xs font-black uppercase tracking-widest text-safety-orange mb-4">FOR CARPENTERS WHO WANT TO LOOK PROFESSIONAL AND STOP LOSING JOBS DUE TO WEAK ONLINE PRESENCE.</p>

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
                                        <p className="text-xs font-black uppercase tracking-widest text-safety-orange mb-4">FOR CARPENTERS WHO WANT STEADY ENQUIRIES WITHOUT ADDING ADMIN OR MISSED CALLS.</p>

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
                                    Ready To Get More <br /> <span className="text-safety-orange">Quality Carpentry Jobs?</span>
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
                                            placeholder="Your electrical business"
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
                                        You'll receive a detailed quote tailored to your carpentry business.
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

export default CarpenterWebsites;
