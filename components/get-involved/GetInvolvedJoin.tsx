"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const points = [
  "Support practical and responsible water initiatives",
  "Partner with WellWill to reach more communities",
  "Contribute skills, resources, networks or awareness",
];

export default function GetInvolvedJoin() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[360px] overflow-hidden rounded-[26px] sm:min-h-[470px]"
        >
          <Image
            src="/images/involved-join.jpg"
            alt="Community water initiative"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 52vw"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#15935e]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.27em] text-[#60758d]">
              Together We Can
            </span>
          </div>

          <h2 className="mt-5 max-w-[650px] font-serif text-[40px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#062a5e] sm:text-[48px]">
            Help Turn Good Will
            <span className="block text-[#15935e]">Into Real Change.</span>
          </h2>

          <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-[#53677f]">
            Water is WellWill&apos;s beginning, but our long-term vision is
            wider wellbeing. Every donor, partner, volunteer and supporter can
            help us build responsible initiatives that create lasting value for
            communities.
          </p>

          <div className="mt-7 space-y-4">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-[#15935e]"
                  strokeWidth={1.8}
                />
                <span className="text-sm leading-6 text-[#40566f]">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-5 rounded-full bg-[#15935e] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#117c50]"
            >
              Talk to WellWill
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
