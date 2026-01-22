"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import {
  CalendarBlank,
  Clock,
  ArrowRight,
  Sparkle,
  ArrowUpRight,
} from "@/components/icons";
import { posts as velitePosts } from "#site/content";

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
  author: { name: string; role?: string };
  content: string;
};

const allPosts = velitePosts as Post[];

const categories = [
  { id: "all", label: "All" },
  { id: "product-updates", label: "Product Updates" },
  { id: "sales", label: "Sales" },
  { id: "marketing", label: "Marketing" },
  { id: "guides", label: "Guides" },
];

const categoryConfig: Record<string, { color: string; label: string }> = {
  "product-updates": { color: "#22c55e", label: "Product Updates" },
  sales: { color: "#3e8aff", label: "Sales" },
  marketing: { color: "#a855f7", label: "Marketing" },
  guides: { color: "#f59e0b", label: "Guides" },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
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
    <main className={`min-h-screen ${isDark ? "bg-[#030303]" : "bg-[#fafafa]"}`}>
      {/* Hero */}
      <section className="relative pt-28 pb-10 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          {isDark && (
            <>
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[400px]"
                style={{
                  background: "radial-gradient(ellipse 50% 80% at 50% 0%, rgba(62, 138, 255, 0.1), transparent)",
                }}
              />
              <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: "64px 64px",
                }}
              />
            </>
          )}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                isDark
                  ? "bg-[#3e8aff]/10 text-[#3e8aff] border border-[#3e8aff]/20"
                  : "bg-[#3e8aff]/10 text-[#3e8aff]"
              }`}
            >
              <Sparkle width={12} height={12} />
              Blog
            </span>

            <h1
              className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 ${
                isDark ? "text-white" : "text-[#0a0a0a]"
              }`}
              style={{ letterSpacing: "-0.025em" }}
            >
              Insights for{" "}
              <span className="bg-gradient-to-r from-[#3e8aff] to-[#60a5fa] bg-clip-text text-transparent">
                Growth Teams
              </span>
            </h1>

            <p className={`text-base max-w-lg mx-auto mb-8 ${isDark ? "text-[#777]" : "text-[#555]"}`}>
              Data strategies, product updates, and actionable insights for modern revenue teams.
            </p>

            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#3e8aff] text-white"
                      : isDark
                        ? "text-[#888] hover:text-white hover:bg-white/5"
                        : "text-[#666] hover:text-[#0a0a0a] hover:bg-black/5"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          {filteredPosts.length === 0 ? (
            <EmptyState isDark={isDark} />
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-1"
            >
              {/* Featured */}
              {featuredPost && activeCategory === "all" && (
                <motion.div variants={itemVariants}>
                  <FeaturedPost post={featuredPost} isDark={isDark} />
                </motion.div>
              )}

              {/* Divider */}
              {featuredPost && activeCategory === "all" && regularPosts.length > 0 && (
                <div className={`py-6 ${isDark ? "border-white/5" : "border-black/5"}`}>
                  <div className={`h-px ${isDark ? "bg-white/10" : "bg-black/10"}`} />
                </div>
              )}

              {/* Post List */}
              {regularPosts.map((post) => (
                <motion.div key={post.slug} variants={itemVariants}>
                  <PostRow post={post} isDark={isDark} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}

function FeaturedPost({ post, isDark }: { post: Post; isDark: boolean }) {
  const config = categoryConfig[post.category];
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <article
        className={`group relative p-6 md:p-8 rounded-2xl transition-all duration-200 ${
          isDark
            ? "bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] border border-white/[0.06] hover:border-[#3e8aff]/30"
            : "bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-[#3e8aff]/30"
        }`}
      >
        {/* Top row */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ backgroundColor: `${config.color}15`, color: config.color }}
          >
            {config.label}
          </span>
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
              isDark ? "bg-[#3e8aff]/10 text-[#3e8aff]" : "bg-[#3e8aff]/10 text-[#3e8aff]"
            }`}
          >
            Featured
          </span>
        </div>

        {/* Title */}
        <h2
          className={`text-2xl md:text-3xl font-bold mb-3 transition-colors group-hover:text-[#3e8aff] ${
            isDark ? "text-white" : "text-[#0a0a0a]"
          }`}
          style={{ letterSpacing: "-0.02em" }}
        >
          {post.title}
        </h2>

        {/* Description */}
        <p className={`text-base mb-5 leading-relaxed ${isDark ? "text-[#888]" : "text-[#555]"}`}>
          {post.description}
        </p>

        {/* Meta row */}
        <div className="flex items-center justify-between">
          <div className={`flex items-center gap-4 text-sm ${isDark ? "text-[#555]" : "text-[#888]"}`}>
            <span className="flex items-center gap-1.5">
              <CalendarBlank width={14} height={14} />
              {date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock width={14} height={14} />
              {post.readingTime} min read
            </span>
            {post.tags.length > 0 && (
              <span className="hidden sm:flex items-center gap-1.5">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-0.5 rounded text-xs ${
                      isDark ? "bg-white/5 text-[#666]" : "bg-black/5 text-[#777]"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </span>
            )}
          </div>

          <span
            className={`flex items-center gap-1 text-sm font-medium text-[#3e8aff] opacity-0 group-hover:opacity-100 transition-opacity`}
          >
            Read
            <ArrowRight width={14} height={14} />
          </span>
        </div>
      </article>
    </Link>
  );
}

function PostRow({ post, isDark }: { post: Post; isDark: boolean }) {
  const config = categoryConfig[post.category];
  const date = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <article
        className={`group flex items-start gap-4 py-5 px-4 -mx-4 rounded-xl transition-all ${
          isDark ? "hover:bg-white/[0.02]" : "hover:bg-black/[0.02]"
        }`}
      >
        {/* Category indicator */}
        <div
          className="w-1 h-12 rounded-full flex-shrink-0 mt-1"
          style={{ backgroundColor: config.color }}
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Title row */}
          <div className="flex items-start justify-between gap-4">
            <h3
              className={`text-lg font-semibold transition-colors group-hover:text-[#3e8aff] ${
                isDark ? "text-white" : "text-[#0a0a0a]"
              }`}
              style={{ letterSpacing: "-0.01em" }}
            >
              {post.title}
            </h3>
            <ArrowUpRight
              width={18}
              height={18}
              className={`flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-[#3e8aff]`}
            />
          </div>

          {/* Description */}
          <p
            className={`text-sm mt-1 line-clamp-1 ${isDark ? "text-[#666]" : "text-[#777]"}`}
          >
            {post.description}
          </p>

          {/* Meta */}
          <div className={`flex items-center gap-3 mt-2 text-xs ${isDark ? "text-[#555]" : "text-[#999]"}`}>
            <span
              className="font-medium"
              style={{ color: config.color }}
            >
              {config.label}
            </span>
            <span>·</span>
            <span>{date}</span>
            <span>·</span>
            <span>{post.readingTime} min</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

function EmptyState({ isDark }: { isDark: boolean }) {
  return (
    <div className="text-center py-16">
      <p className={isDark ? "text-[#555]" : "text-[#999]"}>No posts yet. Check back soon.</p>
    </div>
  );
}
