export interface ServiceOption {
  id: string;
  title: string;
  department: "Dental Treatments" | "Facial Aesthetics & Cosmetic Treatments";
  description: string;
  badge: string;
  badgeColor?: string;
  duration: string;
  price: string;
  icon: string;
}

export interface ComfortAmenity {
  id: string;
  label: string;
  description?: string;
  icon?: string;
}

export interface DateSlotOption {
  day: string;
  date: number;
  month: string;
  fullDate: string;
  slotsText: string;
  isClosed?: boolean;
  isToday?: boolean;
}

export interface BookingFormData {
  patientStatus: 'new' | 'returning';
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  age?: number | string;
  city?: string;
  department?: string;
  treatment?: string;
  insurance?: string;
  smsOptIn: boolean;
}

export interface BookingState {
  step: number;
  selectedService: string;
  selectedAmenities: string[];
  selectedDate: string;
  selectedTime: string;
  formData: BookingFormData;
  isSubmitted: boolean;
  confirmationCode: string;
}

export const SERVICES: ServiceOption[] = [
  {
    id: "preventive-care",
    title: "Routine Dental Exam & Ultrasonic Cleaning",
    department: "Dental Treatments",
    description: "Comprehensive oral evaluation, digital X-rays when indicated, ultrasonic debris removal, and periodontal review.",
    badge: "Preventive Care",
    badgeColor: "bg-primary text-white",
    duration: "45 min",
    price: "Routine Care",
    icon: "ShieldCheck",
  },
  {
    id: "periodontal-therapy",
    title: "Advanced Periodontal Therapy & Flap Surgery",
    department: "Dental Treatments",
    description: "Periodontal pocket reduction, scaling and root planing, and regenerative surgery led by Dr. Parmar (MDS Periodontist).",
    badge: "Specialist Care",
    badgeColor: "bg-primary-container text-white",
    duration: "60 min",
    price: "MDS Periodontics",
    icon: "Activity",
  },
  {
    id: "implants-bone-graft",
    title: "Dental Implants & Bone Ridge Augmentation",
    department: "Dental Treatments",
    description: "Implant-supported tooth replacement, bone contouring, and ridge augmentation for long-term oral stability.",
    badge: "Surgical",
    badgeColor: "bg-secondary text-white",
    duration: "60 min",
    price: "Implantology",
    icon: "Sparkles",
  },
  {
    id: "smile-makeovers-veneers",
    title: "Smile Makeovers & Porcelain Veneers",
    department: "Dental Treatments",
    description: "Custom aesthetic treatment planning, tooth-coloured composite bonding, custom porcelain veneers, and teeth whitening.",
    badge: "Aesthetic Dental",
    badgeColor: "bg-tertiary-fixed text-on-surface",
    duration: "45 min",
    price: "Cosmetic Design",
    icon: "Smile",
  },
  {
    id: "hydrafacial-skin-care",
    title: "HydraFacial & Plasma Skin Tightening",
    department: "Facial Aesthetics & Cosmetic Treatments",
    description: "Deep medical cleansing, extraction and infusion hydration, chemical peels, and non-invasive plasma skin tightening.",
    badge: "Facial Aesthetics",
    badgeColor: "bg-emerald-600 text-white",
    duration: "60 min",
    price: "Skin Rejuvenation",
    icon: "Sparkles",
  },
  {
    id: "prp-face-hair",
    title: "Platelet-Rich Plasma (Face & Hair PRP)",
    department: "Facial Aesthetics & Cosmetic Treatments",
    description: "Targeted autologous PRP therapy for facial collagen restoration and active scalp hair rejuvenation by Dr. Parmar (FFAC).",
    badge: "Aesthetic Special",
    badgeColor: "bg-amber-600 text-white",
    duration: "60 min",
    price: "FFAC Certified",
    icon: "Zap",
  },
];

export const COMFORT_AMENITIES: ComfortAmenity[] = [
  {
    id: "bose-headphones",
    label: "QuietComfort Acoustic Noise-Cancelling Headphones",
    description: "Relaxing ambient audio or music to provide a calm, peaceful treatment experience.",
    icon: "Headphones",
  },
  {
    id: "lavender-towel",
    label: "Warm Calming Organic Facial Towel",
    description: "Gentle pre-steamed towel to relieve facial tension before and after clinical procedures.",
    icon: "Sparkles",
  },
  {
    id: "ceiling-display",
    label: "Relaxing Visual Display & Soft Clinic Lighting",
    description: "Thoughtfully calibrated clinic environment designed to eliminate anxiety.",
    icon: "Tv",
  },
  {
    id: "weighted-blanket",
    label: "Ergonomic Comfort Support Blanket",
    description: "Grounding gentle comfort support designed to soothe the nervous system.",
    icon: "HeartHandshake",
  },
  {
    id: "nucalm-relaxation",
    label: "Neuro-Acoustic Relaxation Protocol",
    description: "Gentle natural relaxation protocol designed for stress-free appointments.",
    icon: "Brain",
  },
  {
    id: "gentle-anesthesia",
    label: "Computerized Flow / Pain-Free Anesthesia Protocol",
    description: "Ultra-gentle numbing protocol administered below the human perception threshold.",
    icon: "Wind",
  },
];

export const DATE_SLOTS: DateSlotOption[] = [
  {
    day: "Mon",
    date: 20,
    month: "OCT",
    fullDate: "Monday, Oct 20, 2026",
    slotsText: "6 slots",
  },
  {
    day: "Tue",
    date: 21,
    month: "OCT",
    fullDate: "Tuesday, Oct 21, 2026",
    slotsText: "5 slots",
  },
  {
    day: "Wed",
    date: 22,
    month: "OCT",
    fullDate: "Wednesday, Oct 22, 2026",
    slotsText: "6 slots",
  },
  {
    day: "Thu",
    date: 23,
    month: "OCT",
    fullDate: "Thursday, Oct 23, 2026",
    slotsText: "4 slots",
  },
  {
    day: "Fri",
    date: 24,
    month: "OCT",
    fullDate: "Friday, Oct 24, 2026",
    slotsText: "5 slots",
  },
  {
    day: "Sat",
    date: 25,
    month: "OCT",
    fullDate: "Saturday, Oct 25, 2026",
    slotsText: "4 slots",
  },
  {
    day: "Sun",
    date: 26,
    month: "OCT",
    fullDate: "Sunday, Oct 26, 2026",
    slotsText: "Closed",
    isClosed: true,
  },
];

// Clinic Hours: 10:00 AM–1:00 PM and 5:00 PM–8:00 PM
export const TIME_SLOTS = {
  morning: ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM"],
  afternoon: ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"],
};

export const INSURANCE_OPTIONS = [
  "Self-Pay / Direct Clinic Payment",
  "Standard Dental Insurance Reimbursement",
  "Corporate Healthcare Benefits",
  "UPI / Net Banking / Credit Card / Cash",
];

export const DOCTOR_PROFILE = {
  name: "Dr. Jinal Parmar",
  credentials: "BDS, MDS (Periodontist), FFAC",
  title: "Periodontist & Facial Aesthetics Specialist",
  photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAf_hn7uUj-zd-bw8nUcF89_aiCrIouO2y-5MDDfOUEyGvqpxw2lJH9YbV5SXWizW4YyyWGScv7Pp9v4XzFv62lPKfxvLtCQEu8zPo0hNK3mx7KtzqMca3f2GqvDmSrCUEUfXA_1UMlD3Qs1Yc-Ox1ko8Xq_C5XLYtrgJhxXqZN53YSc5KDfDKluj-wkE2fLP2kJVOg1epxEDYWotFrtMMgmHpDlXfWTyA4M5kIVAmZ1diXeVcVkzZxsw",
  nextOpening: "Today at 10:30 AM",
  experience: "Master of Dental Surgery (Periodontology) · Fellowship in Facial Aesthetics",
  fellowship: "FFAC — Fellowship in Facial Aesthetics and Cosmetology",
  education: "BDS · MDS in Periodontology",
  guarantee: "Welcoming, Thoughtful Assessment & Patient-First Care",
};
