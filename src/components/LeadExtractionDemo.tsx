"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  LinkedinLogo,
  Check,
  Envelope,
  Phone,
  Buildings,
  User,
  FileCsv,
  ArrowsClockwise,
  CloudArrowUp,
  Browser,
  MagnifyingGlass,
  CursorClick,
  Table,
  UploadSimple,
  ListBullets,
  Link as LinkIcon,
  CheckCircle,
  CircleNotch,
  Export,
} from "@/components/icons";
import { useTheme } from "@/context/ThemeContext";

// HubSpot logo as SVG component
const HubSpotLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.984v-.066A2.2 2.2 0 0017.231.834h-.066a2.2 2.2 0 00-2.2 2.2v.066c0 .9.543 1.67 1.319 2.012v2.815a6.27 6.27 0 00-3.15 1.539L5.988 3.807a2.417 2.417 0 00.072-.559 2.438 2.438 0 10-2.438 2.438c.376 0 .732-.088 1.05-.24l7.073 5.594a6.247 6.247 0 00-.507 2.463 6.31 6.31 0 00.575 2.627l-2.1 2.1a2.017 2.017 0 00-.59-.095 2.034 2.034 0 102.034 2.034c0-.208-.034-.408-.091-.598l2.065-2.065a6.27 6.27 0 009.139-5.582 6.27 6.27 0 00-4.106-5.894zm-1.002 9.235a3.384 3.384 0 01-3.387-3.387 3.384 3.384 0 013.387-3.387 3.384 3.384 0 013.387 3.387 3.384 3.384 0 01-3.387 3.387z"/>
  </svg>
);

type ImportMethod = "linkedin" | "navigator" | "csv" | "hubspot";

interface ImportMethodConfig {
  id: ImportMethod;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
}

const importMethods: ImportMethodConfig[] = [
  {
    id: "linkedin",
    title: "Chrome Extension",
    subtitle: "One-click extraction from LinkedIn profiles",
    icon: <Browser width={20} height={20} />,
    color: "#0077b5",
  },
  {
    id: "navigator",
    title: "Sales Navigator",
    subtitle: "Bulk extract from saved lists & searches",
    icon: <LinkedinLogo width={20} height={20} />,
    color: "#0077b5",
  },
  {
    id: "csv",
    title: "CSV Import",
    subtitle: "Upload and enrich bulk contact lists",
    icon: <FileCsv width={20} height={20} />,
    color: "#22c55e",
  },
  {
    id: "hubspot",
    title: "HubSpot Sync",
    subtitle: "Import & live sync with your CRM",
    icon: (
      <div className="w-5 h-5 flex items-center justify-center">
        <Image src="/images/favicons/hubspot.ico" alt="HubSpot" width={20} height={20} className="w-full h-full object-contain" />
      </div>
    ),
    color: "#ff7a59",
  },
];

export default function LeadExtractionDemo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeMethod, setActiveMethod] = useState<ImportMethod>("linkedin");
  const [animationStep, setAnimationStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const resetAnimation = useCallback(() => {
    setAnimationStep(0);
    // Start animation sequence
    setTimeout(() => setAnimationStep(1), 400);
    setTimeout(() => setAnimationStep(2), 1000);
    setTimeout(() => setAnimationStep(3), 1800);
    setTimeout(() => setAnimationStep(4), 2600);
  }, []);

  // Auto-cycle through methods
  useEffect(() => {
    if (!isAutoPlaying) return;

    // Reset animation when method changes
    resetAnimation();

    // Move to next method after animation completes
    const cycleTimer = setTimeout(() => {
      setActiveMethod((prev) => {
        const currentIndex = importMethods.findIndex((m) => m.id === prev);
        const nextIndex = (currentIndex + 1) % importMethods.length;
        return importMethods[nextIndex].id;
      });
    }, 4500);

    return () => clearTimeout(cycleTimer);
  }, [activeMethod, isAutoPlaying, resetAnimation]);

  // Initial animation start
  useEffect(() => {
    resetAnimation();
  }, [resetAnimation]);

  const handleMethodClick = (methodId: ImportMethod) => {
    setIsAutoPlaying(false);
    setActiveMethod(methodId);
    resetAnimation();
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentMethod = importMethods.find((m) => m.id === activeMethod)!;

  return (
    <div
      className={`p-6 md:p-8 rounded-2xl border ${
        isDark
          ? "bg-gradient-to-br from-white/[0.03] to-white/[0.01] border-white/[0.08]"
          : "bg-white/70 border-black/[0.08]"
      }`}
    >
      {/* Method Selector Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {importMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => handleMethodClick(method.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
              activeMethod === method.id
                ? "text-white shadow-lg"
                : isDark
                ? "bg-white/[0.05] text-gray-400 hover:bg-white/[0.1]"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
            style={{
              backgroundColor:
                activeMethod === method.id ? method.color : undefined,
              boxShadow:
                activeMethod === method.id
                  ? `0 4px 20px ${method.color}40`
                  : undefined,
            }}
          >
            {method.icon}
            <span className="hidden sm:inline">{method.title}</span>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Animation Panel */}
        <div
          className={`relative p-5 rounded-xl border overflow-hidden h-[320px] ${
            isDark
              ? "bg-[#0a0a0a] border-white/[0.08]"
              : "bg-white border-black/[0.08]"
          }`}
        >
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200/10">
            <motion.div
              key={activeMethod}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 4.5, ease: "linear" }}
              className="h-full"
              style={{ backgroundColor: currentMethod.color }}
            />
          </div>

          <AnimatePresence mode="wait">
            {/* LinkedIn Chrome Extension */}
            {activeMethod === "linkedin" && (
              <motion.div
                key="linkedin"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <Browser width={14} height={14} />
                  linkedin.com/in/sarah-chen
                </div>

                {/* Profile mockup */}
                <div
                  className={`p-4 rounded-lg ${
                    isDark ? "bg-[#0a4b8a]/20" : "bg-[#0077b5]/10"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-purple-400 to-pink-400 flex-shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                        alt="Sarah Chen"
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Sarah Chen
                      </div>
                      <div className="text-sm text-gray-500">
                        VP of Sales at TechCorp
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        San Francisco Bay Area
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chrome extension popup */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{
                    opacity: animationStep >= 1 ? 1 : 0,
                    scale: animationStep >= 1 ? 1 : 0.9,
                    y: animationStep >= 1 ? 0 : 10,
                  }}
                  className={`absolute right-4 top-20 w-48 p-3 rounded-lg border shadow-xl ${
                    isDark
                      ? "bg-[#1a1a1a] border-white/[0.1]"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded bg-[#3e8aff] flex items-center justify-center">
                      <span className="text-white text-xs font-bold">C</span>
                    </div>
                    <span
                      className={`text-sm font-medium ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Cleanlist
                    </span>
                  </div>
                  <motion.button
                    initial={{ scale: 1 }}
                    animate={{
                      scale: animationStep >= 2 ? [1, 0.95, 1] : 1,
                    }}
                    className="w-full py-2 px-3 bg-[#3e8aff] text-white text-sm font-medium rounded-md flex items-center justify-center gap-2"
                  >
                    {animationStep >= 3 ? (
                      <>
                        <Check width={14} height={14} />
                        Extracted!
                      </>
                    ) : animationStep >= 2 ? (
                      <>
                        <CircleNotch width={14} height={14} className="animate-spin" />
                        Extracting...
                      </>
                    ) : (
                      <>
                        <CursorClick width={14} height={14} />
                        Extract Lead
                      </>
                    )}
                  </motion.button>
                </motion.div>

                {/* Enriched data preview */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: animationStep >= 4 ? 1 : 0,
                    y: animationStep >= 4 ? 0 : 10,
                  }}
                  className={`p-3 rounded-lg space-y-2 ${
                    isDark
                      ? "bg-green-500/10 border border-green-500/20"
                      : "bg-green-50 border border-green-200"
                  }`}
                >
                  {[
                    { icon: <Envelope width={14} height={14} />, text: "sarah.chen@techcorp.com" },
                    { icon: <Phone width={14} height={14} />, text: "+1 (415) 555-0123" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span className="text-green-500">{item.icon}</span>
                      <span className={isDark ? "text-white" : "text-gray-900"}>
                        {item.text}
                      </span>
                      <Check width={14} height={14} className="text-green-500 ml-auto" />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )}

            {/* Sales Navigator Import */}
            {activeMethod === "navigator" && (
              <motion.div
                key="navigator"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <LinkedinLogo width={14} height={14} />
                  Sales Navigator - Saved Leads
                </div>

                {/* List view mockup */}
                <div
                  className={`rounded-lg border overflow-hidden ${
                    isDark ? "border-white/[0.08]" : "border-gray-200"
                  }`}
                >
                  {/* Header */}
                  <div
                    className={`px-3 py-2 flex items-center justify-between ${
                      isDark ? "bg-white/[0.03]" : "bg-gray-50"
                    }`}
                  >
                    <span className="text-xs text-gray-500">
                      Enterprise Prospects (127)
                    </span>
                    <motion.button
                      initial={{ scale: 1 }}
                      animate={{
                        scale: animationStep >= 1 ? [1, 0.95, 1] : 1,
                        backgroundColor:
                          animationStep >= 2 ? "#22c55e" : "#3e8aff",
                      }}
                      className="px-2 py-1 rounded text-xs text-white font-medium flex items-center gap-1"
                      style={{ backgroundColor: "#3e8aff" }}
                    >
                      {animationStep >= 2 ? (
                        <>
                          <Check width={12} height={12} />
                          Extracted
                        </>
                      ) : (
                        <>
                          <Export width={12} height={12} />
                          Extract All
                        </>
                      )}
                    </motion.button>
                  </div>

                  {/* Leads list */}
                  {[
                    { name: "Sarah Chen", title: "VP Sales", company: "TechCorp", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
                    { name: "Michael Park", title: "Director", company: "Acme Inc", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" },
                    { name: "Emma Wilson", title: "Head of Growth", company: "StartupXYZ", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop" },
                    { name: "James Liu", title: "CRO", company: "Enterprise Co", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop" },
                  ].map((lead, i) => (
                    <motion.div
                      key={lead.name}
                      initial={{ opacity: 0.5, backgroundColor: "transparent" }}
                      animate={{
                        opacity: animationStep >= 2 ? 1 : 0.5,
                        backgroundColor:
                          animationStep >= 3 && animationStep >= i + 2
                            ? isDark
                              ? "rgba(34, 197, 94, 0.1)"
                              : "rgba(34, 197, 94, 0.05)"
                            : "transparent",
                      }}
                      transition={{ delay: i * 0.1 }}
                      className={`px-3 py-2 flex items-center gap-3 border-t ${
                        isDark ? "border-white/[0.05]" : "border-gray-100"
                      }`}
                    >
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-gray-400 to-gray-500 flex-shrink-0">
                        <Image
                          src={lead.image}
                          alt={lead.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div
                          className={`text-sm font-medium truncate ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {lead.name}
                        </div>
                        <div className="text-xs text-gray-500 truncate">
                          {lead.title} at {lead.company}
                        </div>
                      </div>
                      {animationStep >= i + 3 && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <CheckCircle
                            width={18} height={18}
                           
                            className="text-green-500"
                          />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Progress indicator */}
                {animationStep >= 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-between text-xs"
                  >
                    <span className="text-gray-500">
                      {animationStep >= 4
                        ? "127 leads extracted"
                        : "Extracting leads..."}
                    </span>
                    <span className="text-green-500 font-medium">
                      {animationStep >= 4 ? "100%" : `${(animationStep - 1) * 33}%`}
                    </span>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* CSV Import */}
            {activeMethod === "csv" && (
              <motion.div
                key="csv"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                {/* Upload area */}
                <motion.div
                  initial={{ borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}
                  animate={{
                    borderColor:
                      animationStep >= 1
                        ? "#22c55e"
                        : isDark
                        ? "rgba(255,255,255,0.1)"
                        : "rgba(0,0,0,0.1)",
                    backgroundColor:
                      animationStep >= 1
                        ? isDark
                          ? "rgba(34, 197, 94, 0.1)"
                          : "rgba(34, 197, 94, 0.05)"
                        : "transparent",
                  }}
                  className={`p-6 rounded-lg border-2 border-dashed text-center ${
                    isDark ? "border-white/[0.1]" : "border-gray-200"
                  }`}
                >
                  {animationStep >= 1 ? (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                    >
                      <CheckCircle
                        width={32} height={32}
                       
                        className="text-green-500 mx-auto mb-2"
                      />
                      <div
                        className={`text-sm font-medium ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        prospects_q1.csv uploaded
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        2,847 rows detected
                      </div>
                    </motion.div>
                  ) : (
                    <>
                      <CloudArrowUp
                        width={32} height={32}
                        className={`mx-auto mb-2 ${
                          isDark ? "text-gray-500" : "text-gray-400"
                        }`}
                      />
                      <div className="text-sm text-gray-500">
                        Drop your CSV here or click to upload
                      </div>
                    </>
                  )}
                </motion.div>

                {/* Column mapping preview */}
                {animationStep >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-lg ${
                      isDark ? "bg-white/[0.03]" : "bg-gray-50"
                    }`}
                  >
                    <div className="text-xs text-gray-500 mb-2">
                      Column Mapping
                    </div>
                    <div className="space-y-2">
                      {[
                        { from: "full_name", to: "Name", icon: <User width={12} height={12} /> },
                        { from: "work_email", to: "Email", icon: <Envelope width={12} height={12} /> },
                        { from: "company", to: "Company", icon: <Buildings width={12} height={12} /> },
                      ].map((mapping, i) => (
                        <motion.div
                          key={mapping.from}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-2 text-xs"
                        >
                          <span className="text-gray-400">{mapping.icon}</span>
                          <span className="text-gray-500">{mapping.from}</span>
                          <span className="text-gray-400">→</span>
                          <span
                            className={`font-medium ${
                              isDark ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {mapping.to}
                          </span>
                          <Check width={12} height={12} className="text-green-500 ml-auto" />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Processing */}
                {animationStep >= 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Enriching contacts...</span>
                      <span className="text-[#3e8aff] font-medium">
                        {animationStep >= 4 ? "2,847 / 2,847" : "1,423 / 2,847"}
                      </span>
                    </div>
                    <div
                      className={`h-2 rounded-full overflow-hidden ${
                        isDark ? "bg-white/[0.1]" : "bg-gray-200"
                      }`}
                    >
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: animationStep >= 4 ? "100%" : "50%" }}
                        className="h-full bg-[#3e8aff] rounded-full"
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                    {animationStep >= 4 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2 text-green-500 text-sm"
                      >
                        <CheckCircle width={16} height={16} />
                        <span>Enrichment complete! 2,534 emails found (89%)</span>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* HubSpot CRM Sync */}
            {activeMethod === "hubspot" && (
              <motion.div
                key="hubspot"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-4"
              >
                {/* HubSpot connection */}
                <div
                  className={`p-4 rounded-lg flex items-center gap-3 ${
                    isDark ? "bg-[#ff7a59]/10" : "bg-[#ff7a59]/5"
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#ff7a59] flex items-center justify-center p-2">
                    <Image src="/images/favicons/hubspot.ico" alt="HubSpot" width={24} height={24} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <div
                      className={`font-medium ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      HubSpot
                    </div>
                    <div className="text-xs text-gray-500">Connected</div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/20 text-green-500 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Live Sync
                  </div>
                </div>

                {/* List selector */}
                <div className="space-y-2">
                  <div className="text-xs text-gray-500">Select List to Import</div>
                  {[
                    { name: "Q1 Enterprise Leads", count: 1247, selected: true },
                    { name: "Marketing Qualified", count: 892, selected: false },
                    { name: "Re-engagement", count: 456, selected: false },
                  ].map((list, i) => (
                    <motion.div
                      key={list.name}
                      initial={{ opacity: 0.5 }}
                      animate={{
                        opacity:
                          animationStep >= 1 && list.selected ? 1 : 0.5,
                        borderColor:
                          animationStep >= 1 && list.selected
                            ? "#ff7a59"
                            : isDark
                            ? "rgba(255,255,255,0.05)"
                            : "rgba(0,0,0,0.05)",
                      }}
                      className={`p-3 rounded-lg border flex items-center gap-3 ${
                        isDark
                          ? "bg-white/[0.02] border-white/[0.05]"
                          : "bg-gray-50 border-gray-100"
                      }`}
                    >
                      <ListBullets width={16} height={16} className="text-gray-400" />
                      <div className="flex-1">
                        <div
                          className={`text-sm ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {list.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {list.count} contacts
                        </div>
                      </div>
                      {animationStep >= 1 && list.selected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <CheckCircle
                            width={18} height={18}
                           
                            className="text-[#ff7a59]"
                          />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Sync status */}
                {animationStep >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-lg ${
                      animationStep >= 4
                        ? "bg-green-500/10 border border-green-500/20"
                        : isDark
                        ? "bg-white/[0.03]"
                        : "bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={
                          animationStep < 4 ? { rotate: 360 } : { rotate: 0 }
                        }
                        transition={
                          animationStep < 4
                            ? { duration: 1, repeat: Infinity, ease: "linear" }
                            : {}
                        }
                      >
                        {animationStep >= 4 ? (
                          <CheckCircle
                            width={20} height={20}
                           
                            className="text-green-500"
                          />
                        ) : (
                          <ArrowsClockwise width={20} height={20} className="text-[#3e8aff]" />
                        )}
                      </motion.div>
                      <div className="flex-1">
                        <div
                          className={`text-sm font-medium ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {animationStep >= 4
                            ? "Sync Complete!"
                            : "Syncing & Enriching..."}
                        </div>
                        <div className="text-xs text-gray-500">
                          {animationStep >= 4
                            ? "1,247 contacts enriched • Live sync enabled"
                            : "Importing from HubSpot..."}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Info Panel */}
        <div className="space-y-4">
          <div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {currentMethod.title}
            </h3>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              {currentMethod.subtitle}
            </p>
          </div>

          <div className="space-y-3">
            {activeMethod === "linkedin" && (
              <>
                {[
                  { title: "Install Extension", desc: "Add Cleanlist to Chrome in one click" },
                  { title: "Visit Any Profile", desc: "Works on LinkedIn & Sales Navigator" },
                  { title: "Click to Extract", desc: "Get verified email & phone instantly" },
                ].map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: animationStep >= i + 1 ? 1 : 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${
                        animationStep >= i + 1
                          ? "bg-[#3e8aff] text-white"
                          : isDark
                          ? "bg-white/[0.05] text-gray-500"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {animationStep >= i + 1 ? <Check width={12} height={12} /> : i + 1}
                    </div>
                    <div>
                      <div className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-500">{step.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </>
            )}

            {activeMethod === "navigator" && (
              <>
                {[
                  { title: "Open Saved Lists", desc: "Access your Sales Navigator lists" },
                  { title: "Bulk Extract", desc: "Extract all leads with one click" },
                  { title: "Auto-Enrich", desc: "Emails & phones added automatically" },
                ].map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: animationStep >= i + 1 ? 1 : 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${
                        animationStep >= i + 1
                          ? "bg-[#0077b5] text-white"
                          : isDark
                          ? "bg-white/[0.05] text-gray-500"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {animationStep >= i + 1 ? <Check width={12} height={12} /> : i + 1}
                    </div>
                    <div>
                      <div className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-500">{step.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </>
            )}

            {activeMethod === "csv" && (
              <>
                {[
                  { title: "Upload CSV", desc: "Drag & drop or click to upload" },
                  { title: "Map Columns", desc: "Auto-detect or manually map fields" },
                  { title: "Bulk Enrich", desc: "Enrich thousands of contacts at once" },
                ].map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: animationStep >= i + 1 ? 1 : 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${
                        animationStep >= i + 1
                          ? "bg-[#22c55e] text-white"
                          : isDark
                          ? "bg-white/[0.05] text-gray-500"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {animationStep >= i + 1 ? <Check width={12} height={12} /> : i + 1}
                    </div>
                    <div>
                      <div className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-500">{step.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </>
            )}

            {activeMethod === "hubspot" && (
              <>
                {[
                  { title: "Connect HubSpot", desc: "One-click OAuth integration" },
                  { title: "Select Lists", desc: "Choose which lists to import" },
                  { title: "Live Sync", desc: "Changes sync both ways automatically" },
                ].map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: animationStep >= i + 1 ? 1 : 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${
                        animationStep >= i + 1
                          ? "bg-[#ff7a59] text-white"
                          : isDark
                          ? "bg-white/[0.05] text-gray-500"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {animationStep >= i + 1 ? <Check width={12} height={12} /> : i + 1}
                    </div>
                    <div>
                      <div className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                        {step.title}
                      </div>
                      <div className="text-xs text-gray-500">{step.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </>
            )}
          </div>

          {/* Feature highlight */}
          <div
            className={`p-3 rounded-lg mt-4 ${
              isDark ? "bg-[#3e8aff]/10" : "bg-blue-50"
            }`}
          >
            <p className="text-sm text-[#3e8aff]">
              <strong>All methods include:</strong> Waterfall enrichment from 15+ providers, email verification, and CRM sync.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
