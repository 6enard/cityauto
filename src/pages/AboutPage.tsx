import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { Reveal } from '@/components/Reveal';

const pillars = [
  {
    icon: Target,
    title: 'Service Philosophy',
    text: 'We approach every vehicle methodically — assess, diagnose, then repair. Our philosophy is to do the job properly rather than rush it.',
  },
  {
    icon: Eye,
    title: 'Commitment to Quality',
    text: 'Quality means using the right parts, following proper procedures and verifying our work before handing the vehicle back.',
  },
  {
    icon: Heart,
    title: 'Customer Experience',
    text: 'We keep you informed throughout the process, explaining what we find and what we recommend in plain language.',
  },
  {
    icon: Users,
    title: 'About the Garage',
    text: 'City Auto Garage is an automotive repair and maintenance workshop located on Nyasa Road in Nairobi, serving local motorists.',
  },
];

export function AboutPage() {
  return (
    <>
      <Seo
        title="About Us | City Auto Garage Nairobi"
        description="Learn about City Auto Garage — our service philosophy, commitment to quality and customer-focused approach to vehicle care in Nairobi."
      />

      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-obsidian pt-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1530046339160-3e4b67d6a5f1?auto=format&fit=crop&w=2000&q=80"
            alt="City Auto Garage workshop"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-obsidian/40" />
        </div>
        <div className="container-px relative z-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="section-eyebrow">About City Auto Garage</p>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Driven by Quality. Focused on You.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-metallic/70 sm:text-lg">
              City Auto Garage is committed to helping motorists maintain, repair and care for their
              vehicles through professional automotive services and a customer-focused approach.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container-px grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1607861716497-e65ab29fcf0e?auto=format&fit=crop&w=1000&q=80"
                alt="Inside the City Auto Garage workshop"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-eyebrow">Our Story</p>
            <h2 className="section-heading">Professional Automotive Care in Nairobi</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-charcoal/70">
              <p>
                Located on Nyasa Road in Nairobi, City Auto Garage is an automotive repair and
                maintenance workshop serving local motorists with dependable service.
              </p>
              <p>
                We understand that your vehicle is essential to your daily life. That is why we focus
                on careful workmanship, clear communication and a service experience that puts your
                vehicle first.
              </p>
              <p>
                From routine servicing to complex repairs, our approach is the same: assess
                properly, communicate clearly, and carry out the work with attention to detail.
                We are particularly known for our expertise with German vehicles — VW, Audi and BMW.
              </p>
            </div>
            <Link to="/services" className="mt-8 inline-flex btn-dark">
              Explore Our Services
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-lightgrey py-20 lg:py-28">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="section-eyebrow">What We Stand For</p>
            <h2 className="section-heading">Our Approach to Vehicle Care</h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5 rounded-lg border border-charcoal/10 bg-white p-8"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-obsidian text-racing">
                  <p.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-obsidian">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-obsidian py-20 text-white lg:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=2000&q=80"
            alt="Workshop"
            className="h-full w-full object-cover opacity-20"
            loading="lazy"
          />
        </div>
        <div className="container-px relative z-10 grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1000&q=80"
                alt="Diagnostic equipment at City Auto Garage"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-eyebrow">Visit Us</p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Come See the Workshop
            </h2>
            <p className="mt-5 text-base leading-relaxed text-metallic/70">
              We welcome you to visit City Auto Garage on Nyasa Road, Nairobi. See where we work and
              talk to us about your vehicle.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">Get Directions</Link>
              <Link to="/our-work" className="btn-secondary">View Our Work</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
