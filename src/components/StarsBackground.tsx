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
      className="absolute bottom-0 right-[10%] hidden lg:block"
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: [100, 0, -600],
        opacity: [0, 1, 1, 0.8],
      }}
      transition={{
        duration: 30,
        ease: "easeOut",
        times: [0, 0.05, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 10,
      }}
    >
      {/* Rocket container */}
      <div className="relative">
        {/* Engine glow */}
        <motion.div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-6 h-16"
          animate={{
            opacity: [0.6, 1, 0.6],
            scaleY: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 0.15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Main flame */}
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(to bottom, #fff 0%, #fbbf24 20%, #f97316 50%, #dc2626 80%, transparent 100%)",
              clipPath: "polygon(30% 0%, 70% 0%, 100% 100%, 0% 100%)",
              filter: "blur(1px)",
            }}
          />
          {/* Inner flame */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-10"
            style={{
              background: "linear-gradient(to bottom, #fff 0%, #93c5fd 40%, transparent 100%)",
              clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)",
            }}
          />
        </motion.div>

        {/* Rocket body - minimal SpaceX style */}
        <svg
          width="24"
          height="64"
          viewBox="0 0 24 64"
          fill="none"
          className="drop-shadow-lg"
        >
          {/* Main body */}
          <path
            d="M12 0C12 0 6 8 6 20V52H8V56H10V60H14V56H16V52H18V20C18 8 12 0 12 0Z"
            fill="url(#rocketGradient)"
          />
          {/* Window */}
          <circle cx="12" cy="18" r="3" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="0.5" />
          <circle cx="12" cy="18" r="1.5" fill="#3b82f6" opacity="0.5" />
          {/* Fins */}
          <path d="M6 44L2 56H6V44Z" fill="#94a3b8" />
          <path d="M18 44L22 56H18V44Z" fill="#94a3b8" />
          {/* Body details */}
          <rect x="8" y="28" width="8" height="1" fill="#64748b" opacity="0.5" />
          <rect x="8" y="36" width="8" height="1" fill="#64748b" opacity="0.5" />
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="rocketGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="50%" stopColor="#f8fafc" />
              <stop offset="100%" stopColor="#cbd5e1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Smoke/exhaust particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute -bottom-12 left-1/2 w-2 h-2 rounded-full bg-gray-400/30"
            style={{
              marginLeft: `${(i - 2) * 6}px`,
            }}
            animate={{
              y: [0, 40],
              x: [(i - 2) * 2, (i - 2) * 8],
              opacity: [0.4, 0],
              scale: [0.5, 2],
            }}
            transition={{
              duration: 1,
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
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
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

      {/* Rocket - only on desktop */}
      {showRocket && <Rocket />}
    </div>
  );
}
