'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function BeforeAfterGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const gallery = [
    {
      id: 1,
      title: 'Kitchen Transformation',
      before: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
      after: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
      description: 'Complete kitchen renovation with new units and worktops',
      category: 'Kitchen Fitting'
    },
    {
      id: 2, 
      title: 'Living Room Makeover',
      before: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      after: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      description: 'Fresh paint and feature wall installation',
      category: 'Painting & Decorating'
    },
    {
      id: 3,
      title: 'Bathroom Renovation',
      before: 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg',
      after: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg',
      description: 'Professional tiling and plumbing installation',
      category: 'Tiling'
    },
    {
      id: 4,
      title: 'Garden Decking',
      before: 'https://images.pexels.com/photos/1029615/pexels-photo-1029615.jpeg',
      after: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      description: 'Custom decking installation with modern design',
      category: 'Gardens'
    },
    {
      id: 5,
      title: 'Bedroom Refresh',
      before: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
      after: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg',
      description: 'Complete bedroom decoration with plastering',
      category: 'Painting & Decorating'
    },
    {
      id: 6,
      title: 'Flooring Installation',
      before: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg',
      after: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      description: 'Luxury vinyl flooring throughout ground floor',
      category: 'Vinyl Flooring'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % gallery.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  return (
    <section className="py-20 bg-brand-black" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 id="gallery-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-off-white mb-6">
            See Our <span className="text-brand-red paint-stroke">Perfect Finishes</span>
          </h2>
          <p className="text-xl text-brand-mid-grey max-w-3xl mx-auto leading-relaxed">
            Straight lines. Sharp edges. Satisfying finishes. See how we transform spaces across Milton Keynes.
          </p>
        </motion.div>

        {/* Featured Before/After Slider */}
        <motion.div
          className="relative max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              {/* Before Image */}
              <div className="relative group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={gallery[currentSlide].before}
                    alt={`Before - ${gallery[currentSlide].title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute top-4 left-4 bg-brand-red/90 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-full">
                    BEFORE
                  </div>
                </div>
              </div>

              {/* After Image */}
              <div className="relative group">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={gallery[currentSlide].after}
                    alt={`After - ${gallery[currentSlide].title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute top-4 left-4 bg-green-500/90 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-full">
                    AFTER
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 bg-gradient-to-r from-brand-off-white to-white">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-brand-black mb-2">
                    {gallery[currentSlide].title}
                  </h3>
                  <p className="text-brand-mid-grey mb-2">
                    {gallery[currentSlide].description}
                  </p>
                  <div className="inline-flex items-center space-x-2 text-sm">
                    <span className="bg-brand-red/10 text-brand-red px-2 py-1 rounded-full font-medium">
                      {gallery[currentSlide].category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                  <span className="text-sm text-brand-mid-grey">
                    {currentSlide + 1} of {gallery.length}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={prevSlide}
                      className="p-2 bg-brand-red/10 hover:bg-brand-red/20 text-brand-red rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
                      aria-label="Previous project"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2 bg-brand-red/10 hover:bg-brand-red/20 text-brand-red rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
                      aria-label="Next project"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Thumbnail Gallery */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {gallery.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentSlide(index)}
              className={`relative aspect-square rounded-xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-brand-red ${
                currentSlide === index ? 'ring-2 ring-brand-red' : ''
              }`}
              aria-label={`View ${item.title} project`}
            >
              <Image
                src={item.after}
                alt={item.title}
                fill
                className="object-cover transition-all duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className={`absolute inset-0 transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-brand-red/20' 
                  : 'bg-black/30 group-hover:bg-black/20'
              }`} />
              {currentSlide === index && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-white" />
                </div>
              )}
            </button>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="inline-block">
            <p className="text-brand-mid-grey mb-6 text-lg">
              Ready for your own transformation?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/gallery"
                className="btn-secondary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Full Gallery
                <Eye className="ml-2 h-5 w-5" />
              </motion.a>
              <motion.a
                href="/contact"
                className="btn-primary group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Your Free Quote
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}