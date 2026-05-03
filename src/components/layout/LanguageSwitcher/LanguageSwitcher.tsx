import { useTranslation } from 'react-i18next'

import { useLanguage } from '@/app/i18n/useLanguage'
import {
  languageSwitcherButtonVariants,
  languageSwitcherRootVariants,
} from '@/components/layout/LanguageSwitcher/LanguageSwitcher.styles'
import { AppLanguage } from '@/shared/domain'
import { cn } from '@/shared/utils/cn'

export default function LanguageSwitcher() {
  const { t } = useTranslation()
  const { language, setLanguage } = useLanguage()

  return (
    <div
      className={languageSwitcherRootVariants()}
      role="group"
      aria-label={t('language.switcherLabel')}
    >
      {(Object.values(AppLanguage) as AppLanguage[]).map((code) => (
        <button
          key={code}
          type="button"
          className={cn(
            languageSwitcherButtonVariants({
              state: language === code ? 'active' : 'idle',
            }),
          )}
          onClick={() => setLanguage(code)}
        >
          {t(`language.codes.${code}`)}
        </button>
      ))}
    </div>
  )
}
