import React from "react";
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
              <div
                key={index}
                className="flex items-center gap-3 py-1 px-2 rounded-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary flex-shrink-0 shadow-xs border border-surface-container-highest/40">
                  <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <span className="font-semibold text-xs sm:text-sm text-on-surface leading-snug">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
