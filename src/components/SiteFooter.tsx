"use client";

import Link from "next/link";
import { Database, Twitter, Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";

const footerLinks = {
  products: [
    { label: "Waterfall Enrichment", href: "/product/waterfall-enrichment" },
    { label: "Email & Phone Finder", href: "/product/email-phone-finder" },
    { label: "Smart Columns", href: "/product/smart-columns" },
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
    { label: "API Documentation", href: "#" },
    { label: "Blog", href: "#" },
  ],
  company: [
    { label: "About Us", href: "/about-us" },
    { label: "Pricing", href: "/pricing" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

const stats = [
  { value: "15+", label: "Data Sources" },
  { value: "99%", label: "Accuracy" },
  { value: "500+", label: "Teams" },
  { value: "10M+", label: "Records/Month" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#030303]">
      {/* Stats Bar */}
      <div className="border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#3e8aff]">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3e8aff] to-[#3e8aff]/60 flex items-center justify-center">
                <Database className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">Cleanlist</span>
            </Link>
            <p className="text-sm text-gray-500 mb-6 max-w-xs">
              The data operating system for modern GTM teams. Clean, verify, and enrich
              your leads with 99% accuracy.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.1] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.1] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.1] transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/[0.05] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.1] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Use Cases */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Use Cases</h4>
            <ul className="space-y-3">
              {footerLinks.useCases.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    {link.href === "#" && (
                      <ArrowUpRight className="w-3 h-3 opacity-50" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-white transition-colors"
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
      <div className="border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span>&copy; {new Date().getFullYear()} Cleanlist. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Security
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
