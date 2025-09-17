'use client';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import Link from 'next/link';

export default function ServiceAreas() {
  const serviceAreas = [
    { name: 'Milton Keynes', isMain: true },
    { name: 'Bletchley', isMain: false },
    { name: 'Wolverton', isMain: false },
    { name: 'Newport Pagnell', isMain: false },
    { name: 'Broughton', isMain: false },
    { name: 'Stony Stratford', isMain: false },
    { name: 'Woburn Sands', isMain: false },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-brand-red/5 via-brand-off-white to-white" aria-labelledby="service-areas-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 id="service-areas-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black mb-6">
            Proudly Serving <span className="text-brand-red paint-stroke">Milton Keynes</span>
          </h2>
          <p className="text-xl text-brand-mid-grey max-w-3xl mx-auto leading-relaxed">
            Local tradesmen you can trust. We cover Milton Keynes and surrounding areas with the same attention to detail and professional service.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Service Areas List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl font-bold text-brand-black mb-8 flex items-center">
              <MapPin className="h-6 w-6 text-brand-red mr-3" />
              Areas We Cover
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  variants={itemVariants}
                  className={`group ${area.isMain ? 'col-span-2 sm:col-span-3' : ''}`}
                >
                  <div className={`rounded-xl transition-all duration-300 hover:shadow-lg ${
                    area.isMain 
                      ? 'bg-brand-red text-brand-off-white p-6 hover:bg-brand-black' 
                      : 'bg-white border border-gray-200 p-4 hover:border-brand-red hover:shadow-md'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <Navigation className={`h-4 w-4 ${area.isMain ? 'text-brand-off-white' : 'text-brand-red'}`} />
                      <span className={`font-semibold ${
                        area.isMain 
                          ? 'text-lg' 
                          : 'text-brand-black group-hover:text-brand-red'
                      } transition-colors duration-300`}>
                        {area.name}
                      </span>
                    </div>
                    {area.isMain && (
                      <p className="mt-2 text-sm opacity-90">
                        Our home base - providing premium property maintenance services
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-brand-red/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h4 className="text-lg font-bold text-brand-black mb-3">
                Don't see your area?
              </h4>
              <p className="text-brand-mid-grey text-sm mb-4">
                We often work in surrounding areas too. Give us a call and we'll let you know if we can help!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+441908000000"
                  className="inline-flex items-center justify-center space-x-2 text-brand-red hover:text-brand-black font-semibold text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red rounded-lg px-4 py-2"
                >
                  <span>Call: 01908 000000</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 bg-brand-red/10 hover:bg-brand-red/20 text-brand-red font-semibold text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red rounded-lg px-4 py-2"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-brand-black to-brand-mid-grey rounded-2xl p-8 text-center aspect-square flex items-center justify-center shadow-2xl">
              <div className="space-y-4">
                <div className="w-20 h-20 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="h-10 w-10 text-brand-red" />
                </div>
                <h3 className="text-2xl font-bold text-brand-off-white">
                  Milton Keynes & Beyond
                </h3>
                <p className="text-brand-mid-grey max-w-sm">
                  Professional property maintenance services across Milton Keynes and surrounding areas. Local expertise you can trust.
                </p>
                <div className="grid grid-cols-3 gap-2 mt-6">
                  {[1,2,3,4,5,6].map((dot) => (
                    <motion.div
                      key={dot}
                      className="h-2 w-2 bg-brand-red/30 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: dot * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="bg-brand-black rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-off-white mb-4">
              Ready to get started?
            </h3>
            <p className="text-brand-mid-grey mb-8 max-w-2xl mx-auto">
              Whether you're in the heart of Milton Keynes or one of our surrounding service areas, 
              we're here to deliver those perfect finishes you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Free Quote Today
              </Link>
              <a href="tel:+441908000000" className="btn-secondary">
                Call Now: 01908 000000
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}