
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | WellWill",
  description:
    "Learn how WellWill handles personal information, donation details, website enquiries, and privacy requests.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "WellWill is a private charitable initiative focused on supporting access to clean water through household water pumps and other suitable water solutions.",
      "This Privacy Policy explains how personal information may be collected, used, shared, and protected when you visit our website, contact us, or make a contribution.",
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: [
      "Depending on how you interact with the website, we may collect information such as your name, email address, telephone number, donation amount, transaction reference, and messages submitted through our forms.",
      "We may also receive limited technical information, such as browser type, device information, and website usage data, where this is collected by our hosting, security, or analytics services.",
      "Please avoid submitting sensitive personal information unless it is specifically requested and necessary.",
    ],
  },
  {
    title: "3. How We Use Information",
    paragraphs: [
      "We use personal information where necessary to respond to enquiries, administer contributions, provide payment confirmations, maintain transaction records, support water projects, and operate and secure the website.",
      "Where permitted by applicable law, we may also use relevant information to investigate technical problems, prevent misuse, and comply with legal obligations.",
    ],
  },
  {
    title: "4. Donations and Payment Processing",
    paragraphs: [
      "Online contributions may be processed by Stripe or another secure third-party payment service provider. The available payment provider and methods will be displayed during checkout.",
      "Payment providers process payment information under their own privacy notices and security procedures. WellWill may receive payment status, transaction references, contribution amounts, and limited donor information needed to administer contributions.",
      "The website should not be used to submit payment card information through ordinary contact forms.",
    ],
  },
  {
    title: "5. Cookies and Website Technologies",
    paragraphs: [
      "The website and its service providers may use cookies or similar technologies that are necessary for website operation, security, and payment functionality.",
      "If optional analytics or marketing technologies are enabled, their use and any consent choices should be explained through an appropriate cookie notice or consent mechanism where required by law.",
    ],
  },
  {
    title: "6. Sharing Information",
    paragraphs: [
      "Personal information may be shared with service providers when reasonably necessary for website hosting, payment processing, communication, technical support, security, or project administration.",
      "Information may also be disclosed where required by applicable law or a valid legal request.",
      "We do not intend to disclose personal information publicly without an appropriate reason or permission.",
    ],
  },
  {
    title: "7. Data Retention",
    paragraphs: [
      "Personal information should be retained only for as long as reasonably necessary for the purposes described in this policy, including administration, accounting, dispute resolution, and applicable legal requirements.",
      "Different categories of information may have different retention periods depending on their purpose and applicable obligations.",
    ],
  },
  {
    title: "8. Data Security",
    paragraphs: [
      "We aim to use reasonable technical and organisational safeguards to protect personal information against unauthorised access, alteration, disclosure, and loss.",
      "No website or electronic transmission can be guaranteed completely secure. Please contact us if you believe information submitted through the website has been compromised.",
    ],
  },
  {
    title: "9. Your Privacy Choices",
    paragraphs: [
      "Depending on applicable law, you may have rights to request access to, correction of, or deletion of your personal information, or to object to certain processing activities.",
      "We may need to verify a request and retain information where required for legitimate administrative or legal purposes.",
    ],
  },
  {
    title: "10. External Websites",
    paragraphs: [
      "Our website may contain links to third-party websites, payment services, or map applications.",
      "These services operate under their own terms and privacy policies. We encourage you to review those policies before providing information.",
    ],
  },
  {
    title: "11. Children's Privacy",
    paragraphs: [
      "The website is not intended to collect personal information directly from children without appropriate authorisation.",
      "If you believe a child has provided personal information without appropriate permission, please contact us so the matter can be reviewed.",
    ],
  },
  {
    title: "12. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy to reflect changes in website functionality, service providers, operational practices, or applicable legal requirements.",
      "The latest version will be published on this page with its effective date.",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
            <span className="text-white">Privacy Policy</span>
          </nav>

          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.24em] text-[#80e2b1]">
            Your Privacy Matters
          </span>

          <h1 className="font-serif text-[42px] font-semibold tracking-[-0.04em] sm:text-[56px] lg:text-[68px]">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-[680px] text-base leading-8 text-white/75 sm:text-lg">
            Learn how WellWill handles personal information and
            donation-related data.
          </p>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[260px_1fr] lg:gap-20">
          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[24px] border border-[#e0eaf2] bg-[#f5faff] p-7">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#15935e]">
                WellWill
              </span>

              <h2 className="mt-3 font-serif text-2xl font-semibold text-[#062a5e]">
                Privacy & Trust
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#53677f]">
                We believe in clear communication about how information
                is handled when you support our clean-water initiative.
              </p>

              <div className="mt-6 border-t border-[#dce8f2] pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#718399]">
                  Privacy Enquiries
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

          {/* MAIN TEXT */}
          <article className="min-w-0">
         

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

              {/* CONTACT */}
              <section>
                <h2 className="font-serif text-[25px] font-semibold text-[#062a5e] sm:text-[30px]">
                  13. Contact Us
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#53677f] sm:text-base">
                  For questions about this Privacy Policy or requests
                  relating to personal information, please contact:
                </p>

                <a
                  href="mailto:privacy@wellwill.org"
                  className="mt-4 inline-block font-semibold text-[#0866c5] hover:text-[#15935e]"
                >
                  privacy@wellwill.org
                </a>
              </section>
            </div>

            {/* FOOTER NAVIGATION */}
            <div className="mt-16 flex flex-wrap items-center gap-5 border-t border-[#dce8f2] pt-8">
              <Link
                href="/"
                className="text-sm font-semibold text-[#0866c5] transition-colors hover:text-[#15935e]"
              >
                Back to Home
              </Link>

              <Link
                href="/terms-and-conditions"
                className="text-sm font-semibold text-[#0866c5] transition-colors hover:text-[#15935e]"
              >
                Terms and Conditions
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
