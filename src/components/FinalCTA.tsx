"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 bg-[#030303] overflow-hidden">
      {/* Deep radial gradient from bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(62, 138, 255, 0.15), transparent 70%)",
        }}
      />

      {/* Center glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(62, 138, 255, 0.1), transparent 50%)",
        }}
      />

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#3e8aff] rounded-full opacity-30"
            style={{
              left: `${20 + i * 12}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(62,138,255,0.3)] bg-[rgba(62,138,255,0.05)] text-sm text-[#3e8aff]">
            <Sparkles className="w-4 h-4" />
            Join 2,000+ companies
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
        >
          Ready to reclaim your{" "}
          <span className="gradient-text-blue">data quality</span>?
        </motion.h2>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-[#888888] mb-10 max-w-2xl mx-auto"
        >
          Join 2,000+ companies cleaning their pipeline with Cleanlist. Start
          free, see results in minutes.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.a
            href="/get-started"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 text-base md:text-lg font-medium text-white rounded-xl overflow-hidden"
          >
            {/* Button background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3e8aff] to-[#2563eb]" />

            {/* Hover gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#60a5fa] to-[#3e8aff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Glow effect */}
            <div className="absolute -inset-1 bg-[#3e8aff] opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />

            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{
                boxShadow: "0 0 40px rgba(62, 138, 255, 0.4)",
              }}
              animate={{
                boxShadow: [
                  "0 0 40px rgba(62, 138, 255, 0.4)",
                  "0 0 60px rgba(62, 138, 255, 0.6)",
                  "0 0 40px rgba(62, 138, 255, 0.4)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <span className="relative z-10">Get Started Now</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-[#888888]"
        >
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#22c55e]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            No credit card required
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#22c55e]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            14-day free trial
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-[#22c55e]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Cancel anytime
          </span>
        </motion.div>
      </div>
    </section>
  );
}
