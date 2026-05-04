import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { useAuthStore } from '@/app/store/authStore'
import EmptyState from '@/components/feedback/EmptyState/EmptyState'
import SectionHeader from '@/components/layout/SectionHeader/SectionHeader'
import { Button } from '@/components/ui/button'
import FeaturedTrips from '@/features/home/components/FeaturedTrips/FeaturedTrips'
import { MOCK_TRIPS } from '@/features/trips/data/mockTrips'
import { findTripsBySavedIds } from '@/features/trips/helpers/savedTripsLookup.helpers'
import { useSavedTripsStore } from '@/features/trips/store/savedTripsStore'
import { APP_ROUTE } from '@/shared/constants/routes.constants'

export default function SavedTripsPage() {
  const { t } = useTranslation()
  const user = useAuthStore((authStore) => authStore.user)
  const userId = user?.uid ?? ''
  const savedTripIds = useSavedTripsStore((savedTripsStore) =>
    userId ? (savedTripsStore.savedIdsByUserId[userId] ?? []) : [],
  )
  const savedTrips = findTripsBySavedIds(MOCK_TRIPS, savedTripIds)

  if (!user) {
    return (
      <div className="space-y-section">
        <EmptyState
          title={t('savedTrips.guest.title')}
          description={t('savedTrips.guest.description')}
          actionSlot={
            <div className="flex w-full flex-col gap-tight sm:w-auto sm:flex-row sm:justify-center">
              <Button type="button" variant="accent" className="min-h-11 w-full sm:w-auto" asChild>
                <Link to={APP_ROUTE.login}>{t('savedTrips.guest.signIn')}</Link>
              </Button>
              <Button type="button" variant="outline" className="min-h-11 w-full sm:w-auto" asChild>
                <Link to={APP_ROUTE.register}>{t('nav.register')}</Link>
              </Button>
            </div>
          }
        />
      </div>
    )
  }

  return (
    <div className="space-y-section">
      <SectionHeader
        title={t('savedTrips.page.title')}
        description={t('savedTrips.page.description')}
        actionSlot={
          <Button type="button" variant="outline" className="min-h-11" asChild>
            <Link to={APP_ROUTE.trips}>{t('savedTrips.page.browseTrips')}</Link>
          </Button>
        }
      />

      {savedTrips.length === 0 ? (
        <EmptyState
          title={t('savedTrips.empty.title')}
          description={t('savedTrips.empty.description')}
          actionSlot={
            <Button type="button" variant="outline" className="min-h-11 w-full sm:w-auto" asChild>
              <Link to={APP_ROUTE.trips}>{t('savedTrips.page.browseTrips')}</Link>
            </Button>
          }
        />
      ) : (
        <FeaturedTrips trips={savedTrips} layout="home" />
      )}
    </div>
  )
}
