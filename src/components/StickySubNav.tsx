"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const sections = [
  { id: "solutions", label: "Solutions" },
  { id: "how-it-works", label: "How It Works" },
  { id: "compare", label: "Compare" },
  { id: "integrations", label: "Integrations" },
  { id: "pricing", label: "Pricing" },
];

export default function StickySubNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (~600px)
      setIsVisible(window.scrollY > 600);
    };

    // Set up IntersectionObserver to track active section
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 120; // Account for both navbars
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`fixed top-16 left-0 right-0 z-40 backdrop-blur-xl border-b ${
            theme === "dark"
              ? "bg-[#1E1E1E]/90 border-white/10"
              : "bg-white/90 border-black/[0.08]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-center gap-0.5 md:gap-1 py-2 md:py-3 overflow-x-auto">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`px-2 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                    activeSection === section.id
                      ? "bg-[#3e8aff]/20 text-[#3e8aff]"
                      : theme === "dark"
                      ? "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                      : "text-gray-600 hover:text-gray-900 hover:bg-black/[0.05]"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
