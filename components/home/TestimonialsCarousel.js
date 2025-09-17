'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export default function TestimonialsCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Bletchley, Milton Keynes',
      rating: 5,
      text: "Absolutely brilliant work from E&L! They painted our entire house interior and the finish is perfect. No mess, arrived on time every day, and the attention to detail is second to none. Would definitely recommend!",
      service: 'Painting & Decorating',
      date: '2024-12-15'
    },
    {
      id: 2,
      name: 'Mike Thompson',
      location: 'Wolverton, Milton Keynes',
      rating: 5,
      text: "Had E&L fit our new kitchen and we couldn't be happier. Professional from start to finish, fair pricing, and the quality of work is outstanding. Our kitchen looks amazing!",
      service: 'Kitchen Fitting',
      date: '2024-11-28'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      location: 'Newport Pagnell',
      rating: 5,
      text: "Quick response for a plastering job that other companies said would take weeks. E&L had it sorted in two days and you can't even tell where the damage was. Highly recommended!",
      service: 'Plastering',
      date: '2024-12-08'
    },
    {
      id: 4,
      name: 'David Richards',
      location: 'Stony Stratford',
      rating: 5,
      text: "Fantastic tiling work in our bathroom. Every tile perfectly aligned and the finish around the edges is superb. Clean, tidy workers who clearly take pride in their craft.",
      service: 'Tiling',
      date: '2024-11-20'
    },
    {
      id: 5,
      name: 'Lisa Parker',
      location: 'Milton Keynes Central',
      rating: 5,
      text: "E&L transformed our garden with beautiful new decking and fencing. The quality is excellent and they completed everything ahead of schedule. Great value for money too!",
      service: 'Gardens',
      date: '2024-12-01'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-brand-black" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-off-white mb-6">
            What Our <span className="text-brand-red paint-stroke">Customers Say</span>
          </h2>
          <p className="text-xl text-brand-mid-grey max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what homeowners across Milton Keynes think about our work.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                className="p-8 lg:p-12"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-8">
                  <Quote className="h-12 w-12 text-brand-red/20" />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg lg:text-xl text-brand-black text-center leading-relaxed mb-8 font-medium">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Customer Info */}
                <div className="text-center">
                  <div className="text-lg font-bold text-brand-black mb-1">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-brand-mid-grey text-sm mb-3">
                    {testimonials[currentTestimonial].location}
                  </div>
                  <div className="inline-flex items-center space-x-2">
                    <span className="bg-brand-red/10 text-brand-red text-xs font-semibold px-3 py-1 rounded-full">
                      {testimonials[currentTestimonial].service}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-brand-black" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-brand-black" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red ${
                  currentTestimonial === index
                    ? 'bg-brand-red scale-110'
                    : 'bg-brand-mid-grey/50 hover:bg-brand-mid-grey'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-brand-mid-grey hover:text-brand-off-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red rounded-lg px-3 py-1"
              aria-label={isAutoPlaying ? "Pause auto-play" : "Resume auto-play"}
            >
              {isAutoPlaying ? 'Auto-playing testimonials' : 'Auto-play paused'} • {currentTestimonial + 1} of {testimonials.length}
            </button>
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-4 bg-brand-off-white/5 border border-brand-mid-grey/20 rounded-full px-6 py-3">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="text-brand-off-white font-semibold">
              5.0 average rating from 50+ reviews
            </span>
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}