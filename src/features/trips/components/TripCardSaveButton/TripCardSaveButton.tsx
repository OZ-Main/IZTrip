import { Heart } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { toast } from 'sonner'

import { useAuthStore } from '@/app/store/authStore'
import { tripCardSaveButtonVariants } from '@/features/trips/components/TripCardSaveButton/TripCardSaveButton.styles'
import { useSavedTripsStore } from '@/features/trips/store/savedTripsStore'
import type { TripDefinition } from '@/features/trips/types/trip.types'
import { Button } from '@/components/ui/button'
import { cn } from '@/shared/utils/cn'

type TripCardSaveButtonProps = {
  trip: TripDefinition
  className?: string
}

export default function TripCardSaveButton({ trip, className }: TripCardSaveButtonProps) {
  const { t } = useTranslation()
  const user = useAuthStore((authStore) => authStore.user)
  const toggleTripForUser = useSavedTripsStore((savedTripsStore) => savedTripsStore.toggleTripForUser)
  const userId = user?.uid ?? ''
  const isSaved = useSavedTripsStore((savedTripsStore) => {
    if (!userId) {
      return false
    }

    return (savedTripsStore.savedIdsByUserId[userId] ?? []).includes(trip.id)
  })

  function handleClick() {
    if (!user) {
      toast.info(t('trips.save.loginRequired'))

      return
    }

    toggleTripForUser(user.uid, trip.id)
  }

  let title = t('trips.save.loginTooltip')

  if (user) {
    title = isSaved ? t('trips.save.remove') : t('trips.save.add')
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn(tripCardSaveButtonVariants(), className)}
      aria-pressed={Boolean(user && isSaved)}
      title={title}
      aria-label={title}
      onClick={handleClick}
    >
      <Heart className={cn('h-4 w-4', isSaved && 'fill-current')} aria-hidden />
    </Button>
  )
}
