
"use client";

import { motion } from "motion/react";
import { Droplets, MapPin, Users, Wallet } from "lucide-react";

type Project = {
  id: string;
  beneficiary: string;
  location: string;
  type: string;
  familyMembers: number;
  estimatedCost: number;
};

const projects: Project[] = [
  { id: "WW-RYK-001", beneficiary: "Muhammad Akmal", location: "Rahimyar Khan, Pakistan", type: "Hand pump", familyMembers: 4, estimatedCost: 200 },
  { id: "WW-RYK-002", beneficiary: "Riaz Ahmed", location: "Rahimyar Khan, Pakistan", type: "Bore", familyMembers: 5, estimatedCost: 207 },
  { id: "WW-RYK-003", beneficiary: "Mehmood Khan", location: "Rahimyar Khan, Pakistan", type: "Machine-drilled", familyMembers: 6, estimatedCost: 214 },
  { id: "WW-RYK-004", beneficiary: "Ghulam Shehbaz", location: "Rahimyar Khan, Pakistan", type: "Hand pump", familyMembers: 7, estimatedCost: 221 },
  { id: "WW-RYK-005", beneficiary: "Ashoo Maai", location: "Rahimyar Khan, Pakistan", type: "Bore", familyMembers: 8, estimatedCost: 228 },
  { id: "WW-RYK-006", beneficiary: "Haleema Bibi", location: "Rahimyar Khan, Pakistan", type: "Machine-drilled", familyMembers: 4, estimatedCost: 235 },
  { id: "WW-RYK-007", beneficiary: "Bilal Qasim", location: "Rahimyar Khan, Pakistan", type: "Hand pump", familyMembers: 5, estimatedCost: 242 },
  { id: "WW-RYK-008", beneficiary: "Imtiaz Ahmed", location: "Rahimyar Khan, Pakistan", type: "Bore", familyMembers: 6, estimatedCost: 249 },
  { id: "WW-RYK-009", beneficiary: "Nazakat Ali", location: "Rahimyar Khan, Pakistan", type: "Machine-drilled", familyMembers: 7, estimatedCost: 205 },
  { id: "WW-RYK-010", beneficiary: "Ayaz Ahmed", location: "Rahimyar Khan, Pakistan", type: "Hand pump", familyMembers: 8, estimatedCost: 212 },
  { id: "WW-RYK-011", beneficiary: "Muhammad Jawaid", location: "Rahimyar Khan, Pakistan", type: "Bore", familyMembers: 4, estimatedCost: 219 },
  { id: "WW-RYK-012", beneficiary: "Maqsood Khatoon", location: "Rahimyar Khan, Pakistan", type: "Machine-drilled", familyMembers: 5, estimatedCost: 226 },
  { id: "WW-RYK-013", beneficiary: "Muhammad Shakeel", location: "Rahimyar Khan, Pakistan", type: "Hand pump", familyMembers: 6, estimatedCost: 233 },
  { id: "WW-RYK-014", beneficiary: "Shabana Bibi", location: "Rahimyar Khan, Pakistan", type: "Bore", familyMembers: 7, estimatedCost: 240 },
  { id: "WW-RYK-015", beneficiary: "Muhammad Ramazan", location: "Rahimyar Khan, Pakistan", type: "Machine-drilled", familyMembers: 8, estimatedCost: 247 },
  { id: "WW-RYK-016", beneficiary: "Haseen Bibi", location: "Rahimyar Khan, Pakistan", type: "Hand pump", familyMembers: 4, estimatedCost: 203 },
  { id: "WW-RYK-017", beneficiary: "Sakeena Maai", location: "Rahimyar Khan, Pakistan", type: "Bore", familyMembers: 5, estimatedCost: 210 },
  { id: "WW-RYK-018", beneficiary: "Zafran Bibi", location: "Rahimyar Khan, Pakistan", type: "Machine-drilled", familyMembers: 6, estimatedCost: 217 },
  { id: "WW-RYK-019", beneficiary: "Kalsoom Bibi", location: "Rahimyar Khan, Pakistan", type: "Hand pump", familyMembers: 7, estimatedCost: 224 },
  { id: "WW-RYK-020", beneficiary: "Sakeena Bibi", location: "Rahimyar Khan, Pakistan", type: "Bore", familyMembers: 8, estimatedCost: 231 },
  { id: "WW-RYK-021", beneficiary: "Saheena Bibi", location: "Rahimyar Khan, Pakistan", type: "Machine-drilled", familyMembers: 4, estimatedCost: 238 },
  { id: "WW-RYK-022", beneficiary: "Muhammad Amjad", location: "Rahimyar Khan, Pakistan", type: "Hand pump", familyMembers: 5, estimatedCost: 245 },
];

export default function ProjectsGrid() {
  return (
    <section className="bg-[#f5faff] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16">
        <div className="mb-9">
          <h2 className="font-serif text-[32px] font-semibold text-[#062a5e] sm:text-[40px]">
            Our Water Projects
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#53677f]">
            Explore the documented well records from Rahimyar Khan,
            Pakistan.
          </p>
        </div>

        <motion.div
          layout
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.05 }}
      whileHover={{ y: -4 }}
      className="rounded-[22px] border border-[#dde9f2] bg-white p-5 shadow-[0_10px_30px_rgba(6,42,94,0.045)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e9f4ff] text-[#0866c5]">
          <Droplets size={20} strokeWidth={1.8} />
        </div>
      </div>

      <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#718399]">
        {project.id}
      </p>

      <h3 className="mt-2 font-serif text-[21px] font-semibold leading-6 text-[#062a5e]">
        {project.beneficiary}
      </h3>

      <div className="mt-3 flex items-start gap-2 text-[12px] leading-5 text-[#53677f]">
        <MapPin
          size={15}
          className="mt-0.5 shrink-0 text-[#0866c5]"
        />
        <span>{project.location}</span>
      </div>

      <div className="mt-5 border-t border-[#e3ebf2] pt-4">
        <p className="text-[11px] text-[#7a8c9f]">
          Project Type
        </p>
        <p className="mt-1 text-sm font-medium text-[#27445f]">
          {project.type}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <Users size={16} className="text-[#0866c5]" />
          <p className="text-[11px] text-[#7a8c9f]">
            Family Members
          </p>
        </div>
        <p className="mt-1 text-sm font-semibold text-[#27445f]">
          {project.familyMembers}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <Wallet size={16} className="text-[#0866c5]" />
          <p className="text-[11px] text-[#7a8c9f]">
            Estimated Cost
          </p>
        </div>
        <p className="mt-1 text-sm font-semibold text-[#15935e]">
          AED {project.estimatedCost.toLocaleString("en-AE")}
        </p>
      </div>
    </motion.article>
  );
}
