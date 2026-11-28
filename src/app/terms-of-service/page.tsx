import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChevronRight, FileCheck, AlertTriangle, Clock, CreditCard, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service & Clinical Policies | PARIKSHIT CLINIC",
  description:
    "Patient guidelines, appointment policies, clinical assessment terms, and medical disclaimers at PARIKSHIT CLINIC Vadodara.",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | PARIKSHIT CLINIC Vadodara",
    description:
      "Consultation policies, booking windows, and clinical guidelines at PARIKSHIT CLINIC, Vadodara.",
    url: "https://parikshit.space/terms-of-service",
    siteName: "PARIKSHIT CLINIC",
    locale: "en_IN",
    type: "website",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <div className="bg-surface-container-low border-b border-surface-container-highest/60 py-3.5">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-on-surface-variant">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-on-surface-variant/60" />
              <span className="text-primary font-medium">Terms of Service</span>
            </nav>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high border border-surface-container-highest text-secondary text-xs font-semibold uppercase tracking-wider mb-5">
              <FileCheck className="w-3.5 h-3.5" />
              <span>Practice Guidelines &amp; Policies</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-primary tracking-tight mb-4">
              Terms of Service &amp; Clinical Policies
            </h1>
            <p className="text-sm text-on-surface-variant mb-8">
              Effective Date: November 2026 · PARIKSHIT CLINIC, Vadodara, Gujarat
            </p>

            <div className="space-y-8 text-on-surface-variant text-sm sm:text-base leading-relaxed">
              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container-highest/70">
                <h2 className="font-serif text-xl font-medium text-primary mb-3">
                  1. Medical &amp; Clinical Information Disclaimer
                </h2>
                <p className="mb-2">
                  The clinical descriptions, procedure overviews, FAQs, and educational articles provided on this website (https://parikshit.space) are published solely for general patient awareness and informational guidance.
                </p>
                <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container-highest/70 text-xs sm:text-sm text-primary font-medium">
                  <strong>Important Notice:</strong> Content on this website does NOT constitute formal dental, medical, or cosmetic diagnosis. Treatment eligibility, exact clinical protocols, risks, and prognosis are determined exclusively following a comprehensive in-person examination by Dr. Jinal Parmar (BDS, MDS, FFAC) at PARIKSHIT CLINIC.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container-highest/70">
                <h2 className="font-serif text-xl font-medium text-primary mb-3">
                  2. Consultation Structure &amp; 30-Minute Windows
                </h2>
                <p>
                  To deliver unhurried, patient-centered care and adhere to strict operatory disinfection standards, appointments are structured in dedicated 30-minute consultation windows. Patients are kindly requested to arrive 5–10 minutes prior to their scheduled slot.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container-highest/70">
                <h2 className="font-serif text-xl font-medium text-primary mb-3">
                  3. Online Appointment Requests &amp; Confirmation
                </h2>
                <p>
                  Submission of an appointment request via the website booking wizard does not constitute a guaranteed clinical slot until confirmed by our front-desk team via telephone call or WhatsApp message. In the event of emergency procedure delays, we will notify scheduled patients promptly.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container-highest/70">
                <h2 className="font-serif text-xl font-medium text-primary mb-3">
                  4. Transparent Estimates &amp; Financial Policies
                </h2>
                <p className="mb-2">
                  Prior to commencing any multi-step procedure (such as periodontal flap surgery, dental implants, or aesthetic smile makeovers), patients receive an itemized, written treatment plan outlining the proposed stages, expected recovery, and cost estimates.
                </p>
                <p>
                  We accept digital UPI (GPay, PhonePe, Paytm), debit and credit cards, net banking, and cash. Official receipts suitable for dental insurance or mediclaim documentation are provided upon request.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container-highest/70">
                <h2 className="font-serif text-xl font-medium text-primary mb-3">
                  5. Clinic Jurisdiction &amp; Regulatory Council
                </h2>
                <p>
                  PARIKSHIT CLINIC operates under the dental medical ethics framework of the Gujarat Dental Council and Indian Dental Association. Any legal disputes arising from clinic operations are subject to the exclusive jurisdiction of the civil courts of Vadodara, Gujarat, India.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
