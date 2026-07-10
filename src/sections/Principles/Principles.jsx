import { motion } from 'framer-motion'
import { principles, skills } from '../../data/skills'

export function Principles() {
  return (
    <section id="principles" aria-label="Engineering principles and tech stack" className="border-y border-border-subtle bg-bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-3xl font-bold text-text-main">Engineering principles</h2>
        <p className="mt-2 max-w-lg text-text-muted">
          Patterns pulled directly from the architecture of the projects above — not a
          generic list.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl border border-border-subtle bg-bg-base p-5"
            >
              <h3 className="font-display font-semibold text-text-main">{principle.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{principle.description}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="mt-16 font-display text-xl font-semibold text-text-main">Tech stack</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.category}>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
                {group.category}
              </h4>
              <ul className="mt-3 space-y-1.5 text-sm text-text-muted">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
