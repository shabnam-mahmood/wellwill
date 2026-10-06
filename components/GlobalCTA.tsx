"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function GlobalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#06376f]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#052f66] via-[#075b9f] to-[#06376f]" />

        <motion.div
          animate={{ x: ["-16%", "8%", "-16%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-[18%] top-[22%] h-[220px] w-[145%] rounded-[48%] bg-gradient-to-r from-[#06417d]/35 via-[#0b71bd]/55 to-[#0a5c9f]/30"
        />

        <motion.div
          animate={{ x: ["10%", "-12%", "10%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-[20%] top-[46%] h-[240px] w-[145%] rounded-[50%] bg-gradient-to-r from-[#0875c8]/20 via-[#1593d3]/42 to-[#0875c8]/20"
        />

        <motion.div
          animate={{ x: ["-10%", "12%", "-10%"] }}
          transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-[18%] bottom-[-115px] h-[245px] w-[142%] rounded-[50%] bg-gradient-to-r from-[#0f74b9]/25 via-[#24a9e8]/35 to-[#0b5fa9]/25"
        />

        <motion.div
          animate={{ x: ["-40%", "140%"] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
          className="absolute top-0 h-full w-[16%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/8 to-transparent blur-xl"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#052f66]/10 via-transparent to-[#042b5b]/22" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-8 px-6 pb-28 pt-14 sm:px-8 sm:pb-32 lg:grid-cols-[1fr_auto] lg:px-16 lg:pb-32 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-[760px]"
        >
         

          <h2 className="mt-4 font-serif text-[34px] font-semibold leading-[1.05] text-white sm:text-[40px] lg:text-[43px]">
            Water changes lives.
            <span className="block">You can help make it happen.</span>
          </h2>

          <p className="mt-4 max-w-[680px] text-sm leading-6 text-[#d0dfed] sm:text-[15px]">
            Support a community through a donation, or tell us about a place
            that needs water support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center lg:justify-end"
        >
          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/donate"
              className="inline-flex min-h-[54px] w-full min-w-[180px] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-white px-8 py-4 text-sm font-semibold shadow-[0_10px_25px_rgba(0,0,0,0.14)] transition-all duration-300 hover:bg-[#eaf7ff] sm:w-auto"
              style={{ color: "#06376f" }}
            >
              Donate Now
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/water-survey"
              className="inline-flex min-h-[54px] w-full min-w-[220px] shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-white/80 bg-white/10 px-8 py-4 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:w-auto"
              style={{ color: "#ffffff" }}
            >
              Need Water Support
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-[-1px] left-0 right-0 z-30">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="block h-[62px] w-full sm:h-[76px] lg:h-[86px]"
          aria-hidden="true"
        >
          <path
            d="M0,58 C160,98 320,92 500,62 C680,30 825,25 995,60 C1165,95 1295,90 1440,45 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
