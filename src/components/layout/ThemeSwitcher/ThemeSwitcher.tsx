import { useTranslation } from 'react-i18next'

import { useTheme } from '@/app/theme/useTheme'
import {
  themeSwitcherButtonVariants,
  themeSwitcherRootVariants,
} from '@/components/layout/ThemeSwitcher/ThemeSwitcher.styles'
import { ThemeMode } from '@/shared/domain'
import { cn } from '@/shared/utils/cn'

const THEME_SWITCH_ORDER: ThemeMode[] = [ThemeMode.Light, ThemeMode.Dark, ThemeMode.System]

export default function ThemeSwitcher() {
  const { t } = useTranslation()
  const { theme, setTheme } = useTheme()

  return (
    <div className={themeSwitcherRootVariants()} role="group" aria-label={t('theme.switcherLabel')}>
      {THEME_SWITCH_ORDER.map((mode) => (
        <button
          key={mode}
          type="button"
          className={cn(
            themeSwitcherButtonVariants({
              state: theme === mode ? 'active' : 'idle',
            }),
          )}
          aria-pressed={theme === mode}
          onClick={() => setTheme(mode)}
        >
          {t(`theme.modes.${mode}`)}
        </button>
      ))}
    </div>
  )
}
