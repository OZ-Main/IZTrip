import type { TripDefinition } from '@/features/trips/types/trip.types'

export function findTripsBySavedIds(
  catalogTrips: TripDefinition[],
  savedTripIds: string[],
): TripDefinition[] {
  if (savedTripIds.length === 0) {
    return []
  }

  const idOrder = new Map(savedTripIds.map((id, index) => [id, index]))
  return catalogTrips
    .filter((trip) => idOrder.has(trip.id))
    .sort(
      (tripA, tripB) =>
        (idOrder.get(tripA.id) ?? 0) - (idOrder.get(tripB.id) ?? 0),
    )
}
