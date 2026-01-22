"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Crosshair,
  Clock,
  Check,
  TrendUp,
  Envelope,
  Phone,
  CalendarBlank,
  ChartBar,
  Lightning,
  ChatCircle,
} from "@/components/icons";
import { TechnicalGrid, GlowCard, GlowIcon } from "@/components/ui";
import { useTheme } from "@/context/ThemeContext";

export default function SalesTeamsPage() {
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
              For Sales Teams
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`text-5xl md:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} leading-[1.1] mb-6`}
            >
              Close More Deals With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                Verified Data
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} mb-8`}
            >
              Stop wasting time on bad data. Get verified emails and direct dials for every
              prospect. Spend more time selling, less time researching.
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
                className={`inline-flex items-center gap-2 px-6 py-3 border ${isDark ? "border-white/[0.15] text-white hover:bg-white/[0.05]" : "border-gray-300 text-gray-700 hover:bg-gray-100"} font-medium rounded-lg transition-colors`}
              >
                View Pricing
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
                icon: <Clock />,
                label: "Research Time",
                value: "-50%",
                subValue: "Less prospecting",
                color: "green",
              },
              {
                icon: <ChatCircle />,
                label: "Conversations",
                value: "3x",
                subValue: "More connections",
                color: "blue",
              },
              {
                icon: <Envelope />,
                label: "Deliverability",
                value: "98%",
                subValue: "Email success rate",
                color: "blue",
              },
              {
                icon: <TrendUp />,
                label: "Pipeline",
                value: "+40%",
                subValue: "More opportunities",
                highlight: true,
              },
            ]}
          />
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Sound Familiar?
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Sales teams waste hours every week dealing with bad data.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                problem: "Emails bounce, hurting sender reputation",
                solution: "98% accuracy guarantee",
              },
              {
                problem: "Hours spent researching each prospect",
                solution: "Multi-provider instant enrichment",
              },
              {
                problem: "Can't get past the gatekeeper",
                solution: "Direct dials and mobile numbers",
              },
              {
                problem: "Outdated CRM data",
                solution: "Automated data refresh",
              },
              {
                problem: "Missing decision-maker contacts",
                solution: "Complete org chart mapping",
              },
              {
                problem: "Inconsistent data across tools",
                solution: "One source of truth",
              },
            ].map((item, index) => (
              <motion.div
                key={item.problem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}
              >
                <div className="text-red-500/60 text-sm mb-3 line-through">{item.problem}</div>
                <div className="flex items-center gap-2 text-green-500">
                  <Check />
                  {item.solution}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className={`py-24 ${isDark ? "bg-[#030303]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Your New Prospecting Workflow
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Build Your List",
                description: "Export from Sales Navigator or upload a CSV of target accounts.",
                icon: <Crosshair />,
              },
              {
                step: "2",
                title: "Enrich & Verify",
                description: "We find verified emails, phones, and company data automatically.",
                icon: <Lightning />,
              },
              {
                step: "3",
                title: "Sync to CRM",
                description: "Push enriched contacts directly to Salesforce, HubSpot, or Outreach.",
                icon: <ChartBar />,
              },
              {
                step: "4",
                title: "Start Selling",
                description: "Focus on conversations, not research. Close more deals.",
                icon: <TrendUp />,
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className={`p-6 rounded-xl ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"} h-full`}>
                  <GlowIcon icon={item.icon} size="lg" color="blue" variant="glow" className="mb-4" />
                  <div className="text-sm text-[#3e8aff] mb-2">Step {item.step}</div>
                  <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>{item.title}</h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-white/[0.1]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features for Sales */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Built for Sales Teams
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Envelope />,
                title: "Verified Work Emails",
                description: "Validated emails with 98% accuracy guarantee.",
              },
              {
                icon: <Phone />,
                title: "Direct Phone Numbers",
                description: "Mobile and direct dial numbers to bypass gatekeepers.",
              },
              {
                icon: <Crosshair />,
                title: "Sales Nav Integration",
                description: "Export and enrich leads directly from LinkedIn Sales Navigator.",
              },
              {
                icon: <CalendarBlank />,
                title: "Outreach Sync",
                description: "Push contacts to Outreach, Salesloft, or Apollo sequences.",
              },
              {
                icon: <ChartBar />,
                title: "CRM Enrichment",
                description: "Keep Salesforce or HubSpot records complete and up-to-date.",
              },
              {
                icon: <Users />,
                title: "Team Workspaces",
                description: "Shared credits and centralized admin for your team.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard className="h-full p-6">
                  <GlowIcon icon={feature.icon} size="lg" color="blue" variant="glow" className="mb-4" />
                  <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>{feature.title}</h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{feature.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
