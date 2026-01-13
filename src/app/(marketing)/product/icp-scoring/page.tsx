"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import {
  ArrowRight,
  Target,
  Building,
  Users,
  Globe,
  BarChart3,
  Check,
  Sparkles,
  Settings,
  TrendingUp,
  Award,
  Briefcase,
  MapPin,
  Layers,
  Zap,
} from "lucide-react";
import { DashboardMockup, VerticalStepper, TechnicalGrid, GlowIcon } from "@/components/ui";
import ICPScoringDemo from "@/components/ICPScoringDemo";

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
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 mb-6"
              >
                <GlowIcon icon={<Target />} size="xs" color="purple" variant="ghost" />
                ICP Scoring
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`text-5xl md:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} leading-[1.1] mb-6`}
              >
                Score Every Lead Against Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-500/90 transition-colors"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
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
            >
              <DashboardMockup variant="default" />
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
                icon: <Target className="w-5 h-5" />,
                label: "Fit Levels",
                value: "4",
                subValue: "Perfect, Good, Fair, Poor",
                color: "purple",
              },
              {
                icon: <Layers className="w-5 h-5" />,
                label: "Score Components",
                value: "4",
                subValue: "Company, Prospect, Behavior, Geo",
                color: "blue",
              },
              {
                icon: <Settings className="w-5 h-5" />,
                label: "Targeting Criteria",
                value: "20+",
                subValue: "Customizable weights",
                color: "green",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                label: "Integration",
                value: "Native",
                subValue: "Smart Columns & Playbooks",
                highlight: true,
              },
            ]}
          />
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Try It Yourself
            </h2>
            <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Adjust the criteria weights and see how leads are scored in real-time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <ICPScoringDemo />
          </motion.div>
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
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 mb-4">
                  <GlowIcon icon={<BarChart3 />} size="xs" color="purple" variant="ghost" />
                  How It Works
                </div>
                <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
                  Multi-Dimensional Scoring
                </h2>
                <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} mb-8`}>
                  Each lead receives a comprehensive score based on four key dimensions,
                  with customizable weights for your specific priorities.
                </p>

                {/* Score Output Example */}
                <div className={`p-6 rounded-xl ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Example Lead Score</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                      Perfect Fit
                    </span>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Overall Score", value: 92, color: "green" },
                      { label: "Company Fit", value: 95, color: "purple" },
                      { label: "Prospect Fit", value: 88, color: "blue" },
                      { label: "Behavioral Fit", value: 90, color: "yellow" },
                      { label: "Geographic Fit", value: 100, color: "green" },
                    ].map((score) => (
                      <div key={score.label}>
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className={isDark ? "text-gray-300" : "text-gray-700"}>{score.label}</span>
                          <span className={`text-${score.color}-400 font-medium`}>
                            {score.value}%
                          </span>
                        </div>
                        <div className="h-2 bg-white/[0.05] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${score.value}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className={`h-full rounded-full ${
                              score.color === "green"
                                ? "bg-green-500"
                                : score.color === "purple"
                                ? "bg-purple-500"
                                : score.color === "blue"
                                ? "bg-blue-500"
                                : "bg-yellow-500"
                            }`}
                          />
                        </div>
                      </div>
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
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
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
              <GlowIcon icon={<Building />} size="lg" color="purple" variant="glow" className="mb-4" />
              <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>Company Targeting</h3>
              <div className="space-y-3">
                {companyTargeting.map((item) => (
                  <div key={item.label} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-purple-400 mt-1 shrink-0" />
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
              <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>Prospect Targeting</h3>
              <div className="space-y-3">
                {prospectTargeting.map((item) => (
                  <div key={item.label} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
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
              <GlowIcon icon={<Globe />} size="lg" color="green" variant="glow" className="mb-4" />
              <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>Geographic Targeting</h3>
              <div className="space-y-3">
                {geoTargeting.map((item) => (
                  <div key={item.label} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-400 mt-1 shrink-0" />
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
            <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>Four Fit Levels</h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Leads are automatically classified based on their overall ICP score.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                level: "Perfect Fit",
                range: "85-100%",
                color: "green",
                description: "Ideal prospects matching all key criteria",
                action: "Prioritize for immediate outreach",
              },
              {
                level: "Good Fit",
                range: "70-84%",
                color: "blue",
                description: "Strong matches with minor gaps",
                action: "Include in primary sequences",
              },
              {
                level: "Fair Fit",
                range: "50-69%",
                color: "yellow",
                description: "Partial matches worth nurturing",
                action: "Add to nurture campaigns",
              },
              {
                level: "Poor Fit",
                range: "0-49%",
                color: "red",
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
                className={`p-6 rounded-xl border ${
                  fit.color === "green"
                    ? "bg-green-500/5 border-green-500/20"
                    : fit.color === "blue"
                    ? "bg-blue-500/5 border-blue-500/20"
                    : fit.color === "yellow"
                    ? "bg-yellow-500/5 border-yellow-500/20"
                    : "bg-red-500/5 border-red-500/20"
                }`}
              >
                <div
                  className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                    fit.color === "green"
                      ? "bg-green-500/20 text-green-400"
                      : fit.color === "blue"
                      ? "bg-blue-500/20 text-blue-400"
                      : fit.color === "yellow"
                      ? "bg-yellow-500/20 text-yellow-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {fit.range}
                </div>
                <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>{fit.level}</h3>
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
            <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
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
                <GlowIcon icon={<Sparkles />} size="lg" color="blue" variant="glow" />
                <div>
                  <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Smart Columns</h3>
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
                Learn about Smart Columns <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <GlowIcon icon={<Layers />} size="lg" color="blue" variant="glow" />
                <div>
                  <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Playbook Builder</h3>
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
                Learn about Playbooks <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
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
              Stop Wasting Time on Bad-Fit Leads
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} mb-8 max-w-2xl mx-auto`}>
              Define your ICP once, score every lead automatically. Focus your team
              on prospects that actually convert.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-500/90 transition-colors text-lg"
            >
              Start Scoring Leads
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
