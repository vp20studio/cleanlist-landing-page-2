"use client";

import { motion } from "framer-motion";

// Generate random star positions
const generateStars = (count: number, seed: number = 0) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + seed,
    x: ((i * 17 + seed * 13) % 100),
    y: ((i * 23 + seed * 7) % 100),
    size: ((i * 11 + seed) % 20) / 10 + 1,
    duration: ((i * 7 + seed) % 20) / 10 + 2,
    delay: ((i * 13 + seed) % 30) / 10,
    maxOpacity: 0.4 + ((i * 3 + seed) % 40) / 100,
  }));
};

interface StarsBackgroundProps {
  starCount?: number;
  seed?: number;
  className?: string;
  showRocket?: boolean;
}

function Rocket() {
  return (
    <motion.div
      className="absolute bottom-[20%] right-[12%] hidden lg:block"
      initial={{ y: 0, opacity: 1 }}
      animate={{
        y: [0, -50, -800],
        opacity: [1, 1, 1, 0],
      }}
      transition={{
        duration: 20,
        ease: [0.25, 0.1, 0.25, 1],
        times: [0, 0.1, 0.9, 1],
        repeat: Infinity,
        repeatDelay: 8,
      }}
    >
      {/* Rocket container */}
      <div className="relative">
        {/* Large smoke cloud at base */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`smoke-${i}`}
              className="absolute rounded-full"
              style={{
                width: 30 + (i % 4) * 15,
                height: 30 + (i % 4) * 15,
                background: `radial-gradient(circle, rgba(200,200,200,${0.4 - i * 0.025}) 0%, transparent 70%)`,
                left: `${(i - 6) * 12}px`,
                bottom: `${(i % 3) * -10}px`,
              }}
              animate={{
                y: [0, 60 + i * 8],
                x: [(i - 6) * 3, (i - 6) * 20],
                opacity: [0.5, 0],
                scale: [1, 3 + i * 0.3],
              }}
              transition={{
                duration: 2 + i * 0.15,
                repeat: Infinity,
                delay: i * 0.08,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Engine glow */}
        <motion.div
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-10 h-24"
          animate={{
            opacity: [0.7, 1, 0.7],
            scaleY: [0.85, 1.15, 0.85],
          }}
          transition={{
            duration: 0.12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Outer glow */}
          <div
            className="absolute inset-0 blur-sm"
            style={{
              background: "radial-gradient(ellipse at top, #fbbf24 0%, #f97316 40%, transparent 70%)",
            }}
          />
          {/* Main flame */}
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(to bottom, #fff 0%, #fef3c7 10%, #fbbf24 25%, #f97316 50%, #dc2626 75%, transparent 100%)",
              clipPath: "polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)",
              filter: "blur(1px)",
            }}
          />
          {/* Inner flame - hot core */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-16"
            style={{
              background: "linear-gradient(to bottom, #fff 0%, #bfdbfe 30%, #60a5fa 60%, transparent 100%)",
              clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
            }}
          />
        </motion.div>

        {/* Rocket body - larger SpaceX Falcon style */}
        <svg
          width="40"
          height="100"
          viewBox="0 0 40 100"
          fill="none"
          className="drop-shadow-2xl"
        >
          {/* Main body */}
          <path
            d="M20 0C20 0 8 12 8 32V82H12V88H16V94H24V88H28V82H32V32C32 12 20 0 20 0Z"
            fill="url(#rocketBody)"
          />
          {/* Body highlight */}
          <path
            d="M20 0C20 0 14 12 14 32V82H16V32C16 14 20 2 20 2V0Z"
            fill="rgba(255,255,255,0.3)"
          />
          {/* Window */}
          <ellipse cx="20" cy="28" rx="5" ry="6" fill="#0f172a" stroke="#3b82f6" strokeWidth="1" />
          <ellipse cx="20" cy="27" rx="2.5" ry="3" fill="#1e40af" opacity="0.6" />
          <ellipse cx="19" cy="26" rx="1" ry="1.5" fill="#60a5fa" opacity="0.8" />
          {/* Fins */}
          <path d="M8 68L0 88H8V68Z" fill="url(#finGradient)" />
          <path d="M32 68L40 88H32V68Z" fill="url(#finGradient)" />
          {/* Landing legs hint */}
          <path d="M12 82L8 94" stroke="#64748b" strokeWidth="1.5" />
          <path d="M28 82L32 94" stroke="#64748b" strokeWidth="1.5" />
          {/* Body panel lines */}
          <line x1="12" y1="45" x2="28" y2="45" stroke="#94a3b8" strokeWidth="0.5" opacity="0.5" />
          <line x1="12" y1="55" x2="28" y2="55" stroke="#94a3b8" strokeWidth="0.5" opacity="0.5" />
          <line x1="12" y1="65" x2="28" y2="65" stroke="#94a3b8" strokeWidth="0.5" opacity="0.5" />
          {/* Grid fins */}
          <rect x="6" y="38" width="4" height="6" fill="#475569" rx="0.5" />
          <rect x="30" y="38" width="4" height="6" fill="#475569" rx="0.5" />
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="rocketBody" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="30%" stopColor="#f1f5f9" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#f1f5f9" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
            <linearGradient id="finGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
        </svg>

        {/* Additional smoke trails */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`trail-${i}`}
            className="absolute -bottom-20 left-1/2 rounded-full"
            style={{
              width: 8 + (i % 3) * 4,
              height: 8 + (i % 3) * 4,
              background: `rgba(180, 180, 180, ${0.3 - i * 0.03})`,
              marginLeft: `${(i - 4) * 8}px`,
            }}
            animate={{
              y: [0, 80 + i * 10],
              x: [(i - 4) * 2, (i - 4) * 15],
              opacity: [0.4, 0],
              scale: [0.8, 2.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export function StarsBackground({ starCount = 50, seed = 0, className = "", showRocket = false }: StarsBackgroundProps) {
  const stars = generateStars(starCount, seed);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Stars container with overflow hidden */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated stars */}
        {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [0.1, star.maxOpacity, 0.1],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      </div>

      {/* Rocket - only on desktop, outside overflow container so it can fly up */}
      {showRocket && <Rocket />}
    </div>
  );
}
