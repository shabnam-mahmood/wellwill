
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Check,
  Droplets,
  ShieldCheck,
} from "lucide-react";

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

  const finalAmount = isCustom
    ? customAmount.trim()
    : selectedAmount;

  const validAmount =
    finalAmount !== "" &&
    Number.isFinite(Number(finalAmount)) &&
    Number(finalAmount) > 0;

  const donateHref = validAmount
    ? `/donate?amount=${encodeURIComponent(finalAmount)}`
    : "/donate";

  return (
    <section className="relative overflow-hidden bg-[#f5faff]">
      <div className="mx-auto grid max-w-[1700px] lg:grid-cols-[0.75fr_1.25fr]">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative min-h-[380px] overflow-hidden sm:min-h-[500px] lg:min-h-[650px]"
        >
          <Image
            src="/images/water-pump.jpg"
            alt="Household water pump providing clean water"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />

          <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-transparent to-[#f5faff]/55 lg:block" />

          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#f5faff] to-transparent lg:hidden" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="relative flex items-center px-6 py-14 sm:px-10 lg:px-12 lg:py-16 xl:px-16">
          <div className="pointer-events-none absolute -right-40 -top-32 h-[480px] w-[480px] rounded-full bg-[#e8f5ff] blur-3xl" />

          <div className="relative z-10 w-full max-w-[820px]">
            {/* SECTION LABEL */}
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
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-[760px] font-serif text-[34px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#062a5e] sm:text-[50px] lg:text-[56px] xl:text-[60px]"
            >
              Reliable Water.{" "}
              <span className="text-[#15935e]">
                Brighter Tomorrows.
              </span>
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 max-w-[720px] text-[15px] leading-7 text-[#53677f] sm:text-base"
            >
              Your support helps WellWill fund household water
              pumps and other suitable water solutions for
              communities that need more reliable access to water.
            </motion.p>

            {/* DONATION OPTIONS */}
            <div className="mt-8 grid grid-cols-2 gap-3 xl:grid-cols-4">
              {donationOptions.map((option, index) => {
                const active =
                  !isCustom && selectedAmount === option.value;

                return (
                  <motion.button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setSelectedAmount(option.value);
                      setIsCustom(false);
                    }}
                    aria-pressed={active}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className={`group relative flex min-h-[158px] w-full flex-col items-center justify-center rounded-[18px] border px-3 py-5 text-center transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0866c5] ${
                      active
                        ? "border-[#0866c5] bg-[#0866c5] shadow-[0_12px_28px_rgba(8,102,197,0.18)]"
                        : "border-[#dce8f2] bg-white shadow-[0_5px_20px_rgba(6,42,94,0.035)] hover:border-[#0866c5] hover:bg-[#f9fcff]"
                    }`}
                  >
                    {/* SELECTION INDICATOR */}
                    <span
                      className={`absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full border ${
                        active
                          ? "border-white bg-white"
                          : "border-[#c8d8e8] bg-white"
                      }`}
                    >
                      {active && (
                        <Check
                          size={13}
                          strokeWidth={3}
                          className="text-[#0866c5]"
                        />
                      )}
                    </span>

                    {/* ICON */}
                    <span
                      className={`mb-3 flex h-9 w-9 items-center justify-center rounded-full ${
                        active
                          ? "bg-white/15 !text-white"
                          : "bg-[#eaf6ff] !text-[#0866c5]"
                      }`}
                    >
                      <Droplets size={18} strokeWidth={1.8} />
                    </span>

                    {/* AMOUNT */}
                    <span
                      className={`font-serif text-[22px] font-semibold leading-tight sm:text-[25px] ${
                        active ? "!text-white" : "!text-[#062a5e]"
                      }`}
                    >
                      {option.amount}
                    </span>

                    {/* DETAIL */}
                    <span
                      className={`mt-2 text-[11px] leading-5 sm:text-xs ${
                        active
                          ? "!text-white/90"
                          : "!text-[#687b91]"
                      }`}
                    >
                      {option.detail}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* OTHER AMOUNT */}
            <div className="mt-3">
              <button
                type="button"
                onClick={() => setIsCustom(true)}
                aria-pressed={isCustom}
                aria-expanded={isCustom}
                aria-controls="wellwill-custom-amount"
                className={`flex w-full items-center gap-3 rounded-[16px] border px-5 py-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0866c5] ${
                  isCustom
                    ? "border-[#0866c5] bg-[#eaf6ff]"
                    : "border-[#dce8f2] bg-white hover:border-[#0866c5]"
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eaf6ff] !text-[#0866c5]">
                  <Droplets size={18} strokeWidth={1.8} />
                </span>

                <span className="flex-1">
                  <span className="block text-sm font-semibold !text-[#062a5e]">
                    Other Amount
                  </span>

                  <span className="mt-1 block text-xs !text-[#687b91]">
                    Choose an amount that works for you
                  </span>
                </span>

                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                    isCustom
                      ? "border-[#0866c5]"
                      : "border-[#a8bfd1]"
                  }`}
                >
                  {isCustom && (
                    <span className="h-2.5 w-2.5 rounded-full bg-[#0866c5]" />
                  )}
                </span>
              </button>

              {/* CUSTOM INPUT */}
              {isCustom && (
                <motion.div
                  id="wellwill-custom-amount"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 rounded-[16px] border border-[#dce8f2] bg-white p-4">
                    <label
                      htmlFor="custom-donation-amount"
                      className="mb-2 block text-sm font-semibold !text-[#062a5e]"
                    >
                      Enter your donation amount
                    </label>

                    <div className="flex overflow-hidden rounded-xl border border-[#dce8f2] bg-[#f8fcff] focus-within:border-[#0866c5]">
                      <span className="border-r border-[#dce8f2] px-4 py-3 text-sm font-semibold !text-[#0866c5]">
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
                        className="w-full bg-transparent px-4 py-3 text-sm !text-[#062a5e] outline-none placeholder:!text-[#9aabbc]"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* DONATION CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center"
            >
              {validAmount ? (
                <Link
                  href={donateHref}
                  className="group inline-flex min-h-[54px] min-w-[210px] items-center justify-center gap-4 rounded-full bg-[#15935e] px-8 py-4 text-sm font-semibold !text-white shadow-[0_10px_25px_rgba(21,147,94,0.2)] transition-colors duration-300 hover:bg-[#117c50] sm:text-base"
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
                  className="inline-flex min-h-[54px] min-w-[210px] cursor-not-allowed items-center justify-center gap-4 rounded-full bg-[#15935e]/45 px-8 py-4 text-sm font-semibold !text-white"
                >
                  Donate Now
                  <ArrowRight size={18} />
                </button>
              )}

              <div className="flex items-center gap-3 text-sm text-[#53677f]">
                <ShieldCheck
                  size={21}
                  strokeWidth={1.7}
                  className="shrink-0 text-[#0866c5]"
                />

                <span>
                  Donation details are shown before you continue.
                </span>
              </div>
            </motion.div>

            {/* FOOTNOTE */}
            <p className="mt-5 max-w-[720px] text-xs leading-5 text-[#718399]">
              Amounts are approximate and may vary depending on
              location, project requirements and local conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
