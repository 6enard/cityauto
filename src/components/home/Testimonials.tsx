import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

interface Testimonial {
  id: string;
  customer_name: string;
  feedback: string;
  rating: number;
  vehicle_info: string | null;
}

export function Testimonials() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }
    (async () => {
      const { data } = await supabase
        .from('testimonials')
        .select('id, customer_name, feedback, rating, vehicle_info')
        .eq('is_published', true)
        .order('created_at', { ascending: false })
        .limit(6);
      if (active) {
        setItems(data ?? []);
        setLoading(false);
      }
    })();
    return () => { active = false; };
  }, []);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="container-px">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Customer Feedback</p>
          <h2 className="section-heading">What Our Customers Say</h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/70">
            We value honest feedback from the motorists who trust us with their vehicles.
          </p>
        </Reveal>

        {!loading && items.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((t, i) => (
              <motion.figure
                key={t.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="flex flex-col rounded-lg border border-charcoal/10 bg-lightgrey p-7"
              >
                <Quote className="h-8 w-8 text-racing/40" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-charcoal/80">
                  "{t.feedback}"
                </blockquote>
                <div className="mt-5 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`h-4 w-4 ${
                        idx < t.rating ? 'fill-racing text-racing' : 'text-charcoal/20'
                      }`}
                    />
                  ))}
                </div>
                <figcaption className="mt-3">
                  <p className="font-display text-sm font-bold text-obsidian">{t.customer_name}</p>
                  {t.vehicle_info && (
                    <p className="text-xs text-charcoal/50">{t.vehicle_info}</p>
                  )}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        ) : (
          !loading && (
            <Reveal className="mx-auto mt-12 max-w-xl rounded-lg border border-dashed border-charcoal/20 bg-lightgrey p-12 text-center">
              <MessageSquare className="mx-auto h-10 w-10 text-charcoal/30" />
              <h3 className="mt-4 font-display text-lg font-bold text-obsidian">
                Reviews Coming Soon
              </h3>
              <p className="mt-2 text-sm text-charcoal/60">
                Verified customer testimonials will appear here once available. We look forward to
                sharing feedback from motorists who trust City Auto Garage.
              </p>
            </Reveal>
          )
        )}
      </div>
    </section>
  );
}
