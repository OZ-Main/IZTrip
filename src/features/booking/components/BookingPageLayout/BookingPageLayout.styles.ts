import { cva } from 'class-variance-authority'

export const bookingPageLayoutRootVariants = cva(
  'grid w-full min-w-0 max-w-5xl gap-relaxed lg:grid-cols-[minmax(0,1fr)_min(20rem,32%)] lg:items-start lg:gap-x-relaxed',
)

export const bookingPageLayoutFormColumnVariants = cva('order-2 min-w-0 lg:order-1')

export const bookingPageLayoutAsideColumnVariants = cva(
  'order-1 flex min-w-0 flex-col gap-relaxed lg:order-2 lg:sticky lg:top-28 lg:self-start',
)
