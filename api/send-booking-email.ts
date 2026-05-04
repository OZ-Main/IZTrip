import type { VercelRequest, VercelResponse } from '@vercel/node'
import { format, parseISO } from 'date-fns'
import { Resend } from 'resend'

import { bookingEmailApiPayloadSchema } from '../src/shared/validation/bookingEmailApiPayload.validation.ts'

const BOOKING_EMAIL_FROM = 'YZ Trip <onboarding@resend.dev>'
const BOOKING_EMAIL_SUBJECT = 'New YZ Trip booking request'

function escapeHtml(raw: string): string {
  return raw
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function formatPreferredDateForEmail(iso: string): string {
  try {
    return format(parseISO(iso), 'yyyy-MM-dd')
  } catch {
    return iso
  }
}

function buildBookingEmailHtml(payload: {
  bookingRequestId: string
  tripId: string
  tripSlug: string
  tripTitle: string
  fullName: string
  email: string
  phone: string
  preferredDateIso: string
  peopleCount: number
  message: string
  createdAtIso: string
}): string {
  const preferredDisplay = formatPreferredDateForEmail(payload.preferredDateIso)
  const messageBlock =
    payload.message.trim().length > 0
      ? `<p><strong>Message:</strong> ${escapeHtml(payload.message)}</p>`
      : '<p><strong>Message:</strong> (none)</p>'
  return `
    <h1>New YZ Trip booking request</h1>
    <p><strong>Booking request id (Firestore):</strong> ${escapeHtml(payload.bookingRequestId)}</p>
    <p><strong>Created (submitted):</strong> ${escapeHtml(payload.createdAtIso)}</p>
    <hr />
    <p><strong>Trip title:</strong> ${escapeHtml(payload.tripTitle)}</p>
    <p><strong>Trip id:</strong> ${escapeHtml(payload.tripId)}</p>
    <p><strong>Trip slug:</strong> ${escapeHtml(payload.tripSlug)}</p>
    <hr />
    <p><strong>Customer name:</strong> ${escapeHtml(payload.fullName)}</p>
    <p><strong>Customer email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
    <p><strong>Preferred date:</strong> ${escapeHtml(preferredDisplay)} (${escapeHtml(payload.preferredDateIso)})</p>
    <p><strong>Number of people:</strong> ${escapeHtml(String(payload.peopleCount))}</p>
    ${messageBlock}
  `.trim()
}

function readJsonBody(req: VercelRequest): unknown {
  if (req.body === undefined || req.body === null) {
    return undefined
  }
  if (typeof req.body === 'string') {
    try {
      return JSON.parse(req.body) as unknown
    } catch {
      return undefined
    }
  }
  return req.body
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'METHOD_NOT_ALLOWED' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const businessEmail = process.env.BUSINESS_EMAIL

  if (!apiKey || !businessEmail) {
    return res.status(500).json({ ok: false, error: 'SERVER_CONFIG' })
  }

  const parsed = bookingEmailApiPayloadSchema.safeParse(readJsonBody(req))
  if (!parsed.success) {
    return res.status(400).json({ ok: false, error: 'VALIDATION_ERROR' })
  }

  const payload = parsed.data
  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      from: BOOKING_EMAIL_FROM,
      to: businessEmail,
      subject: BOOKING_EMAIL_SUBJECT,
      html: buildBookingEmailHtml(payload),
    })

    if (error) {
      return res.status(502).json({ ok: false, error: 'EMAIL_PROVIDER_ERROR' })
    }

    return res.status(200).json({ ok: true })
  } catch {
    return res.status(502).json({ ok: false, error: 'EMAIL_SEND_FAILED' })
  }
}
