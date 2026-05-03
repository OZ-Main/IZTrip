export const TRIP_SORT_OPTION = {
  PRICE_ASC: 'priceAsc',
  DATE_ASC: 'dateAsc',
  DURATION_ASC: 'durationAsc',
} as const

export type TripSortOption = (typeof TRIP_SORT_OPTION)[keyof typeof TRIP_SORT_OPTION]
