import { useEffect, useRef, useState } from 'react'

function easeOutQuad(t) {
  return t * (2 - t)
}

/**
 * Counts up to `value` over a fixed `duration` once the element is
 * actually visible on screen. Uses a native IntersectionObserver directly
 * (rather than a wrapping library hook) so there's no ambiguity about
 * when the "visible" trigger fires.
 */
export function AnimatedNumber({ value, suffix = '', prefix = '', duration = 1400 }) {
  const [display, setDisplay] = useState(0)
  const [hasTriggered, setHasTriggered] = useState(false)
  const ref = useRef(null)

  // Watch for visibility
  useEffect(() => {
    const node = ref.current
    if (!node || hasTriggered) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasTriggered(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [hasTriggered])

  // Run the count-up once triggered
  useEffect(() => {
    if (!hasTriggered) return
    const target = Number(value)
    if (!Number.isFinite(target)) return

    let startTime = null
    let frameId

    function tick(now) {
      if (startTime === null) startTime = now
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      setDisplay(Math.round(target * easeOutQuad(progress)))
      if (progress < 1) frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [hasTriggered, value, duration])

  return (
    <span ref={ref} className="font-display font-bold tracking-tight text-text-main">
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}
