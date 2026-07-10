import { motion } from 'framer-motion'

// Each line pre-built as JSX so keys/strings/punctuation get distinct
// colors without pulling in a full syntax-highlighter dependency.
const LINES = [
  <>{'{'}</>,
  <>  <span className="text-brand-primary">"engineer"</span>: <span className="text-brand-accent">"Niloy Barua"</span>,</>,
  <>  <span className="text-brand-primary">"focus"</span>: [</>,
  <>    <span className="text-brand-accent">"Backend Architecture"</span>,</>,
  <>    <span className="text-brand-accent">"Async Data Pipelines"</span>,</>,
  <>    <span className="text-brand-accent">"REST API Design"</span></>,
  <>  ],</>,
  <>  <span className="text-brand-primary">"patterns"</span>: [</>,
  <>    <span className="text-brand-accent">"Layered Architecture"</span>,</>,
  <>    <span className="text-brand-accent">"Repository Pattern"</span>,</>,
  <>    <span className="text-brand-accent">"Graceful Degradation"</span></>,
  <>  ],</>,
  <>  <span className="text-brand-primary">"status"</span>: <span className="text-brand-accent">"actively shipping"</span></>,
  <>{'}'}</>,
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.3 } },
}

const lineVariant = {
  hidden: { opacity: 0, x: -6 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
}

/**
 * Terminal-style panel that "types itself out" line by line on load,
 * rather than appearing as a static wall of pre-formatted text.
 */
export function TerminalPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="overflow-hidden rounded-2xl border border-border-subtle bg-bg-surface shadow-xl"
    >
      <div className="flex items-center gap-2 border-b border-border-subtle px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-2 text-xs text-text-muted">profile.json</span>
      </div>
      <motion.pre
        variants={container}
        initial="hidden"
        animate="visible"
        className="p-5 text-sm leading-relaxed text-text-main font-mono"
      >
        {LINES.map((line, index) => (
          <motion.div key={index} variants={lineVariant}>
            {line}
          </motion.div>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 1.4 }}
          className="inline-block h-4 w-2 translate-y-0.5 bg-brand-primary"
          aria-hidden="true"
        />
      </motion.pre>
    </motion.div>
  )
}
