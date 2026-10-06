"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Droplets, Users, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Healthier Communities",
    text: "Reliable water access supports stronger, healthier lives.",
  },
  {
    icon: Users,
    title: "Brighter Futures",
    text: "Reliable water access gives children and families more opportunity.",
  },
  {
    icon: ShieldCheck,
    title: "Sustainable Solutions",
    text: "We focus on long-term water solutions for generations to come.",
  },
];

export default function Mission() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[#eaf6ff] blur-3xl" />
      
      <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#edf9f3] blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-12 px-6 md:px-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:px-16">

        {/* LEFT SIDE */}
        <div>
          
          {/* Small heading */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65 }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="h-[2px] w-11 bg-[#2a915e]" />

            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#65758b]">
              Our Mission
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[720px] font-serif text-[44px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#062a5e] sm:text-[56px] lg:text-[64px]"
          >
            Water changes
            <span className="block text-[#15935e]">
              everything.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.12,
            }}
            className="mt-7 max-w-[690px] text-base leading-7 text-[#334b68] sm:text-lg sm:leading-8"
          >
            Reliable water access can support healthier families, strengthen
            communities, and create more opportunity. At WellWill, we focus on
            practical water solutions designed around local needs and conditions.
          </motion.p>

          {/* Benefit cards */}
          <div className="mt-9 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <motion.div
                  key={benefit.title}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.4,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group"
                >
                  {/* Icon */}
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#edf7ff] text-[#0866c5] transition-transform duration-300 group-hover:scale-110">
                    <Icon
                      size={29}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-semibold leading-6 text-[#062a5e]">
                    {benefit.title}
                  </h3>

                  {/* Text */}
                  <p className="mt-3 text-sm leading-6 text-[#687b91]">
                    {benefit.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-[1fr_0.52fr]">

          {/* Girl image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.015,
            }}
            className="relative min-h-[420px] overflow-hidden rounded-[28px] sm:min-h-[570px]"
          >
            <Image
              src="/images/about-story-main.jpg"
              alt="Young girl accessing clean water"
              fill
              className="object-cover transition-transform duration-700 hover:scale-[1.04]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 65vw, 35vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#062a5e]/15 via-transparent to-transparent" />
          </motion.div>

          {/* Quote and river column */}
          <div className="grid gap-5 sm:grid-rows-[1fr_0.9fr]">

            {/* Quote */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 0.75,
                delay: 0.15,
              }}
              whileHover={{
                y: -5,
              }}
              className="flex min-h-[250px] flex-col justify-center rounded-[28px] bg-gradient-to-br from-[#f5fbff] to-[#edf7ff] p-7 sm:p-8"
            >
              {/* Quotation mark */}
              <div className="mb-3 font-serif text-[70px] font-bold leading-[0.7] text-[#0866c5]">
                “
              </div>

              <blockquote className="font-serif text-[27px] italic leading-[1.15] text-[#062a5e]">
                Reliable water today, brighter tomorrows for generations.
              </blockquote>

              <span className="mt-6 h-[2px] w-10 bg-[#2a915e]" />
            </motion.div>

            {/* River image */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.75,
                delay: 0.28,
              }}
              whileHover={{
                y: -4,
              }}
              className="relative min-h-[260px] overflow-hidden rounded-[28px]"
            >
              <Image
                src="/images/mission-river.jpg"
                alt="Fresh mountain river"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 640px) 100vw, 25vw"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom decorative waves */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 opacity-60">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="h-[60px] w-full sm:h-[80px]"
        >
          <path
            d="M0 65 C240 10 410 100 690 58 C970 15 1170 95 1440 38"
            fill="none"
            stroke="#d8efff"
            strokeWidth="18"
          />

          <path
            d="M0 78 C260 28 430 110 710 72 C980 35 1200 100 1440 55"
            fill="none"
            stroke="#a8d9fa"
            strokeWidth="5"
          />
        </svg>
      </div>
    </section>
  );
}