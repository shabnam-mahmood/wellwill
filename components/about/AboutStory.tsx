"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function AboutStory() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-16">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8 }} className="relative mx-auto w-full max-w-[610px] pb-16 sm:pb-20">
          <div className="relative h-[380px] overflow-hidden rounded-[80px_220px_80px_80px] sm:h-[480px]">
            <Image src="/images/about-story-main.jpg" alt="Community accessing water" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.85, y: 30 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.25 }} className="absolute bottom-0 right-0 h-[210px] w-[230px] overflow-hidden rounded-full border-[7px] border-white shadow-xl sm:h-[270px] sm:w-[290px]">
            <Image src="/images/about-story-small.jpg" alt="WellWill water project" fill className="object-cover" sizes="290px" />
          </motion.div>
        </motion.div>

        <div>
          <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0866c5]">Our Story</span>
            <span className="h-[2px] w-10 bg-[#0866c5]" />
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }} className="mt-5 font-serif text-[42px] font-semibold leading-[1] tracking-[-0.035em] text-[#062a5e] sm:text-[52px]">
            Small Acts.<span className="block text-[#15935e]">Lasting Wellbeing.</span>
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-6 max-w-[600px] space-y-4 text-[15px] leading-7 text-[#53677f] sm:text-base">
            <p>WellWill was created around a simple belief: when people have the essentials of life, they have a better opportunity to thrive.</p>
            <p>Our journey begins by improving access to reliable water for underserved families in Pakistan — but our vision goes much further. We aim to support healthier communities through long-term initiatives in health, education, nutrition, environment, livelihood and community wellbeing.</p>
          </motion.div>

         <motion.div
  initial={{ opacity: 0, y: 15 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.25 }}
  className="mt-7"
>
  <Link
    href="/projects"
    className="group inline-flex items-center gap-5 rounded-full bg-[#0866c5] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#0759ac]"
  >
    Our Projects
    <ArrowRight
      size={17}
      className="transition-transform group-hover:translate-x-1"
    />
  </Link>
</motion.div>
        </div>
      </div>
    </section>
  );
}
