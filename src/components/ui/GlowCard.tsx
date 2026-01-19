"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useTheme } from "@/context/ThemeContext";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "#3e8aff",
  hover = true,
  padding = "md",
}: GlowCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <motion.div
      whileHover={hover ? { y: -2 } : undefined}
      className={`group relative rounded-2xl border backdrop-blur-xl overflow-hidden transition-all duration-500 ${
        isDark
          ? "border-white/[0.08] bg-[rgba(10,10,10,0.6)]"
          : "border-[#3e8aff]/20 bg-gradient-to-br from-[#3e8aff]/5 to-white/80 shadow-lg shadow-[#3e8aff]/5"
      } ${hover ? "hover:border-[rgba(62,138,255,0.3)]" : ""} ${paddingClasses[padding]} ${className}`}
    >
      {/* Hover glow */}
      {hover && (
        <>
          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `linear-gradient(135deg, ${glowColor}${isDark ? '08' : '15'} 0%, transparent 50%)`,
            }}
          />
          <div
            className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
            style={{ backgroundColor: `${glowColor}${isDark ? '15' : '10'}` }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
