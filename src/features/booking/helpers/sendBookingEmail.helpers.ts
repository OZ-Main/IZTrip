import type { BookingEmailApiPayload } from '@/shared/validation/bookingEmailApiPayload.validation'

export type SendBookingNotificationEmailResult = { ok: true } | { ok: false }

export async function sendBookingNotificationEmail(
  payload: BookingEmailApiPayload,
): Promise<SendBookingNotificationEmailResult> {
  try {
    const response = await fetch('/api/send-booking-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const body = (await response.json()) as { ok?: boolean }
    if (!response.ok || body?.ok !== true) {
      return { ok: false }
    }

    return { ok: true }
  } catch {
    return { ok: false }
  }
}
