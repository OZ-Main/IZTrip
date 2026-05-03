import { create } from 'zustand'

import { AppLanguage, ThemeMode } from '@/shared/domain'
import { readStoredAppLanguage } from '@/shared/helpers/storedLanguage.helpers'

type SettingsState = {
  theme: ThemeMode
  language: AppLanguage
  setTheme: (nextTheme: ThemeMode) => void
  setLanguage: (nextLanguage: AppLanguage) => void
}

export const useSettingsStore = create<SettingsState>((set) => ({
  theme: ThemeMode.System,
  language: readStoredAppLanguage(),
  setTheme: (nextTheme) => set({ theme: nextTheme }),
  setLanguage: (nextLanguage) => set({ language: nextLanguage }),
}))
