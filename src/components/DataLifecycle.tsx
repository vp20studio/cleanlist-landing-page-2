"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Upload,
  Sparkle,
  Database,
  CheckCircle,
  ArrowRight,
  Warning,
  XCircle,
  LinkedinLogo,
  Buildings,
  Users,
  Globe,
  Envelope,
  Crown,
} from "@/components/icons";

const steps = [
  {
    id: 1,
    title: "Ingestion",
    subtitle: "Raw, messy input",
    icon: Upload,
    color: "#f59e0b",
  },
  {
    id: 2,
    title: "The Scrub",
    subtitle: "Verification engine",
    icon: Sparkle,
    color: "#ef4444",
  },
  {
    id: 3,
    title: "The Enrichment",
    subtitle: "25+ data points",
    icon: Database,
    color: "#3e8aff",
  },
  {
    id: 4,
    title: "The Output",
    subtitle: "Golden Record",
    icon: Crown,
    color: "#22c55e",
  },
];

export default function DataLifecycle() {
  const [activeStep, setActiveStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveStep((prev) => (prev >= 4 ? 1 : prev + 1));
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-32 bg-[#030303] overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(62, 138, 255, 0.05), transparent 50%)",
        }}
      />

      <div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-[#3e8aff] uppercase mb-4 block">
            The Cleanlist Pipeline
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Watch your data{" "}
            <span className="gradient-text-blue">transform</span>
          </h2>
          <p className="text-lg text-[#888888] max-w-3xl mx-auto">
            Follow a single lead through our four-stage pipeline. From messy
            input to golden record in milliseconds.
          </p>
        </motion.div>

        {/* Stepper Navigation */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-2 md:gap-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`relative flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl transition-all ${
                    activeStep === step.id
                      ? "bg-[rgba(62,138,255,0.1)] border border-[rgba(62,138,255,0.3)]"
                      : "bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.1)]"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors`}
                    style={{
                      backgroundColor:
                        activeStep === step.id
                          ? `${step.color}20`
                          : "rgba(255,255,255,0.05)",
                      color:
                        activeStep === step.id ? step.color : "#888888",
                    }}
                  >
                    <step.icon width={16} height={16} />
                  </div>
                  <div className="hidden md:block text-left">
                    <p
                      className={`text-xs font-medium transition-colors ${activeStep === step.id ? "text-white" : "text-[#888888]"}`}
                    >
                      Step {step.id}
                    </p>
                    <p
                      className={`text-xs transition-colors ${activeStep === step.id ? "text-[#888888]" : "text-[#555]"}`}
                    >
                      {step.title}
                    </p>
                  </div>
                </button>
                {index < steps.length - 1 && (
                  <div className="w-4 md:w-8 h-px bg-[rgba(255,255,255,0.1)] mx-1" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="relative">
          <motion.div
            animate={{ opacity: isAnimating ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {activeStep === 1 && <IngestionStep />}
            {activeStep === 2 && <ScrubStep />}
            {activeStep === 3 && <EnrichmentStep />}
            {activeStep === 4 && <OutputStep />}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="/docs/pipeline"
            className="inline-flex items-center gap-2 text-sm text-[#3e8aff] hover:text-[#60a5fa] transition-colors"
          >
            Learn more about our data pipeline
            <ArrowRight width={16} height={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function IngestionStep() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grid lg:grid-cols-2 gap-8 items-center"
    >
      {/* Left: Description */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[rgba(245,158,11,0.1)] flex items-center justify-center">
            <Upload width={24} height={24} className="text-[#f59e0b]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Step 01: Ingestion</h3>
            <p className="text-sm text-[#888888]">Raw, messy input data</p>
          </div>
        </div>
        <p className="text-[#888888] mb-6 leading-relaxed">
          Your data arrives in all forms: CSV exports, CRM syncs, form
          submissions. Lowercase names, missing companies, suspicious domains,
          and burner emails. We accept it all and begin the transformation.
        </p>
        <div className="space-y-3">
          <IssueTag
            icon={<Warning />}
            text="Mixed case formatting"
            color="#f59e0b"
          />
          <IssueTag
            icon={<XCircle />}
            text="Missing company data"
            color="#ef4444"
          />
          <IssueTag
            icon={<Warning />}
            text="Potential burner domains"
            color="#f59e0b"
          />
        </div>
      </div>

      {/* Right: Visual */}
      <div className="card-glass rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#f59e0b] opacity-5 rounded-full blur-3xl" />
        <p className="text-xs text-[#888888] mb-4 font-mono">
          incoming_leads.csv
        </p>
        <div className="space-y-2 font-mono text-sm">
          <RawDataRow
            data={{
              email: "john.smith@gmail.com",
              name: "john smith",
              company: "",
            }}
            issues={["lowercase", "personal email", "no company"]}
          />
          <RawDataRow
            data={{
              email: "sarah@tempmail.xyz",
              name: "SARAH JONES",
              company: "unknown",
            }}
            issues={["uppercase", "burner domain"]}
          />
          <RawDataRow
            data={{
              email: "mike@enterprise.io",
              name: "Mike Chen",
              company: "Enterprise Co",
            }}
            issues={[]}
          />
          <RawDataRow
            data={{
              email: "test123@mailinator.com",
              name: "",
              company: "",
            }}
            issues={["no name", "burner domain", "no company"]}
          />
        </div>
        <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between">
          <span className="text-xs text-[#888888]">4 records detected</span>
          <span className="text-xs px-2 py-1 rounded bg-[rgba(245,158,11,0.1)] text-[#f59e0b]">
            Needs processing
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function ScrubStep() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grid lg:grid-cols-2 gap-8 items-center"
    >
      {/* Left: Description */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[rgba(239,68,68,0.1)] flex items-center justify-center">
            <Sparkle width={24} height={24} className="text-[#ef4444]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Step 02: The Scrub</h3>
            <p className="text-sm text-[#888888]">Verification engine</p>
          </div>
        </div>
        <p className="text-[#888888] mb-6 leading-relaxed">
          Our verification engine goes to work. We check MX records, SMTP
          responses, and cross-reference against known burner domains. Bad
          emails are flagged and removed. Good ones are syntax-corrected and
          validated.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <StatBox value="2" label="Invalid removed" color="#ef4444" />
          <StatBox value="2" label="Validated" color="#22c55e" />
          <StatBox value="147ms" label="Avg. check time" color="#3e8aff" />
          <StatBox value="100%" label="MX verified" color="#22c55e" />
        </div>
      </div>

      {/* Right: Visual */}
      <div className="card-glass rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ef4444] opacity-5 rounded-full blur-3xl" />
        <p className="text-xs text-[#888888] mb-4 font-mono">
          verification_results
        </p>
        <div className="space-y-3">
          <VerificationRow
            email="john.smith@gmail.com"
            status="valid"
            checks={["MX Valid", "SMTP OK", "Not Disposable"]}
          />
          <VerificationRow
            email="sarah@tempmail.xyz"
            status="invalid"
            checks={["Disposable Domain"]}
            strikethrough
          />
          <VerificationRow
            email="mike@enterprise.io"
            status="valid"
            checks={["MX Valid", "SMTP OK", "Corporate Domain"]}
          />
          <VerificationRow
            email="test123@mailinator.com"
            status="invalid"
            checks={["Known Burner"]}
            strikethrough
          />
        </div>
        <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between">
          <span className="text-xs text-[#888888]">
            2 valid, 2 removed
          </span>
          <span className="text-xs px-2 py-1 rounded bg-[rgba(34,197,94,0.1)] text-[#22c55e]">
            Scrub complete
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function EnrichmentStep() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grid lg:grid-cols-2 gap-8 items-center"
    >
      {/* Left: Description */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[rgba(62,138,255,0.1)] flex items-center justify-center">
            <Database width={24} height={24} className="text-[#3e8aff]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">
              Step 03: The Enrichment
            </h3>
            <p className="text-sm text-[#888888]">25+ data points pulled</p>
          </div>
        </div>
        <p className="text-[#888888] mb-6 leading-relaxed">
          The Cleanlist API queries our data graph to pull firmographic,
          demographic, and technographic data. LinkedIn profiles, company
          revenue, tech stack, and more—all appended automatically.
        </p>
        <div className="grid grid-cols-4 gap-2">
          <EnrichmentIcon icon={<LinkedinLogo />} label="LinkedIn" />
          <EnrichmentIcon icon={<Buildings />} label="Company" />
          <EnrichmentIcon icon={<Users />} label="Size" />
          <EnrichmentIcon icon={<Globe />} label="Location" />
          <EnrichmentIcon icon={<Envelope />} label="Alt Email" />
          <EnrichmentIcon icon={<Database />} label="Tech Stack" />
          <span className="flex items-center justify-center text-xs text-[#888888]">
            +19 more
          </span>
        </div>
      </div>

      {/* Right: Visual */}
      <div className="card-glass rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#3e8aff] opacity-5 rounded-full blur-3xl" />
        <p className="text-xs text-[#888888] mb-4 font-mono">
          enrichment_pipeline
        </p>
        <div className="space-y-4">
          <EnrichedProfile
            email="john.smith@gmail.com"
            data={{
              fullName: "John Smith",
              title: "Marketing Director",
              company: "Acme Corp",
              companySize: "500-1000",
              linkedin: "linkedin.com/in/johnsmith",
              location: "San Francisco, CA",
            }}
          />
          <EnrichedProfile
            email="mike@enterprise.io"
            data={{
              fullName: "Michael Chen",
              title: "VP Engineering",
              company: "Enterprise Co",
              companySize: "1000-5000",
              linkedin: "linkedin.com/in/mikechen",
              location: "New York, NY",
            }}
          />
        </div>
        <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.08)] flex items-center justify-between">
          <span className="text-xs text-[#888888]">
            50 data points added
          </span>
          <span className="text-xs px-2 py-1 rounded bg-[rgba(62,138,255,0.1)] text-[#3e8aff]">
            Enrichment complete
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function OutputStep() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="grid lg:grid-cols-2 gap-8 items-center"
    >
      {/* Left: Description */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[rgba(34,197,94,0.1)] flex items-center justify-center">
            <Crown width={24} height={24} className="text-[#22c55e]" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">
              Step 04: The Output
            </h3>
            <p className="text-sm text-[#888888]">Golden Record delivered</p>
          </div>
        </div>
        <p className="text-[#888888] mb-6 leading-relaxed">
          The final output: clean, verified, enriched records ready for your
          CRM. Each record includes a quality score, enrichment confidence, and
          is formatted for instant sync to HubSpot, Salesforce, or via webhook.
        </p>
        <div className="flex items-center gap-4">
          <div className="flex-1 p-4 rounded-xl bg-[rgba(34,197,94,0.05)] border border-[rgba(34,197,94,0.2)]">
            <p className="text-3xl font-bold text-[#22c55e]">2</p>
            <p className="text-xs text-[#888888]">Golden Records</p>
          </div>
          <div className="flex-1 p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)]">
            <p className="text-3xl font-bold text-white">50%</p>
            <p className="text-xs text-[#888888]">List Cleaned</p>
          </div>
          <div className="flex-1 p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.08)]">
            <p className="text-3xl font-bold text-white">312ms</p>
            <p className="text-xs text-[#888888]">Total Time</p>
          </div>
        </div>
      </div>

      {/* Right: Visual */}
      <div className="card-glass rounded-2xl p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#22c55e] opacity-5 rounded-full blur-3xl" />
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs text-[#888888] font-mono">golden_records.json</p>
          <span className="flex items-center gap-1.5 text-xs text-[#22c55e]">
            <CheckCircle width={14} height={14} />
            CRM Ready
          </span>
        </div>
        <div className="space-y-3">
          <GoldenRecord
            data={{
              email: "john.smith@gmail.com",
              fullName: "John Smith",
              title: "Marketing Director",
              company: "Acme Corp",
              score: 94,
            }}
          />
          <GoldenRecord
            data={{
              email: "mike@enterprise.io",
              fullName: "Michael Chen",
              title: "VP Engineering",
              company: "Enterprise Co",
              score: 97,
            }}
          />
        </div>
        <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.08)]">
          <div className="flex items-center gap-3">
            <button className="flex-1 py-2 px-4 text-xs font-medium text-white bg-gradient-to-r from-[#3e8aff] to-[#2563eb] rounded-lg hover:shadow-[0_0_20px_rgba(62,138,255,0.3)] transition-shadow">
              Export to HubSpot
            </button>
            <button className="flex-1 py-2 px-4 text-xs font-medium text-[#888888] bg-[rgba(255,255,255,0.05)] rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors border border-[rgba(255,255,255,0.08)]">
              Download JSON
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Helper Components
function IssueTag({
  icon,
  text,
  color,
}: {
  icon: React.ReactNode;
  text: string;
  color: string;
}) {
  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs"
      style={{ backgroundColor: `${color}10`, color }}
    >
      {icon}
      {text}
    </div>
  );
}

function RawDataRow({
  data,
  issues,
}: {
  data: { email: string; name: string; company: string };
  issues: string[];
}) {
  const hasIssues = issues.length > 0;
  return (
    <div
      className={`p-3 rounded-lg border ${hasIssues ? "border-[rgba(245,158,11,0.2)] bg-[rgba(245,158,11,0.03)]" : "border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]"}`}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-[#888888] text-xs">{data.email}</span>
        {hasIssues && (
          <Warning width={14} height={14} className="text-[#f59e0b]" />
        )}
      </div>
      <div className="flex gap-4 text-[10px]">
        <span className="text-[#555]">
          name: <span className="text-white">{data.name || "null"}</span>
        </span>
        <span className="text-[#555]">
          company:{" "}
          <span className="text-white">{data.company || "null"}</span>
        </span>
      </div>
    </div>
  );
}

function StatBox({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div
      className="p-3 rounded-xl border"
      style={{
        borderColor: `${color}30`,
        backgroundColor: `${color}08`,
      }}
    >
      <p className="text-xl font-bold" style={{ color }}>
        {value}
      </p>
      <p className="text-xs text-[#888888]">{label}</p>
    </div>
  );
}

function VerificationRow({
  email,
  status,
  checks,
  strikethrough = false,
}: {
  email: string;
  status: "valid" | "invalid";
  checks: string[];
  strikethrough?: boolean;
}) {
  return (
    <div
      className={`p-3 rounded-lg border ${
        status === "valid"
          ? "border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.03)]"
          : "border-[rgba(239,68,68,0.2)] bg-[rgba(239,68,68,0.03)]"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <span
          className={`text-xs ${strikethrough ? "line-through text-[#ef4444]/60" : "text-white"}`}
        >
          {email}
        </span>
        {status === "valid" ? (
          <CheckCircle width={16} height={16} className="text-[#22c55e]" />
        ) : (
          <XCircle width={16} height={16} className="text-[#ef4444]" />
        )}
      </div>
      <div className="flex flex-wrap gap-1">
        {checks.map((check, i) => (
          <span
            key={i}
            className={`text-[10px] px-1.5 py-0.5 rounded ${
              status === "valid"
                ? "bg-[rgba(34,197,94,0.1)] text-[#22c55e]"
                : "bg-[rgba(239,68,68,0.1)] text-[#ef4444]"
            }`}
          >
            {check}
          </span>
        ))}
      </div>
    </div>
  );
}

function EnrichmentIcon({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]">
      <div className="w-6 h-6 rounded bg-[rgba(62,138,255,0.1)] flex items-center justify-center text-[#3e8aff]">
        {icon}
      </div>
      <span className="text-[10px] text-[#888888]">{label}</span>
    </div>
  );
}

function EnrichedProfile({
  email,
  data,
}: {
  email: string;
  data: {
    fullName: string;
    title: string;
    company: string;
    companySize: string;
    linkedin: string;
    location: string;
  };
}) {
  return (
    <div className="p-4 rounded-xl border border-[rgba(62,138,255,0.2)] bg-[rgba(62,138,255,0.03)]">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3e8aff] to-[#2563eb] flex items-center justify-center text-white text-sm font-medium">
          {data.fullName
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{data.fullName}</p>
          <p className="text-xs text-[#888888]">{email}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="flex items-center gap-1.5">
          <span className="text-[#555]">Title:</span>
          <span className="text-white">{data.title}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[#555]">Company:</span>
          <span className="text-white">{data.company}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[#555]">Size:</span>
          <span className="text-white">{data.companySize}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[#555]">Location:</span>
          <span className="text-white">{data.location}</span>
        </div>
      </div>
    </div>
  );
}

function GoldenRecord({
  data,
}: {
  data: {
    email: string;
    fullName: string;
    title: string;
    company: string;
    score: number;
  };
}) {
  return (
    <div className="p-4 rounded-xl border border-[rgba(34,197,94,0.3)] bg-[rgba(34,197,94,0.05)] relative overflow-hidden">
      <div className="absolute top-2 right-2">
        <div className="w-8 h-8 rounded-full bg-[rgba(34,197,94,0.1)] flex items-center justify-center">
          <span className="text-xs font-bold text-[#22c55e]">{data.score}</span>
        </div>
      </div>
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#22c55e] to-[#16a34a] flex items-center justify-center text-white text-sm font-medium">
          {data.fullName
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{data.fullName}</p>
          <p className="text-xs text-[#888888]">{data.email}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-xs">
        <span className="text-[#888888]">
          {data.title} at <span className="text-white">{data.company}</span>
        </span>
        <span className="flex items-center gap-1 text-[#22c55e]">
          <CheckCircle width={12} height={12} />
          Verified
        </span>
      </div>
    </div>
  );
}
