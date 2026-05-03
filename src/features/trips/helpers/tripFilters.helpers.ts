import {
  TRIP_DURATION_FILTER,
  type TripDurationFilter,
} from '@/features/trips/constants/tripDurationFilter.constants'
import type { TripDefinition } from '@/features/trips/types/trip.types'
import { TripAudience, TripCategory } from '@/shared/domain'

export const ALL_TRIP_CATEGORIES_FILTER = 'all' as const
export const ALL_TRIP_AUDIENCES_FILTER = 'all' as const

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
