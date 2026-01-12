"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Database,
  GitBranch,
  Rocket,
  CheckCircle2,
  Zap,
  ArrowRight,
  Play,
  ExternalLink
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  color: "primary" | "accent" | "success";
  visual: React.ReactNode;
  link: string;
  ctaText: string;
}

const features: Feature[] = [
  {
    id: "playbooks",
    icon: <BookOpen className="h-6 w-6" />,
    title: "Pre-built Playbooks",
    subtitle: "Launch in minutes, not months",
    description: "Outbound, inbound, intent, ABM — proven GTM motions ready to deploy. No GTM engineer required.",
    benefits: ["50+ templates", "Industry-specific", "Constantly updated"],
    color: "primary",
    link: "/product/playbook-builder",
    ctaText: "See it in action",
    visual: (
      <div className="grid grid-cols-2 gap-3">
        {["Outbound ICP", "Intent Signals", "ABM Accounts", "Inbound Qualify"].map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-3 rounded-xl bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-center"
          >
            <span className="text-xs font-medium text-[#3e8aff]">{name}</span>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: "enrichment",
    icon: <Database className="h-6 w-6" />,
    title: "Waterfall Enrichment",
    subtitle: "15+ data providers, one click",
    description: "Cascade through multiple data sources automatically. Pay only for matches, maximize coverage.",
    benefits: ["85%+ match rates", "Cost optimized", "Real-time sync"],
    color: "accent",
    link: "/product/waterfall-enrichment",
    ctaText: "See it in action",
    visual: (
      <div className="space-y-2">
        {[
          { name: "Apollo", match: "72%" },
          { name: "Clearbit", match: "68%" },
          { name: "ZoomInfo", match: "45%" },
        ].map((source, i) => (
          <motion.div
            key={source.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-3 p-2 rounded-lg bg-purple-500/5 border border-purple-500/10"
          >
            <div className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="text-sm flex-1">{source.name}</span>
            <span className="text-xs text-purple-500 font-medium">{source.match}</span>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    id: "validation",
    icon: <GitBranch className="h-6 w-6" />,
    title: "Smart Validation",
    subtitle: "ICP scoring that actually works",
    description: "Custom rules, AI-powered scoring, and automatic routing. Every lead scored and sorted instantly.",
    benefits: ["Custom ICP rules", "AI scoring", "Auto-routing"],
    color: "success",
    link: "/product/icp-scoring",
    ctaText: "See it in action",
    visual: (
      <div className="space-y-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <div className="flex-1 h-3 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
            />
          </div>
          <span className="text-xs font-bold text-green-500">85</span>
        </motion.div>
        <div className="flex gap-2 flex-wrap">
          {["Revenue $10M+", "Tech Stack ✓", "Hiring ✓"].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-[10px] px-2 py-1 rounded-full bg-green-500/10 text-green-500 border border-green-500/20"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "execution",
    icon: <Rocket className="h-6 w-6" />,
    title: "Stack Execution",
    subtitle: "Your tools, orchestrated",
    description: "Push enriched, validated contacts directly to CRM, sequencer, and ad platforms. Real-time sync.",
    benefits: ["Any CRM", "Any sequencer", "Bi-directional"],
    color: "primary",
    link: "/resources/integrations",
    ctaText: "Learn more",
    visual: (
      <div className="flex items-center justify-center gap-2">
        {["HubSpot", "Outreach", "LinkedIn"].map((tool, i) => (
          <motion.div
            key={tool}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="p-3 rounded-xl bg-[#3e8aff]/10 border border-[#3e8aff]/20"
          >
            <span className="text-xs font-medium text-[#3e8aff]">{tool}</span>
          </motion.div>
        ))}
      </div>
    ),
  },
];

const getColorClasses = (color: Feature["color"], variant: "bg" | "text" | "border") => {
  const colors = {
    primary: {
      bg: "bg-[#3e8aff]/20",
      text: "text-[#3e8aff]",
      border: "border-[#3e8aff]",
    },
    accent: {
      bg: "bg-purple-500/20",
      text: "text-purple-500",
      border: "border-purple-500",
    },
    success: {
      bg: "bg-green-500/20",
      text: "text-green-500",
      border: "border-green-500",
    },
  };
  return colors[color][variant];
};

export default function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFeature, setActiveFeature] = useState("playbooks");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const activeData = features.find(f => f.id === activeFeature)!;

  return (
    <section ref={ref} id="solutions" className={`py-24 relative overflow-hidden ${isDark ? "bg-[#030303]" : "bg-white"}`}>
      {/* Background Effects */}
      <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-b from-[#030303] via-[#080808]/20 to-[#030303]" : "bg-gradient-to-b from-white via-gray-50/20 to-white"}`} />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[5%] w-40 h-40 rounded-full bg-[#3e8aff]/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[30%] left-[5%] w-32 h-32 rounded-full bg-green-500/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-500 text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            The Solution
          </span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
            Everything you need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
              scale GTM
            </span>
          </h2>
          <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Complete, executable playbooks that deploy in minutes — not custom workflows that take months to build.
          </p>
        </motion.div>

        {/* Interactive Feature Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left: Feature Selector */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                onClick={() => setActiveFeature(feature.id)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 group border-l-4 ${
                  activeFeature === feature.id
                    ? `${isDark ? "bg-white/[0.03]" : "bg-gray-50"} ${getColorClasses(feature.color, "border")}`
                    : `${isDark ? "bg-white/[0.01] hover:bg-white/[0.03]" : "bg-transparent hover:bg-gray-50"} border-transparent`
                } ${isDark ? "border border-white/[0.05]" : "border border-black/[0.05]"}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl transition-colors ${
                    activeFeature === feature.id
                      ? `${getColorClasses(feature.color, "bg")} ${getColorClasses(feature.color, "text")}`
                      : isDark ? "bg-white/[0.05] text-gray-400 group-hover:text-white" : "bg-gray-100 text-gray-500 group-hover:text-gray-900"
                  }`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-gray-900"}`}>{feature.title}</h3>
                      <ArrowRight className={`h-4 w-4 transition-all ${
                        activeFeature === feature.id
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2"
                      } ${isDark ? "text-white" : "text-gray-900"}`} />
                    </div>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{feature.subtitle}</p>
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
            <div className={`absolute inset-0 rounded-3xl blur-2xl transition-colors duration-500 ${getColorClasses(activeData.color, "bg")}`} style={{ opacity: 0.3 }} />

            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`relative p-8 h-full rounded-2xl border backdrop-blur-sm ${
                isDark
                  ? "bg-white/[0.02] border-white/[0.08]"
                  : "bg-white/70 border-black/[0.08]"
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${getColorClasses(activeData.color, "bg")} ${getColorClasses(activeData.color, "text")}`}>
                  {activeData.icon}
                </div>
                <div>
                  <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>{activeData.title}</h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{activeData.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className={`mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{activeData.description}</p>

              {/* Visual */}
              <div className={`mb-6 p-4 rounded-xl border ${
                isDark
                  ? "bg-white/[0.02] border-white/[0.05]"
                  : "bg-gray-50/50 border-black/[0.05]"
              }`}>
                {activeData.visual}
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap gap-2">
                {activeData.benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${
                      isDark
                        ? "bg-white/[0.03] border-white/[0.08]"
                        : "bg-gray-50 border-black/[0.08]"
                    }`}
                  >
                    <CheckCircle2 className={`h-4 w-4 ${getColorClasses(activeData.color, "text")}`} />
                    <span className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <Link href={activeData.link}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-8 w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors ${getColorClasses(activeData.color, "bg")} ${getColorClasses(activeData.color, "text")} hover:opacity-80`}
                >
                  {activeData.ctaText === "Learn more" ? (
                    <ExternalLink className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                  {activeData.ctaText}
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { value: "50+", label: "Playbook templates" },
            { value: "15+", label: "Data providers" },
            { value: "5min", label: "Average setup" },
            { value: "10x", label: "Faster launches" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
              className={`text-center p-6 rounded-2xl border ${
                isDark
                  ? "bg-white/[0.02] border-white/[0.08]"
                  : "bg-gray-50 border-black/[0.08]"
              }`}
            >
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa] mb-2">{stat.value}</div>
              <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
