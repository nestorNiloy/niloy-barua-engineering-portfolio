import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

/**
 * Aria-compliant theme switcher. Wraps useTheme so any component
 * can drop this in without knowing about the underlying hook.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle system color theme layer"
      className="rounded-md p-2 text-text-muted transition-colors hover:text-text-main"
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  )
}
