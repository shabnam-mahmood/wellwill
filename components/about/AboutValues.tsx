"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Heart, Users, Leaf } from "lucide-react";

const values = [
  { icon:Heart, title:"Compassion", text:"People and communities come first. We care about their wellbeing and future.", color:"text-[#0875d1]", bg:"bg-[#e7f5ff]" },
  { icon:Users, title:"Transparency", text:"We believe in honest and responsible use of support and resources.", color:"text-[#15935e]", bg:"bg-[#e8f8ef]" },
  { icon:Leaf, title:"Sustainable Change", text:"We focus on practical solutions designed to create lasting impact.", color:"text-[#0875d1]", bg:"bg-[#e7f5ff]" },
];

export default function AboutValues() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-16">
        <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true,amount:0.25}} transition={{duration:0.8}} className="relative min-h-[390px] overflow-hidden rounded-[24px] sm:min-h-[520px]">
          <Image src="/images/about-values.jpg" alt="Child accessing water" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 48vw"/>
        </motion.div>
        <div>
          <motion.div initial={{opacity:0,x:25}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}} className="flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0866c5]">Our Values</span><span className="h-[2px] w-10 bg-[#0866c5]"/>
          </motion.div>
          <motion.h2 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.75}} className="mt-5 max-w-[560px] font-serif text-[42px] font-semibold leading-[1] tracking-[-0.035em] text-[#062a5e] sm:text-[50px]">
            Guided by purpose<span className="block text-[#0875d1]">and integrity.</span>
          </motion.h2>
          <div className="mt-8 space-y-7">
            {values.map((value,index)=>{
              const Icon=value.icon;
              return (
                <motion.div key={value.title} initial={{opacity:0,x:25}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.55,delay:index*0.12}} className="flex gap-5">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${value.bg} ${value.color}`}><Icon size={26} strokeWidth={1.8}/></div>
                  <div><h3 className="font-serif text-xl font-semibold text-[#062a5e]">{value.title}</h3><p className="mt-1 max-w-[460px] text-sm leading-6 text-[#53677f]">{value.text}</p></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
