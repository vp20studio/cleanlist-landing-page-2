"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Sparkle, Lightning, Buildings, ArrowRight } from "@phosphor-icons/react";

const plans = [
  {
    name: "Starter",
    description: "For small lists and testing",
    monthlyPrice: 0,
    yearlyPrice: 0,
    credits: "1,000",
    highlight: false,
    features: [
      { text: "Waterfall enrichment – 15+ data sources", highlighted: true },
      { text: "1-Click Enrichment on LinkedIn", highlighted: false },
      { text: "Bulk CSV List Enrichment", highlighted: false },
      { text: "Sales Navigator List Enrichment", highlighted: false },
      { text: "Triple email verification (incl. catch-alls)", highlighted: false },
      { text: "Contact Data Cleaning", highlighted: false },
      { text: "Access to All Export Integrations", highlighted: false },
      { text: "Live Company & Contact Enrichment", highlighted: false },
    ],
    cta: "Start Free",
    icon: Lightning,
  },
  {
    name: "Pro",
    description: "For growing teams",
    monthlyPrice: 49,
    yearlyPrice: 39,
    credits: "25,000",
    highlight: true,
    badge: "Most Popular",
    features: [
      { text: "Waterfall enrichment – 15+ data sources", highlighted: true },
      { text: "1-Click Enrichment on LinkedIn", highlighted: false },
      { text: "Bulk CSV List Enrichment", highlighted: false },
      { text: "Sales Navigator List Enrichment", highlighted: false },
      { text: "Triple email verification (incl. catch-alls)", highlighted: false },
      { text: "Contact Data Cleaning", highlighted: false },
      { text: "Access to All Export Integrations", highlighted: false },
      { text: "Live Company & Contact Enrichment", highlighted: false },
    ],
    cta: "Get Started",
    icon: Sparkle,
  },
  {
    name: "Enterprise",
    description: "For high-volume API users",
    monthlyPrice: 199,
    yearlyPrice: 159,
    credits: "Unlimited",
    highlight: false,
    features: [
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
    ],
    cta: "Contact Sales",
    icon: Buildings,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section
      id="pricing"
      className="relative py-24 md:py-32 bg-[#030303] overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(62, 138, 255, 0.08), transparent)",
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-sm text-[#888888] mb-6">
            <Sparkle size={16} className="text-[#3e8aff]" />
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Simple, credit-based pricing
          </h2>
          <p className="text-lg text-[#888888] max-w-2xl mx-auto">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center mb-12"
        >
          {/* Invisible spacer to balance the badge */}
          <span className="w-[72px] hidden sm:block" />

          <div className="flex items-center gap-4">
            <span
              className={`text-sm font-medium transition-colors ${!isYearly ? "text-white" : "text-[#888888]"}`}
            >
              Monthly
            </span>

            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-200 ${
                isYearly ? "bg-[#3e8aff]" : "bg-[rgba(255,255,255,0.1)]"
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-all duration-200 ease-out ${
                  isYearly ? "left-8" : "left-1"
                }`}
              />
            </button>

            <span
              className={`text-sm font-medium transition-colors ${isYearly ? "text-white" : "text-[#888888]"}`}
            >
              Yearly
            </span>
          </div>

          {/* Save badge */}
          <span className={`ml-3 text-xs px-2 py-0.5 rounded-full bg-[rgba(34,197,94,0.1)] text-[#22c55e] border border-[rgba(34,197,94,0.2)] transition-opacity duration-200 w-[72px] text-center ${isYearly ? "opacity-100" : "opacity-0"}`}>
            Save 20%
          </span>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PricingCard plan={plan} isYearly={isYearly} />
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-[#888888] mt-12"
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
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
      {/* Highlight glow effect */}
      {plan.highlight && (
        <>
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#3e8aff] to-transparent opacity-20 blur-xl pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#3e8aff] to-transparent" />
        </>
      )}

      {/* Badge */}
      {plan.badge && (
        <div className="absolute top-4 right-4">
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-[#3e8aff] to-[#2563eb] text-white">
            {plan.badge}
          </span>
        </div>
      )}

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              plan.highlight
                ? "bg-gradient-to-br from-[#3e8aff]/20 to-[#3e8aff]/5"
                : "bg-[rgba(255,255,255,0.05)]"
            }`}
          >
            <Icon
              size={20}
              className={plan.highlight ? "text-[#3e8aff]" : "text-[#888888]"}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
            <p className="text-xs text-[#888888]">{plan.description}</p>
          </div>
        </div>

        {/* Price */}
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

        {/* CTA Button */}
        <motion.a
          href="/get-started"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-medium text-sm transition-all duration-300 mb-6 ${
            plan.highlight
              ? "bg-gradient-to-r from-[#3e8aff] to-[#2563eb] text-white hover:shadow-[0_0_30px_rgba(62,138,255,0.3)]"
              : "bg-[rgba(255,255,255,0.05)] text-white border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.2)]"
          }`}
        >
          {plan.cta}
          <ArrowRight size={16} />
        </motion.a>

        {/* Features */}
        <ul className="space-y-3">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                  feature.highlighted
                    ? "bg-[rgba(62,138,255,0.15)]"
                    : plan.highlight
                    ? "bg-[rgba(62,138,255,0.1)]"
                    : "bg-[rgba(255,255,255,0.05)]"
                }`}
              >
                <Check
                  size={12}
                  className={feature.highlighted || plan.highlight ? "text-[#3e8aff]" : "text-[#888888]"}
                />
              </div>
              <span className={`text-sm ${feature.highlighted ? "text-white font-medium" : "text-[#888888]"}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
