"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  Mail,
  Phone,
  Users,
  Zap,
  Shield,
  Sparkles,
  Check,
  X,
  TrendingUp,
  Target,
  Megaphone,
  Scale,
  Code,
  Layers,
  RefreshCw,
  Clock,
  DollarSign,
  Building,
} from "lucide-react";
import { DashboardMockup } from "@/components/ui";
import StickySubNav from "@/components/StickySubNav";

// Data providers for waterfall enrichment
const dataProviders = [
  "Clearbit", "Findymail", "Datagma", "ZoomInfo", "Hunter",
  "Dropcontact", "Apollo", "Lusha", "RocketReach", "Seamless.ai"
];

// CRM integrations
const crmIntegrations = [
  { name: "HubSpot", logo: "H" },
  { name: "Salesforce", logo: "S" },
  { name: "Pipedrive", logo: "P" },
  { name: "Zoho", logo: "Z" },
  { name: "Recruitcrm", logo: "R" },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <StickySubNav />

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
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
                <Sparkles className="w-4 h-4" />
                95%+ Accuracy for Prospecting
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
              >
                Turn messy data into your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                  greatest growth lever
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400 mb-8 max-w-lg"
              >
                Clean, verify & enrich your leads with 95%+ accuracy. Now starting at just
                $29/month.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-10"
              >
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-colors"
                >
                  Get started for free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.15] text-white font-medium rounded-lg hover:bg-white/[0.05] transition-colors"
                >
                  View Pricing
                </Link>
              </motion.div>

              {/* Hero Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-4 gap-4"
              >
                {[
                  { value: "10+", label: "Data Sources" },
                  { value: "5,500", label: "Credits" },
                  { value: "95%+", label: "Accuracy" },
                  { value: "10K+", label: "Records" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
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
              <DashboardMockup variant="enrichment" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <section className="py-8 border-y border-white/[0.08] bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-gray-500 mb-6">Used by data-driven companies</p>
          <div className="flex items-center justify-center gap-12 flex-wrap opacity-50">
            {["SMTP", "NIEP", "LINEA", "API", "FIBIFY", "IAFI"].map((name) => (
              <div key={name} className="text-xl font-bold text-gray-400 tracking-wider">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              One platform, tailored to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                how you work
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Whether you&apos;re a solo sales rep or a scaling GTM team, Cleanlist adapts to
              your workflow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "BDR/SDR",
                subtitle: "Growth Engine",
                description: "Spend less time finding prospects and more time selling.",
                stats: [
                  { value: "95%", label: "Accuracy" },
                  { value: "5x", label: "Faster" },
                  { value: "60%", label: "Time Saved" },
                ],
                color: "blue",
              },
              {
                icon: <Scale className="w-6 h-6" />,
                title: "Lead Gen Agency",
                subtitle: "Scale Operations",
                description: "Scale your prospecting with verified contacts and emails.",
                stats: [
                  { value: "10K+", label: "Records/mo" },
                  { value: "Bulk", label: "Processing" },
                  { value: "API", label: "Access" },
                ],
                color: "purple",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Sales Teams",
                subtitle: "Hit Targets",
                description: "Build high-quality prospect lists with accurate contact info.",
                stats: [
                  { value: "5", label: "CRMs" },
                  { value: "Real-time", label: "Sync" },
                  { value: "ICP", label: "Scoring" },
                ],
                color: "green",
              },
              {
                icon: <Megaphone className="w-6 h-6" />,
                title: "Marketing Teams",
                subtitle: "Target Right",
                description: "Target the right audience with verified business contacts.",
                stats: [
                  { value: "Email", label: "Validation" },
                  { value: "Segment", label: "Data" },
                  { value: "Enrich", label: "Lists" },
                ],
                color: "yellow",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08] hover:border-[#3e8aff]/30 transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    item.color === "blue"
                      ? "bg-[#3e8aff]/10 text-[#3e8aff]"
                      : item.color === "purple"
                      ? "bg-purple-500/10 text-purple-500"
                      : item.color === "green"
                      ? "bg-green-500/10 text-green-500"
                      : "bg-yellow-500/10 text-yellow-500"
                  }`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-[#3e8aff] mb-2">{item.subtitle}</p>
                <p className="text-sm text-gray-400 mb-4">{item.description}</p>
                <div className="grid grid-cols-3 gap-2">
                  {item.stats.map((stat) => (
                    <div key={stat.label} className="text-center p-2 rounded bg-white/[0.03]">
                      <div className="text-sm font-semibold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Transform Section */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Watch your data{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                transform
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Follow a real data record through our enrichment pipeline.
            </p>
          </motion.div>

          {/* Data Transformation Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-sm font-medium text-gray-400">Step 01: The Enrichment</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Name", value: "John Smith", status: "found" },
                    { label: "Company", value: "Acme Corp", status: "found" },
                    { label: "Email", value: "—", status: "missing" },
                    { label: "Phone", value: "—", status: "missing" },
                    { label: "Title", value: "—", status: "missing" },
                    { label: "LinkedIn", value: "—", status: "missing" },
                  ].map((field) => (
                    <div key={field.label} className="flex items-center justify-between p-3 rounded-lg bg-[#111]">
                      <span className="text-sm text-gray-400">{field.label}</span>
                      <span className={`text-sm ${field.status === "found" ? "text-white" : "text-gray-600"}`}>
                        {field.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* After */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-[#3e8aff]/10 to-transparent border border-[#3e8aff]/30">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm font-medium text-[#3e8aff]">Step 02: Enriched Result</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Name", value: "John Smith", status: "found" },
                    { label: "Company", value: "Acme Corp", status: "found" },
                    { label: "Email", value: "john@acmecorp.com", status: "enriched" },
                    { label: "Phone", value: "+1 (555) 123-4567", status: "enriched" },
                    { label: "Title", value: "VP of Sales", status: "enriched" },
                    { label: "LinkedIn", value: "linkedin.com/in/johnsmith", status: "enriched" },
                  ].map((field) => (
                    <div key={field.label} className="flex items-center justify-between p-3 rounded-lg bg-[#111]/50">
                      <span className="text-sm text-gray-400">{field.label}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm ${field.status === "enriched" ? "text-[#3e8aff]" : "text-white"}`}>
                          {field.value}
                        </span>
                        {field.status === "enriched" && <Check className="w-4 h-4 text-green-500" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Provider logos */}
            <div className="mt-8 p-4 rounded-lg bg-[#0a0a0a] border border-white/[0.08]">
              <p className="text-xs text-gray-500 mb-3 text-center">Powered by 10+ data providers</p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {dataProviders.map((provider) => (
                  <span key={provider} className="text-xs text-gray-400 px-2 py-1 rounded bg-white/[0.03]">
                    {provider}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Three steps to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                perfect data
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our AI manages everything while you focus on closing deals.
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-12">
            {["Multi-Functionality", "Deep Enrichment", "Plug & Play API"].map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === index
                    ? "bg-[#3e8aff] text-white"
                    : "bg-white/[0.05] text-gray-400 hover:bg-white/[0.1]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {activeTab === 0 && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08]">
                  <h3 className="text-xl font-semibold text-white mb-4">Waterfall Enrichment</h3>
                  <p className="text-gray-400 mb-6">
                    Query 10+ data providers simultaneously and get the best match for each field.
                  </p>
                  <div className="space-y-3">
                    {dataProviders.slice(0, 5).map((provider, i) => (
                      <div key={provider} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${i === 0 ? "bg-green-500" : "bg-gray-600"}`} />
                        <span className="text-sm text-gray-300">{provider}</span>
                        {i === 0 && <span className="text-xs text-green-500">Best match</span>}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    "Query multiple providers in parallel",
                    "Smart merge picks best data per field",
                    "Fallback to secondary sources automatically",
                    "Pay only for successful enrichments",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08]">
                  <h3 className="text-xl font-semibold text-white mb-4">Enriched Fields</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "Work Email", "Direct Phone", "Mobile Phone", "Job Title",
                      "Department", "Seniority", "Company Size", "Industry",
                      "Revenue Range", "Technologies", "LinkedIn URL", "Location"
                    ].map((field) => (
                      <div key={field} className="flex items-center gap-2 text-sm text-gray-400">
                        <Check className="w-4 h-4 text-[#3e8aff]" />
                        {field}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    "Email deliverability validation included",
                    "Phone numbers verified as direct dials",
                    "Company firmographics auto-populated",
                    "ICP scoring against your criteria",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 2 && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08] overflow-hidden">
                  <div className="flex items-center gap-2 mb-4">
                    <Code className="w-5 h-5 text-[#3e8aff]" />
                    <span className="text-sm font-medium text-gray-400">API Example</span>
                  </div>
                  <pre className="text-xs text-gray-300 overflow-x-auto">
{`curl -X POST https://api.cleanlist.ai/enrich \\
  -H "Authorization: Bearer YOUR_KEY" \\
  -d '{
    "email": "john@acme.com",
    "enrich_phone": true
  }'`}
                  </pre>
                </div>
                <div className="space-y-4">
                  {[
                    "RESTful API with SDKs for Python, Node, Go",
                    "Webhook callbacks for async workflows",
                    "Batch processing for high-volume ops",
                    "99.9% uptime SLA guaranteed",
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Compare Section */}
      <section id="compare" className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cleanlist vs.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                The Old Way
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See why teams switch to Cleanlist for their data enrichment needs.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div />
              <div className="text-center p-4 rounded-t-xl bg-white/[0.03]">
                <span className="text-sm text-gray-500">Traditional Way</span>
              </div>
              <div className="text-center p-4 rounded-t-xl bg-[#3e8aff]/10 border-t border-x border-[#3e8aff]/30">
                <span className="text-sm font-medium text-[#3e8aff]">Cleanlist</span>
              </div>
            </div>

            {[
              { feature: "Verification Speed", old: "4 hours", new: "Real-time", icon: <Clock className="w-5 h-5" /> },
              { feature: "# of Sources", old: "1-2 sources", new: "10+ sources", icon: <Database className="w-5 h-5" /> },
              { feature: "Accuracy", old: "~60%", new: "95%+", icon: <Target className="w-5 h-5" /> },
              { feature: "Price per Lead", old: "$0.15/lead", new: "From $0.01", icon: <DollarSign className="w-5 h-5" /> },
              { feature: "CRM Integration", old: "Manual export", new: "Auto-sync", icon: <RefreshCw className="w-5 h-5" /> },
              { feature: "Email Validation", old: "Separate tool", new: "Built-in", icon: <Mail className="w-5 h-5" /> },
            ].map((row) => (
              <div key={row.feature} className="grid grid-cols-3 gap-4 mb-2">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-[#0a0a0a]">
                  <div className="text-gray-500">{row.icon}</div>
                  <span className="text-sm text-gray-300">{row.feature}</span>
                </div>
                <div className="flex items-center justify-center p-4 bg-white/[0.03]">
                  <div className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-500" />
                    <span className="text-sm text-gray-400">{row.old}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center p-4 bg-[#3e8aff]/10 border-x border-[#3e8aff]/30">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-white font-medium">{row.new}</span>
                  </div>
                </div>
              </div>
            ))}

            <div className="grid grid-cols-3 gap-4">
              <div />
              <div className="p-4 rounded-b-xl bg-white/[0.03]" />
              <div className="p-4 rounded-b-xl bg-[#3e8aff]/10 border-b border-x border-[#3e8aff]/30 text-center">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#3e8aff] hover:underline"
                >
                  Start Free Trial <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Lives in your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                existing stack
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Seamless integration with your CRM, sales tools, and workflows.
            </p>
          </motion.div>

          {/* CRM Logos */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-8 rounded-xl bg-[#0a0a0a] border border-white/[0.08]">
              <p className="text-sm text-gray-500 text-center mb-8">Native Integrations</p>
              <div className="flex items-center justify-center gap-8 flex-wrap mb-8">
                {crmIntegrations.map((crm) => (
                  <div key={crm.name} className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-xl bg-white/[0.05] flex items-center justify-center text-2xl font-bold text-gray-400">
                      {crm.logo}
                    </div>
                    <span className="text-sm text-gray-400">{crm.name}</span>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-white/[0.08]">
                {[
                  { icon: <RefreshCw className="w-5 h-5" />, title: "Real-time Sync", desc: "Bi-directional data sync" },
                  { icon: <Zap className="w-5 h-5" />, title: "One-click Export", desc: "Push leads instantly" },
                  { icon: <Shield className="w-5 h-5" />, title: "OAuth 2.0", desc: "Secure authentication" },
                ].map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff]">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{feature.title}</h4>
                      <p className="text-sm text-gray-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
              <Sparkles className="w-4 h-4" />
              Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, credit-based pricing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-2">
              1 email = 1 credit. 1 phone = 10 credits. No hidden fees.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$29",
                period: "/month",
                credits: "500 credits",
                description: "500 emails or 50 phones/month",
                features: ["API Access", "Email Validation", "CSV Export", "Email Support"],
                cta: "Start Free Trial",
                popular: false,
              },
              {
                name: "Pro",
                price: "$99",
                period: "/month",
                credits: "2,000 credits",
                description: "2,000 emails or 200 phones/month",
                features: ["Everything in Starter", "CRM Integrations", "Smart Columns", "Priority Support"],
                cta: "Start Free Trial",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "$449",
                period: "/month",
                credits: "10,000 credits",
                description: "10,000 emails or 1,000 phones/month",
                features: ["Everything in Pro", "Playbook Builder", "Team Workspaces", "Dedicated CSM"],
                cta: "Start Free Trial",
                popular: false,
              },
              {
                name: "Custom",
                price: "Contact",
                period: "us",
                credits: "Unlimited",
                description: "Custom volume pricing",
                features: ["Everything in Enterprise", "Custom SLA", "White-label Options", "Volume Discounts"],
                cta: "Talk to Sales",
                popular: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 rounded-xl border ${
                  plan.popular
                    ? "bg-[#3e8aff]/5 border-[#3e8aff]/30"
                    : "bg-[#0a0a0a] border-white/[0.08]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#3e8aff] text-white text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                  <p className="text-sm text-gray-500">{plan.credits}</p>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-400 mb-6">{plan.description}</p>
                <Link
                  href="#"
                  className={`block w-full py-3 text-center rounded-lg font-medium transition-colors mb-6 ${
                    plan.popular
                      ? "bg-[#3e8aff] text-white hover:bg-[#3e8aff]/90"
                      : "bg-white/[0.05] text-white hover:bg-white/[0.1]"
                  }`}
                >
                  {plan.cta}
                </Link>
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                      <Check className="w-4 h-4 text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* All plans include */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-500 mb-4">All plans include</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {["Credit Rollover", "Unlimited Users", "GDPR Compliant", "SOC II Certified"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-[#3e8aff]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
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
              Ready to reclaim your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                data quality
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of GTM teams using Cleanlist. Start free, no credit card required.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-colors text-lg"
              >
                Start Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/[0.15] text-white font-medium rounded-lg hover:bg-white/[0.05] transition-colors text-lg"
              >
                <Building className="w-5 h-5" />
                Talk to Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
