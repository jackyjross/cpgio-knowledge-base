# CPGIO Knowledge Base - Next.js Migration Guide

## Executive Summary

This document outlines the path to migrating the CPGIO Knowledge Base from a React-via-CDN prototype to a production-ready Next.js application. The current incremental improvements (completed November 2025) have prepared the codebase for this migration.

## Current State (Post-Incremental Improvements)

### ✅ Completed Optimizations

1. **TypeScript-Ready Data Structure**
   - Added comprehensive JSDoc type definitions to `knowledge-base-data.js`
   - All data types documented: `Capability`, `CaseStudy`, `RFPAnswer`, `GlossaryTerm`, etc.
   - Ready for direct conversion to TypeScript interfaces

2. **Performance Optimizations**
   - Lazy loading implemented for SheetJS library (RFP Analyzer)
   - ~200KB reduction in initial page load
   - Library only loads when user uploads an Excel file

3. **SEO Foundation**
   - Comprehensive meta tags (Primary, Open Graph, Twitter Cards)
   - Semantic HTML structure
   - Proper heading hierarchy
   - Keywords optimized for eCommerce/Amazon niche

4. **Design System Foundation**
   - Well-organized CSS custom properties in `styles-modern.css`
   - 100+ design tokens already defined:
     - Colors (brand, semantic, backgrounds)
     - Typography (font sizes, line heights)
     - Spacing (xs to 3xl scale)
     - Border radius (sm to full)
     - Shadows (sm to xl)
     - Transitions (fast, base, slow)
   - Ready for direct mapping to Tailwind config

### Current Architecture

```
cpgio-knowledge-base/
├── index.html (2,100 lines)      # Single-page React app
├── knowledge-base-data.js (75 type defs + 2,800 lines data)
├── styles-modern.css (3,100 lines) # Comprehensive design system
└── README.md
```

**Tech Stack:**
- React 18 via CDN
- Babel standalone for JSX transformation
- SheetJS (lazy loaded)
- Pure CSS with custom properties
- GitHub Pages hosting

**Strengths:**
- Zero build complexity
- Any team member can edit `knowledge-base-data.js`
- Fast iteration cycle
- Works offline (after first load)

**Limitations:**
- No server-side rendering (SEO relies on client-side rendering)
- No code splitting beyond manual lazy loading
- No hot module replacement (HMR) for development
- Manual dependency management via CDN
- No TypeScript type checking at build time
- Limited performance monitoring

## Migration Target: Next.js 14+ (App Router)

### Why Next.js?

1. **SEO via Static Site Generation (SSG)**
   - Pre-render all pages at build time
   - Google indexes actual HTML, not loading states
   - Individual pages for each capability and case study

2. **Performance**
   - Automatic code splitting
   - Image optimization via `next/image`
   - Font optimization
   - Prefetching for instant navigation

3. **Developer Experience**
   - TypeScript with strict type checking
   - Hot module replacement
   - File-based routing
   - Built-in CSS/Sass support

4. **Deployment**
   - Vercel (zero-config)
   - Still works on GitHub Pages via `next export`
   - Edge functions for future API routes

### Target Architecture

```
cpgio-knowledge-base-next/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root layout
│   │   ├── page.tsx                      # Homepage
│   │   ├── capabilities/
│   │   │   ├── page.tsx                  # Capabilities list
│   │   │   └── [slug]/page.tsx           # Individual capability
│   │   ├── case-studies/
│   │   │   ├── page.tsx                  # Case studies list
│   │   │   └── [slug]/page.tsx           # Individual case study
│   │   ├── rfp-center/page.tsx           # RFP Center
│   │   ├── ai-qa/page.tsx                # AI Q&A
│   │   ├── glossary/page.tsx             # Glossary
│   │   ├── frameworks/page.tsx           # Frameworks
│   │   └── team/page.tsx                 # Team
│   ├── components/
│   │   ├── ui/                           # Base components (shadcn/ui)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── accordion.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── sidebar.tsx
│   │   │   ├── header.tsx
│   │   │   └── footer.tsx
│   │   ├── capabilities/
│   │   │   ├── capability-card.tsx
│   │   │   ├── pillar-card.tsx
│   │   │   └── kpi-badge.tsx
│   │   └── rfp/
│   │       ├── rfp-answer-box.tsx
│   │       └── copy-button.tsx
│   ├── lib/
│   │   ├── data/
│   │   │   ├── capabilities.ts           # Converted from JS
│   │   │   ├── case-studies.ts
│   │   │   ├── rfp-answers.ts
│   │   │   └── glossary.ts
│   │   ├── types/
│   │   │   └── index.ts                  # TypeScript interfaces
│   │   └── utils/
│   │       ├── search.ts
│   │       └── categorize.ts
│   ├── styles/
│   │   └── globals.css                   # Tailwind + custom properties
│   └── public/
│       ├── og-image.png
│       └── favicon.ico
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── package.json
```

## Migration Roadmap

### Phase 1: Foundation (Week 1)

**Goal:** Working Next.js app with basic routing

1. **Initialize Next.js Project**
   ```bash
   npx create-next-app@latest cpgio-knowledge-base-next --typescript --tailwind --app --no-src-dir
   cd cpgio-knowledge-base-next
   ```

2. **Install Dependencies**
   ```bash
   npm install @radix-ui/react-accordion @radix-ui/react-dialog
   npm install lucide-react  # Icon library (replacement for inline SVGs)
   npm install clsx tailwind-merge  # Utility libraries
   npm install -D @types/node @types/react
   ```

3. **Configure Tailwind with Design Tokens**
   - Map CSS custom properties to Tailwind config
   - Preserve all color scales, spacing, typography

4. **Convert Data Layer**
   - Create TypeScript interfaces from JSDoc types
   - Convert `knowledge-base-data.js` to typed TypeScript modules
   - Add Zod schema validation (optional but recommended)

**Deliverables:**
- ✅ Next.js app runs locally
- ✅ Data layer converted to TypeScript
- ✅ Tailwind configured with design tokens

### Phase 2: Core Pages (Week 2)

**Goal:** Rebuild main pages with SSG

1. **Homepage**
   - 3 journey pathways
   - 5 pillar cards with expand/collapse
   - Performance highlights
   - Process timeline

2. **Capabilities**
   - List page (grouped by pillar)
   - Individual capability pages (`/capabilities/integrated-operations`)
   - SEO meta tags per page

3. **Case Studies**
   - Accordion-style list
   - Individual case study pages (`/case-studies/baby-food-crisis`)

4. **RFP Center**
   - Search functionality
   - Copy-to-clipboard
   - No Excel upload yet (defer SheetJS complexity)

**Deliverables:**
- ✅ All main pages functional
- ✅ SEO meta tags per page
- ✅ Static generation working

### Phase 3: Interactive Features (Week 3)

**Goal:** Add client-side interactivity

1. **AI Q&A**
   - Client-side search (same logic as current)
   - Suggested questions

2. **RFP Analyzer**
   - Excel upload (SheetJS as lazy-loaded module)
   - Question extraction
   - Export functionality

3. **Glossary**
   - A-Z index
   - Search filtering

4. **Global Search**
   - Header search component
   - Grouped results dropdown

**Deliverables:**
- ✅ All interactive features working
- ✅ SheetJS lazy loading preserved
- ✅ Search optimized

### Phase 4: Polish & Deploy (Week 4)

**Goal:** Production-ready deployment

1. **Performance Optimization**
   - Image optimization
   - Bundle analysis (`@next/bundle-analyzer`)
   - Lighthouse audit (target: 90+ all metrics)

2. **Accessibility Audit**
   - WCAG AA compliance
   - Keyboard navigation
   - Screen reader testing

3. **SEO Optimization**
   - Sitemap generation
   - robots.txt
   - Structured data (JSON-LD)

4. **Deployment**
   - Deploy to Vercel
   - Configure custom domain (if applicable)
   - Set up GitHub Actions for CI/CD

**Deliverables:**
- ✅ Lighthouse score 90+
- ✅ WCAG AA compliant
- ✅ Deployed to production

## Data Migration Strategy

### Step 1: Generate TypeScript Interfaces

The JSDoc types are already defined. Convert to TypeScript:

```typescript
// src/lib/types/index.ts

export interface KPI {
  metric: string;
  value: string;
  description: string;
}

export interface Capability {
  id: string;
  title: string;
  category: string;
  pillar: string;
  description: string;
  keyPoints: string[];
  kpis: KPI[];
  relatedCaseStudies: string[];
}

export interface CaseStudy {
  id: string;
  brand: string;
  category: string;
  challenge: string;
  execution: string[];
  results: Record<string, string>;
  relatedCapabilities: string[];
}

export interface RFPAnswer {
  question: string;
  answer: string;
  relatedCapabilityId: string;
  tags: string[];
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'Amazon' | 'eCommerce' | 'Logistics';
  cpgioContext: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string;
  photo: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}
```

### Step 2: Convert Data Files

Split `knowledge-base-data.js` into modular files:

```typescript
// src/lib/data/capabilities.ts
import { Capability } from '../types';

export const capabilities: Capability[] = [
  {
    id: 'integrated-operations',
    title: 'Integrated Operations',
    // ... rest of data
  },
  // ...
];
```

### Step 3: Add Data Validation (Optional)

Use Zod for runtime validation:

```typescript
import { z } from 'zod';

const KPISchema = z.object({
  metric: z.string(),
  value: z.string(),
  description: z.string(),
});

const CapabilitySchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.string(),
  pillar: z.string(),
  description: z.string(),
  keyPoints: z.array(z.string()),
  kpis: z.array(KPISchema),
  relatedCaseStudies: z.array(z.string()),
});

// Validate at build time
export const capabilities = CapabilitySchema.array().parse(rawCapabilities);
```

## Design System Migration

### Tailwind Config

Map CSS custom properties to Tailwind:

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f172a',
          hover: '#1e293b',
          light: '#334155',
        },
        accent: {
          blue: '#3b82f6',
          teal: '#14b8a6',
          orange: '#f97316',
          purple: '#8b5cf6',
        },
        // ... map all CSS variables
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '0.9375rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};

export default config;
```

### Component Library

Use shadcn/ui for base components:

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add accordion
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add input
npx shadcn-ui@latest add badge
```

## Performance Targets

### Current Performance (React via CDN)
- **First Contentful Paint:** ~800ms
- **Time to Interactive:** ~1.2s
- **Total Bundle Size:** ~800KB (with SheetJS loaded)
- **Lighthouse Score:** Estimated 70-80

### Target Performance (Next.js SSG)
- **First Contentful Paint:** <500ms
- **Time to Interactive:** <1s
- **Total Bundle Size (initial):** <200KB
- **Lighthouse Score:** 90+ (Performance, SEO, Accessibility, Best Practices)

### Optimization Strategies

1. **Code Splitting**
   - Separate bundles for each page
   - Lazy load RFP Analyzer/AI Q&A
   - Dynamic imports for heavy components

2. **Image Optimization**
   - Convert images to WebP/AVIF
   - Responsive images via `next/image`
   - Lazy loading below-the-fold images

3. **Font Optimization**
   - Self-host fonts via `next/font`
   - Subset fonts (Latin only)
   - Preload critical fonts

4. **Caching Strategy**
   - Static generation = CDN caching
   - Long cache times for assets
   - Service worker for offline support (optional)

## SEO Strategy

### Current SEO Limitations
- Client-side rendering = crawlers see loading state
- No dynamic meta tags per page
- No sitemap
- No structured data

### Target SEO (Next.js)

1. **Static HTML Per Page**
   - 12 capability pages
   - 20+ case study pages
   - All pre-rendered with full content

2. **Dynamic Meta Tags**
   ```typescript
   // src/app/capabilities/[slug]/page.tsx
   export async function generateMetadata({ params }: Props): Promise<Metadata> {
     const capability = capabilities.find(c => c.id === params.slug);

     return {
       title: `${capability.title} | CPGIO Capabilities`,
       description: capability.description,
       openGraph: {
         title: capability.title,
         description: capability.description,
         images: ['/og-image.png'],
       },
     };
   }
   ```

3. **Sitemap Generation**
   ```typescript
   // src/app/sitemap.ts
   export default function sitemap(): MetadataRoute.Sitemap {
     return [
       { url: 'https://cpgio.com', lastModified: new Date() },
       ...capabilities.map(cap => ({
         url: `https://cpgio.com/capabilities/${cap.id}`,
         lastModified: new Date(),
       })),
       // ... case studies, etc.
     ];
   }
   ```

4. **Structured Data**
   ```typescript
   const structuredData = {
     '@context': 'https://schema.org',
     '@type': 'Service',
     name: capability.title,
     description: capability.description,
     provider: {
       '@type': 'Organization',
       name: 'CPGIO',
       url: 'https://cpg.io',
     },
   };
   ```

## Risk Mitigation

### Potential Issues

1. **Build Time**
   - Risk: 30+ pages = longer build times
   - Mitigation: Use incremental static regeneration (ISR) if needed

2. **Team Familiarity**
   - Risk: Team unfamiliar with Next.js/TypeScript
   - Mitigation: Comprehensive documentation, training sessions

3. **Content Updates**
   - Risk: Team can't easily update content (vs current JS file)
   - Mitigation:
     - Keep data files simple (just TypeScript, not CMS)
     - Document update process
     - Consider headless CMS in future (Sanity, Contentful)

4. **Deployment Complexity**
   - Risk: More complex than GitHub Pages
   - Mitigation: Vercel auto-deploys on git push (simpler than current)

### Rollback Plan

- Keep current React-via-CDN site running during migration
- Use subdomain for Next.js version (`next.cpgio.com`)
- Only switch primary domain after full testing
- Maintain git tags for easy rollback

## Testing Strategy

### Unit Tests
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

Test critical utilities:
- Search algorithm
- Question categorization
- Data validation

### E2E Tests
```bash
npm install -D @playwright/test
```

Test user journeys:
- New prospect: Browse capabilities
- RFP evaluator: Search RFP Center, copy answer
- Internal team: Use AI Q&A

### Visual Regression
```bash
npm install -D @chromatic-com/storybook
```

Prevent UI regressions across components

## Success Metrics

### Technical KPIs
- ✅ Lighthouse Performance: 90+
- ✅ Lighthouse SEO: 95+
- ✅ Lighthouse Accessibility: 95+
- ✅ Core Web Vitals: All green
- ✅ Build time: <60 seconds
- ✅ Page load time: <1 second

### Business KPIs
- ✅ Organic search traffic increase (track via Google Analytics)
- ✅ RFP response time reduction (internal metric)
- ✅ User engagement (time on site, pages per session)

## Cost Analysis

### Current Setup
- **Hosting:** Free (GitHub Pages)
- **Maintenance:** Minimal (no build process)
- **Developer Time:** Low

### Next.js Setup
- **Hosting:** Free tier (Vercel) or $20/month (Pro)
- **Maintenance:** Moderate (npm updates, dependency management)
- **Developer Time:** Higher initially, lower long-term

### ROI Justification
- Better SEO = more inbound leads
- Faster RFP response = more wins
- Professional appearance = higher close rate

## Conclusion

The current incremental improvements have positioned the CPGIO Knowledge Base perfectly for a Next.js migration. With TypeScript types defined, design tokens organized, and lazy loading implemented, the codebase is migration-ready.

**Recommendation:** Proceed with Phase 1 (Foundation) when:
1. Team has capacity for 4-week sprint
2. SEO becomes a priority (public-facing vs internal tool)
3. Content update frequency stabilizes
4. Budget approved for Vercel hosting (if needed)

**Alternative:** Continue with current architecture if:
- Tool remains primarily internal
- SEO not critical
- Team prefers simplicity over features
- Update frequency is very high (favor ease of editing)

---

**Document Version:** 1.0
**Last Updated:** November 2025
**Author:** CPGIO Development Team
**Next Review:** Before Phase 1 kickoff
