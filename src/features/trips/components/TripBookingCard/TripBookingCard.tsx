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
  tripBookingDockMetaVariants,
  tripBookingDockPriceBlockVariants,
  tripBookingDockRootVariants,
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
  presentation?: 'panel' | 'dock'
}

export default function TripBookingCard({
  trip,
  bookingPath,
  presentation = 'panel',
}: TripBookingCardProps) {
  const { t, i18n } = useTranslation()
  const nextDateIso = getNextAvailableTripDateIso(trip)

  if (presentation === 'dock') {
    return (
      <div className={tripBookingDockRootVariants()}>
        <div className={tripBookingDockPriceBlockVariants()}>
          <p className={tripBookingDockMetaVariants()}>{t('tripDetails.priceFrom')}</p>
          <p className="truncate font-display text-heading-sm font-semibold leading-tight text-primary">
            {formatTripPriceEur(trip.priceEur)}
          </p>
        </div>
        <Button type="button" size="sm" variant="accent" className="h-9 shrink-0 px-3 text-caption" asChild>
          <Link to={bookingPath}>{t('tripDetails.bookCta')}</Link>
        </Button>
      </div>
    )
  }

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
