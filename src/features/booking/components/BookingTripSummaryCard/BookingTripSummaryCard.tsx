import { MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import {
  bookingTripSummaryBodyVariants,
  bookingTripSummaryEyebrowVariants,
  bookingTripSummaryMediaVariants,
  bookingTripSummaryMetaCellVariants,
  bookingTripSummaryMetaLabelVariants,
  bookingTripSummaryMetaVariants,
  bookingTripSummaryMetaValueVariants,
  bookingTripSummaryRootVariants,
  bookingTripSummaryTitleVariants,
} from '@/features/booking/components/BookingTripSummaryCard/BookingTripSummaryCard.styles'
import { formatTripDateDisplay } from '@/features/trips/helpers/tripDates.helpers'
import { formatTripGroupSizeRange } from '@/features/trips/helpers/tripDetailsView.helpers'
import {
  formatTripDurationDays,
  formatTripPriceEur,
} from '@/features/trips/helpers/tripFormat.helpers'
import type { TripDefinition } from '@/features/trips/types/trip.types'

type BookingTripSummaryCardProps = {
  trip: TripDefinition
  preferredDateIso: string
}

export default function BookingTripSummaryCard({
  trip,
  preferredDateIso,
}: BookingTripSummaryCardProps) {
  const { t, i18n } = useTranslation()
  const tripTitle = t(`trips.catalog.${trip.slug}.title`)

  return (
    <section className={bookingTripSummaryRootVariants()} aria-label={t('booking.summaryTitle')}>
      <img
        src={trip.imageSrc}
        alt={tripTitle}
        className={bookingTripSummaryMediaVariants()}
        loading="lazy"
      />
      <div className={bookingTripSummaryBodyVariants()}>
        <p className={bookingTripSummaryEyebrowVariants()}>{t('booking.summaryEyebrow')}</p>
        <h2 className={bookingTripSummaryTitleVariants()}>{tripTitle}</h2>
        <p className="inline-flex items-center gap-1 text-body-sm text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden />
          {t(`trips.catalog.${trip.slug}.location`)}
        </p>
        <div className={bookingTripSummaryMetaVariants()}>
          <div className={bookingTripSummaryMetaCellVariants()}>
            <p className={bookingTripSummaryMetaLabelVariants()}>
              {t('booking.summary.durationLabel')}
            </p>
            <p className={bookingTripSummaryMetaValueVariants()}>
              {formatTripDurationDays(trip.durationDays, t)}
            </p>
          </div>
          <div className={bookingTripSummaryMetaCellVariants()}>
            <p className={bookingTripSummaryMetaLabelVariants()}>
              {t('booking.summary.priceFromLabel')}
            </p>
            <p className={bookingTripSummaryMetaValueVariants()}>
              {formatTripPriceEur(trip.priceEur)}
            </p>
          </div>
          <div className={bookingTripSummaryMetaCellVariants()}>
            <p className={bookingTripSummaryMetaLabelVariants()}>
              {t('booking.summary.groupLabel')}
            </p>
            <p className={bookingTripSummaryMetaValueVariants()}>
              {formatTripGroupSizeRange(t, trip.minPeople, trip.maxPeople)}
            </p>
          </div>
          <div className={bookingTripSummaryMetaCellVariants()}>
            <p className={bookingTripSummaryMetaLabelVariants()}>
              {t('booking.summary.preferredDateLabel')}
            </p>
            <p className={bookingTripSummaryMetaValueVariants()}>
              {preferredDateIso
                ? formatTripDateDisplay(preferredDateIso, i18n.language)
                : t('trips.card.noUpcomingDates')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
