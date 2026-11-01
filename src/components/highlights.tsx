"use client";

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Sparkles, HeartHandshake, Clock } from "lucide-react";

interface HighlightItem {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  title: string;
}

const HIGHLIGHTS: HighlightItem[] = [
  {
    icon: ShieldCheck,
    title: "MDS Periodontist Specialist",
  },
  {
    icon: Sparkles,
    title: "FFAC Facial Aesthetics",
  },
  {
    icon: HeartHandshake,
    title: "Thoughtful Individual Assessment",
  },
  {
    icon: Clock,
    title: "10am–1pm & 5pm–8pm Hours",
  },
];

export function Highlights() {
  return (
    <section
      aria-label="Practice Highlights"
      className="bg-surface-container-lowest py-6 border-y border-surface-container-highest/60"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {HIGHLIGHTS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group flex items-center gap-3 py-1.5 px-2.5 rounded-xl cursor-default select-none border border-transparent hover:border-surface-container-highest/80 hover:bg-surface-container-low/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                tabIndex={0}
              >
                <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary flex-shrink-0 shadow-xs border border-surface-container-highest/40 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                </div>
                <span className="font-semibold text-xs sm:text-sm text-on-surface leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
