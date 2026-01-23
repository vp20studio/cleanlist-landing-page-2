"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  CaretDown,
  Stack,
  Envelope,
  Sparkle,
  LinkedinLogo,
  FlowArrow,
  Users,
  Gear,
  Buildings,
  BookOpen,
  Plug,
  List,
  X,
  ArrowRight,
  Shield,
  Lightning,
  Crosshair,
  Sun,
  Moon,
  Article,
} from "@/components/icons";
import { useTheme } from "@/context/ThemeContext";
import { GlowIcon } from "@/components/ui";

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
        label: "People Search",
        href: "/product/people-search",
        icon: <Users />,
        description: "500M+ B2B database search",
        badge: "New",
      },
      {
        label: "Waterfall Enrichment",
        href: "/product/waterfall-enrichment",
        icon: <Stack />,
        description: "Multi-provider lead enrichment",
        badge: "Flagship",
      },
      {
        label: "Smart Columns",
        href: "/product/smart-columns",
        icon: <Sparkle />,
        description: "AI-powered data enrichment",
        badge: "AI",
      },
      {
        label: "ICP Scoring",
        href: "/product/icp-scoring",
        icon: <Crosshair />,
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
        icon: <LinkedinLogo />,
        description: "LinkedIn profile enrichment",
      },
      {
        label: "Playbook Builder",
        href: "/product/playbook-builder",
        icon: <FlowArrow />,
        description: "Visual workflow automation",
      },
    ],
  },
];

const useCaseItems: NavItem[] = [
  {
    label: "Sales Teams",
    href: "/use-cases/sales-teams",
    icon: <Users />,
    description: "Close more deals with verified data",
  },
  {
    label: "RevOps",
    href: "/use-cases/revops",
    icon: <Gear />,
    description: "Automate data hygiene at scale",
  },
  {
    label: "Agencies",
    href: "/use-cases/agencies",
    icon: <Buildings />,
    description: "White-label data solutions",
  },
];

const resourceItems: NavItem[] = [
  {
    label: "Blog",
    href: "/blog",
    icon: <BookOpen />,
    description: "Insights for growth teams",
  },
  {
    label: "Integrations",
    href: "/resources/integrations",
    icon: <Plug />,
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
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
                  <CaretDown
                    className={`transition-transform ${
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
                                    <GlowIcon icon={item.icon} size="sm" color="blue" variant="glow" />
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
                                <GlowIcon icon={<Shield />} size="xs" color="green" variant="ghost" />
                                <span>95%+ Accuracy</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <GlowIcon icon={<Lightning />} size="xs" color="yellow" variant="ghost" />
                                <span>From 1 Credit</span>
                              </div>
                            </div>
                            <Link
                              href="/pricing"
                              className="text-xs text-[#3e8aff] hover:underline flex items-center gap-1"
                            >
                              View pricing <ArrowRight />
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
                  <CaretDown
                    className={`transition-transform ${
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
                            <GlowIcon icon={item.icon} size="sm" color="blue" variant="glow" />
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
                  <CaretDown
                    className={`transition-transform ${
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
                            <GlowIcon icon={item.icon} size="sm" color="blue" variant="glow" />
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
                  <Sun />
                ) : (
                  <Moon />
                )}
              </button>

              <Link
                href="https://app.cleanlist.ai/auth/login"
                className={`px-4 py-2 text-sm transition-colors ${
                  theme === "dark"
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Sign In
              </Link>
              <Link
                href="https://app.cleanlist.ai/auth/register"
                className="px-5 py-2.5 text-sm font-medium bg-[#3e8aff] text-white rounded-lg hover:bg-[#3e8aff]/90 transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile: Theme Toggle & Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun />
                ) : (
                  <Moon />
                )}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`p-2 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {mobileOpen ? <X /> : <List />}
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
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-6">
                {/* Products */}
                <div>
                  <div className={`text-xs font-medium uppercase tracking-wider mb-3 ${
                    theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}>
                    Products
                  </div>
                  <div className="space-y-2">
                    {productSections.flatMap((section) =>
                      section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`flex items-center gap-3 p-3 rounded-lg min-h-[44px] ${
                            theme === "dark"
                              ? "hover:bg-white/[0.08]"
                              : "hover:bg-gray-100"
                          }`}
                          onClick={() => setMobileOpen(false)}
                        >
                          <GlowIcon icon={item.icon} size="sm" color="blue" variant="glow" />
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
                  <div className={`text-xs font-medium uppercase tracking-wider mb-3 ${
                    theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}>
                    Use Cases
                  </div>
                  <div className="space-y-2">
                    {useCaseItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 p-3 rounded-lg min-h-[44px] ${
                          theme === "dark"
                            ? "hover:bg-white/[0.08]"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <GlowIcon icon={item.icon} size="sm" color="blue" variant="glow" />
                        <span className={`text-sm ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div>
                  <div className={`text-xs font-medium uppercase tracking-wider mb-3 ${
                    theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}>
                    Resources
                  </div>
                  <div className="space-y-2">
                    {resourceItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center gap-3 p-3 rounded-lg min-h-[44px] ${
                          theme === "dark"
                            ? "hover:bg-white/[0.08]"
                            : "hover:bg-gray-100"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        <GlowIcon icon={item.icon} size="sm" color="blue" variant="glow" />
                        <span className={`text-sm ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className={`pt-2 border-t ${
                  theme === "dark" ? "border-white/[0.08]" : "border-gray-200"
                }`}>
                  <Link
                    href="/pricing"
                    className={`flex items-center p-3 rounded-lg min-h-[44px] text-sm ${
                      theme === "dark"
                        ? "text-gray-300 hover:text-white hover:bg-white/[0.08]"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    Pricing
                  </Link>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-3 pt-2">
                  <Link
                    href="https://app.cleanlist.ai/auth/register"
                    className="w-full py-3 text-center text-sm font-medium bg-[#3e8aff] text-white rounded-lg min-h-[44px] flex items-center justify-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="https://app.cleanlist.ai/auth/login"
                    className={`w-full py-3 text-center text-sm min-h-[44px] flex items-center justify-center ${
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
      <div className="h-16 md:h-20" />
    </>
  );
}
