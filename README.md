# Niloy Barua — Software Development Portfolio

A personal portfolio built with React, Vite, Tailwind CSS and Framer Motion. It presents selected software and data projects, the technologies used in those projects, and links to their source code and available demos.

## Featured work

The portfolio currently presents eight projects:

- **DualTrack Enterprise** — Java and Spring Boot application with user authentication, PostgreSQL persistence, automated tests and GitHub Actions CI.
- **BookLoop Lite** — React and Express application with JWT cookie authentication, book listings, complete Borrow and Exchange workflows, backend integration tests and GitHub Actions CI. Sale and Rent remain workflow prototypes without payments.
- **Transit Intelligence Platform** — FastAPI application for regional rail delay analytics, with generated demo data and manually triggered HAFAS ingestion.
- **ATM Transaction Dashboard** — Flask API and separate Chart.js dashboard for ATM transaction analysis.
- **European City Score Engine** — Streamlit app comparing five cities using job-market and reference data.
- **Job Market Analyzer** — Python/Jupyter analysis of 61,953 job postings, accompanied by a Power BI report.
- **TechTrack Germany** — static Leaflet map for exploring degree programme entries; the dataset includes sample placeholders noted in that repository.
- **Job Application Tracking Agent** — FastAPI prototype using Adzuna job listings and rule-based skill matching; it does not use an LLM to generate application content or submit applications automatically.

Deployment status and data limitations are described in the individual project details. A deployed demo does not necessarily mean that its free hosting tier is always awake or that its data persists indefinitely.

## Built with

- React
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deployment

The repository includes a GitHub Actions workflow that builds the Vite application and deploys the generated `dist` directory to GitHub Pages. The GitHub Pages source should be configured to use GitHub Actions.

## Notes

Project descriptions are intended to reflect implemented functionality. Planned features and future improvements are not listed as completed work.
