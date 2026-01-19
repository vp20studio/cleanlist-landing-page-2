"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Database,
  Envelope,
  Phone,
  Users,
  Lightning,
  Shield,
  Sparkle,
  Check,
  X,
  Minus,
  TrendUp,
  Crosshair,
  Megaphone,
  Scales,
  Code,
  Stack,
  ArrowsClockwise,
  Clock,
  CurrencyDollar,
  Buildings,
  Crown,
  CaretDown,
  Calendar,
} from "@phosphor-icons/react";
import StickySubNav from "@/components/StickySubNav";
import InteractiveDemo from "@/components/InteractiveDemo";
import PlaybooksSection from "@/components/PlaybooksSection";
import SolutionSection from "@/components/SolutionSection";
import LogoMarquee from "@/components/LogoMarquee";
import DataTransformDemo from "@/components/DataTransformDemo";
import FinalCTA from "@/components/FinalCTA";
import { useTheme } from "@/context/ThemeContext";

// Data providers for waterfall enrichment (15+)
const dataProviders = [
  "Clearbit", "Findymail", "Datagma", "ZoomInfo", "Hunter",
  "Dropcontact", "Apollo", "Lusha", "RocketReach", "Seamless.ai",
  "Cognism", "LeadIQ", "Snov.io", "Kaspr", "FullContact", "People Data Labs"
];

// All integrations for the grid (CRMs and outreach platforms)
const allIntegrations = [
  { name: "HubSpot", abbr: "Hu", category: "crm", color: "#3b82f6" },
  { name: "ActiveCampaign", abbr: "Ac", category: "marketing", color: "#8b5cf6" },
  { name: "Affinity", abbr: "Af", category: "crm", color: "#3b82f6" },
  { name: "Close", abbr: "Cl", category: "crm", color: "#3b82f6" },
  { name: "Freshsales CRM", abbr: "Fr", category: "crm", color: "#3b82f6" },
  { name: "Holded", abbr: "Ho", category: "crm", color: "#3b82f6" },
  { name: "Insightly", abbr: "In", category: "crm", color: "#3b82f6" },
  { name: "Marketing360", abbr: "M3", category: "marketing", color: "#8b5cf6" },
  { name: "Outreach.io", abbr: "Ou", category: "sales", color: "#22c55e" },
  { name: "Pipedrive", abbr: "Pi", category: "crm", color: "#3b82f6" },
  { name: "RecruitCRM", abbr: "Rc", category: "crm", color: "#3b82f6" },
  { name: "Salesflare", abbr: "Sf", category: "crm", color: "#3b82f6" },
  { name: "Salesloft", abbr: "Sl", category: "sales", color: "#22c55e" },
];

const integrationCategories = [
  { id: "crm", label: "CRM", color: "#3b82f6" },
  { id: "sales", label: "Sales", color: "#22c55e" },
  { id: "marketing", label: "Marketing", color: "#14b8a6" },
  { id: "prospecting", label: "Prospecting", color: "#f59e0b" },
  { id: "automation", label: "Automation", color: "#ec4899" },
  { id: "cdp", label: "CDP", color: "#8b5cf6" },
];

// Pricing data with monthly and yearly prices (yearly saves ~17%)
const pricingTiers = {
  free: {
    name: "Free",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    period: "/month",
    credits: "30 credits",
    description: "30 emails or 3 phones",
    features: ["API Access", "CSV Export", "Email Support"],
  },
  starter: [
    { tier: "I", monthlyPrice: "$29", yearlyPrice: "$24", credits: "500", email: "500", phone: "50" },
    { tier: "II", monthlyPrice: "$54", yearlyPrice: "$45", credits: "1,000", email: "1,000", phone: "100" },
    { tier: "III", monthlyPrice: "$79", yearlyPrice: "$66", credits: "1,500", email: "1,500", phone: "150" },
  ],
  pro: [
    { tier: "I", monthlyPrice: "$99", yearlyPrice: "$83", credits: "2,000", email: "2,000", phone: "200" },
    { tier: "II", monthlyPrice: "$169", yearlyPrice: "$141", credits: "3,500", email: "3,500", phone: "350" },
    { tier: "III", monthlyPrice: "$229", yearlyPrice: "$191", credits: "5,000", email: "5,000", phone: "500" },
  ],
  enterprise: [
    { tier: "I", monthlyPrice: "$449", yearlyPrice: "$374", credits: "10,000", email: "10,000", phone: "1,000" },
    { tier: "II", monthlyPrice: "$799", yearlyPrice: "$666", credits: "20,000", email: "20,000", phone: "2,000" },
    { tier: "III", monthlyPrice: "$1,899", yearlyPrice: "$1,583", credits: "50,000", email: "50,000", phone: "5,000" },
  ],
};

// Comparison data for "Where Cleanlist sits"
const comparisonFeatures = [
  {
    feature: "Pre-built playbooks",
    workflow: false,
    crm: false,
    signal: false,
    cleanlist: true,
  },
  {
    feature: "Multi-provider enrichment",
    workflow: true,
    crm: "partial",
    signal: false,
    cleanlist: true,
  },
  {
    feature: "Works on any stack",
    workflow: true,
    crm: "partial",
    signal: false,
    cleanlist: true,
  },
  {
    feature: "No GTM engineer required",
    workflow: false,
    crm: true,
    signal: true,
    cleanlist: true,
  },
  {
    feature: "Orchestration + actions",
    workflow: true,
    crm: false,
    signal: "partial",
    cleanlist: true,
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [starterTier, setStarterTier] = useState(0);
  const [proTier, setProTier] = useState(0);
  const [enterpriseTier, setEnterpriseTier] = useState(0);
  const [isYearly, setIsYearly] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const renderSupportIcon = (value: boolean | string) => {
    if (value === true) return <Check className="w-5 h-5 text-green-500" />;
    if (value === false) return <X className="w-5 h-5 text-red-400" />;
    return <Minus className="w-5 h-5 text-gray-400" />;
  };

  return (
    <>
      <StickySubNav />

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-28 pb-8 md:pb-16 overflow-hidden">
        {/* Background base */}
        <div className={`absolute inset-0 ${isDark ? "bg-[#030303]" : "bg-[#fafafa]"}`} />

        {/* Large gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.2, 0.15]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-[#3e8aff]/20 rounded-full blur-[150px]"
          />
          <motion.div
            animate={{
              x: [0, 50, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-[#3e8aff]/10 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              x: [0, -50, 0],
              opacity: [0.08, 0.12, 0.08]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[30%] -right-[10%] w-[500px] h-[500px] bg-[#3e8aff]/10 rounded-full blur-[100px]"
          />
        </div>

        {/* Radial lines emanating from center */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%]"
            style={{
              background: isDark
                ? `conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(62, 138, 255, 0.03) 10deg, transparent 20deg, transparent 40deg, rgba(62, 138, 255, 0.02) 50deg, transparent 60deg, transparent 80deg, rgba(62, 138, 255, 0.03) 90deg, transparent 100deg, transparent 120deg, rgba(62, 138, 255, 0.02) 130deg, transparent 140deg, transparent 160deg, rgba(62, 138, 255, 0.03) 170deg, transparent 180deg, transparent 200deg, rgba(62, 138, 255, 0.02) 210deg, transparent 220deg, transparent 240deg, rgba(62, 138, 255, 0.03) 250deg, transparent 260deg, transparent 280deg, rgba(62, 138, 255, 0.02) 290deg, transparent 300deg, transparent 320deg, rgba(62, 138, 255, 0.03) 330deg, transparent 340deg, transparent 360deg)`
                : `conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(62, 138, 255, 0.05) 10deg, transparent 20deg, transparent 40deg, rgba(62, 138, 255, 0.03) 50deg, transparent 60deg, transparent 80deg, rgba(62, 138, 255, 0.05) 90deg, transparent 100deg, transparent 120deg, rgba(62, 138, 255, 0.03) 130deg, transparent 140deg, transparent 160deg, rgba(62, 138, 255, 0.05) 170deg, transparent 180deg, transparent 200deg, rgba(62, 138, 255, 0.03) 210deg, transparent 220deg, transparent 240deg, rgba(62, 138, 255, 0.05) 250deg, transparent 260deg, transparent 280deg, rgba(62, 138, 255, 0.03) 290deg, transparent 300deg, transparent 320deg, rgba(62, 138, 255, 0.05) 330deg, transparent 340deg, transparent 360deg)`
            }}
          />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating square - left */}
          <motion.div
            animate={{
              y: [0, -40, 0],
              rotate: [0, 90, 0],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] left-[8%] w-32 h-32 border border-[#3e8aff]/20 rounded-2xl hidden lg:block"
          />

          {/* Medium floating square - right */}
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [45, -45, 45],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute top-[25%] right-[10%] w-20 h-20 border border-[#3e8aff]/15 rounded-xl hidden lg:block"
          />

          {/* Small floating square - bottom left */}
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [15, -15, 15]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[35%] left-[15%] w-12 h-12 border-2 border-[#3e8aff]/10 rounded-lg hidden lg:block"
          />

          {/* Floating circles */}
          <motion.div
            animate={{
              y: [0, -50, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[20%] w-24 h-24 rounded-full border border-[#3e8aff]/10 hidden md:block"
          />
          <motion.div
            animate={{
              y: [0, 35, 0],
              x: [0, -15, 0]
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[40%] right-[25%] w-16 h-16 rounded-full border-2 border-[#3e8aff]/15 hidden md:block"
          />
          <motion.div
            animate={{
              y: [0, -20, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-[40%] left-[5%] w-10 h-10 rounded-full bg-[#3e8aff]/5 hidden lg:block"
          />

          {/* Glowing orbs */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[30%] left-[25%] w-3 h-3 rounded-full bg-[#3e8aff] blur-sm hidden md:block"
          />
          <motion.div
            animate={{
              y: [0, 25, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[50%] right-[18%] w-2 h-2 rounded-full bg-[#3e8aff] blur-sm hidden md:block"
          />
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.25, 0.5, 0.25]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute bottom-[45%] left-[20%] w-2.5 h-2.5 rounded-full bg-[#3e8aff] blur-sm hidden md:block"
          />

          {/* Diagonal lines */}
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1],
              scaleX: [0.9, 1, 0.9]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[18%] right-[15%] w-32 h-[1px] bg-gradient-to-r from-transparent via-[#3e8aff]/30 to-transparent rotate-45 hidden lg:block"
          />
          <motion.div
            animate={{
              opacity: [0.15, 0.25, 0.15],
              scaleX: [1, 0.9, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[30%] left-[10%] w-24 h-[1px] bg-gradient-to-r from-transparent via-[#3e8aff]/25 to-transparent -rotate-45 hidden lg:block"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <div className={`inline-flex items-center divide-x rounded-full border text-sm ${
              isDark
                ? "bg-white/[0.02] border-white/[0.08] divide-white/[0.08]"
                : "bg-white border-gray-200 divide-gray-200 shadow-sm"
            }`}>
              <div className="flex items-center gap-2 px-4 py-2">
                <Database className="w-3.5 h-3.5 text-[#3e8aff]" weight="fill" />
                <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                  <span className="font-semibold">400M+</span> Contacts
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2">
                <Envelope className="w-3.5 h-3.5 text-[#3e8aff]" weight="fill" />
                <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                  <span className="font-semibold">98%</span> Email Coverage
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2">
                <Phone className="w-3.5 h-3.5 text-[#3e8aff]" weight="fill" />
                <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                  <span className="font-semibold">85%</span> Phone Find Rate
                </span>
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-6"
          >
            <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                GTM Playbook Engine
              </span>
              <br />
              built on clean data
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <p className={`text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Upload leads, enrich with email and phone, verify deliverability, and add context. Everything ships into your outbound tools and CRM ready to run.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
          >
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-all shadow-lg shadow-[#3e8aff]/25 hover:shadow-xl hover:shadow-[#3e8aff]/30"
            >
              Start building for free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 border font-medium rounded-lg transition-colors ${
                isDark
                  ? "border-white/[0.15] text-white hover:bg-white/[0.05]"
                  : "border-gray-300 text-gray-900 hover:bg-gray-100"
              }`}
            >
              <Calendar className="w-4 h-4" />
              Book a demo
            </Link>
          </motion.div>

          {/* Micro-text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`text-center text-sm mb-12 ${isDark ? "text-gray-500" : "text-gray-400"}`}
          >
            No credit card required • Setup in 2 minutes
          </motion.p>

          {/* Premium Video Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="relative max-w-5xl mx-auto px-4"
          >

            {/* Main Video Container */}
            <div
              className={`relative rounded-2xl overflow-hidden ${
                isDark
                  ? "bg-[#0a0a0a]"
                  : "bg-white"
              }`}
              style={{
                boxShadow: isDark
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 12px 24px -8px rgba(0, 0, 0, 0.6)"
                  : "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 12px 24px -8px rgba(0, 0, 0, 0.08)"
              }}
            >
              <div className={`relative rounded-t-2xl border-x border-t overflow-hidden ${
                isDark
                  ? "border-white/[0.08]"
                  : "border-black/[0.06]"
              }`}>
                {/* Window Chrome */}
                <div className={`flex items-center justify-between px-4 py-3 border-b ${
                  isDark ? "border-white/[0.05] bg-[#0a0a0a]" : "border-black/[0.05] bg-gray-50/50"
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_rgba(255,95,87,0.4)]" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[0_0_6px_rgba(254,188,46,0.4)]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-[0_0_6px_rgba(40,200,64,0.4)]" />
                    </div>
                    <div className="flex items-center gap-2 ml-2">
                      <Phone className="w-3.5 h-3.5 text-[#3e8aff]" weight="fill" />
                      <span className={`text-xs font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                        Find Phone Numbers — Live Demo
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                    />
                    <span className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>Live</span>
                  </div>
                </div>

                {/* Video */}
                <div className="relative">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto block"
                  >
                    <source src="/videos/phone-enrichment.mp4" type="video/mp4" />
                  </video>

                  {/* Subtle vignette */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: isDark
                        ? "radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.2) 100%)"
                        : "radial-gradient(ellipse at center, transparent 70%, rgba(0,0,0,0.05) 100%)"
                    }}
                  />
                </div>
              </div>

              {/* Stats Bar - Connected to video */}
              <div className={`border-x border-b rounded-b-2xl ${
                isDark ? "border-white/[0.08]" : "border-black/[0.06]"
              }`}>
                <div className={`border-t ${isDark ? "border-white/[0.05]" : "border-black/[0.05]"}`}>
                  <div className="relative px-4 py-4 md:py-5">
                    <div className={`flex flex-wrap justify-center items-center gap-6 md:gap-0 md:divide-x ${
                      isDark ? "md:divide-white/[0.08]" : "md:divide-black/[0.06]"
                    }`}>

                      {/* 15+ Providers */}
                      <div className="flex items-center gap-2.5 px-4 md:px-6">
                        <div className="w-9 h-9 rounded-lg bg-[#3e8aff]/10 flex items-center justify-center">
                          <Stack className="w-4 h-4 text-[#3e8aff]" weight="fill" />
                        </div>
                        <div>
                          <div className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>15+ Providers</div>
                        </div>
                      </div>

                      {/* 85% Find Rate */}
                      <div className="flex items-center gap-2.5 px-4 md:px-6">
                        <div className="w-9 h-9 rounded-lg bg-[#3e8aff]/10 flex items-center justify-center">
                          <Phone className="w-4 h-4 text-[#3e8aff]" weight="fill" />
                        </div>
                        <div>
                          <div className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>85% Find Rate</div>
                        </div>
                      </div>

                      {/* 98% Coverage */}
                      <div className="flex items-center gap-2.5 px-4 md:px-6">
                        <div className="w-9 h-9 rounded-lg bg-[#3e8aff]/10 flex items-center justify-center">
                          <Envelope className="w-4 h-4 text-[#3e8aff]" weight="fill" />
                        </div>
                        <div>
                          <div className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>98% Coverage</div>
                        </div>
                      </div>

                      {/* Waterfall Logic */}
                      <div className="flex items-center gap-2.5 px-4 md:px-6">
                        <div className="w-9 h-9 rounded-lg bg-[#3e8aff]/10 flex items-center justify-center">
                          <ArrowsClockwise className="w-4 h-4 text-[#3e8aff]" weight="fill" />
                        </div>
                        <div>
                          <div className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Waterfall Logic</div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col items-center mt-16"
          >
            <span className={`text-xs mb-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <CaretDown className={`w-5 h-5 ${isDark ? "text-gray-500" : "text-gray-400"}`} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Logo Marquee */}
      <LogoMarquee />

      {/* Interactive Product Demo */}
      <InteractiveDemo />

      {/* Solution Section */}
      <SolutionSection />

      {/* Data Transform Section */}
      <DataTransformDemo />

      {/* Playbooks Section */}
      <PlaybooksSection />

      {/* Where Cleanlist Sits - Comparison Section */}
      <section id="compare" className={`py-16 md:py-24 transition-colors ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-6">
              COMPARISON
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              Where Cleanlist{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                sits
              </span>
            </h2>
            <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Cleanlist gives you the playbooks Clay requires you to build and the orchestration
              Apollo doesn&apos;t have.
            </p>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto overflow-x-auto"
          >
            <div className={`rounded-2xl border overflow-hidden min-w-[640px] ${isDark ? "bg-gradient-to-b from-white/[0.02] to-white/[0.05] border-white/[0.08]" : "bg-white/70 border-black/[0.08]"}`}>
              {/* Header */}
              <div className={`grid grid-cols-5 gap-4 p-4 md:p-6 border-b ${isDark ? "border-white/[0.08] bg-white/[0.02]" : "border-black/[0.08] bg-[#F8F9FA]"}`}>
                <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Features</div>
                <div className="text-center">
                  <div className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>Workflow Builders</div>
                  <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>Clay, etc.</div>
                </div>
                <div className="text-center">
                  <div className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>CRM Enrichment</div>
                  <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>Apollo, ZoomInfo</div>
                </div>
                <div className="text-center">
                  <div className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>Signal Platforms</div>
                  <div className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}>6sense, etc.</div>
                </div>
                <div className="text-center">
                  <div className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/30`}>
                    <Crown className="w-3 h-3 text-yellow-500" />
                    <span className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Cleanlist</span>
                  </div>
                </div>
              </div>

              {/* Rows */}
              {comparisonFeatures.map((row, index) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-5 gap-4 p-4 md:p-6 ${
                    index !== comparisonFeatures.length - 1 ? (isDark ? "border-b border-white/[0.05]" : "border-b border-gray-100") : ""
                  }`}
                >
                  <div className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>{row.feature}</div>
                  <div className="flex justify-center">{renderSupportIcon(row.workflow)}</div>
                  <div className="flex justify-center">{renderSupportIcon(row.crm)}</div>
                  <div className="flex justify-center">{renderSupportIcon(row.signal)}</div>
                  <div className="flex justify-center">{renderSupportIcon(row.cleanlist)}</div>
                </div>
              ))}

              {/* Legend */}
              <div className={`flex items-center justify-center gap-4 md:gap-8 p-4 border-t flex-wrap ${isDark ? "bg-white/[0.02] border-white/[0.08]" : "bg-[#F8F9FA] border-black/[0.08]"}`}>
                <div className={`flex items-center gap-2 text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  <Check className="w-4 h-4 text-green-500" />
                  Full support
                </div>
                <div className={`flex items-center gap-2 text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  <Minus className="w-4 h-4 text-gray-400" />
                  Partial support
                </div>
                <div className={`flex items-center gap-2 text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  <X className="w-4 h-4 text-red-400" />
                  Not supported
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations Section - Hub & Spoke Visual */}
      <section id="integrations" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="text-sm font-medium text-[#3e8aff] tracking-wider mb-4">ECOSYSTEM</div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              Lives in your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                existing stack
              </span>
            </h2>
            <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Cleanlist connects natively to 15+ tools you already use. No data silos, no manual exports—just
              seamless, real-time data flow.
            </p>
          </motion.div>

          {/* Hub & Spoke Orbital Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto mb-16"
          >
            {/* Orbital container */}
            <div className="relative h-[500px] md:h-[600px]">
              {/* Connection lines - SVG */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={isDark ? "rgba(62,138,255,0.3)" : "rgba(62,138,255,0.2)"} />
                    <stop offset="100%" stopColor={isDark ? "rgba(62,138,255,0.05)" : "rgba(62,138,255,0.05)"} />
                  </linearGradient>
                </defs>
                {/* Lines from center to each integration */}
                {[
                  { x: "28%", y: "12%" }, // HubSpot
                  { x: "72%", y: "12%" }, // ActiveCampaign
                  { x: "12%", y: "28%" }, // Affinity
                  { x: "88%", y: "28%" }, // Close
                  { x: "5%", y: "50%" },  // Freshsales
                  { x: "95%", y: "50%" }, // Holded
                  { x: "12%", y: "72%" }, // Insightly
                  { x: "88%", y: "72%" }, // Marketing360
                  { x: "28%", y: "88%" }, // Outreach
                  { x: "50%", y: "92%" }, // Pipedrive
                  { x: "72%", y: "88%" }, // RecruitCRM
                  { x: "20%", y: "50%" }, // Salesflare
                  { x: "80%", y: "50%" }, // Salesloft
                ].map((pos, i) => (
                  <line
                    key={i}
                    x1="50%"
                    y1="50%"
                    x2={pos.x}
                    y2={pos.y}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    className="opacity-60"
                  />
                ))}
              </svg>

              {/* Center Hub - Cleanlist */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <div className={`w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-[#3e8aff] to-[#2563eb] flex flex-col items-center justify-center shadow-2xl ${isDark ? "shadow-[#3e8aff]/30" : "shadow-[#3e8aff]/20"}`}>
                  <Check className="w-8 h-8 md:w-10 md:h-10 text-white mb-1" weight="bold" />
                  <span className="text-sm md:text-base font-semibold text-white">Cleanlist</span>
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-[#3e8aff]/30 blur-2xl -z-10" />
              </motion.div>

              {/* Orbiting Integrations */}
              {[
                { name: "HubSpot", abbr: "Hu", color: "#3b82f6", x: "28%", y: "8%", delay: 0.1 },
                { name: "ActiveCampaign", abbr: "Ac", color: "#8b5cf6", x: "72%", y: "8%", delay: 0.15 },
                { name: "Affinity", abbr: "Af", color: "#3b82f6", x: "8%", y: "25%", delay: 0.2 },
                { name: "Close", abbr: "Cl", color: "#3b82f6", x: "92%", y: "25%", delay: 0.25 },
                { name: "Freshsales", abbr: "Fr", color: "#3b82f6", x: "2%", y: "50%", delay: 0.3 },
                { name: "Holded", abbr: "Ho", color: "#3b82f6", x: "98%", y: "50%", delay: 0.35 },
                { name: "Insightly", abbr: "In", color: "#3b82f6", x: "8%", y: "75%", delay: 0.4 },
                { name: "Marketing360", abbr: "M3", color: "#8b5cf6", x: "92%", y: "75%", delay: 0.45 },
                { name: "Outreach.io", abbr: "Ou", color: "#22c55e", x: "22%", y: "90%", delay: 0.5 },
                { name: "Pipedrive", abbr: "Pi", color: "#3b82f6", x: "50%", y: "95%", delay: 0.55 },
                { name: "RecruitCRM", abbr: "Rc", color: "#3b82f6", x: "78%", y: "90%", delay: 0.6 },
                { name: "Salesflare", abbr: "Sf", color: "#3b82f6", x: "18%", y: "50%", delay: 0.65 },
                { name: "Salesloft", abbr: "Sl", color: "#22c55e", x: "82%", y: "50%", delay: 0.7 },
              ].map((integration) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: integration.delay, type: "spring", stiffness: 200 }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20"
                  style={{ left: integration.x, top: integration.y }}
                >
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-xs md:text-sm font-bold border backdrop-blur-sm ${
                      isDark ? "border-white/[0.1] bg-[#0a0a0a]/80" : "border-black/[0.08] bg-white/90 shadow-lg"
                    }`}
                    style={{ color: integration.color }}
                  >
                    <div
                      className="w-full h-full rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${integration.color}15` }}
                    >
                      {integration.abbr}
                    </div>
                  </div>
                  <span className={`text-[10px] md:text-xs mt-1.5 whitespace-nowrap ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {integration.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Category Legend */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center gap-6 mt-4"
            >
              {[
                { label: "CRM", color: "#3b82f6" },
                { label: "Sales Engagement", color: "#22c55e" },
                { label: "Marketing", color: "#8b5cf6" },
              ].map((cat) => (
                <div key={cat.label} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                  <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>{cat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Native Integrations Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-6 md:p-8 border mb-12 ${isDark ? "bg-[rgba(10,10,10,0.6)] border-white/[0.08]" : "bg-white border-gray-200 shadow-sm"}`}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className={`text-xl font-semibold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                  Native Integrations
                </h3>
                <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                  One-click setup. No engineering required.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>Can&apos;t find yours?</span>
                <Link href="/integrations" className="text-sm text-[#3e8aff] hover:underline">
                  Request integration
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {allIntegrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`group flex flex-col p-4 rounded-xl border transition-all cursor-pointer ${
                    isDark
                      ? "bg-[rgba(255,255,255,0.02)] border-white/[0.05] hover:border-[#3e8aff]/30 hover:bg-[#3e8aff]/5"
                      : "bg-gray-50 border-gray-100 hover:border-[#3e8aff]/30 hover:bg-[#3e8aff]/5"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-sm"
                      style={{
                        backgroundColor: `${integration.color}15`,
                        color: integration.color,
                      }}
                    >
                      {integration.abbr}
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${isDark ? "text-gray-400" : "text-gray-500"}`}
                    />
                  </div>
                  <span className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                    {integration.name}
                  </span>
                  <span className={`text-xs mt-0.5 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                    Click to connect
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* API & Webhooks Footer */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className={`p-5 md:p-6 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-4 transition-colors ${isDark ? "bg-[#0a0a0a] border-white/[0.08]" : "bg-white/70 border-black/[0.08]"}`}>
              <div className={`flex items-center gap-3 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                <Lightning className="w-5 h-5 text-[#3e8aff]" />
                <span><span className="text-[#3e8aff] font-medium">REST API</span> and <span className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>Webhooks</span> for custom integrations</span>
              </div>
              <Link href="#" className="inline-flex items-center gap-2 text-sm text-[#3e8aff] hover:underline">
                View API Docs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section with Tier Toggles */}
      <section id="pricing" className={`py-16 md:py-24 transition-colors ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
              <Sparkle className="w-4 h-4" />
              Pricing
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              Simple, credit-based pricing
            </h2>
            <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              1 email = 1 credit. 1 phone = 10 credits. No hidden fees.
            </p>
          </motion.div>

          {/* Monthly/Yearly Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8 md:mb-12"
          >
            <span className={`text-sm font-medium transition-colors ${!isYearly ? (isDark ? "text-white" : "text-gray-900") : "text-gray-500"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
                isYearly ? "bg-[#3e8aff]" : (isDark ? "bg-white/[0.1]" : "bg-gray-300")
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all duration-200 ease-out ${
                  isYearly ? "left-8" : "left-1"
                }`}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${isYearly ? (isDark ? "text-white" : "text-gray-900") : "text-gray-500"}`}>
              Yearly
            </span>
            <span className={`px-2 py-1 text-xs font-medium text-green-400 bg-green-500/10 rounded-full transition-opacity duration-200 ${isYearly ? "opacity-100" : "opacity-0"}`}>
              Save 17%
            </span>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* Free Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-5 md:p-6 rounded-xl border backdrop-blur-xl transition-colors ${isDark ? "bg-[#0a0a0a] border-white/[0.08]" : "bg-white/70 border-black/[0.08]"}`}
            >
              <div className="mb-4">
                <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Free</h3>
              </div>
              <div className="mb-4">
                <span className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>$0</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className={`text-sm mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>30 credits</p>
              <p className="text-xs text-gray-500 mb-6">30 emails or 3 phones/mo</p>
              <Link
                href="#"
                className={`block w-full py-3 text-center rounded-lg font-medium transition-colors mb-6 ${isDark ? "bg-white/[0.05] text-white hover:bg-white/[0.1]" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}`}
              >
                Get Started
              </Link>
              <div className="space-y-3">
                {[
                  { text: "Waterfall enrichment – 15+ data sources", highlighted: true },
                  { text: "1-Click Enrichment on LinkedIn", highlighted: false },
                  { text: "Bulk CSV List Enrichment", highlighted: false },
                  { text: "Sales Navigator List Enrichment", highlighted: false },
                  { text: "Triple email verification (incl. catch-alls)", highlighted: false },
                  { text: "Contact Data Cleaning", highlighted: false },
                  { text: "Access to All Export Integrations", highlighted: false },
                  { text: "Live Company & Contact Enrichment", highlighted: false },
                ].map((feature) => (
                  <div key={feature.text} className={`flex items-center gap-2 text-sm ${feature.highlighted ? (isDark ? "text-white font-medium" : "text-gray-900 font-medium") : (isDark ? "text-gray-400" : "text-gray-600")}`}>
                    <Check className={`w-4 h-4 ${feature.highlighted ? "text-[#3e8aff]" : "text-green-500"}`} />
                    {feature.text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Starter Tier with Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`p-5 md:p-6 rounded-xl border backdrop-blur-xl transition-colors ${isDark ? "bg-[#0a0a0a] border-white/[0.08]" : "bg-white/70 border-black/[0.08]"}`}
            >
              <div className="mb-4">
                <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Starter</h3>
                <div className="flex gap-1 mt-2">
                  {pricingTiers.starter.map((tier, i) => (
                    <button
                      key={tier.tier}
                      onClick={() => setStarterTier(i)}
                      className={`px-3 py-1 text-xs rounded-md transition-colors ${
                        starterTier === i
                          ? "bg-[#3e8aff] text-white"
                          : isDark
                            ? "bg-white/[0.05] text-gray-400 hover:bg-white/[0.1]"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {tier.tier}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <span className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                  {isYearly ? pricingTiers.starter[starterTier].yearlyPrice : pricingTiers.starter[starterTier].monthlyPrice}
                </span>
                <span className="text-gray-500">/month</span>
                {isYearly && (
                  <span className="ml-2 text-xs text-gray-500 line-through">
                    {pricingTiers.starter[starterTier].monthlyPrice}
                  </span>
                )}
              </div>
              <p className={`text-sm mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{pricingTiers.starter[starterTier].credits} credits</p>
              <p className="text-xs text-gray-500 mb-6">
                {pricingTiers.starter[starterTier].email} emails or {pricingTiers.starter[starterTier].phone} phones/mo
              </p>
              <Link
                href="#"
                className={`block w-full py-3 text-center rounded-lg font-medium transition-colors mb-6 ${isDark ? "bg-white/[0.05] text-white hover:bg-white/[0.1]" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}`}
              >
                Start Free Trial
              </Link>
              <div className="space-y-3">
                {[
                  { text: "Waterfall enrichment – 15+ data sources", highlighted: true },
                  { text: "1-Click Enrichment on LinkedIn", highlighted: false },
                  { text: "Bulk CSV List Enrichment", highlighted: false },
                  { text: "Sales Navigator List Enrichment", highlighted: false },
                  { text: "Triple email verification (incl. catch-alls)", highlighted: false },
                  { text: "Contact Data Cleaning", highlighted: false },
                  { text: "Access to All Export Integrations", highlighted: false },
                  { text: "Live Company & Contact Enrichment", highlighted: false },
                ].map((feature) => (
                  <div key={feature.text} className={`flex items-center gap-2 text-sm ${feature.highlighted ? (isDark ? "text-white font-medium" : "text-gray-900 font-medium") : (isDark ? "text-gray-400" : "text-gray-600")}`}>
                    <Check className={`w-4 h-4 ${feature.highlighted ? "text-[#3e8aff]" : "text-green-500"}`} />
                    {feature.text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pro Tier with Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative p-5 md:p-6 rounded-xl bg-[#3e8aff]/5 border border-[#3e8aff]/30"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#3e8aff] text-white text-xs font-medium">
                Most Popular
              </div>
              <div className="mb-4">
                <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Pro</h3>
                <div className="flex gap-1 mt-2">
                  {pricingTiers.pro.map((tier, i) => (
                    <button
                      key={tier.tier}
                      onClick={() => setProTier(i)}
                      className={`px-3 py-1 text-xs rounded-md transition-colors ${
                        proTier === i
                          ? "bg-[#3e8aff] text-white"
                          : isDark
                            ? "bg-white/[0.05] text-gray-400 hover:bg-white/[0.1]"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {tier.tier}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <span className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                  {isYearly ? pricingTiers.pro[proTier].yearlyPrice : pricingTiers.pro[proTier].monthlyPrice}
                </span>
                <span className="text-gray-500">/month</span>
                {isYearly && (
                  <span className="ml-2 text-xs text-gray-500 line-through">
                    {pricingTiers.pro[proTier].monthlyPrice}
                  </span>
                )}
              </div>
              <p className={`text-sm mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{pricingTiers.pro[proTier].credits} credits</p>
              <p className="text-xs text-gray-500 mb-6">
                {pricingTiers.pro[proTier].email} emails or {pricingTiers.pro[proTier].phone} phones/mo
              </p>
              <Link
                href="#"
                className="block w-full py-3 text-center rounded-lg font-medium transition-colors mb-6 bg-[#3e8aff] text-white hover:bg-[#3e8aff]/90"
              >
                Start Free Trial
              </Link>
              <div className="space-y-3">
                {[
                  { text: "Waterfall enrichment – 15+ data sources", highlighted: true },
                  { text: "1-Click Enrichment on LinkedIn", highlighted: false },
                  { text: "Bulk CSV List Enrichment", highlighted: false },
                  { text: "Sales Navigator List Enrichment", highlighted: false },
                  { text: "Triple email verification (incl. catch-alls)", highlighted: false },
                  { text: "Contact Data Cleaning", highlighted: false },
                  { text: "Access to All Export Integrations", highlighted: false },
                  { text: "Live Company & Contact Enrichment", highlighted: false },
                ].map((feature) => (
                  <div key={feature.text} className={`flex items-center gap-2 text-sm ${feature.highlighted ? (isDark ? "text-white font-medium" : "text-gray-900 font-medium") : (isDark ? "text-gray-400" : "text-gray-600")}`}>
                    <Check className={`w-4 h-4 ${feature.highlighted ? "text-[#3e8aff]" : "text-green-500"}`} />
                    {feature.text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Enterprise Tier with Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`p-5 md:p-6 rounded-xl border backdrop-blur-xl transition-colors ${isDark ? "bg-[#0a0a0a] border-white/[0.08]" : "bg-white/70 border-black/[0.08]"}`}
            >
              <div className="mb-4">
                <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Enterprise</h3>
                <div className="flex gap-1 mt-2">
                  {pricingTiers.enterprise.map((tier, i) => (
                    <button
                      key={tier.tier}
                      onClick={() => setEnterpriseTier(i)}
                      className={`px-3 py-1 text-xs rounded-md transition-colors ${
                        enterpriseTier === i
                          ? "bg-[#3e8aff] text-white"
                          : isDark
                            ? "bg-white/[0.05] text-gray-400 hover:bg-white/[0.1]"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {tier.tier}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <span className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                  {isYearly ? pricingTiers.enterprise[enterpriseTier].yearlyPrice : pricingTiers.enterprise[enterpriseTier].monthlyPrice}
                </span>
                <span className="text-gray-500">/month</span>
                {isYearly && (
                  <span className="ml-2 text-xs text-gray-500 line-through">
                    {pricingTiers.enterprise[enterpriseTier].monthlyPrice}
                  </span>
                )}
              </div>
              <p className={`text-sm mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{pricingTiers.enterprise[enterpriseTier].credits} credits</p>
              <p className="text-xs text-gray-500 mb-6">
                {pricingTiers.enterprise[enterpriseTier].email} emails or {pricingTiers.enterprise[enterpriseTier].phone} phones/mo
              </p>
              <Link
                href="#"
                className={`block w-full py-3 text-center rounded-lg font-medium transition-colors mb-6 ${isDark ? "bg-white/[0.05] text-white hover:bg-white/[0.1]" : "bg-gray-100 text-gray-900 hover:bg-gray-200"}`}
              >
                Start Free Trial
              </Link>
              <div className="space-y-3">
                {[
                  { text: "Waterfall enrichment – 15+ data sources", highlighted: true },
                  { text: "1-Click Enrichment on LinkedIn", highlighted: false },
                  { text: "Bulk CSV List Enrichment", highlighted: false },
                  { text: "Sales Navigator List Enrichment", highlighted: false },
                  { text: "Triple email verification (incl. catch-alls)", highlighted: false },
                  { text: "Contact Data Cleaning", highlighted: false },
                  { text: "Access to All Export Integrations", highlighted: false },
                  { text: "Live Company & Contact Enrichment", highlighted: false },
                  { text: "Dedicated Success Manager", highlighted: false },
                  { text: "Priority Support & Onboarding", highlighted: false },
                ].map((feature) => (
                  <div key={feature.text} className={`flex items-center gap-2 text-sm ${feature.highlighted ? (isDark ? "text-white font-medium" : "text-gray-900 font-medium") : (isDark ? "text-gray-400" : "text-gray-600")}`}>
                    <Check className={`w-4 h-4 ${feature.highlighted ? "text-[#3e8aff]" : "text-green-500"}`} />
                    {feature.text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* All plans include */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 md:mt-12 text-center"
          >
            <p className="text-sm text-gray-500 mb-4">All plans include</p>
            <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
              {["Credit Rollover", "Unlimited Users", "GDPR Compliant", "SOC II Certified"].map((item) => (
                <div key={item} className={`flex items-center gap-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  <Check className="w-4 h-4 text-[#3e8aff]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </>
  );
}
