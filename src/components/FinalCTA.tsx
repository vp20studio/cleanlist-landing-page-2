"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { ArrowRight, Calendar } from "@phosphor-icons/react";

export default function FinalCTA() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className={`py-20 md:py-28 relative overflow-hidden ${isDark ? "bg-[#030303]" : "bg-[#f8fafc]"}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute -top-1/2 -left-1/4 w-[600px] h-[600px] rounded-full blur-[120px] ${
            isDark ? "bg-[#3e8aff]/20" : "bg-[#3e8aff]/15"
          }`}
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className={`absolute -bottom-1/2 -right-1/4 w-[500px] h-[500px] rounded-full blur-[100px] ${
            isDark ? "bg-purple-500/15" : "bg-purple-400/10"
          }`}
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className={`absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[80px] ${
            isDark ? "bg-cyan-500/10" : "bg-cyan-400/10"
          }`}
        />

        {/* Animated grid pattern */}
        <div
          className={`absolute inset-0 ${isDark ? "opacity-[0.03]" : "opacity-[0.04]"}`}
          style={{
            backgroundImage: `linear-gradient(${isDark ? "#fff" : "#000"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "#fff" : "#000"} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${isDark ? "bg-[#3e8aff]/40" : "bg-[#3e8aff]/30"}`}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
            Ready to clean your data?
          </h2>

          <p className={`text-base md:text-lg mb-8 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Get 30 free credits. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="https://portal.cleanlist.ai/auth/register"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3e8aff] hover:bg-[#2d7af0] text-white font-semibold rounded-lg text-sm transition-colors shadow-lg shadow-[#3e8aff]/25"
            >
              Get Started Free
              <ArrowRight size={18} weight="bold" />
            </Link>

            <Link
              href="https://calendly.com/cleanlist/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg text-sm transition-colors border backdrop-blur-sm ${
                isDark
                  ? "bg-white/5 hover:bg-white/10 text-white border-white/10"
                  : "bg-white/80 hover:bg-white text-gray-900 border-gray-200"
              }`}
            >
              <Calendar size={18} weight="fill" className="text-[#3e8aff]" />
              Book a Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
