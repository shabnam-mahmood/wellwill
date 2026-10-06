"use client";

import { motion } from "motion/react";
import { Eye, Target } from "lucide-react";

const cards = [
  { label:"Our Mission", title1:"Helping people", title2:"live well.", text:"Beginning with practical water initiatives and growing into meaningful programs that support health, education, opportunity and community wellbeing.", icon:Target, bg:"from-[#edf8ff] to-[#f7fcff]", iconBg:"bg-[#dff2ff]", iconColor:"text-[#0875d1]" },
  { label:"Our Vision", title1:"From water", title2:"to wellbeing.", text:"A future where more communities have the essentials and opportunities they need to live healthier, learn better, grow stronger and build brighter futures.", icon:Eye, bg:"from-[#effaf4] to-[#f8fcf9]", iconBg:"bg-[#daf4e6]", iconColor:"text-[#15935e]" },
];

export default function MissionVision() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="mx-auto grid max-w-[1440px] gap-5 px-6 sm:px-8 md:grid-cols-2 lg:px-16">
        {cards.map((card,index) => {
          const Icon=card.icon;
          return (
            <motion.div key={card.label} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.3}} transition={{duration:0.65,delay:index*0.12}} whileHover={{y:-5}} className={`rounded-[24px] border border-[#e5eef4] bg-gradient-to-br ${card.bg} p-7 sm:p-9`}>
              <div className="flex gap-6">
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${card.iconBg} ${card.iconColor}`}><Icon size={29} strokeWidth={1.8}/></div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#60758d]">{card.label}</p>
                  <h3 className="mt-3 font-serif text-[30px] font-semibold leading-[1.02] text-[#062a5e] sm:text-[34px]">{card.title1}<span className="block text-[#15935e]">{card.title2}</span></h3>
                  <div className="mt-4 h-[2px] w-10 bg-[#15935e]" />
                  <p className="mt-5 max-w-[500px] text-sm leading-6 text-[#53677f] sm:text-[15px]">{card.text}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
