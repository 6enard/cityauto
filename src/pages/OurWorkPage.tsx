import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { Lightbox } from '@/components/Lightbox';
import { galleryImages, galleryCategories } from '@/config/gallery';

export function OurWorkPage() {
  const [active, setActive] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === 'All' ? galleryImages : galleryImages.filter((img) => img.category === active)),
    [active]
  );

  const navigate = (dir: -1 | 1) => {
    setLightboxIndex((prev) => {
      if (prev === null) return prev;
      const next = (prev + dir + filtered.length) % filtered.length;
      return next;
    });
  };

  return (
    <>
      <Seo
        title="Our Work | City Auto Garage Workshop Gallery"
        description="See inside the City Auto Garage workshop — vehicle servicing, engine repairs, diagnostics, brake work and detailing in Nairobi."
      />

      <section className="bg-obsidian pt-32 pb-16 text-white">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="section-eyebrow">Our Work</p>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Inside Our Workshop
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-metallic/70">
              A look at the work that takes place at City Auto Garage. Click any image to view it
              larger.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-lightgrey py-16 lg:py-24">
        <div className="container-px">
          <Reveal>
            <div className="flex flex-wrap gap-2">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    active === cat
                      ? 'bg-racing text-white shadow-lg shadow-racing/20'
                      : 'bg-white text-charcoal/70 hover:bg-white hover:text-racing'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((img, i) => (
              <motion.button
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.06 }}
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-obsidian"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded bg-racing px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-white">
                    {img.category}
                  </span>
                  <p className="mt-2 text-sm text-white">{img.alt}</p>
                </div>
              </motion.button>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-charcoal/40">
            These are temporary automotive workshop images. Replace with authentic City Auto Garage
            photographs through the project files.
          </p>
        </div>
      </section>

      <Lightbox
        images={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={navigate}
      />
    </>
  );
}
