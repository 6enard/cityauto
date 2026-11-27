import { Link } from 'react-router-dom';
import { Seo } from '@/components/Seo';

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-lightgrey px-6 text-center">
      <Seo title="Page Not Found | City Auto Garage" />
      <p className="font-display text-7xl font-bold text-racing">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold text-obsidian">Page Not Found</h1>
      <p className="mt-2 text-sm text-charcoal/70">
        The page you are looking for does not exist or has moved.
      </p>
      <Link to="/" className="mt-6 btn-primary">Back to Home</Link>
    </div>
  );
}
