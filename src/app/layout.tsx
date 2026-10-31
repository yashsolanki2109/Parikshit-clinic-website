import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PARIKSHIT CLINIC | Dental, Periodontics & Facial Aesthetics | Dr. Jinal Parmar",
  description:
    "PARIKSHIT CLINIC in Vadodara offers dental, periodontal, and facial aesthetic services by Dr. Jinal Parmar (BDS, MDS, FFAC). Contact us or request an appointment online.",
  keywords: [
    "PARIKSHIT CLINIC",
    "Dr. Jinal Parmar",
    "Dentist in Vadodara",
    "Periodontist Vadodara",
    "Facial Aesthetics Vadodara",
    "Dental Implants",
    "Flap Surgery",
    "HydraFacial Vadodara",
    "PRP Treatment",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
