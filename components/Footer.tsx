
import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  ["Home", "/"],
  ["Projects", "/projects"],
  ["Stories", "/stories"],
  ["Contact", "/contact"],
];

const aboutLinks = [
  ["Our Story", "/about"],
  ["What We Do", "/water"],
  ["Our Impact", "/impact"],
];

const supportLinks = [
  ["Donate Now", "/donate"],
  ["Need Water Support", "/water-survey"],
];

const dubaiMapsUrl =
  "https://maps.app.goo.gl/RFLUZFtpiyiDC9ch8";

const pakistanMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=World+Trade+Centre+Islamabad+Pakistan";

export default function Footer() {
  return (
    <footer className="bg-white text-[#062a5e]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-10 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_0.75fr_0.75fr_0.8fr] lg:px-16 lg:py-12">
        {/* Brand */}
        <div className="max-w-[420px] lg:pr-10">
          <Link href="/" className="inline-flex">
            <div className="relative h-[72px] w-[230px] shrink-0">
              <Image
                src="/images/wellwill-logo.png"
                alt="WellWill"
                fill
                className="object-contain object-left"
                sizes="230px"
                priority={false}
              />
            </div>
          </Link>

          <p className="mt-4 max-w-[360px] text-sm leading-6 text-[#53677f]">
            Our journey begins with water, with a vision
            for healthier, stronger communities and
            lasting wellbeing.
          </p>

          {/* Email */}
          <div className="mt-5">
            <a
              href="mailto:info@wellwill.org"
              className="text-sm font-medium text-[#0866c5] transition-colors hover:text-[#15935e]"
            >
              info@wellwill.org
            </a>
          </div>

          {/* Dubai Office */}
          <div className="mt-5">
            <h4 className="text-sm font-semibold text-[#062a5e]">
              Dubai Office
            </h4>

            <a
              href={dubaiMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm leading-6 text-[#53677f] transition-colors hover:text-[#0866c5]"
            >
              B2B Office Tower, Office 2205,
              Marasi Drive Street, Business Bay,
              Dubai, UAE
            </a>
          </div>

          {/* Pakistan Office */}
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-[#062a5e]">
              Pakistan Office
            </h4>

            <a
              href={pakistanMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-sm leading-6 text-[#53677f] transition-colors hover:text-[#0866c5]"
            >
              Office No. 4087, 4th Floor,
              World Trade Centre,
              Islamabad, Pakistan
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-serif text-[20px] font-semibold text-[#062a5e]">
            Explore
          </h3>

          <div className="mt-4 flex flex-col gap-2.5">
            {exploreLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="w-fit text-sm text-[#40566f] transition-colors hover:text-[#0866c5]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="font-serif text-[20px] font-semibold text-[#062a5e]">
            About
          </h3>

          <div className="mt-4 flex flex-col gap-2.5">
            {aboutLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="w-fit text-sm text-[#40566f] transition-colors hover:text-[#0866c5]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-serif text-[20px] font-semibold text-[#062a5e]">
            Support
          </h3>

          <div className="mt-4 flex flex-col gap-2.5">
            {supportLinks.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="w-fit text-sm text-[#40566f] transition-colors hover:text-[#0866c5]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#dce6ed]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-4 text-xs text-[#53677f] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-16">
          <p>
            © 2026 WellWill. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-[#0866c5]"
            >
              Privacy Policy
            </Link>

            <span className="text-[#a6b5c5]">
              |
            </span>

            <Link
              href="/terms-and-conditions"
              className="transition-colors hover:text-[#0866c5]"
            >
              Terms and Conditions
            </Link>
          </div>

          <p className="text-[#062a5e]">
            Water is our beginning. Wellbeing is our mission
          </p>
        </div>
      </div>
    </footer>
  );
}
