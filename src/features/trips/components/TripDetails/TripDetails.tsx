import { BadgeCheck, CalendarDays, ListChecks, MapPin, Route, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import AudienceBadge from '@/features/trips/components/AudienceBadge/AudienceBadge'
import CategoryBadge from '@/features/trips/components/CategoryBadge/CategoryBadge'
import {
  formatTripDateDisplay,
  getNextAvailableTripDateIso,
} from '@/features/trips/helpers/tripDates.helpers'
import {
  tripDetailsBookPanelVariants,
  tripDetailsDateChipVariants,
  tripDetailsDateChipsVariants,
  tripDetailsHeroContentVariants,
  tripDetailsHeroImageVariants,
  tripDetailsHeroLeadVariants,
  tripDetailsHeroScrimVariants,
  tripDetailsHeroShellVariants,
  tripDetailsHeroTitleVariants,
  tripDetailsItineraryConnectorVariants,
  tripDetailsItineraryContentVariants,
  tripDetailsItineraryDotVariants,
  tripDetailsItineraryListVariants,
  tripDetailsItineraryRailVariants,
  tripDetailsItineraryRowVariants,
  tripDetailsListItemVariants,
  tripDetailsMainColumnVariants,
  tripDetailsMetaChipRowVariants,
  tripDetailsMetaChipVariants,
  tripDetailsPageGridVariants,
  tripDetailsPriceBannerVariants,
  tripDetailsPriceValueVariants,
  tripDetailsSectionBodyVariants,
  tripDetailsSectionGridVariants,
  tripDetailsSectionIconVariants,
  tripDetailsSectionShellVariants,
  tripDetailsSectionTitleVariants,
  tripDetailsSidebarVariants,
  tripDetailsTrustNoteVariants,
} from '@/features/trips/components/TripDetails/TripDetails.styles'
import {
  formatTripDurationDays,
  formatTripPriceEur,
} from '@/features/trips/helpers/tripFormat.helpers'
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
  const { t, i18n } = useTranslation()
  const nextDateIso = getNextAvailableTripDateIso(trip)

  return (
    <div className={tripDetailsBookPanelVariants()}>
      <div className={tripDetailsPriceBannerVariants()}>
        <div className="min-w-0 space-y-tight">
          <p className="text-caption font-semibold uppercase tracking-wide text-muted-foreground">
            {t('tripDetails.priceFrom')}
          </p>
          <p className={tripDetailsPriceValueVariants()}>{formatTripPriceEur(trip.priceEur)}</p>
          <p className="text-body-sm text-muted-foreground">
            {t('tripDetails.groupSize', { min: trip.minPeople, max: trip.maxPeople })}
          </p>
          <div className="rounded-card border border-border/70 bg-background/70 p-tight">
            <p className="text-caption text-muted-foreground">{t('tripDetails.nextDateLabel')}</p>
            <p className="text-body font-semibold text-foreground">
              {nextDateIso
                ? formatTripDateDisplay(nextDateIso, i18n.language)
                : t('trips.card.noUpcomingDates')}
            </p>
          </div>
        </div>
        <Button
          type="button"
          size="lg"
          variant="accent"
          className="min-h-11 w-full shrink-0"
          asChild
        >
          <Link to={bookingPath}>{t('tripDetails.bookCta')}</Link>
        </Button>
        <p className={tripDetailsTrustNoteVariants()}>{t('tripDetails.bookTrustNote')}</p>
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
  const nextDateIso = getNextAvailableTripDateIso(trip)

  return (
    <article className="space-y-section">
      <div className={tripDetailsHeroShellVariants()}>
        <img
          src={trip.imageSrc}
          alt={t(`trips.catalog.${trip.slug}.title`)}
          className={tripDetailsHeroImageVariants()}
          loading="eager"
          decoding="async"
        />
        <div className={tripDetailsHeroScrimVariants()} aria-hidden />
        <div className={tripDetailsHeroContentVariants()}>
          <div className="flex flex-wrap gap-tight">
            <CategoryBadge category={trip.category} />
            <AudienceBadge audience={trip.targetAudience} />
          </div>
          <p className="inline-flex items-center gap-1 text-body font-medium text-primary">
            <MapPin className="h-4 w-4 shrink-0" aria-hidden />
            {t(`trips.catalog.${trip.slug}.location`)}
          </p>
          <h1 className={tripDetailsHeroTitleVariants()}>
            {t(`trips.catalog.${trip.slug}.title`)}
          </h1>
          <p className={tripDetailsHeroLeadVariants()}>
            {t(`trips.catalog.${trip.slug}.shortDescription`)}
          </p>
          <div className={tripDetailsMetaChipRowVariants()}>
            <span className={tripDetailsMetaChipVariants()}>
              {t('tripDetails.metaDuration', {
                duration: formatTripDurationDays(trip.durationDays, t),
              })}
            </span>
            <span className={tripDetailsMetaChipVariants()}>
              {t('tripDetails.metaGroup', { min: trip.minPeople, max: trip.maxPeople })}
            </span>
            <span className={tripDetailsMetaChipVariants()}>
              {nextDateIso
                ? t('tripDetails.metaNextDate', {
                    date: formatTripDateDisplay(nextDateIso, i18n.language),
                  })
                : t('tripDetails.metaNextDateUnknown')}
            </span>
            <span className={tripDetailsMetaChipVariants()}>
              {t('tripDetails.metaPrice', { price: formatTripPriceEur(trip.priceEur) })}
            </span>
          </div>
        </div>
      </div>

      <div className={tripDetailsPageGridVariants()}>
        <div className={tripDetailsMainColumnVariants()}>
          <div className="lg:hidden">
            <TripDetailsBookPanel trip={trip} bookingPath={bookingPath} />
          </div>

          <section className={tripDetailsSectionShellVariants()}>
            <div className={tripDetailsSectionGridVariants()}>
              <span className={tripDetailsSectionIconVariants()}>
                <Sparkles className="h-5 w-5" aria-hidden />
              </span>
              <h2 className={tripDetailsSectionTitleVariants()}>{t('tripDetails.descriptionTitle')}</h2>
              <div className={tripDetailsSectionBodyVariants()}>
                <p className="text-body-lg text-muted-foreground">
                  {t(`trips.catalog.${trip.slug}.description`)}
                </p>
              </div>
            </div>
          </section>

          <section className={tripDetailsSectionShellVariants()}>
            <div className={tripDetailsSectionGridVariants()}>
              <span className={tripDetailsSectionIconVariants()}>
                <ListChecks className="h-5 w-5" aria-hidden />
              </span>
              <h2 className={tripDetailsSectionTitleVariants()}>{t('tripDetails.highlightsTitle')}</h2>
              <div className={tripDetailsSectionBodyVariants()}>
                <ul className="space-y-tight">
                  {highlightIndexes.map((index) => (
                    <li key={index} className={tripDetailsListItemVariants()}>
                      {t(`trips.catalog.${trip.slug}.highlight${index}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className={tripDetailsSectionShellVariants()}>
            <div className={tripDetailsSectionGridVariants()}>
              <span className={tripDetailsSectionIconVariants()}>
                <BadgeCheck className="h-5 w-5" aria-hidden />
              </span>
              <h2 className={tripDetailsSectionTitleVariants()}>{t('tripDetails.includedTitle')}</h2>
              <div className={tripDetailsSectionBodyVariants()}>
                <ul className="space-y-tight">
                  {includedIndexes.map((index) => (
                    <li key={index} className={tripDetailsListItemVariants()}>
                      {t(`trips.catalog.${trip.slug}.included${index}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className={tripDetailsSectionShellVariants()}>
            <div className={tripDetailsSectionGridVariants()}>
              <span className={tripDetailsSectionIconVariants()}>
                <Route className="h-5 w-5" aria-hidden />
              </span>
              <h2 className={tripDetailsSectionTitleVariants()}>{t('tripDetails.itineraryTitle')}</h2>
              <div className={tripDetailsSectionBodyVariants()}>
                <div className={tripDetailsItineraryListVariants()}>
                  {itineraryDays.map((day, dayIndex) => {
                    const isLastDay = dayIndex === itineraryDays.length - 1

                    return (
                      <div key={day} className={tripDetailsItineraryRowVariants()}>
                        <div className={tripDetailsItineraryRailVariants()}>
                          {!isLastDay ? (
                            <div className={tripDetailsItineraryConnectorVariants()} aria-hidden />
                          ) : null}
                          <span className={tripDetailsItineraryDotVariants()} aria-hidden>
                            {day}
                          </span>
                        </div>
                        <div className={tripDetailsItineraryContentVariants()}>
                          <h3 className="text-heading-sm font-semibold leading-snug text-foreground">
                            {t(`trips.catalog.${trip.slug}.itineraryDay${day}Title`)}
                          </h3>
                          <p className="text-body text-muted-foreground">
                            {t(`trips.catalog.${trip.slug}.itineraryDay${day}Body`)}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          <section className={tripDetailsSectionShellVariants()}>
            <div className={tripDetailsSectionGridVariants()}>
              <span className={tripDetailsSectionIconVariants()}>
                <CalendarDays className="h-5 w-5" aria-hidden />
              </span>
              <h2 className={tripDetailsSectionTitleVariants()}>
                {t('tripDetails.availableDatesTitle')}
              </h2>
              <div className={tripDetailsSectionBodyVariants()}>
                <div className={tripDetailsDateChipsVariants()}>
                  {trip.availableDates.map((isoDate) => (
                    <span key={isoDate} className={tripDetailsDateChipVariants()}>
                      {formatTripDateDisplay(isoDate, i18n.language)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside className={tripDetailsSidebarVariants()}>
          <TripDetailsBookPanel trip={trip} bookingPath={bookingPath} />
        </aside>
      </div>
    </article>
  )
}
