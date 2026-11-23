/**
 * Technologies used in the featured project repositories and in this
 * portfolio itself. The separate portfolio category makes that distinction
 * visible rather than implying every tool appears in every project.
 */
export const skills = [
  {
    category: "Languages",
    items: ["Python", "Java 17", "JavaScript"],
  },
  {
    category: "Backend & APIs",
    items: ["FastAPI", "Flask", "Spring Boot 3.4.5", "Spring Security", "SQLAlchemy 2.0", "Spring Data JPA", "Hibernate", "Pydantic v2", "Jinja2"],
  },
  {
    category: "Data & Databases",
    items: ["PostgreSQL", "SQLite", "Pandas", "Power BI"],
  },
  {
    category: "Frontend & Visualization",
    items: ["HTML", "CSS", "Chart.js", "Leaflet.js", "Streamlit", "Plotly", "Matplotlib", "Seaborn", "Browser localStorage"],
  },
  {
    category: "Testing & Tooling",
    items: ["JUnit 5", "Mockito", "Testcontainers", "JaCoCo", "pytest", "Maven", "Docker", "Git", "GitHub Actions"],
  },
  {
    category: "Portfolio & Hosting",
    items: ["React 19", "Vite", "Tailwind CSS v4", "Framer Motion", "Lucide React", "Render", "GitHub Pages"],
  },
]

export const principles = [
  {
    title: "Separation of Responsibilities",
    description:
      "DualTrack Enterprise separates controllers, services and repositories. The Python projects also separate request handling, data access and application-specific processing.",
  },
  {
    title: "Validation and Access Control",
    description:
      "The Spring Boot application uses request validation, session authentication, CSRF protection and user-ownership checks. Transit ingestion endpoints are protected by an admin key in production.",
  },
  {
    title: "Testing and Continuous Integration",
    description:
      "DualTrack Enterprise includes JUnit and PostgreSQL integration tests, with GitHub Actions running the build and test workflow. Transit Intel Platform also has pytest checks and a CI workflow.",
  },
  {
    title: "Working with External Data",
    description:
      "The Adzuna and HAFAS integrations normalize external responses and handle repeated records. The Transit demo clearly separates generated sample observations from manually ingested departures.",
  },
]
