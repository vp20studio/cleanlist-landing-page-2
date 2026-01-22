"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import {
  ArrowRight,
  Crosshair,
  Buildings,
  Users,
  Globe,
  ChartBar,
  Check,
  Sparkle,
  Gear,
  Stack,
  Lightning,
} from "@/components/icons";
import { VerticalStepper, TechnicalGrid, GlowIcon } from "@/components/ui";

const companyTargeting = [
  { label: "Industries", description: "Target specific sectors and sub-categories" },
  { label: "Company Size", description: "From startup to mega enterprise" },
  { label: "Revenue Ranges", description: "$0-$1M to $1B+" },
  { label: "Technologies", description: "Tech stack requirements" },
  { label: "Business Models", description: "B2B, B2C, marketplace, SaaS" },
  { label: "Company Age", description: "Established vs. emerging companies" },
  { label: "Growth Indicators", description: "Hiring, funding, expansion signals" },
];

const prospectTargeting = [
  { label: "Job Titles", description: "Specific roles and variations" },
  { label: "Departments", description: "Sales, Marketing, Engineering, etc." },
  { label: "Seniority Levels", description: "C-Suite, VP, Director, Manager" },
  { label: "Years of Experience", description: "Career stage targeting" },
  { label: "Skills", description: "Technical and professional skills" },
  { label: "Certifications", description: "Industry credentials" },
];

const geoTargeting = [
  { label: "Countries", description: "Global coverage" },
  { label: "States/Regions", description: "Regional targeting" },
  { label: "Cities", description: "Metro area focus" },
  { label: "Timezones", description: "Operational alignment" },
  { label: "Exclusions", description: "Negative geo targeting" },
];

export default function ICPScoringPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {/* Hero */}
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
                <GlowIcon icon={<Crosshair />} size="xs" color="blue" variant="ghost" />
                ICP Scoring
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`text-4xl md:text-5xl lg:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} leading-[1.1] mb-6`}
              >
                Score Every Lead Against Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                  Ideal Customer
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} mb-8`}
              >
                Define your Ideal Customer Profile with granular targeting criteria.
                Automatically score and rank every lead to focus on your best-fit prospects.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-colors"
                >
                  Start Free Trial
                  <ArrowRight />
                </Link>
                <Link
                  href="/pricing"
                  className={`inline-flex items-center gap-2 px-6 py-3 border font-medium rounded-lg transition-colors ${isDark ? "border-white/[0.15] text-white hover:bg-white/[0.05]" : "border-gray-300 text-gray-700 hover:bg-gray-100"}`}
                >
                  View Pricing
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              {/* ICP Score Demo Card - Compact List View */}
              <div className={`rounded-2xl overflow-hidden ${isDark ? "bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] border-white/[0.08]" : "bg-gradient-to-br from-white to-gray-50 border-gray-200"} border-2 shadow-2xl`}>
                {/* Header */}
                <div className={`px-6 py-4 border-b ${isDark ? "border-white/[0.08]" : "border-gray-200"}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>ICP Scores</div>
                      <div className="text-xs text-gray-500">Scored against: Series B SaaS ICP</div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                </div>

                {/* Compact Lead List */}
                <div className="p-6 space-y-3">
                  {[
                    { name: "Sarah Chen", company: "TechCorp", score: 92, delay: 0 },
                    { name: "Michael Ross", company: "ScaleUp", score: 85, delay: 0.1 },
                    { name: "Lisa Park", company: "GrowthCo", score: 68, delay: 0.2 },
                    { name: "James Wilson", company: "CloudBase", score: 55, delay: 0.3 },
                    { name: "Emma Davis", company: "StartupXYZ", score: 42, delay: 0.4 },
                    { name: "David Kim", company: "MediumBiz", score: 28, delay: 0.5 },
                  ].map((contact) => (
                    <motion.div
                      key={contact.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: contact.delay + 0.5 }}
                      className={`flex items-center justify-between p-4 rounded-xl ${isDark ? "bg-white/[0.03] hover:bg-white/[0.05]" : "bg-gray-50 hover:bg-gray-100"} transition-colors`}
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                          contact.score >= 70 ? "bg-gradient-to-br from-green-500 to-green-600" :
                          contact.score >= 30 ? "bg-gradient-to-br from-yellow-500 to-yellow-600" :
                          "bg-gradient-to-br from-red-500 to-red-600"
                        }`}>
                          {contact.score}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className={`text-sm font-semibold truncate ${isDark ? "text-white" : "text-gray-900"}`}>
                            {contact.name}
                          </div>
                          <div className="text-xs text-gray-500 truncate">{contact.company}</div>
                        </div>
                      </div>
                      <div className={`ml-4 px-3 py-1.5 rounded-full text-xs font-bold ${
                        contact.score >= 70 ? "bg-green-500/20 text-green-600" :
                        contact.score >= 30 ? "bg-yellow-500/20 text-yellow-600" :
                        "bg-red-500/20 text-red-600"
                      }`}>
                        {contact.score >= 70 ? "High Match" : contact.score >= 30 ? "Medium" : "Low Match"}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Stats */}
                <div className={`px-6 py-4 border-t ${isDark ? "border-white/[0.08]" : "border-gray-200"}`}>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-green-500">2</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider">High (70+)</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-yellow-500">2</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider">Medium (30-70)</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-red-500">2</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-wider">Low (&lt;30)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-[#3e8aff]/5 rounded-3xl blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className={`py-12 border-y ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"} ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <TechnicalGrid
            columns={3}
            blocks={[
              {
                icon: <Stack />,
                label: "Score Range",
                value: "0-100",
                subValue: "Granular scoring",
                color: "blue",
              },
              {
                icon: <Gear />,
                label: "Targeting Criteria",
                value: "20+",
                subValue: "Customizable dimensions",
                color: "green",
              },
              {
                icon: <Lightning />,
                label: "Integration",
                value: "Native",
                subValue: "Smart Columns & Playbooks",
                highlight: true,
              },
            ]}
          />
        </div>
      </section>

      {/* How Scoring Works */}
      <section className={`py-24 ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
                  <GlowIcon icon={<ChartBar />} size="xs" color="blue" variant="ghost" />
                  How It Works
                </div>
                <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
                  Multi-Dimensional Scoring
                </h2>
                <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} mb-8`}>
                  Each lead receives a comprehensive score based on four key dimensions,
                  with customizable weights for your specific priorities.
                </p>

                {/* Multi-Dimensional Score Breakdown */}
                <div className={`rounded-2xl overflow-hidden ${isDark ? "bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] border-white/[0.08]" : "bg-gradient-to-br from-white to-gray-50 border-gray-200"} border-2 shadow-xl`}>
                  {/* Header */}
                  <div className={`px-6 py-4 border-b ${isDark ? "border-white/[0.08]" : "border-gray-200"}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Score Breakdown</div>
                        <div className="text-xs text-gray-500">Multi-dimensional analysis</div>
                      </div>
                      <div className="text-2xl font-bold text-[#3e8aff]">87/100</div>
                    </div>
                  </div>

                  {/* Score Dimensions */}
                  <div className="p-6 space-y-4">
                    {[
                      { dimension: "Company Fit", score: 92, weight: "40%", color: "from-green-500 to-green-600" },
                      { dimension: "Prospect Fit", score: 85, weight: "30%", color: "from-green-500 to-green-600" },
                      { dimension: "Geographic Fit", score: 78, weight: "20%", color: "from-yellow-500 to-yellow-600" },
                      { dimension: "Behavioral Signals", score: 65, weight: "10%", color: "from-yellow-500 to-yellow-600" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.dimension}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                              {item.dimension}
                            </span>
                            <span className="text-xs text-gray-500">({item.weight})</span>
                          </div>
                          <div className={`text-lg font-bold ${
                            item.score >= 70 ? "text-green-500" :
                            item.score >= 30 ? "text-yellow-500" :
                            "text-red-500"
                          }`}>
                            {item.score}
                          </div>
                        </div>
                        <div className={`h-2 rounded-full overflow-hidden ${isDark ? "bg-white/[0.05]" : "bg-gray-200"}`}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.score}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                            className={`h-full bg-gradient-to-r ${item.color}`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className={`px-6 py-4 border-t ${isDark ? "border-white/[0.08]" : "border-gray-200"}`}>
                    <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-600"}`}>
                      Weighted average of all dimensions
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <VerticalStepper
              steps={[
                {
                  number: "01",
                  title: "Define Your ICP",
                  description:
                    "Create detailed profiles with company, prospect, and geographic criteria.",
                  details: [
                    "Set target industries and company sizes",
                    "Define ideal job titles and seniority levels",
                    "Specify geographic requirements",
                    "Add technology and business model preferences",
                  ],
                },
                {
                  number: "02",
                  title: "Set Scoring Weights",
                  description:
                    "Customize how each dimension impacts the overall score.",
                  details: [
                    "Adjust company fit weight (0-100%)",
                    "Set prospect fit importance",
                    "Configure behavioral signals",
                    "Define minimum score thresholds",
                  ],
                },
                {
                  number: "03",
                  title: "Score Your Leads",
                  description:
                    "Automatically score every lead against your ICP profiles.",
                  details: [
                    "Bulk scoring via Smart Columns",
                    "Real-time scoring in Playbooks",
                    "Multiple ICP profiles supported",
                    "Matching and missing criteria highlighted",
                  ],
                },
                {
                  number: "04",
                  title: "Prioritize & Act",
                  description:
                    "Focus on high-scoring leads and automate follow-up actions.",
                  details: [
                    "Filter by score range (70+, 30-70, <30)",
                    "Route high-scoring leads to priority queues",
                    "Trigger automated sequences based on score",
                    "Track conversion by score threshold",
                  ],
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Targeting Criteria */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Granular Targeting Criteria
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Define your ideal customer with precision using 20+ targeting dimensions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Targeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`relative p-8 rounded-2xl ${isDark ? "bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] border-white/[0.08]" : "bg-gradient-to-br from-white to-gray-50 border-gray-200"} border-2 shadow-xl group overflow-hidden`}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon with glow */}
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <Buildings className="text-white" width={32} height={32} />
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>Company Targeting</h3>

                <div className="space-y-2.5">
                  {companyTargeting.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className={`flex items-start gap-3 p-3 rounded-xl ${isDark ? "bg-white/[0.03]" : "bg-blue-50/50"} group-hover:bg-blue-500/5 transition-colors`}
                    >
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="text-blue-500" width={12} height={12} />
                      </div>
                      <div>
                        <div className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{item.label}</div>
                        <div className="text-xs text-gray-500 leading-relaxed">{item.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Prospect Targeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative p-8 rounded-2xl ${isDark ? "bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] border-white/[0.08]" : "bg-gradient-to-br from-white to-gray-50 border-gray-200"} border-2 shadow-xl group overflow-hidden`}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon with glow */}
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Users className="text-white" width={32} height={32} />
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>Prospect Targeting</h3>

                <div className="space-y-2.5">
                  {prospectTargeting.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className={`flex items-start gap-3 p-3 rounded-xl ${isDark ? "bg-white/[0.03]" : "bg-purple-50/50"} group-hover:bg-purple-500/5 transition-colors`}
                    >
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="text-purple-500" width={12} height={12} />
                      </div>
                      <div>
                        <div className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{item.label}</div>
                        <div className="text-xs text-gray-500 leading-relaxed">{item.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Geographic Targeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -8 }}
              className={`relative p-8 rounded-2xl ${isDark ? "bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] border-white/[0.08]" : "bg-gradient-to-br from-white to-gray-50 border-gray-200"} border-2 shadow-xl group overflow-hidden`}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon with glow */}
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg">
                    <Globe className="text-white" width={32} height={32} />
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>Geographic Targeting</h3>

                <div className="space-y-2.5">
                  {geoTargeting.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className={`flex items-start gap-3 p-3 rounded-xl ${isDark ? "bg-white/[0.03]" : "bg-teal-50/50"} group-hover:bg-teal-500/5 transition-colors`}
                    >
                      <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="text-teal-500" width={12} height={12} />
                      </div>
                      <div>
                        <div className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{item.label}</div>
                        <div className="text-xs text-gray-500 leading-relaxed">{item.description}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration with Platform */}
      <section className={`py-24 ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Native Platform Integration
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              ICP Scoring works seamlessly with other Cleanlist features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <GlowIcon icon={<Sparkle />} size="lg" color="blue" variant="glow" />
                <div>
                  <h3 className={`text-xl md:text-2xl lg:text-3xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Smart Columns</h3>
                  <p className="text-sm text-gray-500">ICP Fit Analysis column</p>
                </div>
              </div>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"} mb-4`}>
                Add an ICP Fit Analysis Smart Column to any lead list. Automatically
                score all leads against your selected ICP profile with detailed
                breakdowns of matching and missing criteria.
              </p>
              <Link
                href="/product/smart-columns"
                className="inline-flex items-center gap-1 text-sm text-[#3e8aff] hover:underline"
              >
                Learn about Smart Columns <ArrowRight />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <GlowIcon icon={<Stack />} size="lg" color="blue" variant="glow" />
                <div>
                  <h3 className={`text-xl md:text-2xl lg:text-3xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Playbook Builder</h3>
                  <p className="text-sm text-gray-500">ICP Scoring step</p>
                </div>
              </div>
              <p className={`${isDark ? "text-gray-400" : "text-gray-600"} mb-4`}>
                Include ICP Scoring as a step in your automated workflows. Score leads
                as they flow through your pipeline and route them based on fit level
                to different sequences or CRM stages.
              </p>
              <Link
                href="/product/playbook-builder"
                className="inline-flex items-center gap-1 text-sm text-[#3e8aff] hover:underline"
              >
                Learn about Playbooks <ArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
}
