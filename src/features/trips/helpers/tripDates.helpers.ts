import { compareAsc, format, parseISO } from 'date-fns'
import { enUS } from 'date-fns/locale/en-US'
import { ro } from 'date-fns/locale/ro'
import { ru } from 'date-fns/locale/ru'

import type { TripDefinition } from '@/features/trips/types/trip.types'

import { AppLanguage } from '@/shared/domain'

function resolveDateFnsLocale(localeCode: string) {
  if (localeCode === AppLanguage.Romanian) {
    return ro
  }

  if (localeCode === AppLanguage.Russian) {
    return ru
  }

  return enUS
}

export function getNextAvailableTripDateIso(trip: TripDefinition): string | undefined {
  if (trip.availableDates.length === 0) {
    return undefined
  }

  const sorted = [...trip.availableDates].sort((left, right) =>
    compareAsc(parseISO(left), parseISO(right)),
  )

  return sorted[0]
}

export function formatTripDateDisplay(isoDate: string, localeCode: string): string {
  return format(parseISO(isoDate), 'PP', { locale: resolveDateFnsLocale(localeCode) })
}
