"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import BlogCard from "./BlogCard";

interface Post {
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
}

interface RelatedPostsProps {
  posts: Post[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  if (posts.length === 0) return null;

  return (
    <section className="py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className={`text-2xl md:text-3xl font-bold mb-8 ${
              isDark ? "text-white" : "text-[#1a1a1a]"
            }`}
          >
            Related Articles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
