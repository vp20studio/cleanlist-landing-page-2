"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { ArrowRight, Calendar, Sparkle } from "@phosphor-icons/react";

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

// Animated counter component
function AnimatedCounter({ value, suffix = "", inView }: { value: number; suffix?: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value, inView]);

  return <>{count}{suffix}</>;
}

export default function FinalCTA() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${isDark ? "bg-[#030303]" : "bg-[#fafbfc]"}`} />

      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-6 z-10">
        {/* Premium CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden"
        >
          {/* Card Background with Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background: isDark
                ? "linear-gradient(135deg, #0f172a 0%, #1e1e2e 50%, #0c1222 100%)"
                : "linear-gradient(135deg, #0f172a 0%, #1a1f36 50%, #0c1222 100%)",
            }}
          />

          {/* Subtle gradient accent */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              background: "radial-gradient(ellipse 80% 50% at 50% 120%, rgba(62, 138, 255, 0.15), transparent)",
            }}
          />

          {/* Top border glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#3e8aff]/40 to-transparent" />

          {/* Content */}
          <div className="relative px-8 md:px-16 py-16 md:py-20 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 mb-8"
            >
              <Sparkle weight="fill" className="w-4 h-4 text-[#3e8aff]" />
              <span className="text-sm font-medium text-[#3e8aff]">
                Start free today
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3e8aff] animate-pulse" />
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight tracking-tight"
            >
              Stop losing deals to{" "}
              <span className="relative inline-block">
                <span className="text-[#3e8aff]">bad data</span>
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#3e8aff] rounded-full" />
              </span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-gray-400 text-lg md:text-xl mb-10 max-w-xl mx-auto"
            >
              Get 30 free credits. No credit card required.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {/* Primary CTA */}
              <Link
                href="https://portal.cleanlist.ai/auth/register"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#3e8aff] hover:bg-[#5298ff] text-white font-semibold rounded-xl text-base transition-all duration-200 shadow-lg shadow-[#3e8aff]/25 hover:shadow-[#3e8aff]/40 hover:-translate-y-0.5"
              >
                <span>Get Started Free</span>
                <ArrowRight className="group-hover:translate-x-0.5 transition-transform duration-200" size={20} weight="bold" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="https://calendly.com/cleanlist/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/[0.08] hover:bg-white/[0.12] text-white font-semibold rounded-xl text-base border border-white/[0.12] hover:border-white/[0.2] transition-all duration-200 hover:-translate-y-0.5"
              >
                <Calendar weight="fill" size={20} className="text-[#3e8aff]" />
                <span>Book a Demo</span>
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-14 pt-10 border-t border-white/[0.08]"
            >
              <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
                {[
                  { value: 98, suffix: "%", label: "Email accuracy" },
                  { value: 85, suffix: "%", label: "Phone retrieval" },
                  { value: 15, suffix: "+", label: "Data providers" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#3e8aff]">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                    </div>
                    <div className="text-sm text-gray-500 mt-1.5 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Integrates with your stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className={`text-xs uppercase tracking-[0.2em] font-semibold mb-8 ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}>
            Integrates with your stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {integrations.map((integration, i) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1.1 + i * 0.05 }}
                whileHover={{ scale: 1.15, y: -4, rotate: [-1, 1, 0] }}
                className={`relative p-3.5 rounded-xl transition-all duration-300 cursor-pointer group ${
                  isDark
                    ? "bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] hover:border-[#3e8aff]/40"
                    : "bg-white hover:bg-white border border-gray-100 hover:border-[#3e8aff]/40 shadow-sm hover:shadow-xl hover:shadow-[#3e8aff]/10"
                }`}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#3e8aff]/0 to-[#60a5fa]/0 group-hover:from-[#3e8aff]/10 group-hover:to-[#60a5fa]/5 transition-all duration-300" />
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  width={32}
                  height={32}
                  className="relative w-8 h-8 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
