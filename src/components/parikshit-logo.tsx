import React from "react";
import Image from "next/image";

interface ParikshitLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export function ParikshitLogo({
  size = 46,
  className = "",
  showText = false,
}: ParikshitLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div
        className="relative overflow-hidden rounded-xl bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-xs border border-surface-container-highest/60"
        style={{ width: size, height: size }}
      >
        <Image
          src="/parikshit-logo.png"
          alt="PARIKSHIT CLINIC 3D dental implant logo"
          width={size}
          height={size}
          className="object-contain w-full h-full p-1"
          priority
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-serif text-primary font-bold text-lg md:text-xl tracking-tight leading-tight whitespace-nowrap">
            PARIKSHIT CLINIC
          </span>
          <span className="font-sans text-[11px] tracking-wider uppercase text-on-surface-variant font-medium whitespace-nowrap">
            Dental · Periodontics · Facial Aesthetics
          </span>
        </div>
      )}
    </div>
  );
}

export default ParikshitLogo;
