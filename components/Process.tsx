"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, MapPin, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Identify the Need",
    text: "We work with local partners to identify families and communities with limited or unreliable access to water.",
  },
  {
    number: "02",
    title: "Plan & Build",
    text: "We support the installation of suitable wells and water pumps based on local needs and conditions.",
  },
  {
    number: "03",
    title: "Test & Ensure",
    text: "Where appropriate, we test the water and ensure the system is working properly before it is put into use.",
  },
  {
    number: "04",
    title: "Handover & Guide",
    text: "The completed well or pump is handed over with guidance on proper use and basic maintenance.",
  },
  {
    number: "05",
    title: "Verify Impact",
    text: "Each project is documented with photographs and appropriate project and location details.",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#f8fbfe] py-16 sm:py-20 lg:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-[#edf8ff] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16">
        <div className="grid items-start gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          {/* LEFT SIDE */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-4"
            >
              <span className="h-[2px] w-11 bg-[#2a915e]" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#65758b]">
                How We Work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-serif text-[42px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#062a5e] sm:text-[52px] lg:text-[58px]"
            >
              From Support
              <span className="block text-[#2a915e]">to Real Change.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="mt-6 max-w-[620px] text-base leading-7 text-[#53677f] sm:text-lg"
            >
              Every WellWill water project follows a clear and responsible
              process from identifying a community to completing and
              verifying the project.
            </motion.p>

            <div className="relative mt-9">
              <div className="absolute bottom-6 left-[27px] top-7 w-[2px] bg-[#dcecf8]" />

              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: "top" }}
                className="absolute bottom-6 left-[27px] top-7 w-[2px] bg-[#0866c5]"
              />

              <div className="space-y-0">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    className="group relative flex gap-6 pb-6 sm:gap-7"
                  >
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-all duration-300 ${
                        index === 0
                          ? "border-[#0866c5] bg-[#0866c5] text-white"
                          : "border-[#bdddf3] bg-[#f1f8fd] text-[#0866c5] group-hover:border-[#0866c5] group-hover:bg-[#0866c5] group-hover:text-white"
                      }`}
                    >
                      {step.number}
                    </motion.div>

                    <div className="border-b border-[#d9e7f1] pb-7">
                      <h3 className="font-serif text-[23px] font-semibold leading-tight text-[#062a5e]">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-[510px] text-[15px] leading-6 text-[#5e7188]">
                        {step.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="relative min-h-[500px] overflow-hidden rounded-[30px] sm:min-h-[580px] lg:min-h-[650px]">
              <Image
                src="/images/process-water.jpg"
                alt="Completed WellWill household water pump project"
                fill
                className="object-cover transition-transform duration-[1200ms] hover:scale-[1.025]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#062a5e]/20 via-transparent to-transparent" />
            </div>

            {/* REAL COMPLETED PROJECT CARD */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              whileHover={{ y: -5 }}
              className="relative mx-4 -mt-24 rounded-[24px] border border-white/70 bg-white/95 p-5 shadow-[0_20px_60px_rgba(6,42,94,0.15)] backdrop-blur-md sm:mx-8 sm:p-6 lg:mx-10"
            >
              
<div className="flex items-center justify-between gap-5">
  <div className="min-w-0">
    <div className="flex items-center gap-2">
      <CheckCircle2
        size={16}
        className="shrink-0 text-[#15935e]"
      />
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#15935e]">
        WW-RYK-001
      </p>
    </div>

    <h3 className="mt-2 font-serif text-xl font-semibold text-[#062a5e] sm:text-2xl">
      Household Water Pump
    </h3>

    <div className="mt-3 flex items-center gap-2 text-sm text-[#53677f]">
      <MapPin
        size={16}
        className="shrink-0 text-[#0866c5]"
      />
      <span>Rahimyar Khan, Pakistan</span>
    </div>

    <p className="mt-3 max-w-[410px] text-sm leading-6 text-[#5e7188]">
      A hand-pump water project recorded for Muhammad Akmal&apos;s
      household of 4 family members in Rahimyar Khan, Pakistan.
    </p>

    <p className="mt-3 text-sm font-semibold text-[#15935e]">
      Estimated Cost: AED 200
    </p>
  </div>

  <Link
    href="/projects"
    aria-label="View WellWill projects"
    className="group flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e9f7f0] text-[#176b4a] transition-all duration-300 hover:bg-[#2a915e] hover:text-white"
  >
    <ArrowRight
      size={20}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>
</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
