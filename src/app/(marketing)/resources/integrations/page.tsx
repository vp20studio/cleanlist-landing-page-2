"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Plug,
  Check,
  RefreshCw,
  Zap,
  Shield,
  Clock,
} from "lucide-react";

const integrations = {
  crm: [
    { name: "HubSpot", status: "live", type: "Native" },
    { name: "Salesforce", status: "live", type: "Native" },
    { name: "Pipedrive", status: "live", type: "Native" },
    { name: "Zoho CRM", status: "live", type: "Native" },
    { name: "Recruitcrm", status: "live", type: "Native" },
  ],
  dataExport: [
    { name: "CSV Export", status: "live", type: "Native" },
    { name: "Google Sheets", status: "live", type: "Native" },
  ],
  browser: [
    { name: "Chrome Extension", status: "live", type: "Native" },
    { name: "Edge", status: "live", type: "Native" },
    { name: "Brave", status: "live", type: "Native" },
    { name: "Firefox", status: "coming", type: "Native" },
  ],
  automation: [
    { name: "Webhooks", status: "live", type: "Native" },
    { name: "REST API", status: "live", type: "Native" },
  ],
};

export default function IntegrationsPage() {
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
            <Plug className="w-4 h-4" />
            Integrations
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Connect With Your Stack
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Native integrations with your CRM, sales engagement tools, and data
            warehouse. Sync enriched data anywhere.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/[0.08] bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Plug className="w-5 h-5" />, value: "5", label: "CRM Integrations" },
              { icon: <RefreshCw className="w-5 h-5" />, value: "Real-time", label: "Bi-directional Sync" },
              { icon: <Clock className="w-5 h-5" />, value: "<5 min", label: "Setup Time" },
              { icon: <Shield className="w-5 h-5" />, value: "OAuth", label: "Secure Auth" },
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

      {/* Integration Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          {Object.entries(integrations).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-16 last:mb-0"
            >
              <h2 className="text-2xl font-bold text-white mb-6 capitalize">
                {category.replace(/([A-Z])/g, " $1").trim()}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((integration) => (
                  <div
                    key={integration.name}
                    className="p-4 rounded-xl bg-[#0a0a0a] border border-white/[0.08] hover:border-[#3e8aff]/30 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center text-sm font-bold text-gray-400">
                        {integration.name[0]}
                      </div>
                      <div>
                        <div className="font-medium text-white">{integration.name}</div>
                        <div className="text-xs text-gray-500">{integration.type}</div>
                      </div>
                    </div>
                    <div
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        integration.status === "live"
                          ? "bg-green-500/10 text-green-500"
                          : integration.status === "beta"
                          ? "bg-yellow-500/10 text-yellow-500"
                          : "bg-gray-500/10 text-gray-500"
                      }`}
                    >
                      {integration.status === "live"
                        ? "Live"
                        : integration.status === "beta"
                        ? "Beta"
                        : "Coming Soon"}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
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
