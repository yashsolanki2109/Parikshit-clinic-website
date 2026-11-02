import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ClinicSchema } from "@/components/clinic-schema";

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
  metadataBase: new URL("https://parikshit.space"),
  title: "PARIKSHIT CLINIC | Dentist & Periodontist in Vadodara | Dr. Jinal Parmar",
  description:
    "PARIKSHIT CLINIC in Vadodara provides specialist dental, periodontics, and facial aesthetics care by Dr. Jinal Parmar (BDS, MDS). Request your consultation online.",
  keywords: [
    "PARIKSHIT CLINIC",
    "Dr. Jinal Parmar",
    "Dentist in Vadodara",
    "Periodontist Vadodara",
    "Dental Clinic Old Chhani Road",
    "Facial Aesthetics Vadodara",
    "Dental Implants Vadodara",
    "Flap Surgery Vadodara",
    "HydraFacial Vadodara",
    "PRP Treatment Vadodara",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PARIKSHIT CLINIC | Dental & Facial Aesthetics | Dr. Jinal Parmar",
    description:
      "Specialist dental care, periodontal therapy, and facial aesthetics in Vadodara by Dr. Jinal Parmar (BDS, MDS, FFAC).",
    url: "https://parikshit.space",
    siteName: "PARIKSHIT CLINIC",
    images: [
      {
        url: "/parikshit-operatory.jpg",
        width: 1200,
        height: 630,
        alt: "PARIKSHIT CLINIC modern operatory in Vadodara",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PARIKSHIT CLINIC | Dentist & Periodontist in Vadodara",
    description:
      "Expert dental, periodontics, and facial aesthetics care in Vadodara by Dr. Jinal Parmar.",
    images: ["/parikshit-operatory.jpg"],
  },
  icons: {
    icon: "/parikshit-icon.png",
    apple: "/parikshit-icon.png",
  },
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
      <body suppressHydrationWarning>
        <ClinicSchema />
        {children}
      </body>
    </html>
  );
}
