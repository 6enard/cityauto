import { motion } from 'framer-motion';
import { Seo } from '@/components/Seo';

export function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy Policy | City Auto Garage"
        description="Privacy policy for City Auto Garage describing how customer enquiry information is handled."
      />

      <section className="bg-obsidian pt-32 pb-16 text-white">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="section-eyebrow">Legal</p>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="bg-lightgrey py-20 lg:py-28">
        <div className="container-px max-w-3xl">
          <div className="prose prose-sm max-w-none rounded-lg border border-charcoal/10 bg-white p-8 lg:p-10">
            <p className="text-sm text-charcoal/60">
              This privacy policy describes how City Auto Garage handles information submitted
              through this website. This is a basic template and should be reviewed by the business
              owner before publication.
            </p>

            <h2 className="mt-8 font-display text-xl font-bold text-obsidian">Information We Collect</h2>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
              When you submit a service enquiry form, we collect the information you provide:
              your name, phone number, email address, vehicle make, model, year, registration number,
              service required, preferred date and any additional information you choose to include.
            </p>

            <h2 className="mt-8 font-display text-xl font-bold text-obsidian">How We Use Your Information</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-charcoal/70">
              <li>To respond to your service enquiry and confirm appointments.</li>
              <li>To communicate with you about your vehicle and the service requested.</li>
              <li>To provide the automotive services you have requested.</li>
            </ul>

            <h2 className="mt-8 font-display text-xl font-bold text-obsidian">Information Sharing</h2>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
              We do not sell or rent your personal information to third parties. We may share
              information where required by law or as necessary to provide the services requested.
            </p>

            <h2 className="mt-8 font-display text-xl font-bold text-obsidian">Data Security</h2>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
              We take reasonable measures to protect the information you submit. However, no method
              of transmission over the internet is completely secure.
            </p>

            <h2 className="mt-8 font-display text-xl font-bold text-obsidian">Your Rights</h2>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
              You may request access to, correction of, or deletion of your personal information by
              contacting us using the details on our contact page.
            </p>

            <h2 className="mt-8 font-display text-xl font-bold text-obsidian">Contact</h2>
            <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
              If you have questions about this privacy policy, please contact City Auto Garage
              through the contact page on this website.
            </p>

            <div className="mt-10 rounded-md border border-warning/30 bg-warning/5 p-4">
              <p className="text-xs text-charcoal/70">
                <strong className="text-obsidian">Note for the business owner:</strong> This is a
                basic privacy policy template. Please review it with legal counsel and update it to
                reflect your actual data handling practices before publishing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
