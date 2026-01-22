"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import {
  LinkedinLogo,
  Check,
  Envelope,
  Phone,
  Download,
  ArrowsClockwise,
  ArrowSquareOut,
  SpinnerGap,
  CheckCircle,
  Play,
} from "@/components/icons";

interface Lead {
  id: number;
  name: string;
  title: string;
  company: string;
  location: string;
  email?: string;
  phone?: string;
  selected?: boolean;
  enriched?: boolean;
}

const sampleLeads: Lead[] = [
  { id: 1, name: "Sarah Chen", title: "VP of Sales", company: "TechCorp Inc", location: "San Francisco, CA" },
  { id: 2, name: "Michael Rodriguez", title: "Head of Revenue", company: "ScaleUp Labs", location: "Austin, TX" },
  { id: 3, name: "Emily Watson", title: "CRO", company: "GrowthOS", location: "New York, NY" },
  { id: 4, name: "James Park", title: "Director of Sales", company: "DataFlow", location: "Seattle, WA" },
  { id: 5, name: "Lisa Thompson", title: "VP Business Dev", company: "CloudFirst", location: "Boston, MA" },
  { id: 6, name: "David Kim", title: "Sales Manager", company: "InnovateTech", location: "Chicago, IL" },
];

const enrichmentData: Record<number, { email: string; phone: string }> = {
  1: { email: "sarah.chen@techcorp.io", phone: "+1 (415) 555-0123" },
  2: { email: "m.rodriguez@scaleuplabs.com", phone: "+1 (512) 555-0124" },
  3: { email: "emily.watson@growthos.io", phone: "+1 (212) 555-0125" },
  4: { email: "james.park@dataflow.com", phone: "+1 (206) 555-0126" },
  5: { email: "l.thompson@cloudfirst.io", phone: "+1 (617) 555-0127" },
  6: { email: "david.kim@innovatetech.com", phone: "+1 (312) 555-0128" },
};

type DemoStage = "idle" | "selecting" | "exporting" | "enriching" | "complete";

export default function SalesNavDemo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [stage, setStage] = useState<DemoStage>("idle");
  const [leads, setLeads] = useState<Lead[]>(sampleLeads.map(l => ({ ...l })));
  const [selectedCount, setSelectedCount] = useState(0);
  const [exportProgress, setExportProgress] = useState(0);
  const [enrichedCount, setEnrichedCount] = useState(0);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);

  // Auto-play when in view
  useEffect(() => {
    if (isInView && !hasAutoPlayed && stage === "idle") {
      const timer = setTimeout(() => {
        startDemo();
        setHasAutoPlayed(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView, hasAutoPlayed, stage]);

  const resetDemo = () => {
    setStage("idle");
    setLeads(sampleLeads.map(l => ({ ...l })));
    setSelectedCount(0);
    setExportProgress(0);
    setEnrichedCount(0);
  };

  const startDemo = () => {
    setStage("selecting");

    // Staggered selection animation
    leads.forEach((_, index) => {
      setTimeout(() => {
        setLeads(prev => prev.map((l, i) =>
          i <= index ? { ...l, selected: true } : l
        ));
        setSelectedCount(index + 1);

        // After all selected, move to exporting
        if (index === leads.length - 1) {
          setTimeout(() => {
            setStage("exporting");
            animateExport();
          }, 400);
        }
      }, 300 * (index + 1));
    });
  };

  const animateExport = () => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setStage("enriching");
          animateEnrichment();
        }, 300);
      }
      setExportProgress(Math.min(progress, 100));
    }, 150);
  };

  const animateEnrichment = () => {
    leads.forEach((lead, index) => {
      setTimeout(() => {
        setLeads(prev => prev.map((l, i) =>
          i === index
            ? { ...l, enriched: true, ...enrichmentData[l.id] }
            : l
        ));
        setEnrichedCount(index + 1);

        // After all enriched, move to complete
        if (index === leads.length - 1) {
          setTimeout(() => {
            setStage("complete");
          }, 400);
        }
      }, 250 * (index + 1));
    });
  };

  return (
    <div ref={ref} className="w-full">
      {/* Demo Container */}
      <div className={`relative rounded-2xl border overflow-hidden ${
        isDark
          ? "bg-[#0a0a0a] border-white/[0.08]"
          : "bg-white border-black/[0.08]"
      }`}>
        {/* Header Bar */}
        <div className={`flex items-center justify-between px-4 py-3 border-b ${
          isDark ? "bg-[#080808] border-white/[0.08]" : "bg-gray-50 border-black/[0.08]"
        }`}>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className={`text-xs font-mono ${isDark ? "text-gray-500" : "text-gray-400"}`}>
              linkedin.com/sales/search/people
            </div>
          </div>

          {/* Reset Button */}
          <button
            onClick={() => {
              resetDemo();
              setTimeout(startDemo, 300);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              isDark
                ? "bg-white/[0.05] hover:bg-white/[0.1] text-gray-400"
                : "bg-gray-100 hover:bg-gray-200 text-gray-600"
            }`}
          >
            <ArrowsClockwise width={12} height={12} />
            Replay
          </button>
        </div>

        {/* Main Content - Split View */}
        <div className="grid md:grid-cols-2 divide-x divide-white/[0.08]">
          {/* Left Side - LinkedIn Mock */}
          <div className="p-4">
            {/* LinkedIn Header */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#0077b5]/20">
              <div className="w-8 h-8 rounded bg-[#0077b5] flex items-center justify-center">
                <LinkedinLogo width={20} height={20} className="text-white" />
              </div>
              <div>
                <div className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                  Sales Navigator
                </div>
                <div className="text-xs text-[#0077b5]">
                  {leads.length} leads found
                </div>
              </div>
            </div>

            {/* Lead List */}
            <div className="space-y-2">
              {leads.map((lead, index) => (
                <motion.div
                  key={lead.id}
                  initial={{ opacity: 0.5 }}
                  animate={{
                    opacity: 1,
                    scale: lead.selected ? 1 : 0.98,
                    borderColor: lead.selected ? "#0077b5" : "transparent",
                  }}
                  transition={{ duration: 0.3 }}
                  className={`relative p-3 rounded-lg border-2 transition-colors ${
                    isDark ? "bg-white/[0.02]" : "bg-gray-50"
                  } ${lead.selected ? "border-[#0077b5]" : "border-transparent"}`}
                >
                  <div className="flex items-center gap-3">
                    {/* Avatar */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                      isDark ? "bg-white/[0.1] text-gray-300" : "bg-gray-200 text-gray-600"
                    }`}>
                      {lead.name.split(" ").map(n => n[0]).join("")}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className={`text-sm font-medium truncate ${isDark ? "text-white" : "text-gray-900"}`}>
                        {lead.name}
                      </div>
                      <div className={`text-xs truncate ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                        {lead.title} at {lead.company}
                      </div>
                    </div>

                    {/* Selection Indicator */}
                    <AnimatePresence>
                      {lead.selected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="w-6 h-6 rounded-full bg-[#0077b5] flex items-center justify-center"
                        >
                          <Check width={14} height={14} className="text-white" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Cleanlist Export Panel */}
          <div className="p-4">
            {/* Panel Header */}
            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#3e8aff]/20">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-[#3e8aff] to-[#60a5fa] flex items-center justify-center">
                <Download width={16} height={16} className="text-white" />
              </div>
              <div>
                <div className={`text-sm font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                  Cleanlist Export
                </div>
                <div className="text-xs text-[#3e8aff]">
                  {stage === "idle" && "Ready to export"}
                  {stage === "selecting" && `Selecting ${selectedCount}/${leads.length}...`}
                  {stage === "exporting" && "Exporting leads..."}
                  {stage === "enriching" && `Enriching ${enrichedCount}/${leads.length}...`}
                  {stage === "complete" && "Export complete!"}
                </div>
              </div>
            </div>

            {/* Stage-specific content */}
            <div className="space-y-3">
              {/* Idle State - Start Button */}
              <AnimatePresence mode="wait">
                {stage === "idle" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center py-8"
                  >
                    <button
                      onClick={startDemo}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-colors"
                    >
                      <Play width={16} height={16} />
                      Export Selected Leads
                    </button>
                    <p className={`mt-3 text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                      Click to see the magic happen
                    </p>
                  </motion.div>
                )}

                {/* Selecting Stage */}
                {stage === "selecting" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-4"
                  >
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <SpinnerGap width={20} height={20} className="text-[#3e8aff] animate-spin" />
                      <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        Selecting leads from Sales Navigator...
                      </span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${isDark ? "bg-white/[0.1]" : "bg-gray-200"}`}>
                      <motion.div
                        className="h-full bg-[#3e8aff]"
                        initial={{ width: 0 }}
                        animate={{ width: `${(selectedCount / leads.length) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className={`text-center text-xs mt-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                      {selectedCount} of {leads.length} leads selected
                    </div>
                  </motion.div>
                )}

                {/* Exporting Stage */}
                {stage === "exporting" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-4"
                  >
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <Download width={20} height={20} className="text-[#3e8aff] animate-bounce" />
                      <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                        Extracting lead data...
                      </span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${isDark ? "bg-white/[0.1]" : "bg-gray-200"}`}>
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]"
                        style={{ width: `${exportProgress}%` }}
                      />
                    </div>
                    <div className={`text-center text-xs mt-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                      {Math.round(exportProgress)}% complete
                    </div>
                  </motion.div>
                )}

                {/* Enriching Stage */}
                {(stage === "enriching" || stage === "complete") && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-2"
                  >
                    {leads.map((lead, index) => (
                      <motion.div
                        key={lead.id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: lead.enriched ? 1 : 0.3,
                          height: "auto"
                        }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className={`p-3 rounded-lg ${
                          isDark ? "bg-white/[0.02] border border-white/[0.05]" : "bg-gray-50 border border-gray-100"
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                            isDark ? "bg-white/[0.1] text-gray-300" : "bg-gray-200 text-gray-600"
                          }`}>
                            {lead.name.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div className="flex-1">
                            <div className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                              {lead.name}
                            </div>
                          </div>
                          {lead.enriched ? (
                            <CheckCircle width={16} height={16} className="text-green-500" />
                          ) : (
                            <SpinnerGap width={16} height={16} className="text-[#3e8aff] animate-spin" />
                          )}
                        </div>

                        <AnimatePresence>
                          {lead.enriched && lead.email && lead.phone && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              className="flex flex-wrap gap-2 mt-2"
                            >
                              <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#3e8aff]/10 text-xs text-[#3e8aff]">
                                <Envelope width={12} height={12} />
                                <span className="truncate max-w-[140px]">{lead.email}</span>
                              </div>
                              <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-green-500/10 text-xs text-green-500">
                                <Phone width={12} height={12} />
                                <span>{lead.phone}</span>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Complete State - Success Banner */}
              <AnimatePresence>
                {stage === "complete" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4"
                  >
                    <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                          <Check width={20} height={20} className="text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-green-500">
                            Export Complete!
                          </div>
                          <div className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                            {leads.length} leads enriched with email & phone
                          </div>
                        </div>
                      </div>
                      <button className="w-full py-2 rounded-lg bg-green-500 text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-green-600 transition-colors">
                        <ArrowSquareOut width={16} height={16} />
                        View in CRM
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className={`px-4 py-2 border-t ${
          isDark ? "bg-[#080808] border-white/[0.08]" : "bg-gray-50 border-black/[0.08]"
        }`}>
          <div className="flex items-center justify-between text-xs">
            <div className={isDark ? "text-gray-500" : "text-gray-400"}>
              {stage === "idle" && "Click 'Export Selected Leads' to start"}
              {stage === "selecting" && "Selecting leads from your search..."}
              {stage === "exporting" && "Extracting profile data..."}
              {stage === "enriching" && "Enriching with email & phone..."}
              {stage === "complete" && "All leads enriched and ready to export"}
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                stage === "complete" ? "bg-green-500" : "bg-[#3e8aff] animate-pulse"
              }`} />
              <span className={isDark ? "text-gray-400" : "text-gray-500"}>
                {stage === "complete" ? "Done" : "Processing"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
