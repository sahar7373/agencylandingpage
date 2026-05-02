import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Hammer, ArrowRight, CheckCircle2, Zap, Menu, X } from 'lucide-react'
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

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function AutomationPage() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toolsData = [
    {
      name: 'ServiceM8',
      src: '/logos/servicem8logo.png',
      gradient: { from: '#00A651', to: '#006B35' },
      bullets: [
        'Emails auto-create job cards — zero manual entry',
        'Job completion triggers invoices & client follow-ups',
        'Completed photos post to Google Business Profile',
      ],
    },
    {
      name: 'SafetyCulture',
      src: '/logos/safetyculturelogo.webp',
      gradient: { from: '#00B5AD', to: '#006B66' },
      bullets: [
        'Inspections auto-generate compliance reports',
        'Docs distributed to stakeholders instantly',
        'Audit trails maintained without manual follow-up',
      ],
    },
    {
      name: 'Fergus',
      src: '/logos/Ferguslogo.png',
      gradient: { from: '#1B5FBB', to: '#0D3575' },
      bullets: [
        'Auto-dispatch jobs by location & availability',
        'Quote accepted → project created, no double entry',
        'Real-time notifications to clients & subs',
      ],
    },
    {
      name: 'Prime',
      src: '/logos/primeecosystemlogo.png',
      gradient: { from: '#2E1065', to: '#0A0220' },
      bullets: [
        'Real-time data sync across connected platforms',
        'Cost codes & budgets update without manual input',
        'Document control flows through project stages',
      ],
    },
    {
      name: 'Xero',
      src: '/logos/Xero_software_logo.svg.png',
      gradient: { from: '#13B5EA', to: '#0877A3' },
      bullets: [
        'Invoices sync automatically from ServiceM8 & Fergus',
        'Expenses reconciled without manual entry',
        'Bank feeds matched and coded automatically',
      ],
    },
    {
      name: 'QuickBooks',
      src: '/logos/quickbooklogo.svg',
      gradient: { from: '#2CA01C', to: '#1A6011' },
      bullets: [
        'Invoices and expenses sync without manual entry',
        'Payroll data flows in automatically each period',
        'Real-time P&L always current across your jobs',
      ],
    },
    {
      name: 'Gmail',
      src: '/logos/gmaillogo.png',
      gradient: { from: '#EA4335', to: '#961F15' },
      bullets: [
        'Inbound enquiries become job cards automatically',
        'Automated replies sent on job status changes',
        'Follow-up sequences triggered without action',
      ],
    },
    {
      name: 'Outlook',
      src: '/logos/outlooklogo.png',
      gradient: { from: '#0078D4', to: '#004A8C' },
      bullets: [
        'Inbound enquiries become job cards automatically',
        'Automated replies sent on job status changes',
        'Follow-up sequences triggered without action',
      ],
    },
    {
      name: 'Google Business',
      src: '/logos/gbplogo.jpeg',
      gradient: { from: '#4285F4', to: '#1A56C4' },
      bullets: [
        'Completed job photos posted automatically',
        'Review requests triggered after job completion',
        'Profile kept current without manual updates',
      ],
    },
  ]

  const sectionData = [
    {
      id: 'servicem8',
      label: 'ServiceM8 Automation',
      title: 'ServiceM8',
      description:
        'New enquiries from Gmail and Outlook appear as job cards in ServiceM8 before you\'ve picked up the phone. Completed jobs trigger follow-ups, invoices, and Google Business Profile photo uploads — without anyone touching a keyboard.',
      items: [
        'Inbound emails automatically become job cards — zero manual entry',
        'Job completion triggers client follow-up and invoice creation',
        'Completed job photos post directly to your Google Business Profile',
      ],
    },
    {
      id: 'safetyculture',
      label: 'SafetyCulture Automation',
      title: 'SafetyCulture',
      description:
        'Site inspections completed in SafetyCulture generate the compliance reports and SWMS documentation your projects require — automatically. Your crew stays on the tools, not the paperwork.',
      items: [
        'Inspection submissions trigger automatic report generation and filing',
        'Compliance documents distributed to the right people, instantly',
        'Audit trails maintained without manual follow-up',
      ],
    },
    {
      id: 'fergus',
      label: 'Fergus Automation',
      title: 'Fergus',
      description:
        'Schedules update, jobs dispatch, and your team gets notified the moment something changes. Fergus runs the coordination so your foremen run the site.',
      items: [
        'Automated job dispatch based on location, availability, and trade',
        'Status change notifications to clients and subcontractors',
        'Quote accepted → project created, no double handling',
      ],
    },
    {
      id: 'prime',
      label: 'Prime Ecosystem Automation',
      title: 'Prime Ecosystem',
      description:
        'Your Prime data stays current across every connected system. No end-of-week reconciliation. No duplicate entry. Just accurate numbers, always — whether your team runs Prime ECM, PrimeContract, or the full suite.',
      items: [
        'Data syncs in real time across connected platforms',
        'Cost codes, budgets, and variations update without manual input',
        'Document control flows automatically through project stages',
      ],
    },
    {
      id: 'sync',
      label: 'Cross-Platform Sync',
      title: 'The Full Stack',
      description:
        'When a job closes in ServiceM8, the invoice appears in Xero. When a quote is accepted in Fergus, the project opens in Prime. When a SafetyCulture inspection clears, the next stage unlocks. The whole stack moves together — because it was built to.',
      items: [
        'ServiceM8 ↔ Xero: invoices, expenses, and reconciliation handled automatically',
        'Warm leads receive a re-engagement message at the right moment — no manual outreach',
        'Every connected tool stays in sync, so your data is always where it needs to be',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-construction-charcoal text-white font-sans">
      <Helmet>
        <title>AI Automation for Australian Trades | ServiceM8, SafetyCulture, Fergus, Prime | Your Trade Partner</title>
        <meta
          name="description"
          content="AI workflow automation built for Australian construction and trades. We connect ServiceM8, SafetyCulture, Fergus, Prime Ecosystem, and Xero so your business runs without manual effort."
        />
        <meta name="keywords" content="ServiceM8 automation Australia, SafetyCulture workflow automation, Fergus automation, Prime Ecosystem integration, construction automation Australia, AI automation for tradies" />
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
            <Link to="/" className="hover:text-white transition-colors">Back to Agency</Link>
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
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-sm font-black uppercase tracking-[0.2em] text-white/80 hover:text-safety-orange transition-colors">← Back to Agency</Link>
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
              We connect the tools your construction business already runs —
              ServiceM8, SafetyCulture, Fergus, Prime, and Xero — and build the
              workflows between them so they operate without you.
            </p>
            <p className="text-sm text-safety-orange/80 font-black uppercase tracking-[0.18em] mb-10">
              Built for Australian trades. Ready to deploy.
            </p>

            <Button
              asChild
              className="bg-safety-orange hover:bg-safety-orange-hover text-white rounded-none px-10 py-6 text-base md:text-lg font-black uppercase tracking-widest shadow-2xl shadow-safety-orange/30 group"
            >
              <a href="#cta">
                Book a Free Automation Audit
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mt-3">
              20 minutes • No cost • Real plan for your stack
            </p>
          </motion.div>
        </div>
      </header>

      {/* ── Tools Marquee ── */}
      <motion.div
        className="relative py-20 overflow-hidden bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        {/* Subtle warm tint */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 50% 100%, rgba(255,107,0,0.06) 0%, transparent 70%)',
          }}
        />

        {/* Section heading */}
        <div className="relative z-10 container mx-auto px-6 max-w-5xl mb-12 text-center">
          <div className="inline-flex items-center gap-2.5 bg-safety-orange/10 border border-safety-orange/25 rounded-full px-5 py-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-safety-orange opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-safety-orange" />
            </span>
            <span className="text-[11px] font-black uppercase tracking-[0.25em] text-safety-orange">Tools We Automate</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-black leading-[1.05] tracking-tight mb-4">
            Every app you use —<br className="hidden sm:block" /> running on autopilot.
          </h2>
          <p className="text-black/45 text-lg max-w-lg mx-auto leading-relaxed">
            Hover any tool to see what we automate for you.
          </p>
        </div>

        <MarqueeLogoScroller
          logos={toolsData}
          speed="normal"
          lightBg
          className="relative z-10"
        />
      </motion.div>

      {/* ── Software Sections ── */}
      <div className="bg-black/10">
        {sectionData.map((s) => (
          <SoftwareSection key={s.id} {...s} delay={0} />
        ))}
      </div>

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
            Australian businesses only · No lock-in · Honest assessment
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
          <Link to="/" className="hover:text-white transition-colors">← Back to Agency</Link>
        </div>
      </footer>
    </div>
  )
}
