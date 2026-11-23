/**
 * Project descriptions are kept deliberately factual. Metrics and features
 * are taken from the linked repositories; planned work is not presented as
 * implemented functionality.
 */
export const projects = [
  {
    id: "dualtrack-enterprise",
    tags: ["Enterprise Architecture","Backend & APIs","Full-Stack Engineering","CI/CD","Automated Testing"],
    title: "DualTrack Enterprise",
    subtitle: "Multi-user job application management system",
    category: "Java Backend & Enterprise Development",
    live: true,
    metrics: [
      { label: "Application statuses", value: 4 },
      { label: "Core data entities", value: 3 },
      { label: "Database", value: "PostgreSQL" },
    ],
    summary:
      "A full-stack application for managing job applications with individual user accounts, session-based authentication, application ownership checks, search, pagination, dashboard statistics and status-change history.",
    problem:
      "A personal spreadsheet is useful for a small number of applications, but it does not provide user accounts, access separation, searchable records or a history of status changes.",
    architecture:
      "A Spring Boot modular monolith with separate controller, service and repository responsibilities. Spring Security handles session authentication and CSRF protection; Spring Data JPA and Hibernate persist data in PostgreSQL, while Flyway manages schema migrations. The browser interface uses HTML, CSS and vanilla JavaScript and is served by the Spring Boot application.",
    challenges:
      "Implementing user-specific data access required ownership checks in service and repository queries, so knowing another record's ID does not grant access. Session-based authentication also required correctly handling CSRF tokens in frontend requests.",
    lessons:
      "Keeping business rules and ownership checks in the service layer makes the controller simpler and gives the application a clear place to test access rules. The project also includes automated unit and PostgreSQL integration tests in its CI workflow.",
    technologies: ["Java 17", "Spring Boot 3.4.5", "Spring Security", "Spring Data JPA", "Hibernate", "PostgreSQL", "Flyway", "JUnit 5", "Mockito", "Testcontainers", "JaCoCo", "Maven", "Docker", "GitHub Actions"],
    links: {
      live: "https://dualtrack-enterprise.onrender.com",
      github: "https://github.com/nestorNiloy/dualtrack-enterprise",
    },
  },
  {
    id: "bookloop-lite",
    tags: ["Full-Stack Engineering","Backend & APIs","CI/CD","Automated Testing"],
    title: "BookLoop Lite",
    subtitle: "Peer-to-peer book circulation platform",
    category: "Full-Stack Engineering",
    live: true,
    metrics: [
      { label: "Complete workflows", value: 2 },
      { label: "Client / server", value: "React + Express" },
      { label: "Persistence", value: "lowdb JSON" },
    ],
    summary:
      "A full-stack application where members manage personal book shelves, publish listings and request to borrow or exchange books. Registration, login, catalogue, listings and the Borrow and Exchange workflows are implemented. Sale and Rent are workflow prototypes without payment processing.",
    problem:
      "A peer-to-peer book community needs more than a catalogue: members need accounts, ownership-aware listings and clear request states that prevent the same book from being committed to conflicting transactions.",
    architecture:
      "A React 18 and Vite single-page application communicates with a Node.js and Express REST API. The backend uses JWTs in HTTP-only cookies for authentication, bcryptjs for password hashing and lowdb for JSON-file persistence. The frontend and backend are deployed separately on Vercel and Render.",
    challenges:
      "The Exchange workflow requires the requester to select a book they own and reserves both books while the request is pending. Declining restores the reservations; completing an exchange transfers ownership in both directions. Request-changing operations are serialized within the single Node.js process to reduce overlapping read-modify-write updates; this is not distributed locking.",
    lessons:
      "The project includes backend integration tests and a GitHub Actions workflow that runs the tests, builds the frontend and audits dependencies. The current lowdb JSON store and free-host filesystem are suitable for a demonstration, not durable production storage. Sale and Rent do not process payments; rental periods, returns and overdue handling are not implemented.",
    technologies: ["React 18", "Vite 6", "React Router 7", "Axios", "Node.js", "Express 4", "REST API", "JWT", "HTTP-only Cookies", "bcryptjs", "lowdb", "Node.js Test Runner", "GitHub Actions", "Vercel", "Render"],
    links: {
      live: "https://bookloop-lite.vercel.app",
      api: "https://bookloop-lite-backend.onrender.com",
      github: "https://github.com/nestorNiloy/bookloop-lite",
    },
  },
  {
    id: "transit-intel-platform",
    tags: ["Backend & APIs","Data Engineering","Analytics & BI","CI/CD","Automated Testing"],
    title: "Transit Intelligence Platform",
    subtitle: "Public transport delay analytics with a FastAPI backend",
    category: "Python Backend & Data Processing",
    live: true,
    metrics: [
      { label: "Documented API routes", value: 12 },
      { label: "Sample observations", value: "≈1,200" },
      { label: "Ingestion sources", value: 2 },
    ],
    summary:
      "A FastAPI application for exploring regional rail delay patterns. It stores normalized trip observations, calculates station and route metrics, and presents analytics in a browser dashboard. The demo starts with generated sample data; HAFAS departure ingestion can be triggered manually.",
    problem:
      "Raw departure observations are difficult to compare over time. This project structures trip records so that delay, on-time rate and station-level performance can be queried and explored.",
    architecture:
      "A Python modular monolith built with FastAPI, SQLAlchemy's async ORM and SQLite. The application separates HTTP routes, request/response schemas, data-access functions, analytics rules and an external HAFAS adapter. Jinja2 renders the dashboard, with Chart.js used for charts.",
    challenges:
      "The external departure source is a community-run HAFAS wrapper, so requests need bounded retries and response normalization. Live ingestion is manually triggered rather than scheduled, and the Render Free deployment uses an ephemeral filesystem; the public demo therefore relies on generated sample data when its database is empty.",
    lessons:
      "A clear distinction between synthetic demonstration data and manually ingested external observations is essential when presenting analytics. The project also includes input validation, protected production ingestion endpoints, pytest checks and a GitHub Actions CI workflow.",
    technologies: ["Python 3.11", "FastAPI", "SQLAlchemy 2.0 async", "Pydantic v2", "SQLite", "httpx", "Jinja2", "Chart.js", "pytest", "GitHub Actions", "Render"],
    links: {
      live: "https://transit-intel-platform.onrender.com/",
      apiDocs: "https://transit-intel-platform.onrender.com/docs",
      github: "https://github.com/nestorNiloy/transit-intel-platform",
    },
  },
  {
    id: "atm-transaction-dashboard",
    tags: ["Full-Stack Engineering","Backend & APIs","Data Engineering","Analytics & BI"],
    title: "ATM Transaction Dashboard",
    subtitle: "Banking operations analytics with a separate Flask API",
    category: "Full-Stack Analytics",
    live: true,
    metrics: [
      { label: "Transaction records", value: 11076 },
      { label: "ATMs represented", value: 2790 },
      { label: "States represented", value: 11 },
    ],
    summary:
      "An analytics dashboard built around 11,076 FY2024 ATM transaction records covering 2,790 ATMs across 11 states. A Flask API aggregates the data and supplies filters; a separate Chart.js frontend displays transaction, revenue, cost, uptime and profitability views.",
    problem:
      "Transaction-level spreadsheets make it difficult to compare performance across ATMs and regions. The dashboard groups the source data into KPIs and visual summaries that can be filtered by state, month and ATM type.",
    architecture:
      "A decoupled setup with a Flask API hosted on Render and a static HTML/CSS/JavaScript dashboard hosted on GitHub Pages. Pandas handles data aggregation in the backend, and the browser requests the resulting data over HTTP.",
    challenges:
      "The dashboard needs consistent aggregations across transaction, ATM and state views. Separating the frontend and API also required configuring cross-origin requests and providing a static fallback when the API is unavailable.",
    lessons:
      "Separating data processing from presentation makes it possible to update the API and dashboard independently. The project also demonstrates how to expose analytical results through a small set of filterable API routes.",
    technologies: ["Python", "Flask", "Pandas", "JavaScript", "Chart.js", "Render", "GitHub Pages"],
    links: {
      live: "https://nestorniloy.github.io/atm-transaction-dashboard/Web%20dashboard/atm-dashboard.html",
      api: "https://atm-dashboard-api.onrender.com",
      github: "https://github.com/nestorNiloy/atm-transaction-dashboard",
    },
  },
  {
    id: "european-city-score-engine",
    tags: ["Analytics & BI","Data Analysis"],
    title: "European City Score Engine",
    subtitle: "Interactive city comparison using weighted scoring",
    category: "Data Analysis & Visualization",
    live: true,
    metrics: [
      { label: "Cities compared", value: 5 },
      { label: "Scoring factors", value: 4 },
      { label: "Job data source", value: "Adzuna API" },
    ],
    summary:
      "A Streamlit application that compares Berlin, Munich, Amsterdam, Vienna and Zurich using job-market data from the Adzuna API alongside static cost-of-living, safety and internet-speed indices. Users adjust factor weights and see the city scores update.",
    problem:
      "City rankings often apply fixed priorities. This tool lets users change the relative importance of job opportunities, living costs, safety and internet speed.",
    architecture:
      "The Streamlit interface uses a data-fetching module for Adzuna and reference data, and a scoring module for min-max normalization and weighted totals. Plotly visualizes the city comparisons.",
    challenges:
      "The project combines job-market values retrieved from an API with static reference indices. These inputs need to be normalized onto a common scale before the weighted scores can be compared.",
    lessons:
      "Making the scoring weights visible and requiring them to total 100 keeps the ranking logic understandable instead of hiding how the final score is calculated.",
    technologies: ["Python", "Streamlit", "Pandas", "Plotly", "Adzuna API"],
    links: {
      live: "https://european-city-score-engine.streamlit.app",
      github: "https://github.com/nestorNiloy/european-city-score-engine",
    },
  },
  {
    id: "job-market-analyzer",
    tags: ["Analytics & BI","Data Analysis"],
    title: "Job Market Analyzer",
    subtitle: "Exploratory analysis of 61,953 job postings",
    category: "Data Analysis & Business Intelligence",
    live: false,
    metrics: [
      { label: "Job postings", value: 61953 },
      { label: "Dataset fields", value: 27 },
      { label: "Analysis tools", value: "Python + Power BI" },
    ],
    summary:
      "An exploratory analysis of 61,953 job postings and 27 dataset fields using Python, Pandas, Matplotlib and Seaborn. The repository also includes a Power BI report built from the same dataset.",
    problem:
      "Individual job advertisements provide limited insight into broader hiring patterns. Aggregating the dataset makes it possible to compare job titles, companies, requested skills, work arrangements and schedule types.",
    architecture:
      "A Jupyter Notebook analysis workflow that loads the CSV dataset, cleans and normalizes fields with Pandas, then groups and visualizes the results. A separate Power BI report presents selected findings from the same data.",
    challenges:
      "The source dataset contains inconsistent text categories and formatting. Cleaning those values before grouping is necessary to avoid splitting equivalent skills or categories across multiple labels.",
    lessons:
      "The analysis found SQL to be the most frequently mentioned skill in this dataset. The findings describe this particular dataset and should not be treated as a complete measurement of the entire job market.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook", "Power BI"],
    links: {
      dashboard: "https://app.powerbi.com/groups/me/reports/57fd1d03-881f-4366-9f9c-67cb151b5aa9/0f8da061594394de6575?experience=power-bi",
      github: "https://github.com/nestorNiloy/job-market-analyzer",
    },
  },
  {
    id: "techtrack-germany",
    tags: ["Geospatial & Mapping","Frontend Engineering"],
    title: "TechTrack Germany — CS Bachelor Map",
    subtitle: "Interactive map for exploring degree programmes in Germany",
    category: "JavaScript & Geospatial Visualization",
    live: true,
    metrics: [
      { label: "Programme entries", value: 33 },
      { label: "Sample placeholders", value: 6 },
      { label: "Filter dimensions", value: 3 },
    ],
    summary:
      "A browser-based Leaflet map for exploring 33 Computer Science and related bachelor programme entries in Germany. It supports search, full-time/dual-study filters, a tuition filter and a saved watchlist. The dataset includes six sample placeholders, which are identified in the repository documentation.",
    problem:
      "Comparing degree programmes requires checking separate university pages for location, study format, language and tuition information. This map brings the stored programme entries into one searchable interface.",
    architecture:
      "A static HTML, CSS and vanilla JavaScript application. Leaflet renders the map, data.js stores programme entries, app.js handles filtering and map/list interaction, and localStorage persists the watchlist in the browser. There is no application backend or build step.",
    challenges:
      "The project stores programme details in a manually maintained data file, so entries need ongoing verification against official university pages. The repository documentation explicitly marks six entries as sample placeholders rather than verified programme records.",
    lessons:
      "A small static application can provide useful search, map and persistence features without a frontend framework or backend when the data and interaction requirements are limited.",
    technologies: ["JavaScript", "HTML", "CSS", "Leaflet.js", "Browser localStorage", "GitHub Pages"],
    links: {
      live: "https://nestorniloy.github.io/TechTrack-Germany-CS-Bachelors/",
      github: "https://github.com/nestorNiloy/TechTrack-Germany-CS-Bachelors",
    },
  },
  {
    id: "job-application-agent",
    tags: ["Backend & APIs","Automation"],
    title: "Job Application Tracking Agent",
    subtitle: "FastAPI service for job discovery and application tracking",
    category: "Python Backend & Automation",
    live: false,
    metrics: [
      { label: "API endpoints", value: 7 },
      { label: "Workflow states", value: 6 },
      { label: "Job source", value: "Adzuna API" },
    ],
    summary:
      "A FastAPI application that retrieves job listings from the Adzuna API, checks them against target skills using a rule-based keyword-overlap method, and tracks records through a six-state review and application workflow. A vanilla JavaScript Kanban interface is served by the backend.",
    problem:
      "Searching for roles and keeping track of promising listings and application progress can become repetitive when handled manually across multiple job boards.",
    architecture:
      "An asynchronous FastAPI backend with SQLAlchemy models, Pydantic schemas, a data-access module and service functions for Adzuna requests, deduplication and rule-based matching. The static Kanban interface is served through FastAPI.",
    challenges:
      "The application uses Adzuna's external listing ID to avoid inserting the same job repeatedly. The matching logic is deterministic keyword overlap; it does not call an LLM or submit applications automatically.",
    lessons:
      "Separating job retrieval, matching and application-state handling makes the workflow easier to follow. The current matching method is deliberately described as rule-based rather than as generative AI.",
    technologies: ["Python 3.11", "FastAPI", "SQLAlchemy 2.0 async", "Pydantic v2", "SQLite", "httpx", "Uvicorn", "JavaScript"],
    links: {
      github: "https://github.com/nestorNiloy/job-application-agent",
    },
  },
]
