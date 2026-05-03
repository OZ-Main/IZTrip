import { MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import AudienceBadge from '@/features/trips/components/AudienceBadge/AudienceBadge'
import CategoryBadge from '@/features/trips/components/CategoryBadge/CategoryBadge'
import {
  tripCardBodyVariants,
  tripCardCtaVariants,
  tripCardDescriptionVariants,
  tripCardFooterTopVariants,
  tripCardFooterVariants,
  tripCardImageBottomMetaVariants,
  tripCardImageOverlayVariants,
  tripCardImageTopVariants,
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
        <div className={tripCardImageOverlayVariants()} aria-hidden />
        <div className={tripCardImageTopVariants()}>
          <div className="flex flex-wrap gap-tight">
            <CategoryBadge
              category={trip.category}
              className="border-white/45 bg-background/90 text-primary shadow-sm backdrop-blur-md"
            />
            <AudienceBadge
              audience={trip.targetAudience}
              className="border-white/45 bg-background/90 text-primary shadow-sm backdrop-blur-md"
            />
          </div>
        </div>
        <div className={tripCardImageBottomMetaVariants()}>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
            {t(`trips.catalog.${trip.slug}.location`)}
          </span>
        </div>
      </div>
      <div className={tripCardBodyVariants()}>
        <p className={tripCardMetaRowVariants()}>
          <span>{t('trips.card.durationLabel', { count: trip.durationDays })}</span>
        </p>
        <h3 className={tripCardTitleVariants()}>{t(`trips.catalog.${trip.slug}.title`)}</h3>
        <p className={tripCardDescriptionVariants()}>
          {t(`trips.catalog.${trip.slug}.shortDescription`)}
        </p>
        <div className={tripCardFooterVariants()}>
          <div className={tripCardFooterTopVariants()}>
            <div className="min-w-0 space-y-0.5">
              <p className="text-caption text-muted-foreground">{t('trips.card.nextDate')}</p>
              <p className="text-body font-medium text-foreground">
                {nextDateIso
                  ? formatTripDateDisplay(nextDateIso, i18n.language)
                  : t('trips.card.noUpcomingDates')}
              </p>
            </div>
            <div className="min-w-0 space-y-0.5 sm:text-right">
              <p className="text-caption text-muted-foreground">{t('trips.card.from')}</p>
              <p className={tripCardPriceVariants()}>{formatTripPriceEur(trip.priceEur)}</p>
            </div>
          </div>
          <span className={tripCardCtaVariants()}>{t('trips.card.viewDetails')}</span>
        </div>
      </div>
    </Link>
  )
}
