"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  Sparkle,
  Lightning,
  Buildings,
  Users,
  CurrencyDollar,
  LinkedinLogo,
  Code,
  ArrowRight,
} from "@/components/icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function FeatureGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-20 md:py-32 bg-[#030303] overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(62, 138, 255, 0.05), transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-xs sm:text-sm text-[#888888] mb-6 whitespace-nowrap">
            <Sparkle width={16} height={16} className="text-[#3e8aff]" />
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight px-4">
            Three steps to{" "}
            <span className="gradient-text-blue">perfect data</span>
          </h2>
          <p className="text-base md:text-lg text-[#888888] max-w-2xl mx-auto px-4">
            Our AI-powered pipeline transforms raw leads into verified,
            enriched, and actionable contacts.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {/* Card 1: Verification */}
          <motion.div variants={cardVariants}>
            <VerificationCard />
          </motion.div>

          {/* Card 2: Enrichment (Double Width) */}
          <motion.div variants={cardVariants} className="md:col-span-2">
            <EnrichmentCard />
          </motion.div>

          {/* Card 3: API */}
          <motion.div variants={cardVariants} className="md:col-span-3">
            <APICard />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// VERIFICATION CARD
// ============================================
function VerificationCard() {
  const [emailStates, setEmailStates] = useState<
    Array<{ email: string; status: "pending" | "valid" | "invalid" }>
  >([
    { email: "sarah@company.com", status: "pending" },
    { email: "invalid@bounce.xyz", status: "pending" },
    { email: "mike@startup.io", status: "pending" },
    { email: "test@fake.test", status: "pending" },
    { email: "alex@enterprise.co", status: "pending" },
  ]);

  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const validEmails = [0, 2, 4];
    const invalidEmails = [1, 3];

    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex >= 5) {
          clearInterval(interval);
          return;
        }

        setEmailStates((prev) => {
          const newStates = [...prev];
          newStates[currentIndex] = {
            ...newStates[currentIndex],
            status: validEmails.includes(currentIndex) ? "valid" : "invalid",
          };
          return newStates;
        });

        currentIndex++;
      }, 400);

      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <div
      ref={cardRef}
      className="group relative h-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(10,10,10,0.6)] backdrop-blur-xl p-4 sm:p-6 overflow-hidden transition-all duration-500 hover:border-[rgba(62,138,255,0.3)]"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[rgba(62,138,255,0.05)] to-transparent pointer-events-none" />
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-[rgba(62,138,255,0.1)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#22c55e]/20 to-[#22c55e]/5 flex items-center justify-center">
            <CheckCircle width={20} height={20} className="text-[#22c55e]" />
          </div>
          <span className="text-xs font-medium text-[#22c55e] bg-[rgba(34,197,94,0.1)] px-2.5 py-1 rounded-full whitespace-nowrap">
            Real-time
          </span>
        </div>

        <h3 className="text-xl font-semibold text-white mb-2">
          99.9% Deliverability
        </h3>
        <p className="text-sm text-[#888888] mb-6">
          Real-time email verification that catches bounces before they happen.
        </p>

        {/* Email List Animation */}
        <div className="space-y-2">
          {emailStates.map((item, index) => (
            <motion.div
              key={item.email}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-300 ${
                item.status === "valid"
                  ? "bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.2)]"
                  : item.status === "invalid"
                    ? "bg-[rgba(239,68,68,0.08)] border border-[rgba(239,68,68,0.2)]"
                    : "bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)]"
              }`}
            >
              <span
                className={`text-xs font-mono truncate transition-all duration-300 ${
                  item.status === "invalid"
                    ? "line-through text-[#ef4444]/60"
                    : item.status === "valid"
                      ? "text-[#22c55e]"
                      : "text-[#888888]"
                }`}
              >
                {item.email}
              </span>
              <div className="flex-shrink-0 ml-2">
                {item.status === "pending" && (
                  <div className="w-4 h-4 rounded-full border-2 border-[#888888]/30 border-t-[#888888] animate-spin" />
                )}
                {item.status === "valid" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  >
                    <CheckCircle width={16} height={16} className="text-[#22c55e]" />
                  </motion.div>
                )}
                {item.status === "invalid" && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  >
                    <XCircle width={16} height={16} className="text-[#ef4444]" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================
// ENRICHMENT CARD (Double Width)
// ============================================
function EnrichmentCard() {
  const [stage, setStage] = useState<"skeleton" | "loading" | "complete">(
    "skeleton"
  );
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const timer1 = setTimeout(() => setStage("loading"), 800);
    const timer2 = setTimeout(() => setStage("complete"), 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [isInView]);

  return (
    <div
      ref={cardRef}
      className="group relative h-full rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(10,10,10,0.6)] backdrop-blur-xl p-4 sm:p-6 overflow-hidden transition-all duration-500 hover:border-[rgba(62,138,255,0.3)]"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[rgba(62,138,255,0.05)] to-transparent pointer-events-none" />
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-[rgba(62,138,255,0.1)] pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3e8aff]/20 to-[#3e8aff]/5 flex items-center justify-center">
            <Sparkle width={20} height={20} className="text-[#3e8aff]" />
          </div>
          <span className="text-xs font-medium text-[#3e8aff] bg-[rgba(62,138,255,0.1)] px-2.5 py-1 rounded-full whitespace-nowrap">
            AI-Powered
          </span>
        </div>

        <h3 className="text-xl font-semibold text-white mb-2">
          Deep Enrichment
        </h3>
        <p className="text-sm text-[#888888] mb-6">
          Transform a single email into a full profile: LinkedIn, Job Title,
          Company Size, and Revenue.
        </p>

        {/* Profile Enrichment Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Input (Email) */}
          <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.3)] p-4">
            <span className="text-xs text-[#888888] block mb-2">Input</span>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3e8aff] to-[#2563eb] flex items-center justify-center text-white font-semibold text-sm">
                JD
              </div>
              <div>
                <p className="text-sm text-white font-medium">
                  john.doe@acme.com
                </p>
                <p className="text-xs text-[#888888]">Email only</p>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-8">
            <motion.div
              animate={{
                x: stage === "loading" ? [0, 5, 0] : 0,
                opacity: stage === "complete" ? 1 : 0.5,
              }}
              transition={{
                x: { repeat: Infinity, duration: 0.6 },
                opacity: { duration: 0.3 },
              }}
            >
              <ArrowRight
                width={24} height={24}
                className={`transition-colors duration-300 ${stage === "complete" ? "text-[#22c55e]" : "text-[#888888]"}`}
              />
            </motion.div>
          </div>

          {/* Output (Enriched Profile) */}
          <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.3)] p-4 relative overflow-hidden">
            {/* Shimmer overlay */}
            {stage === "loading" && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(62,138,255,0.1)] to-transparent animate-shimmer" />
            )}

            <span className="text-xs text-[#888888] block mb-2">
              Enriched Output
            </span>

            <div className="space-y-3">
              {/* Profile Header */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full transition-all duration-500 ${
                    stage === "complete"
                      ? "bg-gradient-to-br from-[#22c55e] to-[#16a34a]"
                      : "bg-[rgba(255,255,255,0.1)]"
                  } flex items-center justify-center text-white font-semibold text-sm`}
                >
                  {stage === "complete" ? (
                    <CheckCircle width={20} height={20} />
                  ) : (
                    <span className="w-5 h-3 bg-[rgba(255,255,255,0.1)] rounded animate-pulse" />
                  )}
                </div>
                <div className="flex-1">
                  <EnrichmentField
                    stage={stage}
                    value="John Doe"
                    skeletonWidth="w-24"
                  />
                  <EnrichmentField
                    stage={stage}
                    value="VP of Marketing"
                    skeletonWidth="w-32"
                    isSecondary
                  />
                </div>
              </div>

              {/* Data Points */}
              <div className="grid grid-cols-2 gap-2">
                <DataPoint
                  icon={<LinkedinLogo width={14} height={14} />}
                  label="LinkedIn"
                  value="Connected"
                  stage={stage}
                  color="#0a66c2"
                />
                <DataPoint
                  icon={<Buildings width={14} height={14} />}
                  label="Company"
                  value="Acme Corp"
                  stage={stage}
                  color="#3e8aff"
                />
                <DataPoint
                  icon={<Users width={14} height={14} />}
                  label="Size"
                  value="500-1000"
                  stage={stage}
                  color="#8b5cf6"
                />
                <DataPoint
                  icon={<CurrencyDollar width={14} height={14} />}
                  label="Revenue"
                  value="$50M+"
                  stage={stage}
                  color="#22c55e"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EnrichmentField({
  stage,
  value,
  skeletonWidth,
  isSecondary = false,
}: {
  stage: "skeleton" | "loading" | "complete";
  value: string;
  skeletonWidth: string;
  isSecondary?: boolean;
}) {
  if (stage === "complete") {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`${isSecondary ? "text-xs text-[#888888]" : "text-sm text-white font-medium"}`}
      >
        {value}
      </motion.p>
    );
  }

  return (
    <div
      className={`${skeletonWidth} ${isSecondary ? "h-3 mt-1" : "h-4"} bg-[rgba(255,255,255,0.08)] rounded ${stage === "loading" ? "animate-pulse" : ""}`}
    />
  );
}

function DataPoint({
  icon,
  label,
  value,
  stage,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  stage: "skeleton" | "loading" | "complete";
  color: string;
}) {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
      <div
        className="w-6 h-6 rounded-md flex items-center justify-center transition-colors duration-500"
        style={{
          backgroundColor:
            stage === "complete" ? `${color}20` : "rgba(255,255,255,0.05)",
          color: stage === "complete" ? color : "#888888",
        }}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] text-[#888888]">{label}</p>
        {stage === "complete" ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-white font-medium truncate"
          >
            {value}
          </motion.p>
        ) : (
          <div
            className={`w-12 h-3 bg-[rgba(255,255,255,0.08)] rounded ${stage === "loading" ? "animate-pulse" : ""}`}
          />
        )}
      </div>
    </div>
  );
}

// ============================================
// API CARD
// ============================================
function APICard() {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `// Verify and enrich with one request
const response = await fetch('https://api.cleanlist.ai/v1/enrich', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer cl_live_xxxxxxxxxx',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'john.doe@company.com',
    enrich: true
  })
});

const data = await response.json();
// { valid: true, name: "John Doe", title: "VP Marketing", ... }`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(10,10,10,0.6)] backdrop-blur-xl p-4 sm:p-6 overflow-hidden transition-all duration-500 hover:border-[rgba(62,138,255,0.3)]">
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[rgba(62,138,255,0.05)] to-transparent pointer-events-none" />
      <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl bg-[rgba(62,138,255,0.1)] pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          {/* Left side - Info */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f59e0b]/20 to-[#f59e0b]/5 flex items-center justify-center">
                <Lightning width={20} height={20} className="text-[#f59e0b]" />
              </div>
              <span className="text-xs font-medium text-[#f59e0b] bg-[rgba(245,158,11,0.1)] px-2.5 py-1 rounded-full whitespace-nowrap">
                {"<"}100ms
              </span>
            </div>

            <h3 className="text-xl font-semibold text-white mb-2">
              Plug & Play API
            </h3>
            <p className="text-sm text-[#888888] mb-4">
              Integrate with HubSpot, Salesforce, or your own app in minutes.
              Built for developers who ship fast.
            </p>

            {/* Integration badges */}
            <div className="flex flex-wrap gap-2">
              {["HubSpot", "Salesforce", "Zapier", "REST API"].map((name) => (
                <span
                  key={name}
                  className="text-xs px-2.5 py-1 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] text-[#888888]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Right side - Code */}
          <div className="md:w-2/3">
            <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0a0a0a] overflow-hidden">
              {/* Code header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
                <div className="flex items-center gap-2">
                  <Code width={16} height={16} className="text-[#888888]" />
                  <span className="text-xs text-[#888888] font-mono">
                    example.ts
                  </span>
                </div>
                <motion.button
                  onClick={handleCopy}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xs px-3 py-1 rounded-md bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-[#888888] hover:text-white transition-colors"
                >
                  {copied ? "Copied!" : "Copy"}
                </motion.button>
              </div>

              {/* Code content */}
              <div className="p-4 overflow-x-auto">
                <pre className="text-xs md:text-sm font-mono leading-relaxed">
                  <code>
                    <span className="text-[#888888]">
                      {"// Verify and enrich with one request"}
                    </span>
                    {"\n"}
                    <span className="text-[#c678dd]">const</span>{" "}
                    <span className="text-white">response</span>{" "}
                    <span className="text-[#c678dd]">=</span>{" "}
                    <span className="text-[#c678dd]">await</span>{" "}
                    <span className="text-[#61afef]">fetch</span>
                    <span className="text-white">(</span>
                    <span className="text-[#98c379]">
                      {"'https://api.cleanlist.ai/v1/enrich'"}
                    </span>
                    <span className="text-white">, {"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">method:</span>{" "}
                    <span className="text-[#98c379]">{"'POST'"}</span>
                    <span className="text-white">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">headers: {"{"}</span>
                    {"\n"}
                    {"    "}
                    <span className="text-[#98c379]">
                      {"'Authorization'"}
                    </span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-[#98c379]">
                      {"'Bearer "}
                      <span className="text-[#3e8aff]">
                        cl_live_xxxxxxxxxx
                      </span>
                      {"'"}
                    </span>
                    <span className="text-white">,</span>
                    {"\n"}
                    {"    "}
                    <span className="text-[#98c379]">
                      {"'Content-Type'"}
                    </span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-[#98c379]">
                      {"'application/json'"}
                    </span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">{"}"},</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">body:</span>{" "}
                    <span className="text-[#e5c07b]">JSON</span>
                    <span className="text-white">.</span>
                    <span className="text-[#61afef]">stringify</span>
                    <span className="text-white">({"{"}</span>
                    {"\n"}
                    {"    "}
                    <span className="text-white">email:</span>{" "}
                    <span className="text-[#98c379]">
                      {"'john.doe@company.com'"}
                    </span>
                    <span className="text-white">,</span>
                    {"\n"}
                    {"    "}
                    <span className="text-white">enrich:</span>{" "}
                    <span className="text-[#d19a66]">true</span>
                    {"\n"}
                    {"  "}
                    <span className="text-white">{"}"})</span>
                    {"\n"}
                    <span className="text-white">{"}"});</span>
                    {"\n\n"}
                    <span className="text-[#888888]">
                      {"// { valid: true, name: \"John Doe\", title: \"VP Marketing\", ... }"}
                    </span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
