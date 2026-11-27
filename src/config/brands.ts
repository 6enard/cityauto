// Vehicle brands serviced — confirmed from Google reviews.
// Reviews highlight expertise on German vehicles (VW, Audi, BMW).
// Owner should confirm the full list of brands they service.
export interface VehicleBrand {
  name: string;
  logo?: string;
}

export const vehicleBrands: VehicleBrand[] = [
  { name: 'Volkswagen' },
  { name: 'Audi' },
  { name: 'BMW' },
  { name: 'Mercedes-Benz' },
  { name: 'Toyota' },
  { name: 'Subaru' },
  { name: 'Nissan' },
  { name: 'Mazda' },
  { name: 'Honda' },
  { name: 'Lexus' },
];
