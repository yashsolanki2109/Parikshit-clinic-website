"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import { Check, Sparkles, Calendar, UserCheck, ShieldCheck, HeartHandshake } from "lucide-react";
import { BookingState, SERVICES } from "@/types/booking";
import { supabase } from "@/lib/supabase";
import { StepService } from "./step-service";
import { StepComfort } from "./step-comfort";
import { StepDateTime } from "./step-datetime";
import { StepConfirm } from "./step-confirm";

const spaCalm = [0.4, 0, 0.2, 1] as const;

const INITIAL_STATE: BookingState = {
  step: 1,
  selectedService: "preventive-care",
  selectedAmenities: ["bose-headphones", "lavender-towel"],
  selectedDate: "Tuesday, Oct 21, 2026",
  selectedTime: "10:30 AM",
  formData: {
    patientStatus: "new",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    city: "Vadodara",
    insurance: "",
    smsOptIn: true,
  },
  isSubmitted: false,
  confirmationCode: "",
};

const STEPS = [
  { id: 1, title: "Service", subtitle: "Select Treatment", icon: Sparkles },
  { id: 2, title: "Comfort & Doctor", subtitle: "Personalize Spa Care", icon: HeartHandshake },
  { id: 3, title: "Date & Time", subtitle: "Choose Window", icon: Calendar },
  { id: 4, title: "Patient Details", subtitle: "Confirm & Book", icon: UserCheck },
];

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 36 : -36,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.32,
      ease: spaCalm,
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -36 : 36,
    opacity: 0,
    transition: {
      duration: 0.22,
      ease: spaCalm,
    },
  }),
};

export function BookingWizard() {
  const [booking, setBooking] = useState<BookingState>(INITIAL_STATE);
  const [direction, setDirection] = useState<number>(1);
  const [visitedSteps, setVisitedSteps] = useState<number[]>([1]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goToStep = (targetStep: number) => {
    if (targetStep < 1 || targetStep > 4) return;
    setDirection(targetStep > booking.step ? 1 : -1);
    setBooking((prev) => ({ ...prev, step: targetStep }));
    setVisitedSteps((prev) => (prev.includes(targetStep) ? prev : [...prev, targetStep]));
  };

  const handleNext = () => {
    if (booking.step < 4) {
      goToStep(booking.step + 1);
    }
  };

  const handlePrev = () => {
    if (booking.step > 1) {
      goToStep(booking.step - 1);
    }
  };

  const handleSelectService = (serviceId: string) => {
    setBooking((prev) => ({ ...prev, selectedService: serviceId }));
  };

  const handleToggleAmenity = (amenityId: string) => {
    setBooking((prev) => {
      const exists = prev.selectedAmenities.includes(amenityId);
      const newAmenities = exists
        ? prev.selectedAmenities.filter((id) => id !== amenityId)
        : [...prev.selectedAmenities, amenityId];
      return { ...prev, selectedAmenities: newAmenities };
    });
  };

  const handleSelectDate = (fullDate: string) => {
    setBooking((prev) => ({ ...prev, selectedDate: fullDate }));
  };

  const handleSelectTime = (time: string) => {
    setBooking((prev) => ({ ...prev, selectedTime: time }));
  };

  const handleUpdateFormData = (updates: Partial<BookingState["formData"]>) => {
    setBooking((prev) => ({
      ...prev,
      formData: { ...prev.formData, ...updates },
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const currentService = SERVICES.find((s) => s.id === booking.selectedService) || SERVICES[0];
    const patientFullName = `${booking.formData.firstName} ${booking.formData.lastName}`.trim();

    try {
      const { error } = await supabase.from("appointments").insert({
        patient_name: patientFullName,
        phone: booking.formData.phone.trim(),
        age: booking.formData.age ? Number(booking.formData.age) : 30,
        city: booking.formData.city?.trim() || "Vadodara",
        department: currentService.department,
        treatment: currentService.title,
        appointment_date: booking.selectedDate,
        appointment_time: booking.selectedTime,
        status: "pending",
      });

      if (error) {
        console.warn("Supabase appointment registration note:", error.message);
      }
    } catch (err) {
      console.warn("Supabase insert exception:", err);
    } finally {
      setIsSubmitting(false);
      const code = `PARIKSHIT-${Math.floor(1000 + Math.random() * 9000)}`;
      setBooking((prev) => ({
        ...prev,
        isSubmitted: true,
        confirmationCode: code,
      }));
    }
  };

  const handleReset = () => {
    setBooking({
      ...INITIAL_STATE,
      confirmationCode: "",
      isSubmitted: false,
    });
    setVisitedSteps([1]);
    setDirection(-1);
  };

  return (
    <section
      id="booking-wizard"
      aria-label="Appointment Booking Wizard"
      className="py-16 md:py-24 bg-surface scroll-mt-20"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high border border-surface-container-highest text-primary text-xs font-semibold uppercase tracking-wider shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Digital Appointment Request</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary tracking-tight">
            Book an Appointment
          </h2>

          <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Request a preferred date and 30-minute time slot with Dr. Jinal Parmar at PARIKSHIT CLINIC. Our team will contact you to confirm clinic availability.
          </p>
        </div>

        {/* Wizard Main Card */}
        <div className="bg-white rounded-3xl border border-surface-container-highest/80 shadow-md overflow-hidden">
          {/* Step Progress Tabs Bar */}
          {!booking.isSubmitted && (
            <div className="border-b border-surface-container-highest/70 bg-surface-container-lowest/80 px-4 py-3 sm:px-6">
              <nav aria-label="Booking steps" className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {STEPS.map((s) => {
                  const isActive = booking.step === s.id;
                  const isVisited = visitedSteps.includes(s.id);
                  const isCompleted = booking.step > s.id;
                  const StepIcon = s.icon;

                  return (
                    <button
                      key={s.id}
                      type="button"
                      disabled={!isVisited}
                      onClick={() => isVisited && goToStep(s.id)}
                      className={`group relative text-left p-3 rounded-2xl transition-all duration-200 border flex items-center gap-3 ${
                        isActive
                          ? "bg-surface-container-low border-primary ring-1 ring-primary shadow-xs"
                          : isCompleted
                          ? "bg-white border-surface-container-highest hover:border-primary/40 cursor-pointer"
                          : isVisited
                          ? "bg-white border-surface-container-highest hover:border-primary/40 cursor-pointer"
                          : "bg-surface-container-low/40 border-transparent opacity-60 cursor-not-allowed"
                      }`}
                    >
                      {/* Step Indicator / Icon */}
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold transition-colors flex-shrink-0 ${
                          isCompleted
                            ? "bg-emerald-600 text-white"
                            : isActive
                            ? "bg-primary text-white"
                            : "bg-surface-container text-on-surface-variant"
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="w-4 h-4 stroke-[3]" />
                        ) : (
                          <StepIcon className="w-4 h-4" />
                        )}
                      </div>

                      {/* Text */}
                      <div className="min-w-0">
                        <span
                          className={`block text-[10px] font-bold uppercase tracking-wider ${
                            isActive
                              ? "text-primary"
                              : isCompleted
                              ? "text-emerald-700"
                              : "text-on-surface-variant"
                          }`}
                        >
                          Step {s.id}
                        </span>
                        <span
                          className={`block text-xs font-semibold truncate ${
                            isActive ? "text-primary" : "text-on-surface"
                          }`}
                        >
                          {s.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </nav>
            </div>
          )}

          {/* Step Content Container with Directional Slide */}
          <div className="p-5 sm:p-8 md:p-10 relative overflow-hidden min-h-[500px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={booking.isSubmitted ? "confirmation" : booking.step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                {booking.step === 1 && (
                  <StepService
                    selectedService={booking.selectedService}
                    onSelectService={handleSelectService}
                    onNext={handleNext}
                  />
                )}

                {booking.step === 2 && (
                  <StepComfort
                    selectedAmenities={booking.selectedAmenities}
                    onToggleAmenity={handleToggleAmenity}
                    onNext={handleNext}
                    onPrev={handlePrev}
                  />
                )}

                {booking.step === 3 && (
                  <StepDateTime
                    selectedDate={booking.selectedDate}
                    selectedTime={booking.selectedTime}
                    onSelectDate={handleSelectDate}
                    onSelectTime={handleSelectTime}
                    onNext={handleNext}
                    onPrev={handlePrev}
                  />
                )}

                {booking.step === 4 && (
                  <StepConfirm
                    formData={booking.formData}
                    selectedService={booking.selectedService}
                    selectedAmenities={booking.selectedAmenities}
                    selectedDate={booking.selectedDate}
                    selectedTime={booking.selectedTime}
                    isSubmitted={booking.isSubmitted}
                    confirmationCode={booking.confirmationCode}
                    isSubmitting={isSubmitting}
                    onUpdateFormData={handleUpdateFormData}
                    onSubmit={handleSubmit}
                    onReset={handleReset}
                    onPrev={handlePrev}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Security & Reassurance Footer Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-on-surface-variant text-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Thoughtful Individual Assessment</span>
          </div>
          <span className="hidden sm:inline text-outline-variant">•</span>
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>MDS Periodontist &amp; FFAC Facial Aesthetics</span>
          </div>
          <span className="hidden sm:inline text-outline-variant">•</span>
          <div className="flex items-center gap-2">
            <span className="text-secondary font-bold">📍</span>
            <span>14, Siddharth Elegance, Navayard Rd, Vadodara</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingWizard;
