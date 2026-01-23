"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Check,
  X,
  ArrowRight,
  Lightning,
  Buildings,
  Question,
  CaretDown,
  CaretUp,
} from "@/components/icons";
import { useTheme } from "@/context/ThemeContext";

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
      { name: "Multi-Provider Lead Enrichment", free: true, starter: true, pro: true, enterprise: true },
      { name: "Email Enrichment (1 credit)", free: true, starter: true, pro: true, enterprise: true },
      { name: "Full Contact Enrichment (10 credits)", free: true, starter: true, pro: true, enterprise: true },
      { name: "Direct Phone Numbers", free: true, starter: true, pro: true, enterprise: true },
      { name: "Mobile Phone Numbers", free: true, starter: true, pro: true, enterprise: true },
      { name: "Company Firmographics", free: true, starter: true, pro: true, enterprise: true },
      { name: "98% Accuracy Guarantee", free: true, starter: true, pro: true, enterprise: true },
      { name: "LinkedIn Profile URLs", free: true, starter: true, pro: true, enterprise: true },
      { name: "Custom Field Mapping", free: true, starter: true, pro: true, enterprise: true },
    ],
  },
  {
    name: "Email Verification",
    features: [
      { name: "Syntax Validation", free: true, starter: true, pro: true, enterprise: true },
      { name: "MX/DNS Lookup", free: true, starter: true, pro: true, enterprise: true },
      { name: "SMTP Handshake Verification", free: true, starter: true, pro: true, enterprise: true },
      { name: "Catch-all Detection", free: true, starter: true, pro: true, enterprise: true },
      { name: "Disposable Email Detection", free: true, starter: true, pro: true, enterprise: true },
      { name: "Role-based Email Flagging", free: true, starter: true, pro: true, enterprise: true },
      { name: "Spam Trap Detection", free: true, starter: true, pro: true, enterprise: true },
      { name: "Deliverability Scoring", free: true, starter: true, pro: true, enterprise: true },
      { name: "Bulk Verification (10K+/batch)", free: true, starter: true, pro: true, enterprise: true },
      { name: "Real-time API Verification", free: true, starter: true, pro: true, enterprise: true },
    ],
  },
  {
    name: "Smart Columns (AI)",
    features: [
      { name: "Job Title Normalization", free: true, starter: true, pro: true, enterprise: true },
      { name: "Company Name Standardization", free: true, starter: true, pro: true, enterprise: true },
      { name: "Name Parsing (First/Last)", free: true, starter: true, pro: true, enterprise: true },
      { name: "Phone Number Formatting", free: true, starter: true, pro: true, enterprise: true },
      { name: "Address Parsing", free: true, starter: true, pro: true, enterprise: true },
      { name: "Custom AI Prompts", free: true, starter: true, pro: true, enterprise: true },
      { name: "Seniority Level Classification", free: true, starter: true, pro: true, enterprise: true },
      { name: "Department Mapping", free: true, starter: true, pro: true, enterprise: true },
      { name: "Industry Categorization", free: true, starter: true, pro: true, enterprise: true },
      { name: "GPT-4 Powered Transforms", free: true, starter: true, pro: true, enterprise: true },
    ],
  },
  {
    name: "Sales Navigator Scraper",
    features: [
      { name: "Chrome Extension", free: true, starter: true, pro: true, enterprise: true },
      { name: "Bulk Lead Export", free: true, starter: true, pro: true, enterprise: true },
      { name: "Auto-enrichment on Export", free: true, starter: true, pro: true, enterprise: true },
      { name: "Preserve Sales Nav Filters", free: true, starter: true, pro: true, enterprise: true },
      { name: "Safe Rate Limiting", free: true, starter: true, pro: true, enterprise: true },
      { name: "Background Processing", free: true, starter: true, pro: true, enterprise: true },
      { name: "Direct CRM Sync", free: true, starter: true, pro: true, enterprise: true },
      { name: "Team Sharing", free: true, starter: true, pro: true, enterprise: true },
    ],
  },
  {
    name: "Playbook Builder",
    features: [
      { name: "Visual Workflow Builder", free: true, starter: true, pro: true, enterprise: true },
      { name: "Number of Playbooks", free: "3", starter: "3", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "25+ Step Types (10 categories)", free: true, starter: true, pro: true, enterprise: true },
      { name: "Scheduled Runs (Cron)", free: true, starter: true, pro: true, enterprise: true },
      { name: "Webhook Triggers", free: true, starter: true, pro: true, enterprise: true },
      { name: "Conditional Logic & Branching", free: true, starter: true, pro: true, enterprise: true },
      { name: "Error Handling & Retries", free: true, starter: true, pro: true, enterprise: true },
      { name: "Deduplication Actions", free: true, starter: true, pro: true, enterprise: true },
      { name: "CRM Sync Actions", free: true, starter: true, pro: true, enterprise: true },
      { name: "ICP Scoring Step", free: true, starter: true, pro: true, enterprise: true },
    ],
  },
  {
    name: "Integrations",
    features: [
      { name: "CSV Import/Export", free: true, starter: true, pro: true, enterprise: true },
      { name: "Google Sheets", free: true, starter: true, pro: true, enterprise: true },
      { name: "Salesforce", free: true, starter: true, pro: true, enterprise: true },
      { name: "HubSpot", free: true, starter: true, pro: true, enterprise: true },
      { name: "Pipedrive", free: true, starter: true, pro: true, enterprise: true },
      { name: "Outreach", free: true, starter: true, pro: true, enterprise: true },
      { name: "Salesloft", free: true, starter: true, pro: true, enterprise: true },
      { name: "Zapier/Make/n8n", free: true, starter: true, pro: true, enterprise: true },
      { name: "REST API", free: true, starter: true, pro: true, enterprise: true },
      { name: "Webhooks", free: true, starter: true, pro: true, enterprise: true },
      { name: "Custom Integrations", free: true, starter: true, pro: true, enterprise: true },
    ],
  },
  {
    name: "Team & Admin",
    features: [
      { name: "Team Members", free: "1", starter: "1", pro: "10", enterprise: "Unlimited" },
      { name: "Workspaces", free: "1", starter: "1", pro: "3", enterprise: "Unlimited" },
      { name: "Role-based Permissions", free: true, starter: true, pro: true, enterprise: true },
      { name: "SSO (SAML)", free: false, starter: false, pro: false, enterprise: true },
      { name: "Audit Logs", free: true, starter: true, pro: true, enterprise: true },
      { name: "Usage Analytics", free: true, starter: true, pro: true, enterprise: true },
      { name: "Credit Allocation by Team", free: true, starter: true, pro: true, enterprise: true },
      { name: "Admin Dashboard", free: true, starter: true, pro: true, enterprise: true },
    ],
  },
  {
    name: "Support & SLA",
    features: [
      { name: "Email Support", free: true, starter: true, pro: true, enterprise: true },
      { name: "Priority Support", free: true, starter: true, pro: true, enterprise: true },
      { name: "Dedicated CSM", free: false, starter: false, pro: true, enterprise: true },
      { name: "Slack Channel", free: false, starter: false, pro: true, enterprise: true },
      { name: "Phone Support", free: false, starter: false, pro: false, enterprise: true },
      { name: "Uptime SLA", free: "99%", starter: "99%", pro: "99.9%", enterprise: "99.99%" },
      { name: "Response Time SLA", free: "48hrs", starter: "48hrs", pro: "12hrs", enterprise: "1hr" },
      { name: "Onboarding Session", free: true, starter: true, pro: true, enterprise: true },
      { name: "Quarterly Business Reviews", free: false, starter: false, pro: true, enterprise: true },
    ],
  },
  {
    name: "Security & Compliance",
    features: [
      { name: "SOC 2 Type II", free: true, starter: true, pro: true, enterprise: true },
      { name: "GDPR Compliant", free: true, starter: true, pro: true, enterprise: true },
      { name: "CCPA Compliant", free: true, starter: true, pro: true, enterprise: true },
      { name: "256-bit Encryption", free: true, starter: true, pro: true, enterprise: true },
      { name: "Data Retention Controls", free: true, starter: true, pro: true, enterprise: true },
      { name: "IP Allowlisting", free: false, starter: false, pro: true, enterprise: true },
      { name: "Custom DPA", free: false, starter: false, pro: false, enterprise: true },
      { name: "Security Review", free: false, starter: false, pro: false, enterprise: true },
      { name: "On-premise Option", free: false, starter: false, pro: false, enterprise: true },
    ],
  },
];

const faqs = [
  {
    question: "How does credit-based pricing work?",
    answer:
      "Cleanlist uses a simple credit system: 1 credit = 1 email enrichment/verification, and 11 credits = 1 full contact enrichment (email + phone). All plans include access to our full feature set—waterfall enrichment, email verification, Smart Columns AI, Sales Navigator scraper, Playbook Builder, and all CRM integrations. You only pay for the data you enrich.",
  },
  {
    question: "What's the difference between Free and Starter plans?",
    answer:
      "Both Free and Starter include the exact same features and functionality—there are no feature restrictions. The only difference is the number of credits: Free includes 30 credits per month (30 emails or 3 phones), while Starter tiers range from 500-1,500 credits. If you need more volume, upgrade to Starter. If you just want to test Cleanlist, Free gives you full access.",
  },
  {
    question: "Do I get waterfall enrichment on all plans?",
    answer:
      "Yes! Every plan, including Free, gets access to our waterfall enrichment engine. We query 15+ data providers (Wiza, Findymail, Prospeo, Lusha, and more) in parallel to find the best data for each contact. You get 98% accuracy guaranteed, regardless of your plan.",
  },
  {
    question: "Can I use all integrations on every plan?",
    answer:
      "Absolutely. All plans include native integrations with Salesforce, HubSpot, Pipedrive, Outreach, Salesloft, and 10+ other platforms. You also get full API and webhook access, plus CSV/Google Sheets import/export. No integration is locked behind a paywall.",
  },
  {
    question: "How does the Playbook Builder work?",
    answer:
      "The Playbook Builder is our visual automation engine for RevOps workflows. Free and Starter plans get 3 playbooks, while Pro and Enterprise get unlimited. All plans can use 25+ step types including enrichment, verification, deduplication, CRM sync, ICP scoring, and conditional logic. Schedule playbooks to run on cron, trigger via webhook, or run manually.",
  },
  {
    question: "What if I run out of credits mid-month?",
    answer:
      "You can upgrade to a higher tier instantly or purchase additional credit packs. We'll notify you when you're running low (at 80% and 90% usage). Unused credits roll over for up to 3 months, so you never lose what you've paid for.",
  },
  {
    question: "Is there a free trial or setup fee?",
    answer:
      "There are no setup fees, contracts, or credit card requirements to start. The Free plan gives you 30 credits per month forever. If you upgrade to a paid plan, you can cancel anytime—we bill monthly or yearly (save 17% with annual billing).",
  },
  {
    question: "What makes Cleanlist different from Apollo or ZoomInfo?",
    answer:
      "Unlike database providers, Cleanlist doesn't sell you a fixed list. We use waterfall enrichment to query 15+ providers in real-time, giving you fresher data with higher accuracy (98% guaranteed). You also get Smart Columns AI for data normalization, Playbook Builder for automation, and full CRM integration—all in one platform. No data decay, no stale contacts.",
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
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const toggleCategory = (name: string) => {
    setExpandedCategories((prev) =>
      prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name]
    );
  };

  const toggleFaq = (index: number) => {
    setExpandedFaqs((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-16 md:pt-20 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3e8aff]/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-6"
          >
            <Lightning className="w-4 h-4" />
            Simple, Transparent Pricing
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
          >
            Simple Credit Pricing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 ${isDark ? "text-gray-400" : "text-gray-600"}`}
          >
            1 credit for email enrichment, 11 credits for full contact enrichment (email + phone).
            No hidden fees. 98% accuracy guarantee.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="flex items-center gap-3">
              <span className={`text-sm font-medium transition-colors ${!annual ? (isDark ? "text-white" : "text-gray-900") : "text-gray-500"}`}>
                Monthly
              </span>
              <button
                onClick={() => setAnnual(!annual)}
                className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
                  annual ? "bg-[#3e8aff]" : (isDark ? "bg-white/[0.1]" : "bg-gray-300")
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all duration-200 ease-out ${
                    annual ? "left-8" : "left-1"
                  }`}
                />
              </button>
              <span className={`text-sm font-medium transition-colors ${annual ? (isDark ? "text-white" : "text-gray-900") : "text-gray-500"}`}>
                Yearly
              </span>
            </div>
            <span className={`absolute right-0 top-1/2 -translate-y-1/2 px-2 py-1 text-xs font-medium text-green-400 bg-green-500/10 rounded-full transition-opacity duration-200 ${annual ? "opacity-100" : "opacity-0"}`}>
              Save 17%
            </span>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Free Tier */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-5 md:p-6 rounded-xl border backdrop-blur-xl transition-colors ${isDark ? "bg-[#030303] border-white/[0.08]" : "bg-white/70 border-black/[0.08]"}`}
            >
              <div className="mb-4">
                <h3 className={`text-xl md:text-2xl lg:text-3xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Free</h3>
                <div className="flex gap-1 mt-2">
                  <span
                    className="px-3 py-1 text-xs rounded-md bg-[#3e8aff] text-white"
                  >
                    I
                  </span>
                </div>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`p-5 md:p-6 rounded-xl border backdrop-blur-xl transition-colors ${isDark ? "bg-[#030303] border-white/[0.08]" : "bg-white/70 border-black/[0.08]"}`}
            >
              <div className="mb-4">
                <h3 className={`text-xl md:text-2xl lg:text-3xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Starter</h3>
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
                  {annual ? pricingTiers.starter[starterTier].yearlyPrice : pricingTiers.starter[starterTier].monthlyPrice}
                </span>
                <span className="text-gray-500">/month</span>
                {annual && (
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
                Get Started for Free
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative p-5 md:p-6 rounded-xl bg-[#3e8aff]/5 border border-[#3e8aff]/30"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#3e8aff] text-white text-xs font-medium">
                Most Popular
              </div>
              <div className="mb-4">
                <h3 className={`text-xl md:text-2xl lg:text-3xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Pro</h3>
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
                  {annual ? pricingTiers.pro[proTier].yearlyPrice : pricingTiers.pro[proTier].monthlyPrice}
                </span>
                <span className="text-gray-500">/month</span>
                {annual && (
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
                Get Started for Free
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`p-5 md:p-6 rounded-xl border backdrop-blur-xl transition-colors ${isDark ? "bg-[#030303] border-white/[0.08]" : "bg-white/70 border-black/[0.08]"}`}
            >
              <div className="mb-4">
                <h3 className={`text-xl md:text-2xl lg:text-3xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Enterprise</h3>
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
                  {annual ? pricingTiers.enterprise[enterpriseTier].yearlyPrice : pricingTiers.enterprise[enterpriseTier].monthlyPrice}
                </span>
                <span className="text-gray-500">/month</span>
                {annual && (
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
                Get Started for Free
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
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
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

      {/* Feature Comparison Table */}
      <section className={`py-16 md:py-24 transition-colors ${isDark ? "bg-[#030303]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              Complete Feature Comparison
            </h2>
            <p className={`text-lg md:text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Every capability across all plans. No hidden features.
            </p>
          </motion.div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              {/* Header */}
              <thead>
                <tr className={`border-b ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>
                  <th className={`text-left py-4 px-4 font-medium w-1/3 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    Feature
                  </th>
                  <th className={`text-center py-4 px-4 font-medium w-1/6 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Free
                  </th>
                  <th className={`text-center py-4 px-4 font-medium w-1/6 bg-[#3e8aff]/5 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Starter
                  </th>
                  <th className={`text-center py-4 px-4 font-medium w-1/6 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Pro
                  </th>
                  <th className={`text-center py-4 px-4 font-medium w-1/6 ${isDark ? "text-white" : "text-gray-900"}`}>
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
                      className={`border-b cursor-pointer transition-colors ${isDark ? "border-white/[0.08] bg-[#030303] hover:bg-[#030303]" : "border-black/[0.08] bg-gray-100 hover:bg-gray-200"}`}
                      onClick={() => toggleCategory(category.name)}
                    >
                      <td
                        colSpan={5}
                        className="py-4 px-4"
                      >
                        <div className={`flex items-center gap-2 font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                          {expandedCategories.includes(category.name) ? (
                            <CaretUp className="w-4 h-4" />
                          ) : (
                            <CaretDown className="w-4 h-4" />
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
                          className={`border-b transition-colors ${isDark ? "border-white/[0.05] hover:bg-white/[0.02]" : "border-gray-100 hover:bg-[#F8F9FA]"}`}
                        >
                          <td className={`py-3 px-4 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                            {feature.name}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {typeof feature.free === "boolean" ? (
                              feature.free ? (
                                <Check className="w-4 h-4 text-green-500 mx-auto" />
                              ) : (
                                <X className={`w-4 h-4 mx-auto ${isDark ? "text-gray-600" : "text-gray-400"}`} />
                              )
                            ) : (
                              <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                {feature.free}
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-center bg-[#3e8aff]/5">
                            {typeof feature.starter === "boolean" ? (
                              feature.starter ? (
                                <Check className="w-4 h-4 text-green-500 mx-auto" />
                              ) : (
                                <X className={`w-4 h-4 mx-auto ${isDark ? "text-gray-600" : "text-gray-400"}`} />
                              )
                            ) : (
                              <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                {feature.starter}
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {typeof feature.pro === "boolean" ? (
                              feature.pro ? (
                                <Check className="w-4 h-4 text-green-500 mx-auto" />
                              ) : (
                                <X className={`w-4 h-4 mx-auto ${isDark ? "text-gray-600" : "text-gray-400"}`} />
                              )
                            ) : (
                              <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                {feature.pro}
                              </span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {typeof feature.enterprise === "boolean" ? (
                              feature.enterprise ? (
                                <Check className="w-4 h-4 text-green-500 mx-auto" />
                              ) : (
                                <X className={`w-4 h-4 mx-auto ${isDark ? "text-gray-600" : "text-gray-400"}`} />
                              )
                            ) : (
                              <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
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
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
              FAQs
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`rounded-xl border backdrop-blur-xl transition-all overflow-hidden ${isDark ? "bg-[#030303] border-white/[0.08]" : "bg-white/70 border-black/[0.08]"}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <h3 className={`text-base md:text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                    {faq.question}
                  </h3>
                  {expandedFaqs.includes(index) ? (
                    <CaretUp className={`w-5 h-5 flex-shrink-0 ${isDark ? "text-gray-400" : "text-gray-600"}`} />
                  ) : (
                    <CaretDown className={`w-5 h-5 flex-shrink-0 ${isDark ? "text-gray-400" : "text-gray-600"}`} />
                  )}
                </button>
                {expandedFaqs.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-5 md:px-6 pb-5 md:pb-6"
                  >
                    <p className={`text-sm md:text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}>{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
