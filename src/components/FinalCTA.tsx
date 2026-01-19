"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { GlowIcon } from "@/components/ui";
import {
  ArrowRight,
  Sparkle,
  Lightning,
  Shield,
  Clock,
  Buildings,
  CheckCircle,
} from "@phosphor-icons/react";

const benefits = [
  { icon: <Lightning weight="fill" />, text: "30 credits free", color: "blue" as const },
  { icon: <Shield weight="fill" />, text: "No card required", color: "green" as const },
  { icon: <Clock weight="fill" />, text: "Setup in 5 minutes", color: "blue" as const },
];

// Company logos for social proof
const trustedCompanies = [
  { name: "HubSpot", logo: "/images/integrations/hubspot.png" },
  { name: "Pipedrive", logo: "/images/integrations/pipedrive.png" },
  { name: "Outreach", logo: "/images/integrations/outreach.png" },
  { name: "Apollo", logo: "/images/integrations/apollo.png" },
  { name: "Salesloft", logo: "/images/integrations/salesloft.svg" },
];

// Team avatars for social proof
const teamAvatars = [
  { src: "https://randomuser.me/api/portraits/women/44.jpg", name: "Sarah" },
  { src: "https://randomuser.me/api/portraits/men/32.jpg", name: "Michael" },
  { src: "https://randomuser.me/api/portraits/women/68.jpg", name: "Emily" },
  { src: "https://randomuser.me/api/portraits/men/75.jpg", name: "David" },
  { src: "https://randomuser.me/api/portraits/women/89.jpg", name: "Lisa" },
];

export default function FinalCTA() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background - Theme aware */}
      <div className={`absolute inset-0 ${isDark ? "bg-[#030303]" : "bg-gradient-to-b from-[#f8fafc] to-white"}`} />

      {/* Primary Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[1000px] h-[700px] md:h-[1000px] rounded-full blur-[180px] ${
          isDark ? "bg-[#3e8aff]/20" : "bg-[#3e8aff]/15"
        }`}
      />

      {/* Secondary accent glow - green */}
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, 80, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className={`absolute top-1/3 right-1/4 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full blur-[120px] ${
          isDark ? "bg-green-500/10" : "bg-green-400/12"
        }`}
      />

      {/* Tertiary accent glow - cyan */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className={`absolute bottom-1/4 left-1/4 w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-full blur-[100px] ${
          isDark ? "bg-cyan-500/10" : "bg-cyan-400/10"
        }`}
      />

      {/* Floating Particles - More colorful */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            i % 3 === 0
              ? isDark ? "bg-[#3e8aff]/50" : "bg-[#3e8aff]/40"
              : i % 3 === 1
                ? isDark ? "bg-green-400/40" : "bg-green-400/30"
                : isDark ? "bg-cyan-400/40" : "bg-cyan-400/30"
          }`}
          style={{
            width: `${4 + (i % 4) * 2}px`,
            height: `${4 + (i % 4) * 2}px`,
            left: `${3 + i * 4.5}%`,
            top: `${8 + (i % 6) * 14}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 6 + i * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.12,
          }}
        />
      ))}

      {/* Radial Lines with color */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute top-1/2 left-1/2 h-[1px] ${
              isDark
                ? "bg-gradient-to-r from-transparent via-[#3e8aff]/15 to-transparent"
                : "bg-gradient-to-r from-transparent via-[#3e8aff]/12 to-transparent"
            }`}
            style={{
              width: "200%",
              transform: `translate(-50%, -50%) rotate(${i * 22.5}deg)`,
            }}
            animate={{
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 md:px-6 text-center z-10">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 ${
            isDark
              ? "bg-[#3e8aff]/15 border border-[#3e8aff]/25"
              : "bg-[#3e8aff]/10 border border-[#3e8aff]/20"
          }`}
        >
          <GlowIcon icon={<Sparkle weight="fill" />} size="xs" color="blue" variant="glow" animated />
          <span className="text-sm font-medium text-[#3e8aff]">
            No credit card required
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          Your first{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] via-[#60a5fa] to-[#3e8aff]">
              30 credits
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#3e8aff] to-[#60a5fa] rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
          </span>{" "}
          are free
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          No commitment. See why 1,000+ GTM teams trust Cleanlist for verified contact data.
        </motion.p>

        {/* Team Avatars with Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="flex -space-x-3">
            {teamAvatars.map((avatar, i) => (
              <motion.div
                key={avatar.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}
                className={`relative w-10 h-10 rounded-full overflow-hidden border-2 ${
                  isDark ? "border-[#0a0a0a]" : "border-white"
                } shadow-lg`}
              >
                <Image
                  src={avatar.src}
                  alt={avatar.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.7 }}
              className={`relative w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                isDark
                  ? "border-[#0a0a0a] bg-gradient-to-br from-[#3e8aff] to-[#2563eb]"
                  : "border-white bg-gradient-to-br from-[#3e8aff] to-[#2563eb]"
              } shadow-lg`}
            >
              <span className="text-white text-xs font-bold">+995</span>
            </motion.div>
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.svg
                  key={star}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.2, delay: 0.8 + star * 0.05 }}
                  className="w-4 h-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
              <span className={`text-sm font-semibold ml-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                4.9
              </span>
            </div>
            <span className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>
              Rated by 1,000+ teams
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 md:gap-4 mb-10"
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#"
              className="relative inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#3e8aff] to-[#2563eb] text-white font-semibold rounded-xl hover:from-[#2563eb] hover:to-[#1d4ed8] transition-all text-base md:text-lg w-full sm:w-auto justify-center overflow-hidden group shadow-xl shadow-[#3e8aff]/30"
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
              />
              <span className="relative flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} weight="bold" />
              </span>
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="#"
              className={`inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 border font-semibold rounded-xl transition-all text-base md:text-lg w-full sm:w-auto justify-center ${
                isDark
                  ? "border-white/15 text-white hover:bg-white/[0.08] hover:border-white/25"
                  : "border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-gray-400"
              }`}
            >
              <Buildings size={20} weight="fill" />
              Book a Demo
            </Link>
          </motion.div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
              className={`flex items-center gap-2 text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <GlowIcon icon={benefit.icon} size="xs" color={benefit.color} variant="glow" />
              <span className="font-medium">{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Stats Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4 md:gap-6"
        >
          {[
            { value: "85%", label: "Phone retrieval", color: "green" },
            { value: "400M+", label: "B2B contacts", color: "blue" },
            { value: "15+", label: "Data providers", color: "cyan" },
            { value: "98%", label: "Email accuracy", color: "blue" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className={`relative px-5 py-4 rounded-2xl border backdrop-blur-md transition-all cursor-default group ${
                isDark
                  ? "bg-white/[0.04] border-white/[0.08] hover:border-[#3e8aff]/40 hover:bg-white/[0.06]"
                  : "bg-white/80 border-gray-200 hover:border-[#3e8aff]/40 shadow-lg shadow-gray-200/50 hover:shadow-xl"
              }`}
            >
              {/* Glow accent on hover */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity ${
                stat.color === "green"
                  ? "bg-gradient-to-br from-green-500/10 to-transparent"
                  : stat.color === "cyan"
                    ? "bg-gradient-to-br from-cyan-500/10 to-transparent"
                    : "bg-gradient-to-br from-[#3e8aff]/10 to-transparent"
              }`} />
              <div className={`relative text-2xl md:text-3xl font-bold mb-1 ${
                stat.color === "green"
                  ? "text-green-500"
                  : stat.color === "cyan"
                    ? "text-cyan-500"
                    : "text-[#3e8aff]"
              }`}>
                {stat.value}
              </div>
              <div className={`relative text-xs font-medium ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className={`mt-16 pt-10 border-t ${isDark ? "border-white/[0.06]" : "border-gray-200"}`}
        >
          <p className={`text-xs uppercase tracking-widest font-medium mb-6 ${
            isDark ? "text-gray-500" : "text-gray-400"
          }`}>
            Integrates with your stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10">
            {trustedCompanies.map((company, i) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.3 + i * 0.08 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className={`flex items-center gap-2.5 transition-all ${
                  isDark ? "opacity-50 hover:opacity-90" : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                />
                <span className={`text-sm font-medium hidden sm:inline ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                  {company.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animated Success Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-10 inline-flex items-center gap-2"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <CheckCircle weight="fill" className="w-5 h-5 text-green-500" />
          </motion.div>
          <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            SOC 2 Type II Compliant • GDPR Ready
          </span>
        </motion.div>
      </div>
    </section>
  );
}
