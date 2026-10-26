
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const aboutLinks = [
  { label: "Our Story", href: "/about" },
  { label: "What We Do", href: "/water" },
  { label: "Our Impact", href: "/impact" },
];

export default function Header() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () =>
      setScrolled(window.scrollY > 18);

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setAboutOpen(false);
    setMobileOpen(false);
    setMobileAboutOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const aboutActive =
    pathname === "/about" ||
    pathname === "/water" ||
    pathname === "/impact";

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "border-b border-[#dbe7ef]/80 bg-white/95 shadow-[0_8px_30px_rgba(6,42,94,0.08)] backdrop-blur-xl"
            : "bg-white/70 backdrop-blur-md"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1440px] items-center justify-between px-6 transition-all duration-500 sm:px-8 lg:px-16 ${
            scrolled ? "h-[72px]" : "h-[88px]"
          }`}
        >
          {/* LOGO */}
          <Link
            href="/"
            className="relative z-[110] shrink-0"
          >
            <div
              className={`relative transition-all duration-500 ${
                scrolled
                  ? "h-[55px] w-[210px]"
                  : "h-[65px] w-[245px]"
              }`}
            >
              <Image
                src="/images/wellwill--logo.png"
                alt="WellWill"
                fill
                priority
                sizes="315px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-9 xl:flex">
            <NavLink
              href="/"
              label="Home"
              active={pathname === "/"}
            />

            {/* ABOUT US DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <Link
                href="/about"
                className={`group relative flex items-center gap-2 py-7 text-[14px] font-medium tracking-[0.01em] transition-colors duration-300 ${
                  aboutActive
                    ? "text-[#0866c5]"
                    : "text-[#193653] hover:text-[#0866c5]"
                }`}
              >
                About Us

                <span
                  aria-hidden="true"
                  className={`inline-flex items-center justify-center text-[16px] leading-none transition-transform duration-300 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                >
                  ▾
                </span>

                <span
                  className={`absolute bottom-[18px] left-0 h-[2px] rounded-full bg-[#15935e] transition-all duration-300 ${
                    aboutActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>

              <AnimatePresence>
                {aboutOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 12,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                      scale: 0.98,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 top-[68px] w-[220px] -translate-x-1/2 overflow-hidden rounded-[18px] border border-[#dce7ef] bg-white/95 p-2 shadow-[0_18px_45px_rgba(6,42,94,0.14)] backdrop-blur-xl"
                  >
                    {aboutLinks.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block rounded-[12px] px-4 py-3 text-[13px] font-medium text-[#29445f] transition-colors duration-200 hover:bg-[#f0f8fd] hover:text-[#0866c5]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink
              href="/projects"
              label="Projects"
              active={pathname === "/projects"}
            />

            <NavLink
              href="/stories"
              label="Stories"
              active={pathname === "/stories"}
            />

            <NavLink
              href="/contact"
              label="Contact"
              active={pathname === "/contact"}
            />
          </nav>

          {/* DESKTOP DONATE BUTTON */}
          <div className="hidden xl:block">
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/donate"
                className="group relative flex min-w-[145px] items-center justify-center overflow-hidden rounded-full bg-[#0866c5] px-7 py-3.5 text-[14px] font-semibold text-white shadow-[0_8px_22px_rgba(8,102,197,0.20)] transition-all duration-300"
              >
                {/* WATER FLOW ANIMATION */}
                <span className="pointer-events-none absolute inset-y-0 -left-[130%] w-[130%] bg-[#1593d3] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:left-0">
                  <span className="absolute -right-7 top-[-25%] h-[150%] w-16 rounded-[50%] bg-[#1593d3]" />
                </span>

                {/* REFLECTION */}
                <span className="pointer-events-none absolute inset-y-0 -left-[55%] w-[38%] skew-x-[-18deg] bg-white/20 opacity-0 transition-all delay-75 duration-700 group-hover:left-[120%] group-hover:opacity-100" />

                <span
                  className="relative z-10"
                  style={{ color: "#ffffff" }}
                >
                  Donate Now
                </span>
              </Link>
            </motion.div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() =>
              setMobileOpen((current) => !current)
            }
            className="relative z-[110] flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-[#d8e5ee] bg-white/90 xl:hidden"
          >
            <span
              className={`h-[2px] w-5 rounded-full bg-[#062a5e] transition-all duration-300 ${
                mobileOpen
                  ? "translate-y-[7px] rotate-45"
                  : ""
              }`}
            />

            <span
              className={`h-[2px] w-5 rounded-full bg-[#062a5e] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-[2px] w-5 rounded-full bg-[#062a5e] transition-all duration-300 ${
                mobileOpen
                  ? "-translate-y-[7px] -rotate-45"
                  : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[#f8fcff] pt-[96px] xl:hidden"
          >
            <div className="h-full overflow-y-auto px-6 pb-8 sm:px-8">
              <div className="mx-auto max-w-[600px]">
                <MobileLink href="/" label="Home" />

                {/* MOBILE ABOUT US */}
                <div className="border-b border-[#dde8ef]">
                  <div className="flex items-center justify-between">
                    <Link
                      href="/about"
                      className={`flex-1 py-4 text-[18px] font-semibold tracking-[-0.01em] ${
                        aboutActive
                          ? "text-[#0866c5]"
                          : "text-[#062a5e]"
                      }`}
                    >
                      About Us
                    </Link>

                    <button
                      type="button"
                      onClick={() =>
                        setMobileAboutOpen(
                          (current) => !current
                        )
                      }
                      className="flex h-11 w-11 items-center justify-center text-lg text-[#062a5e]"
                      aria-label="Toggle About Us submenu"
                      aria-expanded={mobileAboutOpen}
                    >
                      <span
                        className={`transition-transform duration-300 ${
                          mobileAboutOpen
                            ? "rotate-180"
                            : ""
                        }`}
                      >
                        ▾
                      </span>
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {mobileAboutOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="mb-4 rounded-[18px] bg-white p-2">
                          {aboutLinks.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block rounded-[12px] px-4 py-3 text-[15px] font-medium text-[#405a73] hover:bg-[#f1f8fc] hover:text-[#0866c5]"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <MobileLink
                  href="/projects"
                  label="Projects"
                />

                <MobileLink
                  href="/stories"
                  label="Stories"
                />

                <MobileLink
                  href="/contact"
                  label="Contact"
                />

                {/* MOBILE DONATE BUTTON */}
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  className="mb-8 mt-6"
                >
                  <Link
                    href="/donate"
                    className="group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-[#0866c5] px-7 py-4 text-[15px] font-semibold text-white shadow-[0_10px_28px_rgba(8,102,197,0.24)]"
                  >
                    <span className="pointer-events-none absolute -left-[35%] top-[58%] h-[145%] w-[175%] rounded-[45%] bg-[#1593d3]/80 transition-all duration-700 ease-out group-hover:-translate-y-[46%] group-hover:translate-x-[10%] group-hover:rotate-[7deg]" />

                    <span className="pointer-events-none absolute -left-[22%] top-[76%] h-[135%] w-[160%] rounded-[48%] bg-[#63d2f4]/55 transition-all duration-[900ms] ease-out group-hover:-translate-y-[60%] group-hover:-translate-x-[7%] group-hover:-rotate-[6deg]" />

                    <span
                      className="relative z-10"
                      style={{ color: "#ffffff" }}
                    >
                      Donate Now
                    </span>
                  </Link>
                </motion.div>

                <p className="mt-6 text-center text-xs leading-5 text-[#7a8c9f]">
                  Water is our beginning. Wellbeing is
                  our mission.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* DESKTOP NAV LINK */
function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative py-7 text-[14px] font-medium tracking-[0.01em] transition-colors duration-300 ${
        active
          ? "text-[#0866c5]"
          : "text-[#193653] hover:text-[#0866c5]"
      }`}
    >
      {label}

      <span
        className={`absolute bottom-[18px] left-0 h-[2px] rounded-full bg-[#15935e] transition-all duration-300 ${
          active
            ? "w-full"
            : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

/* MOBILE NAV LINK */
function MobileLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="block border-b border-[#dde8ef] py-4 text-[18px] font-semibold tracking-[-0.01em] text-[#062a5e] transition-colors hover:text-[#0866c5]"
    >
      {label}
    </Link>
  );
}
