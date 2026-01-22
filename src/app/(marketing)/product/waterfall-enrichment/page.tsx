"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import {
  ArrowRight,
  Database,
  Stack,
  Lightning,
  Shield,
  Clock,
  Check,
  CaretRight,
  ArrowsClockwise,
  GitMerge,
  Crosshair,
  ChartBar,
  Envelope,
  Phone,
  Buildings,
  User,
  Globe,
  Briefcase,
  MapPin,
  CurrencyDollar,
  Users,
  Calendar,
  Link as LinkIcon,
} from "@/components/icons";
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

        {/* Animated grid background */}
        <div
          className={`absolute inset-0 ${isDark ? "opacity-[0.02]" : "opacity-[0.03]"}`}
          style={{
            backgroundImage: `linear-gradient(${isDark ? "#fff" : "#000"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "#fff" : "#000"} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-6"
              >
                <GlowIcon icon={<Stack />} size="xs" color="blue" variant="ghost" />
                Flagship Product
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
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
                  <ArrowRight />
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
                  { value: "15+", label: "Data Sources" },
                  { value: "98%", label: "Accuracy" },
                  { value: "1 or 11", label: "Credits/Record" },
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
                icon: <Database />,
                label: "Sources",
                value: "15+",
                subValue: "Premium providers",
                color: "blue",
              },
              {
                icon: <Crosshair />,
                label: "Accuracy",
                value: "98%",
                subValue: "Data guarantee",
                color: "green",
              },
              {
                icon: <Envelope />,
                label: "Email Only",
                value: "1 Credit",
                subValue: "Partial enrichment",
                color: "yellow",
              },
              {
                icon: <Phone />,
                label: "Full Contact",
                value: "11 Credits",
                subValue: "Email + Phone + Data",
                color: "purple",
              },
              {
                icon: <Shield />,
                label: "Uptime",
                value: "99.9%",
                subValue: "SLA guaranteed",
                color: "green",
              },
              {
                icon: <Lightning />,
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
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              How Waterfall Enrichment Works
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Our proprietary cascade algorithm queries sources sequentially until it finds
              the best match, validates responses, and returns a complete record.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <VerticalStepper
              steps={[
                {
                  number: "01",
                  title: "Sequential Cascade Query",
                  description:
                    "Your input record cascades through premium data providers in priority order until a match is found.",
                  icon: <Lightning />,
                  details: [
                    "Providers queried in optimized sequence",
                    "Stops at first high-confidence match",
                    "Automatic timeout handling and retry logic",
                    "Source health monitoring and failover",
                  ],
                },
                {
                  number: "02",
                  title: "Response Validation",
                  description:
                    "Each response is validated for accuracy, freshness, and completeness.",
                  icon: <Shield />,
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
                  icon: <GitMerge />,
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
                  icon: <Crosshair />,
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
              <div className={`p-8 rounded-2xl ${isDark ? "bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] border-white/[0.08]" : "bg-gradient-to-br from-white via-gray-50 to-white border-black/[0.08]"} border shadow-2xl`}>
                <div className={`text-sm font-semibold mb-8 flex items-center gap-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  <div className="w-2 h-2 rounded-full bg-[#3e8aff] animate-pulse" />
                  Waterfall Cascade Visualization
                </div>

                {/* Input */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative p-6 rounded-xl mb-6 ${isDark ? "bg-gradient-to-r from-[#3e8aff]/10 via-[#3e8aff]/5 to-transparent border-[#3e8aff]/20" : "bg-gradient-to-r from-blue-50 via-blue-25 to-transparent border-blue-200/50"} border-2`}
                >
                  <div className="text-xs font-semibold text-[#3e8aff] mb-3 tracking-wider">INPUT RECORD</div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#3e8aff] to-[#60a5fa] flex items-center justify-center shadow-lg">
                      <User className="text-white" width={40} height={40} />
                    </div>
                    <div>
                      <div className={`text-base font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>John Smith</div>
                      <div className="text-sm text-gray-500">Acme Corp</div>
                    </div>
                  </div>
                  {/* Flowing arrow */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="text-[#3e8aff]"
                    >
                      <CaretRight className="rotate-90" width={20} height={20} />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Sources */}
                <div className="relative mb-6 pt-4">
                  <div className={`text-xs font-semibold mb-4 text-center ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    QUERYING 15+ PREMIUM SOURCES
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { name: "Apollo", status: "Found", color: "green" },
                      { name: "ZoomInfo", status: "Found", color: "green" },
                      { name: "Clearbit", status: "Partial", color: "yellow" },
                      { name: "Lusha", status: "Found", color: "green" },
                      { name: "Hunter", status: "Found", color: "green" },
                      { name: "+10 more", status: "Queued", color: "gray" },
                    ].map((source, i) => (
                      <motion.div
                        key={source.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`relative p-3 rounded-lg text-center ${isDark ? "bg-[#111] border-white/[0.08]" : "bg-white border-gray-200"} border shadow-sm group cursor-pointer`}
                      >
                        <div className={`text-xs font-medium mb-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>{source.name}</div>
                        <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                          source.color === "green" ? "bg-green-500/10 text-green-500 border border-green-500/20" :
                          source.color === "yellow" ? "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20" :
                          "bg-gray-500/10 text-gray-500 border border-gray-500/20"
                        }`}>
                          <div className={`w-1 h-1 rounded-full ${
                            source.color === "green" ? "bg-green-500" :
                            source.color === "yellow" ? "bg-yellow-500" :
                            "bg-gray-500"
                          } ${source.color !== "gray" && "animate-pulse"}`} />
                          {source.status}
                        </div>
                        {/* Hover glow effect */}
                        <div className="absolute inset-0 rounded-lg bg-[#3e8aff]/0 group-hover:bg-[#3e8aff]/5 transition-colors" />
                      </motion.div>
                    ))}
                  </div>
                  {/* Flowing arrow */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                      className="text-[#3e8aff]"
                    >
                      <CaretRight className="rotate-90" width={20} height={20} />
                    </motion.div>
                  </div>
                </div>

                {/* Merge */}
                <div className="flex justify-center mb-6 pt-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#3e8aff] to-[#60a5fa] text-white text-sm font-semibold flex items-center gap-2 shadow-lg shadow-[#3e8aff]/25"
                  >
                    <GitMerge width={16} height={16} />
                    Best-Match Merge Algorithm
                  </motion.div>
                  {/* Flowing arrow */}
                  <div className="absolute mt-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                      className="text-[#3e8aff]"
                    >
                      <CaretRight className="rotate-90" width={20} height={20} />
                    </motion.div>
                  </div>
                </div>

                {/* Output */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="relative p-6 rounded-xl bg-gradient-to-br from-[#3e8aff]/20 via-[#60a5fa]/10 to-transparent border-2 border-[#3e8aff]/40 shadow-xl shadow-[#3e8aff]/10 mt-10"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="text-xs font-semibold text-[#3e8aff] tracking-wider">GOLDEN RECORD</div>
                    <div className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 text-[10px] font-semibold border border-green-500/20">
                      ✓ VERIFIED
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Envelope width={20} height={20} />, value: "john@acme.com", label: "Work Email" },
                      { icon: <Phone width={20} height={20} />, value: "+1 (555) 123-4567", label: "Direct Dial" },
                      { icon: <Buildings width={20} height={20} />, value: "Acme Corporation", label: "Company" },
                      { icon: <Briefcase width={20} height={20} />, value: "VP of Sales", label: "Title" },
                      { icon: <MapPin width={20} height={20} />, value: "San Francisco, CA", label: "Location" },
                      { icon: <LinkIcon width={20} height={20} />, value: "linkedin.com/in/jsmith", label: "LinkedIn" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (i * 0.05) }}
                        className={`flex items-start gap-3 p-3 rounded-lg ${isDark ? "bg-white/[0.03]" : "bg-white/50"}`}
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#3e8aff]/10 flex items-center justify-center flex-shrink-0">
                          <div className="text-[#3e8aff]">{item.icon}</div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className={`text-xs font-semibold truncate ${isDark ? "text-white" : "text-gray-900"}`}>{item.value}</div>
                          <div className="text-[10px] text-gray-500">{item.label}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
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
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              Choose Your Enrichment Level
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Pick partial enrichment for email-focused campaigns or full enrichment
              for complete contact data including phone numbers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Partial Enrichment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className={`relative p-8 rounded-2xl ${isDark ? "bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] border-white/[0.12]" : "bg-gradient-to-br from-white to-gray-50 border-gray-200"} border-2 shadow-xl group overflow-hidden`}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3e8aff]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon with animated background */}
                <div className="relative block mb-6">
                  <div className="absolute inset-0 bg-[#3e8aff]/20 rounded-2xl blur-2xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#3e8aff] to-[#60a5fa] flex items-center justify-center shadow-lg">
                    <Envelope className="text-white" width={40} height={40} />
                  </div>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-500 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  EMAIL FOCUSED
                </div>

                <h3 className={`text-2xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
                  Partial Enrichment
                </h3>

                {/* Pricing */}
                <div className="flex items-baseline gap-2 mb-2">
                  <div className="text-5xl font-bold text-[#3e8aff]">1</div>
                  <div className={`text-lg font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>credit</div>
                </div>
                <div className={`text-sm mb-6 ${isDark ? "text-gray-500" : "text-gray-600"}`}>
                  per record
                </div>

                <p className={`text-base mb-8 ${isDark ? "text-gray-400" : "text-gray-600"} leading-relaxed`}>
                  Get verified work emails for your contacts. Perfect for email outreach campaigns.
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {[
                    { text: "Verified work email", highlight: true },
                    { text: "Email deliverability check", highlight: false },
                    { text: "Company data enrichment", highlight: false },
                    { text: "LinkedIn profile URL", highlight: false },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className={`flex items-center gap-3 p-2.5 rounded-lg transition-colors ${
                        item.highlight
                          ? isDark ? "bg-green-500/10" : "bg-green-50"
                          : isDark ? "bg-white/[0.02]" : "bg-gray-50"
                      }`}
                    >
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="text-green-500" width={14} height={14} />
                      </div>
                      <span className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className={`w-full mt-8 py-3 px-6 rounded-xl font-semibold transition-all ${
                  isDark
                    ? "bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1]"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-200"
                }`}>
                  Start with Partial
                </button>
              </div>
            </motion.div>

            {/* Full Enrichment - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-[#3e8aff] via-[#3e8aff] to-[#60a5fa] border-2 border-[#60a5fa] shadow-2xl shadow-[#3e8aff]/40 group overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Popular badge */}
              <div className="absolute top-6 right-6">
                <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-bold text-white flex items-center gap-1">
                  <Lightning width={12} height={12} />
                  MOST POPULAR
                </div>
              </div>

              <div className="relative">
                {/* Icon */}
                <div className="relative block mb-6">
                  <div className="absolute inset-0 bg-white/30 rounded-2xl blur-2xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg">
                    <Phone className="text-white" width={40} height={40} />
                  </div>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs font-semibold text-white mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  MULTI-CHANNEL
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">
                  Full Enrichment
                </h3>

                {/* Pricing */}
                <div className="flex items-baseline gap-2 mb-2">
                  <div className="text-5xl font-bold text-white">11</div>
                  <div className="text-lg font-medium text-white/80">credits</div>
                </div>
                <div className="text-sm mb-6 text-white/70">
                  per record (1 for email + 10 for phone)
                </div>

                <p className="text-base mb-8 text-white/90 leading-relaxed">
                  Complete contact data including direct dial phone numbers for multi-channel outreach.
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {[
                    { text: "Everything in Partial", highlight: false },
                    { text: "Direct dial phone number", highlight: true },
                    { text: "Mobile phone number", highlight: true },
                    { text: "Complete firmographics", highlight: false },
                    { text: "Social profiles", highlight: false },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className={`flex items-center gap-3 p-2.5 rounded-lg transition-colors ${
                        item.highlight ? "bg-white/20 backdrop-blur-sm" : "bg-white/10"
                      }`}
                    >
                      <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0">
                        <Check className="text-white" width={14} height={14} />
                      </div>
                      <span className="text-sm font-medium text-white">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full mt-8 py-3 px-6 rounded-xl bg-white text-[#3e8aff] font-semibold hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02]">
                  Start with Full
                </button>
              </div>
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
              <GlowIcon icon={<Crosshair />} size="xs" color="blue" variant="ghost" />
              Output Schema
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              25+ Fields Per Record
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Every enriched record includes comprehensive contact and company data.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Fields */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative p-8 rounded-2xl ${isDark ? "bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] border-white/[0.08]" : "bg-gradient-to-br from-white to-gray-50 border-gray-200"} border-2 shadow-lg group overflow-hidden`}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-2xl" />
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                      <User className="text-white" width={40} height={40} />
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-1`}>
                      Contact Data
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">Personal & professional info</p>
                  </div>
                </div>

                {/* Field badges */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: "Work Email", verified: true },
                    { name: "Personal Email", verified: false },
                    { name: "Direct Phone", verified: false },
                    { name: "Mobile Phone", verified: false },
                    { name: "LinkedIn URL", verified: false },
                    { name: "Twitter Handle", verified: false },
                    { name: "Full Name", verified: false },
                    { name: "Job Title", verified: false },
                    { name: "Department", verified: false },
                    { name: "Seniority Level", verified: false },
                  ].map((field) => (
                    <motion.div
                      key={field.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        field.verified
                          ? isDark
                            ? "bg-green-500/10 text-green-400 border border-green-500/20"
                            : "bg-green-50 text-green-700 border border-green-200"
                          : isDark
                          ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          : "bg-blue-50 text-blue-700 border border-blue-200"
                      } cursor-default`}
                    >
                      {field.verified && <div className="w-1 h-1 rounded-full bg-green-500" />}
                      {field.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Company Fields */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`relative p-8 rounded-2xl ${isDark ? "bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] border-white/[0.08]" : "bg-gradient-to-br from-white to-gray-50 border-gray-200"} border-2 shadow-lg group overflow-hidden`}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/20 rounded-xl blur-2xl" />
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                      <Buildings className="text-white" width={40} height={40} />
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-1`}>
                      Company Data
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">Firmographic details</p>
                  </div>
                </div>

                {/* Field badges */}
                <div className="flex flex-wrap gap-2">
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
                    <motion.div
                      key={field}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        isDark
                          ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                          : "bg-purple-50 text-purple-700 border border-purple-200"
                      } cursor-default`}
                    >
                      {field}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Metadata Fields */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`relative p-8 rounded-2xl ${isDark ? "bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] border-white/[0.08]" : "bg-gradient-to-br from-white to-gray-50 border-gray-200"} border-2 shadow-lg group overflow-hidden`}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-500/20 rounded-xl blur-2xl" />
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center shadow-lg">
                      <ChartBar className="text-white" width={40} height={40} />
                    </div>
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-1`}>
                      Metadata
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">Quality & source info</p>
                  </div>
                </div>

                {/* Field badges */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "Confidence Score",
                    "Sources Used",
                    "Last Verified",
                    "Email Score",
                    "Catch-all Status",
                    "Data Freshness",
                    "Match Type",
                    "Processing Time",
                  ].map((field) => (
                    <motion.div
                      key={field}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        isDark
                          ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                          : "bg-yellow-50 text-yellow-700 border border-yellow-200"
                      } cursor-default`}
                    >
                      {field}
                    </motion.div>
                  ))}
                </div>
              </div>
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
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              Popular Use Cases
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              See how teams use waterfall enrichment to power their GTM motions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users width={40} height={40} />,
                iconColor: "from-blue-500 to-blue-600",
                glowColor: "blue-500",
                title: "Lead List Enrichment",
                description:
                  "Upload a list of companies and get complete contact details for decision-makers.",
                result: "98% accuracy, comprehensive data",
                metric: "10K+ leads/day",
              },
              {
                icon: <ArrowsClockwise width={40} height={40} />,
                iconColor: "from-green-500 to-green-600",
                glowColor: "green-500",
                title: "CRM Data Hygiene",
                description:
                  "Enrich existing CRM records to fill gaps and update stale information.",
                result: "Keep your CRM data fresh",
                metric: "Real-time sync",
              },
              {
                icon: <Crosshair width={40} height={40} />,
                iconColor: "from-purple-500 to-purple-600",
                glowColor: "purple-500",
                title: "ABM Campaign Prep",
                description:
                  "Get verified emails and direct dials for your target account list.",
                result: "Multi-channel outreach ready",
                metric: "Complete buying committees",
              },
              {
                icon: <Calendar width={40} height={40} />,
                iconColor: "from-orange-500 to-orange-600",
                glowColor: "orange-500",
                title: "Event Lead Capture",
                description:
                  "Enrich badge scans with full contact and company data in real-time.",
                result: "Fast lead qualification",
                metric: "< 2s processing",
              },
              {
                icon: <ChartBar width={40} height={40} />,
                iconColor: "from-indigo-500 to-indigo-600",
                glowColor: "indigo-500",
                title: "Market Research",
                description:
                  "Build comprehensive prospect databases for TAM analysis and segmentation.",
                result: "Complete firmographic coverage",
                metric: "25+ data points",
              },
              {
                icon: <Globe width={40} height={40} />,
                iconColor: "from-teal-500 to-teal-600",
                glowColor: "teal-500",
                title: "International Expansion",
                description:
                  "Get localized contact data for EMEA, APAC, and LATAM markets.",
                result: "Global coverage, local quality",
                metric: "190+ countries",
              },
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative p-6 rounded-2xl ${isDark ? "bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] border-white/[0.08]" : "bg-gradient-to-br from-white to-gray-50 border-gray-200"} border-2 shadow-lg group overflow-hidden cursor-pointer`}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[${useCase.glowColor}]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  {/* Icon with animated glow */}
                  <div className="relative block mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${useCase.iconColor} rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${useCase.iconColor} flex items-center justify-center shadow-lg`}>
                      <div className="text-white">{useCase.icon}</div>
                    </div>
                  </div>

                  {/* Metric badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-4 ${
                    isDark ? "bg-[#3e8aff]/10 text-[#3e8aff] border border-[#3e8aff]/20" : "bg-blue-50 text-blue-600 border border-blue-200"
                  }`}>
                    <Lightning width={10} height={10} />
                    {useCase.metric}
                  </div>

                  <h3 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"} group-hover:text-[#3e8aff] transition-colors`}>
                    {useCase.title}
                  </h3>

                  <p className={`text-sm mb-4 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {useCase.description}
                  </p>

                  {/* Result badge */}
                  <div className={`flex items-center gap-2 p-2.5 rounded-lg ${
                    isDark ? "bg-green-500/10" : "bg-green-50"
                  }`}>
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                      <Check className="text-green-500" width={12} height={12} />
                    </div>
                    <span className="text-xs font-semibold text-green-500">
                      {useCase.result}
                    </span>
                  </div>
                </div>

                {/* Hover arrow indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#3e8aff]/10 flex items-center justify-center">
                    <ArrowRight className="text-[#3e8aff]" width={16} height={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
