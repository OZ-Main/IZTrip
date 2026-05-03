import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import AudienceBadge from '@/features/trips/components/AudienceBadge/AudienceBadge'
import CategoryBadge from '@/features/trips/components/CategoryBadge/CategoryBadge'
import {
  tripCardBodyVariants,
  tripCardDescriptionVariants,
  tripCardFooterVariants,
  tripCardImageVariants,
  tripCardImageWrapVariants,
  tripCardInteractiveVariants,
  tripCardMetaRowVariants,
  tripCardPriceVariants,
  tripCardRootVariants,
  tripCardTitleVariants,
} from '@/features/trips/components/TripCard/TripCard.styles'
import {
  formatTripDateDisplay,
  getNextAvailableTripDateIso,
} from '@/features/trips/helpers/tripDates.helpers'
import { formatTripPriceEur } from '@/features/trips/helpers/tripFormat.helpers'
import type { TripDefinition } from '@/features/trips/types/trip.types'
import { APP_ROUTE } from '@/shared/constants/routes.constants'
import { cn } from '@/shared/utils/cn'

type TripCardProps = {
  trip: TripDefinition
}

export default function TripCard({ trip }: TripCardProps) {
  const { t, i18n } = useTranslation()
  const nextDateIso = getNextAvailableTripDateIso(trip)
  const detailsPath = APP_ROUTE.tripDetails(trip.slug)

  return (
    <Link to={detailsPath} className={cn(tripCardRootVariants(), tripCardInteractiveVariants())}>
      <div className={tripCardImageWrapVariants()}>
        <img
          src={trip.imageSrc}
          alt={t(`trips.catalog.${trip.slug}.title`)}
          className={tripCardImageVariants()}
          loading="lazy"
        />
      </div>
      <div className={tripCardBodyVariants()}>
        <div className="flex flex-wrap gap-tight">
          <CategoryBadge category={trip.category} />
          <AudienceBadge audience={trip.targetAudience} />
        </div>
        <p className={tripCardMetaRowVariants()}>
          <span className="block sm:inline">{t(`trips.catalog.${trip.slug}.location`)}</span>
          <span className="hidden sm:inline" aria-hidden>
            {' '}
            ·{' '}
          </span>
          <span className="block sm:inline">{t('trips.card.durationLabel', { count: trip.durationDays })}</span>
        </p>
        <h3 className={tripCardTitleVariants()}>{t(`trips.catalog.${trip.slug}.title`)}</h3>
        <p className={tripCardDescriptionVariants()}>
          {t(`trips.catalog.${trip.slug}.shortDescription`)}
        </p>
        <div className={tripCardFooterVariants()}>
          <div className="min-w-0">
            <p className="text-caption text-muted-foreground">{t('trips.card.nextDate')}</p>
            <p className="text-body font-medium text-foreground">
              {nextDateIso
                ? formatTripDateDisplay(nextDateIso, i18n.language)
                : t('trips.card.noUpcomingDates')}
            </p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-caption text-muted-foreground">{t('trips.card.from')}</p>
            <p className={tripCardPriceVariants()}>{formatTripPriceEur(trip.priceEur)}</p>
          </div>
        </div>
        <span className="mt-tight block rounded-button py-2.5 text-center text-label font-semibold text-primary underline-offset-4 group-hover:underline sm:mt-0 sm:inline sm:py-0 sm:text-left">
          {t('trips.card.viewDetails')}
        </span>
      </div>
    </Link>
  )
}
