"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  magnetic?: boolean;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  magnetic = true,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.2;
    const deltaY = (e.clientY - centerY) * 0.2;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary: `
      relative overflow-hidden
      bg-gradient-to-r from-[#3e8aff] to-[#2563eb]
      text-white font-medium
      hover:shadow-[0_0_30px_rgba(62,138,255,0.4)]
      transition-shadow duration-300
    `,
    secondary: `
      bg-[rgba(255,255,255,0.05)]
      border border-[rgba(255,255,255,0.1)]
      text-white font-medium
      hover:bg-[rgba(255,255,255,0.1)]
      hover:border-[rgba(255,255,255,0.2)]
      transition-all duration-300
    `,
    ghost: `
      text-[#888888] font-medium
      hover:text-white
      transition-colors duration-300
    `,
  };

  const Component = href ? motion.a : motion.button;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Component
        href={href}
        onClick={onClick}
        style={{ x: xSpring, y: ySpring }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`
          inline-flex items-center justify-center gap-2
          rounded-xl cursor-pointer
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${className}
        `}
      >
        {variant === "primary" && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#60a5fa] to-[#3e8aff] opacity-0 hover:opacity-100 transition-opacity duration-300" />
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </Component>
    </div>
  );
}
