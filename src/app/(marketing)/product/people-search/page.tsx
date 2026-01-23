"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import {
  ArrowRight,
  MagnifyingGlass,
  Database,
  Lightning,
  Shield,
  Check,
  CaretRight,
  Users,
  Buildings,
  MapPin,
  CurrencyDollar,
  Briefcase,
  Funnel,
  Sparkle,
  Target,
  ChartBar,
  LinkedinLogo,
  Globe,
  UserPlus,
  ListPlus,
  ArrowsClockwise,
  Export,
  Stack,
  Crosshair,
  TrendUp,
  User,
} from "@/components/icons";
import {
  TechnicalGrid,
  GlowCard,
  GlowIcon,
} from "@/components/ui";

// Sample search results for the demo
const sampleResults = [
  {
    name: "Sarah Chen",
    title: "VP of Sales",
    company: "Amplitude",
    location: "San Francisco, CA",
    employees: "500-1000",
    revenue: "$50M-100M",
    industry: "SaaS",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Torres",
    title: "Head of Sales",
    company: "Notion",
    location: "New York, NY",
    employees: "1000-5000",
    revenue: "$100M+",
    industry: "SaaS",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Rodriguez",
    title: "VP Sales, Americas",
    company: "Figma",
    location: "Seattle, WA",
    employees: "500-1000",
    revenue: "$50M-100M",
    industry: "SaaS",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "David Kim",
    title: "Director of Sales",
    company: "Linear",
    location: "Austin, TX",
    employees: "100-500",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    revenue: "$10M-50M",
    industry: "SaaS",
  },
  {
    name: "Jessica Wright",
    title: "VP of Revenue",
    company: "Vercel",
    location: "Boston, MA",
    employees: "200-500",
    revenue: "$25M-50M",
    industry: "SaaS",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
  },
];

// Filter categories for showcase
const filterCategories = [
  {
    title: "Job Titles & Seniority",
    icon: <Briefcase />,
    filters: ["VP of Sales", "Head of Marketing", "Director", "C-Suite", "Manager", "Individual Contributor"],
  },
  {
    title: "Company Size",
    icon: <Users />,
    filters: ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"],
  },
  {
    title: "Revenue Range",
    icon: <CurrencyDollar />,
    filters: ["$0-1M", "$1-10M", "$10-50M", "$50-100M", "$100M+"],
  },
  {
    title: "Location",
    icon: <MapPin />,
    filters: ["United States", "EMEA", "APAC", "LATAM", "Remote", "Specific City"],
  },
  {
    title: "Industry",
    icon: <Buildings />,
    filters: ["SaaS", "FinTech", "Healthcare", "E-commerce", "Manufacturing", "Professional Services"],
  },
  {
    title: "Technology Stack",
    icon: <Stack />,
    filters: ["Salesforce", "HubSpot", "AWS", "Snowflake", "React", "Python"],
  },
];

export default function PeopleSearchPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);
  const isSearchInView = useInView(searchRef, { once: true, margin: "-100px" });

  const exampleQuery = "Find me VP Sales of SaaS companies in the United States doing $1-10M annual revenue";

  // Auto-typing animation for the search bar
  useEffect(() => {
    if (!isSearchInView) return;

    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setTypingIndex((prev) => {
          if (prev >= exampleQuery.length) {
            clearInterval(interval);
            setTimeout(() => {
              setIsSearching(true);
              setTimeout(() => {
                setIsSearching(false);
                setShowResults(true);
              }, 1500);
            }, 500);
            return prev;
          }
          return prev + 1;
        });
      }, 40);

      return () => clearInterval(interval);
    }, 800);

    return () => clearTimeout(startDelay);
  }, [isSearchInView]);

  useEffect(() => {
    setSearchQuery(exampleQuery.slice(0, typingIndex));
  }, [typingIndex]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3e8aff]/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[400px] lg:w-[800px] lg:h-[600px] bg-[#3e8aff]/10 rounded-full blur-[120px]" />

        {/* Animated grid background */}
        <div
          className={`absolute inset-0 ${isDark ? "opacity-[0.02]" : "opacity-[0.03]"}`}
          style={{
            backgroundImage: `linear-gradient(${isDark ? "#fff" : "#000"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "#fff" : "#000"} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-6"
            >
              <GlowIcon icon={<MagnifyingGlass />} size="xs" color="blue" variant="ghost" />
              People Search Database
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Find your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                ideal prospects
              </span>{" "}
              in seconds
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              Search 500M+ B2B professionals with natural language. Describe your ideal customer and get verified contacts instantly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4 mb-8"
            >
              <Link
                href="https://app.cleanlist.ai/auth/register"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#3e8aff] text-white font-medium rounded-lg hover:bg-[#3e8aff]/90 transition-colors shadow-lg shadow-[#3e8aff]/25"
              >
                Start Searching Free
                <ArrowRight />
              </Link>
              <Link
                href="https://calendly.com/cleanlist/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 border font-medium rounded-lg transition-colors ${isDark ? "border-white/[0.15] text-white hover:bg-white/[0.05]" : "border-gray-300 text-gray-700 hover:bg-gray-100"}`}
              >
                Book a Demo
              </Link>
            </motion.div>

            {/* Key Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-8 text-sm"
            >
              {[
                { value: "500M+", label: "Professionals" },
                { value: "98%", label: "Email Accuracy" },
                { value: "25", label: "Free Searches" },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <div className="text-xl font-bold text-[#3e8aff]">{stat.value}</div>
                  <div className={`${isDark ? "text-gray-500" : "text-gray-600"}`}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Interactive Search Demo */}
          <motion.div
            ref={searchRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className={`rounded-2xl overflow-hidden border shadow-2xl ${isDark ? "bg-[#030303] border-white/[0.08]" : "bg-white border-gray-200"}`}
          >
            {/* Search Header */}
            <div className={`px-6 py-4 border-b ${isDark ? "border-white/[0.08] bg-[#030303]" : "border-gray-200 bg-gray-50"}`}>
              <div className="flex items-center gap-3">
                <GlowIcon icon={<MagnifyingGlass />} size="md" color="blue" variant="glow" />
                <div>
                  <h3 className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>People Search</h3>
                  <p className="text-xs text-gray-500">Describe your ideal customer profile</p>
                </div>
              </div>
            </div>

            {/* Search Input */}
            <div className="p-6">
              <div className={`relative rounded-xl border-2 transition-colors ${isSearching ? "border-[#3e8aff]" : isDark ? "border-white/[0.1]" : "border-gray-200"}`}>
                <div className="flex items-start gap-3 p-4">
                  <Sparkle className={`mt-1 flex-shrink-0 ${isSearching ? "text-[#3e8aff] animate-pulse" : "text-gray-400"}`} width={20} height={20} />
                  <div className="flex-1 min-h-[60px]">
                    <p className={`text-lg ${isDark ? "text-white" : "text-gray-900"}`}>
                      {searchQuery}
                      {typingIndex < exampleQuery.length && (
                        <span className="inline-block w-0.5 h-5 bg-[#3e8aff] animate-pulse ml-0.5" />
                      )}
                    </p>
                  </div>
                </div>
                {isSearching && (
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3e8aff] to-[#60a5fa] animate-pulse`} />
                )}
              </div>

              {/* Results */}
              <AnimatePresence>
                {showResults && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-6"
                  >
                    {/* Results Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                          Found 2,847 matching prospects
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1.5 text-xs font-medium bg-[#3e8aff] text-white rounded-lg flex items-center gap-1">
                          <ListPlus width={14} height={14} />
                          Add to List
                        </button>
                        <button className={`px-3 py-1.5 text-xs font-medium rounded-lg flex items-center gap-1 ${isDark ? "bg-white/[0.05] text-gray-300" : "bg-gray-100 text-gray-700"}`}>
                          <Export width={14} height={14} />
                          Export
                        </button>
                      </div>
                    </div>

                    {/* Results Grid */}
                    <div className="grid gap-2">
                      {sampleResults.map((result, index) => (
                        <motion.div
                          key={result.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className={`flex items-center gap-4 p-3 rounded-lg transition-colors ${isDark ? "bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05]" : "bg-gray-50 hover:bg-gray-100 border border-gray-100"}`}
                        >
                          <div className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-[#3e8aff] to-[#60a5fa] flex-shrink-0">
                            <Image
                              src={result.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"}
                              alt={result.name}
                              width={40}
                              height={40}
                              className="w-full h-full object-cover"
                              unoptimized
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className={`font-medium truncate ${isDark ? "text-white" : "text-gray-900"}`}>
                                {result.name}
                              </span>
                              <LinkedinLogo className="text-[#0077b5] flex-shrink-0" width={14} height={14} />
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                              <span>{result.title}</span>
                              <span>at</span>
                              <span className="text-[#3e8aff]">{result.company}</span>
                            </div>
                          </div>
                          <div className="hidden md:flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <MapPin width={12} height={12} />
                              {result.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users width={12} height={12} />
                              {result.employees}
                            </span>
                            <span className="flex items-center gap-1">
                              <CurrencyDollar width={12} height={12} />
                              {result.revenue}
                            </span>
                          </div>
                          <button className="p-2 rounded-lg bg-[#3e8aff]/10 text-[#3e8aff] hover:bg-[#3e8aff]/20 transition-colors">
                            <UserPlus width={16} height={16} />
                          </button>
                        </motion.div>
                      ))}
                    </div>

                    {/* Load More */}
                    <div className="mt-4 text-center">
                      <button className={`text-sm ${isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"} transition-colors`}>
                        Show 2,842 more results...
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Stats */}
      <section className={`py-12 border-y ${isDark ? "border-white/[0.08] bg-[#030303]" : "border-black/[0.08] bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <TechnicalGrid
            columns={6}
            blocks={[
              {
                icon: <Database />,
                label: "Database",
                value: "500M+",
                subValue: "B2B professionals",
                color: "blue",
              },
              {
                icon: <Buildings />,
                label: "Companies",
                value: "60M+",
                subValue: "Verified profiles",
                color: "purple",
              },
              {
                icon: <Shield />,
                label: "Email Accuracy",
                value: "98%",
                subValue: "Triple verified",
                color: "green",
              },
              {
                icon: <Funnel />,
                label: "Filter Types",
                value: "30+",
                subValue: "Advanced filters",
                color: "yellow",
              },
              {
                icon: <Globe />,
                label: "Coverage",
                value: "Global",
                subValue: "190+ countries",
                color: "blue",
              },
              {
                icon: <Lightning />,
                label: "Response",
                value: "<2s",
                subValue: "Instant results",
                highlight: true,
              },
            ]}
          />
        </div>
      </section>

      {/* AI-Powered Search Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
              <GlowIcon icon={<Sparkle />} size="xs" color="blue" variant="ghost" />
              AI-Powered Search
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              Search the way you think
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Forget complex boolean queries. Just describe who you&apos;re looking for in plain English and let our AI find them.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {[
                  {
                    query: "Marketing leaders at fintech startups who raised Series B",
                    results: "1,234 matches",
                  },
                  {
                    query: "Engineers at companies using React and AWS in Europe",
                    results: "8,567 matches",
                  },
                  {
                    query: "Decision makers at healthcare companies with 100-500 employees",
                    results: "3,421 matches",
                  },
                ].map((example, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-xl border ${isDark ? "bg-white/[0.02] border-white/[0.08]" : "bg-gray-50 border-gray-200"}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#3e8aff]/10 flex items-center justify-center flex-shrink-0">
                        <MagnifyingGlass className="text-[#3e8aff]" width={16} height={16} />
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                          &ldquo;{example.query}&rdquo;
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          <span className="text-xs text-green-500 font-medium">{example.results}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  icon: <Sparkle />,
                  title: "Natural Language Processing",
                  description: "Our AI understands context, synonyms, and intent. Search for 'sales leaders' and find VPs, Directors, and Heads of Sales.",
                },
                {
                  icon: <Target />,
                  title: "Intent-Based Matching",
                  description: "We go beyond keywords to understand what you actually need, surfacing the most relevant prospects first.",
                },
                {
                  icon: <ArrowsClockwise />,
                  title: "Real-Time Data",
                  description: "Our database is continuously updated with job changes, funding events, and company updates.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <GlowIcon icon={feature.icon} size="lg" color="blue" variant="glow" />
                  <div>
                    <h3 className={`text-lg font-semibold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Filters Section */}
      <section className={`py-24 ${isDark ? "bg-[#030303]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
              <GlowIcon icon={<Funnel />} size="xs" color="blue" variant="ghost" />
              30+ Advanced Filters
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              Precision targeting at scale
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Combine filters to build hyper-targeted lists. From job titles to tech stack, we&apos;ve got every signal covered.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <GlowIcon icon={category.icon} size="md" color="blue" variant="glow" />
                    <h3 className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.filters.map((filter) => (
                      <span
                        key={filter}
                        className={`px-2.5 py-1 text-xs rounded-full ${isDark ? "bg-white/[0.05] text-gray-400 border border-white/[0.08]" : "bg-gray-100 text-gray-600 border border-gray-200"}`}
                      >
                        {filter}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-4">
              <GlowIcon icon={<Lightning />} size="xs" color="blue" variant="ghost" />
              Simple Workflow
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              From search to outreach in 3 steps
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Build targeted prospect lists in minutes, not hours. No more manual research or data cleaning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <MagnifyingGlass />,
                title: "Search",
                description: "Describe your ideal customer in plain English or use advanced filters to build your query.",
              },
              {
                step: "02",
                icon: <Crosshair />,
                title: "Refine",
                description: "Review matches, adjust filters, and save your search criteria for future prospecting.",
              },
              {
                step: "03",
                icon: <Export />,
                title: "Export",
                description: "Push contacts to your CRM, export to CSV, or start enrichment for complete contact data.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < 2 && (
                  <div className={`hidden md:block absolute top-12 left-1/2 w-full h-px ${isDark ? "bg-gradient-to-r from-white/[0.1] to-transparent" : "bg-gradient-to-r from-gray-200 to-transparent"}`} />
                )}
                <div className={`p-6 rounded-xl border ${isDark ? "bg-[#030303] border-white/[0.08]" : "bg-white border-gray-200"}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#3e8aff]/30">{step.step}</div>
                    <GlowIcon icon={step.icon} size="xl" color="blue" variant="glow" />
                  </div>
                  <h3 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className={`py-24 ${isDark ? "bg-[#030303]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              Built for modern GTM teams
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              From SDRs to revenue leaders, teams use People Search to fuel their pipeline.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Target />,
                title: "TAM Analysis",
                description: "Size your total addressable market with precision. Know exactly how many companies and contacts fit your ICP.",
                result: "10x faster market sizing",
              },
              {
                icon: <Users />,
                title: "Account-Based Marketing",
                description: "Build contact lists for your target accounts with verified decision-makers at every level.",
                result: "Complete buying committees",
              },
              {
                icon: <TrendUp />,
                title: "Outbound Campaigns",
                description: "Generate fresh prospect lists for cold outreach with triple-verified email addresses.",
                result: "98% email deliverability",
              },
              {
                icon: <Briefcase />,
                title: "Recruiting",
                description: "Find candidates with specific skills, experience, and backgrounds across any industry.",
                result: "Qualified candidate lists",
              },
              {
                icon: <ChartBar />,
                title: "Competitive Research",
                description: "Map your competitors&apos; org charts and identify key players in their teams.",
                result: "Strategic intelligence",
              },
              {
                icon: <Globe />,
                title: "Market Expansion",
                description: "Identify prospects in new geographies and verticals for international growth.",
                result: "Global coverage",
              },
            ].map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl transition-colors border ${isDark ? "bg-[#030303] border-white/[0.08] hover:border-[#3e8aff]/30" : "bg-white border-gray-200 hover:border-[#3e8aff]/50"}`}
              >
                <GlowIcon icon={useCase.icon} size="lg" color="blue" variant="glow" className="mb-4" />
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {useCase.title}
                </h3>
                <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {useCase.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-green-500">
                  <Check />
                  {useCase.result}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
