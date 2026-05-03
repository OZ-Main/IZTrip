import type { TripAudience, TripCategory } from '@/shared/domain'

export type TripDefinition = {
  id: string
  slug: string
  category: TripCategory
  targetAudience: TripAudience
  durationDays: number
  priceEur: number
  availableDates: string[]
  imageSrc: string
  minPeople: number
  maxPeople: number
  highlightCount: number
  includedCount: number
  itineraryDayCount: number
}
