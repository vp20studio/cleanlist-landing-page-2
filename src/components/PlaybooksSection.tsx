"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Zap,
  Target,
  Calendar,
  RefreshCw,
  Users,
  Mail,
  Phone,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const playbooks = [
  {
    id: "outbound",
    title: "Outbound Sales Playbook",
    description: "Extract, enrich, score, and sync to your CRM automatically.",
    result: "2x qualified meetings per BDR",
    resultColor: "text-green-500",
    icon: <TrendingUp className="w-6 h-6" />,
    iconBg: "bg-green-500/10",
    iconColor: "text-green-500",
    steps: [
      { icon: <Users className="w-4 h-4" />, label: "Extract from LinkedIn" },
      { icon: <Zap className="w-4 h-4" />, label: "Waterfall Enrich" },
      { icon: <Target className="w-4 h-4" />, label: "ICP Score" },
      { icon: <ArrowRight className="w-4 h-4" />, label: "Sync to CRM" },
    ],
  },
  {
    id: "abm",
    title: "ABM Campaign Playbook",
    description: "Build hyper-targeted account lists with verified decision makers.",
    result: "50% higher reply rates",
    resultColor: "text-blue-500",
    icon: <Target className="w-6 h-6" />,
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    steps: [
      { icon: <Target className="w-4 h-4" />, label: "Target Accounts" },
      { icon: <Users className="w-4 h-4" />, label: "Find Contacts" },
      { icon: <CheckCircle className="w-4 h-4" />, label: "Verify & Score" },
      { icon: <Mail className="w-4 h-4" />, label: "Launch Campaign" },
    ],
  },
  {
    id: "event",
    title: "Event Follow-up Playbook",
    description: "Convert event leads while they're still warm.",
    result: "Convert leads in 24 hours",
    resultColor: "text-purple-500",
    icon: <Calendar className="w-6 h-6" />,
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
    steps: [
      { icon: <Users className="w-4 h-4" />, label: "Upload Attendees" },
      { icon: <Mail className="w-4 h-4" />, label: "Verify Emails" },
      { icon: <Phone className="w-4 h-4" />, label: "Find Phones" },
      { icon: <Zap className="w-4 h-4" />, label: "Auto-Sequence" },
    ],
  },
  {
    id: "cleanup",
    title: "CRM Cleanup Playbook",
    description: "Eliminate data decay and keep your CRM fresh.",
    result: "Eliminate data decay weekly",
    resultColor: "text-orange-500",
    icon: <RefreshCw className="w-6 h-6" />,
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500",
    steps: [
      { icon: <RefreshCw className="w-4 h-4" />, label: "Audit CRM" },
      { icon: <CheckCircle className="w-4 h-4" />, label: "Remove Dupes" },
      { icon: <Mail className="w-4 h-4" />, label: "Re-verify" },
      { icon: <ArrowRight className="w-4 h-4" />, label: "Update Records" },
    ],
  },
];

// Animated playbook card component
function PlaybookCard({
  playbook,
  index,
  isDark
}: {
  playbook: typeof playbooks[0];
  index: number;
  isDark: boolean;
}) {
  const [hoveredCard, setHoveredCard] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  // Animate steps on hover
  useEffect(() => {
    if (hoveredCard) {
      const timer = setInterval(() => {
        setActiveStep(prev => {
          if (prev >= playbook.steps.length - 1) {
            return 0;
          }
          return prev + 1;
        });
      }, 600);
      return () => clearInterval(timer);
    } else {
      setActiveStep(-1);
    }
  }, [hoveredCard, playbook.steps.length]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHoveredCard(true)}
      onMouseLeave={() => setHoveredCard(false)}
      className={`group p-6 rounded-xl border transition-all duration-300 ${
        hoveredCard ? "border-[#3e8aff]/40 shadow-lg shadow-[#3e8aff]/5" : ""
      } ${
        isDark
          ? "bg-[#0a0a0a] border-white/[0.08]"
          : "bg-white border-black/[0.08]"
      }`}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <motion.div
          animate={hoveredCard ? { scale: 1.05 } : { scale: 1 }}
          className={`w-12 h-12 rounded-xl ${playbook.iconBg} ${playbook.iconColor} flex items-center justify-center`}
        >
          {playbook.icon}
        </motion.div>
        <div className="flex-1">
          <h3 className={`text-lg font-semibold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
            {playbook.title}
          </h3>
          <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            {playbook.description}
          </p>
        </div>
      </div>

      {/* Animated Workflow Steps */}
      <div className="relative flex items-center gap-1 mb-4 overflow-x-auto pb-2">
        {playbook.steps.map((step, i) => {
          const isActive = activeStep === i;
          const isCompleted = activeStep > i;

          return (
            <div key={step.label} className="flex items-center">
              <motion.div
                initial={{ opacity: 0.8, scale: 1 }}
                animate={{
                  opacity: isActive || isCompleted ? 1 : 0.6,
                  scale: isActive ? 1.05 : 1,
                  borderColor: isActive ? "#3e8aff" : "transparent",
                }}
                transition={{ duration: 0.2 }}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap border transition-colors ${
                  isActive
                    ? isDark
                      ? "bg-[#3e8aff]/10 border-[#3e8aff]/30"
                      : "bg-[#3e8aff]/10 border-[#3e8aff]/30"
                    : isCompleted
                      ? isDark
                        ? "bg-green-500/10"
                        : "bg-green-50"
                      : isDark
                        ? "bg-white/[0.03] border-transparent"
                        : "bg-gray-50 border-transparent"
                }`}
              >
                <motion.span
                  animate={{
                    color: isActive
                      ? "#3e8aff"
                      : isCompleted
                        ? "#22c55e"
                        : isDark
                          ? "#9ca3af"
                          : "#6b7280",
                  }}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    step.icon
                  )}
                </motion.span>
                <span className={`text-xs ${
                  isActive
                    ? "text-[#3e8aff] font-medium"
                    : isCompleted
                      ? "text-green-500"
                      : isDark
                        ? "text-gray-300"
                        : "text-gray-700"
                }`}>
                  {step.label}
                </span>
              </motion.div>
              {i < playbook.steps.length - 1 && (
                <motion.div
                  className="mx-1 flex-shrink-0"
                  animate={{
                    width: hoveredCard ? 20 : 16,
                    opacity: isCompleted ? 1 : 0.5,
                  }}
                >
                  <motion.div
                    className={`h-0.5 rounded-full ${
                      isCompleted
                        ? "bg-gradient-to-r from-green-500 to-[#3e8aff]"
                        : isDark
                          ? "bg-gray-700"
                          : "bg-gray-200"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Result */}
      <div className={`flex items-center justify-between p-3 rounded-lg ${
        isDark ? "bg-white/[0.02]" : "bg-gray-50"
      }`}>
        <div className="flex items-center gap-2">
          <motion.div
            animate={hoveredCard ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.4 }}
          >
            <CheckCircle className={`w-5 h-5 ${playbook.resultColor}`} />
          </motion.div>
          <span className={`text-sm font-medium ${playbook.resultColor}`}>
            {playbook.result}
          </span>
        </div>
        <Link
          href="/product/playbook-builder"
          className="text-sm text-[#3e8aff] hover:underline opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
        >
          Learn more <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function PlaybooksSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="playbooks" className={`py-16 md:py-24 ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
            <Zap className="w-4 h-4" />
            Pre-Built Playbooks
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
            Playbooks for every{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
              GTM motion
            </span>
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Stop building workflows from scratch. Use battle-tested playbooks that teams rely on daily.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {playbooks.map((playbook, index) => (
            <PlaybookCard
              key={playbook.id}
              playbook={playbook}
              index={index}
              isDark={isDark}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10 md:mt-12"
        >
          <p className={`text-sm mb-4 ${isDark ? "text-gray-500" : "text-gray-600"}`}>
            Need a custom playbook? We can build it for you.
          </p>
          <Link
            href="/product/playbook-builder"
            className="inline-flex items-center gap-2 text-[#3e8aff] hover:underline text-sm font-medium"
          >
            Browse all playbooks <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
