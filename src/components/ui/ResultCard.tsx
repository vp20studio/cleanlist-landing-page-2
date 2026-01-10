"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";

interface ResultCardProps {
  company: string;
  logo?: string;
  metric: string;
  value: string;
  change: string;
  positive?: boolean;
  industry?: string;
}

export default function ResultCard({
  company,
  logo,
  metric,
  value,
  change,
  positive = true,
  industry,
}: ResultCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      className="group relative rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(10,10,10,0.6)] backdrop-blur-xl p-4 overflow-hidden transition-all duration-300 hover:border-[rgba(62,138,255,0.3)]"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(62,138,255,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative z-10">
        {/* Company */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-[rgba(255,255,255,0.05)] flex items-center justify-center text-white font-semibold text-sm">
            {logo || company.slice(0, 2)}
          </div>
          <div>
            <p className="text-sm font-medium text-white">{company}</p>
            {industry && (
              <p className="text-xs text-[#888888]">{industry}</p>
            )}
          </div>
        </div>

        {/* Metric */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs text-[#888888] mb-1">{metric}</p>
            <p className="text-2xl font-bold text-white">{value}</p>
          </div>
          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium ${
              positive
                ? "bg-[rgba(34,197,94,0.1)] text-[#22c55e]"
                : "bg-[rgba(239,68,68,0.1)] text-[#ef4444]"
            }`}
          >
            {positive ? (
              <TrendingUp className="w-3.5 h-3.5" />
            ) : (
              <TrendingDown className="w-3.5 h-3.5" />
            )}
            {change}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
