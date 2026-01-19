"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import {
  ArrowRight,
  Lightning,
  Shield,
  Clock,
  CheckCircle,
  Sparkle,
  Star,
} from "@phosphor-icons/react";

export default function FinalCTA() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className={`py-20 md:py-28 relative overflow-hidden ${isDark ? "bg-[#030303]" : "bg-gradient-to-b from-white to-[#f8fafc]"}`}>
      {/* Subtle Grid Pattern */}
      <div
        className={`absolute inset-0 ${isDark ? "opacity-[0.03]" : "opacity-[0.4]"}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233e8aff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className={`relative rounded-3xl overflow-hidden ${
            isDark
              ? "bg-gradient-to-br from-[#0a0f1a] via-[#0d1117] to-[#0a0a0a] border border-white/[0.08]"
              : "bg-gradient-to-br from-[#3e8aff] via-[#2563eb] to-[#1d4ed8] shadow-2xl shadow-[#3e8aff]/20"
          }`}
        >
          {/* Background Pattern for Card */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Mesh Gradient */}
            <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] ${
              isDark ? "bg-[#3e8aff]/20" : "bg-white/20"
            }`} />
            <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[80px] ${
              isDark ? "bg-[#60a5fa]/10" : "bg-white/10"
            }`} />

            {/* Subtle Lines */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke={isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.1)"}
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaGrid)" />
            </svg>
          </div>

          <div className="relative px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left Content */}
              <div>
                {/* Trust Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
                    isDark
                      ? "bg-[#3e8aff]/10 border border-[#3e8aff]/20"
                      : "bg-white/20 border border-white/30 backdrop-blur-sm"
                  }`}
                >
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} weight="fill" className={`w-4 h-4 ${isDark ? "text-yellow-400" : "text-yellow-300"}`} />
                    ))}
                  </div>
                  <span className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-white"}`}>
                    Trusted by 1,000+ GTM teams
                  </span>
                </motion.div>

                {/* Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${
                    isDark ? "text-white" : "text-white"
                  }`}
                >
                  Start enriching your data{" "}
                  <span className={isDark ? "text-[#3e8aff]" : "text-white/90"}>
                    for free
                  </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className={`text-lg mb-8 max-w-md ${
                    isDark ? "text-gray-400" : "text-white/80"
                  }`}
                >
                  Get 30 free credits to test our waterfall enrichment.
                  No credit card required.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-3 mb-8"
                >
                  <Link
                    href="#"
                    className={`group inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-xl transition-all text-base ${
                      isDark
                        ? "bg-[#3e8aff] text-white hover:bg-[#3e8aff]/90 shadow-lg shadow-[#3e8aff]/25"
                        : "bg-white text-[#3e8aff] hover:bg-white/90 shadow-lg shadow-black/10"
                    }`}
                  >
                    Start Free Trial
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" weight="bold" />
                  </Link>
                  <Link
                    href="#"
                    className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-xl transition-all text-base ${
                      isDark
                        ? "bg-white/[0.05] text-white border border-white/[0.1] hover:bg-white/[0.1]"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
                    }`}
                  >
                    Book a Demo
                  </Link>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  {[
                    { icon: <Lightning weight="fill" />, text: "30 free credits" },
                    { icon: <Shield weight="fill" />, text: "No card required" },
                    { icon: <Clock weight="fill" />, text: "5 min setup" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 text-sm ${
                        isDark ? "text-gray-400" : "text-white/80"
                      }`}
                    >
                      <span className={isDark ? "text-[#3e8aff]" : "text-white/90"}>
                        {item.icon}
                      </span>
                      {item.text}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Right Side - Stats Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="hidden lg:block"
              >
                <div className={`p-6 rounded-2xl backdrop-blur-sm ${
                  isDark
                    ? "bg-white/[0.03] border border-white/[0.08]"
                    : "bg-white/10 border border-white/20"
                }`}>
                  {/* Platform Preview */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isDark ? "bg-[#3e8aff]/20" : "bg-white/20"
                    }`}>
                      <Sparkle weight="fill" className={isDark ? "text-[#3e8aff]" : "text-white"} size={20} />
                    </div>
                    <div>
                      <div className={`font-semibold ${isDark ? "text-white" : "text-white"}`}>
                        Cleanlist Platform
                      </div>
                      <div className={`text-xs ${isDark ? "text-gray-500" : "text-white/60"}`}>
                        Enterprise-grade enrichment
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: "98%", label: "Data accuracy", highlight: true },
                      { value: "15+", label: "Data providers" },
                      { value: "400M+", label: "B2B contacts" },
                      { value: "85%", label: "Phone match rate" },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className={`p-4 rounded-xl ${
                          stat.highlight
                            ? isDark
                              ? "bg-[#3e8aff]/10 border border-[#3e8aff]/20"
                              : "bg-white/20 border border-white/30"
                            : isDark
                              ? "bg-white/[0.02]"
                              : "bg-white/10"
                        }`}
                      >
                        <div className={`text-2xl font-bold mb-1 ${
                          stat.highlight
                            ? isDark ? "text-[#3e8aff]" : "text-white"
                            : isDark ? "text-white" : "text-white"
                        }`}>
                          {stat.value}
                        </div>
                        <div className={`text-xs ${isDark ? "text-gray-500" : "text-white/60"}`}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Proof */}
                  <div className={`mt-6 pt-6 border-t ${isDark ? "border-white/[0.05]" : "border-white/10"}`}>
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-medium ${
                              isDark
                                ? "bg-gradient-to-br from-[#3e8aff]/20 to-[#3e8aff]/10 border-[#0d1117] text-[#3e8aff]"
                                : "bg-white/20 border-[#2563eb] text-white"
                            }`}
                          >
                            {["JD", "SK", "ML", "AR"][i - 1]}
                          </div>
                        ))}
                      </div>
                      <div className={`text-sm ${isDark ? "text-gray-400" : "text-white/80"}`}>
                        <span className="font-semibold">1,000+</span> teams already using Cleanlist
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className={`text-sm mb-6 ${isDark ? "text-gray-500" : "text-gray-500"}`}>
            Integrates with your existing stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["HubSpot", "Salesforce", "Pipedrive", "Outreach", "Salesloft"].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                className={`text-sm font-medium ${isDark ? "text-gray-600" : "text-gray-400"}`}
              >
                {name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
