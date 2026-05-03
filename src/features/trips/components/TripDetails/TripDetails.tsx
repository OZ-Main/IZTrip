import TripDetailsContent from '@/features/trips/components/TripDetailsContent/TripDetailsContent'
import TripDetailsHero from '@/features/trips/components/TripDetailsHero/TripDetailsHero'
import TripDetailsLayout from '@/features/trips/components/TripDetailsLayout/TripDetailsLayout'
import type { TripDefinition } from '@/features/trips/types/trip.types'
import { APP_ROUTE } from '@/shared/constants/routes.constants'

type TripDetailsProps = {
  trip: TripDefinition
}

export default function TripDetails({ trip }: TripDetailsProps) {
  const bookingPath = APP_ROUTE.booking(trip.slug)

  return (
    <article className="w-full space-y-relaxed sm:space-y-section">
      <TripDetailsHero trip={trip} />
      <TripDetailsLayout trip={trip} bookingPath={bookingPath}>
        <TripDetailsContent trip={trip} />
      </TripDetailsLayout>
    </article>
  )
}
