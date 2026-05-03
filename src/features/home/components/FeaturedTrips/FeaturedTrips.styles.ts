import { cva } from 'class-variance-authority'

export const featuredTripsGridVariants = cva(
  'grid grid-cols-1 gap-relaxed sm:grid-cols-2 xl:grid-cols-3',
)
