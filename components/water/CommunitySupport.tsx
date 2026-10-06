"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CommunitySupport() {
  return (
    <section className="bg-[#f3faff] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
          className="flex flex-col gap-8 rounded-[26px] border border-[#e1edf4] bg-white px-7 py-9 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12"
        >
          <div className="max-w-[780px]">
         
            <h2 className="mt-4 font-serif text-[38px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#062a5e] sm:text-[46px]">
              Need Water in
              <span className="text-[#15935e]"> Your Community?</span>
            </h2>

            <p className="mt-4 max-w-[720px] text-sm leading-6 text-[#53677f] sm:text-[15px]">
              If your community is facing water challenges, you can reach out
              to us. We review requests with local partners and assess each need
              based on feasibility and available resources.
            </p>
          </div>

          <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/contact"
              className="group inline-flex min-w-[190px] items-center justify-center gap-4 rounded-full bg-[#0866c5] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0759ac]"
            >
              Submit a Request
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
