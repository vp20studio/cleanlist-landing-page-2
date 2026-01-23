"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

const customerLogos = [
  { name: "Proposify", src: "/logos/proposify.png" },
  { name: "Canva", src: "/logos/canva.png" },
  { name: "Shopify", src: "/logos/shopify.png" },
  { name: "Uber", src: "/logos/uber.png" },
  { name: "Float", src: "/logos/float.png" },
  { name: "Reply.io", src: "/logos/replyio.png" },
  { name: "EffyDesk", src: "/logos/effydesk.webp" },
];

export default function LogoMarquee() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="w-full overflow-hidden py-12 relative">
      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-center text-sm mb-10 ${isDark ? "text-gray-500" : "text-gray-400"}`}
      >
        Trusted by 500+ companies who rely on Growth-Led Outbound
      </motion.p>

      {/* Logo Row - scrolls left */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
          style={{
            animation: "marquee 35s linear infinite",
          }}
        >
          {[...customerLogos, ...customerLogos, ...customerLogos].map((logo, index) => (
            <div
              key={`customer-${index}`}
              className="flex-shrink-0 mx-4 sm:mx-8 md:mx-10 lg:mx-14"
            >
              <div
                className={`relative h-8 sm:h-10 md:h-12 w-auto transition-all duration-300 ${
                  isDark
                    ? "opacity-50 hover:opacity-100 brightness-0 invert hover:brightness-100 hover:invert-0"
                    : "opacity-40 hover:opacity-100 grayscale hover:grayscale-0"
                }`}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={140}
                  height={48}
                  className="h-full w-auto object-contain max-w-[100px] sm:max-w-[120px] md:max-w-[140px]"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient fade edges */}
      <div className={`pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 z-10 ${
        isDark
          ? "bg-gradient-to-r from-[#030303] to-transparent"
          : "bg-gradient-to-r from-white to-transparent"
      }`} />
      <div className={`pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 z-10 ${
        isDark
          ? "bg-gradient-to-l from-[#030303] to-transparent"
          : "bg-gradient-to-l from-white to-transparent"
      }`} />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}
