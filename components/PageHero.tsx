"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

type PageHeroProps = { title: string };

export default function PageHero({ title }: PageHeroProps) {
  return (
    <section className="relative min-h-[220px] overflow-hidden pt-[100px] sm:min-h-[250px]">
      <Image src="/images/page-hero-water.jpg" alt="" fill priority className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/65 to-white/5" />
      <div className="relative z-10 mx-auto flex min-h-[150px] max-w-[1440px] items-center px-6 sm:px-8 lg:px-16">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <h1 className="font-serif text-[44px] font-semibold tracking-[-0.035em] text-[#062a5e] sm:text-[52px] lg:text-[58px]">{title}</h1>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <Link href="/" className="text-[#53677f] transition-colors hover:text-[#0866c5]">Home</Link>
            <ChevronRight size={15} className="text-[#7890a8]" />
            <span className="font-medium text-[#0866c5]">{title}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
