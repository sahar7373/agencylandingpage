import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, useInView, animate, AnimatePresence } from 'framer-motion'
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
  const [activeTab, setActiveTab] = React.useState('servicem8')

  React.useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    const ids = ['servicem8', 'safetyculture', 'fergus', 'prime', 'sync']
    if (ids.includes(hash)) setActiveTab(hash)
  }, [])

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
      q: 'What does it cost?',
      a: 'Book a free audit first. We map what is worth automating and show you what it will save before you spend a cent. No commitment, no sales pressure — just an honest look at your stack.',
    },
    {
      q: 'How much admin time can I actually save?',
      a: 'Industry data puts tradie admin at 10–15 hours per week. Tradies we work with typically recover 8–12 of those hours within the first month of automation going live.',
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
      q: 'Is this the same as hiring a VA?',
      a: 'A VA needs managing, takes sick days, and goes home at 5pm. Automation runs 24/7 with no oversight — and it does not miss enquiries at 9pm on a Sunday.',
    },
    {
      q: 'Will this work if I run a small operation?',
      a: "That's exactly who this is built for. Solo tradies and small crews waste the most time on admin because there's no one else to handle it. Automation fixes that without hiring.",
    },
    {
      q: 'I already use ServiceM8 — do I need all five tools?',
      a: 'No. We start with what you have got. Most businesses begin with one platform and expand the automation as they see what is possible. ServiceM8 automation alone is a full project.',
    },
    {
      q: 'What trades do you work with?',
      a: 'Plumbers, electricians, builders, HVAC techs, concreters, painters, landscapers — any trade running ServiceM8, Fergus, SafetyCulture, Prime or Xero. If your business runs on these platforms, we can automate it.',
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
            <a href="#voice" className="hover:text-white transition-colors">Voice AI</a>
            <a href="#tools" className="hover:text-white transition-colors">Softwares</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            <Link to="/" className="hover:text-white transition-colors">Homepage</Link>
          </div>
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-3 h-9 text-[9px] md:text-xs font-black uppercase tracking-wider shadow-lg shadow-safety-orange/20"
            >
              <a href="https://cal.com/saharsh-patel-fr7cuf/strategy-session" target="_blank" rel="noopener noreferrer">Book Free Audit</a>
            </Button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white hover:text-safety-orange transition-colors">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-construction-charcoal border-b border-white/10 p-6 flex flex-col gap-6 lg:hidden shadow-2xl animate-in slide-in-from-top-5 duration-200">
              <a href="#voice" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-[0.2em] text-white/80 hover:text-safety-orange transition-colors">Voice AI</a>
              <a href="#tools" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-[0.2em] text-white/80 hover:text-safety-orange transition-colors">Softwares</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-[0.2em] text-white/80 hover:text-safety-orange transition-colors">FAQ</a>
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-[0.2em] text-white/80 hover:text-safety-orange transition-colors">← Homepage</Link>
              <a href="tel:+61451044751" className="text-sm font-black uppercase tracking-[0.2em] text-safety-orange hover:text-white transition-colors">0451 044 751</a>
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
              You didn't start a trade business to do data entry. Built for Australian trades — we wire up the software you already run so you can knock off on time and actually be there for the people waiting at home.
            </p>
            <p className="text-sm text-safety-orange/80 font-black uppercase tracking-[0.18em] mb-8">
              AI automation for Australian tradies. Ready to deploy.
            </p>

            <div className="flex flex-col items-center gap-3 mb-12">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Button
                  asChild
                  className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-10 py-6 text-base md:text-lg font-black uppercase tracking-widest shadow-2xl shadow-safety-orange/30 group w-full sm:w-auto"
                >
                  <a href="https://cal.com/saharsh-patel-fr7cuf/strategy-session" target="_blank" rel="noopener noreferrer">
                    Get My Hours Back
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </a>
                </Button>
              </div>
              <p className="text-[10px] text-white/25 uppercase tracking-[0.18em] font-bold">
                8 hours back in 30 days — or we keep building at no extra charge
              </p>
            </div>
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

      {/* ── Social proof primer ── */}
      <div className="border-b border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-4xl py-8">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-4xl font-black text-safety-orange/20 leading-none select-none flex-shrink-0">"</span>
            <p className="text-white/65 text-[15px] leading-relaxed italic flex-1">
              ServiceM8 used to run me. Now it runs itself. Quotes go out, jobs get booked, Google reviews come in — I'm not touching any of it. Recovered nine hours in the first month.
            </p>
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-safety-orange/15 border border-safety-orange/30 flex items-center justify-center">
                <span className="text-[11px] font-black text-safety-orange">L</span>
              </div>
              <div>
                <p className="text-white text-xs font-black uppercase tracking-wide leading-none mb-0.5">Liam P.</p>
                <p className="text-white/35 text-[10px] uppercase tracking-wider">Plumbing & Gas · Brisbane QLD</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

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

          {/* Stats — ledger rows */}
          <motion.div
            className="flex flex-col border-t border-t-white/[0.08] mt-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } } }}
          >
            {[
              { to: 15, suffix: ' HRS', label: 'lost to admin every week — on average across Australian trades' },
              { to: 12, suffix: ' HRS', label: 'recovered per week by tradies we have automated' },
              { to: 24, suffix: '/7',   label: 'automation running around the clock — not just business hours' },
            ].map(({ to, suffix, label }, i) => (
              <motion.div
                key={i}
                className="flex flex-col md:flex-row md:items-end md:justify-between gap-1 md:gap-10 py-6 md:py-5 border-b border-b-white/[0.08] last:border-b-0"
                variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
              >
                <span className="text-[80px] md:text-[96px] lg:text-[112px] font-black leading-none text-safety-orange tabular-nums whitespace-nowrap shrink-0">
                  <CountUpStat to={to} suffix={suffix} />
                </span>
                <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.22em] text-white/35 leading-relaxed md:text-right md:max-w-[240px] md:pb-2.5">
                  {label}
                </span>
              </motion.div>
            ))}
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

      {/* ── Social Proof ── */}
      <section className="py-16 md:py-24 border-b border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-safety-orange/60 mb-2">Results From the Field</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic">
              Australian Tradies. <span className="text-safety-orange">Real Time Back.</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          >
            {[
              {
                quote: "ServiceM8 used to run me. Now it runs itself. Quotes go out, jobs get booked, Google reviews come in — I'm not touching any of it. Recovered nine hours in the first month.",
                name: 'Liam P.',
                meta: 'Plumbing & Gas · Brisbane QLD',
              },
              {
                quote: "The invoicing alone paid for everything. Jobs close and Xero's already handled it. No more end-of-week catch-up. My accountant noticed before I did.",
                name: 'Sarah M.',
                meta: 'Electrical Contractor · Sydney NSW',
              },
              {
                quote: "SafetyCulture reports filed themselves from day one. Compliance backlog cleared in week one. The site team has not chased a single document since.",
                name: 'Danny W.',
                meta: 'Commercial Builder · Melbourne VIC',
              },
              {
                quote: "We were losing after-hours jobs every week. Phone gets answered now, leads get qualified, bookings come through. Did not hire anyone — just turned the automation on.",
                name: 'Kristen F.',
                meta: 'HVAC & Refrigeration · Perth WA',
              },
            ].map(({ quote, name, meta }) => (
              <motion.div
                key={name}
                className="group relative border border-white/8 bg-white/[0.02] p-7 hover:border-safety-orange/30 hover:bg-white/[0.04] transition-all duration-300"
                variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
              >
                <span className="absolute top-5 right-6 text-5xl font-black text-safety-orange/10 leading-none select-none group-hover:text-safety-orange/20 transition-colors duration-300">"</span>
                <p className="text-white/75 text-[15px] leading-relaxed mb-6 relative z-10">{quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-safety-orange/15 border border-safety-orange/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[11px] font-black text-safety-orange">{name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-black uppercase tracking-wide leading-none mb-0.5">{name}</p>
                    <p className="text-white/35 text-[11px] font-medium uppercase tracking-wider">{meta}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── AI Voice Receptionist ── */}
      <section id="voice" className="py-16 md:py-24 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* ── Copy ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-black uppercase tracking-[0.25em] text-safety-orange/60 mb-2">AI Voice & Phone Automation for Trades</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-5 leading-[1.05]">
                Your Phone Answered.<br /><span className="text-safety-orange">While You're On the Tools.</span>
              </h2>
              <p className="text-white/65 text-[15px] leading-relaxed mb-8 max-w-md">
                Every missed call from a trade business is a job that went to a competitor. AI voice agents answer, qualify, and book — day or night — without you lifting a finger. No hold music. No voicemail black holes. Just a lead handled.
              </p>

              <ul className="flex flex-col gap-3.5 mb-10">
                {[
                  'After-hours calls converted, not lost to voicemail',
                  'Leads qualified and routed before they reach your inbox',
                  'Bookings confirmed without anyone picking up the phone',
                  'Every call logged and synced to your job management stack',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[9px] font-black uppercase tracking-[0.22em] text-white/25">Powered by</span>
                {['Retell AI', 'ElevenLabs', 'Twilio'].map((tool) => (
                  <span key={tool} className="text-[9px] font-black uppercase tracking-[0.18em] text-white/45 border border-white/10 px-3 py-1.5">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ── Live Call Feed ── */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="bg-black/50 border border-white/8 p-6"
            >
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/8">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.25em] text-green-400">Live</span>
                </div>
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white/20">AI Receptionist Active</span>
              </div>

              <motion.div
                className="flex flex-col gap-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.11, delayChildren: 0.35 } } }}
              >
                {[
                  { time: '11:47 PM', call: 'Inbound — "Need a plumber urgently"', result: 'Lead qualified · Callback booked' },
                  { time: '6:14 AM',  call: 'Web enquiry — quote for bathroom reno', result: 'Details captured · Sent to ServiceM8' },
                  { time: '9:33 PM',  call: '"Do you do weekends?"', result: 'Availability confirmed · Job booked' },
                  { time: '2:18 AM',  call: 'Missed call — no message left', result: 'AI answered · Follow-up scheduled' },
                ].map(({ time, call, result }) => (
                  <motion.div
                    key={time}
                    className="flex gap-4 group"
                    variants={{ hidden: { opacity: 0, x: 10 }, visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } }}
                  >
                    <span className="text-[11px] font-black text-white/20 w-[52px] flex-shrink-0 pt-0.5 tabular-nums leading-snug">{time}</span>
                    <div className="flex-1 border-l border-white/8 pl-4 group-hover:border-safety-orange/25 transition-colors duration-200">
                      <p className="text-white/65 text-[13px] leading-snug mb-1">{call}</p>
                      <p className="text-safety-orange/65 text-[10px] font-black uppercase tracking-wider">{result} ✓</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-6 pt-4 border-t border-white/8 flex items-center justify-between">
                <span className="text-[9px] text-white/20 uppercase tracking-wider font-bold">This month</span>
                <span className="text-[10px] font-black text-white/40 uppercase tracking-wide">247 calls handled · 0 missed</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Before / After ── */}
      <section className="py-16 md:py-24 border-b border-white/5 bg-black/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-safety-orange/80 mb-2">Tradie Admin vs Automation</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic leading-[1.05]">
              Your Morning Without Automation.<br />
              <span className="text-safety-orange">Your Morning With It.</span>
            </h2>
          </motion.div>

          {/* Desktop column headers */}
          <div className="hidden md:grid grid-cols-[220px_1fr_1fr] gap-px mb-px">
            <div className="bg-white/[0.06] px-5 py-3.5" />
            <div className="bg-rose-500/[0.14] border-t-2 border-rose-400/60 px-5 py-3.5 flex items-center gap-2.5">
              <span className="text-rose-400 text-xs font-black">✕</span>
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-rose-300">Without Automation</span>
            </div>
            <div className="bg-safety-orange/[0.14] border-t-2 border-safety-orange/70 px-5 py-3.5 flex items-center gap-2.5">
              <span className="text-safety-orange text-xs font-black">✓</span>
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-safety-orange">With Your Trade Partner</span>
            </div>
          </div>

          {/* Mobile headers */}
          <div className="md:hidden grid grid-cols-2 gap-px mb-px">
            <div className="bg-rose-500/[0.14] border-t-2 border-rose-400/60 px-4 py-3 flex items-center justify-center gap-2">
              <span className="text-rose-400 text-xs font-black">✕</span>
              <span className="text-[9px] font-black uppercase tracking-[0.18em] text-rose-300">Without</span>
            </div>
            <div className="bg-safety-orange/[0.14] border-t-2 border-safety-orange/70 px-4 py-3 flex items-center justify-center gap-2">
              <span className="text-safety-orange text-xs font-black">✓</span>
              <span className="text-[9px] font-black uppercase tracking-[0.18em] text-safety-orange">With YTP</span>
            </div>
          </div>

          <motion.div
            className="flex flex-col gap-px"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.2 } } }}
          >
            {[
              {
                trigger: 'Customer calls while you\'re on the tools',
                without: 'Goes to voicemail. They call the next tradie on the list.',
                with: 'AI voice agent answers, qualifies the job, and books a callback — automatically.',
              },
              {
                trigger: 'Quote request comes in at 8pm',
                without: 'Sits in your inbox overnight. Lead goes cold.',
                with: 'Quote details captured, job scoped, sent to ServiceM8 before you\'re off the tools.',
              },
              {
                trigger: 'Job closes at end of day',
                without: 'You sit down to type up the invoice after dinner.',
                with: 'Invoice hits Xero the moment the job status changes. Done.',
              },
              {
                trigger: 'SafetyCulture inspection completed on site',
                without: 'Report stays on your phone. Someone has to file it manually.',
                with: 'Report distributed, filed, compliance status updated — while the crew is still packing up.',
              },
              {
                trigger: 'New enquiry lands on your website',
                without: 'Whoever checks email first handles it. Or doesn\'t.',
                with: 'Captured, scored, routed to your CRM and job management stack automatically.',
              },
              {
                trigger: 'End of week catch-up',
                without: '4 hours reconciling financials across apps that don\'t talk to each other.',
                with: 'Everything already synced. No catch-up required.',
              },
            ].map(({ trigger, without, with: withText }, i) => (
              <motion.div
                key={i}
                className="group"
                variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
              >
                {/* Desktop: 3-column */}
                <div className="hidden md:grid grid-cols-[220px_1fr_1fr] gap-px">
                  <div className="bg-white/[0.05] px-5 py-5 flex items-start border-b border-white/[0.08] group-hover:bg-white/[0.08] transition-colors duration-200">
                    <span className="text-[12px] text-white/65 font-semibold leading-snug">{trigger}</span>
                  </div>
                  <div className="bg-rose-500/[0.08] px-5 py-5 flex items-start gap-3 border-b border-white/[0.07] group-hover:bg-rose-500/[0.14] transition-colors duration-200">
                    <span className="text-rose-400 text-sm font-black leading-none flex-shrink-0 mt-0.5">✕</span>
                    <span className="text-white/60 text-[13px] leading-relaxed">{without}</span>
                  </div>
                  <div className="bg-safety-orange/[0.09] px-5 py-5 flex items-start gap-3 border-b border-safety-orange/[0.12] group-hover:bg-safety-orange/[0.16] transition-colors duration-200">
                    <span className="text-safety-orange text-sm font-black leading-none flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-white/80 text-[13px] leading-relaxed">{withText}</span>
                  </div>
                </div>

                {/* Mobile: stacked */}
                <div className="md:hidden border border-white/12 mb-2 overflow-hidden group-hover:border-safety-orange/30 transition-colors duration-200">
                  <div className="bg-white/[0.05] px-4 py-3 border-b border-white/10">
                    <span className="text-[11px] text-white/65 font-black uppercase tracking-wide">{trigger}</span>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="bg-rose-500/[0.09] px-4 py-3.5 flex items-start gap-2 border-r border-white/[0.08]">
                      <span className="text-rose-400 text-sm font-black leading-none flex-shrink-0 mt-0.5">✕</span>
                      <span className="text-white/60 text-[12px] leading-relaxed">{without}</span>
                    </div>
                    <div className="bg-safety-orange/[0.1] px-4 py-3.5 flex items-start gap-2">
                      <span className="text-safety-orange text-[12px] font-black leading-none flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-white/78 text-[12px] leading-relaxed">{withText}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            className="text-[11px] text-white/45 uppercase tracking-[0.22em] font-bold mt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Same tools you already use · Zero new software to learn
          </motion.p>
        </div>
      </section>

      {/* ── Mid-page CTA ── */}
      <section className="py-10 md:py-12 border-b border-white/5 bg-safety-orange/[0.07] border-l-0">
        <div className="container mx-auto px-6 max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-safety-orange/70 mb-1.5">Seen enough?</p>
            <p className="text-xl md:text-2xl font-black uppercase italic text-white leading-tight">
              Book a free audit. We'll show you <span className="text-safety-orange">exactly what to automate.</span>
            </p>
          </div>
          <Button
            asChild
            className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-8 py-5 text-sm font-black uppercase tracking-widest shadow-xl shadow-safety-orange/20 group flex-shrink-0 w-full sm:w-auto"
          >
            <a href="https://cal.com/saharsh-patel-fr7cuf/strategy-session" target="_blank" rel="noopener noreferrer">
              Book Free Audit
              <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </Button>
        </div>
      </section>

      {/* ── What We Automate ── */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-safety-orange/80 mb-2">What We Automate</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic leading-[1.05]">
              Six Functions.<br className="sm:hidden" /> <span className="text-safety-orange">Zero Manual Steps.</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mt-4 max-w-xl">
              Every hour a tradie loses to admin falls inside one of these. We automate all of them.
            </p>
          </motion.div>

          {/* Gap-px matrix grid — container bg becomes the 1px separator line */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.07]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }}
          >
            {[
              {
                num: '01',
                title: 'Lead Capture',
                body: 'Every enquiry actioned before it cools. Web form, missed call, or direct message — handled, logged, sent to your stack without you in the middle.',
                tools: ['ServiceM8', 'Gmail', 'CRM'],
              },
              {
                num: '02',
                title: 'Job Scheduling',
                body: 'Right crew, right job, right time. Automated dispatch that syncs across your tools the moment a booking is confirmed.',
                tools: ['ServiceM8', 'Fergus', 'Calendar'],
              },
              {
                num: '03',
                title: 'Invoicing & Payments',
                body: 'Job closes, invoice fires. No end-of-week catch-up. Financials current across every platform without your input.',
                tools: ['Xero', 'QuickBooks', 'ServiceM8'],
              },
              {
                num: '04',
                title: 'Compliance & Docs',
                body: 'Inspections filed, reports distributed, audit trails maintained. Before the crew leaves the site.',
                tools: ['SafetyCulture', 'Fergus', 'Prime'],
              },
              {
                num: '05',
                title: 'Client Communications',
                body: 'Booking confirmations, job updates, review requests. Clients stay informed without a single manual message from you.',
                tools: ['Twilio', 'Gmail', 'Outlook'],
              },
              {
                num: '06',
                title: 'After-Hours Handling',
                body: 'Calls answered, leads qualified, bookings made. 9pm Sunday or 5am Monday — your business never goes to voicemail.',
                tools: ['Retell AI', 'ElevenLabs', 'Twilio'],
              },
            ].map(({ num, title, body, tools }) => (
              <motion.div
                key={num}
                className="group relative bg-[#1a1a1a] p-7 flex flex-col gap-4 overflow-hidden hover:bg-[#1f1f1f] transition-colors duration-300"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } }}
              >
                {/* Ghost number — depth layer, not decoration */}
                <span className="absolute top-3 right-4 text-[72px] font-black leading-none select-none text-white/[0.05] group-hover:text-safety-orange/[0.09] transition-colors duration-400 pointer-events-none">
                  {num}
                </span>

                <div className="relative z-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-safety-orange/60 mb-2">{num}</p>
                  <h3 className="text-[17px] font-black uppercase tracking-tight text-white leading-snug">{title}</h3>
                </div>

                <p className="text-white/65 text-[13px] leading-relaxed flex-1 relative z-10">{body}</p>

                <div className="flex flex-wrap gap-1.5 relative z-10">
                  {tools.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-black uppercase tracking-[0.18em] text-white/40 border border-white/[0.12] px-2.5 py-1 group-hover:text-white/60 group-hover:border-white/20 transition-colors duration-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Built On ── */}
      <section className="py-16 md:py-24 border-b border-white/5 bg-black/10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left — the "not just Zapier" case */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-black uppercase tracking-[0.25em] text-safety-orange/80 mb-4">How It's Built</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase italic leading-[1.0] mb-6">
                Not Someone<br /><span className="text-safety-orange">With Zapier.</span>
              </h2>
              <div className="flex flex-col gap-4 text-white/65 text-[15px] leading-relaxed">
                <p>
                  n8n and Make.com are the orchestration engines behind every build. They handle the logic between your apps, route data, catch errors silently, and run around the clock without anyone watching.
                </p>
                <p>
                  AI models sit on top for anything that requires language — qualifying leads, drafting responses, reading documents. Voice infrastructure handles the calls. Every layer connects to your actual trade software below.
                </p>
                <p>
                  Nothing off-the-shelf. Custom-built for your specific stack, your business rules, and the exact gaps in your current workflow.
                </p>
              </div>
            </motion.div>

            {/* Right — layered architecture diagram */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="flex flex-col"
            >
              {[
                {
                  label: 'Orchestration Layer',
                  tools: ['n8n', 'Make.com'],
                  sublabel: 'Logic, routing, error handling, triggers',
                  accent: false,
                },
                {
                  label: 'AI Layer',
                  tools: ['OpenAI', 'Claude'],
                  sublabel: 'Lead qualification, language, document processing',
                  accent: false,
                },
                {
                  label: 'Voice & Comms',
                  tools: ['Retell AI', 'ElevenLabs', 'Twilio'],
                  sublabel: 'Calls, SMS, after-hours handling',
                  accent: false,
                },
                {
                  label: 'Your Trade Stack',
                  tools: ['ServiceM8', 'Fergus', 'SafetyCulture', 'Xero', '+8 more'],
                  sublabel: 'The tools you already run',
                  accent: true,
                },
              ].map(({ label, tools, sublabel, accent }, i) => (
                <React.Fragment key={label}>
                  <motion.div
                    className={`border px-5 py-4 ${accent ? 'border-safety-orange/30 bg-safety-orange/[0.07]' : 'border-white/[0.11] bg-white/[0.03]'}`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.1 }}
                  >
                    <p className={`text-[9px] font-black uppercase tracking-[0.22em] mb-2.5 ${accent ? 'text-safety-orange/75' : 'text-white/40'}`}>
                      {label}
                    </p>
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      {tools.map((t) => (
                        <span
                          key={t}
                          className={`text-[10px] font-black uppercase tracking-[0.15em] px-2.5 py-1 border ${accent ? 'text-white/80 border-safety-orange/20 bg-safety-orange/[0.06]' : 'text-white/75 border-white/[0.12] bg-white/[0.04]'}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className={`text-[11px] leading-snug ${accent ? 'text-safety-orange/50' : 'text-white/30'}`}>{sublabel}</p>
                  </motion.div>

                  {/* Connector line between layers */}
                  {i < 3 && (
                    <div className="flex justify-center py-0">
                      <div className="w-px h-4 bg-gradient-to-b from-white/20 to-white/5" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Platform Automations (tabbed) ── */}
      <section id="tools" className="py-16 md:py-24 border-b border-white/5 bg-black/10">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-safety-orange/80 mb-2">Platform Automations</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic leading-[1.05]">
              Your Stack. <span className="text-safety-orange">Fully Automated.</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-[180px_1fr] border border-white/[0.08]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {/* Tab nav */}
            <div className="flex lg:flex-col border-b lg:border-b-0 lg:border-r border-white/[0.08] overflow-x-auto lg:overflow-visible">
              {sectionData.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  className={`flex-shrink-0 text-left px-5 py-4 lg:py-5 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-200 border-b border-white/[0.06] lg:last:border-b-0 ${
                    activeTab === s.id
                      ? 'bg-safety-orange/[0.08] text-safety-orange'
                      : 'text-white/40 hover:text-white/70 hover:bg-white/[0.03]'
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>

            {/* Content panel */}
            <div className="relative min-h-[260px]">
              <AnimatePresence mode="wait">
                {sectionData.filter((s) => s.id === activeTab).map((s) => (
                  <motion.div
                    key={s.id}
                    className="p-7 md:p-10"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-safety-orange/60 mb-2">{s.label}</p>
                    <h3 className="text-2xl md:text-3xl font-black uppercase italic mb-4">{s.title}</h3>
                    <p className="text-white/70 text-[15px] leading-relaxed mb-6 max-w-xl">{s.description}</p>
                    {s.items && (
                      <ul className="flex flex-col gap-3">
                        {s.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 border-b border-white/5 bg-black">
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

      {/* ── Guarantee ── */}
      <section className="py-16 md:py-24 border-b border-white/5 border-t-[3px] border-t-safety-orange/40 bg-safety-orange/[0.06]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — the commitment */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-black uppercase tracking-[0.25em] text-safety-orange/80 mb-5">The Guarantee</p>
              <h2 className="text-4xl md:text-[52px] font-black uppercase italic leading-[0.95] mb-7">
                8 Hours Back<br />in 30 Days.<br />
                <span className="text-safety-orange">Or We Keep Building.</span>
              </h2>
              <p className="text-white/70 text-[15px] leading-relaxed">
                Most tradies we work with recover 8 to 12 hours a week in the first month. If you're not there, we keep adding automations, refining what's live, and building what's missing. No extra charge. No "we tried our best" conversation.
              </p>
            </motion.div>

            {/* Right — terms in plain language */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-white/35 mb-6">What This Covers</p>
              <ul className="flex flex-col gap-4 mb-8">
                {[
                  'Every automation in your initial build',
                  'All refinements and additions in month one',
                  'No further charge until you hit your hours target',
                  'Direct access — not a support ticket queue',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-safety-orange flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 text-[14px] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Fine print — styled as a document footer */}
              <div className="border border-white/[0.1] bg-white/[0.03] px-5 py-4">
                <p className="text-[11px] text-white/45 leading-relaxed">
                  No commitment to start. Free 20-minute audit first — we map what's worth automating and show you what it's worth before you spend anything. The guarantee applies from the day we go live.
                </p>
              </div>
            </motion.div>

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
            <a href="https://cal.com/saharsh-patel-fr7cuf/strategy-session" target="_blank" rel="noopener noreferrer">
              Book My Free Audit
              <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </Button>
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mt-4">
            No commitment · We show you what's possible before you spend a cent · Australian businesses only
          </p>
          <p className="text-sm text-white/40 mt-4">
            Or call us: <a href="tel:+61451044751" className="text-white/65 hover:text-safety-orange transition-colors font-black">0451 044 751</a>
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
          <a href="tel:+61451044751" className="hover:text-safety-orange transition-colors font-black">0451 044 751</a>
          <Link to="/" className="hover:text-white transition-colors">← Homepage</Link>
        </div>
      </footer>
    </div>
  )
}
