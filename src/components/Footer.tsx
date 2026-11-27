import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { business } from '@/config/business';
import { services } from '@/config/services';
import { Logo } from './Logo';
import { WhatsAppButton } from './WhatsAppButton';

export function Footer() {
  return (
    <footer className="bg-obsidian text-metallic">
      <div className="container-px py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-metallic/70">
              {business.shortDescription}
            </p>
            <div className="mt-6 flex gap-3">
              {business.social.facebook && (
                <a
                  href={business.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-metallic/80 transition-colors hover:border-racing hover:bg-racing hover:text-white"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              )}
              {business.social.instagram && (
                <a
                  href={business.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-metallic/80 transition-colors hover:border-racing hover:bg-racing hover:text-white"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              )}
              {business.social.twitter && (
                <a
                  href={business.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-metallic/80 transition-colors hover:border-racing hover:bg-racing hover:text-white"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-metallic/70 transition-colors hover:text-racing">Home</Link></li>
              <li><Link to="/about" className="text-metallic/70 transition-colors hover:text-racing">About Us</Link></li>
              <li><Link to="/services" className="text-metallic/70 transition-colors hover:text-racing">Services</Link></li>
              <li><Link to="/our-work" className="text-metallic/70 transition-colors hover:text-racing">Our Work</Link></li>
              <li><Link to="/contact" className="text-metallic/70 transition-colors hover:text-racing">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-metallic/70 transition-colors hover:text-racing">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-metallic/70 transition-colors hover:text-racing">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-metallic/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-racing" />
                <span>{business.address.full}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-racing" />
                <a href={`tel:${business.phoneRaw}`} className="hover:text-racing">{business.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-racing" />
                <a href={`mailto:${business.email}`} className="hover:text-racing">{business.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-metallic/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p>Professional automotive care in Nairobi, Kenya.</p>
        </div>
      </div>

      <WhatsAppButton />
    </footer>
  );
}
