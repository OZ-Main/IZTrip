import { cva } from 'class-variance-authority'

export const tripFiltersRootVariants = cva('w-full min-w-0')

export const tripFiltersToolbarVariants = cva(
  'flex min-w-0 flex-col divide-y divide-border/60 overflow-hidden rounded-lg bg-muted/25 sm:flex-row sm:divide-x sm:divide-y-0 dark:bg-muted/15',
)

export const tripFiltersToolbarSegmentVariants = cva(
  'flex min-w-0 flex-1 flex-col justify-center gap-tight px-3 py-3 sm:min-h-[4.25rem] sm:px-4 sm:py-3',
)

export const tripFiltersFieldLabelVariants = cva('text-label text-muted-foreground')

export const tripFiltersSelectTriggerVariants = cva(
  'h-10 min-h-10 w-full border-border/70 bg-gradient-to-b from-card to-card-subtle py-2 text-body-sm shadow-none sm:text-body',
)

export const tripFiltersGroupVariants = cva('space-y-tight')

export const tripFiltersLabelVariants = cva('text-label text-muted-foreground')

export const tripFiltersChipRowVariants = cva('flex flex-wrap gap-tight')

export const tripFiltersChipVariants = cva(
  'inline-flex min-h-11 items-center justify-center rounded-full border px-4 py-2 text-body-sm font-semibold transition-[background-color,color,box-shadow,border-color,ring-color] duration-[200ms] ease-motion-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  {
    variants: {
      state: {
        active:
          'border-primary bg-primary text-primary-foreground shadow-sm ring-2 ring-accent/35 ring-offset-2 ring-offset-background',
        idle: 'border-border/80 bg-card text-muted-foreground hover:border-primary/35 hover:text-foreground',
      },
    },
    defaultVariants: {
      state: 'idle',
    },
  },
)
