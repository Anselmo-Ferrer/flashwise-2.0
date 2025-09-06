'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [changeIconTheme, setChangeIconTheme] = useState(true)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const initialTheme =
      storedTheme === 'dark' ||
      (!storedTheme && systemPrefersDark)
        ? 'dark'
        : 'light'

    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(initialTheme)

    setTheme(initialTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'

    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(newTheme)

    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
    setChangeIconTheme(!changeIconTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden cursor-pointer"
    >
      <Sun
        className={`absolute w-5 h-5 transition-transform duration-300 ease-in-out
          ${theme === 'light' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}
        `}
      />
      <Moon
        className={`absolute w-4 h-4 transition-transform duration-300 ease-in-out
          ${theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}
        `}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}