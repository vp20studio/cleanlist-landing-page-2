"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import {
  Sparkle,
  Check,
  ArrowsClockwise,
  Crosshair,
  Envelope,
  Phone,
  Buildings,
  User,
  DownloadSimple,
  MagnifyingGlass,
  MapPin,
  Users,
  LinkedinLogo,
  UserPlus,
} from "@/components/icons";
import { useTheme } from "@/context/ThemeContext";
import { GlowIcon } from "@/components/ui";
import WaterfallEnrichmentDemo from "./WaterfallEnrichmentDemo";
import LeadExtractionDemo from "./LeadExtractionDemo";

const demoTabs = [
  {
    id: "extraction",
    label: "Lead Extraction",
    icon: <DownloadSimple />,
  },
  {
    id: "enrichment",
    label: "Waterfall Enrichment",
    icon: <ArrowsClockwise />,
  },
  {
    id: "scoring",
    label: "Smart Columns + ICP",
    icon: <Crosshair />,
  },
  {
    id: "search",
    label: "People Search",
    icon: <MagnifyingGlass />,
  },
];

const searchResults = [
  { name: "Sarah Chen", title: "VP of Sales", company: "Amplitude", location: "San Francisco", employees: "500-1K", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
  { name: "Michael Torres", title: "Head of Sales", company: "Notion", location: "New York", employees: "1K-5K", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
  { name: "Emily Rodriguez", title: "VP Sales", company: "Figma", location: "Seattle", employees: "500-1K", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" },
  { name: "David Kim", title: "Director of Sales", company: "Linear", location: "Austin", employees: "100-500", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" },
];

const searchQuery = "VP Sales at SaaS companies in US, $1-10M revenue";

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState("extraction");
  const [animationStep, setAnimationStep] = useState(0);
  const [searchTypingIndex, setSearchTypingIndex] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const hasAutoPlayed = useRef(false);

  // Auto-start animation when section comes into view
  useEffect(() => {
    if (isInView && !hasAutoPlayed.current && activeTab === "extraction") {
      hasAutoPlayed.current = true;
      // Lead Extraction demo handles its own animation
    }
  }, [isInView, activeTab]);

  // Search typing animation
  useEffect(() => {
    if (activeTab !== "search") {
      setSearchTypingIndex(0);
      setIsSearching(false);
      setShowSearchResults(false);
      return;
    }

    // Start typing after a short delay
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setSearchTypingIndex((prev) => {
          if (prev >= searchQuery.length) {
            clearInterval(interval);
            // Start "searching" animation
            setTimeout(() => {
              setIsSearching(true);
              // Show results after search
              setTimeout(() => {
                setIsSearching(false);
                setShowSearchResults(true);
                // Trigger animation steps for results
                setAnimationStep(1);
                setTimeout(() => setAnimationStep(2), 200);
                setTimeout(() => setAnimationStep(3), 400);
                setTimeout(() => setAnimationStep(4), 600);
              }, 1000);
            }, 300);
            return prev;
          }
          return prev + 1;
        });
      }, 50);

      return () => clearInterval(interval);
    }, 400);

    return () => clearTimeout(startDelay);
  }, [activeTab]);

  // Reset animation when tab changes
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setAnimationStep(0);
    setSearchTypingIndex(0);
    setIsSearching(false);
    setShowSearchResults(false);

    // Auto-advance animation for non-search tabs
    if (tabId !== "search") {
      setTimeout(() => setAnimationStep(1), 500);
      setTimeout(() => setAnimationStep(2), 1500);
      setTimeout(() => setAnimationStep(3), 2500);
    }
  };

  return (
    <section id="solutions" ref={containerRef} className={`py-16 md:py-24 ${isDark ? "bg-[#030303]" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
            <GlowIcon icon={<Sparkle />} size="xs" color="blue" variant="ghost" />
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
            {activeTab === "extraction" && (
              <motion.div
                key="extraction"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <LeadExtractionDemo />
              </motion.div>
            )}

            {activeTab === "enrichment" && (
              <motion.div
                key="enrichment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <WaterfallEnrichmentDemo />
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
                        <Check width={16} height={16} className="text-[#3e8aff]" />
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

            {activeTab === "search" && (
              <motion.div
                key="search"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
              >
                {/* Search demo */}
                <div className={`p-5 md:p-6 rounded-xl border ${isDark ? "bg-[#0a0a0a] border-white/[0.08]" : "bg-white border-black/[0.08]"}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <MagnifyingGlass className={`${isSearching ? "text-[#3e8aff] animate-pulse" : "text-[#3e8aff]"}`} width={18} height={18} />
                    <h4 className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>People Search</h4>
                  </div>

                  {/* Search query with typing animation */}
                  <div className={`p-3 rounded-lg mb-4 transition-colors ${isSearching ? "border-[#3e8aff]" : ""} ${isDark ? "bg-white/[0.03] border border-white/[0.08]" : "bg-gray-50 border border-gray-200"}`}>
                    <div className="flex items-start gap-2">
                      <Sparkle className={`mt-0.5 flex-shrink-0 ${isSearching ? "text-[#3e8aff] animate-pulse" : "text-gray-400"}`} width={14} height={14} />
                      <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        {searchQuery.slice(0, searchTypingIndex)}
                        {searchTypingIndex < searchQuery.length && (
                          <span className="inline-block w-0.5 h-4 bg-[#3e8aff] animate-pulse ml-0.5 align-middle" />
                        )}
                      </p>
                    </div>
                    {isSearching && (
                      <div className="mt-2 h-0.5 bg-gradient-to-r from-[#3e8aff] to-[#60a5fa] animate-pulse rounded-full" />
                    )}
                  </div>

                  {/* Results header */}
                  <AnimatePresence>
                    {showSearchResults && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="overflow-hidden"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className={`text-xs font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                              2,847 matches found
                            </span>
                          </div>
                        </div>

                        {/* Results */}
                        <div className="space-y-2">
                          {searchResults.map((result, i) => (
                            <motion.div
                              key={result.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: animationStep >= i + 1 ? 1 : 0, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className={`flex items-center gap-3 p-2 rounded-lg ${isDark ? "bg-white/[0.02] hover:bg-white/[0.05]" : "bg-gray-50 hover:bg-gray-100"} transition-colors`}
                            >
                              <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-[#3e8aff] to-[#60a5fa] flex-shrink-0">
                                <Image
                                  src={result.image}
                                  alt={result.name}
                                  width={32}
                                  height={32}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <span className={`text-sm font-medium truncate ${isDark ? "text-white" : "text-gray-900"}`}>{result.name}</span>
                                  <LinkedinLogo className="text-[#0077b5] flex-shrink-0" width={12} height={12} />
                                </div>
                                <div className="text-xs text-gray-500 truncate">{result.title} at {result.company}</div>
                              </div>
                              <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
                                <MapPin width={10} height={10} />
                                <span>{result.location}</span>
                              </div>
                              <button className="p-1.5 rounded bg-[#3e8aff]/10 text-[#3e8aff] hover:bg-[#3e8aff]/20 transition-colors flex-shrink-0">
                                <UserPlus width={14} height={14} />
                              </button>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Explanation */}
                <div className="space-y-4">
                  <h3 className={`text-xl font-semibold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                    500M+ B2B Database
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Search our database of 500M+ professionals using natural language. Find your ideal prospects in seconds.
                  </p>
                  <div className="space-y-2">
                    {[
                      "Natural language search",
                      "30+ advanced filters",
                      "98% email accuracy",
                      "Real-time data updates",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <Check width={16} height={16} className="text-[#3e8aff]" />
                        <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className={`p-3 rounded-lg ${isDark ? "bg-[#3e8aff]/10" : "bg-blue-50"}`}>
                    <p className="text-sm text-[#3e8aff]">
                      <strong>Try it:</strong> Get 25 free searches when you sign up. No credit card required.
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
