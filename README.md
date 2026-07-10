# Niloy Barua — Engineering Portfolio

Personal portfolio built with React 19, Vite, and Tailwind CSS v4, deployed via GitHub Actions to GitHub Pages.

## Status

🚧 Work in progress, built incrementally, phase by phase:

- [x] **Phase 0** — Project scaffold: Vite + React 19 + Tailwind v4 + Framer Motion, folder structure, design tokens, theme toggle, CI/CD workflow
- [x] **Phase 1** — Data layer (real project/skills/principles content, sourced from each repo's README)
- [x] **Phase 2** — Core components (Badge, Button, ThemeToggle, ProjectCard w/ accessible modal, ProjectMetric)
- [x] **Phase 3** — Sections (Hero, Stats, Projects, Principles, Contact), wired into App.jsx with lazy-loaded Projects chunk
- [ ] **Phase 4** — Accessibility audit pass (screen reader check, color contrast verification, reduced-motion testing)
- [ ] **Phase 5** — Performance pass (Lighthouse run, image optimization once architecture diagrams are added)
- [ ] **Phase 6** — Live on GitHub Pages (confirm Actions run is green)

Section flow: `Navbar → Hero → Stats → Projects → Principles → Contact`
(No timeline/milestones section — cut as unnecessary for this portfolio's goal.)

## Known open items (intentionally left for future commits)

- `src/sections/Contact/Contact.jsx` — `CONTACT_EMAIL` is a placeholder. Replace with a real address.
- Dual Study Application Tracker's frontend is deployed to GitHub Pages but still points at `localhost:8080` — deploy the Spring Boot API (e.g. to Render) and repoint the frontend before calling it "live" in `projects.js`.
- AI-Driven Job Application Agent and TechTrack Germany aren't in `projects.js` yet — add once those repos are public.
- `public/assets/architecture/` is empty — no architecture diagrams have been added yet.

## Stack

- **React 19** — functional components, no class components
- **Vite** — dev server + production build
- **Tailwind CSS v4** — `@theme` token system for light/dark mode
- **Framer Motion** — scroll reveals and micro-interactions

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
