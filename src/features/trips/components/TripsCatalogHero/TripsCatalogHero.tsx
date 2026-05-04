import { useTranslation } from 'react-i18next'

import {
  tripsCatalogHeroGlowVariants,
  tripsCatalogHeroRootVariants,
  tripsCatalogHeroStatLabelVariants,
  tripsCatalogHeroStatVariants,
  tripsCatalogHeroStatValueVariants,
} from '@/features/trips/components/TripsCatalogHero/TripsCatalogHero.styles'
import { MOCK_TRIPS } from '@/features/trips/data/mockTrips'
import { HERO_SURFACE_DECOR_CLIP_CLASSNAME } from '@/shared/constants/heroDecor.constants'
import { useIsNarrowViewport } from '@/shared/hooks/useIsNarrowViewport'
import { cn } from '@/shared/utils/cn'

export default function TripsCatalogHero() {
  const { t } = useTranslation()
  const isNarrowViewport = useIsNarrowViewport()
  const tripCatalogCount = MOCK_TRIPS.length
  const pageTitle = t(isNarrowViewport ? 'trips.page.titleShort' : 'trips.page.title')
  const pageDescription = t(
    isNarrowViewport ? 'trips.page.descriptionShort' : 'trips.page.description',
  )

  return (
    <header className={tripsCatalogHeroRootVariants()}>
      <div className={HERO_SURFACE_DECOR_CLIP_CLASSNAME} aria-hidden>
        <div className={tripsCatalogHeroGlowVariants()} />
      </div>
      <div className="relative z-10 flex flex-col gap-2 sm:gap-relaxed lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(13.5rem,min(28vw,26rem))] lg:items-center lg:gap-x-stack lg:gap-y-0">
        <div className="min-w-0 space-y-1 sm:space-y-tight">
          <p className="text-caption font-semibold uppercase tracking-wide text-primary sm:text-label">
            {t('trips.page.kicker')}
          </p>
          <h1 className="text-balance font-display text-heading-lg font-semibold tracking-tight sm:text-display-lg md:text-display-xl">
            {pageTitle}
          </h1>
          <p className="max-w-3xl text-body-sm font-medium leading-relaxed text-foreground/90 sm:text-body-lg">
            {pageDescription}
          </p>
        </div>
        <div className="flex w-full min-w-0 flex-col gap-2 sm:flex-row sm:gap-tight lg:max-w-none lg:flex-col lg:justify-center">
          <div className={tripsCatalogHeroStatVariants()}>
            <span className={tripsCatalogHeroStatLabelVariants()}>
              {t('trips.page.statTripsLabel')}
            </span>
            <span className={tripsCatalogHeroStatValueVariants()}>
              {t('trips.page.statTripsValue', { count: tripCatalogCount })}
            </span>
          </div>
          <div className={cn(tripsCatalogHeroStatVariants(), 'hidden sm:flex')}>
            <span className={tripsCatalogHeroStatLabelVariants()}>
              {t('trips.page.statRoutesLabel')}
            </span>
            <span className={tripsCatalogHeroStatValueVariants()}>
              {t('trips.page.statRoutesValue')}
            </span>
          </div>
          <div className={cn(tripsCatalogHeroStatVariants(), 'hidden sm:flex')}>
            <span className={tripsCatalogHeroStatLabelVariants()}>
              {t('trips.page.statDatesLabel')}
            </span>
            <span className={tripsCatalogHeroStatValueVariants()}>
              {t('trips.page.statDatesValue')}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
