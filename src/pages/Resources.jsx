import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const Resources = () => {
    const articles = [
        {
            id: 'missed-calls',
            title: "Why Most Tradie Websites Don't Get Calls",
            description: "78% of homeowners research online before contacting a tradie. If your website doesn't build trust in 3 seconds, they're calling someone else.",
            category: "Lead Generation",
            readTime: "5 min read",
            slug: "why-tradie-websites-dont-get-calls",
            comingSoon: false
        },
        {
            id: 'ai-receptionist',
            title: "How to Handle Missed Calls Without Hiring Staff",
            description: "The average trade business misses 60% of calls while on the tools. AI receptionist systems answer every call, book appointments, and qualify leads—without wages or sick days.",
            category: "Automation",
            readTime: "7 min read",
            slug: "ai-receptionist-for-tradies",
            comingSoon: false
        },
        {
            id: 'google-business',
            title: "Google My Business Setup Guide for Tradies",
            description: "Step-by-step guide to setting up and optimizing your Google Business Profile. Show up when customers search 'plumber near me' or 'electrician [your suburb]'.",
            category: "Local SEO",
            readTime: "10 min read",
            slug: "google-business-profile-setup",
            comingSoon: false
        },
        {
            id: 'electrician-website',
            title: "What Electricians Need on Their Website (That Plumbers Don't)",
            description: "Every trade has specific trust signals and licensing requirements. Generic websites miss these details—and lose customers because of it.",
            category: "Trade-Specific",
            readTime: "6 min read",
            slug: "electrician-website-requirements",
            comingSoon: false
        },
        {
            id: 'website-roi',
            title: "How Many Jobs Does a Website Need to Pay for Itself?",
            description: "Break-even math for trade businesses. If your average job is $2,500, you need 2-3 extra jobs to cover a $3,900 website. Most get that in the first month.",
            category: "Business Growth",
            readTime: "4 min read",
            slug: "website-roi-calculation",
            comingSoon: false
        },
        {
            id: 'suburb-seo',
            title: "How to Rank for 'Tradie + Your Suburb' Searches",
            description: "Local SEO for tradies: suburb-specific pages, Google Maps optimization, and content that matches what homeowners actually search for.",
            category: "Local SEO",
            readTime: "8 min read",
            slug: "suburb-seo-for-tradies",
            comingSoon: false
        },
        {
            id: 'professional-trust',
            title: "Why Looking 'Professional' Online Actually Matters",
            description: "Homeowners judge your business in 3 seconds. A DIY Wix site vs a professional setup can be the difference between a $4,000 job and getting ghosted.",
            category: "Branding",
            readTime: "5 min read",
            slug: "professional-trust-signals",
            comingSoon: false
        },
        {
            id: 'ads-vs-seo',
            title: "Google Ads vs Organic SEO: What Actually Works for Tradies",
            description: "Ads bring leads this week. SEO brings leads forever. Most successful tradies do both. Here's how to decide what to invest in first.",
            category: "Marketing",
            readTime: "9 min read",
            slug: "google-ads-vs-seo-tradies",
            comingSoon: false
        },
        {
            id: 'aeo-for-tradies',
            title: "AEO for Tradies: How to Get Featured in ChatGPT & AI Search",
            description: "42% of Australians now use ChatGPT to find tradies. Learn Answer Engine Optimization to get your business recommended by AI search engines like ChatGPT, Perplexity, and Google AI.",
            category: "AI Search",
            readTime: "10 min read",
            slug: "aeo-for-tradies",
            comingSoon: false
        },
        {
            id: 'google-ai-overviews-tradie-leads',
            title: "How Google's AI Is Stealing Your Tradie Leads (And What To Do About It)",
            description: "Google AI Overviews now intercept 47% of Australian searches before users click. Find out why tradies are losing leads to AI — and the exact steps to get cited instead.",
            category: "AI Search",
            readTime: "6 min read",
            slug: "google-ai-overviews-tradie-leads",
            comingSoon: false
        }
    ];

    const categories = ["All", "AI Search", "Lead Generation", "Automation", "Local SEO", "Trade-Specific", "Business Growth", "Branding", "Marketing"];
    const [selectedCategory, setSelectedCategory] = React.useState("All");

    const filteredArticles = selectedCategory === "All"
        ? articles
        : articles.filter(article => article.category === selectedCategory);

    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans">
            <Helmet>
                <title>Free Tradie Marketing Resources & Guides | Your Trade Partner</title>
                <meta name="description" content="Practical guides, tips, and resources to help Australian trade businesses get more leads, handle calls better, and grow smarter." />
                <link rel="canonical" href="https://yourtradepartner.com.au/resources" />
            </Helmet>

            {/* Header */}
            <header className="border-b border-white/5 py-6">
                <div className="container mx-auto px-6">
                    <a href="/" className="inline-flex items-center gap-2 text-white hover:text-safety-orange transition-colors">
                        <span className="text-xl md:text-2xl font-black uppercase tracking-tight">← Back to Home</span>
                    </a>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-16 md:py-24 border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge className="bg-safety-orange/10 text-safety-orange mb-6 hover:bg-safety-orange/10 pointer-events-none uppercase tracking-widest text-xs">
                            Free Resources
                        </Badge>
                        <h1 className="text-5xl md:text-7xl font-black uppercase italic mb-6 leading-none">
                            Practical Guides <br />
                            <span className="text-safety-orange">For Aussie Tradies</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/70 font-bold max-w-2xl mx-auto">
                            No fluff. No theory. Just real advice on getting more leads, handling calls better, and growing smarter.
                        </p>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 border-b border-white/5 bg-black/20">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-wrap gap-3 justify-center">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 text-xs font-black uppercase tracking-widest transition-all ${
                                        selectedCategory === category
                                            ? 'bg-safety-orange text-white'
                                            : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            {filteredArticles.map((article) => (
                                <motion.div
                                    key={article.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className={`bg-white/5 border border-white/10 p-8 hover:border-safety-orange/30 transition-all group relative ${
                                        article.comingSoon ? 'opacity-60' : ''
                                    }`}
                                >
                                    {article.comingSoon && (
                                        <div className="absolute top-4 right-4">
                                            <Badge className="bg-white/10 text-white text-[9px] uppercase tracking-widest">
                                                Coming Soon
                                            </Badge>
                                        </div>
                                    )}

                                    <div className="flex items-center gap-3 mb-4">
                                        <BookOpen className="w-5 h-5 text-safety-orange" />
                                        <span className="text-xs font-black uppercase tracking-widest text-safety-orange">
                                            {article.category}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-black uppercase mb-4 leading-tight group-hover:text-safety-orange transition-colors">
                                        {article.title}
                                    </h2>

                                    <p className="text-sm text-white/70 font-bold leading-relaxed mb-6">
                                        {article.description}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-white/40">
                                            <Clock className="w-4 h-4" />
                                            <span className="text-xs font-bold uppercase tracking-wider">{article.readTime}</span>
                                        </div>

                                        {article.comingSoon ? (
                                            <Button
                                                disabled
                                                className="bg-white/10 text-white rounded-none px-6 py-3 text-xs font-black uppercase tracking-widest opacity-50 cursor-not-allowed"
                                            >
                                                Coming Soon
                                            </Button>
                                        ) : (
                                            <a href={`/resources/${article.slug}`}>
                                                <Button
                                                    className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-6 py-3 text-xs font-black uppercase tracking-widest"
                                                >
                                                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                                                </Button>
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="mt-20 bg-white/5 border border-white/10 p-12 text-center">
                            <h3 className="text-3xl md:text-4xl font-black uppercase italic mb-4">
                                Want a System <span className="text-safety-orange">That Actually Works?</span>
                            </h3>
                            <p className="text-lg text-white/70 font-bold mb-8 max-w-2xl mx-auto">
                                Reading helps. But having a professional system built and managed for you? That's how you actually get results.
                            </p>
                            <a href="/#packages">
                                <Button className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    See Packages <ArrowRight className="ml-3 w-5 h-5" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Minimal */}
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

export default Resources;
