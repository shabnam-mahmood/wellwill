"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CurrentInitiative() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[350px] overflow-hidden rounded-[26px] sm:min-h-[470px]"
        >
          <Image
            src="/images/water-pump.jpg"
            alt="Water infrastructure used for a current water initiative"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#15935e]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.27em] text-[#60758d]">
              Current Initiative Pakistan
            </span>
          </div>

          <h2 className="mt-5 max-w-[700px] font-serif text-[40px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#062a5e] sm:text-[48px]">
            Approximately AED 250 can help fund a household
            <span className="text-[#15935e]"> water pump.</span>
          </h2>

          <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-[#53677f]">
            Our current household-pump initiative began in Pakistan. The
            approximate cost is AED 250 per installation for this project
            model, while actual costs can vary depending on location, technical
            requirements and the type of solution needed.
          </p>

          <p className="mt-4 max-w-[650px] text-[14px] leading-6 text-[#60758d]">
            Each project should be planned, installed and verified
            responsibly, with water quality considered where appropriate.
          </p>

          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8"
          >
            <Link
              href="/donate"
              className="group inline-flex items-center gap-5 rounded-full bg-[#15935e] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-green-900/10 transition-colors hover:bg-[#117c50]"
            >
              Sponsor a Water Pump
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
