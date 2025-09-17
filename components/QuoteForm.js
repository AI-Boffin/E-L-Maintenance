'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function QuoteForm({ isOpen, onClose, selectedService = '' }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      service: selectedService
    }
  });

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
          type: 'quote',
          timestamp: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setShowConfetti(true);
        reset();
        setTimeout(() => {
          setShowConfetti(false);
          onClose();
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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal */}
        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-red to-brand-black p-6 text-white">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Get Your Free Quote</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Close form"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <p className="mt-2 opacity-90">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
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
                  rows={4}
                  {...register('message', { 
                    required: 'Please describe your project',
                    minLength: {
                      value: 10,
                      message: 'Please provide more details (minimum 10 characters)'
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project... What rooms, approximate size, when you'd like to start, etc."
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Photo Upload Placeholder */}
              <div>
                <label className="block text-sm font-semibold text-brand-black mb-2">
                  Photos (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-brand-red transition-colors duration-200">
                  <Upload className="h-8 w-8 text-brand-mid-grey mx-auto mb-2" />
                  <p className="text-sm text-brand-mid-grey">
                    Drag & drop photos here or click to upload
                  </p>
                  <p className="text-xs text-brand-mid-grey mt-1">
                    Photos help us provide more accurate quotes
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    className="hidden"
                    {...register('photos')}
                  />
                </div>
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
                    <p className="text-green-800 font-semibold">Quote request sent!</p>
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
                {isSubmitting ? 'Sending...' : 'Send My Quote Request'}
              </button>

              <p className="text-xs text-brand-mid-grey text-center">
                By submitting this form, you agree to be contacted about your enquiry. 
                We'll never spam you or share your details.
              </p>
            </form>

            {/* Confetti Animation */}
            {showConfetti && (
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
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
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}