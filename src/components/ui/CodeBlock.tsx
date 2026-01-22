"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Code } from "@/components/icons";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = "json",
  filename,
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[#0a0a0a] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]">
        <div className="flex items-center gap-2">
          <Code className="w-4 h-4 text-[#888888]" />
          <span className="text-xs text-[#888888] font-mono">
            {filename || `response.${language}`}
          </span>
        </div>
        <motion.button
          onClick={handleCopy}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-md bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] text-[#888888] hover:text-white transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#22c55e]" />
              <span className="text-[#22c55e]">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copy
            </>
          )}
        </motion.button>
      </div>

      {/* Code content */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono leading-relaxed">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="flex">
                {showLineNumbers && (
                  <span className="w-8 text-right pr-4 text-[#555] select-none flex-shrink-0">
                    {i + 1}
                  </span>
                )}
                <span
                  dangerouslySetInnerHTML={{
                    __html: highlightJSON(line),
                  }}
                />
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

function highlightJSON(line: string): string {
  return line
    // Keys
    .replace(
      /"([^"]+)":/g,
      '<span class="text-[#e06c75]">"$1"</span>:'
    )
    // String values
    .replace(
      /: "([^"]+)"/g,
      ': <span class="text-[#98c379]">"$1"</span>'
    )
    // Numbers
    .replace(
      /: (\d+\.?\d*)/g,
      ': <span class="text-[#d19a66]">$1</span>'
    )
    // Booleans
    .replace(
      /: (true|false)/g,
      ': <span class="text-[#d19a66]">$1</span>'
    )
    // Null
    .replace(
      /: (null)/g,
      ': <span class="text-[#c678dd]">$1</span>'
    )
    // Brackets
    .replace(/([{}\[\]])/g, '<span class="text-[#c678dd]">$1</span>');
}
