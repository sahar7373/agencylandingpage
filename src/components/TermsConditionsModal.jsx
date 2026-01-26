import React from 'react';
import { X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const TermsConditionsModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const today = new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-construction-charcoal border border-white/10 w-full max-w-3xl rounded-lg shadow-2xl overflow-hidden font-sans animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">

                {/* Header */}
                <div className="p-6 md:p-8 bg-black/20 border-b border-white/10 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-1">Terms & Conditions</h2>
                        <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Last updated: {today}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Main Content (Scrollable) */}
                <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar text-white/80 space-y-8">

                    <p className="text-lg font-medium leading-relaxed">
                        These Terms & Conditions apply to all services provided by <strong className="text-white">YourTradePartner</strong> (“we”, “us”, “our”). By accessing our website, booking a consultation, or purchasing any service, you agree to these Terms.
                    </p>

                    <div className="space-y-6">
                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">1.</span> Services Overview
                            </h3>
                            <p className="mb-3">We provide digital services to Australian trade businesses, which may include:</p>
                            <ul className="list-disc pl-5 space-y-1 text-white/70">
                                <li>Website design and setup</li>
                                <li>Business system reviews (“Missed Job Review”)</li>
                                <li>Automation and enquiry system setup</li>
                                <li>Advisory and consulting services</li>
                                <li>Ongoing website hosting and maintenance</li>
                                <li>Optional digital marketing or automation support</li>
                            </ul>
                            <p className="mt-3 mb-3">Services may be offered as:</p>
                            <ul className="list-disc pl-5 space-y-1 text-white/70">
                                <li>One-off services</li>
                                <li>Paid consultations</li>
                                <li>Setup packages</li>
                                <li>Ongoing partnership plans</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">2.</span> Service Commencement
                            </h3>
                            <div className="space-y-2 text-white/70">
                                <p><strong className="text-white">2.1</strong> Services commence once:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Payment (or deposit, where applicable) is received, and</li>
                                    <li>We confirm the booking or project start.</li>
                                </ul>
                                <p><strong className="text-white">2.2</strong> We reserve the right to decline or delay commencement if required information, approvals, or payments are not provided.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">3.</span> Scope of Work & Changes
                            </h3>
                            <div className="space-y-2 text-white/70">
                                <p><strong className="text-white">3.1</strong> Each service or package includes only the items explicitly listed in the agreed scope.</p>
                                <p><strong className="text-white">3.2</strong> Any work outside the agreed scope (additional pages, revisions, features, integrations, or changes) will be quoted separately.</p>
                                <p><strong className="text-white">3.3</strong> Requests for changes must be provided in writing.</p>
                                <p><strong className="text-white">3.4</strong> We do not provide unlimited revisions. Reasonable revision limits apply and will be clarified before work begins.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">4.</span> Fees, Payments & Billing
                            </h3>
                            <div className="space-y-2 text-white/70">
                                <p><strong className="text-white">4.1</strong> Unless otherwise stated:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Website or setup projects require <strong className="text-white">50% upfront payment</strong></li>
                                    <li>The remaining balance is due <strong className="text-white">upon completion and before handover</strong></li>
                                    <li>Paid consultations are payable in full at booking</li>
                                    <li>All fees are non-refundable unless stated otherwise</li>
                                </ul>
                                <p><strong className="text-white">4.2</strong> Prices are exclusive of GST unless specified.</p>
                                <p><strong className="text-white">4.3</strong> Ongoing partnership or maintenance fees are billed quarterly or annually, depending on the selected plan.</p>
                                <p><strong className="text-white">4.4</strong> Failure to pay invoices may result in suspension of services.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">5.</span> Missed Job Review (Paid Audit)
                            </h3>
                            <div className="space-y-2 text-white/70">
                                <p><strong className="text-white">5.1</strong> The “Missed Job Review” is a paid consultation designed to identify potential gaps or improvement areas.</p>
                                <p><strong className="text-white">5.2</strong> Outcomes may include:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Actionable recommendations</li>
                                    <li>Priority improvements</li>
                                    <li>Confirmation that no immediate changes are required</li>
                                </ul>
                                <p><strong className="text-white">5.3</strong> The fee for this service may be credited toward a future setup package if you proceed within the specified timeframe.</p>
                                <p><strong className="text-white">5.4</strong> No guarantee of increased leads or revenue is made as outcomes depend on many external factors.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">6.</span> Hosting, Maintenance & Renewals
                            </h3>
                            <div className="space-y-2 text-white/70">
                                <p><strong className="text-white">6.1</strong> Where hosting and maintenance are included:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Coverage applies only for the active partnership period</li>
                                    <li>Services include basic updates, monitoring, and support as outlined in your plan</li>
                                </ul>
                                <p><strong className="text-white">6.2</strong> Hosting, domains, and third-party tools are provided through external providers.</p>
                                <p><strong className="text-white">6.3</strong> Renewal fees apply after the initial term and must be paid to avoid service interruption.</p>
                                <p><strong className="text-white">6.4</strong> Clients may choose to transfer hosting elsewhere upon request after settling any outstanding fees.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">7.</span> Client Responsibilities
                            </h3>
                            <p className="mb-3">You agree to:</p>
                            <ul className="list-disc pl-5 space-y-1 text-white/70">
                                <li>Provide accurate and timely information</li>
                                <li>Review and approve work within reasonable timeframes</li>
                                <li>Ensure all supplied content is lawful and owned or licensed by you</li>
                                <li>Maintain access to third-party services unless managed by us</li>
                            </ul>
                            <p className="mt-2 text-sm italic">Delays caused by missing content or approvals may extend timelines.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">8.</span> Intellectual Property
                            </h3>
                            <div className="space-y-2 text-white/70">
                                <p><strong className="text-white">8.1</strong> Upon full payment, you own:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Final website content created specifically for your business</li>
                                    <li>Custom branding assets explicitly included in your package</li>
                                </ul>
                                <p><strong className="text-white">8.2</strong> We retain ownership of:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Templates, frameworks, internal systems, methodologies, and code libraries</li>
                                    <li>Pre-existing intellectual property used to deliver services</li>
                                </ul>
                                <p><strong className="text-white">8.3</strong> You are granted a non-exclusive licence to use our systems as part of your delivered services only.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">9.</span> Analytics, Tracking & Data
                            </h3>
                            <div className="space-y-2 text-white/70">
                                <p><strong className="text-white">9.1</strong> Our website and services may use analytics and advertising tools (including Meta Pixel and Google Analytics).</p>
                                <p><strong className="text-white">9.2</strong> These tools collect anonymised or aggregated usage data to improve performance and measurement.</p>
                                <p><strong className="text-white">9.3</strong> Personal data handling is governed by our <strong className="text-white">Privacy Policy</strong>.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">10.</span> No Guarantees
                            </h3>
                            <div className="space-y-2 text-white/70">
                                <p><strong className="text-white">10.1</strong> While we aim to improve systems, efficiency, and enquiry handling:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>We do not guarantee specific revenue, rankings, lead volume, or conversion rates</li>
                                    <li>Results depend on market conditions, competition, budget, and client responsiveness</li>
                                </ul>
                                <p><strong className="text-white">10.2</strong> Our role is to build systems and foundations — not to guarantee outcomes.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">11.</span> Limitation of Liability
                            </h3>
                            <div className="space-y-2 text-white/70">
                                <p><strong className="text-white">11.1</strong> We are not liable for:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Lost revenue, profits, or business opportunities</li>
                                    <li>Third-party service outages</li>
                                    <li>Delays caused by client inaction</li>
                                    <li>Platform or algorithm changes</li>
                                </ul>
                                <p><strong className="text-white">11.2</strong> Our total liability is limited to the fees paid by you in the previous 30 days.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">12.</span> Cancellation & Termination
                            </h3>
                            <div className="space-y-2 text-white/70">
                                <p><strong className="text-white">12.1</strong> Paid consultations are non-refundable once delivered.</p>
                                <p><strong className="text-white">12.2</strong> Ongoing services require <strong className="text-white">30 days’ written notice</strong> to cancel.</p>
                                <p><strong className="text-white">12.3</strong> Early termination does not waive outstanding fees.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">13.</span> Suspension of Services
                            </h3>
                            <p className="mb-3">We may suspend services if:</p>
                            <ul className="list-disc pl-5 space-y-1 text-white/70">
                                <li>Payments are overdue</li>
                                <li>These Terms are breached</li>
                                <li>Unlawful or inappropriate content is used</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">14.</span> Changes to Terms
                            </h3>
                            <p className="text-white/70">We may update these Terms from time to time. Continued use of our services constitutes acceptance of updated Terms.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">15.</span> Governing Law
                            </h3>
                            <p className="text-white/70">These Terms are governed by the laws of <strong className="text-white">Australia</strong>.</p>
                        </section>

                        <section className="bg-white/5 p-6 rounded-sm border border-white/5">
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">16.</span> Contact
                            </h3>
                            <p className="mb-4">For questions regarding these Terms:</p>
                            <div className="space-y-1 font-bold text-white">
                                <p>Email: <a href="mailto:hello@yourtradepartner.com.au" className="text-safety-orange hover:underline">hello@yourtradepartner.com.au</a></p>
                                <p>Business: YourTradePartner</p>
                                <p>Location: Adelaide, Australia</p>
                            </div>
                        </section>
                    </div>

                    <div className="pt-6 border-t border-white/10 flex justify-center">
                        <Button
                            onClick={onClose}
                            className="bg-white/10 hover:bg-white/20 text-white font-bold px-8"
                        >
                            Close Terms
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsConditionsModal;
