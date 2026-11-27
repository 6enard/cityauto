import { motion } from 'framer-motion';
import { Phone, Search, Wrench, CheckCircle } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const steps = [
  {
    icon: Phone,
    title: 'Contact Us',
    text: 'Tell us about your vehicle and the service required.',
  },
  {
    icon: Search,
    title: 'Vehicle Assessment',
    text: "The garage reviews the vehicle's condition and identifies the required work.",
  },
  {
    icon: Wrench,
    title: 'Service and Repairs',
    text: 'The agreed maintenance or repair work is carried out.',
  },
  {
    icon: CheckCircle,
    title: 'Vehicle Collection',
    text: 'The customer collects the vehicle after the work is completed and reviewed.',
  },
];

export function ProcessSection() {
  return (
    <section className="bg-lightgrey py-20 lg:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">How It Works</p>
          <h2 className="section-heading">Our Service Process</h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/70">
            A simple, transparent process from first contact to vehicle collection.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* horizontal line on desktop */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-charcoal/10 lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-row items-start gap-4 lg:flex-col lg:items-center lg:text-center"
              >
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-racing bg-white text-racing shadow-sm">
                  <step.icon className="h-7 w-7" />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-obsidian text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </div>
                <div className="lg:mt-4">
                  <h3 className="font-display text-base font-bold text-obsidian">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-charcoal/70">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
