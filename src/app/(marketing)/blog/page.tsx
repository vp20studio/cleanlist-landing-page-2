"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { BlogCard } from "@/components/blog";
import { MagnifyingGlass } from "@phosphor-icons/react";
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

export default function BlogPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [activeCategory, setActiveCategory] = useState("all");

  const publishedPosts = allPosts.filter((post) => !post.draft);
  const filteredPosts =
    activeCategory === "all"
      ? publishedPosts
      : publishedPosts.filter((post) => post.category === activeCategory);

  const featuredPost = publishedPosts.find((post) => post.featured);

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative py-20">
        {/* Background gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isDark
              ? "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(62, 138, 255, 0.15) 0%, transparent 50%)"
              : "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(62, 138, 255, 0.1) 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
                isDark
                  ? "bg-[#3e8aff]/10 border border-[#3e8aff]/20"
                  : "bg-[#3e8aff]/10 border border-[#3e8aff]/20"
              }`}
            >
              <span className="text-[#3e8aff] text-sm font-medium">
                Cleanlist Blog
              </span>
            </div>

            <h1
              className={`text-4xl md:text-6xl font-bold mb-4 ${
                isDark ? "text-white" : "text-[#1a1a1a]"
              }`}
              style={{ letterSpacing: "-0.02em" }}
            >
              Insights for{" "}
              <span className="bg-gradient-to-r from-[#3e8aff] to-[#60a5fa] bg-clip-text text-transparent">
                Growth Teams
              </span>
            </h1>

            <p
              className={`text-lg md:text-xl max-w-2xl mx-auto ${
                isDark ? "text-[#888888]" : "text-[#666666]"
              }`}
            >
              Product updates, sales strategies, and marketing insights to help
              you turn data into revenue.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-[#3e8aff] text-white"
                    : isDark
                      ? "bg-white/5 text-[#888888] hover:bg-white/10 hover:text-white"
                      : "bg-black/5 text-[#666666] hover:bg-black/10 hover:text-[#1a1a1a]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        {filteredPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div
              className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                isDark ? "bg-white/5" : "bg-black/5"
              }`}
            >
              <MagnifyingGlass
                size={32}
                className={isDark ? "text-[#666666]" : "text-[#888888]"}
              />
            </div>
            <h3
              className={`text-xl font-semibold mb-2 ${
                isDark ? "text-white" : "text-[#1a1a1a]"
              }`}
            >
              No posts yet
            </h3>
            <p className={isDark ? "text-[#888888]" : "text-[#666666]"}>
              Check back soon for new content.
            </p>
          </motion.div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && activeCategory === "all" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-12"
              >
                <BlogCard
                  title={featuredPost.title}
                  description={featuredPost.description}
                  slug={featuredPost.slug}
                  date={featuredPost.date}
                  category={featuredPost.category}
                  readingTime={featuredPost.readingTime}
                  featuredImage={featuredPost.featuredImage}
                  featured
                />
              </motion.div>
            )}

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts
                .filter(
                  (post) =>
                    !featuredPost ||
                    activeCategory !== "all" ||
                    post.slug !== featuredPost.slug
                )
                .map((post, index) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
                  >
                    <BlogCard
                      title={post.title}
                      description={post.description}
                      slug={post.slug}
                      date={post.date}
                      category={post.category}
                      readingTime={post.readingTime}
                      featuredImage={post.featuredImage}
                    />
                  </motion.div>
                ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
