import React, { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from './icons/icons'

const THEME_KEY = 'theme'
const THEME_CLASS = 'dark'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Initialize theme on mount
    const initTheme = () => {
      try {
        const saved = localStorage.getItem(THEME_KEY)
        
        if (saved === 'dark' || saved === 'light') {
          const shouldBeDark = saved === 'dark'
          setIsDark(shouldBeDark)
          applyTheme(shouldBeDark)
        } else {
          // Check system preference
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
          setIsDark(prefersDark)
          applyTheme(prefersDark)
        }
      } catch (e) {
        // Fallback to light mode
        setIsDark(false)
        applyTheme(false)
      } finally {
        setIsLoaded(true)
      }
    }

    initTheme()

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem(THEME_KEY)
      // Only update if user hasn't set a preference
      if (!saved) {
        setIsDark(e.matches)
        applyTheme(e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const applyTheme = (dark: boolean) => {
    const html = document.documentElement
    if (dark) {
      html.classList.add(THEME_CLASS)
    } else {
      html.classList.remove(THEME_CLASS)
    }
  }

  const toggle = () => {
    const nextTheme = !isDark
    setIsDark(nextTheme)
    applyTheme(nextTheme)
    
    try {
      localStorage.setItem(THEME_KEY, nextTheme ? 'dark' : 'light')
    } catch (e) {
      console.warn('Failed to save theme preference:', e)
    }
  }

  // Prevent flash of unstyled content
  if (!isLoaded || isDark === null) {
    return (
      <button 
        aria-label="Loading theme toggle" 
        className="theme-toggle" 
        disabled
        style={{ opacity: 0.5 }}
      >
        <div className="w-6 h-6" />
      </button>
    )
  }

  return (
    <button 
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="theme-toggle"
      onClick={toggle}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <SunIcon className="w-6 h-6" aria-hidden="true" />
      ) : (
        <MoonIcon className="w-6 h-6" aria-hidden="true" />
      )}
    </button>
  )
}
