/**
 * Small pill used for technology tags on project cards.
 */
export function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border-subtle bg-bg-base px-2.5 py-1 text-xs font-medium text-text-muted">
      {children}
    </span>
  )
}
