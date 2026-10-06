"use client";

import { motion } from "motion/react";
import { Handshake, Leaf, ShieldCheck, Users } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Community Based",
  },
  {
    icon: Handshake,
    title: "Locally Implemented",
  },
  {
    icon: ShieldCheck,
    title: "Responsible Delivery",
  },
  {
    icon: Leaf,
    title: "Sustainable Solutions",
  },
];

export default function ProjectsIntro() {
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
              Our Projects
            </span>
          </div>

          <h2 className="mt-5 max-w-[720px] font-serif text-[42px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#062a5e] sm:text-[52px]">
            Community Projects
            <span className="block text-[#15935e]">
              Creating Lasting Change.
            </span>
          </h2>

          <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-[#53677f] sm:text-base">
            WellWill projects begin with local need. We work with communities
            and trusted partners to identify practical water solutions,
            implement them responsibly and document the result.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75 }}
          className="grid gap-4 rounded-[28px] bg-[#f4f9fd] p-5 sm:grid-cols-2 sm:p-7"
        >
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-4 rounded-[18px] bg-white p-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e9f5ff] text-[#0866c5]">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <h3 className="font-serif text-[18px] font-semibold leading-5 text-[#062a5e]">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
