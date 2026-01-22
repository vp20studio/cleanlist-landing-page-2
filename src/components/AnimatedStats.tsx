"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Database, Stack, Crosshair, Lightning } from "@/components/icons";
import { useTheme } from "@/context/ThemeContext";
import { GlowIcon } from "@/components/ui";

interface StatItem {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  duration: number;
}

const useCountAnimation = (end: number, duration: number, isInView: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // easeOutQuart for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return count;
};

const StatCard = ({ stat, index, isInView }: { stat: StatItem; index: number; isInView: boolean }) => {
  const count = useCountAnimation(stat.value, stat.duration, isInView);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="relative group"
    >
      <div className={`flex flex-col items-center gap-2 px-6 py-4 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
        isDark
          ? "bg-white/[0.03] border border-white/[0.08] group-hover:border-[#3e8aff]/30 group-hover:bg-white/[0.05]"
          : "bg-black/[0.02] border border-black/[0.08] group-hover:border-[#3e8aff]/30 group-hover:bg-black/[0.03]"
      }`}>
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-[#3e8aff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />

        {/* Icon */}
        <GlowIcon
          icon={stat.icon}
          size="sm"
          color="blue"
          variant="glow"
        />

        {/* Value */}
        <div className="flex items-baseline gap-0.5">
          <span className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            {count}
          </span>
          <span className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
            {stat.suffix}
          </span>
        </div>

        {/* Label */}
        <span className={`text-sm text-center whitespace-nowrap ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          {stat.label}
        </span>
      </div>
    </motion.div>
  );
};

export default function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats: StatItem[] = [
    {
      icon: <Database />,
      value: 400,
      suffix: "M+",
      label: "Contacts",
      duration: 2,
    },
    {
      icon: <Stack />,
      value: 15,
      suffix: "+",
      label: "Data Providers",
      duration: 1.5,
    },
    {
      icon: <Crosshair />,
      value: 95,
      suffix: "%",
      label: "Accuracy",
      duration: 1.8,
    },
    {
      icon: <Lightning />,
      value: 5,
      suffix: "min",
      label: "Setup Time",
      duration: 1,
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto mb-10"
    >
      {stats.map((stat, index) => (
        <StatCard key={index} stat={stat} index={index} isInView={isInView} />
      ))}
    </motion.div>
  );
}
