"use client";

import { BlogHeader, AuthorCard, RelatedPosts, MDXContent } from "@/components/blog";
import { useTheme } from "@/context/ThemeContext";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  author: { name: string; role?: string; avatar?: string; linkedin?: string };
  featuredImage?: { src: string; alt: string };
  content: string;
  readingTime: number;
}

interface BlogPostContentProps {
  post: Post;
  relatedPosts: Post[];
}

export default function BlogPostContent({ post, relatedPosts }: BlogPostContentProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <main className="min-h-screen">
      <BlogHeader
        title={post.title}
        description={post.description}
        date={post.date}
        author={post.author}
        readingTime={post.readingTime}
        category={post.category}
        tags={post.tags}
        featuredImage={post.featuredImage}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Main Content */}
          <article
            className={`max-w-none ${
              isDark ? "text-[#cccccc]" : "text-[#444444]"
            }`}
          >
            <MDXContent code={post.content} />
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <AuthorCard author={post.author} />

              {/* Share Section */}
              <div
                className={`rounded-2xl border p-6 ${
                  isDark
                    ? "border-white/[0.08] bg-[rgba(10,10,10,0.6)]"
                    : "border-[#3e8aff]/20 bg-white/80"
                }`}
              >
                <p
                  className={`text-xs font-medium uppercase tracking-wider mb-4 ${
                    isDark ? "text-[#666666]" : "text-[#888888]"
                  }`}
                >
                  Share this article
                </p>
                <div className="flex gap-2">
                  <ShareButton
                    platform="twitter"
                    url={typeof window !== "undefined" ? window.location.href : ""}
                    title={post.title}
                    isDark={isDark}
                  />
                  <ShareButton
                    platform="linkedin"
                    url={typeof window !== "undefined" ? window.location.href : ""}
                    title={post.title}
                    isDark={isDark}
                  />
                  <CopyLinkButton isDark={isDark} />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} />
    </main>
  );
}

function ShareButton({
  platform,
  url,
  title,
  isDark,
}: {
  platform: "twitter" | "linkedin";
  url: string;
  title: string;
  isDark: boolean;
}) {
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  const labels = {
    twitter: "X",
    linkedin: "LinkedIn",
  };

  return (
    <a
      href={shareUrls[platform]}
      target="_blank"
      rel="noopener noreferrer"
      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        isDark
          ? "bg-white/5 text-[#888888] hover:bg-white/10 hover:text-white"
          : "bg-black/5 text-[#666666] hover:bg-black/10 hover:text-[#1a1a1a]"
      }`}
    >
      {labels[platform]}
    </a>
  );
}

function CopyLinkButton({ isDark }: { isDark: boolean }) {
  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        isDark
          ? "bg-white/5 text-[#888888] hover:bg-white/10 hover:text-white"
          : "bg-black/5 text-[#666666] hover:bg-black/10 hover:text-[#1a1a1a]"
      }`}
    >
      Copy Link
    </button>
  );
}
