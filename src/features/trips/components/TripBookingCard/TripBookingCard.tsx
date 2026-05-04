import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import {
  tripBookingCardEyebrowVariants,
  tripBookingCardMetaLabelVariants,
  tripBookingCardMetaRowVariants,
  tripBookingCardMetaVariants,
  tripBookingCardMetaValueVariants,
  tripBookingCardPriceVariants,
  tripBookingCardRootVariants,
  tripBookingCardTrustHighlightVariants,
  tripBookingCardTrustVariants,
} from '@/features/trips/components/TripBookingCard/TripBookingCard.styles'
import {
  formatTripDateDisplay,
  getNextAvailableTripDateIso,
} from '@/features/trips/helpers/tripDates.helpers'
import { formatTripGroupSizeRange } from '@/features/trips/helpers/tripDetailsView.helpers'
import {
  formatTripDurationDays,
  formatTripPriceEur,
} from '@/features/trips/helpers/tripFormat.helpers'
import type { TripDefinition } from '@/features/trips/types/trip.types'
import { Button } from '@/components/ui/button'

type TripBookingCardProps = {
  trip: TripDefinition
  bookingPath: string
}

export default function TripBookingCard({ trip, bookingPath }: TripBookingCardProps) {
  const { t, i18n } = useTranslation()
  const nextDateIso = getNextAvailableTripDateIso(trip)

  return (
    <div className={tripBookingCardRootVariants()}>
      <p className={tripBookingCardEyebrowVariants()}>{t('tripDetails.bookingCardEyebrow')}</p>
      <p className="mt-tight text-caption font-semibold uppercase tracking-wide text-muted-foreground">
        {t('tripDetails.priceFrom')}
      </p>
      <p className={tripBookingCardPriceVariants()}>{formatTripPriceEur(trip.priceEur)}</p>
      <div className={tripBookingCardMetaVariants()}>
        <div className={tripBookingCardMetaRowVariants()}>
          <span className={tripBookingCardMetaLabelVariants()}>
            {t('tripDetails.bookingDurationLabel')}
          </span>
          <span className={tripBookingCardMetaValueVariants()}>
            {formatTripDurationDays(trip.durationDays, t)}
          </span>
        </div>
        <div className={tripBookingCardMetaRowVariants()}>
          <span className={tripBookingCardMetaLabelVariants()}>
            {t('tripDetails.bookingGroupLabel')}
          </span>
          <span className={tripBookingCardMetaValueVariants()}>
            {formatTripGroupSizeRange(t, trip.minPeople, trip.maxPeople)}
          </span>
        </div>
        <div className={tripBookingCardMetaRowVariants()}>
          <span className={tripBookingCardMetaLabelVariants()}>
            {t('tripDetails.nextDateLabel')}
          </span>
          <span className={tripBookingCardMetaValueVariants()}>
            {nextDateIso
              ? formatTripDateDisplay(nextDateIso, i18n.language)
              : t('trips.card.noUpcomingDates')}
          </span>
        </div>
      </div>
      <Button type="button" size="lg" variant="accent" className="mt-stack min-h-12 w-full" asChild>
        <Link to={bookingPath}>{t('tripDetails.bookCta')}</Link>
      </Button>
      <div className={tripBookingCardTrustVariants()}>
        <p className={tripBookingCardTrustHighlightVariants()}>{t('tripDetails.ctaTrustLine')}</p>
        <p className="text-caption text-muted-foreground">{t('tripDetails.confirmByEmail')}</p>
      </div>
    </div>
  )
}
