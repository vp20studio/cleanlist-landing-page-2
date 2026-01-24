"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import {
  ArrowRight,
  Sparkle,
  ArrowsClockwise,
  Check,
  Lightning,
  Brain,
  MagicWand,
  Table,
  FileXls,
  ArrowsLeftRight,
  CaretRight,
  Cpu,
  Gear,
  Shield,
  Buildings,
  Target,
  Users,
  Briefcase,
  Globe,
  Envelope,
  Phone,
  LinkedinLogo,
  ChartBar,
  Database,
} from "@/components/icons";
import { TechnicalGrid, VerticalStepper, GlowCard, GlowIcon } from "@/components/ui";

export default function SmartColumnsPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3e8aff]/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[400px] lg:w-[800px] lg:h-[600px] bg-[#3e8aff]/10 rounded-full blur-[120px]" />

        {/* Animated grid background */}
        <div
          className={`absolute inset-0 ${isDark ? "opacity-[0.02]" : "opacity-[0.03]"}`}
          style={{
            backgroundImage: `linear-gradient(${isDark ? "#fff" : "#000"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "#fff" : "#000"} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          {/* Centered Hero Content */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-6"
            >
              <GlowIcon icon={<Sparkle />} size="xs" color="blue" variant="ghost" />
              AI-Powered
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold ${isDark ? "text-white" : "text-gray-900"} leading-[1.1] mb-6`}
            >
              Smart{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                Columns
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} mb-8`}
            >
              AI-powered data normalization and transformation. Standardize job titles,
              format phone numbers, parse names, and more—all with natural language prompts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-8"
            >
              <Link
                href="https://app.cleanlist.ai/auth/register"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-colors"
              >
                Try Smart Columns
                <ArrowRight />
              </Link>
              <Link
                href="#examples"
                className={`inline-flex items-center gap-2 px-6 py-3 border ${isDark ? "border-white/[0.15] text-white hover:bg-white/[0.05]" : "border-gray-300 text-gray-700 hover:bg-gray-100"} font-medium rounded-lg transition-colors`}
              >
                See Examples
              </Link>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-8 md:gap-12"
            >
              {[
                { value: "AI", label: "Powered" },
                { value: "12", label: "Column Types" },
                { value: "Fast", label: "Processing" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  {i > 0 && <div className={`w-px h-8 ${isDark ? "bg-white/[0.1]" : "bg-gray-200"}`} />}
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#3e8aff]">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Large Video Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Video Container */}
            <div
              className={`relative rounded-2xl overflow-hidden ${
                isDark
                  ? "bg-[#030303] border border-white/[0.08]"
                  : "bg-white border border-black/[0.08] shadow-2xl"
              }`}
            >
              {/* Browser Chrome */}
              <div
                className={`flex items-center gap-2 px-4 py-3 border-b ${
                  isDark ? "border-white/[0.08] bg-[#030303]" : "border-black/[0.05] bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div
                  className={`flex-1 mx-4 px-3 py-1 rounded-md text-xs ${
                    isDark ? "bg-white/[0.05] text-gray-500" : "bg-gray-100 text-gray-400"
                  }`}
                >
                  app.cleanlist.ai/smart-columns
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                  Live
                </span>
              </div>

              {/* Video */}
              <div className="relative">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto block"
                >
                  <source src="/videos/smart-columns.mp4" type="video/mp4" />
                </video>

                {/* Subtle vignette overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: isDark
                      ? "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.15) 100%)"
                      : "radial-gradient(ellipse at center, transparent 70%, rgba(0,0,0,0.05) 100%)",
                  }}
                />
              </div>
            </div>

            {/* Reflection effect */}
            <div
              className="absolute -bottom-12 left-8 right-8 h-24 rounded-2xl opacity-30 -z-10 blur-sm"
              style={{
                background: isDark
                  ? "linear-gradient(to bottom, rgba(62, 138, 255, 0.1), transparent)"
                  : "linear-gradient(to bottom, rgba(62, 138, 255, 0.05), transparent)",
                transform: "scaleY(-0.3) perspective(500px) rotateX(30deg)",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* Technical Stats */}
      <section className={`py-12 border-y ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"} ${isDark ? "bg-[#030303]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <TechnicalGrid
            columns={5}
            blocks={[
              {
                icon: <Brain />,
                label: "AI Model",
                value: "AI",
                subValue: "Powered transforms",
                color: "blue",
              },
              {
                icon: <Gear />,
                label: "Column Types",
                value: "12",
                subValue: "Ready to use",
                color: "blue",
              },
              {
                icon: <Sparkle />,
                label: "Custom AI",
                value: "Yes",
                subValue: "Any prompt",
                color: "yellow",
              },
              {
                icon: <Shield />,
                label: "Accuracy",
                value: "98%",
                subValue: "Data guarantee",
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

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
              <GlowIcon icon={<MagicWand />} size="xs" color="blue" variant="ghost" />
              Natural Language
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Describe What You Want
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              No formulas, no regex. Just tell Smart Columns what you need in plain English.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <VerticalStepper
              steps={[
                {
                  number: "01",
                  title: "Select Your Column",
                  description:
                    "Choose any column in your dataset that needs transformation or normalization.",
                  icon: <Table />,
                  details: [
                    "Works with any data type",
                    "Supports CSV, Excel, and API input",
                    "Auto-detects column format",
                  ],
                },
                {
                  number: "02",
                  title: "Choose Column Type",
                  description:
                    "Select from 12 built-in column types or use Custom AI for any transformation.",
                  icon: <Brain />,
                  details: [
                    'Built-in: Clean names, format phones, validate emails',
                    'Research: LinkedIn, competitors, website analysis',
                    'AI: ICP scoring, custom prompts, cold intro emails',
                  ],
                },
                {
                  number: "03",
                  title: "Preview & Apply",
                  description:
                    "See the transformation on sample data before applying to your entire dataset.",
                  icon: <ArrowsClockwise />,
                  details: [
                    "Preview first 10 rows",
                    "Adjust prompt if needed",
                    "Apply to all rows instantly",
                  ],
                },
              ]}
            />

            {/* Example Card - Enhanced Context */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <div className={`p-8 rounded-2xl ${isDark ? "bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] border-white/[0.08]" : "bg-gradient-to-br from-white to-gray-50 border-gray-200"} border-2 shadow-2xl`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3e8aff] to-[#60a5fa] flex items-center justify-center">
                    <Sparkle className="text-white" width={20} height={20} />
                  </div>
                  <div>
                    <span className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Live Enrichment Example</span>
                    <p className="text-xs text-gray-500">Adding context for personalized outreach</p>
                  </div>
                </div>

                {/* Before - Basic Data */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Original Data
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-gray-500/20 to-transparent" />
                  </div>
                  <div className={`p-4 rounded-xl ${isDark ? "bg-red-500/5 border-red-500/20" : "bg-red-50 border-red-200"} border-2`}>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-[10px] text-gray-500 uppercase mb-1">Name</div>
                        <div className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>Sarah Chen</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-500 uppercase mb-1">Email</div>
                        <div className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>sarah@acme.io</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Indicator */}
                <div className="flex items-center gap-2 my-4">
                  <div className="text-xs font-semibold text-[#3e8aff]">+ 6 Smart Columns</div>
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-[#3e8aff]"
                  >
                    <CaretRight className="rotate-90" width={16} height={16} />
                  </motion.div>
                </div>

                {/* After - Enriched Context */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-xs font-semibold text-green-500 uppercase tracking-wider">
                      Enriched for Outreach
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-green-500/20 to-transparent" />
                  </div>
                  <div className={`p-4 rounded-xl ${isDark ? "bg-green-500/5 border-green-500/20" : "bg-green-50 border-green-200"} border-2`}>
                    <div className="space-y-3">
                      {[
                        {
                          icon: <Buildings width={14} height={14} />,
                          label: "Company Context",
                          value: "Series B SaaS, 150 employees, $25M ARR",
                          type: "Enrich Company"
                        },
                        {
                          icon: <Target width={14} height={14} />,
                          label: "ICP Score",
                          value: "92/100 - Perfect fit",
                          type: "ICP Analysis"
                        },
                        {
                          icon: <Users width={14} height={14} />,
                          label: "Recent Activity",
                          value: "Posted about scaling sales team last week",
                          type: "LinkedIn Research"
                        },
                        {
                          icon: <Briefcase width={14} height={14} />,
                          label: "Competitors",
                          value: "Using Salesforce, Outreach, Apollo",
                          type: "Find Competitors"
                        },
                        {
                          icon: <Globe width={14} height={14} />,
                          label: "Tech Stack",
                          value: "React, AWS, Segment, Intercom",
                          type: "Website Analysis"
                        },
                        {
                          icon: <Envelope width={14} height={14} />,
                          label: "Email Opening",
                          value: "\"Saw your post on scaling - we help Series B...\"",
                          type: "AI Generated"
                        },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className={`flex items-start gap-3 p-3 rounded-lg ${isDark ? "bg-white/[0.03]" : "bg-white/60"}`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                            <div className="text-green-500">{item.icon}</div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <div className={`text-xs font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{item.label}</div>
                              <div className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-green-500/10 text-green-600">
                                {item.type}
                              </div>
                            </div>
                            <div className="text-xs text-gray-500 line-clamp-1">{item.value}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.05]">
                  <div className="flex items-center gap-2 text-xs text-green-500">
                    <Check width={14} height={14} />
                    6 columns added in 2.1s
                  </div>
                  <div className="text-[10px] text-gray-500">
                    Context for personalized outreach
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smart Column Types */}
      <section id="examples" className={`py-24 ${isDark ? "bg-[#030303]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              12 Smart Column Types
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Purpose-built transformations for every data enrichment need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Clean First Name",
                description: "Extract and format first names from full name fields",
                category: "Data Cleanup",
                icon: <Users width={72} height={72} />,
                color: "from-[#3e8aff] to-[#60a5fa]",
                bgColor: "blue",
              },
              {
                title: "Format Phone",
                description: "Standardize phone numbers to consistent formats",
                category: "Data Cleanup",
                icon: <Phone width={72} height={72} />,
                color: "from-[#3e8aff] to-[#60a5fa]",
                bgColor: "blue",
              },
              {
                title: "Email Validation",
                description: "Verify email deliverability and catch bounces",
                category: "Validation",
                icon: <Shield width={72} height={72} />,
                color: "from-green-500 to-green-600",
                bgColor: "green",
              },
              {
                title: "Enrich Company",
                description: "Add firmographic data like size, industry, and revenue",
                category: "Enrichment",
                icon: <Buildings width={72} height={72} />,
                color: "from-purple-500 to-purple-600",
                bgColor: "purple",
              },
              {
                title: "LinkedIn Research",
                description: "Pull data from LinkedIn profiles automatically",
                category: "Research",
                icon: <LinkedinLogo width={72} height={72} />,
                color: "from-teal-500 to-teal-600",
                bgColor: "teal",
              },
              {
                title: "Website Analysis",
                description: "Extract key information from company websites",
                category: "Research",
                icon: <Globe width={72} height={72} />,
                color: "from-teal-500 to-teal-600",
                bgColor: "teal",
              },
              {
                title: "Find Competitors",
                description: "Discover competitors for any company",
                category: "Research",
                icon: <Target width={72} height={72} />,
                color: "from-teal-500 to-teal-600",
                bgColor: "teal",
              },
              {
                title: "Find Similar Companies",
                description: "Identify lookalike companies based on attributes",
                category: "Research",
                icon: <Briefcase width={72} height={72} />,
                color: "from-teal-500 to-teal-600",
                bgColor: "teal",
              },
              {
                title: "ICP Fit Analysis",
                description: "Score leads against your ideal customer profile",
                category: "AI Analysis",
                icon: <ChartBar width={72} height={72} />,
                color: "from-purple-500 to-purple-600",
                bgColor: "purple",
              },
              {
                title: "Cold Intro Email",
                description: "Generate personalized outreach emails with AI",
                category: "AI Generation",
                icon: <Envelope width={72} height={72} />,
                color: "from-purple-500 to-purple-600",
                bgColor: "purple",
              },
              {
                title: "Custom AI",
                description: "Create any transformation with natural language prompts",
                category: "AI",
                icon: <Brain width={72} height={72} />,
                color: "from-purple-500 to-purple-600",
                bgColor: "purple",
              },
              {
                title: "CRM Contact Lookup",
                description: "Check if contact exists in your CRM before adding",
                category: "CRM",
                icon: <Database width={72} height={72} />,
                color: "from-[#3e8aff] to-[#60a5fa]",
                bgColor: "blue",
              },
            ].map((column, index) => (
              <Link
                key={column.title}
                href="https://app.cleanlist.ai/auth/register"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`relative p-6 rounded-2xl ${isDark ? "bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] border-white/[0.08]" : "bg-gradient-to-br from-white to-gray-50 border-gray-200"} border-2 shadow-lg group overflow-hidden cursor-pointer`}
                >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${column.bgColor}-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  {/* Icon */}
                  <div className="relative block mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${column.color} rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                    <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${column.color} flex items-center justify-center shadow-lg`}>
                      <div className="text-white">{column.icon}</div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-4 ${
                    isDark ? "bg-[#3e8aff]/10 text-[#3e8aff] border border-[#3e8aff]/20" : "bg-blue-50 text-blue-600 border border-blue-200"
                  }`}>
                    {column.category}
                  </div>

                  <h3 className={`text-lg font-bold mb-2 ${isDark ? "text-white" : "text-gray-900"} group-hover:text-[#3e8aff] transition-colors`}>
                    {column.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {column.description}
                  </p>
                </div>

                {/* Hover arrow indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#3e8aff]/10 flex items-center justify-center">
                    <ArrowRight className="text-[#3e8aff]" width={16} height={16} />
                  </div>
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Integration - Redesigned */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
              <GlowIcon icon={<ArrowsClockwise />} size="xs" color="blue" variant="ghost" />
              Flexible Workflow
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Fits Into Your Existing Workflow
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-3xl mx-auto`}>
              Upload your data, run Smart Columns, and export enriched results—all in minutes.
            </p>
          </motion.div>

          {/* Flow Steps - Professional Design */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 relative">
              {[
                {
                  title: "Upload Your List",
                  step: "01",
                  examples: [
                    "CSV file with 1,000 leads",
                    "Google Sheet from prospecting",
                    "Excel export from trade show",
                  ],
                },
                {
                  title: "Add Smart Columns",
                  step: "02",
                  examples: [
                    "Company enrichment (industry, size)",
                    "ICP scoring (0-100 fit score)",
                    "AI-generated email openers",
                  ],
                },
                {
                  title: "Export & Use",
                  step: "03",
                  examples: [
                    "Download enriched CSV",
                    "Push to Salesforce CRM",
                    "Send to Outreach/Apollo",
                  ],
                },
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Connecting line (desktop only) */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-[#3e8aff]/30 to-transparent z-0" />
                  )}

                  <div className={`relative p-8 rounded-2xl ${isDark ? "bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] border-white/[0.08]" : "bg-gradient-to-br from-white to-gray-50 border-gray-200"} border-2 shadow-lg hover:shadow-xl transition-all duration-300`}>
                    {/* Step Number - Large and Prominent */}
                    <div className="mb-6">
                      <div className="text-6xl font-bold text-[#3e8aff] opacity-20">
                        {step.step}
                      </div>
                    </div>

                    <h3 className={`text-xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {step.title}
                    </h3>

                    {/* Clean Text List */}
                    <div className="space-y-3">
                      {step.examples.map((example, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-3 text-sm ${isDark ? "text-gray-400" : "text-gray-600"} leading-relaxed`}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#3e8aff] mt-2 flex-shrink-0" />
                          <div>{example}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-16 text-center"
            >
              <div className={`text-sm font-medium ${isDark ? "text-gray-500" : "text-gray-600"}`}>
                Average processing time: <span className="text-[#3e8aff] font-semibold">2-3 seconds per row</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
}
