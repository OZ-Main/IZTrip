import { useTranslation } from 'react-i18next'

import {
  authBrandedAsideBulletVariants,
  authBrandedAsideGlowVariants,
  authBrandedAsideListItemVariants,
  authBrandedAsideListVariants,
  authBrandedAsideRootVariants,
} from '@/components/layout/AuthBrandedAside/AuthBrandedAside.styles'

const BULLET_KEYS = [
  'auth.marketingPoint1',
  'auth.marketingPoint2',
  'auth.marketingPoint3',
  'auth.marketingPoint4',
] as const

export default function AuthBrandedAside() {
  const { t } = useTranslation()

  return (
    <aside className={authBrandedAsideRootVariants()}>
      <div className={authBrandedAsideGlowVariants()} aria-hidden />
      <div className="relative z-10 space-y-relaxed">
        <p className="text-label font-semibold uppercase tracking-wide text-hero-foreground/75">
          {t('brand.name')}
        </p>
        <h2 className="text-balance font-display text-heading-xl font-semibold sm:text-display-lg">
          {t('auth.marketingTitle')}
        </h2>
        <p className="max-w-md text-body-lg text-hero-foreground/90">{t('auth.marketingLead')}</p>
        <ul className={authBrandedAsideListVariants()}>
          {BULLET_KEYS.map((key) => (
            <li key={key} className={authBrandedAsideListItemVariants()}>
              <span className={authBrandedAsideBulletVariants()} aria-hidden />
              <span>{t(key)}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="relative z-10 text-caption text-hero-foreground/70">
        {t('auth.marketingFootnote')}
      </p>
    </aside>
  )
}
