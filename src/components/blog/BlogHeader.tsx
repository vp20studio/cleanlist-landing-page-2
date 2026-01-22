"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { CalendarBlank, Clock, User, Tag } from "@/components/icons";

interface BlogHeaderProps {
  title: string;
  description: string;
  date: string;
  readingTime: number;
  category: string;
  tags: string[];
  author: {
    name: string;
    role?: string;
    avatar?: string;
  };
  featuredImage?: {
    src: string;
    alt: string;
  };
}

export default function BlogHeader({
  title,
  description,
  date,
  readingTime,
  category,
  tags,
  author,
  featuredImage,
}: BlogHeaderProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
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
    <header className="relative pt-32 pb-16">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? `radial-gradient(ellipse 80% 50% at 50% 0%, ${categoryColor}15 0%, transparent 50%)`
            : `radial-gradient(ellipse 80% 50% at 50% 0%, ${categoryColor}10 0%, transparent 50%)`,
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Category & Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
              style={{
                backgroundColor: `${categoryColor}20`,
                color: categoryColor,
              }}
            >
              {category.replace("-", " ")}
            </span>
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs ${
                  isDark
                    ? "bg-white/5 text-[#888888]"
                    : "bg-black/5 text-[#666666]"
                }`}
              >
                <Tag width={12} height={12} className="mr-1" />
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 tracking-tight ${
              isDark ? "text-white" : "text-[#1a1a1a]"
            }`}
            style={{ letterSpacing: "-0.02em" }}
          >
            {title}
          </h1>

          {/* Description */}
          <p
            className={`text-xl mb-8 ${
              isDark ? "text-[#888888]" : "text-[#666666]"
            }`}
          >
            {description}
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-white/10">
            {/* Author */}
            <div className="flex items-center gap-3">
              {author.avatar || author.name === "Cleanlist Team" ? (
                <Image
                  src={author.avatar || "/images/cleanlist-circle-avatar.png"}
                  alt={author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isDark ? "bg-white/10" : "bg-black/10"
                  }`}
                >
                  <User
                    width={20} height={20}
                    className={isDark ? "text-white" : "text-[#1a1a1a]"}
                  />
                </div>
              )}
              <div>
                <p
                  className={`font-medium text-sm ${
                    isDark ? "text-white" : "text-[#1a1a1a]"
                  }`}
                >
                  {author.name}
                </p>
                {author.role && (
                  <p
                    className={`text-xs ${
                      isDark ? "text-[#666666]" : "text-[#888888]"
                    }`}
                  >
                    {author.role}
                  </p>
                )}
              </div>
            </div>

            {/* Date */}
            <div
              className={`flex items-center gap-2 text-sm ${
                isDark ? "text-[#888888]" : "text-[#666666]"
              }`}
            >
              <CalendarBlank width={16} height={16} />
              {formattedDate}
            </div>

            {/* Reading time */}
            <div
              className={`flex items-center gap-2 text-sm ${
                isDark ? "text-[#888888]" : "text-[#666666]"
              }`}
            >
              <Clock width={16} height={16} />
              {readingTime} min read
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        {featuredImage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 relative aspect-video rounded-2xl overflow-hidden"
          >
            <Image
              src={featuredImage.src}
              alt={featuredImage.alt}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        )}
      </div>
    </header>
  );
}
