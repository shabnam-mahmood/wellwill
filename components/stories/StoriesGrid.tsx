"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, MapPin, X } from "lucide-react";

type Story = {
  image: string;
  tag: string;
  title: string;
  location: string;
  text: string;
  fullText: string[];
};

const stories: Story[] = [
  {
    image: "/images/story3.jpg",
    tag: "Completed Project",
    title: "Water Closer to Home",
    location: "Dera Ghazi Khan, Pakistan",
    text:
      "A completed WellWill household water-pump project created a more practical source of water access for a local family.",
    fullText: [
      "This project began with a simple need: improving reliable water access for a household in Dera Ghazi Khan. After the need was identified, a household water pump was selected as a practical solution for the location.",
      "The pump was installed and the project was documented as completed. Having a water source closer to the household can make everyday water collection more convenient and reduce the distance a family needs to travel for routine water needs.",
      "For WellWill, projects like this represent the first step in a wider mission responding to practical needs with responsible, locally appropriate solutions and documenting each completed project.",
      "The beneficiary’s personal details are kept private. This story is based on WellWill’s documented completed household water-pump project record.",
    ],
  },
  {
    image: "/images/story2.jpg",
    tag: "Completed Project",
    title: "A Practical Solution for Everyday Life",
    location: "Dera Ghazi Khan, Pakistan",
    text:
      "One of WellWill’s completed pump projects shows how a simple local solution can support more dependable everyday water access.",
    fullText: [
      "In Dera Ghazi Khan, WellWill documented another completed household water-pump project for a family requiring more reliable access to water.",
      "Rather than applying the same solution everywhere, WellWill’s approach is to consider local need and suitability. For this household, a water pump was used as the practical project model.",
      "Following installation, the project was recorded as completed. The aim is straightforward: help make routine access to water more dependable while building a responsible process that can be repeated as WellWill reaches more communities.",
      "No personal beneficiary information is published in this story. The project details are presented from WellWill’s completed project documentation.",
    ],
  },
  {
    image: "/images/story1.jpg",
    tag: "Completed Project",
    title: "One Project, Part of a Bigger Journey",
    location: "Dera Ghazi Khan, Pakistan",
    text:
      "A completed household pump project became part of WellWill’s growing effort to turn small, responsible actions into lasting community support.",
    fullText: [
      "WellWill’s water journey is being built one project at a time. This completed household water-pump project in Dera Ghazi Khan is one of the documented projects that mark the beginning of that journey.",
      "The project focused on a basic but important objective: provide a practical household-level water solution where it was considered suitable. The installation was completed and recorded as part of WellWill’s project documentation.",
      "The significance of the project goes beyond a single pump. Each completed project helps WellWill improve how needs are identified, solutions are delivered and future work is planned.",
      "Water is WellWill’s starting point, with a wider ambition to support healthier, stronger communities over time. Beneficiary identity and private household details are not published.",
    ],
  },
];

export default function StoriesGrid() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedStory ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedStory]);

  return (
    <>
      <section className="bg-[#f5faff] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16">
          <div className="grid gap-5 lg:grid-cols-3">
            {stories.map((story, index) => (
              <motion.article
                key={story.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-[22px] border border-[#e0ebf3] bg-white shadow-[0_8px_30px_rgba(6,42,94,0.04)]"
              >
                <div className="relative h-[260px] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />

                  <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-[11px] font-semibold text-[#062a5e] shadow-sm backdrop-blur-sm">
                    {story.tag}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-[25px] font-semibold leading-7 text-[#062a5e]">
                    {story.title}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-xs text-[#15935e]">
                    <MapPin size={14} />
                    {story.location}
                  </div>

                  <p className="mt-4 text-sm leading-6 text-[#60758d]">
                    {story.text}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedStory(story)}
                    className="group mt-6 inline-flex items-center gap-4 text-sm font-semibold text-[#0866c5]"
                  >
                    Read More
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="mt-6 max-w-[900px] text-xs leading-5 text-[#718399]">
            These stories are based on WellWill&apos;s documented completed
            household water-pump projects. Personal beneficiary details are kept
            private.
          </p>
        </div>
      </section>

      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStory(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#031d3a]/70 p-4 backdrop-blur-sm sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-[880px] overflow-y-auto rounded-[28px] bg-white shadow-[0_30px_90px_rgba(0,0,0,0.25)]"
            >
              <button
                type="button"
                aria-label="Close story"
                onClick={() => setSelectedStory(null)}
                className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-[#062a5e] shadow-md transition hover:bg-[#eef8ff]"
              >
                <X size={20} />
              </button>

              <div className="relative h-[260px] overflow-hidden rounded-t-[28px] sm:h-[340px]">
                <Image
                  src={selectedStory.image}
                  alt={selectedStory.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 900px) 100vw, 880px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#062a5e]/55 via-transparent to-transparent" />

                <span className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-[11px] font-semibold text-[#062a5e] shadow-sm">
                  {selectedStory.tag}
                </span>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-2 text-sm font-medium text-[#15935e]">
                  <MapPin size={16} />
                  {selectedStory.location}
                </div>

                <h2 className="mt-4 max-w-[720px] font-serif text-[34px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#062a5e] sm:text-[42px]">
                  {selectedStory.title}
                </h2>

                <div className="mt-6 space-y-5 text-[15px] leading-7 text-[#53677f] sm:text-base sm:leading-8">
                  {selectedStory.fullText.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 rounded-[18px] bg-[#eef8ff] p-5">
                  <p className="text-sm leading-6 text-[#40566f]">
                    <strong className="font-semibold text-[#062a5e]">
                      Privacy:
                    </strong>{" "}
                    WellWill does not publish beneficiary names, identification
                    numbers or exact private household addresses in public
                    project stories.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
