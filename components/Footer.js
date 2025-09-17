import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const services = [
    'Painting & Decorating',
    'Plastering', 
    'Kitchen Fitting',
    'Tiling',
    'Laminate Flooring',
    'Vinyl Flooring',
    'Gardens',
    'Minor Plumbing'
  ];

  const serviceAreas = [
    'Milton Keynes',
    'Bletchley',
    'Wolverton',
    'Newport Pagnell',
    'Broughton',
    'Stony Stratford',
    'Woburn Sands'
  ];

  return (
    <footer className="bg-brand-black text-brand-off-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Logo />
            <p className="text-brand-mid-grey text-sm leading-relaxed">
              Professional property maintenance services across Milton Keynes and surrounding areas. 
              Smart fixes. Sharp finishes. Done right, first time.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/elandlmaintenance"
                className="text-brand-mid-grey hover:text-brand-red transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red rounded-lg p-2"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/elandlmaintenance"
                className="text-brand-mid-grey hover:text-brand-red transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red rounded-lg p-2"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-brand-mid-grey hover:text-brand-red transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red rounded-lg px-1 py-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-brand-mid-grey hover:text-brand-red transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red rounded-lg px-1 py-1">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-brand-mid-grey hover:text-brand-red transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red rounded-lg px-1 py-1">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-brand-mid-grey hover:text-brand-red transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red rounded-lg px-1 py-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-mid-grey hover:text-brand-red transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red rounded-lg px-1 py-1">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service}>
                  <Link
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-').replace('&', '')}`}
                    className="text-brand-mid-grey hover:text-brand-red transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red rounded-lg px-1 py-1"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact & Areas</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-brand-mid-grey">Phone</p>
                  <a
                    href="tel:+441908000000"
                    className="text-brand-off-white hover:text-brand-red transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-brand-red rounded-lg"
                  >
                    01908 000000
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-brand-mid-grey">Email</p>
                  <a
                    href="mailto:hello@elandlmaintenance.co.uk"
                    className="text-brand-off-white hover:text-brand-red transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-brand-red rounded-lg"
                  >
                    hello@elandl.co.uk
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-brand-mid-grey">Hours</p>
                  <p className="text-brand-off-white text-sm">Mon-Sat 08:00-18:00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-brand-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-brand-mid-grey">Service Areas</p>
                  <div className="text-sm text-brand-off-white space-y-1">
                    {serviceAreas.slice(0, 4).map((area) => (
                      <div key={area}>{area}</div>
                    ))}
                    <div className="text-brand-mid-grey">+ surrounding areas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-16 pt-8 border-t border-brand-mid-grey/20">
          <div className="bg-gradient-to-r from-brand-red/10 to-brand-red/5 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready for that perfect finish?</h3>
            <p className="text-brand-mid-grey mb-6 max-w-2xl mx-auto">
              Get your free, no-obligation quote today. We make wobbly shelves behave and give walls the glow-up they deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Free Quote
              </Link>
              <a href="tel:+441908000000" className="btn-secondary">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-mid-grey/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-brand-mid-grey">
              © 2025 E&L Property Maintenance. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                href="/legal/privacy"
                className="text-sm text-brand-mid-grey hover:text-brand-red transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red rounded-lg px-2 py-1"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal/terms"
                className="text-sm text-brand-mid-grey hover:text-brand-red transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-red rounded-lg px-2 py-1"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}