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

const plans = [
  {
    name: "Starter",
    description: "For individuals and small teams getting started",
    monthlyPrice: 29,
    yearlyPrice: 24,
    credits: "1,000",
    features: [
      "1,000 credits/month",
      "Waterfall Enrichment (15+ sources)",
      "Email Verification",
      "Phone Finder",
      "CSV Export",
      "Email Support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    description: "For growing teams that need more power",
    monthlyPrice: 99,
    yearlyPrice: 83,
    credits: "5,000",
    features: [
      "5,000 credits/month",
      "Everything in Starter",
      "Smart Columns (AI)",
      "Sales Nav Scraper",
      "Playbook Builder (5 playbooks)",
      "CRM Integrations",
      "API Access",
      "Priority Support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Business",
    description: "For teams scaling their GTM operations",
    monthlyPrice: 299,
    yearlyPrice: 249,
    credits: "20,000",
    features: [
      "20,000 credits/month",
      "Everything in Pro",
      "Unlimited Playbooks",
      "Team Workspaces",
      "Advanced Analytics",
      "Custom Integrations",
      "Dedicated CSM",
      "SLA Guarantee",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    monthlyPrice: null,
    yearlyPrice: null,
    credits: "Custom",
    features: [
      "Custom credit volume",
      "Everything in Business",
      "White-label Options",
      "On-premise Deployment",
      "Custom SLA",
      "Dedicated Support Team",
      "Security Review",
      "Custom Contracts",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const featureCategories = [
  {
    name: "Data Enrichment",
    features: [
      { name: "Waterfall Enrichment (15+ sources)", starter: true, pro: true, business: true, enterprise: true },
      { name: "Work Email Discovery", starter: true, pro: true, business: true, enterprise: true },
      { name: "Personal Email Discovery", starter: false, pro: true, business: true, enterprise: true },
      { name: "Direct Phone Numbers", starter: true, pro: true, business: true, enterprise: true },
      { name: "Mobile Phone Numbers", starter: false, pro: true, business: true, enterprise: true },
      { name: "Company Firmographics", starter: true, pro: true, business: true, enterprise: true },
      { name: "Technographics", starter: false, pro: true, business: true, enterprise: true },
      { name: "Intent Signals", starter: false, pro: false, business: true, enterprise: true },
      { name: "Social Profiles (LinkedIn, Twitter)", starter: true, pro: true, business: true, enterprise: true },
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
      { name: "Export up to 2,500 leads/search", starter: false, pro: true, business: true, enterprise: true },
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
      { name: "40+ Built-in Actions", starter: false, pro: true, business: true, enterprise: true },
      { name: "Scheduled Runs (Cron)", starter: false, pro: true, business: true, enterprise: true },
      { name: "Webhook Triggers", starter: false, pro: true, business: true, enterprise: true },
      { name: "Conditional Logic", starter: false, pro: false, business: true, enterprise: true },
      { name: "Error Handling & Retries", starter: false, pro: true, business: true, enterprise: true },
      { name: "Deduplication Actions", starter: false, pro: true, business: true, enterprise: true },
      { name: "CRM Sync Actions", starter: false, pro: true, business: true, enterprise: true },
      { name: "Custom Templates", starter: false, pro: false, business: true, enterprise: true },
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
      "One credit = one record processed. Whether you're enriching a contact, verifying an email, or running a Smart Column transformation, each record uses one credit. All 15+ data sources are included—no extra charge per source.",
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
            One Credit Per Record
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-8"
          >
            All 15+ data sources included. No hidden fees. No per-source charges.
            Just simple, predictable pricing.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 p-1 rounded-full bg-[#0a0a0a] border border-white/[0.08]"
          >
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !annual ? "bg-[#3e8aff] text-white" : "text-gray-400"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${
                annual ? "bg-[#3e8aff] text-white" : "text-gray-400"
              }`}
            >
              Annual
              <span className="px-1.5 py-0.5 rounded text-xs bg-green-500/20 text-green-500">
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`relative p-6 rounded-xl border ${
                  plan.popular
                    ? "bg-[#3e8aff]/5 border-[#3e8aff]/30"
                    : "bg-[#0a0a0a] border-white/[0.08]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#3e8aff] text-white text-xs font-medium">
                    Most Popular
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
                </div>

                <div className="mb-6">
                  {plan.monthlyPrice ? (
                    <>
                      <span className="text-4xl font-bold text-white">
                        ${annual ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-500">/month</span>
                      <div className="text-sm text-gray-500 mt-1">
                        {plan.credits} credits/month
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-white">Custom</span>
                      <div className="text-sm text-gray-500 mt-1">
                        Volume pricing available
                      </div>
                    </>
                  )}
                </div>

                <Link
                  href="#"
                  className={`block w-full py-3 text-center rounded-lg font-medium transition-colors mb-6 ${
                    plan.popular
                      ? "bg-[#3e8aff] text-white hover:bg-[#3e8aff]/90"
                      : "bg-white/[0.05] text-white hover:bg-white/[0.1]"
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
