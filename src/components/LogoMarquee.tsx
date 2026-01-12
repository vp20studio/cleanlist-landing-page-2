"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const customerLogos = [
  "Float", "Proposify", "Reply.io", "EffyDesk", "Growbots", "Vidyard", "Drift", "Gong"
];

const integrationLogos = [
  "HubSpot", "Salesforce", "Outreach", "Salesloft", "Apollo", "LinkedIn", "Slack", "Zapier"
];

export default function LogoMarquee() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="w-full overflow-hidden py-8 relative">
      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={`text-center text-sm mb-6 ${isDark ? "text-gray-500" : "text-gray-400"}`}
      >
        Trusted by innovative revenue teams
      </motion.p>

      {/* Row 1: Customer Logos - scrolls left */}
      <div className="relative mb-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex animate-marquee"
          style={{
            animation: "marquee 30s linear infinite",
          }}
        >
          {[...customerLogos, ...customerLogos].map((logo, index) => (
            <motion.div
              key={`customer-${index}`}
              className="flex-shrink-0 mx-8 group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  whileHover={{ y: -3 }}
                  className={`px-6 py-3 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                    isDark
                      ? "bg-white/[0.03] border-white/[0.08] hover:border-[#3e8aff]/30 hover:bg-white/[0.05]"
                      : "bg-black/[0.02] border-black/[0.08] hover:border-[#3e8aff]/30 hover:bg-black/[0.03]"
                  }`}
                >
                  {/* Shimmer effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3e8aff]/5 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                  />
                  <span className={`relative font-semibold text-lg transition-colors ${
                    isDark
                      ? "text-gray-500 group-hover:text-white"
                      : "text-gray-400 group-hover:text-gray-900"
                  }`}>
                    {logo}
                  </span>
                </motion.div>
                {index % 4 === 0 && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xs text-[#3e8aff]/60 font-medium"
                  >
                    Case study
                  </motion.span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Integration Logos - scrolls right */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex"
          style={{
            animation: "marquee-reverse 30s linear infinite",
          }}
        >
          {[...integrationLogos, ...integrationLogos].map((logo, index) => (
            <motion.div
              key={`integration-${index}`}
              className="flex-shrink-0 mx-8 group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                whileHover={{ y: -3 }}
                className={`px-6 py-3 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                  isDark
                    ? "bg-[#3e8aff]/5 border-[#3e8aff]/20 hover:border-[#3e8aff]/40 hover:bg-[#3e8aff]/10"
                    : "bg-[#3e8aff]/5 border-[#3e8aff]/20 hover:border-[#3e8aff]/40 hover:bg-[#3e8aff]/10"
                }`}
              >
                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3e8aff]/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
                />
                <span className={`relative font-medium text-base transition-colors ${
                  isDark
                    ? "text-gray-500 group-hover:text-[#3e8aff]"
                    : "text-gray-400 group-hover:text-[#3e8aff]"
                }`}>
                  {logo}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gradient fade edges */}
      <div className={`pointer-events-none absolute inset-y-0 left-0 w-32 z-10 ${
        isDark
          ? "bg-gradient-to-r from-[#030303] to-transparent"
          : "bg-gradient-to-r from-white to-transparent"
      }`} />
      <div className={`pointer-events-none absolute inset-y-0 right-0 w-32 z-10 ${
        isDark
          ? "bg-gradient-to-l from-[#030303] to-transparent"
          : "bg-gradient-to-l from-white to-transparent"
      }`} />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
