import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/config/services';

export function ServicesSection() {
  const featured = services.slice(0, 6);

  return (
    <section className="bg-lightgrey py-20 lg:py-28">
      <div className="container-px">
        <Reveal className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="section-eyebrow">What We Do</p>
            <h2 className="section-heading">Complete Automotive Care</h2>
            <p className="mt-5 text-base leading-relaxed text-charcoal/70">
              From routine maintenance to complex repairs, explore our automotive service solutions.
            </p>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-racing transition-colors hover:text-racing-700"
          >
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
