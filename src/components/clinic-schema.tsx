export function ClinicSchema() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://parikshit.space/#website",
    "url": "https://parikshit.space",
    "name": "PARIKSHIT CLINIC",
    "alternateName": "Parikshit Dental, Periodontics & Facial Aesthetics Clinic Vadodara",
    "description": "Specialist dental clinic, periodontal surgery center, and medical facial aesthetics practice in Vadodara led by Dr. Jinal Parmar.",
    "inLanguage": "en-IN",
    "publisher": {
      "@id": "https://parikshit.space/#clinic"
    },
  };

  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": "https://parikshit.space/#clinic",
    "name": "PARIKSHIT CLINIC",
    "alternateName": "Parikshit Dental, Periodontics & Facial Aesthetics Clinic",
    "url": "https://parikshit.space",
    "logo": "https://parikshit.space/parikshit-logo-thumb.png",
    "image": "https://parikshit.space/parikshit-operatory.jpg",
    "description": "Specialist dental clinic in Vadodara offering comprehensive periodontics, gum flap surgery, dental implants, smile design, HydraFacial, and facial cosmetology led by Dr. Jinal Parmar.",
    "telephone": "+91 70162 92613",
    "email": "parikshitclinic20@gmail.com",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Net Banking",
    "isAcceptingNewPatients": true,
    "areaServed": [
      {
        "@type": "City",
        "name": "Vadodara"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Gujarat"
      }
    ],
    "sameAs": [
      "https://www.google.com/maps/search/?api=1&query=14%2C+Siddharth+Elegance%2C+Navayard+Rd%2C+near+SBI+Bank%2C+Navi+Ashapuri%2C+Ram+Wadi%2C+Vadodara%2C+Gujarat+390024"
    ],
    "hasMap": "https://www.google.com/maps/search/?api=1&query=14%2C+Siddharth+Elegance%2C+Navayard+Rd%2C+near+SBI+Bank%2C+Navi+Ashapuri%2C+Ram+Wadi%2C+Vadodara%2C+Gujarat+390024",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14, Siddharth Elegance, Navayard Rd, near SBI Bank, Navi Ashapuri, Ram Wadi",
      "addressLocality": "Vadodara",
      "addressRegion": "Gujarat",
      "postalCode": "390024",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.3375,
      "longitude": 73.1812
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "13:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "17:00",
        "closes": "20:00"
      }
    ],
    "medicalSpecialty": [
      "Dentistry",
      "Periodontics",
      "CosmeticDentistry"
    ],
    "knowsAbout": [
      "Dentistry",
      "Periodontology",
      "Oral Implantology",
      "Gum Flap Surgery",
      "Bone Grafting",
      "HydraFacial",
      "Platelet-Rich Plasma (PRP)",
      "Smile Makeover",
      "Vadodara Dental Healthcare"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Clinical Dental & Facial Aesthetic Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dental Implants",
            "url": "https://parikshit.space/services/dental-implants"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gum Flap Surgery",
            "url": "https://parikshit.space/services/flap-surgery"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Root Canal Treatment",
            "url": "https://parikshit.space/services/root-canal-treatment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HydraFacial Treatment",
            "url": "https://parikshit.space/services/hydrafacial-treatment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Face PRP Treatment",
            "url": "https://parikshit.space/services/face-prp-treatment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Dentistry",
            "url": "https://parikshit.space/services/emergency-dentistry"
          }
        }
      ]
    },
    "founder": {
      "@type": "Physician",
      "@id": "https://parikshit.space/#doctor",
      "name": "Dr. Jinal Parmar",
      "url": "https://parikshit.space/#about-doctor",
      "image": "https://parikshit.space/JinalParamar.jpeg",
      "telephone": "+91 70162 92613",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "14, Siddharth Elegance, Navayard Rd, near SBI Bank, Navi Ashapuri, Ram Wadi",
        "addressLocality": "Vadodara",
        "addressRegion": "Gujarat",
        "postalCode": "390024",
        "addressCountry": "IN"
      },
      "jobTitle": "Specialist Periodontist & Facial Aesthetics Clinician",
      "honorificPrefix": "Dr.",
      "gender": "Female",
      "sameAs": [
        "https://www.google.com/maps/search/?api=1&query=14%2C+Siddharth+Elegance%2C+Navayard+Rd%2C+near+SBI+Bank%2C+Navi+Ashapuri%2C+Ram+Wadi%2C+Vadodara%2C+Gujarat+390024"
      ],
      "knowsAbout": [
        "Periodontics",
        "Oral Implantology",
        "Gum Flap Surgery",
        "Facial Cosmetology",
        "Platelet-Rich Plasma Therapy"
      ],
      "affiliation": {
        "@type": "MedicalOrganization",
        "name": "Gujarat Dental Council",
        "url": "https://gdcgujarat.org"
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Bachelor of Dental Surgery (BDS)"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Master of Dental Surgery in Periodontology & Oral Implantology (MDS)"
        }
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "BDS"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "degree",
          "name": "MDS (Periodontics)"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "fellowship",
          "name": "Fellowship in Facial Aesthetics and Cosmetology (FFAC)"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "license",
          "name": "Registered Dental Surgeon & Periodontist (Reg. No. A-20290)",
          "recognizedBy": {
            "@type": "MedicalOrganization",
            "name": "Gujarat Dental Council"
          }
        }
      ],
      "identifier": {
        "@type": "PropertyValue",
        "name": "Gujarat Dental Council Registration",
        "value": "A-20290"
      },
      "medicalSpecialty": ["Periodontics", "Dentistry"]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
    </>
  );
}
