"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  Users,
  Shield,
  Globe,
  Award,
  Heart,
  Target,
  Zap,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const values = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Customer Obsession",
    description:
      "Every feature we build starts with a customer problem. We listen, learn, and deliver solutions that actually work.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Speed & Quality",
    description:
      "We ship fast without sacrificing reliability. Our infrastructure processes millions of records daily with 99.9% uptime.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Trust & Transparency",
    description:
      "Your data security is paramount. We're SOC 2 compliant and GDPR-ready, with full transparency on how we handle your data.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Empower, Don't Replace",
    description:
      "We build tools that make your team more effective, not tools that try to replace them. Humans plus data, not humans versus data.",
  },
];

const stats = [
  { value: "2021", label: "Founded" },
  { value: "50+", label: "Team Members" },
  { value: "500+", label: "Customers" },
  { value: "10M+", label: "Records/Month" },
];

const team = [
  { name: "Alex Chen", role: "CEO & Co-founder", image: "A" },
  { name: "Sarah Kim", role: "CTO & Co-founder", image: "S" },
  { name: "Marcus Johnson", role: "VP Engineering", image: "M" },
  { name: "Emily Rodriguez", role: "VP Sales", image: "E" },
  { name: "David Park", role: "VP Product", image: "D" },
  { name: "Lisa Thompson", role: "VP Customer Success", image: "L" },
];

export default function AboutUsPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3e8aff]/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-6"
            >
              <Database className="w-4 h-4" />
              About Cleanlist
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`text-5xl md:text-6xl font-bold leading-[1.1] mb-6 ${isDark ? "text-white dark:text-white" : "text-gray-900"}`}
            >
              We&apos;re on a Mission to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                Fix B2B Data
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 dark:text-gray-400"
            >
              GTM teams waste 30% of their time on bad data. Emails bounce, phones don&apos;t
              connect, and CRMs fill with duplicates. We&apos;re building the data platform
              that fixes this—for good.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={`py-12 border-y transition-colors ${isDark ? "border-white/[0.08] bg-[#080808]" : "border-black/[0.08] bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#3e8aff]">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-4xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>Our Story</h2>
              <div className={`space-y-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                <p>
                  We started Cleanlist because we lived the problem. As sales and RevOps
                  leaders at fast-growing startups, we spent countless hours cleaning
                  spreadsheets, deduping CRMs, and apologizing for bounced emails.
                </p>
                <p>
                  We tried every tool on the market. Single-source enrichment providers
                  had gaps. Verification tools caught bounces but didn&apos;t prevent them.
                  CRM add-ons were slow and clunky.
                </p>
                <p>
                  So we built Cleanlist—a unified data platform that combines 15+ data
                  sources, triple-layer email verification, and AI-powered normalization
                  into one seamless workflow.
                </p>
                <p>
                  Today, over 500 teams trust Cleanlist to power their GTM operations.
                  We process 10 million records per month with 99% accuracy.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: <Users className="w-8 h-8" />, label: "Customer-First" },
                { icon: <Globe className="w-8 h-8" />, label: "Global Scale" },
                { icon: <Shield className="w-8 h-8" />, label: "Enterprise Security" },
                { icon: <Award className="w-8 h-8" />, label: "Industry Leading" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`p-6 rounded-xl text-center ${isDark ? "bg-[#0a0a0a] border border-white/[0.08]" : "bg-white/70 border border-black/[0.08]"}`}
                >
                  <div className="w-16 h-16 rounded-xl bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff] mx-auto mb-3">
                    {item.icon}
                  </div>
                  <div className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`py-24 ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Our Values</h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              The principles that guide how we build product and serve customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl ${isDark ? "bg-[#0a0a0a] border border-white/[0.08]" : "bg-white/70 border border-black/[0.08]"}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff] mb-4">
                  {value.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{value.title}</h3>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Leadership Team</h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Experienced operators from Salesforce, HubSpot, and high-growth startups.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl text-center ${isDark ? "bg-[#0a0a0a] border border-white/[0.08]" : "bg-white/70 border border-black/[0.08]"}`}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3e8aff]/20 to-[#3e8aff]/5 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#3e8aff]">{member.image}</span>
                </div>
                <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors / Backed By */}
      <section className={`py-24 ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Backed By</h2>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-12">
            {["Sequoia", "a16z", "First Round", "Y Combinator", "Accel"].map(
              (investor) => (
                <div
                  key={investor}
                  className="text-2xl font-semibold text-gray-600 hover:text-gray-400 dark:text-gray-400 transition-colors"
                >
                  {investor}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#3e8aff]/10 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
              Join Our Mission
            </h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              We&apos;re hiring across engineering, sales, and customer success. Come build
              the future of B2B data with us.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#3e8aff] text-white dark:text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-colors text-lg"
              >
                View Open Roles
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className={`inline-flex items-center gap-2 px-8 py-4 border font-medium rounded-lg transition-colors text-lg ${isDark ? "border-white/[0.15] text-white hover:bg-white/[0.05]" : "border-gray-300 text-gray-700 hover:bg-gray-100"}`}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
