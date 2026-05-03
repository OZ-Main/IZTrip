export const TRIP_DURATION_FILTER = {
  ALL: 'all',
  ONE_DAY: '1',
  TWO_DAYS: '2',
  THREE_PLUS: '3plus',
} as const

export type TripDurationFilter = (typeof TRIP_DURATION_FILTER)[keyof typeof TRIP_DURATION_FILTER]

export function isTripDurationFilter(value: string): value is TripDurationFilter {
  return (Object.values(TRIP_DURATION_FILTER) as string[]).includes(value)
}
