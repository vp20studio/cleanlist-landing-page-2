"use client";

import Image from "next/image";

export interface Icon3DProps {
  name: string;
  size?: number;
  className?: string;
  alt?: string;
}

// Map of icon names to their file paths
// Icons should be downloaded from Icons8 3D Fluency and placed in /public/icons/3d/
const iconMap: Record<string, string> = {
  // Data & Database
  database: "/icons/3d/database.png",
  stack: "/icons/3d/stack.png",
  layers: "/icons/3d/layers.png",
  filter: "/icons/3d/filter.png",
  funnel: "/icons/3d/funnel.png",
  "chart-bar": "/icons/3d/chart-bar.png",
  analytics: "/icons/3d/analytics.png",

  // Communication
  email: "/icons/3d/email.png",
  envelope: "/icons/3d/envelope.png",
  phone: "/icons/3d/phone.png",
  linkedin: "/icons/3d/linkedin.png",

  // Actions
  lightning: "/icons/3d/lightning.png",
  zap: "/icons/3d/lightning.png",
  check: "/icons/3d/check.png",
  checkmark: "/icons/3d/check.png",
  refresh: "/icons/3d/refresh.png",
  sync: "/icons/3d/sync.png",
  download: "/icons/3d/download.png",
  upload: "/icons/3d/upload.png",
  search: "/icons/3d/search.png",
  magnifier: "/icons/3d/search.png",

  // Security & Trust
  shield: "/icons/3d/shield.png",
  lock: "/icons/3d/lock.png",
  verified: "/icons/3d/verified.png",

  // Business
  target: "/icons/3d/target.png",
  crosshair: "/icons/3d/target.png",
  users: "/icons/3d/users.png",
  people: "/icons/3d/users.png",
  building: "/icons/3d/building.png",
  dollar: "/icons/3d/dollar.png",
  money: "/icons/3d/dollar.png",
  rocket: "/icons/3d/rocket.png",
  sparkle: "/icons/3d/sparkle.png",
  star: "/icons/3d/star.png",
  gear: "/icons/3d/gear.png",
  settings: "/icons/3d/gear.png",

  // Navigation
  "arrow-right": "/icons/3d/arrow-right.png",
  "chevron-down": "/icons/3d/chevron-down.png",
  menu: "/icons/3d/menu.png",
  close: "/icons/3d/close.png",
  x: "/icons/3d/close.png",

  // Misc
  globe: "/icons/3d/globe.png",
  clock: "/icons/3d/clock.png",
  calendar: "/icons/3d/calendar.png",
  file: "/icons/3d/file.png",
  folder: "/icons/3d/folder.png",
  link: "/icons/3d/link.png",
  code: "/icons/3d/code.png",
  brain: "/icons/3d/brain.png",
  chart: "/icons/3d/chart.png",
  trend: "/icons/3d/trend.png",
  workflow: "/icons/3d/workflow.png",
  automation: "/icons/3d/automation.png",
};

// Default/fallback icon
const DEFAULT_ICON = "/icons/3d/sparkle.png";

export default function Icon3D({
  name,
  size = 24,
  className = "",
  alt,
}: Icon3DProps) {
  const src = iconMap[name.toLowerCase()] || DEFAULT_ICON;
  const altText = alt || name.replace(/-/g, " ");

  return (
    <Image
      src={src}
      alt={altText}
      width={size}
      height={size}
      className={`object-contain ${className}`}
      // Use unoptimized for external/3D icons to preserve quality
      unoptimized
    />
  );
}

// Export the icon map for reference
export { iconMap };
