"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { ArrowRight, Calendar } from "@phosphor-icons/react";

// Integration logos
const integrations = [
  { name: "HubSpot", logo: "/images/integrations/hubspot.png" },
  { name: "Pipedrive", logo: "/images/integrations/pipedrive.png" },
  { name: "Outreach", logo: "/images/integrations/outreach.png" },
  { name: "Affinity", logo: "/images/integrations/affinity.svg" },
  { name: "Salesloft", logo: "/images/integrations/salesloft.svg" },
  { name: "Close", logo: "/images/integrations/close.png" },
  { name: "Freshsales", logo: "/images/integrations/freshsales.png" },
  { name: "ActiveCampaign", logo: "/images/integrations/activecampaign.webp" },
];

export default function FinalCTA() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className={`py-24 md:py-32 relative ${isDark ? "bg-[#030303]" : "bg-[#f8fafc]"}`}>
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Simple CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Headline */}
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
            Ready to clean your data?
          </h2>

          {/* Subheadline */}
          <p className={`text-lg md:text-xl mb-10 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Get 30 free credits. No credit card required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA */}
            <Link
              href="https://portal.cleanlist.ai/auth/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#3e8aff] hover:bg-[#2d7af0] text-white font-semibold rounded-xl text-base transition-colors"
            >
              Get Started Free
              <ArrowRight size={20} weight="bold" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="https://calendly.com/cleanlist/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-8 py-4 font-semibold rounded-xl text-base transition-colors border ${
                isDark
                  ? "bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-white/20"
                  : "bg-white hover:bg-gray-50 text-gray-900 border-gray-200 hover:border-gray-300"
              }`}
            >
              <Calendar size={20} weight="fill" className="text-[#3e8aff]" />
              Book a Demo
            </Link>
          </div>
        </motion.div>

        {/* Integrates with your stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 md:mt-24 text-center"
        >
          <p className={`text-xs uppercase tracking-[0.2em] font-medium mb-8 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
            Integrates with your stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {integrations.map((integration) => (
              <div
                key={integration.name}
                className={`p-3 rounded-xl transition-all ${
                  isDark
                    ? "bg-white/[0.04] border border-white/[0.06]"
                    : "bg-white border border-gray-100 shadow-sm"
                }`}
              >
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
