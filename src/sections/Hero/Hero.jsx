import { motion } from 'framer-motion'
import { Button } from '../../components/Button/Button'
import { TerminalPanel } from './TerminalPanel'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Hero() {
  return (
    <section aria-label="Introduction" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.span variants={item} className="text-sm font-medium uppercase tracking-wide text-brand-primary">
            Information Engineering Student · Software Development
          </motion.span>
          <motion.h1 variants={item} className="font-display text-4xl font-bold leading-tight text-text-main sm:text-5xl">
            I build practical software, from backend APIs to data-driven applications.
          </motion.h1>
          <motion.p variants={item} className="max-w-md text-base text-text-muted">
            Information Engineering student at HAW Hamburg, building software projects
            with Python, Java and JavaScript. My work includes REST APIs, database-backed
            applications, data analysis and interactive web tools.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-3">
            <Button href="#projects">View projects</Button>
            <Button variant="secondary" href="#contact">
              Get in touch
            </Button>
          </motion.div>
        </motion.div>

        <TerminalPanel />
      </div>
    </section>
  )
}
