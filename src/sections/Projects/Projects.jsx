import { projects } from '../../data/projects'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'

export function Projects() {
  return (
    <section id="projects" aria-label="Featured projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 max-w-lg">
        <h2 className="font-display text-3xl font-bold text-text-main">Featured projects</h2>
        <p className="mt-2 text-text-muted">
          Seven projects, five with deployed demos. Open a project to see its
          purpose, implementation, trade-offs and the tools used to build it.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
