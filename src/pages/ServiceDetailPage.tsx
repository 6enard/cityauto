import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle, CheckCircle2, MessageCircle } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { services } from '@/config/services';
import { buildWhatsAppUrl } from '@/lib/whatsapp';

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-lightgrey pt-24 text-center">
        <Seo title="Service Not Found | City Auto Garage" />
        <h1 className="font-display text-3xl font-bold text-obsidian">Service Not Found</h1>
        <p className="mt-3 text-charcoal/70">The service you are looking for does not exist.</p>
        <Link to="/services" className="mt-6 btn-primary">Back to Services</Link>
      </div>
    );
  }

  const whatsappMsg = `Hello City Auto Garage, I would like to enquire about your ${service.name} service.`;

  return (
    <>
      <Seo
        title={`${service.name} | City Auto Garage Nairobi`}
        description={service.short}
        image={service.image}
      />

      <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-obsidian pt-24">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.name}
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/30" />
        </div>
        <div className="container-px relative z-10 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Link
              to="/services"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-metallic/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              All Services
            </Link>
            <p className="section-eyebrow">Service Detail</p>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {service.name}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-px grid gap-14 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="font-display text-2xl font-bold text-obsidian">Service Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/70">{service.overview}</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-12">
              <h3 className="font-display text-xl font-bold text-obsidian">
                Common Vehicle Symptoms
              </h3>
              <p className="mt-2 text-sm text-charcoal/60">
                These signs may indicate your vehicle could benefit from this service. A proper
                assessment is required to confirm — these are not a diagnostic guarantee.
              </p>
              <ul className="mt-6 space-y-3">
                {service.symptoms.map((sym) => (
                  <li key={sym} className="flex gap-3 rounded-md border border-charcoal/10 bg-lightgrey p-4">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-racing" />
                    <span className="text-sm text-charcoal/80">{sym}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15} className="mt-12">
              <h3 className="font-display text-xl font-bold text-obsidian">
                What This Service Involves
              </h3>
              <ul className="mt-6 space-y-3">
                {service.involves.map((item) => (
                  <li key={item} className="flex gap-3 rounded-md border border-charcoal/10 bg-white p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                    <span className="text-sm text-charcoal/80">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="lg:col-span-1">
            <Reveal delay={0.2}>
              <div className="sticky top-28 rounded-lg border border-charcoal/10 bg-lightgrey p-7">
                <h3 className="font-display text-lg font-bold text-obsidian">Enquire About This Service</h3>
                <p className="mt-2 text-sm text-charcoal/70">
                  Submit a service request and we will contact you to confirm the appointment.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <Link to="/contact" className="btn-primary w-full">
                    Book This Service
                  </Link>
                  <a
                    href={buildWhatsAppUrl(whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost w-full"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Enquire on WhatsApp
                  </a>
                </div>
                <p className="mt-4 text-xs text-charcoal/50">
                  This is a request — City Auto Garage will confirm your appointment.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
