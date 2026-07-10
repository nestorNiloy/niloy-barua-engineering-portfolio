/**
 * Project data — sourced from each repo's README/source and Niloy's own
 * CV bullets, not invented. `metrics` values are plain numbers so they can
 * drive the animated counters on each card; `suffix` covers cases like
 * "+" or "MB". `live` is only true when a visitor can actually load
 * working data — see the Dual Study Tracker entry for a project that's
 * deployed but not yet wired together end to end.
 *
 * Order is by overall impressiveness (architecture sophistication + what's
 * actually verifiable live), not by build date:
 * 1. Transit Intel Platform      — most sophisticated live backend
 * 2. AI Job Application Agent    — most sophisticated architecture overall,
 *                                   but not deployed yet
 * 3. European City Score Engine  — live, real multi-source normalization
 * 4. TechTrack Germany CS Map    — live, unique frontend/geospatial work,
 *                                   33 hand-verified real programs
 * 5. ATM Transaction Dashboard   — solid decoupled full-stack, live
 * 6. Dual Study Application Tracker — good architecture, frontend not wired
 * 7. Job Market Analyzer         — strong analysis, but notebook-only
 */

export const projects = [
  {
    id: "transit-intel-platform",
    title: "Transit Intel Platform",
    subtitle: "Async Analytics Backend for Public Transport Delay Data",
    category: "Backend & Systems Architecture",
    live: true,
    metrics: [
      { label: "REST Endpoints", value: 11 },
      { label: "German States Covered", value: 7 },
      { label: "Seed Records", value: 1200, suffix: "+" },
    ],
    summary:
      "An asynchronous FastAPI + SQLAlchemy backend exposing 11 REST endpoints for delay analytics, station reliability scoring, and a regional route optimizer for semester-ticket holders across 7 German states. Integrates the live Deutsche Bahn HAFAS API with retry/backoff error handling and trip-ID-based deduplication.",
    problem:
      "Public transport delay data is scattered across raw feeds with no structure — there's no easy way to see which stations or routes are actually reliable over time.",
    architecture:
      "A cleanly layered async Python package: main.py (routes and background jobs), models.py (SQLAlchemy entities), crud.py (async queries), analytics.py (business rules like congestion-slot definitions and on-time thresholds), and services.py (the live HAFAS ingestion client). The dashboard is server-rendered Jinja2 with Chart.js, no frontend build step.",
    challenges:
      "The public HAFAS feed is unauthenticated, rate-limited, and occasionally flaky, so services.py retries transient failures and then logs-and-skips rather than crashing — departures are deduplicated by their HAFAS tripId so repeated polling updates a row's delay instead of creating duplicates.",
    lessons:
      "Auto-seeding the database with a 1,200+ record historical matrix on first run (so the dashboard is never blank) mattered more for demo quality than any single feature — an empty state is the first thing anyone evaluating the project sees.",
    technologies: ["Python", "FastAPI", "SQLAlchemy 2.0 (async)", "Pydantic v2", "SQLite", "Jinja2", "Chart.js"],
    links: {
      live: "https://transit-intel-platform-production.up.railway.app",
      apiDocs: "https://transit-intel-platform-production.up.railway.app/docs",
      github: "https://github.com/nestorNiloy/transit-intel-platform",
    },
  },
  {
    id: "ai-job-application-agent",
    title: "AI-Driven Autonomous Job Application & Tracking Agent",
    subtitle: "Async Backend for Job Discovery, Tailoring, and Status Tracking",
    category: "Backend & Automation",
    live: false,
    metrics: [
      { label: "API Endpoints", value: 7 },
      { label: "Status States", value: 6 },
      { label: "Data Source", value: "Live Adzuna API" },
    ],
    summary:
      "An asynchronous FastAPI backend that discovers real, live job listings via the Adzuna API, tailors application notes with a rule-based skill-matching engine, and tracks every application through a 6-state status machine with human-in-the-loop authorization before anything is marked as applied. A vanilla-JS Kanban board visualizes the pipeline in real time.",
    problem:
      "Manually searching, tailoring, and tracking applications across job boards is repetitive, and fully-automated 'auto-apply' tools risk submitting to jobs that were never actually reviewed by a human.",
    architecture:
      "A layered async FastAPI service: models.py (SQLAlchemy 2.0 async models plus a JobStatus enum), schemas.py (Pydantic v2 validation), crud.py (the repository layer — all raw DB access lives here), services.py (the real Adzuna scraper and the rule-based tailoring engine), and main.py (routes, lifespan startup, a global exception handler). The Kanban frontend is served directly by FastAPI's StaticFiles at /ui/.",
    challenges:
      "Deduplicating re-scraped listings by Adzuna's own external_id, so re-running a search with the same keywords never creates duplicate rows — only genuinely new listings get inserted.",
    lessons:
      "The tailoring engine is a deterministic keyword-overlap matcher, not a live LLM call, and it says so explicitly rather than implying otherwise — while keeping the method signature swappable, so a real LLM call can later replace it without touching the router or repository layers.",
    technologies: ["Python 3.11+", "FastAPI", "SQLAlchemy 2.0 (async)", "Pydantic v2", "aiosqlite", "httpx", "Uvicorn"],
    // TODO: not deployed anywhere yet — add links.live once it's on Render.
    links: {
      github: "https://github.com/nestorNiloy/job-application-agent",
    },
  },
  {
    id: "european-city-score-engine",
    title: "European City Score Engine",
    subtitle: "Multi-Factor City Ranking Tool with Live Job Market Data",
    category: "Data Engineering & Analytics",
    live: true,
    metrics: [
      { label: "Cities Compared", value: 5 },
      { label: "Job Listings Processed", value: 400, suffix: "+" },
      { label: "Weighted Factors", value: 4 },
    ],
    summary:
      "A Streamlit app that ranks 5 European tech cities using 400+ live job listings from the Adzuna API, blended with cost-of-living, safety, and internet-speed indices via a min-max normalization engine. Users control the weighting of each factor with sliders and watch rankings recompute instantly.",
    problem:
      "Most 'best city to live in' rankings are static and impossible to personalize — they encode someone else's priorities, not yours.",
    architecture:
      "A Streamlit frontend calls a data layer split into fetcher.py (Adzuna API calls plus static cost-of-living/safety/internet data) and scorer.py (min-max normalization and weighted scoring), keeping data access and scoring logic decoupled from the UI.",
    challenges:
      "Combining a live API (job counts, which change hour to hour) with static annual indices (cost of living, safety) required normalizing both onto the same 0–100 scale before they could be meaningfully weighted together.",
    lessons:
      "Enforcing that slider weights must sum to 100 in the UI layer, rather than silently normalizing behind the scenes, keeps the scoring transparent and easy to reason about.",
    technologies: ["Python", "Streamlit", "Plotly", "Adzuna API", "Pandas"],
    links: {
      live: "https://european-city-score-engine.streamlit.app",
      github: "https://github.com/nestorNiloy/european-city-score-engine",
    },
  },
  {
    id: "techtrack-germany",
    title: "TechTrack Germany — CS Bachelor Map",
    subtitle: "Interactive Geospatial Explorer for CS Bachelor Programs",
    category: "Frontend & Geospatial Visualization",
    live: true,
    metrics: [
      { label: "Programs Mapped", value: 33 },
      { label: "Dual-Study Entries", value: 5 },
      { label: "Tuition-Free Listings", value: 30 },
    ],
    summary:
      "An interactive Leaflet.js map comparing 33 hand-verified CS bachelor programs across Germany — dual-study and full-time — with tuition, job-market tier, and real train-time-to-Hauptbahnhof data to help with program shortlisting. Zero framework, zero build step, zero backend, by design.",
    problem:
      "Comparing dual-study and full-time CS programs across Germany means digging through dozens of separate university pages with no shared structure — tuition, language requirements, and commute times are never in one place.",
    architecture:
      "Pure HTML/CSS/JS with no build tooling: data.js holds a flat array of program objects (one per university/program), app.js handles Leaflet marker rendering, filtering, and list-sync, and a small state object plus the HTML5 LocalStorage API power a client-side watchlist with zero backend.",
    challenges:
      "Every one of the 33 entries — coordinates, tuition, language, and nearest-city train times — was individually verified against the official program page rather than scraped or estimated, which is slower than automating it but means every number on the map is actually defensible.",
    lessons:
      "Deliberately choosing no framework and no build step wasn't a limitation — for a data-driven map like this, vanilla JS with Leaflet was simpler to ship and easier to keep dependency-free than reaching for React by default.",
    technologies: ["JavaScript", "Leaflet.js", "CSS Grid", "HTML5 LocalStorage API"],
    links: {
      live: "https://nestorniloy.github.io/TechTrack-Germany-CS-Bachelors/",
      github: "https://github.com/nestorNiloy/TechTrack-Germany-CS-Bachelors",
    },
  },
  {
    id: "atm-transaction-dashboard",
    title: "ATM Transaction Dashboard",
    subtitle: "Full-Stack Analytics Platform for Banking Network Data",
    category: "Data Engineering & Analytics",
    live: true,
    metrics: [
      { label: "Transactions Processed", value: 11076 },
      { label: "ATMs Tracked", value: 2790 },
      { label: "REST Endpoints", value: 8 },
    ],
    summary:
      "A full-stack analytics platform processing 11,076 transactions across 2,790 ATMs in 11 states, with 8 RESTful endpoints supporting dynamic filtering by state, month, and ATM type. Flask API deployed on Render, decoupled from a Chart.js dashboard on GitHub Pages.",
    problem:
      "Raw ATM transaction logs don't tell a bank anything about network health on their own — profitability, uptime, and maintenance cost only become visible once they're aggregated and filterable.",
    architecture:
      "A decoupled architecture: a Flask REST API (8 endpoints, Pandas for aggregation) deployed on Render, and a static Chart.js dashboard deployed separately on GitHub Pages, communicating over HTTP.",
    challenges:
      "Computing KPIs across 6 maintenance-cost categories and gross-profit analytics required aggregating transaction-level data into per-ATM and per-state rollups without recomputing the whole dataset on every filter change.",
    lessons:
      "Splitting the API and the frontend into separately deployed services (Render + GitHub Pages) made both faster to iterate on independently, at the cost of having to manage CORS explicitly.",
    technologies: ["Python", "Flask", "Pandas", "JavaScript", "Chart.js"],
    links: {
      live: "https://nestorniloy.github.io/atm-transaction-dashboard/Web%20dashboard/atm-dashboard.html",
      api: "https://atm-dashboard-api.onrender.com",
      github: "https://github.com/nestorNiloy/atm-transaction-dashboard",
    },
  },
  {
    id: "dual-study-application-tracker",
    title: "Dual Study Application Tracker",
    subtitle: "Layered REST API for Tracking Dual-Study Job Applications",
    category: "Backend & Enterprise Architecture",
    live: false,
    metrics: [
      { label: "CRUD Endpoints", value: 5 },
      { label: "Architecture Layers", value: 3 },
    ],
    summary:
      "A REST API built with Java 17 and Spring Boot to track dual-study job applications end to end, with a responsive vanilla-JS SPA dashboard for real-time statistics, filtering, and toast notifications.",
    problem:
      "Tracking application status (applied, interviewing, offered, rejected) across many companies by hand in a spreadsheet doesn't scale and has no structured history.",
    architecture:
      "Classic 3-layer enterprise architecture: a Controller layer for HTTP requests and validation, a Service layer holding business logic, and a Repository layer managing persistence via Spring Data JPA over SQLite.",
    challenges:
      "The backend is deployed on Railway, but the GitHub Pages frontend is still hardcoded to call localhost:8080 — a visitor loading the live frontend today sees an empty state, since it can't reach the deployed API yet.",
    lessons:
      "Enums for application status at the model layer made filtering and status transitions far less error-prone than tracking status as a free-text string.",
    technologies: ["Java 17", "Spring Boot", "Spring Data JPA", "Hibernate", "SQLite", "JavaScript"],
    // TODO: repoint the frontend's API_BASE_URL to the Railway URL below,
    // then flip `live` to true. Intentionally left open for a future commit.
    links: {
      github: "https://github.com/nestorNiloy/dual-study-application-tracker",
      frontendPreview: "https://nestorniloy.github.io/dual-study-application-tracker/frontend/index.html",
      api: "https://dual-study-application-tracker-production.up.railway.app/api/applications",
    },
  },
  {
    id: "job-market-analyzer",
    title: "Job Market Analyzer",
    subtitle: "Exploratory Analysis of 61,953 Job Postings",
    category: "Data Analysis",
    live: false,
    metrics: [
      { label: "Postings Analyzed", value: 61953 },
      { label: "Features Tracked", value: 27 },
      { label: "Dataset Size (MB)", value: 276 },
    ],
    summary:
      "An end-to-end analysis of the job market at scale — cleaning, normalizing, aggregating, and visualizing a 276 MB dataset of 61,953 job postings across 27 features to surface demand patterns across roles, companies, skills, and locations.",
    problem:
      "Individual job postings tell you almost nothing about the market; the useful signal only shows up once you aggregate tens of thousands of them.",
    architecture:
      "A reproducible Jupyter Notebook pipeline: raw CSV ingestion, cleaning and normalization with Pandas, aggregation across 27 features, and visualization with Matplotlib and Seaborn.",
    challenges:
      "At 276 MB and 27 features, several columns had inconsistent formatting (mixed casing, duplicate categories spelled differently) that had to be normalized before any aggregation would be meaningful.",
    lessons:
      "SQL turned out to be the single most-demanded skill across the dataset (30,000+ mentions), and the on-site/remote split landed close to even — 55/45 — which ran counter to the fully-remote narrative common in tech discussion.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    links: {
      github: "https://github.com/nestorNiloy/job-market-analyzer",
      notebook: "https://share.google/MZkfaO99WYb4IeG8Y",
    },
  },
]
