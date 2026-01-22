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
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold ${isDark ? "text-white" : "text-gray-900"} leading-[1.1] mb-6`}
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
                href="/get-started"
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
                  ? "bg-[#0a0a0a] border border-white/[0.08]"
                  : "bg-white border border-black/[0.08] shadow-2xl"
              }`}
            >
              {/* Browser Chrome */}
              <div
                className={`flex items-center gap-2 px-4 py-3 border-b ${
                  isDark ? "border-white/[0.08] bg-[#0d0d0d]" : "border-black/[0.05] bg-gray-50"
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
      <section className={`py-12 border-y ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"} ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
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
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
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

            {/* Example Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <div className={`p-6 rounded-xl ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>
                <div className="flex items-center gap-2 mb-4">
                  <Sparkle className="text-[#3e8aff]" />
                  <span className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>Live Example</span>
                </div>

                {/* Prompt */}
                <div className="p-3 rounded-lg bg-[#3e8aff]/5 border border-[#3e8aff]/20 mb-6">
                  <div className="text-xs text-gray-500 mb-1">Your prompt:</div>
                  <div className="text-sm text-[#3e8aff] font-mono">
                    &quot;Standardize job titles to seniority levels: C-Level, VP, Director, Manager, IC&quot;
                  </div>
                </div>

                {/* Before/After */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                      Before
                    </div>
                    <div className="space-y-2">
                      {[
                        "VP of Sales",
                        "Vice President, Marketing",
                        "Sales VP",
                        "Chief Executive Officer",
                        "Head of Engineering",
                        "Senior Account Executive",
                        "Director of BD",
                      ].map((title, i) => (
                        <div
                          key={i}
                          className={`p-2 rounded bg-red-500/5 border border-red-500/20 text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}
                        >
                          {title}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                      After
                    </div>
                    <div className="space-y-2">
                      {[
                        "VP",
                        "VP",
                        "VP",
                        "C-Level",
                        "Director",
                        "IC",
                        "Director",
                      ].map((title, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className={`p-2 rounded bg-green-500/5 border border-green-500/20 text-xs ${isDark ? "text-gray-300" : "text-gray-700"}`}
                        >
                          {title}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 text-xs text-green-500">
                  <Check />
                  7 rows normalized in 0.3s
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smart Column Types */}
      <section id="examples" className={`py-24 ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              12 Smart Column Types
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Purpose-built transformations for every data enrichment need.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Clean First Name",
                description: "Extract and format first names from full name fields",
                category: "Data Cleanup",
              },
              {
                title: "Format Phone",
                description: "Standardize phone numbers to consistent formats",
                category: "Data Cleanup",
              },
              {
                title: "Email Validation",
                description: "Verify email deliverability and catch bounces",
                category: "Validation",
              },
              {
                title: "Enrich Company",
                description: "Add firmographic data like size, industry, and revenue",
                category: "Enrichment",
              },
              {
                title: "LinkedIn Research",
                description: "Pull data from LinkedIn profiles automatically",
                category: "Research",
              },
              {
                title: "Website Analysis",
                description: "Extract key information from company websites",
                category: "Research",
              },
              {
                title: "Find Competitors",
                description: "Discover competitors for any company",
                category: "Research",
              },
              {
                title: "Find Similar Companies",
                description: "Identify lookalike companies based on attributes",
                category: "Research",
              },
              {
                title: "ICP Fit Analysis",
                description: "Score leads against your ideal customer profile",
                category: "AI Analysis",
              },
              {
                title: "Cold Intro Email",
                description: "Generate personalized outreach emails with AI",
                category: "AI Generation",
              },
              {
                title: "Custom AI",
                description: "Create any transformation with natural language prompts",
                category: "AI",
              },
              {
                title: "CRM Contact Lookup",
                description: "Check if contact exists in your CRM before adding",
                category: "CRM",
              },
            ].map((column, index) => (
              <motion.div
                key={column.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`p-6 rounded-xl ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"} hover:border-[#3e8aff]/30 transition-colors`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-lg md:text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{column.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#3e8aff]/10 text-[#3e8aff]">
                    {column.category}
                  </span>
                </div>
                <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{column.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Prompts */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
                <GlowIcon icon={<Brain />} size="xs" color="blue" variant="ghost" />
                Custom AI Prompts
              </div>
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
                Unlimited Possibilities
              </h2>
              <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"} mb-8`}>
                Beyond built-in rules, create any transformation with natural language.
                Our GPT-4 engine understands context and handles edge cases.
              </p>

              <div className="space-y-4">
                {[
                  {
                    prompt: '"If title contains Sales, output Sales; if Marketing, output Marketing; else Other"',
                    result: "Rule-based categorization",
                  },
                  {
                    prompt: '"Translate company industry to NAICS codes"',
                    result: "Industry standardization",
                  },
                  {
                    prompt: '"Score job titles 1-10 for decision-making authority"',
                    result: "Lead scoring",
                  },
                ].map((example, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-lg ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}
                  >
                    <div className="text-sm text-[#3e8aff] font-mono mb-2">{example.prompt}</div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <ArrowsLeftRight />
                      {example.result}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="#"
                className="inline-flex items-center gap-2 mt-8 text-[#3e8aff] hover:underline"
              >
                See prompt library <CaretRight />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gradient-to-br from-[#3e8aff]/10 to-transparent border border-[#3e8aff]/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <GlowIcon icon={<Brain />} size="md" color="blue" variant="glow" />
                <div>
                  <div className={`${isDark ? "text-white" : "text-gray-900"} font-medium`}>GPT-4 Powered</div>
                  <div className="text-xs text-gray-500">Latest AI model</div>
                </div>
              </div>

              <div className={`space-y-4 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                <p>
                  Smart Columns uses OpenAI&apos;s GPT-4 model—the same technology behind
                  ChatGPT—to understand your transformation requests.
                </p>
                <p>
                  This means it can handle complex, context-dependent transformations
                  that traditional rule-based systems cannot.
                </p>
                <div className={`pt-4 border-t ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>
                  <div className="flex items-center gap-2 text-green-500 text-xs">
                    <Shield />
                    Your data is never used for model training
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className={`py-24 ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
              <GlowIcon icon={<ArrowsClockwise />} size="xs" color="blue" variant="ghost" />
              Flexible Integration
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Works With Your Data
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Import from any source, transform with AI, export anywhere.
            </p>
          </motion.div>

          {/* Flow Steps */}
          <div className="relative">
            {/* Connection Arrows (Desktop) */}
            <div className="hidden lg:flex absolute top-1/2 left-0 right-0 -translate-y-1/2 justify-center gap-[calc(33.33%-60px)] px-20 pointer-events-none z-10">
              <div className="flex items-center">
                <div className={`w-16 h-0.5 ${isDark ? "bg-[#3e8aff]/40" : "bg-[#3e8aff]/30"}`} />
                <ArrowRight className={`w-5 h-5 -ml-1 ${isDark ? "text-[#3e8aff]/60" : "text-[#3e8aff]/50"}`} />
              </div>
              <div className="flex items-center">
                <div className={`w-16 h-0.5 ${isDark ? "bg-[#3e8aff]/40" : "bg-[#3e8aff]/30"}`} />
                <ArrowRight className={`w-5 h-5 -ml-1 ${isDark ? "text-[#3e8aff]/60" : "text-[#3e8aff]/50"}`} />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
              {[
                {
                  icon: <FileXls />,
                  title: "Import Sources",
                  step: "01",
                  description: "Bring your data from anywhere",
                  items: ["CSV Upload", "Excel Files", "Google Sheets", "API Integration"],
                },
                {
                  icon: <Sparkle />,
                  title: "Transform With AI",
                  step: "02",
                  description: "AI-powered transformations",
                  items: ["Built-in Rules", "Custom Prompts", "Batch Processing", "Real-time Preview"],
                },
                {
                  icon: <ArrowsClockwise />,
                  title: "Export Anywhere",
                  step: "03",
                  description: "Send to any destination",
                  items: ["Download CSV", "Push to CRM", "Webhook Delivery", "API Response"],
                },
              ].map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`group relative p-6 lg:p-8 rounded-2xl ${isDark ? "bg-[#0a0a0a] hover:bg-[#0d0d0d]" : "bg-white hover:shadow-xl"} border ${isDark ? "border-white/[0.08] hover:border-[#3e8aff]/30" : "border-gray-200 hover:border-[#3e8aff]/30"} shadow-lg transition-all duration-300`}
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 left-6">
                    <span className="px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-[#3e8aff] to-[#60a5fa] text-white rounded-full shadow-lg shadow-[#3e8aff]/25">
                      Step {step.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-5 pt-3">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isDark ? "bg-gradient-to-br from-[#3e8aff]/20 to-[#3e8aff]/5" : "bg-gradient-to-br from-[#3e8aff]/10 to-[#3e8aff]/5"} border ${isDark ? "border-[#3e8aff]/20" : "border-[#3e8aff]/15"} group-hover:scale-105 transition-transform duration-300`}>
                      <div className="text-[#3e8aff] text-2xl">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  <h3 className={`text-lg md:text-xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-500" : "text-gray-500"} mb-5`}>
                    {step.description}
                  </p>

                  <div className={`space-y-2 p-4 rounded-xl ${isDark ? "bg-white/[0.02]" : "bg-gray-50"}`}>
                    {step.items.map((item) => (
                      <div
                        key={item}
                        className={`flex items-center gap-3 text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isDark ? "bg-[#3e8aff]/20" : "bg-[#3e8aff]/10"}`}>
                          <Check className="w-3 h-3 text-[#3e8aff]" />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
