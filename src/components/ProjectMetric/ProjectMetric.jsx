/**
 * Structured key/value readout used inside project cards and the detail modal.
 */
export function ProjectMetric({ label, value }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-display text-lg font-semibold text-text-main">{value}</span>
      <span className="text-xs text-text-muted">{label}</span>
    </div>
  )
}
