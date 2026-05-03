import { cva } from 'class-variance-authority'

export const tripDetailsLayoutRootVariants = cva(
  'overflow-visible lg:grid lg:grid-cols-[minmax(0,1fr)_min(22rem,30%)] lg:items-start lg:gap-x-relaxed',
)

export const tripDetailsLayoutMainVariants = cva(
  'flex min-w-0 flex-col gap-tight sm:gap-relaxed',
)

export const tripDetailsLayoutMobileBookingVariants = cva('lg:hidden')

export const tripDetailsLayoutAsideVariants = cva(
  'hidden min-w-0 lg:sticky lg:top-28 lg:z-30 lg:block lg:self-start',
)
