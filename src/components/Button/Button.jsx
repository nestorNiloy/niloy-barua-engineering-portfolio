const VARIANTS = {
  primary:
    "bg-brand-primary text-white hover:opacity-90",
  secondary:
    "border border-border-subtle text-text-main hover:border-brand-primary hover:text-brand-primary",
  ghost:
    "text-text-muted hover:text-text-main",
}

/**
 * Multi-variant button. Renders as <a> when `href` is passed, otherwise <button>.
 * Always keyboard-operable and gets the global :focus-visible ring for free.
 */
export function Button({ variant = "primary", href, children, className = "", ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${VARIANTS[variant]} ${className}`

  if (href) {
    const isInternalAnchor = href.startsWith('#')
    const externalProps = isInternalAnchor
      ? {}
      : { target: '_blank', rel: 'noopener noreferrer' }

    return (
      <a href={href} className={classes} {...externalProps} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
