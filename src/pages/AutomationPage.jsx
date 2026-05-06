import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, useInView, animate } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Hammer, ArrowRight, CheckCircle2, Zap, Menu, X, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MarqueeLogoScroller } from '@/components/ui/marquee-logo-scroller'

// ─── Logo Node ────────────────────────────────────────────────────────────────
// Each node is a circle with a logo image (or placeholder until logos are provided).
// Drop logo files into public/logos/ and update the src prop.
const LogoNode = React.forwardRef(({ label, src, size = 'md' }, ref) => {
  const sizeClass = size === 'lg' ? 'w-20 h-20' : 'w-14 h-14'
  return (
    <div
      ref={ref}
      className={`${sizeClass} rounded-full bg-white/8 border border-white/20 flex items-center justify-center shadow-lg backdrop-blur-sm flex-shrink-0`}
    >
      {src ? (
        <img src={src} alt={label} className="w-3/5 h-3/5 object-contain" />
      ) : (
        <span className="text-[9px] font-black uppercase tracking-tight text-white/50 text-center leading-tight px-1">
          {label}
        </span>
      )}
    </div>
  )
})
LogoNode.displayName = 'LogoNode'

// ─── Software Section ─────────────────────────────────────────────────────────
function SoftwareSection({ id, title, label, description, items, delay = 0 }) {
  return (
    <motion.div
      id={id}
      className="py-16 border-b border-white/5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-safety-orange/60 mb-2">{label}</p>
        <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-4">{title}</h2>
        <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl">{description}</p>
        {items && (
          <ul className="flex flex-col gap-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white/60">
                <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}

// ─── Count-Up Stat ────────────────────────────────────────────────────────────
function CountUpStat({ prefix = '', from, to, suffix = '', duration = 1.4 }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [val, setVal] = React.useState(from ?? to)

  React.useEffect(() => {
    if (!isInView) return
    const start = from ?? 0
    const controls = animate(start, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return controls.stop
  }, [isInView])

  return (
    <span ref={ref}>
      {prefix}{val}{suffix}
    </span>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AutomationPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [openFaq, setOpenFaq] = React.useState(null)

  const toolsData = [
    {
      name: 'ServiceM8',
      src: '/logos/servicem8logo.png',
      gradient: { from: '#00A651', to: '#006B35' },
      bullets: [
        'Every enquiry handled before you pick up the phone',
        'Close a job — everything else takes care of itself',
        'Your Google profile stays active without lifting a finger',
      ],
    },
    {
      name: 'SafetyCulture',
      src: '/logos/safetyculturelogo.webp',
      gradient: { from: '#00B5AD', to: '#006B66' },
      bullets: [
        'Compliance done before your crew leaves the site',
        'The right people get the right docs — no chasing',
        'Full audit trails with zero manual follow-up',
      ],
    },
    {
      name: 'Fergus',
      src: '/logos/Ferguslogo.png',
      gradient: { from: '#1B5FBB', to: '#0D3575' },
      bullets: [
        'Your team knows where to be before you tell them',
        'Quotes become projects — no back-and-forth',
        'Clients and subs stay informed without you in the middle',
      ],
    },
    {
      name: 'Prime',
      src: '/logos/primeecologo.png',
      gradient: { from: '#1A5CA8', to: '#0D2137' },
      bullets: [
        'Numbers that are always current — across every platform',
        'Budgets reflect reality as the job moves, not after',
        'Document control that moves with your project stages',
      ],
    },
    {
      name: 'Xero',
      src: '/logos/Xero_software_logo.svg.png',
      gradient: { from: '#13B5EA', to: '#0877A3' },
      bullets: [
        'Invoicing handled the moment a job closes',
        'Reconciliation that does not need your time',
        'Financials that reflect today, not last week',
      ],
    },
    {
      name: 'QuickBooks',
      src: '/logos/quickbooklogo.svg',
      gradient: { from: '#2CA01C', to: '#1A6011' },
      bullets: [
        'Invoices and expenses handled without your input',
        'Payroll runs correctly — every period, no reminders',
        'P&L always current across every active job',
      ],
    },
    {
      name: 'Gmail',
      src: '/logos/gmaillogo.png',
      gradient: { from: '#EA4335', to: '#961F15' },
      bullets: [
        'Enquiries handled before you have read them',
        'Clients kept in the loop without a single reply from you',
        'No job slips through while you are on the tools',
      ],
    },
    {
      name: 'Outlook',
      src: '/logos/outlooklogo.png',
      gradient: { from: '#0078D4', to: '#004A8C' },
      bullets: [
        'Enquiries handled before you have read them',
        'Clients kept in the loop without a single reply from you',
        'No job slips through while you are on the tools',
      ],
    },
    {
      name: 'Google Business',
      src: '/logos/gbplogo.jpeg',
      gradient: { from: '#4285F4', to: '#1A56C4' },
      bullets: [
        'Profile stays current every time you finish a job',
        'Review requests go out while you are still on the way home',
        'Always active — never a manual update needed',
      ],
    },
    {
      name: 'ElevenLabs',
      src: '/logos/11labslogo.png',
      noBg: true,
      gradient: { from: '#FFFFFF', to: '#CCCCCC' },
      bullets: [
        'Natural-sounding voice responses that sound like your business',
        'Every call handled consistently — day or night',
        'No missed enquiries while you are on the tools',
      ],
    },
    {
      name: 'Retell AI',
      src: '/logos/retellai-logo.png',
      gradient: { from: '#6C3EF4', to: '#3D1FAA' },
      bullets: [
        'AI voice agents that qualify leads before you lift a finger',
        'Bookings confirmed without anyone picking up the phone',
        'Every conversation logged and handed off automatically',
      ],
    },
    {
      name: 'Twilio',
      src: '/logos/twiliologo.png',
      gradient: { from: '#F22F46', to: '#A31B30' },
      bullets: [
        'SMS follow-ups sent the moment a job is booked or closed',
        'Every client touchpoint automated across voice and text',
        'No-show rates drop when reminders go out on time',
      ],
    },
  ]

  const sectionData = [
    {
      id: 'servicem8',
      label: 'ServiceM8 Automation',
      title: 'ServiceM8',
      description:
        'While you are on the tools, ServiceM8 handles everything that runs around a job. Enquiries get actioned, clients stay informed, and your Google presence stays current — without you managing any of it.',
      items: [
        'Every enquiry handled before it has a chance to go cold',
        'Jobs close cleanly — no loose ends, no chasing',
        'Your online presence reflects the work you are actually doing',
      ],
    },
    {
      id: 'safetyculture',
      label: 'SafetyCulture Automation',
      title: 'SafetyCulture',
      description:
        'Your crew does the inspection. Everything that needs to happen next, happens. The paperwork, the distribution, the filing — it is done before anyone leaves the site.',
      items: [
        'Compliance handled the moment the inspection is complete',
        'The right documents reach the right people — no chasing required',
        'Full audit history maintained without a single manual step',
      ],
    },
    {
      id: 'fergus',
      label: 'Fergus Automation',
      title: 'Fergus',
      description:
        'Your team is always where they need to be. Clients already know what is happening. Jobs move forward without you running the coordination.',
      items: [
        'The right person gets dispatched without a call from you',
        'Quotes convert to active projects — no manual handover',
        'Everyone on the job stays in the loop without you in the middle',
      ],
    },
    {
      id: 'prime',
      label: 'Prime Ecosystem Automation',
      title: 'Prime Ecosystem',
      description:
        'Your numbers stay accurate. Your documents move with your projects. No reconciliation sessions at the end of the week — whether you run Prime ECM, PrimeContract, or the full suite.',
      items: [
        'Every platform reflects the same current data — always',
        'Costs, budgets, and variations stay accurate as the job runs',
        'Document control that keeps pace with your projects, not your admin time',
      ],
    },
    {
      id: 'sync',
      label: 'Full-Stack Tradie Automation',
      title: 'The Full Stack',
      description:
        'A job that closes in one tool does not sit waiting for someone to update the next one. Everything connected to that job moves with it — financials, communications, documents. Full-stack tradie automation means the whole business runs as one system, because we built it to.',
      items: [
        'Your tools share information — you never enter the same thing twice',
        'Warm enquiries stay warm — without anyone manually following up',
        'Every platform reflects what is actually happening in your business',
      ],
    },
  ]

  const faqData = [
    {
      q: 'What trades do you work with?',
      a: 'Plumbers, electricians, builders, HVAC techs, concreters, painters, landscapers — any trade running ServiceM8, Fergus, SafetyCulture, Prime or Xero. If your business runs on these platforms, we can automate it.',
    },
    {
      q: 'Do I need to learn new software?',
      a: 'No. We plug into the tools you already use. The automation runs in the background — nothing changes on your end except the hours you stop spending on admin.',
    },
    {
      q: 'How long does setup take?',
      a: 'Most setups are done in 2–4 weeks. You do not need to do anything — we handle the build, the testing, and the handover.',
    },
    {
      q: 'Will this work if I run a small operation?',
      a: "That's exactly who this is built for. Solo tradies and small crews waste the most time on admin because there's no one else to handle it. Automation fixes that without hiring.",
    },
    {
      q: 'How much admin time can I actually save?',
      a: 'Industry data puts tradie admin at 10–15 hours per week. Tradies we work with typically recover 8–12 of those hours within the first month of automation going live.',
    },
    {
      q: 'I already use ServiceM8 — do I need all five tools?',
      a: 'No. We start with what you have got. Most businesses begin with one platform and expand the automation as they see what is possible. ServiceM8 automation alone is a full project.',
    },
    {
      q: 'Is this the same as hiring a VA?',
      a: 'A VA needs managing, takes sick days, and goes home at 5pm. Automation runs 24/7 with no oversight — and it does not miss enquiries at 9pm on a Sunday.',
    },
    {
      q: 'What does it cost?',
      a: 'Book a free audit first. We map what is worth automating and show you what it will save before you spend a cent. No commitment, no sales pressure — just an honest look at your stack.',
    },
  ]

  return (
    <div className="min-h-screen bg-construction-charcoal text-white font-sans">
      <Helmet>
        <title>AI Automation for Australian Trades | ServiceM8, SafetyCulture, Fergus, Prime | Your Trade Partner</title>
        <meta
          name="description"
          content="AI automation for Australian tradies — plumbers, electricians, builders. We connect ServiceM8, Fergus, SafetyCulture, Prime and Xero so your business runs without manual admin. Save 8–12 hours a week. Done for you."
        />
        <meta name="keywords" content="AI automation for tradies Australia, ServiceM8 automation, Fergus automation for builders, SafetyCulture compliance automation, tradie workflow automation, automate job scheduling for tradies, tradie business automation, automated quoting and invoicing for tradies, automation for plumbers electricians builders" />
        <link rel="canonical" href="https://yourtradepartner.com.au/automation" />
      </Helmet>

      {/* ── Nav ── */}
      <nav className="border-b border-white/5 py-4 bg-construction-charcoal/95 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Hammer className="text-safety-orange w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-xl font-black uppercase tracking-tighter">
              Your Trade Partner<span className="text-safety-orange">.</span>
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
            <a href="#servicem8" className="hover:text-white transition-colors">ServiceM8</a>
            <a href="#safetyculture" className="hover:text-white transition-colors">SafetyCulture</a>
            <a href="#fergus" className="hover:text-white transition-colors">Fergus</a>
            <a href="#prime" className="hover:text-white transition-colors">Prime</a>
            <a href="#sync" className="hover:text-white transition-colors">Full Stack</a>
            <Link to="/" className="hover:text-white transition-colors">Homepage</Link>
          </div>
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-3 h-9 text-[9px] md:text-xs font-black uppercase tracking-wider shadow-lg shadow-safety-orange/20"
            >
              <a href="#cta">Book Free Audit</a>
            </Button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white hover:text-safety-orange transition-colors">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-construction-charcoal border-b border-white/10 p-6 flex flex-col gap-6 lg:hidden shadow-2xl animate-in slide-in-from-top-5 duration-200">
              <a href="#servicem8" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-[0.2em] text-white/80 hover:text-safety-orange transition-colors">ServiceM8</a>
              <a href="#safetyculture" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-[0.2em] text-white/80 hover:text-safety-orange transition-colors">SafetyCulture</a>
              <a href="#fergus" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-[0.2em] text-white/80 hover:text-safety-orange transition-colors">Fergus</a>
              <a href="#prime" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-[0.2em] text-white/80 hover:text-safety-orange transition-colors">Prime</a>
              <a href="#sync" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-[0.2em] text-white/80 hover:text-safety-orange transition-colors">Full Stack</a>
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-[0.2em] text-white/80 hover:text-safety-orange transition-colors">← Homepage</Link>
            </div>
          )}
        </div>
      </nav>

      {/* ── Hero ── */}
      <header className="relative pt-16 pb-24 md:pt-24 md:pb-32 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs text-white/50 font-bold tracking-[0.2em] uppercase mb-6">
              AI Automation for Australian Trades
            </p>
            <h1 className="text-[42px] md:text-[72px] font-black leading-[0.92] mb-6 uppercase italic">
              Stop Doing It <br />
              <span className="text-safety-orange">Manually.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-medium mb-4 leading-relaxed max-w-2xl mx-auto">
              Plumbers, electricians, builders, concreters — if you are still manually chasing quotes, typing up jobs and updating three different apps, you are losing 10–15 hours a week. We connect ServiceM8, SafetyCulture, Fergus, Prime, and Xero and build the automations between them so your business runs without you.
            </p>
            <p className="text-sm text-safety-orange/80 font-black uppercase tracking-[0.18em] mb-12">
              AI automation for Australian tradies. Ready to deploy.
            </p>
          </motion.div>

          {/* ── Tools Marquee (inside hero) ── */}
          <motion.div
            className="relative mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2.5 bg-safety-orange/10 border border-safety-orange/25 rounded-full px-5 py-2 mb-5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-safety-orange opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-safety-orange" />
                </span>
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-safety-orange">Tools We Automate</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-white leading-[1.05] tracking-tight mb-3">
                Every app you use —<br className="hidden sm:block" /> running on autopilot.
              </h2>
              <p className="text-white/45 text-lg max-w-lg mx-auto leading-relaxed">
                Hover any tool to see what we automate for you.
              </p>
            </div>

            <MarqueeLogoScroller
              logos={toolsData}
              speed="normal"
              className="relative z-10"
            />
          </motion.div>
        </div>
      </header>

      {/* ── The Real Cost ── */}
      <section className="py-16 md:py-20 bg-black/20 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Label + animated underline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-safety-orange/60 mb-2">The Real Cost of Manual Admin</p>
            <motion.div
              className="h-[2px] bg-safety-orange/40 origin-left mb-6 w-24"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="text-3xl md:text-4xl font-black uppercase italic mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            You Are Losing <span className="text-safety-orange">Two Days a Week</span> to Admin.
          </motion.h2>

          {/* Body copy — automation-focused, no missed-call framing */}
          <motion.p
            className="text-white/70 text-lg leading-relaxed mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            Ten hours a week on admin is ten hours not on the tools, not billing, not growing. Automation does not change what your business does — it removes what your business was never meant to be doing in the first place.
          </motion.p>

          {/* Stats — staggered cards with count-up numbers */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } } }}
          >
            {/* Stat 1 */}
            <motion.div
              className="border border-white/10 bg-white/3 p-6 border-l-2 border-l-safety-orange/60 sm:border-l-[1px] sm:border-l-white/10 sm:border-t-2 sm:border-t-safety-orange/60"
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(255,107,0,0.4)', transition: { duration: 0.2 } }}
            >
              <p className="text-4xl font-black text-safety-orange uppercase mb-2">
                <CountUpStat to={24} suffix="/7" />
              </p>
              <p className="text-white/60 text-sm leading-relaxed">automation running around the clock — not just business hours</p>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              className="border border-white/10 bg-white/3 p-6 border-l-2 border-l-safety-orange/60 sm:border-l-[1px] sm:border-l-white/10 sm:border-t-2 sm:border-t-safety-orange/60"
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(255,107,0,0.4)', transition: { duration: 0.2 } }}
            >
              <p className="text-4xl font-black text-safety-orange uppercase mb-2">
                10–<CountUpStat from={10} to={15} suffix=" HRS" />
              </p>
              <p className="text-white/60 text-sm leading-relaxed">lost to admin every week — on average across Australian trades</p>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              className="border border-white/10 bg-white/3 p-6 border-l-2 border-l-safety-orange/60 sm:border-l-[1px] sm:border-l-white/10 sm:border-t-2 sm:border-t-safety-orange/60"
              variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(255,107,0,0.4)', transition: { duration: 0.2 } }}
            >
              <p className="text-4xl font-black text-safety-orange uppercase mb-2">
                8–<CountUpStat from={8} to={12} suffix=" HRS" />
              </p>
              <p className="text-white/60 text-sm leading-relaxed">recovered per week by tradies we have automated</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-16 md:py-20 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-safety-orange/60 mb-4">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-10">
              Done For You. <span className="text-safety-orange">No IT Required.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  num: '01',
                  title: 'Free Audit',
                  body: 'We map where your time goes — missed calls, manual quoting, double-entry across apps. No commitment. Just a clear picture of what is costing you.',
                },
                {
                  num: '02',
                  title: 'We Build It',
                  body: 'Done for you. No learning new software. No YouTube tutorials. We build and test the automations inside your existing stack.',
                },
                {
                  num: '03',
                  title: 'You Get Time Back',
                  body: 'Automations run in the background. You just work the jobs. Most tradies we work with recover 8–12 hours a week within the first month.',
                },
              ].map(({ num, title, body }) => (
                <div key={num} className="relative">
                  <p className="text-7xl font-black text-white/5 leading-none select-none">{num}</p>
                  <h3 className="text-xl font-black uppercase mb-3 -mt-9">{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Software Sections ── */}
      <div className="bg-black/10">
        {sectionData.map((s) => (
          <SoftwareSection key={s.id} {...s} delay={0} />
        ))}
      </div>

      {/* ── FAQ ── */}
      <section className="py-24 border-b border-white/5 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-6">
                Common <span className="text-safety-orange">Questions</span>
              </h2>
            </div>
            <div className="space-y-2">
              {faqData.map(({ q, a }, i) => (
                <div key={i} className="border-b border-white/10 last:border-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between py-6 text-left hover:bg-white/5 px-4 transition-colors group"
                  >
                    <span className={`text-lg md:text-xl font-bold uppercase transition-colors ${openFaq === i ? 'text-safety-orange' : 'text-white group-hover:text-white/90'}`}>
                      {q}
                    </span>
                    {openFaq === i ? (
                      <ChevronUp className="w-6 h-6 text-safety-orange flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-white/40 group-hover:text-white flex-shrink-0 transition-colors" />
                    )}
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out overflow-hidden ${openFaq === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                    <div className="overflow-hidden">
                      <div className="px-4 pb-8 pt-2 text-white/70 text-base md:text-lg leading-relaxed">
                        {a}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <motion.section
        id="cta"
        className="py-24 md:py-32"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-safety-orange/15 border border-safety-orange/40 px-4 py-2 rounded-full mb-8">
            <Zap className="w-4 h-4 text-safety-orange" />
            <span className="text-xs font-black uppercase tracking-widest text-safety-orange">Ready to Deploy</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-6">
            See What We Can <br />
            <span className="text-safety-orange">Automate For You</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Book a free 20-minute call. We'll review your current stack — ServiceM8, SafetyCulture, Fergus, Prime, or wherever you're losing time — and show you exactly what can be automated and what it's worth.
          </p>
          <Button
            asChild
            className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-12 py-7 text-lg md:text-2xl font-black uppercase tracking-widest shadow-2xl shadow-safety-orange/30 group w-full sm:w-auto"
          >
            <a href="mailto:hello@yourtradepartner.com.au?subject=Automation Audit Request">
              Book My Free Audit
              <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </Button>
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mt-4">
            No commitment · We show you what's possible before you spend a cent · Australian businesses only
          </p>
        </div>
      </motion.section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs">
          <div className="flex items-center gap-2">
            <Hammer className="text-safety-orange w-4 h-4" />
            <span className="font-black uppercase tracking-tight">Your Trade Partner<span className="text-safety-orange">.</span></span>
          </div>
          <p>AI Automation · ServiceM8 · SafetyCulture · Fergus · Prime · Xero</p>
          <Link to="/" className="hover:text-white transition-colors">← Homepage</Link>
        </div>
      </footer>
    </div>
  )
}
