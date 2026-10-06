"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function WaterMission() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#15935e]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.27em] text-[#60758d]">
              Our Water Mission
            </span>
          </div>

          <h2 className="mt-5 font-serif text-[42px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#062a5e] sm:text-[52px]">
            Water Changes
            <span className="block text-[#15935e]">Everything.</span>
          </h2>

          <p className="mt-6 max-w-[620px] text-[15px] leading-7 text-[#53677f] sm:text-base">
            Access to reliable water can support healthier lives, stronger
            communities and brighter futures. WellWill began its first water
            initiatives in Pakistan, but our vision extends beyond borders.
          </p>

          <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-[#53677f] sm:text-base">
            We aim to support communities wherever water access is a challenge,
            using practical solutions selected around local needs, water
            sources and conditions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[330px] overflow-hidden rounded-[26px] sm:min-h-[420px]"
        >
          <Image
            src="/images/water-mission2.jpg"
            alt="Water flowing from a community water outlet"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
