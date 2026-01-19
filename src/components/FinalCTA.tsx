"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { ArrowRight, Play } from "@phosphor-icons/react";

// Integration logos
const integrations = [
  { name: "HubSpot", logo: "/images/integrations/hubspot.png" },
  { name: "Pipedrive", logo: "/images/integrations/pipedrive.png" },
  { name: "Outreach", logo: "/images/integrations/outreach.png" },
  { name: "Affinity", logo: "/images/integrations/affinity.svg" },
  { name: "Salesloft", logo: "/images/integrations/salesloft.svg" },
  { name: "Close", logo: "/images/integrations/close.png" },
  { name: "Freshsales", logo: "/images/integrations/freshsales.png" },
  { name: "ActiveCampaign", logo: "/images/integrations/activecampaign.webp" },
];

export default function FinalCTA() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-40 relative overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${isDark ? "bg-[#030303]" : "bg-[#fafbfc]"}`} />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] rounded-full blur-[150px] bg-[#3e8aff]/30"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, 100, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] bg-[#60a5fa]/25"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          y: [0, -80, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full blur-[100px] bg-[#3e8aff]/20"
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#3e8aff]"
          style={{
            left: `${10 + i * 6}%`,
            top: `${20 + (i % 5) * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-6 z-10">
        {/* Premium Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`relative rounded-3xl md:rounded-[2rem] p-8 md:p-16 overflow-hidden ${
            isDark
              ? "bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.1]"
              : "bg-white/80 border border-gray-200/80 shadow-2xl shadow-[#3e8aff]/10"
          } backdrop-blur-xl`}
        >
          {/* Inner glow */}
          <div className="absolute inset-0 rounded-3xl md:rounded-[2rem] overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#3e8aff]/50 to-transparent" />
            <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? "from-[#3e8aff]/5 to-transparent" : "from-[#3e8aff]/[0.03] to-transparent"}`} />
          </div>

          {/* Animated corner accents */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#3e8aff]/20 to-transparent rounded-bl-full"
          />
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#3e8aff]/20 to-transparent rounded-tr-full"
          />

          <div className="relative text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-[#3e8aff]"
              />
              <span className="text-sm font-semibold text-[#3e8aff]">
                Start free today
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Stop losing deals to
              <br />
              <span className="relative inline-block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] via-[#60a5fa] to-[#3e8aff] bg-[length:200%_auto] animate-gradient">
                  bad data
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#3e8aff] to-[#60a5fa] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`text-lg md:text-xl lg:text-2xl mb-10 max-w-2xl mx-auto ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Get 30 free credits. No credit card required.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {/* Primary CTA */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#3e8aff] to-[#60a5fa] rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
                <Link
                  href="https://portal.cleanlist.ai/auth/register"
                  className="relative inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#3e8aff] to-[#2563eb] text-white font-bold rounded-xl text-lg md:text-xl overflow-hidden"
                >
                  {/* Shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                  <span className="relative">Get Started Free</span>
                  <ArrowRight className="relative group-hover:translate-x-1 transition-transform" size={24} weight="bold" />
                </Link>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="https://calendly.com/cleanlist/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-lg md:text-xl border-2 transition-all ${
                    isDark
                      ? "border-white/20 text-white hover:border-[#3e8aff]/50 hover:bg-white/5"
                      : "border-gray-300 text-gray-900 hover:border-[#3e8aff]/50 hover:bg-[#3e8aff]/5"
                  }`}
                >
                  <Play weight="fill" size={20} />
                  Watch Demo
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 pt-10 border-t border-[#3e8aff]/10"
            >
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                {[
                  { value: "98%", label: "Email accuracy" },
                  { value: "85%", label: "Phone retrieval" },
                  { value: "15+", label: "Data providers" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#3e8aff]">
                      {stat.value}
                    </div>
                    <div className={`text-sm font-medium mt-1 ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Integrates with your stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className={`text-xs uppercase tracking-[0.2em] font-semibold mb-8 ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}>
            Integrates with your stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {integrations.map((integration, i) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1.1 + i * 0.05 }}
                whileHover={{ scale: 1.15, y: -4 }}
                className={`relative p-3 rounded-xl transition-all cursor-pointer group ${
                  isDark
                    ? "bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#3e8aff]/30"
                    : "bg-white hover:bg-white border border-gray-100 hover:border-[#3e8aff]/30 shadow-sm hover:shadow-lg"
                }`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl bg-[#3e8aff]/0 group-hover:bg-[#3e8aff]/5 transition-colors" />
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  width={32}
                  height={32}
                  className="relative w-8 h-8 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Add keyframes for gradient animation */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
