import type { LucideIcon } from 'lucide-react'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { useTheme } from '@/app/theme/useTheme'
import { segmentedToggleThumbVariants } from '@/components/layout/segmentedToggleThumb.styles'
import {
  themeSwitcherButtonVariants,
  themeSwitcherRootVariants,
} from '@/components/layout/ThemeSwitcher/ThemeSwitcher.styles'
import { ThemeMode } from '@/shared/domain'
import { useSwitcherThumb } from '@/shared/hooks/useSwitcherThumb'
import { cn } from '@/shared/utils/cn'

const THEME_SWITCH_ORDER: ThemeMode[] = [ThemeMode.Light, ThemeMode.Dark, ThemeMode.System]

const THEME_MODE_ICONS: Record<ThemeMode, LucideIcon> = {
  [ThemeMode.Light]: Sun,
  [ThemeMode.Dark]: Moon,
  [ThemeMode.System]: Monitor,
}

export default function ThemeSwitcher() {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useTheme()
  const { containerRef, thumb } = useSwitcherThumb(theme, i18n.language)

  return (
    <div
      ref={containerRef}
      className={themeSwitcherRootVariants()}
      role="group"
      aria-label={t('theme.switcherLabel')}
    >
      <span
        aria-hidden
        className={segmentedToggleThumbVariants()}
        style={{
          opacity: thumb.ready ? 1 : 0,
          width: thumb.width,
          transform: `translate3d(${thumb.x}px,0,0)`,
        }}
      />
      {THEME_SWITCH_ORDER.map((mode) => {
        const modeLabel = t(`theme.modes.${mode}`)
        const ModeIcon = THEME_MODE_ICONS[mode]

        return (
          <button
            key={mode}
            type="button"
            data-switcher-segment={mode}
            className={cn(
              themeSwitcherButtonVariants({
                state: theme === mode ? 'active' : 'idle',
              }),
            )}
            aria-label={modeLabel}
            aria-pressed={theme === mode}
            onClick={() => setTheme(mode)}
          >
            <ModeIcon className="mx-auto h-3.5 w-3.5 shrink-0 lg:hidden" aria-hidden />
            <span className="hidden lg:inline">{modeLabel}</span>
          </button>
        )
      })}
    </div>
  )
}
