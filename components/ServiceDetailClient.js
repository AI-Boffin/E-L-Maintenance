'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  Shield, 
  Star,
  ChevronDown,
  Phone,
  Mail
} from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

export default function ServiceDetailClient({ service }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-black">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-off-white mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-brand-red font-semibold mb-6">
              {service.subtitle}
            </p>
            <p className="text-xl text-brand-mid-grey max-w-3xl mx-auto leading-relaxed mb-8">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-brand-off-white font-semibold">
                {service.startingPrice}
              </div>
              <button
                onClick={() => setShowQuoteForm(true)}
                className="btn-primary group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <a href="tel:+441908000000" className="btn-secondary">
                Call: 01908 000000
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-brand-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-6">
              Why Choose <span className="text-brand-red paint-stroke">E&L</span>?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-brand-red flex-shrink-0 mt-1" />
                  <span className="text-brand-black font-medium">{benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-6">
              Our <span className="text-brand-red paint-stroke">Process</span>
            </h2>
            <p className="text-xl text-brand-mid-grey max-w-3xl mx-auto">
              Simple, straightforward, and professional from start to finish.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="bg-brand-red/10 text-brand-red rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-6 font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-4">
                  {step.title}
                </h3>
                <p className="text-brand-mid-grey leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-brand-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-6">
              <span className="text-brand-red paint-stroke">Frequently</span> Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-brand-red/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-inset"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-semibold text-brand-black">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-brand-red transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-brand-mid-grey leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-6">
              Recent <span className="text-brand-red paint-stroke">Work</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {service.gallery.map((image, index) => (
              <motion.div
                key={index}
                className="aspect-square relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Image
                  src={image}
                  alt={`${service.title} example ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-off-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-brand-mid-grey mb-8 max-w-3xl mx-auto">
              Get your free, no-obligation quote today. Professional {service.title.toLowerCase()} services in Milton Keynes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="flex items-center space-x-2 text-brand-mid-grey">
                <Clock className="h-5 w-5 text-brand-red" />
                <span>24-hour quotes</span>
              </div>
              <div className="flex items-center space-x-2 text-brand-mid-grey">
                <Shield className="h-5 w-5 text-brand-red" />
                <span>Fully insured</span>
              </div>
              <div className="flex items-center space-x-2 text-brand-mid-grey">
                <Star className="h-5 w-5 text-brand-red" />
                <span>5-star rated</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowQuoteForm(true)}
                className="btn-primary group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <a href="tel:+441908000000" className="btn-secondary group">
                <Phone className="mr-2 h-5 w-5" />
                Call: 01908 000000
              </a>
              <a href="mailto:hello@elandlmaintenance.co.uk" className="btn-secondary group">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <QuoteForm
          isOpen={showQuoteForm}
          onClose={() => setShowQuoteForm(false)}
          selectedService={service.title}
        />
      )}
    </main>
  );
}


