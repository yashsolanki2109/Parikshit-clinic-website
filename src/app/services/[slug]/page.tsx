import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ALL_SERVICES, getServiceBySlug, getRelatedServices } from "@/data/services";
import {
  ChevronRight,
  Calendar,
  Phone,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Stethoscope,
  Sparkles,
  ArrowRight,
  HelpCircle,
  ExternalLink,
  BookOpen,
} from "lucide-react";

export function generateStaticParams() {
  return ALL_SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Procedure Not Found | PARIKSHIT CLINIC",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://parikshit.space/services/${service.slug}`,
      siteName: "PARIKSHIT CLINIC",
      images: [
        {
          url: "/parikshit-operatory.jpg",
          width: 1200,
          height: 630,
          alt: `${service.title} at PARIKSHIT CLINIC Vadodara`,
        },
      ],
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["/parikshit-operatory.jpg"],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const related = getRelatedServices(service.slug, 4);
  const categoryAnchor = `/services#${service.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  const procedureType = (() => {
    if (service.deptId === "aesthetics") return "TherapeuticProcedure";
    const cat = service.category;
    if (cat === "Preventive & General Care") return "PhysicalExam";
    if (cat === "Endodontic & Pulp Therapy") return "TherapeuticProcedure";
    if (cat === "Specialized Dental Care") return "TherapeuticProcedure";
    if (cat === "Plastic & Cosmetic Dentistry") return "TherapeuticProcedure";
    if (cat === "Implantology & Restorative Care") return "SurgicalProcedure";
    return "SurgicalProcedure";
  })();

  // Procedure Structured Data for Google Rich Results & AEO
  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `https://parikshit.space/services/${service.slug}#procedure`,
    name: service.title,
    description: service.shortDescription,
    procedureType,
    bodyLocation: service.deptId === "dental" ? "Mouth" : "Face",
    howPerformed: service.clinicalDetail,
    relevantSpecialty: {
      "@type": "MedicalSpecialty",
      name: service.department,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".aeo-direct-answer", ".clinical-summary-text", "#procedure-faq"],
    },
    provider: {
      "@type": "Dentist",
      "@id": "https://parikshit.space/#clinic",
      name: "PARIKSHIT CLINIC",
      telephone: "+91-70162-92613",
      url: "https://parikshit.space",
    },
    performer: {
      "@type": "Physician",
      "@id": "https://parikshit.space/#doctor",
      name: service.specialist.name,
      jobTitle: service.specialist.title,
      url: "https://parikshit.space/#about-doctor",
      image: "https://parikshit.space/JinalParamar.jpeg",
      telephone: "+91 70162 92613",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "14, Siddharth Elegance, Navayard Rd, near SBI Bank, Navi Ashapuri, Ram Wadi",
        addressLocality: "Vadodara",
        addressRegion: "Gujarat",
        postalCode: "390024",
        addressCountry: "IN",
      },
    },
    locationCreated: {
      "@type": "Dentist",
      "@id": "https://parikshit.space/#clinic",
      name: "PARIKSHIT CLINIC",
      telephone: "+91-70162-92613",
      address: {
        "@type": "PostalAddress",
        streetAddress: "14, Siddharth Elegance, Navayard Rd, near SBI Bank, Navi Ashapuri, Ram Wadi",
        addressLocality: "Vadodara",
        addressRegion: "Gujarat",
        postalCode: "390024",
        addressCountry: "IN",
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://parikshit.space",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://parikshit.space/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.category,
        item: `https://parikshit.space${categoryAnchor}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: service.title,
        item: `https://parikshit.space/services/${service.slug}`,
      },
    ],
  };

  const faqSchema =
    service.faqs && service.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        }
      : null;

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="bg-surface-container-low border-b border-surface-container-highest/60 py-3.5">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-on-surface-variant flex-wrap">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-on-surface-variant/60" />
              <Link href="/services" className="hover:text-primary transition-colors">
                Services
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-on-surface-variant/60" />
              <Link href={categoryAnchor} className="text-secondary font-medium hover:text-primary transition-colors">
                {service.category}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-on-surface-variant/60" />
              <span className="text-primary font-medium truncate max-w-xs">{service.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-surface-container-low/60 to-surface">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high border border-surface-container-highest text-secondary text-xs font-semibold uppercase tracking-wider mb-5">
                {service.deptId === "dental" ? (
                  <Stethoscope className="w-3.5 h-3.5" />
                ) : (
                  <Sparkles className="w-3.5 h-3.5" />
                )}
                <span>{service.department} · {service.category}</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-primary tracking-tight leading-tight mb-5">
                {service.h1}
              </h1>

              <p className="text-lg sm:text-xl text-on-surface-variant leading-relaxed mb-8 max-w-3xl">
                {service.shortDescription}
              </p>

              {/* Clinical Quick Facts */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-surface-container-highest/70 text-xs sm:text-sm mb-8">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-primary">Lead Clinician</strong>
                    <span className="text-on-surface-variant">{service.specialist.name} ({service.specialist.qualifications})</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-primary">Consultation Mode</strong>
                    <span className="text-on-surface-variant">In-Person Assessment (30-min slot)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-primary">Facility Location</strong>
                    <span className="text-on-surface-variant">Old Chhani Road, Vadodara</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/#booking-wizard"
                  className="px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-container transition-all shadow-sm inline-flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Request Clinical Appointment</span>
                </a>

                <a
                  href={`https://wa.me/917016292613?text=Hello%20PARIKSHIT%20CLINIC%2C%20I%20would%20like%20to%20consult%20regarding%20${encodeURIComponent(
                    service.title
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-secondary/40 text-secondary hover:bg-surface-container-low text-sm font-semibold transition-all inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* AEO & GEO Quick Answer & Clinical Specification Section */}
        <section className="bg-surface-container-lowest border-y border-surface-container-highest/70 py-8 md:py-10">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="max-w-4xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2 block">
                At a Glance · Clinical Summary
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-primary mb-4">
                What is {service.title} and What Does It Involve?
              </h2>
              <p className="aeo-direct-answer text-base sm:text-lg text-on-surface leading-relaxed mb-6 font-normal">
                <strong>{service.title} in Vadodara</strong> at PARIKSHIT CLINIC is a specialized procedure directed by Dr. Jinal Parmar (BDS, MDS). It provides {service.shortDescription.toLowerCase().replace(/\.\.\./g, '')} using advanced sterilized instrumentation and personalized clinical protocols. Suitability and recovery are evaluated during your dedicated 30-minute consultation.
              </p>

              {/* Specification Table for Google Table Snippets */}
              <div className="overflow-x-auto rounded-2xl border border-surface-container-highest/80 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-surface-container text-primary font-semibold text-[11px] uppercase tracking-wider border-b border-surface-container-highest">
                    <tr>
                      <th scope="col" className="px-4 py-3">Clinical Treatment</th>
                      <th scope="col" className="px-4 py-3">Department</th>
                      <th scope="col" className="px-4 py-3">Lead Specialist</th>
                      <th scope="col" className="px-4 py-3">Session Format</th>
                      <th scope="col" className="px-4 py-3">Clinic Facility</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-highest/60 text-on-surface-variant">
                    <tr className="bg-surface-container-lowest hover:bg-surface-container-low/40 transition-colors">
                      <td className="px-4 py-3 font-medium text-primary">{service.title}</td>
                      <td className="px-4 py-3">{service.department}</td>
                      <td className="px-4 py-3 text-secondary font-medium">{service.specialist.name} ({service.specialist.qualifications})</td>
                      <td className="px-4 py-3">Dedicated 30-min window</td>
                      <td className="px-4 py-3">Navayard Rd, Old Chhani Rd, Vadodara</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Clinical Assessment & Steps */}
        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Left Column: Clinical Description & Process */}
              <div className="lg:col-span-2 space-y-12">
                {/* Clinical Detail Card */}
                <div className="p-8 rounded-3xl bg-surface-container-lowest border border-surface-container-highest/70 shadow-xs">
                  <span className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2 block">
                    Clinical Suitability &amp; Protocol
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-primary mb-4">
                    About this Treatment at PARIKSHIT CLINIC
                  </h2>
                  <p className="clinical-summary-text text-base text-on-surface-variant leading-relaxed mb-6">
                    {service.clinicalDetail}
                  </p>
                  <div className="p-4 rounded-2xl bg-surface-container-low border border-surface-container-highest/80 text-xs sm:text-sm text-on-surface-variant/90 leading-relaxed">
                    <strong>Patient Note:</strong> Treatment eligibility, exact clinical protocols, recovery timelines, and procedural options are determined after an individualized, in-person clinical examination by Dr. Jinal Parmar.
                  </div>
                </div>

                {/* Treatment Pathway */}
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-secondary mb-2 block">
                    Care Protocol
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-primary mb-6">
                    Step-by-Step Treatment Pathway
                  </h3>

                  <ol className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none pl-0">
                    {service.steps.map((st) => (
                      <li
                        key={st.step}
                        className="p-6 rounded-2xl bg-surface-container-lowest border border-surface-container-highest/60 hover:border-primary/30 transition-all"
                      >
                        <span className="text-xs font-bold text-secondary tracking-widest block mb-2">
                          STEP {st.step}
                        </span>
                        <h4 className="font-serif text-lg font-normal text-primary mb-2">
                          {st.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                          {st.desc}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* FAQs */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <HelpCircle className="w-5 h-5 text-secondary" />
                    <h3 className="font-serif text-2xl sm:text-3xl font-normal text-primary">
                      Frequently Asked Questions
                    </h3>
                  </div>

                  <div id="procedure-faq" className="space-y-4">
                    {service.faqs.map((f, i) => (
                      <details
                        key={i}
                        className="p-5 rounded-2xl bg-surface-container-lowest border border-surface-container-highest/70 group"
                      >
                        <summary className="font-medium text-sm sm:text-base text-primary cursor-pointer list-none flex items-center justify-between">
                          <h4 className="font-serif text-base sm:text-lg font-medium text-primary text-left m-0">
                            {f.q}
                          </h4>
                          <span className="text-secondary text-lg group-open:rotate-45 transition-transform shrink-0 ml-3">
                            +
                          </span>
                        </summary>
                        <p className="aeo-faq-answer mt-3 text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-surface-container-highest/50 pt-3">
                          {f.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Sidebar: Doctor Card & Appointment Callout */}
              <div className="space-y-6 lg:sticky lg:top-24">
                {/* Doctor Bio Card */}
                <div className="author-byline p-7 rounded-3xl bg-surface-container-lowest border border-surface-container-highest/70 shadow-xs">
                  <div className="w-12 h-12 rounded-2xl bg-primary-fixed/40 text-primary flex items-center justify-center mb-4">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary">
                    Specialist in Charge
                  </span>
                  <h4 className="font-serif text-xl font-normal text-primary mt-1 mb-1">
                    {service.specialist.name}
                  </h4>
                  <p className="text-xs font-medium text-secondary mb-3">
                    {service.specialist.qualifications}
                  </p>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-5">
                    {service.specialist.bio}
                  </p>
                  <div className="space-y-2 text-xs text-on-surface-variant pt-4 border-t border-surface-container-highest/60">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>BDS · Bachelor of Dental Surgery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>MDS · Master of Dental Surgery in Periodontology</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>FFAC · Fellowship in Facial Aesthetics &amp; Cosmetology</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium pt-1 border-t border-surface-container-highest/40">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>GDC Reg. No. A-20290 (Gujarat Dental Council)</span>
                    </div>
                  </div>
                </div>

                {/* Clinical Reference Standards (GEO Authority Signal) */}
                <div className="p-6 rounded-3xl bg-surface-container-low border border-surface-container-highest/80 shadow-xs space-y-2.5 text-xs text-on-surface-variant leading-relaxed">
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <BookOpen className="w-4 h-4 text-secondary shrink-0" />
                    <span>Clinical Reference Standards</span>
                  </div>
                  <p>
                    Procedures follow diagnostic protocols established by the <cite className="font-medium text-primary">Indian Dental Association (IDA)</cite> and the <cite className="font-medium text-primary">Gujarat Dental Council (GDC)</cite>.
                  </p>
                  <div className="pt-2 border-t border-surface-container-highest/60 space-y-1.5 text-[11px]">
                    <a
                      href="https://www.who.int/news-room/fact-sheets/detail/oral-health"
                      target="_blank"
                      rel="reference external noopener"
                      className="flex items-center gap-1.5 text-secondary hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-3 h-3 shrink-0" />
                      <span>WHO Oral Health Evidence Guidelines</span>
                    </a>
                    <a
                      href="https://www.ncbi.nlm.nih.gov/"
                      target="_blank"
                      rel="reference external noopener"
                      className="flex items-center gap-1.5 text-secondary hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-3 h-3 shrink-0" />
                      <span>National Institutes of Health (NIH) Medical Index</span>
                    </a>
                  </div>
                </div>

                {/* Consultation Hours & Appointment */}
                <div className="p-7 rounded-3xl bg-primary text-white shadow-md space-y-4">
                  <span className="text-xs uppercase tracking-wider text-secondary-fixed font-semibold">
                    Reserve Consultation
                  </span>
                  <h4 className="font-serif text-xl font-normal text-white">
                    Need an In-Person Clinical Evaluation?
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Consultations are conducted in dedicated 30-minute slots to ensure thorough examination and personalized patient guidance.
                  </p>
                  <div className="text-xs text-white/90 space-y-1 py-2 border-y border-white/20">
                    <div><strong>Morning:</strong> 10:00 AM – 1:00 PM</div>
                    <div><strong>Evening:</strong> 5:00 PM – 8:00 PM</div>
                  </div>
                  <a
                    href="/#booking-wizard"
                    className="w-full py-3 px-4 rounded-full bg-white text-primary text-xs font-semibold hover:bg-white/90 transition-all flex items-center justify-center gap-2 text-center"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Your Visit Now</span>
                  </a>
                </div>

                {/* Related Procedures */}
                <div className="p-6 rounded-3xl bg-surface-container-lowest border border-surface-container-highest/70">
                  <h5 className="font-serif text-base font-normal text-primary mb-4">
                    Related Procedures
                  </h5>
                  <div className="space-y-3">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/services/${r.slug}`}
                        className="block group text-xs text-on-surface-variant hover:text-primary transition-colors"
                      >
                        <div className="font-medium text-primary group-hover:text-primary-container flex items-center justify-between">
                          <span>{r.title}</span>
                          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </div>
                        <span className="text-[11px] text-on-surface-variant/70">{r.category}</span>
                      </Link>
                    ))}
                  </div>
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
