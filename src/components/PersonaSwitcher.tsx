"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendUp,
  Envelope,
  Crosshair,
  Lightning,
  Plugs,
  Code,
  ArrowRight,
  CheckCircle,
  ChartBar,
  Users,
  Clock,
  Shield,
  Database,
  GitBranch,
} from "@phosphor-icons/react";

type Persona = "marketing" | "engineering";

export default function PersonaSwitcher() {
  const [activePersona, setActivePersona] = useState<Persona>("marketing");

  return (
    <section
      id="solutions"
      className="relative py-24 md:py-32 bg-[#030303] overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 50%, rgba(62, 138, 255, 0.05), transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest text-[#3e8aff] uppercase mb-4 block">
            Built for your role
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            One platform, tailored to{" "}
            <span className="gradient-text-blue">how you work</span>
          </h2>
          <p className="text-lg text-[#888888] max-w-3xl mx-auto">
            Whether you&apos;re optimizing campaign performance or building
            data pipelines, Cleanlist adapts to your workflow with role-specific
            tools and integrations.
          </p>
        </motion.div>

        {/* Persona Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1.5 rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]">
            <button
              onClick={() => setActivePersona("marketing")}
              className={`relative px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                activePersona === "marketing"
                  ? "text-white"
                  : "text-[#888888] hover:text-white"
              }`}
            >
              {activePersona === "marketing" && (
                <motion.div
                  layoutId="personaTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#3e8aff]/20 to-[#2563eb]/20 border border-[rgba(62,138,255,0.3)] rounded-lg"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <TrendUp size={16} />
                Marketing & RevOps
              </span>
            </button>
            <button
              onClick={() => setActivePersona("engineering")}
              className={`relative px-6 py-3 rounded-lg text-sm font-medium transition-colors ${
                activePersona === "engineering"
                  ? "text-white"
                  : "text-[#888888] hover:text-white"
              }`}
            >
              {activePersona === "engineering" && (
                <motion.div
                  layoutId="personaTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#3e8aff]/20 to-[#2563eb]/20 border border-[rgba(62,138,255,0.3)] rounded-lg"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Code size={16} />
                Engineering & Data Ops
              </span>
            </button>
          </div>
        </motion.div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activePersona === "marketing" ? (
            <MarketingContent key="marketing" />
          ) : (
            <EngineeringContent key="engineering" />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function MarketingContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid lg:grid-cols-2 gap-8 lg:gap-12"
    >
      {/* Left: Stats & Features */}
      <div className="space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-4">
          <MetricCard
            icon={<TrendUp size={20} />}
            value="47%"
            label="Pipeline Velocity"
            sublabel="avg. increase"
            color="#22c55e"
          />
          <MetricCard
            icon={<Envelope size={20} />}
            value="99.2%"
            label="Deliverability"
            sublabel="guaranteed"
            color="#3e8aff"
          />
          <MetricCard
            icon={<Crosshair size={20} />}
            value="3.2x"
            label="Lead Scoring"
            sublabel="accuracy"
            color="#f59e0b"
          />
        </div>

        {/* Feature List */}
        <div className="card-glass rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Built for Growth Teams
          </h3>
          <div className="space-y-4">
            <FeatureRow
              icon={<ChartBar size={16} />}
              title="Real-time Lead Scoring"
              description="Automatically prioritize leads based on 25+ enriched data points and behavioral signals."
            />
            <FeatureRow
              icon={<Users size={16} />}
              title="ICP Match Analysis"
              description="Compare incoming leads against your ideal customer profile with AI-powered scoring."
            />
            <FeatureRow
              icon={<Envelope size={16} />}
              title="Deliverability Protection"
              description="Catch bounces before they happen. Protect your sender reputation automatically."
            />
            <FeatureRow
              icon={<Crosshair size={16} />}
              title="Campaign Segmentation"
              description="Build hyper-targeted segments using firmographic, technographic, and intent data."
            />
          </div>
          <a
            href="/docs/marketing"
            className="inline-flex items-center gap-2 mt-6 text-sm text-[#3e8aff] hover:text-[#60a5fa] transition-colors"
          >
            View Marketing Docs
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Right: HubSpot Dashboard Mock */}
      <div className="relative">
        <div className="card-glass rounded-2xl overflow-hidden">
          {/* Window Chrome */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
              <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-[rgba(255,255,255,0.05)] text-xs text-[#888888]">
              <HubSpotIcon className="w-4 h-4" />
              <span>HubSpot CRM</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-xs text-[#22c55e]">Syncing</span>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-5 space-y-4">
            {/* Header Row */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-[#888888]">Contact Enrichment</p>
                <p className="text-lg font-semibold text-white">
                  Real-time Pipeline
                </p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-[rgba(62,138,255,0.1)] text-[#3e8aff] border border-[rgba(62,138,255,0.2)]">
                Live
              </span>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3">
              <EnrichedContactCard
                name="Sarah Mitchell"
                email="sarah.m@techcorp.io"
                company="TechCorp Inc."
                title="VP of Marketing"
                score={92}
                enriched
              />
              <EnrichedContactCard
                name="James Chen"
                email="j.chen@innovate.co"
                company="Innovate Labs"
                title="Head of Growth"
                score={87}
                enriched
              />
              <EnrichedContactCard
                name="Emily Rodriguez"
                email="emily@startup.io"
                company="Enriching..."
                title="Enriching..."
                score={0}
                enriched={false}
              />
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="text-center p-3 rounded-lg bg-[rgba(255,255,255,0.02)]">
                <p className="text-xl font-bold text-white">1,247</p>
                <p className="text-xs text-[#888888]">Enriched Today</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-[rgba(255,255,255,0.02)]">
                <p className="text-xl font-bold text-[#22c55e]">98.7%</p>
                <p className="text-xs text-[#888888]">Match Rate</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-[rgba(255,255,255,0.02)]">
                <p className="text-xl font-bold text-[#3e8aff]">$2.4M</p>
                <p className="text-xs text-[#888888]">Pipeline Value</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -right-4 -bottom-4 card-glass rounded-xl p-3 shadow-2xl"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[rgba(34,197,94,0.1)] flex items-center justify-center">
              <CheckCircle size={16} className="text-[#22c55e]" />
            </div>
            <div>
              <p className="text-xs font-medium text-white">Auto-synced</p>
              <p className="text-[10px] text-[#888888]">2 seconds ago</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function EngineeringContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="grid lg:grid-cols-2 gap-8 lg:gap-12"
    >
      {/* Left: Terminal */}
      <div className="relative order-2 lg:order-1">
        <div className="card-glass rounded-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
              <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
              <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
            </div>
            <span className="text-xs font-mono text-[#888888]">
              cleanlist-api-terminal
            </span>
            <div className="w-16" />
          </div>

          {/* Terminal Content */}
          <div className="p-4 font-mono text-sm bg-[#0a0a0a]">
            <pre className="text-[#888888] leading-relaxed overflow-x-auto">
              <code>
                <span className="text-[#22c55e]">$</span>{" "}
                <span className="text-white">
                  curl -X POST https://api.cleanlist.ai/v1/verify \
                </span>
                {"\n"}
                {"  "}-H{" "}
                <span className="text-[#98c379]">
                  &quot;Authorization: Bearer $API_KEY&quot;
                </span>{" "}
                \{"\n"}
                {"  "}-H{" "}
                <span className="text-[#98c379]">
                  &quot;Content-Type: application/json&quot;
                </span>{" "}
                \{"\n"}
                {"  "}-d{" "}
                <span className="text-[#98c379]">
                  &apos;{`{"email": "john@company.com"}`}&apos;
                </span>
                {"\n\n"}
                <span className="text-[#888888]">
                  {"// Response ("}
                  <span className="text-[#22c55e]">147ms</span>
                  {")"}
                </span>
                {"\n"}
                <span className="text-[#c678dd]">{"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-[#e06c75]">&quot;valid&quot;</span>
                <span className="text-white">:</span>{" "}
                <span className="text-[#d19a66]">true</span>
                <span className="text-white">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#e06c75]">&quot;deliverable&quot;</span>
                <span className="text-white">:</span>{" "}
                <span className="text-[#d19a66]">true</span>
                <span className="text-white">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#e06c75]">&quot;mx_found&quot;</span>
                <span className="text-white">:</span>{" "}
                <span className="text-[#d19a66]">true</span>
                <span className="text-white">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#e06c75]">&quot;risk_level&quot;</span>
                <span className="text-white">:</span>{" "}
                <span className="text-[#98c379]">&quot;low&quot;</span>
                <span className="text-white">,</span>
                {"\n"}
                {"  "}
                <span className="text-[#e06c75]">&quot;enrichment&quot;</span>
                <span className="text-white">:</span>{" "}
                <span className="text-[#c678dd]">{"{"}</span>
                {"\n"}
                {"    "}
                <span className="text-[#e06c75]">&quot;full_name&quot;</span>
                <span className="text-white">:</span>{" "}
                <span className="text-[#98c379]">&quot;John Smith&quot;</span>
                <span className="text-white">,</span>
                {"\n"}
                {"    "}
                <span className="text-[#e06c75]">&quot;title&quot;</span>
                <span className="text-white">:</span>{" "}
                <span className="text-[#98c379]">
                  &quot;Senior Engineer&quot;
                </span>
                <span className="text-white">,</span>
                {"\n"}
                {"    "}
                <span className="text-[#e06c75]">&quot;company&quot;</span>
                <span className="text-white">:</span>{" "}
                <span className="text-[#98c379]">&quot;Company Inc&quot;</span>
                <span className="text-white">,</span>
                {"\n"}
                {"    "}
                <span className="text-[#e06c75]">
                  &quot;linkedin_url&quot;
                </span>
                <span className="text-white">:</span>{" "}
                <span className="text-[#98c379]">&quot;...&quot;</span>
                {"\n"}
                {"  "}
                <span className="text-[#c678dd]">{"}"}</span>
                {"\n"}
                <span className="text-[#c678dd]">{"}"}</span>
              </code>
            </pre>
          </div>

          {/* Performance Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-[#22c55e]" />
                <span className="text-xs text-[#888888]">
                  Latency: <span className="text-[#22c55e]">147ms</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield size={14} className="text-[#3e8aff]" />
                <span className="text-xs text-[#888888]">
                  TLS <span className="text-white">1.3</span>
                </span>
              </div>
            </div>
            <span className="text-xs px-2 py-0.5 rounded bg-[rgba(34,197,94,0.1)] text-[#22c55e]">
              200 OK
            </span>
          </div>
        </div>

        {/* Floating Performance Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -left-4 top-1/4 card-glass rounded-xl p-3 shadow-2xl"
        >
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[rgba(62,138,255,0.1)] flex items-center justify-center">
              <Lightning size={16} className="text-[#3e8aff]" />
            </div>
            <div>
              <p className="text-xs font-medium text-white">P99 Latency</p>
              <p className="text-[10px] text-[#888888]">{"<"}200ms global</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right: Stats & Features */}
      <div className="space-y-6 order-1 lg:order-2">
        {/* Key Metrics */}
        <div className="grid grid-cols-3 gap-4">
          <MetricCard
            icon={<Lightning size={20} />}
            value="<200ms"
            label="API Latency"
            sublabel="p99 global"
            color="#3e8aff"
          />
          <MetricCard
            icon={<Plugs size={20} />}
            value="99.99%"
            label="Webhook SLA"
            sublabel="guaranteed"
            color="#22c55e"
          />
          <MetricCard
            icon={<Database size={20} />}
            value="25+"
            label="Data Points"
            sublabel="per record"
            color="#8b5cf6"
          />
        </div>

        {/* Feature List */}
        <div className="card-glass rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Built for Data Teams
          </h3>
          <div className="space-y-4">
            <FeatureRow
              icon={<Code size={16} />}
              title="Flexible JSON Schema"
              description="Customize response payloads. Request only the fields you need. Reduce bandwidth by 60%."
            />
            <FeatureRow
              icon={<Plugs size={16} />}
              title="Reliable Webhook"
              description="Automatic retries with exponential backoff. Dead-letter queue for failed deliveries."
            />
            <FeatureRow
              icon={<GitBranch size={16} />}
              title="Bulk Processing API"
              description="Process up to 10,000 records per batch. Async jobs with progress webhooks."
            />
            <FeatureRow
              icon={<Shield size={16} />}
              title="Enterprise Security"
              description="SOC 2 Type II certified. IP allowlisting, SSO, and audit logs included."
            />
          </div>
          <a
            href="/docs/api"
            className="inline-flex items-center gap-2 mt-6 text-sm text-[#3e8aff] hover:text-[#60a5fa] transition-colors"
          >
            View API Reference
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function MetricCard({
  icon,
  value,
  label,
  sublabel,
  color,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  sublabel: string;
  color: string;
}) {
  return (
    <div className="card-glass rounded-xl p-4">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
        style={{ backgroundColor: `${color}15`, color }}
      >
        {icon}
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-sm text-white">{label}</p>
      <p className="text-xs text-[#888888]">{sublabel}</p>
    </div>
  );
}

function FeatureRow({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="w-8 h-8 rounded-lg bg-[rgba(62,138,255,0.1)] flex items-center justify-center flex-shrink-0 text-[#3e8aff]">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-white">{title}</p>
        <p className="text-xs text-[#888888] mt-0.5">{description}</p>
      </div>
    </div>
  );
}

function EnrichedContactCard({
  name,
  email,
  company,
  title,
  score,
  enriched,
}: {
  name: string;
  email: string;
  company: string;
  title: string;
  score: number;
  enriched: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
        enriched
          ? "bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.08)]"
          : "bg-[rgba(62,138,255,0.03)] border-[rgba(62,138,255,0.15)]"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3e8aff] to-[#2563eb] flex items-center justify-center text-white text-sm font-medium">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{name}</p>
          <p className="text-xs text-[#888888]">{email}</p>
        </div>
      </div>
      <div className="text-right">
        {enriched ? (
          <>
            <p className="text-xs text-white">{title}</p>
            <p className="text-xs text-[#888888]">{company}</p>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-2 border-[#3e8aff] border-t-transparent animate-spin" />
            <span className="text-xs text-[#3e8aff]">Enriching...</span>
          </div>
        )}
      </div>
      {enriched && (
        <div className="ml-4">
          <div
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              score >= 90
                ? "bg-[rgba(34,197,94,0.1)] text-[#22c55e]"
                : score >= 80
                  ? "bg-[rgba(62,138,255,0.1)] text-[#3e8aff]"
                  : "bg-[rgba(245,158,11,0.1)] text-[#f59e0b]"
            }`}
          >
            {score}
          </div>
        </div>
      )}
    </div>
  );
}

function HubSpotIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.984v-.066A2.198 2.198 0 0017.236.839h-.067a2.198 2.198 0 00-2.194 2.195v.066c0 .87.51 1.617 1.244 1.974v2.852a5.502 5.502 0 00-2.748 1.353l-7.28-5.664a2.53 2.53 0 00.063-.54 2.544 2.544 0 10-2.544 2.545c.478 0 .92-.136 1.302-.365l7.139 5.556a5.53 5.53 0 00-.554 2.418 5.52 5.52 0 005.52 5.52 5.52 5.52 0 005.52-5.52 5.524 5.524 0 00-4.473-5.42zm-1.043 8.78a3.278 3.278 0 110-6.557 3.278 3.278 0 010 6.558z" />
    </svg>
  );
}
