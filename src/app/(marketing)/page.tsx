"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  Mail,
  Phone,
  Building,
  Users,
  Zap,
  Shield,
  Layers,
  Sparkles,
  Linkedin,
  Workflow,
  Check,
  ChevronRight,
  Globe,
  BarChart3,
  RefreshCw,
} from "lucide-react";
import { DashboardMockup, TechnicalGrid, VerticalStepper, DataSourcesGrid } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3e8aff]/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#3e8aff]/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-6"
              >
                <Sparkles className="w-4 h-4" />
                The Data Operating System for GTM Teams
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
              >
                Turn Messy Data Into Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                  Growth Engine
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-400 mb-8 max-w-lg"
              >
                Clean, verify, and enrich your leads with 99% accuracy. 15+ data sources.
                1 credit per record. The only data platform your GTM team needs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-12"
              >
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.15] text-white font-medium rounded-lg hover:bg-white/[0.05] transition-colors"
                >
                  Watch Demo
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap items-center gap-6 text-sm text-gray-500"
              >
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  500+ teams trust us
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  GDPR & SOC2 Compliant
                </div>
              </motion.div>
            </div>

            {/* Right: Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <DashboardMockup variant="enrichment" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y border-white/[0.08] bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <TechnicalGrid
            columns={5}
            blocks={[
              {
                icon: <Database className="w-5 h-5" />,
                label: "Data Sources",
                value: "15+",
                subValue: "Unified cascade",
                color: "blue",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                label: "Accuracy",
                value: "99%",
                subValue: "Triple verification",
                color: "green",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                label: "Per Record",
                value: "1 Credit",
                subValue: "Simple pricing",
                color: "yellow",
              },
              {
                icon: <Users className="w-5 h-5" />,
                label: "Teams",
                value: "500+",
                subValue: "Trust Cleanlist",
                color: "purple",
              },
              {
                icon: <BarChart3 className="w-5 h-5" />,
                label: "Records/Month",
                value: "10M+",
                subValue: "Processed",
                highlight: true,
              },
            ]}
          />
        </div>
      </section>

      {/* Product Suite */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
              <Layers className="w-4 h-4" />
              Platform
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              One Platform. Complete Data Control.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From lead generation to CRM sync, Cleanlist handles every step of your data pipeline.
            </p>
          </motion.div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Layers className="w-6 h-6" />,
                title: "Waterfall Enrichment",
                description:
                  "Query 15+ data sources in parallel. Get the best data from each, merged into one golden record.",
                href: "/product/waterfall-enrichment",
                badge: "Flagship",
                stats: ["15+ Sources", "95% Match Rate", "<2s Response"],
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email & Phone Finder",
                description:
                  "Find direct contact information for any professional. Verified in real-time.",
                href: "/product/email-phone-finder",
                stats: ["Triple Verified", "Catch-all Detection", "Disposable Check"],
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Smart Columns",
                description:
                  "AI-powered data normalization. Standardize job titles, company names, and more.",
                href: "/product/smart-columns",
                badge: "AI",
                stats: ["GPT-4 Powered", "Custom Rules", "Batch Processing"],
              },
              {
                icon: <Linkedin className="w-6 h-6" />,
                title: "Sales Nav Scraper",
                description:
                  "Export up to 2,500 leads per search from Sales Navigator. Auto-enriched.",
                href: "/product/sales-nav-scraper",
                stats: ["2,500/Search", "Chrome Extension", "Auto-Enrich"],
              },
              {
                icon: <Workflow className="w-6 h-6" />,
                title: "Playbook Builder",
                description:
                  "Build automated GTM workflows. Dedupe, enrich, verify, and sync on autopilot.",
                href: "/product/playbook-builder",
                badge: "New",
                stats: ["Visual Builder", "40+ Actions", "CRM Sync"],
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "API Access",
                description:
                  "Full REST API for programmatic access. Build Cleanlist into your stack.",
                href: "#",
                stats: ["REST API", "Webhooks", "SDKs"],
              },
            ].map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={product.href}
                  className="group block h-full p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08] hover:border-[#3e8aff]/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff] group-hover:bg-[#3e8aff]/20 transition-colors">
                      {product.icon}
                    </div>
                    {product.badge && (
                      <span className="px-2 py-1 text-xs font-medium bg-[#3e8aff]/20 text-[#3e8aff] rounded">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#3e8aff] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{product.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {product.stats.map((stat) => (
                      <span
                        key={stat}
                        className="px-2 py-1 text-xs bg-white/[0.05] text-gray-500 rounded"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-sm text-[#3e8aff] opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
                  <RefreshCw className="w-4 h-4" />
                  How It Works
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Data Hygiene on Autopilot
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  From messy spreadsheets to CRM-ready records in three steps.
                </p>

                <div className="p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08]">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">Average Results</span>
                    <span className="text-xs text-[#3e8aff]">Based on 10M+ records</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-300">Enrichment Match Rate</span>
                        <span className="text-green-500 font-medium">95%</span>
                      </div>
                      <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "95%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-[#3e8aff] to-green-500 rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-300">Email Deliverability</span>
                        <span className="text-green-500 font-medium">98%</span>
                      </div>
                      <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "98%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-[#3e8aff] to-green-500 rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-300">Duplicate Removal</span>
                        <span className="text-yellow-500 font-medium">15-30%</span>
                      </div>
                      <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "25%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                          className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <VerticalStepper
              steps={[
                {
                  number: "01",
                  title: "Connect Your Data",
                  description:
                    "Upload CSV, connect your CRM, or use our API. We accept any format.",
                  details: [
                    "CSV/Excel upload with smart column mapping",
                    "Direct CRM integrations (Salesforce, HubSpot, Pipedrive)",
                    "REST API with batch processing",
                    "Webhook triggers for real-time flows",
                  ],
                },
                {
                  number: "02",
                  title: "Enrich & Verify",
                  description:
                    "Our waterfall engine queries 15+ sources. Every email is triple-verified.",
                  details: [
                    "Parallel queries to all data providers",
                    "Best-match algorithm selects highest quality",
                    "Syntax, MX, and SMTP verification",
                    "Catch-all and disposable detection",
                  ],
                },
                {
                  number: "03",
                  title: "Export & Sync",
                  description:
                    "Push clean data back to your CRM or download enriched files.",
                  details: [
                    "One-click CRM sync with field mapping",
                    "Export to CSV, JSON, or direct API",
                    "Scheduled recurring runs",
                    "Audit trail and version history",
                  ],
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
              <Database className="w-4 h-4" />
              Data Sources
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              15+ Sources. One API Call.
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We query the industry&apos;s top data providers in parallel and merge results
              into a single, high-quality record.
            </p>
          </motion.div>

          <DataSourcesGrid />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
              <Users className="w-4 h-4" />
              Use Cases
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Built for Every GTM Team
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "Sales Teams",
                description:
                  "Spend less time researching, more time selling. Get verified contact data instantly.",
                href: "/use-cases/sales-teams",
                stats: ["50% less research time", "3x more conversations", "98% deliverability"],
              },
              {
                icon: <Building className="w-6 h-6" />,
                title: "RevOps",
                description:
                  "Automate data hygiene across your entire stack. Keep your CRM clean at scale.",
                href: "/use-cases/revops",
                stats: ["Automated deduplication", "CRM enrichment", "Data governance"],
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Agencies",
                description:
                  "White-label data services for your clients. Bulk processing with margin controls.",
                href: "/use-cases/agencies",
                stats: ["White-label ready", "Team workspaces", "Usage analytics"],
              },
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={useCase.href}
                  className="group block h-full p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08] hover:border-[#3e8aff]/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff] mb-4 group-hover:bg-[#3e8aff]/20 transition-colors">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#3e8aff] transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.stats.map((stat) => (
                      <div key={stat} className="flex items-center gap-2 text-sm text-gray-500">
                        <Check className="w-4 h-4 text-green-500" />
                        {stat}
                      </div>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#3e8aff]/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#3e8aff]/20 rounded-full blur-[150px]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Clean Your Data?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join 500+ teams using Cleanlist to power their GTM engine. Start with 100 free
              credits.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-colors text-lg"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/[0.15] text-white font-medium rounded-lg hover:bg-white/[0.05] transition-colors text-lg"
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
