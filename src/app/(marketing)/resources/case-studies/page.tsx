"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  TrendingUp,
  Users,
  Clock,
  Building,
  Quote,
} from "lucide-react";

const caseStudies = [
  {
    company: "TechScale Inc.",
    logo: "T",
    industry: "B2B SaaS",
    challenge: "High bounce rates from purchased lead lists",
    solution: "Waterfall Enrichment + Email Verification",
    results: [
      { metric: "Bounce Rate", before: "15%", after: "0.8%", improvement: "-95%" },
      { metric: "Response Rate", before: "2%", after: "8%", improvement: "+300%" },
      { metric: "Pipeline Generated", before: "$120K", after: "$480K", improvement: "+300%" },
    ],
    quote: "Cleanlist completely transformed our outbound program. We went from dreading email campaigns to looking forward to them.",
    author: "Sarah Chen",
    role: "VP of Sales",
    color: "#3e8aff",
  },
  {
    company: "GrowthOps Agency",
    logo: "G",
    industry: "Marketing Agency",
    challenge: "Manual data cleaning for each client project",
    solution: "Playbook Builder + Smart Columns",
    results: [
      { metric: "Time Saved", before: "40hrs/week", after: "5hrs/week", improvement: "-87%" },
      { metric: "Client Capacity", before: "8 clients", after: "22 clients", improvement: "+175%" },
      { metric: "Profit Margin", before: "18%", after: "42%", improvement: "+133%" },
    ],
    quote: "We turned data cleaning from a cost center into a profit center. Our clients love the quality, and we love the margins.",
    author: "Mike Johnson",
    role: "Founder & CEO",
    color: "#22c55e",
  },
  {
    company: "RevOps Central",
    logo: "R",
    industry: "RevOps Consulting",
    challenge: "Clients had 30%+ duplicate records in CRM",
    solution: "Automated Deduplication + CRM Sync",
    results: [
      { metric: "Duplicate Rate", before: "32%", after: "2%", improvement: "-94%" },
      { metric: "Data Accuracy", before: "65%", after: "98%", improvement: "+51%" },
      { metric: "Rep Productivity", before: "4hrs/day", after: "6hrs/day", improvement: "+50%" },
    ],
    quote: "Our clients used to think clean data was impossible. Now they can't imagine going back to the old way.",
    author: "Lisa Park",
    role: "Principal Consultant",
    color: "#a855f7",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3e8aff]/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
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
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Real Results From Real Teams
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            See how sales teams, agencies, and RevOps leaders use Cleanlist to transform
            their data operations.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/[0.08] bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
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

      {/* Case Studies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 items-start"
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold text-white"
                      style={{ backgroundColor: `${study.color}20` }}
                    >
                      <span style={{ color: study.color }}>{study.logo}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{study.company}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Building className="w-4 h-4" />
                        {study.industry}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                      The Challenge
                    </h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                      The Solution
                    </h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>

                  {/* Quote */}
                  <div
                    className="p-6 rounded-xl border-l-4"
                    style={{
                      backgroundColor: `${study.color}08`,
                      borderColor: study.color,
                    }}
                  >
                    <Quote className="w-8 h-8 mb-4" style={{ color: study.color }} />
                    <p className="text-gray-300 italic mb-4">&ldquo;{study.quote}&rdquo;</p>
                    <div>
                      <div className="font-medium text-white">{study.author}</div>
                      <div className="text-sm text-gray-500">{study.role}</div>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div
                  className={`p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08] ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" style={{ color: study.color }} />
                    Results
                  </h4>

                  <div className="space-y-6">
                    {study.results.map((result) => (
                      <div key={result.metric}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-400">{result.metric}</span>
                          <span
                            className="text-sm font-medium"
                            style={{ color: study.color }}
                          >
                            {result.improvement}
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex-1">
                            <div className="text-xs text-gray-500 mb-1">Before</div>
                            <div className="text-lg text-gray-400">{result.before}</div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-600" />
                          <div className="flex-1 text-right">
                            <div className="text-xs text-gray-500 mb-1">After</div>
                            <div className="text-lg text-white font-medium">{result.after}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
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
