import React from 'react';
import { X, CheckCircle2, AlertCircle, Hammer } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

const CaseStudyModal = ({ isOpen, onClose, project }) => {
    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/95 backdrop-blur-md"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-construction-charcoal border border-white/10 w-full max-w-5xl rounded-lg shadow-2xl overflow-hidden font-sans animate-in fade-in zoom-in-95 duration-200">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors z-[110]"
                >
                    <X className="w-8 h-8" />
                </button>

                <div className="p-6 md:p-12 max-h-[90vh] overflow-y-auto custom-scrollbar">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <Badge className="bg-white/10 text-white mb-6 hover:bg-white/10 pointer-events-none uppercase tracking-widest text-[10px]">Case Study: {project.title}</Badge>
                        <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-4">
                            {project.title} <span className="text-safety-orange">— {project.location}</span>
                        </h2>
                        <div className="w-20 h-1 bg-safety-orange mx-auto mb-10"></div>
                    </div>

                    {/* Testimonial */}
                    <div className="relative mb-16">
                        <div className="absolute -top-6 -left-6 text-9xl text-safety-orange/10 font-serif pointer-events-none">“</div>
                        <div className="bg-white/5 border-l-4 border-safety-orange p-8 md:p-10 relative z-10">
                            <p className="italic font-bold text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
                                “{project.testimonial}”
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-0.5 bg-safety-orange"></div>
                                <span className="text-sm font-black uppercase tracking-widest text-white/40 italic">{project.attribution}</span>
                            </div>
                        </div>
                    </div>

                    {/* Challenge & Delivered Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-16">
                        {/* What Was Delivered */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-black uppercase italic text-safety-orange flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6" />
                                What Was Delivered
                            </h3>
                            <ul className="space-y-4">
                                {project.delivered.map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <div className="w-2 h-2 bg-safety-orange mt-2 rounded-full flex-shrink-0"></div>
                                        <span className="font-bold text-base text-white/80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* The Challenge */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-black uppercase italic text-white/30 flex items-center gap-3">
                                <AlertCircle className="w-6 h-6" />
                                The Challenge
                            </h3>
                            <ul className="space-y-4">
                                {project.challenge.map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start">
                                        <span className="text-white/20 font-black flex-shrink-0 mt-1">✕</span>
                                        <span className="font-bold text-base text-white/40 italic">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* The Visuals */}
                    <div className="space-y-16">
                        <div className="text-center">
                            <h3 className="text-2xl font-black uppercase italic mb-8 inline-block border-b-2 border-safety-orange pb-2">The Visuals</h3>
                        </div>

                        <div className="space-y-12">
                            {/* Desktop Home */}
                            <div>
                                <div className="flex items-center justify-between mb-4 px-2">
                                    <h4 className="text-lg font-black uppercase italic">Desktop Homepage</h4>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Clean • Professional • Targeted</span>
                                </div>
                                <div className="border border-white/10 rounded-sm overflow-hidden shadow-2xl">
                                    <img
                                        src={project.images.homepage}
                                        alt={`${project.title} Desktop Homepage`}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>

                            {/* Service Page */}
                            <div>
                                <div className="flex items-center justify-between mb-4 px-2">
                                    <h4 className="text-lg font-black uppercase italic">Service Specific Pages</h4>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/20">{project.images.serviceLabel}</span>
                                </div>
                                <div className="border border-white/10 rounded-sm overflow-hidden shadow-2xl">
                                    <img
                                        src={project.images.service}
                                        alt={`${project.title} Service Page`}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>

                            {/* Project Showcase Page */}
                            <div>
                                <div className="flex items-center justify-between mb-4 px-2">
                                    <h4 className="text-lg font-black uppercase italic">Project Showcase</h4>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/20">Our Work Gallery</span>
                                </div>
                                <div className="border border-white/10 rounded-sm overflow-hidden shadow-2xl">
                                    <img
                                        src={project.images.work}
                                        alt={`${project.title} Project Showcase`}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Footer */}
                    <div className="mt-16 pt-12 border-t border-white/10 text-center">
                        <h4 className="text-xl font-black uppercase italic mb-6">Want results like this?</h4>
                        <button
                            onClick={() => {
                                onClose();
                                window.location.href = "#contact";
                            }}
                            className="bg-safety-orange hover:bg-safety-orange-hover text-white px-8 py-4 font-black uppercase tracking-widest text-sm transition-all transform hover:scale-105"
                        >
                            Get A Custom System Built
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyModal;
