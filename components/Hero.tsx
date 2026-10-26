"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Droplets, Heart, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#f7fbff]">
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-water.jpg"
          alt="WellWill water initiative in Pakistan"
          fill
          priority
          className="object-cover object-[78%_center] sm:object-[72%_center] lg:object-center"
          sizes="100vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/25 sm:via-white/90 sm:to-white/10 lg:from-white lg:via-white/90 lg:to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#062a5e]/20 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1440px] items-start px-6 pb-28 pt-28 sm:items-center sm:px-8 sm:pt-32 lg:px-16">
        <div className="max-w-[340px] sm:max-w-[560px] lg:max-w-[760px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mb-5 flex items-start gap-4 sm:mb-6 sm:items-center"
          >
           
          </motion.div>

          <h1 className="font-serif text-[40px] font-semibold leading-[0.98] tracking-[-0.035em] text-[#062a5e] sm:text-[52px] sm:leading-[1.02] lg:text-[62px] xl:text-[66px]">
            <motion.span
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="block"
            >
              The Will to Do Good.
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-3 block text-[#2a915e] sm:mt-2"
            >
              The Way to Live Well.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-6 max-w-[320px] text-[15px] leading-7 text-[#253d5b] sm:mt-7 sm:max-w-[620px] sm:text-lg sm:leading-8"
          >
            <strong className="font-semibold text-[#062a5e]">
              Our journey begins with water.
            </strong>{" "}
            WellWill is a humanitarian initiative beginning in Pakistan,
            helping underserved families gain better access to reliable water with a vision for wellbeing that goes far beyond water.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            className="mt-8 flex w-full max-w-[320px] flex-col gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/water-survey"
                className="group flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full bg-[#0866c5] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/10 transition-colors duration-300 hover:bg-[#0759ac] sm:w-auto sm:px-7 sm:text-base"
              >
                <Droplets size={19} />
                Need Water Support
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/donate"
                className="group flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full border border-[#2a915e] bg-white/95 px-6 py-4 text-sm font-semibold text-[#176b49] shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-[#2a915e] hover:text-white sm:w-auto sm:px-7 sm:text-base"
              >
                <Heart size={18} />
                Donate Now
                <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="mt-4 max-w-[300px] text-[13px] leading-5 text-[#53677f] sm:max-w-none sm:text-sm"
          >
            Need support for your community, or want to help one? Start here.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-[#062a5e]/20 text-white backdrop-blur-sm"
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-[58px] w-full sm:h-[90px] lg:h-[95px]"
        >
          <motion.path
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            d="M0,55 C260,135 470,35 720,72 C970,108 1180,30 1440,58 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
