import { motion, useReducedMotion } from 'framer-motion'

import TripCard from '@/features/trips/components/TripCard/TripCard'
import { featuredTripsGridVariants } from '@/features/home/components/FeaturedTrips/FeaturedTrips.styles'
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
  const gridClassName = cn(
    featuredTripsGridVariants(),
    'min-w-0 max-w-full transition-opacity duration-200 ease-motion-out',
    className,
  )

  if (prefersReducedMotion || !isHomeLayout) {
    return (
      <div className={gridClassName}>
        {trips.map((trip) => (
          <TripCard key={trip.id} trip={trip} density={isHomeLayout ? 'compact' : 'default'} />
        ))}
      </div>
    )
  }

  return (
    <div className={gridClassName}>
      {trips.map((trip, index) => (
        <motion.div
          key={trip.id}
          className="min-w-0"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <TripCard trip={trip} density={isHomeLayout ? 'compact' : 'default'} />
        </motion.div>
      ))}
    </div>
  )
}
