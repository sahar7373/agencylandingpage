import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
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
                        <h2 className="text-2xl md:text-3xl font-black uppercase italic mb-1">Privacy Policy</h2>
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
                        This Privacy Policy explains how <strong className="text-white">YourTradePartner</strong> (“we”, “us”, “our”) collects, uses, stores, and protects your personal information when you visit our website, contact us, book services, or make payments.
                    </p>

                    <div className="space-y-6">
                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">1.</span> Information We Collect
                            </h3>
                            <p className="mb-3">We may collect the following information when you interact with our website or services:</p>
                            <ul className="list-disc pl-5 space-y-1 text-white/70">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Business name and trade type</li>
                                <li>Website or business details you voluntarily provide</li>
                                <li>Booking and payment confirmation details</li>
                                <li>Technical data such as IP address, browser type, device type, and pages visited</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">2.</span> How We Collect Information
                            </h3>
                            <p className="mb-3">Information is collected when you:</p>
                            <ul className="list-disc pl-5 space-y-1 text-white/70">
                                <li>Submit a form on our website</li>
                                <li>Book a consultation or paid review</li>
                                <li>Make a payment</li>
                                <li>Interact with our chatbot</li>
                                <li>Browse our website (via analytics and tracking tools)</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">3.</span> How We Use Your Information
                            </h3>
                            <ul className="list-disc pl-5 space-y-1 text-white/70 mb-4">
                                <li>Respond to enquiries and requests</li>
                                <li>Deliver consultations, audits, or services you request</li>
                                <li>Process payments and bookings</li>
                                <li>Improve our website, services, and user experience</li>
                                <li>Measure marketing performance and conversion activity</li>
                                <li>Communicate service updates or follow-ups</li>
                                <li>Communicate relevant business insights, system improvements, and service-related updates where you have submitted your details or requested information. You may unsubscribe from marketing communications at any time.</li>
                            </ul>
                            <p className="font-bold text-white">We do NOT sell your personal information to third parties.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">4.</span> Email Communications
                            </h3>
                            <p className="mb-3">If you submit your details via our contact forms, booking pages, chatbot, or free guide downloads, you consent to receive email communications from YourTradePartner relating to:</p>
                            <ul className="list-disc pl-5 space-y-1 text-white/70 mb-4">
                                <li>Requested information or services</li>
                                <li>Follow-up insights about enquiry handling and business systems</li>
                                <li>Relevant updates about our services</li>
                            </ul>
                            <p className="mb-4">All marketing emails include a functional unsubscribe link. You may opt out at any time in accordance with the Australian Spam Act 2003.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">5.</span> Analytics, Tracking & Advertising
                            </h3>
                            <p className="mb-3">We use third-party tools to understand how visitors use our website and to improve advertising performance. These may include:</p>
                            <ul className="list-disc pl-5 space-y-1 text-white/70 mb-4">
                                <li><strong className="text-white">Meta Pixel (Facebook/Instagram)</strong></li>
                                <li><strong className="text-white">Google Analytics (GA4)</strong></li>
                            </ul>
                            <p className="mb-4">These tools may collect anonymised data such as pages visited, button clicks, form submissions, and device information.</p>

                            <h4 className="font-bold text-white uppercase text-sm tracking-widest mb-2">Advanced Matching</h4>
                            <p className="mb-2">Where applicable, we may enable privacy-safe advanced matching (such as email or phone number hashing) to improve ad attribution. This data is securely hashed before being sent and is never shared in plain text.</p>
                            <p className="italic text-sm text-white/50">You can opt out of personalised advertising through your Facebook or Google ad settings.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">6.</span> Payments
                            </h3>
                            <p>Payments are processed securely via third-party payment providers (such as Stripe). We do not store or process full credit card details on our servers.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">7.</span> How We Store & Protect Your Data
                            </h3>
                            <p>We take reasonable steps to protect your information from misuse, loss, unauthorised access, or disclosure. Data is stored securely and access is limited to authorised personnel only.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">8.</span> Third-Party Services
                            </h3>
                            <p className="mb-3">We may share limited information with trusted third-party services only when required to:</p>
                            <ul className="list-disc pl-5 space-y-1 text-white/70">
                                <li>Process payments</li>
                                <li>Schedule bookings</li>
                                <li>Deliver analytics or advertising</li>
                                <li>Provide technical infrastructure</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">9.</span> Cookies
                            </h3>
                            <p>Our website may use cookies or similar technologies to improve website functionality, analyse traffic, and support advertising. You can disable cookies in your browser settings if you prefer.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">10.</span> Your Rights
                            </h3>
                            <p className="mb-3">You may request to access, correct, or delete your personal information (subject to legal requirements).</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">11.</span> Changes to This Policy
                            </h3>
                            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
                        </section>

                        <section className="bg-white/5 p-6 rounded-sm border border-white/5">
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">12.</span> Contact Us
                            </h3>
                            <p className="mb-4">If you have questions about this Privacy Policy or how your information is handled, contact us at:</p>
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
                            Close Policy
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyModal;
