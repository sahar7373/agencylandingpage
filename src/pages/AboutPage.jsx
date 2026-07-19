import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Clock, Mail } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { BGPattern } from '../components/ui/background-patterns';

const AboutPage = () => {
    const reduce = useReducedMotion();

    const fadeUp = reduce
        ? {}
        : { hidden: { y: 24, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
    const group = reduce
        ? {}
        : { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
    const inView = { once: true, margin: '-60px' };

    const journey = [
        {
            year: 'Where it started',
            title: 'Civil Engineering',
            body: 'A way of thinking about systems and processes that stuck with me long after uni.',
        },
        {
            year: 'Early career',
            title: 'On the tools',
            body: 'Time spent hands-on in construction before I moved into project management.',
        },
        {
            year: 'Today',
            title: 'Project Manager & Assessor',
            body: "For one of Australia's leading insurance builders in Adelaide. I scope claimed damage, prepare reports, coordinate subbies, and manage repairs through to final handover, keeping insurer and insured aligned the whole way.",
        },
        {
            year: 'After 5pm',
            title: 'Your Trade Partner',
            body: 'Built after hours: weeknights from 5pm, most weekends. No investors, no agency background. Just the gap I kept seeing, and a mindset for fixing broken systems.',
            accent: true,
        },
    ];

    const fixes = [
        "Sometimes it's a website that actually converts.",
        "Sometimes it's getting more out of ServiceM8.",
        "Sometimes it's practical AI or a bit of automation.",
        "Sometimes it's just fixing a process that's quietly costing hours every week.",
    ];

    return (
        <div className="relative min-h-screen bg-[#F2EDE8] text-construction-charcoal font-sans overflow-hidden">
            <BGPattern variant="diagonal-stripes" mask="fade-edges" size={14} fill="rgba(26,26,26,0.06)" className="z-0" />

            <Helmet>
                <title>About | Your Trade Partner</title>
                <meta name="description" content="Saharsh is an Adelaide-based civil engineer and insurance project manager who built Your Trade Partner after hours — helping Australian trade businesses win more work and cut admin with better systems, not more software." />
                <meta property="og:title" content="About | Your Trade Partner" />
                <meta property="og:description" content="Saharsh is an Adelaide-based civil engineer and insurance project manager who built Your Trade Partner after hours — helping Australian trade businesses win more work and cut admin with better systems, not more software." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourtradepartner.com.au/about" />
                <link rel="canonical" href="https://yourtradepartner.com.au/about" />
                <script type="application/ld+json">{JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "name": "About Your Trade Partner",
                    "url": "https://yourtradepartner.com.au/about",
                    "description": "Your Trade Partner was built by Saharsh, an Adelaide-based civil engineer and insurance project manager, to help Australian trade businesses win more work and cut admin with better systems, not more software.",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Your Trade Partner",
                        "url": "https://yourtradepartner.com.au"
                    }
                })}</script>
            </Helmet>

            {/* Nav */}
            <nav className="relative z-20 border-b border-construction-charcoal/10 bg-[#F2EDE8]/90 backdrop-blur-sm sticky top-0">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <a href="/" className="flex items-center gap-3 text-construction-charcoal hover:text-safety-orange transition-colors group">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-xs font-black uppercase tracking-widest">Your Trade Partner</span>
                        </a>
                        <span className="hidden sm:inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-safety-orange">
                            <span className="w-1.5 h-1.5 bg-safety-orange" />
                            A note from the founder
                        </span>
                    </div>
                </div>
            </nav>

            <div className="relative z-10 container mx-auto px-6">
                <div className="max-w-3xl mx-auto pt-12 pb-24 md:pt-16 md:pb-32">
                    <Breadcrumbs
                        items={[{ label: 'Home', href: '/' }]}
                        currentLabel="About"
                        currentPath="/about"
                        tone="light"
                        className="mb-14"
                    />

                    {/* Opening */}
                    <motion.section variants={group} initial="hidden" animate="visible">
                        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-construction-charcoal/25 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-construction-charcoal/60 mb-8">
                            <Clock className="w-3.5 h-3.5 text-safety-orange" />
                            17:00 · after hours
                        </motion.div>

                        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-black italic leading-[0.92] mb-8">
                            I built this<br />
                            <span className="text-safety-orange">after 5pm.</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="text-xl md:text-2xl font-medium leading-relaxed text-construction-charcoal/80 max-w-[46ch]">
                            No investors. No big announcement. Just weeknights from 5pm and most weekends, because a gap I kept seeing on the job got too big to ignore.
                        </motion.p>

                        <motion.p variants={fadeUp} className="mt-6 text-base font-bold uppercase tracking-widest text-construction-charcoal/40">
                            Saharsh · Adelaide, SA
                        </motion.p>
                    </motion.section>

                    <div className="my-16 md:my-20 flex items-center gap-4" aria-hidden="true">
                        <span className="w-8 h-0.5 bg-safety-orange" />
                        <span className="h-px flex-1 bg-construction-charcoal/10" />
                    </div>

                    {/* The path here — career spine */}
                    <motion.section variants={group} initial="hidden" whileInView="visible" viewport={inView}>
                        <motion.h2 variants={fadeUp} className="text-xs font-black uppercase tracking-[0.25em] text-construction-charcoal/45 mb-10">
                            How I got here
                        </motion.h2>

                        <div className="relative">
                            <span className="absolute left-1 top-2 bottom-2 w-px bg-construction-charcoal/15" aria-hidden="true" />
                            <ol className="space-y-10">
                                {journey.map((node) => (
                                    <motion.li key={node.title} variants={fadeUp} className="relative pl-10">
                                        <span
                                            className={`absolute left-1 top-2 -translate-x-1/2 ${node.accent ? 'w-3 h-3 bg-safety-orange' : 'w-2.5 h-2.5 bg-construction-charcoal'}`}
                                            aria-hidden="true"
                                        />
                                        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-safety-orange mb-1.5">{node.year}</p>
                                        <h3 className="text-xl md:text-2xl font-black uppercase leading-tight mb-2">{node.title}</h3>
                                        <p className="text-construction-charcoal/70 leading-relaxed max-w-[52ch]">{node.body}</p>
                                    </motion.li>
                                ))}
                            </ol>
                        </div>
                    </motion.section>

                    <div className="my-16 md:my-20 flex items-center gap-4" aria-hidden="true">
                        <span className="w-8 h-0.5 bg-safety-orange" />
                        <span className="h-px flex-1 bg-construction-charcoal/10" />
                    </div>

                    {/* What I kept seeing */}
                    <motion.section variants={group} initial="hidden" whileInView="visible" viewport={inView}>
                        <motion.h2 variants={fadeUp} className="text-xs font-black uppercase tracking-[0.25em] text-construction-charcoal/45 mb-8">
                            What I kept seeing
                        </motion.h2>
                        <div className="space-y-5 text-lg md:text-xl leading-relaxed text-construction-charcoal/75 max-w-[54ch]">
                            <motion.p variants={fadeUp}>
                                Working next to trade businesses every day, I kept noticing the same thing. Genuinely solid operators who were almost impossible to find online.
                            </motion.p>
                            <motion.p variants={fadeUp}>
                                No proper Google presence. Websites that didn't reflect the quality of their work. Enquiries slipping through the cracks because there was no system behind them.
                            </motion.p>
                            <motion.p variants={fadeUp}>
                                And the ones with steady work were often buried in admin: quoting, chasing, and manual jobs eating the hours that should've gone to the tools, or home.
                            </motion.p>
                            <motion.p variants={fadeUp} className="font-bold text-construction-charcoal">
                                The opportunity sitting there, uncaptured, was hard to ignore.
                            </motion.p>
                        </div>
                    </motion.section>

                    {/* The realisation — big pull moment, breaks wider */}
                    <motion.section
                        variants={group}
                        initial="hidden"
                        whileInView="visible"
                        viewport={inView}
                        className="my-16 md:my-24 -mx-6 md:-mx-16 px-6 md:px-16 py-14 md:py-20 bg-construction-charcoal text-[#F2EDE8]"
                    >
                        <motion.p variants={fadeUp} className="text-[11px] font-black uppercase tracking-[0.3em] text-safety-orange mb-6">
                            What I've realised
                        </motion.p>
                        <motion.blockquote variants={fadeUp} className="text-3xl md:text-5xl font-black italic uppercase leading-[1.02]">
                            Most trade businesses don't need more software.<br className="hidden md:block" />{' '}
                            <span className="text-safety-orange">They need better systems.</span>
                        </motion.blockquote>

                        <motion.ul variants={group} className="mt-10 space-y-3 max-w-[52ch]">
                            {fixes.map((line, i) => (
                                <motion.li key={i} variants={fadeUp} className="flex items-start gap-3 text-lg text-[#F2EDE8]/80">
                                    <span className="mt-2 w-1.5 h-1.5 bg-safety-orange flex-shrink-0" aria-hidden="true" />
                                    <span>{line}</span>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <motion.p variants={fadeUp} className="mt-10 text-lg md:text-xl leading-relaxed text-[#F2EDE8]/70 max-w-[54ch]">
                            So that's what Your Trade Partner is really about. Work out what's actually broken, then put the right fix in. Not sell you another tool.
                        </motion.p>
                    </motion.section>

                    {/* Honest close + signature */}
                    <motion.section variants={group} initial="hidden" whileInView="visible" viewport={inView} className="max-w-[54ch]">
                        <motion.p variants={fadeUp} className="text-lg md:text-xl leading-relaxed text-construction-charcoal/75">
                            I'm still learning a lot. But I post what I find along the way, the real stuff, not just the wins. If you want to see what's working for Australian trade businesses online right now,{' '}
                            <a href="/resources" className="text-safety-orange font-bold underline decoration-safety-orange/40 underline-offset-4 hover:decoration-safety-orange transition-colors">the resources section</a>{' '}
                            is where I put it.
                        </motion.p>

                        <motion.div variants={fadeUp} className="mt-12">
                            <p className="text-sm font-bold uppercase tracking-widest text-construction-charcoal/40 mb-1">Cheers,</p>
                            <p className="font-signature text-6xl md:text-7xl leading-none text-construction-charcoal -rotate-2 origin-left">Saharsh</p>
                            <p className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-construction-charcoal/50">
                                Founder, Your Trade Partner
                            </p>
                        </motion.div>

                        <motion.a
                            variants={fadeUp}
                            href="mailto:hello@yourtradepartner.com.au"
                            className="group mt-12 flex w-full sm:w-auto sm:inline-flex items-center justify-center sm:justify-start gap-3 bg-construction-charcoal text-[#F2EDE8] px-5 md:px-6 py-4 text-[11px] md:text-sm font-black uppercase tracking-wider md:tracking-widest hover:bg-safety-orange transition-colors"
                        >
                            <Mail className="w-4 h-4 flex-shrink-0" />
                            <span className="break-all">hello@yourtradepartner.com.au</span>
                            <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    </motion.section>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
