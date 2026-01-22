"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X, CaretDown, Sparkle, Envelope, LinkedinLogo, Lightning } from "@/components/icons";
import Link from "next/link";

const productLinks = [
  {
    name: "Waterfall Enrichment",
    href: "/product/enrichment",
    description: "15+ data sources, one Golden Record",
    icon: Sparkle,
  },
  {
    name: "Email Verification",
    href: "/product/email-verification",
    description: "Triple-layer verification system",
    icon: Envelope,
  },
  {
    name: "LinkedIn Scraper",
    href: "/product/linkedin-scraper",
    description: "Chrome Extension for Sales Navigator",
    icon: LinkedinLogo,
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export default function ProductNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass border-b border-[rgba(255,255,255,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 md:w-9 md:h-9">
              <div className="absolute inset-0 bg-[#3e8aff] rounded-lg opacity-20 blur-md group-hover:opacity-30 transition-opacity" />
              <div className="relative w-full h-full bg-gradient-to-br from-[#3e8aff] to-[#2563eb] rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 text-white"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 11 12 14 22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
            </div>
            <span className="text-xl md:text-2xl font-semibold tracking-tight text-white">
              Cleanlist
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductDropdownOpen(true)}
              onMouseLeave={() => setIsProductDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#888888] hover:text-white transition-colors rounded-lg hover:bg-[rgba(255,255,255,0.05)]">
                Product
                <CaretDown
                  width={16} height={16}
                  className={`transition-transform ${isProductDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isProductDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-80 mt-2 p-2 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0a0a0a] backdrop-blur-xl shadow-2xl"
                  >
                    {productLinks.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-[rgba(255,255,255,0.05)] transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[rgba(62,138,255,0.1)] flex items-center justify-center text-[#3e8aff] group-hover:bg-[rgba(62,138,255,0.15)] transition-colors">
                          <product.icon width={20} height={20} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white group-hover:text-[#3e8aff] transition-colors">
                            {product.name}
                          </p>
                          <p className="text-xs text-[#888888]">
                            {product.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#888888] hover:text-white transition-colors rounded-lg hover:bg-[rgba(255,255,255,0.05)]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/sign-in"
              className="px-4 py-2 text-sm font-medium text-[#888888] hover:text-white transition-colors rounded-lg hover:bg-[rgba(255,255,255,0.05)]"
            >
              Sign In
            </Link>
            <Link
              href="/get-started"
              className="relative px-5 py-2.5 text-sm font-medium text-white rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#3e8aff] to-[#2563eb] transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#60a5fa] to-[#3e8aff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Get Started</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-[#888888] hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X width={24} height={24} /> : <List width={24} height={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass border-t border-[rgba(255,255,255,0.08)]"
          >
            <div className="px-4 py-4 space-y-2">
              {/* Product Links */}
              <div className="pb-2 mb-2 border-b border-[rgba(255,255,255,0.08)]">
                <p className="text-xs text-[#888888] uppercase tracking-wider mb-2 px-3">
                  Products
                </p>
                {productLinks.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[#888888] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                  >
                    <product.icon width={16} height={16} />
                    {product.name}
                  </Link>
                ))}
              </div>

              {/* Other Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-[#888888] hover:text-white transition-colors rounded-lg hover:bg-[rgba(255,255,255,0.05)]"
                >
                  {link.name}
                </Link>
              ))}

              {/* CTA */}
              <div className="pt-2 space-y-2">
                <Link
                  href="/sign-in"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-[#888888] hover:text-white transition-colors rounded-lg hover:bg-[rgba(255,255,255,0.05)] text-center"
                >
                  Sign In
                </Link>
                <Link
                  href="/get-started"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#3e8aff] to-[#2563eb] rounded-lg text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
