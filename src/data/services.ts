// Generated Clinical Services Catalog for PARIKSHIT CLINIC
export interface ServiceDetail {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  deptId: 'dental' | 'aesthetics';
  department: string;
  category: string;
  shortDescription: string;
  clinicalDetail: string;
  specialist: {
    name: string;
    qualifications: string;
    title: string;
    bio: string;
  };
  steps: Array<{
    step: string;
    title: string;
    desc: string;
  }>;
  faqs: Array<{
    q: string;
    a: string;
  }>;
}

export const ALL_SERVICES: ServiceDetail[] = [
  {
    "slug": "routine-exams",
    "title": "Routine Exams",
    "h1": "Routine Exams in Vadodara",
    "metaTitle": "Routine Exams Vadodara | Dr. Jinal Parmar | PARIKSHIT CLINIC",
    "metaDescription": "Clinical dental evaluations and digital X-rays when indicated. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Preventive & General Care",
    "shortDescription": "Clinical dental evaluations and digital X-rays when indicated.",
    "clinicalDetail": "Your dentist will review your concerns and relevant dental history, examine your mouth, and explain findings. X-rays are considered only when clinically needed.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Medical & Dental History Review",
        "desc": "Dr. Jinal Parmar reviews your current concerns, past dental treatments, medications, and any systemic health conditions that may affect your oral health."
      },
      {
        "step": "02",
        "title": "Comprehensive Oral Examination",
        "desc": "A thorough clinical check of teeth, gums, tongue, bite alignment, and soft tissues for signs of decay, gum disease, or other concerns."
      },
      {
        "step": "03",
        "title": "Digital X-Ray (When Clinically Indicated)",
        "desc": "Targeted digital radiographs are taken only when necessary to detect issues not visible during a clinical exam, minimizing radiation exposure."
      },
      {
        "step": "04",
        "title": "Findings Discussion & Preventive Guidance",
        "desc": "Results are explained clearly. You receive a personalized home-care plan and scheduled recall interval appropriate for your oral health status."
      }
    ],
    "faqs": [
      {
        "q": "How often should I come in for a routine dental exam?",
        "a": "Most patients benefit from an exam every six months. If you have active gum disease, a history of cavities, or other risk factors, Dr. Jinal Parmar may recommend a more frequent recall schedule during your visit."
      },
      {
        "q": "Will I definitely need X-rays at every routine exam?",
        "a": "No. X-rays are taken only when there is a clinical reason — such as evaluating a suspicious area, monitoring bone levels, or assessing a new concern. Dr. Parmar follows a risk-based protocol to keep exposure as low as reasonably necessary."
      },
      {
        "q": "What can a routine exam detect beyond cavities?",
        "a": "Routine exams screen for gum disease, early periodontal bone loss, oral cancer signs, bite problems, worn or cracked teeth, and signs of systemic conditions like acid reflux. Early detection almost always leads to simpler, less costly treatment."
      }
    ]
  },
  {
    "slug": "teeth-cleanings",
    "title": "Teeth Cleanings",
    "h1": "Teeth Cleanings in Vadodara",
    "metaTitle": "Teeth Cleanings in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Professional removal of debris, calculus, and surface stains, followed by polishing of the teeth. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Preventive & General Care",
    "shortDescription": "Professional removal of debris, calculus, and surface stains, followed by polishing of the teeth.",
    "clinicalDetail": "The visit can include a gum-health review and home-care advice. Your clinician will explain what is recommended for your needs.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Gum Health Screening",
        "desc": "Pocket depths and gum inflammation are checked to determine whether a standard prophylaxis or deeper periodontal cleaning is appropriate for your condition."
      },
      {
        "step": "02",
        "title": "Supragingival Calculus Removal",
        "desc": "Ultrasonic and hand instruments remove hardened tartar (calculus) and plaque deposits above the gumline that regular brushing cannot dislodge."
      },
      {
        "step": "03",
        "title": "Subgingival Cleaning (If Required)",
        "desc": "Deposits below the gumline are carefully removed when gum inflammation or early pocket formation is detected, preventing progression to periodontitis."
      },
      {
        "step": "04",
        "title": "Polish & Home-Care Guidance",
        "desc": "Teeth are polished to remove surface staining and biofilm. Dr. Parmar discusses brushing technique, flossing, and interdental care tailored to your anatomy."
      }
    ],
    "faqs": [
      {
        "q": "Is a professional teeth cleaning different from brushing at home?",
        "a": "Yes, significantly. Home brushing removes soft plaque from accessible surfaces, but calculus (hardened tartar) can only be removed with professional ultrasonic and hand instruments. Calculus below the gumline is a primary driver of gum disease and cannot be treated at home."
      },
      {
        "q": "My teeth feel sensitive after cleaning — is this normal?",
        "a": "Mild sensitivity for 1–2 days after cleaning is common, particularly if calculus was removed from near the gumline. The exposed root surfaces adjust once the gum tissue settles. Dr. Parmar can recommend a desensitizing toothpaste if needed."
      },
      {
        "q": "Can I get my teeth cleaned if I have gum disease?",
        "a": "Yes, and it is especially important. Depending on the severity, Dr. Jinal Parmar may recommend non-surgical periodontal therapy (scaling and root planing) rather than a standard cleaning to adequately address the infection below the gumline."
      }
    ]
  },
  {
    "slug": "dental-fillings",
    "title": "Dental Fillings",
    "h1": "Dental Fillings in Vadodara",
    "metaTitle": "Dental Fillings in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Tooth-coloured composite restorations. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Preventive & General Care",
    "shortDescription": "Tooth-coloured composite restorations.",
    "clinicalDetail": "After examining the tooth, your dentist can explain suitable filling materials, the steps involved, and expected aftercare.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Cavity Assessment & Shade Selection",
        "desc": "The cavity extent is evaluated clinically and radiographically. A composite shade matching your natural tooth colour is selected before treatment begins."
      },
      {
        "step": "02",
        "title": "Decay Removal Under Local Anaesthetic",
        "desc": "The affected tooth is numbed. All infected dentine is precisely removed, leaving only healthy tooth structure to bond the restoration to."
      },
      {
        "step": "03",
        "title": "Bonded Composite Placement",
        "desc": "Tooth-coloured composite resin is placed in layers, each light-cured to full strength. The restoration is shaped to replicate the natural tooth anatomy and bite."
      },
      {
        "step": "04",
        "title": "Bite Check & Polishing",
        "desc": "The bite is adjusted so the filling meets opposing teeth evenly. The surface is polished to a smooth, stain-resistant finish. Aftercare advice is provided."
      }
    ],
    "faqs": [
      {
        "q": "How long do tooth-coloured composite fillings last?",
        "a": "With good oral hygiene and regular check-ups, composite fillings typically last 7–10 years, though this varies with cavity size, location, and biting habits. Dr. Parmar monitors existing restorations during your routine exams."
      },
      {
        "q": "Will the filling look natural?",
        "a": "Yes. Modern composite resins are matched precisely to your tooth shade and are virtually indistinguishable from natural enamel in photographs and conversation. They are bonded directly to the tooth, requiring less removal of healthy structure compared to older amalgam fillings."
      },
      {
        "q": "My tooth is sensitive after the filling — should I be concerned?",
        "a": "Brief sensitivity to cold or biting pressure in the first 1–2 weeks is normal as the tooth settles. If sensitivity persists beyond three weeks or worsens, contact PARIKSHIT CLINIC, as it may indicate the bite needs fine-tuning or the cavity was deep."
      }
    ]
  },
  {
    "slug": "root-canal-treatment",
    "title": "Root Canal Treatment",
    "h1": "Root Canal Treatment in Vadodara",
    "metaTitle": "Root Canal Treatment in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Treatment for infection or damage involving the pulp inside a tooth. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Endodontic & Pulp Therapy",
    "shortDescription": "Treatment for infection or damage involving the pulp inside a tooth.",
    "clinicalDetail": "The dentist will assess the tooth, discuss alternatives and explain the treatment stages. Several visits or a final restoration may be needed, depending on the case.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Pulp Vitality Testing & Radiographic Assessment",
        "desc": "Thermal and electric pulp tests combined with periapical X-rays confirm the extent of infection or nerve damage and determine whether root canal therapy is the appropriate treatment."
      },
      {
        "step": "02",
        "title": "Pulp Chamber Access Under Local Anaesthetic",
        "desc": "The tooth is numbed completely. A small opening is made through the crown to access the infected pulp tissue, which is then removed."
      },
      {
        "step": "03",
        "title": "Canal Shaping, Irrigation & Obturation",
        "desc": "Canal files progressively shape the root canals to precise dimensions. Irrigation with antimicrobial solution disinfects the entire canal system. Canals are then filled with biocompatible gutta-percha to seal them permanently."
      },
      {
        "step": "04",
        "title": "Crown or Final Restoration",
        "desc": "A treated tooth becomes more brittle over time. A crown or appropriate permanent restoration is placed to protect it from fracture and restore normal chewing function."
      }
    ],
    "faqs": [
      {
        "q": "Is root canal treatment painful?",
        "a": "Modern root canal treatment performed under effective local anaesthetic is no more uncomfortable than a routine filling. Most patients report that the pre-treatment toothache was far worse than the procedure itself. Dr. Parmar takes time to ensure you are fully numb before beginning."
      },
      {
        "q": "How many appointments will I need?",
        "a": "Most straightforward root canals are completed in 1–2 appointments. Severely infected or multi-rooted teeth may require an additional visit to allow full resolution of infection before final obturation. Dr. Parmar will outline the expected number of visits at your consultation."
      },
      {
        "q": "What happens if I leave an infected tooth untreated?",
        "a": "An untreated pulp infection can spread to the surrounding bone, causing an abscess, facial swelling, and in severe cases systemic infection. The tooth will typically require extraction if the infection is left too long. Early root canal treatment saves the natural tooth, which is almost always the preferred outcome."
      }
    ]
  },
  {
    "slug": "pulpectomy",
    "title": "Pulpectomy",
    "h1": "Pulpectomy in Vadodara",
    "metaTitle": "Pulpectomy Vadodara | Dr. Jinal Parmar | PARIKSHIT CLINIC",
    "metaDescription": "Pulp treatment specially designed for selected deciduous (primary/baby) teeth. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Endodontic & Pulp Therapy",
    "shortDescription": "Pulp treatment specially designed for selected deciduous (primary/baby) teeth.",
    "clinicalDetail": "The dentist will assess whether the tooth can be restored, discuss suitable alternatives, and explain the expected follow-up.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Child-Specific Clinical Assessment",
        "desc": "Tooth vitality, extent of infection, and remaining root structure are evaluated alongside the child's age and expected timing of natural exfoliation of the baby tooth."
      },
      {
        "step": "02",
        "title": "Comfortable Anaesthesia & Isolation",
        "desc": "Local anaesthetic is administered gently and the tooth is isolated with a rubber dam to keep the area clean, dry, and safe throughout the procedure."
      },
      {
        "step": "03",
        "title": "Pulp Removal & Medicated Canal Fill",
        "desc": "Infected pulp tissue is removed from the crown and roots. Canals are filled with a resorbable, zinc-oxide based material that gradually dissolves alongside the natural root resorption of the baby tooth."
      },
      {
        "step": "04",
        "title": "Stainless Steel Crown Placement",
        "desc": "A preformed stainless steel crown is fitted over the treated tooth to protect it and maintain space for the permanent successor until natural shedding occurs."
      }
    ],
    "faqs": [
      {
        "q": "Why save a baby tooth instead of simply extracting it?",
        "a": "Baby (deciduous) teeth hold space for permanent teeth. Premature extraction can cause neighbouring teeth to drift, leading to crowding and orthodontic problems in the permanent dentition. Pulpectomy preserves the tooth until it sheds naturally at the right developmental time."
      },
      {
        "q": "Is a pulpectomy safe for young children?",
        "a": "Yes. Pulpectomy is a well-established paediatric dental procedure performed under local anaesthetic. The filling material used is specifically designed for deciduous teeth and resorbs naturally as the baby tooth's root resorbs. Dr. Parmar adapts the approach to the child's comfort and cooperation."
      },
      {
        "q": "How do I know if my child's baby tooth needs a pulpectomy?",
        "a": "Signs include spontaneous or severe toothache at night, visible swelling around a tooth, a 'gumboil' or abscess near the tooth, or sensitivity to hot food. A dental X-ray confirms the diagnosis. Early evaluation gives the best chance of saving the tooth."
      }
    ]
  },
  {
    "slug": "flap-surgery",
    "title": "Flap Surgery",
    "h1": "Flap Surgery in Vadodara",
    "metaTitle": "Flap Surgery Vadodara | Dr. Jinal Parmar | PARIKSHIT CLINIC",
    "metaDescription": "Periodontal pocket reduction and access for treatment of affected tissues. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Advanced Periodontal Therapy",
    "shortDescription": "Periodontal pocket reduction and access for treatment of affected tissues.",
    "clinicalDetail": "A periodontal assessment determines whether this approach is appropriate; the clinician discusses alternatives, recovery, and follow-up.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Full-Mouth Periodontal Charting",
        "desc": "Pocket depths, bleeding on probing, furcation involvement, and bone levels from X-rays are recorded to confirm that flap surgery is the appropriate next step."
      },
      {
        "step": "02",
        "title": "Pre-Surgical Preparation",
        "desc": "Any outstanding scaling and root planing is completed first. Patients are given pre-operative instructions including antibiotic coverage if indicated by their medical history."
      },
      {
        "step": "03",
        "title": "Surgical Debridement Under Local Anaesthetic",
        "desc": "The gum is reflected to provide direct visual access to root surfaces and bone. Calculus and diseased granulation tissue are meticulously removed under magnification, then the flap is sutured to a reduced pocket depth."
      },
      {
        "step": "04",
        "title": "Healing, Suture Removal & Periodontal Maintenance",
        "desc": "Sutures are removed at 7–10 days. Detailed post-operative instructions are provided. Regular three-monthly periodontal maintenance visits follow to stabilise and monitor results long-term."
      }
    ],
    "faqs": [
      {
        "q": "How is flap surgery different from non-surgical scaling?",
        "a": "Non-surgical scaling (SRP) is performed without reflecting the gum and is effective for moderate pocketing up to 5–6 mm. Flap surgery provides direct vision and access to deeper pockets (typically 6 mm or more) and bone defects that cannot be adequately cleaned through a closed approach."
      },
      {
        "q": "How long is the recovery period after flap surgery?",
        "a": "Most patients experience mild to moderate soreness for 3–5 days, managed well with prescribed anti-inflammatories. Sutures are removed at 7–10 days. Full gum healing takes 4–6 weeks, though chewing function returns to normal within 2 weeks in most cases."
      },
      {
        "q": "Will my teeth look longer after flap surgery?",
        "a": "Some degree of gum shrinkage (recession) can occur as inflamed tissue resolves to its healthy position. Dr. Parmar discusses this possibility during the consultation so you have realistic expectations. The benefit — stopping bone loss and saving your teeth — typically outweighs the aesthetic change."
      }
    ]
  },
  {
    "slug": "gingivectomy",
    "title": "Gingivectomy",
    "h1": "Gingivectomy in Vadodara",
    "metaTitle": "Gingivectomy Vadodara | Dr. Jinal Parmar | PARIKSHIT CLINIC",
    "metaDescription": "Surgical reshaping or removal of excess gum tissue when indicated. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Advanced Periodontal Therapy",
    "shortDescription": "Surgical reshaping or removal of excess gum tissue when indicated.",
    "clinicalDetail": "A consultation reviews gum health and the reason for reshaping; the clinician explains the proposed approach and healing.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Cause Assessment (Drug-Induced or Inflammatory)",
        "desc": "The underlying reason for gum overgrowth is identified — whether from medication (e.g., anticonvulsants, calcium-channel blockers), inflammatory periodontal disease, or idiopathic fibrosis — as this guides treatment and recurrence risk."
      },
      {
        "step": "02",
        "title": "Pre-Operative Scaling & Inflammation Control",
        "desc": "Thorough scaling and oral hygiene improvement reduces gingival inflammation before surgery, improving tissue quality and reducing intraoperative bleeding."
      },
      {
        "step": "03",
        "title": "Precise Excision Under Local Anaesthetic",
        "desc": "Excess gum tissue is excised using a scalpel or electrosurgery to achieve a natural scalloped contour that matches the underlying bone architecture."
      },
      {
        "step": "04",
        "title": "Periodontal Dressing & Healing Review",
        "desc": "A protective dressing is placed over the surgical site. Healing is reviewed at 1 week and 1 month. Recurrence risk is discussed if the causative medication cannot be changed."
      }
    ],
    "faqs": [
      {
        "q": "What is a 'gummy smile' and can gingivectomy correct it?",
        "a": "A gummy smile occurs when excess gum tissue covers more of the tooth surface than aesthetically ideal. Gingivectomy or crown lengthening can remove this excess tissue to expose more of the natural crown, creating a more balanced smile. Dr. Parmar assesses your bone level first to ensure the correction will be stable."
      },
      {
        "q": "My blood pressure medication is causing my gums to overgrow — will stopping the medication help?",
        "a": "Drug-induced gingival enlargement can partially or fully resolve if the causative medication is changed or stopped (in consultation with your physician). If this is not possible, gingivectomy removes the excess tissue, though there is a risk of recurrence as long as the drug is continued. Dr. Parmar coordinates with your physician where needed."
      },
      {
        "q": "How long does recovery take after a gingivectomy?",
        "a": "Most patients experience mild soreness for 2–4 days, controlled with over-the-counter pain relief. A soft diet for 1 week is recommended. The gum tissue fully heals and matures over 4–6 weeks, at which point the final aesthetic result can be properly evaluated."
      }
    ]
  },
  {
    "slug": "frenectomy",
    "title": "Frenectomy",
    "h1": "Frenectomy in Vadodara",
    "metaTitle": "Frenectomy Vadodara | Dr. Jinal Parmar | PARIKSHIT CLINIC",
    "metaDescription": "Release of restricted muscle attachments when clinically appropriate. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Advanced Periodontal Therapy",
    "shortDescription": "Release of restricted muscle attachments when clinically appropriate.",
    "clinicalDetail": "Assessment considers the attachment and related concerns; the clinician explains whether release or another approach may be appropriate.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Frenum Classification & Impact Assessment",
        "desc": "The frenum's attachment level, its effect on the gum margin (recession risk), midline diastema, or speech restriction is assessed to confirm clinical indication for release."
      },
      {
        "step": "02",
        "title": "Patient Preparation & Topical Anaesthetic",
        "desc": "The area is prepared with topical anaesthetic followed by a local injection to ensure complete numbness. For children, additional behaviour guidance is provided to maximise comfort."
      },
      {
        "step": "03",
        "title": "Frenum Release (Excision or Z-Plasty)",
        "desc": "The frenum is released using either a simple excision or a Z-plasty technique (which repositions the frenum) depending on the clinical anatomy and the need to prevent scar contraction."
      },
      {
        "step": "04",
        "title": "Suturing & Post-Operative Instructions",
        "desc": "Fine resorbable sutures close the site. Written post-operative instructions covering diet, oral hygiene, and wound care are provided. The area is reviewed at 1–2 weeks."
      }
    ],
    "faqs": [
      {
        "q": "My child has a large upper frenum causing a gap between front teeth — should it be removed now or after braces?",
        "a": "Timing depends on the child's age and whether the gap closes naturally as permanent teeth erupt. Orthodontists typically prefer to close the diastema with braces first, then perform frenectomy afterwards to prevent the fibres pulling the teeth apart again. Dr. Parmar can coordinate timing with your orthodontist."
      },
      {
        "q": "Can a tight lower frenum cause gum recession?",
        "a": "Yes. A low labial or lingual frenum that pulls on the gum margin near the lower front teeth can cause or worsen localised gum recession over time. Frenectomy releases this tension and may be combined with a gum graft to restore lost tissue if recession is already present."
      },
      {
        "q": "Is frenectomy painful, and how long does healing take?",
        "a": "The procedure is performed under local anaesthetic and is well-tolerated. Mild soreness lasts 2–3 days. Resorbable sutures dissolve on their own in 1–2 weeks, and the area heals fully within 2–4 weeks. Children generally recover more quickly than adults."
      }
    ]
  },
  {
    "slug": "local-drug-delivery",
    "title": "Local Drug Delivery",
    "h1": "Local Drug Delivery in Vadodara",
    "metaTitle": "Local Drug Delivery in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Targeted antimicrobial application in selected periodontal pockets. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Advanced Periodontal Therapy",
    "shortDescription": "Targeted antimicrobial application in selected periodontal pockets.",
    "clinicalDetail": "This may be discussed as part of a wider periodontal plan; the clinician explains the medicine, application, and follow-up.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Pocket Selection After Scaling",
        "desc": "Following scaling and root planing, residual pockets of 5 mm or deeper with continued bleeding on probing are identified as candidates for local drug delivery."
      },
      {
        "step": "02",
        "title": "Agent Selection (Chlorhexidine / Doxycycline / Minocycline)",
        "desc": "Dr. Parmar selects the most appropriate controlled-release antimicrobial agent based on pocket depth, bacterial profile, and patient medical history including allergies."
      },
      {
        "step": "03",
        "title": "Precise Subgingival Placement",
        "desc": "The agent is placed directly into the periodontal pocket using a specialized delivery cannula, ensuring maximum concentration at the site of infection without systemic drug absorption."
      },
      {
        "step": "04",
        "title": "Re-Evaluation at 4–6 Weeks",
        "desc": "Pocket depths are re-measured 4–6 weeks post-application to assess clinical response. Persistent deep pockets may require additional applications or surgical intervention."
      }
    ],
    "faqs": [
      {
        "q": "How is local drug delivery different from taking an antibiotic tablet?",
        "a": "Systemic oral antibiotics reach the periodontal pocket at very low concentrations and carry the risk of side effects and antibiotic resistance. Local drug delivery places the agent directly inside the pocket at concentrations up to 100 times higher than systemic doses, targeting bacteria precisely where they cause disease."
      },
      {
        "q": "Does local drug delivery replace surgical treatment?",
        "a": "It is an adjunct to, not a replacement for, mechanical debridement. For pockets of 5–6 mm that have not responded to scaling and root planing alone, local drug delivery can often avoid surgery. Pockets deeper than 7 mm with significant bone loss typically still benefit from surgical management."
      },
      {
        "q": "Is the medication safe — will it affect my gut or other medications?",
        "a": "Because the agent remains localised within the pocket and is not absorbed systemically in meaningful amounts, it does not affect the gut microbiome or interact with most medications. Dr. Parmar reviews your complete medication list before placement."
      }
    ]
  },
  {
    "slug": "non-surgical-periodontal-therapy",
    "title": "Non-surgical Periodontal Therapy",
    "h1": "Non-surgical Periodontal Therapy in Vadodara",
    "metaTitle": "Non-surgical Periodontal Therapy in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Scaling and root planing to manage periodontal disease. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Advanced Periodontal Therapy",
    "shortDescription": "Scaling and root planing to manage periodontal disease.",
    "clinicalDetail": "The plan depends on gum measurements and findings; your clinician reviews home-care steps and maintenance visits.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Full-Mouth Periodontal Assessment",
        "desc": "Six-point pocket charting, bleeding scores, radiographic bone level assessment, and plaque indices are recorded to stage and grade the periodontitis and plan treatment quadrants."
      },
      {
        "step": "02",
        "title": "Quadrant-Wise Scaling & Root Planing",
        "desc": "Under local anaesthetic, ultrasonic and hand instruments remove calculus and bacterial biofilm from root surfaces down to the base of each pocket, completing all four quadrants within 24 hours where possible to prevent bacterial recolonisation."
      },
      {
        "step": "03",
        "title": "Adjunctive Therapy Where Indicated",
        "desc": "Systemic antibiotics (e.g., metronidazole + amoxicillin for aggressive periodontitis) or local drug delivery into residual pockets may be prescribed as clinical evidence supports their benefit."
      },
      {
        "step": "04",
        "title": "Re-Evaluation & Maintenance Planning",
        "desc": "Pockets and bone levels are re-assessed 6–8 weeks post-SRP. Patients with stable results transition to a 3-monthly periodontal maintenance program. Remaining deep pockets may be referred for surgical evaluation."
      }
    ],
    "faqs": [
      {
        "q": "How is scaling and root planing different from a standard teeth cleaning?",
        "a": "Standard prophylaxis (cleaning) removes calculus from above and just below the gumline in patients with healthy gums or mild gingivitis. Scaling and root planing (SRP) goes deeper — it removes calculus from the full pocket depth (which can be 4–8 mm below the gumline) and smooths the root surface to remove bacterial toxins, specifically treating periodontitis."
      },
      {
        "q": "Will I need anaesthetic for the procedure?",
        "a": "Yes. Because SRP accesses the root surface deep within inflamed pockets, local anaesthetic is used for each quadrant to ensure you are completely comfortable. The anaesthetic wears off within 2–4 hours after the appointment."
      },
      {
        "q": "My dentist told me I have gum disease. Can non-surgical therapy actually cure it?",
        "a": "Periodontitis cannot be 'cured' — once bone is lost, it does not fully regenerate without regenerative surgery. However, non-surgical therapy effectively controls the infection, stops the progression of bone loss, and stabilises the disease in the majority of patients. Lifelong periodontal maintenance is then essential to keep it under control."
      }
    ]
  },
  {
    "slug": "regenerative-surgery",
    "title": "Regenerative Surgery",
    "h1": "Regenerative Surgery in Vadodara",
    "metaTitle": "Regenerative Surgery in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Selected regenerative techniques and bone grafting to support tissue repair. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Regenerative & Reconstructive Surgery",
    "shortDescription": "Selected regenerative techniques and bone grafting to support tissue repair.",
    "clinicalDetail": "A specialist evaluates the site and explains whether regenerative methods may be considered, along with alternatives and recovery.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Defect Classification & Regenerative Feasibility",
        "desc": "High-resolution radiographs and probing assess whether the bone defect is two-wall or three-wall (more favourable for regeneration) or horizontal (less amenable). Only suitable defects proceed to regenerative surgery."
      },
      {
        "step": "02",
        "title": "Surgical Access & Thorough Debridement",
        "desc": "The flap is raised to provide direct access. All granulation tissue, calculus, and bacterial contamination are meticulously removed before grafting material is placed."
      },
      {
        "step": "03",
        "title": "Bone Graft & Barrier Membrane Placement",
        "desc": "Appropriate graft material (autogenous, allograft, or synthetic) is placed into the defect. A resorbable or non-resorbable collagen membrane is positioned over the graft to exclude rapidly proliferating epithelial cells and allow slower bone-forming cells to repopulate the defect."
      },
      {
        "step": "04",
        "title": "Tension-Free Closure & Long-Term Follow-Up",
        "desc": "The flap is advanced and sutured tension-free to fully cover the membrane. Follow-up at 6 and 12 months includes repeat radiographs to assess bone fill and clinical pocket reduction."
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between a bone graft and guided tissue regeneration (GTR)?",
        "a": "A bone graft fills the defect with material that acts as a scaffold for new bone formation. Guided tissue regeneration (GTR) uses a barrier membrane placed over the defect to selectively allow bone and periodontal ligament cells to repopulate the area, excluding gum cells that would otherwise fill the space with scar tissue. The two techniques are frequently combined for best results."
      },
      {
        "q": "Will the surgery involve donor bone from another person or animal?",
        "a": "Bone graft options are discussed in detail during your consultation. Choices include your own bone (autograft), processed human donor bone (allograft), bovine-derived material (xenograft), or fully synthetic ceramics. Each type has evidence supporting its use, and Dr. Parmar recommends the most appropriate option based on your defect size and preferences."
      },
      {
        "q": "How much bone can I expect to regain?",
        "a": "Outcomes depend on defect morphology, patient systemic health, smoking status, and oral hygiene. Well-selected two- and three-wall intrabony defects treated with regenerative surgery can show 2–4 mm of bone fill on follow-up X-rays. Results are discussed honestly, as regeneration is unpredictable and individual responses vary."
      }
    ]
  },
  {
    "slug": "ostectomy",
    "title": "Ostectomy",
    "h1": "Ostectomy in Vadodara",
    "metaTitle": "Ostectomy Vadodara | Dr. Jinal Parmar | PARIKSHIT CLINIC",
    "metaDescription": "Surgical bone contouring to reshape supporting structures when indicated. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Regenerative & Reconstructive Surgery",
    "shortDescription": "Surgical bone contouring to reshape supporting structures when indicated.",
    "clinicalDetail": "Your clinician discusses the reason for bone contouring, nearby structures, the planned steps, and follow-up.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Radiographic Bone Level Analysis",
        "desc": "Periapical X-rays and clinical probing map existing bone contours to identify irregular crestal anatomy, bony ledges, or reversed architecture contributing to persistent deep pocketing."
      },
      {
        "step": "02",
        "title": "Full-Thickness Flap Elevation",
        "desc": "A full-thickness mucoperiosteal flap is raised to fully expose the alveolar bone, allowing direct visualisation before any reshaping is performed."
      },
      {
        "step": "03",
        "title": "Bone Reshaping with Rotary & Hand Instruments",
        "desc": "Irregular bone ledges and interdental craters are recontoured using rotary burs and chisels under constant irrigation to prevent thermal damage, re-establishing physiological positive bone architecture."
      },
      {
        "step": "04",
        "title": "Flap Repositioning & Maintenance Programme",
        "desc": "The flap is repositioned apically or at the bone level and sutured. A regular three-monthly maintenance recall is established to monitor stability and oral hygiene."
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between ostectomy and osteoplasty?",
        "a": "Osteoplasty removes bone that does not support a tooth (reshaping for a better contour), while ostectomy removes supporting bone to eliminate pocket depth. Because ostectomy sacrifices some supporting bone, it is used selectively. Dr. Parmar evaluates both options and recommends the most conservative effective approach."
      },
      {
        "q": "Is bone loss from ostectomy permanent?",
        "a": "Yes. Bone removed during ostectomy does not regenerate. The goal is to create a bone contour that allows gum tissue to be maintained at a level that eliminates pocketing, reducing the bacterial reservoir. The long-term health gain typically justifies the small sacrifice of supporting bone."
      },
      {
        "q": "Will my teeth become loose after the bone is recontoured?",
        "a": "Minimal bone removal performed within safe limits does not cause clinical tooth mobility. Dr. Parmar carefully plans the amount of bone to remove based on each tooth's root length and existing bone support, ensuring structural integrity is maintained."
      }
    ]
  },
  {
    "slug": "ridge-augmentation",
    "title": "Ridge Augmentation",
    "h1": "Ridge Augmentation in Vadodara",
    "metaTitle": "Ridge Augmentation in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Procedures to restore jawbone width or height in suitable cases. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Regenerative & Reconstructive Surgery",
    "shortDescription": "Procedures to restore jawbone width or height in suitable cases.",
    "clinicalDetail": "Assessment considers jawbone shape and future restoration goals; options, healing time, and alternatives are reviewed.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "3D Bone Volume Assessment",
        "desc": "Clinical ridge width and height are measured alongside radiographic evaluation to map bone deficiency precisely and plan graft volume, membrane size, and expected healing timeline."
      },
      {
        "step": "02",
        "title": "Graft Material Selection & Membrane Choice",
        "desc": "Graft material and membrane type are selected based on defect size, patient health, and planned restoration. The rationale, success rates, and alternatives (e.g., shorter implants or removable prosthesis) are discussed."
      },
      {
        "step": "03",
        "title": "Augmentation Procedure Under Local Anaesthetic",
        "desc": "The ridge is exposed, graft particulate is packed into the defect, a protective membrane is placed, and the flap is closed in a tension-free manner with resorbable sutures."
      },
      {
        "step": "04",
        "title": "Healing Period & Re-Entry for Implant Placement",
        "desc": "Bone maturation takes 4–6 months. A follow-up radiograph confirms adequate new bone volume before implant placement is scheduled. During healing, a temporary prosthesis maintains aesthetics."
      }
    ],
    "faqs": [
      {
        "q": "Why do I need ridge augmentation before getting a dental implant?",
        "a": "Dental implants need a minimum bone width (typically 6 mm) and height to integrate successfully. Tooth loss, infection, and trauma cause bone to resorb rapidly. Ridge augmentation rebuilds the bone volume to dimensions that can safely support and stabilise an implant long-term."
      },
      {
        "q": "How long does the full ridge augmentation and implant process take?",
        "a": "Ridge augmentation requires 4–6 months of healing before an implant can be placed. Implant osseointegration then takes a further 3–4 months. The complete process from augmentation to final crown is typically 9–12 months. Dr. Parmar provides a staged timeline at consultation."
      },
      {
        "q": "Is ridge augmentation painful?",
        "a": "The procedure is performed under local anaesthetic. Post-operative swelling and soreness are expected for 5–7 days and are managed with prescribed anti-inflammatories and analgesics. Most patients find recovery similar to, or less uncomfortable than, a tooth extraction."
      }
    ]
  },
  {
    "slug": "periodontal-plastic-surgery",
    "title": "Periodontal Plastic Surgery",
    "h1": "Periodontal Plastic Surgery in Vadodara",
    "metaTitle": "Periodontal Plastic Surgery in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Gum procedures to address selected functional or aesthetic concerns. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Plastic & Cosmetic Dentistry",
    "shortDescription": "Gum procedures to address selected functional or aesthetic concerns.",
    "clinicalDetail": "Consultation explores gum health, functional or aesthetic goals, available approaches, and expected healing.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Goal Setting & Soft-Tissue Diagnosis",
        "desc": "Aesthetic concerns (recession, uneven gumline, gummy smile) or functional issues (root sensitivity, shallow vestibule) are mapped against the actual soft and hard tissue anatomy to identify the most appropriate procedure."
      },
      {
        "step": "02",
        "title": "Donor Site or Membrane Selection",
        "desc": "For root coverage, donor tissue is harvested from the palate (connective tissue graft), or an acellular dermal matrix (ADM) is used as an alternative. Dr. Parmar explains the evidence for each option."
      },
      {
        "step": "03",
        "title": "Microsurgical Graft Placement",
        "desc": "The graft is precisely positioned beneath a coronally or laterally advanced flap using fine sutures to maximise vascular contact and graft take, aiming for complete root coverage."
      },
      {
        "step": "04",
        "title": "Healing, Review & Lifestyle Guidance",
        "desc": "Smoking cessation and careful oral hygiene avoidance of the surgical area are critical for the first 2 weeks. Full maturation of the graft is assessed at 3 and 6 months."
      }
    ],
    "faqs": [
      {
        "q": "My gums are receding — will a gum graft cover the exposed roots completely?",
        "a": "Complete root coverage is achievable in many cases, particularly when recession is Miller Class I or II (recession that has not yet crossed the mucogingival junction and has no interdental bone loss). Class III recession can achieve partial coverage. Dr. Parmar classifies your recession precisely before giving a realistic prognosis."
      },
      {
        "q": "Will the palate healing be very painful?",
        "a": "The palate donor site is a common concern. It is managed with a protective palatal stent worn for 1–2 weeks. Modern techniques harvest only the connective tissue layer, leaving the outer epithelium intact, which significantly reduces palatal discomfort compared to older methods. Pain is well-controlled with prescribed medication."
      },
      {
        "q": "How long will the gum graft results last?",
        "a": "Studies show that well-performed gum grafts for root coverage are highly stable over 10+ years, particularly when the original cause of recession (e.g., aggressive brushing, bruxism, orthodontic tooth movement beyond bone) is also corrected. Dr. Parmar identifies and addresses causative factors as part of the treatment plan."
      }
    ]
  },
  {
    "slug": "smile-makeovers",
    "title": "Smile Makeovers",
    "h1": "Smile Makeovers in Vadodara",
    "metaTitle": "Smile Makeovers in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Individualised smile assessment and aesthetic treatment planning. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Plastic & Cosmetic Dentistry",
    "shortDescription": "Individualised smile assessment and aesthetic treatment planning.",
    "clinicalDetail": "Planning starts with your goals and an oral-health assessment; the dentist explains possible sequences, options, and limitations.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Smile Analysis & Aesthetic Consultation",
        "desc": "Tooth shade, shape, proportion, gumline symmetry, and facial harmony are evaluated photographically and clinically to identify the most impactful improvements for your specific facial structure."
      },
      {
        "step": "02",
        "title": "Foundation Health Check",
        "desc": "Any gum disease, decay, or bone issues are treated first. Aesthetic work is only performed on a stable, healthy foundation — shortcuts here risk early failure of cosmetic restorations."
      },
      {
        "step": "03",
        "title": "Sequenced Treatment Plan",
        "desc": "Procedures are ordered logically — gum contouring before veneers, teeth whitening before crown shade matching — with a clear timeline and cost breakdown provided upfront."
      },
      {
        "step": "04",
        "title": "Final Review & Maintenance Protocol",
        "desc": "On completion, the smile result is photographically documented. A maintenance schedule and home-care routine are established to protect the investment in your new smile."
      }
    ],
    "faqs": [
      {
        "q": "What treatments are typically included in a smile makeover?",
        "a": "A smile makeover is fully customised. Common components include professional teeth whitening, composite bonding or porcelain veneers, gum reshaping (crown lengthening or gingivectomy), tooth-coloured fillings to replace discoloured restorations, and occasionally orthodontic alignment. Dr. Parmar recommends only the treatments that deliver a meaningful improvement in your specific case."
      },
      {
        "q": "How long does a full smile makeover take?",
        "a": "Timeline depends on complexity. A straightforward makeover involving whitening and bonding may be completed in 2–3 appointments over a few weeks. A comprehensive plan involving multiple veneers, gum surgery, and other procedures typically spans 2–4 months to allow each stage to heal properly before proceeding."
      },
      {
        "q": "Are smile makeovers only about aesthetics, or do they also improve oral health?",
        "a": "Both. Well-planned smile makeovers improve function (bite correction, replacing missing teeth) as well as aesthetics. Health issues like worn teeth, chipping, or gum asymmetry often have functional causes. Addressing them cosmetically also restores proper form and function, reducing long-term wear and sensitivity."
      }
    ]
  },
  {
    "slug": "porcelain-veneers",
    "title": "Porcelain Veneers",
    "h1": "Porcelain Veneers in Vadodara",
    "metaTitle": "Porcelain Veneers in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Custom-made shells to improve the appearance of suitable teeth. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Plastic & Cosmetic Dentistry",
    "shortDescription": "Custom-made shells to improve the appearance of suitable teeth.",
    "clinicalDetail": "Your dentist reviews tooth condition and bite, discusses alternatives and preparation, and explains care and maintenance.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Shade Mapping & Digital Smile Preview",
        "desc": "Desired shade, tooth shape, and proportions are planned using reference photos and shade guides. Expectations are aligned before any tooth preparation begins."
      },
      {
        "step": "02",
        "title": "Conservative Tooth Preparation",
        "desc": "0.3–0.5 mm of enamel is removed from the front surface under local anaesthetic. Impressions are taken and temporary veneers are fitted to protect teeth during the laboratory fabrication phase (1–2 weeks)."
      },
      {
        "step": "03",
        "title": "Try-In & Bonding",
        "desc": "Finished porcelain veneers are tried in without cement to verify fit, shade, and contour. After your approval, the tooth surface is etched and the veneers are bonded permanently with light-cured resin cement."
      },
      {
        "step": "04",
        "title": "Bite Adjustment & Long-Term Care Instructions",
        "desc": "The bite is checked and adjusted. Care instructions are provided: avoid biting hard objects, wear a night guard if you grind, and attend regular check-ups to monitor veneer margins and gum health."
      }
    ],
    "faqs": [
      {
        "q": "Are porcelain veneers permanent? Can they be removed?",
        "a": "Veneers are considered an irreversible treatment because the enamel removed during preparation cannot be replaced. If a veneer chips or debonds it must be repaired or replaced. With good care, porcelain veneers last 10–15+ years. Dr. Parmar ensures you understand this commitment fully before proceeding."
      },
      {
        "q": "Will my teeth be sensitive after veneer preparation?",
        "a": "Mild sensitivity to cold after enamel preparation is common and typically resolves within 1–2 weeks once the permanent veneer is bonded. Sensitivity rarely persists long-term. Teeth with insufficient enamel or large existing fillings may be better suited to crowns — Dr. Parmar assesses candidacy during consultation."
      },
      {
        "q": "Can I whiten my teeth after getting porcelain veneers?",
        "a": "No. Porcelain does not respond to bleaching agents. The shade of your veneers is permanent. This is why teeth whitening should be completed before veneers are fabricated, so the porcelain shade can be matched to your whitened natural teeth."
      }
    ]
  },
  {
    "slug": "teeth-whitening",
    "title": "Teeth Whitening",
    "h1": "Teeth Whitening in Vadodara",
    "metaTitle": "Teeth Whitening in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Professional whitening options following a suitability assessment. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Plastic & Cosmetic Dentistry",
    "shortDescription": "Professional whitening options following a suitability assessment.",
    "clinicalDetail": "Assessment checks tooth and gum health and existing restorations; your dentist discusses suitable options and possible sensitivity.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Pre-Whitening Oral Health Check",
        "desc": "Gum health, existing restorations, exposed roots, and enamel wear are checked. Teeth are cleaned to remove surface stain so bleaching acts on the actual tooth colour, not deposit."
      },
      {
        "step": "02",
        "title": "Shade Recording",
        "desc": "Baseline shade is documented with a standardised shade guide and clinical photographs to objectively measure the improvement achieved after treatment."
      },
      {
        "step": "03",
        "title": "Whitening Protocol Application",
        "desc": "Professional-concentration bleaching agent is applied under controlled conditions. Gum tissue is protected throughout. The session duration and concentration are adjusted for your sensitivity levels."
      },
      {
        "step": "04",
        "title": "Home Maintenance & Diet Guidance",
        "desc": "Post-whitening instructions cover a 48-hour 'white diet' to avoid staining while pores are open. Home maintenance trays with a lower-concentration gel may be provided to extend and maintain the result."
      }
    ],
    "faqs": [
      {
        "q": "How many shades lighter can I expect my teeth to become?",
        "a": "Results vary based on the original tooth shade, type of discolouration (extrinsic vs. intrinsic), and enamel thickness. Extrinsic stain (from coffee, tea, tobacco) responds best, with improvements of 2–8 shades common. Intrinsic discolouration from tetracycline antibiotics or fluorosis responds more modestly. Realistic expectations are discussed at your consultation."
      },
      {
        "q": "Is teeth whitening safe for my enamel?",
        "a": "Professional-supervised whitening using regulated concentrations of hydrogen peroxide or carbamide peroxide is considered safe when performed correctly. Research shows no permanent enamel damage with professionally dispensed products. The main side effect is temporary sensitivity, which resolves within a few days."
      },
      {
        "q": "My crowns and fillings are discoloured — will whitening help?",
        "a": "No. Bleaching agents only work on natural tooth enamel and do not affect porcelain, ceramic, or composite restorations. Existing restorations will remain their original shade while surrounding natural teeth brighten, which may create a mismatch. Dr. Parmar factors this into your treatment plan."
      }
    ]
  },
  {
    "slug": "dental-implants",
    "title": "Dental Implants",
    "h1": "Dental Implants in Vadodara",
    "metaTitle": "Dental Implants in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Implant-based tooth restoration following clinical assessment. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Implantology & Restorative Care",
    "shortDescription": "Implant-based tooth restoration following clinical assessment.",
    "clinicalDetail": "Consultation reviews oral health and bone, any imaging needed, alternatives, stages, timing, risks, and maintenance.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Bone Volume Assessment & Medical Screening",
        "desc": "Bone width, height, and density are assessed radiographically. Medical history is reviewed for conditions affecting healing (e.g., uncontrolled diabetes, bisphosphonate therapy). A detailed treatment plan with realistic timeline is provided."
      },
      {
        "step": "02",
        "title": "Implant Fixture Placement",
        "desc": "The titanium implant fixture is placed into prepared bone under local anaesthetic. Immediate or delayed loading is determined based on initial stability (insertion torque). A temporary crown or healing cap is fitted."
      },
      {
        "step": "03",
        "title": "Osseointegration Period (3–4 Months)",
        "desc": "The implant integrates with jawbone over 3–4 months. Smoking cessation and optimal blood sugar control are critical during this phase to prevent early implant failure."
      },
      {
        "step": "04",
        "title": "Abutment & Final Crown Placement",
        "desc": "An abutment is attached and impressions taken for a custom-milled crown matched in shade and contour to neighbouring teeth. Annual implant maintenance check-ups are essential long-term."
      }
    ],
    "faqs": [
      {
        "q": "How long do dental implants last?",
        "a": "With proper care, dental implants can last 15–25 years or a lifetime. The implant fixture itself rarely fails once integrated; the crown on top typically needs replacement after 10–15 years due to wear. Long-term success depends heavily on consistent oral hygiene and regular professional maintenance to prevent peri-implantitis."
      },
      {
        "q": "Am I a candidate for dental implants if I have diabetes?",
        "a": "Controlled diabetes is not a contraindication to implant placement, but poorly controlled blood sugar significantly increases the risk of infection and implant failure. Dr. Parmar requires HbA1c levels to be within an acceptable range before proceeding, and coordinates with your physician where needed."
      },
      {
        "q": "What is peri-implantitis and how can I prevent it?",
        "a": "Peri-implantitis is a destructive inflammatory condition around an implant, analogous to periodontitis around teeth, causing bone loss and potentially implant loss. Prevention requires meticulous home oral hygiene (implant-specific floss or interdental brushes), 6-monthly professional maintenance, and avoiding smoking. Early signs are reversible if caught promptly."
      }
    ]
  },
  {
    "slug": "crowns-bridges",
    "title": "Crowns & Bridges",
    "h1": "Crowns & Bridges in Vadodara",
    "metaTitle": "Crowns & Bridges in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Restorations using suitable ceramic, zirconia or other materials. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Implantology & Restorative Care",
    "shortDescription": "Restorations using suitable ceramic, zirconia or other materials.",
    "clinicalDetail": "The dentist evaluates the teeth and bite, then discusses restoration materials, preparation, expected visits, and care.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Tooth Assessment & Material Selection",
        "desc": "The strength, remaining tooth structure, bite load, and aesthetic zone of the tooth are assessed. Zirconia, porcelain-fused-to-metal (PFM), or full-porcelain options are compared, and the most appropriate material is recommended."
      },
      {
        "step": "02",
        "title": "Tooth Preparation & Impression",
        "desc": "The tooth is shaped under local anaesthetic to precise dimensions. Accurate impressions are taken digitally or conventionally and sent to a dental laboratory. A well-fitting temporary crown protects the prepared tooth."
      },
      {
        "step": "03",
        "title": "Try-In & Cement",
        "desc": "The final crown or bridge is tried in to verify fit, shade, and bite. After your approval, it is cemented permanently with appropriate luting cement and excess cement is meticulously removed."
      },
      {
        "step": "04",
        "title": "Bite Verification & Maintenance Plan",
        "desc": "Bite balance is checked in all movements. Instructions for bridge hygiene (using floss threaders or interdental brushes under the pontic) are demonstrated. Review appointments are scheduled."
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between a crown and a bridge?",
        "a": "A crown is a full-coverage cap placed over a single damaged or root-canal-treated tooth to protect and restore it. A bridge replaces one or more missing teeth by fusing artificial teeth (pontics) to crowns placed on the adjacent natural teeth (abutments), which are prepared to support the bridge structure."
      },
      {
        "q": "How long will my crown or bridge last?",
        "a": "Modern ceramic and zirconia restorations typically last 10–15 years with good care. Metal-ceramic crowns can last longer due to the strength of the metal substructure. The leading causes of failure are decay at the crown margin, gum disease affecting the abutment teeth, and bite-related fractures. Regular check-ups catch problems early."
      },
      {
        "q": "My root-canal-treated tooth was advised a crown — is this really necessary?",
        "a": "Yes, for most cases. Root-canal-treated posterior teeth (molars and premolars) lose significant structural integrity and are at high risk of vertical fracture under chewing forces — a fracture that may require extraction. A crown covers and protects the tooth, significantly extending its functional lifespan."
      }
    ]
  },
  {
    "slug": "mouth-reconstruction",
    "title": "Mouth Reconstruction",
    "h1": "Mouth Reconstruction in Vadodara",
    "metaTitle": "Mouth Reconstruction in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Comprehensive restorative planning, including implant-supported rehabilitation when appropriate. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Implantology & Restorative Care",
    "shortDescription": "Comprehensive restorative planning, including implant-supported rehabilitation when appropriate.",
    "clinicalDetail": "A staged plan may combine services based on examination findings; the dentist explains sequence, alternatives, timelines, and maintenance.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Full-Mouth Diagnostic Assessment",
        "desc": "Full-mouth X-rays, bite analysis, jaw joint evaluation, and an aesthetic assessment are performed together to understand the complete clinical picture before any treatment begins."
      },
      {
        "step": "02",
        "title": "Staged Treatment Planning",
        "desc": "A written, sequenced plan is provided covering emergency care, periodontal treatment, implant or prosthetic placement, and final aesthetic work — with estimated cost and timeline for each phase."
      },
      {
        "step": "03",
        "title": "Phased Clinical Execution",
        "desc": "Treatment proceeds in a logical sequence: infection control first, then structural rehabilitation (implants, crowns, bridges), then cosmetic refinement. Each phase is completed and allowed to settle before the next begins."
      },
      {
        "step": "04",
        "title": "Maintenance Programme & Long-Term Monitoring",
        "desc": "On completion, a customised maintenance recall is established covering implant review, radiographic monitoring, and professional cleaning frequency appropriate for your restoration complexity."
      }
    ],
    "faqs": [
      {
        "q": "My teeth are worn down and several are missing — where do I even begin?",
        "a": "Full-mouth reconstruction starts with a comprehensive diagnostic consultation where everything is assessed together. Dr. Parmar creates a prioritised, phased plan. Treatment is never rushed — controlling active disease (gum disease, decay) is always the first step before any restorative or cosmetic work begins."
      },
      {
        "q": "How long does a full-mouth reconstruction take?",
        "a": "Complexity determines timeline. A moderate reconstruction involving several crowns, implants, and gum treatment may take 6–12 months. Extensive cases requiring bone grafting, multiple implant placements, and full-arch restoration can take 18–24 months. A realistic timeline is part of the written plan provided at consultation."
      },
      {
        "q": "Is full-mouth reconstruction very expensive?",
        "a": "Comprehensive reconstruction is a significant investment, but it is broken into phases with clear costs at each stage. Dr. Parmar outlines the cost of each phase at consultation so you can make an informed decision and plan financially. Treatment does not have to be completed all at once."
      }
    ]
  },
  {
    "slug": "pediatric-dentistry",
    "title": "Pediatric Dentistry",
    "h1": "Pediatric Dentistry in Vadodara",
    "metaTitle": "Pediatric Dentistry in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Dental assessment and care tailored to children's needs. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Specialized Dental Care",
    "shortDescription": "Dental assessment and care tailored to children's needs.",
    "clinicalDetail": "The visit is tailored to a child's age and needs; the team can explain the planned assessment, preventive advice, and next steps.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Child-Friendly Introductory Visit",
        "desc": "The first appointment is kept relaxed and exploratory, allowing the child to become comfortable with the environment, dental chair, and instruments through a 'tell-show-do' approach before any clinical examination begins."
      },
      {
        "step": "02",
        "title": "Age-Appropriate Clinical Examination",
        "desc": "Tooth eruption sequence, cavity assessment, gum health, bite development, and jaw growth are evaluated. Diet and brushing habits are reviewed with the parent."
      },
      {
        "step": "03",
        "title": "Preventive Treatment",
        "desc": "Fluoride application and fissure sealants may be recommended for cavity-prone permanent molars. Oral hygiene instruction is tailored to the child's age and manual dexterity."
      },
      {
        "step": "04",
        "title": "Parent Guidance & Recall Planning",
        "desc": "Parents receive guidance on diet, thumb sucking, bottle habits, and when to expect permanent teeth. A six-monthly recall schedule maintains continuity of care throughout the child's dental development."
      }
    ],
    "faqs": [
      {
        "q": "At what age should my child first visit the dentist?",
        "a": "The Indian Dental Association recommends a first dental visit by the first birthday or within 6 months of the first tooth erupting. Early visits establish healthy habits, allow preventive care to begin, and help children become comfortable with dental appointments before any treatment is ever needed."
      },
      {
        "q": "My child is afraid of the dentist — how do you manage dental anxiety in children?",
        "a": "Dr. Parmar uses a gradual 'tell-show-do' approach, keeping the first visit non-invasive and reassuring. Voice control, positive reinforcement, and patience are used consistently. For very anxious children, treatment may be broken into short, manageable appointments. Severe anxiety cases may be discussed for further management options."
      },
      {
        "q": "My child has a cavity in a baby tooth. Should I fill it since the tooth will fall out anyway?",
        "a": "Yes, in most cases. Untreated cavities in baby teeth can cause pain, infection, difficulty eating, and premature tooth loss — which affects space for permanent teeth. A simple filling is far preferable to allowing decay to reach the nerve, which would then require a more involved pulpectomy or extraction."
      }
    ]
  },
  {
    "slug": "emergency-dentistry",
    "title": "Emergency Dentistry",
    "h1": "Emergency Dentistry in Vadodara",
    "metaTitle": "Emergency Dentistry in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Assessment of urgent dental pain, injury and other dental concerns. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Specialized Dental Care",
    "shortDescription": "Assessment of urgent dental pain, injury and other dental concerns.",
    "clinicalDetail": "Call the clinic to discuss urgent symptoms and current availability; an examination helps determine next steps and whether referral is needed.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Telephone Triage & Same-Day Scheduling",
        "desc": "Call PARIKSHIT CLINIC at +91 70162 92613 to describe your emergency. The team assesses urgency and books the earliest available slot. Severe facial swelling, difficulty breathing, or trauma should prompt hospital attendance first."
      },
      {
        "step": "02",
        "title": "Pain Management & Clinical Diagnosis",
        "desc": "On arrival, pain is addressed promptly. A focused clinical and radiographic assessment identifies the cause — abscess, fractured tooth, lost restoration, trauma, or other condition."
      },
      {
        "step": "03",
        "title": "Emergency Treatment",
        "desc": "Immediate intervention may include temporary dressing, drainage of abscess, splinting of a traumatised tooth, re-cementation of a dislodged crown, or prescription of antibiotics where infection is confirmed."
      },
      {
        "step": "04",
        "title": "Definitive Treatment Planning",
        "desc": "After the acute emergency is stabilised, a follow-up appointment is scheduled for definitive treatment (e.g., root canal, extraction, or permanent restoration) with a full explanation of options."
      }
    ],
    "faqs": [
      {
        "q": "My tooth was knocked out in an accident — what should I do immediately?",
        "a": "Act quickly. Pick up the tooth by the crown (not the root). If dirty, rinse gently with milk or saline — never scrub or use tap water. Keep the tooth moist by storing it in milk, saline, or between your cheek and gum. Call PARIKSHIT CLINIC immediately. Re-implantation has the best chance of success within 30–60 minutes of the injury."
      },
      {
        "q": "I have severe toothache with swelling — do I need emergency care or should I wait?",
        "a": "Dental swelling indicates active infection which can spread rapidly. Seek care urgently. If swelling extends below the jaw, affects swallowing or breathing, or causes fever, go directly to a hospital emergency department, as this may indicate a spreading neck space infection requiring immediate medical attention."
      },
      {
        "q": "My crown fell off. Can I reattach it temporarily at home?",
        "a": "Temporary dental cement (available at pharmacies) can re-seat the crown temporarily to protect the prepared tooth. Do not use superglue. Avoid chewing on that side. Contact PARIKSHIT CLINIC for proper re-cementation as soon as possible, as a dislodged crown can allow moisture and bacteria underneath, making re-use difficult."
      }
    ]
  },
  {
    "slug": "orthodontic-treatment",
    "title": "Orthodontic Treatment",
    "h1": "Orthodontic Treatment in Vadodara",
    "metaTitle": "Orthodontic Treatment in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Assessment and planning for tooth alignment and bite concerns. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "dental",
    "department": "Dental Treatments",
    "category": "Specialized Dental Care",
    "shortDescription": "Assessment and planning for tooth alignment and bite concerns.",
    "clinicalDetail": "Options may include braces or other clinician-guided appliances. The approach, timing, and follow-up depend on an orthodontic assessment.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist Periodontist & Dental Surgeon (BDS, MDS)",
      "bio": "Dr. Jinal Parmar holds a Master of Dental Surgery in Periodontology & Oral Implantology, bringing specialized surgical precision and compassionate care to every procedure."
    },
    "steps": [
      {
        "step": "01",
        "title": "Orthodontic Records & Case Analysis",
        "desc": "Dental models, photographs, and appropriate radiographs are taken to analyse tooth positions, jaw discrepancy, and growth status before any appliance is chosen."
      },
      {
        "step": "02",
        "title": "Treatment Option Discussion",
        "desc": "Fixed braces, removable aligners, or other options are discussed based on the clinical diagnosis, patient preference, and estimated treatment duration. Realistic outcomes, limitations, and costs are outlined."
      },
      {
        "step": "03",
        "title": "Active Treatment Phase",
        "desc": "Appliances progressively move teeth into planned positions with regular adjustment appointments. Oral hygiene is closely monitored throughout as fixed appliances increase plaque retention risk."
      },
      {
        "step": "04",
        "title": "Retention Phase & Gum Health Review",
        "desc": "Retainers hold corrected tooth positions after appliance removal. Dr. Parmar monitors gum health during and after orthodontic treatment, as tooth movement in the presence of gum disease can accelerate bone loss."
      }
    ],
    "faqs": [
      {
        "q": "Is orthodontic treatment only for children and teenagers?",
        "a": "No. Adults are increasingly seeking orthodontic treatment, and there is no upper age limit provided gum and bone support are healthy. Adult treatment may take slightly longer than in growing patients, and some skeletal discrepancies may require surgical correction in adults. Dr. Parmar assesses your bone health first."
      },
      {
        "q": "I have gum disease — can I still have orthodontic treatment?",
        "a": "Orthodontic treatment must not begin with active gum disease. Moving teeth through inflamed, infected bone can accelerate bone loss rapidly. Periodontal disease must be fully treated and stabilised first, then orthodontic treatment can proceed safely under close monitoring by both the periodontist and orthodontist."
      },
      {
        "q": "How long will I need to wear a retainer after braces?",
        "a": "Long-term or permanent retainer wear is now the standard recommendation, as teeth continue to shift throughout life. Removable retainers are typically worn full-time for 6–12 months, then at night indefinitely. Bonded wire retainers on the lower front teeth may be placed permanently for high-relapse risk cases."
      }
    ]
  },
  {
    "slug": "mole-removal",
    "title": "Mole Removal",
    "h1": "Mole Removal in Vadodara",
    "metaTitle": "Mole Removal Vadodara | Dr. Jinal Parmar | PARIKSHIT CLINIC",
    "metaDescription": "Assessment of the lesion and appropriate options where indicated. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "aesthetics",
    "department": "Facial Aesthetics & Cosmetology",
    "category": "General Care",
    "shortDescription": "Assessment of the lesion and appropriate options where indicated.",
    "clinicalDetail": "Consultation reviews the area and whether assessment by another specialist is needed; suitable options and healing are discussed.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist in Facial Aesthetics & Cosmetology (BDS, MDS, FFAC)",
      "bio": "Dr. Jinal Parmar completed her Fellowship in Facial Aesthetics and Cosmetology (FFAC), delivering evidence-based clinical facial rejuvenation and autologous PRP therapies."
    },
    "steps": [
      {
        "step": "01",
        "title": "Lesion Assessment & Safety Evaluation",
        "desc": "The mole or skin lesion is examined for size, border regularity, colour uniformity, and any concerning features. Lesions with atypical features are referred for dermatological or histopathological review before any cosmetic removal."
      },
      {
        "step": "02",
        "title": "Method Selection (Surgical or Radiofrequency)",
        "desc": "Benign, confirmed lesions may be removed by surgical excision or radiofrequency ablation based on size, depth, and location. The chosen method, expected scar appearance, and healing time are explained."
      },
      {
        "step": "03",
        "title": "Procedure Under Local Anaesthetic",
        "desc": "The area is numbed and the lesion is removed precisely. Surgical excisions are sutured with fine absorbable or removable sutures depending on site and depth."
      },
      {
        "step": "04",
        "title": "Wound Care & Scar Prevention",
        "desc": "Detailed aftercare instructions are provided. Sun protection of the healing site is essential. Scar management advice (silicone gel, sun block) helps achieve the best aesthetic outcome."
      }
    ],
    "faqs": [
      {
        "q": "How do I know if my mole is safe to remove cosmetically?",
        "a": "Dr. Parmar applies the clinical ABCDE criteria (Asymmetry, Border, Colour, Diameter, Evolution) during assessment. Any mole that is asymmetric, has irregular borders, contains multiple colours, is larger than 6 mm, or has changed recently requires dermatological assessment before cosmetic removal is considered."
      },
      {
        "q": "Will mole removal leave a scar?",
        "a": "Any procedure that breaks the skin can leave a mark. Radiofrequency ablation typically leaves the smallest marks on suitable raised benign lesions. Surgical excision of larger lesions leaves a linear scar that fades significantly over 6–12 months with good wound care. Dr. Parmar discusses expected outcomes honestly for each lesion location and type."
      },
      {
        "q": "Can a removed mole grow back?",
        "a": "Completely removed benign moles do not typically regrow. Radiofrequency ablation of deep lesions may leave some cells at the base, with a small chance of partial recurrence. If a mole returns, it should be re-examined clinically before any retreatment."
      }
    ]
  },
  {
    "slug": "freckle-removal",
    "title": "Freckle Removal",
    "h1": "Freckle Removal in Vadodara",
    "metaTitle": "Freckle Removal in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Assessment of pigmentation and suitable cosmetic treatment options. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "aesthetics",
    "department": "Facial Aesthetics & Cosmetology",
    "category": "General Care",
    "shortDescription": "Assessment of pigmentation and suitable cosmetic treatment options.",
    "clinicalDetail": "Consultation considers pigmentation, skin type, and medical history; available options, aftercare, and variable results are discussed.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist in Facial Aesthetics & Cosmetology (BDS, MDS, FFAC)",
      "bio": "Dr. Jinal Parmar completed her Fellowship in Facial Aesthetics and Cosmetology (FFAC), delivering evidence-based clinical facial rejuvenation and autologous PRP therapies."
    },
    "steps": [
      {
        "step": "01",
        "title": "Skin Type & Pigmentation Pattern Assessment",
        "desc": "Fitzpatrick skin type, underlying cause (sun-induced, hormonal, post-inflammatory), and depth of pigmentation are evaluated to select the safest and most effective treatment modality."
      },
      {
        "step": "02",
        "title": "Pre-Treatment Skin Preparation",
        "desc": "A course of topical depigmenting agents (e.g., hydroquinone, kojic acid, azelaic acid) may be recommended for 4–6 weeks before procedural treatment to prime the skin and reduce post-inflammatory hyperpigmentation risk."
      },
      {
        "step": "03",
        "title": "Treatment Session (Chemical Peel or Targeted Procedure)",
        "desc": "Appropriate peel strength or treatment modality is applied targeting melanin-rich areas. Treatment parameters are carefully selected for your Fitzpatrick type to minimise the risk of post-inflammatory hyperpigmentation, which is higher in darker Indian skin tones."
      },
      {
        "step": "04",
        "title": "Sun Protection Protocol & Maintenance",
        "desc": "Strict daily SPF 50+ sun protection is non-negotiable during and after treatment. Pigmentation without sun protection will recur regardless of the treatment used. A maintenance skincare routine is prescribed."
      }
    ],
    "faqs": [
      {
        "q": "Will freckles come back after treatment?",
        "a": "Freckles are genetically determined and will recur with sun exposure regardless of treatment method. Consistent daily SPF 50+ sunscreen use significantly slows recurrence. Many patients find that treating freckles alongside a strict photoprotection routine provides lasting improvement, though the commitment to sun protection is permanent."
      },
      {
        "q": "Is freckle treatment safe for Indian skin?",
        "a": "Darker skin tones (Fitzpatrick IV–VI) are at higher risk of post-inflammatory hyperpigmentation (PIH) — meaning the treated area can temporarily darken — after aggressive procedures. Dr. Parmar uses conservative parameters and pre-treats skin to minimise this risk. Conservative, staged treatment is always preferred over aggressive single-session approaches."
      },
      {
        "q": "How many sessions will I need to see results?",
        "a": "Most patients require 2–4 sessions spaced 3–4 weeks apart for meaningful lightening of freckles. The number of sessions depends on freckle depth, skin type, and adherence to sun protection between sessions. Realistic expectations — lightening rather than complete elimination — are discussed at consultation."
      }
    ]
  },
  {
    "slug": "eyelid-xanthelasma-removal",
    "title": "Eyelid Xanthelasma Removal",
    "h1": "Eyelid Xanthelasma Removal in Vadodara",
    "metaTitle": "Eyelid Xanthelasma Removal in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Assessment of cholesterol deposits around the eyelids and appropriate treatment or referral. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "aesthetics",
    "department": "Facial Aesthetics & Cosmetology",
    "category": "General Care",
    "shortDescription": "Assessment of cholesterol deposits around the eyelids and appropriate treatment or referral.",
    "clinicalDetail": "The clinician assesses the eyelid area and suitability, and may recommend medical assessment or referral before cosmetic treatment.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist in Facial Aesthetics & Cosmetology (BDS, MDS, FFAC)",
      "bio": "Dr. Jinal Parmar completed her Fellowship in Facial Aesthetics and Cosmetology (FFAC), delivering evidence-based clinical facial rejuvenation and autologous PRP therapies."
    },
    "steps": [
      {
        "step": "01",
        "title": "Lipid Profile Review & Medical Referral If Needed",
        "desc": "Xanthelasma can indicate elevated blood cholesterol. Dr. Parmar reviews recent lipid results and recommends a physician consultation if not already investigated, as correcting cholesterol can slow recurrence."
      },
      {
        "step": "02",
        "title": "Lesion Size & Eyelid Proximity Assessment",
        "desc": "The size, depth, number of lesions, and proximity to the eyelid margin and lacrimal system are carefully mapped. Very close proximity to the eye margin may warrant ophthalmology referral for treatment."
      },
      {
        "step": "03",
        "title": "Removal Under Topical / Local Anaesthetic",
        "desc": "Appropriate removal method (radiofrequency, chemical trichloroacetic acid, or surgical excision for larger lesions) is selected. The periocular area is treated with extreme care given the delicate eyelid anatomy."
      },
      {
        "step": "04",
        "title": "Post-Procedure Wound Care & Recurrence Monitoring",
        "desc": "The treated area is kept clean and moist. Recurrence of xanthelasma is common without underlying lipid control. Dr. Parmar advises on the importance of ongoing cardiovascular management."
      }
    ],
    "faqs": [
      {
        "q": "Does xanthelasma always indicate high cholesterol?",
        "a": "Not always. Approximately 50% of patients with xanthelasma have normal cholesterol levels (a condition called normolipidaemic xanthelasma). However, xanthelasma is still associated with an increased cardiovascular risk even in this group. A lipid profile is recommended for all patients, regardless of known cholesterol levels."
      },
      {
        "q": "Will the xanthelasma come back after removal?",
        "a": "Recurrence rates after all treatment methods range from 20–60% over several years, particularly if underlying lipid abnormalities are not managed. Controlling cholesterol through diet, lifestyle, and medication (when prescribed by your physician) is the most effective way to slow or prevent recurrence."
      },
      {
        "q": "Is the treatment painful given how close to the eye it is?",
        "a": "The eyelid skin is very thin and sensitive. Topical and local anaesthetic is used to minimise discomfort. The eye itself is protected throughout the procedure. Post-procedure redness and mild swelling around the treated area resolve within 5–7 days. Dr. Parmar takes particular care with the delicate periocular anatomy."
      }
    ]
  },
  {
    "slug": "ozone-high-frequency-facial",
    "title": "Ozone High-Frequency Facial",
    "h1": "Ozone High-Frequency Facial in Vadodara",
    "metaTitle": "Ozone High-Frequency Facial in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Facial treatment incorporating high-frequency equipment and an LED mask, according to the protocol offered. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "aesthetics",
    "department": "Facial Aesthetics & Cosmetology",
    "category": "General Care",
    "shortDescription": "Facial treatment incorporating high-frequency equipment and an LED mask, according to the protocol offered.",
    "clinicalDetail": "The clinic can explain its exact protocol, equipment, suitability screening, risks, and aftercare during consultation.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist in Facial Aesthetics & Cosmetology (BDS, MDS, FFAC)",
      "bio": "Dr. Jinal Parmar completed her Fellowship in Facial Aesthetics and Cosmetology (FFAC), delivering evidence-based clinical facial rejuvenation and autologous PRP therapies."
    },
    "steps": [
      {
        "step": "01",
        "title": "Skin Consultation & Contraindication Screening",
        "desc": "Active skin conditions, pacemakers, pregnancy, metal implants near the face, and epilepsy are screened as contraindications before high-frequency treatment is offered."
      },
      {
        "step": "02",
        "title": "Cleansing & Skin Preparation",
        "desc": "The face is double-cleansed to remove makeup, SPF, and sebum. No conductive serums are applied prior to the high-frequency step, as this affects conductivity and comfort."
      },
      {
        "step": "03",
        "title": "High-Frequency Application",
        "desc": "The glass electrode is passed over the skin, generating ozone which has antimicrobial properties beneficial for acne-prone skin, while the gentle current stimulates circulation and aids product penetration."
      },
      {
        "step": "04",
        "title": "LED Mask & Hydrating Finish",
        "desc": "An LED mask (red light for anti-ageing stimulation, blue for acne control) is applied for the prescribed duration. The session concludes with a targeted serum and SPF to protect and nourish the refreshed skin."
      }
    ],
    "faqs": [
      {
        "q": "What skin concerns does an ozone high-frequency facial address?",
        "a": "High-frequency treatment is primarily beneficial for acne-prone and oily skin, as the ozone generated has antimicrobial properties that target acne-causing bacteria (P. acnes). It also stimulates circulation, which can aid product penetration and give a temporary improvement in skin radiance. It is not a treatment for deep wrinkles or significant skin laxity."
      },
      {
        "q": "How often should I have this facial?",
        "a": "For active acne, a course of 4–6 sessions spaced 1–2 weeks apart is typically recommended, followed by monthly maintenance. For general skin maintenance, one session monthly is usually sufficient. Dr. Parmar recommends a protocol tailored to your specific skin goals."
      },
      {
        "q": "Is the ozone smell safe to breathe during the facial?",
        "a": "The ozone generated by high-frequency devices is very localised and in very small concentrations — far below any safety threshold. The characteristic 'electric' smell is normal and brief. The treatment is performed in a well-ventilated room and poses no respiratory risk in the quantities produced during a facial."
      }
    ]
  },
  {
    "slug": "plasma-skin-tightening",
    "title": "Plasma Skin Tightening",
    "h1": "Plasma Skin Tightening in Vadodara",
    "metaTitle": "Plasma Skin Tightening in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Skin-tightening treatment assessment and discussion of suitable options. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "aesthetics",
    "department": "Facial Aesthetics & Cosmetology",
    "category": "General Care",
    "shortDescription": "Skin-tightening treatment assessment and discussion of suitable options.",
    "clinicalDetail": "Consultation covers the device and technique used, skin suitability, risks, aftercare, and other available options.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist in Facial Aesthetics & Cosmetology (BDS, MDS, FFAC)",
      "bio": "Dr. Jinal Parmar completed her Fellowship in Facial Aesthetics and Cosmetology (FFAC), delivering evidence-based clinical facial rejuvenation and autologous PRP therapies."
    },
    "steps": [
      {
        "step": "01",
        "title": "Skin Laxity Assessment & Zone Mapping",
        "desc": "Areas of skin laxity are assessed for treatment candidacy. Degree of sagging, skin thickness, and underlying tissue architecture determine which zones will benefit most from plasma tightening."
      },
      {
        "step": "02",
        "title": "Topical Anaesthetic Application",
        "desc": "Topical anaesthetic cream is applied 45–60 minutes before the procedure to minimise discomfort during the treatment, particularly over sensitive areas such as the periocular and perioral zones."
      },
      {
        "step": "03",
        "title": "Controlled Plasma Delivery",
        "desc": "The plasma pen delivers targeted energy to the superficial skin, causing controlled sublimation and contraction of the skin without cutting. Small 'dot' patterns are placed systematically in the treatment zone."
      },
      {
        "step": "04",
        "title": "Aftercare, Downtime Management & SPF Protocol",
        "desc": "Carbon crusts form at each treatment point and must not be picked — they fall off naturally within 5–10 days. Strict sun avoidance and SPF 50+ are essential to prevent PIH, particularly in Indian skin. Final results develop over 6–12 weeks as collagen remodels."
      }
    ],
    "faqs": [
      {
        "q": "How long does the skin tightening result last?",
        "a": "Plasma skin tightening stimulates collagen remodelling, which continues to improve skin tightness for up to 3 months after the procedure. Results typically last 1–3 years depending on age, skin quality, sun exposure, and lifestyle. Maintenance sessions can extend the result. The procedure does not stop the natural ageing process."
      },
      {
        "q": "What is the downtime, and will I have visible marks?",
        "a": "Small brown carbon crusts (dots) appear at each plasma delivery point and are visible for 5–10 days. The face may also be mildly swollen for 2–3 days. Social downtime is typically 5–7 days. Redness may persist for 2–4 weeks. These are normal parts of the healing process, not complications."
      },
      {
        "q": "Is plasma skin tightening suitable for all skin tones?",
        "a": "Plasma treatment carries a risk of post-inflammatory hyperpigmentation (PIH) in darker skin tones (Fitzpatrick IV and above, common in India). Dr. Parmar takes a conservative, test-patch approach and may recommend pre-treatment skin preparation to reduce this risk. Very dark skin tones may be better suited to alternative tightening methods."
      }
    ]
  },
  {
    "slug": "chemical-peel",
    "title": "Chemical Peel",
    "h1": "Chemical Peel in Vadodara",
    "metaTitle": "Chemical Peel Vadodara | Dr. Jinal Parmar | PARIKSHIT CLINIC",
    "metaDescription": "Skin exfoliation treatment selected according to skin type and concerns. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "aesthetics",
    "department": "Facial Aesthetics & Cosmetology",
    "category": "General Care",
    "shortDescription": "Skin exfoliation treatment selected according to skin type and concerns.",
    "clinicalDetail": "Selection considers skin type, concern, and history; the clinician explains preparation, aftercare, recovery, and possible reactions.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist in Facial Aesthetics & Cosmetology (BDS, MDS, FFAC)",
      "bio": "Dr. Jinal Parmar completed her Fellowship in Facial Aesthetics and Cosmetology (FFAC), delivering evidence-based clinical facial rejuvenation and autologous PRP therapies."
    },
    "steps": [
      {
        "step": "01",
        "title": "Fitzpatrick Skin Typing & Peel Selection",
        "desc": "Skin type, active concerns (pigmentation, acne, texture, fine lines), sensitivity, and use of retinoids or acids at home are reviewed to select the appropriate peel type (superficial, medium) and concentration for your skin."
      },
      {
        "step": "02",
        "title": "Skin Preparation (Pre-Peel Protocol)",
        "desc": "For medium-depth peels, a 2–4 week pre-peel home regimen using glycolic acid or hydroquinone primes skin, ensures even peel penetration, and reduces the risk of post-inflammatory hyperpigmentation."
      },
      {
        "step": "03",
        "title": "Controlled Peel Application",
        "desc": "The peel solution is applied evenly using a fan brush. Neutralisation timing is controlled precisely. Any frosting or significant erythema is monitored and neutralised appropriately to achieve even results."
      },
      {
        "step": "04",
        "title": "Post-Peel Barrier Care & Sun Protection",
        "desc": "A barrier repair moisturiser and strict SPF 50+ sunscreen are applied and must be used daily. Peeling skin is not to be manually removed. Treated skin requires up to 7 days to settle depending on peel depth."
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between a superficial, medium, and deep chemical peel?",
        "a": "Superficial peels (glycolic, lactic, mandelic acid) exfoliate only the outer dead skin layer with minimal to no downtime — suitable for mild pigmentation and refreshing dull skin. Medium-depth peels (TCA) penetrate to the upper dermis and treat moderate pigmentation, acne scarring, and fine lines with 5–7 days peeling. Deep peels are rarely used in Indian skin due to PIH risk."
      },
      {
        "q": "My skin is quite dark — can I safely have a chemical peel?",
        "a": "Yes, with appropriate selection. Superficial peels (mandelic, lactic acid) are safer for darker Indian skin tones. Medium-depth TCA peels require careful pre-treatment and conservative application. Dr. Parmar selects only peel types with a proven safety profile for your Fitzpatrick type and avoids aggressive concentrations that increase PIH risk."
      },
      {
        "q": "How many peels will I need and how far apart?",
        "a": "A course of 4–6 superficial peels spaced 2–4 weeks apart is typical for pigmentation or acne treatment. Medium-depth peels may achieve the same result in fewer sessions. Maintenance peels are recommended every 1–3 months thereafter to sustain results. Dr. Parmar reviews skin response after each session before proceeding."
      }
    ]
  },
  {
    "slug": "hydrafacial-treatment",
    "title": "HydraFacial Treatment",
    "h1": "HydraFacial Treatment in Vadodara",
    "metaTitle": "HydraFacial Treatment in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Facial cleansing, exfoliation and hydration according to the protocol offered. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "aesthetics",
    "department": "Facial Aesthetics & Cosmetology",
    "category": "General Care",
    "shortDescription": "Facial cleansing, exfoliation and hydration according to the protocol offered.",
    "clinicalDetail": "The clinic can explain the products and steps included, suitability, possible reactions, and aftercare for your skin.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist in Facial Aesthetics & Cosmetology (BDS, MDS, FFAC)",
      "bio": "Dr. Jinal Parmar completed her Fellowship in Facial Aesthetics and Cosmetology (FFAC), delivering evidence-based clinical facial rejuvenation and autologous PRP therapies."
    },
    "steps": [
      {
        "step": "01",
        "title": "Vortex Cleansing & Exfoliation",
        "desc": "The HydraFacial vortex tip simultaneously cleanses and exfoliates the skin surface, dislodging dead cells and sebum without manual scrubbing, leaving skin primed for deeper extraction."
      },
      {
        "step": "02",
        "title": "Glycolic & Salicylic Acid Loosening",
        "desc": "A mild glycolic and salicylic peel solution is applied briefly to loosen blackheads and congestion within pores, making extraction significantly more effective and comfortable than manual squeezing."
      },
      {
        "step": "03",
        "title": "Painless Vortex Extraction",
        "desc": "Automated vortex suction extracts pore congestion into a waste chamber, visibly removing blackheads without the redness and irritation associated with manual extraction."
      },
      {
        "step": "04",
        "title": "Targeted Serum Infusion",
        "desc": "Customised serums (hyaluronic acid, peptides, antioxidants, or growth factors) are infused under low-level light at the conclusion of treatment, delivering actives deeper than topical application alone. No downtime — makeup can be applied immediately."
      }
    ],
    "faqs": [
      {
        "q": "What is the difference between a HydraFacial and a regular facial?",
        "a": "A regular facial relies largely on manual techniques and topical products. HydraFacial uses a patented vortex tip system that combines cleansing, exfoliation, extraction, and serum delivery in a controlled, automated sequence — making it more consistent, more hygienic, and more effective for pore extraction and hydration delivery than a standard manual facial."
      },
      {
        "q": "Is there any downtime after a HydraFacial?",
        "a": "No. This is one of the most popular aspects of HydraFacial — there is essentially no downtime. Skin may appear slightly pink immediately after, which settles within a few hours. You can return to work or social engagements on the same day and apply makeup if desired."
      },
      {
        "q": "How often should I have a HydraFacial for the best results?",
        "a": "For general skin maintenance and hydration, one session monthly is ideal, as it aligns with the skin's natural cellular turnover cycle. For specific concerns such as congested pores, dull skin, or mild pigmentation, an initial course of 3 monthly sessions followed by maintenance is recommended. Dr. Parmar customises the serum blend for your specific skin goals each session."
      }
    ]
  },
  {
    "slug": "vampire-facial-microneedling",
    "title": "Vampire Facial (Microneedling)",
    "h1": "Vampire Facial (Microneedling) in Vadodara",
    "metaTitle": "Vampire Facial (Microneedling) in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Microneedling-based facial treatment; confirm the exact protocol offered at the clinic. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "aesthetics",
    "department": "Facial Aesthetics & Cosmetology",
    "category": "General Care",
    "shortDescription": "Microneedling-based facial treatment; confirm the exact protocol offered at the clinic.",
    "clinicalDetail": "Consultation explains whether microneedling or PRP is included, the exact protocol, suitability, risks, recovery, and aftercare.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist in Facial Aesthetics & Cosmetology (BDS, MDS, FFAC)",
      "bio": "Dr. Jinal Parmar completed her Fellowship in Facial Aesthetics and Cosmetology (FFAC), delivering evidence-based clinical facial rejuvenation and autologous PRP therapies."
    },
    "steps": [
      {
        "step": "01",
        "title": "Medical Microneedling Assessment",
        "desc": "Skin concerns, depth of scarring or pigmentation, skin sensitivity, and contraindications (active acne, infection, recent retinoid use, blood disorders) are reviewed before treatment is planned."
      },
      {
        "step": "02",
        "title": "Topical Anaesthetic Application (45–60 Minutes)",
        "desc": "Topical anaesthetic cream is applied under occlusion for 45–60 minutes to ensure the microneedling session is comfortable, particularly for deeper needle depths targeting acne scars."
      },
      {
        "step": "03",
        "title": "Controlled Microneedling Over Treatment Zones",
        "desc": "A sterile medical-grade microneedling device creates precise microchannels at a calibrated depth across the treatment area, triggering controlled wound healing and collagen induction."
      },
      {
        "step": "04",
        "title": "PRP or Growth Factor Serum Infusion",
        "desc": "Platelet-rich plasma (from your own blood) or growth factor serums are applied immediately after needling, penetrating through the microchannels to deliver concentrated regenerative factors deep into the dermis."
      }
    ],
    "faqs": [
      {
        "q": "What is the 'vampire' aspect of a vampire facial?",
        "a": "The 'vampire facial' name refers to the use of your own Platelet-Rich Plasma (PRP), obtained from a small blood draw, which is applied to the skin during or after microneedling. PRP contains concentrated growth factors that stimulate collagen production and accelerate healing. Some protocols apply PRP without microneedling — the exact protocol at PARIKSHIT CLINIC is confirmed during consultation."
      },
      {
        "q": "How many microneedling sessions do I need for acne scars?",
        "a": "Acne scarring typically requires 3–6 sessions spaced 4–6 weeks apart. The number depends on scar depth, type (atrophic ice-pick vs. rolling vs. boxcar), and skin response. Improvement is progressive and continues for 3–6 months after the final session as collagen remodels. Deeper scars may require combination with other modalities."
      },
      {
        "q": "My face is red after the treatment — is this normal?",
        "a": "Yes. Post-microneedling erythema (redness), similar to a mild sunburn, is a normal and expected response lasting 24–48 hours. Pinpoint bleeding during the procedure is also normal. Social downtime is typically 1–2 days. Avoid makeup, active skincare ingredients, and sun exposure for the first 48 hours after treatment."
      }
    ]
  },
  {
    "slug": "face-prp-treatment",
    "title": "Face PRP Treatment",
    "h1": "Face PRP Treatment in Vadodara",
    "metaTitle": "Face PRP Treatment in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Facial platelet-rich plasma treatment following a suitability assessment. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "aesthetics",
    "department": "Facial Aesthetics & Cosmetology",
    "category": "General Care",
    "shortDescription": "Facial platelet-rich plasma treatment following a suitability assessment.",
    "clinicalDetail": "The practitioner explains the preparation and application process, suitability, alternatives, risks, and aftercare.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist in Facial Aesthetics & Cosmetology (BDS, MDS, FFAC)",
      "bio": "Dr. Jinal Parmar completed her Fellowship in Facial Aesthetics and Cosmetology (FFAC), delivering evidence-based clinical facial rejuvenation and autologous PRP therapies."
    },
    "steps": [
      {
        "step": "01",
        "title": "Medical History & Blood Disorder Screening",
        "desc": "PRP is derived from your own blood. Platelet count, clotting disorders, blood-thinning medications, and active skin infections are screened before proceeding, as these affect PRP quality and safety."
      },
      {
        "step": "02",
        "title": "Blood Draw & PRP Processing",
        "desc": "A small blood sample (15–20 mL) is drawn and centrifuged to separate and concentrate platelets 3–5 times above baseline blood concentration, activating growth factors for skin regeneration."
      },
      {
        "step": "03",
        "title": "PRP Delivery — Topical or Injected",
        "desc": "PRP is applied either topically following microneedling (to allow penetration) or injected intradermally into targeted areas such as under-eye hollows, nasolabial folds, or areas of volume loss and dullness."
      },
      {
        "step": "04",
        "title": "Aftercare, Redness Management & Treatment Spacing",
        "desc": "Mild redness and swelling settle within 24–48 hours. Sun protection is essential. Optimal results require 3 sessions spaced 4–6 weeks apart, with annual maintenance sessions to sustain collagen stimulation."
      }
    ],
    "faqs": [
      {
        "q": "What specific facial concerns does PRP treat?",
        "a": "Facial PRP is used for skin texture improvement, reducing fine lines and dullness, improving under-eye dark circles and hollowing caused by volume loss, and stimulating skin rejuvenation in areas showing early ageing changes. It is not effective for severe deep wrinkles, significant skin sagging, or substantial volume deficits, which may be better addressed with other treatments."
      },
      {
        "q": "Is facial PRP safe — am I allergic to my own blood?",
        "a": "PRP is derived from your own blood, making it autologous — meaning allergic reaction or rejection is impossible. It is one of the safest regenerative treatments available. The main risks are minor: temporary bruising at the injection site and very rarely infection (extremely rare with proper technique and sterile preparation)."
      },
      {
        "q": "How soon will I see results after facial PRP?",
        "a": "PRP stimulates gradual collagen production rather than delivering immediate volume. Initial skin glow improvements may be seen within 2–4 weeks. Textural improvements and fine line reduction develop progressively over 2–3 months as new collagen matures. Full results of a 3-session course are typically evaluated at 3 months after the last session."
      }
    ]
  },
  {
    "slug": "hair-prp-treatment",
    "title": "Hair PRP Treatment",
    "h1": "Hair PRP Treatment in Vadodara",
    "metaTitle": "Hair PRP Treatment in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Scalp PRP treatment assessment for selected hair-related concerns. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "aesthetics",
    "department": "Facial Aesthetics & Cosmetology",
    "category": "General Care",
    "shortDescription": "Scalp PRP treatment assessment for selected hair-related concerns.",
    "clinicalDetail": "Consultation reviews scalp concerns and alternatives, and explains the protocol, follow-up, expected course, and limits.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist in Facial Aesthetics & Cosmetology (BDS, MDS, FFAC)",
      "bio": "Dr. Jinal Parmar completed her Fellowship in Facial Aesthetics and Cosmetology (FFAC), delivering evidence-based clinical facial rejuvenation and autologous PRP therapies."
    },
    "steps": [
      {
        "step": "01",
        "title": "Scalp & Hair Loss Pattern Assessment",
        "desc": "The pattern of hair loss (androgenetic, diffuse, alopecia areata), scalp health, miniaturisation of hair follicles, and suitability for PRP are assessed. A trichoscopy evaluation may be recommended."
      },
      {
        "step": "02",
        "title": "Blood Draw & PRP Concentration",
        "desc": "Blood is drawn and centrifuged to produce platelet-rich plasma concentrated with PDGF, VEGF, and other growth factors that stimulate the anagen (growth) phase of dormant or miniaturising hair follicles."
      },
      {
        "step": "03",
        "title": "Scalp Microneedling & PRP Injection",
        "desc": "The scalp is pre-treated with microneedling to enhance PRP penetration, then PRP is injected intradermally across the thinning zone in a grid pattern, delivering growth factors directly to the follicle level."
      },
      {
        "step": "04",
        "title": "Treatment Course & Response Monitoring",
        "desc": "An initial course of 3–4 sessions spaced 4 weeks apart is standard. Hair density photographs are taken at baseline and at 3 months post-course to objectively assess response. Maintenance every 4–6 months maintains gains."
      }
    ],
    "faqs": [
      {
        "q": "Does hair PRP work for male pattern baldness?",
        "a": "Hair PRP has the most evidence for androgenetic alopecia (male and female pattern hair loss) in areas where follicles are miniaturising but not yet completely lost. It works best in early to moderate hair loss. Completely bald areas with no follicular units remaining will not respond to PRP, as there are no follicles to stimulate."
      },
      {
        "q": "How many sessions will I need and how long before I see results?",
        "a": "An initial course of 3–4 sessions spaced monthly is recommended. Hair growth is slow by nature — results take 3–6 months to become visibly apparent as dormant follicles re-enter the growth phase. Photographs taken at baseline and 3 months provide objective comparison. Annual maintenance sessions help sustain results long-term."
      },
      {
        "q": "Can I use hair PRP alongside other hair loss treatments like minoxidil?",
        "a": "Yes. PRP and minoxidil work through different mechanisms and are complementary. PRP stimulates follicular activity from within, while minoxidil prolongs the anagen phase via topical application. Many patients use both simultaneously for synergistic benefit. Dr. Parmar reviews all existing hair loss treatments at consultation."
      }
    ]
  },
  {
    "slug": "permanent-hair-reduction",
    "title": "Permanent Hair Reduction",
    "h1": "Permanent Hair Reduction in Vadodara",
    "metaTitle": "Permanent Hair Reduction in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Hair reduction treatment using the technology available at the clinic. Results vary by individual. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "aesthetics",
    "department": "Facial Aesthetics & Cosmetology",
    "category": "General Care",
    "shortDescription": "Hair reduction treatment using the technology available at the clinic. Results vary by individual.",
    "clinicalDetail": "The clinician discusses the device used, skin and hair characteristics, preparation, likely treatment schedule, and variable results.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist in Facial Aesthetics & Cosmetology (BDS, MDS, FFAC)",
      "bio": "Dr. Jinal Parmar completed her Fellowship in Facial Aesthetics and Cosmetology (FFAC), delivering evidence-based clinical facial rejuvenation and autologous PRP therapies."
    },
    "steps": [
      {
        "step": "01",
        "title": "Hair & Skin Assessment for Safe Treatment",
        "desc": "Skin type (Fitzpatrick classification), hair colour and thickness, hormonal status, and any recent sun exposure are reviewed. Contraindications including active tanning, certain medications, and skin conditions are screened."
      },
      {
        "step": "02",
        "title": "Treatment Zone Preparation",
        "desc": "The area is shaved 24 hours before treatment (not waxed, as the follicle must be intact). No topical anaesthetic is usually required, though it may be applied for sensitive areas such as the upper lip."
      },
      {
        "step": "03",
        "title": "Device Application Over Treatment Area",
        "desc": "Energy is delivered to selectively target melanin in hair follicles. A cooling system protects the skin surface. Pulses are applied systematically across the full treatment zone to ensure even coverage."
      },
      {
        "step": "04",
        "title": "Session Spacing & Long-Term Maintenance",
        "desc": "Multiple sessions are required because treatment only affects hair in the active growth (anagen) phase. Sessions are spaced 4–8 weeks apart for the face and 6–10 weeks for the body to target successive hair cycles."
      }
    ],
    "faqs": [
      {
        "q": "How many sessions are needed for permanent hair reduction?",
        "a": "Most patients require 6–8 sessions spaced 4–8 weeks apart for the face and upper body, and up to 8–10 sessions for lower body areas. After the initial course, most patients see 70–90% reduction in hair density. 'Permanent reduction' is the correct regulatory term, as a small proportion of hair typically regrows at finer texture and lighter colour over years."
      },
      {
        "q": "Is treatment safe for Indian skin tones?",
        "a": "Yes, with the right device and settings. Darker Indian skin tones require devices with longer wavelengths (Nd:YAG 1064 nm) or diode laser systems at conservative fluences. Devices that work primarily on lighter skin are unsafe for darker skin tones as they may cause blistering or PIH. Dr. Parmar uses appropriate technology and settings for your skin type."
      },
      {
        "q": "Does the treatment hurt? Can I apply makeup immediately after?",
        "a": "Most patients describe the sensation as a rubber band snap with each pulse. Cooling built into the handpiece significantly reduces discomfort. The area may appear red and mildly swollen for a few hours after treatment. Makeup can usually be applied the next day, though the treated area should be kept cool and out of direct sun."
      }
    ]
  },
  {
    "slug": "permanent-eyebrow-microblading",
    "title": "Permanent Eyebrow Microblading",
    "h1": "Permanent Eyebrow Microblading in Vadodara",
    "metaTitle": "Permanent Eyebrow Microblading in Vadodara | PARIKSHIT CLINIC",
    "metaDescription": "Cosmetic eyebrow enhancement using a microblading technique. Expert care by Dr. Jinal Parmar at PARIKSHIT CLINIC, Vadodara. Request a consultation.",
    "deptId": "aesthetics",
    "department": "Facial Aesthetics & Cosmetology",
    "category": "General Care",
    "shortDescription": "Cosmetic eyebrow enhancement using a microblading technique.",
    "clinicalDetail": "Consultation covers brow design, pigment, hygiene, healing, aftercare, touch-up planning, and suitability.",
    "specialist": {
      "name": "Dr. Jinal Parmar",
      "qualifications": "BDS, MDS (Periodontics), FFAC",
      "title": "Specialist in Facial Aesthetics & Cosmetology (BDS, MDS, FFAC)",
      "bio": "Dr. Jinal Parmar completed her Fellowship in Facial Aesthetics and Cosmetology (FFAC), delivering evidence-based clinical facial rejuvenation and autologous PRP therapies."
    },
    "steps": [
      {
        "step": "01",
        "title": "Brow Design, Shape & Pigment Consultation",
        "desc": "Eyebrow architecture is mapped based on facial symmetry, bone structure, and your preferences. Pigment shade is selected to complement your natural hair and skin tone. The planned shape is drawn on first for your approval before any procedure begins."
      },
      {
        "step": "02",
        "title": "Topical Anaesthetic Application",
        "desc": "Numbing cream is applied to the brow area and left for 30–45 minutes to ensure the microblading procedure is comfortable. A secondary topical anaesthetic is applied to the area after the first passes."
      },
      {
        "step": "03",
        "title": "Microblading Hair Stroke Creation",
        "desc": "A sterile microblading hand tool creates fine, controlled incisions in the skin that mimic natural hair strokes. Medical-grade pigment is deposited into the superficial dermis, creating realistic-looking brow hair."
      },
      {
        "step": "04",
        "title": "Initial Healing, Touch-Up & Longevity Care",
        "desc": "Brows appear darker immediately and fade 20–40% during healing over 4–6 weeks. A touch-up session at 6–8 weeks perfects colour and fills any areas that healed unevenly. Results last 1–2 years before a colour boost is needed."
      }
    ],
    "faqs": [
      {
        "q": "Is microblading the same as a tattoo? Is it truly permanent?",
        "a": "Microblading is a form of semi-permanent tattooing where pigment is deposited more superficially than traditional tattoos (into the dermis rather than deep subcutaneous tissue). Because of this, the colour gradually fades over 1–2 years as the skin naturally exfoliates. This is desirable — it allows adaptation to changing brow trends and facial changes over time."
      },
      {
        "q": "My skin is oily — will microblading work for me?",
        "a": "Oily skin presents a challenge for microblading, as sebum secretion can cause the pigment to blur and fade faster, producing a less defined hair stroke appearance. Powder shading (ombré brow technique) often performs better on oily skin. Dr. Parmar assesses your skin type and may recommend the most suitable technique — microblading, combination brow, or powder effect."
      },
      {
        "q": "What is the healing process like, and when can I wear makeup?",
        "a": "For the first 7–10 days, brows should be kept dry and free of makeup and skincare products. The area may scab lightly — picking or wetting scabs causes uneven pigment loss. After full healing at 4–6 weeks, the final colour settles. The touch-up appointment at 6–8 weeks is essential to achieve optimal results and is included as standard."
      }
    ]
  }
];

export const SERVICES_BY_SLUG: Record<string, ServiceDetail> = Object.fromEntries(
  ALL_SERVICES.map((s) => [s.slug, s])
);

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_BY_SLUG[slug];
}

export function getRelatedServices(currentSlug: string, count = 4): ServiceDetail[] {
  const current = SERVICES_BY_SLUG[currentSlug];
  if (!current) return ALL_SERVICES.slice(0, count);

  const sameDept = ALL_SERVICES.filter((s) => s.deptId === current.deptId);
  const currentIndex = sameDept.findIndex((s) => s.slug === currentSlug);
  if (currentIndex === -1 || sameDept.length <= 1) return [];

  // Rotate around the current service so every page distributes internal links evenly
  const rotated = [
    ...sameDept.slice(currentIndex + 1),
    ...sameDept.slice(0, currentIndex),
  ];

  // Prioritize same-category procedures first while preserving deterministic rotation
  const sameCategory = rotated.filter((s) => s.category === current.category);
  const otherCategory = rotated.filter((s) => s.category !== current.category);

  return [...sameCategory, ...otherCategory].slice(0, count);
}
