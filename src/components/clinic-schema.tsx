export function ClinicSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
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
    "paymentAccepted": "Cash, Credit Card, Debit Card, UPI",
    "areaServed": "Vadodara, Gujarat",
    "hasMap": "https://www.google.com/maps/search/?api=1&query=14%2C+Siddharth+Elegance%2C+Navayard+Rd%2C+near+SBI+Bank%2C+Navi+Ashapuri%2C+Ram+Wadi%2C+Vadodara%2C+Gujarat+390024",
    "maps": "https://www.google.com/maps/search/?api=1&query=14%2C+Siddharth+Elegance%2C+Navayard+Rd%2C+near+SBI+Bank%2C+Navi+Ashapuri%2C+Ram+Wadi%2C+Vadodara%2C+Gujarat+390024",
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
    "founder": {
      "@type": "Physician",
      "@id": "https://parikshit.space/#doctor",
      "name": "Dr. Jinal Parmar",
      "jobTitle": "Specialist Periodontist & Facial Aesthetics Clinician",
      "honorificPrefix": "Dr.",
      "gender": "Female",
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Bachelor of Dental Surgery (BDS)"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Master of Dental Surgery in Periodontology (MDS)"
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
        }
      ],
      "medicalSpecialty": ["Periodontics", "Dentistry"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
