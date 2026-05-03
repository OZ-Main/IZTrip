import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constants/theme.constants'
import { ThemeMode } from '@/shared/domain'

import { isThemeMode } from '@/shared/helpers/themeMode.helpers'

export function readStoredThemeMode(): ThemeMode {
  if (typeof window === 'undefined') {
    return ThemeMode.System
  }

  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
    if (stored && isThemeMode(stored)) {
      return stored
    }
  } catch {
    /* ignore */
  }

  return ThemeMode.System
}
