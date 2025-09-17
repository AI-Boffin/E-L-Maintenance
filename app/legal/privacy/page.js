'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Shield, Mail, Phone } from 'lucide-react';

export default function PrivacyPage() {
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
                <Shield className="h-8 w-8 text-brand-red" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">
                Privacy Policy
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
                      E&L Property Maintenance ("we", "our", or "us") is committed to protecting and respecting your privacy. This policy explains how we collect, use, and protect your personal information when you use our website or services.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Information We Collect</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-brand-black mb-2">Information you provide to us:</h3>
                        <ul className="list-disc list-inside space-y-2 text-brand-mid-grey">
                          <li>Contact details (name, email address, phone number, address)</li>
                          <li>Project details and service requirements</li>
                          <li>Photos you upload of your property</li>
                          <li>Communication preferences</li>
                          <li>Feedback and review information</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-brand-black mb-2">Information we collect automatically:</h3>
                        <ul className="list-disc list-inside space-y-2 text-brand-mid-grey">
                          <li>Website usage data and analytics</li>
                          <li>Device and browser information</li>
                          <li>IP address and location data</li>
                          <li>Cookies and similar technologies</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">How We Use Your Information</h2>
                    <p className="text-brand-mid-grey mb-4">We use your information to:</p>
                    <ul className="list-disc list-inside space-y-2 text-brand-mid-grey">
                      <li>Provide quotes and deliver our property maintenance services</li>
                      <li>Communicate with you about your projects and appointments</li>
                      <li>Send service updates and follow-up communications</li>
                      <li>Improve our website and services</li>
                      <li>Comply with legal obligations</li>
                      <li>Protect against fraud and maintain security</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Legal Basis for Processing</h2>
                    <p className="text-brand-mid-grey mb-4">
                      We process your personal data under the following legal bases:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-brand-mid-grey">
                      <li><strong>Contract:</strong> To provide our services and fulfill our contractual obligations</li>
                      <li><strong>Legitimate Interest:</strong> To improve our services and communicate relevant information</li>
                      <li><strong>Consent:</strong> For marketing communications (where required)</li>
                      <li><strong>Legal Obligation:</strong> To comply with legal and regulatory requirements</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Information Sharing</h2>
                    <p className="text-brand-mid-grey mb-4">
                      We do not sell your personal information. We may share your information with:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-brand-mid-grey">
                      <li>Trusted suppliers who help us provide our services</li>
                      <li>Professional advisors (lawyers, accountants, insurers)</li>
                      <li>Regulatory bodies when legally required</li>
                      <li>Emergency services if there's a threat to safety</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Data Security</h2>
                    <p className="text-brand-mid-grey leading-relaxed">
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes secure data transmission, regular security assessments, and staff training on data protection.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Data Retention</h2>
                    <p className="text-brand-mid-grey leading-relaxed">
                      We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Typically, we retain customer information for 7 years for tax and legal purposes.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Your Rights</h2>
                    <p className="text-brand-mid-grey mb-4">Under data protection law, you have rights including:</p>
                    <ul className="list-disc list-inside space-y-2 text-brand-mid-grey">
                      <li><strong>Access:</strong> Request copies of your personal information</li>
                      <li><strong>Rectification:</strong> Request correction of inaccurate information</li>
                      <li><strong>Erasure:</strong> Request deletion of your information</li>
                      <li><strong>Restriction:</strong> Request restriction of processing</li>
                      <li><strong>Portability:</strong> Request transfer of your information</li>
                      <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Cookies</h2>
                    <p className="text-brand-mid-grey leading-relaxed">
                      Our website uses cookies to improve your experience and analyze website traffic. You can control cookies through your browser settings. For detailed information about our cookie usage, please see our Cookie Policy.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Changes to This Policy</h2>
                    <p className="text-brand-mid-grey leading-relaxed">
                      We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new policy on our website and updating the "last updated" date.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold text-brand-black mb-4">Contact Us</h2>
                    <p className="text-brand-mid-grey mb-4">
                      If you have questions about this privacy policy or our data practices, please contact us:
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