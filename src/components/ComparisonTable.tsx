"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight, Sparkle, Clock, Lightning, Shield } from "@phosphor-icons/react";

const comparisonData = [
  {
    category: "Verification Speed",
    icon: Lightning,
    oldWay: {
      value: "2-5 seconds",
      description: "Batch processing, overnight jobs",
      score: "slow",
    },
    cleanlist: {
      value: "<200ms",
      description: "Real-time API, instant results",
      score: "fast",
    },
  },
  {
    category: "Enrichment Depth",
    icon: Sparkle,
    oldWay: {
      value: "5-8 fields",
      description: "Basic company and title only",
      score: "limited",
    },
    cleanlist: {
      value: "25+ fields",
      description: "Firmographic, technographic, social, intent",
      score: "comprehensive",
    },
  },
  {
    category: "Data Freshness",
    icon: Clock,
    oldWay: {
      value: "30-90 days",
      description: "Quarterly database updates",
      score: "stale",
    },
    cleanlist: {
      value: "Real-time",
      description: "Live data graph, continuous refresh",
      score: "fresh",
    },
  },
  {
    category: "Native Integrations",
    icon: Shield,
    oldWay: {
      value: "Manual CSV",
      description: "Export, transform, import cycle",
      score: "manual",
    },
    cleanlist: {
      value: "15+ native",
      description: "HubSpot, Salesforce, Outreach, and more",
      score: "native",
    },
  },
];

const detailedFeatures = [
  { feature: "Real-time email verification", oldWay: false, cleanlist: true },
  { feature: "Catch-all detection", oldWay: false, cleanlist: true },
  { feature: "Disposable email blocking", oldWay: true, cleanlist: true },
  { feature: "LinkedIn profile enrichment", oldWay: false, cleanlist: true },
  { feature: "Company technographics", oldWay: false, cleanlist: true },
  { feature: "Revenue estimation", oldWay: false, cleanlist: true },
  { feature: "Intent signals", oldWay: false, cleanlist: true },
  { feature: "Webhook delivery", oldWay: false, cleanlist: true },
  { feature: "Bulk API processing", oldWay: true, cleanlist: true },
  { feature: "SOC 2 Type II certified", oldWay: false, cleanlist: true },
  { feature: "GDPR compliant", oldWay: true, cleanlist: true },
  { feature: "99.9% uptime SLA", oldWay: false, cleanlist: true },
];

export default function ComparisonTable() {
  return (
    <section
      id="compare"
      className="relative py-24 md:py-32 bg-[#030303] overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 100%, rgba(62, 138, 255, 0.05), transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-[#3e8aff] uppercase mb-4 block">
            The Cleanlist Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Cleanlist vs.{" "}
            <span className="text-[#888888]">The Old Way</span>
          </h2>
          <p className="text-lg text-[#888888] max-w-3xl mx-auto">
            Legacy tools were built for a different era. See how Cleanlist
            delivers 10x the value with modern infrastructure and AI-powered
            enrichment.
          </p>
        </motion.div>

        {/* Main Comparison Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {comparisonData.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="card-glass rounded-2xl p-6 relative overflow-hidden"
            >
              {/* Glow for Cleanlist side */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#3e8aff] opacity-5 rounded-full blur-3xl" />

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[rgba(62,138,255,0.1)] flex items-center justify-center">
                  <item.icon size={20} className="text-[#3e8aff]" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {item.category}
                </h3>
              </div>

              {/* Comparison Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Old Way */}
                <div className="p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
                  <p className="text-xs text-[#888888] mb-2">Legacy Tools</p>
                  <p className="text-xl font-bold text-[#888888] mb-1">
                    {item.oldWay.value}
                  </p>
                  <p className="text-xs text-[#555]">
                    {item.oldWay.description}
                  </p>
                </div>

                {/* Cleanlist */}
                <div className="p-4 rounded-xl bg-[rgba(62,138,255,0.05)] border border-[rgba(62,138,255,0.2)] relative">
                  <div className="absolute top-2 right-2">
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[rgba(34,197,94,0.1)] text-[#22c55e]">
                      Better
                    </span>
                  </div>
                  <p className="text-xs text-[#3e8aff] mb-2">Cleanlist</p>
                  <p className="text-xl font-bold text-white mb-1">
                    {item.cleanlist.value}
                  </p>
                  <p className="text-xs text-[#888888]">
                    {item.cleanlist.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Feature Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-glass rounded-2xl overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 p-4 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.3)]">
            <div className="text-sm font-medium text-white">Feature</div>
            <div className="text-sm font-medium text-[#888888] text-center">
              Legacy Tools
            </div>
            <div className="text-sm font-medium text-[#3e8aff] text-center flex items-center justify-center gap-2">
              <Sparkle size={16} />
              Cleanlist
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[rgba(255,255,255,0.05)]">
            {detailedFeatures.map((item, index) => (
              <motion.div
                key={item.feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="grid grid-cols-3 gap-4 p-4 hover:bg-[rgba(255,255,255,0.02)] transition-colors"
              >
                <div className="text-sm text-[#888888]">{item.feature}</div>
                <div className="flex justify-center">
                  {item.oldWay ? (
                    <div className="w-6 h-6 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center">
                      <Check size={14} className="text-[#888888]" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-[rgba(239,68,68,0.1)] flex items-center justify-center">
                      <X size={14} className="text-[#ef4444]" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-6 h-6 rounded-full bg-[rgba(62,138,255,0.1)] flex items-center justify-center shadow-[0_0_10px_rgba(62,138,255,0.3)]"
                  >
                    <Check size={14} className="text-[#3e8aff]" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Table Footer */}
          <div className="p-6 border-t border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.2)]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-sm text-white font-medium">
                  Ready to upgrade your data stack?
                </p>
                <p className="text-xs text-[#888888]">
                  See how Cleanlist compares to your current tools.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/compare"
                  className="text-sm text-[#888888] hover:text-white transition-colors"
                >
                  Full comparison
                </a>
                <a
                  href="/get-started"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#3e8aff] to-[#2563eb] rounded-lg hover:shadow-[0_0_20px_rgba(62,138,255,0.3)] transition-shadow"
                >
                  Try Cleanlist Free
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <a
            href="/docs/comparison"
            className="inline-flex items-center gap-2 text-sm text-[#3e8aff] hover:text-[#60a5fa] transition-colors"
          >
            View detailed technical comparison
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
