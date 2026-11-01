"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Sparkles,
  Activity,
  Smile,
  Moon,
  Zap,
  ArrowRight,
  Clock,
  CheckCircle2,
} from "lucide-react";

interface SpecialtyService {
  title: string;
  category: string;
  description: string;
  timeline: string;
  pricingTag: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
}

const SERVICES: SpecialtyService[] = [
  {
    title: "Preventive Care & Ultrasonic Cleanings",
    category: "General Dental",
    description:
      "Routine clinical dental exams, digital diagnostics, ultrasonic scaling, thorough debris removal, and home-care gum health review.",
    timeline: "Recall: 6 Months",
    pricingTag: "Preventive Care",
    icon: ShieldCheck,
  },
  {
    title: "Advanced Periodontal Therapy & Flap Surgery",
    category: "Specialist Periodontics",
    description:
      "Periodontal pocket reduction, non-surgical root planing, local antimicrobial drug delivery, and flap surgery directed by Dr. Parmar (MDS).",
    timeline: "Specialist Care",
    pricingTag: "MDS Periodontology",
    icon: Activity,
  },
  {
    title: "Dental Implants & Bone Ridge Augmentation",
    category: "Implantology",
    description:
      "Precision implant-based tooth replacement, bone contouring, and ridge augmentation procedures to restore jawbone width and height.",
    timeline: "Staged Planning",
    pricingTag: "Surgical Consult",
    icon: Sparkles,
  },
  {
    title: "Smile Makeovers & Porcelain Veneers",
    category: "Cosmetics",
    description:
      "Individualized aesthetic smile design, custom-made porcelain veneers, tooth-coloured composite restorations, and in-office teeth whitening.",
    timeline: "Custom Aesthetic Plan",
    pricingTag: "Cosmetic Design",
    icon: Smile,
  },
  {
    title: "HydraFacial & Plasma Skin Tightening",
    category: "Facial Aesthetics",
    description:
      "Medical deep pore cleansing, vacuum infusion hydration, customized chemical peels, and non-surgical plasma skin tightening.",
    timeline: "60-Min Session",
    pricingTag: "Skin Rejuvenation",
    icon: Sparkles,
  },
  {
    title: "Face & Scalp Hair PRP Therapy",
    category: "Facial Cosmetology",
    description:
      "Autologous platelet-rich plasma treatments for facial collagen regeneration, microneedling, and active scalp hair rejuvenation (FFAC Certified).",
    timeline: "Specialized Protocol",
    pricingTag: "FFAC Certified",
    icon: Zap,
  },
];

export function Services() {
  return (
    <section
      id="services-directory"
      aria-label="Clinical Services Directory"
      className="w-full bg-surface py-16 md:py-24 scroll-mt-20"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high border border-surface-container-highest text-secondary text-xs font-semibold uppercase tracking-wider shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span>Clinical Masteries</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-primary tracking-tight">
            Comprehensive Dental &amp; Facial Aesthetic Services
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-on-surface-variant leading-relaxed">
            From preventive periodontal care, flap surgery, and dental implants to HydraFacial treatments and autologous PRP rejuvenation, Dr. Jinal Parmar delivers modern clinical care with calm, precision, and complete transparency.
          </p>
        </div>

        {/* 6 Specialty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="group relative bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-surface-container-highest/80 shadow-xs hover:shadow-xl hover:border-primary/25 transition-all flex flex-col justify-between"
                tabIndex={0}
              >
                <div>
                  {/* Top Row: Icon & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-surface-container-low text-primary flex items-center justify-center shadow-xs border border-surface-container-highest/50 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface-container text-secondary border border-surface-container-highest/60">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-primary mb-3 group-hover:text-primary-container transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Card Footer & Action */}
                <div>
                  <div className="border-t border-surface-container-highest/70 pt-4 flex items-center justify-between gap-2 text-xs sm:text-sm">
                    <div className="inline-flex items-center gap-1.5 text-secondary font-medium">
                      <Clock className="w-3.5 h-3.5 text-secondary/70 flex-shrink-0" aria-hidden="true" />
                      <span>{service.timeline}</span>
                    </div>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-primary-fixed/30 text-primary border border-primary/10">
                      {service.pricingTag}
                    </span>
                  </div>

                  <a
                    href="#booking-wizard"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-container transition-colors group-hover:translate-x-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                    aria-label={`Reserve appointment for ${service.title}`}
                  >
                    <span>Reserve consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
