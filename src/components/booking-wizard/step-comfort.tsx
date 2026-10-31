"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Headphones,
  Sparkles,
  Tv,
  HeartHandshake,
  Brain,
  Wind,
  Check,
  Award,
  GraduationCap,
  Clock,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";
import { COMFORT_AMENITIES, DOCTOR_PROFILE, ComfortAmenity } from "@/types/booking";

const AMENITY_ICONS: Record<string, LucideIcon> = {
  Headphones,
  Sparkles,
  Tv,
  HeartHandshake,
  Brain,
  Wind,
};

interface StepComfortProps {
  selectedAmenities: string[];
  onToggleAmenity: (amenityId: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export function StepComfort({
  selectedAmenities,
  onToggleAmenity,
  onNext,
  onPrev,
}: StepComfortProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center sm:text-left">
        <h3 className="font-serif text-2xl md:text-3xl font-medium text-primary tracking-tight">
          2. Doctor & Personalized Comfort Menu
        </h3>
        <p className="text-sm md:text-base text-on-surface-variant mt-1.5">
          Meet your lead clinician and customize your spa-grade comfort accommodations. All amenities are 100% complimentary.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Doctor Profile Card (5 cols on lg) */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-surface-container-highest/70 p-5 md:p-6 shadow-xs space-y-5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <ShieldCheck className="w-4 h-4 text-primary" aria-hidden="true" />
            <span>Assigned Attending Clinician</span>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden ring-4 ring-primary-fixed shadow-md flex-shrink-0">
              <Image
                src={DOCTOR_PROFILE.photo}
                alt={DOCTOR_PROFILE.name}
                fill
                sizes="(max-width: 640px) 112px, 128px"
                className="object-cover object-top"
                priority
              />
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start lg:justify-center gap-1.5">
                <h4 className="font-serif text-xl font-bold text-primary">
                  {DOCTOR_PROFILE.name}
                </h4>
                <span className="text-xs font-semibold text-secondary-container bg-primary px-2 py-0.5 rounded-full text-[11px]">
                  {DOCTOR_PROFILE.credentials}
                </span>
              </div>
              <p className="text-xs font-medium text-secondary mt-0.5">
                {DOCTOR_PROFILE.title}
              </p>

              <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Next Opening: {DOCTOR_PROFILE.nextOpening}</span>
              </div>
            </div>
          </div>

          {/* Clinician Highlights */}
          <div className="space-y-2.5 pt-2 border-t border-surface-container-highest/60 text-xs text-on-surface-variant">
            <div className="flex items-start gap-2.5">
              <GraduationCap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>{DOCTOR_PROFILE.education}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Award className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>{DOCTOR_PROFILE.fellowship}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>{DOCTOR_PROFILE.experience}</span>
            </div>
          </div>

          {/* Guarantee banner */}
          <div className="p-3 rounded-xl bg-surface-container-low border border-primary/20 text-xs text-primary font-medium flex items-center gap-2">
            <span className="text-base">🤝</span>
            <span>{DOCTOR_PROFILE.guarantee}</span>
          </div>
        </div>

        {/* Right Column: Comfort Menu Amenities (7 cols on lg) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-surface-container-highest/70 p-5 md:p-6 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-surface-container-highest/60">
            <div>
              <h4 className="font-serif text-lg font-semibold text-primary">
                Personalize Your Comfort Menu
              </h4>
              <p className="text-xs text-on-surface-variant mt-0.5">
                Select any or all amenities below. We prepare your chair before arrival.
              </p>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              100% Free
            </span>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COMFORT_AMENITIES.map((amenity: ComfortAmenity) => {
              const isChecked = selectedAmenities.includes(amenity.id);
              const Icon = AMENITY_ICONS[amenity.icon || "Sparkles"] || Sparkles;

              return (
                <div
                  key={amenity.id}
                  role="checkbox"
                  aria-checked={isChecked}
                  tabIndex={0}
                  onClick={() => onToggleAmenity(amenity.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onToggleAmenity(amenity.id);
                    }
                  }}
                  className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isChecked
                      ? "ring-2 ring-primary bg-surface-container-low border-primary/40 shadow-xs"
                      : "bg-surface-container-lowest border-surface-container-highest/70 hover:border-primary/40 hover:bg-surface"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isChecked
                          ? "bg-primary text-white"
                          : "bg-surface-container text-primary"
                      }`}
                    >
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>

                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                        isChecked
                          ? "bg-primary text-white"
                          : "border border-outline-variant/70 bg-white"
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>

                  <div className="mt-2.5">
                    <div className="text-xs font-semibold text-primary leading-snug">
                      {amenity.label}
                    </div>
                    {amenity.description && (
                      <p className="text-[11px] text-on-surface-variant mt-1 leading-normal">
                        {amenity.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-xs text-on-surface-variant bg-surface-container-low p-3 rounded-xl flex items-center justify-between">
            <span>
              Amenities selected:{" "}
              <strong className="text-primary font-semibold">
                {selectedAmenities.length} of {COMFORT_AMENITIES.length}
              </strong>
            </span>
            <span className="text-[11px] text-secondary">
              Added to Dr. Parmar&apos;s treatment setup
            </span>
          </div>
        </div>
      </div>

      {/* Step Actions */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-surface-container-highest/60">
        <button
          type="button"
          onClick={onPrev}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm border border-outline-variant/60 text-on-surface hover:bg-surface-container transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm bg-primary text-white hover:bg-primary-container transition-all shadow-sm hover:shadow-md cursor-pointer"
        >
          <span>Choose Date & Time</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
