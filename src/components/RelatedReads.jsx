import React from 'react';
import { ArrowRight } from 'lucide-react';

const RelatedReads = ({ items }) => {
    if (!items?.length) return null;

    return (
        <section className="border-t border-white/10 pt-10">
            <div className="mb-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-safety-orange mb-3">
                    Read Next
                </p>
                <h2 className="text-2xl md:text-3xl font-black uppercase italic text-white">
                    Related Reads
                </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                {items.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        className="group bg-white/5 border border-white/10 p-6 transition-colors hover:bg-white/10 hover:border-safety-orange/40"
                    >
                        <h3 className="text-lg font-black uppercase text-white leading-snug mb-3">
                            {item.title}
                        </h3>
                        <p className="text-sm text-white/65 font-bold leading-relaxed mb-4">
                            {item.description}
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-wider text-safety-orange">
                            Read Article
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default RelatedReads;
