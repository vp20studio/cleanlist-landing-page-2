"use client";

import { motion } from "framer-motion";

const companies = [
  { name: "Stripe", logo: StripeLogo },
  { name: "Notion", logo: NotionLogo },
  { name: "Linear", logo: LinearLogo },
  { name: "Vercel", logo: VercelLogo },
  { name: "Figma", logo: FigmaLogo },
  { name: "Slack", logo: SlackLogo },
];

export default function TrustBar() {
  return (
    <section className="relative py-16 md:py-20 bg-[#030303] overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-[#888888] mb-10 tracking-wide uppercase"
        >
          Trusted by growth teams at
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300">
                <company.logo className="h-7 md:h-8 w-auto text-white" />
              </div>
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl bg-white/10 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent" />
    </section>
  );
}

// SVG Logo Components (Simplified iconic representations)
function StripeLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 25" fill="currentColor">
      <path d="M5 0h4c3.314 0 6 2.686 6 6v13c0 3.314-2.686 6-6 6H5c-3.314 0-6-2.686-6-6V6c0-3.314 2.686-6 6-6zm0 3C3.343 3 2 4.343 2 6v13c0 1.657 1.343 3 3 3h4c1.657 0 3-1.343 3-3V6c0-1.657-1.343-3-3-3H5zm18-3h2l6 25h-3l-1.5-6h-5l-1.5 6h-3l6-25zm1 4l-1.8 12h3.6L24 4zm11-4h8c2.761 0 5 2.239 5 5s-2.239 5-5 5h-5v15h-3V0zm3 3v4h5c1.105 0 2-.895 2-2s-.895-2-2-2h-5zm15-3h12v3H56v7h6v3h-6v9h7v3H53V0z" />
    </svg>
  );
}

function NotionLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 25" fill="currentColor">
      <path d="M5 0h3l12 18V0h3v25h-3L8 7v18H5V0zm30 0h3v22h8v3H35V0zm20 0h16v3H58v7h10v3H58v9h13v3H55V0zm25 0h8c4.418 0 8 3.582 8 8s-3.582 8-8 8h-5v9h-3V0zm3 3v10h5c2.761 0 5-2.239 5-5s-2.239-5-5-5h-5z" />
    </svg>
  );
}

function LinearLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 25" fill="currentColor">
      <path d="M0 0h3v22h10v3H0V0zm18 0h3v25h-3V0zm12 0h3l8 18V0h3v25h-3l-8-18v18h-3V0zm22 0h16v3H55v7h10v3H55v9h13v3H52V0zm25 0h3l6 25h-3l-1.5-6h-6l-1.5 6h-3l6-25zm1.5 4l-2.1 12h4.2L78.5 4z" />
    </svg>
  );
}

function VercelLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 76 25" fill="currentColor">
      <path d="M12.5 0L25 25H0L12.5 0zm18.5 0h3l6 25h-3l-1.5-6h-6l-1.5 6h-3l6-25zm1.5 4l-2.1 12h4.2L32.5 4zM46 0h12c3.314 0 6 2.686 6 6s-2.686 6-6 6h-9v13h-3V0zm3 3v6h9c1.657 0 3-1.343 3-3s-1.343-3-3-3h-9zm22-3h14v3H74v7h9v3h-9v9h12v3H71V0z" />
    </svg>
  );
}

function FigmaLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 75 25" fill="currentColor">
      <path d="M0 0h14v3H3v8h10v3H3v11H0V0zm21 0h3v25h-3V0zm13 0h3v10h5c3.866 0 7 3.134 7 7.5S45.866 25 42 25h-8V0zm3 13v9h5c2.21 0 4-1.79 4-4.5S44.21 13 42 13h-5zm23-13h3l5 18L73 0h3L68 25h-3l-5-18-5 18h-3L44 0z" />
    </svg>
  );
}

function SlackLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 25" fill="currentColor">
      <path d="M6 0c3.314 0 6 2.686 6 6H9c-1.657 0-3-1.343-3-3s1.343-3 3-3h.01C7.353.01 6 1.353 6 3v3H3C1.343 6 0 4.657 0 3s1.343-3 3-3h3zm18 0h3v25h-3V0zm14 0h3l6 25h-3l-1.5-6h-6l-1.5 6h-3l6-25zm1.5 4l-2.1 12h4.2L39.5 4zM54 0h14v3H57v8h10v3H57v11h-3V0zm22 0h3v22h10v3H76V0z" />
    </svg>
  );
}
