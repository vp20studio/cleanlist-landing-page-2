"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  ArrowRight,
  Users,
  Stack,
  Plug,
  TrendUp,
  Rocket,
} from "@/components/icons";
import { useTheme } from "@/context/ThemeContext";

const values = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Operators First",
    description:
      "We built this for ourselves before we built it for you. Every feature comes from real GTM pain.",
  },
  {
    icon: <Stack className="w-6 h-6" />,
    title: "Playbooks > Workflows",
    description:
      "We give you proven motions, not blank canvases. Deploy in minutes, not months.",
  },
  {
    icon: <Plug className="w-6 h-6" />,
    title: "Works on Your Stack",
    description:
      "Unlike all-in-ones that force migration, we integrate with what you already use.",
  },
  {
    icon: <TrendUp className="w-6 h-6" />,
    title: "Results That Matter",
    description:
      "85% phone retrieval, 2x pipeline, 40hrs/week saved. We measure what actually moves revenue.",
  },
];

const team = [
  {
    name: "Levon",
    role: "CEO",
    initials: "L",
    bio: "Scaled GTM at Float and Keep. Ran a 25-BDR lead generation agency to 6-figure MRR. Built GTM infrastructure daily for years before productizing it.",
  },
  {
    name: "Sal",
    role: "CTO",
    initials: "S",
    bio: "10+ years shipping production SaaS. Built dev agency to 6-figure MRR. Owns product and engineering.",
  },
  {
    name: "Erwin",
    role: "CDO",
    initials: "E",
    bio: "Co-founded Hopin (served as CTO), raised $3M+. Former data science at Shopify. Owns data quality and ML.",
  },
  {
    name: "Victor",
    role: "COO",
    initials: "V",
    bio: "Senior growth marketing experience at Litmus. Owns marketing and operations.",
  },
];

export default function AboutUsPage() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3e8aff]/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3e8aff]/10 border border-[#3e8aff]/20 text-sm text-[#3e8aff] mb-6"
            >
              <Rocket className="w-4 h-4" />
              About Cleanlist
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6 ${isDark ? "text-white" : "text-gray-900"}`}
            >
              Built by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3e8aff] to-[#60a5fa]">
                operators
              </span>
              , for operators
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`text-xl ${isDark ? "text-gray-400" : "text-gray-600"}`}
            >
              We built Cleanlist because we lived the pain. Years of cobbling
              together tools, building custom integrations, and watching playbooks
              disappear when people left.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section ref={ref} className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                Our Story
              </h2>
              <div className={`space-y-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                <p>
                  Before Cleanlist, we spent years running GTM teams at high-growth
                  companies. We built the same playbooks over and over — outbound,
                  inbound, intent-based, ABM. Every time, we had to cobble together
                  5+ tools, write custom integrations, and pray nothing broke.
                </p>
                <p>
                  We tried every tool in the market. Workflow builders that needed
                  GTM engineers to configure. Single-source enrichment providers
                  with gaps. Point solutions that didn&apos;t talk to each other.
                </p>
                <p>
                  So we built Cleanlist internally first — a system to turn any
                  GTM motion into a repeatable, executable playbook. When we saw
                  how much time it saved, we knew others needed it too.
                </p>
                <p>
                  Today, Cleanlist powers GTM operations for teams who want to
                  deploy proven playbooks in minutes, not build custom workflows
                  over months.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`p-8 rounded-2xl border ${isDark ? "bg-white/[0.02] border-white/[0.08]" : "bg-gray-50/50 border-black/[0.08]"}`}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff]">
                    <TrendUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-[#3e8aff]">85%</div>
                    <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Phone retrieval rate</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                    <Stack className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-500">2x</div>
                    <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Pipeline increase</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-500">40hrs</div>
                    <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Saved per week</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`py-24 ${isDark ? "bg-[#030303]" : "bg-[#F8F9FA]"}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              What We Believe
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              The principles that guide how we build Cleanlist.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl ${isDark ? "bg-[#0a0a0a] border border-white/[0.08]" : "bg-white/70 border border-black/[0.08]"}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#3e8aff]/10 flex items-center justify-center text-[#3e8aff] mb-4">
                  {value.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? "text-white" : "text-gray-900"}`}>
                  {value.title}
                </h3>
                <p className={isDark ? "text-gray-400" : "text-gray-600"}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
              Leadership Team
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Former operators from Float, Keep, Hopin, Shopify, and Litmus.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl ${isDark ? "bg-[#0a0a0a] border border-white/[0.08]" : "bg-white/70 border border-black/[0.08]"}`}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3e8aff]/20 to-[#3e8aff]/5 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#3e8aff]">
                    {member.initials}
                  </span>
                </div>
                <div className="text-center mb-3">
                  <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#3e8aff] font-medium">{member.role}</p>
                </div>
                <p className={`text-sm text-center ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
