import { motion } from 'framer-motion';
import { Award, Clock, Activity, MessageSquare, Send } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { generalWhatsAppUrl } from '@/lib/whatsapp';

const values = [
  {
    icon: Award,
    title: 'Professional Workmanship',
    text: 'We focus on careful vehicle servicing and attention to detail on every job, large or small.',
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    text: 'Dependable automotive maintenance helps prevent unexpected breakdowns and keeps you moving.',
  },
  {
    icon: Activity,
    title: 'Diagnostic Approach',
    text: 'Proper diagnostics help identify potential problems early, before they become costly repairs.',
  },
  {
    icon: MessageSquare,
    title: 'Customer Communication',
    text: 'We explain your vehicle condition and recommended repairs clearly so you can make informed decisions.',
  },
  {
    icon: Send,
    title: 'Convenient Enquiries',
    text: 'Reach us easily through WhatsApp or our website to ask about your vehicle and the service it needs.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-obsidian py-20 text-white lg:py-28">
      <div className="container-px grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1607861716497-e65ab29fcf0e?auto=format&fit=crop&w=1000&q=80"
              alt="Technician working in the City Auto Garage workshop"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 to-transparent" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="section-eyebrow">Why Choose Us</p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Built Around Your Vehicle's Needs
            </h2>
          </Reveal>

          <div className="mt-8 space-y-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-racing/30 bg-racing/10 text-racing">
                  <v.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white">{v.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-metallic/70">{v.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <a
            href={generalWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex btn-primary"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
