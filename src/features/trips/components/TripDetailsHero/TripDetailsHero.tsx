import { MapPin } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import AudienceBadge from '@/features/trips/components/AudienceBadge/AudienceBadge'
import CategoryBadge from '@/features/trips/components/CategoryBadge/CategoryBadge'
import {
  tripDetailsHeroBadgeRowVariants,
  tripDetailsHeroBottomVariants,
  tripDetailsHeroCopyVariants,
  tripDetailsHeroFactItemVariants,
  tripDetailsHeroFactLabelVariants,
  tripDetailsHeroFactsDesktopVariants,
  tripDetailsHeroFactsGridVariants,
  tripDetailsHeroFactsMobileVariants,
  tripDetailsHeroFactValueVariants,
  tripDetailsHeroImageVariants,
  tripDetailsHeroLeadVariants,
  tripDetailsHeroLocationVariants,
  tripDetailsHeroMediaVariants,
  tripDetailsHeroRootVariants,
  tripDetailsHeroScrimVariants,
  tripDetailsHeroTintVariants,
  tripDetailsHeroTitleVariants,
} from '@/features/trips/components/TripDetailsHero/TripDetailsHero.styles'
import { buildTripQuickFacts } from '@/features/trips/helpers/tripDetailsView.helpers'
import type { TripDefinition } from '@/features/trips/types/trip.types'
import { TRIP_IMAGE_PLACEHOLDER_SRC } from '@/shared/constants/tripImagePlaceholder.constants'

type TripDetailsHeroProps = {
  trip: TripDefinition
}

export default function TripDetailsHero({ trip }: TripDetailsHeroProps) {
  const { t, i18n } = useTranslation()
  const [imageFailed, setImageFailed] = useState(false)
  const quickFacts = buildTripQuickFacts({ trip, t, language: i18n.language })

  function renderFacts() {
    return (
      <div className={tripDetailsHeroFactsGridVariants()}>
        {quickFacts.map((fact) => (
          <div key={fact.id} className={tripDetailsHeroFactItemVariants()}>
            <p className={tripDetailsHeroFactLabelVariants()}>{fact.label}</p>
            <p className={tripDetailsHeroFactValueVariants()}>{fact.value}</p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section className={tripDetailsHeroRootVariants()}>
      <div className={tripDetailsHeroMediaVariants()}>
        {!imageFailed ? (
          <img
            src={trip.imageSrc}
            alt={t(`trips.catalog.${trip.slug}.title`)}
            className={tripDetailsHeroImageVariants()}
            loading="eager"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <img
            src={TRIP_IMAGE_PLACEHOLDER_SRC}
            alt=""
            className={tripDetailsHeroImageVariants()}
            loading="lazy"
            decoding="async"
          />
        )}
        <div className={tripDetailsHeroScrimVariants()} aria-hidden />
        <div className={tripDetailsHeroTintVariants()} aria-hidden />
        <div className={tripDetailsHeroBottomVariants()}>
          <div className={tripDetailsHeroCopyVariants()} style={{ animationDelay: '40ms' }}>
            <div className={tripDetailsHeroBadgeRowVariants()}>
              <CategoryBadge category={trip.category} />
              <AudienceBadge audience={trip.targetAudience} />
            </div>
            <p className={tripDetailsHeroLocationVariants()}>
              <MapPin className="h-4 w-4 shrink-0" aria-hidden />
              {t(`trips.catalog.${trip.slug}.location`)}
            </p>
            <h1 className={tripDetailsHeroTitleVariants()}>{t(`trips.catalog.${trip.slug}.title`)}</h1>
            <p className={tripDetailsHeroLeadVariants()}>{t(`trips.catalog.${trip.slug}.shortDescription`)}</p>
          </div>
          <div className={tripDetailsHeroFactsDesktopVariants()} style={{ animationDelay: '120ms' }}>
            {renderFacts()}
          </div>
        </div>
      </div>
      <div className={tripDetailsHeroFactsMobileVariants()}>{renderFacts()}</div>
    </section>
  )
}
