/**
 * Stats row. Recalculated after adding TechTrack Germany as project #7:
 * - 31 endpoints = 11 (Transit) + 8 (ATM) + 5 (Dual Study) + 7 (Job Agent)
 *   — TechTrack contributes 0 (deliberately backend-free)
 * - 12,500+ records = 11,076 (ATM) + 1,200 (transit seed) + ~400 (Adzuna
 *   listings) — TechTrack's 33 verified programs are a separate, smaller
 *   dataset by design (hand-curated, not bulk records), so not folded in
 * - 7 Production Systems = the 7 project repos actually shown as cards
 */
export const stats = [
  {
    value: 7,
    suffix: " Production Systems",
    label: "Engineered Software Systems",
    description: "Async Python/FastAPI backends, a Java Spring Boot enterprise layer, and a zero-build Leaflet.js geospatial tool — full-stack, frontend, and data analysis all represented.",
  },
  {
    value: 12500,
    suffix: "+ Records",
    label: "Data Pipeline Scope",
    description: "Ingesting, parsing, and normalizing 11k+ financial payloads, 1,200 transit log matrices, and hundreds of live Adzuna API postings.",
  },
  {
    value: 31,
    suffix: " Endpoints",
    label: "REST Architecture Core",
    description: "Robust transactional routes built across FastAPI, Spring Boot, and Flask with rigid Pydantic and DTO validation layers.",
  },
]
