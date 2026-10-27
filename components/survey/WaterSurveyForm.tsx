
"use client";

import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion } from "motion/react";
import {
  CheckCircle2,
  Printer,
} from "lucide-react";

type SurveyData = {
  name: string;
  fatherName: string;
  community: string;
  village: string;
  idNumber: string;
  phone: string;
};

const initialForm: SurveyData = {
  name: "",
  fatherName: "",
  community: "",
  village: "",
  idNumber: "",
  phone: "",
};

function todayLocal(): string {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");
  const day = String(
    date.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function formatDate(value: string): string {
  if (!value) return "";

  const date = new Date(
    `${value}T00:00:00`
  );

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export default function WaterSurveyForm() {
  const [form, setForm] =
    useState<SurveyData>(initialForm);

  const [surveyDate, setSurveyDate] =
    useState("");

  const [projectNumber, setProjectNumber] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const [submitting, setSubmitting] =
    useState(false);

  const [submitError, setSubmitError] =
    useState("");

  const submissionIdRef =
    useRef<string | null>(null);

  useEffect(() => {
    setSurveyDate(todayLocal());

    submissionIdRef.current =
      crypto.randomUUID();
  }, []);

  function updateField(
    field: keyof SurveyData,
    value: string
  ) {
    if (submitted || submitting) return;

    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (submitting || submitted) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      if (!submissionIdRef.current) {
        submissionIdRef.current =
          crypto.randomUUID();
      }

      const date = surveyDate || todayLocal();

      const response = await fetch(
        "/api/forms",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            formType: "water-support",
            submissionId:
              submissionIdRef.current,
            date,
            ...form,
            website: "",
          }),
        }
      );

      const result: {
        success?: boolean;
        message?: string;
        projectNumber?: string;
        surveyDate?: string;
      } = await response.json();

      if (
        !response.ok ||
        result.success !== true
      ) {
        throw new Error(
          result.message ||
            "We couldn't confirm your submission."
        );
      }

      if (
        !result.projectNumber ||
        !/^WW-PRJ-\d{3,}$/.test(
          result.projectNumber
        )
      ) {
        throw new Error(
          "The survey was received, but the project number could not be confirmed. Please retry."
        );
      }

      setProjectNumber(
        result.projectNumber
      );

      setSurveyDate(
        result.surveyDate || date
      );

      setSubmitted(true);

      window.setTimeout(() => {
        document
          .getElementById(
            "survey-actions"
          )
          ?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
      }, 100);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to submit the survey. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  function handlePrint() {
    if (!submitted || !projectNumber) {
      return;
    }

    const printWindow = window.open(
      "",
      "_blank",
      "width=900,height=1100"
    );

    if (!printWindow) {
      window.alert(
        "Please allow pop-ups to print or save the survey as a PDF."
      );
      return;
    }

    const logoUrl =
      `${window.location.origin}/images/wellwill-logo.png`;

    const rows = [
      ["1. Name", "نام", form.name],
      [
        "2. Father's Name",
        "والد کا نام",
        form.fatherName,
      ],
      [
        "3. Community / Tribe",
        "قوم",
        form.community,
      ],
      [
        "4. Village / City",
        "بستی / شہر",
        form.village,
      ],
      [
        "5. CNIC / ID Card No.",
        "شناختی کارڈ نمبر",
        form.idNumber,
      ],
      [
        "6. Phone Number",
        "فون نمبر",
        form.phone,
      ],
    ];

    const rowsHtml = rows
      .map(
        ([label, urdu, value]) => `
          <div class="field-row">
            <div class="field-label">
              <span>${escapeHtml(label)}</span>
              <span class="urdu" dir="rtl">
                ${escapeHtml(urdu)}
              </span>
            </div>
            <div class="field-value">
              ${escapeHtml(value)}
            </div>
          </div>
        `
      )
      .join("");

    const html = `
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport"
content="width=device-width, initial-scale=1">
<title>
${escapeHtml(projectNumber)} - WellWill Water Survey
</title>
<style>
  @page {
    size: A4;
    margin: 16mm;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #fff;
    color: #17344a;
    font-family: Arial, sans-serif;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .page {
    max-width: 780px;
    margin: auto;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 18px;
    padding-bottom: 20px;
    border-bottom: 3px solid #087ea4;
  }

  .logo {
    width: 90px;
    height: 80px;
    object-fit: contain;
  }

  .brand {
    font-size: 13px;
    color: #1684a5;
    font-weight: bold;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  h1 {
    font-size: 23px;
    line-height: 1.3;
    margin: 7px 0;
  }

  .subtitle {
    font-size: 12px;
    color: #5d7585;
  }

  .meta {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin: 25px 0;
  }

  .meta-box {
    border: 1px solid #cfe2ec;
    background: #f4fafe;
    padding: 13px 15px;
    border-radius: 8px;
  }

  .meta-label {
    color: #688194;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 7px;
  }

  .meta-value {
    font-size: 17px;
    font-weight: bold;
  }

  .section-title {
    font-size: 15px;
    font-weight: bold;
    color: #087ea4;
    margin: 25px 0 14px;
  }

  .field-row {
    display: grid;
    grid-template-columns: 220px 1fr;
    border: 1px solid #dce8ef;
    margin-bottom: -1px;
    min-height: 57px;
    break-inside: avoid;
  }

  .field-label {
    background: #f6fafd;
    padding: 12px 14px;
    font-size: 12px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-right: 1px solid #dce8ef;
  }

  .urdu {
    color: #668297;
    font-size: 13px;
    font-weight: normal;
  }

  .field-value {
    padding: 16px 14px;
    font-size: 13px;
    overflow-wrap: anywhere;
    white-space: pre-wrap;
  }

  .note {
    margin-top: 25px;
    padding: 15px;
    background: #f4fafe;
    border-left: 3px solid #087ea4;
    font-size: 11px;
    line-height: 1.7;
  }

  .footer {
    margin-top: 40px;
    padding-top: 14px;
    border-top: 1px solid #dce8ef;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: #748a99;
  }

  @media print {
    .page {
      max-width: none;
    }
  }
</style>
</head>

<body>
<div class="page">
  <div class="header">
    <img
      class="logo"
      src="${escapeHtml(logoUrl)}"
      alt="WellWill"
      onerror="this.style.display='none'"
    >
    <div>
      <div class="brand">WellWill</div>
      <h1>
        Water Supply Project Survey Form
      </h1>
      <div class="subtitle">
        Field Data Collection ·
        منصوبہ آبی فراہمی
      </div>
    </div>
  </div>

  <div class="meta">
    <div class="meta-box">
      <div class="meta-label">
        Project / Form Number
      </div>
      <div class="meta-value">
        ${escapeHtml(projectNumber)}
      </div>
    </div>

    <div class="meta-box">
      <div class="meta-label">
        Survey Date
      </div>
      <div class="meta-value">
        ${escapeHtml(formatDate(surveyDate))}
      </div>
    </div>
  </div>

  <div class="section-title">
    Respondent Information ·
    معلومات جواب دہندہ
  </div>

  ${rowsHtml}

  <div class="note">
    <strong>Important Note:</strong>
    Information provided in this survey
    is collected for WellWill's Water
    Supply Project assessment.
    Submission does not guarantee
    project approval or installation.
  </div>

  <div class="footer">
    <span>WellWill · Water Supply Initiative</span>
    <span>${escapeHtml(projectNumber)}</span>
  </div>
</div>

<script>
  window.addEventListener("load", function () {
    setTimeout(function () {
      window.print();
    }, 350);
  });
</script>
</body>
</html>
`;

    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
  }

  return (
    <section className="bg-[#f5faff] py-14 sm:py-18 lg:py-20">
      <div className="mx-auto max-w-[1000px] px-5 sm:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="overflow-hidden rounded-[24px] border border-[#dceaf3] bg-white shadow-[0_18px_65px_rgba(13,70,110,0.08)]"
        >
          <div className="border-b border-[#dceaf3] bg-gradient-to-r from-[#f0faff] to-white px-6 py-7 sm:px-9">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0a83ad]">
                  Field Survey
                </p>

                <h1 className="text-2xl font-bold leading-tight text-[#17344a] sm:text-3xl">
                  Water Supply Project Survey Form
                </h1>

                <p className="mt-3 text-sm text-[#678094]">
                  منصوبہ آبی فراہمی · Survey Form :
                  Field Data Collection
                </p>
              </div>

              <div className="grid w-full max-w-[320px] grid-cols-2 gap-3">
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-[#36566a]">
                    Form No.
                  </span>

                  <input
                    type="text"
                    readOnly
                    value={
                      projectNumber ||
                      "Assigned on submission"
                    }
                    className="w-full rounded-xl border border-[#d7e5ee] bg-[#f3f8fb] px-3 py-3 text-xs font-semibold text-[#17344a] outline-none sm:text-sm"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold text-[#36566a]">
                    Date
                  </span>

                  <input
                    type="date"
                    readOnly
                    value={surveyDate}
                    className="w-full rounded-xl border border-[#d7e5ee] bg-[#f3f8fb] px-3 py-3 text-sm font-semibold text-[#17344a] outline-none"
                  />
                </label>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="px-6 py-8 sm:px-9 sm:py-10"
          >
            <p className="mb-6 text-sm font-bold text-[#087ea4]">
              Respondent Information ·
              معلومات جواب دہندہ
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="1. Name (نام)"
                placeholder="Enter full name"
                required
                disabled={submitted || submitting}
                value={form.name}
                onChange={(value) =>
                  updateField("name", value)
                }
              />

              <Field
                label="2. Father's Name (والد کا نام)"
                placeholder="Enter father's name"
                required
                disabled={submitted || submitting}
                value={form.fatherName}
                onChange={(value) =>
                  updateField("fatherName", value)
                }
              />

              <Field
                label="3. Community / Tribe (قوم)"
                placeholder="Enter community or tribe"
                required
                disabled={submitted || submitting}
                value={form.community}
                onChange={(value) =>
                  updateField("community", value)
                }
              />

              <Field
                label="4. Village / City (بستی / شہر)"
                placeholder="Enter village or city"
                required
                disabled={submitted || submitting}
                value={form.village}
                onChange={(value) =>
                  updateField("village", value)
                }
              />

              <Field
                label="5. CNIC / ID Card No. (شناختی کارڈ نمبر)"
                placeholder="Enter CNIC / ID number"
                required
                disabled={submitted || submitting}
                value={form.idNumber}
                onChange={(value) =>
                  updateField("idNumber", value)
                }
              />

              <Field
                label="6. Phone Number (فون نمبر)"
                placeholder="Enter phone number"
                type="tel"
                required
                disabled={submitted || submitting}
                value={form.phone}
                onChange={(value) =>
                  updateField("phone", value)
                }
              />
            </div>

            <div className="mt-8 rounded-[18px] border border-[#dceaf3] bg-[#f7fbfe] p-5">
              <p className="mb-3 text-sm font-bold text-[#17344a]">
                Important Note
              </p>

              <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-[#668094]">
                <li>
                  Information collected will be
                  used for the Water Supply
                  Project survey and assessment.
                </li>
                <li>
                  Submission does not guarantee
                  approval or installation of a
                  water project.
                </li>
                <li>
                  Your CNIC / ID number will be
                  stored in the restricted survey
                  records and will not be included
                  in notification emails.
                </li>
              </ul>
            </div>

            {!submitted ? (
              <div className="mt-9">
                {submitError && (
                  <div
                    role="alert"
                    className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                  >
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={
                    submitting ||
                    !surveyDate
                  }
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#087ea4] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#086887] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting
                    ? "Submitting..."
                    : "Submit Survey"}
                </button>
              </div>
            ) : (
              <motion.div
                id="survey-actions"
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="mt-9 rounded-[18px] border border-[#ccebdc] bg-[#f1fbf5] p-5"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#15915a]" />

                  <div>
                    <p className="font-bold text-[#17623f]">
                      Survey submitted successfully.
                    </p>

                    <p className="mt-1 text-sm text-[#39765a]">
                      Your project reference number is{" "}
                      <strong>
                        {projectNumber}
                      </strong>
                      .
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#087ea4] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#086887]"
                >
                  <Printer className="h-4 w-4" />
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
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-[#36566a]">
        {label}
        {required ? " *" : ""}
      </span>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="w-full rounded-xl border border-[#d7e5ee] bg-white px-4 py-3 text-sm text-[#17344a] outline-none transition placeholder:text-[#9aafbc] focus:border-[#0a83ad] focus:ring-2 focus:ring-[#0a83ad]/10 disabled:bg-[#f3f8fb]"
      />
    </label>
  );
}
