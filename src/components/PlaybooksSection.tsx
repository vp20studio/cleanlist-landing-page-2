"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Lightning,
  Crosshair,
  Calendar,
  ArrowsClockwise,
  Users,
  Envelope,
  Phone,
  TrendUp,
  CheckCircle,
  Play,
  CaretRight,
} from "@/components/icons";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const playbooks = [
  {
    id: "outbound",
    title: "Outbound Sales",
    description: "Extract, enrich, score, and sync to your CRM automatically.",
    result: "2x qualified meetings per BDR",
    icon: TrendUp,
    steps: [
      { icon: Users, label: "Extract from LinkedIn" },
      { icon: Lightning, label: "Waterfall Enrich" },
      { icon: Crosshair, label: "ICP Score" },
      { icon: ArrowRight, label: "Sync to CRM" },
    ],
  },
  {
    id: "abm",
    title: "ABM Campaign",
    description: "Build hyper-targeted account lists with verified decision makers.",
    result: "50% higher reply rates",
    icon: Crosshair,
    steps: [
      { icon: Crosshair, label: "Target Accounts" },
      { icon: Users, label: "Find Contacts" },
      { icon: CheckCircle, label: "Verify & Score" },
      { icon: Envelope, label: "Launch Campaign" },
    ],
  },
  {
    id: "event",
    title: "Event Follow-up",
    description: "Convert event leads while they're still warm.",
    result: "Convert leads in 24 hours",
    icon: Calendar,
    steps: [
      { icon: Users, label: "Upload Attendees" },
      { icon: Envelope, label: "Verify Emails" },
      { icon: Phone, label: "Find Phones" },
      { icon: Lightning, label: "Auto-Sequence" },
    ],
  },
  {
    id: "cleanup",
    title: "CRM Cleanup",
    description: "Eliminate data decay and keep your CRM fresh.",
    result: "Eliminate data decay weekly",
    icon: ArrowsClockwise,
    steps: [
      { icon: ArrowsClockwise, label: "Audit CRM" },
      { icon: CheckCircle, label: "Remove Dupes" },
      { icon: Envelope, label: "Re-verify" },
      { icon: ArrowRight, label: "Update Records" },
    ],
  },
];

function PlaybookCard({
  playbook,
  index,
  isDark,
  isActive,
  onActivate,
}: {
  playbook: typeof playbooks[0];
  index: number;
  isDark: boolean;
  isActive: boolean;
  onActivate: () => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const Icon = playbook.icon;

  // Animate through steps when active
  useEffect(() => {
    if (isActive) {
      const timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % (playbook.steps.length + 1));
      }, 800);
      return () => clearInterval(timer);
    } else {
      setCurrentStep(0);
    }
  }, [isActive, playbook.steps.length]);

  const isComplete = currentStep === playbook.steps.length;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onActivate}
      className={`group relative cursor-pointer ${isActive ? "md:col-span-2" : ""}`}
    >
      {/* Card */}
      <motion.div
        layout
        className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 ${
          isActive
            ? isDark
              ? "bg-gradient-to-br from-[#3e8aff]/20 via-[#0a0a0a] to-[#0a0a0a] border-2 border-[#3e8aff]/40"
              : "bg-gradient-to-br from-[#3e8aff]/10 via-white to-white border-2 border-[#3e8aff]/30 shadow-2xl shadow-[#3e8aff]/20"
            : isDark
              ? "bg-white/[0.03] border border-white/[0.08] hover:border-[#3e8aff]/30 hover:bg-white/[0.05]"
              : "bg-white border border-gray-200 hover:border-[#3e8aff]/30 hover:shadow-xl"
        }`}
      >
        {/* Glow effect when active */}
        {isActive && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#3e8aff] to-transparent" />
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-0 right-0 w-40 h-40 bg-[#3e8aff]/20 rounded-full blur-3xl"
            />
          </div>
        )}

        <div className={`p-6 ${isActive ? "md:p-8" : ""}`}>
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <motion.div
              animate={isActive ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 0.5 }}
              className={`relative flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center ${
                isActive
                  ? "bg-[#3e8aff] text-white shadow-lg shadow-[#3e8aff]/40"
                  : isDark
                    ? "bg-[#3e8aff]/10 text-[#3e8aff]"
                    : "bg-[#3e8aff]/10 text-[#3e8aff]"
              }`}
            >
              <Icon width={28} height={28} />
              {isActive && (
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-xl bg-[#3e8aff]"
                />
              )}
            </motion.div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                  {playbook.title}
                </h3>
                {!isActive && (
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    isDark ? "bg-white/10 text-gray-400" : "bg-gray-100 text-gray-500"
                  }`}>
                    Playbook
                  </span>
                )}
              </div>
              <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                {playbook.description}
              </p>
            </div>
            {!isActive && (
              <motion.div
                whileHover={{ x: 4 }}
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  isDark ? "bg-white/5 text-gray-400" : "bg-gray-100 text-gray-500"
                } group-hover:bg-[#3e8aff]/10 group-hover:text-[#3e8aff] transition-colors`}
              >
                <Play width={14} height={14} />
              </motion.div>
            )}
          </div>

          {/* Workflow Steps - Only show expanded when active */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                {/* Progress bar */}
                <div className={`relative h-1 rounded-full mb-6 overflow-hidden ${
                  isDark ? "bg-white/10" : "bg-gray-200"
                }`}>
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#3e8aff] to-[#60a5fa] rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(currentStep / playbook.steps.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Steps */}
                <div className="grid grid-cols-4 gap-3">
                  {playbook.steps.map((step, i) => {
                    const StepIcon = step.icon;
                    const isStepActive = currentStep === i;
                    const isStepComplete = currentStep > i || isComplete;

                    return (
                      <motion.div
                        key={step.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`relative p-4 rounded-xl text-center transition-all ${
                          isStepActive
                            ? isDark
                              ? "bg-[#3e8aff]/20 border border-[#3e8aff]/40"
                              : "bg-[#3e8aff]/10 border border-[#3e8aff]/30"
                            : isStepComplete
                              ? isDark
                                ? "bg-[#3e8aff]/10 border border-[#3e8aff]/20"
                                : "bg-[#3e8aff]/5 border border-[#3e8aff]/10"
                              : isDark
                                ? "bg-white/5 border border-white/10"
                                : "bg-gray-50 border border-gray-100"
                        }`}
                      >
                        {/* Step number */}
                        <div className={`absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          isStepComplete
                            ? "bg-[#3e8aff] text-white"
                            : isDark
                              ? "bg-white/10 text-gray-400"
                              : "bg-gray-200 text-gray-500"
                        }`}>
                          {isStepComplete ? <CheckCircle width={14} height={14} /> : i + 1}
                        </div>

                        <motion.div
                          animate={isStepActive ? { scale: [1, 1.1, 1] } : {}}
                          transition={{ duration: 0.3 }}
                          className={`w-10 h-10 mx-auto mb-2 rounded-lg flex items-center justify-center ${
                            isStepActive || isStepComplete
                              ? "bg-[#3e8aff] text-white"
                              : isDark
                                ? "bg-white/10 text-gray-400"
                                : "bg-gray-200 text-gray-500"
                          }`}
                        >
                          <StepIcon width={20} height={20} />
                        </motion.div>
                        <span className={`text-xs font-medium ${
                          isStepActive || isStepComplete
                            ? "text-[#3e8aff]"
                            : isDark
                              ? "text-gray-400"
                              : "text-gray-600"
                        }`}>
                          {step.label}
                        </span>

                        {/* Connecting line */}
                        {i < playbook.steps.length - 1 && (
                          <div className={`absolute top-1/2 -right-3 w-6 h-0.5 ${
                            isStepComplete
                              ? "bg-[#3e8aff]"
                              : isDark
                                ? "bg-white/10"
                                : "bg-gray-200"
                          }`}>
                            <CaretRight
                              width={10} height={10}
                             
                              className={`absolute -right-1 top-1/2 -translate-y-1/2 ${
                                isStepComplete ? "text-[#3e8aff]" : isDark ? "text-white/20" : "text-gray-300"
                              }`}
                            />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Result Badge */}
          <div className={`flex items-center justify-between p-4 rounded-xl ${
            isActive
              ? isComplete
                ? "bg-[#3e8aff]/20 border border-[#3e8aff]/30"
                : isDark
                  ? "bg-white/5 border border-white/10"
                  : "bg-[#3e8aff]/5 border border-[#3e8aff]/10"
              : isDark
                ? "bg-white/[0.02] border border-white/5"
                : "bg-gray-50 border border-gray-100"
          }`}>
            <div className="flex items-center gap-3">
              <motion.div
                animate={isComplete ? { scale: [1, 1.3, 1] } : {}}
                transition={{ duration: 0.4 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isComplete || isActive
                    ? "bg-[#3e8aff] text-white"
                    : isDark
                      ? "bg-[#3e8aff]/10 text-[#3e8aff]"
                      : "bg-[#3e8aff]/10 text-[#3e8aff]"
                }`}
              >
                <CheckCircle width={18} height={18} />
              </motion.div>
              <div>
                <span className={`text-xs uppercase tracking-wider ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}>
                  Result
                </span>
                <p className={`text-sm font-semibold ${
                  isComplete ? "text-[#3e8aff]" : isDark ? "text-white" : "text-gray-900"
                }`}>
                  {playbook.result}
                </p>
              </div>
            </div>
            {isActive && (
              <Link
                href="https://portal.cleanlist.ai/auth/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-[#3e8aff] hover:underline"
              >
                Use this playbook
                <ArrowRight width={14} height={14} />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PlaybooksSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activePlaybook, setActivePlaybook] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="playbooks"
      className={`py-20 md:py-32 relative overflow-hidden ${isDark ? "bg-[#030303]" : "bg-[#fafbfc]"}`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3e8aff]/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#60a5fa]/15 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 mb-6"
          >
            <Lightning width={18} height={18} className="text-[#3e8aff]" />
            <span className="text-sm font-semibold text-[#3e8aff]">Pre-Built Playbooks</span>
          </motion.div>

          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
            Playbooks for every
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] via-[#60a5fa] to-[#3e8aff]">
              GTM motion
            </span>
          </h2>

          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Stop building workflows from scratch. Click any playbook to see it in action.
          </p>
        </motion.div>

        {/* Playbooks Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {playbooks.map((playbook, index) => (
            <PlaybookCard
              key={playbook.id}
              playbook={playbook}
              index={index}
              isDark={isDark}
              isActive={activePlaybook === playbook.id}
              onActivate={() => setActivePlaybook(activePlaybook === playbook.id ? null : playbook.id)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className={`inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl ${
            isDark
              ? "bg-white/[0.03] border border-white/[0.08]"
              : "bg-white border border-gray-200 shadow-lg"
          }`}>
            <div className="text-left">
              <p className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                Need a custom playbook?
              </p>
              <p className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                We can build it for you.
              </p>
            </div>
            <Link
              href="https://calendly.com/cleanlist/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3e8aff] text-white font-semibold rounded-xl hover:bg-[#2563eb] transition-colors"
            >
              Speak with us
              <ArrowRight width={18} height={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
