import { compareAsc, parseISO } from 'date-fns'

import { TRIP_SORT_OPTION, type TripSortOption } from '@/features/trips/constants/tripSort.constants'
import { getNextAvailableTripDateIso } from '@/features/trips/helpers/tripDates.helpers'
import type { TripDefinition } from '@/features/trips/types/trip.types'

function compareTripsByEarliestDate(left: TripDefinition, right: TripDefinition): number {
  const leftIso = getNextAvailableTripDateIso(left)
  const rightIso = getNextAvailableTripDateIso(right)

  if (leftIso && rightIso) {
    return compareAsc(parseISO(leftIso), parseISO(rightIso))
  }

  if (leftIso) {
    return -1
  }

  if (rightIso) {
    return 1
  }

  return 0
}

export function sortTrips(trips: TripDefinition[], sortBy: TripSortOption): TripDefinition[] {
  const next = [...trips]

  if (sortBy === TRIP_SORT_OPTION.PRICE_ASC) {
    next.sort((left, right) => left.priceEur - right.priceEur)
    return next
  }

  if (sortBy === TRIP_SORT_OPTION.DURATION_ASC) {
    next.sort((left, right) => left.durationDays - right.durationDays)
    return next
  }

  if (sortBy === TRIP_SORT_OPTION.DATE_ASC) {
    next.sort(compareTripsByEarliestDate)
    return next
  }

  return next
}
