import { cva } from 'class-variance-authority'

export const tripDetailsLayoutRootVariants = cva(
  'overflow-visible lg:grid lg:min-h-0 lg:grid-cols-[minmax(0,1fr)_min(22rem,30%)] lg:items-stretch lg:gap-x-relaxed',
)

export const tripDetailsLayoutMainVariants = cva(
  'flex min-w-0 flex-col gap-tight pb-[calc(5rem+env(safe-area-inset-bottom))] sm:gap-relaxed lg:pb-0',
)

export const tripDetailsLayoutMobileDockVariants = cva(
  'pointer-events-none fixed inset-x-0 bottom-0 z-40 lg:hidden',
)

export const tripDetailsLayoutMobileDockInnerVariants = cva(
  'pointer-events-auto mx-auto flex max-w-content justify-center px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2',
)

export const tripDetailsLayoutAsideVariants = cva('hidden min-w-0 lg:block lg:h-full lg:min-h-0 lg:self-stretch')

export const tripDetailsLayoutAsideStickyVariants = cva('lg:sticky lg:top-28 lg:z-30 lg:w-full')
