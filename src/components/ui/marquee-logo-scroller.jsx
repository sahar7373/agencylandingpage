import React from 'react'

const MarqueeLogoScroller = React.forwardRef(
  ({ title, description, logos, speed = 'normal', lightBg = false, className = '', ...props }, ref) => {
    const durationMap = { normal: '45s', slow: '90s', fast: '12s' }
    const animationDuration = durationMap[speed] || '45s'
    const fadeColor = lightBg ? 'white' : 'black'

    return (
      <>
        <style>{`
          @keyframes marquee-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-33.3333%); }
          }
          .marquee-track {
            animation: marquee-scroll ${animationDuration} linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <section ref={ref} aria-label={title} className={`w-full overflow-hidden ${className}`} {...props}>
          {(title || description) && (
            <div className="container mx-auto px-6 max-w-4xl mb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-safety-orange opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-safety-orange" />
                </span>
                {title && (
                  <p className={`text-xs font-black uppercase tracking-[0.25em] ${lightBg ? 'text-safety-orange' : 'text-safety-orange'}`}>
                    {title}
                  </p>
                )}
              </div>
              {description && (
                <p className={`text-sm font-medium ${lightBg ? 'text-black/50' : 'text-white/40'}`}>{description}</p>
              )}
            </div>
          )}

          <div
            className="w-full overflow-hidden"
            style={{ maskImage: `linear-gradient(to right, ${fadeColor}, black 15%, black 85%, ${fadeColor})` }}
          >
            <div className="marquee-track flex w-max items-start gap-5 py-4">
              {[...logos, ...logos, ...logos].map((logo, index) => {
                const fromColor = logo.gradient?.from || '#FF6B00'
                const toColor = logo.gradient?.to || '#FF9A40'
                return (
                  <div key={index} className="group relative shrink-0 flex flex-col items-center">
                    {/* Logo card */}
                    <div
                      className="relative w-32 h-24 flex items-center justify-center rounded-xl overflow-hidden cursor-default transition-all duration-300"
                      style={{
                        background: lightBg
                          ? `linear-gradient(160deg, ${fromColor}70, ${toColor}60)`
                          : `linear-gradient(160deg, ${fromColor}7D, ${toColor}65)`,
                        border: `1px solid ${fromColor}AC`,
                        boxShadow: lightBg
                          ? `0 4px 16px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.08)`
                          : `0 0 0 0 ${fromColor}00`,
                        transition: 'box-shadow 0.4s ease, border-color 0.4s ease, background 0.4s ease',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.boxShadow = lightBg
                          ? `0 8px 32px rgba(0,0,0,0.18), 0 0 20px 2px ${fromColor}40, inset 0 0 20px 0 ${fromColor}15`
                          : `0 0 20px 2px ${fromColor}50, inset 0 0 20px 0 ${fromColor}20`
                        e.currentTarget.style.borderColor = `${fromColor}CC`
                        e.currentTarget.style.background = `linear-gradient(160deg, ${fromColor}82, ${toColor}65)`
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.boxShadow = lightBg
                          ? `0 4px 16px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.08)`
                          : `0 0 0 0 ${fromColor}00`
                        e.currentTarget.style.borderColor = `${fromColor}AC`
                        e.currentTarget.style.background = lightBg
                          ? `linear-gradient(160deg, ${fromColor}70, ${toColor}60)`
                          : `linear-gradient(160deg, ${fromColor}7D, ${toColor}65)`
                      }}
                    >
                      {/* Top accent bar */}
                      <div
                        className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `linear-gradient(90deg, transparent, ${fromColor}, transparent)` }}
                      />

                      {/* Center white glow — lifts transparent logos off dark bg */}
                      {!lightBg && (
                        <div
                          className="absolute inset-0 pointer-events-none"
                          style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(255,255,255,0.18) 0%, transparent 75%)' }}
                        />
                      )}

                      {logo.src ? (
                        logo.noBg ? (
                          <div
                            className="relative w-4/5 h-4/5 flex items-center justify-center rounded-lg overflow-hidden"
                            style={{ boxShadow: '0 0 12px 3px rgba(255,255,255,0.18)' }}
                          >
                            <img src={logo.src} alt={logo.name} className="w-full h-full object-contain" />
                          </div>
                        ) : (
                        <div className="relative w-4/5 h-4/5 flex items-center justify-center rounded-lg" style={{ background: 'rgba(255,255,255,0.88)' }}>
                          <img src={logo.src} alt={logo.name} className="w-full h-full object-contain p-2" />
                        </div>
                        )
                      ) : (
                        <span
                          className="relative text-[11px] font-black uppercase tracking-tight text-center leading-tight px-3 transition-colors duration-300"
                          style={{ color: `${fromColor}cc` }}
                        >
                          {logo.name}
                        </span>
                      )}
                    </div>

                    {/* Tool name label */}
                    <p
                      className="mt-2.5 text-[9px] font-black uppercase tracking-widest transition-colors duration-200"
                      style={{ color: lightBg ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.55)' }}
                    >
                      {logo.name}
                    </p>

                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </>
    )
  }
)

MarqueeLogoScroller.displayName = 'MarqueeLogoScroller'

export { MarqueeLogoScroller }
