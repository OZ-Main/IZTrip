import { useTranslation } from 'react-i18next'

import { useLanguage } from '@/app/i18n/useLanguage'
import {
  languageSwitcherButtonVariants,
  languageSwitcherRootVariants,
  languageSwitcherTrackVariants,
} from '@/components/layout/LanguageSwitcher/LanguageSwitcher.styles'
import { segmentedToggleThumbVariants } from '@/components/layout/segmentedToggleThumb.styles'
import { AppLanguage } from '@/shared/domain'
import { useSwitcherThumb } from '@/shared/hooks/useSwitcherThumb'
import { cn } from '@/shared/utils/cn'

export default function LanguageSwitcher() {
  const { t } = useTranslation()
  const { language, setLanguage } = useLanguage()
  const { containerRef, thumb } = useSwitcherThumb(language)

  return (
    <div
      ref={containerRef}
      className={languageSwitcherRootVariants()}
      role="group"
      aria-label={t('language.switcherLabel')}
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
      <div className={languageSwitcherTrackVariants()}>
        {(Object.values(AppLanguage) as AppLanguage[]).map((code) => (
          <button
            key={code}
            type="button"
            data-switcher-segment={code}
            className={cn(
              languageSwitcherButtonVariants({
                state: language === code ? 'active' : 'idle',
              }),
            )}
            onClick={() => setLanguage(code)}
          >
            <span className="min-w-0 truncate">{t(`language.codes.${code}`)}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
