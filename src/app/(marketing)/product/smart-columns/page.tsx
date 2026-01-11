"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  RefreshCw,
  Check,
  Zap,
  Brain,
  Wand2,
  Table,
  FileSpreadsheet,
  ArrowLeftRight,
  ChevronRight,
  Cpu,
  Settings,
  Shield,
} from "lucide-react";
import { DashboardMockup, TechnicalGrid, VerticalStepper, GlowCard } from "@/components/ui";

export default function SmartColumnsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-500 mb-6"
              >
                <Sparkles className="w-4 h-4" />
                AI-Powered
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6"
              >
                Smart{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-violet-400">
                  Columns
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400 mb-8 max-w-lg"
              >
                AI-powered data normalization and transformation. Standardize job titles,
                format phone numbers, parse names, and more—all with natural language prompts.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-500/90 transition-colors"
                >
                  Try Smart Columns
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#examples"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.15] text-white font-medium rounded-lg hover:bg-white/[0.05] transition-colors"
                >
                  See Examples
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
                  { value: "AI", label: "Powered" },
                  { value: "12", label: "Column Types" },
                  { value: "Fast", label: "Processing" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]"
                  >
                    <div className="text-2xl font-bold text-purple-500">{stat.value}</div>
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
              <DashboardMockup variant="columns" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Stats */}
      <section className="py-12 border-y border-white/[0.08] bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <TechnicalGrid
            columns={5}
            blocks={[
              {
                icon: <Brain className="w-5 h-5" />,
                label: "AI Model",
                value: "AI",
                subValue: "Powered transforms",
                color: "purple",
              },
              {
                icon: <Settings className="w-5 h-5" />,
                label: "Column Types",
                value: "12",
                subValue: "Ready to use",
                color: "blue",
              },
              {
                icon: <Sparkles className="w-5 h-5" />,
                label: "Custom AI",
                value: "Yes",
                subValue: "Any prompt",
                color: "yellow",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                label: "Accuracy",
                value: "98%",
                subValue: "Data guarantee",
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

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-500 mb-4">
              <Wand2 className="w-4 h-4" />
              Natural Language
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Describe What You Want
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
                  icon: <Table className="w-5 h-5" />,
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
                  icon: <Brain className="w-5 h-5" />,
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
                  icon: <RefreshCw className="w-5 h-5" />,
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
              <div className="p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-medium text-gray-400">Live Example</span>
                </div>

                {/* Prompt */}
                <div className="p-3 rounded-lg bg-purple-500/5 border border-purple-500/20 mb-6">
                  <div className="text-xs text-gray-500 mb-1">Your prompt:</div>
                  <div className="text-sm text-purple-400 font-mono">
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
                          className="p-2 rounded bg-red-500/5 border border-red-500/20 text-xs text-gray-400"
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
                          className="p-2 rounded bg-green-500/5 border border-green-500/20 text-xs text-gray-300"
                        >
                          {title}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 text-xs text-green-500">
                  <Check className="w-4 h-4" />
                  7 rows normalized in 0.3s
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smart Column Types */}
      <section id="examples" className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              12 Smart Column Types
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
                className="p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08] hover:border-purple-500/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">{column.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400">
                    {column.category}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{column.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Prompts */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-500 mb-4">
                <Brain className="w-4 h-4" />
                Custom AI Prompts
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Unlimited Possibilities
              </h2>
              <p className="text-lg text-gray-400 mb-8">
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
                    className="p-4 rounded-lg bg-[#0a0a0a] border border-white/[0.08]"
                  >
                    <div className="text-sm text-purple-400 font-mono mb-2">{example.prompt}</div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <ArrowLeftRight className="w-3 h-3" />
                      {example.result}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="#"
                className="inline-flex items-center gap-2 mt-8 text-purple-500 hover:underline"
              >
                See prompt library <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-purple-500" />
                </div>
                <div>
                  <div className="text-white font-medium">GPT-4 Powered</div>
                  <div className="text-xs text-gray-500">Latest AI model</div>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-400">
                <p>
                  Smart Columns uses OpenAI&apos;s GPT-4 model—the same technology behind
                  ChatGPT—to understand your transformation requests.
                </p>
                <p>
                  This means it can handle complex, context-dependent transformations
                  that traditional rule-based systems cannot.
                </p>
                <div className="pt-4 border-t border-white/[0.08]">
                  <div className="flex items-center gap-2 text-green-500 text-xs">
                    <Shield className="w-4 h-4" />
                    Your data is never used for model training
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Works With Your Data
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Import from any source, transform with AI, export anywhere.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <FileSpreadsheet className="w-6 h-6" />,
                title: "Import Sources",
                items: ["CSV Upload", "Excel Files", "Google Sheets", "API Integration"],
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Transform With AI",
                items: ["Built-in Rules", "Custom Prompts", "Batch Processing", "Real-time Preview"],
              },
              {
                icon: <RefreshCw className="w-6 h-6" />,
                title: "Export Anywhere",
                items: ["Download CSV", "Push to CRM", "Webhook Delivery", "API Response"],
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08] text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{step.title}</h3>
                <div className="space-y-2">
                  {step.items.map((item) => (
                    <div key={item} className="text-sm text-gray-400">
                      {item}
                    </div>
                  ))}
                </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Data With AI
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Start cleaning and normalizing your data in seconds. No coding required.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-500/90 transition-colors text-lg"
              >
                Try Smart Columns Free
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
