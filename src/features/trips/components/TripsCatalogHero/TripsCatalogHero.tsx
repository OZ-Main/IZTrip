import { useTranslation } from 'react-i18next'

import {
  tripsCatalogHeroGlowVariants,
  tripsCatalogHeroRootVariants,
  tripsCatalogHeroStatLabelVariants,
  tripsCatalogHeroStatVariants,
  tripsCatalogHeroStatValueVariants,
} from '@/features/trips/components/TripsCatalogHero/TripsCatalogHero.styles'

export default function TripsCatalogHero() {
  const { t } = useTranslation()

  return (
    <header className={tripsCatalogHeroRootVariants()}>
      <div className={tripsCatalogHeroGlowVariants()} aria-hidden />
      <div className="relative z-10 space-y-relaxed">
        <div className="space-y-tight">
          <p className="text-label font-semibold uppercase tracking-wide text-primary">
            {t('trips.page.kicker')}
          </p>
          <h1 className="text-balance font-display text-display-lg font-semibold tracking-tight sm:text-display-xl">
            {t('trips.page.title')}
          </h1>
          <p className="max-w-3xl text-body-lg text-muted-foreground">
            {t('trips.page.description')}
          </p>
        </div>
        <div className="flex flex-col gap-tight sm:flex-row">
          <div className={tripsCatalogHeroStatVariants()}>
            <span className={tripsCatalogHeroStatLabelVariants()}>
              {t('trips.page.statTripsLabel')}
            </span>
            <span className={tripsCatalogHeroStatValueVariants()}>
              {t('trips.page.statTripsValue')}
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
