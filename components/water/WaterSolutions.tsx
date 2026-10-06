"use client";

import { motion } from "motion/react";
import {
  Box,
  CircleDot,
  Droplets,
  Filter,
  Sun,
  Users,
} from "lucide-react";

const solutions = [
  {
    icon: Droplets,
    title: "Household Water Pumps",
    text: "Support household water pumps where they are a suitable solution for reliable local access.",
  },
  {
    icon: Users,
    title: "Community Water Points",
    text: "Shared water points can help serve several families where community access is more appropriate.",
  },
  {
    icon: CircleDot,
    title: "Wells",
    text: "Support well development or rehabilitation where local ground conditions make it suitable.",
  },
  {
    icon: Filter,
    title: "Filtration",
    text: "Where required, filtration may be included as part of a suitable water solution.",
  },
  {
    icon: Box,
    title: "Water Storage",
    text: "Storage solutions can help communities manage and maintain more dependable water access.",
  },
  {
    icon: Sun,
    title: "Solar-Powered Systems",
    text: "Solar-powered water systems may be considered where they are practical and sustainable.",
  },
];

export default function WaterSolutions() {
  return (
    <section className="bg-[#f5faff] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#15935e]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.27em] text-[#60758d]">
                Our Water Solutions
              </span>
            </div>

            <h2 className="mt-5 max-w-[720px] font-serif text-[42px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#062a5e] sm:text-[50px]">
              Practical Solutions
              <span className="block text-[#15935e]">for Communities.</span>
            </h2>
          </div>

          <p className="max-w-[620px] text-[15px] leading-7 text-[#53677f]">
            Every community is different. We work with local partners to
            understand the need and identify the most appropriate water
            solution for the location and available resources.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                className="rounded-[22px] border border-[#e2edf4] bg-white p-5 shadow-[0_8px_28px_rgba(6,42,94,0.035)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eaf6ff] text-[#0866c5]">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 font-serif text-[19px] font-semibold leading-5 text-[#062a5e]">
                  {solution.title}
                </h3>

                <p className="mt-3 text-[12px] leading-5 text-[#60758d]">
                  {solution.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
