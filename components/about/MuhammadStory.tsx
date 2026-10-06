"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function MuhammadStory() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#eef8ff] py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-white/70 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#e8f7f0]/70 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 xl:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto w-full max-w-[390px] lg:mx-0"
            >
              <div className="relative aspect-square overflow-hidden rounded-full border-[10px] border-white/80 shadow-[0_22px_60px_rgba(6,42,94,0.12)]">
                <Image
                  src="/images/muhammad-bin-majid.jpg"
                  alt="Muhammad Bin Majid"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 360px, 390px"
                />
              </div>
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-5 flex items-center gap-4"
              >
                <span className="h-[2px] w-11 bg-[#15935e]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#58708a] sm:text-xs">
                  The Story Behind WellWill
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif text-[42px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#062a5e] sm:text-[52px] lg:text-[58px]"
              >
                A Young Idea.
                <span className="block text-[#15935e]">A Global Ambition.</span>
              </motion.h2>

              <div className="mt-7 max-w-[820px] space-y-5 text-[15px] leading-7 text-[#4f657d] sm:text-base sm:leading-8">
                <p>
                  WellWill began with Muhammad&apos;s desire to create something meaningful that could genuinely improve people&apos;s everyday lives.
                  With a strong interest in technology, problem-solving and building new ideas, Muhammad developed a habit of looking at challenges by asking a simple question: <strong className="font-semibold text-[#314963]">what practical solution can make a real difference?</strong> Over time, that way of thinking grew beyond technology and toward needs that affect families and communities at the most basic level.
                  Water became the natural place to begin. Reliable access to water can make daily life easier, support healthier families and create a stronger foundation for communities. Muhammad saw that even a simple water project could become the beginning of something much bigger.
                </p>

                <p>
                  That idea became <strong className="font-semibold text-[#062a5e]">WellWill</strong> — built around two simple thoughts: the <strong className="font-semibold text-[#314963]">will to do good</strong> and the opportunity for people to <strong className="font-semibold text-[#314963]">live well</strong>.
                  The journey begins with household water projects in Pakistan, but the vision reaches much further. Muhammad wants WellWill to grow into an initiative that supports healthier and stronger communities through water, health, education, nutrition, opportunity and other essential areas of wellbeing.
                </p>

                <p>
                  For Muhammad, WellWill is not about one person or one project. It is about creating a platform where small, responsible actions can grow into lasting change — and where more people can become part of that journey.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.2 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6"
              >
                <h3 className="font-serif text-[28px] font-semibold leading-tight text-[#062a5e] sm:text-[31px]">
                  Be a part of this journey.
                </h3>

                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/donate"
                    className="group inline-flex min-h-[52px] items-center justify-center gap-4 whitespace-nowrap rounded-full bg-[#0866c5] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(8,102,197,0.20)] transition-colors duration-300 hover:bg-[#0759ac] sm:text-base"
                  >
                    Donate Now
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-12 bg-white sm:h-16 lg:h-20" aria-hidden="true" />
    </>
  );
}
