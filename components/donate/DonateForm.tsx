
"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Droplets,
  HeartHandshake,
  LockKeyhole,
} from "lucide-react";

const presetAmounts = [
  { amount: 250, label: "Help fund 1 household pump" },
  { amount: 500, label: "Help fund 2 household pumps" },
  { amount: 1250, label: "Help fund 5 household pumps" },
  { amount: 2500, label: "Help fund 10 household pumps" },
];

export default function DonateForm() {
  const searchParams = useSearchParams();
  const amountFromUrl = searchParams.get("amount");

  const [selectedAmount, setSelectedAmount] = useState(250);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [submitted, setSubmitted] = useState(false);

  // Automatically select the amount passed from the homepage.
  useEffect(() => {
    if (!amountFromUrl) return;

    const amount = Number(amountFromUrl);

    if (!Number.isFinite(amount) || amount <= 0) return;

    const preset = presetAmounts.find(
      (item) => item.amount === amount
    );

    if (preset) {
      setSelectedAmount(preset.amount);
      setCustomAmount("");
    } else {
      setCustomAmount(String(amount));
    }

    setSubmitted(false);
  }, [amountFromUrl]);

  const effectiveAmount = useMemo(() => {
    const custom = Number(customAmount);

    if (
      customAmount.trim() !== "" &&
      Number.isFinite(custom) &&
      custom > 0
    ) {
      return custom;
    }

    return selectedAmount;
  }, [customAmount, selectedAmount]);

  const estimatedPumps = Math.floor(effectiveAmount / 250);

  function choosePreset(amount: number) {
    setSelectedAmount(amount);
    setCustomAmount("");
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-[#f5faff] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8 lg:px-16">
        {/* INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-[860px] text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-10 bg-[#15935e]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.27em] text-[#60758d]">
              Give Well. Live Well.
            </span>

            <span className="h-[2px] w-10 bg-[#15935e]" />
          </div>

          <h1 className="mt-5 font-serif text-[42px] font-semibold leading-[1.03] tracking-[-0.035em] text-[#062a5e] sm:text-[52px]">
            Choose Your
            <span className="text-[#15935e]"> Impact.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[720px] text-[15px] leading-7 text-[#53677f] sm:text-base">
            Every contribution helps WellWill move closer to a future
            where more families and communities have better access to
            reliable water and the foundations they need to live well.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-7 lg:grid-cols-[1.35fr_0.65fr]">
          {/* DONATION FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-[28px] border border-[#dce8f1] bg-white p-6 shadow-[0_12px_40px_rgba(6,42,94,0.05)] sm:p-8 lg:p-10"
          >
            <SectionTitle number="01" title="Select an amount" />

            {/* PRESET AMOUNTS */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {presetAmounts.map((item) => {
                const active =
                  customAmount === "" &&
                  selectedAmount === item.amount;

                return (
                  <button
                    type="button"
                    key={item.amount}
                    onClick={() => choosePreset(item.amount)}
                    aria-pressed={active}
                    className={`rounded-[18px] border p-5 text-left transition-all duration-300 ${
                      active
                        ? "border-[#15935e] bg-[#f0fbf6] shadow-[0_7px_22px_rgba(21,147,94,0.08)]"
                        : "border-[#dbe7ef] bg-white hover:border-[#91c7ad]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-serif text-[26px] font-semibold !text-[#062a5e]">
                        AED {item.amount.toLocaleString()}
                      </p>

                      {active && (
                        <CheckCircle2
                          size={21}
                          className="shrink-0 text-[#15935e]"
                        />
                      )}
                    </div>

                    <p className="mt-2 text-xs leading-5 !text-[#60758d]">
                      {item.label}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* CUSTOM AMOUNT */}
            <label className="mt-5 block text-sm font-medium text-[#314963]">
              Or enter a custom amount (AED)

              <input
                type="number"
                min="1"
                step="0.01"
                inputMode="decimal"
                value={customAmount}
                onChange={(event) => {
                  setCustomAmount(event.target.value);
                  setSubmitted(false);
                }}
                placeholder="e.g. 300"
                className="mt-2 w-full rounded-xl border border-[#d6e3ed] bg-white px-4 py-3.5 text-sm !text-[#062a5e] outline-none transition placeholder:!text-[#9aabba] focus:border-[#0866c5] focus:ring-2 focus:ring-[#0866c5]/10"
              />
            </label>

            <div className="my-9 h-px bg-[#e8eef3]" />

            {/* FREQUENCY */}
            <SectionTitle number="02" title="Frequency" />

            <div className="mt-5 inline-flex rounded-full border border-[#d7e5ee] bg-[#f7fbfe] p-1">
              <button
                type="button"
                onClick={() => setFrequency("one-time")}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                  frequency === "one-time"
                    ? "bg-[#0866c5] !text-white shadow-sm"
                    : "!text-[#60758d]"
                }`}
              >
                One-time
              </button>

              <button
                type="button"
                onClick={() => setFrequency("monthly")}
                className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                  frequency === "monthly"
                    ? "bg-[#0866c5] !text-white shadow-sm"
                    : "!text-[#60758d]"
                }`}
              >
                Monthly
              </button>
            </div>

            {frequency === "monthly" && (
              <p className="mt-3 max-w-[650px] text-xs leading-5 text-[#7a8b9e]">
                Monthly giving will be processed as a recurring
                contribution when the secure payment gateway is connected.
              </p>
            )}

            <div className="my-9 h-px bg-[#e8eef3]" />

            {/* DONOR DETAILS */}
            <SectionTitle number="03" title="Your details" />

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field
                label="Full Name"
                name="name"
                placeholder="Your name"
              />

              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />

              <label className="sm:col-span-2 text-sm font-medium text-[#314963]">
                Message{" "}
                <span className="text-[#7a8b9e]">(optional)</span>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Dedicate this gift or leave a note..."
                  className="mt-2 w-full resize-none rounded-xl border border-[#d6e3ed] bg-white px-4 py-3.5 text-sm !text-[#062a5e] outline-none transition placeholder:!text-[#9aabba] focus:border-[#0866c5] focus:ring-2 focus:ring-[#0866c5]/10"
                />
              </label>
            </div>

            {/* INFORMATION */}
            <div className="mt-8 rounded-[18px] border border-[#d9e8f1] bg-[#f7fbfe] p-5">
              <div className="flex items-start gap-3">
                <HeartHandshake
                  size={21}
                  className="mt-0.5 shrink-0 text-[#15935e]"
                />

                <p className="text-sm leading-6 text-[#53677f]">
                  Under the current household-pump initiative,
                  approximately{" "}
                  <strong className="font-semibold text-[#062a5e]">
                    AED 250
                  </strong>{" "}
                  can help fund one household water-pump installation.
                  Actual costs may vary depending on local conditions
                  and the most appropriate water solution.
                </p>
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#15935e] px-8 py-4 text-sm font-semibold !text-white transition-colors hover:bg-[#117c50]"
            >
              Donate Securely

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 rounded-[16px] border border-[#cde8da] bg-[#f1fbf6] p-4 text-sm leading-6 text-[#40566f]"
              >
                Thank you for choosing to support WellWill.
                Secure online payment processing will be available
                once the approved payment gateway is connected.
              </motion.div>
            )}
          </motion.form>

          {/* DONATION SUMMARY */}
          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="overflow-hidden rounded-[28px] bg-[#062a5e] text-white shadow-[0_16px_45px_rgba(6,42,94,0.18)]">
              <div className="relative overflow-hidden p-7 sm:p-8">
                <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#0a5aa8]/40" />
                <div className="absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#15935e]/20" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#48daa3]">
                    <Droplets size={23} />
                  </div>

                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] !text-[#b9d0e4]">
                    Your Donation
                  </p>

                  <p className="mt-2 font-serif text-[42px] font-semibold leading-none !text-white">
                    AED {effectiveAmount.toLocaleString()}
                  </p>

                  <div className="mt-6 rounded-[16px] border border-white/15 bg-white/5 p-4">
                    <p className="text-sm !text-[#d7e4ef]">
                      Estimated current household-pump equivalent
                    </p>

                    <p className="mt-2 font-serif text-[24px] font-semibold !text-white">
                      ≈ {estimatedPumps}{" "}
                      {estimatedPumps === 1 ? "pump" : "pumps"}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-3 text-xs text-[#c8d8e6]">
                    <LockKeyhole size={15} className="shrink-0" />
                    <span>
                      Secure checkout will be connected to
                      WellWill&apos;s approved payment gateway.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-[22px] border border-[#dce8f1] bg-white p-6">
              <p className="font-serif text-[21px] font-semibold text-[#062a5e]">
                Your support matters.
              </p>

              <p className="mt-3 text-sm leading-6 text-[#60758d]">
                Donations can help WellWill support practical water
                solutions based on verified community needs and
                technical suitability.
              </p>
            </div>
          </motion.aside>
        </div>

        {/* TRUST CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="mt-12 grid gap-5 sm:grid-cols-3"
        >
          <TrustCard
            title="Practical Water Support"
            text="Contributions are directed toward responsible water initiatives and community needs."
          />

          <TrustCard
            title="Clear Project Records"
            text="WellWill aims to document and verify projects as they are implemented."
          />

          <TrustCard
            title="From Water to Wellbeing"
            text="Water is our beginning, with a long-term vision for stronger community wellbeing."
          />
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eaf6ff] text-[11px] font-bold text-[#0866c5]">
        {number}
      </span>

      <h2 className="font-serif text-[24px] font-semibold text-[#062a5e]">
        {title}
      </h2>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <label className="text-sm font-medium text-[#314963]">
      {label} <span className="text-[#d54a4a]">*</span>

      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-[#d6e3ed] bg-white px-4 py-3.5 text-sm !text-[#062a5e] outline-none transition placeholder:!text-[#9aabba] focus:border-[#0866c5] focus:ring-2 focus:ring-[#0866c5]/10"
      />
    </label>
  );
}

function TrustCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[20px] border border-[#dce8f1] bg-white p-5 text-center">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#edf8f3] text-[#15935e]">
        <CheckCircle2 size={19} />
      </div>

      <h3 className="mt-4 font-serif text-[18px] font-semibold text-[#062a5e]">
        {title}
      </h3>

      <p className="mt-2 text-xs leading-5 text-[#60758d]">
        {text}
      </p>
    </div>
  );
}
