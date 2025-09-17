'use client';
import { motion } from 'framer-motion';
import { Shield, Award, Clock, MapPin, Star, Users } from 'lucide-react';

export default function TrustSignals() {
  const signals = [
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Comprehensive public liability insurance for complete peace of mind',
      badge: 'Protected'
    },
    {
      icon: Award,
      title: 'DBS Checked',
      description: 'All team members are DBS checked for your security and trust',
      badge: 'Verified'
    },
    {
      icon: Clock,
      title: '24hr Quotes',
      description: 'Fast response times with detailed quotes within 24 hours',
      badge: 'Quick'
    },
    {
      icon: MapPin,
      title: 'Local to MK',
      description: 'Based in Milton Keynes, serving the local community with pride',
      badge: 'Local'
    },
    {
      icon: Star,
      title: '5-Star Rated',
      description: 'Consistently rated 5 stars by satisfied customers across Milton Keynes',
      badge: 'Excellent'
    },
    {
      icon: Users,
      title: '12-Month Guarantee',
      description: 'All workmanship guaranteed for 12 months for total confidence',
      badge: 'Guaranteed'
    }
  ];

  const stats = [
    { number: '500+', label: 'Jobs Completed' },
    { number: '5', label: 'Star Average Rating' },
    { number: '100%', label: 'Customer Satisfaction' },
    { number: '3', label: 'Years Experience' }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-brand-off-white via-white to-brand-off-white" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 id="trust-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black mb-6">
            Why <span className="text-brand-red paint-stroke">Trust E&L</span>?
          </h2>
          <p className="text-xl text-brand-mid-grey max-w-3xl mx-auto leading-relaxed">
            Professional, reliable, and trusted by homeowners across Milton Keynes. Here's what sets us apart.
          </p>
        </motion.div>

        {/* Trust Signals Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 card-hover">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-red/10 rounded-xl p-3 group-hover:bg-brand-red/20 transition-colors duration-300">
                    <signal.icon className="h-6 w-6 text-brand-red" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-lg font-bold text-brand-black group-hover:text-brand-red transition-colors duration-300">
                        {signal.title}
                      </h3>
                      <span className="bg-brand-red/10 text-brand-red text-xs font-semibold px-2 py-1 rounded-full">
                        {signal.badge}
                      </span>
                    </div>
                    <p className="text-brand-mid-grey text-sm leading-relaxed">
                      {signal.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-brand-black rounded-3xl p-8 lg:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-off-white mb-4">
              Trusted by Milton Keynes Homeowners
            </h3>
            <p className="text-brand-mid-grey max-w-2xl mx-auto">
              Our reputation speaks for itself. Here are the numbers that matter.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-red mb-2">
                  {stat.number}
                </div>
                <div className="text-brand-mid-grey text-sm lg:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-12 pt-8 border-t border-brand-mid-grey/20">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-brand-off-white text-sm font-medium bg-white/10 rounded-lg px-4 py-2">
                Checkatrade Approved
              </div>
              <div className="text-brand-off-white text-sm font-medium bg-white/10 rounded-lg px-4 py-2">
                MyBuilder Verified
              </div>
              <div className="text-brand-off-white text-sm font-medium bg-white/10 rounded-lg px-4 py-2">
                Public Liability Insurance
              </div>
              <div className="text-brand-off-white text-sm font-medium bg-white/10 rounded-lg px-4 py-2">
                DBS Checked Team
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}