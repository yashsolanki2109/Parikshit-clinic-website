"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Lock,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CalendarPlus,
  FileCheck,
  RotateCcw,
  Sparkles,
  Phone,
} from "lucide-react";
import { BookingFormData, SERVICES, COMFORT_AMENITIES, DOCTOR_PROFILE, INSURANCE_OPTIONS } from "@/types/booking";

interface StepConfirmProps {
  formData: BookingFormData;
  selectedService: string;
  selectedAmenities: string[];
  selectedDate: string;
  selectedTime: string;
  isSubmitted: boolean;
  confirmationCode: string;
  isSubmitting?: boolean;
  onUpdateFormData: (updates: Partial<BookingFormData>) => void;
  onSubmit: () => void;
  onReset: () => void;
  onPrev: () => void;
}

export function StepConfirm({
  formData,
  selectedService,
  selectedAmenities,
  selectedDate,
  selectedTime,
  isSubmitted,
  confirmationCode,
  isSubmitting = false,
  onUpdateFormData,
  onSubmit,
  onReset,
  onPrev,
}: StepConfirmProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const service = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];
  const chosenAmenities = COMFORT_AMENITIES.filter((a) =>
    selectedAmenities.includes(a.id)
  );

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile phone is required";
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit();
    }
  };

  const handleCopyCode = () => {
    if (confirmationCode) {
      navigator.clipboard?.writeText(confirmationCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadCalendar = () => {
    // Generate simple .ics calendar file
    const icsData = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//PARIKSHIT CLINIC//Appointment//EN",
      "BEGIN:VEVENT",
      `SUMMARY:PARIKSHIT CLINIC: ${service.title} with Dr. Jinal Parmar`,
      `DESCRIPTION:Appointment request at PARIKSHIT CLINIC. Department: ${service.department}. Confirmation Code: ${confirmationCode}`,
      "LOCATION:14, Ground Floor, Siddharth Elegance Complex, Old Chhani Road, Vadodara - 390024",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `parikshit-clinic-appointment-${confirmationCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // If submitted, show the confirmation screen
  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl border border-surface-container-highest/80 p-6 md:p-10 shadow-sm space-y-8 animate-in fade-in-50 duration-300">
        {/* Success Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border-4 border-emerald-100 flex items-center justify-center text-emerald-600 shadow-xs">
            <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-surface-container text-primary text-xs font-bold uppercase tracking-wider">
            <span>Request Reference:</span>
            <span className="font-mono text-sm text-primary font-extrabold">
              {confirmationCode}
            </span>
          </div>

          <h3 className="font-serif text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Appointment Request Sent!
          </h3>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
            Thank you, <strong className="text-primary">{formData.firstName}</strong>. Your request has been registered for <strong className="text-primary">Dr. Jinal Parmar</strong> at PARIKSHIT CLINIC. The clinic team will contact you promptly to confirm availability.
          </p>
        </div>

        {/* Doctor greeting card */}
        <div className="p-4 md:p-5 rounded-2xl bg-surface-container-low border border-primary/20 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left max-w-2xl mx-auto">
          <div className="relative w-16 h-16 rounded-xl overflow-hidden ring-2 ring-primary-fixed flex-shrink-0">
            <Image
              src={DOCTOR_PROFILE.photo}
              alt={DOCTOR_PROFILE.name}
              fill
              sizes="64px"
              className="object-cover object-top"
            />
          </div>
          <div>
            <div className="text-xs font-semibold text-secondary uppercase tracking-wider">
              {DOCTOR_PROFILE.name}, {DOCTOR_PROFILE.credentials}
            </div>
            <p className="text-xs sm:text-sm text-primary font-medium mt-1 leading-relaxed">
              &ldquo;Welcome to PARIKSHIT CLINIC. Our focus is to provide a welcoming environment where you can discuss your dental and facial aesthetic goals, understand suitable options, and make informed choices for your care.&rdquo;
            </p>
          </div>
        </div>

        {/* Appointment Recap Box */}
        <div className="max-w-2xl mx-auto rounded-2xl border border-surface-container-highest/80 divide-y divide-surface-container-highest/60 overflow-hidden bg-surface-container-lowest text-xs sm:text-sm">
          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-on-surface-variant">Department &amp; Treatment:</span>
            <span className="font-semibold text-primary">
              {service.title} &bull; <span className="text-secondary">{service.department}</span>
            </span>
          </div>
          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-on-surface-variant">Requested Slot:</span>
            <span className="font-semibold text-primary">
              {selectedDate} at {selectedTime}
            </span>
          </div>
          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-on-surface-variant">Patient:</span>
            <span className="font-semibold text-primary">
              {formData.firstName} {formData.lastName} {formData.age ? `(Age: ${formData.age})` : ""} &bull; {formData.city || "Vadodara"}
            </span>
          </div>
          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-on-surface-variant">Contact:</span>
            <span className="font-medium text-primary">
              {formData.phone} &bull; {formData.email}
            </span>
          </div>
          {chosenAmenities.length > 0 && (
            <div className="p-4 space-y-2">
              <span className="text-on-surface-variant block">Requested Comfort Amenities:</span>
              <div className="flex flex-wrap gap-1.5">
                {chosenAmenities.map((a) => (
                  <span
                    key={a.id}
                    className="text-[11px] font-medium bg-surface-container px-2.5 py-1 rounded-lg text-primary"
                  >
                    ✓ {a.label}
                  </span>
                ))}
              </div>
            </div>
          )}
          <div className="p-4 flex items-start gap-2 text-xs text-on-surface-variant bg-surface-container-low/50">
            <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              <strong>PARIKSHIT CLINIC:</strong> 14, Ground Floor, Siddharth Elegance Complex, Near SBI Bank, Old Chhani Road, Vadodara – 390024, Gujarat (Phone: +91 70162 92613 / +91 98796 10179)
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 max-w-md mx-auto">
          <button
            type="button"
            onClick={handleDownloadCalendar}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm bg-primary text-white hover:bg-primary-container transition-all shadow-sm cursor-pointer"
          >
            <CalendarPlus className="w-4 h-4" aria-hidden="true" />
            <span>Add to Calendar</span>
          </button>

          <button
            type="button"
            onClick={handleCopyCode}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm border border-outline-variant/70 text-primary hover:bg-surface-container transition-all cursor-pointer"
          >
            <FileCheck className="w-4 h-4" aria-hidden="true" />
            <span>{copied ? "Code Copied!" : "Copy Reference Code"}</span>
          </button>

          <button
            type="button"
            onClick={onReset}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm text-secondary hover:text-primary transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            <span>Book Another</span>
          </button>
        </div>
      </div>
    );
  }

  // Pre-submission Form View
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Header */}
      <div className="text-center sm:text-left">
        <h3 className="font-serif text-2xl md:text-3xl font-medium text-primary tracking-tight">
          4. Patient Information &amp; Request
        </h3>
        <p className="text-sm md:text-base text-on-surface-variant mt-1.5">
          Enter your contact details to request this appointment. The clinic will call or WhatsApp you to confirm the time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Form Fields (7 cols on lg) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-surface-container-highest/70 p-5 md:p-6 shadow-xs space-y-5">
          {/* Patient Status Toggle */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface-variant mb-2">
              Patient Status
            </label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-surface-container rounded-xl">
              <button
                type="button"
                onClick={() => onUpdateFormData({ patientStatus: "new" })}
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  formData.patientStatus === "new"
                    ? "bg-white text-primary shadow-xs"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                ✨ New Patient
              </button>
              <button
                type="button"
                onClick={() => onUpdateFormData({ patientStatus: "returning" })}
                className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  formData.patientStatus === "returning"
                    ? "bg-white text-primary shadow-xs"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                👋 Returning Patient
              </button>
            </div>
          </div>

          {/* Name fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label
                htmlFor="firstName"
                className="block text-xs font-semibold text-on-surface mb-1.5"
              >
                First Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => {
                    onUpdateFormData({ firstName: e.target.value });
                    if (errors.firstName) setErrors((prev) => ({ ...prev, firstName: "" }));
                  }}
                  placeholder="e.g. Priya"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-on-surface placeholder:text-outline-variant/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.firstName
                      ? "border-rose-400 bg-rose-50/30"
                      : "border-surface-container-highest hover:border-outline-variant"
                  }`}
                />
              </div>
              {errors.firstName && (
                <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-xs font-semibold text-on-surface mb-1.5"
              >
                Last Name <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => {
                    onUpdateFormData({ lastName: e.target.value });
                    if (errors.lastName) setErrors((prev) => ({ ...prev, lastName: "" }));
                  }}
                  placeholder="e.g. Patel"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-on-surface placeholder:text-outline-variant/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.lastName
                      ? "border-rose-400 bg-rose-50/30"
                      : "border-surface-container-highest hover:border-outline-variant"
                  }`}
                />
              </div>
              {errors.lastName && (
                <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Age & City fields (Matching Supabase Schema) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label
                htmlFor="patientAge"
                className="block text-xs font-semibold text-on-surface mb-1.5"
              >
                Patient Age (Years)
              </label>
              <div className="relative">
                <input
                  id="patientAge"
                  type="number"
                  min="1"
                  max="120"
                  value={formData.age || ""}
                  onChange={(e) => onUpdateFormData({ age: e.target.value })}
                  placeholder="e.g. 32"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-surface-container-highest text-sm text-on-surface placeholder:text-outline-variant/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary hover:border-outline-variant"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="patientCity"
                className="block text-xs font-semibold text-on-surface mb-1.5"
              >
                City / Location
              </label>
              <div className="relative">
                <input
                  id="patientCity"
                  type="text"
                  value={formData.city || ""}
                  onChange={(e) => onUpdateFormData({ city: e.target.value })}
                  placeholder="e.g. Vadodara"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-surface-container-highest text-sm text-on-surface placeholder:text-outline-variant/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary hover:border-outline-variant"
                />
              </div>
            </div>
          </div>

          {/* Contact Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold text-on-surface mb-1.5"
              >
                Mobile / WhatsApp Number <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    onUpdateFormData({ phone: e.target.value });
                    if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                  }}
                  placeholder="+91 70162 92613"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-on-surface placeholder:text-outline-variant/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.phone
                      ? "border-rose-400 bg-rose-50/30"
                      : "border-surface-container-highest hover:border-outline-variant"
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.phone}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-on-surface mb-1.5"
              >
                Email Address <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    onUpdateFormData({ email: e.target.value });
                    if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                  }}
                  placeholder="name@example.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-on-surface placeholder:text-outline-variant/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                    errors.email
                      ? "border-rose-400 bg-rose-50/30"
                      : "border-surface-container-highest hover:border-outline-variant"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-[11px] text-rose-600 mt-1 font-medium">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Payment / Insurance Preference */}
          <div>
            <label
              htmlFor="insurance"
              className="block text-xs font-semibold text-on-surface mb-1.5"
            >
              Payment Preference / Insurance Reimbursement
            </label>
            <select
              id="insurance"
              value={formData.insurance || ""}
              onChange={(e) => onUpdateFormData({ insurance: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-surface-container-highest text-sm text-on-surface bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
            >
              <option value="">Select payment or reimbursement preference</option>
              {INSURANCE_OPTIONS.map((ins) => (
                <option key={ins} value={ins}>
                  {ins}
                </option>
              ))}
            </select>
            <p className="text-[11px] text-on-surface-variant mt-1">
              Fees depend on clinical assessment. You will receive clear options and fee estimates before treatment begins.
            </p>
          </div>

          {/* SMS / WhatsApp Opt-in Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.smsOptIn}
                onChange={(e) => onUpdateFormData({ smsOptIn: e.target.checked })}
                className="mt-1 w-4 h-4 rounded text-primary focus:ring-primary border-outline-variant cursor-pointer"
              />
              <span className="text-xs text-on-surface-variant leading-relaxed">
                Contact me via WhatsApp/call to confirm clinic appointment timing and provide pre-visit instructions.
              </span>
            </label>
          </div>

          {/* Privacy badge */}
          <div className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low text-[11px] text-on-surface-variant">
            <Lock className="w-3.5 h-3.5 text-primary flex-shrink-0" aria-hidden="true" />
            <span>
              Strict medical confidentiality. Your information is used solely for clinical scheduling and care.
            </span>
          </div>
        </div>

        {/* Right Column: Reservation Recap Sidebar (5 cols on lg) */}
        <div className="lg:col-span-5 bg-surface-container-low/60 rounded-2xl border border-surface-container-highest/70 p-5 md:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-surface-container-highest/60">
            <h4 className="font-serif text-lg font-semibold text-primary">
              Appointment Summary
            </h4>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
              Pending Confirmation
            </span>
          </div>

          {/* Treatment info */}
          <div className="space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant">
              Selected Department &amp; Care
            </span>
            <div className="p-3 rounded-xl bg-white border border-surface-container-highest/70">
              <div className="font-serif text-base font-bold text-primary">
                {service.title}
              </div>
              <div className="text-xs text-secondary font-medium mt-1">
                {service.department}
              </div>
              <div className="flex items-center justify-between text-xs text-on-surface-variant mt-2 pt-2 border-t border-surface-container-highest/40">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-secondary" />
                  30-Min Consultation
                </span>
                <span className="font-semibold text-primary">{service.price}</span>
              </div>
            </div>
          </div>

          {/* Clinician */}
          <div className="space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant">
              Consulting Doctor
            </span>
            <div className="p-3 rounded-xl bg-white border border-surface-container-highest/70 flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 ring-1 ring-primary-fixed">
                <Image
                  src={DOCTOR_PROFILE.photo}
                  alt={DOCTOR_PROFILE.name}
                  fill
                  sizes="40px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <div className="text-xs font-bold text-primary">
                  {DOCTOR_PROFILE.name}, {DOCTOR_PROFILE.credentials}
                </div>
                <div className="text-[11px] text-secondary">
                  Specialist Periodontist &amp; Facial Aesthetics
                </div>
              </div>
            </div>
          </div>

          {/* Time & Location */}
          <div className="space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant">
              Selected Date &amp; Slot
            </span>
            <div className="p-3 rounded-xl bg-white border border-surface-container-highest/70 text-xs space-y-1.5">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                <span>{selectedDate}</span>
              </div>
              <div className="flex items-center gap-2 text-secondary font-medium">
                <Clock className="w-3.5 h-3.5 text-secondary" />
                <span>{selectedTime}</span>
              </div>
            </div>
          </div>

          {/* Selected Comfort items */}
          {chosenAmenities.length > 0 && (
            <div className="space-y-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant">
                Prepared Comfort Items ({chosenAmenities.length})
              </span>
              <div className="p-2.5 rounded-xl bg-white border border-surface-container-highest/70 flex flex-wrap gap-1.5">
                {chosenAmenities.map((amenity) => (
                  <span
                    key={amenity.id}
                    className="text-[10px] bg-surface-container-low text-primary px-2 py-0.5 rounded-md font-medium"
                  >
                    • {amenity.label.split(" ")[0]} {amenity.label.split(" ")[1]}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="text-[11px] text-on-surface-variant bg-white p-3 rounded-xl border border-surface-container-highest/60 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Zero Booking Fee:</strong> Requesting an appointment requires zero payment. The clinic confirms availability directly.
            </span>
          </div>
        </div>
      </div>

      {/* Step Actions */}
      <div className="flex items-center justify-between gap-4 pt-4 border-t border-surface-container-highest/60">
        <button
          type="button"
          onClick={onPrev}
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sm border border-outline-variant/60 text-on-surface hover:bg-surface-container transition-all cursor-pointer disabled:opacity-50"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          <span>Back</span>
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm bg-primary text-white hover:bg-primary-container transition-all shadow-md hover:shadow-lg cursor-pointer disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Sending Request...</span>
            </>
          ) : (
            <>
              <CheckCircle2 className="w-4 h-4 text-primary-fixed" aria-hidden="true" />
              <span>Book Appointment</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default StepConfirm;
