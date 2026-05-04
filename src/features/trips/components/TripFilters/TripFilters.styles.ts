import { cva } from 'class-variance-authority'

export const tripFiltersRootVariants = cva('w-full min-w-0')

export const tripFiltersToolbarVariants = cva(
  'flex min-w-0 flex-col divide-y divide-border/60 overflow-hidden rounded-lg bg-muted/25 sm:flex-row sm:divide-x sm:divide-y-0 dark:bg-muted/15',
)

export const tripFiltersToolbarSegmentVariants = cva(
  'flex min-w-0 flex-1 flex-col justify-center gap-1 px-2 py-2 sm:min-h-[4.25rem] sm:gap-tight sm:px-4 sm:py-3',
)

export const tripFiltersFieldLabelVariants = cva(
  'text-caption font-semibold text-muted-foreground sm:text-label',
)

export const tripFiltersSelectTriggerVariants = cva(
  'h-9 min-h-9 w-full border-border/70 bg-gradient-to-b from-card to-card-subtle py-1.5 text-caption shadow-none sm:h-10 sm:min-h-10 sm:py-2 sm:text-body-sm md:text-body',
)

export const tripFiltersGroupVariants = cva('space-y-1 sm:space-y-tight')

export const tripFiltersLabelVariants = cva(
  'text-caption font-semibold text-muted-foreground sm:text-label',
)

export const tripFiltersChipRowVariants = cva('flex flex-wrap gap-tight')

export const tripFiltersChipVariants = cva(
  'inline-flex min-h-8 items-center justify-center rounded-full border px-2.5 py-1 text-caption font-semibold transition-[background-color,color,box-shadow,border-color,ring-color] duration-[200ms] ease-motion-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-11 sm:px-4 sm:py-2 sm:text-body-sm',
  {
    variants: {
      state: {
        active:
          'border-primary bg-primary text-primary-foreground shadow-sm ring-1 ring-accent/35 ring-offset-1 ring-offset-background sm:ring-2 sm:ring-offset-2',
        idle: 'border-border/80 bg-card text-muted-foreground hover:border-primary/35 hover:text-foreground',
      },
    },
    defaultVariants: {
      state: 'idle',
    },
  },
)
