import type { TripDefinition } from '@/features/trips/types/trip.types'

export function findTripBySlug(trips: TripDefinition[], tripSlug: string): TripDefinition | undefined {
  return trips.find((trip) => trip.slug === tripSlug)
}
