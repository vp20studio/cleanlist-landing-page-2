"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import {
  ArrowRight,
  FlowArrow,
  Lightning,
  Check,
  Play,
  Pause,
  Gear,
  ArrowsClockwise,
  Database,
  Envelope,
  Shield,
  Clock,
  GitBranch,
  Stack,
  Funnel,
  Upload,
  Download,
  Trash,
  Copy,
  CaretRight,
  Sparkle,
  PaperPlaneTilt,
  Plus,
} from "@phosphor-icons/react";
import { TechnicalGrid, VerticalStepper, GlowCard, GlowIcon } from "@/components/ui";
import PlaybookBuilderDemo from "@/components/PlaybookBuilderDemo";

// Workflow node types for the interactive demo
const nodeTypes = [
  { id: "trigger", label: "Trigger", icon: <Lightning />, color: "bg-[#3e8aff]/20 text-[#3e8aff] border-[#3e8aff]/30" },
  { id: "filter", label: "Filter", icon: <Funnel />, color: "bg-purple-500/20 text-purple-500 border-purple-500/30" },
  { id: "enrich", label: "Enrich", icon: <Database />, color: "bg-green-500/20 text-green-500 border-green-500/30" },
  { id: "action", label: "Action", icon: <PaperPlaneTilt />, color: "bg-[#3e8aff]/20 text-[#3e8aff] border-[#3e8aff]/30" },
];

type WorkflowNode = {
  id: string;
  type: string;
  label: string;
  config?: string;
};

export default function PlaybookBuilderPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Interactive Workflow Builder State
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    { id: "1", type: "trigger", label: "New Lead Added", config: "From LinkedIn import" },
  ]);
  const [isRunning, setIsRunning] = useState(false);
  const [activeNodeIndex, setActiveNodeIndex] = useState(-1);

  const addNode = (type: string) => {
    const nodeType = nodeTypes.find(n => n.id === type);
    if (!nodeType) return;

    const configs: Record<string, string[]> = {
      trigger: ["New Lead Added", "Form Submission", "Website Visit", "API Webhook"],
      filter: ["ICP Score > 80", "Has Email", "Company Size 50-500", "Industry = SaaS"],
      enrich: ["Waterfall Enrichment", "Find Email", "Find Phone", "Get Company Data"],
      action: ["Add to Sequence", "Update CRM", "Notify Slack", "Send to Outreach"],
    };

    const options = configs[type] || ["Configure..."];
    const randomConfig = options[Math.floor(Math.random() * options.length)];

    setNodes(prev => [...prev, {
      id: String(Date.now()),
      type,
      label: randomConfig,
      config: nodeType.label
    }]);
  };

  const removeNode = (id: string) => {
    setNodes(prev => prev.filter(n => n.id !== id));
  };

  const runPlaybook = () => {
    if (nodes.length < 2) return;
    setIsRunning(true);
    setActiveNodeIndex(0);

    nodes.forEach((_, index) => {
      setTimeout(() => {
        setActiveNodeIndex(index);
        if (index === nodes.length - 1) {
          setTimeout(() => {
            setIsRunning(false);
            setActiveNodeIndex(-1);
          }, 800);
        }
      }, (index + 1) * 600);
    });
  };

  const getNodeStyle = (type: string) => {
    return nodeTypes.find(n => n.id === type)?.color || "";
  };

  const getNodeIcon = (type: string) => {
    return nodeTypes.find(n => n.id === type)?.icon;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3e8aff]/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#3e8aff]/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-6"
              >
                <GlowIcon icon={<FlowArrow />} size="xs" color="blue" variant="ghost" />
                New
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`text-5xl md:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} leading-[1.1] mb-6`}
              >
                Playbook{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                  Builder
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} mb-8 max-w-lg`}
              >
                Build automated GTM workflows with our visual canvas. Dedupe, enrich,
                verify, and sync—all on autopilot. No code required.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-colors"
                >
                  Build Your First Playbook
                  <ArrowRight />
                </Link>
                <Link
                  href="#templates"
                  className={`inline-flex items-center gap-2 px-6 py-3 border ${isDark ? "border-white/[0.15] text-white hover:bg-white/[0.05]" : "border-gray-300 text-gray-700 hover:bg-gray-100"} font-medium rounded-lg transition-colors`}
                >
                  View Templates
                </Link>
              </motion.div>

              {/* Key Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-3 gap-4"
              >
                {[
                  { value: "25+", label: "Step Types" },
                  { value: "Visual", label: "Builder" },
                  { value: "24/7", label: "Automation" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]"
                  >
                    <div className="text-2xl font-bold text-[#3e8aff]">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <PlaybookBuilderDemo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Stats */}
      <section className={`py-12 border-y ${isDark ? "border-white/[0.08] bg-[#080808]" : "border-black/[0.08] bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <TechnicalGrid
            columns={5}
            blocks={[
              {
                icon: <GitBranch />,
                label: "Step Types",
                value: "25+",
                subValue: "Built-in steps",
                color: "blue",
              },
              {
                icon: <Stack />,
                label: "Categories",
                value: "10",
                subValue: "Organized steps",
                color: "purple",
              },
              {
                icon: <Clock />,
                label: "Scheduling",
                value: "Flexible",
                subValue: "Cron or triggers",
                color: "green",
              },
              {
                icon: <ArrowsClockwise />,
                label: "CRM Sync",
                value: "Real-time",
                subValue: "Bi-directional",
                color: "yellow",
              },
              {
                icon: <Lightning />,
                label: "No Code",
                value: "100%",
                subValue: "Visual builder",
                highlight: true,
              },
            ]}
          />
        </div>
      </section>

      {/* Visual Builder */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
              <GlowIcon icon={<GitBranch />} size="xs" color="blue" variant="ghost" />
              Visual Canvas
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Drag, Drop, Automate
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Build complex data workflows visually. Connect actions, set conditions,
              and let your playbook run on autopilot.
            </p>
          </motion.div>

          {/* Interactive Workflow Builder Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`rounded-xl ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"} overflow-hidden p-6 md:p-8`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <FlowArrow className="text-[#3e8aff]" />
                <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Interactive Workflow Builder</h3>
              </div>
              <button
                onClick={runPlaybook}
                disabled={isRunning || nodes.length < 2}
                className={`px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition-colors ${
                  isRunning || nodes.length < 2
                    ? "bg-gray-500/20 text-gray-500 cursor-not-allowed"
                    : "bg-green-500 hover:bg-green-500/90 text-white"
                }`}
              >
                {isRunning ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <FlowArrow />
                    </motion.div>
                    Running...
                  </>
                ) : (
                  <>
                    <Play />
                    Run Playbook
                  </>
                )}
              </button>
            </div>

            <div className="grid lg:grid-cols-[200px_1fr] gap-6">
              {/* Node Palette */}
              <div className="space-y-3">
                <h4 className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>Add Steps</h4>
                <div className="space-y-2">
                  {nodeTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => addNode(type.id)}
                      className={`w-full flex items-center gap-2 p-3 rounded-lg border transition-colors ${type.color} hover:opacity-80`}
                    >
                      {type.icon}
                      <span className="text-sm font-medium">{type.label}</span>
                      <Plus className="ml-auto" />
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Workflow Canvas */}
              <div className={`min-h-[300px] rounded-xl p-4 border ${
                isDark
                  ? "bg-white/[0.02] border-white/[0.05]"
                  : "bg-gray-50 border-black/[0.05]"
              }`}>
                <div className="flex flex-col items-center gap-2">
                  <AnimatePresence mode="popLayout">
                    {nodes.map((node, index) => (
                      <motion.div
                        key={node.id}
                        layout
                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: 0,
                          boxShadow: activeNodeIndex === index
                            ? "0 0 20px rgba(62, 138, 255, 0.5)"
                            : "none"
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="w-full max-w-md"
                      >
                        {/* Connector Line */}
                        {index > 0 && (
                          <div className="flex justify-center mb-2">
                            <motion.div
                              className={`w-0.5 h-6 ${
                                activeNodeIndex >= index
                                  ? "bg-[#3e8aff]"
                                  : isDark ? "bg-white/[0.1]" : "bg-black/[0.1]"
                              }`}
                            />
                          </div>
                        )}

                        {/* Node Card */}
                        <motion.div
                          className={`relative flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${getNodeStyle(node.type)} ${
                            activeNodeIndex === index ? "ring-2 ring-[#3e8aff] ring-offset-2 ring-offset-transparent" : ""
                          }`}
                          animate={{
                            scale: activeNodeIndex === index ? 1.02 : 1,
                          }}
                        >
                          <div className={`p-2 rounded-lg ${isDark ? "bg-white/[0.05]" : "bg-white/50"}`}>
                            {getNodeIcon(node.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`font-medium text-sm ${isDark ? "text-white" : "text-gray-900"}`}>{node.label}</div>
                            <div className={`text-xs truncate ${isDark ? "text-gray-400" : "text-gray-500"}`}>{node.config}</div>
                          </div>
                          {index > 0 && (
                            <button
                              onClick={() => removeNode(node.id)}
                              className={`p-1.5 rounded-md transition-colors ${
                                isDark
                                  ? "hover:bg-red-500/20 text-gray-400 hover:text-red-400"
                                  : "hover:bg-red-500/10 text-gray-500 hover:text-red-500"
                              }`}
                            >
                              <Trash />
                            </button>
                          )}

                          {/* Running indicator */}
                          {activeNodeIndex === index && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -right-2 -top-2"
                            >
                              <span className="flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                              </span>
                            </motion.div>
                          )}
                        </motion.div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {nodes.length === 0 && (
                    <div className={`flex flex-col items-center justify-center h-[200px] ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                      <FlowArrow className="mb-4 opacity-30" size={48} />
                      <p>Add steps from the left panel to build your playbook</p>
                    </div>
                  )}

                  {nodes.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`mt-4 text-center text-sm ${isDark ? "text-gray-500" : "text-gray-400"}`}
                    >
                      {nodes.length} step{nodes.length !== 1 ? "s" : ""} • Click &quot;Run Playbook&quot; to simulate
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Available Step Types */}
      <section className={`py-24 ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              25+ Built-in Step Types
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Connect any combination of steps across 10 categories to build your perfect workflow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                category: "Input",
                color: "blue",
                actions: ["CSV Upload", "CRM Import", "Sales Nav List", "Existing List"],
              },
              {
                category: "Enrichment",
                color: "green",
                actions: ["Email Finder", "Phone Finder", "Company Enrich"],
              },
              {
                category: "Validation",
                color: "yellow",
                actions: ["Email Validation", "Data Quality Check"],
              },
              {
                category: "Transform",
                color: "purple",
                actions: ["Normalization", "Deduplication"],
              },
              {
                category: "AI",
                color: "pink",
                actions: ["Smart Column", "ICP Scoring", "Champion Finding"],
              },
              {
                category: "Filter",
                color: "orange",
                actions: ["Conditional Filter", "Segmentation"],
              },
              {
                category: "CRM Lookup",
                color: "blue",
                actions: ["Contact Lookup", "Company Lookup", "Last Activity", "Owner"],
              },
              {
                category: "Decision",
                color: "purple",
                actions: ["If Property Equals", "If Any", "If All", "Branch Router"],
              },
              {
                category: "Output",
                color: "green",
                actions: ["CRM Export", "CSV Download"],
              },
              {
                category: "Notifications",
                color: "yellow",
                actions: ["Slack Alert", "Email Notification"],
              },
            ].map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`p-4 rounded-xl ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}
              >
                <div
                  className={`inline-flex items-center gap-2 px-2 py-1 rounded text-xs font-medium mb-3 ${
                    group.color === "blue"
                      ? "bg-[#3e8aff]/10 text-[#3e8aff]"
                      : group.color === "purple"
                      ? "bg-purple-500/10 text-purple-500"
                      : group.color === "green"
                      ? "bg-green-500/10 text-green-500"
                      : group.color === "yellow"
                      ? "bg-yellow-500/10 text-yellow-500"
                      : group.color === "pink"
                      ? "bg-pink-500/10 text-pink-500"
                      : "bg-orange-500/10 text-orange-500"
                  }`}
                >
                  {group.category}
                </div>
                <div className="space-y-1.5">
                  {group.actions.map((action) => (
                    <div
                      key={action}
                      className={`flex items-center gap-2 text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}
                    >
                      <Check className="text-gray-600" />
                      {action}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates" className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
              <GlowIcon icon={<Sparkle />} size="xs" color="blue" variant="ghost" />
              Templates
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Start With a Template
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Pre-built playbooks for common GTM workflows. Clone and customize.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Lead List Cleanup",
                description: "Import → Dedupe → Enrich → Verify → Export",
                steps: 5,
                users: "1.2k",
              },
              {
                title: "CRM Data Hygiene",
                description: "Scheduled pull → Clean → Enrich → Push back",
                steps: 4,
                users: "890",
              },
              {
                title: "Event Lead Capture",
                description: "Webhook → Enrich → Score → Route to Sales",
                steps: 4,
                users: "650",
              },
              {
                title: "ABM List Builder",
                description: "Account list → Find contacts → Verify → Sequence",
                steps: 4,
                users: "540",
              },
              {
                title: "Weekly Data Refresh",
                description: "Schedule → Pull stale → Re-enrich → Update CRM",
                steps: 4,
                users: "420",
              },
              {
                title: "Inbound Lead Enrichment",
                description: "Webhook trigger → Instant enrich → CRM create",
                steps: 3,
                users: "780",
              },
            ].map((template, index) => (
              <motion.div
                key={template.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group p-6 rounded-xl ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"} hover:border-[#3e8aff]/30 transition-colors cursor-pointer`}
              >
                <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-2 group-hover:text-[#3e8aff] transition-colors`}>
                  {template.title}
                </h3>
                <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"} mb-4`}>{template.description}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{template.steps} steps</span>
                  <span>{template.users} users</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scheduling */}
      <section className={`py-24 ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
                <GlowIcon icon={<Clock />} size="xs" color="blue" variant="ghost" />
                Scheduling
              </div>
              <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
                Run on Your Schedule
              </h2>
              <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"} mb-8`}>
                Trigger playbooks on a schedule, via webhook, or manually.
                Set it and forget it.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Scheduled Runs",
                    description: "Cron-style scheduling: daily, weekly, or custom intervals",
                  },
                  {
                    title: "Webhook Triggers",
                    description: "Start playbooks when data arrives from external systems",
                  },
                  {
                    title: "Manual Execution",
                    description: "Run playbooks on-demand with one click",
                  },
                  {
                    title: "Event-Based",
                    description: "Trigger when CRM records are created or updated",
                  },
                ].map((trigger) => (
                  <div
                    key={trigger.title}
                    className={`flex items-start gap-3 p-4 rounded-lg ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}
                  >
                    <Check className="text-[#3e8aff] mt-0.5" />
                    <div>
                      <h4 className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{trigger.title}</h4>
                      <p className="text-sm text-gray-500">{trigger.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}
            >
              <div className={`text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"} mb-4`}>Recent Runs</div>
              <div className="space-y-3">
                {[
                  { name: "Lead Cleanup", status: "completed", time: "2 min ago", records: 1250 },
                  { name: "CRM Sync", status: "running", time: "Started 45s ago", records: 890 },
                  { name: "Weekly Refresh", status: "scheduled", time: "In 6 hours", records: null },
                  { name: "Event Leads", status: "completed", time: "1 hour ago", records: 45 },
                ].map((run, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between p-3 rounded-lg ${isDark ? "bg-[#111]" : "bg-white"} border ${isDark ? "border-white/[0.05]" : "border-black/[0.05]"}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          run.status === "completed"
                            ? "bg-green-500"
                            : run.status === "running"
                            ? "bg-[#3e8aff] animate-pulse"
                            : "bg-gray-600"
                        }`}
                      />
                      <div>
                        <div className={`text-sm ${isDark ? "text-white" : "text-gray-900"}`}>{run.name}</div>
                        <div className="text-xs text-gray-500">{run.time}</div>
                      </div>
                    </div>
                    {run.records && (
                      <span className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"}`}>{run.records} records</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
}
