import { motion } from 'framer-motion';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/config/services';

export function ServicesPage() {
  return (
    <>
      <Seo
        title="Our Services | City Auto Garage Nairobi"
        description="Explore our complete range of automotive services — from general servicing and diagnostics to engine, brake, suspension and electrical repairs in Nairobi."
      />

      <section className="bg-obsidian pt-32 pb-16 text-white">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="section-eyebrow">Our Services</p>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Complete Automotive Care
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-metallic/70">
              From routine maintenance to complex repairs, explore our automotive service solutions.
              Select any service to learn more and submit an enquiry.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-lightgrey py-20 lg:py-28">
        <div className="container-px">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>

          <Reveal className="mt-14 rounded-lg border border-charcoal/10 bg-white p-8 text-center">
            <h2 className="font-display text-xl font-bold text-obsidian">
              Not Sure What Your Vehicle Needs?
            </h2>
            <p className="mt-2 text-sm text-charcoal/70">
              Describe the symptoms and we will help identify the right service for your vehicle.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
