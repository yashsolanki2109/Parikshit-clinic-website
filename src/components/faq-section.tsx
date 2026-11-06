"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  MapPin,
  Car,
  Phone,
  ShieldAlert,
  Clock,
  ArrowRight,
  ExternalLink,
  Mail,
} from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "booking-process",
    question: "How do I book an appointment?",
    answer:
      "Choose your preferred date and 30-minute time slot using our online booking form or contact the clinic via phone or WhatsApp. Our team will contact you promptly to confirm clinic availability.",
  },
  {
    id: "treatment-suitability",
    question: "How do I know which treatment is suitable for me?",
    answer:
      "Suitability depends on an individual clinical assessment. Dr. Jinal Parmar will examine your mouth or skin, review your history, and explain the potential benefits, risks, alternatives, and expected recovery before any treatment begins.",
  },
  {
    id: "dual-departments",
    question: "Can I ask about both dental and facial aesthetic services?",
    answer:
      "Yes. PARIKSHIT CLINIC integrates both dental/periodontal care and facial aesthetics under one roof. You can choose your department in the booking form or consult with Dr. Parmar regarding combined care.",
  },
  {
    id: "pediatric-care",
    question: "Do you provide dental check-ups for children?",
    answer:
      "Yes. Pediatric dental assessments and gentle deciduous teeth treatments (including pulpectomy and preventive care) are part of our services. Please call ahead to confirm appointment availability and preparation for young patients.",
  },
  {
    id: "facial-consultation",
    question: "What happens during a facial aesthetics consultation?",
    answer:
      "You will discuss your aesthetic goals and relevant skin or health history. Dr. Parmar (FFAC Fellow) will evaluate your skin type, explain suitable options (such as HydraFacial, chemical peels, plasma tightening, or PRP), and outline aftercare before you make a decision.",
  },
  {
    id: "urgent-concerns",
    question: "What should I do if I have an urgent dental concern?",
    answer:
      "Call or WhatsApp the clinic immediately at +91 70162 92613 or +91 98796 10179 to describe your symptoms and check current availability. For severe traumatic emergencies, seek urgent local hospital care.",
  },
];

export function FAQSection() {
  // Default open to first FAQ item (index 0)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions & Clinic Visit"
      className="w-full bg-surface-container-low py-16 md:py-24 scroll-mt-20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* Left Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high border border-surface-container-highest text-secondary text-xs font-semibold uppercase tracking-wider shadow-xs mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                <span>Patient Information</span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl text-primary font-normal tracking-tight mb-4">
                Frequently Asked Questions
              </h2>

              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Helpful information before your visit regarding clinical consultations, appointment scheduling, treatment suitability, and emergency care.
              </p>
            </div>

            {/* Accordion Items List */}
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;
                const buttonId = `faq-btn-${item.id}`;
                const contentId = `faq-panel-${item.id}`;

                return (
                  <div
                    key={item.id}
                    className={`rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "bg-surface-container-lowest border-primary/30 shadow-sm"
                        : "bg-surface-container-lowest/90 border-surface-container-highest/80 hover:border-primary/20"
                    }`}
                  >
                    <button
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between text-left p-5 sm:p-6 gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl cursor-pointer"
                    >
                      <span className="font-serif text-base sm:text-lg font-medium text-primary leading-snug">
                        {item.question}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                        className="shrink-0 w-8 h-8 rounded-full bg-surface-container-low flex items-center justify-center text-primary"
                        aria-hidden="true"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={contentId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-on-surface-variant leading-relaxed border-t border-surface-container-high/60 mt-1">
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Clinic Visit Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-md flex flex-col justify-between h-full border border-surface-container-highest/60">
              <div>
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-secondary text-xs font-semibold uppercase tracking-wider mb-3 border border-surface-container-highest/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>Vadodara Clinic</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl text-primary font-normal leading-tight mb-6">
                  PARIKSHIT CLINIC
                </h3>

                {/* 4 Details Items */}
                <div className="space-y-4 mb-6">
                  {/* 1. Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-surface-container-low text-primary flex items-center justify-center shrink-0 border border-surface-container-highest/60">
                      <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary">
                        Clinic Address
                      </h4>
                      <p className="text-sm font-medium text-on-surface mt-0.5">
                        14, Siddharth Elegance, Navayard Rd, near SBI Bank, Navi Ashapuri, Ram Wadi
                      </p>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Vadodara – 390024, Gujarat, India
                      </p>
                    </div>
                  </div>

                  {/* 2. Phone / WhatsApp */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-surface-container-low text-primary flex items-center justify-center shrink-0 border border-surface-container-highest/60">
                      <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary">
                        Phone &amp; WhatsApp
                      </h4>
                      <div className="flex flex-col mt-0.5">
                        <a
                          href="tel:+917016292613"
                          className="text-sm font-semibold text-primary hover:text-primary-container transition-colors"
                        >
                          +91 70162 92613
                        </a>
                        <a
                          href="tel:+919879610179"
                          className="text-xs text-on-surface-variant hover:text-primary transition-colors"
                        >
                          +91 98796 10179
                        </a>
                      </div>
                      <p className="text-xs text-secondary mt-0.5">
                        Call or WhatsApp to confirm availability
                      </p>
                    </div>
                  </div>

                  {/* 3. Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-surface-container-low text-primary flex items-center justify-center shrink-0 border border-surface-container-highest/60">
                      <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary">
                        Email Contact
                      </h4>
                      <a
                        href="mailto:parikshitclinic20@gmail.com"
                        className="text-sm font-semibold text-primary hover:text-primary-container transition-colors inline-block mt-0.5"
                      >
                        parikshitclinic20@gmail.com
                      </a>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        General inquiries &amp; appointment requests
                      </p>
                    </div>
                  </div>

                  {/* 4. Urgent care note */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-surface-container-low text-primary flex items-center justify-center shrink-0 border border-surface-container-highest/60">
                      <ShieldAlert className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-secondary">
                        Urgent Dental Concerns
                      </h4>
                      <p className="text-sm font-semibold text-primary mt-0.5">
                        Prompt Symptom Evaluation
                      </p>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Please call beforehand to check current clinic availability
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Visual Container */}
                <div className="relative rounded-xl overflow-hidden bg-primary/5 border border-primary/15 p-5 mb-2">
                  <div className="relative z-10 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      {/* Pulsing Pin Icon */}
                      <div className="relative mt-1">
                        <span className="relative flex h-3.5 w-3.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-primary" />
                        </span>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-serif font-semibold text-primary text-sm sm:text-base">
                            Siddharth Elegance
                          </span>
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-primary-fixed text-primary">
                            Shop 14
                          </span>
                        </div>
                        <p className="text-xs text-on-surface-variant mt-0.5">
                          Navayard Rd, near SBI Bank, Navi Ashapuri, Ram Wadi
                        </p>
                        <p className="text-[11px] text-secondary mt-1 font-medium">
                          Vadodara – 390024, Gujarat
                        </p>
                      </div>
                    </div>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=14%2C+Siddharth+Elegance%2C+Navayard+Rd%2C+near+SBI+Bank%2C+Navi+Ashapuri%2C+Ram+Wadi%2C+Vadodara%2C+Gujarat+390024"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Parikshit Clinic location in Google Maps"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary-container bg-surface-container-lowest/90 px-2.5 py-1.5 rounded-lg border border-surface-container-highest shadow-xs shrink-0 transition-colors"
                    >
                      <span>Map</span>
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Clinic Visit Card Footer */}
              <div className="pt-6 mt-6 border-t border-surface-container-highest/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-on-surface-variant">
                  <Clock className="w-4 h-4 text-secondary shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="text-on-surface font-semibold">Hours:</strong> 10am–1pm &bull; 5pm–8pm
                  </span>
                </div>
                <a
                  href="#booking-wizard"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary text-white text-xs sm:text-sm font-semibold hover:bg-primary-container transition-all shadow-xs shrink-0 group"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
