"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How can I request water support for my community?",
    answer: (
      <>
        Complete the{" "}
        <Link
          href="/water-survey"
          className="font-semibold text-[#0866c5] hover:underline"
        >
          Water Survey
        </Link>{" "}
        with accurate details about your community and water needs. WellWill can
        then review the information and assess an appropriate next step.
      </>
    ),
  },
  {
    question: "How can I make a donation?",
    answer: (
      <>
        Visit the donation section on our{" "}
        <Link
          href="/get-involved#donate"
          className="font-semibold text-[#0866c5] hover:underline"
        >
          Get Involved page
        </Link>{" "}
        to learn about the current initiative and ways to support it.
      </>
    ),
  },
  {
    question: "Can I partner with WellWill?",
    answer:
      "Yes. Organizations, companies and local partners can contact WellWill through the form above to discuss suitable collaboration opportunities.",
  },
  {
    question: "Can I volunteer?",
    answer:
      "Yes. You can offer your time, professional skills, experience or other useful resources. Use the contact form and select Volunteering as the subject.",
  },
  {
    question: "How do I know my support is being used responsibly?",
    answer:
      "WellWill aims to review project needs, technical suitability and project records carefully. Verified project information and updates can be shared as projects are implemented and documented.",
  },
  {
    question: "How can I stay updated on your work?",
    answer: (
      <>
        Explore our{" "}
        <Link
          href="/projects"
          className="font-semibold text-[#0866c5] hover:underline"
        >
          Projects
        </Link>{" "}
        and{" "}
        <Link
          href="/stories"
          className="font-semibold text-[#0866c5] hover:underline"
        >
          Stories
        </Link>{" "}
        pages for updates as WellWill&apos;s work grows.
      </>
    ),
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f5faff] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="max-w-[800px]"
        >
          <div className="flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#15935e]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.27em] text-[#60758d]">
              FAQ
            </span>
          </div>

          <h2 className="mt-5 font-serif text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#062a5e] sm:text-[48px]">
            Frequently Asked
            <span className="text-[#15935e]"> Questions</span>
          </h2>

          <p className="mt-4 max-w-[720px] text-sm leading-6 text-[#60758d] sm:text-[15px]">
            Find quick answers to some of the most common questions. If you
            still need help, contact us using the form above.
          </p>
        </motion.div>

        <div className="mt-9 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="self-start overflow-hidden rounded-[16px] border border-[#dfe8ef] bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-[#062a5e]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[#0866c5] transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="border-t border-[#edf2f6] px-5 py-4 text-sm leading-6 text-[#60758d]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
