import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallBar from '@/components/CallBar';

export const metadata = {
  title: {
    default: 'E&L Property Maintenance - Milton Keynes | Smart fixes. Sharp finishes.',
    template: '%s | E&L Property Maintenance'
  },
  description: 'Professional property maintenance services in Milton Keynes. Painting, decorating, plastering, kitchen fitting, tiling, flooring & more. Free quotes, fully insured.',
  keywords: 'property maintenance, painter decorator Milton Keynes, plasterer, kitchen fitting, tiling, flooring, handyman services',
  authors: [{ name: 'E&L Property Maintenance' }],
  creator: 'E&L Property Maintenance',
  publisher: 'E&L Property Maintenance',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://elandlmaintenance.co.uk',
    title: 'E&L Property Maintenance - Milton Keynes',
    description: 'Professional property maintenance services in Milton Keynes. Smart fixes. Sharp finishes.',
    siteName: 'E&L Property Maintenance',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E&L Property Maintenance - Milton Keynes',
    description: 'Professional property maintenance services in Milton Keynes. Smart fixes. Sharp finishes.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <CallBar />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "E&L Property Maintenance",
              "image": "https://elandlmaintenance.co.uk/logo.png",
              "@id": "https://elandlmaintenance.co.uk",
              "url": "https://elandlmaintenance.co.uk",
              "telephone": "+441908000000",
              "email": "hello@elandlmaintenance.co.uk",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Milton Keynes",
                "addressLocality": "Milton Keynes",
                "postalCode": "MK1 1AA",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 52.0406,
                "longitude": -0.7594
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday", 
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://facebook.com/elandlmaintenance",
                "https://instagram.com/elandlmaintenance"
              ],
              "areaServed": [
                "Milton Keynes",
                "Bletchley",
                "Wolverton", 
                "Newport Pagnell",
                "Broughton",
                "Stony Stratford",
                "Woburn Sands"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Property Maintenance Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Painting & Decorating"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Plastering"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Kitchen Fitting"
                    }
                  }
                ]
              }
            })
          }}
        />
      </body>
    </html>
  );
}