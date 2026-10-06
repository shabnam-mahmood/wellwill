"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Droplets, ShieldCheck } from "lucide-react";

const donationOptions = [
  {
    amount: "AED 250",
    value: "250",
    detail: "Approx. 1 household pump",
  },
  {
    amount: "AED 500",
    value: "500",
    detail: "Approx. 2 household pumps",
  },
  {
    amount: "AED 1,250",
    value: "1250",
    detail: "Approx. 5 household pumps",
  },
  {
    amount: "AED 2,500",
    value: "2500",
    detail: "Approx. 10 household pumps",
  },
];

export default function Impact() {
  return (
    <section className="relative overflow-hidden bg-[#f5faff]">
      <div className="mx-auto grid min-h-[680px] max-w-[1700px] lg:grid-cols-[0.75fr_1.25fr]">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-h-[430px] overflow-hidden sm:min-h-[520px] lg:min-h-[680px]"
        >
          <Image src="/images/water-pump.jpg"
            alt="Children using a household water pump"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />

          {/* Soft fade into content area */}
          <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-transparent to-[#f5faff]/55 lg:block" />

          {/* Mobile fade */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f5faff] to-transparent lg:hidden" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="relative flex items-center px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20 xl:px-16 2xl:px-20">
          {/* subtle background shape */}
          <div className="pointer-events-none absolute -right-44 -top-36 h-[520px] w-[520px] rounded-full bg-[#e8f5ff] blur-3xl" />

          <div className="relative z-10 w-full max-w-[820px]">
            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-4"
            >
              <span className="h-[2px] w-11 bg-[#15935e]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#53677f] sm:text-xs">
                Make an Impact
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[760px] font-serif text-[30px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#062a5e] sm:text-[52px] lg:text-[58px] xl:text-[64px]"
            >
              Reliable Water.{" "}
              <span className="text-[#15935e] ">Brighter Tomorrows.
              </span>
            </motion.h2>

            {/* INTRO */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="mt-6 max-w-[720px] text-[15px] leading-7 text-[#53677f] sm:text-base sm:leading-8"
            >
              Your support helps WellWill fund household water pumps and other
              suitable water solutions for communities that need more reliable
              access to water.
            </motion.p>

            {/* DONATION OPTIONS */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {donationOptions.map((option, index) => (
                <motion.div
                  key={option.amount}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: 0.18 + index * 0.08,
                  }}
                  whileHover={{ y: -5, scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={`/donate?amount=${option.value}`}
                    aria-label={`Donate ${option.amount}`}
                    className={`group block h-full cursor-pointer rounded-[22px] border p-5 text-center shadow-[0_12px_32px_rgba(6,42,94,0.05)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0866c5]/40 ${
                      index === 0
                        ? "border-[#0866c5] bg-[#0866c5] text-white"
                        : "border-[#dce8f2] bg-white/90 text-[#062a5e] hover:border-[#9dcae9] hover:shadow-[0_16px_36px_rgba(6,42,94,0.09)]"
                    }`}
                  >
                    <div
                      className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${
                        index === 0
                          ? "bg-white/15 text-white"
                          : "bg-[#eaf6ff] text-[#0866c5]"
                      }`}
                    >
                      <Droplets size={22} strokeWidth={1.8} />
                    </div>

                    <p
                      className={`mt-4 font-serif text-[24px] font-semibold leading-none ${
                        index === 0 ? "text-white" : "text-[#062a5e]"
                      }`}
                    >
                      {option.amount}
                    </p>

                    <p
                      className={`mt-3 text-[12px] leading-5 ${
                        index === 0 ? "text-white/85" : "text-[#687b91]"
                      }`}
                    >
                      {option.detail}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA ROW */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center"
            >
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/donate"
                  className="group inline-flex min-h-[54px] min-w-[220px] items-center justify-center gap-4 rounded-full bg-[#15935e] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(21,147,94,0.2)] transition-colors duration-300 hover:bg-[#117c50] sm:text-base"
                >
                  Donate Now

                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              <div className="flex items-center gap-3 text-sm text-[#53677f]">
                <ShieldCheck
                  size={22}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#0866c5]"
                />
                <span>Donation details are shown before you continue.</span>
              </div>
            </motion.div>

            {/* small note */}
            <p className="mt-6 max-w-[720px] text-xs leading-5 text-[#718399]">
              Amounts are approximate and may vary depending on location,
              project requirements and local conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
