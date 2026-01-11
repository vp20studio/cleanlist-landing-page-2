"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  RefreshCw,
  Zap,
  Shield,
  Clock,
} from "lucide-react";

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
  return (
    <>
      {/* Hero with Hub & Spoke Visual */}
      <section className="relative pt-20 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3e8aff]/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
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
            className="text-5xl md:text-6xl font-bold text-white mb-6"
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
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Cleanlist connects natively to 15+ tools you already use. No data silos, no manual exports—just
            seamless, real-time data flow.
          </motion.p>
        </div>
      </section>

      {/* Hub & Spoke Visualization */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-4xl mx-auto h-[500px]"
          >
            {/* Center Hub - Cleanlist */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#3e8aff] to-[#60a5fa] flex flex-col items-center justify-center shadow-lg shadow-[#3e8aff]/30">
                <Check className="w-8 h-8 text-white mb-1" />
                <span className="text-sm font-semibold text-white">Cleanlist</span>
              </div>
            </div>

            {/* Connection lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
              {allIntegrations.map((integration, i) => {
                const angle = (i * 360) / allIntegrations.length - 90;
                const radius = 180;
                const x = 50 + (radius / 4) * Math.cos((angle * Math.PI) / 180);
                const y = 50 + (radius / 2.5) * Math.sin((angle * Math.PI) / 180);
                return (
                  <line
                    key={integration.name}
                    x1="50%"
                    y1="50%"
                    x2={`${x}%`}
                    y2={`${y}%`}
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                  />
                );
              })}
            </svg>

            {/* Integration nodes */}
            {allIntegrations.map((integration, i) => {
              const angle = (i * 360) / allIntegrations.length - 90;
              const radius = 180;
              const x = 50 + (radius / 4) * Math.cos((angle * Math.PI) / 180);
              const y = 50 + (radius / 2.5) * Math.sin((angle * Math.PI) / 180);
              return (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold border border-white/[0.1]"
                    style={{
                      backgroundColor: `${integration.color}15`,
                      color: integration.color,
                    }}
                  >
                    {integration.abbr}
                  </div>
                  <span className="text-xs text-gray-400 mt-1">{integration.name}</span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Category Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-6 flex-wrap mt-8"
          >
            {integrationCategories.map((cat) => (
              <div key={cat.id} className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <span className="text-sm text-gray-400">{cat.label}</span>
              </div>
            ))}
            <span className="text-sm text-gray-500">+ more</span>
          </motion.div>
        </div>
      </section>

      {/* Native Integrations Grid */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/[0.08]"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Native Integrations</h3>
                <p className="text-sm text-gray-500">One-click setup. No engineering required.</p>
              </div>
              <Link href="#" className="text-sm text-[#3e8aff] hover:underline">
                Can&apos;t find yours? Request integration
              </Link>
            </div>

            <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-8">
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
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold border border-white/[0.08] mb-2"
                    style={{
                      backgroundColor: `${integration.color}10`,
                      color: integration.color,
                    }}
                  >
                    {integration.abbr}
                  </div>
                  <span className="text-xs text-gray-400 text-center">{integration.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/[0.08]">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Zap className="w-4 h-4 text-[#3e8aff]" />
                <span className="text-[#3e8aff] font-medium">REST API</span> and <span className="font-medium text-white">Webhooks</span> for custom integrations
              </div>
              <Link href="#" className="inline-flex items-center gap-1 text-sm text-[#3e8aff] hover:underline">
                View API Docs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/[0.08] bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <RefreshCw className="w-5 h-5" />, value: "15+", label: "Native Integrations" },
              { icon: <Clock className="w-5 h-5" />, value: "Real-time", label: "Bi-directional Sync" },
              { icon: <Zap className="w-5 h-5" />, value: "<5 min", label: "Setup Time" },
              { icon: <Shield className="w-5 h-5" />, value: "OAuth 2.0", label: "Secure Auth" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff] mx-auto mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
                <Zap className="w-4 h-4" />
                REST API
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Build Custom Integrations
              </h2>
              <p className="text-lg text-gray-400 mb-8">
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
                  <div key={feature} className="flex items-center gap-3 text-gray-300">
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
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a] rounded-xl border border-white/[0.08] overflow-hidden"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08] bg-[#080808]">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-gray-500 ml-2">example.py</span>
              </div>
              <pre className="p-4 text-sm overflow-x-auto">
                <code className="text-gray-300">
                  <span className="text-purple-400">from</span> cleanlist <span className="text-purple-400">import</span> Client{"\n\n"}
                  client = Client(api_key=<span className="text-yellow-400">&quot;your_api_key&quot;</span>){"\n\n"}
                  <span className="text-green-400"># Enrich a contact</span>{"\n"}
                  result = client.enrich({"\n"}
                  {"    "}email=<span className="text-yellow-400">&quot;john@acme.com&quot;</span>,{"\n"}
                  {"    "}options={"{"}verify: <span className="text-purple-400">True</span>{"}"}{"\n"}
                  ){"\n\n"}
                  <span className="text-purple-400">print</span>(result.phone)  <span className="text-green-400"># +1 555 0123</span>{"\n"}
                  <span className="text-purple-400">print</span>(result.company)  <span className="text-green-400"># Acme Corp</span>
                </code>
              </pre>
            </motion.div>
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
              Need a Custom Integration?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Our team can help build custom integrations for your unique stack.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-colors text-lg"
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
