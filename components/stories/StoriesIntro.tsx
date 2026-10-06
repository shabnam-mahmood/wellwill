"use client";

import { motion } from "motion/react";
import { BookOpen, Heart, Users } from "lucide-react";

const points = [
  {
    icon: BookOpen,
    title: "Real Stories",
    text: "Documented experiences from communities we support.",
  },
  {
    icon: Users,
    title: "Stronger Communities",
    text: "Stories can show how practical water projects affect everyday life.",
  },
  {
    icon: Heart,
    title: "Lasting Impact",
    text: "We focus on dignity, consent and meaningful outcomes.",
  },
];

export default function StoriesIntro() {
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
              Real People. Real Change.
            </span>
          </div>

          <h2 className="mt-5 font-serif text-[42px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#062a5e] sm:text-[52px]">
            Stories of
            <span className="block text-[#15935e]">Brighter Futures.</span>
          </h2>

          <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-[#53677f] sm:text-base">
            Stories help show the human side of WellWill&apos;s work. As verified
            projects are completed, this page can share what changed, who
            benefited and how each project was delivered.
          </p>

          <p className="mt-4 max-w-[650px] text-sm leading-6 text-[#60758d]">
            All published stories should respect dignity, privacy and consent,
            especially when children or vulnerable families are involved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          className="grid gap-4 rounded-[28px] bg-[#f4f9fd] p-5 sm:grid-cols-3 sm:p-7"
        >
          {points.map((point, index) => {
            const Icon = point.icon;

            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-[18px] bg-white p-5 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#e9f5ff] text-[#0866c5]">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <h3 className="mt-4 font-serif text-[18px] font-semibold text-[#062a5e]">
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
