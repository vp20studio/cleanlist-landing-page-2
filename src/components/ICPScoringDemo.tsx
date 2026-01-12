"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  Brain,
  Sparkles,
  Zap,
  CheckCircle,
  RotateCcw,
} from "lucide-react";

const sampleLeads = [
  { name: "Sarah Chen", company: "TechCorp", role: "VP Sales", employees: 500, industry: "SaaS", funding: "$50M" },
  { name: "Mike Johnson", company: "StartupXYZ", role: "RevOps Lead", employees: 120, industry: "FinTech", funding: "$15M" },
  { name: "Lisa Park", company: "Enterprise Inc", role: "SDR Manager", employees: 2500, industry: "Enterprise", funding: "$200M" },
  { name: "James Wilson", company: "SmallBiz Co", role: "Founder", employees: 15, industry: "Retail", funding: "Bootstrapped" },
];

interface WeightSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  isDark: boolean;
}

function WeightSlider({ label, value, onChange, isDark }: WeightSliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className={isDark ? "text-gray-300" : "text-gray-700"}>{label}</span>
        <span className="text-purple-400 font-medium">{value}%</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={0}
          max={100}
          step={5}
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #a855f7 0%, #a855f7 ${value}%, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} ${value}%, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 100%)`
          }}
        />
      </div>
    </div>
  );
}

export default function ICPScoringDemo() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [weights, setWeights] = useState({
    companySize: 70,
    role: 85,
    industry: 60,
    funding: 50
  });
  const [selectedLead, setSelectedLead] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [scores, setScores] = useState<number[]>([]);

  const calculateScore = (lead: typeof sampleLeads[0]) => {
    let score = 0;
    // Company size scoring
    if (lead.employees >= 100 && lead.employees <= 1000) score += weights.companySize * 0.4;
    else if (lead.employees > 1000) score += weights.companySize * 0.25;
    else score += weights.companySize * 0.1;

    // Role scoring
    if (lead.role.includes("VP") || lead.role.includes("Director")) score += weights.role * 0.4;
    else if (lead.role.includes("Lead") || lead.role.includes("Manager")) score += weights.role * 0.3;
    else score += weights.role * 0.15;

    // Industry scoring
    if (lead.industry === "SaaS" || lead.industry === "FinTech") score += weights.industry * 0.35;
    else if (lead.industry === "Enterprise") score += weights.industry * 0.25;
    else score += weights.industry * 0.1;

    // Funding scoring
    if (lead.funding.includes("$50M") || lead.funding.includes("$200M")) score += weights.funding * 0.3;
    else if (lead.funding.includes("$15M")) score += weights.funding * 0.2;
    else score += weights.funding * 0.05;

    return Math.min(Math.round(score), 100);
  };

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setScores([]);

    sampleLeads.forEach((lead, index) => {
      setTimeout(() => {
        setScores(prev => [...prev, calculateScore(lead)]);
        if (index === sampleLeads.length - 1) {
          setTimeout(() => setIsAnalyzing(false), 500);
        }
      }, (index + 1) * 400);
    });
  };

  const resetDemo = () => {
    setScores([]);
    setSelectedLead(0);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-purple-400";
    if (score >= 40) return "text-yellow-400";
    return "text-gray-400";
  };

  const getPriorityLabel = (score: number) => {
    if (score >= 80) return { label: "Hot", class: "bg-green-500/20 text-green-400" };
    if (score >= 60) return { label: "Warm", class: "bg-purple-500/20 text-purple-400" };
    if (score >= 40) return { label: "Cool", class: "bg-yellow-500/20 text-yellow-400" };
    return { label: "Cold", class: isDark ? "bg-white/5 text-gray-400" : "bg-gray-100 text-gray-500" };
  };

  return (
    <div className={`p-6 md:p-8 rounded-2xl border backdrop-blur-sm ${
      isDark
        ? "bg-gradient-to-br from-white/[0.03] to-white/[0.01] border-white/[0.08]"
        : "bg-white/70 border-black/[0.08]"
    }`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-purple-400" />
          <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
            Interactive ICP Scoring Demo
          </h3>
        </div>
        {scores.length > 0 && (
          <button
            onClick={resetDemo}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors ${
              isDark
                ? "text-gray-400 hover:text-white hover:bg-white/5"
                : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset
          </button>
        )}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* ICP Criteria Weights */}
        <div className="space-y-6">
          <h4 className={`font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Adjust ICP Criteria Weights
          </h4>

          <div className="space-y-5">
            <WeightSlider
              label="Company Size (100-1000 employees)"
              value={weights.companySize}
              onChange={(v) => setWeights(prev => ({ ...prev, companySize: v }))}
              isDark={isDark}
            />
            <WeightSlider
              label="Role Seniority (VP/Director preferred)"
              value={weights.role}
              onChange={(v) => setWeights(prev => ({ ...prev, role: v }))}
              isDark={isDark}
            />
            <WeightSlider
              label="Industry (SaaS/FinTech preferred)"
              value={weights.industry}
              onChange={(v) => setWeights(prev => ({ ...prev, industry: v }))}
              isDark={isDark}
            />
            <WeightSlider
              label="Funding Stage ($15M+ preferred)"
              value={weights.funding}
              onChange={(v) => setWeights(prev => ({ ...prev, funding: v }))}
              isDark={isDark}
            />
          </div>

          <button
            onClick={runAnalysis}
            disabled={isAnalyzing}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-500 text-white font-medium rounded-lg hover:bg-purple-500/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isAnalyzing ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="h-4 w-4" />
                </motion.div>
                Analyzing Leads...
              </>
            ) : (
              <>
                <Brain className="h-4 w-4" />
                Run ICP Analysis
              </>
            )}
          </button>
        </div>

        {/* Results Table */}
        <div className="space-y-4">
          <h4 className={`font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Lead Scores
          </h4>

          <div className={`overflow-x-auto rounded-xl border ${isDark ? "border-white/[0.08]" : "border-black/[0.08]"}`}>
            <table className="w-full text-sm">
              <thead>
                <tr className={`border-b ${isDark ? "border-white/[0.08] bg-white/[0.02]" : "border-black/[0.05] bg-gray-50/50"}`}>
                  <th className={`text-left py-3 px-4 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>Lead</th>
                  <th className={`text-left py-3 px-4 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>Company</th>
                  <th className={`text-center py-3 px-4 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>ICP Score</th>
                  <th className={`text-center py-3 px-4 font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>Priority</th>
                </tr>
              </thead>
              <tbody>
                {sampleLeads.map((lead, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0.5 }}
                    animate={{
                      opacity: 1,
                      backgroundColor: selectedLead === index
                        ? (isDark ? "rgba(168, 85, 247, 0.05)" : "rgba(168, 85, 247, 0.05)")
                        : "transparent"
                    }}
                    className={`border-b cursor-pointer transition-colors ${
                      isDark
                        ? "border-white/[0.05] hover:bg-white/[0.02]"
                        : "border-black/[0.03] hover:bg-gray-50/50"
                    }`}
                    onClick={() => setSelectedLead(index)}
                  >
                    <td className="py-3 px-4">
                      <div>
                        <div className={`font-medium ${isDark ? "text-white" : "text-gray-900"}`}>{lead.name}</div>
                        <div className="text-xs text-gray-500">{lead.role}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <div className={isDark ? "text-gray-300" : "text-gray-700"}>{lead.company}</div>
                        <div className="text-xs text-gray-500">{lead.employees} employees</div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-center">
                      {scores[index] !== undefined ? (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={`font-bold text-lg ${getScoreColor(scores[index])}`}
                        >
                          {scores[index]}
                        </motion.span>
                      ) : (
                        <span className="text-gray-500">—</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {scores[index] !== undefined ? (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityLabel(scores[index]).class}`}
                        >
                          {getPriorityLabel(scores[index]).label}
                        </motion.span>
                      ) : (
                        <span className="text-gray-500">—</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {scores.length === sampleLeads.length && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-green-400 bg-green-500/10 p-3 rounded-lg border border-green-500/20"
            >
              <CheckCircle className="h-4 w-4" />
              <span>Analysis complete! {scores.filter(s => s >= 60).length} high-priority leads identified.</span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
