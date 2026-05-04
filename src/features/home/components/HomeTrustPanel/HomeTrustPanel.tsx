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
import { HERO_SURFACE_DECOR_CLIP_CLASSNAME } from '@/shared/constants/heroDecor.constants'
import { useIsNarrowViewport } from '@/shared/hooks/useIsNarrowViewport'
import { cn } from '@/shared/utils/cn'

const trustIcons = [MapPinned, ListChecks, ShieldCheck, HeartHandshake] as const

type TrustCardKey = 'routes' | 'pricing' | 'requests' | 'family'

const TRUST_CARD_KEYS: TrustCardKey[] = ['routes', 'pricing', 'requests', 'family']

export default function HomeTrustPanel() {
  const { t } = useTranslation()
  const isNarrowViewport = useIsNarrowViewport()
  const trustTitle = t(isNarrowViewport ? 'home.trust.titleShort' : 'home.trust.title')
  const trustDescription = t(isNarrowViewport ? 'home.trust.descriptionShort' : 'home.trust.description')

  return (
    <section className={homeTrustPanelRootVariants()}>
      <div className={HERO_SURFACE_DECOR_CLIP_CLASSNAME} aria-hidden>
        <div className={homeTrustPanelGlowVariants()} />
      </div>
      <div className={homeTrustPanelInnerVariants()}>
        <SectionHeader title={trustTitle} description={trustDescription} />
        <div className={homeTrustPanelGridVariants()}>
          {TRUST_CARD_KEYS.map((key, index) => {
            const Icon = trustIcons[index]

            return (
              <article
                key={key}
                className={cn(homeTrustPanelItemVariants(), index >= 2 && 'hidden sm:flex')}
              >
                <span className={homeTrustPanelIconVariants()}>
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                </span>
                <h3 className="text-balance font-display text-heading-sm font-semibold leading-snug text-foreground line-clamp-2 sm:line-clamp-none lg:text-heading-md">
                  {t(`home.trust.cards.${key}.title`)}
                </h3>
                <p className="text-pretty line-clamp-2 text-caption leading-relaxed text-muted-foreground sm:line-clamp-none sm:text-body-sm">
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
