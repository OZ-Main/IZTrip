import { HeartHandshake, ListChecks, MapPinned, ShieldCheck } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import SectionHeader from '@/components/layout/SectionHeader/SectionHeader'
import {
  homeTrustPanelGlowVariants,
  homeTrustPanelGridVariants,
  homeTrustPanelIconVariants,
  homeTrustPanelInnerVariants,
  homeTrustPanelItemVariants,
  homeTrustPanelRootVariants,
} from '@/features/home/components/HomeTrustPanel/HomeTrustPanel.styles'

const trustIcons = [MapPinned, ListChecks, ShieldCheck, HeartHandshake] as const

type TrustCardKey = 'routes' | 'pricing' | 'requests' | 'family'

const TRUST_CARD_KEYS: TrustCardKey[] = ['routes', 'pricing', 'requests', 'family']

export default function HomeTrustPanel() {
  const { t } = useTranslation()

  return (
    <section className={homeTrustPanelRootVariants()}>
      <div className={homeTrustPanelGlowVariants()} aria-hidden />
      <div className={homeTrustPanelInnerVariants()}>
        <SectionHeader title={t('home.trust.title')} description={t('home.trust.description')} />
        <div className={homeTrustPanelGridVariants()}>
          {TRUST_CARD_KEYS.map((key, index) => {
            const Icon = trustIcons[index]

            return (
              <article key={key} className={homeTrustPanelItemVariants()}>
                <span className={homeTrustPanelIconVariants()}>
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-balance font-display text-heading-sm font-semibold text-foreground">
                  {t(`home.trust.cards.${key}.title`)}
                </h3>
                <p className="text-pretty text-body-sm leading-relaxed text-muted-foreground">
                  {t(`home.trust.cards.${key}.body`)}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
