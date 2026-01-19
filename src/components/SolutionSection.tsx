"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Database,
  Target,
  Rocket,
  CheckCircle,
  Lightning,
  ArrowRight,
  Play,
  ArrowSquareOut,
  Check,
  Sparkle,
  TrendUp,
  Stack,
} from "@phosphor-icons/react";
import { useTheme } from "@/context/ThemeContext";
import { GlowIcon } from "@/components/ui";

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  visual: React.ReactNode;
  link: string;
  ctaText: string;
}

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFeature, setActiveFeature] = useState("playbooks");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Features with premium visuals
  const features: Feature[] = [
    {
      id: "playbooks",
      icon: <BookOpen weight="duotone" />,
      title: "Pre-built Playbooks",
      subtitle: "Launch in minutes, not months",
      description: "Outbound, inbound, intent, ABM — proven GTM motions ready to deploy. No GTM engineer required.",
      benefits: ["50+ templates", "Industry-specific", "Constantly updated"],
      link: "/product/playbook-builder",
      ctaText: "See it in action",
      visual: (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Outbound ICP", icon: <Target className="w-4 h-4" /> },
              { name: "Intent Signals", icon: <TrendUp className="w-4 h-4" /> },
              { name: "ABM Accounts", icon: <Sparkle className="w-4 h-4" /> },
              { name: "Inbound Qualify", icon: <CheckCircle className="w-4 h-4" /> },
            ].map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isDark
                    ? "bg-[#3e8aff]/10 border-[#3e8aff]/20 hover:border-[#3e8aff]/40"
                    : "bg-[#3e8aff]/5 border-[#3e8aff]/15 hover:border-[#3e8aff]/30 hover:shadow-lg hover:shadow-[#3e8aff]/10"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-lg ${isDark ? "bg-[#3e8aff]/20" : "bg-[#3e8aff]/10"}`}>
                    <span className="text-[#3e8aff]">{item.icon}</span>
                  </div>
                  <span className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-800"}`}>{item.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs ${
              isDark ? "bg-green-500/10 text-green-400" : "bg-green-50 text-green-600"
            }`}
          >
            <Check className="w-3.5 h-3.5" weight="bold" />
            <span>Ready to deploy instantly</span>
          </motion.div>
        </div>
      ),
    },
    {
      id: "enrichment",
      icon: <Database weight="duotone" />,
      title: "Waterfall Enrichment",
      subtitle: "15+ data providers, one click",
      description: "Cascade through multiple data sources automatically. Pay only for matches, maximize coverage.",
      benefits: ["85%+ match rates", "Cost optimized", "Real-time sync"],
      link: "/product/waterfall-enrichment",
      ctaText: "See it in action",
      visual: (
        <div className="space-y-2">
          {[
            { name: "Cleanlist Cache", status: "Checking...", active: true },
            { name: "Wiza", status: "Found", active: true },
            { name: "Findymail", status: "Found", active: true },
            { name: "Prospeo", status: "Queued", active: false },
            { name: "Lusha", status: "Queued", active: false },
          ].map((provider, i) => (
            <motion.div
              key={provider.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                provider.active
                  ? isDark
                    ? "bg-[#3e8aff]/10 border border-[#3e8aff]/25"
                    : "bg-[#3e8aff]/5 border border-[#3e8aff]/20"
                  : isDark
                    ? "bg-white/[0.02] border border-white/[0.05]"
                    : "bg-gray-50 border border-gray-100"
              }`}
            >
              <motion.div
                animate={provider.active ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
                className={`w-2.5 h-2.5 rounded-full ${
                  provider.status === "Found"
                    ? "bg-green-500"
                    : provider.active
                      ? "bg-[#3e8aff]"
                      : isDark ? "bg-gray-600" : "bg-gray-300"
                }`}
              />
              <span className={`text-sm flex-1 font-medium ${
                provider.active
                  ? isDark ? "text-white" : "text-gray-800"
                  : isDark ? "text-gray-500" : "text-gray-400"
              }`}>
                {provider.name}
              </span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                provider.status === "Found"
                  ? "bg-green-500/20 text-green-500"
                  : provider.active
                    ? "bg-[#3e8aff]/20 text-[#3e8aff]"
                    : isDark ? "bg-white/5 text-gray-500" : "bg-gray-100 text-gray-400"
              }`}>
                {provider.status}
              </span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`text-center text-xs py-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}
          >
            + 10 more providers available
          </motion.div>
        </div>
      ),
    },
    {
      id: "validation",
      icon: <Target weight="duotone" />,
      title: "ICP Scoring",
      subtitle: "Score leads that actually convert",
      description: "Custom rules, AI-powered scoring, and automatic routing. Every lead scored and sorted instantly.",
      benefits: ["Custom ICP rules", "AI scoring", "Auto-routing"],
      link: "/product/icp-scoring",
      ctaText: "See it in action",
      visual: (
        <div className="space-y-4">
          {/* Score Display */}
          <div className={`p-4 rounded-xl ${isDark ? "bg-[#3e8aff]/10" : "bg-[#3e8aff]/5"}`}>
            <div className="flex items-center justify-between mb-3">
              <span className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-800"}`}>Lead Score</span>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.3 }}
                className="text-2xl font-bold text-[#3e8aff]"
              >
                92
              </motion.span>
            </div>
            <div className={`h-3 rounded-full overflow-hidden ${isDark ? "bg-white/10" : "bg-gray-200"}`}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "92%" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full bg-gradient-to-r from-[#3e8aff] to-[#60a5fa] rounded-full"
              />
            </div>
          </div>
          {/* Criteria Tags */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Revenue $10M+", match: true },
              { label: "Tech Stack Match", match: true },
              { label: "Hiring Signals", match: true },
              { label: "Decision Maker", match: true },
            ].map((tag, i) => (
              <motion.div
                key={tag.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium ${
                  tag.match
                    ? isDark
                      ? "bg-green-500/15 text-green-400 border border-green-500/20"
                      : "bg-green-50 text-green-600 border border-green-200"
                    : isDark
                      ? "bg-white/5 text-gray-400"
                      : "bg-gray-100 text-gray-500"
                }`}
              >
                <Check className="w-3 h-3" weight="bold" />
                {tag.label}
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "execution",
      icon: <Rocket weight="duotone" />,
      title: "Stack Execution",
      subtitle: "Your tools, orchestrated",
      description: "Push enriched, validated contacts directly to CRM, sequencer, and ad platforms. Real-time sync.",
      benefits: ["Any CRM", "Any sequencer", "Bi-directional"],
      link: "/resources/integrations",
      ctaText: "View integrations",
      visual: (
        <div className="space-y-4">
          {/* Integration Flow */}
          <div className="flex items-center justify-center gap-3">
            {[
              { name: "HubSpot", logo: "/images/integrations/hubspot.png" },
              { name: "Pipedrive", logo: "/images/integrations/pipedrive.png" },
              { name: "Outreach", logo: "/images/integrations/outreach.png" },
            ].map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className={`p-3 rounded-xl transition-all ${
                  isDark
                    ? "bg-white/[0.05] border border-white/[0.08] hover:border-[#3e8aff]/30"
                    : "bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-[#3e8aff]/30"
                }`}
              >
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </motion.div>
            ))}
          </div>
          {/* Sync Status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`flex items-center justify-center gap-3 p-3 rounded-xl ${
              isDark ? "bg-green-500/10" : "bg-green-50"
            }`}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-500"
            />
            <span className={`text-sm font-medium ${isDark ? "text-green-400" : "text-green-600"}`}>
              Real-time bi-directional sync
            </span>
          </motion.div>
          {/* More Integrations */}
          <div className={`text-center text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
            + 12 more integrations
          </div>
        </div>
      ),
    },
  ];

  const activeData = features.find(f => f.id === activeFeature)!;

  return (
    <section ref={ref} id="solutions" className={`py-24 md:py-32 relative overflow-hidden ${isDark ? "bg-[#030303]" : "bg-gradient-to-b from-white to-[#fafafa]"}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full blur-[150px] ${isDark ? "bg-[#3e8aff]/15" : "bg-[#3e8aff]/10"}`}
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className={`absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full blur-[120px] ${isDark ? "bg-[#3e8aff]/10" : "bg-[#3e8aff]/8"}`}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#3e8aff]/30 bg-[#3e8aff]/10 text-[#3e8aff] text-sm font-medium mb-6"
          >
            <Lightning weight="fill" className="w-4 h-4" />
            The Solution
          </motion.span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
            Everything you need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
              scale GTM
            </span>
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Complete, executable playbooks that deploy in minutes — not custom workflows that take months to build.
          </p>
        </motion.div>

        {/* Interactive Feature Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Left: Feature Selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                onClick={() => setActiveFeature(feature.id)}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 group border ${
                  activeFeature === feature.id
                    ? isDark
                      ? "bg-[#3e8aff]/10 border-[#3e8aff]/30 shadow-lg shadow-[#3e8aff]/10"
                      : "bg-[#3e8aff]/5 border-[#3e8aff]/25 shadow-lg shadow-[#3e8aff]/10"
                    : isDark
                      ? "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.08]"
                      : "bg-white border-gray-200 hover:border-[#3e8aff]/20 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                    activeFeature === feature.id
                      ? "bg-[#3e8aff] text-white shadow-lg shadow-[#3e8aff]/30"
                      : isDark
                        ? "bg-white/[0.05] text-gray-400 group-hover:bg-[#3e8aff]/20 group-hover:text-[#3e8aff]"
                        : "bg-gray-100 text-gray-500 group-hover:bg-[#3e8aff]/10 group-hover:text-[#3e8aff]"
                  }`}>
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-0.5">
                      <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}>{feature.title}</h3>
                      <ArrowRight className={`w-5 h-5 transition-all ${
                        activeFeature === feature.id
                          ? "opacity-100 translate-x-0 text-[#3e8aff]"
                          : "opacity-0 -translate-x-2"
                      }`} />
                    </div>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>{feature.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Feature Detail Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Glow behind card */}
            <div className={`absolute -inset-4 rounded-3xl blur-2xl transition-all duration-500 ${
              isDark ? "bg-[#3e8aff]/10" : "bg-[#3e8aff]/5"
            }`} />

            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`relative p-6 md:p-8 rounded-3xl border ${
                isDark
                  ? "bg-gradient-to-b from-[#0a0a0a] to-[#050505] border-white/[0.08]"
                  : "bg-white border-gray-200 shadow-xl shadow-[#3e8aff]/5"
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3e8aff] to-[#2563eb] flex items-center justify-center text-white shadow-lg shadow-[#3e8aff]/30">
                  <span className="text-2xl">{activeData.icon}</span>
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>{activeData.title}</h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>{activeData.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{activeData.description}</p>

              {/* Visual */}
              <div className={`mb-6 p-4 rounded-2xl ${
                isDark
                  ? "bg-white/[0.02] border border-white/[0.05]"
                  : "bg-gray-50 border border-gray-100"
              }`}>
                {activeData.visual}
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap gap-2 mb-6">
                {activeData.benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
                      isDark
                        ? "bg-[#3e8aff]/10 border border-[#3e8aff]/20"
                        : "bg-[#3e8aff]/5 border border-[#3e8aff]/15"
                    }`}
                  >
                    <CheckCircle className="w-4 h-4 text-[#3e8aff]" weight="fill" />
                    <span className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-800"}`}>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <Link href={activeData.link}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 bg-gradient-to-r from-[#3e8aff] to-[#2563eb] text-white hover:shadow-xl hover:shadow-[#3e8aff]/25 transition-all"
                >
                  {activeData.ctaText === "View integrations" ? (
                    <ArrowSquareOut size={18} weight="bold" />
                  ) : (
                    <Play size={18} weight="fill" />
                  )}
                  {activeData.ctaText}
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
