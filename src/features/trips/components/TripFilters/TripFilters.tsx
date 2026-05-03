import { useId } from 'react'
import { useTranslation } from 'react-i18next'

import {
  TRIP_DURATION_FILTER,
  isTripDurationFilter,
  type TripDurationFilter,
} from '@/features/trips/constants/tripDurationFilter.constants'
import { TRIP_SORT_OPTION, type TripSortOption } from '@/features/trips/constants/tripSort.constants'
import {
  tripFiltersFieldLabelVariants,
  tripFiltersRootVariants,
  tripFiltersSelectTriggerVariants,
  tripFiltersToolbarSegmentVariants,
  tripFiltersToolbarVariants,
} from '@/features/trips/components/TripFilters/TripFilters.styles'
import {
  ALL_TRIP_AUDIENCES_FILTER,
  ALL_TRIP_CATEGORIES_FILTER,
  isTripAudience,
  isTripCategory,
  type TripAudienceFilter,
  type TripCategoryFilter,
} from '@/features/trips/helpers/tripFilters.helpers'
import { TripAudience, TripCategory } from '@/shared/domain'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
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

const DURATION_FILTERS: TripDurationFilter[] = [
  TRIP_DURATION_FILTER.ALL,
  TRIP_DURATION_FILTER.ONE_DAY,
  TRIP_DURATION_FILTER.TWO_DAYS,
  TRIP_DURATION_FILTER.THREE_PLUS,
]

const SORT_OPTIONS: TripSortOption[] = [
  TRIP_SORT_OPTION.DATE_ASC,
  TRIP_SORT_OPTION.PRICE_ASC,
  TRIP_SORT_OPTION.DURATION_ASC,
]

type TripFiltersProps = {
  categoryFilter: TripCategoryFilter
  audienceFilter: TripAudienceFilter
  durationFilter: TripDurationFilter
  onCategoryFilterChange: (next: TripCategoryFilter) => void
  onAudienceFilterChange: (next: TripAudienceFilter) => void
  onDurationFilterChange: (next: TripDurationFilter) => void
  sortBy: TripSortOption
  onSortChange: (next: TripSortOption) => void
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

function durationFilterLabel(t: (key: string) => string, value: TripDurationFilter) {
  if (value === TRIP_DURATION_FILTER.ALL) {
    return t('trips.filters.durationAll')
  }

  if (value === TRIP_DURATION_FILTER.ONE_DAY) {
    return t('trips.filters.duration1')
  }

  if (value === TRIP_DURATION_FILTER.TWO_DAYS) {
    return t('trips.filters.duration2')
  }

  return t('trips.filters.duration3Plus')
}

function sortOptionLabel(t: (key: string) => string, value: TripSortOption) {
  if (value === TRIP_SORT_OPTION.DATE_ASC) {
    return t('trips.sort.dateAsc')
  }

  if (value === TRIP_SORT_OPTION.PRICE_ASC) {
    return t('trips.sort.priceAsc')
  }

  return t('trips.sort.durationAsc')
}

export default function TripFilters({
  categoryFilter,
  audienceFilter,
  durationFilter,
  onCategoryFilterChange,
  onAudienceFilterChange,
  onDurationFilterChange,
  sortBy,
  onSortChange,
  className,
}: TripFiltersProps) {
  const { t } = useTranslation()
  const fieldId = useId()
  const categoryFieldId = `${fieldId}-category`
  const audienceFieldId = `${fieldId}-audience`
  const durationFieldId = `${fieldId}-duration`
  const sortFieldId = `${fieldId}-sort`

  function handleCategoryValueChange(value: string) {
    if (value === ALL_TRIP_CATEGORIES_FILTER || isTripCategory(value)) {
      onCategoryFilterChange(value as TripCategoryFilter)
    }
  }

  function handleAudienceValueChange(value: string) {
    if (value === ALL_TRIP_AUDIENCES_FILTER || isTripAudience(value)) {
      onAudienceFilterChange(value as TripAudienceFilter)
    }
  }

  function handleDurationValueChange(value: string) {
    if (isTripDurationFilter(value)) {
      onDurationFilterChange(value)
    }
  }

  function handleSortValueChange(value: string) {
    if (
      value === TRIP_SORT_OPTION.PRICE_ASC ||
      value === TRIP_SORT_OPTION.DATE_ASC ||
      value === TRIP_SORT_OPTION.DURATION_ASC
    ) {
      onSortChange(value)
    }
  }

  return (
    <div className={cn(tripFiltersRootVariants(), className)}>
      <div className={tripFiltersToolbarVariants()}>
        <div className={tripFiltersToolbarSegmentVariants()}>
          <Label htmlFor={categoryFieldId} className={tripFiltersFieldLabelVariants()}>
            {t('trips.filters.category')}
          </Label>
          <Select value={categoryFilter} onValueChange={handleCategoryValueChange}>
            <SelectTrigger
              id={categoryFieldId}
              className={tripFiltersSelectTriggerVariants()}
              aria-label={t('trips.filters.category')}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CATEGORY_FILTERS.map((value) => (
                <SelectItem key={value} value={value}>
                  {categoryFilterLabel(t, value)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className={tripFiltersToolbarSegmentVariants()}>
          <Label htmlFor={audienceFieldId} className={tripFiltersFieldLabelVariants()}>
            {t('trips.filters.audience')}
          </Label>
          <Select value={audienceFilter} onValueChange={handleAudienceValueChange}>
            <SelectTrigger
              id={audienceFieldId}
              className={tripFiltersSelectTriggerVariants()}
              aria-label={t('trips.filters.audience')}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {AUDIENCE_FILTERS.map((value) => (
                <SelectItem key={value} value={value}>
                  {audienceFilterLabel(t, value)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className={tripFiltersToolbarSegmentVariants()}>
          <Label htmlFor={durationFieldId} className={tripFiltersFieldLabelVariants()}>
            {t('trips.filters.duration')}
          </Label>
          <Select value={durationFilter} onValueChange={handleDurationValueChange}>
            <SelectTrigger
              id={durationFieldId}
              className={tripFiltersSelectTriggerVariants()}
              aria-label={t('trips.filters.duration')}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {DURATION_FILTERS.map((value) => (
                <SelectItem key={value} value={value}>
                  {durationFilterLabel(t, value)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className={tripFiltersToolbarSegmentVariants()}>
          <Label htmlFor={sortFieldId} className={tripFiltersFieldLabelVariants()}>
            {t('trips.sort.label')}
          </Label>
          <Select value={sortBy} onValueChange={handleSortValueChange}>
            <SelectTrigger
              id={sortFieldId}
              className={tripFiltersSelectTriggerVariants()}
              aria-label={t('trips.sort.label')}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {SORT_OPTIONS.map((value) => (
                <SelectItem key={value} value={value}>
                  {sortOptionLabel(t, value)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
