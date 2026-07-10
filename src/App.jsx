import { lazy, Suspense } from 'react'
import { Code2 } from 'lucide-react'
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle'
import { Hero } from './sections/Hero/Hero'
import { Stats } from './sections/Stats/Stats'
import { Principles } from './sections/Principles/Principles'
import { Contact } from './sections/Contact/Contact'

// Projects section renders 6 cards with modals — heaviest section on the
// page, so it's split into its own chunk and loaded after first paint.
const Projects = lazy(() => import('./sections/Projects/Projects').then((m) => ({ default: m.Projects })))

function ProjectsFallback() {
  return <div className="mx-auto h-96 max-w-6xl px-6 py-20" aria-hidden="true" />
}

function App() {
  return (
    <div className="min-h-screen bg-bg-base text-text-main font-body">
      <header className="border-b border-border-subtle">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display font-semibold tracking-tight">
            Niloy Barua
          </a>
          <div className="flex items-center gap-6">
            <a href="#projects" className="text-sm text-text-muted transition-colors hover:text-text-main">
              Projects
            </a>
            <a href="#principles" className="text-sm text-text-muted transition-colors hover:text-text-main">
              Stack
            </a>
            <a href="#contact" className="text-sm text-text-muted transition-colors hover:text-text-main">
              Contact
            </a>
            <a
              href="https://github.com/nestorNiloy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-text-muted transition-colors hover:text-text-main"
            >
              <Code2 size={18} aria-hidden="true" />
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <Stats />
        <Suspense fallback={<ProjectsFallback />}>
          <Projects />
        </Suspense>
        <Principles />
        <Contact />
      </main>

      <footer className="border-t border-border-subtle py-8 text-center text-sm text-text-muted">
        Built by Niloy Barua — React 19, Vite, Tailwind CSS v4, Framer Motion.
      </footer>
    </div>
  )
}

export default App
