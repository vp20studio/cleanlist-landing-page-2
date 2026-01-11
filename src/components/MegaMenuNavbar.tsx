"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Layers,
  Mail,
  Sparkles,
  Linkedin,
  Workflow,
  Users,
  Settings,
  Building2,
  BookOpen,
  Plug,
  Menu,
  X,
  ArrowRight,
  Shield,
  Zap,
  Target,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  description: string;
  badge?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const productSections: NavSection[] = [
  {
    title: "Core Platform",
    items: [
      {
        label: "Waterfall Enrichment",
        href: "/product/waterfall-enrichment",
        icon: <Layers className="w-5 h-5" />,
        description: "Multi-provider lead enrichment",
        badge: "Flagship",
      },
      {
        label: "Email & Phone Finder",
        href: "/product/email-phone-finder",
        icon: <Mail className="w-5 h-5" />,
        description: "Verified contact discovery",
      },
      {
        label: "Smart Columns",
        href: "/product/smart-columns",
        icon: <Sparkles className="w-5 h-5" />,
        description: "AI-powered data enrichment",
        badge: "AI",
      },
      {
        label: "ICP Scoring",
        href: "/product/icp-scoring",
        icon: <Target className="w-5 h-5" />,
        description: "Score leads against your ICP",
      },
    ],
  },
  {
    title: "Acquisition",
    items: [
      {
        label: "Chrome Extension",
        href: "/product/sales-nav-scraper",
        icon: <Linkedin className="w-5 h-5" />,
        description: "LinkedIn profile enrichment",
      },
      {
        label: "Playbook Builder",
        href: "/product/playbook-builder",
        icon: <Workflow className="w-5 h-5" />,
        description: "Visual workflow automation",
        badge: "New",
      },
    ],
  },
];

const useCaseItems: NavItem[] = [
  {
    label: "Sales Teams",
    href: "/use-cases/sales-teams",
    icon: <Users className="w-5 h-5" />,
    description: "Close more deals with verified data",
  },
  {
    label: "RevOps",
    href: "/use-cases/revops",
    icon: <Settings className="w-5 h-5" />,
    description: "Automate data hygiene at scale",
  },
  {
    label: "Agencies",
    href: "/use-cases/agencies",
    icon: <Building2 className="w-5 h-5" />,
    description: "White-label data solutions",
  },
];

const resourceItems: NavItem[] = [
  {
    label: "Case Studies",
    href: "/resources/case-studies",
    icon: <BookOpen className="w-5 h-5" />,
    description: "See how teams use Cleanlist",
  },
  {
    label: "Integrations",
    href: "/resources/integrations",
    icon: <Plug className="w-5 h-5" />,
    description: "Connect with your stack",
  },
];

export default function MegaMenuNavbar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors ${
          theme === "dark"
            ? "border-white/[0.08] bg-[#030303]"
            : "border-black/[0.08] bg-white/90 backdrop-blur-xl"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src={theme === "dark" ? "/images/logo-dark.png" : "/images/logo-light.png"}
                alt="Cleanlist"
                width={140}
                height={32}
                className="h-7 sm:h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("products")}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1 px-4 py-2 text-sm transition-colors ${
                  theme === "dark"
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}>
                  Products
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeMenu === "products" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeMenu === "products" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className={`w-[540px] border rounded-xl shadow-2xl overflow-hidden ${
                        theme === "dark"
                          ? "bg-[#0a0a0a] border-white/[0.08]"
                          : "bg-white border-gray-200"
                      }`}>
                        <div className="grid grid-cols-2 gap-0">
                          {productSections.map((section, idx) => (
                            <div
                              key={section.title}
                              className={`p-4 ${idx === 1 ? (theme === "dark" ? "bg-[#111111]" : "bg-gray-50") : ""}`}
                            >
                              <div className={`text-xs font-medium uppercase tracking-wider mb-3 ${
                                theme === "dark" ? "text-gray-500" : "text-gray-400"
                              }`}>
                                {section.title}
                              </div>
                              <div className="space-y-1">
                                {section.items.map((item) => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-start gap-3 p-2 rounded-lg transition-colors group ${
                                      theme === "dark"
                                        ? "hover:bg-white/[0.08]"
                                        : "hover:bg-gray-100"
                                    }`}
                                  >
                                    <div className="w-9 h-9 rounded-lg bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff] group-hover:bg-[#3e8aff]/20 transition-colors">
                                      {item.icon}
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2">
                                        <span className={`text-sm font-medium transition-colors group-hover:text-[#3e8aff] ${
                                          theme === "dark" ? "text-white" : "text-gray-900"
                                        }`}>
                                          {item.label}
                                        </span>
                                        {item.badge && (
                                          <span className="px-1.5 py-0.5 text-[10px] font-medium bg-[#3e8aff]/20 text-[#3e8aff] rounded">
                                            {item.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className={`text-xs mt-0.5 ${
                                        theme === "dark" ? "text-gray-500" : "text-gray-500"
                                      }`}>
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Footer with stats */}
                        <div className={`border-t px-4 py-3 ${
                          theme === "dark"
                            ? "border-white/[0.08] bg-[#080808]"
                            : "border-gray-200 bg-gray-50"
                        }`}>
                          <div className="flex items-center justify-between">
                            <div className={`flex items-center gap-6 text-xs ${
                              theme === "dark" ? "text-gray-500" : "text-gray-500"
                            }`}>
                              <div className="flex items-center gap-1.5">
                                <Shield className="w-3.5 h-3.5 text-green-500" />
                                <span>95%+ Accuracy</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Zap className="w-3.5 h-3.5 text-yellow-500" />
                                <span>From 1 Credit</span>
                              </div>
                            </div>
                            <Link
                              href="/pricing"
                              className="text-xs text-[#3e8aff] hover:underline flex items-center gap-1"
                            >
                              View pricing <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Use Cases Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("usecases")}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1 px-4 py-2 text-sm transition-colors ${
                  theme === "dark"
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}>
                  Use Cases
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeMenu === "usecases" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeMenu === "usecases" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className={`w-[320px] border rounded-xl shadow-2xl p-2 ${
                        theme === "dark"
                          ? "bg-[#0a0a0a] border-white/[0.08]"
                          : "bg-white border-gray-200"
                      }`}>
                        {useCaseItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-start gap-3 p-3 rounded-lg transition-colors group ${
                              theme === "dark"
                                ? "hover:bg-white/[0.08]"
                                : "hover:bg-gray-100"
                            }`}
                          >
                            <div className="w-9 h-9 rounded-lg bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff] group-hover:bg-[#3e8aff]/20 transition-colors">
                              {item.icon}
                            </div>
                            <div>
                              <span className={`text-sm font-medium transition-colors group-hover:text-[#3e8aff] ${
                                theme === "dark" ? "text-white" : "text-gray-900"
                              }`}>
                                {item.label}
                              </span>
                              <p className={`text-xs mt-0.5 ${
                                theme === "dark" ? "text-gray-500" : "text-gray-500"
                              }`}>
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("resources")}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`flex items-center gap-1 px-4 py-2 text-sm transition-colors ${
                  theme === "dark"
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}>
                  Resources
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeMenu === "resources" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeMenu === "resources" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className={`w-[280px] border rounded-xl shadow-2xl p-2 ${
                        theme === "dark"
                          ? "bg-[#0a0a0a] border-white/[0.08]"
                          : "bg-white border-gray-200"
                      }`}>
                        {resourceItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-start gap-3 p-3 rounded-lg transition-colors group ${
                              theme === "dark"
                                ? "hover:bg-white/[0.08]"
                                : "hover:bg-gray-100"
                            }`}
                          >
                            <div className="w-9 h-9 rounded-lg bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff] group-hover:bg-[#3e8aff]/20 transition-colors">
                              {item.icon}
                            </div>
                            <div>
                              <span className={`text-sm font-medium transition-colors group-hover:text-[#3e8aff] ${
                                theme === "dark" ? "text-white" : "text-gray-900"
                              }`}>
                                {item.label}
                              </span>
                              <p className={`text-xs mt-0.5 ${
                                theme === "dark" ? "text-gray-500" : "text-gray-500"
                              }`}>
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Direct Links */}
              <Link
                href="/pricing"
                className={`px-4 py-2 text-sm transition-colors ${
                  theme === "dark"
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Pricing
              </Link>
              <Link
                href="/about-us"
                className={`px-4 py-2 text-sm transition-colors ${
                  theme === "dark"
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                About
              </Link>
            </div>

            {/* CTA Buttons & Theme Toggle */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white hover:bg-white/[0.08]"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <Link
                href="#"
                className={`px-4 py-2 text-sm transition-colors ${
                  theme === "dark"
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Sign In
              </Link>
              <Link
                href="#"
                className="px-5 py-2.5 text-sm font-medium bg-[#3e8aff] text-white rounded-lg hover:bg-[#3e8aff]/90 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile: Theme Toggle & Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2 transition-colors ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden border-t ${
                theme === "dark"
                  ? "border-white/[0.08] bg-[#0a0a0a]"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-4">
                {/* Products */}
                <div>
                  <div className={`text-xs font-medium uppercase tracking-wider mb-2 ${
                    theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}>
                    Products
                  </div>
                  <div className="space-y-1">
                    {productSections.flatMap((section) =>
                      section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center gap-3 p-2 rounded-lg ${
                            theme === "dark"
                              ? "hover:bg-white/[0.08]"
                              : "hover:bg-gray-100"
                          }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff]">
                            {item.icon}
                          </div>
                          <span className={`text-sm ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}>{item.label}</span>
                        </Link>
                      ))
                    )}
                  </div>
                </div>

                {/* Use Cases */}
                <div>
                  <div className={`text-xs font-medium uppercase tracking-wider mb-2 ${
                    theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}>
                    Use Cases
                  </div>
                  <div className="space-y-1">
                    {useCaseItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 p-2 rounded-lg ${
                          theme === "dark"
                            ? "hover:bg-white/[0.08]"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff]">
                          {item.icon}
                        </div>
                        <span className={`text-sm ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div>
                  <div className={`text-xs font-medium uppercase tracking-wider mb-2 ${
                    theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}>
                    Resources
                  </div>
                  <div className="space-y-1">
                    {resourceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 p-2 rounded-lg ${
                          theme === "dark"
                            ? "hover:bg-white/[0.08]"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff]">
                          {item.icon}
                        </div>
                        <span className={`text-sm ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className={`flex items-center gap-4 pt-4 border-t ${
                  theme === "dark" ? "border-white/[0.08]" : "border-gray-200"
                }`}>
                  <Link
                    href="/pricing"
                    className={`text-sm ${
                      theme === "dark"
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/about-us"
                    className={`text-sm ${
                      theme === "dark"
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    About
                  </Link>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-2 pt-4">
                  <Link
                    href="#"
                    className="w-full py-2.5 text-center text-sm font-medium bg-[#3e8aff] text-white rounded-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className={`w-full py-2.5 text-center text-sm ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    Sign In
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
