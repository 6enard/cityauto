import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, Wrench, Car, Image, Inbox, Star, Info, Clock, LogOut, Lock, Mail } from 'lucide-react';
import { Seo } from '@/components/Seo';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { services } from '@/config/services';
import { vehicleBrands } from '@/config/brands';
import { galleryImages } from '@/config/gallery';
import { business } from '@/config/business';

type Tab = 'overview' | 'enquiries' | 'services' | 'brands' | 'gallery' | 'testimonials' | 'info';

interface Enquiry {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  vehicle_make: string;
  vehicle_model: string;
  service_required: string;
  status: string;
  created_at: string;
}

export function AdminPage() {
  const [tab, setTab] = useState<Tab>('overview');
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setL] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setL(false);
      return;
    }
    (async () => {
      const { data } = await supabase
        .from('service_enquiries')
        .select('id, full_name, phone, email, vehicle_make, vehicle_model, service_required, status, created_at')
        .order('created_at', { ascending: false });
      setEnquiries(data ?? []);
      setL(false);
    })();
  }, []);

  const nav: { id: Tab; label: string; icon: typeof Inbox }[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'enquiries', label: 'Enquiries', icon: Inbox },
    { id: 'services', label: 'Services', icon: Wrench },
    { id: 'brands', label: 'Vehicle Brands', icon: Car },
    { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'testimonials', label: 'Testimonials', icon: Star },
    { id: 'info', label: 'Business Info', icon: Info },
  ];

  return (
    <>
      <Seo title="Admin Dashboard | City Auto Garage" />
      <div className="min-h-screen bg-lightgrey pt-20">
        <div className="container-px py-8">
          <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-lg border border-charcoal/10 bg-white p-5">
                <div className="flex items-center gap-3 border-b border-charcoal/10 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-obsidian text-racing">
                    <LayoutDashboard className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-obsidian">Admin Dashboard</p>
                    <p className="text-xs text-charcoal/50">City Auto Garage</p>
                  </div>
                </div>
                <nav className="mt-4 space-y-1">
                  {nav.map((n) => (
                    <button
                      key={n.id}
                      onClick={() => setTab(n.id)}
                      className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                        tab === n.id
                          ? 'bg-racing/10 text-racing'
                          : 'text-charcoal/70 hover:bg-lightgrey hover:text-obsidian'
                      }`}
                    >
                      <n.icon className="h-4 w-4" />
                      {n.label}
                    </button>
                  ))}
                </nav>
                <Link
                  to="/"
                  className="mt-4 flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-charcoal/50 transition-colors hover:bg-lightgrey"
                >
                  <LogOut className="h-4 w-4" />
                  Back to Website
                </Link>
              </div>
            </aside>

            <main>
              {tab === 'overview' && <Overview enquiries={enquiries} loading={loading} />}
              {tab === 'enquiries' && <EnquiriesTab enquiries={enquiries} loading={loading} />}
              {tab === 'services' && <ServicesTab />}
              {tab === 'brands' && <BrandsTab />}
              {tab === 'gallery' && <GalleryTab />}
              {tab === 'testimonials' && <TestimonialsTab />}
              {tab === 'info' && <InfoTab />}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border border-charcoal/10 bg-white p-6 lg:p-8"
    >
      <h2 className="font-display text-lg font-bold text-obsidian">{title}</h2>
      <div className="mt-5">{children}</div>
    </motion.div>
  );
}

function Overview({ enquiries, loading }: { enquiries: Enquiry[]; loading: boolean }) {
  const newCount = enquiries.filter((e) => e.status === 'new').length;
  const stats = [
    { label: 'Total Enquiries', value: loading ? '—' : enquiries.length, icon: Inbox },
    { label: 'New Requests', value: loading ? '—' : newCount, icon: Mail },
    { label: 'Services Listed', value: services.length, icon: Wrench },
    { label: 'Gallery Images', value: galleryImages.length, icon: Image },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-obsidian">Dashboard Overview</h1>
        <p className="mt-1 text-sm text-charcoal/60">A summary of your website content and enquiries.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-lg border border-charcoal/10 bg-white p-6">
            <s.icon className="h-6 w-6 text-racing" />
            <p className="mt-4 font-display text-3xl font-bold text-obsidian">{s.value}</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wider text-charcoal/50">{s.label}</p>
          </div>
        ))}
      </div>
      <Card title="Authentication Required">
        <div className="flex items-start gap-4 rounded-md border border-warning/30 bg-warning/5 p-5">
          <Lock className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
          <div>
            <p className="text-sm font-medium text-obsidian">Admin access is not yet configured</p>
            <p className="mt-1 text-sm text-charcoal/70">
              This dashboard displays enquiries submitted through the website. To enable secure admin
              login and full content management (editing services, brands, gallery and testimonials),
              authentication must be configured. Until then, this view is read-only for enquiries
              already submitted to the database.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function EnquiriesTab({ enquiries, loading }: { enquiries: Enquiry[]; loading: boolean }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-obsidian">Customer Enquiries</h1>
        <p className="mt-1 text-sm text-charcoal/60">Service requests submitted through the website.</p>
      </div>
      <Card title={`All Enquiries (${enquiries.length})`}>
        {loading ? (
          <p className="text-sm text-charcoal/60">Loading enquiries…</p>
        ) : enquiries.length === 0 ? (
          <p className="text-sm text-charcoal/60">No enquiries yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-charcoal/10 text-xs uppercase tracking-wider text-charcoal/50">
                  <th className="pb-3 pr-4">Name</th>
                  <th className="pb-3 pr-4">Vehicle</th>
                  <th className="pb-3 pr-4">Service</th>
                  <th className="pb-3 pr-4">Contact</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((e) => (
                  <tr key={e.id} className="border-b border-charcoal/5">
                    <td className="py-3 pr-4">
                      <p className="font-medium text-obsidian">{e.full_name}</p>
                      <p className="text-xs text-charcoal/50">{new Date(e.created_at).toLocaleDateString()}</p>
                    </td>
                    <td className="py-3 pr-4 text-charcoal/70">{e.vehicle_make} {e.vehicle_model}</td>
                    <td className="py-3 pr-4 text-charcoal/70">{e.service_required}</td>
                    <td className="py-3 pr-4 text-charcoal/70">
                      <p>{e.phone}</p>
                      <p className="text-xs text-charcoal/50">{e.email}</p>
                    </td>
                    <td className="py-3">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        e.status === 'new' ? 'bg-racing/10 text-racing' :
                        e.status === 'contacted' ? 'bg-warning/10 text-warning' :
                        e.status === 'confirmed' ? 'bg-success/10 text-success' :
                        'bg-charcoal/10 text-charcoal/60'
                      }`}>
                        {e.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}

function ServicesTab() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-obsidian">Manage Services</h1>
        <p className="mt-1 text-sm text-charcoal/60">Services are defined in the configuration file.</p>
      </div>
      <Card title="Service Catalogue">
        <div className="space-y-3">
          {services.map((s) => (
            <div key={s.slug} className="flex items-center justify-between rounded-md border border-charcoal/10 bg-lightgrey p-4">
              <div>
                <p className="font-medium text-obsidian">{s.name}</p>
                <p className="text-xs text-charcoal/50">{s.short}</p>
              </div>
              <Link to={`/services/${s.slug}`} className="text-xs font-semibold uppercase tracking-wider text-racing hover:text-racing-700">
                View
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-charcoal/50">
          To add or edit services, update <code className="rounded bg-lightgrey px-1.5 py-0.5">src/config/services.ts</code>.
        </p>
      </Card>
    </div>
  );
}

function BrandsTab() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-obsidian">Vehicle Brands</h1>
        <p className="mt-1 text-sm text-charcoal/60">Brands listed on the website. Edit to match the brands you service.</p>
      </div>
      <Card title="Brand List">
        <div className="grid gap-3 sm:grid-cols-3">
          {vehicleBrands.map((b) => (
            <div key={b.name} className="rounded-md border border-charcoal/10 bg-lightgrey p-4 text-center">
              <p className="font-display font-bold uppercase tracking-wider text-obsidian">{b.name}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-charcoal/50">
          To edit the brand list, update <code className="rounded bg-lightgrey px-1.5 py-0.5">src/config/brands.ts</code>.
        </p>
      </Card>
    </div>
  );
}

function GalleryTab() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-obsidian">Gallery Images</h1>
        <p className="mt-1 text-sm text-charcoal/60">Images shown in the workshop gallery.</p>
      </div>
      <Card title="Current Gallery">
        <div className="grid gap-4 sm:grid-cols-3">
          {galleryImages.map((img) => (
            <div key={img.id} className="overflow-hidden rounded-md border border-charcoal/10">
              <img src={img.src} alt={img.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="p-3">
                <p className="text-xs font-medium text-obsidian">{img.category}</p>
                <p className="text-xs text-charcoal/50">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-charcoal/50">
          To replace images, update <code className="rounded bg-lightgrey px-1.5 py-0.5">src/config/gallery.ts</code> or add real photos to <code className="rounded bg-lightgrey px-1.5 py-0.5">public/images/</code>.
        </p>
      </Card>
    </div>
  );
}

function TestimonialsTab() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-obsidian">Testimonials</h1>
        <p className="mt-1 text-sm text-charcoal/60">Customer reviews displayed on the website.</p>
      </div>
      <Card title="Testimonials">
        <div className="flex items-start gap-4 rounded-md border border-warning/30 bg-warning/5 p-5">
          <Star className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
          <div>
            <p className="text-sm font-medium text-obsidian">No testimonials published yet</p>
            <p className="mt-1 text-sm text-charcoal/70">
              Once authentication is configured, you can add, edit and publish verified customer
              testimonials here. Published testimonials appear on the homepage. Only add reviews
              from real customers with their permission.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function InfoTab() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-obsidian">Business Information</h1>
        <p className="mt-1 text-sm text-charcoal/60">Contact details and opening hours shown on the website.</p>
      </div>
      <Card title="Contact Details">
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between border-b border-charcoal/5 pb-2">
            <dt className="text-charcoal/60">Name</dt>
            <dd className="font-medium text-obsidian">{business.name}</dd>
          </div>
          <div className="flex justify-between border-b border-charcoal/5 pb-2">
            <dt className="text-charcoal/60">Address</dt>
            <dd className="font-medium text-obsidian">{business.address.full}</dd>
          </div>
          <div className="flex justify-between border-b border-charcoal/5 pb-2">
            <dt className="text-charcoal/60">Phone</dt>
            <dd className="font-medium text-obsidian">{business.phone}</dd>
          </div>
          <div className="flex justify-between border-b border-charcoal/5 pb-2">
            <dt className="text-charcoal/60">Email</dt>
            <dd className="font-medium text-obsidian">{business.email}</dd>
          </div>
          <div className="flex justify-between border-b border-charcoal/5 pb-2">
            <dt className="text-charcoal/60">WhatsApp</dt>
            <dd className="font-medium text-obsidian">{business.whatsapp}</dd>
          </div>
        </dl>
        <div className="mt-5">
          <h3 className="flex items-center gap-2 text-sm font-bold text-obsidian"><Clock className="h-4 w-4 text-racing" /> Opening Hours</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {business.hours.map((h) => (
              <li key={h.day} className="flex justify-between border-b border-charcoal/5 pb-2">
                <span className="text-charcoal/60">{h.day}</span>
                <span className="font-medium text-obsidian">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-xs text-charcoal/50">
          To update business information, edit <code className="rounded bg-lightgrey px-1.5 py-0.5">src/config/business.ts</code>.
          Phone, WhatsApp and address are confirmed. Email and social links still need confirmation.
        </p>
      </Card>
    </div>
  );
}
