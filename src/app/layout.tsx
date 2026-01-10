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
  title: "Cleanlist - Turn Messy Data Into Your Greatest Growth Lever",
  description:
    "Clean, verify, and enrich your leads with 99% accuracy. Stop wasting spend on bad data. Trusted by 500+ growth teams.",
  keywords: [
    "email verification",
    "data cleaning",
    "lead enrichment",
    "email validation",
    "data quality",
    "B2B leads",
  ],
  openGraph: {
    title: "Cleanlist - Turn Messy Data Into Your Greatest Growth Lever",
    description:
      "Clean, verify, and enrich your leads with 99% accuracy. Stop wasting spend on bad data.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleanlist - Turn Messy Data Into Your Greatest Growth Lever",
    description:
      "Clean, verify, and enrich your leads with 99% accuracy. Stop wasting spend on bad data.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030303] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
