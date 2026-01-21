"use client";

import Link from "next/link";
import Image from "next/image";
import { LinkedinLogo, Envelope } from "@phosphor-icons/react";
import { useTheme } from "@/context/ThemeContext";
import { GlowIcon } from "@/components/ui";

const footerLinks = {
  products: [
    { label: "People Search", href: "/product/people-search" },
    { label: "Waterfall Enrichment", href: "/product/waterfall-enrichment" },
    { label: "Smart Columns", href: "/product/smart-columns" },
    { label: "ICP Scoring", href: "/product/icp-scoring" },
    { label: "Sales Nav Scraper", href: "/product/sales-nav-scraper" },
    { label: "Playbook Builder", href: "/product/playbook-builder" },
  ],
  useCases: [
    { label: "Sales Teams", href: "/use-cases/sales-teams" },
    { label: "RevOps", href: "/use-cases/revops" },
    { label: "Agencies", href: "/use-cases/agencies" },
  ],
  resources: [
    { label: "Case Studies", href: "/resources/case-studies" },
    { label: "Integrations", href: "/resources/integrations" },
  ],
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "Pricing", href: "/pricing" },
  ],
};

export default function SiteFooter() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <footer className={`border-t transition-colors ${isDark ? "border-white/[0.08] bg-[#080808]" : "border-black/[0.08] bg-[#F8F9FA]"}`}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src={isDark ? "/images/logo-dark.png" : "/images/logo-light.png"}
                alt="Cleanlist"
                width={140}
                height={35}
                className="h-8 w-auto"
              />
            </Link>
            <p className={`text-sm mb-6 max-w-xs ${isDark ? "text-gray-500" : "text-gray-600"}`}>
              The data operating system for modern GTM teams. Clean, verify, and enrich
              your leads with 98% accuracy.
            </p>
            <div className="flex items-center gap-3 md:gap-4">
              <a href="https://ca.linkedin.com/company/cleanlist-ai" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                <GlowIcon icon={<LinkedinLogo />} size="sm" color="linkedin" variant="glow" />
              </a>
              <a href="mailto:levon@cleanlist.ai" className="transition-transform hover:scale-110">
                <GlowIcon icon={<Envelope />} size="sm" color="blue" variant="glow" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className={`text-sm font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Products</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${isDark ? "text-gray-500 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className={`text-sm font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Use Cases</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.useCases.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${isDark ? "text-gray-500 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className={`text-sm font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Resources</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${isDark ? "text-gray-500 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className={`text-sm font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Company</h4>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${isDark ? "text-gray-500 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <div className={`flex items-center gap-6 text-xs md:text-sm ${isDark ? "text-gray-500" : "text-gray-600"}`}>
              <span>&copy; {new Date().getFullYear()} Cleanlist. All rights reserved.</span>
            </div>
            <div className={`flex items-center gap-4 md:gap-6 text-xs md:text-sm ${isDark ? "text-gray-500" : "text-gray-600"}`}>
              <Link href="/privacy-policy" className="hover:text-[#3e8aff] transition-colors">Privacy Policy</Link>
              <Link href="/terms-conditions" className="hover:text-[#3e8aff] transition-colors">Terms & Conditions</Link>
            </div>
            <div className={`flex items-center gap-2 text-xs md:text-sm ${isDark ? "text-gray-500" : "text-gray-600"}`}>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
