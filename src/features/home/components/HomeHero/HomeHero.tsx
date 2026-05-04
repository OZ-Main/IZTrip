import { MapPin, Users, Wallet } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { useAuthStore } from '@/app/store/authStore'
import { Button } from '@/components/ui/button'
import {
  homeHeroBadgeRowVariants,
  homeHeroBadgeVariants,
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
          <h1 className="text-balance font-display text-heading-lg font-semibold tracking-tight sm:text-display-xl">
            {heroTitle}
          </h1>
          <p className="max-w-2xl text-body text-hero-foreground/90 sm:text-body-lg">{heroSubtitle}</p>
          <div className="mb-relaxed flex flex-col gap-tight sm:flex-row sm:items-center">
            <Button
              type="button"
              size="lg"
              variant="accent"
              className="min-h-10 w-full px-6 py-2.5 text-caption sm:min-h-12 sm:w-auto sm:px-8 sm:py-3 sm:text-label"
              asChild
            >
              <Link to={APP_ROUTE.trips}>{t('home.hero.primaryCta')}</Link>
            </Button>
            {user ? null : (
              <Button
                type="button"
                size="lg"
                variant="secondary"
                className="min-h-10 w-full border-2 border-hero-foreground/45 bg-hero-foreground/18 px-6 py-2.5 text-caption text-hero-foreground shadow-sm hover:bg-hero-foreground/28 sm:min-h-12 sm:w-auto sm:px-8 sm:py-3 sm:text-label"
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
          <div className={homeHeroPreviewStackVariants()}>
            <p className="text-caption font-semibold uppercase tracking-wide text-primary">
              {t('home.hero.previewBadge')}
            </p>
            <p className="mt-tight line-clamp-2 text-body-sm font-semibold text-card-foreground">
              {previewTripTitle}
            </p>
            <p className="mt-tight text-caption text-muted-foreground">{previewMetaLine}</p>
          </div>
          <Link
            to={detailsPath}
            aria-label={previewTripLinkLabel}
            className={cn(homeHeroPreviewImageLinkVariants(), 'group')}
          >
            <span className={homeHeroPreviewImageFigureVariants()}>
              <img
                src={previewTrip.imageSrc}
                alt=""
                className={cn(
                  homeHeroPreviewImageVariants(),
                  'transition-transform duration-motion-slow ease-motion-out motion-safe:group-hover:scale-[1.02]',
                )}
              />
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
