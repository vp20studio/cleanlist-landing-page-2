import { defineConfig, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

export default defineConfig({
  root: "studio/content",
  output: {
    data: ".velite",
    assets: "public/static/blog",
    base: "/static/blog/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: {
    posts: {
      name: "Post",
      pattern: "blog/**/*.mdx",
      schema: s
        .object({
          // Core fields
          title: s.string().max(100),
          description: s.string().max(200),
          date: s.isodate(),
          updated: s.isodate().optional(),

          // SEO
          keywords: s.array(s.string()).optional(),
          canonical: s.string().url().optional(),
          noindex: s.boolean().default(false),

          // Categorization
          category: s.enum([
            "product-updates",
            "sales",
            "marketing",
            "guides",
          ]),
          tags: s.array(s.string()).default([]),

          // Author
          author: s
            .object({
              name: s.string(),
              role: s.string().optional(),
              avatar: s.string().optional(),
              linkedin: s.string().url().optional(),
            })
            .default({
              name: "Cleanlist Team",
              role: "Content Team",
            }),

          // Media
          featuredImage: s
            .object({
              src: s.string(),
              alt: s.string(),
            })
            .optional(),
          ogImage: s.string().optional(),

          // Content settings
          draft: s.boolean().default(false),
          featured: s.boolean().default(false),

          // Internal linking
          relatedPosts: s.array(s.string()).optional(),

          // Repurposing metadata
          repurposed: s
            .object({
              linkedinSnippet: s.string().optional(),
              twitterThread: s.array(s.string()).optional(),
              newsletterIntro: s.string().optional(),
            })
            .optional(),

          // MDX content
          content: s.mdx(),
        })
        .transform((data, { meta }) => {
          // Extract slug from file path: blog/2025/01/my-post.mdx -> my-post
          const pathParts = meta.path.split("/");
          const fileName = pathParts[pathParts.length - 1];
          const slug = fileName.replace(/\.mdx$/, "");

          // Calculate reading time (average 200 words per minute)
          const plainText =
            typeof data.content === "string" ? data.content : "";
          const wordCount = plainText.split(/\s+/).filter(Boolean).length;
          const readingTime = Math.max(1, Math.ceil(wordCount / 200));

          return {
            ...data,
            slug,
            permalink: `/blog/${slug}`,
            readingTime,
            wordCount,
          };
        }),
    },
  },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["anchor-link"],
          },
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          keepBackground: true,
        },
      ],
    ],
  },
});
