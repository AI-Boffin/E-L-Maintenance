'use client';
import { motion } from 'framer-motion';

export default function Logo({ className = '' }) {
  return (
    <div className={`flex items-center ${className}`}>
      <motion.div
        className="text-2xl font-bold tracking-tight"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <span className="text-brand-red paint-stroke">E&L</span>
        <div className="text-xs font-medium text-brand-mid-grey tracking-widest uppercase mt-1">
          Property Maintenance
        </div>
      </motion.div>
    </div>
  );
}