"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ArrowsClockwise,
  Lightning,
  Shield,
  Clock,
} from "@/components/icons";
import { useTheme } from "@/context/ThemeContext";

// All integrations - CRMs and outreach platforms
const allIntegrations = [
  { name: "HubSpot", logo: "/images/integrations/hubspot.png", category: "crm", color: "#ff7a59" },
  { name: "ActiveCampaign", logo: "/images/integrations/activecampaign.webp", category: "marketing", color: "#004cff" },
  { name: "Affinity", logo: "/images/integrations/affinity.svg", category: "crm", color: "#4285f4" },
  { name: "Close", logo: "/images/integrations/close.png", category: "crm", color: "#1a1a1a" },
  { name: "Freshsales CRM", logo: "/images/integrations/freshsales.png", category: "crm", color: "#f26d21" },
  { name: "Holded", logo: "/images/integrations/holded.png", category: "crm", color: "#2196f3" },
  { name: "Insightly", logo: "/images/integrations/insightly.png", category: "crm", color: "#e94444" },
  { name: "Marketing360", logo: "/images/integrations/marketing360.png", category: "marketing", color: "#00a0e4" },
  { name: "Outreach.io", logo: "/images/integrations/outreach.png", category: "sales", color: "#5951ff" },
  { name: "Pipedrive", logo: "/images/integrations/pipedrive.png", category: "crm", color: "#00d084" },
  { name: "RecruitCRM", logo: "/images/integrations/recruitcrm.png", category: "crm", color: "#1a73e8" },
  { name: "Salesflare", logo: "/images/integrations/salesflare.webp", category: "crm", color: "#0066ff" },
  { name: "Salesloft", logo: "/images/integrations/salesloft.svg", category: "sales", color: "#0b6fcc" },
];

const integrationCategories = [
  { id: "crm", label: "CRM", color: "#3b82f6" },
  { id: "sales", label: "Sales Engagement", color: "#22c55e" },
  { id: "marketing", label: "Marketing", color: "#8b5cf6" },
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

      {/* Native Integrations Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-5 md:p-8 rounded-2xl border transition-colors ${isDark ? "bg-[#030303] border-white/[0.08]" : "bg-white/70 border-black/[0.08]"}`}
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
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center border mb-2 overflow-hidden bg-white ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}
                  >
                    <Image
                      src={integration.logo}
                      alt={integration.name}
                      width={28}
                      height={28}
                      className="w-6 h-6 md:w-7 md:h-7 object-contain"
                    />
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
      <section className={`py-12 border-y transition-colors ${isDark ? "border-white/[0.08] bg-[#030303]" : "border-black/[0.08] bg-[#F8F9FA]"}`}>
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
      <section className={`py-16 md:py-24 transition-colors ${isDark ? "bg-[#030303]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
                <Lightning />
                REST API
              </div>
              <h2 className={`text-3xl md:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
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
              className={`rounded-xl border overflow-hidden ${isDark ? "bg-[#030303] border-white/[0.08]" : "bg-white/70 border-black/[0.08]"}`}
            >
              <div className={`flex items-center gap-2 px-4 py-3 border-b ${isDark ? "border-white/[0.08] bg-[#030303]" : "border-black/[0.08] bg-[#F8F9FA]"}`}>
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

    </>
  );
}
