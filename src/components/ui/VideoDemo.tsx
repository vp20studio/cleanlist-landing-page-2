"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { Sparkle, Play } from "@phosphor-icons/react";

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
      {/* Animated background glow orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-64 h-64 bg-[#3e8aff]/20 rounded-full blur-[100px] -z-10"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/15 rounded-full blur-[100px] -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 -left-32 w-48 h-48 bg-green-500/10 rounded-full blur-[80px] -z-10"
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#3e8aff]/40"
          style={{
            left: `${15 + i * 15}%`,
            top: `${10 + (i % 3) * 30}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main container with gradient border effect */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative group"
      >
        {/* Gradient border glow on hover */}
        <div
          className={`absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
            isDark ? "bg-gradient-to-r from-[#3e8aff]/50 via-purple-500/50 to-[#3e8aff]/50" : "bg-gradient-to-r from-[#3e8aff]/30 via-purple-500/30 to-[#3e8aff]/30"
          }`}
          style={{ filter: "blur(2px)" }}
        />

        <div
          className={`relative rounded-2xl border overflow-hidden ${
            isDark
              ? "bg-[#0a0a0a] border-white/[0.08]"
              : "bg-white border-black/[0.08]"
          }`}
          style={{
            boxShadow: isDark
              ? "0 0 80px rgba(62, 138, 255, 0.12), 0 0 40px rgba(62, 138, 255, 0.08), inset 0 1px 0 rgba(255,255,255,0.03)"
              : "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 40px rgba(62, 138, 255, 0.05)",
          }}
        >
          {/* Window Chrome */}
          <div
            className={`flex items-center justify-between px-4 py-3 border-b ${
              isDark ? "border-white/[0.05] bg-[#0a0a0a]" : "border-black/[0.05] bg-gray-50/50"
            }`}
          >
            <div className="flex items-center gap-3">
              {/* Window controls */}
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_rgba(255,95,87,0.4)]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[0_0_6px_rgba(254,188,46,0.4)]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-[0_0_6px_rgba(40,200,64,0.4)]" />
              </div>

              {/* Title with icon */}
              <div className="flex items-center gap-2 ml-2">
                <Sparkle className="w-3.5 h-3.5 text-[#3e8aff]" weight="fill" />
                <span className={`text-xs font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  {title}
                </span>
              </div>
            </div>

            {/* Live indicator */}
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
              />
              <span className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                Live
              </span>
            </div>
          </div>

          {/* Video container */}
          <div className="relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto block"
            >
              {webmSrc && <source src={webmSrc} type="video/webm" />}
              <source src={src} type="video/mp4" />
              <source src={src} type="video/quicktime" />
            </video>

            {/* Subtle vignette overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: isDark
                  ? "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.15) 100%)"
                  : "radial-gradient(ellipse at center, transparent 70%, rgba(0,0,0,0.05) 100%)",
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Reflection effect */}
      <div
        className="absolute -bottom-12 left-4 right-4 h-24 rounded-2xl opacity-30 -z-10 blur-sm"
        style={{
          background: isDark
            ? "linear-gradient(to bottom, rgba(62, 138, 255, 0.1), transparent)"
            : "linear-gradient(to bottom, rgba(62, 138, 255, 0.05), transparent)",
          transform: "scaleY(-0.3) perspective(500px) rotateX(30deg)",
        }}
      />
    </div>
  );
}
