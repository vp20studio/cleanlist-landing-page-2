"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useTheme } from "@/context/ThemeContext";

interface Step {
  number: string;
  title: string;
  description: string;
  icon?: ReactNode;
  details?: string[];
  visual?: ReactNode;
}

interface VerticalStepperProps {
  steps: Step[];
  className?: string;
}

export default function VerticalStepper({ steps, className = "" }: VerticalStepperProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`relative ${className}`}>
      {/* Vertical Line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#3e8aff] via-[#3e8aff]/50 to-transparent" />

      <div className="space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative pl-16"
          >
            {/* Step Number Circle */}
            <div className={`absolute left-0 top-0 w-12 h-12 rounded-full border-2 border-[#3e8aff] flex items-center justify-center z-10 ${
              isDark ? "bg-[#0a0a0a]" : "bg-white shadow-lg shadow-[#3e8aff]/20"
            }`}>
              {step.icon ? (
                <div className="text-[#3e8aff]">{step.icon}</div>
              ) : (
                <span className="text-sm font-bold text-[#3e8aff]">{step.number}</span>
              )}
            </div>

            {/* Content Card */}
            <div className={`rounded-xl p-6 hover:border-[#3e8aff]/30 transition-colors ${
              isDark
                ? "bg-[#0a0a0a] border border-white/[0.08]"
                : "bg-white border border-[#3e8aff]/20 shadow-lg shadow-[#3e8aff]/5"
            }`}>
              <h3 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>{step.title}</h3>
              <p className={`mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{step.description}</p>

              {step.details && step.details.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {step.details.map((detail, i) => (
                    <li key={i} className={`flex items-start gap-2 text-sm ${isDark ? "text-gray-500" : "text-gray-600"}`}>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3e8aff] mt-1.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              {step.visual && (
                <div className={`mt-4 rounded-lg overflow-hidden border ${isDark ? "border-white/[0.05]" : "border-gray-100"}`}>
                  {step.visual}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
