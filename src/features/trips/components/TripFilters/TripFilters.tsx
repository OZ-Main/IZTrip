import { useTranslation } from 'react-i18next'

import {
  tripFiltersChipRowVariants,
  tripFiltersChipVariants,
  tripFiltersGroupVariants,
  tripFiltersLabelVariants,
  tripFiltersRootVariants,
} from '@/features/trips/components/TripFilters/TripFilters.styles'
import {
  ALL_TRIP_AUDIENCES_FILTER,
  ALL_TRIP_CATEGORIES_FILTER,
  type TripAudienceFilter,
  type TripCategoryFilter,
} from '@/features/trips/helpers/tripFilters.helpers'
import { TripAudience, TripCategory } from '@/shared/domain'
import { cn } from '@/shared/utils/cn'

const CATEGORY_FILTERS: TripCategoryFilter[] = [
  ALL_TRIP_CATEGORIES_FILTER,
  TripCategory.KIDS,
  TripCategory.FAMILY,
  TripCategory.ADULTS,
  TripCategory.NATURE,
  TripCategory.CULTURE,
  TripCategory.WEEKEND,
  TripCategory.EDUCATIONAL,
  TripCategory.CUSTOM,
]

const AUDIENCE_FILTERS: TripAudienceFilter[] = [
  ALL_TRIP_AUDIENCES_FILTER,
  TripAudience.KIDS,
  TripAudience.FAMILY,
  TripAudience.ADULTS,
  TripAudience.MIXED,
  TripAudience.GROUP,
]

type TripFiltersProps = {
  categoryFilter: TripCategoryFilter
  audienceFilter: TripAudienceFilter
  onCategoryFilterChange: (next: TripCategoryFilter) => void
  onAudienceFilterChange: (next: TripAudienceFilter) => void
  className?: string
}

function categoryFilterLabel(t: (key: string) => string, value: TripCategoryFilter) {
  if (value === ALL_TRIP_CATEGORIES_FILTER) {
    return t('trips.filters.all')
  }

  return t(`trips.categories.${value}`)
}

function audienceFilterLabel(t: (key: string) => string, value: TripAudienceFilter) {
  if (value === ALL_TRIP_AUDIENCES_FILTER) {
    return t('trips.filters.all')
  }

  return t(`trips.audiences.${value}`)
}

export default function TripFilters({
  categoryFilter,
  audienceFilter,
  onCategoryFilterChange,
  onAudienceFilterChange,
  className,
}: TripFiltersProps) {
  const { t } = useTranslation()

  return (
    <div className={cn(tripFiltersRootVariants(), className)}>
      <div className={tripFiltersGroupVariants()}>
        <p className={tripFiltersLabelVariants()}>{t('trips.filters.category')}</p>
        <div
          className={tripFiltersChipRowVariants()}
          role="group"
          aria-label={t('trips.filters.category')}
        >
          {CATEGORY_FILTERS.map((value) => (
            <button
              key={value}
              type="button"
              className={tripFiltersChipVariants({
                state: categoryFilter === value ? 'active' : 'idle',
              })}
              aria-pressed={categoryFilter === value}
              onClick={() => onCategoryFilterChange(value)}
            >
              {categoryFilterLabel(t, value)}
            </button>
          ))}
        </div>
      </div>
      <div className={tripFiltersGroupVariants()}>
        <p className={tripFiltersLabelVariants()}>{t('trips.filters.audience')}</p>
        <div
          className={tripFiltersChipRowVariants()}
          role="group"
          aria-label={t('trips.filters.audience')}
        >
          {AUDIENCE_FILTERS.map((value) => (
            <button
              key={value}
              type="button"
              className={tripFiltersChipVariants({
                state: audienceFilter === value ? 'active' : 'idle',
              })}
              aria-pressed={audienceFilter === value}
              onClick={() => onAudienceFilterChange(value)}
            >
              {audienceFilterLabel(t, value)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
