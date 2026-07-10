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
            Backend Systems Engineer
          </motion.span>
          <motion.h1 variants={item} className="font-display text-4xl font-bold leading-tight text-text-main sm:text-5xl">
            Niloy Barua builds backend systems that hold up under real data.
          </motion.h1>
          <motion.p variants={item} className="max-w-md text-base text-text-muted">
            Information Engineering student at HAW Hamburg with seven independently
            built projects spanning Python, Java, and JavaScript — REST API design,
            data pipelines, geospatial tools, and cloud deployment across Render,
            Railway, and Streamlit Cloud.
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
