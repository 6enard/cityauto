import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/Reveal';

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-obsidian py-20 lg:py-28">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1487754180451-c456f619d686?auto=format&fit=crop&w=2000&q=80"
          alt="Automotive workshop"
          className="h-full w-full object-cover opacity-20"
          loading="lazy"
        />
      </div>
      <div className="container-px relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Book Your Vehicle Service?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-metallic/70">
            Submit a service request and our team will contact you to confirm the appointment.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="btn-primary">
              Book a Service
            </Link>
            <Link to="/our-work" className="btn-secondary">
              View Our Workshop
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
