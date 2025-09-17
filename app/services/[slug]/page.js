import { notFound } from 'next/navigation';
import ServiceDetailClient from '@/components/ServiceDetailClient';

// Static service data
const serviceData = {
  'painting-decorating': {
    title: 'Painting & Decorating',
    subtitle: 'Perfect paint lines. Professional colour matching.',
    description: 'Transform your home with our expert painting and decorating services. From feature walls to full room makeovers, we deliver flawless finishes that stand the test of time.',
    heroImage: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
    benefits: [
      'Perfect paint lines and smooth finishes',
      'Professional colour consultation',
      'High-quality paints and materials',
      'Minimal disruption to your home',
      'Full preparation and cleanup included'
    ],
    process: [
      {
        step: 1,
        title: 'Consultation & Quote',
        description: 'We visit your home to assess the work and provide a detailed quote within 24 hours.'
      },
      {
        step: 2,
        title: 'Preparation & Protection',
        description: 'All surfaces are properly prepared and your furniture is protected before we start.'
      },
      {
        step: 3,
        title: 'Professional Application',
        description: 'Expert application using premium materials for a perfect, long-lasting finish.'
      }
    ],
    faqs: [
      {
        question: 'How long does interior painting take?',
        answer: 'Most rooms can be completed in 1-2 days, depending on size and preparation needed. We\'ll give you an accurate timeline during your consultation.'
      },
      {
        question: 'Do you help with colour selection?',
        answer: 'Absolutely! We offer colour consultation to help you choose the perfect shades that complement your space and lighting.'
      },
      {
        question: 'What preparation is included?',
        answer: 'All necessary preparation including filling holes, sanding, priming, and protecting your furniture and floors.'
      }
    ],
    gallery: [
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg'
    ],
    startingPrice: 'From £25/hour'
  },
  'plastering': {
    title: 'Plastering',
    subtitle: 'Smooth walls. Perfect finishes.',
    description: 'Professional plastering services for walls and ceilings. We handle everything from small repairs to full room re-skims, delivering smooth, ready-to-decorate surfaces.',
    heroImage: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg',
    benefits: [
      'Smooth, perfectly level surfaces',
      'Quick drying, minimal disruption',
      'Patch repairs and full re-skims',
      'Artex removal and smoothing',
      'Ready for immediate decoration'
    ],
    process: [
      {
        step: 1,
        title: 'Assessment',
        description: 'We assess the existing surfaces and recommend the best approach for your project.'
      },
      {
        step: 2,
        title: 'Preparation',
        description: 'Surfaces are prepared, and the area is protected to minimize mess and disruption.'
      },
      {
        step: 3,
        title: 'Professional Plastering',
        description: 'Expert application and finishing, leaving surfaces smooth and ready to decorate.'
      }
    ],
    faqs: [
      {
        question: 'How long does plaster take to dry?',
        answer: 'Typically 24-48 hours depending on thickness and room conditions. We\'ll advise when it\'s ready to decorate.'
      },
      {
        question: 'Can you remove Artex?',
        answer: 'Yes, we can safely remove and smooth Artex ceilings and walls, giving you a modern, clean finish.'
      },
      {
        question: 'Do you repair cracks?',
        answer: 'Absolutely. We identify the cause of cracks and provide lasting repairs before re-plastering.'
      }
    ],
    gallery: [
      'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg',
      'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg',
      'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg'
    ],
    startingPrice: 'From £35/m²'
  },
  'kitchen-fitting': {
    title: 'Kitchen Fitting',
    subtitle: 'Dream kitchens. Professional installation.',
    description: 'From flat-pack assembly to luxury kitchen installations, we handle every aspect of your kitchen fitting with precision and care.',
    heroImage: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
    benefits: [
      'Flat-pack and bespoke kitchen fitting',
      'Worktop templating and installation',
      'Appliance connections (non-gas)',
      'Plumbing and electrical work',
      'Complete project management'
    ],
    process: [
      {
        step: 1,
        title: 'Design Review',
        description: 'We review your kitchen plans and coordinate delivery and installation schedules.'
      },
      {
        step: 2,
        title: 'Preparation',
        description: 'Old kitchen removal, services preparation, and workspace setup.'
      },
      {
        step: 3,
        title: 'Installation',
        description: 'Professional fitting of units, worktops, and appliances for a perfect finish.'
      }
    ],
    faqs: [
      {
        question: 'How long does kitchen fitting take?',
        answer: 'Typical kitchen installations take 3-5 days depending on complexity. We provide a detailed timeline upfront.'
      },
      {
        question: 'Do you handle plumbing and electrics?',
        answer: 'Yes, we handle all plumbing and electrical connections (except gas). All work is certified where required.'
      },
      {
        question: 'Can you work with any kitchen supplier?',
        answer: 'Absolutely! We work with all major suppliers including B&Q, IKEA, Howdens, and bespoke manufacturers.'
      }
    ],
    gallery: [
      'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
      'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg'
    ],
    startingPrice: 'From £200/day'
  }
  // Add more services as needed...
};

export default function ServiceDetailPage({ params }) {
  const service = serviceData[params.slug];

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}

// Generate static params for known services
export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug,
  }));
}