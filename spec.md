# Portfolio Website v1 — Specification

## Purpose

This specification defines requirements and scenarios for the portfolio website of Pedro Pira. The site communicates **"I don't solve problems, I create solutions"** — positioning the developer as a premium creative professional who delivers innovative solutions. The site serves as a professional showcase to attract companies and recruiters seeking senior technical talent.

## Scope

- **Tech Stack**: Next.js 14 + TypeScript + Tailwind CSS + Framer Motion
- **Sections**: Hero, About, Projects, Experience, Skills, Contact
- **Color Palette**: AutoStock dark design system (MANDATORY — see below)
- **Artifact Store Mode**: engram

## Color Palette (MANDATORY — AutoStock Dark System)

```css
:root {
  /* === CORE BRAND COLORS === */
  --color-bg: #0F172A;           /* Deep navy — main background */
  --color-dark: #020617;         /* Deep black — darkest surfaces */
  --color-dark-alt: #1E293B;     /* Cards, panels, surfaces */
  --color-accent: #2DD4BF;       /* Teal vibrante — primary brand accent */
  --color-accent-rgb: 45, 212, 191;

  /* === TEXT === */
  --color-white: #FFFFFF;        /* Primary text */
  --color-gray-light: #F8FAFC;   /* Secondary text, subtitles */

  /* === GLASSMORPHISM === */
  --glass-bg: rgba(255, 255, 255, 0.03);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  --glass-blur: 12px;

  /* === MESH GRADIENT (Hero background) === */
  --mesh-1: #0F172A;
  --mesh-2: #1E1B4B;
  --mesh-3: #020617;
  --mesh-4: #064E3B;

  /* === TYPOGRAPHY === */
  --font-heading: 'Inter', sans-serif;
  --font-body: 'DM Sans', sans-serif;

  /* === SPACING & RADIUS === */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
}
```

> **Nota**: No se usan colores de estado (success, warning, danger). La paleta es limpia, dark, y orientada a marca.

---

## DOMAIN: Portfolio Website

### Requirement: hero-section

The website MUST display a Hero section that establishes immediate professional brand identity with the value proposition "I don't solve problems, I create solutions" as the core messaging.

#### Scenario: Hero section displays on page load

- GIVEN the user navigates to the portfolio website
- WHEN the page loads
- THEN the Hero section MUST be visible above the fold
- AND the developer name, title/role, and value proposition MUST be visible
- AND social links (GitHub, LinkedIn, email) MUST be visible and clickable

#### Scenario: Hero uses mesh gradient background

- GIVEN the Hero section renders
- WHEN the background is applied
- THEN a CSS mesh gradient using `--mesh-*` colors MUST be used as background
- AND the teal accent (`--color-accent`) MUST appear as a highlight or glow element

#### Scenario: Hero section responsive on mobile

- GIVEN the user views the website on a mobile device (viewport < 640px)
- WHEN the Hero section renders
- THEN the content MUST stack vertically with appropriate spacing
- AND font sizes MUST scale proportionally (name: clamp, role: text-lg)

#### Scenario: Social links open in new tab

- GIVEN the user clicks a social link (GitHub, LinkedIn, email)
- WHEN the link is activated
- THEN the link MUST open in a new browser tab (`target="_blank" rel="noopener noreferrer"`)

#### Scenario: Hero entrance animation on load

- GIVEN the page loads
- WHEN the Hero section renders
- THEN Framer Motion animations MUST trigger (fade-in + slide-up, duration: 0.6s, ease: easeOut)
- AND elements MUST stagger sequentially (name → role → proposition → links)

---

### Requirement: about-section

The website MUST contain an About section that communicates vision, mission, and personal narrative around the "creating solutions" philosophy.

#### Scenario: About section displays vision and mission

- GIVEN the user scrolls to the About section
- WHEN the section becomes visible
- THEN the vision statement MUST be displayed prominently
- AND the mission statement MUST follow with supporting narrative
- AND the "creating solutions" philosophy MUST be clearly conveyed

#### Scenario: About uses glassmorphism card

- GIVEN the About section renders
- WHEN the content card is displayed
- THEN it MUST use `--glass-bg`, `--glass-border`, and `backdrop-filter: blur(--glass-blur)` for the glass effect
- AND the card background MUST sit on `--color-dark-alt`

#### Scenario: About section readable on all devices

- GIVEN the user views the About section
- WHEN the viewport changes from desktop to mobile
- THEN the text MUST remain readable (min font-size: 16px, line-height: 1.75)
- AND padding MUST adapt appropriately (desktop: py-20, mobile: py-12)

#### Scenario: About section scroll animation triggers

- GIVEN the user scrolls down to the About section
- WHEN the section enters the viewport (Intersection Observer via Framer Motion)
- THEN a fade-in animation MUST trigger (duration: 0.5s, staggered sub-elements)

---

### Requirement: projects-section

The website MUST display a Projects section showcasing 3–5 strongest projects with demo links, repositories, problems solved, and tech stacks.

#### Scenario: Projects display as cards in a grid

- GIVEN the user scrolls to the Projects section
- WHEN the section renders
- THEN project cards MUST display in a responsive grid
- AND grid MUST adapt: 3 columns (≥1280px), 2 columns (≥768px), 1 column (<768px)

#### Scenario: Project card shows complete information

- GIVEN the user views a project card
- WHEN the card renders
- THEN it MUST display: project name, description (2–3 sentences), tech stack badges, demo button, repo button
- AND tech badges MUST use `--color-accent` as text/border color
- AND the card MUST use glassmorphism styling

#### Scenario: Project links functional

- GIVEN the user clicks a demo or repo button
- WHEN the button is activated
- THEN the link MUST open in a new tab
- AND both links MUST have proper `aria-label` attributes

#### Scenario: Project cards animate on scroll with stagger

- GIVEN the user scrolls to the Projects section
- WHEN each card enters the viewport
- THEN a staggered fade-in animation MUST trigger (delay: 0.1s per card)
- AND hover MUST scale the card (transform: scale(1.02)) with teal glow shadow

---

### Requirement: experience-section

The website MUST display an Experience section with a timeline of work history and achievements.

#### Scenario: Experience displays as vertical timeline

- GIVEN the user scrolls to the Experience section
- WHEN the section renders
- THEN work history MUST display in a vertical timeline format
- AND each entry MUST show: company name, role, duration, 2–4 bullet achievements

#### Scenario: Timeline connector uses accent color

- GIVEN the Experience timeline renders
- WHEN the vertical connector is displayed
- THEN the connector line MUST use `--color-accent` (`#2DD4BF`) as its color
- AND each entry marker (dot/icon) MUST also use `--color-accent`

#### Scenario: Experience timeline responsive

- GIVEN the user views the Experience section on mobile (< 768px)
- WHEN the viewport is narrow
- THEN the timeline MUST collapse to single-column layout
- AND the visual connector SHOULD remain visible (left-aligned)

#### Scenario: Timeline entries animate on scroll

- GIVEN the user scrolls to each timeline entry
- WHEN the entry enters the viewport
- THEN a slide-in animation from the left MUST trigger (duration: 0.5s, stagger: 0.15s)

---

### Requirement: skills-section

The website MUST display a Skills section showcasing technical skills, soft skills, and the methodology approach.

#### Scenario: Skills categorize into sections

- GIVEN the user scrolls to the Skills section
- WHEN the section renders
- THEN skills MUST be organized into categories: Technical Skills, Soft Skills, Solutions Approach
- AND each category MUST have a clear heading (h3)

#### Scenario: Technical skills display as visual badges

- GIVEN the user views the Technical Skills category
- WHEN the component renders
- THEN each skill MUST display as a badge/pill
- AND badges MUST use `--color-accent` as border color on `--color-dark-alt` background
- AND SHOULD be grouped logically (Frontend, Backend, Tools, DevOps, etc.)

#### Scenario: Skills section responsive

- GIVEN the user views the Skills section on different devices
- WHEN the viewport changes
- THEN skill categories MUST stack on mobile
- AND a grid layout (2–3 columns) MUST apply on desktop

#### Scenario: Skills animate on visibility

- GIVEN the user scrolls to the Skills section
- WHEN the section enters the viewport
- THEN skills MUST animate in with staggered fade-in (duration: 0.4s per badge)

---

### Requirement: contact-section

The website MUST display a Contact section with clear call-to-action and multiple contact channels.

#### Scenario: Contact section displays CTA

- GIVEN the user scrolls to the Contact section
- WHEN the section renders
- THEN a clear headline MUST state the CTA (e.g., "Let's create solutions together")
- AND subtext MUST encourage reaching out

#### Scenario: Contact provides multiple channels

- GIVEN the user views the Contact section
- WHEN the section renders
- THEN the email address MUST be a clickable `mailto:` link
- AND LinkedIn link MUST open profile in new tab
- AND GitHub link MUST open profile in new tab

#### Scenario: Contact CTA buttons use accent color

- GIVEN the user views the Contact buttons
- WHEN the component renders
- THEN primary CTA button MUST use `--color-accent` (`#2DD4BF`) as background or border
- AND hover state MUST provide clear visual feedback (scale + glow)

#### Scenario: Contact responsive on mobile

- GIVEN the user views the Contact section on mobile (< 768px)
- WHEN the viewport is narrow
- THEN contact buttons MUST stack vertically
- AND each button MUST have adequate tap target (min-height: 48px)

---

### Requirement: global-ui-requirements

The website MUST meet global UI/UX requirements for consistency, accessibility, and performance.

#### Scenario: Dark theme applied globally

- GIVEN any section renders
- WHEN the page loads
- THEN the background MUST use `--color-bg` (#0F172A) globally
- AND all text MUST use `--color-white` or `--color-gray-light` as base text colors
- AND `--color-dark-alt` (#1E293B) MUST be used for cards and panels

#### Scenario: Color palette applied consistently via CSS variables

- GIVEN any component renders
- WHEN the component uses colors
- THEN it MUST use defined CSS variables — NO hardcoded hex values

#### Scenario: Navigation smooth scroll works

- GIVEN the user clicks a navigation link
- WHEN the link is activated
- THEN the page MUST smoothly scroll to the target section (`scroll-behavior: smooth`)
- AND the active section MUST be highlighted in the navbar

#### Scenario: Accessibility requirements met

- GIVEN the user navigates using keyboard or screen reader
- WHEN interactive elements are encountered
- THEN all links and buttons MUST have appropriate focus states (teal outline)
- AND all images MUST have descriptive `alt` text
- AND color contrast MUST meet WCAG AA (4.5:1 for text)

#### Scenario: SEO meta tags present

- GIVEN the website is rendered
- WHEN the HTML document loads
- THEN title tag MUST be: `"Pedro Pira | Developer — I don't solve problems, I create solutions"`
- AND meta description MUST be present (150–160 characters)
- AND Open Graph tags MUST be present (title, description, image, url)
- AND Next.js `generateMetadata` API MUST be used (not manual `<head>` tags)

#### Scenario: Page performance meets target

- GIVEN the user loads the portfolio
- WHEN the initial render completes
- THEN LCP SHOULD be under 2.5 seconds
- AND CLS MUST be under 0.1
- AND Lighthouse Performance score MUST be ≥ 90

#### Scenario: Animations respect reduced motion

- GIVEN the user has "reduced motion" enabled in system preferences
- WHEN animations are triggered
- THEN the website MUST respect `prefers-reduced-motion`
- AND Framer Motion `useReducedMotion()` hook MUST be used to disable animations

---

## Acceptance Criteria Summary

| Section | Must Have | Success Condition |
|---------|-----------|-------------------|
| Hero | Name, title, value prop, social links | Visible above fold, mesh bg, entrance animation |
| About | Vision, mission, narrative | Glassmorphism card, readable all devices |
| Projects | 3–5 cards with demo/repo | Grid responsive, teal badges, hover glow |
| Experience | Timeline with achievements | Teal connector, slide-in animation |
| Skills | Technical + soft + approach | Badge groups, stagger animation |
| Contact | Email, LinkedIn, GitHub, CTA | All channels functional, teal CTA |
| Global | Dark theme, palette, a11y, SEO | All CSS variables, Lighthouse ≥ 90 |

---

## Next Step

**→ sdd-design**: Technical design document — component architecture, file structure, animation system, Tailwind config, Next.js setup decisions.

After design: **sdd-tasks** → **sdd-apply** (Phase 1: Foundation) → **sdd-apply** (Phase 2: Content) → **sdd-apply** (Phase 3: Polish) → **sdd-verify** → **sdd-archive**