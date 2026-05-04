import { useTranslation } from 'react-i18next'

import {
  tripsCatalogHeroGlowVariants,
  tripsCatalogHeroRootVariants,
  tripsCatalogHeroStatLabelVariants,
  tripsCatalogHeroStatVariants,
  tripsCatalogHeroStatValueVariants,
} from '@/features/trips/components/TripsCatalogHero/TripsCatalogHero.styles'
import { MOCK_TRIPS } from '@/features/trips/data/mockTrips'

export default function TripsCatalogHero() {
  const { t } = useTranslation()
  const tripCatalogCount = MOCK_TRIPS.length

  return (
    <header className={tripsCatalogHeroRootVariants()}>
      <div className={tripsCatalogHeroGlowVariants()} aria-hidden />
      <div className="relative z-10 flex flex-col gap-relaxed lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(13.5rem,min(28vw,26rem))] lg:items-center lg:gap-x-stack lg:gap-y-0">
        <div className="min-w-0 space-y-tight">
          <p className="text-label font-semibold uppercase tracking-wide text-primary">
            {t('trips.page.kicker')}
          </p>
          <h1 className="text-balance font-display text-display-lg font-semibold tracking-tight sm:text-display-xl">
            {t('trips.page.title')}
          </h1>
          <p className="max-w-3xl text-body-lg font-medium leading-relaxed text-foreground/90">
            {t('trips.page.description')}
          </p>
        </div>
        <div className="flex w-full min-w-0 flex-col gap-tight sm:flex-row lg:max-w-none lg:flex-col lg:justify-center">
          <div className={tripsCatalogHeroStatVariants()}>
            <span className={tripsCatalogHeroStatLabelVariants()}>
              {t('trips.page.statTripsLabel')}
            </span>
            <span className={tripsCatalogHeroStatValueVariants()}>
              {t('trips.page.statTripsValue', { count: tripCatalogCount })}
            </span>
          </div>
          <div className={tripsCatalogHeroStatVariants()}>
            <span className={tripsCatalogHeroStatLabelVariants()}>
              {t('trips.page.statRoutesLabel')}
            </span>
            <span className={tripsCatalogHeroStatValueVariants()}>
              {t('trips.page.statRoutesValue')}
            </span>
          </div>
          <div className={tripsCatalogHeroStatVariants()}>
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
