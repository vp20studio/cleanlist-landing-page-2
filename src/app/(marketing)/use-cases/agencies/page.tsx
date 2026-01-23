"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Buildings,
  Users,
  CurrencyDollar,
  Check,
  ChartBar,
  Shield,
  Lightning,
  Gear,
  CreditCard,
  File,
  Globe,
  Lock,
  StackSimple,
} from "@/components/icons";
import { TechnicalGrid, GlowCard, GlowIcon } from "@/components/ui";
import { useTheme } from "@/context/ThemeContext";

export default function MarketingTeamsPage() {
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
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-6"
            >
              <GlowIcon icon={<Users />} size="xs" color="blue" variant="ghost" />
              For Marketing Teams
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`text-5xl md:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} leading-[1.1] mb-6`}
            >
              Data Operations{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                at Marketing Scale
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} mb-8`}
            >
              Clean, enrich, and verify your data at scale. Team workspaces, automated workflows, and seamless CRM sync built for modern marketing teams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="https://calendly.com/cleanlist/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-colors"
              >
                Book a Demo
                <ArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={`py-12 border-y ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"} ${isDark ? "bg-[#030303]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <TechnicalGrid
            columns={4}
            blocks={[
              {
                icon: <ChartBar />,
                label: "Data Accuracy",
                value: "95%+",
                subValue: "Verified contacts",
                color: "blue",
              },
              {
                icon: <Users />,
                label: "Team Members",
                value: "Unlimited",
                subValue: "Seats included",
                color: "blue",
              },
              {
                icon: <Lightning />,
                label: "Processing",
                value: "10M+",
                subValue: "Records/month",
                color: "blue",
              },
              {
                icon: <StackSimple />,
                label: "Automation",
                value: "Real-time",
                subValue: "CRM sync",
                highlight: true,
              },
            ]}
          />
        </div>
      </section>

      {/* Marketing Team Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Built for Marketing Teams
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Everything you need to manage data operations at scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users />,
                title: "Team Collaboration",
                description:
                  "Unlimited team members, role-based permissions, and shared workspaces for seamless collaboration.",
              },
              {
                icon: <StackSimple />,
                title: "Automated Workflows",
                description:
                  "Set up automated data enrichment, verification, and sync workflows that run on autopilot.",
              },
              {
                icon: <Lightning />,
                title: "Real-Time Sync",
                description:
                  "Bi-directional sync with your CRM. Changes flow automatically between systems in real-time.",
              },
              {
                icon: <ChartBar />,
                title: "Campaign Analytics",
                description:
                  "Track data quality metrics, enrichment coverage, and ROI across all your campaigns.",
              },
              {
                icon: <Shield />,
                title: "Data Governance",
                description:
                  "Built-in deduplication, validation rules, and compliance controls for clean data.",
              },
              {
                icon: <Globe />,
                title: "Scale Infinitely",
                description:
                  "Process millions of records per month. Built to handle enterprise-scale data operations.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard className="h-full p-6" glowColor="#3e8aff">
                  <GlowIcon icon={feature.icon} size="lg" color="blue" variant="glow" className="mb-4" />
                  <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>{feature.title}</h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{feature.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Marketing Teams Use Cleanlist */}
      <section className={`py-24 ${isDark ? "bg-[#030303]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Marketing Team Use Cases
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Demand Generation",
                description:
                  "Build and maintain high-quality prospect lists for multi-channel campaigns with automated enrichment.",
                services: [
                  "Prospect list building",
                  "Contact enrichment",
                  "Email verification",
                  "Campaign segmentation",
                ],
              },
              {
                title: "Account-Based Marketing",
                description:
                  "Identify and enrich target accounts with decision-maker contacts and firmographic data.",
                services: [
                  "Account mapping",
                  "Stakeholder discovery",
                  "Intent signals",
                  "Personalization data",
                ],
              },
              {
                title: "Database Management",
                description:
                  "Clean and maintain your CRM with automated deduplication, standardization, and enrichment.",
                services: [
                  "CRM cleanup",
                  "Deduplication",
                  "Data standardization",
                  "Quality scoring",
                ],
              },
              {
                title: "Email Marketing",
                description:
                  "Maximize deliverability and engagement with verified emails and enriched contact profiles.",
                services: [
                  "Email verification",
                  "List hygiene",
                  "Bounce prevention",
                  "Engagement scoring",
                ],
              },
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl ${isDark ? "bg-[#030303]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}
              >
                <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>{useCase.title}</h3>
                <p className={`${isDark ? "text-gray-400" : "text-gray-600"} mb-4`}>{useCase.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {useCase.services.map((service) => (
                    <div key={service} className="flex items-center gap-2 text-sm text-gray-500">
                      <Check className="text-[#3e8aff]" />
                      {service}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


</>
  );
}
