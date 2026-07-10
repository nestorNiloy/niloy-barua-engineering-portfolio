import { stats } from '../../data/stats'
import { AnimatedNumber } from '../../components/AnimatedNumber/AnimatedNumber'

export function Stats() {
  return (
    <section aria-label="Engineering highlights" className="border-y border-border-subtle bg-bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <span className="text-4xl">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </span>
            <span className="font-display font-semibold text-text-main">{stat.label}</span>
            <span className="text-sm text-text-muted">{stat.description}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
