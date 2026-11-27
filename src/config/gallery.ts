// Gallery images — EDITABLE. Replace with authentic City Auto Garage photographs.
// IMPORTANT: These are temporary automotive workshop placeholders.
// Replace src values with real City Auto Garage photos in public/images/.
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export const galleryCategories = [
  'All',
  'Workshop',
  'Vehicle Servicing',
  'Engine Repairs',
  'Diagnostics',
  'Brake Repairs',
  'Vehicle Detailing',
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Modern automotive workshop interior with vehicle on hoist',
    category: 'Workshop',
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1632823471565-1ecdf5c6da77?auto=format&fit=crop&w=1200&q=80',
    alt: 'Technician performing vehicle servicing',
    category: 'Vehicle Servicing',
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80',
    alt: 'Engine diagnostic equipment connected to vehicle',
    category: 'Diagnostics',
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1487754180451-c456f619d686?auto=format&fit=crop&w=1200&q=80',
    alt: 'Engine components during repair work',
    category: 'Engine Repairs',
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1601362840469-51e4c8eb75f0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Brake disc and caliper inspection',
    category: 'Brake Repairs',
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1556122071-e404f3e8e3a3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Vehicle interior detailing and cleaning',
    category: 'Vehicle Detailing',
  },
  {
    id: 'g7',
    src: 'https://images.unsplash.com/photo-1530046339160-3e4b67d6a5f1?auto=format&fit=crop&w=1200&q=80',
    alt: 'Workshop tools and equipment organised neatly',
    category: 'Workshop',
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1607861716497-e65ab29fcf0e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Technician working under vehicle on hoist',
    category: 'Vehicle Servicing',
  },
  {
    id: 'g9',
    src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c2c0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Car exterior polishing and detailing',
    category: 'Vehicle Detailing',
  },
  {
    id: 'g10',
    src: 'https://images.unsplash.com/photo-1581093588401-fbb62a91f6a8?auto=format&fit=crop&w=1200&q=80',
    alt: 'Mechanic inspecting vehicle electrical system',
    category: 'Diagnostics',
  },
  {
    id: 'g11',
    src: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=80',
    alt: 'Close-up of engine bay during repair',
    category: 'Engine Repairs',
  },
  {
    id: 'g12',
    src: 'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Brake pads and components laid out for inspection',
    category: 'Brake Repairs',
  },
];
