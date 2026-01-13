"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ArrowsClockwise,
  Lightning,
  Shield,
  Clock,
} from "@phosphor-icons/react";
import { useTheme } from "@/context/ThemeContext";

// All integrations for the hub visual
const allIntegrations = [
  { name: "Salesforce", abbr: "Sa", category: "crm", color: "#3b82f6" },
  { name: "HubSpot", abbr: "Hu", category: "crm", color: "#3b82f6" },
  { name: "Pipedrive", abbr: "Pi", category: "crm", color: "#3b82f6" },
  { name: "Outreach", abbr: "Ou", category: "sales", color: "#22c55e" },
  { name: "Apollo", abbr: "Ap", category: "prospecting", color: "#f59e0b" },
  { name: "Marketo", abbr: "Ma", category: "marketing", color: "#14b8a6" },
  { name: "Mailchimp", abbr: "Ma", category: "marketing", color: "#14b8a6" },
  { name: "Klaviyo", abbr: "Kl", category: "marketing", color: "#14b8a6" },
  { name: "Braze", abbr: "Br", category: "marketing", color: "#14b8a6" },
  { name: "Pardot", abbr: "Pa", category: "marketing", color: "#14b8a6" },
  { name: "Snowflake", abbr: "Sn", category: "cdp", color: "#8b5cf6" },
  { name: "BigQuery", abbr: "Bi", category: "cdp", color: "#8b5cf6" },
  { name: "Segment", abbr: "Se", category: "cdp", color: "#8b5cf6" },
  { name: "Zapier", abbr: "Za", category: "automation", color: "#ec4899" },
  { name: "Slack", abbr: "Sl", category: "automation", color: "#ec4899" },
  { name: "Intercom", abbr: "In", category: "automation", color: "#ec4899" },
];

const integrationCategories = [
  { id: "crm", label: "CRM", color: "#3b82f6" },
  { id: "sales", label: "Sales", color: "#22c55e" },
  { id: "marketing", label: "Marketing", color: "#14b8a6" },
  { id: "prospecting", label: "Prospecting", color: "#f59e0b" },
  { id: "automation", label: "Automation", color: "#ec4899" },
  { id: "cdp", label: "CDP", color: "#8b5cf6" },
];

export default function IntegrationsPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {/* Hero with Hub & Spoke Visual */}
      <section className="relative pt-16 md:pt-20 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3e8aff]/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-medium text-[#3e8aff] tracking-wider mb-4"
          >
            ECOSYSTEM
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Lives in your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
              existing stack
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            Cleanlist connects natively to 15+ tools you already use. No data silos, no manual exports—just
            seamless, real-time data flow.
          </motion.p>
        </div>
      </section>

      {/* Hub & Spoke Visualization - Fixed Grid Layout */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-5 md:grid-cols-9 gap-4 md:gap-6 items-center justify-items-center py-8">
              {/* Top Row */}
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="hidden md:flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#3b82f6]/15 text-[#3b82f6] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Sa</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Salesforce</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.45 }} className="hidden md:flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#3b82f6]/15 text-[#3b82f6] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Hu</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>HubSpot</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#22c55e]/15 text-[#22c55e] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Ou</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Outreach</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.55 }} className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#f59e0b]/15 text-[#f59e0b] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Ap</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Apollo</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#14b8a6]/15 text-[#14b8a6] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Ma</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Marketo</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.65 }} className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#14b8a6]/15 text-[#14b8a6] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Mc</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Mailchimp</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 }} className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#8b5cf6]/15 text-[#8b5cf6] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Sn</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Snowflake</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.75 }} className="hidden md:flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#ec4899]/15 text-[#ec4899] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Za</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Zapier</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} className="hidden md:flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#ec4899]/15 text-[#ec4899] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Sl</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Slack</span>
              </motion.div>
            </div>

            {/* Middle Row with Center Hub */}
            <div className="flex items-center justify-center gap-4 md:gap-8 py-4">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#3b82f6]/15 text-[#3b82f6] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Pi</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Pipedrive</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65 }} className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#14b8a6]/15 text-[#14b8a6] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Kl</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Klaviyo</span>
              </motion.div>

              {/* Connection lines to center */}
              <div className={`hidden md:block w-12 h-px ${isDark ? "bg-gradient-to-r from-white/20 to-white/5" : "bg-gradient-to-r from-gray-300 to-gray-100"}`} />

              {/* Center Hub - Cleanlist */}
              <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, type: "spring" }} className="relative z-10 mx-4">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-[#3e8aff] to-[#60a5fa] flex flex-col items-center justify-center shadow-lg shadow-[#3e8aff]/30">
                  <Check className="w-6 h-6 md:w-8 md:h-8 text-white mb-1" />
                  <span className="text-xs md:text-sm font-semibold text-white">Cleanlist</span>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-[#3e8aff]/20 blur-xl -z-10" />
              </motion.div>

              <div className={`hidden md:block w-12 h-px ${isDark ? "bg-gradient-to-l from-white/20 to-white/5" : "bg-gradient-to-l from-gray-300 to-gray-100"}`} />

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65 }} className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#8b5cf6]/15 text-[#8b5cf6] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Bi</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>BigQuery</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#8b5cf6]/15 text-[#8b5cf6] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Se</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Segment</span>
              </motion.div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-5 md:grid-cols-9 gap-4 md:gap-6 items-center justify-items-center py-8">
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }} className="hidden md:flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#14b8a6]/15 text-[#14b8a6] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Br</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Braze</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.85 }} className="hidden md:flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#14b8a6]/15 text-[#14b8a6] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Pa</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Pardot</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9 }} className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#ec4899]/15 text-[#ec4899] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>In</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Intercom</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.95 }} className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#3b82f6]/15 text-[#3b82f6] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Zo</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Zoho</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.0 }} className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#22c55e]/15 text-[#22c55e] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Rc</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Recruitcrm</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.05 }} className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#f59e0b]/15 text-[#f59e0b] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Lu</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Lusha</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.1 }} className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#f59e0b]/15 text-[#f59e0b] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Rr</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>RocketReach</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.15 }} className="hidden md:flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#3b82f6]/15 text-[#3b82f6] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>Sf</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Seamless</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }} className="hidden md:flex flex-col items-center">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-sm font-bold border bg-[#22c55e]/15 text-[#22c55e] ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>+5</div>
                <span className={`text-xs mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>More</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Category Legend */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="flex items-center justify-center gap-4 md:gap-6 flex-wrap mt-8">
            {integrationCategories.map((cat) => (
              <div key={cat.id} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{cat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Native Integrations Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-5 md:p-8 rounded-2xl border transition-colors ${isDark ? "bg-[#0a0a0a] border-white/[0.08]" : "bg-white/70 border-black/[0.08]"}`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Native Integrations</h3>
                <p className={`text-sm ${isDark ? "text-gray-500" : "text-gray-600"}`}>One-click setup. No engineering required.</p>
              </div>
              <Link href="#" className="text-sm text-[#3e8aff] hover:underline">
                Can&apos;t find yours? Request integration
              </Link>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-8 gap-3 md:gap-4 mb-8">
              {allIntegrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xs md:text-sm font-bold border mb-2 ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}
                    style={{ backgroundColor: `${integration.color}10`, color: integration.color }}
                  >
                    {integration.abbr}
                  </div>
                  <span className={`text-[10px] md:text-xs text-center ${isDark ? "text-gray-400" : "text-gray-600"}`}>{integration.name}</span>
                </motion.div>
              ))}
            </div>

            <div className={`flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>
              <div className={`flex items-center gap-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                <Lightning className="text-[#3e8aff]" />
                <span className="text-[#3e8aff] font-medium">REST API</span> and <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Webhooks</span> for custom integrations
              </div>
              <Link href="#" className="inline-flex items-center gap-1 text-sm text-[#3e8aff] hover:underline">
                View API Docs <ArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className={`py-12 border-y transition-colors ${isDark ? "border-white/[0.08] bg-[#080808]" : "border-black/[0.08] bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: <ArrowsClockwise />, value: "15+", label: "Native Integrations" },
              { icon: <Clock />, value: "Real-time", label: "Bi-directional Sync" },
              { icon: <Lightning />, value: "<5 min", label: "Setup Time" },
              { icon: <Shield />, value: "OAuth 2.0", label: "Secure Auth" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff] mx-auto mb-3">
                  {stat.icon}
                </div>
                <div className={`text-xl md:text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>{stat.value}</div>
                <div className={`text-sm ${isDark ? "text-gray-500" : "text-gray-600"}`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className={`py-16 md:py-24 transition-colors ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
                <Lightning />
                REST API
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                Build Custom Integrations
              </h2>
              <p className={`text-lg mb-8 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Full REST API access for building custom integrations. SDKs available
                for Python, Node.js, Go, and Ruby.
              </p>

              <div className="space-y-3">
                {[
                  "Full enrichment, verification, and lookup endpoints",
                  "Batch processing for high-volume operations",
                  "Webhook callbacks for async workflows",
                  "Rate limits: 1,000+ requests/minute",
                  "99.9% uptime SLA",
                ].map((feature) => (
                  <div key={feature} className={`flex items-center gap-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    <Check className="w-5 h-5 text-green-500" />
                    {feature}
                  </div>
                ))}
              </div>

              <Link
                href="#"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-colors"
              >
                View API Docs
                <ArrowRight />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`rounded-xl border overflow-hidden ${isDark ? "bg-[#0a0a0a] border-white/[0.08]" : "bg-white/70 border-black/[0.08]"}`}
            >
              <div className={`flex items-center gap-2 px-4 py-3 border-b ${isDark ? "border-white/[0.08] bg-[#080808]" : "border-black/[0.08] bg-[#F8F9FA]"}`}>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className={`text-xs ml-2 ${isDark ? "text-gray-500" : "text-gray-600"}`}>example.py</span>
              </div>
              <pre className="p-4 text-sm overflow-x-auto">
                <code className={isDark ? "text-gray-300" : "text-gray-700"}>
                  <span className="text-purple-400">from</span> cleanlist <span className="text-purple-400">import</span> Client{"\n\n"}
                  client = Client(api_key=<span className="text-yellow-600">&quot;your_api_key&quot;</span>){"\n\n"}
                  <span className="text-green-600"># Enrich a contact</span>{"\n"}
                  result = client.enrich({"\n"}
                  {"    "}email=<span className="text-yellow-600">&quot;john@acme.com&quot;</span>,{"\n"}
                  {"    "}options={"{"}verify: <span className="text-purple-400">True</span>{"}"}{"\n"}
                  ){"\n\n"}
                  <span className="text-purple-400">print</span>(result.phone)  <span className="text-green-600"># +1 555 0123</span>{"\n"}
                  <span className="text-purple-400">print</span>(result.company)  <span className="text-green-600"># Acme Corp</span>
                </code>
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#3e8aff]/10 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
              Need a Custom Integration?
            </h2>
            <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Our team can help build custom integrations for your unique stack.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-colors text-base md:text-lg"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
