import { cva } from 'class-variance-authority'

export const tripDetailsLayoutRootVariants = cva(
  'overflow-visible lg:grid lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_min(22rem,30%)] lg:items-stretch lg:gap-x-relaxed',
)

export const tripDetailsLayoutMainVariants = cva(
  'flex min-w-0 flex-col gap-tight sm:gap-relaxed',
)

export const tripDetailsLayoutMobileBookingVariants = cva(
  'sticky top-[calc(var(--header-height-mobile)+0.5rem)] z-30 self-start sm:top-24 lg:hidden',
)

export const tripDetailsLayoutAsideVariants = cva('hidden min-w-0 lg:block lg:h-full lg:min-h-0 lg:self-stretch')

export const tripDetailsLayoutAsideStickyVariants = cva('lg:sticky lg:top-28 lg:z-30 lg:w-full')
