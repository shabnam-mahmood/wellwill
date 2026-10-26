
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wellwill.org"),

  title: "WellWill | The Will to Do Good. The Way to Live Well.",

  description:
    "WellWill is a humanitarian initiative helping underserved families gain better access to clean, reliable water.",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wellwill.org",
    siteName: "WellWill",
    title: "WellWill | Clean Water. Brighter Lives.",
    description:
      "Helping underserved families gain better access to clean, reliable water.",
    images: [
      {
        url: "/images/wellwill-social-share.png",
        width: 1200,
        height: 630,
        alt: "WellWill - Clean Water. Brighter Lives.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WellWill | Clean Water. Brighter Lives.",
    description:
      "Helping underserved families gain better access to clean, reliable water.",
    images: ["/images/wellwill-social-share.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
