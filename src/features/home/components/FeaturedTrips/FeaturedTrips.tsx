import { motion, useReducedMotion } from 'framer-motion'

import TripCard from '@/features/trips/components/TripCard/TripCard'
import {
  featuredTripsGridVariants,
  featuredTripsHomeItemVariants,
  featuredTripsHomeLayoutVariants,
} from '@/features/home/components/FeaturedTrips/FeaturedTrips.styles'
import type { TripDefinition } from '@/features/trips/types/trip.types'
import { cn } from '@/shared/utils/cn'

type FeaturedTripsProps = {
  trips: TripDefinition[]
  className?: string
  layout?: 'grid' | 'home'
}

export default function FeaturedTrips({ trips, className, layout = 'grid' }: FeaturedTripsProps) {
  const prefersReducedMotion = useReducedMotion()
  const isHomeLayout = layout === 'home'

  if (prefersReducedMotion || !isHomeLayout) {
    return (
      <div className={cn(featuredTripsGridVariants(), className)}>
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    )
  }

  return (
    <div className={cn(featuredTripsHomeLayoutVariants(), className)}>
      {trips.map((trip, index) => (
        <motion.div
          key={trip.id}
          className={featuredTripsHomeItemVariants()}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <TripCard trip={trip} />
        </motion.div>
      ))}
    </div>
  )
}
