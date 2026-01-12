"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Settings,
  Database,
  RefreshCw,
  Check,
  AlertTriangle,
  Workflow,
  BarChart3,
  Shield,
  Clock,
  GitMerge,
  Zap,
  FileCheck,
  Layers,
} from "lucide-react";
import { TechnicalGrid, GlowCard, VerticalStepper } from "@/components/ui";
import { useTheme } from "@/context/ThemeContext";

export default function RevOpsPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-500 mb-6"
            >
              <Settings className="w-4 h-4" />
              For RevOps
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`text-5xl md:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} leading-[1.1] mb-6`}
            >
              Automate Data Hygiene{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-400">
                at Scale
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} mb-8`}
            >
              Stop firefighting bad data. Automate deduplication, enrichment, and verification
              across your entire GTM stack. Keep your CRM pristine with zero manual effort.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-500/90 transition-colors"
              >
                See Playbook Builder
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/product/playbook-builder"
                className={`inline-flex items-center gap-2 px-6 py-3 border ${isDark ? "border-white/[0.15] text-white hover:bg-white/[0.05]" : "border-gray-300 text-gray-700 hover:bg-gray-100"} font-medium rounded-lg transition-colors`}
              >
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={`py-12 border-y ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"} ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <TechnicalGrid
            columns={4}
            blocks={[
              {
                icon: <RefreshCw className="w-5 h-5" />,
                label: "Automation",
                value: "100%",
                subValue: "Hands-off operation",
                color: "purple",
              },
              {
                icon: <Database className="w-5 h-5" />,
                label: "Data Quality",
                value: "+40%",
                subValue: "Improvement",
                color: "green",
              },
              {
                icon: <Clock className="w-5 h-5" />,
                label: "Time Saved",
                value: "20hrs",
                subValue: "Per week",
                color: "blue",
              },
              {
                icon: <GitMerge className="w-5 h-5" />,
                label: "Duplicates",
                value: "-30%",
                subValue: "Removed",
                highlight: true,
              },
            ]}
          />
        </div>
      </section>

      {/* The RevOps Challenge */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              The Data Quality Challenge
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              RevOps teams spend 30% of their time cleaning data. It doesn&apos;t have to be this way.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Before */}
            <div className="p-6 rounded-xl bg-red-500/5 border border-red-500/20">
              <div className="flex items-center gap-2 text-red-500 mb-4">
                <AlertTriangle className="w-5 h-5" />
                <span className="font-medium">Without Cleanlist</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Manual data cleanup every quarter",
                  "Duplicate records causing attribution issues",
                  "Stale contact data leading to bounces",
                  "Inconsistent field formatting",
                  "Hours spent merging and deduping",
                  "No visibility into data quality trends",
                ].map((item) => (
                  <li key={item} className={`flex items-start gap-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="p-6 rounded-xl bg-green-500/5 border border-green-500/20">
              <div className="flex items-center gap-2 text-green-500 mb-4">
                <Check className="w-5 h-5" />
                <span className="font-medium">With Cleanlist</span>
              </div>
              <ul className="space-y-3">
                {[
                  "Automated data hygiene running 24/7",
                  "Real-time deduplication on ingest",
                  "Continuous enrichment and verification",
                  "AI-powered field normalization",
                  "Zero-touch data maintenance",
                  "Full audit trail and quality dashboards",
                ].map((item) => (
                  <li key={item} className={`flex items-start gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Playbook Builder Focus */}
      <section className={`py-24 ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-500 mb-4">
                <Workflow className="w-4 h-4" />
                Playbook Builder
              </div>
              <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
                Automate Your Data Pipeline
              </h2>
              <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"} mb-8`}>
                Use our visual Playbook Builder to create automated data workflows.
                Set it once, let it run forever.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Scheduled CRM Cleanup",
                    description: "Weekly scan of your CRM to find and merge duplicates, update stale records, and fix formatting issues.",
                  },
                  {
                    title: "Inbound Lead Enrichment",
                    description: "Automatically enrich every new lead with 25+ data points before it reaches sales.",
                  },
                  {
                    title: "Data Quality Monitoring",
                    description: "Continuous monitoring with alerts when data quality drops below thresholds.",
                  },
                ].map((playbook) => (
                  <div
                    key={playbook.title}
                    className={`p-4 rounded-lg ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}
                  >
                    <h4 className={`font-medium ${isDark ? "text-white" : "text-gray-900"} mb-1`}>{playbook.title}</h4>
                    <p className={`text-sm ${isDark ? "text-gray-500" : "text-gray-600"}`}>{playbook.description}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/product/playbook-builder"
                className="inline-flex items-center gap-2 mt-8 text-purple-500 hover:underline"
              >
                Explore Playbook Builder <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <VerticalStepper
              steps={[
                {
                  number: "01",
                  title: "Connect Your CRM",
                  description: "Native integrations with Salesforce, HubSpot, and more.",
                  icon: <Database className="w-5 h-5" />,
                  details: [
                    "One-click OAuth connection",
                    "Real-time or scheduled sync",
                    "Custom field mapping",
                  ],
                },
                {
                  number: "02",
                  title: "Build Your Playbook",
                  description: "Drag and drop actions to create your data workflow.",
                  icon: <Layers className="w-5 h-5" />,
                  details: [
                    "25+ built-in step types",
                    "Conditional logic",
                    "Error handling",
                  ],
                },
                {
                  number: "03",
                  title: "Set Schedule",
                  description: "Run on a schedule, via webhook, or manually.",
                  icon: <Clock className="w-5 h-5" />,
                  details: [
                    "Cron scheduling",
                    "Webhook triggers",
                    "Manual runs",
                  ],
                },
                {
                  number: "04",
                  title: "Monitor & Iterate",
                  description: "Track runs, review logs, and optimize over time.",
                  icon: <BarChart3 className="w-5 h-5" />,
                  details: [
                    "Run history",
                    "Error alerts",
                    "Performance metrics",
                  ],
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Use Case: Data Governance */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Data Governance Made Easy
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Maintain data quality standards across your entire organization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <GitMerge className="w-6 h-6" />,
                title: "Deduplication Rules",
                description: "Define matching rules for automatic duplicate detection and merge.",
              },
              {
                icon: <FileCheck className="w-6 h-6" />,
                title: "Validation Rules",
                description: "Ensure data meets your standards before entering the CRM.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Audit Trail",
                description: "Complete history of every data change for compliance.",
              },
              {
                icon: <RefreshCw className="w-6 h-6" />,
                title: "Automated Refresh",
                description: "Keep records fresh with scheduled re-enrichment.",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Quality Dashboards",
                description: "Monitor data health with real-time quality scores.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Instant Fixes",
                description: "One-click resolution of common data issues.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard className="h-full p-6" glowColor="#a855f7">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>{feature.title}</h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{feature.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-500/20 rounded-full blur-[150px]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-6`}>
              Automate Your Data Operations
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} mb-8 max-w-2xl mx-auto`}>
              See how Playbook Builder can transform your data hygiene workflows.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-500/90 transition-colors text-lg"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
