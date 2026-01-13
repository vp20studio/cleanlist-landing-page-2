"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Lightning,
  Check,
  Funnel,
  Database,
  PaperPlaneTilt,
  ArrowCounterClockwise,
  FlowArrow,
  SpinnerGap,
  Users,
  Envelope,
  ArrowDown,
} from "@phosphor-icons/react";
import { useTheme } from "@/context/ThemeContext";

interface PlaybookNode {
  id: string;
  type: "trigger" | "filter" | "enrich" | "action";
  label: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  stats?: string;
}

const playbookNodes: PlaybookNode[] = [
  {
    id: "1",
    type: "trigger",
    label: "New Lead Added",
    description: "From LinkedIn import",
    icon: <Users size={16} />,
    color: "#3e8aff",
    stats: "250 leads",
  },
  {
    id: "2",
    type: "filter",
    label: "ICP Score > 80",
    description: "Filter high-fit leads",
    icon: <Funnel size={16} />,
    color: "#8b5cf6",
    stats: "156 matched",
  },
  {
    id: "3",
    type: "enrich",
    label: "Waterfall Enrich",
    description: "Find email + phone",
    icon: <Database size={16} />,
    color: "#22c55e",
    stats: "142 enriched",
  },
  {
    id: "4",
    type: "action",
    label: "Add to Sequence",
    description: "Sync to Outreach",
    icon: <PaperPlaneTilt size={16} />,
    color: "#3e8aff",
    stats: "142 synced",
  },
];

type Stage = "idle" | "running" | "complete";

export default function PlaybookBuilderDemo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [stage, setStage] = useState<Stage>("idle");
  const [activeNode, setActiveNode] = useState(-1);
  const [completedNodes, setCompletedNodes] = useState<string[]>([]);

  const runPlaybook = useCallback(() => {
    setStage("running");
    setActiveNode(-1);
    setCompletedNodes([]);

    playbookNodes.forEach((node, i) => {
      // Start processing node
      setTimeout(() => {
        setActiveNode(i);
      }, i * 800);

      // Complete node
      setTimeout(() => {
        setCompletedNodes((prev) => [...prev, node.id]);
        if (i === playbookNodes.length - 1) {
          setTimeout(() => {
            setStage("complete");
            setActiveNode(-1);
          }, 600);
        }
      }, (i + 1) * 800);
    });
  }, []);

  const resetDemo = () => {
    setStage("idle");
    setActiveNode(-1);
    setCompletedNodes([]);
  };

  // Auto-start when in view
  useEffect(() => {
    if (isInView && stage === "idle") {
      const timer = setTimeout(runPlaybook, 600);
      return () => clearTimeout(timer);
    }
  }, [isInView, stage, runPlaybook]);

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
      <div
        className={`flex items-center gap-3 px-4 py-3 border-b ${
          isDark
            ? "border-white/[0.08] bg-[#080808]"
            : "border-black/[0.08] bg-gray-50"
        }`}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div
          className={`flex-1 flex items-center justify-center px-4 py-1.5 rounded-lg text-xs ${
            isDark ? "bg-white/[0.03] text-gray-500" : "bg-gray-100 text-gray-500"
          }`}
        >
          app.cleanlist.ai/playbooks
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
          <ArrowCounterClockwise size={16} />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#3e8aff]/10 flex items-center justify-center">
              <FlowArrow size={20} className="text-[#3e8aff]" />
            </div>
            <div>
              <h3
                className={`font-semibold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Outbound Sales Playbook
              </h3>
              <p className="text-xs text-gray-500">
                {stage === "running"
                  ? "Running..."
                  : stage === "complete"
                  ? "Completed"
                  : "Ready to run"}
              </p>
            </div>
          </div>
          {stage === "complete" && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/20 text-green-500 text-xs font-medium"
            >
              <Check size={14} />
              Complete
            </motion.div>
          )}
        </div>

        {/* Workflow Nodes */}
        <div className="relative">
          {playbookNodes.map((node, i) => {
            const isActive = activeNode === i;
            const isCompleted = completedNodes.includes(node.id);
            const isPending = !isActive && !isCompleted;

            return (
              <div key={node.id}>
                {/* Connector Line */}
                {i > 0 && (
                  <div className="flex justify-center my-2">
                    <motion.div
                      className="w-0.5 h-8 rounded-full relative overflow-hidden"
                      style={{
                        backgroundColor: isDark
                          ? "rgba(255,255,255,0.1)"
                          : "rgba(0,0,0,0.1)",
                      }}
                    >
                      {(isCompleted || isActive) && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "100%" }}
                          transition={{ duration: 0.3 }}
                          className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#3e8aff] to-[#22c55e]"
                        />
                      )}
                    </motion.div>
                  </div>
                )}

                {/* Node Card */}
                <motion.div
                  initial={{ opacity: 0.5 }}
                  animate={{
                    opacity: isActive || isCompleted ? 1 : 0.5,
                    boxShadow: isActive ? `0 0 30px ${node.color}30` : "none",
                  }}
                  className={`relative flex items-center gap-4 p-4 rounded-xl border transition-all ${
                    isActive
                      ? isDark
                        ? "bg-white/[0.03] border-[#3e8aff]/50"
                        : "bg-[#3e8aff]/5 border-[#3e8aff]/30"
                      : isCompleted
                      ? isDark
                        ? "bg-green-500/5 border-green-500/30"
                        : "bg-green-50 border-green-500/30"
                      : isDark
                      ? "bg-white/[0.02] border-white/[0.05]"
                      : "bg-gray-50 border-black/[0.05]"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      backgroundColor: `${node.color}20`,
                      color: node.color,
                    }}
                  >
                    {isActive ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <SpinnerGap size={20} />
                      </motion.div>
                    ) : isCompleted ? (
                      <Check size={20} className="text-green-500" />
                    ) : (
                      node.icon
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div
                      className={`font-medium text-sm ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {node.label}
                    </div>
                    <div className="text-xs text-gray-500">{node.description}</div>
                  </div>

                  {/* Stats */}
                  <AnimatePresence>
                    {isCompleted && node.stats && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`text-xs font-medium ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {node.stats}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -right-1 -top-1"
                    >
                      <span className="flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3e8aff] opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#3e8aff]" />
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        {stage === "complete" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`mt-6 pt-4 border-t flex items-center justify-between text-xs ${
              isDark ? "border-white/[0.08]" : "border-black/[0.08]"
            }`}
          >
            <div className="flex items-center gap-2 text-green-500">
              <Lightning size={16} />
              <span>142 leads enriched and synced to CRM</span>
            </div>
            <span className="text-gray-500">~2.5s total</span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
