import { Seo } from '@/components/Seo';
import { Hero } from '@/components/home/Hero';
import { TrustIntro } from '@/components/home/TrustIntro';
import { ServicesSection } from '@/components/home/ServicesSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { BrandsSection } from '@/components/home/BrandsSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { Testimonials } from '@/components/home/Testimonials';
import { CtaSection } from '@/components/home/CtaSection';

export function HomePage() {
  return (
    <>
      <Seo
        title="City Auto Garage | Professional Vehicle Service & Repairs in Nairobi"
        description="City Auto Garage provides professional vehicle servicing, diagnostics and automotive repairs in Nairobi. Contact us to enquire about your vehicle's service needs."
      />
      <Hero />
      <TrustIntro />
      <ServicesSection />
      <WhyChooseUs />
      <BrandsSection />
      <ProcessSection />
      <Testimonials />
      <CtaSection />
    </>
  );
}
