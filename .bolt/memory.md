# Project memory

## Product intent & audience

- **Project:** City Auto Garage — a premium automotive service brand website for a real garage business in Nairobi.
- **Audience:** Vehicle owners in Nairobi seeking professional vehicle servicing, diagnostics, and repairs.
- **Goal:** Present a production-ready, professional website proposal suitable for direct presentation to the business owner.

## Brand personality & voice

- Professional, dependable, premium automotive service brand.
- Trustworthy and expert without making unverified claims (no fake reviews, prices, certifications, or guarantees).
- Clear messaging: service *requests* are submitted, not confirmed bookings.

## Visual design & UX direction

- **Palette:** Obsidian / charcoal / silver with racing-red accents; dark premium footer with subtle red accents.
- **Typography:** Space Grotesk (display) + Inter (body).
- **Layout:** Multi-page (React Router). Transparent-to-solid scrolling navbar. Full-screen cinematic hero.
- **Components:** Service cards with hover effects, filterable gallery with keyboard-navigable lightbox, horizontal timeline on desktop / vertical on mobile for service process, floating WhatsApp button (bottom-right, pulse animation) on every page.
- **Animations:** Framer Motion for hero entrance, section reveals, image transitions, card hovers, nav transitions, lightbox. Respects `prefers-reduced-motion`.
- **Responsive:** Desktop / laptop / tablet / mobile; no horizontal scroll; mobile intentionally designed, not compressed.
- **Accessibility:** Semantic HTML, alt text, proper heading hierarchy, reduced-motion support.

## Decisions, constraints & rationale

- **Stack:** Vite + React + JSX + Tailwind CSS + Lucide React icons + `@/` path alias (per `.bolt/prompt`). Added Framer Motion for animations; Supabase for enquiry persistence.
- **Centralized business config:** `src/config/business.ts` holds all business info (name, address, phone, WhatsApp, email, hours, socials, brands, services). All contact details are `PLACEHOLDER`-marked pending owner confirmation. Provisional location: Nyasa Road, Nairobi.
- **Backend:** Supabase migration created for service enquiries table. Env vars exposed to frontend. No private API keys or admin credentials in frontend.
- **WhatsApp fallback:** Booking form saves to DB and offers WhatsApp fallback with auto-filled vehicle/service details. Default floating-button message: "Hello City Auto Garage, I would like to enquire about your automotive services."
- **Testimonials:** Empty state until verified reviews are added via admin dashboard — no fabricated testimonials.
- **Image assets:** `public/images/` with descriptive filenames; temporary high-quality automotive imagery used where real photos unavailable; paths easy to replace.
- **Admin dashboard:** `/admin` with sidebar (outside main Layout). Manages content, services, brands, gallery, enquiries, testimonials, contact info, hours. Requires backend auth config noted as needed.
- **SEO:** Page-specific titles, meta descriptions, Open Graph tags, favicon, sitemap, robots.txt, lazy-loaded images.

## Open questions & assumptions

- **Unconfirmed business details:** Phone, WhatsApp number, email, exact address, opening hours, vehicle brands serviced, services offered, prices, history, certifications — all placeholders requiring owner verification.
- **Auth backend:** Admin dashboard needs authentication/access control once Supabase auth is configured.
- **Real assets:** Logo, workshop photos, and gallery images need to be replaced with authentic City Auto Garage photographs.
- **Privacy policy:** Template created; legal review by business owner required.