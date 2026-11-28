import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChevronRight, Shield, Lock, FileText, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & Patient Data Protection | PARIKSHIT CLINIC",
  description:
    "Patient medical confidentiality, personal data handling, and privacy standards at PARIKSHIT CLINIC Vadodara in compliance with Indian healthcare guidelines.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | PARIKSHIT CLINIC Vadodara",
    description:
      "Patient confidentiality and digital booking data protection policies at PARIKSHIT CLINIC, Vadodara.",
    url: "https://parikshit.space/privacy-policy",
    siteName: "PARIKSHIT CLINIC",
    locale: "en_IN",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
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
              <span className="text-primary font-medium">Privacy Policy</span>
            </nav>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high border border-surface-container-highest text-secondary text-xs font-semibold uppercase tracking-wider mb-5">
              <Shield className="w-3.5 h-3.5" />
              <span>Patient Trust &amp; Confidentiality</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-primary tracking-tight mb-4">
              Privacy Policy &amp; Patient Records Protection
            </h1>
            <p className="text-sm text-on-surface-variant mb-8">
              Effective Date: November 2026 · PARIKSHIT CLINIC, Vadodara, Gujarat
            </p>

            <div className="space-y-8 text-on-surface-variant text-sm sm:text-base leading-relaxed">
              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container-highest/70">
                <h2 className="font-serif text-xl font-medium text-primary mb-3">
                  1. Clinical Confidentiality Commitment
                </h2>
                <p>
                  At PARIKSHIT CLINIC, patient confidentiality is held to strict medical ethics standards. All diagnostic evaluations, oral intraoral photographs, digital X-rays, medical histories, and clinical records obtained during examinations by Dr. Jinal Parmar are treated as strictly confidential medical information under Gujarat Dental Council and Medical Council of India ethical guidelines.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container-highest/70">
                <h2 className="font-serif text-xl font-medium text-primary mb-3">
                  2. Collection of Patient Contact Information
                </h2>
                <p className="mb-3">
                  When you utilize our online booking wizard, telephone inquiry, or WhatsApp consultation lines (+91 70162 92613 / +91 98796 10179), we collect only necessary administrative details:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                  <li>Full patient name and preferred title</li>
                  <li>Telephone and WhatsApp contact number</li>
                  <li>Preferred appointment date and 30-minute time slot</li>
                  <li>Primary clinical department or procedure requested</li>
                  <li>Any specific dental or aesthetic concern provided voluntarily</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container-highest/70">
                <h2 className="font-serif text-xl font-medium text-primary mb-3">
                  3. Use &amp; Non-Disclosure of Information
                </h2>
                <p className="mb-2">
                  Your personal information is used exclusively for:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm mb-3">
                  <li>Scheduling and confirming your in-person clinic consultation</li>
                  <li>Providing clinical follow-up instructions and post-care advice</li>
                  <li>Issuing receipts and clinical treatment estimates</li>
                </ul>
                <p>
                  <strong>Zero Third-Party Sharing:</strong> PARIKSHIT CLINIC never sells, leases, trades, or commercially distributes patient contact information to advertising networks, third-party marketing brokers, or external entities.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container-highest/70">
                <h2 className="font-serif text-xl font-medium text-primary mb-3">
                  4. Digital Security &amp; Data Safeguards
                </h2>
                <p>
                  Our website utilizes modern HTTPS encryption with strict transport security (HSTS), frame-ancestor protections, and content security restrictions. Consultation submissions are transmitted securely without public logging.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container-highest/70">
                <h2 className="font-serif text-xl font-medium text-primary mb-3">
                  5. Contact the Clinic Regarding Privacy
                </h2>
                <p className="mb-3">
                  If you have inquiries regarding your clinical records, desire record duplication for referral, or wish to update your contact details, please reach out to us:
                </p>
                <div className="space-y-1.5 text-xs sm:text-sm text-primary font-medium">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-secondary" />
                    <span>+91 70162 92613 / +91 98796 10179</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-secondary" />
                    <span>parikshitclinic20@gmail.com</span>
                  </div>
                  <p className="text-on-surface-variant font-normal pt-1">
                    PARIKSHIT CLINIC · 14, Siddharth Elegance, Navayard Rd, near SBI Bank, Vadodara – 390024, Gujarat, India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
