import {
  TRIP_DURATION_FILTER,
  type TripDurationFilter,
} from '@/features/trips/constants/tripDurationFilter.constants'
import type { TripDefinition } from '@/features/trips/types/trip.types'
import { TripAudience, TripCategory } from '@/shared/domain'

export const ALL_TRIP_CATEGORIES_FILTER = 'all' as const
export const ALL_TRIP_AUDIENCES_FILTER = 'all' as const

const TRIP_CATEGORY_ORDER: TripCategory[] = [
  TripCategory.KIDS,
  TripCategory.FAMILY,
  TripCategory.ADULTS,
  TripCategory.NATURE,
  TripCategory.CULTURE,
  TripCategory.WEEKEND,
  TripCategory.EDUCATIONAL,
  TripCategory.CUSTOM,
]

const TRIP_AUDIENCE_ORDER: TripAudience[] = [
  TripAudience.KIDS,
  TripAudience.FAMILY,
  TripAudience.ADULTS,
  TripAudience.MIXED,
  TripAudience.GROUP,
]

export type TripCategoryFilter = TripCategory | typeof ALL_TRIP_CATEGORIES_FILTER
export type TripAudienceFilter = TripAudience | typeof ALL_TRIP_AUDIENCES_FILTER

export function filterTripsByCategory(
  trips: TripDefinition[],
  categoryFilter: TripCategoryFilter,
): TripDefinition[] {
  if (categoryFilter === ALL_TRIP_CATEGORIES_FILTER) {
    return trips
  }

  return trips.filter((trip) => trip.category === categoryFilter)
}

export function filterTripsByAudience(
  trips: TripDefinition[],
  audienceFilter: TripAudienceFilter,
): TripDefinition[] {
  if (audienceFilter === ALL_TRIP_AUDIENCES_FILTER) {
    return trips
  }

  return trips.filter((trip) => trip.targetAudience === audienceFilter)
}

export function filterTripsByCategoryAndAudience(
  trips: TripDefinition[],
  categoryFilter: TripCategoryFilter,
  audienceFilter: TripAudienceFilter,
): TripDefinition[] {
  return filterTripsByAudience(filterTripsByCategory(trips, categoryFilter), audienceFilter)
}

export function filterTripsByDuration(
  trips: TripDefinition[],
  durationFilter: TripDurationFilter,
): TripDefinition[] {
  if (durationFilter === TRIP_DURATION_FILTER.ALL) {
    return trips
  }

  if (durationFilter === TRIP_DURATION_FILTER.ONE_DAY) {
    return trips.filter((trip) => trip.durationDays === 1)
  }

  if (durationFilter === TRIP_DURATION_FILTER.TWO_DAYS) {
    return trips.filter((trip) => trip.durationDays === 2)
  }

  return trips.filter((trip) => trip.durationDays >= 3)
}

export function isTripCategory(value: string): value is TripCategory {
  return (Object.values(TripCategory) as string[]).includes(value)
}

export function isTripAudience(value: string): value is TripAudience {
  return (Object.values(TripAudience) as string[]).includes(value)
}

export function buildAvailableCategoryFilters(
  trips: TripDefinition[],
  audienceFilter: TripAudienceFilter,
  durationFilter: TripDurationFilter,
): TripCategoryFilter[] {
  const pool = filterTripsByAudience(filterTripsByDuration(trips, durationFilter), audienceFilter)
  const present = new Set(pool.map((trip) => trip.category))
  const ordered = TRIP_CATEGORY_ORDER.filter((category) => present.has(category))

  return [ALL_TRIP_CATEGORIES_FILTER, ...ordered]
}

export function buildAvailableAudienceFilters(
  trips: TripDefinition[],
  categoryFilter: TripCategoryFilter,
  durationFilter: TripDurationFilter,
): TripAudienceFilter[] {
  const pool = filterTripsByDuration(filterTripsByCategory(trips, categoryFilter), durationFilter)
  const present = new Set(pool.map((trip) => trip.targetAudience))
  const ordered = TRIP_AUDIENCE_ORDER.filter((audience) => present.has(audience))

  return [ALL_TRIP_AUDIENCES_FILTER, ...ordered]
}

export function buildAvailableDurationFilters(
  trips: TripDefinition[],
  categoryFilter: TripCategoryFilter,
  audienceFilter: TripAudienceFilter,
): TripDurationFilter[] {
  const pool = filterTripsByCategoryAndAudience(trips, categoryFilter, audienceFilter)
  const next: TripDurationFilter[] = [TRIP_DURATION_FILTER.ALL]

  if (pool.some((trip) => trip.durationDays === 1)) {
    next.push(TRIP_DURATION_FILTER.ONE_DAY)
  }

  if (pool.some((trip) => trip.durationDays === 2)) {
    next.push(TRIP_DURATION_FILTER.TWO_DAYS)
  }

  if (pool.some((trip) => trip.durationDays >= 3)) {
    next.push(TRIP_DURATION_FILTER.THREE_PLUS)
  }

  return next
}
