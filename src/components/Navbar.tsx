"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { List, X } from "@/components/icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
          <motion.a
            href="/"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
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
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <motion.a
              href="https://app.cleanlist.ai/auth/login"
              className="px-4 py-2 text-sm font-medium text-[#888888] hover:text-white transition-colors rounded-lg hover:bg-[rgba(255,255,255,0.05)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign In
            </motion.a>
            <motion.a
              href="/get-started"
              className="relative px-5 py-2.5 text-sm font-medium text-white rounded-lg overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#3e8aff] to-[#2563eb] transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#60a5fa] to-[#3e8aff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Get Started</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-[#888888] hover:text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X width={24} height={24} /> : <List width={24} height={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden glass border-t border-[rgba(255,255,255,0.08)]"
      >
        <div className="px-4 py-4 space-y-2">
          <a
            href="https://app.cleanlist.ai/auth/login"
            className="block px-4 py-3 text-sm font-medium text-[#888888] hover:text-white transition-colors rounded-lg hover:bg-[rgba(255,255,255,0.05)]"
          >
            Sign In
          </a>
          <a
            href="/get-started"
            className="block px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#3e8aff] to-[#2563eb] rounded-lg text-center"
          >
            Get Started
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
