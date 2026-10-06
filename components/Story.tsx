"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Story() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-22">
      {/* Background */}
      <div className="absolute inset-0">
        
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Animated decorative droplets */}
      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, 16, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[10%] top-[20%] hidden h-4 w-4 rounded-[60%_40%_65%_35%] bg-[#8dd8f8]/30 blur-[0.5px] sm:block"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, -18, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.7,
        }}
        className="pointer-events-none absolute right-[12%] top-[27%] hidden h-6 w-6 rounded-[65%_35%_65%_35%] bg-[#70c9ef]/25 sm:block"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, 10, 0],
          opacity: [0.2, 0.55, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
        className="pointer-events-none absolute right-[21%] top-[17%] hidden h-2.5 w-2.5 rounded-full bg-[#15935e]/30 lg:block"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[1440px] justify-center px-6 sm:px-8 lg:px-16">
        <div className="max-w-[850px] text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="mb-5 h-[2px] w-11 bg-[#2a915e]" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#60758d] sm:text-xs">
              The Story Behind WellWill
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 font-serif text-[42px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#062a5e] sm:text-[50px] lg:text-[56px]"
          >
            A Young Idea.
            <span className="mt-1 block text-[#15935e]">
              A Global Ambition.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.12,
            }}
            className="mx-auto mt-6 max-w-[720px] text-[15px] leading-7 text-[#53677f] sm:text-base sm:leading-8"
          >
            WellWill began with Muhammad&apos;s simple desire to help others.
            What started with water is growing into a wider vision — creating
            meaningful opportunities for people and communities to live well.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.25,
            }}
            className="mt-8 flex justify-center"
          >
            <motion.div
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/about"
                className="group flex items-center gap-5 rounded-full bg-[#15935e] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-900/10 transition-colors duration-300 hover:bg-[#117c50] sm:text-base"
              >
                Read Our Story

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}