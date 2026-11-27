import { motion } from 'framer-motion';
import { Wrench, ShieldCheck, HeartHandshake, Star } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { business } from '@/config/business';

const indicators = [
  {
    icon: Wrench,
    title: 'Professional Vehicle Care',
    text: 'Skilled attention to your vehicle across servicing, diagnostics and repair.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Workmanship',
    text: 'Careful, methodical work that focuses on getting the details right.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer-Focused Service',
    text: 'Clear communication and a service experience that puts your vehicle first.',
  },
];

export function TrustIntro() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">Who We Are</p>
          <h2 className="section-heading">
            Your Trusted Automotive Service Partner
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/70">
            At City Auto Garage, we understand how important your vehicle is to your everyday life.
            Our goal is to provide dependable automotive care, professional workmanship and a service
            experience that puts your vehicle first.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-charcoal/10 bg-lightgrey px-4 py-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-racing text-racing" />
              ))}
            </div>
            <span className="text-sm font-medium text-obsidian">
              {business.googleRating.toFixed(1)} / 5
            </span>
            <span className="text-sm text-charcoal/50">
              from {business.googleReviewCount} Google reviews
            </span>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {indicators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-lg border border-charcoal/10 bg-lightgrey p-8 transition-all duration-500 hover:-translate-y-1 hover:border-racing/20 hover:bg-white hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-obsidian text-racing">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-obsidian">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
