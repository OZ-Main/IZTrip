import { collection, doc, setDoc, Timestamp } from 'firebase/firestore'

import { getFirestoreDb } from '@/lib/firebase/firestoreDb'
import { FIRESTORE_COLLECTION } from '@/shared/constants/firestore.constants'
import { BookingRequestStatus } from '@/shared/domain'

export type BookingRequestWriteInput = {
  userId: string
  tripId: string
  tripSlug: string
  tripTitle: string
  fullName: string
  email: string
  phone: string
  preferredDateIso: string
  peopleCount: number
  message: string
}

export type BookingRequestWriteResult = {
  bookingRequestId: string
  createdAtIso: string
}

export async function writeBookingRequest(
  input: BookingRequestWriteInput,
): Promise<BookingRequestWriteResult> {
  const db = getFirestoreDb()
  const bookingRef = doc(collection(db, FIRESTORE_COLLECTION.BOOKING_REQUESTS))
  const createdAt = Timestamp.now()

  await setDoc(bookingRef, {
    userId: input.userId,
    tripId: input.tripId,
    tripSlug: input.tripSlug,
    tripTitle: input.tripTitle,
    fullName: input.fullName,
    email: input.email,
    phone: input.phone,
    preferredDate: input.preferredDateIso,
    peopleCount: input.peopleCount,
    message: input.message,
    status: BookingRequestStatus.SUBMITTED,
    createdAt,
  })

  return {
    bookingRequestId: bookingRef.id,
    createdAtIso: createdAt.toDate().toISOString(),
  }
}
