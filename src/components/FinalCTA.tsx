"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "@phosphor-icons/react";
import { StarsBackground } from "./StarsBackground";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-24 md:py-32 relative overflow-hidden bg-[#030303]">
      {/* Stars Background */}
      <StarsBackground />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 tracking-tight text-white">
            Ready to transform your{" "}
            <span className="text-[#3e8aff] underline decoration-[#3e8aff] underline-offset-4">
              GTM strategy
            </span>
            ?
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-400">
            Get 30 free credits. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="https://portal.cleanlist.ai/auth/register"
              className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#3e8aff] hover:bg-[#2d7af0] text-white font-semibold rounded-xl text-base md:text-lg transition-all duration-300 shadow-xl shadow-[#3e8aff]/30 hover:shadow-2xl hover:shadow-[#3e8aff]/40 hover:scale-[1.02]"
            >
              Get Started Free
              <ArrowRight size={22} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="https://calendly.com/cleanlist/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 font-semibold rounded-xl text-base md:text-lg transition-all duration-300 border-2 hover:scale-[1.02] bg-white/5 hover:bg-white/10 text-white border-white/20 hover:border-white/30"
            >
              <Calendar size={22} weight="fill" className="text-[#3e8aff]" />
              Book a Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
