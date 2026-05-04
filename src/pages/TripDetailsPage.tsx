import { useTranslation } from 'react-i18next'
import { Navigate, useParams } from 'react-router-dom'

import TripDetails from '@/features/trips/components/TripDetails/TripDetails'
import { MOCK_TRIPS } from '@/features/trips/data/mockTrips'
import { findTripBySlug } from '@/features/trips/helpers/tripLookup.helpers'
import { Button } from '@/components/ui/button'
import { APP_ROUTE } from '@/shared/constants/routes.constants'
import { useNavigateBack } from '@/shared/hooks/useNavigateBack'

export default function TripDetailsPage() {
  const { t } = useTranslation()
  const navigateBack = useNavigateBack()
  const { tripSlug } = useParams()
  const trip = tripSlug ? findTripBySlug(MOCK_TRIPS, tripSlug) : undefined

  if (!trip) {
    return <Navigate to={APP_ROUTE.trips} replace />
  }

  return (
    <div className="mx-auto w-full max-w-content space-y-section">
      <div className="-ms-2">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="min-h-11 px-3"
          onClick={() => navigateBack()}
        >
          {t('tripDetails.backToTrips')}
        </Button>
      </div>
      <TripDetails trip={trip} />
    </div>
  )
}
