import { MapPin, Users, Wallet } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { useAuthStore } from '@/app/store/authStore'
import { Button } from '@/components/ui/button'
import {
  homeHeroBadgeRowVariants,
  homeHeroBadgeVariants,
  homeHeroCtaSharedClassName,
  homeHeroGlowSecondaryVariants,
  homeHeroGlowVariants,
  homeHeroGridVariants,
  homeHeroMeshVariants,
  homeHeroPreviewImageFigureVariants,
  homeHeroPreviewImageLinkVariants,
  homeHeroPreviewImageMobileCaptionEyebrowVariants,
  homeHeroPreviewImageMobileCaptionMetaVariants,
  homeHeroPreviewImageMobileCaptionTitleVariants,
  homeHeroPreviewImageMobileCaptionVariants,
  homeHeroPreviewDesktopOverlayEyebrowVariants,
  homeHeroPreviewDesktopOverlayMetaVariants,
  homeHeroPreviewDesktopOverlayTitleVariants,
  homeHeroPreviewImageVariants,
  homeHeroPreviewStackVariants,
  homeHeroPreviewVariants,
  homeHeroRootVariants,
  homeHeroTrustItemVariants,
  homeHeroTrustListVariants,
} from '@/features/home/components/HomeHero/HomeHero.styles'
import {
  formatTripDurationDays,
  formatTripPriceEur,
} from '@/features/trips/helpers/tripFormat.helpers'
import type { TripDefinition } from '@/features/trips/types/trip.types'
import { HERO_SURFACE_DECOR_CLIP_CLASSNAME } from '@/shared/constants/heroDecor.constants'
import { APP_ROUTE } from '@/shared/constants/routes.constants'
import { useIsNarrowViewport } from '@/shared/hooks/useIsNarrowViewport'
import { cn } from '@/shared/utils/cn'

type HomeHeroProps = {
  previewTrip: TripDefinition
  className?: string
}

export default function HomeHero({ previewTrip, className }: HomeHeroProps) {
  const { t } = useTranslation()
  const user = useAuthStore((authStore) => authStore.user)
  const isNarrowViewport = useIsNarrowViewport()
  const detailsPath = APP_ROUTE.tripDetails(previewTrip.slug)
  const heroTitle = t(isNarrowViewport ? 'home.hero.titleShort' : 'home.hero.title')
  const heroSubtitle = t(isNarrowViewport ? 'home.hero.subtitleShort' : 'home.hero.subtitle')
  const previewTripTitle = t(`trips.catalog.${previewTrip.slug}.title`)
  const previewMetaLine = t('home.hero.previewMeta', {
    duration: formatTripDurationDays(previewTrip.durationDays, t),
    price: formatTripPriceEur(previewTrip.priceEur),
  })
  const previewTripLinkLabel = t('home.hero.previewTripLinkLabel', { title: previewTripTitle })
  const trustNoPaymentLabel = t(isNarrowViewport ? 'trust.heroNoPaymentShort' : 'trust.heroNoPayment')
  const trustCuratedRoutesLabel = t(
    isNarrowViewport ? 'trust.heroCuratedRoutesShort' : 'trust.heroCuratedRoutes',
  )
  const trustSmallGroupsLabel = t(
    isNarrowViewport ? 'trust.heroSmallGroupsShort' : 'trust.heroSmallGroups',
  )

  return (
    <section className={cn(homeHeroRootVariants(), 'animate-iz-surface-in', className)}>
      <div className={HERO_SURFACE_DECOR_CLIP_CLASSNAME} aria-hidden>
        <div className={homeHeroGlowVariants()} />
        <div className={homeHeroGlowSecondaryVariants()} />
        <div className={homeHeroMeshVariants()} />
      </div>
      <div className={homeHeroGridVariants()}>
        <div className="min-w-0 space-y-stack sm:space-y-relaxed">
          <p className="text-caption font-semibold uppercase tracking-[0.12em] text-hero-foreground/75 sm:text-label">
            {t('home.hero.eyebrow')}
          </p>
          <h1 className="text-balance font-display text-heading-md font-semibold tracking-tight max-sm:leading-snug sm:text-heading-lg lg:text-display-xl">
            {heroTitle}
          </h1>
          <p className="max-w-2xl text-body text-hero-foreground/90 sm:text-body-lg">{heroSubtitle}</p>
          <div className="mb-relaxed flex flex-col gap-tight sm:flex-row sm:items-center">
            <Button
              type="button"
              size="lg"
              variant="accent"
              className={homeHeroCtaSharedClassName}
              asChild
            >
              <Link to={APP_ROUTE.trips}>{t('home.hero.primaryCta')}</Link>
            </Button>
            {user ? null : (
              <Button
                type="button"
                size="lg"
                variant="secondary"
                className={cn(
                  homeHeroCtaSharedClassName,
                  'border-2 border-hero-foreground/45 bg-hero-foreground/18 text-hero-foreground shadow-sm hover:bg-hero-foreground/28',
                )}
                asChild
              >
                <Link to={APP_ROUTE.register}>{t('home.hero.secondaryCta')}</Link>
              </Button>
            )}
          </div>
          <ul className={homeHeroTrustListVariants()}>
            <li className={homeHeroTrustItemVariants()}>
              <Wallet className="h-3 w-3 shrink-0 text-accent sm:h-4 sm:w-4" aria-hidden />
              <span className="min-w-0 truncate sm:overflow-visible sm:whitespace-normal">
                {trustNoPaymentLabel}
              </span>
            </li>
            <li className={homeHeroTrustItemVariants()}>
              <MapPin className="h-3 w-3 shrink-0 text-accent sm:h-4 sm:w-4" aria-hidden />
              <span className="min-w-0 truncate sm:overflow-visible sm:whitespace-normal">
                {trustCuratedRoutesLabel}
              </span>
            </li>
            <li className={homeHeroTrustItemVariants()}>
              <Users className="h-3 w-3 shrink-0 text-accent sm:h-4 sm:w-4" aria-hidden />
              <span className="min-w-0 truncate sm:overflow-visible sm:whitespace-normal">
                {trustSmallGroupsLabel}
              </span>
            </li>
          </ul>
        </div>
        <div className={homeHeroPreviewVariants()}>
          <Link to={detailsPath} aria-label={previewTripLinkLabel} className={homeHeroPreviewImageLinkVariants()}>
            <span className={homeHeroPreviewImageFigureVariants()}>
              <img src={previewTrip.imageSrc} alt="" className={homeHeroPreviewImageVariants()} />
              <div className={homeHeroPreviewStackVariants()}>
                <p className={homeHeroPreviewDesktopOverlayEyebrowVariants()}>{t('home.hero.previewBadge')}</p>
                <p className={homeHeroPreviewDesktopOverlayTitleVariants()}>{previewTripTitle}</p>
                <p className={homeHeroPreviewDesktopOverlayMetaVariants()}>{previewMetaLine}</p>
              </div>
              <span className={homeHeroPreviewImageMobileCaptionVariants()}>
                <span className={homeHeroPreviewImageMobileCaptionEyebrowVariants()}>
                  {t('home.hero.previewBadge')}
                </span>
                <span className={homeHeroPreviewImageMobileCaptionTitleVariants()}>{previewTripTitle}</span>
                <span className={homeHeroPreviewImageMobileCaptionMetaVariants()}>{previewMetaLine}</span>
              </span>
            </span>
          </Link>
          <div className={homeHeroBadgeRowVariants()}>
            <span className={homeHeroBadgeVariants()}>{t('home.hero.badgeCurated')}</span>
            <span className={homeHeroBadgeVariants()}>{t('home.hero.badgeSmallGroups')}</span>
            <span className={homeHeroBadgeVariants()}>{t('home.hero.badgeFlexible')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
