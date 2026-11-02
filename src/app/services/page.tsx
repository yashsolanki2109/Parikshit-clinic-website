import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ALL_SERVICES } from "@/data/services";
import { ArrowRight, ChevronRight, Stethoscope, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Clinical Services Directory | PARIKSHIT CLINIC Vadodara",
  description:
    "Comprehensive directory of 35 specialized dental, periodontal, and facial aesthetic treatments by Dr. Jinal Parmar (BDS, MDS, FFAC) in Vadodara.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Clinical Services Directory | PARIKSHIT CLINIC Vadodara",
    description:
      "Explore specialist dental, periodontics, and facial aesthetics care by Dr. Jinal Parmar (BDS, MDS, FFAC) at PARIKSHIT CLINIC, Vadodara.",
    url: "https://parikshit.space/services",
    siteName: "PARIKSHIT CLINIC",
    images: [
      {
        url: "/parikshit-operatory.jpg",
        width: 1200,
        height: 630,
        alt: "PARIKSHIT CLINIC clinical treatments directory",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ServicesPage() {
  const dentalServices = ALL_SERVICES.filter((s) => s.deptId === "dental");
  const aestheticServices = ALL_SERVICES.filter((s) => s.deptId === "aesthetics");

  // Group dental by category
  const dentalCategories = Array.from(new Set(dentalServices.map((s) => s.category)));

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <div className="bg-surface-container-low border-b border-surface-container-highest/60 py-4">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-on-surface-variant">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-on-surface-variant/60" />
              <span className="text-primary font-medium">Services Directory</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-14 md:py-20 bg-gradient-to-b from-surface-container-low/50 to-surface">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high border border-surface-container-highest text-secondary text-xs font-semibold uppercase tracking-wider mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>Full Clinical Scope</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-primary tracking-tight mb-5">
              Specialized Dental &amp; Facial Aesthetic Care
            </h1>
            <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed mb-8">
              Explore 35 clinical procedures directed by <strong>Dr. Jinal Parmar (BDS, MDS Periodontist, FFAC)</strong> at PARIKSHIT CLINIC, Vadodara. Every treatment is backed by individualized diagnosis and strict sterilization.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-secondary font-medium">
              <span className="flex items-center gap-1.5 bg-surface-container px-3 py-1.5 rounded-full border border-surface-container-highest/70">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Specialist Periodontics &amp; Surgery
              </span>
              <span className="flex items-center gap-1.5 bg-surface-container px-3 py-1.5 rounded-full border border-surface-container-highest/70">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Fellowship Facial Cosmetology
              </span>
              <span className="flex items-center gap-1.5 bg-surface-container px-3 py-1.5 rounded-full border border-surface-container-highest/70">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Old Chhani Road, Vadodara
              </span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
            {/* Department 1: Dental Treatments */}
            <div>
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-surface-container-highest">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-secondary">Department One</span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-primary font-normal">Dental &amp; Periodontal Treatments</h2>
                </div>
              </div>

              <div className="space-y-10">
                {dentalCategories.map((category) => {
                  const servicesInCat = dentalServices.filter((s) => s.category === category);
                  return (
                    <div key={category}>
                      <h3 className="text-base sm:text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        {category}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {servicesInCat.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="group p-6 rounded-2xl bg-surface-container-lowest border border-surface-container-highest/70 hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between"
                          >
                            <div>
                              <span className="text-[11px] font-medium uppercase tracking-wider text-secondary mb-2 block">
                                {service.category}
                              </span>
                              <h4 className="font-serif text-lg font-normal text-primary group-hover:text-primary-container transition-colors mb-2">
                                {service.title}
                              </h4>
                              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed line-clamp-2 mb-4">
                                {service.shortDescription}
                              </p>
                            </div>
                            <div className="pt-3 border-t border-surface-container-highest/50 flex items-center justify-between text-xs font-semibold text-primary group-hover:text-primary-container">
                              <span>Read procedure guide</span>
                              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Department 2: Facial Aesthetics & Cosmetology */}
            <div>
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-surface-container-highest">
                <div className="w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-secondary">Department Two</span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-primary font-normal">Facial Aesthetics &amp; Cosmetology Treatments</h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {aestheticServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group p-6 rounded-2xl bg-surface-container-lowest border border-surface-container-highest/70 hover:border-secondary/40 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[11px] font-medium uppercase tracking-wider text-secondary mb-2 block">
                        Facial Aesthetics
                      </span>
                      <h4 className="font-serif text-lg font-normal text-primary group-hover:text-secondary transition-colors mb-2">
                        {service.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed line-clamp-2 mb-4">
                        {service.shortDescription}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-surface-container-highest/50 flex items-center justify-between text-xs font-semibold text-secondary group-hover:translate-x-0.5">
                      <span>Read treatment guide</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
