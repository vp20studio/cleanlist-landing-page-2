"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const sections = [
  { id: "solutions", label: "Solutions" },
  { id: "demo", label: "How It Works" },
  { id: "compare", label: "Compare" },
  { id: "integrations", label: "Integrations" },
  { id: "pricing", label: "Pricing" },
];

export default function StickySubNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Show after scrolling past hero (~600px)
          setIsVisible(window.scrollY > 600);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Set up IntersectionObserver to track active section
    const observerOptions = {
      root: null,
      rootMargin: "-120px 0px -60% 0px",
      threshold: 0.1,
    };

    let debounceTimer: NodeJS.Timeout | null = null;
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Debounce to prevent rapid state changes
          if (debounceTimer) clearTimeout(debounceTimer);
          debounceTimer = setTimeout(() => {
            setActiveSection(entry.target.id);
          }, 50);
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      if (debounceTimer) clearTimeout(debounceTimer);
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
          className={`fixed top-16 left-0 right-0 z-40 border-b ${
            theme === "dark"
              ? "bg-[#030303] border-white/[0.08]"
              : "bg-white/90 backdrop-blur-xl border-black/[0.08]"
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
