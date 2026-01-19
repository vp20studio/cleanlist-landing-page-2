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
    <section ref={ref} className="py-24 md:py-40 relative overflow-hidden">
      {/* Background */}
      <div className={`absolute inset-0 ${isDark ? "bg-[#030303]" : "bg-[#fafbfc]"}`} />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[600px] md:h-[900px] rounded-full blur-[150px] bg-[#3e8aff]/25"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, 100, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[120px] bg-[#60a5fa]/20"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          y: [0, -80, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full blur-[100px] bg-[#3e8aff]/15"
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${i % 2 === 0 ? "bg-[#3e8aff]" : "bg-[#60a5fa]"}`}
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${5 + i * 4.5}%`,
            top: `${15 + (i % 6) * 12}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative max-w-5xl mx-auto px-4 md:px-6 z-10">
        {/* Premium Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`relative rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 lg:p-16 overflow-hidden ${
            isDark
              ? "bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-white/[0.02] border border-white/[0.12]"
              : "bg-white/90 border border-gray-200/60 shadow-[0_8px_60px_-12px_rgba(62,138,255,0.25)]"
          } backdrop-blur-2xl`}
        >
          {/* Premium inner effects */}
          <div className="absolute inset-0 rounded-3xl md:rounded-[2.5rem] overflow-hidden pointer-events-none">
            {/* Top highlight line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#3e8aff]/60 to-transparent" />
            {/* Subtle gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-b ${isDark ? "from-[#3e8aff]/[0.08] via-transparent to-transparent" : "from-[#3e8aff]/[0.04] via-transparent to-transparent"}`} />
            {/* Side glows */}
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#3e8aff]/[0.05] to-transparent" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#3e8aff]/[0.05] to-transparent" />
          </div>

          {/* Animated corner accents */}
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-[#3e8aff]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#60a5fa]/20 rounded-full blur-3xl"
          />

          <div className="relative text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#3e8aff]/15 to-[#60a5fa]/15 border border-[#3e8aff]/25 mb-8 md:mb-10"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkle weight="fill" className="w-4 h-4 text-[#3e8aff]" />
              </motion.div>
              <span className="text-sm font-semibold text-[#3e8aff]">
                Start free today
              </span>
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-[#3e8aff]"
              />
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-[1.1] tracking-tight ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Stop losing deals to
              <br />
              <span className="relative inline-block mt-2 md:mt-3">
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] via-[#60a5fa] to-[#3e8aff] bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% center", "200% center"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                  bad data
                </motion.span>
                <motion.div
                  className="absolute -bottom-2 md:-bottom-3 left-0 right-0 h-1 md:h-1.5 rounded-full overflow-hidden"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <motion.div
                    className="h-full w-full bg-gradient-to-r from-[#3e8aff] via-[#60a5fa] to-[#3e8aff] bg-[length:200%_auto]"
                    animate={{ backgroundPosition: ["0% center", "200% center"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`text-lg md:text-xl lg:text-2xl mb-10 md:mb-12 max-w-2xl mx-auto font-medium ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Get 30 free credits. No credit card required.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5"
            >
              {/* Primary CTA */}
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-1.5 bg-gradient-to-r from-[#3e8aff] via-[#60a5fa] to-[#3e8aff] rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                  animate={{ backgroundPosition: ["0% center", "200% center"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% auto" }}
                />
                <Link
                  href="https://portal.cleanlist.ai/auth/register"
                  className="relative inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#3e8aff] to-[#2563eb] text-white font-bold rounded-xl text-lg md:text-xl overflow-hidden shadow-lg shadow-[#3e8aff]/30"
                >
                  {/* Shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                    animate={{ x: ["-200%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <span className="relative">Get Started Free</span>
                  <ArrowRight className="relative group-hover:translate-x-1 transition-transform duration-200" size={24} weight="bold" />
                </Link>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <Link
                  href="https://calendly.com/cleanlist/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-lg md:text-xl border-2 transition-all duration-300 overflow-hidden ${
                    isDark
                      ? "border-white/20 text-white hover:border-[#3e8aff]/60 hover:bg-[#3e8aff]/10"
                      : "border-gray-300 text-gray-900 hover:border-[#3e8aff]/60 hover:bg-[#3e8aff]/5"
                  }`}
                >
                  {/* Hover gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#3e8aff]/0 via-[#3e8aff]/5 to-[#3e8aff]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Calendar weight="fill" size={22} className="relative text-[#3e8aff]" />
                  <span className="relative">Book a Demo</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 md:mt-16 pt-10 md:pt-12 border-t border-[#3e8aff]/10"
            >
              <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
                {[
                  { value: 98, suffix: "%", label: "Email accuracy" },
                  { value: 85, suffix: "%", label: "Phone retrieval" },
                  { value: 15, suffix: "+", label: "Data providers" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                    className="text-center group"
                  >
                    <motion.div
                      className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-[#3e8aff] to-[#60a5fa] bg-clip-text text-transparent"
                      whileHover={{ scale: 1.05 }}
                    >
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                    </motion.div>
                    <div className={`text-sm md:text-base font-medium mt-2 ${isDark ? "text-gray-500" : "text-gray-500"}`}>
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
