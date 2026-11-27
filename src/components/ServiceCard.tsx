import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Service } from '@/config/services';

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-lg border border-charcoal/10 bg-white card-hover"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
        <div className="absolute bottom-3 left-4">
          <span className="rounded bg-racing px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
            Service
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold text-obsidian">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/70">{service.short}</p>
        <Link
          to={`/services/${service.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-racing transition-colors hover:text-racing-700"
        >
          Learn More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
