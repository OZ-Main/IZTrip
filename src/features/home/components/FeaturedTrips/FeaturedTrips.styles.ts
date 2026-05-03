import { cva } from 'class-variance-authority'

export const featuredTripsGridVariants = cva(
  'grid grid-cols-1 gap-relaxed sm:grid-cols-2 xl:grid-cols-3',
)

export const featuredTripsHomeLayoutVariants = cva(
  'flex snap-x snap-mandatory gap-relaxed overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:pb-0 xl:grid-cols-3 [&::-webkit-scrollbar]:hidden',
)

export const featuredTripsHomeItemVariants = cva(
  'min-w-[min(22rem,calc(100vw-2.5rem))] shrink-0 snap-center sm:min-w-0',
)
