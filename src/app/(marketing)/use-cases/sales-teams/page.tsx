"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Target,
  Clock,
  Check,
  TrendingUp,
  Mail,
  Phone,
  Calendar,
  BarChart3,
  Zap,
  MessageSquare,
} from "lucide-react";
import { TechnicalGrid, GlowCard } from "@/components/ui";

export default function SalesTeamsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3e8aff]/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#3e8aff]/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-6"
            >
              <Users className="w-4 h-4" />
              For Sales Teams
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6"
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
              className="text-xl text-gray-400 mb-8"
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
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.15] text-white font-medium rounded-lg hover:bg-white/[0.05] transition-colors"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/[0.08] bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <TechnicalGrid
            columns={4}
            blocks={[
              {
                icon: <Clock className="w-5 h-5" />,
                label: "Research Time",
                value: "-50%",
                subValue: "Less prospecting",
                color: "green",
              },
              {
                icon: <MessageSquare className="w-5 h-5" />,
                label: "Conversations",
                value: "3x",
                subValue: "More connections",
                color: "blue",
              },
              {
                icon: <Mail className="w-5 h-5" />,
                label: "Deliverability",
                value: "98%",
                subValue: "Email success rate",
                color: "purple",
              },
              {
                icon: <TrendingUp className="w-5 h-5" />,
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
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sound Familiar?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Sales teams waste hours every week dealing with bad data.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                problem: "Emails bounce, hurting sender reputation",
                solution: "99% verified deliverability",
              },
              {
                problem: "Hours spent researching each prospect",
                solution: "Instant enrichment from 15+ sources",
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
                className="p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08]"
              >
                <div className="text-red-500/60 text-sm mb-3 line-through">{item.problem}</div>
                <div className="flex items-center gap-2 text-green-500">
                  <Check className="w-5 h-5" />
                  {item.solution}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your New Prospecting Workflow
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Build Your List",
                description: "Export from Sales Navigator or upload a CSV of target accounts.",
                icon: <Target className="w-6 h-6" />,
              },
              {
                step: "2",
                title: "Enrich & Verify",
                description: "We find verified emails, phones, and company data automatically.",
                icon: <Zap className="w-6 h-6" />,
              },
              {
                step: "3",
                title: "Sync to CRM",
                description: "Push enriched contacts directly to Salesforce, HubSpot, or Outreach.",
                icon: <BarChart3 className="w-6 h-6" />,
              },
              {
                step: "4",
                title: "Start Selling",
                description: "Focus on conversations, not research. Close more deals.",
                icon: <TrendingUp className="w-6 h-6" />,
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
                <div className="p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08] h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff] mb-4">
                    {item.icon}
                  </div>
                  <div className="text-sm text-[#3e8aff] mb-2">Step {item.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
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
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Built for Sales Teams
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Verified Work Emails",
                description: "Triple-verified emails with 99% deliverability guarantee.",
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Direct Phone Numbers",
                description: "Mobile and direct dial numbers to bypass gatekeepers.",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Sales Nav Integration",
                description: "Export and enrich leads directly from LinkedIn Sales Navigator.",
              },
              {
                icon: <Calendar className="w-6 h-6" />,
                title: "Outreach Sync",
                description: "Push contacts to Outreach, Salesloft, or Apollo sequences.",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "CRM Enrichment",
                description: "Keep Salesforce or HubSpot records complete and up-to-date.",
              },
              {
                icon: <Users className="w-6 h-6" />,
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
                  <div className="w-12 h-12 rounded-xl bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff] mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </GlowCard>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Supercharge Your Sales?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get 100 free credits and see why 500+ sales teams trust Cleanlist.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-colors text-lg"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
