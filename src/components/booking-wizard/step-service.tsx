"use client";

import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Smile,
  Activity,
  Zap,
  Flame,
  Clock,
  CheckCircle2,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { SERVICES, ServiceOption } from "@/types/booking";

const ICON_MAP: Record<string, LucideIcon> = {
  Sparkles,
  ShieldCheck,
  Smile,
  Activity,
  Zap,
  Flame,
};

interface StepServiceProps {
  selectedService: string;
  onSelectService: (serviceId: string) => void;
  onNext: () => void;
}

export function StepService({
  selectedService,
  onSelectService,
  onNext,
}: StepServiceProps) {
  const currentService = SERVICES.find((s) => s.id === selectedService);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center sm:text-left">
        <h3 className="font-serif text-2xl md:text-3xl font-medium text-primary tracking-tight">
          1. Choose Your Dental or Aesthetic Visit
        </h3>
        <p className="text-sm md:text-base text-on-surface-variant mt-1.5">
          Select from our dental, periodontal, or facial aesthetic services. Transparent care, no hidden fees.
        </p>
      </div>

      {/* Services Grid */}
      <div
        role="radiogroup"
        aria-label="Dental Services"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
      >
        {SERVICES.map((service: ServiceOption) => {
          const isSelected = selectedService === service.id;
          const Icon = ICON_MAP[service.icon] || Sparkles;

          return (
            <div
              key={service.id}
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onClick={() => onSelectService(service.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectService(service.id);
                }
              }}
              className={`group relative p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                isSelected
                  ? "ring-2 ring-primary bg-surface-container-low border-primary/40 shadow-sm"
                  : "bg-white border-surface-container-highest/70 hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5"
              }`}
            >
              <div>
                {/* Top header row inside card */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-primary text-white"
                        : "bg-surface-container text-primary group-hover:bg-primary-fixed"
                    }`}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider text-[10px] ${
                        service.badgeColor || "bg-primary-container text-white"
                      }`}
                    >
                      {service.badge}
                    </span>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors ${
                        isSelected
                          ? "text-primary bg-white shadow-xs"
                          : "border border-outline-variant/60 text-transparent"
                      }`}
                      aria-hidden="true"
                    >
                      <CheckCircle2 className="w-4 h-4 fill-primary text-white" />
                    </div>
                  </div>
                </div>

                {/* Title & description */}
                <h4 className="font-serif text-lg font-semibold text-primary group-hover:text-primary-container transition-colors">
                  {service.title}
                </h4>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom details */}
              <div className="mt-5 pt-4 border-t border-surface-container-highest/60 flex items-center justify-between text-xs font-medium text-on-surface-variant">
                <div className="flex items-center gap-1.5 text-on-surface-variant">
                  <Clock className="w-3.5 h-3.5 text-secondary" aria-hidden="true" />
                  <span>{service.duration}</span>
                </div>
                <div className="font-semibold text-primary px-2.5 py-1 rounded-lg bg-surface-container">
                  {service.price}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Step Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-surface-container-highest/60">
        <div className="text-xs text-on-surface-variant text-center sm:text-left">
          {currentService ? (
            <span>
              Selected: <strong className="text-primary">{currentService.title}</strong> ({currentService.duration})
            </span>
          ) : (
            <span>Please select a treatment to proceed</span>
          )}
        </div>

        <button
          type="button"
          onClick={onNext}
          disabled={!selectedService}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm bg-primary text-white hover:bg-primary-container transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <span>Continue to Doctor & Comfort Options</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
