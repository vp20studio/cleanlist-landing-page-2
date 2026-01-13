"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";

const integrations = [
  { name: "Salesforce", category: "CRM", position: { x: 15, y: 25 } },
  { name: "HubSpot", category: "CRM", position: { x: 85, y: 20 } },
  { name: "Outreach", category: "Sales", position: { x: 10, y: 55 } },
  { name: "Apollo", category: "Prospecting", position: { x: 90, y: 50 } },
  { name: "Marketo", category: "Marketing", position: { x: 20, y: 80 } },
  { name: "Pardot", category: "Marketing", position: { x: 80, y: 75 } },
  { name: "Zapier", category: "Automation", position: { x: 5, y: 40 } },
  { name: "Segment", category: "CDP", position: { x: 95, y: 35 } },
  { name: "Snowflake", category: "Data", position: { x: 25, y: 10 } },
  { name: "BigQuery", category: "Data", position: { x: 75, y: 10 } },
  { name: "Slack", category: "Comms", position: { x: 15, y: 70 } },
  { name: "Intercom", category: "Support", position: { x: 85, y: 65 } },
  { name: "Pipedrive", category: "CRM", position: { x: 30, y: 40 } },
  { name: "Mailchimp", category: "Email", position: { x: 70, y: 40 } },
  { name: "Klaviyo", category: "Email", position: { x: 25, y: 60 } },
  { name: "Braze", category: "Marketing", position: { x: 75, y: 55 } },
];

const categoryColors: Record<string, string> = {
  CRM: "#3e8aff",
  Sales: "#22c55e",
  Marketing: "#8b5cf6",
  Prospecting: "#f59e0b",
  Automation: "#ec4899",
  CDP: "#06b6d4",
  Data: "#6366f1",
  Comms: "#f97316",
  Support: "#14b8a6",
  Email: "#ef4444",
};

export default function IntegrationCloud() {
  return (
    <section
      id="integrations"
      className="relative py-24 md:py-32 bg-[#030303] overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(62, 138, 255, 0.08), transparent 50%)",
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
            Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Lives in your{" "}
            <span className="gradient-text-blue">existing stack</span>
          </h2>
          <p className="text-lg text-[#888888] max-w-3xl mx-auto">
            Cleanlist connects natively to 15+ tools you already use. No data
            silos, no manual exports—just seamless, real-time data flow.
          </p>
        </motion.div>

        {/* Integration Cloud Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] md:h-[600px] mb-16"
        >
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="rgba(62, 138, 255, 0)" />
                <stop offset="50%" stopColor="rgba(62, 138, 255, 0.3)" />
                <stop offset="100%" stopColor="rgba(62, 138, 255, 0)" />
              </linearGradient>
            </defs>
            {integrations.map((integration, index) => (
              <motion.line
                key={`line-${index}`}
                x1="50%"
                y1="50%"
                x2={`${integration.position.x}%`}
                y2={`${integration.position.y}%`}
                stroke="url(#lineGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.05 }}
              />
            ))}
          </svg>

          {/* Central Node - Cleanlist */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="relative">
              {/* Glow rings */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.1, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 w-32 h-32 rounded-full bg-[#3e8aff] blur-xl -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
              />
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.2, 0.05, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 w-40 h-40 rounded-full bg-[#3e8aff] blur-2xl -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
              />

              {/* Central logo */}
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-[#3e8aff] to-[#2563eb] flex items-center justify-center shadow-[0_0_60px_rgba(62,138,255,0.4)]">
                <div className="text-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-10 h-10 text-white mx-auto mb-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  <span className="text-xs font-semibold text-white/90">
                    Cleanlist
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Integration Nodes */}
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: 0.3 + index * 0.05,
                type: "spring",
              }}
              style={{
                left: `${integration.position.x}%`,
                top: `${integration.position.y}%`,
              }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              <IntegrationNode
                name={integration.name}
                category={integration.category}
                color={categoryColors[integration.category] || "#3e8aff"}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Category Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {Object.entries(categoryColors)
            .slice(0, 6)
            .map(([category, color]) => (
              <div key={category} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="text-xs text-[#888888]">{category}</span>
              </div>
            ))}
          <span className="text-xs text-[#555]">+ more</span>
        </motion.div>

        {/* Integration Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card-glass rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Native Integrations
              </h3>
              <p className="text-sm text-[#888888]">
                One-click setup. No engineering required.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#888888]">Can&apos;t find yours?</span>
              <a
                href="/integrations"
                className="text-sm text-[#3e8aff] hover:text-[#60a5fa] transition-colors"
              >
                Request integration
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
            {integrations.map((integration, index) => (
              <motion.div
                key={`grid-${integration.name}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(62,138,255,0.3)] hover:bg-[rgba(62,138,255,0.05)] transition-all cursor-pointer"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-semibold text-sm transition-colors"
                  style={{
                    backgroundColor: `${categoryColors[integration.category]}20`,
                    color: categoryColors[integration.category],
                  }}
                >
                  {integration.name.slice(0, 2)}
                </div>
                <span className="text-xs text-[#888888] group-hover:text-white transition-colors text-center">
                  {integration.name}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkle size={20} className="text-[#3e8aff]" />
              <span className="text-sm text-[#888888]">
                <span className="text-white font-medium">REST API</span> and{" "}
                <span className="text-white font-medium">Webhooks</span> for
                custom integrations
              </span>
            </div>
            <a
              href="/docs/api"
              className="inline-flex items-center gap-2 text-sm text-[#3e8aff] hover:text-[#60a5fa] transition-colors"
            >
              View API Docs
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IntegrationNode({
  name,
  category,
  color,
}: {
  name: string;
  category: string;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="group relative"
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
        style={{ backgroundColor: color, opacity: 0.2 }}
      />

      {/* Node */}
      <div
        className="relative w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[rgba(10,10,10,0.9)] border border-[rgba(255,255,255,0.1)] group-hover:border-opacity-30 flex flex-col items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
        style={{
          borderColor: `${color}30`,
        }}
      >
        <div
          className="w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center text-xs font-bold mb-0.5"
          style={{
            backgroundColor: `${color}20`,
            color: color,
          }}
        >
          {name.slice(0, 2)}
        </div>
        <span className="text-[8px] md:text-[9px] text-[#888888] group-hover:text-white transition-colors truncate max-w-full px-1">
          {name}
        </span>
      </div>

      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="px-2 py-1 rounded bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] text-[10px] text-white whitespace-nowrap">
          {category}
        </div>
      </div>
    </motion.div>
  );
}
