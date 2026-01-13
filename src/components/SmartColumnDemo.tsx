"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Brain,
  Sparkle,
  Check,
  CircleNotch,
  Play,
  ArrowsClockwise,
  ArrowRight,
  MagicWand,
} from "@phosphor-icons/react";
import { useTheme } from "@/context/ThemeContext";
import { GlowIcon } from "@/components/ui";

interface Row {
  input: string;
  output: string;
  status: "pending" | "processing" | "complete";
}

const sampleData: { input: string; output: string }[] = [
  { input: "VP of Sales", output: "VP" },
  { input: "Vice President, Marketing", output: "VP" },
  { input: "Chief Executive Officer", output: "C-Level" },
  { input: "Senior Account Executive", output: "IC" },
  { input: "Director of BD", output: "Director" },
  { input: "Head of Engineering", output: "Director" },
  { input: "Sales Manager", output: "Manager" },
  { input: "Marketing Coordinator", output: "IC" },
];

const prompts = [
  {
    text: "Standardize job titles to seniority levels: C-Level, VP, Director, Manager, IC",
    description: "Categorize titles by seniority",
  },
  {
    text: "Extract industry from company name and description",
    description: "Classify company industries",
  },
  {
    text: "Score leads 1-100 based on decision-making authority",
    description: "Lead scoring with AI",
  },
];

export default function SmartColumnDemo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [selectedPrompt, setSelectedPrompt] = useState(0);
  const [stage, setStage] = useState<"idle" | "processing" | "complete">("idle");
  const [rows, setRows] = useState<Row[]>(
    sampleData.map((d) => ({ ...d, status: "pending" as const }))
  );
  const [processedCount, setProcessedCount] = useState(0);

  const runTransform = useCallback(() => {
    setStage("processing");
    setRows(sampleData.map((d) => ({ ...d, status: "pending" as const })));
    setProcessedCount(0);

    sampleData.forEach((_, i) => {
      // Mark as processing
      setTimeout(() => {
        setRows((prev) =>
          prev.map((r, idx) =>
            idx === i ? { ...r, status: "processing" as const } : r
          )
        );
      }, i * 300);

      // Mark as complete
      setTimeout(() => {
        setRows((prev) =>
          prev.map((r, idx) =>
            idx === i ? { ...r, status: "complete" as const } : r
          )
        );
        setProcessedCount((prev) => prev + 1);

        if (i === sampleData.length - 1) {
          setTimeout(() => setStage("complete"), 300);
        }
      }, i * 300 + 250);
    });
  }, []);

  const resetDemo = () => {
    setStage("idle");
    setRows(sampleData.map((d) => ({ ...d, status: "pending" as const })));
    setProcessedCount(0);
  };

  // Auto-start when in view
  useEffect(() => {
    if (isInView && stage === "idle") {
      const timer = setTimeout(runTransform, 800);
      return () => clearTimeout(timer);
    }
  }, [isInView, stage, runTransform]);

  return (
    <div
      ref={containerRef}
      className={`p-6 md:p-8 rounded-2xl border ${
        isDark
          ? "bg-gradient-to-br from-white/[0.03] to-white/[0.01] border-white/[0.08]"
          : "bg-white/70 border-black/[0.08]"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <GlowIcon icon={<Brain />} size="md" color="purple" variant="glow" />
          <div>
            <h3 className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
              Smart Column Demo
            </h3>
            <p className="text-xs text-gray-500">
              AI-powered data transformation
            </p>
          </div>
        </div>
        <button
          onClick={stage === "complete" ? resetDemo : runTransform}
          disabled={stage === "processing"}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors ${
            stage === "processing"
              ? "opacity-50 cursor-not-allowed"
              : isDark
                ? "text-gray-400 hover:text-white hover:bg-white/5"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          }`}
        >
          {stage === "complete" ? (
            <>
              <ArrowsClockwise size={14} />
              Reset
            </>
          ) : stage === "processing" ? (
            <>
              <CircleNotch size={14} className="animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Play size={14} />
              Run
            </>
          )}
        </button>
      </div>

      {/* Prompt Selector */}
      <div className="mb-6">
        <div className={`text-xs font-medium uppercase tracking-wide mb-3 ${
          isDark ? "text-gray-500" : "text-gray-400"
        }`}>
          Select Transformation
        </div>
        <div className="flex flex-wrap gap-2">
          {prompts.map((prompt, i) => (
            <button
              key={i}
              onClick={() => {
                setSelectedPrompt(i);
                if (stage === "complete") resetDemo();
              }}
              className={`px-3 py-2 rounded-lg text-xs transition-all ${
                selectedPrompt === i
                  ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                  : isDark
                    ? "bg-white/[0.03] text-gray-400 border border-white/[0.05] hover:border-white/[0.1]"
                    : "bg-gray-50 text-gray-600 border border-black/[0.05] hover:border-black/[0.1]"
              }`}
            >
              {prompt.description}
            </button>
          ))}
        </div>
      </div>

      {/* Prompt Display */}
      <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <MagicWand size={16} className="text-purple-400" />
          <span className="text-xs text-purple-400 font-medium">AI Prompt</span>
        </div>
        <div className={`text-sm font-mono ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          &quot;{prompts[selectedPrompt].text}&quot;
        </div>
      </div>

      {/* Data Table */}
      <div className={`rounded-xl border overflow-hidden ${
        isDark ? "border-white/[0.08]" : "border-black/[0.08]"
      }`}>
        {/* Table Header */}
        <div className={`grid grid-cols-[1fr,auto,1fr] gap-4 px-4 py-3 border-b ${
          isDark
            ? "border-white/[0.08] bg-white/[0.02]"
            : "border-black/[0.05] bg-gray-50/50"
        }`}>
          <div className={`text-xs font-medium uppercase tracking-wide ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}>
            Input
          </div>
          <div className="w-8" />
          <div className={`text-xs font-medium uppercase tracking-wide ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}>
            Output
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-white/[0.05]">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: row.status !== "pending" ? 1 : 0.5 }}
              className={`grid grid-cols-[1fr,auto,1fr] gap-4 px-4 py-3 items-center ${
                row.status === "complete"
                  ? isDark
                    ? "bg-green-500/5"
                    : "bg-green-50/50"
                  : ""
              }`}
            >
              {/* Input */}
              <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                {row.input}
              </div>

              {/* Arrow */}
              <div className="w-8 flex justify-center">
                {row.status === "processing" ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <CircleNotch size={16} className="text-purple-500" />
                  </motion.div>
                ) : row.status === "complete" ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <Check size={16} className="text-green-500" />
                  </motion.div>
                ) : (
                  <ArrowRight size={16} className="text-gray-500" />
                )}
              </div>

              {/* Output */}
              <div>
                {row.status === "complete" ? (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`text-sm font-medium ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {row.output}
                  </motion.span>
                ) : row.status === "processing" ? (
                  <span className="text-sm text-purple-400">Analyzing...</span>
                ) : (
                  <span className="text-sm text-gray-500">—</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Stats */}
      <AnimatePresence>
        {stage !== "idle" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 flex items-center justify-between text-sm ${
              stage === "complete" ? "text-green-500" : "text-purple-400"
            }`}
          >
            <div className="flex items-center gap-2">
              {stage === "complete" ? (
                <>
                  <Sparkle size={16} />
                  <span>Transformation complete!</span>
                </>
              ) : (
                <>
                  <CircleNotch size={16} className="animate-spin" />
                  <span>Processing with GPT-4...</span>
                </>
              )}
            </div>
            <span className={isDark ? "text-gray-500" : "text-gray-400"}>
              {processedCount}/{sampleData.length} rows
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
