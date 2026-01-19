"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkle } from "@phosphor-icons/react";
import { useTheme } from "@/context/ThemeContext";

// Integrations for the orbital visualization (subset for visual)
const orbitalIntegrations = [
  { name: "HubSpot", abbr: "Hu", category: "CRM", position: { x: 82, y: 22 } },
  { name: "Salesforce", abbr: "Sa", category: "CRM", position: { x: 18, y: 30 } },
  { name: "Pipedrive", abbr: "Pi", category: "CRM", position: { x: 32, y: 42 } },
  { name: "Outreach", abbr: "Ou", category: "Sales", position: { x: 8, y: 48 } },
  { name: "Salesloft", abbr: "Sl", category: "Sales", position: { x: 18, y: 65 } },
  { name: "ActiveCampaign", abbr: "Ac", category: "Marketing", position: { x: 22, y: 82 } },
  { name: "Mailchimp", abbr: "Ma", category: "Marketing", position: { x: 72, y: 42 } },
  { name: "Braze", abbr: "Br", category: "Marketing", position: { x: 78, y: 52 } },
  { name: "Apollo", abbr: "Ap", category: "Prospecting", position: { x: 92, y: 48 } },
  { name: "Segment", abbr: "Se", category: "CDP", position: { x: 92, y: 38 } },
  { name: "Snowflake", abbr: "Sn", category: "Data", position: { x: 28, y: 18 } },
  { name: "BigQuery", abbr: "Bi", category: "Data", position: { x: 78, y: 18 } },
  { name: "Klaviyo", abbr: "Kl", category: "Email", position: { x: 28, y: 55 } },
  { name: "Intercom", abbr: "In", category: "Support", position: { x: 88, y: 60 } },
  { name: "Pardot", abbr: "Pa", category: "Marketing", position: { x: 80, y: 68 } },
  { name: "Zapier", abbr: "Za", category: "Automation", position: { x: 5, y: 38 } },
  { name: "Slack", abbr: "Sl", category: "Comms", position: { x: 18, y: 58 } },
  { name: "Marketo", abbr: "Ma", category: "Marketing", position: { x: 22, y: 72 } },
];

// Grid integrations (the specific ones requested)
const gridIntegrations = [
  { name: "HubSpot", abbr: "Hu", category: "CRM" },
  { name: "ActiveCampaign", abbr: "Ac", category: "Marketing" },
  { name: "Affinity", abbr: "Af", category: "CRM" },
  { name: "Close", abbr: "Cl", category: "CRM" },
  { name: "Freshsales CRM", abbr: "Fr", category: "CRM" },
  { name: "Holded", abbr: "Ho", category: "CRM" },
  { name: "Insightly", abbr: "In", category: "CRM" },
  { name: "Marketing360", abbr: "M3", category: "Marketing" },
  { name: "Outreach.io", abbr: "Ou", category: "Sales" },
  { name: "Pipedrive", abbr: "Pi", category: "CRM" },
  { name: "RecruitCRM", abbr: "Rc", category: "CRM" },
  { name: "Salesflare", abbr: "Sf", category: "CRM" },
  { name: "Salesloft", abbr: "Sl", category: "Sales" },
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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="integrations"
      className={`relative py-24 md:py-32 overflow-hidden transition-colors ${
        isDark ? "bg-[#030303]" : "bg-white"
      }`}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(circle at 50% 50%, rgba(62, 138, 255, 0.08), transparent 50%)"
            : "radial-gradient(circle at 50% 50%, rgba(62, 138, 255, 0.05), transparent 50%)",
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
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
            Lives in your{" "}
            <span className="text-[#3e8aff]">existing stack</span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${
            isDark ? "text-[#888888]" : "text-gray-600"
          }`}>
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
                <stop offset="0%" stopColor={isDark ? "rgba(62, 138, 255, 0)" : "rgba(62, 138, 255, 0)"} />
                <stop offset="50%" stopColor={isDark ? "rgba(62, 138, 255, 0.3)" : "rgba(62, 138, 255, 0.2)"} />
                <stop offset="100%" stopColor={isDark ? "rgba(62, 138, 255, 0)" : "rgba(62, 138, 255, 0)"} />
              </linearGradient>
            </defs>
            {orbitalIntegrations.map((integration, index) => (
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
              <div className={`relative w-24 h-24 md:w-28 md:h-28 rounded-2xl flex items-center justify-center ${
                isDark
                  ? "bg-gradient-to-br from-[#3e8aff] to-[#2563eb] shadow-[0_0_60px_rgba(62,138,255,0.4)]"
                  : "bg-gradient-to-br from-[#3e8aff] to-[#2563eb] shadow-[0_0_60px_rgba(62,138,255,0.25)]"
              }`}>
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
          {orbitalIntegrations.map((integration, index) => (
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
                abbr={integration.abbr}
                category={integration.category}
                color={categoryColors[integration.category] || "#3e8aff"}
                isDark={isDark}
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
          {[
            { name: "CRM", color: categoryColors.CRM },
            { name: "Sales", color: categoryColors.Sales },
            { name: "Marketing", color: categoryColors.Marketing },
            { name: "Prospecting", color: categoryColors.Prospecting },
            { name: "Automation", color: categoryColors.Automation },
            { name: "CDP", color: categoryColors.CDP },
          ].map((cat) => (
            <div key={cat.name} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: cat.color }}
              />
              <span className={`text-xs ${isDark ? "text-[#888888]" : "text-gray-500"}`}>
                {cat.name}
              </span>
            </div>
          ))}
          <span className={`text-xs ${isDark ? "text-[#555]" : "text-gray-400"}`}>+ more</span>
        </motion.div>

        {/* Native Integrations Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`rounded-2xl p-6 md:p-8 border ${
            isDark
              ? "bg-[rgba(10,10,10,0.6)] border-[rgba(255,255,255,0.08)] backdrop-blur-xl"
              : "bg-white border-gray-200 shadow-sm"
          }`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                Native Integrations
              </h3>
              <p className={`text-sm ${isDark ? "text-[#888888]" : "text-gray-500"}`}>
                One-click setup. No engineering required.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-xs ${isDark ? "text-[#888888]" : "text-gray-500"}`}>
                Can&apos;t find yours?
              </span>
              <a
                href="/integrations"
                className="text-sm text-[#3e8aff] hover:text-[#60a5fa] transition-colors"
              >
                Request integration
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {gridIntegrations.map((integration, index) => (
              <motion.div
                key={`grid-${integration.name}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className={`group flex flex-col p-4 rounded-xl border transition-all cursor-pointer ${
                  isDark
                    ? "bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.05)] hover:border-[rgba(62,138,255,0.3)] hover:bg-[rgba(62,138,255,0.05)]"
                    : "bg-gray-50 border-gray-100 hover:border-[#3e8aff]/30 hover:bg-[#3e8aff]/5"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-sm"
                    style={{
                      backgroundColor: `${categoryColors[integration.category]}15`,
                      color: categoryColors[integration.category],
                    }}
                  >
                    {integration.abbr}
                  </div>
                  <ArrowRight
                    size={16}
                    className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                      isDark ? "text-[#888888]" : "text-gray-400"
                    }`}
                  />
                </div>
                <span className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                  {integration.name}
                </span>
                <span className={`text-xs mt-0.5 ${isDark ? "text-[#666666]" : "text-gray-400"}`}>
                  Click to connect
                </span>
              </motion.div>
            ))}
          </div>

          <div className={`mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isDark ? "border-[rgba(255,255,255,0.08)]" : "border-gray-200"
          }`}>
            <div className="flex items-center gap-3">
              <Sparkle size={20} className="text-[#3e8aff]" />
              <span className={`text-sm ${isDark ? "text-[#888888]" : "text-gray-500"}`}>
                <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>REST API</span> and{" "}
                <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Webhooks</span> for
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
  abbr,
  category,
  color,
  isDark,
}: {
  name: string;
  abbr: string;
  category: string;
  color: string;
  isDark: boolean;
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
        className={`relative w-14 h-14 md:w-16 md:h-16 rounded-xl flex flex-col items-center justify-center backdrop-blur-sm transition-all cursor-pointer border ${
          isDark
            ? "bg-[rgba(10,10,10,0.9)] border-[rgba(255,255,255,0.1)]"
            : "bg-white border-gray-200 shadow-sm"
        }`}
        style={{
          borderColor: isDark ? `${color}30` : `${color}40`,
        }}
      >
        <div
          className="w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center text-xs font-bold mb-0.5"
          style={{
            backgroundColor: `${color}20`,
            color: color,
          }}
        >
          {abbr}
        </div>
        <span className={`text-[8px] md:text-[9px] group-hover:text-white transition-colors truncate max-w-full px-1 ${
          isDark ? "text-[#888888]" : "text-gray-500"
        }`}>
          {name}
        </span>
      </div>

      {/* Tooltip */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className={`px-2 py-1 rounded text-[10px] whitespace-nowrap ${
          isDark
            ? "bg-[#1a1a1a] border border-[rgba(255,255,255,0.1)] text-white"
            : "bg-gray-900 text-white"
        }`}>
          {category}
        </div>
      </div>
    </motion.div>
  );
}
