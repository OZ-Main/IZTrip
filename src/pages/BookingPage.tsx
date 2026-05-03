import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Navigate, useParams } from 'react-router-dom'

import { useAuthStore } from '@/app/store/authStore'
import BookingForm from '@/features/booking/components/BookingForm/BookingForm'
import PageHeader from '@/components/layout/PageHeader/PageHeader'
import { MOCK_TRIPS } from '@/features/trips/data/mockTrips'
import { findTripBySlug } from '@/features/trips/helpers/tripLookup.helpers'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { APP_ROUTE } from '@/shared/constants/routes.constants'

type BookingSubmissionOutcome = null | 'full' | 'emailWarning'

export default function BookingPage() {
  const { t } = useTranslation()
  const { tripSlug } = useParams()
  const user = useAuthStore((authStore) => authStore.user)
  const trip = tripSlug ? findTripBySlug(MOCK_TRIPS, tripSlug) : undefined
  const [submissionOutcome, setSubmissionOutcome] = useState<BookingSubmissionOutcome>(null)

  if (!trip) {
    return <Navigate to={APP_ROUTE.trips} replace />
  }

  if (trip.availableDates.length === 0) {
    return <Navigate to={APP_ROUTE.tripDetails(trip.slug)} replace />
  }

  if (!user) {
    return <Navigate to={APP_ROUTE.login} replace />
  }

  if (submissionOutcome !== null) {
    const isEmailWarning = submissionOutcome === 'emailWarning'
    return (
      <div className="mx-auto max-w-lg space-y-stack py-section">
        <Card
          className={
            isEmailWarning
              ? 'border-amber-500/40 bg-amber-50/80 shadow-card dark:border-amber-500/30 dark:bg-amber-950/20'
              : 'border-success/30 bg-success/5 shadow-card'
          }
        >
          <CardHeader>
            <CardTitle
              className={`font-display text-heading-xl ${isEmailWarning ? 'text-amber-900 dark:text-amber-100' : 'text-success'}`}
            >
              {isEmailWarning ? t('booking.successWithWarning.title') : t('booking.success.title')}
            </CardTitle>
            <CardDescription className="text-body text-muted-foreground">
              {isEmailWarning
                ? t('booking.successWithWarning.description')
                : t('booking.success.description')}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-tight">
            <Button type="button" variant="secondary" asChild>
              <Link to={APP_ROUTE.tripDetails(trip.slug)}>{t('booking.success.viewTrip')}</Link>
            </Button>
            <Button type="button" asChild>
              <Link to={APP_ROUTE.trips}>{t('booking.success.exploreMore')}</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl space-y-section py-section">
      <PageHeader title={t('booking.page.title')} description={t('booking.page.description')} />
      <Card className="shadow-card">
        <CardContent className="p-card sm:p-form">
          <BookingForm trip={trip} user={user} onSuccess={setSubmissionOutcome} />
        </CardContent>
      </Card>
    </div>
  )
}
