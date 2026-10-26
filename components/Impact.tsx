
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Droplets, ShieldCheck } from "lucide-react";

const donationOptions = [
  {
    amount: "AED 250",
    value: "250",
    detail: "Approx. 1 household pump",
  },
  {
    amount: "AED 500",
    value: "500",
    detail: "Approx. 2 household pumps",
  },
  {
    amount: "AED 1,250",
    value: "1250",
    detail: "Approx. 5 household pumps",
  },
  {
    amount: "AED 2,500",
    value: "2500",
    detail: "Approx. 10 household pumps",
  },
];

export default function Impact() {
  const [selectedAmount, setSelectedAmount] = useState("250");
  const [customAmount, setCustomAmount] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  const finalAmount = isCustom ? customAmount.trim() : selectedAmount;

  const validAmount =
    finalAmount !== "" &&
    Number.isFinite(Number(finalAmount)) &&
    Number(finalAmount) > 0;

  const donateHref = validAmount
    ? `/donate?amount=${encodeURIComponent(finalAmount)}`
    : "/donate";

  return (
    <section className="relative overflow-hidden bg-[#f5faff]">
      <div className="mx-auto grid min-h-[680px] max-w-[1700px] lg:grid-cols-[0.75fr_1.25fr]">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-h-[430px] overflow-hidden sm:min-h-[520px] lg:min-h-[680px]"
        >
          <Image
            src="/images/water-pump.jpg"
            alt="Children using a household water pump"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />

          <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-transparent to-[#f5faff]/55 lg:block" />

          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f5faff] to-transparent lg:hidden" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="relative flex items-center px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20 xl:px-16 2xl:px-20">

          <div className="pointer-events-none absolute -right-44 -top-36 h-[520px] w-[520px] rounded-full bg-[#e8f5ff] blur-3xl" />

          <div className="relative z-10 w-full max-w-[820px]">

            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-4"
            >
              <span className="h-[2px] w-11 bg-[#15935e]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#53677f] sm:text-xs">
                Make an Impact
              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[760px] font-serif text-[30px] font-semibold leading-[0.98] tracking-[-0.04em] text-[#062a5e] sm:text-[52px] lg:text-[58px] xl:text-[64px]"
            >
              Reliable Water.{" "}
              <span className="text-[#15935e]">
                Brighter Tomorrows.
              </span>
            </motion.h2>

            {/* INTRO */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="mt-6 max-w-[720px] text-[15px] leading-7 text-[#53677f] sm:text-base sm:leading-8"
            >
              Your support helps WellWill fund household water pumps and other
              suitable water solutions for communities that need more reliable
              access to water.
            </motion.p>

            {/* DONATION OPTIONS */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {donationOptions.map((option, index) => {
                const active =
                  !isCustom && selectedAmount === option.value;

                return (
                  <motion.div
                    key={option.value}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: 0.18 + index * 0.08,
                    }}
                    whileHover={{ y: -5, scale: 1.015 }}
                    whileTap={{ scale: 0.98 }}
                    className="h-full"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedAmount(option.value);
                        setIsCustom(false);
                      }}
                      aria-pressed={active}
                      aria-label={`Select ${option.amount}`}
                      className={`group block h-full w-full cursor-pointer rounded-[22px] border p-5 text-center shadow-[0_12px_32px_rgba(6,42,94,0.05)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0866c5] ${
                        active
                          ? "border-[#0866c5] bg-[#0866c5] text-white"
                          : "border-[#dce8f2] bg-white/90 text-[#062a5e] hover:border-[#0866c5] hover:bg-[#0866c5] hover:text-white hover:shadow-[0_16px_36px_rgba(6,42,94,0.12)]"
                      }`}
                    >
                      <div
                        className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 ${
                          active
                            ? "bg-white/15 text-white"
                            : "bg-[#eaf6ff] text-[#0866c5] group-hover:bg-white/15 group-hover:text-white"
                        }`}
                      >
                        <Droplets size={22} strokeWidth={1.8} />
                      </div>

                      <p
                        className={`mt-4 font-serif text-[24px] font-semibold leading-none transition-colors duration-300 ${
                          active
                            ? "text-white"
                            : "text-[#062a5e] group-hover:text-white"
                        }`}
                      >
                        {option.amount}
                      </p>

                      <p
                        className={`mt-3 text-[12px] leading-5 transition-colors duration-300 ${
                          active
                            ? "text-white/85"
                            : "text-[#687b91] group-hover:text-white/85"
                        }`}
                      >
                        {option.detail}
                      </p>
                    </button>
                  </motion.div>
                );
              })}
            </div>

            {/* OTHER AMOUNT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.45 }}
              className="mt-4"
            >
              <button
                type="button"
                onClick={() => setIsCustom(true)}
                aria-pressed={isCustom}
                aria-expanded={isCustom}
                aria-controls="wellwill-custom-amount"
                className={`group flex w-full items-center gap-4 rounded-[18px] border px-5 py-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0866c5] ${
                  isCustom
                    ? "border-[#0866c5] bg-[#0866c5] text-white"
                    : "border-[#dce8f2] bg-white/90 text-[#062a5e] hover:border-[#0866c5] hover:bg-[#0866c5] hover:text-white"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                    isCustom
                      ? "bg-white/15 text-white"
                      : "bg-[#eaf6ff] text-[#0866c5] group-hover:bg-white/15 group-hover:text-white"
                  }`}
                >
                  <Droplets size={20} strokeWidth={1.8} />
                </span>

                <span className="flex-1">
                  <span className="block text-sm font-semibold">
                    Other Amount
                  </span>
                  <span
                    className={`mt-1 block text-xs ${
                      isCustom
                        ? "text-white/85"
                        : "text-[#687b91] group-hover:text-white/85"
                    }`}
                  >
                    Choose an amount that works for you
                  </span>
                </span>

                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                    isCustom
                      ? "border-white"
                      : "border-[#a8bfd1] group-hover:border-white"
                  }`}
                >
                  {isCustom && (
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  )}
                </span>
              </button>

              {isCustom && (
                <motion.div
                  id="wellwill-custom-amount"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 rounded-[18px] border border-[#dce8f2] bg-white p-5">
                    <label
                      htmlFor="custom-donation-amount"
                      className="mb-3 block text-sm font-semibold text-[#062a5e]"
                    >
                      Enter your donation amount
                    </label>

                    <div className="flex items-center overflow-hidden rounded-xl border border-[#dce8f2] bg-[#f8fcff] focus-within:border-[#0866c5] focus-within:ring-2 focus-within:ring-[#0866c5]/15">
                      <span className="border-r border-[#dce8f2] px-4 py-3.5 text-sm font-semibold text-[#0866c5]">
                        AED
                      </span>

                      <input
                        id="custom-donation-amount"
                        type="number"
                        min="1"
                        step="0.01"
                        inputMode="decimal"
                        placeholder="Enter amount"
                        value={customAmount}
                        onChange={(event) =>
                          setCustomAmount(event.target.value)
                        }
                        className="w-full bg-transparent px-4 py-3.5 text-sm text-[#062a5e] outline-none placeholder:text-[#9aabbc]"
                      />
                    </div>

                    <p className="mt-2 text-xs leading-5 text-[#718399]">
                      Enter any positive amount you would like to contribute.
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* CTA ROW */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center"
            >
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                {validAmount ? (
                  <Link
                    href={donateHref}
                    className="group inline-flex min-h-[54px] min-w-[220px] items-center justify-center gap-4 rounded-full bg-[#15935e] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(21,147,94,0.2)] transition-colors duration-300 hover:bg-[#117c50] sm:text-base"
                  >
                    Donate Now
                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex min-h-[54px] min-w-[220px] cursor-not-allowed items-center justify-center gap-4 rounded-full bg-[#15935e]/45 px-8 py-4 text-sm font-semibold text-white sm:text-base"
                  >
                    Donate Now
                    <ArrowRight size={18} />
                  </button>
                )}
              </motion.div>

              <div className="flex items-center gap-3 text-sm text-[#53677f]">
                <ShieldCheck
                  size={22}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#0866c5]"
                />
                <span>
                  Donation details are shown before you continue.
                </span>
              </div>
            </motion.div>

            {/* SMALL NOTE */}
            <p className="mt-6 max-w-[720px] text-xs leading-5 text-[#718399]">
              Amounts are approximate and may vary depending on location,
              project requirements and local conditions.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
