"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { User, LinkedinLogo } from "@phosphor-icons/react";

interface AuthorCardProps {
  author: {
    name: string;
    role?: string;
    avatar?: string;
    linkedin?: string;
  };
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
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
        Written by
      </p>

      <div className="flex items-center gap-4">
        {author.avatar ? (
          <Image
            src={author.avatar}
            alt={author.name}
            width={48}
            height={48}
            className="rounded-full"
          />
        ) : (
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              isDark ? "bg-white/10" : "bg-black/10"
            }`}
          >
            <User
              size={24}
              className={isDark ? "text-white" : "text-[#1a1a1a]"}
            />
          </div>
        )}

        <div>
          <p
            className={`font-semibold ${
              isDark ? "text-white" : "text-[#1a1a1a]"
            }`}
          >
            {author.name}
          </p>
          {author.role && (
            <p
              className={`text-sm ${
                isDark ? "text-[#888888]" : "text-[#666666]"
              }`}
            >
              {author.role}
            </p>
          )}
        </div>
      </div>

      {author.linkedin && (
        <a
          href={author.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-4 flex items-center gap-2 text-sm ${
            isDark
              ? "text-[#888888] hover:text-[#0077b5]"
              : "text-[#666666] hover:text-[#0077b5]"
          } transition-colors`}
        >
          <LinkedinLogo size={16} weight="fill" />
          Connect on LinkedIn
        </a>
      )}
    </div>
  );
}
