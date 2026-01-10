"use client";

import { motion } from "framer-motion";

interface DataSource {
  name: string;
  category: "enrichment" | "verification" | "integration";
  matchRate?: string;
  responseTime?: string;
}

const dataSources: DataSource[] = [
  { name: "Apollo", category: "enrichment", matchRate: "72%", responseTime: "0.3s" },
  { name: "ZoomInfo", category: "enrichment", matchRate: "68%", responseTime: "0.5s" },
  { name: "Clearbit", category: "enrichment", matchRate: "65%", responseTime: "0.4s" },
  { name: "Hunter", category: "enrichment", matchRate: "58%", responseTime: "0.2s" },
  { name: "Lusha", category: "enrichment", matchRate: "55%", responseTime: "0.6s" },
  { name: "RocketReach", category: "enrichment", matchRate: "62%", responseTime: "0.4s" },
  { name: "LeadIQ", category: "enrichment", matchRate: "54%", responseTime: "0.5s" },
  { name: "Cognism", category: "enrichment", matchRate: "60%", responseTime: "0.7s" },
  { name: "SalesIntel", category: "enrichment", matchRate: "52%", responseTime: "0.5s" },
  { name: "Seamless.AI", category: "enrichment", matchRate: "56%", responseTime: "0.6s" },
  { name: "UpLead", category: "enrichment", matchRate: "48%", responseTime: "0.4s" },
  { name: "Lead411", category: "enrichment", matchRate: "45%", responseTime: "0.5s" },
  { name: "ContactOut", category: "enrichment", matchRate: "52%", responseTime: "0.4s" },
  { name: "Dropcontact", category: "verification", matchRate: "N/A", responseTime: "0.3s" },
  { name: "NeverBounce", category: "verification", matchRate: "N/A", responseTime: "0.2s" },
];

interface DataSourcesGridProps {
  sources?: DataSource[];
  showStats?: boolean;
  className?: string;
}

export default function DataSourcesGrid({
  sources = dataSources,
  showStats = true,
  className = "",
}: DataSourcesGridProps) {
  return (
    <div className={className}>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-3">
        {sources.map((source, index) => (
          <motion.div
            key={source.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            className="group relative p-4 rounded-xl bg-[#0a0a0a] border border-white/[0.08] hover:border-[#3e8aff]/30 transition-all hover:bg-[#0d0d0d]"
          >
            {/* Logo Placeholder */}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/[0.08] to-white/[0.02] flex items-center justify-center mb-3">
              <span className="text-sm font-bold text-gray-400">{source.name[0]}</span>
            </div>

            <div className="text-sm font-medium text-white mb-1">{source.name}</div>

            {showStats && (
              <div className="flex items-center gap-3 text-xs text-gray-500">
                {source.matchRate && source.matchRate !== "N/A" && (
                  <span className="text-green-500">{source.matchRate}</span>
                )}
                <span>{source.responseTime}</span>
              </div>
            )}

            {/* Hover Glow */}
            <div className="absolute inset-0 rounded-xl bg-[#3e8aff]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* Combined Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#3e8aff]/10 to-transparent border border-[#3e8aff]/20"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-400">Combined Coverage</div>
            <div className="text-2xl font-bold text-white">
              95%+ <span className="text-sm font-normal text-gray-500">match rate</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Avg Response</div>
            <div className="text-2xl font-bold text-[#3e8aff]">
              &lt;0.5s <span className="text-sm font-normal text-gray-500">per source</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
