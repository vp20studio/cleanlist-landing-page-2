"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Phone,
  Shield,
  Check,
  X,
  AlertCircle,
  Zap,
  Target,
  Clock,
  RefreshCw,
  Search,
  Globe,
  ChevronRight,
  Lock,
  Server,
  FileCheck,
} from "lucide-react";
import { DashboardMockup, TechnicalGrid, VerticalStepper, GlowCard } from "@/components/ui";

export default function EmailPhoneFinderPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-green-500/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-500 mb-6"
              >
                <Mail className="w-4 h-4" />
                Contact Discovery
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6"
              >
                Email & Phone{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-400">
                  Finder
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400 mb-8 max-w-lg"
              >
                Find verified work emails and direct phone numbers for any professional.
                Email-only enrichment for 1 credit, or full contact data for 10 credits.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-8"
              >
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-500/90 transition-colors"
                >
                  Find Contacts Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#verification"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/[0.15] text-white font-medium rounded-lg hover:bg-white/[0.05] transition-colors"
                >
                  See Verification Process
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
                  { value: "98%", label: "Accuracy" },
                  { value: "1 Credit", label: "Email Only" },
                  { value: "10 Credits", label: "Full Contact" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]"
                  >
                    <div className="text-2xl font-bold text-green-500">{stat.value}</div>
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
              <DashboardMockup variant="verification" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Stats */}
      <section className="py-12 border-y border-white/[0.08] bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <TechnicalGrid
            columns={5}
            blocks={[
              {
                icon: <Shield className="w-5 h-5" />,
                label: "Accuracy",
                value: "98%",
                subValue: "Data guarantee",
                color: "green",
              },
              {
                icon: <Mail className="w-5 h-5" />,
                label: "Email Only",
                value: "1 Credit",
                subValue: "Partial enrichment",
                color: "blue",
              },
              {
                icon: <Phone className="w-5 h-5" />,
                label: "Full Contact",
                value: "10 Credits",
                subValue: "Email + Phone",
                color: "purple",
              },
              {
                icon: <Target className="w-5 h-5" />,
                label: "Validation",
                value: "Email",
                subValue: "Deliverability check",
                color: "yellow",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                label: "Processing",
                value: "Fast",
                subValue: "Real-time & batch",
                highlight: true,
              },
            ]}
          />
        </div>
      </section>

      {/* Email Validation */}
      <section id="verification" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-500 mb-4">
              <Shield className="w-4 h-4" />
              Email Validation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How We Verify Every Email
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our email validation process ensures high deliverability. No bounces,
              no spam traps, no wasted sends.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <VerticalStepper
              steps={[
                {
                  number: "01",
                  title: "Syntax Validation",
                  description:
                    "We check the email format against RFC standards to catch typos and invalid patterns.",
                  icon: <FileCheck className="w-5 h-5" />,
                  details: [
                    "RFC 5322 compliance check",
                    "Common typo detection (gmial, outlok, etc.)",
                    "Invalid character filtering",
                    "Format pattern validation",
                  ],
                },
                {
                  number: "02",
                  title: "MX & DNS Lookup",
                  description:
                    "We verify the domain has valid mail servers configured and accepting connections.",
                  icon: <Server className="w-5 h-5" />,
                  details: [
                    "MX record existence check",
                    "DNS resolution validation",
                    "Mail server reachability test",
                    "Domain age and reputation check",
                  ],
                },
                {
                  number: "03",
                  title: "SMTP Handshake",
                  description:
                    "We connect to the mail server and verify the specific mailbox exists.",
                  icon: <Lock className="w-5 h-5" />,
                  details: [
                    "RCPT TO verification",
                    "Catch-all domain detection",
                    "Disposable email detection",
                    "Role-based email flagging",
                  ],
                },
              ]}
            />

            {/* Verification Result Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <div className="p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08]">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-medium text-gray-400">Verification Result</span>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-medium">
                    Valid
                  </span>
                </div>

                <div className="p-4 rounded-lg bg-[#111] border border-white/[0.05] mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <div className="text-white font-medium">john.smith@acme.com</div>
                      <div className="text-xs text-gray-500">Verified 0.8s ago</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { check: "Syntax Valid", status: "pass", detail: "RFC 5322 compliant" },
                    { check: "MX Records", status: "pass", detail: "3 mail servers found" },
                    { check: "SMTP Response", status: "pass", detail: "250 OK" },
                    { check: "Catch-all", status: "info", detail: "Not detected" },
                    { check: "Disposable", status: "pass", detail: "Not a temp email" },
                    { check: "Role-based", status: "pass", detail: "Personal mailbox" },
                  ].map((item) => (
                    <div
                      key={item.check}
                      className="flex items-center justify-between py-2 border-b border-white/[0.05] last:border-0"
                    >
                      <span className="text-sm text-gray-300">{item.check}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{item.detail}</span>
                        {item.status === "pass" ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : item.status === "info" ? (
                          <AlertCircle className="w-4 h-4 text-blue-500" />
                        ) : (
                          <X className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                  <div className="flex items-center gap-2 text-sm text-green-500 mb-1">
                    <Shield className="w-4 h-4" />
                    Email Validated
                  </div>
                  <p className="text-xs text-gray-500">
                    This email is safe to send. Low bounce risk.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detection Capabilities */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Advanced Detection
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We don&apos;t just verify—we detect risky email types that hurt your sender reputation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <AlertCircle className="w-6 h-6" />,
                title: "Catch-all Detection",
                description:
                  "Identifies domains that accept any email, making true verification impossible.",
                color: "yellow",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Disposable Emails",
                description:
                  "Flags temporary email addresses from 10MinuteMail, Guerrilla Mail, etc.",
                color: "red",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Role-based Emails",
                description:
                  "Detects generic addresses like info@, support@, sales@ that hurt deliverability.",
                color: "blue",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Spam Traps",
                description:
                  "Identifies known spam trap addresses that can blacklist your domain.",
                color: "purple",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard
                  className="h-full p-6"
                  glowColor={
                    feature.color === "yellow"
                      ? "#eab308"
                      : feature.color === "red"
                      ? "#ef4444"
                      : feature.color === "blue"
                      ? "#3e8aff"
                      : "#a855f7"
                  }
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      feature.color === "yellow"
                        ? "bg-yellow-500/10 text-yellow-500"
                        : feature.color === "red"
                        ? "bg-red-500/10 text-red-500"
                        : feature.color === "blue"
                        ? "bg-[#3e8aff]/10 text-[#3e8aff]"
                        : "bg-purple-500/10 text-purple-500"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Phone Number Discovery */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
                <Phone className="w-4 h-4" />
                Direct Dial Discovery
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Find Direct Phone Numbers
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                Get mobile and direct dial numbers for B2B prospects. Verified against
                carrier databases for accuracy.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Mobile Numbers",
                    description: "Cell phone numbers for direct outreach",
                    coverage: "When available",
                  },
                  {
                    title: "Direct Dials",
                    description: "Office direct lines bypassing switchboards",
                    coverage: "When available",
                  },
                  {
                    title: "Company HQ",
                    description: "Main company phone numbers",
                    coverage: "High coverage",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-lg bg-[#0a0a0a] border border-white/[0.08]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#3e8aff]/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#3e8aff]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-white">{item.title}</h4>
                        <span className="text-xs text-green-500">{item.coverage}</span>
                      </div>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08]"
            >
              <div className="text-sm font-medium text-gray-400 mb-6">Phone Discovery Result</div>

              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[#111] border border-white/[0.05]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#3e8aff]/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#3e8aff]" />
                    </div>
                    <div>
                      <div className="text-white font-medium">+1 (555) 123-4567</div>
                      <div className="text-xs text-gray-500">Mobile • Verified</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-green-500">
                    <Check className="w-4 h-4" />
                    Active line, carrier: Verizon Wireless
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#111] border border-white/[0.05]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#3e8aff]/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#3e8aff]" />
                    </div>
                    <div>
                      <div className="text-white font-medium">+1 (555) 987-6543</div>
                      <div className="text-xs text-gray-500">Direct Dial • Office</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-green-500">
                    <Check className="w-4 h-4" />
                    Active line, carrier: AT&T Business
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="p-3 rounded-lg bg-[#111] border border-white/[0.05] text-center">
                    <div className="text-lg font-bold text-[#3e8aff]">2</div>
                    <div className="text-xs text-gray-500">Numbers Found</div>
                  </div>
                  <div className="p-3 rounded-lg bg-[#111] border border-white/[0.05] text-center">
                    <div className="text-lg font-bold text-green-500">100%</div>
                    <div className="text-xs text-gray-500">Line Active</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lookup Methods */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Multiple Lookup Methods
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find contacts using any identifier you have.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email Lookup",
                description: "Input an email to verify and enrich with phone numbers.",
                input: "john@acme.com",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Domain + Name",
                description: "Provide company domain and full name to find email.",
                input: "acme.com + John Smith",
              },
              {
                icon: <Search className="w-6 h-6" />,
                title: "LinkedIn URL",
                description: "Input a LinkedIn profile URL to get contact details.",
                input: "linkedin.com/in/johnsmith",
              },
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-[#0a0a0a] border border-white/[0.08] hover:border-[#3e8aff]/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff] mb-4">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{method.description}</p>
                <div className="p-2 rounded bg-[#111] border border-white/[0.05] text-xs text-gray-500 font-mono">
                  {method.input}
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Finding Verified Contacts
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get started with free credits. Find emails and phone numbers with 98% accuracy.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-500/90 transition-colors text-lg"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/[0.15] text-white font-medium rounded-lg hover:bg-white/[0.05] transition-colors text-lg"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
