"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import {
  ArrowRight,
  LinkedinLogo,
  Download,
  Users,
  Lightning,
  Shield,
  Check,
  GoogleChromeLogo,
  MagnifyingGlass,
  Funnel,
  ArrowsClockwise,
  Clock,
  Database,
  FileXls,
  Lock,
  Globe,
} from "@phosphor-icons/react";
import { TechnicalGrid, VerticalStepper, GlowCard, GlowIcon } from "@/components/ui";
import SalesNavDemo from "@/components/SalesNavDemo";

export default function SalesNavScraperPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0077b5]/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#0077b5]/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0077b5]/10 border border-[#0077b5]/20 text-sm text-[#0077b5] mb-6"
              >
                <GlowIcon icon={<LinkedinLogo />} size="xs" color="linkedin" variant="ghost" />
                Chrome Extension
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`text-5xl md:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} leading-[1.1] mb-6`}
              >
                Sales Nav{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077b5] to-[#00a0dc]">
                  Scraper
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} mb-8 max-w-lg`}
              >
                Bulk export leads from LinkedIn Sales Navigator search results.
                Enrich with emails and phones. Push directly to your CRM.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white font-medium rounded-lg hover:bg-[#0077b5]/90 transition-colors"
                >
                  <GoogleChromeLogo />
                  Install Extension
                </Link>
                <Link
                  href="#how-it-works"
                  className={`inline-flex items-center gap-2 px-6 py-3 border ${isDark ? "border-white/[0.15] text-white hover:bg-white/[0.05]" : "border-gray-300 text-gray-700 hover:bg-gray-100"} font-medium rounded-lg transition-colors`}
                >
                  Watch Demo
                </Link>
              </motion.div>

              {/* Key Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-3 gap-4"
              >
                {[
                  { value: "Bulk", label: "Export" },
                  { value: "Auto", label: "Enrichment" },
                  { value: "CRM", label: "Sync" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`p-3 rounded-lg ${isDark ? "bg-white/[0.03] border-white/[0.05]" : "bg-white/70 border-black/[0.08]"} border`}
                  >
                    <div className="text-2xl font-bold text-[#0077b5]">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <SalesNavDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Stats */}
      <section className={`py-12 border-y ${isDark ? "border-white/[0.08] bg-[#080808]" : "border-black/[0.08] bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <TechnicalGrid
            columns={5}
            blocks={[
              {
                icon: <Users />,
                label: "Export",
                value: "Bulk",
                subValue: "List export",
                color: "blue",
              },
              {
                icon: <Database />,
                label: "Enrichment",
                value: "Auto",
                subValue: "Email & phone",
                color: "purple",
              },
              {
                icon: <Shield />,
                label: "Safe Limits",
                value: "Yes",
                subValue: "Smart rate limiting",
                color: "yellow",
              },
              {
                icon: <ArrowsClockwise />,
                label: "CRM Sync",
                value: "Yes",
                subValue: "Direct push",
                color: "green",
              },
              {
                icon: <Lightning />,
                label: "Pricing",
                value: "1-10 Cr",
                subValue: "Per lead enriched",
                highlight: true,
              },
            ]}
          />
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0077b5]/10 border border-[#0077b5]/20 text-sm text-[#0077b5] mb-4">
              <GlowIcon icon={<GoogleChromeLogo />} size="xs" color="linkedin" variant="ghost" />
              Simple Workflow
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              From Search to CRM in Minutes
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Our Chrome extension integrates seamlessly with Sales Navigator.
              Build your list, click export, get enriched leads.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <VerticalStepper
              steps={[
                {
                  number: "01",
                  title: "Build Your Search",
                  description:
                    "Use Sales Navigator's powerful filters to find your ideal prospects.",
                  icon: <MagnifyingGlass />,
                  details: [
                    "Industry, company size, and geography filters",
                    "Job title and seniority targeting",
                    "Account lists and saved searches",
                    "Boolean search support",
                  ],
                },
                {
                  number: "02",
                  title: "Click Export",
                  description:
                    "Our extension adds an export button directly in Sales Navigator.",
                  icon: <Download />,
                  details: [
                    "Select all or choose specific results",
                    "Bulk export from search results",
                    "Smart rate limiting protects your account",
                    "Background processing—keep working",
                  ],
                },
                {
                  number: "03",
                  title: "Auto-Enrichment",
                  description:
                    "Every lead is automatically enriched with emails, phones, and company data.",
                  icon: <ArrowsClockwise />,
                  details: [
                    "Work email discovery via Waterfall",
                    "Direct phone numbers",
                    "Full company firmographics",
                    "LinkedIn profile URL preserved",
                  ],
                },
                {
                  number: "04",
                  title: "Download or Sync",
                  description:
                    "Export to CSV or push directly to your CRM with one click.",
                  icon: <FileXls />,
                  details: [
                    "CSV/Excel download",
                    "Direct CRM sync (Salesforce, HubSpot)",
                    "Webhook delivery",
                    "Google Sheets integration",
                  ],
                },
              ]}
            />

            {/* Extension Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <div className={`p-6 rounded-xl ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>
                <div className="flex items-center gap-2 mb-6">
                  <GoogleChromeLogo className="text-[#0077b5]" />
                  <span className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>Extension Preview</span>
                </div>

                {/* Browser Mockup */}
                <div className="rounded-lg bg-[#111] border border-white/[0.05] overflow-hidden">
                  {/* Address Bar */}
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#0d0d0d] border-b border-white/[0.05]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 px-3 py-1 rounded bg-[#1a1a1a] text-xs text-gray-500">
                      linkedin.com/sales/search/people
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Extension Overlay */}
                    <div className="mb-4 p-3 rounded-lg bg-[#0077b5]/10 border border-[#0077b5]/30">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-[#0077b5] flex items-center justify-center">
                            <Download className="text-white" size={12} />
                          </div>
                          <span className="text-sm font-medium text-white">Cleanlist Export</span>
                        </div>
                        <span className="text-xs text-[#0077b5]">2,437 results</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="flex-1 py-2 rounded bg-[#0077b5] text-white text-xs font-medium">
                          Export All + Enrich
                        </button>
                        <button className={`px-3 py-2 rounded border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"} text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                          Select
                        </button>
                      </div>
                    </div>

                    {/* Search Results Preview */}
                    <div className="space-y-2">
                      {[
                        { name: "Sarah Chen", title: "VP Sales", company: "TechCorp" },
                        { name: "Mike Johnson", title: "CRO", company: "ScaleUp" },
                        { name: "Lisa Park", title: "Head of BD", company: "GrowthCo" },
                      ].map((lead, i) => (
                        <div
                          key={lead.name}
                          className="flex items-center gap-3 p-2 rounded bg-[#0d0d0d]"
                        >
                          <div className="w-8 h-8 rounded-full bg-gray-700" />
                          <div className="flex-1">
                            <div className="text-xs text-white">{lead.name}</div>
                            <div className="text-[10px] text-gray-500">
                              {lead.title} at {lead.company}
                            </div>
                          </div>
                          <Check className="text-[#0077b5]" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                  <Shield className="text-green-500" />
                  Safe rate limits protect your LinkedIn account
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={`py-24 ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Enterprise-Grade Features
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Built for sales teams who need reliable, high-volume lead extraction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users />,
                title: "Bulk Export",
                description:
                  "Export leads in bulk from Sales Navigator search results and saved lists.",
                stats: ["Bulk export", "Saved lists", "Batch processing"],
              },
              {
                icon: <ArrowsClockwise />,
                title: "Auto-Enrichment",
                description:
                  "Every exported lead is automatically enriched with verified emails and phones.",
                stats: ["Email + Phone", "Company data", "98% accuracy"],
              },
              {
                icon: <Funnel />,
                title: "Smart Filters",
                description:
                  "Preserve all Sales Nav filters. Export exactly the prospects you searched for.",
                stats: ["Job title", "Company size", "Geography"],
              },
              {
                icon: <Shield />,
                title: "Account Safety",
                description:
                  "Intelligent rate limiting mimics human behavior to protect your LinkedIn account.",
                stats: ["Smart delays", "Session limits", "Safe defaults"],
              },
              {
                icon: <FileXls />,
                title: "Multiple Exports",
                description:
                  "Download as CSV, push to CRM, or send via webhook. Your data, your way.",
                stats: ["CSV/Excel", "CRM sync", "Webhooks"],
              },
              {
                icon: <Globe />,
                title: "Global Coverage",
                description:
                  "Works with all LinkedIn locales and Sales Navigator regions.",
                stats: ["All regions", "Multi-language", "International data"],
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard className="h-full p-6" glowColor="#0077b5">
                  <GlowIcon icon={feature.icon} size="lg" color="linkedin" variant="glow" className="mb-4" />
                  <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>{feature.title}</h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"} mb-4`}>{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.stats.map((stat) => (
                      <span
                        key={stat}
                        className="px-2 py-1 text-xs bg-white/[0.05] text-gray-500 rounded"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Output Fields */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0077b5]/10 border border-[#0077b5]/20 text-sm text-[#0077b5] mb-4">
                <GlowIcon icon={<Database />} size="xs" color="linkedin" variant="ghost" />
                Rich Output
              </div>
              <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
                Complete Lead Records
              </h2>
              <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"} mb-8`}>
                Every export includes LinkedIn profile data plus enriched contact
                and company information.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Full Name",
                  "Job Title",
                  "Company Name",
                  "Work Email",
                  "Direct Phone",
                  "LinkedIn URL",
                  "Location",
                  "Industry",
                  "Company Size",
                  "Revenue Range",
                  "Technologies",
                  "Seniority Level",
                ].map((field) => (
                  <div key={field} className={`flex items-center gap-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    <Check className="text-[#0077b5]" />
                    {field}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}
            >
              <div className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"} mb-4`}>Sample Export (CSV)</div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className={`border-b ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>
                      <th className="py-2 px-2 text-left text-gray-500">Name</th>
                      <th className="py-2 px-2 text-left text-gray-500">Email</th>
                      <th className="py-2 px-2 text-left text-gray-500">Phone</th>
                      <th className="py-2 px-2 text-left text-gray-500">Company</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Sarah Chen", email: "sarah@techcorp.io", phone: "+1 555-0123", company: "TechCorp" },
                      { name: "Mike Johnson", email: "mike@scaleup.com", phone: "+1 555-0124", company: "ScaleUp" },
                      { name: "Lisa Park", email: "lisa@growthco.io", phone: "+1 555-0125", company: "GrowthCo" },
                    ].map((row, i) => (
                      <tr key={i} className={`border-b ${isDark ? "border-white/[0.05]" : "border-black/[0.05]"}`}>
                        <td className={`py-2 px-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>{row.name}</td>
                        <td className="py-2 px-2 text-[#0077b5]">{row.email}</td>
                        <td className={`py-2 px-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{row.phone}</td>
                        <td className={`py-2 px-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{row.company}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                + 15 more columns including LinkedIn URL, industry, seniority, and more
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className={`py-24 ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <GlowIcon icon={<Lock />} size="xl" color="green" variant="glow" className="mx-auto mb-6" />
            <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Your Account is Safe
            </h2>
            <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"} mb-8`}>
              We&apos;ve built intelligent safeguards to protect your LinkedIn account while
              enabling high-volume prospecting.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: "Smart Rate Limiting",
                  description: "Mimics human browsing patterns with randomized delays between actions.",
                },
                {
                  title: "Session Management",
                  description: "Respects daily limits and pauses automatically if unusual activity detected.",
                },
                {
                  title: "Safe Defaults",
                  description: "Conservative settings out of the box. Adjust based on your account age and health.",
                },
              ].map((item) => (
                <div key={item.title} className={`p-4 rounded-lg ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>
                  <h4 className={`font-medium ${isDark ? "text-white" : "text-gray-900"} mb-2`}>{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0077b5]/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#0077b5]/20 rounded-full blur-[150px]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-6`}>
              Start Exporting From Sales Navigator
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} mb-8 max-w-2xl mx-auto`}>
              Install our Chrome extension and export your first 100 leads free.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0077b5] text-white font-medium rounded-lg hover:bg-[#0077b5]/90 transition-colors text-lg"
              >
                <GoogleChromeLogo />
                Install Chrome Extension
              </Link>
              <Link
                href="/pricing"
                className={`inline-flex items-center gap-2 px-8 py-4 border ${isDark ? "border-white/[0.15] text-white hover:bg-white/[0.05]" : "border-gray-300 text-gray-700 hover:bg-gray-100"} font-medium rounded-lg transition-colors text-lg`}
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
