"use client";

import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar as CalendarIcon,
  Clock,
  Sun,
  Sunset,
  Sparkles,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { DATE_SLOTS, TIME_SLOTS, DateSlotOption } from "@/types/booking";

interface StepDateTimeProps {
  selectedDate: string;
  selectedTime: string;
  onSelectDate: (fullDate: string) => void;
  onSelectTime: (time: string) => void;
  onNext: () => void;
  onPrev: () => void;
}

export function StepDateTime({
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
  onNext,
  onPrev,
}: StepDateTimeProps) {
  const isDateSelected = Boolean(selectedDate);
  const isTimeSelected = Boolean(selectedTime);
  const canContinue = isDateSelected && isTimeSelected;

  return (
    <div className="space-y-6">
      {/* Header & Urgency Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-primary tracking-tight">
            3. Select Appointment Date & Time
          </h3>
          <p className="text-sm md:text-base text-on-surface-variant mt-1.5">
            Pick your preferred reservation window. Real-time availability synchronized with Dr. Jinal Parmar&apos;s schedule.
          </p>
        </div>

        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold self-start sm:self-auto shadow-xs">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
          <span>Only 2 emergency priority slots remaining today</span>
        </div>
      </div>

      {/* 7-Day Quick Strip */}
      <div className="space-y-2.5">
        <div className="flex items-center justify-between text-xs font-semibold text-on-surface uppercase tracking-wider">
          <div className="flex items-center gap-1.5">
            <CalendarIcon className="w-4 h-4 text-primary" aria-hidden="true" />
            <span>Select Available Date</span>
          </div>
          <span className="text-on-surface-variant text-[11px] font-normal lowercase">
            Vadodara clinic timings (IST)
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2.5">
          {DATE_SLOTS.map((slot: DateSlotOption) => {
            const isSelected = selectedDate === slot.fullDate;
            const isClosed = slot.isClosed;

            return (
              <button
                key={slot.day + slot.date}
                type="button"
                disabled={isClosed}
                onClick={() => !isClosed && onSelectDate(slot.fullDate)}
                className={`relative p-3 rounded-2xl border text-center transition-all duration-200 flex flex-col items-center justify-between min-h-[96px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isClosed
                    ? "opacity-45 bg-surface-container border-surface-container-highest cursor-not-allowed"
                    : isSelected
                    ? "bg-primary text-white border-primary shadow-md scale-[1.02] ring-2 ring-primary/30"
                    : "bg-white border-surface-container-highest/80 hover:border-primary/50 hover:bg-surface-container-low cursor-pointer hover:shadow-xs"
                }`}
              >
                {slot.isToday && (
                  <span
                    className={`absolute -top-2.5 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${
                      isSelected
                        ? "bg-secondary-container text-primary font-extrabold"
                        : "bg-primary text-white"
                    }`}
                  >
                    Today
                  </span>
                )}

                <span
                  className={`text-[11px] font-bold uppercase tracking-wider ${
                    isSelected ? "text-primary-fixed" : "text-on-surface-variant"
                  }`}
                >
                  {slot.day}
                </span>

                <div className="my-1">
                  <span
                    className={`text-2xl font-serif font-bold ${
                      isSelected ? "text-white" : "text-primary"
                    }`}
                  >
                    {slot.date}
                  </span>
                  <span
                    className={`text-[10px] block font-semibold ${
                      isSelected ? "text-primary-fixed" : "text-secondary"
                    }`}
                  >
                    {slot.month}
                  </span>
                </div>

                <span
                  className={`text-[10px] font-medium leading-tight ${
                    isClosed
                      ? "text-on-surface-variant line-through"
                      : isSelected
                      ? "text-primary-fixed"
                      : slot.isToday
                      ? "text-amber-700 font-bold"
                      : "text-emerald-700"
                  }`}
                >
                  {slot.slotsText}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slots Selection */}
      <div className="bg-white rounded-2xl border border-surface-container-highest/70 p-5 md:p-6 shadow-xs space-y-6">
        {/* Morning Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sun className="w-4 h-4 text-amber-500" aria-hidden="true" />
            <span>Morning Session (10:00 AM – 1:00 PM)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {TIME_SLOTS.morning.map((time) => {
              const isSelected = selectedTime === time;

              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => onSelectTime(time)}
                  className={`p-3.5 rounded-xl border text-center transition-all duration-200 flex items-center justify-between font-medium text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isSelected
                      ? "bg-primary text-white border-primary shadow-sm font-semibold"
                      : "bg-surface-container-lowest border-surface-container-highest/80 text-on-surface hover:border-primary/50 hover:bg-surface-container-low cursor-pointer"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Clock
                      className={`w-4 h-4 ${
                        isSelected ? "text-secondary-container" : "text-secondary"
                      }`}
                      aria-hidden="true"
                    />
                    <span>{time}</span>
                  </div>

                  {isSelected && (
                    <CheckCircle2 className="w-4 h-4 fill-white text-primary" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Afternoon Section */}
        <div className="space-y-3 pt-4 border-t border-surface-container-highest/60">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sunset className="w-4 h-4 text-rose-500" aria-hidden="true" />
            <span>Evening Session (5:00 PM – 8:00 PM)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {TIME_SLOTS.afternoon.map((time) => {
              const isSelected = selectedTime === time;

              return (
                <button
                  key={time}
                  type="button"
                  onClick={() => onSelectTime(time)}
                  className={`p-3.5 rounded-xl border text-center transition-all duration-200 flex items-center justify-between font-medium text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isSelected
                      ? "bg-primary text-white border-primary shadow-sm font-semibold"
                      : "bg-surface-container-lowest border-surface-container-highest/80 text-on-surface hover:border-primary/50 hover:bg-surface-container-low cursor-pointer"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Clock
                      className={`w-4 h-4 ${
                        isSelected ? "text-secondary-container" : "text-secondary"
                      }`}
                      aria-hidden="true"
                    />
                    <span>{time}</span>
                  </div>

                  {isSelected && (
                    <CheckCircle2 className="w-4 h-4 fill-white text-primary" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Summary pill */}
        <div className="p-3.5 rounded-xl bg-surface-container-low border border-surface-container-highest/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-on-surface">
            <Sparkles className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
            <span>
              Chosen Slot:{" "}
              {canContinue ? (
                <strong className="text-primary font-semibold">
                  {selectedDate} at {selectedTime}
                </strong>
              ) : (
                <span className="text-on-surface-variant italic">
                  Select both a date and time slot above
                </span>
              )}
            </span>
          </div>

          <div className="text-[11px] text-secondary flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Holds for 15 minutes during checkout</span>
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
          disabled={!canContinue}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm bg-primary text-white hover:bg-primary-container transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <span>Enter Patient Information</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
