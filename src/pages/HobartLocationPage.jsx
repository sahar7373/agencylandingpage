import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowLeft, Check, ChevronDown, ChevronUp, ShieldCheck, AlertCircle, Loader2, MapPin, Star, Play } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import Breadcrumbs from '../components/Breadcrumbs';
import { GOOGLE_SHEET_URL } from '../config';
import { trackLead } from '../lib/analytics';
const CaseStudyModal = React.lazy(() => import('../components/CaseStudyModal'));
const VideoModal = React.lazy(() => import('../components/VideoModal'));

const CollapsibleDetail = ({ title, children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div>
            <div className="flex items-center gap-2 cursor-pointer group/collapsible" onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <ChevronDown className={`w-3 h-3 text-safety-orange transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} group-hover/collapsible:scale-125`} />
            </div>
            {isOpen && <div className="animate-in fade-in slide-in-from-top-1 duration-200">{children}</div>}
        </div>
    );
};

const HobartLocationPage = () => {
    const [formData, setFormData] = React.useState({ name: '', email: '', phone: '', business: '', location: '', trade: '', message: '' });
    const [formStatus, setFormStatus] = React.useState('idle');
    const [phoneError, setPhoneError] = React.useState('');
    const [openFaqIndex, setOpenFaqIndex] = React.useState(null);
    const [expandedPackages, setExpandedPackages] = React.useState([3]);
    const [pricingVariesOpen, setPricingVariesOpen] = React.useState(false);
    const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = React.useState(false);
    const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState(null);

    const togglePackage = (id) => setExpandedPackages(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
    const shouldReduceMotion = useReducedMotion();
    const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } } };
    const itemVariants = { hidden: { y: 60, opacity: 0, scale: 0.95 }, visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
    const sectionVariants = { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } };
    const hoverLift = shouldReduceMotion ? {} : { y: -10, scale: 1.02 };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone') { const re = /^[0-9\b]+$/; if ((value === '' || re.test(value)) && value.length <= 10) { setFormData(prev => ({ ...prev, [name]: value })); setPhoneError(''); } }
        else { setFormData(prev => ({ ...prev, [name]: value })); }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.phone.length !== 10) { setPhoneError("Please enter a valid 10-digit phone number"); return; }
        setFormStatus('submitting');
        try {
            await fetch(GOOGLE_SHEET_URL, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain" }, body: JSON.stringify({ sheetName: "Leads from form", Name: formData.name, Phone: `'${formData.phone}`, Email: formData.email, Business: formData.business, Trade: formData.trade, Location: formData.location, Message: formData.message, timestamp: new Date().toISOString() }) });
            setFormStatus('success'); setFormData({ name: '', email: '', phone: '', business: '', location: '', trade: '', message: '' });
            trackLead('hobart_page_form', { tier: 'primary' });
        } catch (error) { console.error("Form submission error:", error); setFormStatus('idle'); }
    };

    const hobartSuburbs = [
        'Sandy Bay', 'Battery Point', 'South Hobart', 'West Hobart', 'North Hobart',
        'New Town', 'Moonah', 'Glenorchy', 'Montrose', 'Claremont',
        'Bridgewater', 'Brighton', 'Lindisfarne', 'Bellerive', 'Rokeby',
        'Howrah', 'Lauderdale', 'Margate', 'Kingston', 'Huonville',
        'Sorell', 'Richmond', 'Midway Point', 'Rosny Park', 'Salamanca'
    ];

    const successProjects = [
        { id: 'rovina', isLight: true, title: "Rovina's Painting", location: "SA", testimonial: "The professional website and Google Business Profile setup transformed how customers find and contact us. We've seen a significant increase in quality enquiries from homeowners who are already sold on our credentials before they even call.", attribution: "Rovina's Painting — Adelaide, SA", delivered: ["Professional 6-page website with SEO optimization", "Google Business Profile created from scratch", "Custom SEO-rich FAQs on every page", "Licensing & credentials prominently displayed (BLD 328101)", "UV-resistant coating & heritage restoration showcased", "Mobile-responsive design with trust signals"], challenge: ["15+ years experience but low online visibility", "850+ projects completed with no digital showcase", "Competitors ranking higher for local searches", "Builder's license BLD 328101 not visible to searchers"], tags: ["6-Page Website", "GBP Creation", "SEO FAQs", "Trust Signals", "Local SEO"], images: { preview: "/projects/Rovinas/homepage-rovina.png", homepage: "/projects/Rovinas/homepage-rovina.png" }, video: "https://vimeo.com/1175704266", website: "https://www.rovinaspainting.com.au/" },
        { id: 'zjc', isLight: true, title: "ZJC Renovations", location: "ACT", testimonial: "The website, logo, and enquiry system made a big difference. Customers now contact us with clearer requests and are more confident.", attribution: "ZJC Renovations — ACT", delivered: ["Professional website built for local customers", "Custom business logo design", "Lead capture system with clear enquiry forms", "Google Business Profile setup for local visibility"], challenge: ["A great reputation locally", "No real online presence that converted", "No clear enquiry system or trust signals", "Low visibility for local search"], tags: ["8 Pages Local Website", "Logo Design", "Lead Capture", "GBP Setup"], images: { preview: "/projects/zjc/homepage.png", homepage: "/projects/zjc/homepage.png", service: "/projects/zjc/service.png", serviceLabel: "Bathroom Renovation Showcase", work: "/projects/zjc/work.png" }, video: "https://vimeo.com/1160983424", website: "https://www.zjcrenovations.com.au/" },
        { id: 'swrp', isLight: true, title: "SWRP", location: "NSW", testimonial: "Building a scaleable roofing business required more than just a website; we needed a full digital infrastructure. From custom SWMS to professional roof reporting, the system now handles our growth without the typical operational headaches.", attribution: "SWRP — NSW", delivered: ["Company Logo & Branding", "14+ Pages Website Project (Ongoing)", "Custom Professional Email Setup", "SWMS (Safe Work Method Statements) Integration", "Roof Report Templates"], challenge: ["Scaling operations without digital systems", "No centralized branding", "Manual reporting and paper-based SWMS", "Need for professional communication channels"], tags: ["14+ Page Website", "Brand Identity", "Custom SWMS", "Roof Report Template", "Lead Capture Form", "Custom Email Box"], images: { preview: "/projects/SWRP/swrp-homepage.png", homepage: "/projects/SWRP/swrp-homepage.png", service: "/projects/SWRP/swrp-service.png", serviceLabel: "Roof Reconstruction Showcase", work: "/projects/SWRP/swrp-work.png" }, video: "https://vimeo.com/1160981021", website: "https://swrp.com.au/" }
    ];

    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans selection:bg-safety-orange selection:text-white">
            <React.Suspense fallback={null}>
                <CaseStudyModal isOpen={isCaseStudyModalOpen} onClose={() => setIsCaseStudyModalOpen(false)} project={selectedProject} />
                <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} project={selectedProject} />
            </React.Suspense>
            <Helmet>
                <title>Tradie Website Design Hobart | Get More Local Jobs | Your Trade Partner</title>
                <meta name="description" content="Hobart tradie website design and digital systems that get you found on Google, capture every enquiry, and stop you losing jobs in Tasmania's booming property market." />
                <link rel="canonical" href="https://yourtradepartner.com.au/tradie-website-design-hobart" />
                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Tradie Website Design Hobart | Your Trade Partner" />
                <meta property="og:description" content="Hobart tradie website design and digital systems. Get found on Google, capture every enquiry, stop losing jobs to competitors." />
                <meta property="og:url" content="https://yourtradepartner.com.au/tradie-website-design-hobart" />
                <meta property="og:image" content="https://yourtradepartner.com.au/Agency-hammer-favicon.jpeg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "serviceType": "Tradie Website Design Hobart", "name": "Tradie Website Design Hobart", "description": "Professional website design and digital marketing systems for trade businesses in Hobart, TAS.", "provider": { "@type": "LocalBusiness", "name": "Your Trade Partner", "url": "https://yourtradepartner.com.au", "telephone": "0451044751", "email": "hello@yourtradepartner.com.au" }, "areaServed": { "@type": "City", "name": "Hobart", "containedInPlace": { "@type": "State", "name": "Tasmania" } } })}</script>
                <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Do I need a website if I already get work by word of mouth in Hobart?", "acceptedAnswer": { "@type": "Answer", "text": "Word of mouth works — until it stops. Hobart's population has shifted significantly with sea-changers from Melbourne and Sydney who expect to find everything online. They don't ask around — they search Google. A professional website and Google Business Profile means you're the tradie they find first." } }, { "@type": "Question", "name": "How long before I show up in Hobart search results?", "acceptedAnswer": { "@type": "Answer", "text": "A properly set up Google Business Profile can appear in local Hobart results within days to weeks. Your website's SEO typically takes 2–4 months in Hobart's less competitive market. If you need jobs faster, we can include Google Ads to get calls coming in quickly." } }, { "@type": "Question", "name": "Hobart is a small market — is a professional website really worth it?", "acceptedAnswer": { "@type": "Answer", "text": "Small market means less competition for the top spots — which is an advantage. When there are fewer quality websites competing, it's easier and faster to rank. Hobart homeowners still search Google first, and if you're the only professional-looking result, you get all the calls." } }, { "@type": "Question", "name": "Can you build websites for any trade in Hobart?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We've built digital systems for plumbers, electricians, roofers, builders, HVAC, landscapers, painters, concreters, and carpenters. Each trade has different trust signals and search behaviour — we know the difference and build accordingly." } }, { "@type": "Question", "name": "What does a tradie website cost in Hobart?", "acceptedAnswer": { "@type": "Answer", "text": "Our Trade-Ready Online Setup starts at $1,900 one-time + $299/quarter for hosting and support. The Local Jobs Engine (website + SEO + Google Business Profile) is $3,900 + $399/quarter. Full Growth System starts from $7,900. Every project is scoped before you commit — no surprises." } }] })}</script>
            </Helmet>

            <nav className="border-b border-white/10 bg-construction-charcoal/95 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <a href="/" className="flex items-center gap-3 text-white hover:text-safety-orange transition-colors group"><ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /><span className="text-xs font-black uppercase tracking-widest">Your Trade Partner</span></a>
                        <Badge className="bg-safety-orange/10 text-safety-orange border-safety-orange/20 hover:bg-safety-orange/10 pointer-events-none"><MapPin className="w-3 h-3 mr-1" />Hobart, TAS</Badge>
                    </div>
                </div>
            </nav>

            <header className="relative pt-8 pb-24 md:pt-24 md:pb-44 border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <Breadcrumbs items={[{ label: 'Home', href: '/' }]} currentLabel="Tradie Website Design Hobart" currentPath="/tradie-website-design-hobart" className="mb-8" />
                    <motion.div className="max-w-4xl mx-auto text-center" variants={containerVariants} initial="hidden" animate="visible">
                        <motion.p className="text-xs md:text-sm text-white/50 font-bold tracking-[0.2em] uppercase mb-6" variants={itemVariants}>Hobart, Tasmania</motion.p>
                        <motion.h1 className="text-[48px] md:text-[80px] font-black leading-[0.9] mb-4 uppercase italic" variants={itemVariants}>Hobart Tradies:<br /><span className="text-safety-orange">Stop Losing Jobs Online</span></motion.h1>
                        <motion.p className="text-xs text-white/30 font-bold tracking-widest mb-8 -mt-2" variants={itemVariants}>Tradie website design Hobart — less competition means ranking faster, if you show up at all</motion.p>
                        <motion.p className="text-lg md:text-xl text-white/90 font-medium mb-10 leading-relaxed max-w-3xl mx-auto" variants={itemVariants}>Hobart's property market is booming and skilled tradespeople are in demand. But sea-changers from the mainland and new homeowners search Google first — not word of mouth. If you don't show up and look professional, the work goes to whoever they find.</motion.p>
                        <motion.div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 mb-10 rounded-full md:text-sm backdrop-blur-sm" variants={itemVariants}>
                            <ShieldCheck className="text-safety-orange w-5 h-5 flex-shrink-0" />
                            <p className="font-semibold text-white/80">Built for TAS trade businesses — <span className="text-white/40">suburb-specific strategy, not a generic template.</span></p>
                        </motion.div>
                        <motion.div className="flex flex-col items-center gap-4" variants={itemVariants}>
                            <a href="#contact" className="w-full sm:w-auto"><Button size="xl" className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-6 md:px-12 py-6 md:py-8 text-sm md:text-2xl font-black uppercase tracking-widest group shadow-2xl shadow-safety-orange/30 w-full sm:w-auto transform-none transition-all duration-200"><span className="whitespace-normal text-center">GET A FREE WEBSITE AUDIT</span><ArrowRight className="hidden md:block ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" /></Button></a>
                            <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-widest font-bold">No obligation · Hobart-focused strategy · Results or we don't take your money</p>
                        </motion.div>
                        <motion.div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-12 text-sm text-white/60 font-bold uppercase tracking-wider" variants={itemVariants}>
                            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /><span>TAS trade specialists</span></div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /><span>Suburb-targeted SEO</span></div>
                            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /><span>Systems that run without you</span></div>
                        </motion.div>
                    </motion.div>
                </div>
            </header>

            {/* Problem Section */}
            <motion.section className="py-24 md:py-32 border-b border-white/5 bg-black/20" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic text-center md:text-left">What's happening to Hobart tradies<br className="hidden md:block" /> without a strong online presence</h2>
                        <p className="text-white/40 font-bold uppercase tracking-widest mb-16 text-sm">Hobart's property market is booming and skilled tradespeople are in demand. But the work goes to whoever homeowners find first online.</p>
                        <motion.div className="grid md:grid-cols-2 gap-8 mb-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
                            {[
                                { title: "Sandy Bay homeowner, evening — searches Google, calls the first result", detail: "That tradie isn't better than you. They just show up first. Even in Hobart's smaller market, homeowners don't scroll past the top results. If your Google Business Profile is thin, your website looks dated, or you don't rank for your suburb — that job goes to a competitor before you know it existed." },
                                { title: "Hobart's housing boom means new homeowners who don't have a go-to tradie — they search Google", detail: "Hobart has seen significant housing activity in recent years. New homeowners, renovators, and investors are all looking for reliable trades. Many of them are new to the area and have no established tradie relationships. They Google everything. If you're not showing up, a competitor is getting those calls." },
                                { title: "Sea-changers from Melbourne and Sydney expect to find tradies online — they won't ask around", detail: "Hobart has attracted thousands of residents from interstate who are used to finding everything with a Google search. These are often higher-income homeowners with renovation budgets. If you don't look professional online, they scroll past you to someone who does — even if you're the better tradie." },
                                { title: "In a smaller market, being the best online presence means you get all the calls", detail: "Hobart's smaller population actually works in your favour — there are fewer competing tradies with quality websites. Being the one who shows up professionally in Google means a disproportionately large share of the market comes to you. In a tight market, online dominance pays off fast." }
                            ].map((item, i) => (
                                <motion.div key={i} variants={itemVariants} className="bg-white/5 p-8 border border-white/5 hover:border-white/20 transition-colors">
                                    <div className="flex items-start gap-6"><AlertCircle className="text-red-500 w-8 h-8 flex-shrink-0 mt-1" /><div><h3 className="text-lg md:text-xl font-black uppercase mb-3">{item.title}</h3><p className="text-sm text-white/60 font-bold leading-relaxed">{item.detail}</p></div></div>
                                </motion.div>
                            ))}
                        </motion.div>
                        <div className="text-center md:text-right"><p className="text-3xl md:text-5xl font-black italic uppercase leading-tight">You're not losing Hobart jobs on price —<br /><span className="text-safety-orange underline decoration-white/20 underline-offset-8">you're losing them because they found someone else first.</span></p></div>
                    </div>
                </div>
            </motion.section>

            {/* What We Build */}
            <motion.section className="py-24 md:py-32 border-b border-white/5 bg-black/30" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic text-center">What We Build for <span className="text-safety-orange">Hobart Tradies</span></h2>
                        <p className="text-white/40 text-center font-bold uppercase tracking-widest mb-16">Not generic marketing. Systems built for how the Tasmanian trade market actually works.</p>
                        <motion.div className="grid md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
                            {[{ icon: "🌐", title: "Trade-Ready Website", features: ["Fast-loading, mobile-first (most searches are phone)", "Suburb pages targeting your Hobart service area", "Click-to-call on every page", "Trust signals: licences, insurance, photos", "Quote forms that send directly to your phone", "Built to rank — not just look good"] }, { icon: "📍", title: "Local SEO & Google Profile", features: ["Google Business Profile set up and optimised", "Targeting Hobart suburbs you actually work in", "Local citations submitted to AU directories", "Review strategy to build your rating fast", "Keyword targeting for your specific trade + area", "Track ranking positions monthly"] }, { icon: "⚡", title: "Enquiry Automation", features: ["Missed-call text-back so no job slips", "After-hours enquiry capture (jobs don't stop at 5pm)", "Instant SMS notification when a new job comes in", "AI enquiry handling for common questions", "Enquiry routing — right job to right person", "Works while you're on the tools"] }].map((item, i) => (
                                <motion.div key={i} variants={itemVariants} className="bg-white/5 p-8 border border-white/5 hover:border-safety-orange/30 transition-all">
                                    <div className="text-5xl mb-6">{item.icon}</div><h3 className="text-2xl font-black uppercase mb-6 text-safety-orange">{item.title}</h3>
                                    <ul className="space-y-3">{item.features.map((f, j) => <li key={j} className="flex items-start gap-3 text-sm font-bold text-white/80"><Check className="text-safety-orange w-4 h-4 flex-shrink-0 mt-0.5" /><span>{f}</span></li>)}</ul>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Suburbs */}
            <motion.section className="py-24 md:py-32 border-b border-white/5 bg-black/40" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic">Serving Tradies Across <span className="text-safety-orange">Greater Hobart</span></h2>
                        <p className="text-white/40 font-bold uppercase tracking-widest mb-12 text-sm">We work with trade businesses across the Hobart region — Eastern Shore, Northern Suburbs, Derwent Valley, and the Huon area.</p>
                        <div className="flex flex-wrap justify-center gap-3">{hobartSuburbs.map((suburb, i) => <span key={i} className="bg-white/5 border border-white/10 px-4 py-2 text-xs font-black uppercase tracking-widest text-white/60 hover:border-safety-orange/40 hover:text-white/90 transition-colors">{suburb}</span>)}</div>
                        <p className="text-white/30 text-xs font-bold uppercase tracking-widest mt-8">Not in this list? Get in touch — if you're in Tasmania, we can help.</p>
                    </div>
                </div>
            </motion.section>

            {/* Success Stories */}
            <motion.section id="projects" className="pt-[66px] pb-24 md:pt-[98px] md:pb-32 border-b border-white/5 bg-zinc-900/10" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16"><h2 className="text-4xl md:text-6xl font-black uppercase italic mb-6">Success <span className="text-safety-orange">Stories</span></h2><p className="text-xl md:text-2xl text-white/60 font-bold max-w-2xl mx-auto">See how we've helped other Australian trade businesses dominate their local areas.</p></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                            {successProjects.map((project) => (
                                <motion.div key={project.id} initial={{ opacity: 0, scale: 0.85, y: 60 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: false, margin: "-50px" }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className={`group relative overflow-hidden rounded-sm hover:border-safety-orange/50 transition-all duration-500 flex flex-col ${project.isLight ? "bg-white border border-transparent shadow-xl" : "bg-white/5 border border-white/10"}`}>
                                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: [0, 0.3, 0] }} viewport={{ once: false }} transition={{ duration: 1, times: [0, 0.2, 1], delay: 0.2 }} className="absolute inset-0 bg-safety-orange/20 pointer-events-none z-10" />
                                    <div className="relative h-[250px] md:h-[300px] overflow-hidden border-b border-white/10"><img src={project.images.preview} alt={`${project.title} ${project.location} - Professional trade website design`} loading="lazy" className="w-full h-full object-cover object-top grayscale-[50%] group-hover:grayscale-0 transition-all duration-700" /><div className="absolute inset-0 bg-gradient-to-t from-construction-charcoal to-transparent opacity-60"></div><div className="absolute bottom-4 left-4 flex items-center gap-3"><div className="w-8 h-0.5 bg-safety-orange"></div><span className="text-[10px] font-black uppercase tracking-widest text-white shadow-sm">Verified Result • {project.location}</span></div></div>
                                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                                        {project.website ? <a href={project.website} target="_blank" rel="noopener noreferrer" className={`text-2xl font-black uppercase italic mb-4 hover:text-safety-orange transition-colors ${project.isLight ? "text-zinc-900" : "text-white"}`}><h3>{project.title}</h3></a> : <h3 className={`text-2xl font-black uppercase italic mb-4 ${project.isLight ? "text-zinc-900" : "text-white"}`}>{project.title}</h3>}
                                        <div className="flex flex-wrap gap-2 mb-8">{project.tags.map((tag, i) => <span key={i} className={`text-[9px] font-black uppercase tracking-widest px-3 py-1.5 border rounded-sm ${project.isLight ? "bg-zinc-100 text-zinc-600 border-zinc-200" : "bg-white/10 text-white border-white/20"}`}>{tag}</span>)}</div>
                                        <div className="mt-auto flex items-center gap-3 flex-wrap"><Button onClick={() => { setSelectedProject(project); setIsCaseStudyModalOpen(true); }} className={`rounded-none px-6 py-5 text-[11px] font-black uppercase tracking-widest shadow-xl transition-all ${project.isLight ? "bg-black text-white hover:bg-zinc-800" : "bg-white text-black hover:bg-white/90"}`}>See More</Button>{project.video && <button onClick={() => { setSelectedProject(project); setIsVideoModalOpen(true); }} className="group/play flex items-center gap-3 bg-safety-orange/10 hover:bg-safety-orange/20 border border-safety-orange/30 p-3.5 transition-all" title="Watch Video Demo"><Play className="w-4 h-4 text-safety-orange fill-safety-orange group-hover/play:scale-110 transition-transform" /><span className="text-[10px] font-black uppercase tracking-widest text-safety-orange">Watch Demo</span></button>}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="text-center mt-12"><div className="inline-block px-6 py-3 rounded-full bg-safety-orange/10 border border-safety-orange/20"><p className="text-sm font-black uppercase tracking-widest text-safety-orange">Most trades decide after seeing how this applies to businesses like theirs.</p></div></div>
                        <div className="text-center mt-8"><a href="https://g.page/r/CUgFdsWWbz7BEBM/review" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/30 hover:text-safety-orange transition-colors group"><Star className="w-4 h-4 group-hover:fill-safety-orange group-hover:text-safety-orange transition-colors" /><span className="text-[11px] font-black uppercase tracking-widest">Worked with us? Leave a Google review</span></a></div>
                    </div>
                </div>
            </motion.section>

            {/* Packages */}
            <motion.section id="packages" className="py-12 md:py-20 border-b border-white/5 bg-black/40" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
                <div className="container mx-auto px-6">
                    <div className="text-center mb-10"><h2 className="text-4xl md:text-7xl font-black mb-6 uppercase italic">Clear Pricing <br className="hidden md:block" /> (No Guesswork)</h2><p className="text-white/40 font-black uppercase tracking-widest italic">One-time setup + simple partnership structure · No confusing monthly retainers</p></div>
                    <div className="grid lg:grid-cols-3 gap-8 items-start mt-2.5">
                        <motion.div whileHover={hoverLift} className="h-full"><Card className="bg-white/5 border-2 border-white/10 rounded-none h-full flex flex-col"><CardHeader className="p-5 md:p-6 border-b border-white/10 cursor-pointer md:cursor-default transition-colors hover:bg-white/5 md:hover:bg-transparent" onClick={() => togglePackage(1)}><div className="flex justify-between items-start"><div><CardTitle className="text-xs uppercase font-black tracking-widest text-white/40 mb-2">Package 1</CardTitle><div className="text-xl font-black uppercase mb-4">Trade-Ready Online Setup</div><div className="text-3xl font-black italic text-safety-orange">$1,900</div><p className="text-xs font-black uppercase tracking-widest text-white/40 mt-2">+ $299/quarter</p></div><div className="md:hidden mt-2">{expandedPackages.includes(1) ? <ChevronUp className="w-6 h-6 text-safety-orange" /> : <ChevronDown className="w-6 h-6 text-white/40" />}</div></div></CardHeader><div className={`${expandedPackages.includes(1) ? 'block' : 'hidden'} md:block flex-grow flex flex-col`}><CardContent className="p-5 md:p-6 space-y-4 flex-grow"><p className="text-xs font-black uppercase tracking-widest text-safety-orange mb-4">FOR TRADES WHO WANT TO LOOK PROFESSIONAL AND STOP LOSING JOBS DUE TO WEAK ONLINE PRESENCE.</p><div className="bg-white/5 p-4 border border-white/5 rounded-sm"><div className="flex items-center gap-2 mb-2"><div className="w-1.5 h-1.5 bg-safety-orange rounded-full"></div><p className="text-sm font-black uppercase text-white">Website</p></div><div className="pl-4 border-l border-white/10 space-y-1"><p className="text-sm font-bold text-white uppercase">3-page website included</p><p className="text-xs text-white/50">(Home, Services, Project Showcase, Contact)</p></div></div><div className="space-y-4">{["Domain + hosting included for Year 1", "Professional business email (no more Gmail)", "Google Business Profile set up", "Business card design (print-ready)", "Contact & quote forms that send enquiries to you instantly"].map((item, i) => <div key={i} className="flex gap-3 text-sm font-bold uppercase tracking-tight"><Check className="text-safety-orange w-5 h-5 flex-shrink-0" /><span>{item}</span></div>)}</div></CardContent><CardFooter className="p-5 md:p-6 pt-0 flex flex-col gap-4"><div className="bg-white/10 p-4 text-xs font-black uppercase tracking-widest text-center italic w-full">"You stop looking like a "maybe" and start looking like a real business people call."</div><a href="#contact" className="w-full"><Button className="w-full bg-white text-black hover:bg-white/90 rounded-none h-12 font-black uppercase tracking-widest">Check Availability</Button></a></CardFooter></div></Card></motion.div>
                        <motion.div whileHover={hoverLift} className="h-full relative scale-105 z-10 shadow-2xl shadow-safety-orange/10"><Card className="bg-white/5 border-4 border-safety-orange rounded-none h-full flex flex-col relative"><div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-safety-orange text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest whitespace-nowrap italic">Most Popular</div><CardHeader className="p-5 md:p-6 border-b border-white/10 cursor-pointer md:cursor-default transition-colors hover:bg-white/5 md:hover:bg-transparent" onClick={() => togglePackage(3)}><div className="flex justify-between items-start"><div><CardTitle className="text-xs uppercase font-black tracking-widest text-white/40 mb-2">Package 3</CardTitle><div className="text-xl font-black uppercase mb-4">Growth System</div><div className="text-[35px] font-black italic text-safety-orange">From $7,900</div><div className="mt-2 text-[10px] font-bold text-white/40 uppercase tracking-widest">(Most projects land between $8,500 – $15,000)</div><div className="mt-2"><p className="text-[10px] font-black uppercase tracking-widest text-white/40">Ongoing partnership quoted based on your requirements</p></div></div><div className="md:hidden mt-2">{expandedPackages.includes(3) ? <ChevronUp className="w-6 h-6 text-safety-orange" /> : <ChevronDown className="w-6 h-6 text-white/40" />}</div></div></CardHeader><div className={`${expandedPackages.includes(3) ? 'block' : 'hidden'} md:block flex-grow flex flex-col`}><CardContent className="p-5 md:p-6 space-y-6 flex-grow"><p className="text-xs font-black uppercase tracking-widest text-safety-orange">FOR TRADES READY TO CAPTURE MORE OPPORTUNITIES AND RUN A MORE AUTOMATED, RELIABLE JOB FLOW.</p><div className="space-y-4"><div className="bg-white/5 p-4 border border-white/5 rounded-sm"><div className="flex items-center gap-2 mb-2"><div className="w-1.5 h-1.5 bg-safety-orange rounded-full"></div><p className="text-sm font-black uppercase text-white">Website</p></div><div className="pl-4 border-l border-white/10 space-y-1"><p className="text-sm font-bold text-white uppercase">Up to 7 pages included</p><p className="text-xs text-white/50">(Additional pages: + $250–$400 per page)</p></div></div><div><p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Everything in Local Jobs Engine, plus:</p><div className="space-y-4"><div className="border border-safety-orange/80 bg-safety-orange/5 p-4 rounded-md shadow-[0_0_15px_rgba(255,107,0,0.3)] relative overflow-hidden"><div className="absolute inset-0 border-2 border-safety-orange/50 rounded-md animate-pulse pointer-events-none"></div><ul className="space-y-3 relative z-10">{["SETUP DESIGNED TO HELP YOU SHOW UP MORE WHEN SEARCHING LOCALLY AND IN AI", { content: <CollapsibleDetail title="AFTER-HOURS, MISSED-CALL & RECEPTIONIST HANDLING"><ul className="pl-4 mt-2 space-y-1 list-disc text-xs text-white/60 font-normal"><li>HANDLES MULTIPLE CALLERS AT THE SAME TIME (NO HOLD, NO VOICEMAIL)</li><li>EVERY CALL ANSWERED, EVEN WHEN YOU'RE ALREADY BUSY</li></ul></CollapsibleDetail> }, "ENQUIRIES ROUTED SO NOTHING SLIPS THROUGH THE CRACKS", "LINKEDIN PROFILE SETUP", { content: <CollapsibleDetail title="PROMOTIONAL VIDEOS OR AI VISUAL CONTENT"><ul className="pl-4 mt-2 space-y-1 list-disc text-xs text-white/60 font-normal uppercase"><li>USED ON YOUR WEBSITE OR ADS TO BUILD TRUST FAST</li><li>3 videos x 10-15 secs included in the package, additional videos quote separately</li></ul></CollapsibleDetail> }, { content: <CollapsibleDetail title="GOOGLE ADS MANAGEMENT"><ul className="pl-4 mt-2 space-y-1 list-disc text-xs text-white/60 font-normal uppercase"><li>SEARCH ADS TARGETING PEOPLE ACTIVELY LOOKING FOR YOUR TRADE</li><li>LOCAL SERVICE ADS TO DOMINATE YOUR SUBURB</li><li>AD COPY WRITTEN IN TRADE LANGUAGE THAT CONVERTS</li><li>MONTHLY OPTIMISATION INCLUDED</li></ul></CollapsibleDetail> }, { content: <CollapsibleDetail title="META ADS MANAGEMENT (FACEBOOK & INSTAGRAM)"><ul className="pl-4 mt-2 space-y-1 list-disc text-xs text-white/60 font-normal uppercase"><li>REACH HOMEOWNERS IN YOUR SERVICE AREA BEFORE THEY SEARCH</li><li>RETARGETING SO WARM LEADS DON'T FORGET YOU</li><li>CREATIVES BUILT AROUND YOUR PAST WORK</li><li>MONTHLY REPORTING ON WHAT'S WORKING</li></ul></CollapsibleDetail> }].map((item, i) => <li key={`h-${i}`} className="flex items-start gap-3 text-sm font-bold text-white"><Check className="text-safety-orange w-4 h-4 flex-shrink-0 mt-0.5" /><div>{item.content || item}</div></li>)}</ul></div><ul className="space-y-3 px-1">{["EXTRA SERVICE & SUBURB PAGES BUILT AROUND REAL LOCAL SEARCHES", { content: <CollapsibleDetail title="SIMPLE TRACKING TO SEE:"><ul className="pl-4 mt-2 space-y-1 list-disc text-xs text-white/60 font-normal"><li>WHERE ENQUIRIES COME FROM</li><li>WHICH PAGES BRING CALLS</li><li>WHAT'S WORTH SPENDING MONEY ON</li></ul></CollapsibleDetail> }, { content: <CollapsibleDetail title="SYSTEMS SELECTED BASED ON:"><ul className="pl-4 mt-2 space-y-1 list-disc text-xs text-white/60 font-normal"><li>YOUR TRADE</li><li>YOUR WORKLOAD</li><li>HOW AGGRESSIVE YOU WANT TO GROW</li></ul></CollapsibleDetail> }].map((item, i) => <li key={`s-${i}`} className="flex items-start gap-3 text-sm font-bold text-white/80"><Check className="text-safety-orange w-4 h-4 flex-shrink-0 mt-0.5" /><div>{item.content || item}</div></li>)}</ul></div></div></div></CardContent><CardFooter className="p-5 md:p-6 pt-0 flex flex-col gap-4"><div className="bg-white/10 p-4 border border-white/5 cursor-pointer hover:bg-white/15 transition-colors" onClick={() => setPricingVariesOpen(!pricingVariesOpen)}><div className="flex justify-between items-center mb-2"><p className="text-xs font-black uppercase text-white">Why pricing varies</p>{pricingVariesOpen ? <ChevronUp className="w-4 h-4 text-white/60" /> : <ChevronDown className="w-4 h-4 text-white/60" />}</div>{pricingVariesOpen && <><p className="text-[10px] uppercase font-bold text-white/40 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">Not every trade needs the same setup. Pricing depends on how many pages, locations, promotions, and systems are required to get results.<br /><br />Receptionist usage is billed separately based on call volume.</p><p className="text-[10px] uppercase font-bold text-white/40 mt-2 italic animate-in fade-in slide-in-from-top-1 duration-200 delay-75">We scope this before anything is built — no surprises.</p></>}</div><a href="#contact" className="w-full"><Button className="w-full bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none h-12 font-black uppercase tracking-widest">Check Growth Availability</Button></a></CardFooter></div></Card></motion.div>
                        <motion.div whileHover={hoverLift} className="h-full"><Card className="bg-white/5 border-2 border-white/10 rounded-none h-full flex flex-col"><CardHeader className="p-5 md:p-6 border-b border-white/10 cursor-pointer md:cursor-default transition-colors hover:bg-white/5 md:hover:bg-transparent" onClick={() => togglePackage(2)}><div className="flex justify-between items-start"><div><CardTitle className="text-xs uppercase font-black tracking-widest text-white/40 mb-2">PACKAGE 2</CardTitle><div className="text-xl font-black uppercase mb-4">LOCAL JOBS ENGINE</div><div className="text-3xl font-black italic text-safety-orange">$3,900</div><div className="mt-2"><p className="text-xs font-black uppercase tracking-widest text-white/40">+ $399 / quarter</p><p className="text-[10px] font-bold text-white/20">(Reviewed annually, subject to AI usage & scope)</p></div></div><div className="md:hidden mt-2">{expandedPackages.includes(2) ? <ChevronUp className="w-6 h-6 text-safety-orange" /> : <ChevronDown className="w-6 h-6 text-white/40" />}</div></div></CardHeader><div className={`${expandedPackages.includes(2) ? 'block' : 'hidden'} md:block flex-grow flex flex-col`}><CardContent className="p-5 md:p-6 space-y-4 flex-grow"><p className="text-xs font-black uppercase tracking-widest text-safety-orange mb-4">FOR TRADES WHO WANT STEADY ENQUIRIES WITHOUT ADDING ADMIN OR MISSED CALLS.</p><div className="space-y-5"><div className="bg-white/5 p-4 border border-white/5 rounded-sm"><div className="flex items-center gap-2 mb-2"><div className="w-1.5 h-1.5 bg-safety-orange rounded-full"></div><p className="text-sm font-black uppercase text-white">Website</p></div><div className="pl-4 border-l border-white/10 space-y-1"><p className="text-sm font-bold text-white uppercase">6-page website included</p><p className="text-xs text-white/50">(Home, Services, About/Trust, Service Area, Projects, Contact)</p></div></div>{[{ title: "Lead capture", items: ["Contact & quote forms", "Enquiry tracking (nothing gets lost)"] }, { title: "Call handling", items: [{ text: <span>Website assistance chatbot - <span className="text-[10px] text-white/50 uppercase">(Priced separately for customised chatbot to book the appointments)</span></span> }] }, { title: "Report templates", items: ["Custom branded trade templates (SWMS / reports)"] }, { title: "Local setup", items: ["Service & suburb pages (basic)"] }, { title: "Support", items: ["Ongoing updates & support (within scope)"] }].map((section, i) => <div key={i}><div className="space-y-2">{section.items.map((item, j) => { const isNote = typeof item === 'object' && item.isNote; const content = typeof item === 'object' ? item.text : item; return <div key={j} className={`flex gap-3 text-sm font-bold uppercase tracking-tight ${isNote ? 'pl-7 text-white/50' : ''}`}>{!isNote && <Check className="text-safety-orange w-4 h-4 flex-shrink-0" />}<span>{content}</span></div>; })}</div></div>)}</div></CardContent><CardFooter className="p-5 md:p-6 pt-0 flex flex-col gap-4"><div className="bg-white/10 p-4 text-xs font-black uppercase tracking-widest text-center italic w-full">"You miss fewer calls, look more established, and turn attention into booked work."</div><a href="#contact" className="w-full"><Button className="w-full bg-white text-black hover:bg-white/90 rounded-none h-12 font-black uppercase tracking-widest">Get The Jobs Engine Ready</Button></a></CardFooter></div></Card></motion.div>
                    </div>
                </div>
            </motion.section>

            {/* FAQ */}
            <motion.section className="py-24 md:py-32 border-b border-white/5 bg-black/30" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase italic text-center">Questions from <span className="text-safety-orange">Hobart Tradies</span></h2>
                        <motion.div className="space-y-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
                            {[
                                { question: "Do I need a website if I already get work by word of mouth in Hobart?", answer: "Word of mouth works — until it stops. Hobart's population has shifted significantly with sea-changers from Melbourne and Sydney who expect to find everything online. They don't ask around — they search Google. A professional website and Google Business Profile means you're the tradie they find first." },
                                { question: "How long before I show up in Hobart search results?", answer: "A properly set up Google Business Profile can appear in local Hobart results within days to weeks. Your website's SEO typically takes 2–4 months in Hobart's less competitive market. If you need jobs faster, we can include Google Ads to get calls coming in quickly." },
                                { question: "Hobart is a small market — is a professional website really worth it?", answer: "Small market means less competition for the top spots — which is an advantage. When there are fewer quality websites competing, it's easier and faster to rank. Hobart homeowners still search Google first, and if you're the only professional-looking result, you get all the calls." },
                                { question: "Can you build websites for any trade in Hobart?", answer: "Yes. We've built digital systems for plumbers, electricians, roofers, builders, HVAC, landscapers, painters, concreters, and carpenters. Each trade has different trust signals and search behaviour — we know the difference and build accordingly." },
                                { question: "What does a tradie website cost in Hobart?", answer: "Our Trade-Ready Online Setup starts at $1,900 one-time + $299/quarter for hosting and support. The Local Jobs Engine (website + SEO + Google Business Profile) is $3,900 + $399/quarter. Full Growth System starts from $7,900. Every project is scoped before you commit — no surprises." }
                            ].map((faq, i) => {
                                const isOpen = openFaqIndex === i;
                                return <motion.div key={i} variants={itemVariants} className="bg-white/5 border border-white/5 hover:border-white/10 transition-colors"><div className="p-6 cursor-pointer flex justify-between items-center gap-4" onClick={() => setOpenFaqIndex(isOpen ? null : i)}><h3 className="text-lg md:text-xl font-black uppercase text-white">{faq.question}</h3>{isOpen ? <ChevronUp className="w-6 h-6 text-safety-orange flex-shrink-0" /> : <ChevronDown className="w-6 h-6 text-white/40 flex-shrink-0" />}</div>{isOpen && <div className="px-6 pb-6 animate-in fade-in slide-in-from-top-1 duration-200"><p className="text-sm text-white/70 font-bold leading-relaxed">{faq.answer}</p></div>}</motion.div>;
                            })}
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Contact */}
            <motion.section id="contact" className="py-24 md:py-32 bg-black/40" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl md:max-w-5xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic text-center">Get a Free <span className="text-safety-orange">Website Audit</span></h2>
                        <p className="text-white/40 text-center font-bold uppercase tracking-widest mb-12 text-sm">Tell us your trade and we'll show you exactly what's costing you Hobart jobs right now.</p>
                        {formStatus === 'success' ? (
                            <div className="text-center py-16 border border-safety-orange/20 bg-safety-orange/5"><CheckCircle2 className="w-16 h-16 text-safety-orange mx-auto mb-6" /><h3 className="text-2xl font-black uppercase mb-4">We'll be in touch shortly.</h3><p className="text-white/60 font-bold">Expect a call or email within one business day.</p></div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">

                                {/* Madlib-style CTA fields — desktop: flowing sentence, mobile: stacked labelled fields.
                                    Visual layer only; input name/value/onChange + validation preserved so the Google Sheets
                                    payload in handleSubmit is unaffected. */}
                                <div className="md:text-2xl md:leading-[2.4] md:text-white/80 font-medium">
                                    {/* Name */}
                                    <span className="field-wrap block md:inline mb-4 md:mb-0">
                                        <span className="md:sr-only block text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Your name <span className="text-red-500">*</span></span>
                                        <span className="hidden md:inline text-white/80">G’day — I’m </span>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full md:w-auto bg-white/5 border border-white/10 rounded-sm p-3 text-base font-medium text-white placeholder:text-white/30 focus:outline-none focus:border-safety-orange transition-colors md:inline-block md:align-baseline md:bg-transparent md:border-0 md:border-b-2 md:border-white/25 md:rounded-none md:px-1.5 md:py-0.5 md:text-2xl md:placeholder:text-white/30 md:w-44"
                                            placeholder="your name"
                                        />
                                    </span>

                                    {/* Trade */}
                                    <span className="field-wrap block md:inline mb-4 md:mb-0">
                                        <span className="md:sr-only block text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Your trade <span className="text-red-500">*</span></span>
                                        <span className="hidden md:inline text-white/80">, a </span>
                                        <select
                                            required
                                            name="trade"
                                            value={formData.trade}
                                            onChange={handleInputChange}
                                            className="w-full md:w-auto bg-white/5 border border-white/10 rounded-sm p-3 text-base font-medium text-white placeholder:text-white/30 focus:outline-none focus:border-safety-orange transition-colors md:inline-block md:align-baseline md:bg-transparent md:border-0 md:border-b-2 md:border-white/25 md:rounded-none md:px-1.5 md:py-0.5 md:text-2xl md:placeholder:text-white/30 md:w-48 appearance-none"
                                        >
                                            <option value="" disabled className="bg-construction-charcoal">e.g. plumber</option>
                                            <option value="Plumber" className="bg-construction-charcoal">Plumber</option>
                                            <option value="Electrician" className="bg-construction-charcoal">Electrician</option>
                                            <option value="Builder" className="bg-construction-charcoal">Builder</option>
                                            <option value="Roofer" className="bg-construction-charcoal">Roofer</option>
                                            <option value="HVAC" className="bg-construction-charcoal">HVAC / Air Con</option>
                                            <option value="Landscaper" className="bg-construction-charcoal">Landscaper</option>
                                            <option value="Painter" className="bg-construction-charcoal">Painter</option>
                                            <option value="Concreter" className="bg-construction-charcoal">Concreter</option>
                                            <option value="Carpenter" className="bg-construction-charcoal">Carpenter</option>
                                            <option value="Other" className="bg-construction-charcoal">Other trade</option>
                                        </select>
                                    </span>

                                    {/* Business */}
                                    <span className="field-wrap block md:inline mb-4 md:mb-0">
                                        <span className="md:sr-only block text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Business name</span>
                                        <span className="hidden md:inline text-white/80"> running </span>
                                        <input
                                            type="text"
                                            name="business"
                                            value={formData.business}
                                            onChange={handleInputChange}
                                            className="w-full md:w-auto bg-white/5 border border-white/10 rounded-sm p-3 text-base font-medium text-white placeholder:text-white/30 focus:outline-none focus:border-safety-orange transition-colors md:inline-block md:align-baseline md:bg-transparent md:border-0 md:border-b-2 md:border-white/25 md:rounded-none md:px-1.5 md:py-0.5 md:text-2xl md:placeholder:text-white/30 md:w-56"
                                            placeholder="business name"
                                        />
                                    </span>

                                    {/* Location */}
                                    <span className="field-wrap block md:inline mb-4 md:mb-0">
                                        <span className="md:sr-only block text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Suburb / area</span>
                                        <span className="hidden md:inline text-white/80"> around </span>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleInputChange}
                                            className="w-full md:w-auto bg-white/5 border border-white/10 rounded-sm p-3 text-base font-medium text-white placeholder:text-white/30 focus:outline-none focus:border-safety-orange transition-colors md:inline-block md:align-baseline md:bg-transparent md:border-0 md:border-b-2 md:border-white/25 md:rounded-none md:px-1.5 md:py-0.5 md:text-2xl md:placeholder:text-white/30 md:w-56"
                                            placeholder="e.g. Sandy Bay, Kingston, Glenorchy"
                                        />
                                        <span className="hidden md:inline text-white/80">.</span>
                                    </span>

                                    {/* Phone */}
                                    <span className="field-wrap block md:inline mb-4 md:mb-0">
                                        <span className="md:sr-only block text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Phone <span className="text-red-500">*</span></span>
                                        <span className="hidden md:inline text-white/80"> Best number’s </span>
                                        <input
                                            required
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            maxLength="12"
                                            className={`w-full md:w-auto bg-white/5 border rounded-sm p-3 text-base font-medium text-white placeholder:text-white/30 focus:outline-none focus:border-safety-orange transition-colors md:inline-block md:align-baseline md:bg-transparent md:border-0 md:border-b-2 md:rounded-none md:px-1.5 md:py-0.5 md:text-2xl md:placeholder:text-white/30 md:w-48 ${phoneError ? 'border-red-500 md:border-red-500' : 'border-white/10 md:border-white/25'}`}
                                            placeholder="0412 345 678"
                                        />
                                    </span>

                                    {/* Email */}
                                    <span className="field-wrap block md:inline mb-4 md:mb-0">
                                        <span className="md:sr-only block text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Email <span className="text-red-500">*</span></span>
                                        <span className="hidden md:inline text-white/80"> and email’s </span>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full md:w-auto bg-white/5 border border-white/10 rounded-sm p-3 text-base font-medium text-white placeholder:text-white/30 focus:outline-none focus:border-safety-orange transition-colors md:inline-block md:align-baseline md:bg-transparent md:border-0 md:border-b-2 md:border-white/25 md:rounded-none md:px-1.5 md:py-0.5 md:text-2xl md:placeholder:text-white/30 md:w-64"
                                            placeholder="you@email.com"
                                        />
                                        <span className="hidden md:inline text-white/80">. Show me where I’m </span>
                                        <span className="hidden md:inline text-safety-orange font-black">losing jobs.</span>
                                    </span>
                                </div>

                                {phoneError && (
                                    <p className="text-red-500 text-xs font-bold mt-3 uppercase tracking-wider">{phoneError}</p>
                                )}

                                {/* Message */}
                                <div className="space-y-1 mt-8">
                                    <label className="block text-xs font-bold uppercase tracking-widest text-white/60">Anything else we should know?</label>
                                    <textarea
                                        name="message"
                                        rows={3}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full bg-white/5 border border-white/10 p-3 text-base text-white placeholder:text-white/20 focus:outline-none focus:border-safety-orange transition-colors rounded-sm font-medium min-h-[80px]"
                                        placeholder="Current website, biggest problem, what you’re after..."
                                    />
                                </div>

                                <Button type="submit" disabled={formStatus === 'submitting'} className="w-full bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none py-6 text-lg font-black uppercase tracking-widest">{formStatus === 'submitting' ? <><Loader2 className="w-5 h-5 animate-spin mr-2" />Sending...</> : <>Get My Free Audit <ArrowRight className="ml-2 w-5 h-5" /></>}</Button>
                                <p className="text-[10px] text-white/30 text-center font-bold uppercase tracking-widest">No spam. No obligation. We'll call or email within one business day.</p>
                            </form>
                        )}
                        <div className="mt-16 pt-12 border-t border-white/5 text-center space-y-4"><p className="text-white/30 text-xs font-bold uppercase tracking-widest">Also explore</p><div className="flex flex-wrap justify-center gap-4 text-xs font-black uppercase tracking-widest"><a href="/marketing-for-tradies" className="text-white/40 hover:text-safety-orange transition-colors">Marketing for Tradies →</a><a href="/seo-for-tradies" className="text-white/40 hover:text-safety-orange transition-colors">SEO for Tradies →</a><a href="/automation" className="text-white/40 hover:text-safety-orange transition-colors">Trade Automation →</a><a href="/resources" className="text-white/40 hover:text-safety-orange transition-colors">Free Resources →</a></div></div>
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default HobartLocationPage;
