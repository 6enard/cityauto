// Central business configuration file.
// All business information is stored here so it can be updated in one place.
// Confirmed details from Google Business listing (November 2026).

export const business = {
  name: 'City Auto Garage',
  tagline: 'Precision Care. Performance You Can Trust.',
  description:
    'Professional vehicle servicing, diagnostics and repairs designed to keep your vehicle running at its best.',
  shortDescription:
    'Professional automotive care. Dependable service. Your vehicle deserves the best.',
  address: {
    street: 'Nyasa Road',
    area: 'Nairobi',
    country: 'Kenya',
    full: 'Nyasa Road, Nairobi, Kenya',
    mapQuery: 'City Auto Garage, Nyasa Road, Nairobi, Kenya',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=City+Auto+Garage+Nyasa+Road+Nairobi+Kenya',
  },
  phone: '+254 719 542772',
  phoneRaw: '+254719542772',
  email: 'info@cityautogarage.co.ke', // PLACEHOLDER: confirm with owner
  whatsapp: '254719542772',
  social: {
    facebook: '', // PLACEHOLDER
    instagram: '', // PLACEHOLDER
    twitter: '', // PLACEHOLDER
    youtube: '', // PLACEHOLDER
  },
  // Hours from Google listing — listing shows 8AM–6AM (likely a typo for 6PM).
  // Using 8:00 AM – 6:00 PM daily; owner should verify.
  hours: [
    { day: 'Monday – Friday', time: '8:00 AM – 6:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 6:00 PM' },
    { day: 'Sunday', time: '8:00 AM – 6:00 PM' },
  ],
  // Google rating from verified reviews
  googleRating: 5.0,
  googleReviewCount: 43,
} as const;

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Our Work', path: '/our-work' },
  { label: 'Contact', path: '/contact' },
];
