"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  X,
  CircleNotch,
  Envelope,
  Phone,
  Buildings,
  User,
  ArrowsClockwise,
  Sparkle,
} from "@phosphor-icons/react";
import { useTheme } from "@/context/ThemeContext";
import { GlowIcon } from "@/components/ui";

interface Provider {
  name: string;
  color: string;
  time: string;
  found: boolean;
  fieldsFound: string[];
}

const providers: Provider[] = [
  { name: "Apollo", color: "#f59e0b", time: "0.3s", found: true, fieldsFound: ["email", "title"] },
  { name: "ZoomInfo", color: "#8b5cf6", time: "0.5s", found: true, fieldsFound: ["phone", "company"] },
  { name: "Clearbit", color: "#3b82f6", time: "0.4s", found: true, fieldsFound: ["email", "company"] },
  { name: "Hunter", color: "#ef4444", time: "0.2s", found: false, fieldsFound: [] },
  { name: "Lusha", color: "#22c55e", time: "0.6s", found: true, fieldsFound: ["phone", "email"] },
];

const sampleLead = {
  name: "Sarah Chen",
  title: "VP of Sales",
  company: "TechCorp Inc.",
  email: "sarah.chen@techcorp.com",
  phone: "+1 (415) 555-0123",
};

type Stage = "idle" | "querying" | "complete";

export default function WaterfallEnrichmentDemo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [stage, setStage] = useState<Stage>("idle");
  const [currentProvider, setCurrentProvider] = useState(-1);
  const [providerResults, setProviderResults] = useState<number[]>([]);
  const [goldenRecord, setGoldenRecord] = useState<Record<string, string>>({});

  const runEnrichment = useCallback(() => {
    setStage("querying");
    setCurrentProvider(-1);
    setProviderResults([]);
    setGoldenRecord({});

    providers.forEach((provider, i) => {
      setTimeout(() => {
        setCurrentProvider(i);
        setProviderResults(prev => [...prev, i]);

        // Build golden record progressively
        if (provider.found) {
          setGoldenRecord(prev => {
            const next = { ...prev };
            if (provider.fieldsFound.includes("email") && !next.email) {
              next.email = sampleLead.email;
            }
            if (provider.fieldsFound.includes("phone") && !next.phone) {
              next.phone = sampleLead.phone;
            }
            if (provider.fieldsFound.includes("company") && !next.company) {
              next.company = sampleLead.company;
            }
            if (provider.fieldsFound.includes("title") && !next.title) {
              next.title = sampleLead.title;
            }
            return next;
          });
        }

        if (i === providers.length - 1) {
          setTimeout(() => {
            setStage("complete");
            setCurrentProvider(-1);
          }, 500);
        }
      }, (i + 1) * 600);
    });
  }, []);

  const resetDemo = () => {
    setStage("idle");
    setCurrentProvider(-1);
    setProviderResults([]);
    setGoldenRecord({});
  };

  // Auto-start on mount
  useEffect(() => {
    const timer = setTimeout(runEnrichment, 800);
    return () => clearTimeout(timer);
  }, [runEnrichment]);

  return (
    <div className={`p-6 md:p-8 rounded-2xl border ${
      isDark
        ? "bg-gradient-to-br from-white/[0.03] to-white/[0.01] border-white/[0.08]"
        : "bg-white/70 border-black/[0.08]"
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
            Waterfall Enrichment
          </h3>
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
            isDark ? "bg-white/5 text-gray-400" : "bg-gray-100 text-gray-600"
          }`}>
            {providers.length} sources queried
          </span>
        </div>
        <button
          onClick={stage === "idle" ? runEnrichment : resetDemo}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors ${
            isDark
              ? "text-gray-400 hover:text-white hover:bg-white/5"
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          }`}
        >
          <ArrowsClockwise size={14} />
          {stage === "idle" ? "Run" : "Reset"}
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Provider Status List */}
        <div className="space-y-3">
          <div className={`text-xs font-medium uppercase tracking-wide ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}>
            Data Providers
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
                    boxShadow: isActive
                      ? `0 0 20px ${provider.color}30`
                      : "none",
                  }}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
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
                    {/* Status Icon */}
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold`}
                      style={{
                        backgroundColor: `${provider.color}20`,
                        color: provider.color,
                      }}
                    >
                      {provider.name[0]}
                    </div>
                    <div>
                      <div className={`font-medium text-sm ${isDark ? "text-white" : "text-gray-900"}`}>
                        {provider.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {isQueried ? `${provider.time}` : "Pending"}
                      </div>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-2">
                    {isActive && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <CircleNotch size={16} className="text-[#3e8aff]" />
                      </motion.div>
                    )}
                    {isQueried && !isActive && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500 }}
                      >
                        {provider.found ? (
                          <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                            <Check size={14} className="text-green-500" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                            <X size={14} className="text-red-500" />
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

        {/* Golden Record Panel */}
        <div className="space-y-3">
          <div className={`text-xs font-medium uppercase tracking-wide ${
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
                className={`p-6 rounded-xl border text-center ${
                  isDark
                    ? "border-white/[0.05] bg-white/[0.02]"
                    : "border-black/[0.05] bg-gray-50/50"
                }`}
              >
                <div className={`text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                  Click &quot;Run&quot; to start enrichment
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`p-5 rounded-xl border ${
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
                  <GlowIcon icon={<User />} size="md" color="blue" variant="glow" />
                  <div>
                    <div className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                      {sampleLead.name}
                    </div>
                    <div className="text-xs text-gray-500">Lead Record</div>
                  </div>
                  {stage === "complete" && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/20 text-green-500 text-xs font-medium"
                    >
                      <Sparkle size={12} />
                      Complete
                    </motion.div>
                  )}
                </div>

                {/* Fields */}
                <div className="space-y-2.5">
                  {[
                    { key: "title", icon: <User size={16} />, label: "Title", value: goldenRecord.title },
                    { key: "company", icon: <Buildings size={16} />, label: "Company", value: goldenRecord.company },
                    { key: "email", icon: <Envelope size={16} />, label: "Email", value: goldenRecord.email },
                    { key: "phone", icon: <Phone size={16} />, label: "Phone", value: goldenRecord.phone },
                  ].map((field) => (
                    <div
                      key={field.key}
                      className={`flex items-center gap-3 p-2.5 rounded-lg transition-all ${
                        field.value
                          ? isDark
                            ? "bg-green-500/10 border border-green-500/20"
                            : "bg-green-50 border border-green-500/20"
                          : isDark
                            ? "bg-white/[0.02]"
                            : "bg-gray-50"
                      }`}
                    >
                      <span className={field.value ? "text-green-500" : "text-gray-400"}>
                        {field.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-gray-500 mb-0.5">{field.label}</div>
                        <div className={`text-sm truncate ${
                          field.value
                            ? isDark ? "text-white" : "text-gray-900"
                            : "text-gray-400"
                        }`}>
                          {field.value ? (
                            <motion.span
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              {field.value}
                            </motion.span>
                          ) : (
                            <span className="flex items-center gap-1">
                              <CircleNotch size={12} className="animate-spin" />
                              Searching...
                            </span>
                          )}
                        </div>
                      </div>
                      {field.value && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <Check size={16} className="text-green-500" />
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Stats */}
                {stage === "complete" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className={`mt-4 pt-4 border-t flex items-center justify-between text-xs ${
                      isDark ? "border-white/[0.08]" : "border-black/[0.08]"
                    }`}
                  >
                    <span className="text-gray-500">
                      {providers.filter(p => p.found).length}/{providers.length} sources matched
                    </span>
                    <span className="text-green-500 font-medium">
                      100% fields enriched
                    </span>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
