export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "About Dr. Parmar", href: "/#about-doctor" },
  { label: "Technology & Comfort", href: "/#technology-comfort" },
  { label: "Patient Stories", href: "/#patient-stories" },
  { label: "Pricing & Insurance", href: "/#pricing-insurance" },
  { label: "FAQ", href: "/#faq" },
];

export const defaultNavItems = NAV_ITEMS;
