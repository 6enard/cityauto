/*
# Create service enquiries and testimonials tables

1. New Tables
- `service_enquiries`
  - `id` (uuid, primary key)
  - `full_name` (text, customer's full name)
  - `phone` (text, contact phone)
  - `email` (text, contact email)
  - `vehicle_make` (text, vehicle manufacturer)
  - `vehicle_model` (text, vehicle model)
  - `vehicle_year` (text, vehicle year)
  - `registration` (text, vehicle registration number)
  - `service_required` (text, type of service requested)
  - `preferred_date` (date, preferred appointment date)
  - `additional_info` (text, extra details from customer)
  - `status` (text, enquiry status: new/contacted/confirmed/completed, default 'new')
  - `created_at` (timestamptz)
- `testimonials`
  - `id` (uuid, primary key)
  - `customer_name` (text, name of customer)
  - `feedback` (text, testimonial text)
  - `rating` (int, 1-5 rating)
  - `vehicle_info` (text, optional vehicle description)
  - `is_published` (boolean, whether to show publicly, default false)
  - `created_at` (timestamptz)
2. Security
- Enable RLS on both tables.
- Grant INSERT to anon + authenticated on service_enquiries (public submission form).
- Grant SELECT to anon + authenticated on published testimonials only.
- Grant full CRUD to authenticated on service_enquiries (admin dashboard).
- Grant full CRUD to authenticated on testimonials (admin dashboard).
*/

CREATE TABLE IF NOT EXISTS service_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  vehicle_make text NOT NULL,
  vehicle_model text NOT NULL,
  vehicle_year text,
  registration text,
  service_required text NOT NULL,
  preferred_date date,
  additional_info text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  feedback text NOT NULL,
  rating int NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  vehicle_info text,
  is_published boolean NOT NULL DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE service_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- service_enquiries: public can insert; authenticated (admin) can manage all
GRANT INSERT ON service_enquiries TO anon, authenticated;
GRANT SELECT, UPDATE, DELETE ON service_enquiries TO authenticated;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON service_enquiries;
CREATE POLICY "anon_insert_enquiries" ON service_enquiries
  FOR INSERT TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_enquiries" ON service_enquiries;
CREATE POLICY "auth_select_enquiries" ON service_enquiries
  FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS "auth_update_enquiries" ON service_enquiries;
CREATE POLICY "auth_update_enquiries" ON service_enquiries
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_enquiries" ON service_enquiries;
CREATE POLICY "auth_delete_enquiries" ON service_enquiries
  FOR DELETE TO authenticated USING (true);

-- testimonials: public can read published; authenticated (admin) can manage all
GRANT SELECT ON testimonials TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON testimonials TO authenticated;

DROP POLICY IF EXISTS "public_read_published_testimonials" ON testimonials;
CREATE POLICY "public_read_published_testimonials" ON testimonials
  FOR SELECT TO anon, authenticated USING (is_published = true);

DROP POLICY IF EXISTS "auth_insert_testimonials" ON testimonials;
CREATE POLICY "auth_insert_testimonials" ON testimonials
  FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_update_testimonials" ON testimonials;
CREATE POLICY "auth_update_testimonials" ON testimonials
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_testimonials" ON testimonials;
CREATE POLICY "auth_delete_testimonials" ON testimonials
  FOR DELETE TO authenticated USING (true);
