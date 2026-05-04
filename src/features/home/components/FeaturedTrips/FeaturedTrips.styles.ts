import { cva } from 'class-variance-authority'

export const featuredTripsGridVariants = cva(
  'grid min-w-0 grid-cols-1 gap-stack sm:gap-relaxed sm:grid-cols-2 xl:grid-cols-3',
)
