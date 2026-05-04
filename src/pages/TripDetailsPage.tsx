import { useTranslation } from 'react-i18next'
import { Navigate, useParams } from 'react-router-dom'

import TripDetails from '@/features/trips/components/TripDetails/TripDetails'
import { MOCK_TRIPS } from '@/features/trips/data/mockTrips'
import { findTripBySlug } from '@/features/trips/helpers/tripLookup.helpers'
import PageBackNavLink from '@/shared/components/PageBackNavLink/PageBackNavLink'
import { APP_ROUTE } from '@/shared/constants/routes.constants'

export default function TripDetailsPage() {
  const { t } = useTranslation()
  const { tripSlug } = useParams()
  const trip = tripSlug ? findTripBySlug(MOCK_TRIPS, tripSlug) : undefined

  if (!trip) {
    return <Navigate to={APP_ROUTE.trips} replace />
  }

  return (
    <div className="mx-auto flex w-full max-w-content flex-col gap-tight sm:gap-stack lg:gap-section">
      <PageBackNavLink to={APP_ROUTE.trips} label={t('tripDetails.backToTrips')} />
      <TripDetails trip={trip} />
    </div>
  )
}
