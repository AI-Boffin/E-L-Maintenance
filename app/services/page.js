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
  ArrowRight,
  Star,
  Clock 
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 'painting-decorating',
      icon: Paintbrush2,
      title: 'Painting & Decorating',
      description: 'Transform your space with perfect paint lines and professional colour matching',
      details: [
        'Interior & exterior painting',
        'Wallpaper hanging & removal',
        'Feature walls & accent colors',
        'Woodwork finishing & staining',
        'Colour matching & consultation',
        'Stain blocking & preparation'
      ],
      startingPrice: 'From £25/hour',
      popular: true
    },
    {
      id: 'plastering',
      icon: Hammer,
      title: 'Plastering',
      description: 'Smooth walls and perfect finishes that stand the test of time',
      details: [
        'Skim coating & re-plastering',
        'Patch repairs & crack fixing',
        'Artex removal & smoothing',
        'New plasterboard installation',
        'Corner beads & archways'
      ],
      startingPrice: 'From £35/m²',
      popular: false
    },
    {
      id: 'kitchen-fitting',
      icon: ChefHat,
      title: 'Kitchen Fitting',
      description: 'Professional kitchen installations from flat-pack to luxury units',
      details: [
        'Flat-pack kitchen assembly',
        'Unit installation & alignment',
        'Worktop fitting & templating',
        'Appliance connections (non-gas)',
        'Sink installation & plumbing',
        'Sealant & finishing touches'
      ],
      startingPrice: 'From £200/day',
      popular: true
    },
    {
      id: 'tiling',
      icon: Layers3,
      title: 'Tiling',
      description: 'Precise cuts and perfect alignment for stunning tile work',
      details: [
        'Bathroom & wet room tiling',
        'Kitchen splashbacks',
        'Floor tiling & preparation',
        'Grout restoration & cleaning',
        'Silicone finishing & sealing'
      ],
      startingPrice: 'From £30/m²',
      popular: false
    },
    {
      id: 'laminate-flooring',
      icon: PaintBucket,
      title: 'Laminate Flooring',
      description: 'Durable flooring solutions with professional installation',
      details: [
        'Precise cutting & fitting',
        'Underlay preparation & leveling',
        'Threshold strips & transitions',
        'Skirting & quad beading',
        'Door trimming & adjustments'
      ],
      startingPrice: 'From £15/m²',
      popular: false
    },
    {
      id: 'vinyl-flooring',
      icon: Layers3,
      title: 'Vinyl Flooring',
      description: 'Water-resistant flooring perfect for any room',
      details: [
        'LVT installation & planning',
        'Sheet vinyl laying',
        'Wet room preparation',
        'Seamless joints & welding',
        'Subfloor preparation'
      ],
      startingPrice: 'From £12/m²',
      popular: false
    },
    {
      id: 'gardens',
      icon: TreePine,
      title: 'Gardens & Outdoor',
      description: 'Transform your outdoor space with professional landscaping',
      details: [
        'Fencing installation & repairs',
        'Decking construction & maintenance',
        'Garden tidy-ups & clearance',
        'Shed repairs & installations',
        'Pressure washing & cleaning'
      ],
      startingPrice: 'From £150/day',
      popular: false
    },
    {
      id: 'minor-plumbing',
      icon: Wrench,
      title: 'Minor Plumbing',
      description: 'Quick fixes for everyday plumbing problems',
      details: [
        'Tap installation & repairs',
        'Toilet repairs & replacements',
        'Leak detection & fixes',
        'Washbasin & sink swaps',
        'Trap cleaning & maintenance'
      ],
      startingPrice: 'From £50/callout',
      popular: false
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
    <main className="min-h-screen bg-brand-off-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-black via-brand-black to-brand-mid-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-off-white mb-6">
              Professional <span className="text-brand-red paint-stroke">Property Services</span>
            </h1>
            <p className="text-xl text-brand-mid-grey max-w-3xl mx-auto leading-relaxed mb-8">
              From painting perfect lines to fitting dream kitchens, we deliver the quality finishes Milton Keynes homeowners deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary group">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="tel:+441908000000" className="btn-secondary">
                Call: 01908 000000
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-black mb-6">
              Choose Your <span className="text-brand-red paint-stroke">Service</span>
            </h2>
            <p className="text-xl text-brand-mid-grey max-w-3xl mx-auto">
              Professional workmanship, fair pricing, and that perfect finish every time.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 card-hover h-full">
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-brand-red/10 rounded-xl p-3 group-hover:bg-brand-red/20 transition-colors duration-300">
                          <service.icon className="h-6 w-6 text-brand-red" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-brand-black group-hover:text-brand-red transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-sm text-brand-mid-grey">{service.startingPrice}</p>
                        </div>
                      </div>
                      {service.popular && (
                        <div className="bg-brand-red/10 text-brand-red text-xs font-bold px-2 py-1 rounded-full flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-current" />
                          <span>Popular</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-brand-mid-grey mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-2 mb-8">
                      {service.details.map((detail, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="h-1.5 w-1.5 bg-brand-red rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-brand-mid-grey">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/services/${service.id}`}
                        className="flex-1 text-center bg-brand-red/10 hover:bg-brand-red hover:text-white text-brand-red font-semibold py-3 px-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
                      >
                        Learn More
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 text-center bg-brand-red hover:bg-brand-black text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="bg-brand-black rounded-3xl p-8 lg:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-off-white mb-4">
                Not sure which service you need?
              </h3>
              <p className="text-brand-mid-grey mb-8 max-w-2xl mx-auto">
                No problem! Get in touch and we'll help you figure out the best approach for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center space-x-2 text-brand-mid-grey">
                  <Clock className="h-5 w-5 text-brand-red" />
                  <span>24-hour quote turnaround</span>
                </div>
                <Link href="/contact" className="btn-primary">
                  Get Your Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}