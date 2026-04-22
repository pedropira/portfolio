# Proposal: Portfolio Website v1

## Intent

Build a professional portfolio website to showcase ideas, vision, mission, expectations, and experience to attract companies and recruiters. The site communicates **"I don't solve problems, I create solutions"** — a premium creative brand that positions Pedro Pira as a senior developer who delivers innovative solutions.

The design adopts the **AutoStock dark aesthetic**: deep navy backgrounds, vibrant teal accent, glassmorphism surfaces, and Inter/DM Sans typography — a look that is clean, professional, and visually harmonious.

## Scope

### In Scope
- **Core Sections**: Hero (name, title, value proposition, GitHub/LinkedIn/email), About (vision, mission, values), Projects (3–5 strongest projects with demo links, tech stack), Experience (timeline with achievements), Skills (technical + soft), Contact (email, LinkedIn, CTA)
- **Tech Stack**: Next.js 14 + TypeScript + Tailwind CSS + Framer Motion
- **Design System**: AutoStock dark palette + glassmorphism tokens + Inter/DM Sans fonts
- **Animations**: Scroll-triggered effects (Framer Motion) for premium feel
- **Responsive Design**: Mobile-first, works on all devices
- **SEO**: Static Generation (SSG) for fast indexing, structured meta tags, Open Graph

### Out of Scope
- Blog or content publishing system
- CMS integration
- Multi-language support
- Contact form with backend (mailto link is sufficient)

## Tech Stack Recommendation

Based on your AutoStock experience (Vite + React + TypeScript + vanilla CSS/Python backend), the best fit for this portfolio is:

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | **Next.js 14 (App Router)** | SSG for SEO, standard for portfolios, natural evolution from React/Vite |
| Language | **TypeScript** | Ya lo usás en AutoStock — consistencia |
| Styling | **Tailwind CSS** | Fast iteration for design-heavy sites; pairs perfectly with Framer Motion |
| Animations | **Framer Motion** | Industry standard for React scroll animations, used by top portfolios |
| Deployment | **Vercel** | Zero-config for Next.js, CDN global, free tier |
| Content | **Inline TypeScript** (no CMS) | Simple, no overhead, easy to update |

> **Why not Astro?** Astro is technically better for pure static sites, but Next.js is more aligned with your existing React/TS knowledge and gives access to SSR/API routes if we ever need them later. Menor curva de aprendizaje, hermano.

## Capabilities

### New Capabilities
- `portfolio-homepage`: Main single-page portfolio with all sections
- `project-showcase`: Project cards with demo/repo links, tech stack badges
- `experience-timeline`: Work history with achievements
- `skills-catalog`: Technical and soft skills display
- `contact-cta`: Clear call-to-action with contact links

### Modified Capabilities
- None — new project

## Approach

1. **Phase 1 — Foundation**: Next.js setup, design system (CSS variables + Tailwind config), layout components (Navbar, Footer), Hero + About sections
2. **Phase 2 — Content Sections**: Projects, Experience, Skills, Contact sections with real content
3. **Phase 3 — Polish**: Framer Motion animations, SEO meta tags, performance optimization, deployment

Components organized as:
```
src/
  app/           → Next.js App Router (page.tsx, layout.tsx, globals.css)
  components/
    ui/           → Reusable atoms (Button, Badge, Card)
    sections/     → Hero, About, Projects, Experience, Skills, Contact
    layout/       → Navbar, Footer
  lib/            → Utilities
  data/           → Static content (projects, skills, experience)
  types/          → TypeScript interfaces
```

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/app/` | New | Next.js App Router entry |
| `src/components/` | New | UI, section, and layout components |
| `src/data/` | New | Static content (projects, skills, experience) |
| `src/lib/` | New | Utilities and helpers |
| `public/` | New | Static assets (images, icons, OG image) |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Content not ready | Medium | Draft content skeleton before animations phase |
| Design decisions delayed | Low | AutoStock palette is already defined — use it |
| Animation performance on mobile | Low | CSS transforms only, respect prefers-reduced-motion |

## Rollback Plan

Git branches per phase. Deploy via Vercel with atomic deployments — instant rollback via dashboard.

## Dependencies

- Profile photo for Hero section
- Project screenshots for Project cards
- GitHub, LinkedIn URLs and email address
- Content: 3–5 projects descriptions, work history, skills list

## Success Criteria

- [ ] All sections render correctly on desktop and mobile
- [ ] Page loads under 2.5s LCP on 3G
- [ ] Scroll animations trigger smoothly
- [ ] All links (GitHub, LinkedIn, email) functional
- [ ] SEO meta tags present (title, description, OG tags)
- [ ] Lighthouse score: Performance ≥ 90, Accessibility ≥ 95