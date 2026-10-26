
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Droplets,
  HandHeart,
  Mail,
  MessageCircle,
} from "lucide-react";

export default function ContactMain() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] items-stretch gap-8 px-6 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-16">
        {/* LEFT — CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="rounded-[28px] border border-[#dce8f1] bg-[#eef8ff] p-6 sm:p-8 lg:p-10"
        >
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#15935e]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#60758d]">
              Get in Touch
            </span>
          </div>

          <h2 className="mt-5 font-serif text-[40px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#062a5e] sm:text-[48px]">
            Send Us a Message
          </h2>

          <p className="mt-4 max-w-[760px] text-[15px] leading-7 text-[#53677f] sm:text-base">
            Have a question, partnership idea or general enquiry?
            Fill in the form below and our team will get back to you.
          </p>

          <form className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field
              label="First Name"
              required
              placeholder="Enter first name"
              type="text"
            />

            <Field
              label="Last Name"
              required
              placeholder="Enter last name"
              type="text"
            />

            <Field
              label="Email Address"
              required
              placeholder="you@example.com"
              type="email"
            />

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-[#173a5e]">
                Subject <span className="text-[#e25555]">*</span>
              </span>

              <select
                required
                defaultValue=""
                className="h-[58px] w-full rounded-[15px] border border-[#cbdce8] bg-white px-4 text-sm text-[#40566f] outline-none transition focus:border-[#0866c5] focus:ring-2 focus:ring-[#0866c5]/10"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="general">General Enquiry</option>
                <option value="partnership">Partnership</option>
                <option value="media">Media</option>
                <option value="volunteer">Volunteering</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-[#173a5e]">
                Your Message <span className="text-[#e25555]">*</span>
              </span>

              <textarea
                required
                rows={7}
                placeholder="How can we help?"
                className="w-full resize-none rounded-[15px] border border-[#cbdce8] bg-white px-4 py-4 text-sm text-[#40566f] outline-none transition placeholder:text-[#9aadc0] focus:border-[#0866c5] focus:ring-2 focus:ring-[#0866c5]/10"
              />
            </label>

            <div className="sm:col-span-2">
              <motion.button
                type="submit"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-full bg-[#15935e] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(21,147,94,0.18)] transition-colors hover:bg-[#117c50]"
              >
                Send Message
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* RIGHT — 3 BALANCED CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-5"
        >
          {/* CONTACT OUR TEAM */}
          <InfoCard
            icon={<MessageCircle size={24} strokeWidth={1.8} />}
          >
            <h3 className="font-serif text-[26px] font-semibold text-[#062a5e]">
              Contact Our Team
            </h3>

            <div className="mt-5">
              <div className="flex items-start gap-3">
                <Mail
                  size={19}
                  className="mt-0.5 shrink-0 text-[#0866c5]"
                  strokeWidth={1.8}
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[#7a8c9f]">
                    Email
                  </p>

                  <a
                    href="mailto:info@wellwill.org"
                    className="mt-1 block text-sm font-medium text-[#0866c5] transition-colors hover:text-[#0759ac]"
                  >
                    info@wellwill.org
                  </a>
                </div>
              </div>
            </div>
          </InfoCard>

          {/* NEED WATER SUPPORT */}
          <InfoCard
            icon={<Droplets size={24} strokeWidth={1.8} />}
          >
            <h3 className="font-serif text-[26px] font-semibold text-[#062a5e]">
              Need Water Support?
            </h3>

            <p className="mt-3 max-w-[420px] text-sm leading-6 text-[#60758d]">
              Tell us about the water needs in your community
              through our dedicated Water Survey.
            </p>

            <Link
              href="/water-survey"
              className="group mt-5 inline-flex items-center gap-3 text-sm font-semibold text-[#062a5e] transition-colors hover:text-[#0866c5]"
            >
              Submit Water Survey
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </InfoCard>

          {/* WANT TO HELP */}
          <InfoCard
            icon={<HandHeart size={24} strokeWidth={1.8} />}
          >
            <h3 className="font-serif text-[26px] font-semibold text-[#062a5e]">
              Want to Help?
            </h3>

            <p className="mt-3 max-w-[420px] text-sm leading-6 text-[#60758d]">
              Support WellWill through donations, partnerships
              or volunteering.
            </p>

            <Link
              href="/donate"
              className="group mt-5 inline-flex items-center gap-3 text-sm font-semibold text-[#062a5e] transition-colors hover:text-[#0866c5]"
            >
              Donate Now
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </InfoCard>
        </motion.div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type,
  required = false,
}: {
  label: string;
  placeholder: string;
  type: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-[#173a5e]">
        {label}{" "}
        {required && (
          <span className="text-[#e25555]">*</span>
        )}
      </span>

      <input
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-[58px] w-full rounded-[15px] border border-[#cbdce8] bg-white px-4 text-sm text-[#40566f] outline-none transition placeholder:text-[#9aadc0] focus:border-[#0866c5] focus:ring-2 focus:ring-[#0866c5]/10"
      />
    </label>
  );
}

function InfoCard({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-5 rounded-[26px] border border-[#dce8f1] bg-white p-6 shadow-[0_10px_35px_rgba(6,42,94,0.045)] sm:p-7">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#eaf6ff] text-[#0866c5]">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        {children}
      </div>
    </div>
  );
}
