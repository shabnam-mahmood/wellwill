
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | WellWill",
  description:
    "Read the terms governing the use of the WellWill website, online contributions, payments, and water initiatives.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "Welcome to WellWill. These Terms and Conditions explain the conditions that apply when you visit our website, use its features, or make a financial contribution.",
      "WellWill is a private charitable initiative focused on improving access to clean water, including support for household water pumps and wells in communities where these solutions are needed.",
      "By using this website, you agree to comply with these Terms and Conditions, subject to applicable law.",
    ],
  },
  {
    title: "2. About WellWill",
    paragraphs: [
      "WellWill aims to support clean-water initiatives through contributions, project coordination, and community-focused activities.",
      "Information on this website is intended to explain our initiative, activities, and opportunities to contribute. Nothing on this website should be interpreted as a claim of registered charity status or tax-exempt status.",
    ],
  },
  {
    title: "3. Donations and Contributions",
    paragraphs: [
      "Contributions made through the website are voluntary. Before completing a payment, please review the contribution amount and payment information displayed at checkout.",
      "Unless expressly stated otherwise at the time of contribution, a donation does not purchase goods or services and does not create ownership rights in a water project.",
      "Descriptions of contribution amounts or potential impact are illustrative unless a specific commitment is expressly confirmed. A contribution does not necessarily fund an entire water pump or well.",
    ],
  },
  {
    title: "4. Payment Processing",
    paragraphs: [
      "Online payments may be processed by Stripe or another third-party payment service provider. Available payment methods and any applicable payment details will be presented during checkout.",
      "Your payment may be subject to the payment provider's terms, security checks, and processing procedures.",
      "If a payment fails or is interrupted, please verify its status before attempting another contribution to avoid accidental duplicate payments.",
    ],
  },
  {
    title: "5. Refunds and Payment Issues",
    paragraphs: [
      "If you believe a contribution was made in error, duplicated, or processed incorrectly, please contact WellWill with the payment date, amount, and relevant transaction reference.",
      "Refund requests will be reviewed individually, taking into account the circumstances, payment provider procedures, applicable law, and whether funds have already been committed or disbursed.",
      "This section does not guarantee that every contribution can be refunded and does not limit any mandatory rights available under applicable law.",
    ],
  },
  {
    title: "6. Project Implementation",
    paragraphs: [
      "Water projects may involve site assessments, local coordination, installation, maintenance considerations, and other practical requirements.",
      "Project locations, implementation schedules, methods, and costs may change because of local conditions, technical assessments, permissions, supplier availability, or other operational factors.",
      "WellWill aims to communicate project information responsibly but cannot guarantee a particular project completion date or outcome unless expressly agreed in writing.",
    ],
  },
  {
    title: "7. Use of Contributions",
    paragraphs: [
      "Contributions are intended to support WellWill's clean-water initiative and related project activities, subject to any specific restrictions expressly accepted by WellWill at the time of contribution.",
      "Where a particular project cannot proceed as originally planned, any decision about reallocating restricted funds must respect the terms communicated to the contributor and applicable legal requirements.",
    ],
  },
  {
    title: "8. Website Information",
    paragraphs: [
      "We aim to keep website information accurate and current. However, project descriptions, photographs, estimates, and other materials may be updated as activities progress.",
      "Information provided on the website is for general informational purposes and should not be treated as a guarantee of a particular result.",
    ],
  },
  {
    title: "9. Acceptable Website Use",
    paragraphs: [
      "You agree not to misuse the website, attempt unauthorised access, interfere with its security, submit fraudulent information, or use its features for unlawful purposes.",
      "We may restrict access or investigate suspected misuse where reasonably necessary and permitted by applicable law.",
    ],
  },
  {
    title: "10. Intellectual Property",
    paragraphs: [
      "Unless otherwise indicated, original website content, branding, text, and design elements are owned by WellWill or used with appropriate permission.",
      "You may view and share publicly available pages for personal, informational, or non-commercial purposes, provided you do not misrepresent their source or imply an endorsement that has not been given.",
    ],
  },
  {
    title: "11. Third-Party Services",
    paragraphs: [
      "The website may link to external websites or use third-party services for payment processing, hosting, maps, or other functions.",
      "Those services may have separate terms and privacy policies. WellWill is not responsible for their independent content or practices except where applicable law provides otherwise.",
    ],
  },
  {
    title: "12. Privacy",
    paragraphs: [
      "Information submitted through the website is addressed in our Privacy Policy, including information relating to enquiries and contributions.",
      "Please review that policy to understand the types of information that may be handled and the privacy choices that may be available to you.",
    ],
  },
  {
    title: "13. Liability",
    paragraphs: [
      "We aim to operate the website responsibly but cannot guarantee that it will always be uninterrupted, error-free, or free from technical problems.",
      "To the extent permitted by applicable law, WellWill is not responsible for losses arising solely from temporary website unavailability or circumstances beyond its reasonable control.",
      "Nothing in these terms excludes or limits liability that cannot lawfully be excluded or limited.",
    ],
  },
  {
    title: "14. Changes to These Terms",
    paragraphs: [
      "WellWill may update these Terms and Conditions to reflect operational, technical, or legal changes.",
      "The latest version will be published on this page. Changes will apply as permitted by applicable law and will not automatically override rights or commitments established before an update.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* PAGE HERO */}
      <section className="relative overflow-hidden bg-[#062a5e] px-6 pb-20 pt-40 text-white sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute -right-24 -top-32 h-[440px] w-[440px] rounded-full bg-[#0866c5]/35 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-[350px] w-[350px] rounded-full bg-[#15935e]/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px]">
          <nav
            aria-label="Breadcrumb"
            className="mb-7 flex items-center gap-3 text-sm text-white/65"
          >
            <Link
              href="/"
              className="transition-colors hover:text-white"
            >
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">
              Terms and Conditions
            </span>
          </nav>

          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.24em] text-[#80e2b1]">
            Website & Donation Terms
          </span>

          <h1 className="max-w-[900px] font-serif text-[42px] font-semibold tracking-[-0.04em] sm:text-[56px] lg:text-[68px]">
            Terms and Conditions
          </h1>

          <p className="mt-6 max-w-[680px] text-base leading-8 text-white/75 sm:text-lg">
            Important information about using the WellWill
            website and supporting our clean-water initiative.
          </p>
        </div>
      </section>

      {/* TERMS CONTENT */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[260px_1fr] lg:gap-20">
          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[24px] border border-[#e0eaf2] bg-[#f5faff] p-7">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#15935e]">
                WellWill
              </span>

              <h2 className="mt-3 font-serif text-2xl font-semibold text-[#062a5e]">
                Clear & Transparent
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#53677f]">
                These terms explain how contributions,
                payments, and website services are intended
                to operate.
              </p>

              <div className="mt-6 border-t border-[#dce8f2] pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#718399]">
                  Contact
                </p>

                <a
                  href="mailto:privacy@wellwill.org"
                  className="mt-2 block break-all text-sm font-semibold text-[#0866c5] hover:text-[#15935e]"
                >
                  privacy@wellwill.org
                </a>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <article className="min-w-0">
            <div className="mb-10 rounded-[18px] border-l-4 border-[#15935e] bg-[#f5faff] px-6 py-5">
              <p className="text-sm leading-7 text-[#53677f]">
                <strong className="text-[#062a5e]">
                  Effective date:
                </strong>{" "}
                To be confirmed before publication.
              </p>
            </div>

            <div className="space-y-11">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-serif text-[25px] font-semibold leading-tight tracking-[-0.02em] text-[#062a5e] sm:text-[30px]">
                    {section.title}
                  </h2>

                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[15px] leading-8 text-[#53677f] sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}

              <section>
                <h2 className="font-serif text-[25px] font-semibold text-[#062a5e] sm:text-[30px]">
                  15. Contact Us
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#53677f] sm:text-base">
                  For questions about these terms, donation
                  enquiries, or payment concerns, please
                  contact:
                </p>

                <a
                  href="mailto:privacy@wellwill.org"
                  className="mt-4 inline-block font-semibold text-[#0866c5] hover:text-[#15935e]"
                >
                  privacy@wellwill.org
                </a>
              </section>
            </div>

            {/* BOTTOM LINKS */}
            <div className="mt-16 flex flex-wrap items-center gap-5 border-t border-[#dce8f2] pt-8">
              <Link
                href="/"
                className="text-sm font-semibold text-[#0866c5] transition-colors hover:text-[#15935e]"
              >
                Back to Home
              </Link>

              <Link
                href="/privacy-policy"
                className="text-sm font-semibold text-[#0866c5] transition-colors hover:text-[#15935e]"
              >
                Privacy Policy
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
