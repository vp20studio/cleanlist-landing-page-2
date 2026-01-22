"use client";

import { motion } from "framer-motion";
import { Sparkle, Lightning, ChartBar, Link } from "@/components/icons";
import { useTheme } from "@/context/ThemeContext";
import { GlowIcon } from "@/components/ui";

interface CalloutItem {
  icon: React.ReactNode;
  text: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  delay: number;
  color: "blue" | "green" | "purple";
}

const callouts: CalloutItem[] = [
  {
    icon: <Sparkle />,
    text: "15+ Providers",
    position: "top-left",
    delay: 0.8,
    color: "blue",
  },
  {
    icon: <Lightning />,
    text: "Real-time",
    position: "top-right",
    delay: 1,
    color: "green",
  },
  {
    icon: <ChartBar />,
    text: "Waterfall Logic",
    position: "bottom-left",
    delay: 1.2,
    color: "purple",
  },
  {
    icon: <Link />,
    text: "CRM Sync",
    position: "bottom-right",
    delay: 1.4,
    color: "blue",
  },
];

const getPositionClasses = (position: CalloutItem["position"]) => {
  switch (position) {
    case "top-left":
      return "-left-4 md:-left-16 top-8 md:top-12";
    case "top-right":
      return "-right-4 md:-right-16 top-8 md:top-12";
    case "bottom-left":
      return "-left-4 md:-left-16 bottom-16 md:bottom-20";
    case "bottom-right":
      return "-right-4 md:-right-16 bottom-16 md:bottom-20";
  }
};

const getFloatAnimation = (position: CalloutItem["position"]) => {
  const isLeft = position.includes("left");
  const isTop = position.includes("top");

  return {
    y: [0, isTop ? -8 : 8, 0],
    x: [0, isLeft ? -4 : 4, 0],
  };
};

const FeatureCallout = ({ callout }: { callout: CalloutItem }) => {
  const positionClasses = getPositionClasses(callout.position);
  const floatAnimation = getFloatAnimation(callout.position);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        ...floatAnimation
      }}
      transition={{
        opacity: { duration: 0.4, delay: callout.delay },
        scale: { duration: 0.4, delay: callout.delay },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: callout.delay },
        x: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: callout.delay + 0.5 },
      }}
      whileHover={{ scale: 1.1 }}
      className={`absolute ${positionClasses} z-20 hidden sm:block`}
    >
      <div className={`flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md border shadow-lg ${
        isDark
          ? "bg-[#0a0a0a]/90 border-white/[0.08]"
          : "bg-white/90 border-black/[0.08]"
      }`}>
        <GlowIcon icon={callout.icon} size="xs" color={callout.color} variant="glow" />
        <span className={`text-xs font-medium whitespace-nowrap ${isDark ? "text-white" : "text-gray-900"}`}>
          {callout.text}
        </span>
      </div>

      {/* Connector line */}
      <motion.div
        className={`absolute ${
          callout.position.includes("left")
            ? "right-0 translate-x-full"
            : "left-0 -translate-x-full"
        } top-1/2 -translate-y-1/2 w-4 md:w-8 h-px ${
          callout.position.includes("left")
            ? isDark ? "bg-gradient-to-r from-white/20 to-transparent" : "bg-gradient-to-r from-gray-300 to-transparent"
            : isDark ? "bg-gradient-to-l from-white/20 to-transparent" : "bg-gradient-to-l from-gray-300 to-transparent"
        }`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.3, delay: callout.delay + 0.2 }}
      />
    </motion.div>
  );
};

export default function FeatureCallouts() {
  return (
    <>
      {callouts.map((callout, index) => (
        <FeatureCallout key={index} callout={callout} />
      ))}
    </>
  );
}
