"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Menu, X, Calendar, ArrowRight } from "lucide-react";
import { NAV_ITEMS } from "@/types/navigation";
import { ParikshitLogo } from "@/components/parikshit-logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-surface-container-highest/60 transition-all ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Zone 1: Brand (Left) */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1 -m-1"
              aria-label="PARIKSHIT CLINIC home"
            >
              <ParikshitLogo size={46} showText={true} />
            </a>
          </div>

          {/* Zone 2: Navigation Links (Properly Centered with Ample Space) */}
          <nav
            className="hidden lg:flex items-center justify-center gap-5 xl:gap-8 flex-1 px-4"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative py-2 px-1 text-sm xl:text-[15px] font-medium text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm whitespace-nowrap"
              >
                {item.label}
                {hoveredIndex === idx && (
                  <motion.span
                    layoutId="navbar-hover-underline"
                    className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Right) */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            {/* Phone link */}
            <motion.a
              href="tel:+917016292613"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="text-sm font-medium text-secondary hover:text-primary transition-colors hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-surface-container-low focus:outline-none focus-visible:ring-2 focus-visible:ring-primary whitespace-nowrap"
              aria-label="Call Parikshit Clinic at +91 70162 92613"
            >
              <Phone className="w-4 h-4 text-secondary" aria-hidden="true" />
              <span>+91 70162 92613</span>
            </motion.a>

            {/* Book Appointment CTA */}
            <motion.a
              href="/#booking-wizard"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="px-5 sm:px-6 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-container hover:text-primary-fixed transition-colors shadow-sm flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Book Appointment</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-drawer"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Over Drawer with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <div id="mobile-drawer" className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-10 overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-5 border-b border-surface-container-highest/60 bg-surface-container-lowest">
                <ParikshitLogo size={38} showText={true} />
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              {/* Drawer Links */}
              <div className="flex-1 py-4 px-3 flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-on-surface hover:text-primary hover:bg-surface-container-low transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-on-surface-variant" aria-hidden="true" />
                  </a>
                ))}
              </div>

              {/* Drawer Footer Actions */}
              <div className="p-5 border-t border-surface-container-highest/60 bg-surface-container-lowest flex flex-col gap-3">
                <a
                  href="tel:+917016292613"
                  className="w-full py-3 px-4 rounded-xl border border-secondary/30 text-secondary hover:bg-surface-container-low font-medium text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Call +91 70162 92613</span>
                </a>

                <a
                  href="/#booking-wizard"
                  onClick={handleLinkClick}
                  className="w-full py-3 px-4 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-container hover:text-primary-fixed transition-all shadow-sm flex items-center justify-center gap-2 text-center"
                >
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span>Book Appointment</span>
                </a>

                <p className="text-[11px] text-center text-on-surface-variant/80 mt-1">
                  14, Siddharth Elegance, Navayard Rd, near SBI Bank, Vadodara, Gujarat 390024
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
