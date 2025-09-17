'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-transparent to-brand-black/50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-red/5 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-brand-red/3 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-brand-red/10 border border-brand-red/20 rounded-full px-4 py-2 text-sm font-medium text-brand-red"
          >
            <Shield className="h-4 w-4" />
            <span>Fully Insured & DBS Checked</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-brand-off-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="block">E&L Property</span>
            <span className="block paint-stroke">Maintenance</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl text-brand-mid-grey font-normal mt-4">
              Milton Keynes
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-brand-mid-grey max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <span className="text-brand-off-white font-semibold">Smart fixes. Sharp finishes.</span>
            <br />
            From perfect paint lines to flawless tiling—done right, first time.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-6 text-sm text-brand-mid-grey"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span>5-star rated</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-brand-red" />
              <span>24hr quotes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-brand-red" />
              <span>Local to Milton Keynes</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Link href="/contact" className="btn-primary group">
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="tel:+441908000000" className="btn-secondary">
              Call Now: 01908 000000
            </a>
          </motion.div>

          {/* Floating micro-interaction */}
          <motion.div
            className="absolute top-1/2 left-8 hidden lg:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          >
            <div className="text-xs text-brand-mid-grey bg-brand-black/50 backdrop-blur-sm border border-brand-red/20 rounded-lg px-3 py-2">
              Walls need a glow-up? 🎨
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 right-8 hidden lg:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1.5 }}
          >
            <div className="text-xs text-brand-mid-grey bg-brand-black/50 backdrop-blur-sm border border-brand-red/20 rounded-lg px-3 py-2">
              We make wobbly shelves behave 🔧
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-brand-red/50 rounded-full flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-brand-red rounded-full mt-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}