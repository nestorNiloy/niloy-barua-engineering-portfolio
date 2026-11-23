import { motion } from 'framer-motion'

const LINES = [
  <>{'{'}</>,
  <>  <span className="text-brand-primary">"name"</span>: <span className="text-brand-accent">"Niloy Barua"</span>,</>,
  <>  <span className="text-brand-primary">"current_role"</span>: <span className="text-brand-accent">"Information Engineering student"</span>,</>,
  <>  <span className="text-brand-primary">"languages"</span>: [</>,
  <>    <span className="text-brand-accent">"Python"</span>,</>,
  <>    <span className="text-brand-accent">"Java"</span>,</>,
  <>    <span className="text-brand-accent">"JavaScript"</span></>,
  <>  ],</>,
  <>  <span className="text-brand-primary">"project_focus"</span>: [</>,
  <>    <span className="text-brand-accent">"Backend applications"</span>,</>,
  <>    <span className="text-brand-accent">"Data analysis"</span>,</>,
  <>    <span className="text-brand-accent">"Web tools"</span></>,
  <>  ]</>,
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
