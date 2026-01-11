"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Check,
  X,
  ArrowRight,
  Zap,
  Building,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Pricing data with monthly and yearly prices (yearly saves ~17%)
const pricingTiers = {
  free: {
    name: "Free",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
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

const featureCategories = [
  {
    name: "Data Enrichment",
    features: [
      { name: "Multi-Provider Lead Enrichment", starter: true, pro: true, business: true, enterprise: true },
      { name: "Email Enrichment (1 credit)", starter: true, pro: true, business: true, enterprise: true },
      { name: "Full Contact Enrichment (10 credits)", starter: true, pro: true, business: true, enterprise: true },
      { name: "Direct Phone Numbers", starter: true, pro: true, business: true, enterprise: true },
      { name: "Mobile Phone Numbers", starter: false, pro: true, business: true, enterprise: true },
      { name: "Company Firmographics", starter: true, pro: true, business: true, enterprise: true },
      { name: "98% Accuracy Guarantee", starter: true, pro: true, business: true, enterprise: true },
      { name: "LinkedIn Profile URLs", starter: true, pro: true, business: true, enterprise: true },
      { name: "Custom Field Mapping", starter: false, pro: true, business: true, enterprise: true },
    ],
  },
  {
    name: "Email Verification",
    features: [
      { name: "Syntax Validation", starter: true, pro: true, business: true, enterprise: true },
      { name: "MX/DNS Lookup", starter: true, pro: true, business: true, enterprise: true },
      { name: "SMTP Handshake Verification", starter: true, pro: true, business: true, enterprise: true },
      { name: "Catch-all Detection", starter: true, pro: true, business: true, enterprise: true },
      { name: "Disposable Email Detection", starter: true, pro: true, business: true, enterprise: true },
      { name: "Role-based Email Flagging", starter: true, pro: true, business: true, enterprise: true },
      { name: "Spam Trap Detection", starter: false, pro: true, business: true, enterprise: true },
      { name: "Deliverability Scoring", starter: false, pro: true, business: true, enterprise: true },
      { name: "Bulk Verification (10K+/batch)", starter: false, pro: true, business: true, enterprise: true },
      { name: "Real-time API Verification", starter: false, pro: true, business: true, enterprise: true },
    ],
  },
  {
    name: "Smart Columns (AI)",
    features: [
      { name: "Job Title Normalization", starter: false, pro: true, business: true, enterprise: true },
      { name: "Company Name Standardization", starter: false, pro: true, business: true, enterprise: true },
      { name: "Name Parsing (First/Last)", starter: false, pro: true, business: true, enterprise: true },
      { name: "Phone Number Formatting", starter: false, pro: true, business: true, enterprise: true },
      { name: "Address Parsing", starter: false, pro: true, business: true, enterprise: true },
      { name: "Custom AI Prompts", starter: false, pro: false, business: true, enterprise: true },
      { name: "Seniority Level Classification", starter: false, pro: true, business: true, enterprise: true },
      { name: "Department Mapping", starter: false, pro: true, business: true, enterprise: true },
      { name: "Industry Categorization", starter: false, pro: true, business: true, enterprise: true },
      { name: "GPT-4 Powered Transforms", starter: false, pro: true, business: true, enterprise: true },
    ],
  },
  {
    name: "Sales Navigator Scraper",
    features: [
      { name: "Chrome Extension", starter: false, pro: true, business: true, enterprise: true },
      { name: "Bulk Lead Export", starter: false, pro: true, business: true, enterprise: true },
      { name: "Auto-enrichment on Export", starter: false, pro: true, business: true, enterprise: true },
      { name: "Preserve Sales Nav Filters", starter: false, pro: true, business: true, enterprise: true },
      { name: "Safe Rate Limiting", starter: false, pro: true, business: true, enterprise: true },
      { name: "Background Processing", starter: false, pro: true, business: true, enterprise: true },
      { name: "Direct CRM Sync", starter: false, pro: false, business: true, enterprise: true },
      { name: "Team Sharing", starter: false, pro: false, business: true, enterprise: true },
    ],
  },
  {
    name: "Playbook Builder",
    features: [
      { name: "Visual Workflow Builder", starter: false, pro: true, business: true, enterprise: true },
      { name: "Number of Playbooks", starter: "0", pro: "5", business: "Unlimited", enterprise: "Unlimited" },
      { name: "25+ Step Types (10 categories)", starter: false, pro: true, business: true, enterprise: true },
      { name: "Scheduled Runs (Cron)", starter: false, pro: true, business: true, enterprise: true },
      { name: "Webhook Triggers", starter: false, pro: true, business: true, enterprise: true },
      { name: "Conditional Logic & Branching", starter: false, pro: false, business: true, enterprise: true },
      { name: "Error Handling & Retries", starter: false, pro: true, business: true, enterprise: true },
      { name: "Deduplication Actions", starter: false, pro: true, business: true, enterprise: true },
      { name: "CRM Sync Actions", starter: false, pro: true, business: true, enterprise: true },
      { name: "ICP Scoring Step", starter: false, pro: false, business: true, enterprise: true },
    ],
  },
  {
    name: "Integrations",
    features: [
      { name: "CSV Import/Export", starter: true, pro: true, business: true, enterprise: true },
      { name: "Google Sheets", starter: true, pro: true, business: true, enterprise: true },
      { name: "Salesforce", starter: false, pro: true, business: true, enterprise: true },
      { name: "HubSpot", starter: false, pro: true, business: true, enterprise: true },
      { name: "Pipedrive", starter: false, pro: true, business: true, enterprise: true },
      { name: "Outreach", starter: false, pro: true, business: true, enterprise: true },
      { name: "Salesloft", starter: false, pro: true, business: true, enterprise: true },
      { name: "Zapier/Make/n8n", starter: false, pro: true, business: true, enterprise: true },
      { name: "REST API", starter: false, pro: true, business: true, enterprise: true },
      { name: "Webhooks", starter: false, pro: true, business: true, enterprise: true },
      { name: "Custom Integrations", starter: false, pro: false, business: true, enterprise: true },
    ],
  },
  {
    name: "Team & Admin",
    features: [
      { name: "Team Members", starter: "1", pro: "5", business: "25", enterprise: "Unlimited" },
      { name: "Workspaces", starter: "1", pro: "1", business: "5", enterprise: "Unlimited" },
      { name: "Role-based Permissions", starter: false, pro: false, business: true, enterprise: true },
      { name: "SSO (SAML)", starter: false, pro: false, business: false, enterprise: true },
      { name: "Audit Logs", starter: false, pro: false, business: true, enterprise: true },
      { name: "Usage Analytics", starter: true, pro: true, business: true, enterprise: true },
      { name: "Credit Allocation by Team", starter: false, pro: false, business: true, enterprise: true },
      { name: "Admin Dashboard", starter: false, pro: true, business: true, enterprise: true },
    ],
  },
  {
    name: "Support & SLA",
    features: [
      { name: "Email Support", starter: true, pro: true, business: true, enterprise: true },
      { name: "Priority Support", starter: false, pro: true, business: true, enterprise: true },
      { name: "Dedicated CSM", starter: false, pro: false, business: true, enterprise: true },
      { name: "Slack Channel", starter: false, pro: false, business: true, enterprise: true },
      { name: "Phone Support", starter: false, pro: false, business: false, enterprise: true },
      { name: "Uptime SLA", starter: "99%", pro: "99.5%", business: "99.9%", enterprise: "99.99%" },
      { name: "Response Time SLA", starter: "48hrs", pro: "24hrs", business: "4hrs", enterprise: "1hr" },
      { name: "Onboarding Session", starter: false, pro: true, business: true, enterprise: true },
      { name: "Quarterly Business Reviews", starter: false, pro: false, business: true, enterprise: true },
    ],
  },
  {
    name: "Security & Compliance",
    features: [
      { name: "SOC 2 Type II", starter: true, pro: true, business: true, enterprise: true },
      { name: "GDPR Compliant", starter: true, pro: true, business: true, enterprise: true },
      { name: "CCPA Compliant", starter: true, pro: true, business: true, enterprise: true },
      { name: "256-bit Encryption", starter: true, pro: true, business: true, enterprise: true },
      { name: "Data Retention Controls", starter: false, pro: true, business: true, enterprise: true },
      { name: "IP Allowlisting", starter: false, pro: false, business: true, enterprise: true },
      { name: "Custom DPA", starter: false, pro: false, business: false, enterprise: true },
      { name: "Security Review", starter: false, pro: false, business: false, enterprise: true },
      { name: "On-premise Option", starter: false, pro: false, business: false, enterprise: true },
    ],
  },
];

const faqs = [
  {
    question: "What is a credit?",
    answer:
      "Credits are used for enrichment and transformations. Email-only enrichment costs 1 credit per record. Full contact enrichment (email + phone) costs 10 credits per record. Smart Column transformations have variable costs depending on the type.",
  },
  {
    question: "Do unused credits roll over?",
    answer:
      "Yes! Unused credits roll over for up to 3 months on Pro and Business plans. Enterprise plans have custom rollover terms.",
  },
  {
    question: "Can I upgrade or downgrade anytime?",
    answer:
      "Absolutely. Upgrade instantly and get prorated access to your new plan. Downgrade at any time—changes take effect at your next billing cycle.",
  },
  {
    question: "What happens if I run out of credits?",
    answer:
      "You can purchase additional credits at any time, or upgrade to a higher plan. We'll notify you when you're running low so you're never caught off guard.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes! Every plan comes with a 14-day free trial and 100 free credits. No credit card required to start.",
  },
  {
    question: "Do you offer discounts for startups or nonprofits?",
    answer:
      "Yes, we offer special pricing for early-stage startups and registered nonprofits. Contact us to learn more.",
  },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(true);
  const [starterTier, setStarterTier] = useState(0);
  const [proTier, setProTier] = useState(0);
  const [enterpriseTier, setEnterpriseTier] = useState(0);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    featureCategories.map((c) => c.name)
  );

  const toggleCategory = (name: string) => {
    setExpandedCategories((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    );
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3e8aff]/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-6"
          >
            <Zap className="w-4 h-4" />
            Simple, Transparent Pricing
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Simple Credit Pricing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          >
            1 credit for email enrichment, 10 credits for full contact (email + phone).
            No hidden fees. 98% accuracy guarantee.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <span className={`text-sm font-medium transition-colors ${!annual ? "text-white" : "text-gray-500"}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                annual ? "bg-[#3e8aff]" : "bg-white/[0.1]"
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${
                  annual ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${annual ? "text-white" : "text-gray-500"}`}>
              Yearly
            </span>
            {annual && (
              <span className="px-2 py-1 text-xs font-medium text-green-400 bg-green-500/10 rounded-full">
                Save 17%
              </span>
            )}
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Free Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08]"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Free</h3>
                <p className="text-sm text-gray-500">30 credits</p>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">$0</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-sm text-gray-400 mb-6">30 emails or 3 phones</p>
              <Link
                href="#"
                className="block w-full py-3 text-center rounded-lg font-medium transition-colors mb-6 bg-white/[0.05] text-white hover:bg-white/[0.1]"
              >
                Get Started
              </Link>
              <div className="space-y-3">
                {pricingTiers.free.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-green-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Starter Tier with Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08]"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Starter</h3>
                <div className="flex gap-1 mt-2">
                  {pricingTiers.starter.map((tier, i) => (
                    <button
                      key={tier.tier}
                      onClick={() => setStarterTier(i)}
                      className={`px-3 py-1 text-xs rounded-md transition-colors ${
                        starterTier === i
                          ? "bg-[#3e8aff] text-white"
                          : "bg-white/[0.05] text-gray-400 hover:bg-white/[0.1]"
                      }`}
                    >
                      {tier.tier}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">
                  {annual ? pricingTiers.starter[starterTier].yearlyPrice : pricingTiers.starter[starterTier].monthlyPrice}
                </span>
                <span className="text-gray-500">/month</span>
                {annual && (
                  <span className="ml-2 text-xs text-gray-500 line-through">
                    {pricingTiers.starter[starterTier].monthlyPrice}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-400 mb-2">{pricingTiers.starter[starterTier].credits} credits</p>
              <p className="text-xs text-gray-500 mb-6">
                {pricingTiers.starter[starterTier].email} emails or {pricingTiers.starter[starterTier].phone} phones/mo
              </p>
              <Link
                href="#"
                className="block w-full py-3 text-center rounded-lg font-medium transition-colors mb-6 bg-white/[0.05] text-white hover:bg-white/[0.1]"
              >
                Start Free Trial
              </Link>
              <div className="space-y-3">
                {["Everything in Free", "Email Validation", "CRM Export", "Priority Support"].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-green-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Pro Tier with Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative p-6 rounded-xl bg-[#3e8aff]/5 border border-[#3e8aff]/30"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#3e8aff] text-white text-xs font-medium">
                Most Popular
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Pro</h3>
                <div className="flex gap-1 mt-2">
                  {pricingTiers.pro.map((tier, i) => (
                    <button
                      key={tier.tier}
                      onClick={() => setProTier(i)}
                      className={`px-3 py-1 text-xs rounded-md transition-colors ${
                        proTier === i
                          ? "bg-[#3e8aff] text-white"
                          : "bg-white/[0.05] text-gray-400 hover:bg-white/[0.1]"
                      }`}
                    >
                      {tier.tier}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">
                  {annual ? pricingTiers.pro[proTier].yearlyPrice : pricingTiers.pro[proTier].monthlyPrice}
                </span>
                <span className="text-gray-500">/month</span>
                {annual && (
                  <span className="ml-2 text-xs text-gray-500 line-through">
                    {pricingTiers.pro[proTier].monthlyPrice}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-400 mb-2">{pricingTiers.pro[proTier].credits} credits</p>
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
                {["Everything in Starter", "CRM Integrations", "Smart Columns", "ICP Scoring"].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-green-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Enterprise Tier with Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08]"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-white">Enterprise</h3>
                <div className="flex gap-1 mt-2">
                  {pricingTiers.enterprise.map((tier, i) => (
                    <button
                      key={tier.tier}
                      onClick={() => setEnterpriseTier(i)}
                      className={`px-3 py-1 text-xs rounded-md transition-colors ${
                        enterpriseTier === i
                          ? "bg-[#3e8aff] text-white"
                          : "bg-white/[0.05] text-gray-400 hover:bg-white/[0.1]"
                      }`}
                    >
                      {tier.tier}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">
                  {annual ? pricingTiers.enterprise[enterpriseTier].yearlyPrice : pricingTiers.enterprise[enterpriseTier].monthlyPrice}
                </span>
                <span className="text-gray-500">/month</span>
                {annual && (
                  <span className="ml-2 text-xs text-gray-500 line-through">
                    {pricingTiers.enterprise[enterpriseTier].monthlyPrice}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-400 mb-2">{pricingTiers.enterprise[enterpriseTier].credits} credits</p>
              <p className="text-xs text-gray-500 mb-6">
                {pricingTiers.enterprise[enterpriseTier].email} emails or {pricingTiers.enterprise[enterpriseTier].phone} phones/mo
              </p>
              <Link
                href="#"
                className="block w-full py-3 text-center rounded-lg font-medium transition-colors mb-6 bg-white/[0.05] text-white hover:bg-white/[0.1]"
              >
                Start Free Trial
              </Link>
              <div className="space-y-3">
                {["Everything in Pro", "Playbook Builder", "Team Workspaces", "Dedicated CSM"].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-green-500" />
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* All plans include */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-gray-500 mb-4">All plans include</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {["Credit Rollover", "Unlimited Users", "GDPR Compliant", "SOC II Certified"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-[#3e8aff]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Feature Comparison
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Every capability across all plans. No hidden features.
            </p>
          </motion.div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Header */}
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-4 px-4 text-gray-400 font-medium w-1/3">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 text-white font-medium w-1/6">
                    Starter
                  </th>
                  <th className="text-center py-4 px-4 text-white font-medium w-1/6 bg-[#3e8aff]/5">
                    Pro
                  </th>
                  <th className="text-center py-4 px-4 text-white font-medium w-1/6">
                    Business
                  </th>
                  <th className="text-center py-4 px-4 text-white font-medium w-1/6">
                    Enterprise
                  </th>
                </tr>
              </thead>

              <tbody>
                {featureCategories.map((category) => (
                  <>
                    {/* Category Header */}
                    <tr
                      key={category.name}
                      className="border-b border-white/[0.08] bg-[#0a0a0a] cursor-pointer hover:bg-[#0d0d0d]"
                      onClick={() => toggleCategory(category.name)}
                    >
                      <td
                        colSpan={5}
                        className="py-4 px-4"
                      >
                        <div className="flex items-center gap-2 font-semibold text-white">
                          {expandedCategories.includes(category.name) ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                          {category.name}
                        </div>
                      </td>
                    </tr>

                    {/* Features */}
                    {expandedCategories.includes(category.name) &&
                      category.features.map((feature) => (
                        <tr
                          key={feature.name}
                          className="border-b border-white/[0.05] hover:bg-white/[0.02]"
                        >
                          <td className="py-3 px-4 text-sm text-gray-400">
                            {feature.name}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {typeof feature.starter === "boolean" ? (
                              feature.starter ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-600 mx-auto" />
                              )
                            ) : (
                              <span className="text-sm text-gray-400">
                                {feature.starter}
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-center bg-[#3e8aff]/5">
                            {typeof feature.pro === "boolean" ? (
                              feature.pro ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-600 mx-auto" />
                              )
                            ) : (
                              <span className="text-sm text-gray-400">
                                {feature.pro}
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {typeof feature.business === "boolean" ? (
                              feature.business ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-600 mx-auto" />
                              )
                            ) : (
                              <span className="text-sm text-gray-400">
                                {feature.business}
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {typeof feature.enterprise === "boolean" ? (
                              feature.enterprise ? (
                                <Check className="w-5 h-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="w-5 h-5 text-gray-600 mx-auto" />
                              )
                            ) : (
                              <span className="text-sm text-gray-400">
                                {feature.enterprise}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08]"
              >
                <h3 className="text-lg font-semibold text-white mb-2 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#3e8aff] mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-400 pl-7">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#3e8aff]/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#3e8aff]/20 rounded-full blur-[150px]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Start your free trial with 100 credits. No credit card required.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-colors text-lg"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/[0.15] text-white font-medium rounded-lg hover:bg-white/[0.05] transition-colors text-lg"
              >
                <Building className="w-5 h-5" />
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
