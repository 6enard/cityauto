import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';
import { BookingForm } from '@/components/BookingForm';
import { business } from '@/config/business';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { WhatsAppIcon } from '@/components/WhatsAppButton';

export function ContactPage() {
  return (
    <>
      <Seo
        title="Contact & Book a Service | City Auto Garage Nairobi"
        description="Contact City Auto Garage on Nyasa Road, Nairobi. Book a vehicle service, get directions, or enquire via WhatsApp."
      />

      <section className="bg-obsidian pt-32 pb-16 text-white">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="section-eyebrow">Get in Touch</p>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Book Your Vehicle Service
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-metallic/70">
              Submit a service request below and our team will contact you to confirm the appointment.
              You can also reach us by phone, email or WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-lightgrey py-20 lg:py-28">
        <div className="container-px grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-6">
              <div className="rounded-lg border border-charcoal/10 bg-white p-7">
                <h2 className="font-display text-lg font-bold text-obsidian">Contact Information</h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-racing" />
                    <div>
                      <p className="font-medium text-obsidian">Location</p>
                      <p className="text-charcoal/70">{business.address.full}</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-5 w-5 shrink-0 text-racing" />
                    <div>
                      <p className="font-medium text-obsidian">Phone</p>
                      <a href={`tel:${business.phoneRaw}`} className="text-charcoal/70 hover:text-racing">{business.phone}</a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-racing" />
                    <div>
                      <p className="font-medium text-obsidian">Email</p>
                      <a href={`mailto:${business.email}`} className="text-charcoal/70 hover:text-racing">{business.email}</a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-racing" />
                    <div>
                      <p className="font-medium text-obsidian">WhatsApp</p>
                      <a
                        href={buildWhatsAppUrl('Hello City Auto Garage, I would like to enquire about your automotive services.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-charcoal/70 hover:text-racing"
                      >
                        Chat with us
                      </a>
                    </div>
                  </li>
                </ul>
                <a href={business.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-6 btn-dark w-full">
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </div>

              <div className="rounded-lg border border-charcoal/10 bg-white p-7">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-racing" />
                  <h2 className="font-display text-lg font-bold text-obsidian">Opening Hours</h2>
                </div>
                <ul className="mt-5 space-y-3 text-sm">
                  {business.hours.map((h) => (
                    <li key={h.day} className="flex justify-between border-b border-charcoal/5 pb-2">
                      <span className="text-charcoal/70">{h.day}</span>
                      <span className="font-medium text-obsidian">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={buildWhatsAppUrl('Hello City Auto Garage, I would like to enquire about your automotive services.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-lg border border-charcoal/10 bg-white p-7 lg:p-9">
              <h2 className="font-display text-xl font-bold text-obsidian">Service Request Form</h2>
              <p className="mt-2 text-sm text-charcoal/60">
                Fill in your vehicle and contact details. Required fields are marked with an asterisk.
              </p>
              <div className="mt-6">
                <BookingForm />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-lg border border-charcoal/10">
            <iframe
              title="City Auto Garage location map"
              src="https://www.google.com/maps?q=Nyasa+Road+Nairobi+Kenya&output=embed"
              className="h-[400px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-3 text-center text-xs text-charcoal/40">
            Location shown is provisional (Nyasa Road, Nairobi) until the business confirms its exact address.
          </p>
        </Reveal>
      </section>
    </>
  );
}
