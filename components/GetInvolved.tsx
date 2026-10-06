"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Heart,
  Users,
  Megaphone,
} from "lucide-react";

const options = [
  {
    icon: Heart,
    title: "Support as a Donor",
    text: "Help us fund clean water projects and create lasting change.",
    href: "/donate",
    accent: "#38d6a2",
  },
  {
    icon: Users,
    title: "Partner with Us",
    text: "Work with us to expand our reach and create bigger impact together.",
    href: "/contact",
    accent: "#55b8ff",
  },
  {
    icon: Megaphone,
    title: "Spread the Word",
    text: "Share our mission and help us reach more communities around the world.",
    href: "/stories",
    accent: "#38d6a2",
  },
];

export default function GetInvolved() {
  return (
    <section className="relative overflow-hidden bg-[#062a5e] py-20 sm:py-24 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/get-involved-bg.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-[#031f49]/20" />
      </div>

      {/* Animated background glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-24 top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#0b75c9] blur-[100px]"
      />

      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-20 top-0 h-[320px] w-[320px] rounded-full bg-[#21c58b] blur-[110px]"
      />

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">

          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-4"
            >
              <span className="h-[2px] w-11 bg-[#38d6a2]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#a9bfd7] sm:text-xs">
                Get Involved
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[570px] font-serif text-[42px] font-semibold leading-[1.02] tracking-[-0.035em] text-white sm:text-[50px] lg:text-[56px]"
            >
              There&apos;s more than
              <span className="block">one way to</span>

              <span className="block text-[#38d6a2]">
                make a difference.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.12,
              }}
              className="mt-6 max-w-[560px] text-[15px] leading-7 text-[#b9c9da] sm:text-base sm:leading-8"
            >
              Whether you want to donate, partner, volunteer or spread the
              word, there are different ways to support WellWill and help
              create meaningful change.
            </motion.p>
          </div>

          {/* RIGHT OPTIONS */}
          <div className="grid sm:grid-cols-3">
            {options.map((option, index) => {
              const Icon = option.icon;

              return (
                <motion.div
                  key={option.title}
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
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: 0.12 + index * 0.12,
                  }}
                  className={`
                    group relative py-7
                    sm:px-7
                    lg:min-h-[330px]
                    ${
                      index !== 0
                        ? "border-t border-white/15 sm:border-l sm:border-t-0"
                        : ""
                    }
                  `}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 3,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 15,
                    }}
                    className="flex h-[74px] w-[74px] items-center justify-center rounded-full border border-white/20 bg-white/[0.04]"
                    style={{
                      color: option.accent,
                      borderColor: `${option.accent}80`,
                    }}
                  >
                    <Icon
                      size={31}
                      strokeWidth={1.7}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="mt-7 max-w-[190px] font-serif text-[25px] font-semibold leading-[1.08] text-white">
                    {option.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 max-w-[210px] text-sm leading-6 text-[#aebfd1]">
                    {option.text}
                  </p>

                  {/* Link */}
                  <Link
                    href={option.href}
                    className="mt-7 inline-flex items-center gap-4 text-sm font-semibold text-white"
                  >
                    <span className="relative">
                      Learn more

                      <motion.span
                        className="absolute -bottom-2 left-0 h-[2px] w-full origin-left"
                        style={{
                          backgroundColor: option.accent,
                        }}
                        initial={{ scaleX: 0.45 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: 0.4 + index * 0.1,
                        }}
                      />
                    </span>

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}