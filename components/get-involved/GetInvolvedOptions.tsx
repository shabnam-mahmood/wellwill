"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Handshake,
  Hand,
  Megaphone,
} from "lucide-react";

const donationAmounts = [
  { amount: "AED 250", text: "Approx. 1 household pump" },
  { amount: "AED 1,250", text: "Approx. 5 household pumps" },
  { amount: "AED 2,500", text: "Approx. 10 household pumps" },
  { amount: "AED 12,500", text: "Approx. 50 household pumps" },
];

const otherWays = [
  {
    image: "/images/involved-partner.jpg",
    icon: Handshake,
    title: "Partner With Us",
    text: "We welcome collaboration with companies, organizations and local partners that want to create meaningful, responsible impact.",
    label: "Partner With WellWill",
    href: "/contact",
  },
  {
    image: "/images/involved-volunteer.jpg",
    icon: Hand,
    title: "Volunteer",
    text: "Share your time, skills, experience or professional expertise to support WellWill initiatives and community work.",
    label: "Volunteer With Us",
    href: "/contact",
  },
  {
    image: "/images/involved-awareness.jpg",
    icon: Megaphone,
    title: "Spread Awareness",
    text: "Help more people discover the WellWill mission by sharing our work with your network, workplace or community.",
    label: "Discover Our Stories",
    href: "/stories",
  },
];

export default function GetInvolvedOptions() {
  return (
    <section className="bg-[#f5faff] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16">
        {/* Donation section */}
        <motion.div
          id="donate"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="scroll-mt-28 overflow-hidden rounded-[28px] border border-[#dce9f2] bg-white shadow-[0_12px_38px_rgba(6,42,94,0.05)]"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[330px] lg:min-h-[520px]">
              <Image
                src="/images/involved-donate.jpg"
                alt="Supporting a WellWill water initiative"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#062a5e]/35 via-transparent to-transparent" />
            </div>

            <div className="p-7 sm:p-9 lg:p-12">
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-10 bg-[#15935e]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.27em] text-[#60758d]">
                  Donate
                </span>
              </div>

              <h2 className="mt-5 max-w-[650px] font-serif text-[38px] font-semibold leading-[1.04] tracking-[-0.035em] text-[#062a5e] sm:text-[46px]">
                Give Water.
                <span className="block text-[#15935e]">
                  Create Lasting Change.
                </span>
              </h2>

              <p className="mt-6 max-w-[700px] text-[15px] leading-7 text-[#53677f]">
                Your contribution can help WellWill deliver practical water
                solutions for communities with limited access to reliable
                water. Our current initiative begins in Pakistan, with each
                project reviewed according to local needs and conditions.
              </p>

              <div className="mt-6 rounded-[18px] border border-[#d6e8f4] bg-[#f7fbfe] p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-[#15935e]"
                    strokeWidth={1.8}
                  />
                  <p className="text-sm leading-6 text-[#40566f]">
                    Under the current household-pump initiative, approximately{" "}
                    <strong className="font-semibold text-[#062a5e]">
                      AED 250
                    </strong>{" "}
                    can help fund one household water-pump installation.
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {donationAmounts.map((item) => (
                  <div
                    key={item.amount}
                    className="rounded-[16px] border border-[#dce9f2] bg-white p-4"
                  >
                    <p className="font-serif text-[22px] font-semibold text-[#062a5e]">
                      {item.amount}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#60758d]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 max-w-[680px] text-xs leading-5 text-[#7a8b9e]">
                Actual project requirements and costs may vary depending on the
                location, technical suitability and type of water solution.
              </p>

              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="mt-7"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-5 rounded-full bg-[#15935e] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#117c50]"
                >
                  I Want to Donate
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Other ways */}
        <div className="mt-16">
          <div className="max-w-[720px]">
            <div className="flex items-center gap-4">
              <span className="h-[2px] w-10 bg-[#15935e]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.27em] text-[#60758d]">
                More Ways to Help
              </span>
            </div>

            <h2 className="mt-5 font-serif text-[36px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#062a5e] sm:text-[44px]">
              Get Involved Beyond
              <span className="block text-[#15935e]">a Donation.</span>
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {otherWays.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="overflow-hidden rounded-[22px] border border-[#e0ebf3] bg-white shadow-[0_8px_30px_rgba(6,42,94,0.04)]"
                >
                  <div className="relative h-[230px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf6ff] text-[#0866c5]">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>

                      <h3 className="font-serif text-[22px] font-semibold text-[#062a5e]">
                        {card.title}
                      </h3>
                    </div>

                    <p className="mt-4 min-h-[96px] text-[13px] leading-6 text-[#60758d]">
                      {card.text}
                    </p>

                    <Link
                      href={card.href}
                      className="group mt-5 inline-flex items-center gap-4 rounded-full border border-[#8fc5eb] px-6 py-3 text-xs font-semibold text-[#0866c5] transition-colors hover:bg-[#edf7ff]"
                    >
                      {card.label}
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
