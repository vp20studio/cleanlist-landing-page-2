"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import {
  Check,
  Loader2,
  ArrowRight,
  Sparkles,
  Mail,
  Phone,
  User,
  Building,
  Linkedin,
  Briefcase,
  Zap,
} from "lucide-react";

interface FieldData {
  label: string;
  icon: React.ReactNode;
  beforeValue: string;
  afterValue: string;
  status: "found" | "missing" | "enriched";
}

const fields: FieldData[] = [
  { label: "Name", icon: <User className="w-3.5 h-3.5" />, beforeValue: "John Smith", afterValue: "John Smith", status: "found" },
  { label: "Company", icon: <Building className="w-3.5 h-3.5" />, beforeValue: "Acme Corp", afterValue: "Acme Corp", status: "found" },
  { label: "Email", icon: <Mail className="w-3.5 h-3.5" />, beforeValue: "—", afterValue: "john@acmecorp.com", status: "enriched" },
  { label: "Phone", icon: <Phone className="w-3.5 h-3.5" />, beforeValue: "—", afterValue: "+1 (555) 123-4567", status: "enriched" },
  { label: "Title", icon: <Briefcase className="w-3.5 h-3.5" />, beforeValue: "—", afterValue: "VP of Sales", status: "enriched" },
  { label: "LinkedIn", icon: <Linkedin className="w-3.5 h-3.5" />, beforeValue: "—", afterValue: "linkedin.com/in/johnsmith", status: "enriched" },
];

const dataProviders = [
  "Clearbit", "Findymail", "Datagma", "ZoomInfo", "Hunter",
  "Dropcontact", "Apollo", "Lusha", "RocketReach", "Seamless.ai",
  "Cognism", "LeadIQ", "Snov.io", "Kaspr", "FullContact"
];

export default function DataTransformDemo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [stage, setStage] = useState<"idle" | "enriching" | "complete">("idle");
  const [enrichedFields, setEnrichedFields] = useState<number[]>([]);
  const [activeProvider, setActiveProvider] = useState<number>(0);
  const [hasPlayed, setHasPlayed] = useState(false);

  // Auto-start animation when in view
  useEffect(() => {
    if (isInView && !hasPlayed) {
      const timer = setTimeout(() => {
        startEnrichment();
        setHasPlayed(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasPlayed]);

  const startEnrichment = () => {
    setStage("enriching");
    setEnrichedFields([]);
    setActiveProvider(0);

    // Animate through providers
    const providerInterval = setInterval(() => {
      setActiveProvider(prev => {
        if (prev >= dataProviders.length - 1) {
          clearInterval(providerInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 200);

    // Animate field enrichment
    const enrichableFields = fields.map((f, i) => ({ ...f, index: i }))
      .filter(f => f.status === "enriched");

    enrichableFields.forEach((field, i) => {
      setTimeout(() => {
        setEnrichedFields(prev => [...prev, field.index]);

        // Complete after last field
        if (i === enrichableFields.length - 1) {
          setTimeout(() => {
            setStage("complete");
            clearInterval(providerInterval);
          }, 400);
        }
      }, 400 + (i * 350));
    });
  };

  const replay = () => {
    setStage("idle");
    setEnrichedFields([]);
    setActiveProvider(0);
    setTimeout(startEnrichment, 300);
  };

  return (
    <section ref={ref} className={`py-16 md:py-24 transition-colors ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
            <Sparkles className="w-4 h-4" />
            Live Demo
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            Watch your data{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
              transform
            </span>
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Follow a real record through our waterfall enrichment pipeline.
          </p>
        </motion.div>

        {/* Demo Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 relative">
            {/* Connection Line - Desktop Only */}
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={stage !== "idle" ? { scale: 1 } : { scale: 0 }}
                className="relative"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                  stage === "complete"
                    ? "bg-green-500"
                    : "bg-[#3e8aff]"
                }`}>
                  {stage === "enriching" ? (
                    <Loader2 className="w-6 h-6 text-white animate-spin" />
                  ) : stage === "complete" ? (
                    <Check className="w-6 h-6 text-white" />
                  ) : (
                    <ArrowRight className="w-6 h-6 text-white" />
                  )}
                </div>
                {/* Pulsing ring */}
                {stage === "enriching" && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#3e8aff]"
                    animate={{ scale: [1, 1.5, 1.5], opacity: [0.8, 0, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
              </motion.div>
            </div>

            {/* Before Card */}
            <div className={`p-5 md:p-6 rounded-xl border backdrop-blur-xl transition-all ${
              isDark
                ? "bg-[#0a0a0a] border-white/[0.08]"
                : "bg-white/70 border-black/[0.08]"
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Before Enrichment
                  </span>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${isDark ? "bg-red-500/10 text-red-400" : "bg-red-100 text-red-600"}`}>
                  4 missing fields
                </span>
              </div>

              <div className="space-y-2.5">
                {fields.map((field, index) => (
                  <motion.div
                    key={`before-${field.label}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                      isDark ? "bg-white/[0.03]" : "bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className={isDark ? "text-gray-500" : "text-gray-400"}>
                        {field.icon}
                      </span>
                      <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                        {field.label}
                      </span>
                    </div>
                    <span className={`text-sm font-mono ${
                      field.beforeValue === "—"
                        ? (isDark ? "text-gray-600" : "text-gray-400")
                        : (isDark ? "text-white" : "text-gray-900")
                    }`}>
                      {field.beforeValue}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* After Card */}
            <div className={`relative p-5 md:p-6 rounded-xl border-2 overflow-hidden transition-all ${
              stage === "complete"
                ? "border-green-500/50 shadow-lg shadow-green-500/10"
                : "border-[#3e8aff]/30"
            }`} style={{
              background: isDark
                ? "linear-gradient(135deg, rgba(62, 138, 255, 0.05) 0%, rgba(96, 165, 250, 0.02) 100%)"
                : "linear-gradient(135deg, rgba(62, 138, 255, 0.08) 0%, rgba(255, 255, 255, 0.9) 100%)"
            }}>
              {/* Shimmer Effect */}
              {stage === "enriching" && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                  animate={{ x: ["−100%", "200%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              )}

              {/* Pulsing Glow */}
              {stage === "complete" && (
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={{
                    boxShadow: [
                      "inset 0 0 20px rgba(34, 197, 94, 0)",
                      "inset 0 0 30px rgba(34, 197, 94, 0.1)",
                      "inset 0 0 20px rgba(34, 197, 94, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${stage === "complete" ? "bg-green-500" : "bg-[#3e8aff]"}`} />
                    <span className={`text-sm font-medium ${stage === "complete" ? "text-green-500" : "text-[#3e8aff]"}`}>
                      {stage === "complete" ? "Enriched Result" : "Enriching..."}
                    </span>
                  </div>
                  {stage === "complete" && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-500"
                    >
                      100% complete
                    </motion.span>
                  )}
                </div>

                <div className="space-y-2.5">
                  {fields.map((field, index) => {
                    const isEnriched = enrichedFields.includes(index);
                    const showEnrichedValue = field.status === "enriched" && isEnriched;

                    return (
                      <motion.div
                        key={`after-${field.label}`}
                        initial={{ opacity: 0, x: 10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                          showEnrichedValue
                            ? "bg-[#3e8aff]/10"
                            : isDark ? "bg-white/[0.03]" : "bg-white/50"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={showEnrichedValue ? "text-[#3e8aff]" : (isDark ? "text-gray-500" : "text-gray-400")}>
                            {field.icon}
                          </span>
                          <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                            {field.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AnimatePresence mode="wait">
                            {field.status === "enriched" && !isEnriched && stage === "enriching" ? (
                              <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              >
                                <Loader2 className="w-4 h-4 text-[#3e8aff] animate-spin" />
                              </motion.div>
                            ) : (
                              <motion.span
                                key="value"
                                initial={showEnrichedValue ? { opacity: 0, scale: 0.8 } : {}}
                                animate={{ opacity: 1, scale: 1 }}
                                className={`text-sm font-mono ${
                                  showEnrichedValue
                                    ? "text-[#3e8aff] font-medium"
                                    : field.afterValue === "—"
                                      ? (isDark ? "text-gray-600" : "text-gray-400")
                                      : (isDark ? "text-white" : "text-gray-900")
                                }`}
                              >
                                {showEnrichedValue ? field.afterValue : field.beforeValue}
                              </motion.span>
                            )}
                          </AnimatePresence>
                          {showEnrichedValue && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500 }}
                            >
                              <Check className="w-4 h-4 text-green-500" />
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Provider Stream */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`mt-6 md:mt-8 p-4 rounded-xl border transition-colors ${
              isDark
                ? "bg-[#0a0a0a] border-white/[0.08]"
                : "bg-white/70 border-black/[0.08]"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#3e8aff]" />
                <span className={`text-xs font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Waterfall Enrichment
                </span>
              </div>
              <button
                onClick={replay}
                className={`text-xs px-3 py-1.5 rounded-lg transition-colors ${
                  isDark
                    ? "bg-white/[0.05] hover:bg-white/[0.1] text-gray-400"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-600"
                }`}
              >
                Replay Demo
              </button>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              {dataProviders.map((provider, i) => (
                <motion.span
                  key={provider}
                  initial={{ opacity: 0.3 }}
                  animate={{
                    opacity: i <= activeProvider ? 1 : 0.3,
                    scale: i === activeProvider && stage === "enriching" ? 1.05 : 1,
                  }}
                  className={`text-xs px-2.5 py-1.5 rounded-md transition-colors ${
                    i <= activeProvider
                      ? "bg-[#3e8aff]/10 text-[#3e8aff] border border-[#3e8aff]/20"
                      : isDark
                        ? "bg-white/[0.03] text-gray-500"
                        : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {provider}
                </motion.span>
              ))}
            </div>

            {stage === "enriching" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-xs mt-3 ${isDark ? "text-gray-500" : "text-gray-400"}`}
              >
                Querying {dataProviders[activeProvider]}...
              </motion.p>
            )}

            {stage === "complete" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs mt-3 text-green-500"
              >
                All fields enriched successfully from 15+ providers
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
