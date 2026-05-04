import { MapPin } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import AudienceBadge from '@/features/trips/components/AudienceBadge/AudienceBadge'
import CategoryBadge from '@/features/trips/components/CategoryBadge/CategoryBadge'
import TripCardSaveButton from '@/features/trips/components/TripCardSaveButton/TripCardSaveButton'
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
  tripCardTrustRowVariants,
} from '@/features/trips/components/TripCard/TripCard.styles'
import { getTripCardTrustBadgeKeys } from '@/features/trips/helpers/tripCardTrustBadges.helpers'
import {
  formatTripDateDisplay,
  getNextAvailableTripDateIso,
} from '@/features/trips/helpers/tripDates.helpers'
import { formatTripPriceEur } from '@/features/trips/helpers/tripFormat.helpers'
import type { TripDefinition } from '@/features/trips/types/trip.types'
import TrustPill from '@/shared/components/TrustPill/TrustPill'
import { TRIP_IMAGE_PLACEHOLDER_SRC } from '@/shared/constants/tripImagePlaceholder.constants'
import { APP_ROUTE } from '@/shared/constants/routes.constants'
import { cn } from '@/shared/utils/cn'

type TripCardProps = {
  trip: TripDefinition
  density?: 'default' | 'compact'
}

export default function TripCard({ trip, density = 'default' }: TripCardProps) {
  const { t, i18n } = useTranslation()
  const [imageFailed, setImageFailed] = useState(false)
  const nextDateIso = getNextAvailableTripDateIso(trip)
  const detailsPath = APP_ROUTE.tripDetails(trip.slug)
  const trustKeys = getTripCardTrustBadgeKeys(trip)
  const imageSrc = imageFailed ? TRIP_IMAGE_PLACEHOLDER_SRC : trip.imageSrc
  const tripTitle = t(`trips.catalog.${trip.slug}.title`)

  return (
    <div className={cn(tripCardRootVariants(), tripCardInteractiveVariants())}>
      <div className="relative">
        <Link
          to={detailsPath}
          className="block min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={tripTitle}
        >
          <div className={tripCardImageWrapVariants()}>
            <img
              src={imageSrc}
              alt={tripTitle}
              className={tripCardImageVariants()}
              loading="lazy"
              onError={() => setImageFailed(true)}
            />
            <div className={tripCardImageOverlayVariants()} aria-hidden />
            <div className={tripCardImageTopVariants()}>
              <div className="flex flex-wrap gap-1 sm:gap-tight">
                <CategoryBadge
                  category={trip.category}
                  className="border border-border/70 bg-card/95 text-foreground shadow-md ring-1 ring-black/10 backdrop-blur-md dark:bg-card/90 dark:ring-white/10"
                />
                <AudienceBadge
                  audience={trip.targetAudience}
                  className="border border-border/70 bg-card/95 text-foreground shadow-md ring-1 ring-black/10 backdrop-blur-md dark:bg-card/90 dark:ring-white/10"
                />
              </div>
            </div>
            <div className={tripCardImageBottomMetaVariants()}>
              <span className="inline-flex items-center gap-1.5 text-white">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-white/90" aria-hidden />
                {t(`trips.catalog.${trip.slug}.location`)}
              </span>
            </div>
          </div>
        </Link>
        <TripCardSaveButton trip={trip} className="absolute right-3 top-3 z-20 sm:right-card sm:top-card" />
      </div>
      <Link
        to={detailsPath}
        className={cn(
          tripCardBodyVariants({ density }),
          'flex flex-1 flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:mt-tight',
        )}
        aria-label={tripTitle}
      >
        <p className={tripCardMetaRowVariants()}>
          <span>{t('trips.card.durationLabel', { count: trip.durationDays })}</span>
        </p>
        <h3 className={tripCardTitleVariants()}>{tripTitle}</h3>
        <p className={tripCardDescriptionVariants({ density })}>
          {t(`trips.catalog.${trip.slug}.shortDescription`)}
        </p>
        <div className={tripCardTrustRowVariants()}>
          {trustKeys.map((key) => (
            <TrustPill key={key} label={t(`trust.badge.${key}`)} />
          ))}
        </div>
        <div className={tripCardFooterVariants()}>
          <div className={tripCardFooterTopVariants()}>
            <div className="min-w-0 space-y-0.5">
              <p className="text-caption leading-tight text-muted-foreground">{t('trips.card.nextDeparture')}</p>
              <p className="text-caption font-medium leading-snug text-foreground sm:text-body-sm">
                {nextDateIso
                  ? formatTripDateDisplay(nextDateIso, i18n.language)
                  : t('trips.card.noUpcomingDates')}
              </p>
            </div>
            <div className="min-w-0 space-y-0.5 text-right">
              <p className="text-caption leading-tight text-muted-foreground">{t('trips.card.from')}</p>
              <p className={tripCardPriceVariants()}>{formatTripPriceEur(trip.priceEur)}</p>
            </div>
          </div>
          <span className={tripCardCtaVariants()}>{t('trips.card.exploreTrip')}</span>
        </div>
      </Link>
    </div>
  )
}
