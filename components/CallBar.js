'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, FileText, X } from 'lucide-react';
import Link from 'next/link';

export default function CallBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-brand-black/95 backdrop-blur-sm border border-brand-mid-grey/20 rounded-2xl shadow-xl">
            {isExpanded ? (
              // Expanded view
              <motion.div
                className="p-4 space-y-3"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 'auto', opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-brand-off-white font-semibold text-sm">
                    Quick Actions
                  </span>
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-brand-mid-grey hover:text-brand-red transition-colors duration-200 p-1"
                    aria-label="Close quick actions"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href="tel:+441908000000"
                    className="flex flex-col items-center space-y-1 p-3 bg-brand-red/10 hover:bg-brand-red/20 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
                    aria-label="Call us now"
                  >
                    <Phone className="h-5 w-5 text-brand-red" />
                    <span className="text-xs text-brand-off-white font-medium">Call</span>
                  </a>
                  
                  <a
                    href="https://wa.me/441908000000"
                    className="flex flex-col items-center space-y-1 p-3 bg-brand-red/10 hover:bg-brand-red/20 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
                    aria-label="WhatsApp us"
                  >
                    <MessageCircle className="h-5 w-5 text-brand-red" />
                    <span className="text-xs text-brand-off-white font-medium">WhatsApp</span>
                  </a>
                  
                  <Link
                    href="/contact"
                    className="flex flex-col items-center space-y-1 p-3 bg-brand-red/10 hover:bg-brand-red/20 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
                    aria-label="Get a quote"
                  >
                    <FileText className="h-5 w-5 text-brand-red" />
                    <span className="text-xs text-brand-off-white font-medium">Quote</span>
                  </Link>
                </div>
              </motion.div>
            ) : (
              // Collapsed view
              <motion.button
                onClick={() => setIsExpanded(true)}
                className="flex items-center space-x-3 px-6 py-3 text-brand-off-white font-semibold hover:bg-brand-red/10 rounded-2xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
                whileTap={{ scale: 0.95 }}
                aria-label="Open quick actions"
              >
                <Phone className="h-5 w-5 text-brand-red" />
                <span>Call • WhatsApp • Quote</span>
              </motion.button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}