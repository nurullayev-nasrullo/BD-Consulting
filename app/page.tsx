import HeroSection from '@/components/home/HeroSection';
import ServicePillars from '@/components/home/ServicePillars';
import MissionSection from '@/components/home/MissionSection';
import CaseStudiesCarousel from '@/components/home/CaseStudiesCarousel';
import NewsletterSignup from '@/components/home/NewsletterSignup';
import SaaSPreview from '@/components/home/SaaSPreview';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicePillars />
      <MissionSection />
      <CaseStudiesCarousel />
      <NewsletterSignup />
      <SaaSPreview />
    </>
  );
}