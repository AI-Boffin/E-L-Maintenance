import Hero from '@/components/home/Hero';
import ServicesGrid from '@/components/home/ServicesGrid';
import BeforeAfterGallery from '@/components/home/BeforeAfterGallery';
import TrustSignals from '@/components/home/TrustSignals';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import ServiceAreas from '@/components/home/ServiceAreas';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <BeforeAfterGallery />
      <TrustSignals />
      <TestimonialsCarousel />
      <ServiceAreas />
    </main>
  );
}