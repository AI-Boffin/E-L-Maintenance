'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, FileText, Mail, Phone } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-brand-off-white">
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Link */}
            <Link
              href="/"
              className="inline-flex items-center text-brand-mid-grey hover:text-brand-red transition-colors duration-200 mb-8 focus:outline-none focus:ring-2 focus:ring-brand-red rounded-lg px-2 py-1"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>

            {/* Header */}
            <div className="text-center mb-12">
              <div className="bg-brand-red/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-brand-red" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">
                Terms of Service
              </h1>
              <p className="text-brand-mid-grey">
                Last updated: January 2025
              </p>
            </div>

            {/* Content */}
            <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
              <div className="prose prose-gray max-w-none">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Introduction</h2>
                    <p className="text-brand-mid-grey leading-relaxed">
                      These Terms of Service ("Terms") govern your use of the E&L Property Maintenance website and services. By accessing our website or using our services, you agree to be bound by these Terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Company Information</h2>
                    <div className="bg-brand-red/5 rounded-2xl p-6">
                      <p className="text-brand-mid-grey mb-2"><strong>Company Name:</strong> E&L Property Maintenance</p>
                      <p className="text-brand-mid-grey mb-2"><strong>Service Area:</strong> Milton Keynes and surrounding areas</p>
                      <p className="text-brand-mid-grey mb-2"><strong>Email:</strong> hello@elandlmaintenance.co.uk</p>
                      <p className="text-brand-mid-grey"><strong>Phone:</strong> 01908 000000</p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Services</h2>
                    <p className="text-brand-mid-grey mb-4">
                      We provide property maintenance services including but not limited to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-brand-mid-grey">
                      <li>Painting and decorating</li>
                      <li>Plastering</li>
                      <li>Kitchen fitting</li>
                      <li>Tiling</li>
                      <li>Flooring installation</li>
                      <li>Garden and outdoor work</li>
                      <li>Minor plumbing</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Quotes and Estimates</h2>
                    <ul className="list-disc list-inside space-y-2 text-brand-mid-grey">
                      <li>All quotes are provided free of charge and without obligation</li>
                      <li>Quotes are valid for 30 days unless otherwise stated</li>
                      <li>Final costs may vary if project scope changes or unforeseen issues arise</li>
                      <li>Any variations will be discussed and agreed upon before proceeding</li>
                      <li>Written confirmation is required for all work to commence</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Payment Terms</h2>
                    <ul className="list-disc list-inside space-y-2 text-brand-mid-grey">
                      <li>Payment terms will be agreed upon before work commences</li>
                      <li>For larger projects, staged payments may be required</li>
                      <li>Final payment is due upon completion and your satisfaction</li>
                      <li>We accept cash, bank transfer, and most major payment methods</li>
                      <li>Late payment charges may apply to overdue accounts</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Warranty and Guarantees</h2>
                    <div className="space-y-4 text-brand-mid-grey">
                      <p>
                        <strong>Workmanship Guarantee:</strong> We provide a 12-month guarantee on all workmanship from the date of completion.
                      </p>
                      <p>
                        <strong>Materials:</strong> Material warranties are as per manufacturer specifications.
                      </p>
                      <p>
                        <strong>Exclusions:</strong> Normal wear and tear, damage caused by misuse, or issues arising from customer-supplied materials are not covered.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Cancellation Policy</h2>
                    <ul className="list-disc list-inside space-y-2 text-brand-mid-grey">
                      <li>You may cancel services up to 24 hours before the scheduled start time</li>
                      <li>If materials have been ordered specifically for your project, you may be liable for their cost</li>
                      <li>Emergency callouts cannot be cancelled once a technician is dispatched</li>
                      <li>Refunds for cancelled work will be processed within 7-14 business days</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Insurance and Liability</h2>
                    <div className="space-y-4 text-brand-mid-grey">
                      <p>
                        We carry comprehensive public liability insurance up to £2,000,000 and employer's liability insurance. Proof of insurance can be provided upon request.
                      </p>
                      <p>
                        We will take all reasonable care to protect your property during work, but cannot be held liable for:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Pre-existing defects or damage not caused by our work</li>
                        <li>Damage to extremely fragile or valuable items not properly protected</li>
                        <li>Issues arising from inadequate customer preparation</li>
                      </ul>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Health and Safety</h2>
                    <ul className="list-disc list-inside space-y-2 text-brand-mid-grey">
                      <li>We comply with all relevant health and safety regulations</li>
                      <li>You must inform us of any hazards or special requirements at your property</li>
                      <li>Access to utilities (water, electricity) must be available unless otherwise arranged</li>
                      <li>We reserve the right to stop work if conditions are deemed unsafe</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Intellectual Property</h2>
                    <p className="text-brand-mid-grey leading-relaxed">
                      All content on this website, including text, graphics, logos, and images, is the property of E&L Property Maintenance and protected by copyright. You may not reproduce or distribute any content without our written permission.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Limitation of Liability</h2>
                    <p className="text-brand-mid-grey leading-relaxed">
                      Our liability is limited to the value of the work performed. We shall not be liable for any indirect, incidental, or consequential damages. This does not affect your statutory rights as a consumer.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Dispute Resolution</h2>
                    <p className="text-brand-mid-grey leading-relaxed">
                      We are committed to resolving any disputes amicably. If you have concerns about our work, please contact us immediately. For unresolved disputes, we recommend mediation through a recognized trade association before pursuing legal action.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Governing Law</h2>
                    <p className="text-brand-mid-grey leading-relaxed">
                      These Terms are governed by English law and subject to the exclusive jurisdiction of the English courts.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Changes to Terms</h2>
                    <p className="text-brand-mid-grey leading-relaxed">
                      We may update these Terms from time to time. Continued use of our services after changes constitutes acceptance of the new Terms.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Contact Us</h2>
                    <p className="text-brand-mid-grey mb-4">
                      If you have questions about these Terms, please contact us:
                    </p>
                    <div className="bg-brand-red/5 rounded-2xl p-6 space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-brand-red" />
                        <a 
                          href="mailto:hello@elandlmaintenance.co.uk"
                          className="text-brand-red hover:text-brand-black transition-colors duration-200"
                        >
                          hello@elandlmaintenance.co.uk
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-brand-red" />
                        <a 
                          href="tel:+441908000000"
                          className="text-brand-red hover:text-brand-black transition-colors duration-200"
                        >
                          01908 000000
                        </a>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}