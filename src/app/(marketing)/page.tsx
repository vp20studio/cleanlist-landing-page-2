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
import { DashboardMockup, TechnicalGrid, VerticalStepper } from "@/components/ui";

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
                Enrich, verify, and score your leads with 98% accuracy. From email-only
                to full contact data. The complete data platform for GTM teams.
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
                  Thousands of teams
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  98% accuracy guarantee
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
                label: "Enrichment",
                value: "Multi-Source",
                subValue: "Premium providers",
                color: "blue",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                label: "Accuracy",
                value: "98%",
                subValue: "Verified contacts",
                color: "green",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                label: "Pricing",
                value: "From 1 Credit",
                subValue: "Email or full contact",
                color: "yellow",
              },
              {
                icon: <Users className="w-5 h-5" />,
                label: "Teams",
                value: "Thousands",
                subValue: "Trust Cleanlist",
                color: "purple",
              },
              {
                icon: <BarChart3 className="w-5 h-5" />,
                label: "Records",
                value: "Millions",
                subValue: "Processed monthly",
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
                  "Multi-provider lead enrichment. Query multiple data sources and merge into a unified record.",
                href: "/product/waterfall-enrichment",
                badge: "Flagship",
                stats: ["Multi-Source", "Real-time", "Bulk Processing"],
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email & Phone Finder",
                description:
                  "Find verified contact information. Email-only (1 credit) or full contact (10 credits).",
                href: "/product/email-phone-finder",
                stats: ["Email Validation", "Phone Discovery", "98% Accuracy"],
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Smart Columns",
                description:
                  "AI-powered data enrichment. 12 column types for cleaning, research, and analysis.",
                href: "/product/smart-columns",
                badge: "AI",
                stats: ["12 Column Types", "Custom Prompts", "ICP Scoring"],
              },
              {
                icon: <Linkedin className="w-6 h-6" />,
                title: "Chrome Extension",
                description:
                  "Enrich LinkedIn profiles and export from Sales Navigator directly to your lists.",
                href: "/product/sales-nav-scraper",
                stats: ["LinkedIn Enrichment", "Sales Nav Export", "1-Click Import"],
              },
              {
                icon: <Workflow className="w-6 h-6" />,
                title: "Playbook Builder",
                description:
                  "Visual workflow automation. Build data pipelines with 25+ actions and CRM sync.",
                href: "/product/playbook-builder",
                badge: "New",
                stats: ["Visual Builder", "25+ Actions", "CRM Sync"],
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "CRM Integrations",
                description:
                  "Connect to HubSpot, Salesforce, Pipedrive, Zoho, and Recruitcrm.",
                href: "/resources/integrations",
                stats: ["5 CRMs", "Bi-directional Sync", "Field Mapping"],
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
                    "Upload CSV, connect your CRM, or use the Chrome extension.",
                  details: [
                    "CSV/Excel upload with smart column mapping",
                    "CRM integrations (HubSpot, Salesforce, Pipedrive, Zoho)",
                    "LinkedIn enrichment via Chrome extension",
                    "Manual prospect entry with LinkedIn URL or name",
                  ],
                },
                {
                  number: "02",
                  title: "Enrich & Score",
                  description:
                    "Multi-provider enrichment with email validation and ICP scoring.",
                  details: [
                    "Multi-source enrichment for best results",
                    "Email-only (1 credit) or full contact (10 credits)",
                    "AI Smart Columns for data transformation",
                    "ICP scoring against your ideal customer profile",
                  ],
                },
                {
                  number: "03",
                  title: "Export & Sync",
                  description:
                    "Push clean data back to your CRM or download enriched files.",
                  details: [
                    "Bi-directional CRM sync with field mapping",
                    "Export to CSV with custom column selection",
                    "Playbook automation for recurring workflows",
                    "Real-time data quality tracking",
                  ],
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Enrichment Types */}
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
              Enrichment Options
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose the enrichment level that fits your needs. Pay only for what you use.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-[#0a0a0a] border border-white/[0.08]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff] mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Partial Enrichment</h3>
              <div className="text-3xl font-bold text-[#3e8aff] mb-4">1 Credit</div>
              <p className="text-gray-400 mb-6">Email address only. Perfect for email campaigns.</p>
              <ul className="space-y-3">
                {["Verified business email", "Email validation status", "Reliability scoring"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-xl bg-[#3e8aff]/5 border border-[#3e8aff]/20"
            >
              <div className="w-12 h-12 rounded-xl bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff] mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Full Enrichment</h3>
              <div className="text-3xl font-bold text-[#3e8aff] mb-4">10 Credits</div>
              <p className="text-gray-400 mb-6">Complete contact data for multi-channel outreach.</p>
              <ul className="space-y-3">
                {["Everything in Partial", "Mobile phone numbers", "Direct dial numbers", "Company data enrichment"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
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
              Join thousands of teams using Cleanlist to power their GTM engine. Start your
              free trial today.
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
