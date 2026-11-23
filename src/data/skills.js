/**
 * Technologies used in the projects shown here. This is a record of tools
 * used in the codebases, not a claim of professional-level mastery.
 */
export const skills = [
  {
    category: "Languages",
    items: ["Python", "Java 17", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Flask", "Spring Boot 3.4.5", "Spring Security", "SQLAlchemy 2.0", "Spring Data JPA", "Hibernate", "Pydantic v2"],
  },
  {
    category: "Data & Visualization",
    items: ["PostgreSQL", "SQLite", "Pandas", "Matplotlib", "Seaborn", "Plotly", "Chart.js", "Leaflet.js", "Power BI"],
  },
  {
    category: "Testing & Tooling",
    items: ["JUnit 5", "Mockito", "Testcontainers", "JaCoCo", "pytest", "Maven", "Docker", "Git", "GitHub Actions"],
  },
  {
    category: "Deployment & UI",
    items: ["Render", "GitHub Pages", "Streamlit", "Jinja2", "Framer Motion", "Tailwind CSS"],
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
