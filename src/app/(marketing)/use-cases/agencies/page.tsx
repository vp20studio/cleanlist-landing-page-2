"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Buildings,
  Users,
  CurrencyDollar,
  Check,
  ChartBar,
  Shield,
  Lightning,
  Gear,
  CreditCard,
  File,
  Globe,
  Lock,
  StackSimple,
} from "@phosphor-icons/react";
import { TechnicalGrid, GlowCard, GlowIcon } from "@/components/ui";
import { useTheme } from "@/context/ThemeContext";

export default function AgenciesPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-green-500/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-500 mb-6"
            >
              <GlowIcon icon={<Buildings />} size="xs" color="green" variant="ghost" />
              For Agencies
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`text-5xl md:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"} leading-[1.1] mb-6`}
            >
              White-Label Data{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">
                for Your Clients
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} mb-8`}
            >
              Offer data services to your clients without building infrastructure.
              Bulk processing, team workspaces, and margin controls built for agencies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-500/90 transition-colors"
              >
                Apply for Agency Program
                <ArrowRight />
              </Link>
              <Link
                href="/pricing"
                className={`inline-flex items-center gap-2 px-6 py-3 border ${isDark ? "border-white/[0.15] text-white hover:bg-white/[0.05]" : "border-gray-300 text-gray-700 hover:bg-gray-100"} font-medium rounded-lg transition-colors`}
              >
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={`py-12 border-y ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"} ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <TechnicalGrid
            columns={4}
            blocks={[
              {
                icon: <CurrencyDollar />,
                label: "Margin",
                value: "50%+",
                subValue: "Typical markup",
                color: "green",
              },
              {
                icon: <Users />,
                label: "Client Limit",
                value: "Unlimited",
                subValue: "Workspaces",
                color: "blue",
              },
              {
                icon: <Lightning />,
                label: "Processing",
                value: "10M+",
                subValue: "Records/month",
                color: "purple",
              },
              {
                icon: <Shield />,
                label: "White-Label",
                value: "100%",
                subValue: "Your branding",
                highlight: true,
              },
            ]}
          />
        </div>
      </section>

      {/* Agency Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Built for Agency Scale
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Everything you need to offer data services to your clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users />,
                title: "Client Workspaces",
                description:
                  "Separate workspaces for each client with their own users, credits, and data.",
              },
              {
                icon: <Lock />,
                title: "White-Label Ready",
                description:
                  "Remove Cleanlist branding. Present data services as your own offering.",
              },
              {
                icon: <CurrencyDollar />,
                title: "Margin Controls",
                description:
                  "Set your own pricing for clients. Buy credits wholesale, sell retail.",
              },
              {
                icon: <CreditCard />,
                title: "Flexible Billing",
                description:
                  "Bill clients directly or manage all credits centrally. Your choice.",
              },
              {
                icon: <ChartBar />,
                title: "Usage Analytics",
                description:
                  "Track usage by client, project, and user. Detailed reporting for invoicing.",
              },
              {
                icon: <StackSimple />,
                title: "Bulk Processing",
                description:
                  "Process millions of records per month. Volume discounts available.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard className="h-full p-6" glowColor="#22c55e">
                  <GlowIcon icon={feature.icon} size="lg" color="green" variant="glow" className="mb-4" />
                  <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>{feature.title}</h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>{feature.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Agencies Use Cleanlist */}
      <section className={`py-24 ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Agency Use Cases
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Lead Generation Agencies",
                description:
                  "Offer verified lead lists as a service. Use Cleanlist to source, enrich, and verify leads at scale.",
                services: [
                  "Prospect list building",
                  "Lead verification",
                  "Data enrichment",
                  "CRM integration",
                ],
              },
              {
                title: "Marketing Agencies",
                description:
                  "Clean and enrich client databases for better campaign targeting and deliverability.",
                services: [
                  "Email list cleaning",
                  "Database enrichment",
                  "Audience segmentation",
                  "GDPR compliance",
                ],
              },
              {
                title: "Sales Consulting",
                description:
                  "Help clients build outbound programs with verified contact data and enriched accounts.",
                services: [
                  "ICP development",
                  "Account mapping",
                  "Contact discovery",
                  "Data hygiene",
                ],
              },
              {
                title: "RevOps Consulting",
                description:
                  "Implement data governance and automation for your clients using Playbook Builder.",
                services: [
                  "CRM cleanup",
                  "Deduplication",
                  "Workflow automation",
                  "Data quality monitoring",
                ],
              },
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}
              >
                <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>{useCase.title}</h3>
                <p className={`${isDark ? "text-gray-400" : "text-gray-600"} mb-4`}>{useCase.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {useCase.services.map((service) => (
                    <div key={service} className="flex items-center gap-2 text-sm text-gray-500">
                      <Check className="text-green-500" />
                      {service}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agency Pricing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Agency Pricing
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
              Volume discounts and flexible terms for agencies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: "Agency Starter",
                credits: "50,000",
                price: "$199",
                pricePerCredit: "$0.004",
                features: [
                  "5 client workspaces",
                  "White-label exports",
                  "Priority support",
                  "Usage analytics",
                ],
              },
              {
                tier: "Agency Growth",
                credits: "250,000",
                price: "$749",
                pricePerCredit: "$0.003",
                popular: true,
                features: [
                  "Unlimited workspaces",
                  "Full white-label",
                  "Dedicated CSM",
                  "API access",
                  "Custom contracts",
                ],
              },
              {
                tier: "Agency Enterprise",
                credits: "1,000,000+",
                price: "Custom",
                pricePerCredit: "Volume pricing",
                features: [
                  "Everything in Growth",
                  "SLA guarantee",
                  "Custom integrations",
                  "On-prem option",
                  "Revenue share model",
                ],
              },
            ].map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl border ${
                  tier.popular
                    ? "bg-green-500/5 border-green-500/30"
                    : `${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`
                }`}
              >
                {tier.popular && (
                  <div className="text-xs font-medium text-green-500 mb-2">Most Popular</div>
                )}
                <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"} mb-1`}>{tier.tier}</h3>
                <div className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-1`}>{tier.price}</div>
                <div className="text-sm text-gray-500 mb-4">
                  {tier.credits} credits • {tier.pricePerCredit}/credit
                </div>
                <div className="space-y-2 mb-6">
                  {tier.features.map((feature) => (
                    <div key={feature} className={`flex items-center gap-2 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      <Check className="text-green-500" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Link
                  href="#"
                  className={`block w-full py-2.5 text-center rounded-lg font-medium transition-colors ${
                    tier.popular
                      ? "bg-green-500 text-white hover:bg-green-500/90"
                      : `${isDark ? "bg-white/[0.05] text-white hover:bg-white/[0.1]" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`
                  }`}
                >
                  {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className={`py-24 ${isDark ? "bg-[#080808]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <GlowIcon icon={<Shield />} size="xl" color="green" variant="glow" className="mx-auto mb-6" />
            <h2 className={`text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
              Enterprise-Grade Security
            </h2>
            <p className={`${isDark ? "text-gray-400" : "text-gray-600"} mb-8`}>
              Your clients&apos; data is protected with the same security standards as Fortune 500 companies.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "SOC 2 Type II",
                "GDPR Compliant",
                "CCPA Compliant",
                "256-bit Encryption",
              ].map((cert) => (
                <div
                  key={cert}
                  className={`px-4 py-2 rounded-lg ${isDark ? "bg-[#0a0a0a]" : "bg-white/70"} border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"} text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-green-500/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-green-500/20 rounded-full blur-[150px]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-6`}>
              Ready to Scale Your Agency?
            </h2>
            <p className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"} mb-8 max-w-2xl mx-auto`}>
              Apply for our agency program and start offering data services to your clients.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-500/90 transition-colors text-lg"
            >
              Apply for Agency Program
              <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
