"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import {
  Check,
  X,
  SpinnerGap,
  Envelope,
  Phone,
  Buildings,
  User,
  ArrowCounterClockwise,
  Sparkle,
  Stack,
  Briefcase,
  MapPin,
  LinkSimple,
} from "@/components/icons";
import { useTheme } from "@/context/ThemeContext";

interface Provider {
  name: string;
  color: string;
  time: number; // ms
  found: boolean;
  fieldsFound: string[];
}

const providers: Provider[] = [
  { name: "Cleanlist", color: "#3e8aff", time: 200, found: true, fieldsFound: ["email", "title"] },
  { name: "Wiza", color: "#8b5cf6", time: 400, found: true, fieldsFound: ["phone", "company"] },
  { name: "Findymail", color: "#f59e0b", time: 300, found: true, fieldsFound: ["email", "location"] },
  { name: "Prospeo", color: "#ef4444", time: 350, found: false, fieldsFound: [] },
  { name: "Lusha", color: "#22c55e", time: 500, found: true, fieldsFound: ["phone", "linkedin"] },
  { name: "+10 more", color: "#ec4899", time: 450, found: true, fieldsFound: ["email", "title"] },
];

const goldenRecordFields = [
  { key: "email", icon: <Envelope width={16} height={16} />, label: "Email", value: "john.smith@acmecorp.com" },
  { key: "phone", icon: <Phone width={16} height={16} />, label: "Phone", value: "+1 (555) 123-4567" },
  { key: "title", icon: <Briefcase width={16} height={16} />, label: "Title", value: "VP of Sales" },
  { key: "company", icon: <Buildings width={16} height={16} />, label: "Company", value: "Acme Corporation" },
  { key: "location", icon: <MapPin width={16} height={16} />, label: "Location", value: "San Francisco, CA" },
  { key: "linkedin", icon: <LinkSimple width={16} height={16} />, label: "LinkedIn", value: "linkedin.com/in/jsmith" },
];

type Stage = "idle" | "querying" | "merging" | "complete";

export default function WaterfallPageDemo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [stage, setStage] = useState<Stage>("idle");
  const [currentProvider, setCurrentProvider] = useState(-1);
  const [providerResults, setProviderResults] = useState<number[]>([]);
  const [visibleFields, setVisibleFields] = useState<string[]>([]);

  const runEnrichment = useCallback(() => {
    setStage("querying");
    setCurrentProvider(-1);
    setProviderResults([]);
    setVisibleFields([]);

    // Animate through providers
    providers.forEach((provider, i) => {
      setTimeout(() => {
        setCurrentProvider(i);
      }, i * 500);

      setTimeout(() => {
        setProviderResults(prev => [...prev, i]);
        setCurrentProvider(-1);

        // After last provider, start merging
        if (i === providers.length - 1) {
          setTimeout(() => {
            setStage("merging");

            // Reveal fields one by one
            goldenRecordFields.forEach((field, j) => {
              setTimeout(() => {
                setVisibleFields(prev => [...prev, field.key]);

                if (j === goldenRecordFields.length - 1) {
                  setTimeout(() => setStage("complete"), 300);
                }
              }, j * 200);
            });
          }, 500);
        }
      }, (i + 1) * 500);
    });
  }, []);

  const resetDemo = () => {
    setStage("idle");
    setCurrentProvider(-1);
    setProviderResults([]);
    setVisibleFields([]);
  };

  // Auto-start when in view
  useEffect(() => {
    if (isInView && stage === "idle") {
      const timer = setTimeout(runEnrichment, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView, stage, runEnrichment]);

  return (
    <div
      ref={containerRef}
      className={`rounded-2xl overflow-hidden border shadow-2xl ${
        isDark
          ? "bg-[#0a0a0a] border-white/[0.08] shadow-black/50"
          : "bg-white border-black/[0.08] shadow-black/10"
      }`}
    >
      {/* Browser Chrome */}
      <div className={`flex items-center gap-3 px-4 py-3 border-b ${
        isDark ? "border-white/[0.08] bg-[#080808]" : "border-black/[0.08] bg-gray-50"
      }`}>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className={`flex-1 flex items-center justify-center px-4 py-1.5 rounded-lg text-xs ${
          isDark ? "bg-white/[0.03] text-gray-500" : "bg-gray-100 text-gray-500"
        }`}>
          app.cleanlist.ai
        </div>
        <button
          onClick={stage === "complete" ? resetDemo : undefined}
          disabled={stage !== "complete"}
          className={`p-1.5 rounded transition-colors ${
            stage === "complete"
              ? isDark
                ? "hover:bg-white/5 text-gray-400 hover:text-white cursor-pointer"
                : "hover:bg-gray-100 text-gray-500 hover:text-gray-700 cursor-pointer"
              : "opacity-50 cursor-not-allowed text-gray-500"
          }`}
        >
          <ArrowCounterClockwise width={16} height={16} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#3e8aff]/10 flex items-center justify-center">
              <Stack width={20} height={20} className="text-[#3e8aff]" />
            </div>
            <div>
              <h3 className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                Waterfall Enrichment
              </h3>
              <p className="text-xs text-gray-500">
                {providerResults.length} of {providers.length} sources queried
              </p>
            </div>
          </div>
          {stage === "complete" && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/20 text-green-500 text-xs font-medium"
            >
              <Check width={14} height={14} />
              Complete
            </motion.div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Provider List */}
          <div>
            <div className={`text-xs font-medium uppercase tracking-wide mb-3 ${
              isDark ? "text-gray-500" : "text-gray-400"
            }`}>
              Data Sources
            </div>
            <div className="space-y-2">
              {providers.map((provider, i) => {
                const isQueried = providerResults.includes(i);
                const isActive = currentProvider === i;

                return (
                  <motion.div
                    key={provider.name}
                    initial={{ opacity: 0.5 }}
                    animate={{
                      opacity: isQueried || isActive ? 1 : 0.5,
                      boxShadow: isActive ? `0 0 15px ${provider.color}30` : "none",
                    }}
                    className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                      isActive
                        ? `border-[${provider.color}]/30`
                        : isDark
                          ? "border-white/[0.05] bg-white/[0.02]"
                          : "border-black/[0.05] bg-gray-50/50"
                    }`}
                    style={{
                      borderColor: isActive ? `${provider.color}50` : undefined,
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center overflow-hidden"
                        style={{
                          backgroundColor: `${provider.color}20`,
                        }}
                      >
                        {provider.name === "Cleanlist" && (
                          <Image
                            src="/images/cleanlist-circle-avatar.png"
                            alt="Cleanlist"
                            width={28}
                            height={28}
                            className="w-full h-full object-cover"
                          />
                        )}
                        {provider.name === "Wiza" && (
                          <Image
                            src="/images/providers/wiza.webp"
                            alt="Wiza"
                            width={28}
                            height={28}
                            className="w-full h-full object-contain p-0.5"
                          />
                        )}
                        {provider.name === "Findymail" && (
                          <Image
                            src="/images/providers/findymail.png"
                            alt="Findymail"
                            width={28}
                            height={28}
                            className="w-full h-full object-contain p-0.5"
                          />
                        )}
                        {provider.name === "Prospeo" && (
                          <Image
                            src="/images/providers/prospeo.png"
                            alt="Prospeo"
                            width={28}
                            height={28}
                            className="w-full h-full object-contain p-0.5"
                          />
                        )}
                        {provider.name === "Lusha" && (
                          <Image
                            src="/images/providers/lusha.jpeg"
                            alt="Lusha"
                            width={28}
                            height={28}
                            className="w-full h-full object-contain p-0.5"
                          />
                        )}
                        {provider.name === "+10 more" && (
                          <div
                            className="w-full h-full flex items-center justify-center text-xs font-bold"
                            style={{ color: provider.color }}
                          >
                            +10
                          </div>
                        )}
                      </div>
                      <div>
                        <div className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                          {provider.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {isQueried ? `${provider.time}ms` : isActive ? "Querying..." : "Pending"}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center">
                      {isActive && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <SpinnerGap width={16} height={16} className="text-[#3e8aff]" />
                        </motion.div>
                      )}
                      {isQueried && !isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 500 }}
                        >
                          {provider.found ? (
                            <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                              <Check width={12} height={12} className="text-green-500" />
                            </div>
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                              <X width={12} height={12} className="text-red-500" />
                            </div>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Golden Record */}
          <div>
            <div className={`text-xs font-medium uppercase tracking-wide mb-3 ${
              isDark ? "text-gray-500" : "text-gray-400"
            }`}>
              Golden Record
            </div>

            <AnimatePresence mode="wait">
              {stage === "idle" ? (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`p-6 rounded-xl border text-center h-[280px] flex flex-col items-center justify-center ${
                    isDark
                      ? "border-white/[0.05] bg-white/[0.02]"
                      : "border-black/[0.05] bg-gray-50/50"
                  }`}
                >
                  <div className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                    Waiting to start enrichment...
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`p-4 rounded-xl border ${
                    stage === "complete"
                      ? isDark
                        ? "border-green-500/30 bg-green-500/5"
                        : "border-green-500/30 bg-green-50/50"
                      : isDark
                        ? "border-white/[0.08] bg-white/[0.02]"
                        : "border-black/[0.08] bg-gray-50/50"
                  }`}
                >
                  {/* Lead Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#3e8aff]/20 flex items-center justify-center">
                      <User width={20} height={20} className="text-[#3e8aff]" />
                    </div>
                    <div>
                      <div className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                        John Smith
                      </div>
                      <div className="text-xs text-gray-500">Input Record</div>
                    </div>
                    {stage === "complete" && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="ml-auto flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/20 text-green-500 text-xs font-medium"
                      >
                        <Sparkle width={12} height={12} />
                        Enriched
                      </motion.div>
                    )}
                  </div>

                  {/* Fields Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {goldenRecordFields.map((field) => {
                      const isVisible = visibleFields.includes(field.key);

                      return (
                        <motion.div
                          key={field.key}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{
                            opacity: isVisible ? 1 : 0.3,
                            scale: isVisible ? 1 : 0.95,
                          }}
                          className={`p-2.5 rounded-lg transition-all ${
                            isVisible
                              ? isDark
                                ? "bg-green-500/10 border border-green-500/20"
                                : "bg-green-50 border border-green-500/20"
                              : isDark
                                ? "bg-white/[0.02]"
                                : "bg-gray-50"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className={isVisible ? "text-green-500" : "text-gray-400"}>
                              {field.icon}
                            </span>
                            <span className="text-xs text-gray-500">{field.label}</span>
                          </div>
                          <div className={`text-xs truncate ${
                            isVisible
                              ? isDark ? "text-white" : "text-gray-900"
                              : "text-gray-400"
                          }`}>
                            {isVisible ? field.value : "—"}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Stats Footer */}
                  {stage === "complete" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className={`mt-4 pt-3 border-t flex items-center justify-between text-xs ${
                        isDark ? "border-white/[0.08]" : "border-black/[0.08]"
                      }`}
                    >
                      <span className="text-gray-500">
                        {providers.filter(p => p.found).length}/{providers.length} sources matched
                      </span>
                      <span className="text-green-500 font-medium">
                        6/6 fields enriched
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
