"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Envelope,
  Shield,
  Sparkle,
  TrendUp,
  Users,
  Lightning,
  Database,
  ArrowRight,
} from "@/components/icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030303]">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top radial gradient */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] md:w-[200%] md:h-[600px]"
          style={{
            background:
              "radial-gradient(ellipse 50% 80% at 50% 0%, rgba(62, 138, 255, 0.15), transparent)",
          }}
        />
        {/* Center glow */}
        <div
          className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[600px] md:h-[800px]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(62, 138, 255, 0.08), transparent 60%)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-xs sm:text-sm text-[#888888] whitespace-nowrap">
              <Sparkle width={16} height={16} className="text-[#3e8aff]" />
              <span className="hidden sm:inline">Trusted by 500+ growth teams</span>
              <span className="sm:hidden">500+ GTM teams</span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-5xl mx-auto leading-[1.1] px-4"
          >
            Turn messy data into your{" "}
            <span className="gradient-text-blue">greatest growth lever</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-[#888888] max-w-2xl mx-auto mb-10 leading-relaxed px-4"
          >
            Clean, verify, and enrich your leads with 99% accuracy.{" "}
            <span className="text-white">Stop wasting spend on bad data.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 px-4"
          >
            <motion.a
              href="/get-started"
              className="group relative w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold text-white rounded-xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#3e8aff] to-[#2563eb]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#60a5fa] to-[#3e8aff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blue-glow" />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start cleaning for free
                <ArrowRight width={18} height={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>
            <motion.a
              href="/demo"
              className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold text-[#888888] hover:text-white rounded-xl border border-[rgba(255,255,255,0.15)] hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.05)] transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Watch demo
            </motion.a>
          </motion.div>

          {/* Product Showcase - Bento Grid */}
          <motion.div
            variants={itemVariants}
            className="relative max-w-6xl mx-auto px-4"
          >
            {/* Main Dashboard Card */}
            <div className="relative rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.1)] bg-[#0a0a0a] blue-glow">
              {/* Window Header */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ef4444] shadow-[0_0_4px_rgba(239,68,68,0.4)]" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#f59e0b] shadow-[0_0_4px_rgba(245,158,11,0.4)]" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#22c55e] shadow-[0_0_4px_rgba(34,197,94,0.4)]" />
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1 sm:py-1.5 rounded-md sm:rounded-lg bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)]">
                  <Database width={12} height={12} className="sm:w-3.5 sm:h-3.5 text-[#3e8aff]" />
                  <span className="text-[10px] sm:text-xs text-[#888888] font-medium">cleanlist-dashboard.app</span>
                </div>
                <div className="w-12 sm:w-16" />
              </div>

              {/* Dashboard Content */}
              <div className="p-4 sm:p-6 md:p-8">
                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6">
                  <StatsCard
                    icon={<Envelope width={20} height={20} />}
                    label="Emails Verified"
                    value="24,847"
                    change="+12.3%"
                    positive
                  />
                  <StatsCard
                    icon={<Shield width={20} height={20} />}
                    label="Invalid Removed"
                    value="3,241"
                    change="-18.2%"
                    positive
                  />
                  <StatsCard
                    icon={<TrendUp width={20} height={20} />}
                    label="Deliverability"
                    value="99.2%"
                    change="+4.7%"
                    positive
                  />
                  <StatsCard
                    icon={<Users width={20} height={20} />}
                    label="Enriched Leads"
                    value="18,392"
                    change="+28.1%"
                    positive
                  />
                </div>

                {/* Processing Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Processing State */}
                  <div className="md:col-span-2 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-4 sm:p-5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-white">
                        Data Processing
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[#22c55e]">
                        <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                        Live
                      </span>
                    </div>

                    {/* Processing Items */}
                    <div className="space-y-3">
                      <ProcessingRow
                        email="john.smith@company.com"
                        status="verified"
                        company="Acme Corp"
                      />
                      <ProcessingRow
                        email="sarah.j@enterprise.io"
                        status="enriching"
                        company="Enterprise Co"
                      />
                      <ProcessingRow
                        email="invalid@bounce.test"
                        status="invalid"
                        company="Unknown"
                      />
                      <ProcessingRow
                        email="mike@startup.co"
                        status="verified"
                        company="StartupHQ"
                      />
                    </div>
                  </div>

                  {/* Quality Score */}
                  <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-4 sm:p-5">
                    <span className="text-sm font-medium text-white mb-4 block">
                      List Quality Score
                    </span>
                    <div className="relative flex items-center justify-center py-4">
                      <svg className="w-24 h-24 md:w-32 md:h-32 transform -rotate-90" viewBox="0 0 128 128">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          fill="none"
                          stroke="rgba(255,255,255,0.08)"
                          strokeWidth="8"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          fill="none"
                          stroke="#3e8aff"
                          strokeWidth="8"
                          strokeDasharray={`${(92 / 100) * 352} 352`}
                          strokeLinecap="round"
                          className="drop-shadow-[0_0_8px_rgba(62,138,255,0.5)]"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl md:text-3xl font-bold text-white">
                          92
                        </span>
                        <span className="text-xs text-[#888888]">/ 100</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-1.5 text-sm text-[#22c55e]">
                      <CheckCircle width={16} height={16} />
                      <span>Excellent</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements - Bento Style */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="hidden lg:block absolute -left-16 top-1/4 card-glass rounded-xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[rgba(34,197,94,0.1)] flex items-center justify-center">
                  <Lightning width={28} height={28} className="text-[#22c55e]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Instant API</p>
                  <p className="text-xs text-[#888888]">{"<"}100ms response</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="hidden lg:block absolute -right-16 top-1/3 card-glass rounded-xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[rgba(62,138,255,0.1)] flex items-center justify-center">
                  <Shield width={28} height={28} className="text-[#3e8aff]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">GDPR Ready</p>
                  <p className="text-xs text-[#888888]">100% compliant</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="hidden lg:block absolute -right-8 bottom-16 card-glass rounded-xl p-4 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[rgba(245,158,11,0.1)] flex items-center justify-center">
                  <TrendUp width={28} height={28} className="text-[#f59e0b]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">ROI Boost</p>
                  <p className="text-xs text-[#888888]">+340% avg.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsCard({
  icon,
  label,
  value,
  change,
  positive,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  positive: boolean;
}) {
  return (
    <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-4 sm:p-4">
      <div className="flex items-center gap-2 mb-2 text-[#888888]">
        <div className="flex-shrink-0">{icon}</div>
        <span className="text-xs truncate">{label}</span>
      </div>
      <div className="flex items-end justify-between gap-1">
        <span className="text-2xl sm:text-xl md:text-2xl font-bold text-white">
          {value}
        </span>
        <span
          className={`text-xs font-medium flex-shrink-0 ${
            positive ? "text-[#22c55e]" : "text-[#ef4444]"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}

function ProcessingRow({
  email,
  status,
  company,
}: {
  email: string;
  status: "verified" | "invalid" | "enriching";
  company: string;
}) {
  const statusConfig = {
    verified: {
      color: "text-[#22c55e]",
      bg: "bg-[rgba(34,197,94,0.1)]",
      label: "Verified",
      icon: <CheckCircle width={16} height={16} className="md:w-3.5 md:h-3.5" />,
    },
    invalid: {
      color: "text-[#ef4444]",
      bg: "bg-[rgba(239,68,68,0.1)]",
      label: "Invalid",
      icon: (
        <svg
          className="w-4 h-4 md:w-3.5 md:h-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      ),
    },
    enriching: {
      color: "text-[#3e8aff]",
      bg: "bg-[rgba(62,138,255,0.1)]",
      label: "Enriching...",
      icon: <Sparkle width={16} height={16} className="animate-pulse md:w-3.5 md:h-3.5" />,
    },
  };

  const config = statusConfig[status];

  return (
    <div className="flex items-center justify-between py-2 px-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3e8aff] to-[#2563eb] flex items-center justify-center text-white text-xs font-medium flex-shrink-0">
          {email[0].toUpperCase()}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-white truncate max-w-[180px] md:max-w-none">{email}</p>
          <p className="text-xs text-[#888888] hidden md:block">{company}</p>
        </div>
      </div>
      <span
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.color} ${config.bg} flex-shrink-0`}
      >
        {config.icon}
        <span className="hidden sm:inline">{config.label}</span>
      </span>
    </div>
  );
}
