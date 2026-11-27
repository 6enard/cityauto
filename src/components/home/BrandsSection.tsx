import { motion } from 'framer-motion';
import { Reveal } from '@/components/Reveal';
import { vehicleBrands } from '@/config/brands';

export function BrandsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Vehicles We Care For</p>
          <h2 className="section-heading">Expert Care for Your Vehicle</h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/70">
            Particularly known for German vehicle expertise — VW, Audi and BMW — we service a range
            of makes. Tell us about your vehicle and the service it needs.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {vehicleBrands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.06 }}
              className="flex h-24 items-center justify-center rounded-lg border border-charcoal/10 bg-lightgrey px-4 text-center transition-all duration-300 hover:border-racing/30 hover:bg-white hover:shadow-lg"
            >
              <span className="font-display text-lg font-bold uppercase tracking-wider text-obsidian/80 transition-colors hover:text-racing">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-charcoal/40">
          This list is editable. Contact us to confirm whether we service your specific vehicle.
        </p>
      </div>
    </section>
  );
}
