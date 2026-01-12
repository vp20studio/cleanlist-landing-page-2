"use client";

import { motion } from "framer-motion";
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
            <motion.div
              key={playbook.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group p-6 rounded-xl border transition-all hover:border-[#3e8aff]/30 ${
                isDark
                  ? "bg-[#0a0a0a] border-white/[0.08]"
                  : "bg-white border-black/[0.08]"
              }`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${playbook.iconBg} ${playbook.iconColor} flex items-center justify-center`}>
                  {playbook.icon}
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-semibold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {playbook.title}
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {playbook.description}
                  </p>
                </div>
              </div>

              {/* Workflow Steps */}
              <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-2">
                {playbook.steps.map((step, i) => (
                  <div key={step.label} className="flex items-center">
                    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg whitespace-nowrap ${
                      isDark ? "bg-white/[0.03]" : "bg-gray-50"
                    }`}>
                      <span className={isDark ? "text-gray-400" : "text-gray-500"}>{step.icon}</span>
                      <span className={`text-xs ${isDark ? "text-gray-300" : "text-gray-700"}`}>{step.label}</span>
                    </div>
                    {i < playbook.steps.length - 1 && (
                      <ArrowRight className={`w-4 h-4 mx-1 flex-shrink-0 ${isDark ? "text-gray-600" : "text-gray-300"}`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Result */}
              <div className={`flex items-center justify-between p-3 rounded-lg ${
                isDark ? "bg-white/[0.02]" : "bg-gray-50"
              }`}>
                <div className="flex items-center gap-2">
                  <CheckCircle className={`w-5 h-5 ${playbook.resultColor}`} />
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
