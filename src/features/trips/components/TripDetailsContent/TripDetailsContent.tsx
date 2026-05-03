import { BadgeCheck, CalendarDays, Check, ListChecks, Route, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import TripDateChips from '@/features/trips/components/TripDateChips/TripDateChips'
import TripDetailsSection from '@/features/trips/components/TripDetailsSection/TripDetailsSection'
import {
  tripDetailsFeatureIconVariants,
  tripDetailsFeatureListVariants,
  tripDetailsFeatureRowVariants,
  tripDetailsFeatureTextVariants,
  tripDetailsProsePanelVariants,
} from '@/features/trips/components/TripDetailsContent/TripDetailsContent.styles'
import TripItineraryTimeline from '@/features/trips/components/TripItineraryTimeline/TripItineraryTimeline'
import {
  buildTripHighlightTexts,
  buildTripIncludedTexts,
  buildTripItineraryDays,
} from '@/features/trips/helpers/tripDetailsView.helpers'
import type { TripDefinition } from '@/features/trips/types/trip.types'

type TripDetailsContentProps = {
  trip: TripDefinition
}

export default function TripDetailsContent({ trip }: TripDetailsContentProps) {
  const { t } = useTranslation()
  const highlights = buildTripHighlightTexts(trip, t)
  const included = buildTripIncludedTexts(trip, t)
  const itineraryDays = buildTripItineraryDays(trip, t)

  return (
    <>
      <TripDetailsSection
        title={t('tripDetails.descriptionTitle')}
        icon={Sparkles}
        style={{ animationDelay: '60ms' }}
        className="animate-iz-surface-in"
      >
        <div className={tripDetailsProsePanelVariants()}>{t(`trips.catalog.${trip.slug}.description`)}</div>
      </TripDetailsSection>

      {highlights.length > 0 ? (
        <TripDetailsSection
          title={t('tripDetails.highlightsTitle')}
          icon={ListChecks}
          style={{ animationDelay: '130ms' }}
          className="animate-iz-surface-in"
        >
          <div className={tripDetailsFeatureListVariants()}>
            {highlights.map((line, index) => (
              <div key={`${trip.id}-highlight-${index}`} className={tripDetailsFeatureRowVariants()}>
                <span className={tripDetailsFeatureIconVariants()}>
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                <p className={tripDetailsFeatureTextVariants()}>{line}</p>
              </div>
            ))}
          </div>
        </TripDetailsSection>
      ) : null}

      {included.length > 0 ? (
        <TripDetailsSection
          title={t('tripDetails.includedTitle')}
          icon={BadgeCheck}
          style={{ animationDelay: '200ms' }}
          className="animate-iz-surface-in"
        >
          <div className={tripDetailsFeatureListVariants()}>
            {included.map((line, index) => (
              <div key={`${trip.id}-included-${index}`} className={tripDetailsFeatureRowVariants()}>
                <span className={tripDetailsFeatureIconVariants()}>
                  <Check className="h-4 w-4" aria-hidden />
                </span>
                <p className={tripDetailsFeatureTextVariants()}>{line}</p>
              </div>
            ))}
          </div>
        </TripDetailsSection>
      ) : null}

      {itineraryDays.length > 0 ? (
        <TripDetailsSection
          title={t('tripDetails.itineraryTitle')}
          icon={Route}
          style={{ animationDelay: '270ms' }}
          className="animate-iz-surface-in"
        >
          <TripItineraryTimeline days={itineraryDays} />
        </TripDetailsSection>
      ) : null}

      {trip.availableDates.length > 0 ? (
        <TripDetailsSection
          title={t('tripDetails.availableDatesTitle')}
          icon={CalendarDays}
          style={{ animationDelay: '340ms' }}
          className="animate-iz-surface-in"
        >
          <TripDateChips availableDates={trip.availableDates} />
        </TripDetailsSection>
      ) : null}
    </>
  )
}
