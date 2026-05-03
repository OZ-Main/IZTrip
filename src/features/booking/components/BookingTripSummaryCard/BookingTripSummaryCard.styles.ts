import { cva } from 'class-variance-authority'

export const bookingTripSummaryRootVariants = cva(
  'overflow-hidden rounded-[1.05rem] border border-border/80 bg-card shadow-card',
)

export const bookingTripSummaryMediaVariants = cva(
  'aspect-[16/9] w-full object-cover sm:aspect-[2/1]',
)

export const bookingTripSummaryBodyVariants = cva('space-y-tight p-card')
