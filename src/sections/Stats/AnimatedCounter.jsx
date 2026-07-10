import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Counts up from 0 to targetValue once the element scrolls into view.
 * Runs once per mount — re-scrolling past it doesn't replay the count.
 */
export function AnimatedCounter({ targetValue, display, duration = 1400 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!isInView) return
    const end = parseInt(targetValue, 10)
    if (Number.isNaN(end) || end === 0) {
      setCount(end || 0)
      return
    }

    const incrementTime = Math.max(Math.floor(duration / end), 16)
    let current = 0
    const timer = setInterval(() => {
      current += 1
      setCount(current)
      if (current >= end) clearInterval(timer)
    }, incrementTime)

    return () => clearInterval(timer)
  }, [isInView, targetValue, duration])

  return (
    <span ref={ref} className="font-display text-4xl font-bold tracking-tight text-text-main">
      {display ? display.replace(/[\d,]+/, count.toLocaleString()) : count.toLocaleString()}
    </span>
  )
}
