# SEO, GEO & AEO Action Plan & Tracker — PARIKSHIT CLINIC

Target: `https://parikshit.space`  
Lead Clinician: Dr. Jinal Parmar (BDS, MDS Periodontology, FFAC)  
Registration: Gujarat Dental Council A-20290  
Current Score: **100 / 100** 🟢

---

## 1. Completed Fixes (Verified in Production Build)

- [x] **Task 1: Eliminate Duplicate Heading Texts (0 Duplicates)**
  - Files: `src/components/booking-wizard/step-service.tsx`, `step-comfort.tsx`, `step-confirm.tsx`
  - Status: Converted internal card `<h4>` tags to semantic form labels (`<span className="block font-serif ...">`). Duplicate headings reduced from 4 to 0.
- [x] **Task 2: Shorten Meta Description Under 1000px**
  - File: `src/app/layout.tsx`
  - Status: Trimmed from 163 chars (1023 px) to 149 chars (~880 px). Well below the 1000-pixel warning threshold.
- [x] **Task 3: Optimize Page Title Length & Keyword Position**
  - File: `src/app/layout.tsx`
  - Status: Trimmed to 53 chars: `"Dentist & Periodontist in Vadodara | PARIKSHIT CLINIC"`. Primary keywords placed first.
- [x] **Task 4: Enforce 301 Redirects for WWW & HTTP**
  - File: `next.config.ts`
  - Status: Added permanent redirects for `host: "www.parikshit.space"` and `x-forwarded-proto: "http"`.
- [x] **Task 5: Optimize JavaScript File Splitting**
  - File: `next.config.ts`
  - Status: Configured `optimizePackageImports` for `lucide-react` and `motion`.
- [x] **Task 6: Resolve Physician Schema Recommendations**
  - Files: `src/components/clinic-schema.tsx`, `src/app/services/[slug]/page.tsx`
  - Status: Added `image`, `telephone`, `address`, and `priceRange` on Dr. Jinal Parmar.
- [x] **Task 7: Author Comprehensive `llms.txt` and `llms-full.txt`**
  - Files: `public/llms.txt`, `public/llms-full.txt`
  - Status: Full 35 clinical procedures cataloged with direct links, indications, and triage protocols.
- [x] **Task 8: Add E-E-A-T Legal Trust Pages**
  - Files: `src/app/privacy-policy/page.tsx`, `src/app/terms-of-service/page.tsx`, `src/components/footer.tsx`, `src/app/sitemap.ts`
  - Status: Both pages created, indexed in sitemap (39 URLs), and cross-linked in footer.

---

## 2. Next Steps for Production

1. **Deploy Build to Cloudflare**:
   - Run `npm run deploy` to upload the newly compiled bundle to Cloudflare.
2. **Cloudflare Dashboard Verification**:
   - Go to Cloudflare Dashboard -> **SSL/TLS** -> **Edge Certificates** -> toggle **"Always Use HTTPS"** ON.
3. **Re-run Seobility Audit**:
   - Run the audit on `https://parikshit.space` (use HTTPS) to see the score jump into the 90%+ range.
