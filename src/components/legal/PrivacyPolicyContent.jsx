import React from 'react';

// The single source of truth for this document's text. Rendered both by the
// modal on the homepage and by the standalone page at its own URL, so the two
// can never drift apart. Styled for a dark background in both places.
export const LAST_UPDATED = '13 September 2026';

const PrivacyPolicyContent = () => (
    <>
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
                                <li>Third-party platform credentials, API keys, and authentication tokens (where provided for automation setup)</li>
                                <li>Business system access details required to configure and maintain agreed automations</li>
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
                                <li>Provide credentials or API keys via our secure onboarding intake form for automation and system setup</li>
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
                                <li>Configure and maintain automation systems, integrations, and enquiry workflows using credentials you provide</li>
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
                                <span className="text-safety-orange">8.</span> Credential & API Key Handling
                            </h3>
                            <p className="mb-3">Where you provide credentials, API keys, or platform access as part of an automation or system setup engagement:</p>
                            <ul className="list-disc pl-5 space-y-1 text-white/70 mb-4">
                                <li>Credentials are collected via our <strong className="text-white">secure onboarding intake form only</strong> — never by email or unsecured channel</li>
                                <li>Access is limited to authorised personnel directly involved in your project</li>
                                <li>Credentials are used <strong className="text-white">only</strong> for delivery of agreed automation setup and ongoing maintenance</li>
                                <li>We do not share credentials with any unauthorised third parties</li>
                                <li>Credentials are <strong className="text-white">retained while you are on an active maintenance plan</strong> and securely deleted upon plan cancellation or written request</li>
                                <li>Where possible, we recommend using platform-level access controls (e.g., limited API scopes) rather than full admin credentials</li>
                                <li>Clients are advised to rotate credentials after any access period ends</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">9.</span> Third-Party Services
                            </h3>
                            <p className="mb-3">We may share limited information with trusted third-party services only when required to:</p>
                            <ul className="list-disc pl-5 space-y-1 text-white/70">
                                <li>Process payments</li>
                                <li>Schedule bookings</li>
                                <li>Deliver analytics or advertising</li>
                                <li>Provide technical infrastructure</li>
                                <li>Configure integrations or automations on your behalf using credentials or API keys you provide</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">10.</span> Cookies
                            </h3>
                            <p>Our website may use cookies or similar technologies to improve website functionality, analyse traffic, and support advertising. You can disable cookies in your browser settings if you prefer.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">11.</span> Your Rights
                            </h3>
                            <p className="mb-3">You may request to access, correct, or delete your personal information (subject to legal requirements).</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">12.</span> Changes to This Policy
                            </h3>
                            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
                        </section>

                        <section className="bg-white/5 p-6 rounded-sm border border-white/5">
                            <h3 className="text-xl font-black uppercase text-white mb-4 flex items-center gap-2">
                                <span className="text-safety-orange">13.</span> Contact Us
                            </h3>
                            <p className="mb-4">If you have questions about this Privacy Policy or how your information is handled, contact us at:</p>
                            <div className="space-y-1 font-bold text-white">
                                <p>Email: <a href="mailto:hello@yourtradepartner.com.au" className="text-safety-orange hover:underline">hello@yourtradepartner.com.au</a></p>
                                <p>Business: YourTradePartner</p>
                                <p>Location: Adelaide, Australia</p>
                            </div>
                        </section>
                    </div>
    </>
);

export default PrivacyPolicyContent;
