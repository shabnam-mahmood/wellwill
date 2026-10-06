"use client";

import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Printer } from "lucide-react";

type SurveyData = {
  formNo: string;
  date: string;
  name: string;
  fatherName: string;
  community: string;
  village: string;
  idNumber: string;
  phone: string;
};

const initialForm: SurveyData = {
  formNo: "",
  date: "",
  name: "",
  fatherName: "",
  community: "",
  village: "",
  idNumber: "",
  phone: "",
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(value: string) {
  if (!value) return "";
  return new Intl.DateTimeFormat("en-GB").format(
    new Date(`${value}T00:00:00`)
  );
}

export default function WaterSurveyForm() {
  const [form, setForm] = useState<SurveyData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof SurveyData, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);

    window.setTimeout(() => {
      document
        .getElementById("survey-actions")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  }

  function handlePrint() {
    const printWindow = window.open("", "_blank", "width=900,height=1100");
    if (!printWindow) return;

    const logoUrl = `${window.location.origin}/images/wellwill-logo.png`;

    const html = `
<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>WellWill Water Survey</title>
<style>
@page { size: A4; margin: 14mm; }
* { box-sizing: border-box; }
body {
  margin: 0;
  background: #fff;
  color: #24384d;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
.sheet {
  width: 100%;
  max-width: 182mm;
  margin: 0 auto;
  border: 1px solid #d8e5ee;
  border-radius: 10px;
  overflow: hidden;
}
.topline { height: 7px; background: #0866c5; }
.head {
  padding: 20px 22px;
  background: linear-gradient(90deg,#eff8ff,#f3fbf7);
  border-bottom: 1px solid #dfeaf2;
}
.headrow {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: flex-start;
}
.logo {
  max-width: 125px;
  max-height: 52px;
  object-fit: contain;
  margin-bottom: 12px;
}
.eyebrow {
  margin: 0 0 6px;
  color: #0866c5;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
}
h1 {
  margin: 0;
  color: #062a5e;
  font: 700 23px/1.15 Georgia, serif;
}
.sub {
  margin: 7px 0 0;
  color: #667b90;
  font-size: 10px;
}
.meta {
  min-width: 155px;
  border: 1px solid #d3e2ec;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}
.mrow {
  display: grid;
  grid-template-columns: 64px 1fr;
  border-bottom: 1px solid #e0e9ef;
}
.mrow:last-child { border-bottom: 0; }
.ml {
  padding: 9px 8px;
  background: #f6fafc;
  color: #5b7086;
  font-size: 9px;
  font-weight: 700;
}
.mv {
  padding: 9px 8px;
  color: #062a5e;
  font-size: 10px;
  font-weight: 600;
}
.body { padding: 21px 22px 22px; }
.stitle {
  margin: 0 0 13px;
  color: #15935e;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 11px;
}
.field {
  border: 1px solid #dbe7ef;
  border-radius: 8px;
  overflow: hidden;
  break-inside: avoid;
}
.fl {
  padding: 7px 10px 6px;
  background: #f7fafc;
  color: #587087;
  font-size: 9px;
  font-weight: 700;
}
.fv {
  min-height: 38px;
  padding: 10px;
  color: #183b5d;
  font-size: 12px;
  overflow-wrap: anywhere;
}
.note {
  margin-top: 17px;
  padding: 12px 14px;
  border: 1px solid #d9e8f1;
  border-radius: 8px;
  background: #f7fbfe;
}
.note b {
  color: #062a5e;
  font-size: 10px;
}
.note ul {
  margin: 7px 0 0;
  padding-left: 16px;
  color: #64798e;
  font-size: 9px;
  line-height: 1.6;
}
.foot {
  margin-top: 20px;
  padding-top: 11px;
  border-top: 1px solid #e1e9ef;
  display: flex;
  justify-content: space-between;
  color: #8292a1;
  font-size: 8px;
}
@media print {
  .sheet { border-radius: 0; }
}
</style>
</head>
<body>
<div class="sheet">
  <div class="topline"></div>
  <div class="head">
    <div class="headrow">
      <div>
        <img class="logo" src="${logoUrl}" alt="WellWill" />
        <p class="eyebrow">Field Survey</p>
        <h1>Water Supply Project — Survey Form</h1>
        <p class="sub">منصوبہ آبی فراہمی · Survey Form — Field Data Collection</p>
      </div>
      <div class="meta">
        <div class="mrow"><div class="ml">Form No.</div><div class="mv">${escapeHtml(form.formNo)}</div></div>
        <div class="mrow"><div class="ml">Date</div><div class="mv">${escapeHtml(formatDate(form.date))}</div></div>
      </div>
    </div>
  </div>

  <div class="body">
    <p class="stitle">Respondent Information · معلومات جواب دہندہ</p>
    <div class="grid">
      <div class="field"><div class="fl">1. Name (نام)</div><div class="fv">${escapeHtml(form.name)}</div></div>
      <div class="field"><div class="fl">2. Father's Name (نام والدین)</div><div class="fv">${escapeHtml(form.fatherName)}</div></div>
      <div class="field"><div class="fl">3. Community / Tribe (قوم)</div><div class="fv">${escapeHtml(form.community)}</div></div>
      <div class="field"><div class="fl">4. Village / City (بستی / شہر)</div><div class="fv">${escapeHtml(form.village)}</div></div>
      <div class="field"><div class="fl">5. CNIC / ID Card No. (شناختی کارڈ نمبر)</div><div class="fv">${escapeHtml(form.idNumber)}</div></div>
      <div class="field"><div class="fl">6. Phone Number (فون نمبر)</div><div class="fv">${escapeHtml(form.phone)}</div></div>
    </div>

    <div class="note">
      <b>Important Note</b>
      <ul>
        <li>Information collected will be used only for the Water Supply Project survey.</li>
        <li>Please ensure that all details are accurate and complete.</li>
        <li>The respondent or surveyor should complete the form at the time of survey.</li>
      </ul>
    </div>

    <div class="foot">
      <span>WellWill · Water Supply Project</span>
      <span>Water is our beginning. Wellbeing is our mission.</span>
    </div>
  </div>
</div>

<script>
window.addEventListener("load", function () {
  setTimeout(function () {
    window.focus();
    window.print();
  }, 350);
});
</script>
</body>
</html>`;

    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
  }

  return (
    <section className="bg-[#f5faff] py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="overflow-hidden rounded-[26px] border border-[#dbe9f2] bg-white shadow-[0_16px_50px_rgba(6,42,94,0.07)]"
        >
          <div className="border-b border-[#e1ebf2] bg-gradient-to-r from-[#eef8ff] to-[#f3fbf7] px-6 py-7 sm:px-9">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.27em] text-[#0866c5]">
                  Field Survey
                </p>
                <h1 className="mt-2 font-serif text-[30px] font-semibold text-[#062a5e] sm:text-[36px]">
                  Water Supply Project — Survey Form
                </h1>
                <p className="mt-2 text-sm text-[#53677f]">
                  منصوبہ آبی فراہمی · Survey Form — Field Data Collection
                </p>
              </div>

              <div className="grid w-full max-w-[300px] grid-cols-2 gap-3">
                <label className="text-xs font-semibold text-[#53677f]">
                  Form No. *
                  <input
                    required
                    placeholder="e.g. WW-001"
                    value={form.formNo}
                    disabled={submitted}
                    onChange={(e) => updateField("formNo", e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#d9e6ef] bg-white px-3 py-2.5 font-normal text-[#062a5e] outline-none transition placeholder:text-[#9aabba] focus:border-[#0866c5] disabled:bg-[#f6f9fb]"
                  />
                </label>

                <label className="text-xs font-semibold text-[#53677f]">
                  Date *
                  <input
                    type="date"
                    required
                    disabled={submitted}
                    value={form.date}
                    onChange={(e) => updateField("date", e.target.value)}
                    className="mt-2 w-full rounded-xl border border-[#d9e6ef] bg-white px-3 py-2.5 font-normal text-[#062a5e] outline-none transition focus:border-[#0866c5] disabled:bg-[#f6f9fb]"
                  />
                </label>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="px-6 py-8 sm:px-9 sm:py-10">
            <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#15935e]">
              Respondent Information · معلومات جواب دہندہ
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="1. Name (نام)"
                placeholder="Enter full name"
                required
                disabled={submitted}
                value={form.name}
                onChange={(v) => updateField("name", v)}
              />

              <Field
                label="2. Father's Name (نام والدین)"
                placeholder="Enter father's name"
                required
                disabled={submitted}
                value={form.fatherName}
                onChange={(v) => updateField("fatherName", v)}
              />

              <Field
                label="3. Community / Tribe (قوم)"
                placeholder="Enter community or tribe"
                required
                disabled={submitted}
                value={form.community}
                onChange={(v) => updateField("community", v)}
              />

              <Field
                label="4. Village / City (بستی / شہر)"
                placeholder="Enter village or city"
                required
                disabled={submitted}
                value={form.village}
                onChange={(v) => updateField("village", v)}
              />

              <Field
                label="5. CNIC / ID Card No. (شناختی کارڈ نمبر)"
                placeholder="Enter CNIC / ID card number"
                required
                disabled={submitted}
                value={form.idNumber}
                onChange={(v) => updateField("idNumber", v)}
              />

              <Field
                label="6. Phone Number (فون نمبر)"
                placeholder="e.g. +92 300 1234567"
                type="tel"
                required
                disabled={submitted}
                value={form.phone}
                onChange={(v) => updateField("phone", v)}
              />
            </div>

            <div className="mt-8 rounded-[18px] border border-[#dceaf3] bg-[#f7fbfe] p-5">
              <p className="text-sm font-semibold text-[#062a5e]">Important Note</p>
              <ul className="mt-3 space-y-2 text-xs leading-5 text-[#60758d]">
                <li>• Information collected will be used only for the Water Supply Project survey.</li>
                <li>• Please ensure that all details are accurate and complete.</li>
                <li>• The respondent or surveyor should complete the form at the time of survey.</li>
              </ul>
            </div>

            {!submitted ? (
              <div className="mt-9">
                <button
                  type="submit"
                  className="rounded-full bg-[#0866c5] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#0759ac]"
                >
                  Submit Survey
                </button>
              </div>
            ) : (
              <motion.div
                id="survey-actions"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-9"
              >
                <div className="mb-5 flex items-start gap-3 rounded-[18px] border border-[#ccebdc] bg-[#f1fbf6] p-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-[#15935e]" size={22} />
                  <p className="text-sm leading-6 text-[#40566f]">
                    Survey submitted successfully.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0866c5] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#0759ac]"
                >
                  <Printer size={17} />
                  Print / Save PDF
                </button>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  value: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
};

function Field({
  label,
  value,
  placeholder,
  required = false,
  type = "text",
  disabled = false,
  onChange,
}: FieldProps) {
  return (
    <label className="text-sm font-medium text-[#314963]">
      {label}
      {required ? " *" : ""}
      <input
        type={type}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-xl border border-[#d9e6ef] px-4 py-3 text-sm text-[#062a5e] outline-none transition placeholder:text-[#9aabba] focus:border-[#0866c5] focus:ring-2 focus:ring-[#0866c5]/10 disabled:bg-[#f6f9fb]"
      />
    </label>
  );
}
