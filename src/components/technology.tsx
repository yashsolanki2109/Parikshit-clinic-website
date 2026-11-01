"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ScanFace,
  Sparkles,
  ShieldCheck,
  Scan,
  Check,
  ArrowRight,
  Zap,
} from "lucide-react";

interface TechItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  benefit: string;
  footer: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
}

const TECHNOLOGIES: TechItem[] = [
  {
    id: "digital-diagnostics",
    title: "Digital Dental X-Rays & Imaging",
    badge: "Low-Dose Precision",
    description:
      "Modern digital radiography providing high-definition visualization of roots, bone height, and periodontal structures with significantly reduced radiation exposure, considered only when clinically indicated.",
    benefit: "Low-Dose Radiation",
    footer: "Sub-Millimeter Imaging",
    icon: ScanFace,
  },
  {
    id: "ultrasonic-periodontics",
    title: "Advanced Periodontal Instrumentation",
    badge: "MDS Periodontics",
    description:
      "Gentle ultrasonic scaling instruments and micro-surgical equipment designed for precise pocket reduction, root debridement, and biological tissue preservation under Dr. Parmar's specialist care.",
    benefit: "Gentle Debridement",
    footer: "Tissue Preservation",
    icon: ShieldCheck,
  },
  {
    id: "aesthetics-tech",
    title: "Medical-Grade Facial Systems",
    badge: "FFAC Cosmetology",
    description:
      "Advanced skin aesthetic equipment including high-frequency ozone therapy, gentle vacuum hydra-dermabrasion, and plasma skin-tightening devices configured for safe, personalized aesthetic protocols.",
    benefit: "Multi-Modal Skincare",
    footer: "Medical Cosmetology",
    icon: Sparkles,
  },
  {
    id: "prp-technology",
    title: "Autologous PRP Isolation",
    badge: "Biocompatible Care",
    description:
      "Clinical centrifuge isolation technology to prepare platelet-rich plasma from your own blood for targeted facial rejuvenation, collagen stimulation, and scalp hair follicle restoration.",
    benefit: "100% Autologous",
    footer: "Regenerative Protocol",
    icon: Zap,
  },
];

export function Technology() {
  return (
    <section
      id="technology-comfort"
      aria-label="Hospital-Grade Technology and Patient Comfort"
      className="w-full bg-surface py-16 md:py-24 scroll-mt-20"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high border border-surface-container-highest text-secondary text-xs font-semibold uppercase tracking-wider shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span>Clinical Innovation</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-primary tracking-tight">
            Modern Care Delivered with Calm, Precision &amp; Safety
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-on-surface-variant leading-relaxed">
            At PARIKSHIT CLINIC, we blend specialist dental and periodontal technology with advanced facial aesthetic modalities—ensuring every appointment in Vadodara is gentle, transparent, and biologically restorative.
          </p>
        </div>

        {/* 4 Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECHNOLOGIES.map((tech) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.id}
                whileHover={{ y: -4, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-lg transition-all flex flex-col justify-between border border-surface-container-highest/60 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 cursor-default"
                tabIndex={0}
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-200 shadow-xs border border-surface-container-highest/40">
                      <Icon className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-semibold text-secondary bg-surface-container px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {tech.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-lg md:text-xl font-semibold text-primary mb-3 leading-snug">
                    {tech.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-6">
                    {tech.description}
                  </p>
                </div>

                {/* Footer Meta Row */}
                <div className="pt-4 border-t border-surface-container-highest/60 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-secondary">
                    <Check className="w-3.5 h-3.5 text-primary stroke-[2.5]" aria-hidden="true" />
                    <span>{tech.footer}</span>
                  </div>
                  <span className="text-[11px] font-medium text-on-surface-variant/80 bg-surface-container-low px-2 py-0.5 rounded border border-surface-container-highest/40">
                    {tech.benefit}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-12 rounded-2xl bg-surface-container-low border border-surface-container-highest/60 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <ShieldCheck className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-serif text-base md:text-lg font-semibold text-primary">
                Individual Assessment &amp; Thoughtful Consultation
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant">
                Every procedure is tailored to your clinical indications. Discuss suitability, risks, and treatment options with Dr. Jinal Parmar before choosing a plan.
              </p>
            </div>
          </div>

          <motion.a
            href="#booking-wizard"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary-container transition-colors shadow-sm shrink-0 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <span>Request an Appointment</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Technology;
