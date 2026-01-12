"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Database, Mail, Phone, Building2, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface Provider {
  id: string;
  name: string;
  color: string;
  successRate: number;
}

const providers: Provider[] = [
  { id: "apollo", name: "Apollo", color: "#3e8aff", successRate: 0.65 },
  { id: "zoominfo", name: "ZoomInfo", color: "#4a9eff", successRate: 0.72 },
  { id: "lusha", name: "Lusha", color: "#8b5cf6", successRate: 0.68 },
  { id: "clearbit", name: "Clearbit", color: "#10b981", successRate: 0.70 },
  { id: "hunter", name: "Hunter.io", color: "#f59e0b", successRate: 0.62 },
];

interface DataPoint {
  id: number;
  type: "email" | "phone" | "company";
  icon: typeof Mail;
  status: "pending" | "searching" | "found" | "not-found";
  currentProvider: number;
  foundAt?: number;
}

const dataTypes = [
  { type: "email" as const, icon: Mail, label: "Email" },
  { type: "phone" as const, icon: Phone, label: "Phone" },
  { type: "company" as const, icon: Building2, label: "Company" },
];

interface WaterfallVisualizationProps {
  compact?: boolean;
  autoPlay?: boolean;
}

export default function WaterfallVisualization({ compact = false, autoPlay = true }: WaterfallVisualizationProps) {
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);
  const [stats, setStats] = useState({ found: 0, total: 0, coverage: 0 });
  const [isRunning, setIsRunning] = useState(autoPlay);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Initialize with some data points immediately
  useEffect(() => {
    if (autoPlay) {
      // Start with 2 data points immediately
      const initialPoints: DataPoint[] = [
        { id: Date.now(), type: "email", icon: Mail, status: "searching", currentProvider: 0 },
        { id: Date.now() + 1, type: "phone", icon: Phone, status: "pending", currentProvider: -1 },
      ];
      setDataPoints(initialPoints);
    }
  }, [autoPlay]);

  // Run the animation
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setDataPoints(prev => {
        // Add new data point occasionally
        if (prev.length < 6 && Math.random() > 0.5) {
          const randomType = dataTypes[Math.floor(Math.random() * dataTypes.length)];
          const newPoint: DataPoint = {
            id: Date.now(),
            type: randomType.type,
            icon: randomType.icon,
            status: "pending",
            currentProvider: -1,
          };
          return [...prev, newPoint];
        }

        // Update existing data points
        return prev.map(point => {
          if (point.status === "found" || point.status === "not-found") {
            return point;
          }

          if (point.status === "pending") {
            return { ...point, status: "searching" as const, currentProvider: 0 };
          }

          if (point.status === "searching") {
            const provider = providers[point.currentProvider];
            const found = Math.random() < provider.successRate;

            if (found) {
              return { ...point, status: "found" as const, foundAt: point.currentProvider };
            } else if (point.currentProvider < providers.length - 1) {
              return { ...point, currentProvider: point.currentProvider + 1 };
            } else {
              return { ...point, status: "not-found" as const };
            }
          }

          return point;
        }).filter(point => {
          // Remove completed points after a delay
          if (point.status === "found" || point.status === "not-found") {
            return Math.random() > 0.1;
          }
          return true;
        });
      });
    }, 800);

    return () => clearInterval(interval);
  }, [isRunning]);

  // Update stats
  useEffect(() => {
    const found = dataPoints.filter(p => p.status === "found").length;
    const total = dataPoints.filter(p => p.status === "found" || p.status === "not-found").length;
    const coverage = total > 0 ? Math.round((found / total) * 100) : 85;
    setStats({ found, total, coverage });
  }, [dataPoints]);

  return (
    <div className={`relative ${compact ? 'p-4' : 'p-6 md:p-8'}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#3e8aff]/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      </div>

      <div className="relative z-10">
        {/* Header */}
        {!compact && (
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#3e8aff]/10">
                <Database className="h-5 w-5 text-[#3e8aff]" />
              </div>
              <div>
                <h3 className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Waterfall Enrichment</h3>
                <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Live data cascade</p>
              </div>
            </div>
            <motion.div
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-500 text-sm font-medium"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {stats.coverage}% Coverage
            </motion.div>
          </div>
        )}

        {/* Provider Pipeline */}
        <div className="relative">
          {/* Provider Nodes */}
          <div className={`flex ${compact ? 'gap-2' : 'gap-3 md:gap-4'} justify-center flex-wrap`}>
            {providers.map((provider, index) => (
              <motion.div
                key={provider.id}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Connection Arrow */}
                {index < providers.length - 1 && !compact && (
                  <div className="absolute -right-3 md:-right-4 top-1/2 -translate-y-1/2 z-10">
                    <motion.div
                      className={`w-6 h-0.5 ${isDark ? "bg-gradient-to-r from-white/20 to-white/10" : "bg-gradient-to-r from-gray-300 to-gray-200"}`}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
                    />
                  </div>
                )}

                {/* Provider Card */}
                <motion.div
                  className={`relative flex flex-col items-center ${compact ? 'p-2' : 'p-3 md:p-4'} rounded-xl border backdrop-blur-sm ${
                    isDark
                      ? "border-white/[0.08] bg-white/[0.02]"
                      : "border-black/[0.08] bg-white/50"
                  }`}
                  whileHover={{ scale: 1.05, borderColor: provider.color }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Active Indicator */}
                  <AnimatePresence>
                    {dataPoints.some(p => p.status === "searching" && p.currentProvider === index) && (
                      <motion.div
                        className="absolute inset-0 rounded-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                          boxShadow: `0 0 20px ${provider.color}40, inset 0 0 20px ${provider.color}10`,
                          border: `2px solid ${provider.color}`,
                        }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Provider Icon */}
                  <div
                    className={`${compact ? 'w-8 h-8' : 'w-10 h-10 md:w-12 md:h-12'} rounded-lg flex items-center justify-center mb-2`}
                    style={{ backgroundColor: `${provider.color}20` }}
                  >
                    <Database className={`${compact ? 'h-4 w-4' : 'h-5 w-5 md:h-6 md:w-6'}`} style={{ color: provider.color }} />
                  </div>

                  {/* Provider Name */}
                  <span className={`${compact ? 'text-xs' : 'text-xs md:text-sm'} font-medium whitespace-nowrap ${isDark ? "text-white" : "text-gray-900"}`}>
                    {provider.name}
                  </span>

                  {/* Success Rate */}
                  {!compact && (
                    <span className={`text-[10px] mt-1 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                      {Math.round(provider.successRate * 100)}% hit rate
                    </span>
                  )}

                  {/* Searching Indicator */}
                  <AnimatePresence>
                    {dataPoints.some(p => p.status === "searching" && p.currentProvider === index) && (
                      <motion.div
                        className="absolute -top-2 -right-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Loader2 className="h-4 w-4 text-[#3e8aff] animate-spin" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Found Indicator */}
                  <AnimatePresence>
                    {dataPoints.some(p => p.status === "found" && p.foundAt === index) && (
                      <motion.div
                        className="absolute -top-2 -right-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Data Flow Animation */}
        <div className={`mt-6 ${compact ? 'h-20' : 'h-32'} relative overflow-hidden rounded-xl border ${
          isDark
            ? "bg-white/[0.02] border-white/[0.05]"
            : "bg-black/[0.02] border-black/[0.05]"
        }`}>
          {/* Only show placeholder when no data points */}
          {dataPoints.length === 0 && (
            <div className={`absolute inset-0 flex items-center justify-center ${isDark ? "text-gray-600" : "text-gray-400"}`}>
              <span className="text-xs">Waiting for data...</span>
            </div>
          )}

          <AnimatePresence>
            {dataPoints.map((point, index) => {
              const Icon = point.icon;
              // Calculate left position based on status and current provider (as percentage of container)
              const leftPosition = point.status === "pending"
                ? 5
                : point.status === "searching"
                  ? 12 + ((point.currentProvider + 0.5) / providers.length) * 76
                  : point.status === "found"
                    ? 92
                    : 92;

              // Calculate y offset for stacking multiple data points
              const activePoints = dataPoints.filter(p =>
                (p.status === "searching" && point.status === "searching" && p.currentProvider === point.currentProvider) ||
                (p.status === point.status && p.status !== "searching")
              );
              const pointIndex = activePoints.findIndex(p => p.id === point.id);
              const yOffset = pointIndex * 28 - ((activePoints.length - 1) * 14);

              return (
                <motion.div
                  key={point.id}
                  className="absolute top-1/2 -translate-y-1/2"
                  initial={{ left: "5%", opacity: 0 }}
                  animate={{
                    left: `${leftPosition}%`,
                    y: yOffset,
                    opacity: point.status === "not-found" ? 0.4 : 1,
                  }}
                  exit={{ opacity: 0, scale: 0.5, left: "100%" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <motion.div
                    className={`p-2 rounded-lg border shadow-lg ${
                      point.status === "found"
                        ? "bg-green-500/20 border-green-500/50"
                        : point.status === "not-found"
                          ? "bg-red-500/20 border-red-500/50"
                          : "bg-[#3e8aff]/20 border-[#3e8aff]/50"
                    }`}
                    animate={point.status === "searching" ? {
                      scale: [1, 1.15, 1],
                      boxShadow: [
                        "0 0 0px rgba(62, 138, 255, 0)",
                        "0 0 15px rgba(62, 138, 255, 0.5)",
                        "0 0 0px rgba(62, 138, 255, 0)"
                      ]
                    } : {}}
                    transition={{ duration: 0.8, repeat: point.status === "searching" ? Infinity : 0 }}
                  >
                    <Icon className={`h-4 w-4 ${
                      point.status === "found"
                        ? "text-green-500"
                        : point.status === "not-found"
                          ? "text-red-500"
                          : "text-[#3e8aff]"
                    }`} />
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Flow Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Background track */}
            <line
              x1="8%"
              y1="50%"
              x2="92%"
              y2="50%"
              stroke={isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Animated flow */}
            <motion.line
              x1="8%"
              y1="50%"
              x2="92%"
              y2="50%"
              stroke="url(#flowGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="20 10"
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: -30 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3e8aff" stopOpacity="0.2" />
                <stop offset="30%" stopColor="#3e8aff" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#10b981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* Provider position markers */}
          <div className="absolute inset-x-0 top-2 flex justify-between px-[12%]">
            {providers.map((provider, i) => (
              <motion.div
                key={provider.id}
                className={`text-[9px] font-medium ${
                  dataPoints.some(p => p.status === "searching" && p.currentProvider === i)
                    ? "text-[#3e8aff]"
                    : isDark ? "text-gray-600" : "text-gray-400"
                }`}
                animate={dataPoints.some(p => p.status === "searching" && p.currentProvider === i) ? {
                  scale: [1, 1.1, 1]
                } : {}}
                transition={{ duration: 0.5 }}
              >
                {provider.name.split('.')[0]}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Legend */}
        {!compact && (
          <div className={`flex items-center justify-center gap-6 mt-4 text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3" />
              <span>Email</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3" />
              <span>Phone</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-3 w-3" />
              <span>Company</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-3 w-3 text-green-500" />
              <span>Found</span>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="h-3 w-3 text-red-500" />
              <span>Not Found</span>
            </div>
          </div>
        )}

        {/* Play/Pause Button */}
        <div className="flex justify-center mt-4">
          <motion.button
            onClick={() => setIsRunning(!isRunning)}
            className="px-4 py-2 text-sm rounded-lg bg-[#3e8aff]/10 text-[#3e8aff] hover:bg-[#3e8aff]/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isRunning ? "Pause Demo" : "Start Demo"}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
