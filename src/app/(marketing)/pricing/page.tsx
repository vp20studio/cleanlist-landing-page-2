"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  X,
  Sparkles,
  Zap,
  Building2,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { GlowCard, MagneticButton, SectionHeader } from "@/components/ui";

const plans = [
  {
    name: "Starter",
    description: "For individuals and small teams",
    monthlyPrice: 24,
    yearlyPrice: 19,
    credits: "1,000",
    highlight: false,
    icon: Zap,
    features: {
      core: ["1,000 credits/month", "Email verification", "Basic enrichment", "CSV export"],
      limits: ["1 user", "100 API calls/day", "7-day data retention"],
    },
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    description: "For growing sales teams",
    monthlyPrice: 83,
    yearlyPrice: 66,
    credits: "5,000",
    highlight: true,
    badge: "Most Popular",
    icon: Sparkles,
    features: {
      core: ["5,000 credits/month", "Email verification", "Full enrichment (25+ fields)", "LinkedIn Scraper", "CSV + API export"],
      limits: ["5 users", "1,000 API calls/day", "30-day data retention", "HubSpot integration"],
    },
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    monthlyPrice: 374,
    yearlyPrice: 299,
    credits: "25,000",
    highlight: false,
    icon: Building2,
    features: {
      core: ["25,000 credits/month", "Email verification", "Full enrichment (25+ fields)", "LinkedIn Scraper", "All export formats"],
      limits: ["Unlimited users", "Unlimited API calls", "90-day data retention", "All integrations", "Dedicated support"],
    },
    cta: "Contact Sales",
  },
];

// Comprehensive feature comparison
const featureCategories = [
  {
    name: "Verification",
    features: [
      { name: "Email syntax validation", starter: true, pro: true, enterprise: true },
      { name: "MX/DNS record check", starter: true, pro: true, enterprise: true },
      { name: "SMTP handshake verification", starter: true, pro: true, enterprise: true },
      { name: "Catch-all detection", starter: false, pro: true, enterprise: true },
      { name: "Disposable email detection", starter: true, pro: true, enterprise: true },
      { name: "Role-based email detection", starter: false, pro: true, enterprise: true },
      { name: "Real-time verification API", starter: false, pro: true, enterprise: true },
      { name: "Bulk verification (10K+)", starter: false, pro: true, enterprise: true },
    ],
  },
  {
    name: "Enrichment",
    features: [
      { name: "Full name", starter: true, pro: true, enterprise: true },
      { name: "Job title", starter: true, pro: true, enterprise: true },
      { name: "Company name", starter: true, pro: true, enterprise: true },
      { name: "LinkedIn profile", starter: false, pro: true, enterprise: true },
      { name: "Company size", starter: false, pro: true, enterprise: true },
      { name: "Company revenue", starter: false, pro: true, enterprise: true },
      { name: "Industry classification", starter: false, pro: true, enterprise: true },
      { name: "Location data", starter: false, pro: true, enterprise: true },
      { name: "Phone numbers", starter: false, pro: true, enterprise: true },
      { name: "Technographic data", starter: false, pro: false, enterprise: true },
      { name: "Intent signals", starter: false, pro: false, enterprise: true },
      { name: "Waterfall (15+ sources)", starter: false, pro: true, enterprise: true },
    ],
  },
  {
    name: "LinkedIn Scraper",
    features: [
      { name: "Chrome Extension", starter: false, pro: true, enterprise: true },
      { name: "Sales Navigator export", starter: false, pro: true, enterprise: true },
      { name: "Bulk export (2,500/search)", starter: false, pro: true, enterprise: true },
      { name: "Auto-enrichment on export", starter: false, pro: true, enterprise: true },
      { name: "Saved leads export", starter: false, pro: true, enterprise: true },
      { name: "Account list export", starter: false, pro: false, enterprise: true },
    ],
  },
  {
    name: "Integrations",
    features: [
      { name: "CSV export", starter: true, pro: true, enterprise: true },
      { name: "JSON/API export", starter: false, pro: true, enterprise: true },
      { name: "HubSpot", starter: false, pro: true, enterprise: true },
      { name: "Salesforce", starter: false, pro: false, enterprise: true },
      { name: "Pipedrive", starter: false, pro: true, enterprise: true },
      { name: "Outreach", starter: false, pro: false, enterprise: true },
      { name: "Zapier", starter: false, pro: true, enterprise: true },
      { name: "Webhooks", starter: false, pro: true, enterprise: true },
      { name: "Custom integrations", starter: false, pro: false, enterprise: true },
    ],
  },
  {
    name: "API & Developer",
    features: [
      { name: "REST API access", starter: false, pro: true, enterprise: true },
      { name: "API rate limit", starter: "100/day", pro: "1K/day", enterprise: "Unlimited" },
      { name: "Bulk processing API", starter: false, pro: true, enterprise: true },
      { name: "Webhook delivery", starter: false, pro: true, enterprise: true },
      { name: "Custom JSON schema", starter: false, pro: false, enterprise: true },
      { name: "Dedicated endpoints", starter: false, pro: false, enterprise: true },
      { name: "Priority queue", starter: false, pro: false, enterprise: true },
    ],
  },
  {
    name: "Security & Compliance",
    features: [
      { name: "SOC 2 Type II", starter: true, pro: true, enterprise: true },
      { name: "GDPR compliant", starter: true, pro: true, enterprise: true },
      { name: "Data encryption (AES-256)", starter: true, pro: true, enterprise: true },
      { name: "SSO/SAML", starter: false, pro: false, enterprise: true },
      { name: "IP allowlisting", starter: false, pro: false, enterprise: true },
      { name: "Audit logs", starter: false, pro: false, enterprise: true },
      { name: "Custom DPA", starter: false, pro: false, enterprise: true },
    ],
  },
  {
    name: "Support",
    features: [
      { name: "Email support", starter: true, pro: true, enterprise: true },
      { name: "Priority support", starter: false, pro: true, enterprise: true },
      { name: "Dedicated CSM", starter: false, pro: false, enterprise: true },
      { name: "SLA guarantee", starter: false, pro: false, enterprise: true },
      { name: "Onboarding call", starter: false, pro: true, enterprise: true },
      { name: "Quarterly reviews", starter: false, pro: false, enterprise: true },
    ],
  },
];

const faqs = [
  {
    question: "How do credits work?",
    answer: "1 credit = 1 email verification or enrichment. Credits refresh monthly and don't roll over. Unused credits expire at the end of each billing cycle.",
  },
  {
    question: "What's included in the Waterfall?",
    answer: "Our Waterfall queries 15+ data providers (Apollo, RocketReach, Clearbit, etc.) in priority order. You only pay for successful matches, and we automatically use the most accurate source.",
  },
  {
    question: "Can I upgrade or downgrade anytime?",
    answer: "Yes! You can change your plan at any time. Upgrades take effect immediately with prorated billing. Downgrades take effect at the next billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, all plans include a 14-day free trial with 100 credits to test. No credit card required to start.",
  },
  {
    question: "Do you offer volume discounts?",
    answer: "For teams needing more than 25,000 credits/month, we offer custom Enterprise plans with volume discounts. Contact sales for a quote.",
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <main className="min-h-screen bg-[#030303] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(62, 138, 255, 0.15), transparent)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Simple, credit-based{" "}
              <span className="gradient-text-blue">pricing</span>
            </h1>
            <p className="text-lg md:text-xl text-[#888888]">
              Pay only for what you use. 1 credit = 1 verified & enriched
              email. No hidden fees.
            </p>
          </motion.div>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <span
              className={`text-sm font-medium transition-colors ${!isYearly ? "text-white" : "text-[#888888]"}`}
            >
              Monthly
            </span>

            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-8 rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.1)] p-1 transition-colors hover:border-[rgba(255,255,255,0.2)]"
            >
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className={`w-6 h-6 rounded-full bg-gradient-to-r from-[#3e8aff] to-[#2563eb] shadow-lg ${
                  isYearly ? "ml-auto" : ""
                }`}
              />
            </button>

            <span
              className={`text-sm font-medium transition-colors flex items-center gap-2 ${isYearly ? "text-white" : "text-[#888888]"}`}
            >
              Yearly
              <span className="text-xs px-2 py-0.5 rounded-full bg-[rgba(34,197,94,0.1)] text-[#22c55e] border border-[rgba(34,197,94,0.2)]">
                Save 20%
              </span>
            </span>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PricingCard plan={plan} isYearly={isYearly} />
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-sm text-[#888888] mt-8"
          >
            All plans include a 14-day free trial with 100 credits. No credit
            card required.
          </motion.p>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Full Comparison"
            badgeIcon={<Sparkles className="w-4 h-4 text-[#3e8aff]" />}
            title="Compare Every Feature"
            highlight="Every Feature"
            description="See exactly what's included in each plan."
          />

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              {/* Table Header */}
              <thead>
                <tr className="border-b border-[rgba(255,255,255,0.08)]">
                  <th className="text-left py-4 px-4 text-sm font-medium text-[#888888] w-1/3">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-[#888888]">
                    Starter
                    <span className="block text-xs text-[#555] mt-1">
                      ${isYearly ? 19 : 24}/mo
                    </span>
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-[#3e8aff]">
                    Pro
                    <span className="block text-xs text-[#3e8aff]/60 mt-1">
                      ${isYearly ? 66 : 83}/mo
                    </span>
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-[#888888]">
                    Enterprise
                    <span className="block text-xs text-[#555] mt-1">
                      ${isYearly ? 299 : 374}/mo
                    </span>
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {featureCategories.map((category) => (
                  <>
                    {/* Category Header */}
                    <tr key={category.name} className="bg-[rgba(255,255,255,0.02)]">
                      <td
                        colSpan={4}
                        className="py-3 px-4 text-sm font-semibold text-white"
                      >
                        {category.name}
                      </td>
                    </tr>

                    {/* Features */}
                    {category.features.map((feature, i) => (
                      <tr
                        key={feature.name}
                        className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.02)] transition-colors"
                      >
                        <td className="py-3 px-4 text-sm text-[#888888]">
                          {feature.name}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <FeatureValue value={feature.starter} />
                        </td>
                        <td className="py-3 px-4 text-center bg-[rgba(62,138,255,0.02)]">
                          <FeatureValue value={feature.pro} highlight />
                        </td>
                        <td className="py-3 px-4 text-center">
                          <FeatureValue value={feature.enterprise} />
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

      {/* FAQ Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(62, 138, 255, 0.05), transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="FAQ"
            badgeIcon={<HelpCircle className="w-4 h-4 text-[#3e8aff]" />}
            title="Common Questions"
            highlight="Questions"
          />

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlowCard>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-[#888888]">{faq.answer}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(62, 138, 255, 0.15), transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to clean your data?
            </h2>
            <p className="text-lg text-[#888888] mb-8">
              Start your 14-day free trial. 100 credits included.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton href="/get-started" size="lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </MagneticButton>
              <MagneticButton href="/contact" variant="secondary" size="lg">
                Talk to Sales
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function PricingCard({
  plan,
  isYearly,
}: {
  plan: (typeof plans)[0];
  isYearly: boolean;
}) {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const Icon = plan.icon;

  return (
    <div
      className={`group relative h-full rounded-2xl border transition-all duration-500 ${
        plan.highlight
          ? "border-[rgba(62,138,255,0.4)] bg-gradient-to-b from-[rgba(62,138,255,0.08)] to-[rgba(10,10,10,0.8)]"
          : "border-[rgba(255,255,255,0.08)] bg-[rgba(10,10,10,0.6)] hover:border-[rgba(255,255,255,0.15)]"
      } backdrop-blur-xl p-6 lg:p-8 overflow-hidden`}
    >
      {plan.highlight && (
        <>
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#3e8aff] to-transparent opacity-20 blur-xl pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#3e8aff] to-transparent" />
        </>
      )}

      {plan.badge && (
        <div className="absolute top-4 right-4">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-[#3e8aff] to-[#2563eb] text-white">
            {plan.badge}
          </span>
        </div>
      )}

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              plan.highlight
                ? "bg-gradient-to-br from-[#3e8aff]/20 to-[#3e8aff]/5"
                : "bg-[rgba(255,255,255,0.05)]"
            }`}
          >
            <Icon
              className={`w-5 h-5 ${plan.highlight ? "text-[#3e8aff]" : "text-[#888888]"}`}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
            <p className="text-xs text-[#888888]">{plan.description}</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={price}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="text-4xl lg:text-5xl font-bold text-white"
              >
                ${price}
              </motion.span>
            </AnimatePresence>
            <span className="text-[#888888]">/mo</span>
          </div>
          <p className="text-sm text-[#888888] mt-1">
            {plan.credits} credits/month
          </p>
        </div>

        <MagneticButton
          href="/get-started"
          variant={plan.highlight ? "primary" : "secondary"}
          size="md"
          className="w-full justify-center mb-6"
        >
          {plan.cta}
          <ArrowRight className="w-4 h-4" />
        </MagneticButton>

        <div className="space-y-4">
          <div>
            <p className="text-xs text-[#888888] uppercase tracking-wider mb-2">
              Core Features
            </p>
            <ul className="space-y-2">
              {plan.features.core.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check
                    className={`w-4 h-4 ${plan.highlight ? "text-[#3e8aff]" : "text-[#888888]"}`}
                  />
                  <span className="text-sm text-[#888888]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs text-[#888888] uppercase tracking-wider mb-2">
              Limits & Extras
            </p>
            <ul className="space-y-2">
              {plan.features.limits.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check
                    className={`w-4 h-4 ${plan.highlight ? "text-[#3e8aff]" : "text-[#888888]"}`}
                  />
                  <span className="text-sm text-[#888888]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureValue({
  value,
  highlight = false,
}: {
  value: boolean | string;
  highlight?: boolean;
}) {
  if (typeof value === "string") {
    return (
      <span
        className={`text-sm ${highlight ? "text-white font-medium" : "text-[#888888]"}`}
      >
        {value}
      </span>
    );
  }

  if (value) {
    return (
      <div className="flex justify-center">
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center ${
            highlight
              ? "bg-[rgba(62,138,255,0.1)] shadow-[0_0_10px_rgba(62,138,255,0.3)]"
              : "bg-[rgba(255,255,255,0.05)]"
          }`}
        >
          <Check
            className={`w-3.5 h-3.5 ${highlight ? "text-[#3e8aff]" : "text-[#888888]"}`}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="w-6 h-6 rounded-full bg-[rgba(239,68,68,0.1)] flex items-center justify-center">
        <X className="w-3.5 h-3.5 text-[#ef4444]/50" />
      </div>
    </div>
  );
}
