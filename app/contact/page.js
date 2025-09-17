'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const services = [
    'Painting & Decorating',
    'Plastering',
    'Kitchen Fitting',
    'Tiling',
    'Laminate Flooring',
    'Vinyl Flooring',
    'Gardens & Outdoor',
    'Minor Plumbing',
    'Other'
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      content: '01908 000000',
      description: 'Call us for immediate assistance',
      href: 'tel:+441908000000',
      available: 'Mon-Sat 08:00-18:00'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '01908 000000',
      description: 'Quick messages and photo sharing',
      href: 'https://wa.me/441908000000',
      available: 'Usually reply within 1 hour'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@elandlmaintenance.co.uk',
      description: 'Detailed enquiries and quotes',
      href: 'mailto:hello@elandlmaintenance.co.uk',
      available: 'Reply within 24 hours'
    }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          type: 'contact',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setShowConfetti(true);
        reset();
        setTimeout(() => {
          setShowConfetti(false);
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-brand-off-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-black via-brand-black to-brand-mid-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-off-white mb-6">
              Let's Make Your <span className="text-brand-red paint-stroke">Vision Reality</span>
            </h1>
            <p className="text-xl text-brand-mid-grey max-w-3xl mx-auto leading-relaxed mb-8">
              Ready for those perfect finishes? Get in touch for your free, no-obligation quote. We respond to all enquiries within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+441908000000" className="btn-primary">
                Call Now: 01908 000000
              </a>
              <a href="#contact-form" className="btn-secondary">
                Get Free Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-6">
              <span className="text-brand-red paint-stroke">Multiple Ways</span> to Reach Us
            </h2>
            <p className="text-xl text-brand-mid-grey max-w-3xl mx-auto">
              Choose the method that works best for you. We're here to help, however you prefer to get in touch.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center block focus:outline-none focus:ring-2 focus:ring-brand-red"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="bg-brand-red/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-red/20 transition-colors duration-300">
                  <method.icon className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-2 group-hover:text-brand-red transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-lg font-semibold text-brand-black mb-2">
                  {method.content}
                </p>
                <p className="text-brand-mid-grey text-sm mb-3">
                  {method.description}
                </p>
                <p className="text-xs text-brand-mid-grey bg-brand-red/5 rounded-full px-3 py-1 inline-block">
                  {method.available}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              id="contact-form"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative overflow-hidden">
                <h2 className="text-2xl font-bold text-brand-black mb-6">
                  Get Your Free Quote
                </h2>
                <p className="text-brand-mid-grey mb-8">
                  Tell us about your project and we'll provide a detailed, no-obligation quote within 24 hours.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-brand-black mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-brand-black mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone and Postcode */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-brand-black mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        {...register('phone', { 
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[0-9\s\-\+\(\)]{10,}$/,
                            message: 'Invalid phone number'
                          }
                        })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-200"
                        placeholder="01908 000000"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="postcode" className="block text-sm font-semibold text-brand-black mb-2">
                        Postcode *
                      </label>
                      <input
                        type="text"
                        id="postcode"
                        {...register('postcode', { 
                          required: 'Postcode is required',
                          pattern: {
                            value: /^[A-Z]{1,2}[0-9R][0-9A-Z]? [0-9][A-Z]{2}$/i,
                            message: 'Please enter a valid UK postcode'
                          }
                        })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-200"
                        placeholder="MK1 1AA"
                      />
                      {errors.postcode && (
                        <p className="text-red-500 text-xs mt-1">{errors.postcode.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-brand-black mb-2">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      {...register('service', { required: 'Please select a service' })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-brand-black mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register('message', { 
                        required: 'Please describe your project',
                        minLength: {
                          value: 10,
                          message: 'Please provide more details (minimum 10 characters)'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project... What rooms need work, approximate size, when you'd like to start, any specific requirements, etc."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Honeypot */}
                  <input
                    type="text"
                    {...register('honeypot')}
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  {/* Submit Status */}
                  {submitStatus === 'success' && (
                    <motion.div
                      className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center space-x-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="text-green-800 font-semibold">Message sent successfully!</p>
                        <p className="text-green-700 text-sm">We'll get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center space-x-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      <div>
                        <p className="text-red-800 font-semibold">Something went wrong</p>
                        <p className="text-red-700 text-sm">Please try again or call us directly.</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-red hover:bg-brand-black text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send My Enquiry'}
                  </button>

                  <p className="text-xs text-brand-mid-grey text-center">
                    By submitting this form, you agree to be contacted about your enquiry. 
                    We'll never spam you or share your details.
                  </p>
                </form>

                {/* Confetti Animation */}
                {showConfetti && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(30)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-brand-red"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        initial={{ scale: 0, rotate: 0 }}
                        animate={{
                          scale: [0, 1, 0],
                          rotate: [0, 180, 360],
                          y: [-20, -100],
                        }}
                        transition={{
                          duration: 2,
                          ease: 'easeOut',
                          delay: Math.random() * 0.5,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Quick Contact */}
              <div className="bg-brand-black rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-brand-red mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:+441908000000"
                        className="text-brand-red hover:text-white transition-colors duration-200"
                      >
                        01908 000000
                      </a>
                      <p className="text-brand-mid-grey text-sm mt-1">Mon-Sat 08:00-18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-brand-red mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:hello@elandlmaintenance.co.uk"
                        className="text-brand-red hover:text-white transition-colors duration-200 break-all"
                      >
                        hello@elandlmaintenance.co.uk
                      </a>
                      <p className="text-brand-mid-grey text-sm mt-1">24-hour response</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-brand-red mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <div className="text-brand-mid-grey text-sm space-y-1 mt-1">
                        <p>Monday - Saturday: 08:00 - 18:00</p>
                        <p>Sunday: Emergency callouts only</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-brand-red mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Service Areas</p>
                      <div className="text-brand-mid-grey text-sm mt-1">
                        <p>Milton Keynes & surrounding areas including Bletchley, Wolverton, Newport Pagnell, Broughton, Stony Stratford, and Woburn Sands</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-brand-mid-grey to-brand-black flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="h-12 w-12 text-brand-red mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">Serving Milton Keynes</h4>
                    <p className="text-brand-mid-grey">
                      Local property maintenance specialists
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="bg-brand-red/10 border border-brand-red/20 rounded-2xl p-6">
                <h4 className="font-bold text-brand-black mb-3 flex items-center">
                  <Clock className="h-5 w-5 text-brand-red mr-2" />
                  Emergency Repairs
                </h4>
                <p className="text-brand-mid-grey text-sm leading-relaxed">
                  For urgent repairs that can't wait (burst pipes, electrical issues, security problems), 
                  call us any time. We have emergency call-out services available 24/7.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}