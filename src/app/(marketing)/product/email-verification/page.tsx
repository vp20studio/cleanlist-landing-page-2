"use client";

import { motion } from "framer-motion";
import {
  Envelope,
  ArrowRight,
  Shield,
  Lightning,
  CheckCircle,
  XCircle,
  Warning,
  HardDrives,
  Globe,
  Lock,
  TrendUp,
  Clock,
} from "@phosphor-icons/react";
import { GlowCard, GlowIcon, SectionHeader, CodeBlock, MagneticButton, ResultCard } from "@/components/ui";

const verificationSteps = [
  {
    step: "01",
    title: "Syntax Check",
    description: "Validates email format, checks for typos, and normalizes the address according to RFC 5322 standards.",
    icon: Envelope,
    color: "#3e8aff",
    glowColor: "blue" as const,
    checks: [
      "RFC 5322 compliance",
      "Domain format validation",
      "Local part verification",
      "Common typo detection",
    ],
  },
  {
    step: "02",
    title: "MX/DNS Validation",
    description: "Queries DNS records to verify the domain exists and has valid mail exchange (MX) servers configured.",
    icon: Globe,
    color: "#8b5cf6",
    glowColor: "purple" as const,
    checks: [
      "MX record lookup",
      "DNS resolution check",
      "Mail server discovery",
      "Domain age verification",
    ],
  },
  {
    step: "03",
    title: "SMTP Handshake",
    description: "Performs a real-time ping to the mail server without sending an email to verify the mailbox exists.",
    icon: HardDrives,
    color: "#22c55e",
    glowColor: "green" as const,
    checks: [
      "Real-time server ping",
      "Mailbox existence check",
      "Catch-all detection",
      "Greylisting handling",
    ],
  },
];

const detectionFeatures = [
  {
    icon: Warning,
    title: "Disposable Email Detection",
    description: "Identifies temporary/burner emails from 50,000+ known disposable domains (Mailinator, Guerrilla Mail, etc.).",
    color: "#f59e0b",
    glowColor: "yellow" as const,
  },
  {
    icon: Shield,
    title: "Role-Based Detection",
    description: "Flags generic addresses like info@, support@, sales@ that often bounce or go unread.",
    color: "#ef4444",
    glowColor: "red" as const,
  },
  {
    icon: Lock,
    title: "Catch-All Detection",
    description: "Identifies domains configured to accept all emails, reducing false positives in your lists.",
    color: "#8b5cf6",
    glowColor: "purple" as const,
  },
  {
    icon: Lightning,
    title: "Accept-All Detection",
    description: "Detects servers that claim to accept everything, helping you filter low-confidence addresses.",
    color: "#3e8aff",
    glowColor: "blue" as const,
  },
];

const sampleResponse = `{
  "email": "john.smith@company.com",
  "valid": true,
  "deliverable": true,
  "result": {
    "syntax_valid": true,
    "mx_found": true,
    "mx_host": "mail.company.com",
    "smtp_check": true,
    "mailbox_exists": true,
    "catch_all": false,
    "disposable": false,
    "role_based": false,
    "free_provider": false
  },
  "risk_level": "low",
  "confidence_score": 98,
  "verification_time_ms": 147
}`;

export default function EmailVerificationPage() {
  return (
    <main className="min-h-screen bg-[#030303] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(34, 197, 94, 0.15), transparent)",
          }}
        />

        {/* Animated grid background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(34,197,94,0.3)] bg-[rgba(34,197,94,0.05)] text-sm text-[#22c55e] mb-6">
              <GlowIcon icon={<Shield />} size="xs" color="green" variant="ghost" />
              Triple Verification
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              99.9% deliverability.{" "}
              <span className="text-[#22c55e]">Guaranteed.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#888888] mb-8 max-w-3xl mx-auto">
              Our Triple Verification system checks every email through three
              layers: Syntax Check → MX/DNS Validation → SMTP Handshake. Catch
              bounces before they happen.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton href="/get-started" size="lg">
                Start Verifying Free
                <ArrowRight />
              </MagneticButton>
              <MagneticButton href="/docs/verification" variant="secondary" size="lg">
                View API Docs
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Triple Verification Steps */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Process"
            badgeIcon={<GlowIcon icon={<Shield />} size="xs" color="blue" variant="ghost" />}
            title="Triple-Layer Verification"
            highlight="Triple-Layer"
            description="Every email passes through three rigorous validation steps before we mark it deliverable."
          />

          <div className="grid lg:grid-cols-3 gap-6">
            {verificationSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <GlowCard
                  glowColor={step.color}
                  className="h-full relative overflow-hidden"
                >
                  <span className="absolute top-4 right-4 text-5xl font-bold text-[rgba(255,255,255,0.03)]">
                    {step.step}
                  </span>

                  <div className="mb-4">
                    <GlowIcon icon={<step.icon />} size="xl" color={step.glowColor} variant="glow" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#888888] mb-4">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.checks.map((check, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle
                          className="flex-shrink-0"
                          style={{ color: step.color }}
                        />
                        <span className="text-xs text-[#888888]">{check}</span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          {/* Connection lines for desktop */}
          <div className="hidden lg:flex justify-center items-center mt-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#3e8aff]" />
              <div className="w-24 h-px bg-gradient-to-r from-[#3e8aff] to-[#8b5cf6]" />
              <div className="w-3 h-3 rounded-full bg-[#8b5cf6]" />
              <div className="w-24 h-px bg-gradient-to-r from-[#8b5cf6] to-[#22c55e]" />
              <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
            </div>
          </div>
        </div>
      </section>

      {/* Detection Features */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 20% 50%, rgba(62, 138, 255, 0.05), transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Smart Detection"
            badgeIcon={<GlowIcon icon={<Warning />} size="xs" color="blue" variant="ghost" />}
            title="Beyond Simple Verification"
            highlight="Beyond Simple"
            description="We don't just check if an email is valid—we identify risky addresses that could hurt your sender reputation."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {detectionFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlowCard glowColor={feature.color}>
                  <div className="flex items-start gap-4">
                    <GlowIcon icon={<feature.icon />} size="lg" color={feature.glowColor} variant="glow" className="flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-[#888888]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Live Example"
            badgeIcon={<GlowIcon icon={<Lightning />} size="xs" color="blue" variant="ghost" />}
            title="See It In Action"
            highlight="In Action"
            description="Real verification results in under 200ms."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Verification Demo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GlowCard padding="lg">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Verification Results
                </h3>

                <div className="space-y-3">
                  <VerificationResultRow
                    email="john@company.com"
                    status="valid"
                    risk="low"
                    time="147ms"
                  />
                  <VerificationResultRow
                    email="test@mailinator.com"
                    status="invalid"
                    risk="high"
                    time="89ms"
                    reason="Disposable"
                  />
                  <VerificationResultRow
                    email="info@startup.io"
                    status="risky"
                    risk="medium"
                    time="203ms"
                    reason="Role-based"
                  />
                  <VerificationResultRow
                    email="sarah@techcorp.io"
                    status="valid"
                    risk="low"
                    time="156ms"
                  />
                  <VerificationResultRow
                    email="bounce@invalid.xyz"
                    status="invalid"
                    risk="high"
                    time="312ms"
                    reason="No MX records"
                  />
                </div>

                <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.08)]">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#888888]">Average response time</span>
                    <span className="text-[#22c55e] font-medium">181ms</span>
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            {/* API Response */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CodeBlock
                code={sampleResponse}
                filename="verification_response.json"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 80% 50%, rgba(34, 197, 94, 0.05), transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { value: "99.9%", label: "Accuracy", icon: CheckCircle, color: "#22c55e", glowColor: "green" as const },
              { value: "<200ms", label: "Avg. Response", icon: Clock, color: "#3e8aff", glowColor: "blue" as const },
              { value: "50K+", label: "Disposable Domains", icon: Shield, color: "#f59e0b", glowColor: "yellow" as const },
              { value: "10M+", label: "Emails Verified Daily", icon: TrendUp, color: "#8b5cf6", glowColor: "purple" as const },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlowCard glowColor={stat.color} className="text-center">
                  <GlowIcon icon={<stat.icon />} size="lg" color={stat.glowColor} variant="glow" className="mx-auto mb-4" />
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-sm text-[#888888]">{stat.label}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Results"
            badgeIcon={<GlowIcon icon={<TrendUp />} size="xs" color="blue" variant="ghost" />}
            title="Protect Your Sender Reputation"
            highlight="Sender Reputation"
            description="See how teams are reducing bounce rates with Cleanlist verification."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard
              company="MarketingPro"
              industry="Email Marketing"
              metric="Bounce Rate"
              value="0.8%"
              change="-94%"
              positive
            />
            <ResultCard
              company="SalesForce Co"
              industry="SaaS"
              metric="Deliverability"
              value="99.2%"
              change="+12%"
              positive
            />
            <ResultCard
              company="Lead Gen Inc"
              industry="Lead Generation"
              metric="Valid Emails"
              value="847K"
              change="/month"
              positive
            />
            <ResultCard
              company="Outreach Labs"
              industry="Sales Engagement"
              metric="Sender Score"
              value="98"
              change="+23"
              positive
            />
          </div>
        </div>
      </section>

    </main>
  );
}

function VerificationResultRow({
  email,
  status,
  risk,
  time,
  reason,
}: {
  email: string;
  status: "valid" | "invalid" | "risky";
  risk: "low" | "medium" | "high";
  time: string;
  reason?: string;
}) {
  const statusConfig = {
    valid: {
      color: "#22c55e",
      bg: "rgba(34,197,94,0.1)",
      icon: CheckCircle,
      label: "Valid",
    },
    invalid: {
      color: "#ef4444",
      bg: "rgba(239,68,68,0.1)",
      icon: XCircle,
      label: "Invalid",
    },
    risky: {
      color: "#f59e0b",
      bg: "rgba(245,158,11,0.1)",
      icon: Warning,
      label: "Risky",
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div
      className="flex items-center justify-between p-3 rounded-lg border"
      style={{
        backgroundColor: config.bg,
        borderColor: `${config.color}30`,
      }}
    >
      <div className="flex items-center gap-3">
        <Icon style={{ color: config.color }} />
        <div>
          <p className="text-sm text-white font-mono">{email}</p>
          {reason && <p className="text-xs text-[#888888]">{reason}</p>}
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs font-medium" style={{ color: config.color }}>
          {config.label}
        </p>
        <p className="text-[10px] text-[#888888]">{time}</p>
      </div>
    </div>
  );
}
