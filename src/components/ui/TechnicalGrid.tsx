"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TechnicalBlock {
  icon?: ReactNode;
  label: string;
  value: string;
  subValue?: string;
  highlight?: boolean;
  color?: "blue" | "green" | "yellow" | "red" | "purple";
}

interface TechnicalGridProps {
  blocks: TechnicalBlock[];
  columns?: 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const colorClasses = {
  blue: "text-[#3e8aff] bg-[#3e8aff]/10 border-[#3e8aff]/20",
  green: "text-green-500 bg-green-500/10 border-green-500/20",
  yellow: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
  red: "text-red-500 bg-red-500/10 border-red-500/20",
  purple: "text-purple-500 bg-purple-500/10 border-purple-500/20",
};

export default function TechnicalGrid({
  blocks,
  columns = 4,
  className = "",
}: TechnicalGridProps) {
  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
    5: "grid-cols-2 md:grid-cols-5",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4 ${className}`}>
      {blocks.map((block, index) => (
        <motion.div
          key={block.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className={`relative p-4 rounded-xl border ${
            block.highlight
              ? "bg-[#3e8aff]/5 border-[#3e8aff]/30"
              : "bg-[#0a0a0a] border-white/[0.08]"
          } hover:border-[#3e8aff]/30 transition-colors group`}
        >
          {block.icon && (
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                block.color
                  ? colorClasses[block.color]
                  : "bg-[#3e8aff]/10 text-[#3e8aff]"
              }`}
            >
              {block.icon}
            </div>
          )}

          <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
            {block.label}
          </div>
          <div className="text-xl font-bold text-white">{block.value}</div>
          {block.subValue && (
            <div className="text-xs text-gray-500 mt-1">{block.subValue}</div>
          )}

          {block.highlight && (
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#3e8aff] animate-pulse" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
