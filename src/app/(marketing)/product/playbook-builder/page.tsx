"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Workflow,
  Zap,
  Check,
  Play,
  Pause,
  Settings,
  RefreshCw,
  Database,
  Mail,
  Shield,
  Clock,
  GitBranch,
  Layers,
  Filter,
  Upload,
  Download,
  Trash2,
  Copy,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { DashboardMockup, TechnicalGrid, VerticalStepper, GlowCard } from "@/components/ui";

export default function PlaybookBuilderPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3e8aff]/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#3e8aff]/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-6"
              >
                <Workflow className="w-4 h-4" />
                New
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6"
              >
                Playbook{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                  Builder
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400 mb-8 max-w-lg"
              >
                Build automated GTM workflows with our visual canvas. Dedupe, enrich,
                verify, and sync—all on autopilot. No code required.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-colors"
                >
                  Build Your First Playbook
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#templates"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.15] text-white font-medium rounded-lg hover:bg-white/[0.05] transition-colors"
                >
                  View Templates
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
                  { value: "25+", label: "Step Types" },
                  { value: "Visual", label: "Builder" },
                  { value: "24/7", label: "Automation" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]"
                  >
                    <div className="text-2xl font-bold text-[#3e8aff]">{stat.value}</div>
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
              <DashboardMockup variant="playbook" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Stats */}
      <section className="py-12 border-y border-white/10 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-6">
          <TechnicalGrid
            columns={5}
            blocks={[
              {
                icon: <GitBranch className="w-5 h-5" />,
                label: "Step Types",
                value: "25+",
                subValue: "Built-in steps",
                color: "blue",
              },
              {
                icon: <Layers className="w-5 h-5" />,
                label: "Categories",
                value: "10",
                subValue: "Organized steps",
                color: "purple",
              },
              {
                icon: <Clock className="w-5 h-5" />,
                label: "Scheduling",
                value: "Flexible",
                subValue: "Cron or triggers",
                color: "green",
              },
              {
                icon: <RefreshCw className="w-5 h-5" />,
                label: "CRM Sync",
                value: "Real-time",
                subValue: "Bi-directional",
                color: "yellow",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                label: "No Code",
                value: "100%",
                subValue: "Visual builder",
                highlight: true,
              },
            ]}
          />
        </div>
      </section>

      {/* Visual Builder */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
              <GitBranch className="w-4 h-4" />
              Visual Canvas
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Drag, Drop, Automate
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Build complex data workflows visually. Connect actions, set conditions,
              and let your playbook run on autopilot.
            </p>
          </motion.div>

          {/* Workflow Canvas Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl bg-white/[0.04] border border-white/10 overflow-hidden"
          >
            {/* Toolbar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#1E1E1E]">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-white">Lead Enrichment Pipeline</span>
                <span className="px-2 py-0.5 rounded text-xs bg-green-500/10 text-green-500">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded hover:bg-white/[0.05] text-gray-400">
                  <Play className="w-4 h-4" />
                </button>
                <button className="p-2 rounded hover:bg-white/[0.05] text-gray-400">
                  <Pause className="w-4 h-4" />
                </button>
                <button className="p-2 rounded hover:bg-white/[0.05] text-gray-400">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Canvas */}
            <div className="p-8 min-h-[400px]">
              <div className="flex items-start gap-6">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-xl bg-[#111] border border-white/10 w-48">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#3e8aff]/10 flex items-center justify-center">
                        <Upload className="w-4 h-4 text-[#3e8aff]" />
                      </div>
                      <span className="text-sm font-medium text-white">Import</span>
                    </div>
                    <p className="text-xs text-gray-500">CSV Upload</p>
                    <div className="mt-2 text-xs text-green-500">5,000 records</div>
                  </div>
                  <div className="w-px h-8 bg-white/[0.1]" />
                  <div className="w-3 h-3 rounded-full bg-[#3e8aff]" />
                </div>

                {/* Arrow */}
                <div className="mt-8">
                  <ChevronRight className="w-6 h-6 text-white/[0.2]" />
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-xl bg-[#111] border border-white/10 w-48">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                        <Copy className="w-4 h-4 text-yellow-500" />
                      </div>
                      <span className="text-sm font-medium text-white">Dedupe</span>
                    </div>
                    <p className="text-xs text-gray-500">By email + company</p>
                    <div className="mt-2 text-xs text-yellow-500">-800 duplicates</div>
                  </div>
                  <div className="w-px h-8 bg-white/[0.1]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                </div>

                {/* Arrow */}
                <div className="mt-8">
                  <ChevronRight className="w-6 h-6 text-white/[0.2]" />
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-xl bg-[#111] border border-[#3e8aff]/30 w-48">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#3e8aff]/10 flex items-center justify-center">
                        <Database className="w-4 h-4 text-[#3e8aff]" />
                      </div>
                      <span className="text-sm font-medium text-white">Enrich</span>
                    </div>
                    <p className="text-xs text-gray-500">Email + Phone</p>
                    <div className="mt-2 text-xs text-[#3e8aff]">Processing...</div>
                  </div>
                  <div className="w-px h-8 bg-white/[0.1]" />
                  <div className="w-3 h-3 rounded-full bg-[#3e8aff] animate-pulse" />
                </div>

                {/* Arrow */}
                <div className="mt-8">
                  <ChevronRight className="w-6 h-6 text-white/[0.2]" />
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-xl bg-[#111] border border-white/10 w-48 opacity-50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="text-sm font-medium text-white">Validate</span>
                    </div>
                    <p className="text-xs text-gray-500">Email validation</p>
                    <div className="mt-2 text-xs text-gray-600">Pending</div>
                  </div>
                  <div className="w-px h-8 bg-white/[0.05]" />
                  <div className="w-3 h-3 rounded-full border-2 border-gray-600" />
                </div>

                {/* Arrow */}
                <div className="mt-8">
                  <ChevronRight className="w-6 h-6 text-white/[0.1]" />
                </div>

                {/* Step 5 */}
                <div className="flex flex-col items-center">
                  <div className="p-4 rounded-xl bg-[#111] border border-white/10 w-48 opacity-50">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                        <Download className="w-4 h-4 text-purple-500" />
                      </div>
                      <span className="text-sm font-medium text-white">Sync CRM</span>
                    </div>
                    <p className="text-xs text-gray-500">Push to Salesforce</p>
                    <div className="mt-2 text-xs text-gray-600">Pending</div>
                  </div>
                  <div className="w-px h-8 bg-white/[0.05]" />
                  <div className="w-3 h-3 rounded-full border-2 border-gray-600" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Available Step Types */}
      <section className="py-24 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              25+ Built-in Step Types
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Connect any combination of steps across 10 categories to build your perfect workflow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                category: "Input",
                color: "blue",
                actions: ["CSV Upload", "CRM Import", "Sales Nav List", "Existing List"],
              },
              {
                category: "Enrichment",
                color: "green",
                actions: ["Email Finder", "Phone Finder", "Company Enrich"],
              },
              {
                category: "Validation",
                color: "yellow",
                actions: ["Email Validation", "Data Quality Check"],
              },
              {
                category: "Transform",
                color: "purple",
                actions: ["Normalization", "Deduplication"],
              },
              {
                category: "AI",
                color: "pink",
                actions: ["Smart Column", "ICP Scoring", "Champion Finding"],
              },
              {
                category: "Filter",
                color: "orange",
                actions: ["Conditional Filter", "Segmentation"],
              },
              {
                category: "CRM Lookup",
                color: "blue",
                actions: ["Contact Lookup", "Company Lookup", "Last Activity", "Owner"],
              },
              {
                category: "Decision",
                color: "purple",
                actions: ["If Property Equals", "If Any", "If All", "Branch Router"],
              },
              {
                category: "Output",
                color: "green",
                actions: ["CRM Export", "CSV Download"],
              },
              {
                category: "Notifications",
                color: "yellow",
                actions: ["Slack Alert", "Email Notification"],
              },
            ].map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-4 rounded-xl bg-white/[0.04] border border-white/10"
              >
                <div
                  className={`inline-flex items-center gap-2 px-2 py-1 rounded text-xs font-medium mb-3 ${
                    group.color === "blue"
                      ? "bg-[#3e8aff]/10 text-[#3e8aff]"
                      : group.color === "purple"
                      ? "bg-purple-500/10 text-purple-500"
                      : group.color === "green"
                      ? "bg-green-500/10 text-green-500"
                      : group.color === "yellow"
                      ? "bg-yellow-500/10 text-yellow-500"
                      : group.color === "pink"
                      ? "bg-pink-500/10 text-pink-500"
                      : "bg-orange-500/10 text-orange-500"
                  }`}
                >
                  {group.category}
                </div>
                <div className="space-y-1.5">
                  {group.actions.map((action) => (
                    <div
                      key={action}
                      className="flex items-center gap-2 text-xs text-gray-400"
                    >
                      <Check className="w-3 h-3 text-gray-600" />
                      {action}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
              <Sparkles className="w-4 h-4" />
              Templates
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start With a Template
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Pre-built playbooks for common GTM workflows. Clone and customize.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Lead List Cleanup",
                description: "Import → Dedupe → Enrich → Verify → Export",
                steps: 5,
                users: "1.2k",
              },
              {
                title: "CRM Data Hygiene",
                description: "Scheduled pull → Clean → Enrich → Push back",
                steps: 4,
                users: "890",
              },
              {
                title: "Event Lead Capture",
                description: "Webhook → Enrich → Score → Route to Sales",
                steps: 4,
                users: "650",
              },
              {
                title: "ABM List Builder",
                description: "Account list → Find contacts → Verify → Sequence",
                steps: 4,
                users: "540",
              },
              {
                title: "Weekly Data Refresh",
                description: "Schedule → Pull stale → Re-enrich → Update CRM",
                steps: 4,
                users: "420",
              },
              {
                title: "Inbound Lead Enrichment",
                description: "Webhook trigger → Instant enrich → CRM create",
                steps: 3,
                users: "780",
              },
            ].map((template, index) => (
              <motion.div
                key={template.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#3e8aff]/30 transition-colors cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#3e8aff] transition-colors">
                  {template.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{template.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{template.steps} steps</span>
                  <span>{template.users} users</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scheduling */}
      <section className="py-24 bg-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
                <Clock className="w-4 h-4" />
                Scheduling
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Run on Your Schedule
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Trigger playbooks on a schedule, via webhook, or manually.
                Set it and forget it.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Scheduled Runs",
                    description: "Cron-style scheduling: daily, weekly, or custom intervals",
                  },
                  {
                    title: "Webhook Triggers",
                    description: "Start playbooks when data arrives from external systems",
                  },
                  {
                    title: "Manual Execution",
                    description: "Run playbooks on-demand with one click",
                  },
                  {
                    title: "Event-Based",
                    description: "Trigger when CRM records are created or updated",
                  },
                ].map((trigger) => (
                  <div
                    key={trigger.title}
                    className="flex items-start gap-3 p-4 rounded-lg bg-white/[0.04] border border-white/10"
                  >
                    <Check className="w-5 h-5 text-[#3e8aff] mt-0.5" />
                    <div>
                      <h4 className="font-medium text-white">{trigger.title}</h4>
                      <p className="text-sm text-gray-500">{trigger.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white/[0.04] border border-white/10"
            >
              <div className="text-sm font-medium text-gray-400 mb-4">Recent Runs</div>
              <div className="space-y-3">
                {[
                  { name: "Lead Cleanup", status: "completed", time: "2 min ago", records: 1250 },
                  { name: "CRM Sync", status: "running", time: "Started 45s ago", records: 890 },
                  { name: "Weekly Refresh", status: "scheduled", time: "In 6 hours", records: null },
                  { name: "Event Leads", status: "completed", time: "1 hour ago", records: 45 },
                ].map((run, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg bg-[#111] border border-white/[0.05]"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          run.status === "completed"
                            ? "bg-green-500"
                            : run.status === "running"
                            ? "bg-[#3e8aff] animate-pulse"
                            : "bg-gray-600"
                        }`}
                      />
                      <div>
                        <div className="text-sm text-white">{run.name}</div>
                        <div className="text-xs text-gray-500">{run.time}</div>
                      </div>
                    </div>
                    {run.records && (
                      <span className="text-xs text-gray-400">{run.records} records</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#3e8aff]/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#3e8aff]/20 rounded-full blur-[150px]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Automate Your GTM Pipeline
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Build your first playbook in minutes. No code required.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-colors text-lg"
              >
                Start Building
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
