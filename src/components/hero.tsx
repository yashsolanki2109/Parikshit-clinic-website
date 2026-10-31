"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Star, Calendar, ArrowDown, BadgeCheck, Sparkles, Clock } from "lucide-react";

const spaCalm = [0.4, 0, 0.2, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: spaCalm,
    },
  },
};

const imageCardVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: spaCalm,
    },
  },
};

const floatingCardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: 0.35,
      ease: spaCalm,
    },
  },
};

export function Hero() {
  return (
    <section id="hero" className="relative bg-surface overflow-hidden">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-12 md:py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center"
        >
          {/* Left Column (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Trust Header Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container-low border border-surface-container-highest/80 shadow-xs mb-6 text-xs sm:text-sm text-on-surface-variant self-start"
            >
              <div
                className="flex items-center gap-0.5 text-amber-500"
                aria-label="5 out of 5 stars rating"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="leading-tight">
                Top Rated Vadodara Dental &amp; Aesthetics &bull;{" "}
                <strong className="font-semibold text-on-surface">
                  4.9★ Patient Satisfaction
                </strong>{" "}
                in Vadodara, Gujarat
              </span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-4xl sm:text-5xl lg:text-[54px] text-primary tracking-tight leading-[1.15] mb-6"
            >
              Healthy Smiles.{" "}
              <span className="italic font-normal text-secondary block sm:inline">
                Confident You.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="font-sans text-base sm:text-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed"
            >
              Experience personalized dental care and facial aesthetics with Dr. Jinal Parmar at PARIKSHIT CLINIC. From specialized periodontal therapy and bone regeneration to bespoke smile makeovers and facial cosmetology, delivered with thoughtful assessment and patient comfort.
            </motion.p>

            {/* Dual Action CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <a
                href="#booking-wizard"
                className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary-container hover:text-primary-fixed transition-all shadow-md flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Calendar className="w-5 h-5" aria-hidden="true" />
                <span>Schedule Your Visit</span>
              </a>

              <a
                href="#services-directory"
                className="px-7 py-4 rounded-full bg-surface-container text-primary font-semibold hover:bg-surface-container-high transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <ArrowDown className="w-5 h-5" aria-hidden="true" />
                <span>Explore Treatments</span>
              </a>
            </motion.div>

            {/* Feature Micro-Metrics Bar / Timing Tags */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-surface-container-highest/80"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 items-stretch">
                <div className="flex flex-col justify-between p-3.5 rounded-xl bg-surface-container-lowest border border-surface-container-highest/80 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-secondary text-xs font-semibold mb-1">
                    <Clock className="w-3.5 h-3.5 text-secondary shrink-0" aria-hidden="true" />
                    <span className="uppercase tracking-wider text-[10px] font-bold">Morning</span>
                  </div>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-primary tracking-tight">
                    10am–1pm
                  </span>
                  <span className="text-xs text-on-surface-variant mt-1 leading-snug">
                    Clinic Consultation
                  </span>
                </div>

                <div className="flex flex-col justify-between p-3.5 rounded-xl bg-surface-container-lowest border border-surface-container-highest/80 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-secondary text-xs font-semibold mb-1">
                    <Clock className="w-3.5 h-3.5 text-secondary shrink-0" aria-hidden="true" />
                    <span className="uppercase tracking-wider text-[10px] font-bold">Evening</span>
                  </div>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-primary tracking-tight">
                    5pm–8pm
                  </span>
                  <span className="text-xs text-on-surface-variant mt-1 leading-snug">
                    Clinic Consultation
                  </span>
                </div>

                <div className="flex flex-col justify-between p-3.5 rounded-xl bg-surface-container-lowest border border-surface-container-highest/80 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-primary text-xs font-semibold mb-1">
                    <BadgeCheck className="w-3.5 h-3.5 text-primary shrink-0" aria-hidden="true" />
                    <span className="uppercase tracking-wider text-[10px] font-bold">Speciality</span>
                  </div>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-primary tracking-tight">
                    MDS
                  </span>
                  <span className="text-xs text-on-surface-variant mt-1 leading-snug">
                    Periodontics Spec.
                  </span>
                </div>

                <div className="flex flex-col justify-between p-3.5 rounded-xl bg-surface-container-lowest border border-surface-container-highest/80 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-secondary text-xs font-semibold mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-secondary shrink-0" aria-hidden="true" />
                    <span className="uppercase tracking-wider text-[10px] font-bold">Aesthetics</span>
                  </div>
                  <span className="font-serif text-xl sm:text-2xl font-bold text-primary tracking-tight">
                    FFAC
                  </span>
                  <span className="text-xs text-on-surface-variant mt-1 leading-snug">
                    Cosmetology &amp; PRP
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <motion.div
              variants={imageCardVariants}
              className="aspect-[16/11] rounded-2xl overflow-hidden shadow-xl bg-surface-container-low relative"
            >
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA19V_qatGhJ5Mq3MBMUOmKOJMHSz95D_Kn8N3vE13H-31tUAB9TpXHjcO7d9bbkLMNNLOKmivFcbOrgEjS827oW3XfKZmx1v6HCh5QFd9gn0qu8bvl5oss3MvI2BNzNZaUzLnyrttONLGeDIxHN4cnF7sT4DBUEq_CFAV3Q8AtiyTeTf2ExZBJa-vkiVkedmwLlz0HvID7WT6ce5qOUf4sCa9k9t3xmQn6bU2T5hG1JVR_ZcHTTlLNZQ"
                alt="PARIKSHIT CLINIC modern dental and facial aesthetics clinic interior in Vadodara"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />

              {/* Ambient vignette overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Highlight Tag floating top right */}
              <motion.div
                variants={floatingCardVariants}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-white/60 flex items-center gap-1.5 text-xs sm:text-sm font-medium text-secondary z-10"
              >
                <Sparkles className="w-4 h-4 text-secondary flex-shrink-0" aria-hidden="true" />
                <span>Dental &amp; Facial Aesthetics</span>
              </motion.div>

              {/* Floating Credential Card at bottom left */}
              <motion.div
                variants={floatingCardVariants}
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-lg border border-white/60 flex items-center gap-3 max-w-[calc(100%-2rem)] sm:max-w-xs z-10"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-fixed text-primary flex items-center justify-center flex-shrink-0 shadow-xs">
                  <BadgeCheck className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-on-surface text-sm sm:text-base leading-tight">
                    Dr. Jinal Parmar
                  </p>
                  <p className="text-xs text-on-surface-variant leading-tight mt-0.5">
                    BDS · MDS (Periodontist) · FFAC
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
