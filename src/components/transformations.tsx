import React from "react";
import Image from "next/image";
import { Star, Quote, Sparkles, CheckCircle2 } from "lucide-react";

interface CaseStudy {
  id: string;
  name: string;
  location: string;
  image: string;
  tag: string;
  quote: string;
  procedureHighlight: string;
  ratingText: string;
}

interface Review {
  id: string;
  author: string;
  source: string;
  sourceType: "google" | "verified";
  rating: number;
  treatment: string;
  quote: string;
  date: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "mehul-veneers",
    name: "Mehul P., 38",
    location: "Alkapuri, Vadodara",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_fb_bC7AyY5ry2Q8kLI9K77uFK5iFqe98dzwfvvQp-hMb57Wo7nnefjhIRtIs6GN4wgNzmYwvLp6frUImR4L0d9B7m-CGD4Q87EbBNVkiwywMWjSGZAKXxLJdsXkZDMOrZShQEYOQh2CEWNRfLYuQYqwC_dajvjqYuRefcUbB7WR6jydOwGwxNIB5gTPDuf_NB8jmHOPFNx9tJziYpFazMahko1CWM_qtabKVul_BOF0rzAW8YZTYfg",
    tag: "Smile Makeover & Porcelain Veneers",
    quote:
      "I was conscious of gaps and discoloration in my front teeth for years. Dr. Jinal Parmar took the time to explain the procedure and crafted porcelain veneers that look completely natural. The individual attention made all the difference.",
    procedureHighlight: "Individual Aesthetic Design",
    ratingText: "5.0 ★ Verified",
  },
  {
    id: "kavita-periodontal",
    name: "Kavita S., 45",
    location: "Old Chhani Road, Vadodara",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClyIAjBq_L68ZPUYb91JtEqOs5kWVGjaZhWkAyXtnmgNaKisQCdfrw8902azoCup4S3btYdDnt6hWEMwXzR2Ze6aQl7qIwTuKIK6fot7FfxNqIRlwFavcmYkg6Q4F9iDEhIeUgCnDUbKF25LLqNJEaoLIysb5mLcAVjWl9CLC5tdUHFJlMCvw8TSgJSeHFs-ZUIbovoECjDjxWasTvfZu1ck9MJZ4LtFcMjqr75icEPNbJgGL_YrwrCw",
    tag: "Flap Surgery & Periodontal Therapy",
    quote:
      "Persistent gum bleeding and pocketing were worrying me. Because Dr. Parmar is an MDS in Periodontology, she diagnosed the underlying condition clearly and performed flap surgery with immense gentleness. My gums are healthy again.",
    procedureHighlight: "Specialist Periodontal Care",
    ratingText: "5.0 ★ Verified",
  },
  {
    id: "rahul-aesthetics",
    name: "Rahul D., 32",
    location: "Fatehgunj, Vadodara",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKrNmYTAZAV4cENv0k7w90Bi2zfI4Wr0LvqaccmZnvPtHhLM2TK2rZxw4D1nekSTXcNcpqT9iQi3hFMbaobQIu5ZBTKazRwNzCh1_iHRq5q2EWebC0kkIXr1yX2fxcvlHdEllT6Ue1smILh6xp6Il0imKu6HJa6f9IteM-3C8L0EhdYN9ICYGv681qB-ZHbLncgkJqGU5MwY50mOmDza5dx_3Ai2BpXE24z7eIQOB_vjHcKkZy01HpUw",
    tag: "HydraFacial & Scalp Hair PRP",
    quote:
      "Having both dental and facial aesthetic treatments at the same clinic under a qualified doctor is wonderful. The HydraFacial gave my skin immediate clarity, and the scalp PRP protocol has noticeably supported my hair vitality.",
    procedureHighlight: "FFAC Aesthetic Protocol",
    ratingText: "5.0 ★ Verified",
  },
];

const REVIEWS: Review[] = [
  {
    id: "review-pooja",
    author: "Pooja M.",
    source: "Google Verified Review",
    sourceType: "google",
    rating: 5,
    treatment: "Routine Examination & Preventive Care",
    quote:
      "Visiting PARIKSHIT CLINIC in Vadodara was a wonderful experience. Dr. Jinal Parmar takes her time to explain findings, never rushes, and ensures you feel completely comfortable throughout the visit. Truly modern dentistry delivered with calm and care.",
    date: "Verified Patient • Vadodara",
  },
  {
    id: "review-chirag",
    author: "Chirag V.",
    source: "Clinic Verified Consultation",
    sourceType: "verified",
    rating: 5,
    treatment: "Dental Implant & Restorative Treatment",
    quote:
      "Dr. Parmar explained all options, timelines, and fees upfront before we started the implant process. Zero ambiguity, clinical excellence, and a very hygienic clinic on Old Chhani Road. Highly recommended for anyone seeking specialist dental care.",
    date: "Verified Patient • Vadodara",
  },
];

export function Transformations() {
  return (
    <section
      id="patient-stories"
      aria-label="Patient Transformations and Verified Reviews"
      className="w-full bg-surface-container-low py-16 md:py-24 scroll-mt-20"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high border border-surface-container-highest text-secondary text-xs font-semibold uppercase tracking-wider shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>Real Clinical Results</span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-primary tracking-tight">
              Patient Experiences &amp; Transformations
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-on-surface-variant leading-relaxed">
              Real clinical results achieved through specialist periodontics, restorative implantology, aesthetic smile makeovers, and medical facial cosmetology for patients across Vadodara.
            </p>
          </div>

          {/* Right-Side Rating Pill */}
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-surface-container-lowest border border-surface-container-highest shadow-xs shrink-0 self-start lg:self-auto">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
            </div>
            <div className="h-4 w-px bg-surface-container-highest" />
            <span className="text-xs sm:text-sm font-semibold text-primary">
              5.0 / 5.0 Rating • Verified Vadodara Patients
            </span>
          </div>
        </div>

        {/* 3 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 md:mb-12">
          {CASE_STUDIES.map((caseItem) => (
            <div
              key={caseItem.id}
              className="rounded-2xl bg-surface-container-lowest border border-surface-container-highest/60 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Visual Container */}
                <div className="relative aspect-[16/11] overflow-hidden bg-surface-container">
                  <Image
                    src={caseItem.image}
                    alt={`Smile transformation for ${caseItem.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-30"
                    aria-hidden="true"
                  />
                  {/* Floating Tag */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-primary shadow-xs border border-surface-container-highest/60 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-secondary" aria-hidden="true" />
                    <span>{caseItem.tag}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="font-serif text-lg font-semibold text-primary">
                      {caseItem.name}
                    </h3>
                    <p className="text-xs text-secondary font-medium mt-0.5">
                      {caseItem.location}
                    </p>
                  </div>

                  <div className="relative">
                    <Quote className="w-4 h-4 text-secondary/30 absolute -top-1 -left-1 transform -scale-x-100" aria-hidden="true" />
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed pl-4 italic">
                      &ldquo;{caseItem.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-surface-container-low/50 border-t border-surface-container-highest/60 flex items-center justify-between mt-auto">
                <span className="text-xs font-semibold text-primary">
                  {caseItem.procedureHighlight}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-secondary">
                  <span className="text-amber-500 font-bold">5.0 ★</span>
                  <span>Verified</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 2 Patient Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 md:p-8 rounded-2xl bg-surface-container-lowest border border-surface-container-highest/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Review Header: Stars + Source */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary bg-surface-container px-3 py-1 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                    <span>{review.source}</span>
                  </span>
                </div>

                {/* Review Quote */}
                <div className="relative mb-6">
                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed italic">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Review Author & Metadata */}
              <div className="pt-4 border-t border-surface-container-highest/60 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-base font-semibold text-primary">
                    {review.author}
                  </h4>
                  <p className="text-xs text-secondary font-medium">
                    {review.treatment}
                  </p>
                </div>
                <span className="text-xs text-on-surface-variant/70 font-medium">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Transformations;
