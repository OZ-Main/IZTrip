import type { TFunction } from 'i18next'

export function formatTripPriceEur(amount: number): string {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatTripDurationDays(count: number, t: TFunction): string {
  return t('trips.card.durationLabel', { count })
}
