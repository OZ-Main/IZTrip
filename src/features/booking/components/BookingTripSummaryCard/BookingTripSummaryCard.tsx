import { MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import {
  bookingTripSummaryBodyVariants,
  bookingTripSummaryMediaVariants,
  bookingTripSummaryRootVariants,
} from '@/features/booking/components/BookingTripSummaryCard/BookingTripSummaryCard.styles'
import { formatTripPriceEur } from '@/features/trips/helpers/tripFormat.helpers'
import type { TripDefinition } from '@/features/trips/types/trip.types'

type BookingTripSummaryCardProps = {
  trip: TripDefinition
}

export default function BookingTripSummaryCard({ trip }: BookingTripSummaryCardProps) {
  const { t } = useTranslation()

  return (
    <section className={bookingTripSummaryRootVariants()} aria-label={t('booking.summaryTitle')}>
      <img src={trip.imageSrc} alt="" className={bookingTripSummaryMediaVariants()} />
      <div className={bookingTripSummaryBodyVariants()}>
        <p className="text-label font-semibold uppercase tracking-wide text-primary">
          {t('booking.summaryEyebrow')}
        </p>
        <h2 className="font-display text-heading-lg font-semibold text-foreground">
          {t(`trips.catalog.${trip.slug}.title`)}
        </h2>
        <p className="inline-flex items-center gap-1 text-body-sm text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden />
          {t(`trips.catalog.${trip.slug}.location`)}
        </p>
        <p className="text-body-sm text-muted-foreground">
          {t(`trips.catalog.${trip.slug}.shortDescription`)}
        </p>
        <p className="text-heading-sm font-semibold text-primary">
          {formatTripPriceEur(trip.priceEur)}
        </p>
      </div>
    </section>
  )
}
