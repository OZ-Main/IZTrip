import type { TFunction } from 'i18next'
import { z } from 'zod'

import type { TripDefinition } from '@/features/trips/types/trip.types'

export function createBookingFormSchema(t: TFunction, trip: TripDefinition) {
  const allowedDates = new Set(trip.availableDates)

  return z.object({
    fullName: z.string().min(1, t('booking.validation.fullNameRequired')),
    email: z.string().min(1, t('booking.validation.emailRequired')).email(t('booking.validation.emailInvalid')),
    phone: z.string().min(6, t('booking.validation.phoneRequired')),
    preferredDate: z
      .string()
      .min(1, t('booking.validation.preferredDateRequired'))
      .refine((value) => allowedDates.has(value), t('booking.validation.preferredDateInvalid')),
    peopleCount: z.coerce
      .number({ invalid_type_error: t('booking.validation.peopleCountInvalid') })
      .int({ message: t('booking.validation.peopleCountInvalid') })
      .min(1, t('booking.validation.peopleCountMin'))
      .max(trip.maxPeople, t('booking.validation.peopleCountMax', { max: trip.maxPeople })),
    message: z.string().max(4000).optional(),
  })
}

export type BookingFormValues = z.infer<ReturnType<typeof createBookingFormSchema>>
