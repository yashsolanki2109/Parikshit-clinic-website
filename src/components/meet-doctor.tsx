"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, Quote, ThumbsUp, Award, ShieldCheck, Sparkles } from "lucide-react";

const ACCREDITATIONS = [
  {
    acronym: "BDS",
    title: "Bachelor of Dental Surgery",
    organization: "General & Restorative Dental Care",
  },
  {
    acronym: "MDS",
    title: "Master of Dental Surgery",
    organization: "Periodontics & Gum Regeneration",
  },
  {
    acronym: "FFAC",
    title: "Fellowship in Facial Aesthetics",
    organization: "Facial Cosmetology & Aesthetics",
  },
];

export function MeetDoctor() {
  return (
    <section
      id="about-doctor"
      aria-label="About Dr. Jinal Parmar"
      className="w-full bg-surface-container-low py-16 md:py-24 scroll-mt-20"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Doctor Visual & Accreditations (5 Cols on LG) */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Photo Container */}
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl bg-surface-container relative group border border-surface-container-highest/60">
              <Image
                src="/JinalParamar.jpeg"
                alt="Dr. Jinal Parmar dental operatory and consultation room at PARIKSHIT CLINIC"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />

              {/* Gradient Overlay for bottom text legibility */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent opacity-60 pointer-events-none"
                aria-hidden="true"
              />

              {/* Floating Bottom Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/70 flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-serif font-medium text-primary text-base sm:text-lg leading-tight">
                    Dr. Jinal Parmar
                  </h3>
                  <p className="text-xs text-on-surface-variant font-medium mt-0.5">
                    BDS · MDS (Periodontist) · FFAC
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary text-white shadow-xs flex-shrink-0">
                  Specialist
                </span>
              </div>
            </div>

            {/* 3 Accreditation Chips Below Portrait in Grid */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-3 mt-4 sm:mt-5">
              {ACCREDITATIONS.map((chip, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="bg-white rounded-xl p-3 border border-surface-container-highest/80 shadow-xs text-center flex flex-col items-center justify-center hover:border-primary/40 hover:shadow-xs transition-colors cursor-default select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  tabIndex={0}
                >
                  <span className="font-bold text-sm sm:text-base text-primary tracking-wide">
                    {chip.acronym}
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-on-surface mt-0.5 leading-snug">
                    {chip.title}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-on-surface-variant/75 mt-0.5 line-clamp-1 leading-tight hidden sm:block">
                    {chip.organization}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Philosophy & Leadership (7 Cols on LG) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high border border-surface-container-highest text-secondary text-xs font-semibold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-secondary" aria-hidden="true" />
              <span>Dental, Periodontal &amp; Facial Aesthetics</span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-primary tracking-tight leading-tight">
              &ldquo;Thoughtful assessment, gentle care, and treatment designed around your comfort.&rdquo;
            </h2>

            {/* 2 Paragraphs */}
            <div className="space-y-4 text-on-surface-variant text-base sm:text-lg leading-relaxed">
              <p>
                Dr. Jinal Parmar brings advanced clinical expertise combining a Master of Dental Surgery (MDS) in Periodontology with a specialized Fellowship in Facial Aesthetics and Cosmetology (FFAC). Her dual mastery bridges health and aesthetics—from micro-surgical gum health and bone regeneration to aesthetic smile balance and facial rejuvenation.
              </p>
              <p>
                The primary commitment is to provide a welcoming, transparent environment where you can freely discuss your dental and cosmetic concerns. Each visit begins with an unhurried consultation, detailed clinical explanation of suitable treatment options, and clear guidance so you can make informed, confident decisions for your health and smile.
              </p>
            </div>

            {/* Quote Callout Box */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-white border-l-4 border-l-primary border border-surface-container-highest/80 shadow-xs">
              <Quote className="w-8 h-8 text-primary/25 mb-2.5" aria-hidden="true" />
              <blockquote className="text-sm sm:text-base italic text-on-surface leading-relaxed">
                &ldquo;At the clinic, our aim is to provide a welcoming environment where patients can discuss their dental, periodontal, and aesthetic concerns, understand suitable options, and make informed decisions about their care.&rdquo;
              </blockquote>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  — Dr. Jinal Parmar, BDS · MDS · FFAC
                </span>
              </div>
            </div>

            {/* Bottom Action Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pt-2">
              <motion.a
                href="#booking-wizard"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-medium text-sm sm:text-base hover:bg-primary-container transition-colors shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <span>Reserve With Dr. Parmar</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </motion.a>

              <div className="flex items-center gap-3 px-2 py-1 text-on-surface-variant text-sm">
                <div className="w-9 h-9 rounded-full bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700 flex-shrink-0 shadow-xs">
                  <ThumbsUp className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-semibold text-on-surface text-sm sm:text-base">
                    99.4% Patient Recommendation Rate
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    Verified clinical &amp; aesthetic patient satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
