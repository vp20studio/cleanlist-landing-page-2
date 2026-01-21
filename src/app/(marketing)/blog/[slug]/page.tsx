import { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts as velitePosts } from "#site/content";
import BlogPostContent from "./BlogPostContent";

// Define post type based on velite schema
type Post = {
  title: string;
  description: string;
  slug: string;
  date: string;
  updated?: string;
  category: "product-updates" | "sales" | "marketing" | "guides";
  tags: string[];
  author: { name: string; role?: string; avatar?: string; linkedin?: string };
  featuredImage?: { src: string; alt: string };
  ogImage?: string;
  keywords?: string[];
  canonical?: string;
  content: string;
  readingTime: number;
  wordCount: number;
  draft: boolean;
  relatedPosts?: string[];
  permalink: string;
};

const posts = velitePosts as Post[];

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts
    .filter((post) => !post.draft)
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | Cleanlist Blog",
    };
  }

  return {
    title: `${post.title} | Cleanlist Blog`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author.name],
      images: post.ogImage
        ? [post.ogImage]
        : post.featuredImage
          ? [post.featuredImage.src]
          : [],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.ogImage
        ? [post.ogImage]
        : post.featuredImage
          ? [post.featuredImage.src]
          : [],
    },
    alternates: {
      canonical: post.canonical || post.permalink,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug && !p.draft);

  if (!post) {
    notFound();
  }

  // Find related posts
  const relatedPosts = posts
    .filter(
      (p) =>
        p.slug !== slug &&
        !p.draft &&
        (post.relatedPosts?.includes(p.slug) ||
          p.tags.some((t) => post.tags.includes(t)) ||
          p.category === post.category)
    )
    .slice(0, 3);

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Cleanlist",
      logo: {
        "@type": "ImageObject",
        url: "https://cleanlist.ai/images/logo-dark.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://cleanlist.ai${post.permalink}`,
    },
    wordCount: post.wordCount,
    keywords: post.keywords?.join(", "),
    image: post.featuredImage?.src,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostContent post={post} relatedPosts={relatedPosts} />
    </>
  );
}
