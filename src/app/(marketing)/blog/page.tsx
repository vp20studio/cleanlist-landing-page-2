"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import {
  CalendarBlank,
  Clock,
  ArrowRight,
  Tag,
  Sparkle,
} from "@phosphor-icons/react";
import { posts as velitePosts } from "#site/content";

// Define post type based on velite schema
type Post = {
  title: string;
  description: string;
  slug: string;
  date: string;
  category: "product-updates" | "sales" | "marketing" | "guides";
  tags: string[];
  readingTime: number;
  wordCount: number;
  permalink: string;
  draft: boolean;
  featured: boolean;
  featuredImage?: { src: string; alt: string };
  author: { name: string; role?: string };
  content: string;
};

const allPosts = velitePosts as Post[];

const categories = [
  { id: "all", label: "All Posts" },
  { id: "product-updates", label: "Product Updates" },
  { id: "sales", label: "Sales" },
  { id: "marketing", label: "Marketing" },
  { id: "guides", label: "Guides" },
];

const categoryColors: Record<string, string> = {
  "product-updates": "#22c55e",
  sales: "#3e8aff",
  marketing: "#a855f7",
  guides: "#f59e0b",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function BlogPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeCategory, setActiveCategory] = useState("all");

  const publishedPosts = allPosts
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const filteredPosts =
    activeCategory === "all"
      ? publishedPosts
      : publishedPosts.filter((post) => post.category === activeCategory);

  const featuredPost = publishedPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter(
    (post) => !featuredPost || activeCategory !== "all" || post.slug !== featuredPost.slug
  );

  return (
    <main
      className={`min-h-screen ${isDark ? "bg-[#030303]" : "bg-[#fafafa]"}`}
    >
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {isDark ? (
            <>
              {/* Dark mode gradients */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[500px]"
                style={{
                  background:
                    "radial-gradient(ellipse 50% 80% at 50% 0%, rgba(62, 138, 255, 0.12), transparent)",
                }}
              />
              <div
                className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px]"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(62, 138, 255, 0.06), transparent 60%)",
                }}
              />
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: "64px 64px",
                }}
              />
            </>
          ) : (
            <>
              {/* Light mode gradients */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[500px]"
                style={{
                  background:
                    "radial-gradient(ellipse 50% 80% at 50% 0%, rgba(62, 138, 255, 0.08), transparent)",
                }}
              />
            </>
          )}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-10"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-5">
              <span
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium ${
                  isDark
                    ? "bg-[#3e8aff]/10 text-[#3e8aff] border border-[#3e8aff]/20"
                    : "bg-[#3e8aff]/10 text-[#3e8aff] border border-[#3e8aff]/20"
                }`}
              >
                <Sparkle weight="fill" size={14} />
                Cleanlist Blog
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight ${
                isDark ? "text-white" : "text-[#1a1a1a]"
              }`}
              style={{ letterSpacing: "-0.02em" }}
            >
              Insights for{" "}
              <span className="bg-gradient-to-r from-[#3e8aff] to-[#60a5fa] bg-clip-text text-transparent">
                Growth Teams
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className={`text-lg max-w-xl mx-auto mb-8 ${
                isDark ? "text-[#888888]" : "text-[#666666]"
              }`}
            >
              Product updates, sales strategies, and data insights to help you
              turn messy data into revenue.
            </motion.p>

            {/* Category Filters */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-2"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-[#3e8aff] text-white shadow-lg shadow-[#3e8aff]/25"
                      : isDark
                        ? "bg-white/5 text-[#888888] hover:bg-white/10 hover:text-white border border-white/10"
                        : "bg-white text-[#666666] hover:bg-gray-100 hover:text-[#1a1a1a] border border-gray-200 shadow-sm"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {publishedPosts.length === 0 ? (
            <EmptyState isDark={isDark} />
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Featured Post - Large Hero Card */}
              {featuredPost && activeCategory === "all" && (
                <motion.div variants={itemVariants} className="mb-10">
                  <FeaturedPostCard post={featuredPost} isDark={isDark} />
                </motion.div>
              )}

              {/* Posts Grid */}
              {regularPosts.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {regularPosts.map((post, index) => (
                    <motion.div
                      key={post.slug}
                      variants={itemVariants}
                      custom={index}
                    >
                      <PostCard post={post} isDark={isDark} />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}

function FeaturedPostCard({ post, isDark }: { post: Post; isDark: boolean }) {
  const categoryColor = categoryColors[post.category] || "#3e8aff";
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={`group relative rounded-2xl overflow-hidden ${
          isDark
            ? "bg-gradient-to-br from-[#0a0a0a] to-[#111111] border border-white/[0.08]"
            : "bg-white border border-gray-200 shadow-lg shadow-gray-200/50"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Side */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            {post.featuredImage ? (
              <Image
                src={post.featuredImage.src}
                alt={post.featuredImage.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div
                className={`absolute inset-0 ${
                  isDark
                    ? "bg-gradient-to-br from-[#0f1729] via-[#0a0f1a] to-[#030303]"
                    : "bg-gradient-to-br from-[#f0f7ff] via-[#e8f4ff] to-[#dbeafe]"
                }`}
              >
                {/* Grid pattern */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: isDark
                      ? `linear-gradient(${categoryColor}15 1px, transparent 1px), linear-gradient(90deg, ${categoryColor}15 1px, transparent 1px)`
                      : `linear-gradient(${categoryColor}20 1px, transparent 1px), linear-gradient(90deg, ${categoryColor}20 1px, transparent 1px)`,
                    backgroundSize: "32px 32px",
                  }}
                />
                {/* Glow orbs */}
                <div
                  className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-3xl"
                  style={{ backgroundColor: `${categoryColor}${isDark ? "30" : "25"}` }}
                />
                <div
                  className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full blur-3xl"
                  style={{ backgroundColor: `${isDark ? "#3e8aff" : "#60a5fa"}${isDark ? "20" : "20"}` }}
                />
                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`relative ${isDark ? "text-white/10" : "text-[#3e8aff]/20"}`}>
                    <Sparkle size={80} weight="thin" className="absolute -top-8 -left-12 rotate-12" />
                    <Tag size={100} weight="thin" />
                    <ArrowRight size={60} weight="thin" className="absolute -bottom-6 -right-8 -rotate-12" />
                  </div>
                </div>
              </div>
            )}
            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 ${
                isDark
                  ? "bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a]"
                  : "bg-gradient-to-r from-transparent via-[#ffffff20] to-white"
              } md:block hidden`}
            />
          </div>

          {/* Content Side */}
          <div className="p-6 md:p-8 flex flex-col justify-center">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: `${categoryColor}15`,
                  color: categoryColor,
                }}
              >
                {post.category.replace("-", " ")}
              </span>
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                  isDark
                    ? "bg-[#3e8aff]/15 text-[#3e8aff]"
                    : "bg-[#3e8aff]/10 text-[#3e8aff]"
                }`}
              >
                Featured
              </span>
            </div>

            {/* Title */}
            <h2
              className={`text-2xl md:text-3xl font-bold mb-3 transition-colors group-hover:text-[#3e8aff] ${
                isDark ? "text-white" : "text-[#1a1a1a]"
              }`}
              style={{ letterSpacing: "-0.02em" }}
            >
              {post.title}
            </h2>

            {/* Description */}
            <p
              className={`text-base mb-5 line-clamp-2 ${
                isDark ? "text-[#888888]" : "text-[#666666]"
              }`}
            >
              {post.description}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between">
              <div
                className={`flex items-center gap-4 text-sm ${
                  isDark ? "text-[#666666]" : "text-[#888888]"
                }`}
              >
                <span className="flex items-center gap-1.5">
                  <CalendarBlank size={14} />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {post.readingTime} min read
                </span>
              </div>
              <span className="flex items-center gap-1 text-[#3e8aff] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Read article
                <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            boxShadow: `0 0 60px ${categoryColor}15, inset 0 0 60px ${categoryColor}05`,
          }}
        />
      </motion.article>
    </Link>
  );
}

function PostCard({ post, isDark }: { post: Post; isDark: boolean }) {
  const categoryColor = categoryColors[post.category] || "#3e8aff";
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className={`group relative h-full rounded-xl overflow-hidden ${
          isDark
            ? "bg-[#0a0a0a]/80 border border-white/[0.08] hover:border-[#3e8aff]/30"
            : "bg-white border border-gray-200 hover:border-[#3e8aff]/30 shadow-sm hover:shadow-lg"
        } transition-all duration-300`}
      >
        {/* Image */}
        <div className="relative h-44 overflow-hidden">
          {post.featuredImage ? (
            <Image
              src={post.featuredImage.src}
              alt={post.featuredImage.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className={`absolute inset-0 ${
                isDark
                  ? "bg-gradient-to-br from-[#0f1729] via-[#0a0f1a] to-[#0a0a0a]"
                  : "bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]"
              }`}
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: isDark
                    ? `linear-gradient(${categoryColor}10 1px, transparent 1px), linear-gradient(90deg, ${categoryColor}10 1px, transparent 1px)`
                    : `linear-gradient(${categoryColor}15 1px, transparent 1px), linear-gradient(90deg, ${categoryColor}15 1px, transparent 1px)`,
                  backgroundSize: "24px 24px",
                }}
              />
              {/* Glow */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-2xl"
                style={{ backgroundColor: `${categoryColor}${isDark ? "25" : "20"}` }}
              />
              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Tag
                  size={40}
                  weight="duotone"
                  style={{ color: `${categoryColor}${isDark ? "40" : "50"}` }}
                />
              </div>
            </div>
          )}
          {/* Gradient fade */}
          <div
            className={`absolute inset-x-0 bottom-0 h-12 ${
              isDark
                ? "bg-gradient-to-t from-[#0a0a0a] to-transparent"
                : "bg-gradient-to-t from-white to-transparent"
            }`}
          />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category Badge */}
          <div className="mb-3">
            <span
              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
              style={{
                backgroundColor: `${categoryColor}15`,
                color: categoryColor,
              }}
            >
              {post.category.replace("-", " ")}
            </span>
          </div>

          {/* Title */}
          <h3
            className={`text-lg font-semibold mb-2 line-clamp-2 transition-colors group-hover:text-[#3e8aff] ${
              isDark ? "text-white" : "text-[#1a1a1a]"
            }`}
            style={{ letterSpacing: "-0.01em" }}
          >
            {post.title}
          </h3>

          {/* Description */}
          <p
            className={`text-sm mb-4 line-clamp-2 ${
              isDark ? "text-[#777777]" : "text-[#666666]"
            }`}
          >
            {post.description}
          </p>

          {/* Meta */}
          <div
            className={`flex items-center gap-3 text-xs ${
              isDark ? "text-[#555555]" : "text-[#999999]"
            }`}
          >
            <span className="flex items-center gap-1">
              <CalendarBlank size={12} />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {post.readingTime} min
            </span>
          </div>
        </div>

        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            boxShadow: isDark
              ? `0 0 40px ${categoryColor}10`
              : `0 8px 30px ${categoryColor}08`,
          }}
        />
      </motion.article>
    </Link>
  );
}

function EmptyState({ isDark }: { isDark: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-20"
    >
      <div
        className={`w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
          isDark ? "bg-white/5" : "bg-gray-100"
        }`}
      >
        <Sparkle
          size={40}
          weight="thin"
          className={isDark ? "text-[#444444]" : "text-[#cccccc]"}
        />
      </div>
      <h3
        className={`text-xl font-semibold mb-2 ${
          isDark ? "text-white" : "text-[#1a1a1a]"
        }`}
      >
        No posts yet
      </h3>
      <p className={isDark ? "text-[#666666]" : "text-[#888888]"}>
        Check back soon for insights and updates.
      </p>
    </motion.div>
  );
}
