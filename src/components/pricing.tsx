"use client";

import React from "react";
import { motion } from "motion/react";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Phone,
  Check,
  CreditCard,
  FileText,
} from "lucide-react";

interface PricingPillar {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  priceDisplay?: {
    amount: string;
    period: string;
    annualNote: string;
  };
  features: string[];
  networksOrPartners?: {
    label: string;
    items: string[];
  };
  ctaText: string;
  ctaHref: string;
  ctaType: "outline" | "white";
  isFeatured?: boolean;
}

const PRICING_PILLARS: PricingPillar[] = [
  {
    id: "consultation-diagnosis",
    badge: "First Step",
    title: "Clinical Consultation & Evaluation",
    subtitle:
      "Comprehensive examination of your dental, periodontal, or aesthetic concerns with Dr. Jinal Parmar. Digital X-rays considered only when clinically indicated.",
    features: [
      "In-depth discussion of your oral health or aesthetic goals",
      "Comprehensive clinical examination of teeth, gums, and oral tissues",
      "Periodontal health screening and pocket depth assessment",
      "Low-dose digital X-rays taken only when clinically necessary",
      "Detailed explanation of findings, suitable options, and alternatives",
    ],
    networksOrPartners: {
      label: "Departments Covered",
      items: ["Dental Treatments", "Periodontics", "Facial Aesthetics", "Pediatric Care"],
    },
    ctaText: "Request Consultation",
    ctaHref: "#booking-wizard",
    ctaType: "outline",
    isFeatured: false,
  },
  {
    id: "individual-assessment",
    badge: "Our Philosophy",
    title: "Individual Assessment & Care",
    subtitle:
      "At PARIKSHIT CLINIC, treatment suitability, risks, and recovery are clearly discussed before choosing a plan. Tailored to your specific clinical needs.",
    priceDisplay: {
      amount: "Upfront",
      period: "Estimates",
      annualNote: "Fees depend on clinical assessment • Zero Hidden Charges",
    },
    features: [
      "Itemized, written treatment estimates provided before any procedure starts",
      "Clear explanation of stages, expected recovery, and follow-up care",
      "Options for both non-surgical and surgical periodontal interventions",
      "Specialist care under MDS (Periodontology) & FFAC (Facial Aesthetics)",
      "Continuous support and personalized home-care guidance",
    ],
    ctaText: "Book Appointment",
    ctaHref: "#booking-wizard",
    ctaType: "white",
    isFeatured: true,
  },
  {
    id: "payment-options",
    badge: "Easy Billing",
    title: "Payment Modes & Receipts",
    subtitle:
      "Convenient clinic payment methods including digital UPI, cards, and structured documentation for dental insurance claims or mediclaim reimbursement.",
    features: [
      "Digital payments accepted via UPI (Google Pay, PhonePe, Paytm), debit & credit cards",
      "Detailed itemized receipts provided for insurance claim reimbursement",
      "Transparent fee schedules discussed in advance of multi-stage treatments",
      "Direct clinic support for queries regarding appointment timing or estimates",
    ],
    networksOrPartners: {
      label: "Accepted Payment Modes",
      items: ["UPI / QR Code", "Debit & Credit Cards", "Net Banking", "Cash", "Insurance Invoices"],
    },
    ctaText: "Call +91 70162 92613",
    ctaHref: "tel:+917016292613",
    ctaType: "outline",
    isFeatured: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing-insurance"
      aria-label="Transparent Investment & Payment Options"
      className="w-full bg-surface py-16 md:py-24 scroll-mt-20"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high border border-surface-container-highest text-secondary text-xs font-semibold uppercase tracking-wider shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            <span>Transparent Care</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-primary tracking-tight">
            Clear Guidance. Transparent Estimates.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-on-surface-variant leading-relaxed">
            Fees depend on your individual assessment and treatment plan. At PARIKSHIT CLINIC, we discuss suitability, risks, and options thoroughly before you choose a treatment, ensuring absolute clarity with zero surprises.
          </p>
        </div>

        {/* 3 Pricing Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PILLARS.map((pillar) => {
            if (pillar.isFeatured) {
              return (
                <motion.div
                  key={pillar.id}
                  whileHover={{ y: -4, scale: 1.015 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="bg-primary text-white shadow-xl relative overflow-hidden rounded-2xl p-7 sm:p-8 border border-primary-container flex flex-col justify-between ring-2 ring-primary/20 hover:shadow-2xl transition-all cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-fixed"
                  tabIndex={0}
                >
                  {/* Decorative ambient background glows */}
                  <div
                    className="absolute -right-16 -top-16 w-52 h-52 bg-primary-container/60 rounded-full blur-3xl pointer-events-none"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -left-12 -bottom-12 w-40 h-40 bg-secondary/30 rounded-full blur-2xl pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    {/* Badge and Tag */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-fixed text-primary text-xs font-bold uppercase tracking-wider shadow-sm">
                        <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{pillar.badge}</span>
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-primary-fixed/80">
                        Patient First
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-2xl md:text-3xl font-normal text-white mb-2">
                      {pillar.title}
                    </h3>

                    {/* Pricing Hero Display */}
                    {pillar.priceDisplay && (
                      <div className="my-5 pb-5 border-b border-white/15">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl md:text-4xl font-bold font-serif text-white tracking-tight">
                            {pillar.priceDisplay.amount}
                          </span>
                          <span className="text-primary-fixed font-medium text-sm">
                            {pillar.priceDisplay.period}
                          </span>
                        </div>
                        <p className="text-primary-fixed/80 text-xs mt-1.5">
                          {pillar.priceDisplay.annualNote}
                        </p>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-sm text-surface-container-high leading-relaxed mb-6">
                      {pillar.subtitle}
                    </p>

                    {/* 5 Feature Checks */}
                    <ul className="space-y-3.5 mb-8">
                      {pillar.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3 text-xs sm:text-sm text-white/95">
                          <CheckCircle2
                            className="w-4 h-4 text-primary-fixed shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="relative z-10 pt-4 border-t border-white/15">
                    <motion.a
                      href={pillar.ctaHref}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-white text-primary font-semibold hover:bg-primary-fixed transition-colors shadow-md text-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <span>{pillar.ctaText}</span>
                      <ArrowRight
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                        aria-hidden="true"
                      />
                    </motion.a>
                  </div>
                </motion.div>
              );
            }

            // Standard Pillars (Consultation & Payment Options)
            return (
              <motion.div
                key={pillar.id}
                whileHover={{ y: -4, scale: 1.015 }}
                whileTap={{ scale: 0.99 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="bg-surface-container-lowest rounded-2xl p-7 sm:p-8 border border-surface-container-highest/80 shadow-xs hover:shadow-lg hover:border-primary/25 transition-all flex flex-col justify-between cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                tabIndex={0}
              >
                <div>
                  {/* Top Badge Row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-secondary text-xs font-semibold uppercase tracking-wider border border-surface-container-highest/70">
                      {pillar.id === "consultation-diagnosis" ? (
                        <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                      ) : (
                        <CreditCard className="w-3.5 h-3.5" aria-hidden="true" />
                      )}
                      <span>{pillar.badge}</span>
                    </span>
                    <span className="text-[11px] font-medium text-on-surface-variant/70 uppercase tracking-wider">
                      {pillar.id === "consultation-diagnosis" ? "Assessment First" : "Flexible"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-normal text-primary mb-2">
                    {pillar.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm text-on-surface-variant leading-relaxed mb-5">
                    {pillar.subtitle}
                  </p>

                  {/* Partner Badges Box */}
                  {pillar.networksOrPartners && (
                    <div className="mb-6 p-3.5 rounded-xl bg-surface-container-low border border-surface-container-highest/50">
                      <p className="text-[11px] font-semibold text-secondary uppercase tracking-wider mb-2">
                        {pillar.networksOrPartners.label}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {pillar.networksOrPartners.items.map((item, iIndex) => (
                          <span
                            key={iIndex}
                            className="px-2 py-0.5 rounded-md bg-surface-container-lowest text-on-surface text-xs font-medium border border-surface-container-highest/60 shadow-2xs"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 4 Feature Checks */}
                  <ul className="space-y-3.5 mb-8">
                    {pillar.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-xs sm:text-sm text-on-surface-variant">
                        <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary stroke-[2.5]" aria-hidden="true" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4 border-t border-surface-container-highest/60">
                  {pillar.id === "payment-options" ? (
                    <motion.a
                      href={pillar.ctaHref}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-xs text-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <Phone className="w-4 h-4" aria-hidden="true" />
                      <span>{pillar.ctaText}</span>
                    </motion.a>
                  ) : (
                    <motion.a
                      href={pillar.ctaHref}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors shadow-xs text-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <span>{pillar.ctaText}</span>
                      <ArrowRight
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                        aria-hidden="true"
                      />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Transparency Reassurance Banner */}
        <div className="mt-12 rounded-2xl bg-surface-container-lowest border border-surface-container-highest/80 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary shrink-0 border border-surface-container-highest/50">
              <ShieldCheck className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h4 className="font-serif text-base md:text-lg font-semibold text-primary">
                Individual Assessment Before Treatment
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant">
                Every treatment plan is discussed beforehand so you understand the proposed steps, expected healing, and full fee estimates before care begins.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+917016292613"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-primary-container transition-colors py-2 px-3.5 rounded-xl hover:bg-surface-container-low border border-surface-container-highest/60"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Questions? +91 70162 92613</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
