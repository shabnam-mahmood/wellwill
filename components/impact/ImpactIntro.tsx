"use client";

import { motion } from "motion/react";
import {
  Droplets,
  MapPin,
  Users,
  HeartHandshake,
} from "lucide-react";

const impactPoints = [
  {
    icon: Users,
    title: "Communities Supported",
    text: "Local needs guide each project.",
  },
  {
    icon: HeartHandshake,
    title: "Families Benefited",
    text: "Projects are designed around people.",
  },
  {
    icon: MapPin,
    title: "Locations Reached",
    text: "Impact is documented by project.",
  },
  {
    icon: Droplets,
    title: "Improved Water Access",
    text: "Practical solutions for reliable access.",
  },
];

export default function ImpactIntro() {
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
              Real Change
            </span>
          </div>

          <h2 className="mt-5 font-serif text-[42px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#062a5e] sm:text-[52px]">
            Stronger Communities.
            <span className="block text-[#15935e]">Brighter Futures.</span>
          </h2>

          <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-[#53677f] sm:text-base">
            WellWill begins with water because reliable access can support
            healthier families, stronger communities and greater opportunity.
            We work with local partners to deliver practical solutions that are
            selected around real needs and local conditions.
          </p>

          <p className="mt-4 max-w-[650px] text-[14px] leading-6 text-[#60758d]">
            As verified project records grow, this page can also display
            confirmed project counts, locations and beneficiary figures.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          className="grid gap-4 rounded-[28px] bg-[#f4f9fd] p-5 sm:grid-cols-2 sm:p-7"
        >
          {impactPoints.map((point, index) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[20px] bg-white p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e9f5ff] text-[#0866c5]">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <h3 className="mt-4 font-serif text-lg font-semibold leading-5 text-[#062a5e]">
                  {point.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-[#60758d]">
                  {point.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
