"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { Sparkle } from "@phosphor-icons/react";

interface VideoDemoProps {
  src: string;
  webmSrc?: string;
  title?: string;
  className?: string;
}

export default function VideoDemo({
  src,
  webmSrc,
  title = "Live Demo",
  className = "",
}: VideoDemoProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`relative ${className}`}>
      {/* Decorative blurs */}
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#3e8aff]/20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`rounded-2xl border overflow-hidden ${
          isDark
            ? "bg-[#0a0a0a] border-white/[0.08]"
            : "bg-white border-black/[0.08]"
        }`}
        style={{
          boxShadow: isDark
            ? "0 0 60px rgba(62, 138, 255, 0.15)"
            : "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        }}
      >
        {/* Window Controls - matches existing pattern */}
        <div
          className={`flex items-center gap-2 px-4 py-3 border-b ${
            isDark ? "border-white/[0.05]" : "border-black/[0.05]"
          }`}
        >
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Sparkle className="w-3.5 h-3.5 text-[#3e8aff]" weight="fill" />
            <span
              className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}
            >
              {title}
            </span>
          </div>
        </div>

        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block"
        >
          {webmSrc && <source src={webmSrc} type="video/webm" />}
          <source src={src} type="video/mp4" />
          <source src={src.replace(".mp4", ".mov")} type="video/quicktime" />
        </video>
      </motion.div>
    </div>
  );
}
