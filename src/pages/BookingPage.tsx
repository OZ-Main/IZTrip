import { motion, useReducedMotion } from 'framer-motion'
import { CheckCircle2, MailWarning } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, Navigate, useParams } from 'react-router-dom'

import { useAuthStore } from '@/app/store/authStore'
import BookingForm from '@/features/booking/components/BookingForm/BookingForm'
import BookingTrustPanel from '@/features/booking/components/BookingTrustPanel/BookingTrustPanel'
import BookingTripSummaryCard from '@/features/booking/components/BookingTripSummaryCard/BookingTripSummaryCard'
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
  const prefersReducedMotion = useReducedMotion()

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
      <div className="mx-auto max-w-lg py-section">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card
            className={
              isEmailWarning
                ? 'border-amber-500/40 bg-amber-50/90 shadow-card dark:border-amber-500/35 dark:bg-amber-950/25'
                : 'border-success/35 bg-success/5 shadow-card'
            }
          >
            <CardHeader className="space-y-relaxed">
              <div className="flex items-start gap-tight">
                {isEmailWarning ? (
                  <MailWarning
                    className="mt-0.5 h-9 w-9 shrink-0 text-amber-600 dark:text-amber-300"
                    aria-hidden
                  />
                ) : (
                  <CheckCircle2 className="mt-0.5 h-9 w-9 shrink-0 text-success" aria-hidden />
                )}
                <div className="min-w-0 space-y-tight">
                  <CardTitle
                    className={`font-display text-heading-xl ${isEmailWarning ? 'text-amber-950 dark:text-amber-50' : 'text-success'}`}
                  >
                    {isEmailWarning
                      ? t('booking.successWithWarning.title')
                      : t('booking.success.title')}
                  </CardTitle>
                  <CardDescription className="text-body text-muted-foreground">
                    {isEmailWarning
                      ? t('booking.successWithWarning.description')
                      : t('booking.success.description')}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-stack">
              <div className="rounded-card border border-border/70 bg-card/80 p-card">
                <p className="font-display text-heading-sm font-semibold text-foreground">
                  {t('booking.success.nextTitle')}
                </p>
                <ul className="mt-tight space-y-tight text-body-sm text-muted-foreground">
                  <li>{t('booking.success.next1')}</li>
                  <li>{t('booking.success.next2')}</li>
                  <li>{t('booking.success.next3')}</li>
                </ul>
              </div>
              <div className="flex flex-col gap-tight sm:flex-row">
                <Button
                  type="button"
                  variant="secondary"
                  className="min-h-11 w-full sm:w-auto"
                  asChild
                >
                  <Link to={APP_ROUTE.tripDetails(trip.slug)}>{t('booking.success.viewTrip')}</Link>
                </Button>
                <Button type="button" className="min-h-11 w-full sm:w-auto" asChild>
                  <Link to={APP_ROUTE.trips}>{t('booking.success.exploreMore')}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="space-y-section py-section">
      <PageHeader title={t('booking.page.title')} description={t('booking.page.description')} />
      <div className="mx-auto grid max-w-5xl gap-relaxed lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start">
        <div className="space-y-relaxed lg:sticky lg:top-28">
          <BookingTripSummaryCard trip={trip} />
          <BookingTrustPanel />
          <div className="rounded-[1rem] border border-border/80 bg-muted/30 p-card text-body-sm text-muted-foreground">
            <p className="font-medium text-foreground">{t('booking.afterSubmitTitle')}</p>
            <p className="mt-tight">{t('booking.afterSubmitBody')}</p>
          </div>
        </div>
        <Card className="shadow-card">
          <CardContent className="p-card sm:p-form">
            <BookingForm trip={trip} user={user} onSuccess={setSubmissionOutcome} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
