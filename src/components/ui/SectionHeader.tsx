"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: ReactNode;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  badge,
  badgeIcon,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";

  // Split title by highlight word
  const renderTitle = () => {
    if (!highlight) {
      return <span className="text-white">{title}</span>;
    }

    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="gradient-text-blue">{highlight}</span>
        {parts[1] || ""}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${alignClasses}`}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-sm text-[#888888] mb-6">
          {badgeIcon}
          {badge}
        </span>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
        {renderTitle()}
      </h2>

      {description && (
        <p
          className={`text-lg text-[#888888] ${align === "center" ? "max-w-3xl mx-auto" : "max-w-2xl"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
