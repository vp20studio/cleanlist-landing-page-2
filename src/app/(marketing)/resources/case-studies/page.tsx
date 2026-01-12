"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  TrendingUp,
  Clock,
  Users,
  Phone,
  MessageSquare,
  DollarSign,
  Calendar,
  Zap,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const caseStudies = [
  {
    company: "Float",
    logo: "F",
    tag: "Full GTM Transformation",
    tagColor: "#22c55e",
    description: "Complete revenue operations overhaul across the entire team",
    results: [
      {
        icon: <Users className="w-4 h-4" />,
        before: "1x",
        after: "2x",
        label: "Qualified meetings/BDR",
        change: "2x",
        changeColor: "text-green-500"
      },
      {
        icon: <TrendingUp className="w-4 h-4" />,
        before: "1x",
        after: "2x",
        label: "Pipeline per rep",
        change: "2x",
        changeColor: "text-green-500"
      },
      {
        icon: <Clock className="w-4 h-4" />,
        before: "0",
        after: "40hrs",
        label: "Weekly time saved",
        change: "→",
        changeColor: "text-green-500"
      },
      {
        icon: <Zap className="w-4 h-4" />,
        before: "Manual",
        after: "Automated",
        label: "GTM workflows",
        change: "✓",
        changeColor: "text-green-500"
      },
    ],
    color: "#22c55e",
  },
  {
    company: "Proposify",
    logo: "P",
    tag: "Week 1 Pilot Results",
    tagColor: "#3b82f6",
    description: "CRM Auto-Enrich Playbook: From cold start to closed revenue in 7 days",
    results: [
      {
        icon: <Phone className="w-4 h-4" />,
        before: "30%",
        after: "85%",
        label: "Phone retrieval",
        change: "+183%",
        changeColor: "text-blue-500"
      },
      {
        icon: <MessageSquare className="w-4 h-4" />,
        before: "6%",
        after: "20%",
        label: "Connect rate",
        change: "+233%",
        changeColor: "text-blue-500"
      },
      {
        icon: <Calendar className="w-4 h-4" />,
        before: "0",
        after: "6",
        label: "Meetings booked",
        change: "→",
        changeColor: "text-blue-500"
      },
      {
        icon: <DollarSign className="w-4 h-4" />,
        before: "$0",
        after: "1 closed",
        label: "Closed won",
        change: "🎉",
        changeColor: "text-blue-500"
      },
    ],
    color: "#3b82f6",
  },
];

export default function CaseStudiesPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3e8aff]/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-6"
          >
            <BookOpen className="w-4 h-4" />
            Case Studies
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-5xl md:text-6xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Real Results From Real Teams
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            See how sales teams, agencies, and RevOps leaders use Cleanlist to transform
            their data operations.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className={`py-12 border-y transition-colors ${isDark ? "border-white/[0.08] bg-[#080808]" : "border-black/[0.08] bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Teams Using Cleanlist" },
              { value: "10M+", label: "Records Processed Monthly" },
              { value: "95%", label: "Average Match Rate" },
              { value: "3x", label: "Avg. Pipeline Increase" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-[#3e8aff]">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies - Card Style */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Featured Success Stories</h2>
            <p className={isDark ? "text-gray-400" : "text-gray-600"}>Real metrics from real customers</p>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 rounded-2xl border ${isDark ? "bg-gradient-to-br from-white/[0.03] to-white/[0.01] border-white/[0.08]" : "bg-white/70 border-black/[0.08]"}`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold"
                      style={{ backgroundColor: `${study.color}15`, color: study.color }}
                    >
                      {study.logo}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{study.company}</h3>
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-medium"
                          style={{ backgroundColor: `${study.tagColor}20`, color: study.tagColor }}
                        >
                          {study.tag}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{study.description}</p>
                    </div>
                  </div>
                  <Link
                    href="#"
                    className="hidden md:inline-flex items-center gap-2 text-sm font-medium hover:underline"
                    style={{ color: study.color }}
                  >
                    Read full case study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {study.results.map((result) => (
                    <div
                      key={result.label}
                      className={`p-4 rounded-xl ${isDark ? "bg-white/[0.02] border border-white/[0.05]" : "bg-[#F8F9FA] border border-black/[0.05]"}`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-gray-500">{result.icon}</span>
                        <span className="text-gray-500 text-sm line-through">{result.before}</span>
                        <span className="text-gray-400">→</span>
                        <span className={`font-bold text-lg ${isDark ? "text-white" : "text-gray-900"}`}>{result.after}</span>
                      </div>
                      <div className="text-sm text-gray-400">{result.label}</div>
                      <div className={`text-sm font-medium mt-1 ${result.changeColor}`}>
                        {result.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <Link
                  href="#"
                  className="md:hidden inline-flex items-center gap-2 mt-6 text-sm font-medium hover:underline"
                  style={{ color: study.color }}
                >
                  Read full case study <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
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
              Ready to Write Your Success Story?
            </h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Join 500+ teams achieving real results with clean data.
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
