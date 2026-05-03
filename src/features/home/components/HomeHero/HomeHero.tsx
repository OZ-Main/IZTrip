import { MapPin, ShieldCheck, Wallet } from 'lucide-react'
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
  homeHeroPreviewImageLinkVariants,
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
import { APP_ROUTE } from '@/shared/constants/routes.constants'
import { cn } from '@/shared/utils/cn'

type HomeHeroProps = {
  previewTrip: TripDefinition
  className?: string
}

export default function HomeHero({ previewTrip, className }: HomeHeroProps) {
  const { t } = useTranslation()
  const user = useAuthStore((authStore) => authStore.user)
  const detailsPath = APP_ROUTE.tripDetails(previewTrip.slug)

  return (
    <section className={cn(homeHeroRootVariants(), 'animate-iz-surface-in', className)}>
      <div className={homeHeroGlowVariants()} aria-hidden />
      <div className={homeHeroGlowSecondaryVariants()} aria-hidden />
      <div className={homeHeroMeshVariants()} aria-hidden />
      <div className={homeHeroGridVariants()}>
        <div className="min-w-0 space-y-relaxed">
          <p className="text-label uppercase tracking-[0.12em] text-hero-foreground/75">
            {t('home.hero.eyebrow')}
          </p>
          <h1 className="text-balance font-display text-display-xl font-semibold tracking-tight sm:text-[2.65rem] sm:leading-[1.12]">
            {t('home.hero.title')}
          </h1>
          <p className="max-w-2xl text-body-lg text-hero-foreground/90">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col gap-tight sm:flex-row sm:items-center">
            <Button
              type="button"
              size="lg"
              variant="accent"
              className="min-h-11 w-full sm:w-auto"
              asChild
            >
              <Link to={APP_ROUTE.trips}>{t('home.hero.primaryCta')}</Link>
            </Button>
            {user ? null : (
              <Button
                type="button"
                size="lg"
                variant="secondary"
                className="min-h-11 w-full border-2 border-hero-foreground/45 bg-hero-foreground/18 text-hero-foreground shadow-sm hover:bg-hero-foreground/28 sm:w-auto"
                asChild
              >
                <Link to={APP_ROUTE.register}>{t('home.hero.secondaryCta')}</Link>
              </Button>
            )}
          </div>
          <ul className={homeHeroTrustListVariants()}>
            <li className={homeHeroTrustItemVariants()}>
              <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden />
              <span>{t('home.hero.trustRoutes')}</span>
            </li>
            <li className={homeHeroTrustItemVariants()}>
              <Wallet className="h-4 w-4 shrink-0 text-accent" aria-hidden />
              <span>{t('home.hero.trustPricing')}</span>
            </li>
            <li className={homeHeroTrustItemVariants()}>
              <ShieldCheck className="h-4 w-4 shrink-0 text-accent" aria-hidden />
              <span>{t('home.hero.trustSecure')}</span>
            </li>
          </ul>
        </div>
        <div className={homeHeroPreviewVariants()}>
          <div className={homeHeroPreviewStackVariants()}>
            <p className="text-caption uppercase tracking-wide text-muted-foreground">
              {t('home.hero.previewBadge')}
            </p>
            <p className="mt-tight line-clamp-2 text-body-sm font-semibold text-foreground">
              {t(`trips.catalog.${previewTrip.slug}.title`)}
            </p>
            <p className="mt-tight text-caption text-muted-foreground">
              {t('home.hero.previewMeta', {
                duration: formatTripDurationDays(previewTrip.durationDays, t),
                price: formatTripPriceEur(previewTrip.priceEur),
              })}
            </p>
          </div>
          <Link to={detailsPath} className={cn(homeHeroPreviewImageLinkVariants(), 'group')}>
            <img
              src={previewTrip.imageSrc}
              alt=""
              className={cn(
                homeHeroPreviewImageVariants(),
                'transition-transform duration-motion-slow ease-motion-out motion-safe:group-hover:scale-[1.02]',
              )}
            />
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
