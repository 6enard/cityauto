import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { services } from '@/config/services';

interface FormData {
  full_name: string;
  phone: string;
  email: string;
  vehicle_make: string;
  vehicle_model: string;
  vehicle_year: string;
  registration: string;
  service_required: string;
  preferred_date: string;
  additional_info: string;
}

const initial: FormData = {
  full_name: '',
  phone: '',
  email: '',
  vehicle_make: '',
  vehicle_model: '',
  vehicle_year: '',
  registration: '',
  service_required: '',
  preferred_date: '',
  additional_info: '',
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export function BookingForm({ defaultService }: { defaultService?: string }) {
  const [data, setData] = useState<FormData>({
    ...initial,
    service_required: defaultService ?? '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!data.full_name.trim()) e.full_name = 'Please enter your full name.';
    if (!data.phone.trim()) e.phone = 'Please enter your phone number.';
    else if (!/^[+\d\s()-]{7,}$/.test(data.phone.trim())) e.phone = 'Please enter a valid phone number.';
    if (!data.email.trim()) e.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) e.email = 'Please enter a valid email address.';
    if (!data.vehicle_make.trim()) e.vehicle_make = 'Please enter your vehicle make.';
    if (!data.vehicle_model.trim()) e.vehicle_model = 'Please enter your vehicle model.';
    if (!data.service_required) e.service_required = 'Please select a service.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const whatsappMessage = (): string => {
    const lines = [
      'Hello City Auto Garage, I would like to request a vehicle service.',
      '',
      `Name: ${data.full_name}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Vehicle: ${data.vehicle_make} ${data.vehicle_model} ${data.vehicle_year}`.trim(),
      data.registration ? `Registration: ${data.registration}` : '',
      `Service Required: ${data.service_required}`,
      data.preferred_date ? `Preferred Date: ${data.preferred_date}` : '',
      data.additional_info ? `Additional Info: ${data.additional_info}` : '',
    ].filter(Boolean);
    return lines.join('\n');
  };

  const handleSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('service_enquiries').insert({
        full_name: data.full_name,
        phone: data.phone,
        email: data.email,
        vehicle_make: data.vehicle_make,
        vehicle_model: data.vehicle_model,
        vehicle_year: data.vehicle_year || null,
        registration: data.registration || null,
        service_required: data.service_required,
        preferred_date: data.preferred_date || null,
        additional_info: data.additional_info || null,
      });

      if (error) throw error;

      setStatus('success');
      setData({ ...initial });
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Submission failed.';
      setErrorMsg(msg);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-lg border border-success/20 bg-success/5 p-8 text-center"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-success" />
        <h3 className="mt-4 font-display text-xl font-bold text-obsidian">Service Request Submitted</h3>
        <p className="mt-2 text-sm text-charcoal/70">
          Thank you. Your service request has been received. City Auto Garage will contact you to
          confirm the appointment — this is a request, not a confirmed booking.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={buildWhatsAppUrl(whatsappMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark"
          >
            <MessageCircle className="h-4 w-4" />
            Also send via WhatsApp
          </a>
          <button
            className="btn-ghost"
            onClick={() => { setStatus('idle'); setData({ ...initial }); }}
          >
            Submit another request
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-md border border-racing/30 bg-racing/5 p-4">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-racing" />
          <p className="text-sm text-racing-700">
            {errorMsg || 'Something went wrong. Please try again or contact us via WhatsApp.'}
          </p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          name="full_name"
          value={data.full_name}
          onChange={(v) => setData({ ...data, full_name: v })}
          error={errors.full_name}
          required
        />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          value={data.phone}
          onChange={(v) => setData({ ...data, phone: v })}
          error={errors.phone}
          required
        />
        <Field
          label="Email Address"
          name="email"
          type="email"
          value={data.email}
          onChange={(v) => setData({ ...data, email: v })}
          error={errors.email}
          required
        />
        <Field
          label="Vehicle Make"
          name="vehicle_make"
          value={data.vehicle_make}
          onChange={(v) => setData({ ...data, vehicle_make: v })}
          error={errors.vehicle_make}
          placeholder="e.g. Toyota"
          required
        />
        <Field
          label="Vehicle Model"
          name="vehicle_model"
          value={data.vehicle_model}
          onChange={(v) => setData({ ...data, vehicle_model: v })}
          error={errors.vehicle_model}
          placeholder="e.g. Corolla"
          required
        />
        <Field
          label="Vehicle Year"
          name="vehicle_year"
          value={data.vehicle_year}
          onChange={(v) => setData({ ...data, vehicle_year: v })}
          placeholder="e.g. 2019"
        />
        <Field
          label="Registration Number"
          name="registration"
          value={data.registration}
          onChange={(v) => setData({ ...data, registration: v })}
          placeholder="e.g. KDA 123A"
        />
        <div className="flex flex-col">
          <label htmlFor="service_required" className="mb-1.5 text-sm font-medium text-charcoal">
            Service Required <span className="text-racing">*</span>
          </label>
          <select
            id="service_required"
            value={data.service_required}
            onChange={(e) => setData({ ...data, service_required: e.target.value })}
            className={`rounded-md border px-4 py-2.5 text-sm outline-none transition-colors ${
              errors.service_required
                ? 'border-racing focus:border-racing'
                : 'border-charcoal/20 focus:border-racing'
            }`}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
            <option value="Other">Other / Not sure</option>
          </select>
          {errors.service_required && <p className="mt-1 text-xs text-racing">{errors.service_required}</p>}
        </div>
        <Field
          label="Preferred Date"
          name="preferred_date"
          type="date"
          value={data.preferred_date}
          onChange={(v) => setData({ ...data, preferred_date: v })}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="additional_info" className="mb-1.5 text-sm font-medium text-charcoal">
          Additional Information
        </label>
        <textarea
          id="additional_info"
          rows={4}
          value={data.additional_info}
          onChange={(e) => setData({ ...data, additional_info: e.target.value })}
          placeholder="Describe any issues, symptoms or specific requests…"
          className="rounded-md border border-charcoal/20 px-4 py-2.5 text-sm outline-none transition-colors focus:border-racing"
        />
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === 'loading'} className="btn-primary disabled:opacity-60">
          {status === 'loading' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting…
            </>
          ) : (
            'Submit Service Request'
          )}
        </button>
        <p className="text-xs text-charcoal/50">
          This is a request — City Auto Garage will confirm your appointment.
        </p>
      </div>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

function Field({ label, name, value, onChange, type = 'text', placeholder, required, error }: FieldProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1.5 text-sm font-medium text-charcoal">
        {label} {required && <span className="text-racing">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`rounded-md border px-4 py-2.5 text-sm outline-none transition-colors ${
          error ? 'border-racing focus:border-racing' : 'border-charcoal/20 focus:border-racing'
        }`}
      />
      {error && <p className="mt-1 text-xs text-racing">{error}</p>}
    </div>
  );
}
