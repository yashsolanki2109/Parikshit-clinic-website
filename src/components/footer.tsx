"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Shield,
  ShieldCheck,
  Calendar,
  ArrowRight,
  Award,
  CreditCard,
  Mail,
} from "lucide-react";
import { ParikshitLogo } from "@/components/parikshit-logo";

export function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-16 pb-12 border-t border-surface-container-highest/60">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Pre-footer Banner */}
        <div className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest shadow-sm mb-12 flex flex-col lg:flex-row items-center justify-between gap-6 border border-surface-container-highest/60">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="font-serif text-2xl md:text-3xl text-primary font-medium tracking-tight">
              Healthy Smiles. Confident You.
            </h2>
            <p className="mt-2 text-sm md:text-base text-on-surface-variant">
              Personalized dental, periodontal, and facial aesthetic care with thoughtful individual assessment and patient comfort in Vadodara.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
            <motion.a
              href="#booking-wizard"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-white hover:bg-primary-container font-medium text-sm transition-colors shadow-sm hover:shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Request Appointment</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </motion.a>
            <motion.a
              href="tel:+917016292613"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface-container-high hover:bg-surface-container-highest text-primary font-medium text-sm transition-colors border border-surface-container-highest/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>+91 70162 92613</span>
            </motion.a>
          </div>
        </div>

        {/* 4-Column Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          {/* Column 1: Clinic Branding & Contact */}
          <div className="space-y-4">
            <ParikshitLogo size={42} showText={true} />

            <p className="text-xs text-on-surface-variant leading-relaxed">
              PARIKSHIT CLINIC in Vadodara provides comprehensive dental treatments, advanced periodontal therapy, and facial aesthetic cosmetology led by Dr. Jinal Parmar.
            </p>

            <div className="space-y-2 pt-1 text-xs">
              <div className="flex items-start gap-2 text-on-surface-variant">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                <span>14, Siddharth Elegance Complex, Near SBI Bank, Old Chhani Rd, Vadodara – 390024</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary shrink-0" aria-hidden="true" />
                <a
                  href="tel:+917016292613"
                  className="font-semibold text-primary hover:text-primary-container transition-colors"
                >
                  +91 70162 92613
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary shrink-0" aria-hidden="true" />
                <a
                  href="mailto:parikshitclinic20@gmail.com"
                  className="text-primary hover:underline transition-colors"
                >
                  parikshitclinic20@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Clinic Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold text-primary flex items-center gap-2">
              <Clock className="w-4 h-4 text-secondary" aria-hidden="true" />
              <span>Clinic Timings</span>
            </h3>

            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center justify-between py-1.5 border-b border-surface-container-highest/50">
                <span className="text-on-surface-variant font-medium">Morning Session</span>
                <span className="text-on-surface font-semibold">10:00 AM – 1:00 PM</span>
              </li>
              <li className="flex items-center justify-between py-1.5 border-b border-surface-container-highest/50">
                <span className="text-on-surface-variant font-medium">Evening Session</span>
                <span className="text-on-surface font-semibold">5:00 PM – 8:00 PM</span>
              </li>
              <li className="flex items-center justify-between py-1.5 border-b border-surface-container-highest/50">
                <span className="text-on-surface-variant font-medium">Days</span>
                <span className="text-on-surface font-semibold">Monday – Saturday</span>
              </li>
              <li className="flex items-center justify-between py-1.5">
                <span className="text-on-surface-variant font-medium">Sunday</span>
                <span className="text-secondary font-medium">By Prior Appointment</span>
              </li>
            </ul>

            <div className="p-3 rounded-xl bg-surface-container-lowest border border-surface-container-highest/60 text-[11px] text-on-surface-variant leading-relaxed">
              <p>
                Each appointment is structured as a dedicated 30-minute consultation window for unhurried, personalized care.
              </p>
            </div>
          </div>

          {/* Column 3: Doctor Qualifications */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold text-primary flex items-center gap-2">
              <Award className="w-4 h-4 text-secondary" aria-hidden="true" />
              <span>Doctor Qualifications</span>
            </h3>

            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-surface-container-lowest border border-surface-container-highest/60 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-primary leading-tight">BDS</p>
                  <p className="text-[11px] text-on-surface-variant mt-0.5">
                    Bachelor of Dental Surgery
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-surface-container-lowest border border-surface-container-highest/60 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-primary leading-tight">MDS (Periodontist)</p>
                  <p className="text-[11px] text-on-surface-variant mt-0.5">
                    Master of Dental Surgery in Periodontology
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-surface-container-lowest border border-surface-container-highest/60 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-primary leading-tight">
                    FFAC
                  </p>
                  <p className="text-[11px] text-on-surface-variant mt-0.5">
                    Fellowship in Facial Aesthetics and Cosmetology
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Clinical Departments */}
          <div className="space-y-4">
            <h3 className="font-serif text-base font-semibold text-primary flex items-center gap-2">
              <CreditCard className="w-4 h-4 text-secondary" aria-hidden="true" />
              <span>Two Departments</span>
            </h3>

            <p className="text-xs text-on-surface-variant leading-relaxed">
              Offering comprehensive care across Dental &amp; Periodontal Treatments and Facial Aesthetics &amp; Cosmetology.
            </p>

            <div className="space-y-2 pt-1">
              <a
                href="#services-directory"
                className="group flex items-center justify-between p-2.5 rounded-xl bg-surface-container-lowest border border-surface-container-highest/60 hover:border-secondary/40 text-xs font-medium text-primary hover:text-primary transition-all duration-200"
              >
                <span>Department 1: Dental Treatments</span>
                <ArrowRight className="w-3.5 h-3.5 text-secondary group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </a>

              <a
                href="#services-directory"
                className="group flex items-center justify-between p-2.5 rounded-xl bg-surface-container-lowest border border-surface-container-highest/60 hover:border-secondary/40 text-xs font-medium text-primary hover:text-primary transition-all duration-200"
              >
                <span>Department 2: Facial Aesthetics</span>
                <ArrowRight className="w-3.5 h-3.5 text-secondary group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </a>
            </div>

            <p className="text-[11px] text-on-surface-variant/80 italic">
              Please call or WhatsApp first to confirm clinic availability before your visit.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-surface-container-highest/70 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 text-center md:text-left">
            <span>© {new Date().getFullYear()} PARIKSHIT CLINIC. All rights reserved.</span>
            <span className="hidden sm:inline" aria-hidden="true">•</span>
            <span className="inline-flex items-center gap-1.5 font-medium text-primary">
              <Shield className="w-3.5 h-3.5 text-secondary" aria-hidden="true" />
              Dr. Jinal Parmar | Vadodara, Gujarat
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href="#about-doctor"
              className="hover:text-primary transition-colors focus:outline-none focus-visible:underline"
            >
              About Dr. Parmar
            </a>
            <a
              href="#services-directory"
              className="hover:text-primary transition-colors focus:outline-none focus-visible:underline"
            >
              Services
            </a>
            <a
              href="#faq"
              className="hover:text-primary transition-colors focus:outline-none focus-visible:underline"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
