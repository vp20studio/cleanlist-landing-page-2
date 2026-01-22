"use client";

import { motion } from "framer-motion";
import { Check, X, Warning, ArrowsClockwise, Database, Envelope, Phone, Buildings, User, Globe, LinkedinLogo } from "@/components/icons";

interface DashboardMockupProps {
  variant?: "enrichment" | "verification" | "scraper" | "columns" | "playbook" | "default";
}

export default function DashboardMockup({ variant = "default" }: DashboardMockupProps) {
  const renderContent = () => {
    switch (variant) {
      case "enrichment":
        return <EnrichmentView />;
      case "verification":
        return <VerificationView />;
      case "scraper":
        return <ScraperView />;
      case "columns":
        return <SmartColumnsView />;
      case "playbook":
        return <PlaybookView />;
      default:
        return <DefaultView />;
    }
  };

  return (
    <div className="relative">
      {/* Browser Chrome */}
      <div className="bg-[#0a0a0a] rounded-xl border border-white/[0.08] overflow-hidden shadow-2xl">
        {/* Title Bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.08] bg-[#080808]">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 mx-4">
            <div className="max-w-md mx-auto bg-[#111] rounded-md px-3 py-1.5 text-xs text-gray-500 flex items-center gap-2">
              <Globe width={12} height={12} />
              app.cleanlist.ai
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 min-h-[320px]">{renderContent()}</div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#3e8aff]/20 via-transparent to-[#3e8aff]/20 rounded-2xl blur-3xl -z-10" />
    </div>
  );
}

function DefaultView() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Data Pipeline</h3>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Live
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {["Input", "Processing", "Output"].map((stage, i) => (
          <div
            key={stage}
            className="p-4 rounded-lg bg-[#111] border border-white/[0.05] text-center"
          >
            <div className="text-2xl font-bold text-[#3e8aff]">{(i + 1) * 127}</div>
            <div className="text-xs text-gray-500">{stage}</div>
          </div>
        ))}
      </div>

      <div className="h-2 bg-[#111] rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]"
          initial={{ width: "0%" }}
          animate={{ width: "78%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function EnrichmentView() {
  const sources = [
    { name: "Apollo", status: "found", time: "0.3s" },
    { name: "ZoomInfo", status: "found", time: "0.5s" },
    { name: "Clearbit", status: "found", time: "0.4s" },
    { name: "Hunter", status: "not_found", time: "0.2s" },
    { name: "Lusha", status: "found", time: "0.6s" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#3e8aff]/10 flex items-center justify-center">
            <Database width={20} height={20} className="text-[#3e8aff]" />
          </div>
          <div>
            <div className="text-sm font-medium text-white">Waterfall Enrichment</div>
            <div className="text-xs text-gray-500">5 sources queried</div>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs">
          <Check width={12} height={12} />
          Complete
        </div>
      </div>

      <div className="space-y-2">
        {sources.map((source, i) => (
          <motion.div
            key={source.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between p-2 rounded-lg bg-[#111] border border-white/[0.05]"
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded bg-[#1a1a1a] flex items-center justify-center text-xs font-mono text-gray-400">
                {source.name[0]}
              </div>
              <span className="text-sm text-gray-300">{source.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500">{source.time}</span>
              {source.status === "found" ? (
                <Check width={16} height={16} className="text-green-500" />
              ) : (
                <X width={16} height={16} className="text-gray-600" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-3 rounded-lg bg-[#3e8aff]/5 border border-[#3e8aff]/20">
        <div className="text-xs text-gray-400 mb-2">Golden Record Created</div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-2 text-gray-300">
            <Envelope width={12} height={12} className="text-[#3e8aff]" /> john@acme.com
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Phone width={12} height={12} className="text-[#3e8aff]" /> +1 555-0123
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Buildings width={12} height={12} className="text-[#3e8aff]" /> Acme Corp
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <User width={12} height={12} className="text-[#3e8aff]" /> VP Sales
          </div>
        </div>
      </div>
    </div>
  );
}

function VerificationView() {
  const checks = [
    { name: "Syntax Check", status: "pass", detail: "Valid format" },
    { name: "MX Records", status: "pass", detail: "3 servers found" },
    { name: "SMTP Handshake", status: "pass", detail: "250 OK" },
    { name: "Catch-all", status: "warn", detail: "Detected" },
    { name: "Disposable", status: "pass", detail: "Not disposable" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
            <Envelope width={20} height={20} className="text-green-500" />
          </div>
          <div>
            <div className="text-sm font-medium text-white">john@acme.com</div>
            <div className="text-xs text-gray-500">Triple verification complete</div>
          </div>
        </div>
        <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
          Valid
        </div>
      </div>

      <div className="space-y-2">
        {checks.map((check, i) => (
          <motion.div
            key={check.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between p-2 rounded-lg bg-[#111] border border-white/[0.05]"
          >
            <span className="text-sm text-gray-300">{check.name}</span>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">{check.detail}</span>
              {check.status === "pass" ? (
                <Check width={16} height={16} className="text-green-500" />
              ) : (
                <Warning width={16} height={16} className="text-yellow-500" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ScraperView() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#0077b5]/10 flex items-center justify-center">
            <LinkedinLogo width={20} height={20} className="text-[#0077b5]" />
          </div>
          <div>
            <div className="text-sm font-medium text-white">Sales Navigator Export</div>
            <div className="text-xs text-gray-500">2,500 leads extracted</div>
          </div>
        </div>
        <ArrowsClockwise width={16} height={16} className="text-[#3e8aff] animate-spin" />
      </div>

      <div className="bg-[#111] rounded-lg border border-white/[0.05] overflow-hidden">
        <div className="grid grid-cols-4 gap-px bg-white/[0.05] text-xs">
          <div className="bg-[#0a0a0a] p-2 text-gray-500 font-medium">Name</div>
          <div className="bg-[#0a0a0a] p-2 text-gray-500 font-medium">Title</div>
          <div className="bg-[#0a0a0a] p-2 text-gray-500 font-medium">Company</div>
          <div className="bg-[#0a0a0a] p-2 text-gray-500 font-medium">Status</div>
        </div>
        {[
          { name: "Sarah Chen", title: "VP Sales", company: "TechCorp", status: "enriched" },
          { name: "Mike Johnson", title: "CRO", company: "ScaleUp", status: "enriched" },
          { name: "Lisa Park", title: "Head of BD", company: "GrowthCo", status: "pending" },
        ].map((lead, i) => (
          <motion.div
            key={lead.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.15 }}
            className="grid grid-cols-4 gap-px bg-white/[0.05] text-xs"
          >
            <div className="bg-[#0a0a0a] p-2 text-gray-300">{lead.name}</div>
            <div className="bg-[#0a0a0a] p-2 text-gray-400">{lead.title}</div>
            <div className="bg-[#0a0a0a] p-2 text-gray-400">{lead.company}</div>
            <div className="bg-[#0a0a0a] p-2">
              {lead.status === "enriched" ? (
                <span className="text-green-500">Enriched</span>
              ) : (
                <span className="text-yellow-500">Pending</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>Showing 3 of 2,500 leads</span>
        <span className="text-[#3e8aff]">Export CSV</span>
      </div>
    </div>
  );
}

function SmartColumnsView() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
          <ArrowsClockwise width={20} height={20} className="text-purple-500" />
        </div>
        <div>
          <div className="text-sm font-medium text-white">Smart Columns</div>
          <div className="text-xs text-gray-500">AI-powered data normalization</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="text-xs text-gray-500 uppercase tracking-wider">Before</div>
          <div className="space-y-1">
            {["VP of Sales", "Vice President, Sales", "Sales VP", "VP - Sales Dept"].map(
              (title, i) => (
                <div
                  key={i}
                  className="p-2 rounded bg-red-500/5 border border-red-500/20 text-xs text-gray-400"
                >
                  {title}
                </div>
              )
            )}
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-xs text-gray-500 uppercase tracking-wider">After</div>
          <div className="space-y-1">
            {Array(4)
              .fill("VP of Sales")
              .map((title, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="p-2 rounded bg-green-500/5 border border-green-500/20 text-xs text-gray-300"
                >
                  {title}
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-500">
        <Check width={16} height={16} className="text-green-500" />
        4 titles normalized to standard format
      </div>
    </div>
  );
}

function PlaybookView() {
  const steps = [
    { name: "Import Leads", status: "complete", count: 5000 },
    { name: "Deduplicate", status: "complete", count: 4200 },
    { name: "Enrich", status: "running", count: 2800 },
    { name: "Verify Emails", status: "pending", count: null },
    { name: "Export to CRM", status: "pending", count: null },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#3e8aff]/10 flex items-center justify-center">
            <ArrowsClockwise width={20} height={20} className="text-[#3e8aff]" />
          </div>
          <div>
            <div className="text-sm font-medium text-white">GTM Playbook</div>
            <div className="text-xs text-gray-500">Automated pipeline running</div>
          </div>
        </div>
        <div className="text-xs text-[#3e8aff]">Step 3 of 5</div>
      </div>

      <div className="relative space-y-3">
        <div className="absolute left-4 top-4 bottom-4 w-px bg-white/[0.08]" />

        {steps.map((step, i) => (
          <motion.div
            key={step.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="relative flex items-center gap-4 pl-10"
          >
            <div
              className={`absolute left-2 w-4 h-4 rounded-full border-2 ${
                step.status === "complete"
                  ? "bg-green-500 border-green-500"
                  : step.status === "running"
                  ? "bg-[#3e8aff] border-[#3e8aff] animate-pulse"
                  : "bg-transparent border-gray-600"
              }`}
            >
              {step.status === "complete" && (
                <Check width={10} height={10} className="text-white absolute top-0.5 left-0.5" />
              )}
            </div>
            <div className="flex-1 flex items-center justify-between p-2 rounded-lg bg-[#111] border border-white/[0.05]">
              <span
                className={`text-sm ${
                  step.status === "pending" ? "text-gray-500" : "text-gray-300"
                }`}
              >
                {step.name}
              </span>
              {step.count && (
                <span className="text-xs text-gray-500">{step.count.toLocaleString()}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
