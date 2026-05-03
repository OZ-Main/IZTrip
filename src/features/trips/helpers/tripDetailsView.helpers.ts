import type { TFunction } from 'i18next'

import {
  formatTripDateDisplay,
  getNextAvailableTripDateIso,
} from '@/features/trips/helpers/tripDates.helpers'
import { formatTripDurationDays, formatTripPriceEur } from '@/features/trips/helpers/tripFormat.helpers'
import type { TripDefinition } from '@/features/trips/types/trip.types'

export { getNextAvailableTripDateIso as getTripNextAvailableDateIso } from '@/features/trips/helpers/tripDates.helpers'

export function formatTripGroupSizeRange(t: TFunction, minPeople: number, maxPeople: number): string {
  return t('tripDetails.groupSize', { min: minPeople, max: maxPeople })
}

export type TripQuickFact = {
  id: string
  label: string
  value: string
}

export function buildTripQuickFacts(input: {
  trip: TripDefinition
  t: TFunction
  language: string
}): TripQuickFact[] {
  const { trip, t, language } = input
  const nextIso = getNextAvailableTripDateIso(trip)
  const nextDateDisplay = nextIso
    ? formatTripDateDisplay(nextIso, language)
    : t('tripDetails.metaNextDateUnknown')

  return [
    {
      id: 'next',
      label: t('tripDetails.factLabels.nextDeparture'),
      value: nextDateDisplay,
    },
    {
      id: 'price',
      label: t('tripDetails.factLabels.price'),
      value: formatTripPriceEur(trip.priceEur),
    },
    {
      id: 'duration',
      label: t('tripDetails.factLabels.duration'),
      value: formatTripDurationDays(trip.durationDays, t),
    },
    {
      id: 'group',
      label: t('tripDetails.factLabels.group'),
      value: t('tripDetails.factLabels.groupValue', { min: trip.minPeople, max: trip.maxPeople }),
    },
  ]
}

export function buildTripHighlightTexts(trip: TripDefinition, t: TFunction): string[] {
  if (trip.highlightCount <= 0) {
    return []
  }

  return Array.from({ length: trip.highlightCount }, (_, index) =>
    t(`trips.catalog.${trip.slug}.highlight${index + 1}`),
  )
}

export function buildTripIncludedTexts(trip: TripDefinition, t: TFunction): string[] {
  if (trip.includedCount <= 0) {
    return []
  }

  return Array.from({ length: trip.includedCount }, (_, index) =>
    t(`trips.catalog.${trip.slug}.included${index + 1}`),
  )
}

export type TripItineraryDayView = {
  day: number
  title: string
  body: string
}

export function buildTripItineraryDays(trip: TripDefinition, t: TFunction): TripItineraryDayView[] {
  if (trip.itineraryDayCount <= 0) {
    return []
  }

  return Array.from({ length: trip.itineraryDayCount }, (_, index) => {
    const day = index + 1

    return {
      day,
      title: t(`trips.catalog.${trip.slug}.itineraryDay${day}Title`),
      body: t(`trips.catalog.${trip.slug}.itineraryDay${day}Body`),
    }
  })
}

export function getVisibleTripDateIsos(isoDates: string[], maxCount: number): {
  visible: string[]
  hiddenCount: number
} {
  if (isoDates.length === 0) {
    return { visible: [], hiddenCount: 0 }
  }

  const sorted = [...isoDates].sort()
  const visible = sorted.slice(0, maxCount)
  const hiddenCount = Math.max(0, sorted.length - visible.length)

  return { visible, hiddenCount }
}
