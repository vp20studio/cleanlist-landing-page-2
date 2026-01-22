"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { CalendarBlank, Clock, ArrowRight } from "@/components/icons";

interface BlogCardProps {
  title: string;
  description: string;
  slug: string;
  date: string;
  category: string;
  readingTime: number;
  featuredImage?: {
    src: string;
    alt: string;
  };
  featured?: boolean;
}

export default function BlogCard({
  title,
  description,
  slug,
  date,
  category,
  readingTime,
  featuredImage,
  featured = false,
}: BlogCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const categoryColors: Record<string, string> = {
    "product-updates": "#22c55e",
    sales: "#3e8aff",
    marketing: "#a855f7",
    guides: "#f59e0b",
  };

  const categoryColor = categoryColors[category] || "#3e8aff";

  return (
    <Link href={`/blog/${slug}`}>
      <motion.article
        whileHover={{ y: -4 }}
        className={`group relative h-full rounded-2xl border backdrop-blur-xl overflow-hidden transition-all duration-500 ${
          isDark
            ? "border-white/[0.08] bg-[rgba(10,10,10,0.6)]"
            : "border-[#3e8aff]/20 bg-gradient-to-br from-[#3e8aff]/5 to-white/80 shadow-lg shadow-[#3e8aff]/5"
        } hover:border-[rgba(62,138,255,0.3)]`}
      >
        {/* Featured Image */}
        {featuredImage && (
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={featuredImage.src}
              alt={featuredImage.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 ${
                isDark
                  ? "bg-gradient-to-t from-[#030303] to-transparent"
                  : "bg-gradient-to-t from-white to-transparent"
              }`}
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Category Badge */}
          <div className="mb-3">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: `${categoryColor}20`,
                color: categoryColor,
              }}
            >
              {category.replace("-", " ")}
            </span>
            {featured && (
              <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#3e8aff]/20 text-[#3e8aff]">
                Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h3
            className={`text-xl font-semibold mb-2 line-clamp-2 transition-colors ${
              isDark ? "text-white" : "text-[#1a1a1a]"
            } group-hover:text-[#3e8aff]`}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className={`text-sm mb-4 line-clamp-2 ${
              isDark ? "text-[#888888]" : "text-[#666666]"
            }`}
          >
            {description}
          </p>

          {/* Meta */}
          <div
            className={`flex items-center gap-4 text-xs ${
              isDark ? "text-[#666666]" : "text-[#888888]"
            }`}
          >
            <span className="flex items-center gap-1">
              <CalendarBlank width={14} height={14} />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock width={14} height={14} />
              {readingTime} min read
            </span>
          </div>

          {/* Read More */}
          <div className="mt-4 flex items-center text-[#3e8aff] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            Read article
            <ArrowRight width={16} height={16} className="ml-1" />
          </div>
        </div>

        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${categoryColor}${isDark ? "08" : "15"} 0%, transparent 50%)`,
          }}
        />
      </motion.article>
    </Link>
  );
}
