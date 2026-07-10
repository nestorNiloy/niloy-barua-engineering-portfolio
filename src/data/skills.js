/**
 * Skills grouped by category for the tech-stack grid.
 * Kept to technologies actually used and shipped across the four
 * confirmed projects — not an aspirational list.
 */

export const skills = [
  {
    category: "Languages",
    items: ["Python", "Java 17", "JavaScript"],
  },
  {
    category: "Backend & Frameworks",
    items: ["FastAPI", "Spring Boot 3.2", "SQLAlchemy 2.0 (async)", "Spring Data JPA / Hibernate", "Pydantic v2"],
  },
  {
    category: "Data & Databases",
    items: ["SQLite", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    category: "Tooling & Deployment",
    items: ["Streamlit", "Maven", "Git", "GitHub Actions", "Railway", "Jupyter Notebook"],
  },
]

/**
 * Engineering principles panel — real patterns pulled from the
 * architecture sections of the projects above, not a generic list.
 */
export const principles = [
  {
    title: "Layered Architecture",
    description:
      "Controller/Service/Repository in the Spring Boot tracker; router/service/data-layer split in the Streamlit and FastAPI projects. Business logic never sits directly on top of the database.",
  },
  {
    title: "Async-First Backend Design",
    description:
      "Transit Intel Platform runs on SQLAlchemy 2.0's async engine end to end, so live external API calls don't block request handling.",
  },
  {
    title: "Graceful Degradation on Unreliable Data Sources",
    description:
      "Live integrations (Adzuna, Deutsche Bahn's HAFAS feed) fail sometimes. Retry-then-log-and-skip beats retry-until-crash for anything pulling from a public, unauthenticated API.",
  },
  {
    title: "Deduplication by Source Identity",
    description:
      "Records from re-scraped or re-polled sources are matched by the source's own ID (HAFAS tripId, Adzuna external_id) rather than by insert order, so re-running ingestion never duplicates data.",
  },
]
