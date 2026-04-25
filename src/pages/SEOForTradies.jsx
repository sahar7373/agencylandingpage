import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Wrench, ArrowRight, ArrowLeft, Check, ChevronDown, ChevronUp, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import Breadcrumbs from '../components/Breadcrumbs';
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

const SEOForTradies = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        business: '',
        location: '',
        trade: '',
        message: ''
    });

    const [formStatus, setFormStatus] = React.useState('idle');
    const [phoneError, setPhoneError] = React.useState('');
    const [expandedPackages, setExpandedPackages] = React.useState([2]);
    const [pricingVariesOpen, setPricingVariesOpen] = React.useState(false);
    const [openFaqIndex, setOpenFaqIndex] = React.useState(null);

    const shouldReduceMotion = useReducedMotion();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 60, opacity: 0, scale: 0.95 },
        visible: {
            y: 0, opacity: 1, scale: 1,
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const sectionVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0, opacity: 1,
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const hoverLift = shouldReduceMotion ? {} : { y: -10, scale: 1.02 };
    const hoverTap = shouldReduceMotion ? {} : { scale: 0.98 };

    const togglePackage = (id) => {
        setExpandedPackages(prev =>
            prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
        );
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
        setTimeout(() => {
            setFormStatus('success');
            setFormData({ name: '', email: '', phone: '', business: '', location: '', trade: '', message: '' });
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans selection:bg-safety-orange selection:text-white">
            <Helmet>
                <title>SEO for Tradies Australia | Rank on Google & Get More Calls | Your Trade Partner</title>
                <meta name="description" content="SEO built specifically for Australian tradies. Get your trade business ranking on Google so customers find you first — before they call your competitor." />
                <link rel="canonical" href="https://yourtradepartner.com.au/seo-for-tradies" />
                <meta name="robots" content="index, follow" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="SEO for Tradies Australia | Your Trade Partner" />
                <meta property="og:description" content="Get your trade business found on Google. SEO built exclusively for Australian tradies — no jargon, just results." />
                <meta property="og:url" content="https://yourtradepartner.com.au/seo-for-tradies" />
                <meta property="og:image" content="https://yourtradepartner.com.au/og-image.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "SEO for Tradies",
                            "provider": {
                                "@type": "ProfessionalService",
                                "name": "Your Trade Partner",
                                "url": "https://yourtradepartner.com.au",
                                "areaServed": { "@type": "Country", "name": "Australia" }
                            },
                            "audience": {
                                "@type": "Audience",
                                "name": "Australian Tradies and Trade Businesses"
                            },
                            "description": "Local SEO services built exclusively for Australian trade businesses — helping tradies rank on Google and capture more enquiries."
                        }
                    `}
                </script>
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "How long does SEO take for a tradie business?", "acceptedAnswer": { "@type": "Answer", "text": "Most tradie businesses start seeing movement in Google rankings within 3–6 months of a properly built and optimised website. For competitive suburbs, it can take 6–12 months to reach the top positions. The upside: once you're there, it doesn't cost per click like ads do." } },
                        { "@type": "Question", "name": "Can I do my own SEO as a tradie?", "acceptedAnswer": { "@type": "Answer", "text": "The basics are learnable, but the time cost is high — and mistakes (like duplicate content or wrong suburb targeting) can actually hurt your ranking. Most tradies find that the time spent is better used on the tools. We handle the whole setup so you don't have to think about it." } },
                        { "@type": "Question", "name": "Do Google reviews help with SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — significantly. Google Business Profile reviews are one of the strongest local ranking signals. More reviews means higher placement in the map pack (the top 3 results you see on Google Maps). We help you set up a system that automatically prompts happy customers to leave reviews." } },
                        { "@type": "Question", "name": "Should I run Google Ads instead of SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Ads get results fast — but you pay every time someone clicks. SEO is slower to build but generates free traffic once it kicks in. Most tradies benefit from ads early on (Package 3 includes this) while SEO builds in the background, then scale back ad spend as organic traffic grows." } },
                        { "@type": "Question", "name": "Do I need to keep updating my website for SEO?", "acceptedAnswer": { "@type": "Answer", "text": "Google rewards sites that stay active and relevant. That means adding suburb pages, updating content, and keeping your Google profile current. We handle all of this for you as part of the ongoing partnership — you don't need to touch a thing." } }
                    ]
                })}</script>
            </Helmet>

            <nav className="border-b border-white/10 bg-construction-charcoal/95 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <a href="/" className="flex items-center gap-3 text-white hover:text-safety-orange transition-colors group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-xs font-black uppercase tracking-widest">Your Trade Partner</span>
                        </a>
                        <Badge className="bg-safety-orange/10 text-safety-orange border-safety-orange/20 hover:bg-safety-orange/10 pointer-events-none">
                            <Wrench className="w-3 h-3 mr-1" />
                            For Australian Tradies
                        </Badge>
                    </div>
                </div>
            </nav>

            <header className="relative pt-8 pb-24 md:pt-24 md:pb-44 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <Breadcrumbs
                        items={[{ label: 'Home', href: '/' }]}
                        currentLabel="SEO for Tradies"
                        currentPath="/seo-for-tradies"
                        className="mb-8"
                    />
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.p className="text-xs md:text-sm text-white/50 font-bold tracking-[0.2em] uppercase mb-6" variants={itemVariants}>
                            FOR AUSTRALIAN TRADIES
                        </motion.p>

                        <motion.h1 className="text-[48px] md:text-[80px] font-black leading-[0.9] mb-8 uppercase italic" variants={itemVariants}>
                            Get Found on Google <br />
                            <span className="text-safety-orange">Before Your Competitors Do</span>
                        </motion.h1>

                        <motion.p className="text-lg md:text-xl text-white/90 font-medium mb-10 leading-relaxed max-w-3xl mx-auto" variants={itemVariants}>
                            When someone in your area searches for your trade, they call whoever shows up first. If that's not you, the job goes to someone else. SEO fixes that — and once it's working, you don't pay per click.
                        </motion.p>

                        <motion.div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 mb-10 rounded-full md:text-sm backdrop-blur-sm" variants={itemVariants}>
                            <ShieldCheck className="text-safety-orange w-5 h-5 flex-shrink-0" />
                            <p className="font-semibold text-white/80">
                                Local SEO built specifically for Australian tradies — <span className="text-white/40">not generic campaigns.</span>
                            </p>
                        </motion.div>

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
                            <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest font-bold">
                                Clear pricing • No lock-in contracts • Built for tradies
                            </p>
                        </motion.div>

                        <motion.div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-12 text-sm text-white/60 font-bold uppercase tracking-wider" variants={itemVariants}>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Rank for local trade searches</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Free traffic — no cost per click</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                                <span>Enquiries into booked jobs</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </header>

            {/* Problem Section */}
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
                            Why tradies lose jobs <br className="hidden md:block" /> without knowing it
                        </h2>

                        <motion.div className="grid md:grid-cols-2 gap-8 mb-16" variants={containerVariants}>
                            {[
                                {
                                    title: "If you're not on page one, you don't exist",
                                    detail: "92% of people never scroll past the first page of Google results. If your business doesn't appear in the top results for your trade and suburb, you're invisible — even if you've been operating for 20 years. The job goes to whoever Google shows first."
                                },
                                {
                                    title: "The map pack wins most local jobs",
                                    detail: "The three business listings that appear under the map on Google get the majority of local clicks. Getting into that map pack requires a properly set up Google Business Profile, consistent reviews, and a website Google trusts. Without all three, you're locked out."
                                },
                                {
                                    title: "Competitors are already doing it",
                                    detail: "Every month you're not investing in SEO, a competitor is building authority in your suburb. SEO compounds over time — meaning the tradie who started six months ago is now harder to outrank. Starting later doesn't mean you can't win, but it does mean more ground to make up."
                                },
                                {
                                    title: "A slow or unprofessional website kills rankings",
                                    detail: "Google doesn't just look at your words — it measures how fast your site loads, whether it works on mobile, and how long people stay on the page. A slow, outdated website actively pushes you down the rankings, even if you've got great reviews."
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
                                The first tradie to show up <br />
                                <span className="text-safety-orange underline decoration-white/20 underline-offset-8">gets the call. It's that simple.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* What Tradie SEO Actually Includes */}
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
                            What Tradie SEO <span className="text-safety-orange">Actually Includes</span>
                        </h2>
                        <p className="text-white/40 text-center font-bold uppercase tracking-widest mb-16">
                            Five things that move the needle — nothing else.
                        </p>

                        <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
                            {[
                                {
                                    icon: "🎯",
                                    title: "Keyword Targeting",
                                    features: [
                                        "Research what locals actually search",
                                        "Target your trade + your suburb",
                                        "Find gaps competitors haven't claimed",
                                        "Focus on terms that convert to calls",
                                        "No wasted effort on irrelevant traffic"
                                    ]
                                },
                                {
                                    icon: "📍",
                                    title: "Local & Suburb Pages",
                                    features: [
                                        "Dedicated pages for each service area",
                                        "Content built around real local searches",
                                        "Google Maps ranking optimisation",
                                        "Consistent NAP across all directories",
                                        "Schema markup so Google understands you"
                                    ]
                                },
                                {
                                    icon: "⚡",
                                    title: "Technical Foundation",
                                    features: [
                                        "Fast load speed on mobile and desktop",
                                        "Clean site structure Google can crawl",
                                        "Proper page titles and descriptions",
                                        "Google Business Profile management",
                                        "Review generation system built in"
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

            {/* SEO vs Ads Comparison */}
            <motion.section
                className="py-24 md:py-32 border-b border-white/5 bg-black/20"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic text-center">
                            SEO vs Ads — <span className="text-safety-orange">Straight Talk</span>
                        </h2>
                        <p className="text-white/40 text-center font-bold uppercase tracking-widest mb-16">
                            Both have a place. Here's the honest difference.
                        </p>

                        <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants}>
                            <motion.div variants={itemVariants} className="bg-white/5 p-8 border border-white/5">
                                <h3 className="text-2xl font-black uppercase mb-6 text-safety-orange">SEO</h3>
                                <ul className="space-y-4">
                                    {[
                                        { pro: true, text: "Free traffic once you're ranking" },
                                        { pro: true, text: "Builds authority over time — compounds" },
                                        { pro: true, text: "Enquiries keep coming if you stop paying" },
                                        { pro: true, text: "Trusted more than ads by most searchers" },
                                        { pro: false, text: "Takes 3–6 months to see real results" },
                                        { pro: false, text: "Requires ongoing updates to maintain position" }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-bold text-white/80">
                                            <span className={`w-5 h-5 flex-shrink-0 mt-0.5 text-lg leading-none ${item.pro ? 'text-green-400' : 'text-red-400'}`}>
                                                {item.pro ? '✓' : '✗'}
                                            </span>
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div variants={itemVariants} className="bg-white/5 p-8 border border-white/5">
                                <h3 className="text-2xl font-black uppercase mb-6 text-white/60">Google Ads</h3>
                                <ul className="space-y-4">
                                    {[
                                        { pro: true, text: "Calls can start within days of launching" },
                                        { pro: true, text: "You control exactly when you appear" },
                                        { pro: true, text: "Useful while SEO builds momentum" },
                                        { pro: false, text: "You pay every time someone clicks" },
                                        { pro: false, text: "Stop paying — enquiries stop immediately" },
                                        { pro: false, text: "Costs can climb as competition increases" }
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-bold text-white/80">
                                            <span className={`w-5 h-5 flex-shrink-0 mt-0.5 text-lg leading-none ${item.pro ? 'text-green-400' : 'text-red-400'}`}>
                                                {item.pro ? '✓' : '✗'}
                                            </span>
                                            <span>{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mt-10 bg-safety-orange/10 border border-safety-orange/30 p-8">
                            <p className="text-lg font-black uppercase text-center text-white">
                                The smart play: <span className="text-safety-orange">run ads while SEO builds</span>, then scale ads back as organic traffic grows.
                            </p>
                            <p className="text-sm text-white/60 font-bold text-center mt-3">
                                Package 3 includes both — Google Ads management and full local SEO setup from day one.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Results Timeline */}
            <motion.section
                className="py-24 md:py-32 border-b border-white/5 bg-black/30"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic text-center">
                            Realistic <span className="text-safety-orange">Timeline</span>
                        </h2>
                        <p className="text-white/40 text-center font-bold uppercase tracking-widest mb-16">
                            No hype. Here's what actually happens and when.
                        </p>

                        <motion.div className="space-y-6" variants={containerVariants}>
                            {[
                                {
                                    period: "Weeks 1–4",
                                    label: "Foundation",
                                    colour: "text-white/60",
                                    items: [
                                        "Website built and live with proper on-page SEO",
                                        "Google Business Profile fully set up and verified",
                                        "All directory listings consistent and submitted",
                                        "Review request system activated"
                                    ]
                                },
                                {
                                    period: "Month 1–3",
                                    label: "Google indexes and tests you",
                                    colour: "text-yellow-400",
                                    items: [
                                        "Google crawls and indexes your pages",
                                        "You may notice small ranking improvements",
                                        "Reviews start accumulating — map pack position moves",
                                        "First organic enquiries possible for low-competition searches"
                                    ]
                                },
                                {
                                    period: "Month 3–6",
                                    label: "Rankings build momentum",
                                    colour: "text-safety-orange",
                                    items: [
                                        "Page one rankings start appearing for suburb searches",
                                        "Google Business Profile showing in map pack more often",
                                        "Organic enquiries becoming more consistent",
                                        "Suburb pages driving targeted local traffic"
                                    ]
                                },
                                {
                                    period: "Month 6–12",
                                    label: "Compounding returns",
                                    colour: "text-green-400",
                                    items: [
                                        "Stable page one positions for primary search terms",
                                        "Reducing reliance on ad spend",
                                        "Consistent enquiry flow from organic search",
                                        "Authority building — harder for competitors to displace you"
                                    ]
                                }
                            ].map((phase, i) => (
                                <motion.div key={i} variants={itemVariants} className="bg-white/5 border border-white/5 p-8 hover:border-white/10 transition-colors">
                                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                                        <div className="md:w-48 flex-shrink-0">
                                            <p className={`text-sm font-black uppercase tracking-widest ${phase.colour}`}>{phase.period}</p>
                                            <p className="text-xl font-black uppercase mt-1">{phase.label}</p>
                                        </div>
                                        <ul className="space-y-3 flex-grow">
                                            {phase.items.map((item, j) => (
                                                <li key={j} className="flex items-start gap-3 text-sm font-bold text-white/70">
                                                    <Check className="text-safety-orange w-4 h-4 flex-shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
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
                            Common Questions <span className="text-safety-orange">About Tradie SEO</span>
                        </h2>

                        <motion.div className="space-y-6" variants={containerVariants}>
                            {[
                                {
                                    question: "How long does SEO take for a tradie business?",
                                    answer: "Most tradie businesses start seeing real ranking movement within 3–6 months of a properly built and optimised website. For competitive suburbs, reaching the top positions can take 6–12 months. The upside: once you're there, it doesn't cost per click like ads do — the traffic is yours."
                                },
                                {
                                    question: "Can I do my own SEO as a tradie?",
                                    answer: "The basics are learnable, but the time cost is high — and mistakes like duplicate content or wrong suburb targeting can actively hurt your ranking. Most tradies find that time is better spent on the tools. We handle the full setup so you don't have to think about it."
                                },
                                {
                                    question: "Do Google reviews help with SEO?",
                                    answer: "Yes — significantly. Google Business Profile reviews are one of the strongest local ranking signals. More reviews means higher placement in the map pack (the top 3 results under Google Maps). We set up an automated review request system so happy customers get prompted without you having to chase anyone."
                                },
                                {
                                    question: "Should I run Google Ads instead of SEO?",
                                    answer: "Ads get results fast — but you pay every time someone clicks. SEO is slower to build but generates free traffic once it kicks in. Most tradies benefit from running ads early on while SEO builds in the background, then scaling back ad spend as organic traffic grows. Package 3 includes both."
                                },
                                {
                                    question: "Do I need to keep updating my website for SEO?",
                                    answer: "Google rewards sites that stay active and relevant. That means adding suburb pages, updating content, and keeping your Google profile current. We handle all of this for you as part of the ongoing partnership — you don't need to touch a thing."
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
                            Trade-specific SEO — not recycled agency templates.
                        </p>

                        <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants}>
                            {[
                                {
                                    icon: <Wrench className="w-12 h-12 text-safety-orange" />,
                                    title: "Built for Trades",
                                    description: "We know what Australians search when they need a plumber at 11 PM, a roofer after a storm, or an electrician for a renovation. We build SEO strategies around real trade search behaviour — not generic digital marketing playbooks."
                                },
                                {
                                    icon: <CheckCircle2 className="w-12 h-12 text-safety-orange" />,
                                    title: "No Technical Headaches",
                                    description: "You don't need to understand meta tags, crawl budgets, or backlink profiles. We handle all of it. You get a monthly update on what's moving and what we're working on — nothing more complicated than that."
                                },
                                {
                                    icon: <ShieldCheck className="w-12 h-12 text-safety-orange" />,
                                    title: "No Lock-In Contracts",
                                    description: "We don't trap you in 12-month agreements. Our ongoing partnership is quarterly and reviewed annually. If it's not delivering results, you're free to walk. We earn your business every quarter."
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

            {/* Packages Section */}
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
                        {/* Package 1 */}
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
                                            <div className="text-3xl font-black italic text-safety-orange">$1,900</div>
                                            <p className="text-xs font-black uppercase tracking-widest text-white/40 mt-2">+ $299/quarter</p>
                                        </div>
                                        <div className="md:hidden mt-2">
                                            {expandedPackages.includes(1) ? <ChevronUp className="w-6 h-6 text-safety-orange" /> : <ChevronDown className="w-6 h-6 text-white/40" />}
                                        </div>
                                    </div>
                                </CardHeader>
                                <div className={`${expandedPackages.includes(1) ? 'block' : 'hidden'} md:block flex-grow flex flex-col`}>
                                    <CardContent className="p-5 md:p-6 space-y-4 flex-grow">
                                        <p className="text-xs font-black uppercase tracking-widest text-safety-orange mb-4">FOR TRADIES WHO WANT A PROPER FOUNDATION — WEBSITE, GOOGLE PROFILE, AND BASIC LOCAL SEO DONE RIGHT.</p>

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
                                            "You stop being invisible and start showing up where customers are looking."
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

                        {/* Package 3 — Highlighted Middle */}
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
                                            FOR TRADIES WHO WANT MAXIMUM VISIBILITY — SEO, ADS, AND FULL ENQUIRY CAPTURE WORKING TOGETHER.</p>

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
                                                    <div className="border border-safety-orange/80 bg-safety-orange/5 p-4 rounded-md shadow-[0_0_15px_rgba(255,107,0,0.3)] relative overflow-hidden">
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
                                                                                <li>3 videos x 10-15 secs included in the package, additional videos quoted separately</li>
                                                                            </ul>
                                                                        </CollapsibleDetail>
                                                                    )
                                                                }
                                                            ].map((item, i) => (
                                                                <li key={`highlight-${i}`} className="flex items-start gap-3 text-sm font-bold text-white">
                                                                    <Check className="text-safety-orange w-4 h-4 flex-shrink-0 mt-0.5" />
                                                                    <div>{item.content || item}</div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

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
                                                                <div>{item.content || item}</div>
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

                        {/* Package 2 */}
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
                                        <p className="text-xs font-black uppercase tracking-widest text-safety-orange mb-4">FOR TRADIES WHO WANT STEADY ORGANIC ENQUIRIES WITHOUT PAYING FOR EVERY CLICK.</p>

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
                                            "You rank locally, capture enquiries, and build authority without touching it yourself."
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

            {/* Contact Section */}
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
                                    Ready to Start <br /> <span className="text-safety-orange">Ranking on Google?</span>
                                </h2>
                            </div>

                            <form onSubmit={handleSubmit} className="text-left space-y-6 bg-zinc-900/80 p-6 md:p-8 border border-white/10 backdrop-blur-sm shadow-2xl">
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

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Business Name</label>
                                        <input
                                            type="text"
                                            name="business"
                                            value={formData.business}
                                            onChange={handleInputChange}
                                            className="w-full bg-white/5 border border-white/10 p-3 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange transition-colors rounded-sm font-medium"
                                            placeholder="Your trade business"
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
                                        You'll receive a detailed quote tailored to your trade business.
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

export default SEOForTradies;
