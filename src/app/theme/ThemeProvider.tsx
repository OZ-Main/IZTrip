import { useCallback, useEffect, useMemo, type ReactNode } from 'react'

import { useSettingsStore } from '@/app/store/settingsStore'
import { ThemeContext } from '@/app/theme/theme-context'
import { ResolvedTheme, ThemeMode } from '@/shared/domain'

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') {
    return ResolvedTheme.Light
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? ResolvedTheme.Dark
    : ResolvedTheme.Light
}

function resolveThemeFromMode(theme: ThemeMode): ResolvedTheme {
  if (theme === ThemeMode.System) {
    return getSystemTheme()
  }

  if (theme === ThemeMode.Dark) {
    return ResolvedTheme.Dark
  }

  return ResolvedTheme.Light
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSettingsStore((settingsStore) => settingsStore.theme)
  const setTheme = useSettingsStore((settingsStore) => settingsStore.setTheme)

  const resolvedTheme = resolveThemeFromMode(theme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove(ResolvedTheme.Light, ResolvedTheme.Dark)
    root.classList.add(resolvedTheme)
  }, [resolvedTheme])

  useEffect(() => {
    if (theme !== ThemeMode.System) {
      return
    }

    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      const next = mq.matches ? ResolvedTheme.Dark : ResolvedTheme.Light
      document.documentElement.classList.remove(ResolvedTheme.Light, ResolvedTheme.Dark)
      document.documentElement.classList.add(next)
    }

    mq.addEventListener('change', handler)

    return () => mq.removeEventListener('change', handler)
  }, [theme])

  const setThemeStable = useCallback(
    (nextTheme: ThemeMode) => {
      setTheme(nextTheme)
    },
    [setTheme],
  )

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme: setThemeStable,
    }),
    [theme, resolvedTheme, setThemeStable],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
