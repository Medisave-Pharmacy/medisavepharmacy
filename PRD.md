# Product Requirements Document (PRD)
## Medisave Pharmacy Website

| Field | Detail |
|-------|--------|
| **Product** | Medisave Pharmacy Corporate Website |
| **Company** | Medisave Insaf Sdn Bhd |
| **Document Version** | 1.0 |
| **Date** | 9 August 2026 |
| **Status** | MVP Built — Pre-Launch |
| **Owner** | Medisave Insaf Sdn Bhd |
| **Maintainer (v1)** | Internal developer |

---

## 1. Executive Summary

Medisave Pharmacy currently relies on Facebook as its only online presence. This project delivers a professional, mobile-first company website to improve local discoverability, establish credibility, and provide essential business information (location, hours, services, contact) to potential customers searching for a pharmacy in the Batu 4½ Jalan Ipoh, Kuala Lumpur area.

**Phase 1 (MVP)** is an informational brochure website. **Phase 2+** may add online ordering, delivery, Bahasa Malaysia support, and a CMS for non-technical staff.

---

## 2. Problem Statement

| Problem | Impact |
|---------|--------|
| No dedicated website | Pharmacy does not appear in web search results beyond Facebook |
| Limited online credibility | Customers cannot easily verify hours, location, or services |
| Contact friction | No central place for phone, WhatsApp, email, and directions |
| Single-channel marketing | Over-reliance on Facebook limits reach and SEO |

---

## 3. Goals & Objectives

### Primary Goals
1. **Discoverability** — Appear when users search for pharmacies near Jalan Ipoh / Sultan Azlan Shah, KL
2. **Information** — Clearly communicate who Medisave Pharmacy is, what they offer, and how to visit/contact them
3. **Trust** — Present a professional brand aligned with Medisave Insaf Sdn Bhd
4. **Mobile access** — Optimise for phone users (primary traffic source)

### Success Metrics (Post-Launch)

| Metric | Target (3 months) | How to Measure |
|--------|-------------------|----------------|
| Google Business Profile views | Baseline + growth | Google Business Insights |
| Website visits | 200+ / month | Netlify Analytics or Google Analytics |
| Contact actions | 20+ / month | Click tracking on Call/WhatsApp buttons |
| Search impressions | Appear for "pharmacy Jalan Ipoh" | Google Search Console |
| Form submissions | 5+ / month | Netlify Forms dashboard |

---

## 4. Target Audience

### Primary Personas

**1. Local Resident ("Ahmad")**
- Lives or works near Batu 4½ Jalan Ipoh
- Needs a nearby pharmacy for OTC medicines or prescription collection
- Searches on Google Maps or mobile browser
- Wants: address, hours, phone, quick directions

**2. New Customer ("Sarah")**
- Heard about the pharmacy via Facebook or word of mouth
- Wants to verify legitimacy and services before visiting
- Wants: about page, services list, contact options

**3. Existing Customer ("Puan Lim")**
- Already visits the shop
- Needs to check if open (especially before public holidays)
- Wants: hours, WhatsApp contact

### Secondary Audience
- Doctors/clinics referring patients (future)
- Corporate clients (future — not in MVP scope)

---

## 5. Scope

### In Scope — MVP (Phase 1)

| Feature | Priority | Status |
|---------|----------|--------|
| Home landing page | P0 | Built |
| About Us page | P0 | Built |
| Services page | P0 | Built |
| Find Us (location + map + hours) | P0 | Built |
| Contact page (form + details) | P0 | Built |
| WhatsApp integration | P0 | Built |
| Click-to-call phone | P0 | Built |
| Facebook link | P0 | Built |
| Google Maps embed | P0 | Built |
| Mobile-first responsive design | P0 | Built |
| Brand logo & colours | P0 | Built |
| Malay tagline display | P0 | Built |
| Stock placeholder images | P1 | Built |
| Contact form (Netlify Forms) | P1 | Built |
| SEO meta tags | P1 | Built |
| Sticky mobile CTA bar | P1 | Built |

### Out of Scope — MVP

| Feature | Planned Phase |
|---------|---------------|
| Online ordering / e-commerce | Phase 2 |
| Prescription upload | Phase 2 |
| Delivery service info | Phase 2 (no delivery yet) |
| Bahasa Malaysia full site | Phase 2 |
| CMS for staff editing | Phase 2 |
| Blog / health articles | Phase 3 |
| Multi-branch support | N/A (single shop) |
| User accounts / login | Phase 3+ |
| Payment gateway | Phase 3+ |
| Live chat | Phase 3 |

---

## 6. User Stories

### Discovery & Information

| ID | As a… | I want to… | So that… | Priority |
|----|-------|------------|----------|----------|
| US-01 | Visitor | See the pharmacy name and tagline immediately | I know I'm in the right place | P0 |
| US-02 | Visitor | View opening hours | I know when I can visit | P0 |
| US-03 | Visitor | See the full address and map | I can navigate to the shop | P0 |
| US-04 | Visitor | Learn about the company | I trust this is a legitimate pharmacy | P0 |
| US-05 | Visitor | See what services are offered | I know they can help with my needs | P0 |

### Contact & Action

| ID | As a… | I want to… | So that… | Priority |
|----|-------|------------|----------|----------|
| US-06 | Visitor | Call the pharmacy with one tap | I can ask a quick question | P0 |
| US-07 | Visitor | Message via WhatsApp | I can inquire without calling | P0 |
| US-08 | Visitor | Submit a contact form | I can leave a message outside hours | P1 |
| US-09 | Visitor | Visit their Facebook page | I can see updates and promotions | P1 |
| US-10 | Mobile user | Access Call/WhatsApp/Directions from any page | I can act quickly without scrolling | P1 |

### Business Owner

| ID | As a… | I want to… | So that… | Priority |
|----|-------|------------|----------|----------|
| US-11 | Owner | Receive form submissions by email | I can respond to customer inquiries | P1 |
| US-12 | Owner | Appear in Google search | New customers can find us | P0 |
| US-13 | Developer | Deploy easily and cheaply | We stay within budget | P0 |

---

## 7. Functional Requirements

### 7.1 Navigation
- **FR-01:** Site shall have persistent header navigation on all pages: Home, About, Services, Find Us, Contact
- **FR-02:** Mobile navigation shall use a hamburger menu
- **FR-03:** Active page shall be visually highlighted in navigation
- **FR-04:** Logo in header shall link to Home

### 7.2 Home Page
- **FR-05:** Display hero section with tagline "Farmasi Kepercayaan Anda"
- **FR-06:** Display business name "Medisave Pharmacy"
- **FR-07:** Provide Call, WhatsApp, and Get Directions CTAs above the fold
- **FR-08:** Show opening hours summary strip (Mon–Fri 9–6, Sat–Sun closed)
- **FR-09:** Include About preview with link to full About page
- **FR-10:** Include Services preview (3 cards) with link to full Services page
- **FR-11:** Include embedded map preview with link to Find Us page
- **FR-12:** Include footer CTA to Contact and Facebook

### 7.3 About Page
- **FR-13:** Describe Medisave Pharmacy as operated under Medisave Insaf Sdn Bhd
- **FR-14:** List 3 value propositions: Licensed & Professional, Community Focused, Convenient Location

### 7.4 Services Page
- **FR-15:** List the following services with descriptions:
  - Prescription medicine dispensing
  - Over-the-counter (OTC) medicines
  - Health supplements & vitamins
  - Personal care & wellness products
  - Pharmacist consultation
- **FR-16:** Do not list services not currently offered (delivery, online ordering, health screening)

### 7.5 Find Us Page
- **FR-17:** Display full address:
  ```
  740, Jalan Sultan Azlan Shah
  Batu 4 1/2 Jalan Ipoh
  51200 Kuala Lumpur, Malaysia
  ```
- **FR-18:** Embed interactive Google Map
- **FR-19:** Provide "Open in Google Maps" external link
- **FR-20:** Display complete hours table including public holidays (Closed)

### 7.6 Contact Page
- **FR-21:** Display phone: +60 11-6144 3401
- **FR-22:** Display email: medipharma1@gmail.com
- **FR-23:** Display WhatsApp link: https://wa.me/601161443401
- **FR-24:** Display Facebook link: https://www.facebook.com/p/Medisave-Pharmacy-61572111764826/
- **FR-25:** Contact form fields: Name (required), Phone (required), Message (required)
- **FR-26:** Form submissions shall redirect to thank-you page on success
- **FR-27:** Form shall include honeypot spam protection

### 7.7 Footer (All Pages)
- **FR-28:** Display logo, tagline, quick links, contact info
- **FR-29:** Display copyright: "© 2026 Medisave Pharmacy. Operated by Medisave Insaf Sdn Bhd."

### 7.8 Mobile Sticky Bar
- **FR-30:** On viewports ≤767px, display fixed bottom bar with Call, WhatsApp, Directions
- **FR-31:** Sticky bar shall be hidden on desktop (≥768px)

---

## 8. Non-Functional Requirements

### Performance
- **NFR-01:** Page load time < 3 seconds on 4G mobile connection
- **NFR-02:** Images shall use lazy loading where applicable
- **NFR-03:** No build step required (static HTML for fast deploy)

### Compatibility
- **NFR-04:** Support latest 2 versions of Chrome, Safari, Firefox, Edge
- **NFR-05:** Fully functional on iOS and Android mobile browsers
- **NFR-06:** Responsive breakpoints: mobile (<768px), tablet (768–1024px), desktop (>1024px)

### Accessibility
- **NFR-07:** All images shall have alt text
- **NFR-08:** Navigation toggle shall have aria-label and aria-expanded
- **NFR-09:** Form fields shall have associated labels
- **NFR-10:** Colour contrast shall meet WCAG AA minimum

### Security & Privacy
- **NFR-11:** Site shall be served over HTTPS
- **NFR-12:** Contact form shall not collect sensitive medical data in MVP
- **NFR-13:** No prescription upload in MVP (PDPA consideration for Phase 2)

### Maintainability
- **NFR-14:** Shared CSS and JS files across all pages
- **NFR-15:** No framework dependency for MVP (plain HTML/CSS/JS)
- **NFR-16:** Code shall be readable by a junior developer

### Cost
- **NFR-17:** Hosting shall use free tier (Netlify or Vercel)
- **NFR-18:** Only paid cost shall be domain registration (~RM40–120/year)

---

## 9. Content Requirements

### Brand

| Element | Value |
|---------|-------|
| Business name | Medisave Pharmacy |
| Legal entity | Medisave Insaf Sdn Bhd |
| Tagline | Farmasi Kepercayaan Anda |
| Primary language | English |
| Tagline language | Bahasa Malaysia |

### Brand Colours

| Colour | Hex | Usage |
|--------|-----|-------|
| Medical Red | `#e4232c` | Buttons, accents, "PHARMACY" text |
| Black | `#1a1a1a` | Headings, footer, "MEDISAVE" text |
| Grey | `#6b7280` | Body secondary text |
| Light Grey | `#f3f4f6` | Section backgrounds |
| White | `#ffffff` | Page background |
| WhatsApp Green | `#25d366` | WhatsApp buttons |

### Contact Information

| Field | Value |
|-------|-------|
| Address | 740, Jalan Sultan Azlan Shah, Batu 4 1/2 Jalan Ipoh, 51200 Kuala Lumpur |
| Phone | +60 11-6144 3401 |
| Email | medipharma1@gmail.com |
| WhatsApp | +60 11-6144 3401 |
| Facebook | https://www.facebook.com/p/Medisave-Pharmacy-61572111764826/ |

### Operating Hours

| Day | Hours |
|-----|-------|
| Monday – Friday | 9:00 AM – 6:00 PM |
| Saturday | Closed |
| Sunday | Closed |
| Public Holidays | Closed |

### Assets

| Asset | Status | Notes |
|-------|--------|-------|
| Logo (PNG) | Available | Red heart + EKG, black/red text |
| Shop photos | Not available | Using Unsplash stock photos for MVP |
| Domain name | Not registered | To be purchased pre-launch |

---

## 10. Technical Architecture

### Stack (MVP)

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 (custom, mobile-first) |
| Scripting | Vanilla JavaScript |
| Fonts | Google Fonts — Inter |
| Images (MVP) | Unsplash CDN (stock) |
| Forms | Netlify Forms |
| Maps | Google Maps embed |
| Hosting | Netlify (free tier) |
| Version control | Git |

### File Structure

```
medisave-pharmacy/
├── index.html          # Home
├── about.html          # About Us
├── services.html       # Services
├── find-us.html        # Location & Hours
├── contact.html        # Contact + Form
├── thank-you.html      # Form confirmation
├── netlify.toml        # Deploy config
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # Mobile nav toggle
└── assets/
    └── logo.png        # Brand logo
```

### External Integrations

| Service | Purpose | Config Required |
|---------|---------|-----------------|
| Google Maps | Location embed & directions | None (public embed) |
| WhatsApp | Click-to-chat | Phone number in URL |
| Facebook | Social link | Page URL |
| Netlify Forms | Contact form submissions | Email notification in Netlify dashboard |
| Google Fonts | Typography | CDN link in HTML |

### Deployment Flow

```
Local development → Git push → Netlify auto-deploy → Custom domain (optional)
```

---

## 11. SEO & Local Discovery

### On-Page SEO

| Page | Title Tag |
|------|-----------|
| Home | Medisave Pharmacy \| Farmasi Kepercayaan Anda \| KL |
| About | About Us \| Medisave Pharmacy |
| Services | Pharmacy Services \| Medisave Pharmacy |
| Find Us | Location & Hours \| Medisave Pharmacy, Jalan Ipoh KL |
| Contact | Contact \| Medisave Pharmacy |

### Meta Descriptions
Each page includes a unique meta description with local keywords: "Jalan Ipoh", "Sultan Azlan Shah", "Kuala Lumpur", "pharmacy".

### Off-Page SEO (Manual Tasks)

| Task | Owner | Priority |
|------|-------|----------|
| Create/claim Google Business Profile | Owner | P0 |
| Ensure NAP consistency (Name, Address, Phone) across web, Facebook, Google | Developer | P0 |
| Submit sitemap to Google Search Console | Developer | P1 |
| Add website URL to Facebook page | Owner | P0 |

### Target Keywords

- pharmacy Jalan Ipoh
- pharmacy Sultan Azlan Shah
- Medisave Pharmacy
- farmasi Batu 4 Jalan Ipoh
- pharmacy Kuala Lumpur

---

## 12. Design Reference

**Inspiration:** [Health Lane Family Pharmacy](https://healthlane.com.my/)

**Adaptation for Medisave:**
- Use Health Lane's *professional, clean, health-focused* feel
- Do **not** replicate their full feature set (e-commerce, blog, multi-branch, team carousel)
- Simpler, single-location focused layout
- Strong mobile CTAs (Call, WhatsApp, Directions)

---

## 13. Project Timeline

### Phase 1 — MVP (Target: 2 weeks)

| Week | Tasks | Status |
|------|-------|--------|
| Week 1 | Project setup, HTML/CSS structure, Home + Find Us pages | Done |
| Week 1 | About + Services + Contact pages | Done |
| Week 2 | Logo integration, mobile polish, form setup | Done |
| Week 2 | Domain purchase, Netlify deploy, Google Business Profile | Pending |
| Week 2 | Owner review, content approval, launch | Pending |

### Phase 2 — Enhancements (Post-Launch)

| Feature | Estimated Effort |
|---------|----------------|
| Replace stock photos with real shop photos | 1 day |
| Bahasa Malaysia language toggle | 3–5 days |
| CMS setup (WordPress or Decap) for staff | 3–5 days |
| Google Analytics integration | 0.5 day |
| Privacy policy page (PDPA) | 1 day |

### Phase 3 — Growth (Future)

| Feature | Estimated Effort |
|---------|----------------|
| WhatsApp ordering flow | 1–2 weeks |
| Prescription upload + PDPA compliance | 2–3 weeks |
| Online ordering / e-commerce | 4–8 weeks |
| Blog / health tips | Ongoing |
| React migration (if needed for app features) | 2–3 weeks |

---

## 14. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Low search ranking at launch | High | Medium | Set up Google Business Profile immediately; consistent NAP |
| Form spam | Medium | Low | Honeypot field; Netlify spam filtering |
| Stock photos feel generic | Medium | Low | Replace with real photos post-launch |
| Staff cannot update content | Medium | Medium | Phase 2 CMS; developer maintains until then |
| Incorrect business info | Low | High | Owner review before launch |
| PDPA issues with contact form | Low | Medium | Only collect name/phone/message; add privacy policy in Phase 2 |

---

## 15. Acceptance Criteria (Launch Checklist)

### Must Pass Before Go-Live

- [ ] All 5 pages load correctly on mobile and desktop
- [ ] Phone link opens dialler on mobile
- [ ] WhatsApp link opens chat with correct number
- [ ] Google Map shows correct location
- [ ] All navigation links work
- [ ] Hours table is accurate (including public holidays closed)
- [ ] Contact form submits successfully and sends email notification
- [ ] Logo displays correctly in header and footer
- [ ] Facebook link opens correct page
- [ ] Owner has reviewed and approved all text content
- [ ] Domain connected (or Netlify subdomain live for testing)
- [ ] Google Business Profile created with matching details

### Nice to Have at Launch

- [ ] Real shop photos replace stock images
- [ ] Google Search Console verified
- [ ] Favicon displays in browser tab

---

## 16. Open Items & Decisions Log

| # | Item | Decision | Date |
|---|------|----------|------|
| 1 | Business name on site | Medisave Pharmacy | 9 Aug 2026 |
| 2 | Tagline | Farmasi Kepercayaan Anda (Malay only) | 9 Aug 2026 |
| 3 | Language | English only for v1 | 9 Aug 2026 |
| 4 | Hero image | Stock photo (Unsplash) for launch | 9 Aug 2026 |
| 5 | Contact form backend | Netlify Forms | 9 Aug 2026 |
| 6 | Tech stack | HTML/CSS/JS (no React for MVP) | 9 Aug 2026 |
| 7 | Hosting | Netlify free tier | 9 Aug 2026 |
| 8 | Delivery | Not offered — excluded from site | 9 Aug 2026 |
| 9 | Public holidays | Closed — listed in hours | 9 Aug 2026 |
| 10 | Domain name | Not yet chosen — pending | Open |

---

## 17. Glossary

| Term | Definition |
|------|------------|
| **CMS** | Content Management System — tool for non-developers to edit website content |
| **MVP** | Minimum Viable Product — simplest version that meets core needs |
| **NAP** | Name, Address, Phone — must be consistent across all online listings for SEO |
| **PDPA** | Personal Data Protection Act 2010 (Malaysia) — privacy law for personal data |
| **OTC** | Over-the-counter — medicines available without prescription |
| **CTA** | Call to Action — button prompting user action (Call, WhatsApp, etc.) |

---

## 18. Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Business Owner | | | |
| Developer | | | |
| Project Manager | | | |

---

*End of Document*
