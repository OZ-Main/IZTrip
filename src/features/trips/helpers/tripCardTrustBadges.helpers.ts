import { TripCategory } from '@/shared/domain'

import type { TripDefinition } from '@/features/trips/types/trip.types'

export type TripCardTrustBadgeKey = 'flexibleDates' | 'smallGroup' | 'localGuide'

export function getTripCardTrustBadgeKeys(trip: TripDefinition): TripCardTrustBadgeKey[] {
  const candidates: TripCardTrustBadgeKey[] = []

  if (trip.availableDates.length >= 2) {
    candidates.push('flexibleDates')
  }

  if (trip.maxPeople <= 12) {
    candidates.push('smallGroup')
  }

  const qualifiesLocalGuide =
    trip.category === TripCategory.CULTURE ||
    trip.category === TripCategory.NATURE ||
    trip.category === TripCategory.WEEKEND ||
    trip.category === TripCategory.ADULTS ||
    trip.category === TripCategory.FAMILY ||
    trip.category === TripCategory.KIDS ||
    trip.category === TripCategory.EDUCATIONAL

  if (qualifiesLocalGuide) {
    candidates.push('localGuide')
  }

  const unique = Array.from(new Set(candidates))

  if (unique.length > 0) {
    return unique.slice(0, 2)
  }

  return ['localGuide']
}
