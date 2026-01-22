"use client";

import { motion } from "framer-motion";
import {
  Sparkle,
  ArrowRight,
  Database,
  Lightning,
  CheckCircle,
  CurrencyDollar,
  TrendUp,
  Shield,
  Globe,
  Users,
  Buildings,
  LinkedinLogo,
  Envelope,
  Phone,
  MapPin,
  Briefcase,
} from "@/components/icons";
import { GlowCard, SectionHeader, CodeBlock, MagneticButton, ResultCard } from "@/components/ui";

// Data providers in the waterfall (generic representation)
const dataProviders = [
  { name: "Provider 1", priority: 1, accuracy: "98%" },
  { name: "Provider 2", priority: 2, accuracy: "96%" },
  { name: "Provider 3", priority: 3, accuracy: "94%" },
  { name: "Provider 4", priority: 4, accuracy: "92%" },
  { name: "Provider 5", priority: 5, accuracy: "90%" },
  { name: "Provider 6", priority: 6, accuracy: "88%" },
  { name: "Provider 7", priority: 7, accuracy: "86%" },
  { name: "Provider 8", priority: 8, accuracy: "84%" },
  { name: "Provider 9", priority: 9, accuracy: "82%" },
  { name: "+6 more", priority: 10, accuracy: "80%+" },
];

const enrichmentFields = [
  { icon: Users, label: "Full Name", example: "John Smith" },
  { icon: Briefcase, label: "Job Title", example: "VP of Marketing" },
  { icon: Buildings, label: "Company", example: "Acme Corporation" },
  { icon: Globe, label: "Company Size", example: "500-1000 employees" },
  { icon: CurrencyDollar, label: "Revenue", example: "$50M - $100M" },
  { icon: MapPin, label: "Location", example: "San Francisco, CA" },
  { icon: LinkedinLogo, label: "LinkedIn", example: "linkedin.com/in/johnsmith" },
  { icon: Phone, label: "Phone", example: "+1 (555) 123-4567" },
  { icon: Envelope, label: "Work Email", example: "j.smith@acme.com" },
];

const sampleResponse = `{
  "success": true,
  "credits_used": 1,
  "data": {
    "email": "john.smith@acme.com",
    "verified": true,
    "person": {
      "full_name": "John Smith",
      "first_name": "John",
      "last_name": "Smith",
      "title": "VP of Marketing",
      "seniority": "VP",
      "department": "Marketing"
    },
    "company": {
      "name": "Acme Corporation",
      "domain": "acme.com",
      "industry": "Technology",
      "size": "500-1000",
      "revenue": "$50M - $100M",
      "founded": 2010,
      "location": {
        "city": "San Francisco",
        "state": "California",
        "country": "United States"
      }
    },
    "social": {
      "linkedin": "https://linkedin.com/in/johnsmith",
      "twitter": "@johnsmith"
    },
    "enrichment_source": "waterfall",
    "confidence_score": 98
  }
}`;

export default function EnrichmentPage() {
  return (
    <main className="min-h-screen bg-[#030303] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background gradients */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(62, 138, 255, 0.15), transparent)",
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(62,138,255,0.3)] bg-[rgba(62,138,255,0.05)] text-sm text-[#3e8aff] mb-6">
              <Sparkle className="w-4 h-4" />
              Waterfall Enrichment Engine
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              15+ data sources.{" "}
              <span className="gradient-text-blue">One Golden Record.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#888888] mb-8 max-w-3xl mx-auto">
              Our Waterfall Enrichment cascades through 15+ premium data
              providers to find the most accurate data while minimizing your
              credit spend. One API call, multiple sources, best results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton href="/get-started" size="lg">
                Start Enriching Free
                <ArrowRight className="w-5 h-5" />
              </MagneticButton>
              <MagneticButton href="/docs/enrichment" variant="secondary" size="lg">
                View API Docs
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Waterfall Visualization */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="The Waterfall"
            badgeIcon={<Database className="w-4 h-4 text-[#3e8aff]" />}
            title="How the Waterfall Works"
            highlight="Waterfall"
            description="We query providers in priority order. The moment we find accurate data, we stop—saving you credits and ensuring the highest quality."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Waterfall Visualization */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GlowCard padding="lg">
                <div className="space-y-3">
                  {dataProviders.slice(0, 8).map((provider, index) => (
                    <motion.div
                      key={provider.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                        index === 0
                          ? "bg-[rgba(34,197,94,0.05)] border-[rgba(34,197,94,0.3)]"
                          : "bg-[rgba(255,255,255,0.02)] border-[rgba(255,255,255,0.05)] opacity-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                            index === 0
                              ? "bg-[rgba(34,197,94,0.1)] text-[#22c55e]"
                              : "bg-[rgba(255,255,255,0.05)] text-[#888888]"
                          }`}
                        >
                          {provider.priority}
                        </div>
                        <span
                          className={`text-sm font-medium ${index === 0 ? "text-white" : "text-[#888888]"}`}
                        >
                          {provider.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-[#888888]">
                          {provider.accuracy} accuracy
                        </span>
                        {index === 0 && (
                          <CheckCircle className="w-5 h-5 text-[#22c55e]" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                  <div className="text-center py-2">
                    <span className="text-xs text-[#888888]">
                      15+ premium data providers in the waterfall
                    </span>
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            {/* Right: Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <BenefitCard
                icon={<CurrencyDollar className="w-6 h-6" />}
                title="Credit Efficiency"
                description="Only pay for one successful match. If Apollo has the data, we stop there—no wasted queries to downstream providers."
                stat="60%"
                statLabel="avg. credit savings"
                color="#22c55e"
              />
              <BenefitCard
                icon={<Lightning className="w-6 h-6" />}
                title="Speed Priority"
                description="Providers are ordered by response time. Get enriched data in under 200ms on average."
                stat="<200ms"
                statLabel="avg. response"
                color="#3e8aff"
              />
              <BenefitCard
                icon={<TrendUp className="w-6 h-6" />}
                title="Accuracy First"
                description="We prioritize providers with the highest accuracy rates, ensuring your Golden Record is always reliable."
                stat="94%"
                statLabel="match accuracy"
                color="#f59e0b"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Fields Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 80% 50%, rgba(62, 138, 255, 0.05), transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="25+ Data Points"
            badgeIcon={<Sparkle className="w-4 h-4 text-[#3e8aff]" />}
            title="The Golden Record"
            highlight="Golden Record"
            description="Transform a simple email into a complete profile with firmographic, demographic, and social data."
          />

          <div className="grid md:grid-cols-3 gap-4">
            {enrichmentFields.map((field, index) => (
              <motion.div
                key={field.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <GlowCard padding="md">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(62,138,255,0.1)] flex items-center justify-center text-[#3e8aff]">
                      <field.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {field.label}
                      </p>
                      <p className="text-xs text-[#888888] font-mono mt-1">
                        {field.example}
                      </p>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-8"
          >
            <a
              href="/docs/enrichment/fields"
              className="inline-flex items-center gap-2 text-sm text-[#3e8aff] hover:text-[#60a5fa] transition-colors"
            >
              View all 25+ data fields
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* API Response Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="API Response"
            badgeIcon={<Database className="w-4 h-4 text-[#3e8aff]" />}
            title="Developer-First Design"
            highlight="Developer-First"
            description="Clean, predictable JSON responses with confidence scores and source attribution."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Code Block */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CodeBlock
                code={sampleResponse}
                filename="enrichment_response.json"
              />
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <GlowCard>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(34,197,94,0.1)] flex items-center justify-center text-[#22c55e]">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-1">
                      Simple Credit Model
                    </h3>
                    <p className="text-sm text-[#888888]">
                      1 credit for email enrichment, 10 credits to add phone.
                      11 total for full contact data. No hidden fees.
                    </p>
                  </div>
                </div>
              </GlowCard>

              <GlowCard>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(62,138,255,0.1)] flex items-center justify-center text-[#3e8aff]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-1">
                      Confidence Scoring
                    </h3>
                    <p className="text-sm text-[#888888]">
                      Every enrichment includes a confidence score (0-100) so
                      you can filter by data quality in your workflows.
                    </p>
                  </div>
                </div>
              </GlowCard>

              <GlowCard>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(139,92,246,0.1)] flex items-center justify-center text-[#8b5cf6]">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-1">
                      Source Attribution
                    </h3>
                    <p className="text-sm text-[#888888]">
                      Know exactly which provider returned the data.
                      Full transparency for compliance and auditing.
                    </p>
                  </div>
                </div>
              </GlowCard>

              <a
                href="/docs/api"
                className="inline-flex items-center gap-2 text-sm text-[#3e8aff] hover:text-[#60a5fa] transition-colors mt-4"
              >
                Full API documentation
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
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
            badge="Results"
            badgeIcon={<TrendUp className="w-4 h-4 text-[#3e8aff]" />}
            title="Real Customer Results"
            highlight="Results"
            description="See how teams are using Waterfall Enrichment to accelerate their pipeline."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard
              company="TechStart Inc."
              industry="SaaS"
              metric="Bounce Rate Reduction"
              value="42%"
              change="-42%"
              positive
            />
            <ResultCard
              company="GrowthCo"
              industry="Marketing Agency"
              metric="Data Coverage"
              value="94%"
              change="+31%"
              positive
            />
            <ResultCard
              company="Enterprise AI"
              industry="Enterprise Software"
              metric="Time Saved"
              value="12hrs"
              change="/week"
              positive
            />
            <ResultCard
              company="ScaleUp Labs"
              industry="VC-backed Startup"
              metric="Lead Quality Score"
              value="8.7"
              change="+2.3"
              positive
            />
          </div>
        </div>
      </section>

    </main>
  );
}

function BenefitCard({
  icon,
  title,
  description,
  stat,
  statLabel,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  color: string;
}) {
  return (
    <GlowCard glowColor={color}>
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${color}15`, color }}
        >
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">{title}</h3>
            <div className="text-right">
              <p className="text-xl font-bold" style={{ color }}>
                {stat}
              </p>
              <p className="text-xs text-[#888888]">{statLabel}</p>
            </div>
          </div>
          <p className="text-sm text-[#888888]">{description}</p>
        </div>
      </div>
    </GlowCard>
  );
}
