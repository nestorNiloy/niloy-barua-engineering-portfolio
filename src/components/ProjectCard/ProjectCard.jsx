import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Code2, FileText, BookOpen } from 'lucide-react'
import { Badge } from '../Badge/Badge'
import { Button } from '../Button/Button'
import { AnimatedNumber } from '../AnimatedNumber/AnimatedNumber'

/**
 * Metric readout that animates numeric values on scroll into view,
 * and falls back to plain text for non-numeric metrics (e.g. "Live Adzuna API").
 */
function CardMetric({ label, value, suffix = '' }) {
  const isNumeric = typeof value === 'number'
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-display text-2xl font-bold text-text-main">
        {isNumeric ? <AnimatedNumber value={value} suffix={suffix} /> : value}
      </span>
      <span className="text-xs text-text-muted">{label}</span>
    </div>
  )
}

/**
 * Project card + detail modal. The title/summary block opens the modal;
 * Code/Live/Docs are real sibling <a> elements, not nested inside a
 * <button>, so they stay valid HTML and keyboard/screen-reader friendly.
 */
export function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef(null)
  const modalRef = useRef(null)

  const close = () => {
    setIsOpen(false)
    triggerRef.current?.focus()
  }

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        close()
        return
      }
      if (event.key !== 'Tab' || !modalRef.current) return

      const focusable = modalRef.current.querySelectorAll(
        'button, a[href], [tabindex]:not([tabindex="-1"])'
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    modalRef.current?.querySelector('button, a[href]')?.focus()
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const { links = {} } = project

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        whileHover={{ y: -4 }}
        className="relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface p-6 shadow-sm transition-shadow duration-300 hover:shadow-[0_0_40px_-12px_var(--color-brand-primary)] sm:p-8"
      >
        <span className="card-accent-bar absolute inset-x-0 top-0 h-[3px]" aria-hidden="true" />
        <div className="flex flex-wrap items-start justify-between gap-3">
          <span className="text-xs font-medium uppercase tracking-wide text-brand-primary">
            {project.category}
          </span>
          {project.comingSoon && (
            <span className="rounded-full border border-border-subtle px-2.5 py-1 text-xs font-medium text-text-muted">
              Repository not yet public
            </span>
          )}
        </div>

        <button
          ref={triggerRef}
          onClick={() => setIsOpen(true)}
          className="flex flex-col items-start gap-2 text-left focus-visible:outline-2 focus-visible:outline-brand-primary"
          aria-haspopup="dialog"
        >
          <h3 className="font-display text-xl font-semibold text-text-main">{project.title}</h3>
          <p className="text-sm text-text-muted">{project.subtitle}</p>
          <p className="mt-1 text-sm text-text-main">{project.summary}</p>
        </button>

        <div className="grid grid-cols-2 gap-4 rounded-xl border border-border-subtle p-4 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <CardMetric key={metric.label} label={metric.label} value={metric.value} suffix={metric.suffix} />
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          <Button variant="ghost" onClick={() => setIsOpen(true)}>
            <FileText size={16} aria-hidden="true" /> Full breakdown
          </Button>
          {project.live && links.live && (
            <Button href={links.live}>
              <ExternalLink size={16} aria-hidden="true" /> Live
            </Button>
          )}
          {!project.live && links.frontendPreview && (
            <Button variant="secondary" href={links.frontendPreview}>
              <ExternalLink size={16} aria-hidden="true" /> Frontend preview
            </Button>
          )}
          {links.notebook && (
            <Button variant="secondary" href={links.notebook}>
              <BookOpen size={16} aria-hidden="true" /> Notebook
            </Button>
          )}
          {links.github && (
            <Button variant="secondary" href={links.github}>
              <Code2 size={16} aria-hidden="true" /> Code
            </Button>
          )}
        </div>
      </motion.article>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`${project.id}-title`}
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-border-subtle bg-bg-surface p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 id={`${project.id}-title`} className="font-display text-xl font-semibold text-text-main">
                    {project.title}
                  </h2>
                  <p className="mt-1 text-sm text-text-muted">{project.subtitle}</p>
                </div>
                <button
                  onClick={close}
                  aria-label="Close project details"
                  className="rounded-md p-1.5 text-text-muted hover:text-text-main"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl border border-border-subtle p-4 sm:grid-cols-3">
                {project.metrics.map((metric) => (
                  <CardMetric key={metric.label} label={metric.label} value={metric.value} suffix={metric.suffix} />
                ))}
              </div>

              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="font-display text-xs font-semibold uppercase tracking-wide text-text-muted">
                    Problem
                  </dt>
                  <dd className="mt-1.5 text-text-main">{project.problem}</dd>
                </div>
                <div>
                  <dt className="font-display text-xs font-semibold uppercase tracking-wide text-text-muted">
                    Architecture
                  </dt>
                  <dd className="mt-1.5 text-text-main">{project.architecture}</dd>
                </div>
                <div>
                  <dt className="font-display text-xs font-semibold uppercase tracking-wide text-text-muted">
                    Challenges
                  </dt>
                  <dd className="mt-1.5 text-text-main">{project.challenges}</dd>
                </div>
                <div>
                  <dt className="font-display text-xs font-semibold uppercase tracking-wide text-text-muted">
                    Lessons
                  </dt>
                  <dd className="mt-1.5 text-text-main">{project.lessons}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.live && links.live && (
                  <Button href={links.live}>
                    <ExternalLink size={16} aria-hidden="true" /> Live demo
                  </Button>
                )}
                {links.apiDocs && (
                  <Button variant="secondary" href={links.apiDocs}>
                    <ExternalLink size={16} aria-hidden="true" /> API docs
                  </Button>
                )}
                {!project.live && links.frontendPreview && (
                  <Button variant="secondary" href={links.frontendPreview}>
                    <ExternalLink size={16} aria-hidden="true" /> Frontend preview
                  </Button>
                )}
                {links.notebook && (
                  <Button variant="secondary" href={links.notebook}>
                    <BookOpen size={16} aria-hidden="true" /> Notebook
                  </Button>
                )}
                {links.github && (
                  <Button variant="secondary" href={links.github}>
                    <Code2 size={16} aria-hidden="true" /> Source
                  </Button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
