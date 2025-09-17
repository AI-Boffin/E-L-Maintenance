'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import Link from 'next/link';
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

// Static service data
const serviceData = {
  'painting-decorating': {
    title: 'Painting & Decorating',
    subtitle: 'Perfect paint lines. Professional colour matching.',
    description: 'Transform your home with our expert painting and decorating services. From feature walls to full room makeovers, we deliver flawless finishes that stand the test of time.',
    heroImage: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
    benefits: [
      'Perfect paint lines and smooth finishes',
      'Professional colour consultation',
      'High-quality paints and materials',
      'Minimal disruption to your home',
      'Full preparation and cleanup included'
    ],
    process: [
      {
        step: 1,
        title: 'Consultation & Quote',
        description: 'We visit your home to assess the work and provide a detailed quote within 24 hours.'
      },
      {
        step: 2,
        title: 'Preparation & Protection',
        description: 'All surfaces are properly prepared and your furniture is protected before we start.'
      },
      {
        step: 3,
        title: 'Professional Application',
        description: 'Expert application using premium materials for a perfect, long-lasting finish.'
      }
    ],
    faqs: [
      {
        question: 'How long does interior painting take?',
        answer: 'Most rooms can be completed in 1-2 days, depending on size and preparation needed. We\'ll give you an accurate timeline during your consultation.'
      },
      {
        question: 'Do you help with colour selection?',
        answer: 'Absolutely! We offer colour consultation to help you choose the perfect shades that complement your space and lighting.'
      },
      {
        question: 'What preparation is included?',
        answer: 'All necessary preparation including filling holes, sanding, priming, and protecting your furniture and floors.'
      }
    ],
    gallery: [
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg'
    ],
    startingPrice: 'From £25/hour'
  },
  'plastering': {
    title: 'Plastering',
    subtitle: 'Smooth walls. Perfect finishes.',
    description: 'Professional plastering services for walls and ceilings. We handle everything from small repairs to full room re-skims, delivering smooth, ready-to-decorate surfaces.',
    heroImage: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg',
    benefits: [
      'Smooth, perfectly level surfaces',
      'Quick drying, minimal disruption',
      'Patch repairs and full re-skims',
      'Artex removal and smoothing',
      'Ready for immediate decoration'
    ],
    process: [
      {
        step: 1,
        title: 'Assessment',
        description: 'We assess the existing surfaces and recommend the best approach for your project.'
      },
      {
        step: 2,
        title: 'Preparation',
        description: 'Surfaces are prepared, and the area is protected to minimize mess and disruption.'
      },
      {
        step: 3,
        title: 'Professional Plastering',
        description: 'Expert application and finishing, leaving surfaces smooth and ready to decorate.'
      }
    ],
    faqs: [
      {
        question: 'How long does plaster take to dry?',
        answer: 'Typically 24-48 hours depending on thickness and room conditions. We\'ll advise when it\'s ready to decorate.'
      },
      {
        question: 'Can you remove Artex?',
        answer: 'Yes, we can safely remove and smooth Artex ceilings and walls, giving you a modern, clean finish.'
      },
      {
        question: 'Do you repair cracks?',
        answer: 'Absolutely. We identify the cause of cracks and provide lasting repairs before re-plastering.'
      }
    ],
    gallery: [
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg',
      'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg',
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg'
    ],
    startingPrice: 'From £35/m²'
  },
  'kitchen-fitting': {
    title: 'Kitchen Fitting',
    subtitle: 'Dream kitchens. Professional installation.',
    description: 'From flat-pack assembly to luxury kitchen installations, we handle every aspect of your kitchen fitting with precision and care.',
    heroImage: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
    benefits: [
      'Flat-pack and bespoke kitchen fitting',
      'Worktop templating and installation',
      'Appliance connections (non-gas)',
      'Plumbing and electrical work',
      'Complete project management'
    ],
    process: [
      {
        step: 1,
        title: 'Design Review',
        description: 'We review your kitchen plans and coordinate delivery and installation schedules.'
      },
      {
        step: 2,
        title: 'Preparation',
        description: 'Old kitchen removal, services preparation, and workspace setup.'
      },
      {
        step: 3,
        title: 'Installation',
        description: 'Professional fitting of units, worktops, and appliances for a perfect finish.'
      }
    ],
    faqs: [
      {
        question: 'How long does kitchen fitting take?',
        answer: 'Typical kitchen installations take 3-5 days depending on complexity. We provide a detailed timeline upfront.'
      },
      {
        question: 'Do you handle plumbing and electrics?',
        answer: 'Yes, we handle all plumbing and electrical connections (except gas). All work is certified where required.'
      },
      {
        question: 'Can you work with any kitchen supplier?',
        answer: 'Absolutely! We work with all major suppliers including B&Q, IKEA, Howdens, and bespoke manufacturers.'
      }
    ],
    gallery: [
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
      'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg'
    ],
    startingPrice: 'From £200/day'
  }
  // Add more services as needed...
};

export default function ServiceDetailPage({ params }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  
  const service = serviceData[params.slug];

  if (!service) {
    notFound();
  }

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

// Generate static params for known services
export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug,
  }));
}