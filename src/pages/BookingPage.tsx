import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Navigate, useParams } from 'react-router-dom'

import { useAuthStore } from '@/app/store/authStore'
import BookingForm from '@/features/booking/components/BookingForm/BookingForm'
import BookingFormCard from '@/features/booking/components/BookingFormCard/BookingFormCard'
import BookingPageLayout from '@/features/booking/components/BookingPageLayout/BookingPageLayout'
import BookingSuccessView from '@/features/booking/components/BookingSuccessView/BookingSuccessView'
import BookingTrustPanel from '@/features/booking/components/BookingTrustPanel/BookingTrustPanel'
import BookingTripSummaryCard from '@/features/booking/components/BookingTripSummaryCard/BookingTripSummaryCard'
import PageHeader from '@/components/layout/PageHeader/PageHeader'
import { MOCK_TRIPS } from '@/features/trips/data/mockTrips'
import { findTripBySlug } from '@/features/trips/helpers/tripLookup.helpers'
import { APP_ROUTE } from '@/shared/constants/routes.constants'

type BookingSubmissionOutcome = null | 'full' | 'emailWarning'

export default function BookingPage() {
  const { t } = useTranslation()
  const { tripSlug } = useParams()
  const user = useAuthStore((authStore) => authStore.user)
  const trip = tripSlug ? findTripBySlug(MOCK_TRIPS, tripSlug) : undefined
  const [submissionOutcome, setSubmissionOutcome] = useState<BookingSubmissionOutcome>(null)
  const [preferredDateIso, setPreferredDateIso] = useState(() => trip?.availableDates[0] ?? '')

  if (!trip) {
    return <Navigate to={APP_ROUTE.trips} replace />
  }

  if (trip.availableDates.length === 0) {
    return <Navigate to={APP_ROUTE.tripDetails(trip.slug)} replace />
  }

  if (!user) {
    return <Navigate to={APP_ROUTE.login} replace />
  }

  const tripTitle = t(`trips.catalog.${trip.slug}.title`)

  if (submissionOutcome !== null) {
    return (
      <BookingSuccessView tripSlug={trip.slug} tripTitle={tripTitle} outcome={submissionOutcome} />
    )
  }

  return (
    <div className="mx-auto w-full max-w-content space-y-relaxed pb-section pt-0 sm:space-y-section sm:pb-section sm:pt-0">
      <PageHeader title={t('booking.page.title')} description={t('booking.page.description')} />
      <BookingPageLayout
        formSlot={
          <BookingFormCard>
            <BookingForm
              trip={trip}
              user={user}
              onSuccess={setSubmissionOutcome}
              onPreferredDateChange={setPreferredDateIso}
            />
          </BookingFormCard>
        }
        asideSlot={
          <>
            <BookingTripSummaryCard trip={trip} preferredDateIso={preferredDateIso} />
            <BookingTrustPanel />
          </>
        }
      />
    </div>
  )
}
