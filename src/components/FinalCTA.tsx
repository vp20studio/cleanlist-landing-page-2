"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { ArrowRight, Calendar } from "@phosphor-icons/react";

export default function FinalCTA() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className={`py-16 md:py-20 ${isDark ? "bg-[#030303]" : "bg-[#f8fafc]"}`}>
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
            Ready to clean your data?
          </h2>

          <p className={`text-base md:text-lg mb-8 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Get 30 free credits. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="https://portal.cleanlist.ai/auth/register"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#3e8aff] hover:bg-[#2d7af0] text-white font-semibold rounded-lg text-sm transition-colors"
            >
              Get Started Free
              <ArrowRight size={18} weight="bold" />
            </Link>

            <Link
              href="https://calendly.com/cleanlist/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg text-sm transition-colors border ${
                isDark
                  ? "bg-white/5 hover:bg-white/10 text-white border-white/10"
                  : "bg-white hover:bg-gray-50 text-gray-900 border-gray-200"
              }`}
            >
              <Calendar size={18} weight="fill" className="text-[#3e8aff]" />
              Book a Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
