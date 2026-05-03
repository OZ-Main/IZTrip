import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import AudienceBadge from '@/features/trips/components/AudienceBadge/AudienceBadge'
import CategoryBadge from '@/features/trips/components/CategoryBadge/CategoryBadge'
import { formatTripDateDisplay } from '@/features/trips/helpers/tripDates.helpers'
import {
  tripDetailsBookPanelVariants,
  tripDetailsHeroImageVariants,
  tripDetailsHeroVariants,
  tripDetailsItineraryDayVariants,
  tripDetailsItineraryVariants,
  tripDetailsListVariants,
  tripDetailsMainColumnVariants,
  tripDetailsPageGridVariants,
  tripDetailsPriceBannerVariants,
  tripDetailsPriceValueVariants,
  tripDetailsSectionTitleVariants,
  tripDetailsSectionVariants,
  tripDetailsSidebarVariants,
} from '@/features/trips/components/TripDetails/TripDetails.styles'
import { formatTripPriceEur } from '@/features/trips/helpers/tripFormat.helpers'
import type { TripDefinition } from '@/features/trips/types/trip.types'
import { Button } from '@/components/ui/button'
import { APP_ROUTE } from '@/shared/constants/routes.constants'

type TripDetailsProps = {
  trip: TripDefinition
}

type TripDetailsBookPanelProps = {
  trip: TripDefinition
  bookingPath: string
}

function TripDetailsBookPanel({ trip, bookingPath }: TripDetailsBookPanelProps) {
  const { t } = useTranslation()

  return (
    <div className={tripDetailsBookPanelVariants()}>
      <div className={tripDetailsPriceBannerVariants()}>
        <div className="min-w-0 space-y-tight">
          <p className="text-caption text-muted-foreground">{t('tripDetails.priceFrom')}</p>
          <p className={tripDetailsPriceValueVariants()}>{formatTripPriceEur(trip.priceEur)}</p>
          <p className="text-body-sm text-muted-foreground">
            {t('tripDetails.groupSize', { min: trip.minPeople, max: trip.maxPeople })}
          </p>
        </div>
        <Button type="button" size="lg" variant="accent" className="w-full shrink-0" asChild>
          <Link to={bookingPath}>{t('tripDetails.bookCta')}</Link>
        </Button>
      </div>
    </div>
  )
}

export default function TripDetails({ trip }: TripDetailsProps) {
  const { t, i18n } = useTranslation()
  const bookingPath = APP_ROUTE.booking(trip.slug)

  const highlightIndexes = Array.from({ length: trip.highlightCount }, (_, index) => index + 1)
  const includedIndexes = Array.from({ length: trip.includedCount }, (_, index) => index + 1)
  const itineraryDays = Array.from({ length: trip.itineraryDayCount }, (_, index) => index + 1)

  return (
    <article className="space-y-section">
      <div className={tripDetailsHeroVariants()}>
        <img
          src={trip.imageSrc}
          alt={t(`trips.catalog.${trip.slug}.title`)}
          className={tripDetailsHeroImageVariants()}
        />
      </div>

      <div className={tripDetailsPageGridVariants()}>
        <div className={tripDetailsMainColumnVariants()}>
          <div className="flex flex-wrap gap-tight">
            <CategoryBadge category={trip.category} />
            <AudienceBadge audience={trip.targetAudience} />
          </div>

          <header className="space-y-tight">
            <p className="text-body text-muted-foreground">{t(`trips.catalog.${trip.slug}.location`)}</p>
            <h1 className="text-balance font-display text-display-lg font-semibold tracking-tight sm:text-display-xl">
              {t(`trips.catalog.${trip.slug}.title`)}
            </h1>
            <p className="max-w-3xl text-body-lg text-muted-foreground">
              {t(`trips.catalog.${trip.slug}.shortDescription`)}
            </p>
          </header>

          <div className="lg:hidden">
            <TripDetailsBookPanel trip={trip} bookingPath={bookingPath} />
          </div>

          <section className={tripDetailsSectionVariants()}>
            <h2 className={tripDetailsSectionTitleVariants()}>{t('tripDetails.descriptionTitle')}</h2>
            <p className="text-body-lg text-muted-foreground">{t(`trips.catalog.${trip.slug}.description`)}</p>
          </section>

          <section className={tripDetailsSectionVariants()}>
            <h2 className={tripDetailsSectionTitleVariants()}>{t('tripDetails.highlightsTitle')}</h2>
            <ul className={tripDetailsListVariants()}>
              {highlightIndexes.map((index) => (
                <li key={index}>{t(`trips.catalog.${trip.slug}.highlight${index}`)}</li>
              ))}
            </ul>
          </section>

          <section className={tripDetailsSectionVariants()}>
            <h2 className={tripDetailsSectionTitleVariants()}>{t('tripDetails.includedTitle')}</h2>
            <ul className={tripDetailsListVariants()}>
              {includedIndexes.map((index) => (
                <li key={index}>{t(`trips.catalog.${trip.slug}.included${index}`)}</li>
              ))}
            </ul>
          </section>

          <section className={tripDetailsSectionVariants()}>
            <h2 className={tripDetailsSectionTitleVariants()}>{t('tripDetails.itineraryTitle')}</h2>
            <div className={tripDetailsItineraryVariants()}>
              {itineraryDays.map((day) => (
                <div key={day} className={tripDetailsItineraryDayVariants()}>
                  <h3 className="text-heading-sm font-semibold text-foreground">
                    {t(`trips.catalog.${trip.slug}.itineraryDay${day}Title`)}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {t(`trips.catalog.${trip.slug}.itineraryDay${day}Body`)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className={tripDetailsSectionVariants()}>
            <h2 className={tripDetailsSectionTitleVariants()}>{t('tripDetails.availableDatesTitle')}</h2>
            <ul className={tripDetailsListVariants()}>
              {trip.availableDates.map((isoDate) => (
                <li key={isoDate}>{formatTripDateDisplay(isoDate, i18n.language)}</li>
              ))}
            </ul>
          </section>
        </div>

        <aside className={tripDetailsSidebarVariants()}>
          <TripDetailsBookPanel trip={trip} bookingPath={bookingPath} />
        </aside>
      </div>
    </article>
  )
}
