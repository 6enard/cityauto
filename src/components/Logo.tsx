import { Link } from 'react-router-dom';
import { CarFront } from 'lucide-react';

export function Logo({
  variant = 'light',
  className = '',
}: {
  variant?: 'light' | 'dark';
  className?: string;
}) {
  const textColor = variant === 'light' ? 'text-white' : 'text-obsidian';
  const subColor = variant === 'light' ? 'text-metallic/70' : 'text-charcoal/60';

  return (
    <Link to="/" className={`group flex items-center gap-3 ${className}`} aria-label="City Auto Garage home">
      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-racing text-white transition-transform duration-300 group-hover:scale-105">
        <CarFront className="h-5 w-5" strokeWidth={2.2} />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-base font-bold uppercase tracking-wider ${textColor}`}>
          City Auto
        </span>
        <span className={`text-[10px] font-semibold uppercase tracking-[0.3em] ${subColor}`}>
          Garage
        </span>
      </span>
    </Link>
  );
}
