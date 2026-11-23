import { useMemo, useState } from 'react'
import { projects } from '../../data/projects'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'

const FILTERS = [
  "Enterprise Architecture",
  "Full-Stack Engineering",
  "Backend & APIs",
  "Data Engineering",
  "Analytics & BI",
  "CI/CD",
  "Automated Testing",
  "Geospatial & Mapping",
  "Frontend Engineering",
  "Automation",
  "Data Analysis",
]

export function Projects() {
  const [selectedFilters, setSelectedFilters] = useState([])

  const visibleProjects = useMemo(() => {
    if (selectedFilters.length === 0) return projects
    return projects.filter((project) =>
      selectedFilters.some((filter) => project.tags?.includes(filter))
    )
  }, [selectedFilters])

  const toggleFilter = (filter) => {
    setSelectedFilters((current) =>
      current.includes(filter)
        ? current.filter((item) => item !== filter)
        : [...current, filter]
    )
  }

  return (
    <section id="projects" aria-label="Featured projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 max-w-2xl">
        <h2 className="font-display text-3xl font-bold text-text-main">Featured projects</h2>
        <p className="mt-2 text-text-muted">
          Eight projects, six with deployed demos. Explore them by engineering area,
          implementation and the practices used in each project.
        </p>
      </div>

      <div className="mb-8 rounded-2xl border border-border-subtle bg-bg-surface/70 p-4 sm:p-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-text-main">Explore by capability</h3>
            <p className="mt-1 text-xs text-text-muted">
              Select one or more. Projects matching any selected category are shown.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setSelectedFilters([])}
            disabled={selectedFilters.length === 0}
            className="text-xs font-medium text-text-muted underline decoration-border-subtle underline-offset-4 transition-colors hover:text-text-main disabled:cursor-default disabled:opacity-40"
          >
            Clear filters
          </button>
        </div>

        <div className="flex flex-wrap gap-2" aria-label="Project category filters">
          {FILTERS.map((filter) => {
            const selected = selectedFilters.includes(filter)
            return (
              <button
                key={filter}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleFilter(filter)}
                className={`project-filter-chip rounded-full border px-3.5 py-2 text-xs font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary ${
                  selected
                    ? 'project-filter-chip-active'
                    : 'border-border-subtle bg-bg-base text-text-muted hover:border-brand-primary/60 hover:text-text-main'
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>
        <p className="mt-4 text-xs text-text-muted" aria-live="polite">
          Showing {visibleProjects.length} of {projects.length} projects
          {selectedFilters.length > 0 && (
            <span> · {selectedFilters.length} {selectedFilters.length === 1 ? 'filter' : 'filters'} selected</span>
          )}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {visibleProjects.length > 0 ? (
          visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="rounded-xl border border-border-subtle p-8 text-center text-sm text-text-muted">
            No projects match these categories.
          </p>
        )}
      </div>
    </section>
  )
}
