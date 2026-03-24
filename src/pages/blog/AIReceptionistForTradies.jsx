import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Phone, PhoneOff, Clock, DollarSign, CheckCircle2, Zap } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

const AIReceptionistForTradies = () => {
    return (
        <div className="min-h-screen bg-construction-charcoal text-white font-sans">
            <Helmet>
                <title>How to Handle Missed Calls Without Hiring Staff | AI Receptionist for Australian Tradies</title>
                <meta name="description" content="The average Australian trade business misses 60% of calls while on the tools. Learn how AI receptionist systems answer every call, book appointments, and qualify leads—without wages or sick days." />
                <meta name="keywords" content="ai receptionist, missed calls tradies, tradie automation, call answering service, trade business, Australian tradies, lead capture, appointment booking" />
                <link rel="canonical" href="https://yourtradepartner.com.au/resources/ai-receptionist-for-tradies" />
                <meta property="og:title" content="How to Handle Missed Calls Without Hiring Staff" />
                <meta property="og:description" content="AI receptionist systems for Australian tradies—answer every call, book jobs, qualify leads automatically." />
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
                            Automation
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-black uppercase italic mb-6 leading-tight">
                            How to Handle Missed Calls <span className="text-safety-orange">Without Hiring Staff</span>
                        </h1>
                        <div className="flex items-center gap-6 text-white/40 text-sm font-bold uppercase tracking-wider mb-8">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>7 min read</span>
                            </div>
                            <div>March 2026</div>
                        </div>
                        <p className="text-xl md:text-2xl text-white/80 font-bold leading-relaxed">
                            The average Australian trade business misses 60% of calls while on the tools. AI receptionist systems answer every call, book appointments, and qualify leads—without wages or sick days.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <article className="py-12 md:py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* The Problem */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                The $50,000 Problem
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                You're under a house fixing a burst pipe. Your phone rings. You ignore it—you're elbow-deep in water and can't answer. The call goes to voicemail. The homeowner hangs up and calls the next plumber on Google.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                That missed call was worth $800. You'll get 6 more like it this week. That's $4,800 in lost work—per week.
                            </p>

                            <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <PhoneOff className="w-6 h-6 text-safety-orange" />
                                            <h3 className="text-xl font-black uppercase">The Numbers</h3>
                                        </div>
                                        <ul className="space-y-2 text-white/80 font-bold">
                                            <li>• Average missed call rate: <strong className="text-safety-orange">60%</strong></li>
                                            <li>• Calls answered after 4+ rings: <strong className="text-safety-orange">75% hang up</strong></li>
                                            <li>• Voicemails returned: <strong className="text-safety-orange">Only 12%</strong></li>
                                            <li>• Customer gives up and calls competitor: <strong className="text-safety-orange">88%</strong></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <DollarSign className="w-6 h-6 text-safety-orange" />
                                            <h3 className="text-xl font-black uppercase">The Cost</h3>
                                        </div>
                                        <div className="bg-black/40 border border-white/10 p-4">
                                            <p className="text-sm text-white/60 font-bold mb-2">If your average job is $2,500:</p>
                                            <p className="text-2xl font-black text-safety-orange mb-1">$52,000/year</p>
                                            <p className="text-xs text-white/40 font-bold uppercase tracking-wider">Lost revenue from missed calls</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Why Hiring Doesn't Work */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6">
                                Why Hiring a Receptionist Doesn't Work
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Most tradies' first thought: "I'll just hire someone to answer calls." Here's why that fails 80% of the time:
                            </p>

                            <div className="space-y-4">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-3 flex items-center gap-2">
                                        <span className="text-safety-orange">1.</span> The Math Doesn't Work
                                    </h3>
                                    <p className="text-white/80 font-bold mb-3">
                                        Part-time receptionist: $25/hour × 20 hours/week = <strong className="text-safety-orange">$26,000/year</strong>
                                    </p>
                                    <p className="text-white/80 font-bold">
                                        Plus: superannuation, WorkCover, sick leave, holidays, training, equipment. Real cost: <strong className="text-safety-orange">$35,000+/year</strong>
                                    </p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-3 flex items-center gap-2">
                                        <span className="text-safety-orange">2.</span> They Don't Know Your Business
                                    </h3>
                                    <p className="text-white/80 font-bold mb-3">
                                        A receptionist can take messages. But can they:
                                    </p>
                                    <ul className="space-y-2 text-white/80 font-bold">
                                        <li>• Qualify leads? ("Is it urgent? What's the scope?")</li>
                                        <li>• Know which suburbs you service?</li>
                                        <li>• Quote rough prices for standard jobs?</li>
                                        <li>• Book directly into your calendar without checking?</li>
                                    </ul>
                                    <p className="text-white/60 font-bold mt-3 italic text-sm">
                                        Most can't. So you're still playing phone tag, just with extra steps.
                                    </p>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-3 flex items-center gap-2">
                                        <span className="text-safety-orange">3.</span> They're Not Always Available
                                    </h3>
                                    <p className="text-white/80 font-bold">
                                        Calls come in at 6:30am (before a homeowner leaves for work) and 8pm (after they get home). Your receptionist works 9-5. You're back to missing the urgent calls that book jobs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* How AI Receptionists Work */}
                        <div className="bg-safety-orange/10 border border-safety-orange/20 p-8">
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 flex items-center gap-3">
                                <Zap className="w-8 h-8 text-safety-orange" />
                                How AI Receptionists Actually Work
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Modern AI voice systems (like Retell, Bland AI, or custom setups) don't sound like robots. They sound like professional receptionists who know your business inside-out.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-black uppercase mb-3 text-safety-orange">What Happens When Someone Calls:</h3>
                                    <ol className="space-y-4">
                                        <li className="flex gap-4">
                                            <span className="text-2xl font-black text-safety-orange">1</span>
                                            <div>
                                                <p className="font-black mb-1">AI answers in 2 rings</p>
                                                <p className="text-sm text-white/70 font-bold">"Thanks for calling [Your Business], this is Sarah. How can I help you today?"</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="text-2xl font-black text-safety-orange">2</span>
                                            <div>
                                                <p className="font-black mb-1">Asks qualifying questions</p>
                                                <p className="text-sm text-white/70 font-bold">"What suburb are you in? Is this urgent or can we schedule for later this week?"</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="text-2xl font-black text-safety-orange">3</span>
                                            <div>
                                                <p className="font-black mb-1">Books directly into your calendar</p>
                                                <p className="text-sm text-white/70 font-bold">Syncs with Google Calendar, ServiceM8, or any system you use.</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="text-2xl font-black text-safety-orange">4</span>
                                            <div>
                                                <p className="font-black mb-1">Sends you a text with details</p>
                                                <p className="text-sm text-white/70 font-bold">"New job: Emergency plumbing in Parramatta. Burst pipe. Booked for 2pm tomorrow. Customer: John 0412 345 678."</p>
                                            </div>
                                        </li>
                                    </ol>
                                </div>

                                <div className="bg-black/40 border-l-4 border-safety-orange p-4">
                                    <p className="text-sm text-white/70 font-bold italic">
                                        "I thought it would sound robotic. First week, three customers asked if 'Sarah' was in the office. It's that good." — Matt, Perth electrician
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* What AI Can (and Can't) Do */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                What AI Can (and Can't) Do
                            </h2>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-4 text-safety-orange">✓ What It Handles</h3>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 items-start">
                                            <CheckCircle2 className="w-5 h-5 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80 font-bold">Standard bookings and enquiries</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <CheckCircle2 className="w-5 h-5 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80 font-bold">Qualifying leads (suburb, urgency, scope)</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <CheckCircle2 className="w-5 h-5 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80 font-bold">Appointment scheduling</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <CheckCircle2 className="w-5 h-5 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80 font-bold">Quote requests for standard work</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <CheckCircle2 className="w-5 h-5 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80 font-bold">Answering FAQs (hours, service area, rates)</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <CheckCircle2 className="w-5 h-5 text-safety-orange flex-shrink-0 mt-0.5" />
                                            <span className="text-white/80 font-bold">After-hours calls (24/7 availability)</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-xl font-black uppercase mb-4 text-white/40">✕ When You Still Need to Take It</h3>
                                    <ul className="space-y-3">
                                        <li className="flex gap-3 items-start">
                                            <span className="text-white/20 flex-shrink-0 mt-0.5">✕</span>
                                            <span className="text-white/60 font-bold">Complex technical questions</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <span className="text-white/20 flex-shrink-0 mt-0.5">✕</span>
                                            <span className="text-white/60 font-bold">Detailed custom quotes</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <span className="text-white/20 flex-shrink-0 mt-0.5">✕</span>
                                            <span className="text-white/60 font-bold">Angry customer complaints</span>
                                        </li>
                                        <li className="flex gap-3 items-start">
                                            <span className="text-white/20 flex-shrink-0 mt-0.5">✕</span>
                                            <span className="text-white/60 font-bold">Supplier or trade partner calls</span>
                                        </li>
                                    </ul>
                                    <p className="text-sm text-white/40 font-bold mt-4 italic">
                                        In these cases, AI transfers to your mobile or takes a detailed message with callback request.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Real Cost Comparison */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6">
                                The Real Cost Comparison
                            </h2>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-lg font-black uppercase mb-4 text-white/60">Human Receptionist</h3>
                                    <div className="text-3xl font-black text-white/60 mb-2">$35,000<span className="text-lg">/year</span></div>
                                    <ul className="space-y-2 text-sm text-white/40 font-bold">
                                        <li>• 20 hours/week coverage</li>
                                        <li>• Sick days, holidays</li>
                                        <li>• Training required</li>
                                        <li>• Limited knowledge</li>
                                        <li>• 9-5 availability</li>
                                    </ul>
                                </div>

                                <div className="bg-safety-orange/10 border-2 border-safety-orange p-6 relative">
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-safety-orange text-white text-[9px] uppercase tracking-widest">
                                            Best Value
                                        </Badge>
                                    </div>
                                    <h3 className="text-lg font-black uppercase mb-4 text-safety-orange">AI Receptionist</h3>
                                    <div className="text-3xl font-black text-safety-orange mb-2">$299<span className="text-lg">/month</span></div>
                                    <ul className="space-y-2 text-sm text-white/80 font-bold">
                                        <li>• 24/7/365 coverage</li>
                                        <li>• Never sick or on leave</li>
                                        <li>• Knows your business perfectly</li>
                                        <li>• Instant booking + CRM sync</li>
                                        <li>• After-hours calls = more jobs</li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6">
                                    <h3 className="text-lg font-black uppercase mb-4 text-white/60">Call Service</h3>
                                    <div className="text-3xl font-black text-white/60 mb-2">$800<span className="text-lg">/month</span></div>
                                    <ul className="space-y-2 text-sm text-white/40 font-bold">
                                        <li>• Generic message taking</li>
                                        <li>• No calendar integration</li>
                                        <li>• No lead qualification</li>
                                        <li>• Still playing phone tag</li>
                                        <li>• Per-call charges add up</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Real Example */}
                        <div className="bg-black/40 border border-white/10 p-8">
                            <h2 className="text-2xl font-black uppercase italic mb-4 text-safety-orange">Real Example: Perth Electrician</h2>
                            <div className="space-y-4 text-white/80 font-bold">
                                <p>
                                    <strong className="text-white">Before:</strong> Missing 15-20 calls per week while on-site. Voicemail box always full. Spending 90 minutes every evening returning calls—half already booked someone else.
                                </p>
                                <p>
                                    <strong className="text-white">After:</strong> AI answers every call in 2 rings. Books standard jobs directly (switchboard upgrades, safety switches, new points). Complex jobs get flagged for callback. AI texts job details while he's still on-site.
                                </p>
                                <div className="bg-safety-orange/10 border-l-4 border-safety-orange p-4">
                                    <p className="font-black text-lg text-safety-orange mb-2">Result:</p>
                                    <ul className="space-y-1 text-sm">
                                        <li>• Booked 27 extra jobs in first month</li>
                                        <li>• $18,500 additional revenue</li>
                                        <li>• Zero missed calls after hours</li>
                                        <li>• Freed up 6 hours/week (no phone tag)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* How to Get Started */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-6 border-b-2 border-safety-orange pb-2 inline-block">
                                How to Get Started
                            </h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-6">
                                Setting up an AI receptionist takes 2-3 days. Here's what's involved:
                            </p>

                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-safety-orange/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl font-black text-safety-orange">1</span>
                                    </div>
                                    <div>
                                        <h3 className="font-black text-lg mb-2">We Learn Your Business</h3>
                                        <p className="text-white/80 font-bold">What services you offer, which suburbs you cover, your pricing structure, how you want calls handled, what qualifies as "urgent."</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-safety-orange/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl font-black text-safety-orange">2</span>
                                    </div>
                                    <div>
                                        <h3 className="font-black text-lg mb-2">Configure the AI</h3>
                                        <p className="text-white/80 font-bold">Train it on your FAQs, integrate with your calendar (Google/ServiceM8/etc), set up SMS notifications, customise the voice and script.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-safety-orange/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl font-black text-safety-orange">3</span>
                                    </div>
                                    <div>
                                        <h3 className="font-black text-lg mb-2">Test It</h3>
                                        <p className="text-white/80 font-bold">You call the number, test different scenarios (booking, quote request, urgent job, outside service area). Adjust until it's perfect.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-safety-orange/20 flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl font-black text-safety-orange">4</span>
                                    </div>
                                    <div>
                                        <h3 className="font-black text-lg mb-2">Go Live</h3>
                                        <p className="text-white/80 font-bold">Forward your business line to the AI number. Every call answered, every lead captured, every booking automated.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Line */}
                        <div className="bg-white/5 border-l-4 border-safety-orange p-8">
                            <h2 className="text-2xl font-black uppercase italic mb-4">The Bottom Line</h2>
                            <p className="text-lg text-white/80 font-bold leading-relaxed mb-4">
                                Every missed call is a lost job. Multiply that by 15-20 calls per week, and you're leaving $50,000+ on the table every year.
                            </p>
                            <p className="text-lg text-white/80 font-bold leading-relaxed">
                                AI receptionists cost less than a single job, answer 24/7, and never take a sick day. It's not fancy tech for tech's sake—it's the difference between running a $300k business and a $400k business.
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
                            Want to Stop Missing <span className="text-safety-orange">High-Value Calls?</span>
                        </h2>
                        <p className="text-xl text-white/70 font-bold mb-8 max-w-2xl mx-auto">
                            We set up AI receptionist systems that answer every call, book jobs, and integrate with your existing tools—without hiring staff.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/#packages">
                                <Button className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    See Our Packages <ArrowRight className="ml-3 w-5 h-5" />
                                </Button>
                            </a>
                            <a href="/#contact">
                                <Button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 rounded-none px-8 py-6 text-lg font-black uppercase tracking-widest">
                                    Get a Free Demo
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

export default AIReceptionistForTradies;
