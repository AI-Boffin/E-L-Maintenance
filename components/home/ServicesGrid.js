'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Paintbrush2, 
  Hammer, 
  ChefHat, 
  Layers3, 
  PaintBucket, 
  TreePine, 
  Wrench, 
  ArrowRight 
} from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      id: 'painting-decorating',
      icon: Paintbrush2,
      title: 'Painting & Decorating',
      description: 'Transform your space with perfect paint lines and colour matching',
      features: ['Interior & exterior painting', 'Wallpaper hanging', 'Feature walls', 'Woodwork finishing'],
      startingPrice: 'From £25/hr',
      color: 'from-blue-500/10 to-blue-600/5'
    },
    {
      id: 'plastering',
      icon: Hammer,
      title: 'Plastering',
      description: 'Smooth walls and perfect finishes that stand the test of time',
      features: ['Skim coating', 'Patch repairs', 'Artex removal', 'New plasterboard'],
      startingPrice: 'From £35/m²',
      color: 'from-green-500/10 to-green-600/5'
    },
    {
      id: 'kitchen-fitting',
      icon: ChefHat,
      title: 'Kitchen Fitting',
      description: 'Professional kitchen installations from flat-pack to luxury',
      features: ['Unit installation', 'Worktop fitting', 'Appliance connections', 'Plumbing & electrics'],
      startingPrice: 'From £200/day',
      color: 'from-purple-500/10 to-purple-600/5'
    },
    {
      id: 'tiling',
      icon: Layers3,
      title: 'Tiling',
      description: 'Precise cuts and perfect alignment for stunning tile work',
      features: ['Bathroom tiling', 'Kitchen splashbacks', 'Floor tiling', 'Grout restoration'],
      startingPrice: 'From £30/m²',
      color: 'from-orange-500/10 to-orange-600/5'
    },
    {
      id: 'laminate-flooring',
      icon: PaintBucket,
      title: 'Laminate Flooring',
      description: 'Durable flooring solutions with professional installation',
      features: ['Underlay preparation', 'Precision cutting', 'Skirting boards', 'Threshold strips'],
      startingPrice: 'From £15/m²',
      color: 'from-teal-500/10 to-teal-600/5'
    },
    {
      id: 'vinyl-flooring',
      icon: Layers3,
      title: 'Vinyl Flooring',
      description: 'Water-resistant flooring perfect for any room in your home',
      features: ['LVT installation', 'Sheet vinyl laying', 'Wet room preparation', 'Seamless joints'],
      startingPrice: 'From £12/m²',
      color: 'from-cyan-500/10 to-cyan-600/5'
    },
    {
      id: 'gardens',
      icon: TreePine,
      title: 'Gardens',
      description: 'Transform your outdoor space with professional landscaping',
      features: ['Fencing installation', 'Decking construction', 'Garden tidy-ups', 'Pressure washing'],
      startingPrice: 'From £150/day',
      color: 'from-emerald-500/10 to-emerald-600/5'
    },
    {
      id: 'minor-plumbing',
      icon: Wrench,
      title: 'Minor Plumbing',
      description: 'Quick fixes for everyday plumbing problems',
      features: ['Tap installation', 'Toilet repairs', 'Leak fixes', 'Sink replacements'],
      startingPrice: 'From £50/call',
      color: 'from-indigo-500/10 to-indigo-600/5'
    },
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
    <section className="py-20 bg-brand-off-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black mb-6">
            Our <span className="text-brand-red paint-stroke">Expert Services</span>
          </h2>
          <p className="text-xl text-brand-mid-grey max-w-3xl mx-auto leading-relaxed">
            From quick fixes to complete transformations, we deliver professional results with that perfect finish you deserve.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group"
            >
              <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover border border-gray-100`}>
                <div className={`bg-gradient-to-br ${service.color} p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 group-hover:bg-white transition-colors duration-300">
                      <service.icon className="h-6 w-6 text-brand-red" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold text-brand-red bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        {service.startingPrice}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-black mb-2 group-hover:text-brand-red transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-brand-mid-grey text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="h-1.5 w-1.5 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-brand-mid-grey">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center space-x-2 text-brand-red hover:text-brand-black font-semibold text-sm transition-colors duration-200 group/link focus:outline-none focus:ring-2 focus:ring-brand-red rounded-lg px-2 py-1"
                    aria-label={`Get a quote for ${service.title}`}
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link href="/services" className="btn-primary group">
            View All Services
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}