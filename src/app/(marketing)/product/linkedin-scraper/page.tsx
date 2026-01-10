"use client";

import { motion } from "framer-motion";
import {
  Linkedin,
  ArrowRight,
  Chrome,
  Search,
  Users,
  Download,
  Zap,
  Shield,
  CheckCircle2,
  Filter,
  Database,
  TrendingUp,
  Clock,
  RefreshCw,
} from "lucide-react";
import { GlowCard, SectionHeader, CodeBlock, MagneticButton, ResultCard } from "@/components/ui";

const features = [
  {
    icon: Search,
    title: "Sales Navigator Integration",
    description: "Extract leads directly from Sales Navigator search results, saved leads, and account lists.",
  },
  {
    icon: Filter,
    title: "Advanced Filtering",
    description: "Filter by seniority, company size, industry, location, and 20+ other criteria before export.",
  },
  {
    icon: Users,
    title: "Bulk Export",
    description: "Export up to 2,500 profiles per search. No daily limits on extraction.",
  },
  {
    icon: RefreshCw,
    title: "Auto-Enrichment",
    description: "Automatically enrich exported leads with verified emails through our Waterfall engine.",
  },
  {
    icon: Shield,
    title: "LinkedIn Safe",
    description: "Human-like behavior patterns and rate limiting to protect your LinkedIn account.",
  },
  {
    icon: Download,
    title: "Multi-Format Export",
    description: "Export to CSV, JSON, or sync directly to HubSpot, Salesforce, and Outreach.",
  },
];

const extractionFields = [
  "Full Name",
  "Job Title",
  "Company Name",
  "Company Size",
  "Industry",
  "Location",
  "Profile URL",
  "Connection Degree",
  "Headline",
  "About Summary",
  "Experience History",
  "Education",
  "Skills",
  "Mutual Connections",
  "Profile Photo URL",
  "Company Logo URL",
];

const sampleExport = `{
  "leads": [
    {
      "linkedin_url": "https://linkedin.com/in/sarahm",
      "full_name": "Sarah Mitchell",
      "first_name": "Sarah",
      "last_name": "Mitchell",
      "headline": "VP Marketing | Growth Leader",
      "title": "VP of Marketing",
      "company": {
        "name": "TechCorp Inc",
        "size": "500-1000",
        "industry": "Computer Software",
        "linkedin_url": "https://linkedin.com/company/techcorp"
      },
      "location": "San Francisco Bay Area",
      "connection_degree": 2,
      "enrichment": {
        "email": "sarah.m@techcorp.io",
        "email_verified": true,
        "phone": "+1 (415) 555-0123"
      }
    }
  ],
  "total_extracted": 847,
  "enrichment_rate": "94%"
}`;

export default function LinkedInScraperPage() {
  return (
    <main className="min-h-screen bg-[#030303] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(10, 102, 194, 0.15), transparent)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(10,102,194,0.3)] bg-[rgba(10,102,194,0.05)] text-sm text-[#0a66c2] mb-6">
              <Chrome className="w-4 h-4" />
              Chrome Extension
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Extract leads from{" "}
              <span className="text-[#0a66c2]">Sales Navigator</span>
            </h1>

            <p className="text-lg md:text-xl text-[#888888] mb-8 max-w-3xl mx-auto">
              Our Chrome Extension lets you export leads directly from LinkedIn
              Sales Navigator with one click. Bulk extract up to 2,500 profiles
              per search, automatically enriched with verified emails.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton href="/get-started" size="lg">
                <Chrome className="w-5 h-5" />
                Install Extension
              </MagneticButton>
              <MagneticButton href="/docs/linkedin" variant="secondary" size="lg">
                View Documentation
              </MagneticButton>
            </div>

            {/* Browser mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-16"
            >
              <GlowCard glowColor="#0a66c2" padding="sm">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.3)] rounded-t-xl">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                    <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                    <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[rgba(255,255,255,0.05)] text-xs text-[#888888]">
                      <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                      linkedin.com/sales/search/people
                    </div>
                  </div>
                  <div className="w-16" />
                </div>

                {/* Extension popup mockup */}
                <div className="p-6 bg-[#0a0a0a]">
                  <div className="flex items-start gap-6">
                    {/* Left: Search results preview */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-white font-medium">
                          Search Results
                        </span>
                        <span className="text-xs px-2 py-1 rounded bg-[rgba(10,102,194,0.1)] text-[#0a66c2]">
                          847 leads found
                        </span>
                      </div>
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)]"
                        >
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0a66c2] to-[#004182] flex items-center justify-center text-white text-sm">
                            {["SM", "JC", "ER"][i - 1]}
                          </div>
                          <div className="flex-1">
                            <p className="text-sm text-white">
                              {["Sarah Mitchell", "James Chen", "Emily Rodriguez"][i - 1]}
                            </p>
                            <p className="text-xs text-[#888888]">
                              {["VP Marketing at TechCorp", "Head of Growth at ScaleUp", "Director of Sales at Enterprise"][i - 1]}
                            </p>
                          </div>
                          <CheckCircle2 className="w-5 h-5 text-[#22c55e]" />
                        </div>
                      ))}
                    </div>

                    {/* Right: Extension panel */}
                    <div className="w-64 p-4 rounded-xl border border-[rgba(62,138,255,0.3)] bg-[rgba(62,138,255,0.05)]">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3e8aff] to-[#2563eb] flex items-center justify-center">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-4 h-4 text-white"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <polyline points="9 11 12 14 22 4" />
                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                          </svg>
                        </div>
                        <span className="text-sm font-semibold text-white">
                          Cleanlist
                        </span>
                      </div>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-[#888888]">Leads found</span>
                          <span className="text-white font-medium">847</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-[#888888]">Selected</span>
                          <span className="text-white font-medium">All</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-[#888888]">Auto-enrich</span>
                          <span className="text-[#22c55e] font-medium">On</span>
                        </div>
                      </div>

                      <button className="w-full py-2.5 px-4 text-sm font-medium text-white bg-gradient-to-r from-[#3e8aff] to-[#2563eb] rounded-lg hover:shadow-[0_0_20px_rgba(62,138,255,0.3)] transition-shadow">
                        Export 847 Leads
                      </button>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Features"
            badgeIcon={<Zap className="w-4 h-4 text-[#3e8aff]" />}
            title="Built for Sales Teams"
            highlight="Sales Teams"
            description="Everything you need to build targeted lead lists from LinkedIn Sales Navigator."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlowCard className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(62,138,255,0.1)] flex items-center justify-center text-[#3e8aff] mb-4">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#888888]">{feature.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extraction Fields */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 80% 50%, rgba(10, 102, 194, 0.05), transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Data Fields"
            badgeIcon={<Database className="w-4 h-4 text-[#3e8aff]" />}
            title="Extract Complete Profiles"
            highlight="Complete Profiles"
            description="Every data point available on LinkedIn, exported in structured format."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Fields grid */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GlowCard>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Extracted Fields
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {extractionFields.map((field, i) => (
                    <div
                      key={field}
                      className="flex items-center gap-2 py-2 px-3 rounded-lg bg-[rgba(255,255,255,0.02)]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
                      <span className="text-sm text-[#888888]">{field}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#888888] mt-4">
                  + verified email and phone via Waterfall Enrichment
                </p>
              </GlowCard>
            </motion.div>

            {/* Sample output */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CodeBlock code={sampleExport} filename="linkedin_export.json" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="How It Works"
            badgeIcon={<Clock className="w-4 h-4 text-[#3e8aff]" />}
            title="Three Steps to Leads"
            highlight="Three Steps"
            description="From Sales Navigator search to enriched leads in your CRM."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Search in Sales Navigator",
                description: "Use LinkedIn's powerful filters to find your ideal prospects. Filter by title, company size, industry, and more.",
                icon: Search,
              },
              {
                step: "02",
                title: "Click Export",
                description: "Our Chrome Extension detects your search results. Click 'Export' to extract all visible leads with one click.",
                icon: Download,
              },
              {
                step: "03",
                title: "Get Enriched Data",
                description: "Leads are automatically enriched with verified emails and sent to your preferred destination—CSV, HubSpot, or API.",
                icon: Database,
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
              >
                <GlowCard className="h-full relative">
                  <span className="absolute top-4 right-4 text-4xl font-bold text-[rgba(62,138,255,0.1)]">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-[rgba(62,138,255,0.1)] flex items-center justify-center text-[#3e8aff] mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#888888]">{item.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
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
            badgeIcon={<TrendingUp className="w-4 h-4 text-[#3e8aff]" />}
            title="Sales Teams Love It"
            highlight="Love It"
            description="See how teams are accelerating their prospecting with Cleanlist."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ResultCard
              company="SalesTech Co"
              industry="Sales Software"
              metric="Leads Exported"
              value="12.4K"
              change="/month"
              positive
            />
            <ResultCard
              company="RevOps Agency"
              industry="Consulting"
              metric="Email Match Rate"
              value="94%"
              change="+18%"
              positive
            />
            <ResultCard
              company="Growth Labs"
              industry="Marketing"
              metric="Time Saved"
              value="15hrs"
              change="/week"
              positive
            />
            <ResultCard
              company="Enterprise Inc"
              industry="Enterprise"
              metric="Pipeline Generated"
              value="$2.4M"
              change="/quarter"
              positive
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(10, 102, 194, 0.15), transparent 70%)",
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
              Ready to supercharge your prospecting?
            </h2>
            <p className="text-lg text-[#888888] mb-8">
              Install the Chrome Extension and start exporting leads in minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton href="/get-started" size="lg">
                <Chrome className="w-5 h-5" />
                Install Free Extension
              </MagneticButton>
              <MagneticButton href="/pricing" variant="secondary" size="lg">
                View Pricing
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
