"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { GlowIcon } from "@/components/ui";
import {
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Clock,
  Building,
} from "lucide-react";

const benefits = [
  { icon: <Zap />, text: "30 credits free", color: "blue" as const },
  { icon: <Shield />, text: "No card required", color: "green" as const },
  { icon: <Clock />, text: "Setup in 5 minutes", color: "purple" as const },
];

export default function FinalCTA() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background - Theme aware */}
      <div className={`absolute inset-0 ${isDark ? "bg-[#030303]" : "bg-white"}`} />

      {/* Animated Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] rounded-full blur-[150px] ${
          isDark ? "bg-[#3e8aff]/15" : "bg-[#3e8aff]/10"
        }`}
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, 60, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className={`absolute top-1/4 right-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-full blur-[100px] ${
          isDark ? "bg-purple-500/15" : "bg-purple-500/10"
        }`}
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -40, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className={`absolute bottom-1/4 left-1/4 w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full blur-[100px] ${
          isDark ? "bg-green-500/10" : "bg-green-500/8"
        }`}
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1.5 h-1.5 rounded-full ${
            isDark ? "bg-[#3e8aff]/40" : "bg-[#3e8aff]/30"
          }`}
          style={{
            left: `${5 + i * 6}%`,
            top: `${10 + (i % 5) * 18}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
        />
      ))}

      {/* Radial Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute top-1/2 left-1/2 h-[1px] ${
              isDark
                ? "bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
                : "bg-gradient-to-r from-transparent via-[#3e8aff]/10 to-transparent"
            }`}
            style={{
              width: "150%",
              transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center z-10">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 mb-8"
        >
          <GlowIcon icon={<Sparkles />} size="xs" color="blue" variant="glow" animated />
          <span className="text-sm font-medium text-[#3e8aff]">
            No credit card required
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Your first{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
            30 credits
          </span>{" "}
          are free
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          No commitment. See why 1,000+ GTM teams trust Cleanlist for verified contact data.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 md:gap-4 mb-10"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#"
              className="relative inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#3e8aff] text-white font-medium rounded-xl hover:bg-[#3e8aff]/90 transition-colors text-base md:text-lg w-full sm:w-auto justify-center overflow-hidden group shadow-lg shadow-[#3e8aff]/25"
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              <span className="relative flex items-center gap-2">
                Start Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#"
              className={`inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 border font-medium rounded-xl transition-colors text-base md:text-lg w-full sm:w-auto justify-center ${
                isDark
                  ? "border-white/[0.15] text-white hover:bg-white/[0.05]"
                  : "border-gray-300 text-gray-900 hover:bg-gray-100"
              }`}
            >
              <Building className="w-5 h-5" />
              Book a Demo
            </Link>
          </motion.div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className={`flex items-center gap-2 text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <GlowIcon icon={benefit.icon} size="xs" color={benefit.color} variant="glow" />
              <span>{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8"
        >
          {[
            { value: "85%", label: "Phone retrieval" },
            { value: "400M+", label: "Contacts" },
            { value: "15+", label: "Data providers" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -3, scale: 1.05 }}
              className={`px-4 py-3 rounded-xl border backdrop-blur-sm transition-all cursor-default ${
                isDark
                  ? "bg-white/[0.03] border-white/[0.08] hover:border-[#3e8aff]/30"
                  : "bg-white/50 border-gray-200 hover:border-[#3e8aff]/30"
              }`}
            >
              <div className="text-xl md:text-2xl font-bold text-[#3e8aff]">
                {stat.value}
              </div>
              <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
