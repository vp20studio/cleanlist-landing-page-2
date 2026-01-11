"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Upload,
  Sparkles,
  Check,
  ArrowRight,
  RefreshCw,
  Target,
  Mail,
  Phone,
  Building,
  User,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const demoTabs = [
  {
    id: "linkedin",
    label: "LinkedIn Extraction",
    icon: <Linkedin className="w-4 h-4" />,
  },
  {
    id: "enrichment",
    label: "Waterfall Enrichment",
    icon: <RefreshCw className="w-4 h-4" />,
  },
  {
    id: "scoring",
    label: "Smart Columns + ICP",
    icon: <Target className="w-4 h-4" />,
  },
];

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState("linkedin");
  const [animationStep, setAnimationStep] = useState(0);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Reset animation when tab changes
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setAnimationStep(0);
    // Auto-advance animation
    setTimeout(() => setAnimationStep(1), 500);
    setTimeout(() => setAnimationStep(2), 1500);
    setTimeout(() => setAnimationStep(3), 2500);
  };

  return (
    <section id="demo" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
            <Sparkles className="w-4 h-4" />
            See It In Action
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            Watch Cleanlist{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
              work
            </span>
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            From extraction to enrichment to scoring — see how teams get verified contact data in seconds.
          </p>
        </motion.div>

        {/* Demo Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {demoTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`inline-flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-lg font-medium transition-all text-sm md:text-base ${
                activeTab === tab.id
                  ? "bg-[#3e8aff] text-white shadow-lg shadow-[#3e8aff]/25"
                  : isDark
                    ? "bg-white/[0.05] text-gray-400 hover:bg-white/[0.1] hover:text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {activeTab === "linkedin" && (
              <motion.div
                key="linkedin"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
              >
                {/* LinkedIn Profile Mockup */}
                <div className={`p-5 md:p-6 rounded-xl border ${isDark ? "bg-[#0a0a0a] border-white/[0.08]" : "bg-white border-black/[0.08]"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0077b5] to-[#00a0dc] flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Sarah Chen</div>
                      <div className="text-sm text-gray-500">VP of Sales at TechCorp</div>
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: animationStep >= 1 ? 1 : 0 }}
                      className="ml-auto"
                    >
                      <div className="px-3 py-1.5 rounded-lg bg-[#3e8aff] text-white text-xs font-medium flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        Extracted
                      </div>
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    {[
                      { icon: <Building className="w-4 h-4" />, label: "TechCorp Inc.", delay: 0 },
                      { icon: <Mail className="w-4 h-4" />, label: "sarah.chen@techcorp.com", delay: 0.2, enriched: true },
                      { icon: <Phone className="w-4 h-4" />, label: "+1 (415) 555-0123", delay: 0.4, enriched: true },
                    ].map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: animationStep >= 2 ? 1 : 0.3, x: 0 }}
                        transition={{ delay: item.delay }}
                        className={`flex items-center gap-3 p-2 rounded-lg ${
                          item.enriched && animationStep >= 2
                            ? "bg-green-500/10 border border-green-500/20"
                            : isDark ? "bg-white/[0.03]" : "bg-gray-50"
                        }`}
                      >
                        <span className={item.enriched && animationStep >= 2 ? "text-green-500" : "text-gray-400"}>
                          {item.icon}
                        </span>
                        <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>{item.label}</span>
                        {item.enriched && animationStep >= 2 && (
                          <Check className="w-4 h-4 text-green-500 ml-auto" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Steps */}
                <div className="space-y-4">
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                    One-Click LinkedIn Extraction
                  </h3>
                  {[
                    { step: 1, title: "Install Chrome Extension", desc: "Add Cleanlist to your browser" },
                    { step: 2, title: "Browse Sales Navigator", desc: "Find your target prospects" },
                    { step: 3, title: "Click Extract", desc: "Get verified emails & phones instantly" },
                  ].map((item) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0.5 }}
                      animate={{ opacity: animationStep >= item.step ? 1 : 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        animationStep >= item.step
                          ? "bg-[#3e8aff] text-white"
                          : isDark ? "bg-white/[0.05] text-gray-500" : "bg-gray-100 text-gray-500"
                      }`}>
                        {animationStep >= item.step ? <Check className="w-4 h-4" /> : item.step}
                      </div>
                      <div>
                        <div className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{item.title}</div>
                        <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "enrichment" && (
              <motion.div
                key="enrichment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
              >
                {/* CSV Upload Visual */}
                <div className={`p-5 md:p-6 rounded-xl border ${isDark ? "bg-[#0a0a0a] border-white/[0.08]" : "bg-white border-black/[0.08]"}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <Upload className="w-5 h-5 text-[#3e8aff]" />
                    <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>leads.csv</span>
                    <span className="text-xs text-gray-500">1,000 records</span>
                  </div>

                  {/* Progress visualization */}
                  <div className="space-y-3">
                    {[
                      { name: "John Smith", company: "Acme Corp", email: animationStep >= 2 ? "john@acmecorp.com" : "—", phone: animationStep >= 3 ? "+1 555-0101" : "—" },
                      { name: "Emily Davis", company: "StartupXYZ", email: animationStep >= 2 ? "emily@startupxyz.io" : "—", phone: animationStep >= 3 ? "+1 555-0102" : "—" },
                      { name: "Michael Lee", company: "Enterprise Co", email: animationStep >= 2 ? "mlee@enterprise.com" : "—", phone: animationStep >= 3 ? "+1 555-0103" : "—" },
                    ].map((row, i) => (
                      <motion.div
                        key={row.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className={`grid grid-cols-4 gap-2 p-2 rounded-lg text-xs ${isDark ? "bg-white/[0.03]" : "bg-gray-50"}`}
                      >
                        <span className={isDark ? "text-white" : "text-gray-900"}>{row.name}</span>
                        <span className="text-gray-500">{row.company}</span>
                        <span className={row.email !== "—" ? "text-green-500" : "text-gray-500"}>{row.email}</span>
                        <span className={row.phone !== "—" ? "text-green-500" : "text-gray-500"}>{row.phone}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-500">Enriching...</span>
                      <span className="text-[#3e8aff]">{animationStep >= 3 ? "100" : animationStep >= 2 ? "67" : animationStep >= 1 ? "33" : "0"}%</span>
                    </div>
                    <div className={`h-2 rounded-full ${isDark ? "bg-white/[0.05]" : "bg-gray-100"}`}>
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]"
                        initial={{ width: "0%" }}
                        animate={{ width: animationStep >= 3 ? "100%" : animationStep >= 2 ? "67%" : animationStep >= 1 ? "33%" : "0%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Waterfall explanation */}
                <div className="space-y-4">
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                    15+ Data Sources, One Waterfall
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    We query multiple providers simultaneously and pick the best match for each field.
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    {["Clearbit", "ZoomInfo", "Apollo", "Hunter", "Lusha", "Dropcontact"].map((provider, i) => (
                      <motion.div
                        key={provider}
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: animationStep >= 1 ? 1 : 0.3 }}
                        transition={{ delay: i * 0.1 }}
                        className={`px-2 py-1.5 rounded text-xs text-center ${isDark ? "bg-white/[0.05] text-gray-300" : "bg-gray-100 text-gray-700"}`}
                      >
                        {provider}
                      </motion.div>
                    ))}
                  </div>
                  <div className={`p-3 rounded-lg border ${isDark ? "bg-green-500/5 border-green-500/20" : "bg-green-50 border-green-200"}`}>
                    <div className="flex items-center gap-2 text-green-500 text-sm font-medium">
                      <Check className="w-4 h-4" />
                      85% phone discovery rate
                    </div>
                    <div className="flex items-center gap-2 text-green-500 text-sm font-medium mt-1">
                      <Check className="w-4 h-4" />
                      98% verified email accuracy
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "scoring" && (
              <motion.div
                key="scoring"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
              >
                {/* ICP Score visualization */}
                <div className={`p-5 md:p-6 rounded-xl border ${isDark ? "bg-[#0a0a0a] border-white/[0.08]" : "bg-white border-black/[0.08]"}`}>
                  <h4 className={`font-medium mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>Smart Columns + ICP Score</h4>

                  <div className="space-y-3">
                    {[
                      { name: "Sarah Chen", title: "VP Sales", company: "TechCorp", score: 92, match: "Excellent" },
                      { name: "John Smith", title: "Director", company: "Acme Corp", score: 78, match: "Good" },
                      { name: "Emily Davis", title: "Manager", company: "StartupXYZ", score: 45, match: "Low" },
                    ].map((lead, i) => (
                      <motion.div
                        key={lead.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: animationStep >= i + 1 ? 1 : 0.3, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className={`p-3 rounded-lg ${isDark ? "bg-white/[0.03]" : "bg-gray-50"}`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <div className={`font-medium text-sm ${isDark ? "text-white" : "text-gray-900"}`}>{lead.name}</div>
                            <div className="text-xs text-gray-500">{lead.title} at {lead.company}</div>
                          </div>
                          <div className={`text-right`}>
                            <div className={`text-lg font-bold ${
                              lead.score >= 80 ? "text-green-500" : lead.score >= 60 ? "text-yellow-500" : "text-gray-400"
                            }`}>
                              {animationStep >= i + 1 ? lead.score : "—"}
                            </div>
                            <div className={`text-xs ${
                              lead.score >= 80 ? "text-green-500" : lead.score >= 60 ? "text-yellow-500" : "text-gray-400"
                            }`}>
                              {animationStep >= i + 1 ? lead.match : "Scoring..."}
                            </div>
                          </div>
                        </div>
                        {animationStep >= i + 1 && (
                          <div className={`h-1.5 rounded-full ${isDark ? "bg-white/[0.05]" : "bg-gray-200"}`}>
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${lead.score}%` }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className={`h-full rounded-full ${
                                lead.score >= 80 ? "bg-green-500" : lead.score >= 60 ? "bg-yellow-500" : "bg-gray-400"
                              }`}
                            />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Explanation */}
                <div className="space-y-4">
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                    AI-Powered Lead Scoring
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Smart Columns enrich your data with AI. ICP Scoring ranks every lead 1-100 against your ideal customer profile.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Job title & seniority match",
                      "Company size & industry fit",
                      "Technology stack compatibility",
                      "Engagement signals",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#3e8aff]" />
                        <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className={`p-3 rounded-lg ${isDark ? "bg-[#3e8aff]/10" : "bg-blue-50"}`}>
                    <p className="text-sm text-[#3e8aff]">
                      <strong>Pro tip:</strong> Focus on leads with 80+ ICP scores for 2x higher conversion rates.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
