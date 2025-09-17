'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Filter, Eye, ArrowLeft, ArrowRight } from 'lucide-react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);

  const categories = [
    { id: 'all', label: 'All Work', count: 24 },
    { id: 'painting', label: 'Painting & Decorating', count: 8 },
    { id: 'kitchen', label: 'Kitchen Fitting', count: 6 },
    { id: 'plastering', label: 'Plastering', count: 4 },
    { id: 'tiling', label: 'Tiling', count: 6 }
  ];

  const gallery = [
    {
      id: 1,
      title: 'Modern Kitchen Installation',
      category: 'kitchen',
      image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
      beforeImage: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
      description: 'Complete kitchen renovation with modern units and quartz worktops',
      location: 'Milton Keynes'
    },
    {
      id: 2,
      title: 'Living Room Feature Wall',
      category: 'painting',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      beforeImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      description: 'Bold feature wall with complementary ceiling work',
      location: 'Bletchley'
    },
    {
      id: 3,
      title: 'Bathroom Tiling Project',
      category: 'tiling',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg',
      beforeImage: 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg',
      description: 'Luxury bathroom with large format tiles and mosaic details',
      location: 'Newport Pagnell'
    },
    {
      id: 4,
      title: 'Bedroom Makeover',
      category: 'painting',
      image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg',
      beforeImage: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
      description: 'Complete bedroom transformation with custom color scheme',
      location: 'Wolverton'
    },
    {
      id: 5,
      title: 'Kitchen Splashback',
      category: 'tiling',
      image: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
      beforeImage: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
      description: 'Geometric tile pattern kitchen splashback',
      location: 'Stony Stratford'
    },
    {
      id: 6,
      title: 'Wall Restoration',
      category: 'plastering',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
      beforeImage: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg',
      description: 'Damaged wall restoration with smooth finish',
      location: 'Milton Keynes'
    },
    {
      id: 7,
      title: 'Hallway Refresh',
      category: 'painting',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      beforeImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      description: 'Bright and welcoming hallway renovation',
      location: 'Broughton'
    },
    {
      id: 8,
      title: 'Contemporary Kitchen',
      category: 'kitchen',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg',
      beforeImage: 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg',
      description: 'Sleek contemporary kitchen with integrated appliances',
      location: 'Woburn Sands'
    }
  ];

  const filteredGallery = selectedCategory === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === selectedCategory);

  const openLightbox = (image, index) => {
    setLightboxImage({ ...image, index });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const nextImage = () => {
    const currentIndex = lightboxImage.index;
    const nextIndex = (currentIndex + 1) % filteredGallery.length;
    setLightboxImage({ ...filteredGallery[nextIndex], index: nextIndex });
  };

  const prevImage = () => {
    const currentIndex = lightboxImage.index;
    const prevIndex = (currentIndex - 1 + filteredGallery.length) % filteredGallery.length;
    setLightboxImage({ ...filteredGallery[prevIndex], index: prevIndex });
  };

  return (
    <main className="min-h-screen bg-brand-off-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-brand-black via-brand-black to-brand-mid-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-off-white mb-6">
              Our <span className="text-brand-red paint-stroke">Perfect Finishes</span>
            </h1>
            <p className="text-xl text-brand-mid-grey max-w-3xl mx-auto leading-relaxed">
              See the quality and attention to detail that makes E&L Property Maintenance Milton Keynes' trusted choice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="h-5 w-5 text-brand-mid-grey" />
              <span className="text-brand-black font-semibold">Filter by:</span>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red ${
                    selectedCategory === category.id
                      ? 'bg-brand-red text-white'
                      : 'bg-gray-100 text-brand-black hover:bg-brand-red/10 hover:text-brand-red'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red ${
                  showBeforeAfter
                    ? 'bg-brand-red text-white'
                    : 'bg-gray-100 text-brand-black hover:bg-brand-red/10 hover:text-brand-red'
                }`}
              >
                {showBeforeAfter ? 'Show After' : 'Show Before/After'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredGallery.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(item, index)}
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                    <Image
                      src={showBeforeAfter ? (item.beforeImage || item.image) : item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h3 className="text-white font-semibold text-sm mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-xs">
                        {item.location}
                      </p>
                    </div>
                    {showBeforeAfter && item.beforeImage && (
                      <div className="absolute top-2 left-2 bg-brand-red/90 text-white text-xs font-bold px-2 py-1 rounded">
                        BEFORE
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-20">
              <p className="text-brand-mid-grey text-lg">
                No projects found for this category.
              </p>
            </div>
          )}
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
              Ready for Your Own Transformation?
            </h2>
            <p className="text-xl text-brand-mid-grey mb-8 max-w-3xl mx-auto">
              Join our satisfied customers across Milton Keynes and experience the E&L difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Get Your Free Quote
              </a>
              <a href="tel:+441908000000" className="btn-secondary">
                Call: 01908 000000
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-full"
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Close gallery"
              >
                <X className="h-6 w-6" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Previous image"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Next image"
              >
                <ArrowRight className="h-6 w-6" />
              </button>

              <div className="relative">
                <Image
                  src={lightboxImage.image}
                  alt={lightboxImage.title}
                  width={800}
                  height={600}
                  className="rounded-2xl max-w-full max-h-[80vh] object-contain"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-2xl">
                  <h3 className="text-white font-bold text-xl mb-2">
                    {lightboxImage.title}
                  </h3>
                  <p className="text-white/90 mb-2">
                    {lightboxImage.description}
                  </p>
                  <p className="text-white/70 text-sm">
                    {lightboxImage.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}