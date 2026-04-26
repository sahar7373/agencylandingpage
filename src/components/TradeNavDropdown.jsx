import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Wrench, Zap, Home, Wind, Hammer, Ruler, TreeDeciduous, PaintBucket, Square } from 'lucide-react';

const TRADES = [
    { label: 'Plumbers', path: '/plumbing-websites', Icon: Wrench },
    { label: 'Electricians', path: '/electrician-websites', Icon: Zap },
    { label: 'Roofers', path: '/roofer-websites', Icon: Home },
    { label: 'HVAC', path: '/hvac-websites', Icon: Wind },
    { label: 'Builders', path: '/builder-websites', Icon: Hammer },
    { label: 'Carpenters', path: '/carpenter-websites', Icon: Ruler },
    { label: 'Landscapers', path: '/landscaper-websites', Icon: TreeDeciduous },
    { label: 'Painters', path: '/painter-websites', Icon: PaintBucket },
    { label: 'Concreters', path: '/concrete-layer-websites', Icon: Square },
];

export default function TradeNavDropdown() {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    const current = TRADES.find(t => t.path === location.pathname);

    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <nav className="border-b border-white/10 bg-construction-charcoal/95 backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="/" className="flex items-center gap-3 text-white hover:text-safety-orange transition-colors group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-black uppercase tracking-widest">Your Trade Partner</span>
                    </a>

                    <div className="relative" ref={ref}>
                        <button
                            onClick={() => setOpen(o => !o)}
                            className="flex items-center gap-2 bg-safety-orange/10 text-safety-orange border border-safety-orange/20 px-3 py-1 rounded-md text-xs font-semibold hover:bg-safety-orange/20 transition-colors"
                        >
                            {current && <current.Icon className="w-3 h-3" />}
                            <span>For {current?.label ?? 'Trades'}</span>
                            <ChevronDown className={`w-3 h-3 transition-transform ${open ? 'rotate-180' : ''}`} />
                        </button>

                        {open && (
                            <div className="absolute right-0 mt-2 w-52 bg-construction-charcoal border border-white/10 rounded-md shadow-xl overflow-hidden">
                                {TRADES.filter(t => t.path !== location.pathname).map(({ label, path, Icon }) => (
                                    <Link
                                        key={path}
                                        to={path}
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-safety-orange hover:bg-white/5 transition-colors"
                                    >
                                        <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
