"use client";

import { motion } from "framer-motion";
import { cloneElement, isValidElement } from "react";

export interface GlowIconProps {
  icon: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "blue" | "green" | "purple" | "red" | "yellow" | "gray" | "linkedin";
  variant?: "glow" | "solid" | "outline" | "ghost";
  animated?: boolean;
  className?: string;
}

const sizeMap = {
  xs: { container: "w-6 h-6", icon: "w-3 h-3", radius: "rounded-lg" },
  sm: { container: "w-8 h-8", icon: "w-4 h-4", radius: "rounded-lg" },
  md: { container: "w-10 h-10", icon: "w-5 h-5", radius: "rounded-xl" },
  lg: { container: "w-12 h-12", icon: "w-6 h-6", radius: "rounded-xl" },
  xl: { container: "w-14 h-14", icon: "w-7 h-7", radius: "rounded-2xl" },
};

const colorMap = {
  blue: {
    bg: "bg-gradient-to-br from-[#3e8aff]/15 to-[#3e8aff]/5",
    bgSolid: "bg-[#3e8aff]",
    border: "border-[#3e8aff]/20",
    text: "text-[#3e8aff]",
    textSolid: "text-white",
    glow: "shadow-[0_0_20px_rgba(62,138,255,0.25)]",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(62,138,255,0.4)]",
  },
  green: {
    bg: "bg-gradient-to-br from-[#22c55e]/15 to-[#22c55e]/5",
    bgSolid: "bg-[#22c55e]",
    border: "border-[#22c55e]/20",
    text: "text-[#22c55e]",
    textSolid: "text-white",
    glow: "shadow-[0_0_20px_rgba(34,197,94,0.25)]",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]",
  },
  purple: {
    bg: "bg-gradient-to-br from-purple-500/15 to-purple-500/5",
    bgSolid: "bg-purple-500",
    border: "border-purple-500/20",
    text: "text-purple-500",
    textSolid: "text-white",
    glow: "shadow-[0_0_20px_rgba(139,92,246,0.25)]",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]",
  },
  red: {
    bg: "bg-gradient-to-br from-[#ef4444]/15 to-[#ef4444]/5",
    bgSolid: "bg-[#ef4444]",
    border: "border-[#ef4444]/20",
    text: "text-[#ef4444]",
    textSolid: "text-white",
    glow: "shadow-[0_0_20px_rgba(239,68,68,0.25)]",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]",
  },
  yellow: {
    bg: "bg-gradient-to-br from-[#f59e0b]/15 to-[#f59e0b]/5",
    bgSolid: "bg-[#f59e0b]",
    border: "border-[#f59e0b]/20",
    text: "text-[#f59e0b]",
    textSolid: "text-white",
    glow: "shadow-[0_0_20px_rgba(245,158,11,0.25)]",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]",
  },
  gray: {
    bg: "bg-gradient-to-br from-gray-500/15 to-gray-500/5",
    bgSolid: "bg-gray-500",
    border: "border-gray-500/20",
    text: "text-gray-500",
    textSolid: "text-white",
    glow: "shadow-[0_0_20px_rgba(107,114,128,0.25)]",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(107,114,128,0.4)]",
  },
  linkedin: {
    bg: "bg-gradient-to-br from-[#0077b5]/15 to-[#0077b5]/5",
    bgSolid: "bg-[#0077b5]",
    border: "border-[#0077b5]/20",
    text: "text-[#0077b5]",
    textSolid: "text-white",
    glow: "shadow-[0_0_20px_rgba(0,119,181,0.25)]",
    hoverGlow: "hover:shadow-[0_0_30px_rgba(0,119,181,0.4)]",
  },
};

export default function GlowIcon({
  icon,
  size = "md",
  color = "blue",
  variant = "glow",
  animated = false,
  className = "",
}: GlowIconProps) {
  const sizeClasses = sizeMap[size];
  const colorClasses = colorMap[color];

  // Clone icon with proper sizing and color
  const iconTextColor = variant === "solid" ? colorClasses.textSolid : colorClasses.text;
  const styledIcon = isValidElement<{ className?: string }>(icon)
    ? cloneElement(icon, {
        className: `${sizeClasses.icon} ${iconTextColor}`,
      })
    : icon;

  // Ghost variant - just return the styled icon without container
  if (variant === "ghost") {
    return <>{styledIcon}</>;
  }

  // Build container classes based on variant
  const getContainerClasses = () => {
    const base = `${sizeClasses.container} ${sizeClasses.radius} flex items-center justify-center border transition-all duration-300`;

    switch (variant) {
      case "glow":
        return `${base} ${colorClasses.bg} ${colorClasses.border} ${colorClasses.glow} ${colorClasses.hoverGlow}`;
      case "solid":
        return `${base} ${colorClasses.bgSolid} border-transparent ${colorClasses.glow} ${colorClasses.hoverGlow}`;
      case "outline":
        return `${base} bg-transparent ${colorClasses.border} hover:${colorClasses.bg}`;
      default:
        return base;
    }
  };

  const containerClasses = `${getContainerClasses()} ${className}`.trim();

  if (animated) {
    return (
      <motion.div
        className={containerClasses}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {styledIcon}
      </motion.div>
    );
  }

  return <div className={containerClasses}>{styledIcon}</div>;
}
