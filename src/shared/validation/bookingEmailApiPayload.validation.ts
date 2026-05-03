import { z } from 'zod'

export const bookingEmailApiPayloadSchema = z.object({
  bookingRequestId: z.string().min(1),
  tripId: z.string().min(1),
  tripSlug: z.string().min(1),
  tripTitle: z.string().min(1),
  fullName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(6),
  preferredDateIso: z.string().min(1),
  peopleCount: z.number().int().positive(),
  message: z.string(),
  createdAtIso: z.string().min(1),
})

export type BookingEmailApiPayload = z.infer<typeof bookingEmailApiPayloadSchema>
