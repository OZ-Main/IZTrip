import { cva } from 'class-variance-authority'

export const tripDetailsLayoutRootVariants = cva(
  'lg:grid lg:grid-cols-[minmax(0,1fr)_min(22rem,30%)] lg:items-start lg:gap-x-relaxed',
)

export const tripDetailsLayoutMainVariants = cva('min-w-0 space-y-relaxed sm:space-y-section')

export const tripDetailsLayoutMobileBookingVariants = cva('lg:hidden')

export const tripDetailsLayoutAsideVariants = cva(
  'hidden min-w-0 lg:sticky lg:top-28 lg:block lg:self-start',
)
