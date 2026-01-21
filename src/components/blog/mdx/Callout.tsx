"use client";

import { ReactNode } from "react";
import { useTheme } from "@/context/ThemeContext";
import { Info, Warning, CheckCircle, XCircle } from "@phosphor-icons/react";

interface CalloutProps {
  children: ReactNode;
  type?: "info" | "warning" | "success" | "error";
  title?: string;
}

export default function Callout({
  children,
  type = "info",
  title,
}: CalloutProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const config = {
    info: {
      icon: Info,
      color: "#3e8aff",
      bg: isDark ? "rgba(62, 138, 255, 0.1)" : "rgba(62, 138, 255, 0.1)",
      border: "rgba(62, 138, 255, 0.3)",
      defaultTitle: "Info",
    },
    warning: {
      icon: Warning,
      color: "#f59e0b",
      bg: isDark ? "rgba(245, 158, 11, 0.1)" : "rgba(245, 158, 11, 0.1)",
      border: "rgba(245, 158, 11, 0.3)",
      defaultTitle: "Warning",
    },
    success: {
      icon: CheckCircle,
      color: "#22c55e",
      bg: isDark ? "rgba(34, 197, 94, 0.1)" : "rgba(34, 197, 94, 0.1)",
      border: "rgba(34, 197, 94, 0.3)",
      defaultTitle: "Success",
    },
    error: {
      icon: XCircle,
      color: "#ef4444",
      bg: isDark ? "rgba(239, 68, 68, 0.1)" : "rgba(239, 68, 68, 0.1)",
      border: "rgba(239, 68, 68, 0.3)",
      defaultTitle: "Error",
    },
  };

  const { icon: Icon, color, bg, border, defaultTitle } = config[type];

  return (
    <div
      className="my-6 rounded-xl p-4 border-l-4"
      style={{
        backgroundColor: bg,
        borderLeftColor: color,
        borderTopColor: border,
        borderRightColor: border,
        borderBottomColor: border,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
      }}
    >
      <div className="flex items-start gap-3">
        <Icon size={20} style={{ color }} className="flex-shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          {(title || defaultTitle) && (
            <p
              className="font-semibold mb-1"
              style={{ color }}
            >
              {title || defaultTitle}
            </p>
          )}
          <div
            className={`text-sm ${
              isDark ? "text-[#cccccc]" : "text-[#444444]"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
