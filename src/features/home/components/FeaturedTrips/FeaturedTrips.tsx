import TripCard from '@/features/trips/components/TripCard/TripCard'
import { featuredTripsGridVariants } from '@/features/home/components/FeaturedTrips/FeaturedTrips.styles'
import type { TripDefinition } from '@/features/trips/types/trip.types'
import { cn } from '@/shared/utils/cn'

type FeaturedTripsProps = {
  trips: TripDefinition[]
  className?: string
}

export default function FeaturedTrips({ trips, className }: FeaturedTripsProps) {
  return (
    <div className={cn(featuredTripsGridVariants(), className)}>
      {trips.map((trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </div>
  )
}
