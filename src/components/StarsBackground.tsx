"use client";

import { motion } from "framer-motion";

// Generate random star positions
const generateStars = (count: number, seed: number = 0) => {
  // Use seed to ensure consistent stars between renders but different between instances
  return Array.from({ length: count }, (_, i) => ({
    id: i + seed,
    x: ((i * 17 + seed * 13) % 100),
    y: ((i * 23 + seed * 7) % 100),
    size: ((i * 11 + seed) % 20) / 10 + 0.5,
    duration: ((i * 7 + seed) % 20) / 10 + 1,
    delay: ((i * 13 + seed) % 30) / 10,
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
            opacity: [0, 0.7, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(3, 3, 3, 0.4) 100%)",
        }}
      />
    </div>
  );
}
