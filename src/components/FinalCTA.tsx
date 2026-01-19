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
  Sparkle,
  Check,
  Play,
} from "@phosphor-icons/react";

export default function FinalCTA() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className={`relative py-24 md:py-32 overflow-hidden ${
      isDark ? "bg-[#030303]" : "bg-white"
    }`}>
      {/* Subtle background gradient */}
      <div className={`absolute inset-0 ${
        isDark
          ? "bg-gradient-to-b from-[#0a0a0a] via-[#030303] to-[#030303]"
          : "bg-gradient-to-b from-[#f8fafc] via-white to-white"
      }`} />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
                isDark
                  ? "bg-[#3e8aff]/10 border border-[#3e8aff]/20"
                  : "bg-[#3e8aff]/5 border border-[#3e8aff]/10"
              }`}
            >
              <Sparkle weight="fill" className="w-4 h-4 text-[#3e8aff]" />
              <span className={`text-sm font-medium ${isDark ? "text-[#3e8aff]" : "text-[#3e8aff]"}`}>
                Start for free
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Ready to{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                  transform
                </span>
                {/* Underline accent */}
                <motion.svg
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <motion.path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="url(#underlineGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3e8aff" />
                      <stop offset="100%" stopColor="#60a5fa" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
              <br />
              your GTM data?
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-lg md:text-xl mb-8 max-w-lg ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Join 1,000+ GTM teams using Cleanlist to enrich, verify, and score their prospect data.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link
                href="#"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#3e8aff] text-white font-semibold rounded-xl transition-all hover:bg-[#2563eb] shadow-lg shadow-[#3e8aff]/25 hover:shadow-xl hover:shadow-[#3e8aff]/30"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" weight="bold" />
              </Link>
              <Link
                href="#"
                className={`group inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded-xl transition-all ${
                  isDark
                    ? "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20"
                    : "bg-gray-50 text-gray-900 border border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                }`}
              >
                <Play weight="fill" className="w-4 h-4" />
                <span>Watch Demo</span>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6"
            >
              {[
                { icon: <Lightning weight="fill" />, text: "30 free credits" },
                { icon: <Shield weight="fill" />, text: "No card required" },
                { icon: <Clock weight="fill" />, text: "5 minute setup" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 ${
                    isDark ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  <span className="text-[#3e8aff]">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            {/* Floating glow behind card */}
            <div className={`absolute -inset-4 rounded-[2rem] blur-3xl ${
              isDark ? "bg-[#3e8aff]/10" : "bg-[#3e8aff]/5"
            }`} />

            {/* Main Card */}
            <div className={`relative rounded-3xl overflow-hidden ${
              isDark
                ? "bg-gradient-to-br from-[#0d0d0d] to-[#0a0a0a] border border-white/[0.08]"
                : "bg-white border border-gray-200 shadow-2xl shadow-gray-200/50"
            }`}>
              {/* Card Header */}
              <div className={`px-6 py-5 border-b ${isDark ? "border-white/[0.05]" : "border-gray-100"}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isDark ? "bg-[#3e8aff]/20" : "bg-[#3e8aff]/10"
                    }`}>
                      <Image
                        src="/images/favicon.png"
                        alt="Cleanlist"
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    </div>
                    <div>
                      <div className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                        Cleanlist
                      </div>
                      <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                        Waterfall Enrichment
                      </div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    isDark
                      ? "bg-green-500/20 text-green-400"
                      : "bg-green-50 text-green-600"
                  }`}>
                    Active
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { value: "98%", label: "Data accuracy", highlight: true },
                    { value: "15+", label: "Data providers" },
                    { value: "400M+", label: "B2B contacts" },
                    { value: "85%", label: "Phone match rate" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                      className={`p-4 rounded-xl ${
                        stat.highlight
                          ? isDark
                            ? "bg-[#3e8aff]/10 border border-[#3e8aff]/20"
                            : "bg-[#3e8aff]/5 border border-[#3e8aff]/10"
                          : isDark
                            ? "bg-white/[0.02] border border-white/[0.05]"
                            : "bg-gray-50 border border-gray-100"
                      }`}
                    >
                      <div className={`text-2xl md:text-3xl font-bold mb-1 ${
                        stat.highlight
                          ? "text-[#3e8aff]"
                          : isDark ? "text-white" : "text-gray-900"
                      }`}>
                        {stat.value}
                      </div>
                      <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Features List */}
                <div className={`p-4 rounded-xl mb-6 ${
                  isDark ? "bg-white/[0.02]" : "bg-gray-50"
                }`}>
                  <div className={`text-xs font-medium uppercase tracking-wider mb-3 ${
                    isDark ? "text-gray-500" : "text-gray-400"
                  }`}>
                    Included in free trial
                  </div>
                  <div className="space-y-2">
                    {[
                      "Waterfall enrichment from 15+ providers",
                      "Email & phone verification",
                      "Chrome extension access",
                      "CRM integrations",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check weight="bold" className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Proof */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {["S", "M", "J", "A"].map((initial, i) => (
                        <div
                          key={i}
                          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-semibold ${
                            isDark
                              ? "bg-gradient-to-br from-[#3e8aff]/30 to-[#3e8aff]/10 border-[#0a0a0a] text-[#3e8aff]"
                              : "bg-gradient-to-br from-[#3e8aff]/20 to-[#3e8aff]/5 border-white text-[#3e8aff]"
                          }`}
                        >
                          {initial}
                        </div>
                      ))}
                    </div>
                    <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      <span className="font-semibold">1,000+</span> teams
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className={`text-sm ml-1 ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                      4.9
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className={`absolute -left-4 top-1/4 px-4 py-2 rounded-xl shadow-lg ${
                isDark
                  ? "bg-[#0d0d0d] border border-white/[0.1]"
                  : "bg-white border border-gray-200 shadow-xl"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className={`text-xs font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  Syncing data...
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20, x: 20 }}
              animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className={`absolute -right-4 bottom-1/4 px-4 py-2 rounded-xl shadow-lg ${
                isDark
                  ? "bg-[#0d0d0d] border border-white/[0.1]"
                  : "bg-white border border-gray-200 shadow-xl"
              }`}
            >
              <div className="flex items-center gap-2">
                <Check weight="bold" className="w-4 h-4 text-green-500" />
                <span className={`text-xs font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  Email verified
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Integration Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className={`mt-20 pt-12 border-t ${isDark ? "border-white/[0.05]" : "border-gray-100"}`}
        >
          <div className="text-center">
            <p className={`text-sm mb-8 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
              Integrates seamlessly with your existing stack
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {[
                { name: "HubSpot", logo: "/images/integrations/hubspot.png" },
                { name: "Salesforce", logo: "/images/integrations/salesflare.webp" },
                { name: "Pipedrive", logo: "/images/integrations/pipedrive.png" },
                { name: "Outreach", logo: "/images/integrations/outreach.png" },
                { name: "Salesloft", logo: "/images/integrations/salesloft.svg" },
              ].map((integration, i) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                  className={`flex items-center gap-2 ${
                    isDark ? "opacity-50 hover:opacity-80" : "opacity-60 hover:opacity-100"
                  } transition-opacity`}
                >
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                  <span className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                    {integration.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
