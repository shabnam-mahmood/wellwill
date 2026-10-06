"use client";

import { motion } from "motion/react";
import { HeartPulse, Users, Sprout, Waves } from "lucide-react";

const areas = [
  {
    icon: HeartPulse,
    title: "Healthier Families",
    text: "More reliable water access can support daily hygiene, household wellbeing and healthier routines.",
  },
  {
    icon: Users,
    title: "Stronger Communities",
    text: "Community-led water solutions can support local development, education, livelihoods and everyday life.",
  },
  {
    icon: Sprout,
    title: "Better Opportunities",
    text: "Where relevant, dependable water access can support agriculture, livelihoods and new opportunities.",
  },
  {
    icon: Waves,
    title: "Sustainable Impact",
    text: "We focus on practical solutions intended to keep serving communities responsibly over the long term.",
  },
];

export default function ImpactAreas() {
  return (
    <section className="bg-[#f5faff] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#15935e]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.27em] text-[#60758d]">
              Our Impact Areas
            </span>
          </div>

          <h2 className="mt-5 font-serif text-[42px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#062a5e] sm:text-[50px]">
            Creating
            <span className="text-[#15935e]"> Lasting Change.</span>
          </h2>

          <p className="mt-4 max-w-[720px] text-[15px] leading-7 text-[#53677f]">
            Our work is about more than installing water infrastructure. It is
            about helping communities build stronger foundations for everyday
            life and long-term wellbeing.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {areas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="group flex min-h-[290px] flex-col rounded-[24px] border border-[#e0ebf3] bg-white p-7 shadow-[0_8px_30px_rgba(6,42,94,0.04)] transition-all duration-300 hover:border-[#c9dfea] hover:shadow-[0_16px_38px_rgba(6,42,94,0.07)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eaf6ff] text-[#0866c5] transition-transform duration-300 group-hover:scale-105">
                  <Icon size={30} strokeWidth={1.7} />
                </div>

                <div className="mt-7">
                  <h3 className="font-serif text-[24px] font-semibold leading-[1.08] text-[#062a5e]">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-6 text-[#60758d]">
                    {area.text}
                  </p>
                </div>

                <div className="mt-auto pt-7">
                  <span className="block h-[2px] w-10 rounded-full bg-[#15935e]/80 transition-all duration-300 group-hover:w-16" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
