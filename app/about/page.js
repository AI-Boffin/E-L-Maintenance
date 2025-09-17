'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Star, 
  Shield, 
  Award, 
  Clock, 
  Users, 
  CheckCircle,
  MapPin,
  Phone,
  ArrowRight
} from 'lucide-react';

export default function AboutPage() {
  const qualifications = [
    {
      title: 'Public Liability Insurance',
      description: '£2M coverage for complete peace of mind',
      icon: Shield
    },
    {
      title: 'DBS Checked',
      description: 'All team members are security vetted',
      icon: Award
    },
    {
      title: 'Checkatrade Approved',
      description: 'Verified reviews and quality assured',
      icon: Star
    },
    {
      title: 'Local Expertise',
      description: '3+ years serving Milton Keynes',
      icon: MapPin
    }
  ];

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on the quality of our work. Every job is completed to the highest standard, no matter how big or small.',
      icon: Star
    },
    {
      title: 'Reliable Service',
      description: 'When we say we\'ll be there, we will be. On time, prepared, and ready to deliver exactly what we promised.',
      icon: Clock
    },
    {
      title: 'Fair Pricing',
      description: 'Transparent, competitive pricing with no hidden costs. You\'ll know exactly what you\'re paying for before we start.',
      icon: CheckCircle
    },
    {
      title: 'Personal Touch',
      description: 'We treat every home like our own. Respectful, tidy, and always going the extra mile to exceed expectations.',
      icon: Users
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '3+', label: 'Years Experience' },
    { number: '7', label: 'Service Areas' },
    { number: '100%', label: 'Satisfaction Rate' }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-brand-black via-brand-black to-brand-mid-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-off-white mb-6">
              Meet the Team Behind Your <span className="text-brand-red paint-stroke">Perfect Finishes</span>
            </h1>
            <p className="text-xl text-brand-mid-grey max-w-3xl mx-auto leading-relaxed">
              Local tradesmen with a passion for quality. Discover the story behind E&L Property Maintenance and why Milton Keynes homeowners trust us with their homes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Team Photo */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
                  alt="E&L Property Maintenance team"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">E&L Team</h3>
                  <p className="text-white/90">Professional tradesmen you can trust</p>
                </div>
              </div>
            </motion.div>

            {/* Story */}
            <motion.div
              className="space-y-6 text-brand-off-white"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold">
                Our <span className="text-brand-red">Story</span>
              </h2>
              <div className="space-y-4 text-brand-mid-grey leading-relaxed">
                <p>
                  E&L Property Maintenance was born from a simple belief: every home deserves quality workmanship and honest service. Based in the heart of Milton Keynes, we've built our reputation one perfectly painted wall and flawlessly fitted kitchen at a time.
                </p>
                <p>
                  What started as a mission to bring professional property maintenance to local homeowners has grown into a trusted name across Milton Keynes and surrounding areas. We're not just tradesmen – we're your neighbors, and we take pride in making our community's homes beautiful.
                </p>
                <p>
                  Every project, from a simple touch-up to a complete home transformation, receives the same attention to detail and commitment to excellence that has earned us 5-star reviews and loyal customers throughout Milton Keynes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 text-sm lg:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-brand-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-6">
              What We <span className="text-brand-red paint-stroke">Stand For</span>
            </h2>
            <p className="text-xl text-brand-mid-grey max-w-3xl mx-auto">
              Our values drive everything we do, from the first quote to the final cleanup.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="bg-brand-red/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">
                  {value.title}
                </h3>
                <p className="text-brand-mid-grey text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-6">
              <span className="text-brand-red paint-stroke">Qualified</span> & Insured
            </h2>
            <p className="text-xl text-brand-mid-grey max-w-3xl mx-auto">
              Your peace of mind is our priority. We're fully qualified, insured, and approved by the organizations that matter.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="bg-brand-red/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <qual.icon className="h-10 w-10 text-brand-red" />
                </div>
                <h3 className="text-lg font-bold text-brand-black mb-3">
                  {qual.title}
                </h3>
                <p className="text-brand-mid-grey text-sm">
                  {qual.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Badges Row */}
          <motion.div
            className="mt-16 pt-16 border-t border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-gray-100 rounded-lg px-6 py-4 text-center">
                <div className="text-brand-black font-semibold text-sm">Checkatrade</div>
                <div className="text-brand-mid-grey text-xs">Approved Trader</div>
              </div>
              <div className="bg-gray-100 rounded-lg px-6 py-4 text-center">
                <div className="text-brand-black font-semibold text-sm">MyBuilder</div>
                <div className="text-brand-mid-grey text-xs">Verified Professional</div>
              </div>
              <div className="bg-gray-100 rounded-lg px-6 py-4 text-center">
                <div className="text-brand-black font-semibold text-sm">Which?</div>
                <div className="text-brand-mid-grey text-xs">Trusted Trader</div>
              </div>
              <div className="bg-gray-100 rounded-lg px-6 py-4 text-center">
                <div className="text-brand-black font-semibold text-sm">£2M</div>
                <div className="text-brand-mid-grey text-xs">Public Liability</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="py-20 bg-gradient-to-br from-brand-red/5 via-brand-off-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-black">
                The <span className="text-brand-red paint-stroke">Personal Touch</span>
              </h2>
              <div className="space-y-4 text-brand-mid-grey leading-relaxed">
                <p>
                  "We're not just another property maintenance company. We're part of the Milton Keynes community, and we genuinely care about making your home the best it can be."
                </p>
                <p>
                  Every morning, we wake up excited about the transformations we'll create. Whether it's giving tired walls a fresh lease of life or fitting a dream kitchen, we approach each project with enthusiasm and attention to detail that shows.
                </p>
                <p>
                  We make wobbly shelves behave, give walls the glow-up they deserve, and ensure every line is straight and every finish is sharp. Because in our book, 'good enough' simply isn't good enough.
                </p>
              </div>
              <div className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-lg">
                <div className="bg-brand-red/10 rounded-full p-3">
                  <Phone className="h-6 w-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-black mb-2">Always Available</h4>
                  <p className="text-brand-mid-grey text-sm">
                    Have a question about your project? We're just a phone call away. Personal service means being there when you need us.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="space-y-4">
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg"
                    alt="Quality workmanship detail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[3/2] relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg"
                    alt="Professional finishing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[3/2] relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg"
                    alt="Kitchen installation expertise"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg"
                    alt="Attention to detail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
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
              Ready to Experience the E&L Difference?
            </h2>
            <p className="text-xl text-brand-mid-grey mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied homeowners across Milton Keynes. Let's make your property the envy of the neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary group">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="tel:+441908000000" className="btn-secondary">
                Call: 01908 000000
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}