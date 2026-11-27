import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';
import { business } from '@/config/business';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-obsidian">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=2000&q=80"
          alt="Premium vehicle inside a modern automotive workshop"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40" />
      </div>

      <div className="container-px relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-racing/30 bg-racing/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-racing">
            <span className="h-1.5 w-1.5 rounded-full bg-racing" />
            Nairobi, Kenya
          </span>

          <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl">
            City Auto
            <span className="block text-racing">Garage</span>
          </h1>

          <p className="mt-6 font-display text-xl font-medium text-metallic sm:text-2xl">
            Precision Care. Performance You Can Trust.
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-metallic/70">
            {business.description}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link to="/contact" className="btn-primary">
              Book a Service
            </Link>
            <Link to="/services" className="btn-secondary">
              Explore Our Services
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-3 text-sm text-metallic/60">
              <span className="h-px w-8 bg-racing" />
              Your Vehicle. Our Priority.
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-racing text-racing" />
                ))}
              </div>
              <span className="text-xs font-medium text-white">
                {business.googleReviewCount} Google Reviews
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-metallic/50"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
