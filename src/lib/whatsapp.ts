import { business } from '@/config/business';

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function generalWhatsAppUrl(): string {
  return buildWhatsAppUrl(
    'Hello City Auto Garage, I would like to enquire about your automotive services.'
  );
}
