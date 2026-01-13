"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import {
  ArrowRight,
  Database,
  Layers,
  Zap,
  Shield,
  Clock,
  Check,
  ChevronRight,
  RefreshCw,
  GitMerge,
  Target,
  BarChart3,
  Mail,
  Phone,
  Building,
  User,
  Globe,
  Briefcase,
  MapPin,
  DollarSign,
  Users,
  Calendar,
  Link2,
} from "lucide-react";
import {
  TechnicalGrid,
  VerticalStepper,
  GlowCard,
  GlowIcon,
} from "@/components/ui";
import WaterfallPageDemo from "@/components/WaterfallPageDemo";

export default function WaterfallEnrichmentPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3e8aff]/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#3e8aff]/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-6"
              >
                <GlowIcon icon={<Layers />} size="xs" color="blue" variant="ghost" />
                Flagship Product
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`text-5xl md:text-6xl font-bold leading-[1.1] mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
              >
                Waterfall{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                  Enrichment
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`text-xl mb-8 max-w-lg ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                Multi-provider enrichment that queries premium data sources and merges
                the best results into one complete record. Partial (email) or full enrichment.
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
                  Try Waterfall Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#how-it-works"
                  className={`inline-flex items-center gap-2 px-6 py-3 border font-medium rounded-lg transition-colors ${isDark ? "border-white/[0.15] text-white hover:bg-white/[0.05]" : "border-gray-300 text-gray-700 hover:bg-gray-100"}`}
                >
                  See How It Works
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
                  { value: "Multi", label: "Data Sources" },
                  { value: "98%", label: "Accuracy" },
                  { value: "1-10", label: "Credits/Record" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className={`p-3 rounded-lg ${isDark ? "bg-white/[0.03] border-white/[0.05]" : "bg-[#F8F9FA] border-black/[0.05]"} border`}
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
              <WaterfallPageDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Stats */}
      <section className={`py-12 border-y ${isDark ? "border-white/[0.08] bg-[#080808]" : "border-black/[0.08] bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <TechnicalGrid
            columns={6}
            blocks={[
              {
                icon: <Database className="w-5 h-5" />,
                label: "Sources",
                value: "Multi",
                subValue: "Premium providers",
                color: "blue",
              },
              {
                icon: <Target className="w-5 h-5" />,
                label: "Accuracy",
                value: "98%",
                subValue: "Data guarantee",
                color: "green",
              },
              {
                icon: <Mail className="w-5 h-5" />,
                label: "Email Only",
                value: "1 Credit",
                subValue: "Partial enrichment",
                color: "yellow",
              },
              {
                icon: <Phone className="w-5 h-5" />,
                label: "Full Contact",
                value: "10 Credits",
                subValue: "Email + Phone",
                color: "purple",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                label: "Uptime",
                value: "99.9%",
                subValue: "SLA guaranteed",
                color: "green",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                label: "Processing",
                value: "Fast",
                subValue: "Batch & real-time",
                highlight: true,
              },
            ]}
          />
        </div>
      </section>

      {/* How Waterfall Works */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
              <GlowIcon icon={<GitMerge />} size="xs" color="blue" variant="ghost" />
              The Cascade Logic
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              How Waterfall Enrichment Works
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Our proprietary cascade algorithm queries sources in parallel, validates
              responses, and merges the best data into one complete record.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <VerticalStepper
              steps={[
                {
                  number: "01",
                  title: "Parallel Query Dispatch",
                  description:
                    "Your input record is sent to multiple premium data providers simultaneously.",
                  icon: <Zap className="w-5 h-5" />,
                  details: [
                    "All sources queried in parallel, not sequential",
                    "Fast response times across all providers",
                    "Automatic timeout handling and retry logic",
                    "Source health monitoring and failover",
                  ],
                },
                {
                  number: "02",
                  title: "Response Validation",
                  description:
                    "Each response is validated for accuracy, freshness, and completeness.",
                  icon: <Shield className="w-5 h-5" />,
                  details: [
                    "Email syntax and deliverability check",
                    "Phone number format validation",
                    "Company data cross-referencing",
                    "Data freshness scoring (last updated)",
                  ],
                },
                {
                  number: "03",
                  title: "Best-Match Merge",
                  description:
                    "Our algorithm selects the highest-quality data point for each field.",
                  icon: <GitMerge className="w-5 h-5" />,
                  details: [
                    "Field-by-field quality comparison",
                    "Confidence scoring per data point",
                    "Source priority weighting",
                    "Conflict resolution rules",
                  ],
                },
                {
                  number: "04",
                  title: "Golden Record Output",
                  description:
                    "One complete, verified record with 25+ data points returned.",
                  icon: <Target className="w-5 h-5" />,
                  details: [
                    "Full contact information (email, phone, social)",
                    "Company firmographics (size, revenue, industry)",
                    "Job details (title, department, seniority)",
                    "Metadata (sources used, confidence scores)",
                  ],
                },
              ]}
            />

            {/* Visual Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <div className={`p-6 rounded-xl ${isDark ? "bg-[#0a0a0a] border-white/[0.08]" : "bg-white/70 border-black/[0.08]"} border`}>
                <div className={`text-sm font-medium mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Waterfall Cascade Visualization
                </div>

                {/* Input */}
                <div className={`p-4 rounded-lg mb-4 ${isDark ? "bg-[#111] border-white/[0.05]" : "bg-[#F8F9FA] border-black/[0.05]"} border`}>
                  <div className="text-xs text-gray-500 mb-2">INPUT RECORD</div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#3e8aff]/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-[#3e8aff]" />
                    </div>
                    <div>
                      <div className={`text-sm ${isDark ? "text-white" : "text-gray-900"}`}>John Smith</div>
                      <div className="text-xs text-gray-500">Acme Corp</div>
                    </div>
                  </div>
                </div>

                {/* Sources */}
                <div className="relative mb-4">
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#3e8aff] to-[#3e8aff]/20" />
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { name: "Provider A", status: "Found" },
                      { name: "Provider B", status: "Found" },
                      { name: "Provider C", status: "Partial" },
                      { name: "Provider D", status: "Found" },
                      { name: "Provider E", status: "Found" },
                      { name: "Provider F", status: "Found" },
                    ].map((source, i) => (
                      <motion.div
                        key={source.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`p-2 rounded text-center ${isDark ? "bg-[#111] border-white/[0.05]" : "bg-[#F8F9FA] border-black/[0.05]"} border`}
                      >
                        <div className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>{source.name}</div>
                        <div className="text-[10px] text-green-500 mt-1">
                          {source.status}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Merge */}
                <div className="flex justify-center mb-4">
                  <div className="px-4 py-2 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-xs text-[#3e8aff] flex items-center gap-2">
                    <GitMerge className="w-4 h-4" />
                    Best-Match Merge
                  </div>
                </div>

                {/* Output */}
                <div className="p-4 rounded-lg bg-gradient-to-r from-[#3e8aff]/10 to-transparent border border-[#3e8aff]/20">
                  <div className="text-xs text-[#3e8aff] mb-3">GOLDEN RECORD</div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className={`flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      <Mail className="w-3.5 h-3.5 text-[#3e8aff]" />
                      john@acme.com
                    </div>
                    <div className={`flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      <Phone className="w-3.5 h-3.5 text-[#3e8aff]" />
                      +1 (555) 123-4567
                    </div>
                    <div className={`flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      <Building className="w-3.5 h-3.5 text-[#3e8aff]" />
                      Acme Corporation
                    </div>
                    <div className={`flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      <Briefcase className="w-3.5 h-3.5 text-[#3e8aff]" />
                      VP of Sales
                    </div>
                    <div className={`flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      <MapPin className="w-3.5 h-3.5 text-[#3e8aff]" />
                      San Francisco, CA
                    </div>
                    <div className={`flex items-center gap-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                      <Link2 className="w-3.5 h-3.5 text-[#3e8aff]" />
                      linkedin.com/in/jsmith
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enrichment Types */}
      <section className={`py-24 ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
              <GlowIcon icon={<Database />} size="xs" color="blue" variant="ghost" />
              Enrichment Options
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              Choose Your Enrichment Level
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Pick partial enrichment for email-focused campaigns or full enrichment
              for complete contact data including phone numbers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Partial Enrichment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl ${isDark ? "bg-[#0a0a0a] border-white/[0.08]" : "bg-white/70 border-black/[0.08]"} border`}
            >
              <GlowIcon icon={<Mail />} size="xl" color="blue" variant="glow" className="mb-6" />
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>Partial Enrichment</h3>
              <div className="text-4xl font-bold text-[#3e8aff] mb-4">1 Credit</div>
              <p className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Get verified work emails for your contacts. Perfect for email outreach campaigns.
              </p>
              <ul className="space-y-3">
                {["Verified work email", "Email deliverability check", "Company data enrichment", "LinkedIn profile URL"].map((item) => (
                  <li key={item} className={`flex items-center gap-2 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    <Check className="w-4 h-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Full Enrichment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-xl bg-gradient-to-br from-[#3e8aff]/10 to-transparent border border-[#3e8aff]/30"
            >
              <GlowIcon icon={<Phone />} size="xl" color="blue" variant="glow" className="mb-6" />
              <h3 className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>Full Enrichment</h3>
              <div className="text-4xl font-bold text-[#3e8aff] mb-4">10 Credits</div>
              <p className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Complete contact data including direct dial phone numbers for multi-channel outreach.
              </p>
              <ul className="space-y-3">
                {["Everything in Partial", "Direct dial phone number", "Mobile phone number", "Complete firmographics", "Social profiles"].map((item) => (
                  <li key={item} className={`flex items-center gap-2 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    <Check className="w-4 h-4 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Golden Record Fields */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
              <GlowIcon icon={<Target />} size="xs" color="blue" variant="ghost" />
              Output Schema
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              25+ Fields Per Record
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Every enriched record includes comprehensive contact and company data.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Contact Fields */}
            <GlowCard className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <GlowIcon icon={<User />} size="md" color="blue" variant="glow" />
                <div>
                  <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Contact Data</h3>
                  <p className="text-xs text-gray-500">Personal & professional info</p>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  "Work Email (verified)",
                  "Personal Email",
                  "Direct Phone",
                  "Mobile Phone",
                  "LinkedIn URL",
                  "Twitter Handle",
                  "Full Name",
                  "Job Title",
                  "Department",
                  "Seniority Level",
                ].map((field) => (
                  <div
                    key={field}
                    className={`flex items-center gap-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    <Check className="w-4 h-4 text-green-500" />
                    {field}
                  </div>
                ))}
              </div>
            </GlowCard>

            {/* Company Fields */}
            <GlowCard className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <GlowIcon icon={<Building />} size="md" color="blue" variant="glow" />
                <div>
                  <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Company Data</h3>
                  <p className="text-xs text-gray-500">Firmographic details</p>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  "Company Name",
                  "Domain",
                  "Industry",
                  "Employee Count",
                  "Revenue Range",
                  "Headquarters",
                  "Founded Year",
                  "Company Type",
                  "Technologies",
                  "Funding Stage",
                ].map((field) => (
                  <div
                    key={field}
                    className={`flex items-center gap-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    <Check className="w-4 h-4 text-green-500" />
                    {field}
                  </div>
                ))}
              </div>
            </GlowCard>

            {/* Metadata Fields */}
            <GlowCard className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <GlowIcon icon={<BarChart3 />} size="md" color="blue" variant="glow" />
                <div>
                  <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Metadata</h3>
                  <p className="text-xs text-gray-500">Quality & source info</p>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  "Confidence Score",
                  "Sources Used",
                  "Last Verified Date",
                  "Email Deliverability",
                  "Catch-all Status",
                  "Data Freshness",
                  "Match Type",
                  "Processing Time",
                ].map((field) => (
                  <div
                    key={field}
                    className={`flex items-center gap-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                  >
                    <Check className="w-4 h-4 text-green-500" />
                    {field}
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* API Example */}
      <section className={`py-24 ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
                <GlowIcon icon={<RefreshCw />} size="xs" color="blue" variant="ghost" />
                API Integration
              </div>
              <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                One API Call, Complete Data
              </h2>
              <p className={`text-lg mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Integrate waterfall enrichment into your application with our simple REST
                API. SDKs available for Python, Node.js, and Go.
              </p>

              <div className="space-y-4">
                {[
                  "RESTful API with JSON responses",
                  "Batch endpoint for bulk processing (up to 10K/request)",
                  "Webhook callbacks for async processing",
                  "Rate limits: 1,000 requests/minute",
                  "SDKs: Python, Node.js, Go, Ruby",
                ].map((feature) => (
                  <div key={feature} className={`flex items-center gap-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    <Check className="w-5 h-5 text-green-500" />
                    {feature}
                  </div>
                ))}
              </div>

              <Link
                href="#"
                className="inline-flex items-center gap-2 mt-8 text-[#3e8aff] hover:underline"
              >
                View API Documentation <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-xl overflow-hidden ${isDark ? "bg-[#0a0a0a] border-white/[0.08]" : "bg-white/70 border-black/[0.08]"} border`}
            >
              <div className={`flex items-center gap-2 px-4 py-3 border-b ${isDark ? "border-white/[0.08] bg-[#080808]" : "border-black/[0.08] bg-[#F8F9FA]"}`}>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-gray-500 ml-2">api-request.sh</span>
              </div>
              <pre className={`p-4 text-sm overflow-x-auto ${isDark ? "" : "bg-gray-50"}`}>
                <code className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  <span className="text-green-400"># Enrich a single record</span>
                  {"\n"}curl -X POST https://api.cleanlist.ai/v1/enrich \{"\n"}
                  {"  "}-H <span className="text-yellow-400">&quot;Authorization: Bearer $API_KEY&quot;</span> \{"\n"}
                  {"  "}-H <span className="text-yellow-400">&quot;Content-Type: application/json&quot;</span> \{"\n"}
                  {"  "}-d <span className="text-yellow-400">&apos;&#123;</span>{"\n"}
                  {"    "}<span className="text-[#3e8aff]">&quot;email&quot;</span>: <span className="text-yellow-400">&quot;john@acme.com&quot;</span>,{"\n"}
                  {"    "}<span className="text-[#3e8aff]">&quot;company&quot;</span>: <span className="text-yellow-400">&quot;Acme Corp&quot;</span>,{"\n"}
                  {"    "}<span className="text-[#3e8aff]">&quot;options&quot;</span>: &#123;{"\n"}
                  {"      "}<span className="text-[#3e8aff]">&quot;verify_email&quot;</span>: <span className="text-purple-400">true</span>,{"\n"}
                  {"      "}<span className="text-[#3e8aff]">&quot;include_phone&quot;</span>: <span className="text-purple-400">true</span>{"\n"}
                  {"    "}&#125;{"\n"}
                  {"  "}<span className="text-yellow-400">&#125;&apos;</span>
                </code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              Popular Use Cases
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              See how teams use waterfall enrichment to power their GTM motions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: "Lead List Enrichment",
                description:
                  "Upload a list of companies and get complete contact details for decision-makers.",
                result: "98% accuracy, comprehensive data",
              },
              {
                icon: <RefreshCw className="w-6 h-6" />,
                title: "CRM Data Hygiene",
                description:
                  "Enrich existing CRM records to fill gaps and update stale information.",
                result: "Keep your CRM data fresh",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "ABM Campaign Prep",
                description:
                  "Get verified emails and direct dials for your target account list.",
                result: "Multi-channel outreach ready",
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Event Lead Capture",
                description:
                  "Enrich badge scans with full contact and company data in real-time.",
                result: "Fast lead qualification",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Market Research",
                description:
                  "Build comprehensive prospect databases for TAM analysis and segmentation.",
                result: "Complete firmographic coverage",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "International Expansion",
                description:
                  "Get localized contact data for EMEA, APAC, and LATAM markets.",
                result: "Global coverage, local quality",
              },
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl transition-colors ${isDark ? "bg-[#0a0a0a] border-white/[0.08]" : "bg-white/70 border-black/[0.08]"} border hover:border-[#3e8aff]/30`}
              >
                <GlowIcon icon={useCase.icon} size="lg" color="blue" variant="glow" className="mb-4" />
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{useCase.title}</h3>
                <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{useCase.description}</p>
                <div className="flex items-center gap-2 text-xs text-green-500">
                  <Check className="w-4 h-4" />
                  {useCase.result}
                </div>
              </motion.div>
            ))}
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
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
              Start Enriching Your Data
            </h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Get 100 free credits to test our waterfall enrichment. No credit card required.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-colors text-lg"
              >
                Try Waterfall Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className={`inline-flex items-center gap-2 px-8 py-4 border font-medium rounded-lg transition-colors text-lg ${isDark ? "border-white/[0.15] text-white hover:bg-white/[0.05]" : "border-gray-300 text-gray-700 hover:bg-gray-100"}`}
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
