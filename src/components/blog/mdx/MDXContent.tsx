"use client";

import * as runtime from "react/jsx-runtime";
import { useTheme } from "@/context/ThemeContext";
import Callout from "./Callout";
import Link from "next/link";
import Image from "next/image";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXContentProps {
  code: string;
}

export default function MDXContent({ code }: MDXContentProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const Component = useMDXComponent(code);

  const components = {
    // Custom components
    Callout,

    // Override default elements
    h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h1
        {...props}
        className={`text-3xl md:text-4xl font-bold mt-12 mb-4 ${
          isDark ? "text-white" : "text-[#1a1a1a]"
        }`}
        style={{ letterSpacing: "-0.02em" }}
      />
    ),
    h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h2
        {...props}
        className={`text-2xl md:text-3xl font-bold mt-10 mb-4 ${
          isDark ? "text-white" : "text-[#1a1a1a]"
        }`}
        style={{ letterSpacing: "-0.02em" }}
      />
    ),
    h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h3
        {...props}
        className={`text-xl md:text-2xl font-semibold mt-8 mb-3 ${
          isDark ? "text-white" : "text-[#1a1a1a]"
        }`}
      />
    ),
    h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
      <h4
        {...props}
        className={`text-lg font-semibold mt-6 mb-2 ${
          isDark ? "text-white" : "text-[#1a1a1a]"
        }`}
      />
    ),
    p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
      <p
        {...props}
        className={`mb-4 leading-relaxed ${
          isDark ? "text-[#cccccc]" : "text-[#444444]"
        }`}
      />
    ),
    a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      const href = props.href || "";
      const isInternal = href.startsWith("/") || href.startsWith("#");

      if (isInternal) {
        return (
          <Link
            {...props}
            href={href}
            className="text-[#3e8aff] hover:underline"
          />
        );
      }

      return (
        <a
          {...props}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#3e8aff] hover:underline"
        />
      );
    },
    ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
      <ul
        {...props}
        className={`mb-4 pl-6 list-disc space-y-2 ${
          isDark ? "text-[#cccccc]" : "text-[#444444]"
        }`}
      />
    ),
    ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
      <ol
        {...props}
        className={`mb-4 pl-6 list-decimal space-y-2 ${
          isDark ? "text-[#cccccc]" : "text-[#444444]"
        }`}
      />
    ),
    li: (props: React.HTMLAttributes<HTMLLIElement>) => (
      <li {...props} className="leading-relaxed" />
    ),
    blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
      <blockquote
        {...props}
        className={`my-6 pl-4 border-l-4 border-[#3e8aff] italic ${
          isDark ? "text-[#888888]" : "text-[#666666]"
        }`}
      />
    ),
    code: (props: React.HTMLAttributes<HTMLElement>) => {
      // Inline code
      if (!props.className?.includes("language-")) {
        return (
          <code
            {...props}
            className={`px-1.5 py-0.5 rounded text-sm font-mono ${
              isDark
                ? "bg-white/10 text-[#e5e5e5]"
                : "bg-black/10 text-[#1a1a1a]"
            }`}
          />
        );
      }
      // Code block (handled by rehype-pretty-code)
      return <code {...props} />;
    },
    pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
      <pre
        {...props}
        className={`my-6 p-4 rounded-xl overflow-x-auto text-sm ${
          isDark ? "bg-[#0a0a0a]" : "bg-[#1a1a1a]"
        }`}
      />
    ),
    table: (props: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="my-6 overflow-x-auto">
        <table
          {...props}
          className={`w-full border-collapse ${
            isDark ? "text-[#cccccc]" : "text-[#444444]"
          }`}
        />
      </div>
    ),
    th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
      <th
        {...props}
        className={`px-4 py-2 text-left font-semibold border-b ${
          isDark
            ? "border-white/10 text-white"
            : "border-black/10 text-[#1a1a1a]"
        }`}
      />
    ),
    td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
      <td
        {...props}
        className={`px-4 py-2 border-b ${
          isDark ? "border-white/10" : "border-black/10"
        }`}
      />
    ),
    hr: () => (
      <hr
        className={`my-8 border-t ${
          isDark ? "border-white/10" : "border-black/10"
        }`}
      />
    ),
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
      const src = typeof props.src === "string" ? props.src : "";
      return (
        <span className="block my-6">
          <Image
            src={src}
            alt={props.alt || ""}
            width={800}
            height={450}
            className="rounded-xl w-full h-auto"
          />
          {props.alt && (
            <span
              className={`block mt-2 text-center text-sm ${
                isDark ? "text-[#666666]" : "text-[#888888]"
              }`}
            >
              {props.alt}
            </span>
          )}
        </span>
      );
    },
  };

  return (
    <article
      className={`prose max-w-none ${isDark ? "prose-invert" : ""}`}
    >
      <Component components={components} />
    </article>
  );
}
