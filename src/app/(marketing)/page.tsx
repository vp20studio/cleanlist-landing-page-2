"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
  Wrench,
  ChartLine,
} from "@phosphor-icons/react";
import StickySubNav from "@/components/StickySubNav";
import InteractiveDemo from "@/components/InteractiveDemo";
import PlaybooksSection from "@/components/PlaybooksSection";
import SolutionSection from "@/components/SolutionSection";
import LogoMarquee from "@/components/LogoMarquee";
import DataTransformDemo from "@/components/DataTransformDemo";
import { useTheme } from "@/context/ThemeContext";

// Data providers for waterfall enrichment (15+)
const dataProviders = [
  "Clearbit", "Findymail", "Datagma", "ZoomInfo", "Hunter",
  "Dropcontact", "Apollo", "Lusha", "RocketReach", "Seamless.ai",
  "Cognism", "LeadIQ", "Snov.io", "Kaspr", "FullContact", "People Data Labs"
];

// All integrations for the grid (CRMs and outreach platforms)
const allIntegrations = [
  { name: "HubSpot", logo: "/images/integrations/hubspot.png", category: "crm", color: "#ff7a59" },
  { name: "ActiveCampaign", logo: "/images/integrations/activecampaign.webp", category: "marketing", color: "#004cff" },
  { name: "Affinity", logo: "/images/integrations/affinity.svg", category: "crm", color: "#4285f4" },
  { name: "Close", logo: "/images/integrations/close.png", category: "crm", color: "#1a1a1a" },
  { name: "Freshsales CRM", logo: "/images/integrations/freshsales.png", category: "crm", color: "#f26d21" },
  { name: "Holded", logo: "/images/integrations/holded.png", category: "crm", color: "#2196f3" },
  { name: "Insightly", logo: "/images/integrations/insightly.png", category: "crm", color: "#e94444" },
  { name: "Marketing360", logo: "/images/integrations/marketing360.png", category: "marketing", color: "#00a0e4" },
  { name: "Outreach.io", logo: "/images/integrations/outreach.png", category: "sales", color: "#5951ff" },
  { name: "Pipedrive", logo: "/images/integrations/pipedrive.png", category: "crm", color: "#00d084" },
  { name: "RecruitCRM", logo: "/images/integrations/recruitcrm.png", category: "crm", color: "#1a73e8" },
  { name: "Salesflare", logo: "/images/integrations/salesflare.webp", category: "crm", color: "#0066ff" },
  { name: "Salesloft", logo: "/images/integrations/salesloft.svg", category: "sales", color: "#0b6fcc" },
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
              href="https://portal.cleanlist.ai/auth/register"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-all shadow-lg shadow-[#3e8aff]/25 hover:shadow-xl hover:shadow-[#3e8aff]/30"
            >
              Start building for free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://calendly.com/cleanlist/30min"
              target="_blank"
              rel="noopener noreferrer"
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
      <section id="compare" className={`py-20 md:py-32 transition-colors relative overflow-hidden ${isDark ? "bg-[#030303]" : "bg-gradient-to-b from-white to-[#f8fafc]"}`}>
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] rounded-full blur-[200px] ${isDark ? "bg-[#3e8aff]/10" : "bg-[#3e8aff]/15"}`}
          />
          <motion.div
            animate={{ x: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute top-1/4 -left-[10%] w-[400px] h-[400px] rounded-full blur-[120px] ${isDark ? "bg-green-500/5" : "bg-green-400/10"}`}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-6"
            >
              <Sparkle className="w-4 h-4" />
              COMPARISON
            </motion.div>
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
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

          {/* Comparison Table - Premium Design */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Premium Card Container */}
            <div className={`relative rounded-3xl overflow-hidden ${
              isDark
                ? "bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-white/[0.08]"
                : "bg-white border border-gray-200 shadow-2xl shadow-[#3e8aff]/5"
            }`}>
              {/* Glow effect for Cleanlist column */}
              <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-[#3e8aff]/5 to-transparent pointer-events-none" />

              {/* Table Container */}
              <div className="overflow-x-auto">
                <div className="min-w-[750px]">
                  {/* Header Row */}
                  <div className={`grid grid-cols-5 gap-4 p-6 md:p-8 ${isDark ? "border-b border-white/[0.06]" : "border-b border-gray-100"}`}>
                    <div className={`flex items-end text-sm font-semibold uppercase tracking-wider ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                      Capabilities
                    </div>

                    {/* Competitor Column Headers */}
                    {[
                      { name: "Workflow Builders", sub: "Clay, etc.", icon: <Wrench className="w-5 h-5" />, color: "orange" },
                      { name: "CRM Enrichment", sub: "Apollo, ZoomInfo", icon: <Database className="w-5 h-5" />, color: "purple" },
                      { name: "Signal Platforms", sub: "6sense, etc.", icon: <ChartLine className="w-5 h-5" />, color: "pink" },
                    ].map((col, i) => (
                      <motion.div
                        key={col.name}
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="text-center"
                      >
                        <div className={`inline-flex flex-col items-center gap-2 p-4 rounded-2xl transition-all hover:scale-105 ${
                          isDark ? "bg-white/[0.03] hover:bg-white/[0.05]" : "bg-gray-50 hover:bg-gray-100"
                        }`}>
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            col.color === "orange"
                              ? (isDark ? "bg-orange-500/20 text-orange-400" : "bg-orange-100 text-orange-500")
                              : col.color === "purple"
                                ? (isDark ? "bg-purple-500/20 text-purple-400" : "bg-purple-100 text-purple-500")
                                : (isDark ? "bg-pink-500/20 text-pink-400" : "bg-pink-100 text-pink-500")
                          }`}>
                            {col.icon}
                          </div>
                          <div>
                            <div className={`text-sm font-semibold ${isDark ? "text-gray-200" : "text-gray-800"}`}>{col.name}</div>
                            <div className={`text-xs mt-0.5 ${isDark ? "text-gray-500" : "text-gray-400"}`}>{col.sub}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Cleanlist Column Header - Premium Highlighted */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="text-center relative"
                    >
                      {/* Floating badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="absolute -top-3 left-1/2 -translate-x-1/2 z-20"
                      >
                        <div className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 text-white text-[11px] font-semibold shadow-lg shadow-green-500/30">
                          All-in-one
                        </div>
                      </motion.div>
                      <div className={`inline-flex flex-col items-center gap-2 p-4 rounded-2xl relative transition-all ${
                        isDark
                          ? "bg-gradient-to-b from-[#3e8aff]/20 to-[#3e8aff]/5 border-2 border-[#3e8aff]/40"
                          : "bg-gradient-to-b from-[#3e8aff]/10 to-[#3e8aff]/5 border-2 border-[#3e8aff]/30 shadow-lg shadow-[#3e8aff]/10"
                      }`}>
                        {/* Logo with glow */}
                        <div className="relative">
                          <div className="absolute inset-0 bg-[#3e8aff] rounded-xl blur-md opacity-40" />
                          <Image
                            src="/images/favicon.png"
                            alt="Cleanlist"
                            width={48}
                            height={48}
                            className="relative w-12 h-12 rounded-xl shadow-lg"
                          />
                        </div>
                        <div>
                          <div className={`text-sm font-bold ${isDark ? "text-white" : "text-gray-900"}`}>Cleanlist</div>
                          <div className="text-xs mt-0.5 text-[#3e8aff] font-medium">Best of all</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Feature Rows */}
                  <div className="divide-y divide-transparent">
                    {comparisonFeatures.map((row, index) => (
                      <motion.div
                        key={row.feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className={`grid grid-cols-5 gap-4 px-6 md:px-8 py-5 group transition-all ${
                          isDark
                            ? "hover:bg-white/[0.02] border-b border-white/[0.04]"
                            : "hover:bg-[#3e8aff]/[0.02] border-b border-gray-50"
                        }`}
                      >
                        <div className={`text-sm font-medium flex items-center gap-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                          <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 + 0.2 }}
                            className={`w-2 h-2 rounded-full bg-gradient-to-r from-[#3e8aff] to-[#60a5fa] opacity-0 group-hover:opacity-100 transition-opacity`}
                          />
                          {row.feature}
                        </div>

                        {/* Competitor columns */}
                        {[row.workflow, row.crm, row.signal].map((value, i) => (
                          <div key={i} className="flex justify-center items-center">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                                value === true
                                  ? (isDark ? "bg-green-500/15" : "bg-green-100")
                                  : value === false
                                    ? (isDark ? "bg-red-500/10" : "bg-red-50")
                                    : (isDark ? "bg-white/[0.05]" : "bg-gray-100")
                              }`}
                            >
                              {value === true ? (
                                <Check className="w-4 h-4 text-green-500" weight="bold" />
                              ) : value === false ? (
                                <X className="w-4 h-4 text-red-400" />
                              ) : (
                                <Minus className="w-4 h-4 text-gray-400" />
                              )}
                            </motion.div>
                          </div>
                        ))}

                        {/* Cleanlist column - always highlighted */}
                        <div className="flex justify-center items-center">
                          <motion.div
                            whileHover={{ scale: 1.15 }}
                            className={`relative w-10 h-10 rounded-full flex items-center justify-center ${
                              isDark
                                ? "bg-gradient-to-br from-green-500/30 to-green-500/10"
                                : "bg-gradient-to-br from-green-500/20 to-green-400/10"
                            }`}
                          >
                            <div className="absolute inset-0 rounded-full bg-green-500/20 animate-pulse" />
                            <Check className="w-5 h-5 text-green-500 relative z-10" weight="bold" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Legend */}
                  <div className={`flex flex-wrap items-center justify-center gap-6 md:gap-10 p-6 ${
                    isDark
                      ? "bg-gradient-to-r from-white/[0.02] to-white/[0.01] border-t border-white/[0.06]"
                      : "bg-gradient-to-r from-gray-50 to-white border-t border-gray-100"
                  }`}>
                    {[
                      { icon: <Check className="w-3.5 h-3.5 text-green-500" weight="bold" />, label: "Full support", bg: "bg-green-500/15" },
                      { icon: <Minus className="w-3.5 h-3.5 text-gray-400" />, label: "Partial", bg: isDark ? "bg-white/10" : "bg-gray-200" },
                      { icon: <X className="w-3.5 h-3.5 text-red-400" />, label: "Not supported", bg: "bg-red-500/15" },
                    ].map((item) => (
                      <div key={item.label} className={`flex items-center gap-2.5 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                        <div className={`w-6 h-6 rounded-full ${item.bg} flex items-center justify-center`}>
                          {item.icon}
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className={`text-sm mb-5 ${isDark ? "text-gray-500" : "text-gray-500"}`}>
              Why choose when you can have it all?
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3e8aff] to-[#2563eb] text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-[#3e8aff]/25 transition-all"
              >
                See Pricing
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
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

          {/* Hub & Spoke Premium Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Main visualization container */}
            <div className={`relative rounded-3xl overflow-hidden p-8 md:p-12 ${
              isDark
                ? "bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-white/[0.05]"
                : "bg-gradient-to-b from-white to-[#f8fafc] border border-[#3e8aff]/10 shadow-2xl shadow-[#3e8aff]/5"
            }`}>
              {/* Animated background mesh */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Central glow */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] ${
                    isDark ? "bg-[#3e8aff]/20" : "bg-[#3e8aff]/15"
                  }`}
                />
                {/* Secondary glows */}
                <motion.div
                  animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute top-1/4 left-1/4 w-[200px] h-[200px] rounded-full blur-[80px] ${
                    isDark ? "bg-[#22c55e]/15" : "bg-[#22c55e]/10"
                  }`}
                />
                <motion.div
                  animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className={`absolute bottom-1/4 right-1/4 w-[200px] h-[200px] rounded-full blur-[80px] ${
                    isDark ? "bg-[#8b5cf6]/15" : "bg-[#8b5cf6]/10"
                  }`}
                />
                {/* Grid pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
                  <defs>
                    <pattern id="hubGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke={isDark ? "#fff" : "#3e8aff"} strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hubGrid)" />
                </svg>
              </div>

              {/* Orbital container */}
              <div className="relative h-[450px] md:h-[550px]">
                {/* SVG Connection Web */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                  <defs>
                    {/* Gradient definitions */}
                    <linearGradient id="lineGradientBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity={isDark ? "0.6" : "0.4"} />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="lineGradientGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity={isDark ? "0.6" : "0.4"} />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="lineGradientPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity={isDark ? "0.6" : "0.4"} />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                    </linearGradient>
                    <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3" result="blur"/>
                      <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Orbital rings with animation */}
                  <circle cx="50%" cy="50%" r="12%" fill="none" stroke={isDark ? "rgba(62,138,255,0.15)" : "rgba(62,138,255,0.1)"} strokeWidth="2" strokeDasharray="4 8">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="60s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="50%" cy="50%" r="25%" fill="none" stroke={isDark ? "rgba(62,138,255,0.1)" : "rgba(62,138,255,0.08)"} strokeWidth="1" strokeDasharray="8 12">
                    <animateTransform attributeName="transform" type="rotate" from="360 50 50" to="0 50 50" dur="90s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="50%" cy="50%" r="38%" fill="none" stroke={isDark ? "rgba(139,92,246,0.08)" : "rgba(139,92,246,0.05)"} strokeWidth="1" strokeDasharray="12 16">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="120s" repeatCount="indefinite"/>
                  </circle>

                  {/* Connection lines with glow and animated dots */}
                  {[
                    { x: 25, y: 12, cat: "crm" },
                    { x: 75, y: 12, cat: "marketing" },
                    { x: 10, y: 30, cat: "crm" },
                    { x: 90, y: 30, cat: "crm" },
                    { x: 5, y: 50, cat: "crm" },
                    { x: 95, y: 50, cat: "crm" },
                    { x: 10, y: 70, cat: "crm" },
                    { x: 90, y: 70, cat: "marketing" },
                    { x: 20, y: 88, cat: "sales" },
                    { x: 50, y: 92, cat: "crm" },
                    { x: 80, y: 88, cat: "crm" },
                    { x: 18, y: 50, cat: "crm" },
                    { x: 82, y: 50, cat: "sales" },
                  ].map((pos, i) => {
                    const gradient = pos.cat === "crm" ? "lineGradientBlue" : pos.cat === "sales" ? "lineGradientGreen" : "lineGradientPurple";
                    const color = pos.cat === "crm" ? "#3b82f6" : pos.cat === "sales" ? "#22c55e" : "#8b5cf6";
                    return (
                      <g key={i}>
                        {/* Main connection line */}
                        <line
                          x1="50%"
                          y1="50%"
                          x2={`${pos.x}%`}
                          y2={`${pos.y}%`}
                          stroke={`url(#${gradient})`}
                          strokeWidth={isDark ? "2" : "1.5"}
                          filter="url(#lineGlow)"
                        />
                        {/* Animated pulse dot */}
                        <circle r="4" fill={color} opacity="0.8">
                          <animateMotion
                            dur={`${3 + i * 0.2}s`}
                            repeatCount="indefinite"
                            path={`M${50 * 8.5},${50 * 5.5} L${pos.x * 8.5},${pos.y * 5.5}`}
                            keyPoints="0;1;0"
                            keyTimes="0;0.5;1"
                          />
                          <animate attributeName="r" values="2;5;2" dur={`${3 + i * 0.2}s`} repeatCount="indefinite"/>
                          <animate attributeName="opacity" values="0.3;1;0.3" dur={`${3 + i * 0.2}s`} repeatCount="indefinite"/>
                        </circle>
                      </g>
                    );
                  })}
                </svg>

                {/* Center Hub - Cleanlist */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                >
                  <motion.div
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="relative flex flex-col items-center justify-center"
                  >
                    <Image
                      src="/images/favicon.png"
                      alt="Cleanlist"
                      width={144}
                      height={144}
                      className={`w-24 h-24 md:w-32 md:h-32 rounded-3xl shadow-2xl ${
                        isDark ? "shadow-[#3e8aff]/50" : "shadow-[#3e8aff]/40"
                      }`}
                    />
                    <span className="text-base md:text-lg font-bold text-white mt-2">Cleanlist</span>
                    {/* Pulse ring */}
                    <motion.div
                      animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                      className="absolute top-0 w-24 h-24 md:w-32 md:h-32 rounded-3xl border-2 border-[#3e8aff]"
                    />
                  </motion.div>
                  {/* Glow layers */}
                  <div className="absolute inset-0 rounded-3xl bg-[#3e8aff]/50 blur-2xl -z-10" />
                  <div className="absolute -inset-6 rounded-[2rem] bg-[#3e8aff]/20 blur-3xl -z-20" />
                </motion.div>

                {/* Orbiting Integrations */}
                {[
                  { name: "HubSpot", logo: "/images/integrations/hubspot.png", x: "25%", y: "12%", delay: 0.1, category: "crm", needsWhiteBg: false },
                  { name: "ActiveCampaign", logo: "/images/integrations/activecampaign.webp", x: "75%", y: "12%", delay: 0.15, category: "marketing", needsWhiteBg: false },
                  { name: "Affinity", logo: "/images/integrations/affinity.svg", x: "10%", y: "30%", delay: 0.2, category: "crm", needsWhiteBg: true },
                  { name: "Close", logo: "/images/integrations/close.png", x: "90%", y: "30%", delay: 0.25, category: "crm", needsWhiteBg: false },
                  { name: "Freshsales", logo: "/images/integrations/freshsales.png", x: "5%", y: "50%", delay: 0.3, category: "crm", needsWhiteBg: false },
                  { name: "Holded", logo: "/images/integrations/holded.png", x: "95%", y: "50%", delay: 0.35, category: "crm", needsWhiteBg: false },
                  { name: "Insightly", logo: "/images/integrations/insightly.png", x: "10%", y: "70%", delay: 0.4, category: "crm", needsWhiteBg: false },
                  { name: "Marketing360", logo: "/images/integrations/marketing360.png", x: "90%", y: "70%", delay: 0.45, category: "marketing", needsWhiteBg: false },
                  { name: "Outreach.io", logo: "/images/integrations/outreach.png", x: "20%", y: "88%", delay: 0.5, category: "sales", needsWhiteBg: false },
                  { name: "Pipedrive", logo: "/images/integrations/pipedrive.png", x: "50%", y: "92%", delay: 0.55, category: "crm", needsWhiteBg: false },
                  { name: "RecruitCRM", logo: "/images/integrations/recruitcrm.png", x: "80%", y: "88%", delay: 0.6, category: "crm", needsWhiteBg: false },
                  { name: "Salesflare", logo: "/images/integrations/salesflare.webp", x: "18%", y: "50%", delay: 0.65, category: "crm", needsWhiteBg: false },
                  { name: "Salesloft", logo: "/images/integrations/salesloft.svg", x: "82%", y: "50%", delay: 0.7, category: "sales", needsWhiteBg: false },
                ].map((integration, i) => {
                  const categoryColor = integration.category === "crm" ? "#3b82f6" : integration.category === "sales" ? "#22c55e" : "#8b5cf6";
                  return (
                    <motion.div
                      key={integration.name}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: integration.delay, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.15, zIndex: 50 }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20 cursor-pointer group"
                      style={{ left: integration.x, top: integration.y }}
                    >
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 3 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                        className={`relative w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border-2 backdrop-blur-sm overflow-hidden transition-all ${
                          integration.needsWhiteBg
                            ? "bg-white border-gray-200"
                            : isDark
                              ? "bg-[#0d0d0d] border-white/[0.1] group-hover:border-white/[0.3]"
                              : "bg-white border-gray-200 group-hover:border-[#3e8aff]/50"
                        }`}
                        style={{
                          boxShadow: isDark
                            ? `0 0 30px ${categoryColor}40, 0 8px 20px rgba(0,0,0,0.4)`
                            : `0 4px 20px ${categoryColor}25, 0 8px 30px rgba(0,0,0,0.1)`
                        }}
                      >
                        <Image
                          src={integration.logo}
                          alt={integration.name}
                          width={36}
                          height={36}
                          className="w-8 h-8 md:w-9 md:h-9 object-contain"
                        />
                        {/* Category ring */}
                        <div
                          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                          style={{ boxShadow: `inset 0 0 0 2px ${categoryColor}` }}
                        />
                      </motion.div>
                      <span className={`text-[10px] md:text-xs mt-2 whitespace-nowrap font-medium transition-colors ${
                        isDark ? "text-gray-500 group-hover:text-gray-300" : "text-gray-500 group-hover:text-gray-800"
                      }`}>
                        {integration.name}
                      </span>
                      {/* Category dot */}
                      <div
                        className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: categoryColor }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Category Legend - More spacing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className={`flex items-center justify-center gap-8 mt-8 pt-6 border-t ${isDark ? "border-white/[0.05]" : "border-gray-200"}`}
            >
              {[
                { label: "CRM", color: "#3b82f6", count: 9 },
                { label: "Sales Engagement", color: "#22c55e", count: 2 },
                { label: "Marketing", color: "#8b5cf6", count: 2 },
              ].map((cat) => (
                <div key={cat.label} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: cat.color, boxShadow: `0 0 10px ${cat.color}50` }}
                  />
                  <span className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>{cat.label}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded ${isDark ? "bg-white/[0.05] text-gray-500" : "bg-gray-100 text-gray-500"}`}>
                    {cat.count}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Native Integrations Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-6 md:p-8 border mb-12 mt-16 ${isDark ? "bg-[rgba(10,10,10,0.6)] border-white/[0.08]" : "bg-white border-gray-200 shadow-sm"}`}
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
                <Link key={integration.name} href="/resources/integrations">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`group flex flex-col p-4 rounded-xl border transition-all cursor-pointer h-full ${
                      isDark
                        ? "bg-[rgba(255,255,255,0.02)] border-white/[0.05] hover:border-[#3e8aff]/30 hover:bg-[#3e8aff]/5"
                        : "bg-gray-50 border-gray-100 hover:border-[#3e8aff]/30 hover:bg-[#3e8aff]/5"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden bg-white">
                        <Image
                          src={integration.logo}
                          alt={integration.name}
                          width={28}
                          height={28}
                          className="w-7 h-7 object-contain"
                        />
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
                </Link>
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
                <div className="flex gap-1 mt-2">
                  <span className="px-3 py-1 text-xs rounded-md bg-[#3e8aff] text-white">I</span>
                </div>
              </div>
              <div className="mb-4">
                <span className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>$0</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className={`text-sm mb-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>30 credits</p>
              <p className="text-xs text-gray-500 mb-6">30 emails or 3 phones/mo</p>
              <Link
                href="https://portal.cleanlist.ai/auth/register"
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
                href="https://portal.cleanlist.ai/auth/register"
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
                href="https://portal.cleanlist.ai/auth/register"
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
                href="https://portal.cleanlist.ai/auth/register"
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

    </>
  );
}
