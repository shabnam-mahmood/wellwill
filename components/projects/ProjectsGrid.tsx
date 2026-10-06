"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Clock3, Droplets, MapPin } from "lucide-react";

type Status = "Completed" | "In Progress" | "Planned";
type Filter = "All Projects" | Status;

type Project = {
  id: string;
  title: string;
  location: string;
  type: string;
  status: Status;
  progress?: number;
  detailLabel: string;
  detailValue: string;
};

const filters: Filter[] = [
  "All Projects",
  "Completed",
  "In Progress",
  "Planned",
];

const projects: Project[] = [
  // Verified completed household-pump records shared for the WellWill project.
  {
    id: "Pump Record 01",
    title: "Household Water Pump",
    location: "Dera Ghazi Khan, Pakistan",
    type: "Household Water Pump",
    status: "Completed",
    detailLabel: "Project Status",
    detailValue: "Completed",
  },
  {
    id: "Pump Record 02",
    title: "Household Water Pump",
    location: "Dera Ghazi Khan, Pakistan",
    type: "Household Water Pump",
    status: "Completed",
    detailLabel: "Project Status",
    detailValue: "Completed",
  },
  {
    id: "Pump Record 03",
    title: "Household Water Pump",
    location: "Dera Ghazi Khan, Pakistan",
    type: "Household Water Pump",
    status: "Completed",
    detailLabel: "Project Status",
    detailValue: "Completed",
  },
  {
    id: "Pump Record 04",
    title: "Household Water Pump",
    location: "Dera Ghazi Khan, Pakistan",
    type: "Household Water Pump",
    status: "Completed",
    detailLabel: "Project Status",
    detailValue: "Completed",
  },
  {
    id: "Pump Record 05",
    title: "Household Water Pump",
    location: "Dera Ghazi Khan, Pakistan",
    type: "Household Water Pump",
    status: "Completed",
    detailLabel: "Project Status",
    detailValue: "Completed",
  },

  // Ongoing cards are current website planning/demo entries.
  {
    id: "Ongoing Project 01",
    title: "Ongoing Water Project",
    location: "Dera Ghazi Khan, Pakistan",
    type: "Household Water Pump",
    status: "In Progress",
    progress: 60,
    detailLabel: "Expected Completion",
    detailValue: "Coming Soon",
  },
  {
    id: "Ongoing Project 02",
    title: "Ongoing Water Project",
    location: "Punjab, Pakistan",
    type: "Community Water Point",
    status: "In Progress",
    progress: 35,
    detailLabel: "Expected Completion",
    detailValue: "Coming Soon",
  },
  {
    id: "Ongoing Project 03",
    title: "Ongoing Water Project",
    location: "South Punjab, Pakistan",
    type: "Household Water Pumps",
    status: "In Progress",
    progress: 75,
    detailLabel: "Expected Completion",
    detailValue: "Coming Soon",
  },

  // Planned cards are current website planning/demo entries.
  {
    id: "Planned Project 01",
    title: "Planned Water Project",
    location: "Punjab, Pakistan",
    type: "Household Water Pumps",
    status: "Planned",
    detailLabel: "Estimated Start",
    detailValue: "Coming Soon",
  },
  {
    id: "Planned Project 02",
    title: "Planned Water Project",
    location: "Pakistan",
    type: "Community Water Point",
    status: "Planned",
    detailLabel: "Estimated Start",
    detailValue: "Coming Soon",
  },
];

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All Projects");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All Projects") return projects;
    return projects.filter((project) => project.status === activeFilter);
  }, [activeFilter]);

  return (
    <section className="bg-[#f5faff] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16">
        {/* FILTERS */}
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => {
            const active = filter === activeFilter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all sm:text-sm ${
                  active
                    ? "bg-[#0866c5] text-white shadow-md shadow-blue-900/10"
                    : "border border-[#dce8f1] bg-white text-[#40566f] hover:border-[#a8cee8] hover:bg-[#edf7fd] hover:text-[#0866c5]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* PROJECTS */}
        <motion.div
          layout
          className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

        <p className="mt-9 max-w-[900px] text-xs leading-5 text-[#718399]">
          Completed projects are based on WellWill&apos;s documented household
          water-pump records. Ongoing and planned entries are shown as current
          project planning information and will be updated as verified project
          details become available.
        </p>
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
  const completed = project.status === "Completed";
  const ongoing = project.status === "In Progress";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="rounded-[22px] border border-[#dde9f2] bg-white p-5 shadow-[0_10px_30px_rgba(6,42,94,0.045)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
            completed
              ? "bg-[#e8f8ef] text-[#15935e]"
              : ongoing
              ? "bg-[#e9f4ff] text-[#0866c5]"
              : "bg-[#eef1f5] text-[#718399]"
          }`}
        >
          {completed ? (
            <CheckCircle2 size={20} strokeWidth={1.8} />
          ) : ongoing ? (
            <Droplets size={20} strokeWidth={1.8} />
          ) : (
            <Clock3 size={20} strokeWidth={1.8} />
          )}
        </div>

        <StatusBadge status={project.status} />
      </div>

      <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#718399]">
        {project.id}
      </p>

      <h3 className="mt-2 font-serif text-[21px] font-semibold leading-6 text-[#062a5e]">
        {project.title}
      </h3>

      <div className="mt-3 flex items-start gap-2 text-[12px] leading-5 text-[#53677f]">
        <MapPin size={15} className="mt-0.5 shrink-0 text-[#0866c5]" />
        <span>{project.location}</span>
      </div>

      {typeof project.progress === "number" && (
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between text-xs font-semibold">
            <span className="text-[#60758d]">Progress</span>
            <span className="text-[#062a5e]">{project.progress}%</span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-[#e7eef5]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${project.progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="h-full rounded-full bg-[#1684e8]"
            />
          </div>
        </div>
      )}

      <div className="mt-5 border-t border-[#e3ebf2] pt-4">
        <p className="text-[11px] text-[#7a8c9f]">Project Type</p>
        <p className="mt-1 text-sm font-medium text-[#27445f]">
          {project.type}
        </p>

        <p className="mt-4 text-[11px] text-[#7a8c9f]">
          {project.detailLabel}
        </p>
        <p
          className={`mt-1 text-sm font-semibold ${
            completed
              ? "text-[#15935e]"
              : ongoing
              ? "text-[#0866c5]"
              : "text-[#53677f]"
          }`}
        >
          {project.detailValue}
        </p>
      </div>
    </motion.article>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const styles =
    status === "Completed"
      ? "bg-[#e7f8ef] text-[#15935e]"
      : status === "In Progress"
      ? "bg-[#e8f3ff] text-[#0866c5]"
      : "bg-[#eef1f5] text-[#60758d]";

  return (
    <span
      className={`rounded-full px-3 py-1.5 text-[10px] font-semibold ${styles}`}
    >
      {status}
    </span>
  );
}
