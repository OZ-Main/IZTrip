import { create } from 'zustand'

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/constants/theme.constants'
import { AppLanguage, ThemeMode } from '@/shared/domain'
import { readStoredAppLanguage } from '@/shared/helpers/storedLanguage.helpers'
import { readStoredThemeMode } from '@/shared/helpers/storedTheme.helpers'

type SettingsState = {
  theme: ThemeMode
  language: AppLanguage
  setTheme: (nextTheme: ThemeMode) => void
  setLanguage: (nextLanguage: AppLanguage) => void
}

function persistThemeMode(nextTheme: ThemeMode) {
  try {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, nextTheme)
  } catch {
    /* ignore */
  }
}

export const useSettingsStore = create<SettingsState>((set) => ({
  theme: readStoredThemeMode(),
  language: readStoredAppLanguage(),
  setTheme: (nextTheme) => {
    set({ theme: nextTheme })
    persistThemeMode(nextTheme)
  },
  setLanguage: (nextLanguage) => set({ language: nextLanguage }),
}))
