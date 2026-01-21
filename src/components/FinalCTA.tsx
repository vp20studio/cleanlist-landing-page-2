"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { ArrowRight, Calendar } from "@phosphor-icons/react";

// Generate random star positions for warp effect
const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 2 + 1,
    delay: Math.random() * 3,
  }));
};

const stars = generateStars(40);

// Generate warp lines
const warpLines = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  angle: (i / 20) * 360,
  length: Math.random() * 100 + 50,
  delay: Math.random() * 2,
  duration: Math.random() * 1.5 + 1,
}));

export default function FinalCTA() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className={`py-24 md:py-32 relative overflow-hidden ${isDark ? "bg-[#030303]" : "bg-[#f8fafc]"}`}>
      {/* Warp Speed Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Central glow point */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full blur-[100px] ${
            isDark ? "bg-[#3e8aff]/30" : "bg-[#3e8aff]/20"
          }`}
        />

        {/* Warp speed streaks emanating from center */}
        <div className="absolute inset-0 flex items-center justify-center">
          {warpLines.map((line) => (
            <motion.div
              key={line.id}
              className="absolute"
              style={{
                width: "2px",
                height: `${line.length}px`,
                background: isDark
                  ? `linear-gradient(to bottom, transparent, rgba(62, 138, 255, 0.4), transparent)`
                  : `linear-gradient(to bottom, transparent, rgba(62, 138, 255, 0.3), transparent)`,
                transformOrigin: "center top",
                transform: `rotate(${line.angle}deg)`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scaleY: [0.3, 1.5, 0.3],
              }}
              transition={{
                duration: line.duration,
                repeat: Infinity,
                delay: line.delay,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Animated stars rushing past */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className={`absolute rounded-full ${isDark ? "bg-white" : "bg-[#3e8aff]"}`}
            style={{
              width: star.size,
              height: star.size,
              left: `${star.x}%`,
              top: `${star.y}%`,
            }}
            animate={{
              opacity: [0, isDark ? 0.6 : 0.4, 0],
              scale: [0.5, 1.5, 0.5],
              x: [0, (star.x - 50) * 2],
              y: [0, (star.y - 50) * 2],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Subtle radial gradient overlay */}
        <div
          className={`absolute inset-0 ${isDark ? "opacity-60" : "opacity-40"}`}
          style={{
            background: isDark
              ? "radial-gradient(ellipse at center, rgba(62, 138, 255, 0.1) 0%, transparent 70%)"
              : "radial-gradient(ellipse at center, rgba(62, 138, 255, 0.08) 0%, transparent 70%)",
          }}
        />

        {/* Outer vignette for depth */}
        <div
          className="absolute inset-0"
          style={{
            background: isDark
              ? "radial-gradient(ellipse at center, transparent 30%, rgba(3, 3, 3, 0.8) 100%)"
              : "radial-gradient(ellipse at center, transparent 30%, rgba(248, 250, 252, 0.9) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
            Ready to clean your data?
          </h2>

          <p className={`text-lg md:text-xl lg:text-2xl mb-10 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Get 30 free credits. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://portal.cleanlist.ai/auth/register"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#3e8aff] hover:bg-[#2d7af0] text-white font-semibold rounded-xl text-base md:text-lg transition-all duration-300 shadow-xl shadow-[#3e8aff]/30 hover:shadow-2xl hover:shadow-[#3e8aff]/40 hover:scale-[1.02]"
            >
              Get Started Free
              <ArrowRight size={22} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="https://calendly.com/cleanlist/30min"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2.5 px-8 py-4 font-semibold rounded-xl text-base md:text-lg transition-all duration-300 border-2 hover:scale-[1.02] ${
                isDark
                  ? "bg-white/5 hover:bg-white/10 text-white border-white/20 hover:border-white/30"
                  : "bg-white/80 hover:bg-white text-gray-900 border-gray-300 hover:border-gray-400 shadow-lg"
              }`}
            >
              <Calendar size={22} weight="fill" className="text-[#3e8aff]" />
              Book a Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
