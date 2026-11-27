// Service catalogue — editable. Each service links to its detail page.
export interface Service {
  slug: string;
  name: string;
  short: string;
  overview: string;
  symptoms: string[];
  involves: string[];
  image: string;
}

export const services: Service[] = [
  {
    slug: 'general-vehicle-servicing',
    name: 'General Vehicle Servicing',
    short: 'Routine maintenance to keep your vehicle performing reliably and efficiently.',
    overview:
      'General vehicle servicing covers scheduled maintenance checks and adjustments that keep your vehicle in dependable working condition. This includes fluid top-ups, filter inspections, safety checks and a thorough review of key systems.',
    symptoms: [
      'Approaching a service interval or mileage milestone',
      'Dashboard reminder or service light illuminated',
      'Reduced fuel efficiency',
      'Unusual engine noises when idling',
    ],
    involves: [
      'Engine oil and filter replacement',
      'Brake, steering and suspension visual inspection',
      'Fluid levels check and top-up',
      'Tyre condition and pressure check',
      'Battery and electrical system check',
      'General safety inspection',
    ],
    image:
      'https://images.unsplash.com/photo-1632823471565-1ecdf5c6da77?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'engine-diagnostics',
    name: 'Engine Diagnostics',
    short: 'Advanced computer diagnostics to identify engine and electronic faults accurately.',
    overview:
      'Engine diagnostics use specialised scanning equipment to read your vehicle onboard computer and identify fault codes. This helps pinpoint issues affecting engine performance, emissions and fuel efficiency.',
    symptoms: [
      'Check engine light is on',
      'Engine misfires or runs roughly',
      'Reduced power or acceleration',
      'Increased fuel consumption',
    ],
    involves: [
      'OBD-II computer scanning and fault code reading',
      'Live data analysis of engine sensors',
      'Component testing for flagged systems',
      'Clear diagnosis report and recommended actions',
    ],
    image:
      'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'engine-repairs',
    name: 'Engine Repairs',
    short: 'Mechanical engine repairs to restore performance and reliability.',
    overview:
      'Engine repairs address mechanical faults identified through diagnostics or inspection. Work may range from replacing worn components to more involved mechanical repairs, always guided by a clear assessment.',
    symptoms: [
      'Persistent engine knocking or tapping',
      'Loss of compression or power',
      'Excessive exhaust smoke',
      'Engine overheating',
    ],
    involves: [
      'Detailed engine inspection and assessment',
      'Replacement of faulty components',
      'Gasket and seal replacement where required',
      'Timing system inspection and adjustment',
      'Post-repair testing and verification',
    ],
    image:
      'https://images.unsplash.com/photo-1487754180451-c456f619d686?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'brake-system-repairs',
    name: 'Brake System Repairs',
    short: 'Brake inspection and repair for safe, responsive stopping power.',
    overview:
      'Your braking system is critical to safety. Brake repairs cover pads, discs, calipers, lines and the hydraulic system, ensuring your vehicle stops predictably and reliably in all conditions.',
    symptoms: [
      'Squealing, grinding or squeaking when braking',
      'Spongy or low brake pedal',
      'Vehicle pulls to one side when braking',
      'Longer stopping distance',
    ],
    involves: [
      'Brake pad and disc inspection',
      'Caliper servicing or replacement',
      'Brake fluid check and replacement',
      'Brake line and hose inspection',
      'Road test to verify brake performance',
    ],
    image:
      'https://images.unsplash.com/photo-1632264532410-4e8c1b8d4c7c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'suspension-and-steering',
    name: 'Suspension and Steering',
    short: 'Suspension and steering repairs for a stable, comfortable ride.',
    overview:
      'Suspension and steering systems affect handling, comfort and tyre wear. Repairs address worn shocks, bushes, links and steering components to restore stability and control.',
    symptoms: [
      'Vehicle bounces excessively over bumps',
      'Uneven or rapid tyre wear',
      'Steering wheel vibration or wandering',
      'Knocking noises from underneath the vehicle',
    ],
    involves: [
      'Shock absorber and strut inspection',
      'Suspension bush and link check',
      'Steering rack and component inspection',
      'Wheel alignment check',
      'Road test for handling verification',
    ],
    image:
      'https://images.unsplash.com/photo-1503376780353-7a8a3c7a3e4f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'transmission-services',
    name: 'Transmission Services',
    short: 'Transmission inspection and servicing for smooth gear changes.',
    overview:
      'Transmission services cover inspection, fluid servicing and repair of manual and automatic gearboxes. Proper transmission care helps prevent costly failures and keeps gear changes smooth.',
    symptoms: [
      'Difficulty engaging gears',
      'Slipping or jerky gear changes',
      'Transmission fluid leak',
      'Burning smell or discoloured fluid',
    ],
    involves: [
      'Transmission fluid level and condition check',
      'Fluid and filter service',
      'Clutch and gear linkage inspection (manual)',
      'Valve body and solenoid check (automatic)',
      'Diagnostic scan for transmission codes',
    ],
    image:
      'https://images.unsplash.com/photo-1599259955271-6165a8a8d6c5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'electrical-system-diagnostics',
    name: 'Electrical System Diagnostics',
    short: 'Diagnosis of electrical faults across your vehicle systems.',
    overview:
      'Modern vehicles rely on complex electrical systems. Diagnostics identify faults in wiring, sensors, the battery, alternator and control modules to resolve electrical issues accurately.',
    symptoms: [
      'Battery warning light or frequent flat battery',
      'Malfunctioning lights or accessories',
      'Blown fuses repeatedly',
      'Intermittent electrical faults',
    ],
    involves: [
      'Battery and charging system test',
      'Wiring and connector inspection',
      'Sensor and actuator testing',
      'Control module fault code reading',
      'Electrical system repair and verification',
    ],
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'air-conditioning-services',
    name: 'Air Conditioning Services',
    short: 'A/C inspection, recharging and repair for reliable cabin cooling.',
    overview:
      'Air conditioning services cover system inspection, refrigerant recharge, leak detection and component repair to keep your cabin cool and comfortable in Nairobi heat.',
    symptoms: [
      'A/C blowing warm or weak air',
      'Unusual odours from vents',
      'A/C compressor noise',
      'Reduced cooling on hot days',
    ],
    involves: [
      'System pressure and performance test',
      'Refrigerant recharge',
      'Leak detection',
      'Compressor and condenser inspection',
      'Cabin filter replacement',
    ],
    image:
      'https://images.unsplash.com/photo-1526374965328-4f18af585d64?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'oil-and-filter-changes',
    name: 'Oil and Filter Changes',
    short: 'Quality oil and filter replacement to protect your engine.',
    overview:
      'Regular oil and filter changes are the simplest way to extend engine life. Fresh oil reduces wear, removes contaminants and helps your engine run smoothly.',
    symptoms: [
      'Dark, dirty or low engine oil',
      'Oil change reminder or mileage reached',
      'Engine running louder than usual',
      'Reduced fuel economy',
    ],
    involves: [
      'Drain old engine oil',
      'Replace oil filter',
      'Refill with recommended grade oil',
      'Inspection of surrounding components',
      'Reset service indicator',
    ],
    image:
      'https://images.unsplash.com/photo-1599259955271-6165a8a8d6c5?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'vehicle-inspection',
    name: 'Vehicle Inspection',
    short: 'Comprehensive multi-point inspection to assess vehicle condition.',
    overview:
      'A vehicle inspection provides a detailed assessment of your vehicle condition across key systems. Useful before long trips, before purchasing a used vehicle, or to catch problems early.',
    symptoms: [
      'Planning a long journey',
      'Considering buying a used vehicle',
      'Noticing minor issues you want checked',
      'Due for a general condition review',
    ],
    involves: [
      'Engine and transmission inspection',
      'Brake and suspension check',
      'Electrical and battery test',
      'Tyre and exhaust inspection',
      'Written condition report',
    ],
    image:
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
  },
];
