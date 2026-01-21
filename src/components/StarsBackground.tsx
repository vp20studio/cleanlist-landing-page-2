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
}

export function StarsBackground({ starCount = 50, seed = 0, className = "" }: StarsBackgroundProps) {
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
    </div>
  );
}
