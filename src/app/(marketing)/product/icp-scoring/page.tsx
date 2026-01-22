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
                className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold ${isDark ? "text-white" : "text-gray-900"} leading-[1.1] mb-6`}
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
              {/* ICP Score Demo Card */}
              <div className={`rounded-2xl overflow-hidden ${isDark ? "bg-[#0a0a0a]" : "bg-white"} border ${isDark ? "border-white/[0.08]" : "border-gray-200"} shadow-2xl`}>
                {/* Browser Chrome */}
                <div className={`flex items-center gap-2 px-4 py-3 border-b ${isDark ? "border-white/[0.08] bg-[#0d0d0d]" : "border-gray-100 bg-gray-50"}`}>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className={`flex-1 mx-4 px-3 py-1 rounded-md text-xs ${isDark ? "bg-white/[0.05] text-gray-500" : "bg-gray-100 text-gray-400"}`}>
                    app.cleanlist.ai/icp-scoring
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>Live</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Table Header */}
                  <div className={`grid grid-cols-[1.5fr,1fr,80px,100px] gap-3 px-3 py-2 text-xs font-semibold border-b ${isDark ? "border-white/[0.08] text-gray-400" : "border-gray-200 text-gray-500"}`}>
                    <span>Contact</span>
                    <span>Company</span>
                    <span className="text-center">ICP Score</span>
                    <span className="text-right">Fit Level</span>
                  </div>

                  {/* Contact Rows with Animated Scores */}
                  <div className="divide-y divide-white/[0.05]">
                    {[
                      { name: "Sarah Chen", title: "VP Sales", company: "TechCorp", size: "500-1000", score: 94, level: "Perfect", delay: 0 },
                      { name: "Michael Ross", title: "CRO", company: "ScaleUp Inc", size: "200-500", score: 87, level: "Perfect", delay: 0.15 },
                      { name: "Lisa Park", title: "Head of BD", company: "GrowthCo", size: "50-200", score: 72, level: "Good", delay: 0.3 },
                      { name: "James Wilson", title: "Sales Director", company: "CloudBase", size: "1000+", score: 65, level: "Good", delay: 0.45 },
                      { name: "Emma Davis", title: "Account Exec", company: "StartupXYZ", size: "10-50", score: 45, level: "Fair", delay: 0.6 },
                    ].map((contact) => (
                      <motion.div
                        key={contact.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: contact.delay + 0.5 }}
                        className={`grid grid-cols-[1.5fr,1fr,80px,100px] gap-3 items-center px-3 py-3 ${isDark ? "hover:bg-white/[0.02]" : "hover:bg-gray-50"}`}
                      >
                        <div>
                          <div className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{contact.name}</div>
                          <div className="text-xs text-gray-500">{contact.title}</div>
                        </div>
                        <div>
                          <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>{contact.company}</div>
                          <div className="text-xs text-gray-500">{contact.size}</div>
                        </div>
                        <div className="text-center">
                          <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: contact.delay + 0.8, type: "spring", stiffness: 200 }}
                            className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${
                              contact.score >= 80 ? "bg-[#3e8aff]/20" : contact.score >= 60 ? "bg-[#60a5fa]/15" : "bg-gray-500/15"
                            }`}
                          >
                            <span className={`text-sm font-bold ${
                              contact.score >= 80 ? "text-[#3e8aff]" : contact.score >= 60 ? "text-[#60a5fa]" : "text-gray-400"
                            }`}>
                              {contact.score}
                            </span>
                          </motion.div>
                        </div>
                        <div className="text-right">
                          <motion.span
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: contact.delay + 1 }}
                            className={`inline-flex px-2.5 py-1 text-xs font-semibold rounded-full ${
                              contact.level === "Perfect"
                                ? "bg-[#3e8aff]/20 text-[#3e8aff]"
                                : contact.level === "Good"
                                ? "bg-[#60a5fa]/20 text-[#60a5fa]"
                                : "bg-gray-500/20 text-gray-400"
                            }`}
                          >
                            {contact.level}
                          </motion.span>
                        </div>
                      </motion.div>
                    ))}
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
            columns={4}
            blocks={[
              {
                icon: <Crosshair />,
                label: "Fit Levels",
                value: "4",
                subValue: "Perfect, Good, Fair, Poor",
                color: "blue",
              },
              {
                icon: <Stack />,
                label: "Score Components",
                value: "4",
                subValue: "Company, Prospect, Behavior, Geo",
                color: "blue",
              },
              {
                icon: <Gear />,
                label: "Targeting Criteria",
                value: "20+",
                subValue: "Customizable weights",
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

                {/* Leads List with ICP Scores */}
                <div className={`rounded-xl overflow-hidden ${isDark ? "bg-[#0a0a0a]" : "bg-white"} border ${isDark ? "border-white/[0.08]" : "border-gray-200"} shadow-lg`}>
                  {/* Header */}
                  <div className={`px-4 py-3 border-b ${isDark ? "border-white/[0.08] bg-[#080808]" : "border-gray-100 bg-gray-50"}`}>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Lead List</span>
                      <span className="text-xs text-[#3e8aff]">ICP Score Column</span>
                    </div>
                  </div>

                  {/* Table Header */}
                  <div className={`grid grid-cols-[1fr,80px,100px] gap-2 px-4 py-2 text-xs font-medium border-b ${isDark ? "border-white/[0.05] text-gray-500" : "border-gray-100 text-gray-500"}`}>
                    <span>Name</span>
                    <span className="text-center">ICP Score</span>
                    <span className="text-right">Fit Level</span>
                  </div>

                  {/* Lead Rows */}
                  <div className="divide-y divide-white/[0.05]">
                    {[
                      { name: "Sarah Chen", company: "TechCorp", score: 94, level: "Perfect" },
                      { name: "Mike Johnson", company: "ScaleUp Inc", score: 87, level: "Perfect" },
                      { name: "Lisa Park", company: "GrowthCo", score: 72, level: "Good" },
                      { name: "David Kim", company: "StartupXYZ", score: 65, level: "Good" },
                      { name: "Emma Wilson", company: "MediumBiz", score: 48, level: "Fair" },
                    ].map((lead, i) => (
                      <motion.div
                        key={lead.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`grid grid-cols-[1fr,80px,100px] gap-2 items-center px-4 py-3 ${isDark ? "hover:bg-white/[0.02]" : "hover:bg-gray-50"}`}
                      >
                        <div>
                          <div className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{lead.name}</div>
                          <div className="text-xs text-gray-500">{lead.company}</div>
                        </div>
                        <div className="text-center">
                          <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.3 }}
                            className="text-lg font-bold text-[#3e8aff]"
                          >
                            {lead.score}
                          </motion.span>
                        </div>
                        <div className="text-right">
                          <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.4, type: "spring" }}
                            className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${
                              lead.level === "Perfect"
                                ? "bg-[#3e8aff]/20 text-[#3e8aff]"
                                : lead.level === "Good"
                                ? "bg-[#60a5fa]/20 text-[#60a5fa]"
                                : "bg-gray-500/20 text-gray-400"
                            }`}
                          >
                            {lead.level}
                          </motion.span>
                        </div>
                      </motion.div>
                    ))}
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
                    "Focus on perfect-fit leads and automate follow-up actions.",
                  details: [
                    "Filter by fit level (Perfect/Good/Fair/Poor)",
                    "Route high-fit leads to priority queues",
                    "Trigger automated sequences",
                    "Track conversion by fit level",
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
              className={`p-6 rounded-xl ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}
            >
              <GlowIcon icon={<Buildings />} size="lg" color="blue" variant="glow" className="mb-4" />
              <h3 className={`text-xl md:text-2xl lg:text-3xl font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>Company Targeting</h3>
              <div className="space-y-3">
                {companyTargeting.map((item) => (
                  <div key={item.label} className="flex items-start gap-2">
                    <Check className="text-[#3e8aff] mt-1 shrink-0" />
                    <div>
                      <div className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{item.label}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Prospect Targeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`p-6 rounded-xl ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}
            >
              <GlowIcon icon={<Users />} size="lg" color="blue" variant="glow" className="mb-4" />
              <h3 className={`text-xl md:text-2xl lg:text-3xl font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>Prospect Targeting</h3>
              <div className="space-y-3">
                {prospectTargeting.map((item) => (
                  <div key={item.label} className="flex items-start gap-2">
                    <Check className="text-[#3e8aff] mt-1 shrink-0" />
                    <div>
                      <div className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{item.label}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Geographic Targeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`p-6 rounded-xl ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}
            >
              <GlowIcon icon={<Globe />} size="lg" color="blue" variant="glow" className="mb-4" />
              <h3 className={`text-xl md:text-2xl lg:text-3xl font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>Geographic Targeting</h3>
              <div className="space-y-3">
                {geoTargeting.map((item) => (
                  <div key={item.label} className="flex items-start gap-2">
                    <Check className="text-[#3e8aff] mt-1 shrink-0" />
                    <div>
                      <div className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{item.label}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fit Levels */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>Four Fit Levels</h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Leads are automatically classified based on their overall ICP score.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                level: "Perfect Fit",
                range: "80-100%",
                score: 92,
                description: "Ideal prospects matching all key criteria",
                action: "Prioritize for immediate outreach",
              },
              {
                level: "Good Fit",
                range: "60-79%",
                score: 70,
                description: "Strong matches with minor gaps",
                action: "Include in primary sequences",
              },
              {
                level: "Fair Fit",
                range: "40-59%",
                score: 50,
                description: "Partial matches worth nurturing",
                action: "Add to nurture campaigns",
              },
              {
                level: "Poor Fit",
                range: "0-39%",
                score: 25,
                description: "Low alignment with your ICP",
                action: "Deprioritize or exclude",
              },
            ].map((fit, index) => (
              <motion.div
                key={fit.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border ${isDark ? "bg-[#0a0a0a] border-white/[0.08]" : "bg-white border-gray-200"} hover:border-[#3e8aff]/30 transition-colors`}
              >
                {/* Score Circle */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  fit.score >= 80
                    ? "bg-[#3e8aff]/20"
                    : fit.score >= 60
                    ? "bg-[#3e8aff]/15"
                    : fit.score >= 40
                    ? "bg-[#3e8aff]/10"
                    : "bg-gray-500/10"
                }`}>
                  <span className={`text-xl font-bold ${
                    fit.score >= 60 ? "text-[#3e8aff]" : "text-gray-400"
                  }`}>
                    {fit.score}
                  </span>
                </div>
                <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                  fit.score >= 80
                    ? "bg-[#3e8aff]/20 text-[#3e8aff]"
                    : fit.score >= 60
                    ? "bg-[#60a5fa]/20 text-[#60a5fa]"
                    : fit.score >= 40
                    ? "bg-gray-500/20 text-gray-400"
                    : "bg-gray-500/15 text-gray-500"
                }`}>
                  {fit.range}
                </div>
                <h3 className={`text-xl md:text-2xl lg:text-3xl font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>{fit.level}</h3>
                <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"} mb-4`}>{fit.description}</p>
                <p className="text-xs text-gray-500">{fit.action}</p>
              </motion.div>
            ))}
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
