import { cva } from 'class-variance-authority'

export const TRIP_FILTERS_LAYOUT = {
  DEFAULT: 'default',
  DRAWER: 'drawer',
} as const

export type TripFiltersLayout = (typeof TRIP_FILTERS_LAYOUT)[keyof typeof TRIP_FILTERS_LAYOUT]

export const tripFiltersRootVariants = cva('w-full min-w-0')

export const tripFiltersToolbarVariants = cva('', {
  variants: {
    layout: {
      default:
        'flex min-w-0 flex-col divide-y divide-border/60 overflow-hidden rounded-lg bg-muted/25 dark:bg-muted/15 sm:flex-row sm:divide-x sm:divide-y-0',
      drawer:
        'flex min-w-0 flex-col divide-y divide-border/40 overflow-visible rounded-none border-0 bg-transparent shadow-none ring-0 dark:bg-transparent',
    },
  },
  defaultVariants: {
    layout: 'default',
  },
})

export const tripFiltersToolbarSegmentVariants = cva(
  'flex min-w-0 flex-1 flex-col justify-center sm:min-h-[4.25rem] sm:gap-tight sm:px-4 sm:py-3',
  {
    variants: {
      layout: {
        default: 'gap-1 px-2 py-2',
        drawer: 'gap-1 px-4 py-2 sm:px-4',
      },
    },
    defaultVariants: {
      layout: 'default',
    },
  },
)

export const tripFiltersFieldLabelVariants = cva('font-semibold text-muted-foreground', {
  variants: {
    layout: {
      default: 'text-caption sm:text-label',
      drawer: 'text-sm leading-tight',
    },
  },
  defaultVariants: {
    layout: 'default',
  },
})

export const tripFiltersSelectTriggerVariants = cva(
  'w-full border-border/70 bg-gradient-to-b from-card to-card-subtle shadow-none ring-offset-background',
  {
    variants: {
      layout: {
        default:
          'h-9 min-h-9 py-1.5 text-caption sm:h-10 sm:min-h-10 sm:py-2 sm:text-body-sm md:text-body',
        drawer:
          'h-10 min-h-10 rounded-md border-border/80 px-3 py-2 text-sm font-medium leading-snug text-foreground sm:h-10 sm:min-h-10 sm:px-3 sm:py-2 sm:text-sm',
      },
    },
    defaultVariants: {
      layout: 'default',
    },
  },
)

export const tripFiltersGroupVariants = cva('space-y-1 sm:space-y-tight')

export const tripFiltersLabelVariants = cva(
  'text-caption font-semibold text-muted-foreground sm:text-label',
)

export const tripFiltersChipRowVariants = cva('flex flex-wrap gap-tight')

export const tripFiltersChipVariants = cva(
  'inline-flex items-center justify-center rounded-full border font-semibold transition-[background-color,color,box-shadow,border-color,ring-color] duration-[200ms] ease-motion-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  {
    variants: {
      density: {
        default:
          'min-h-8 px-2.5 py-1 text-caption sm:min-h-11 sm:px-4 sm:py-2 sm:text-body-sm',
        drawer: 'min-h-8 max-w-full px-2.5 py-1 text-sm leading-tight sm:min-h-8 sm:px-2.5 sm:py-1 sm:text-sm',
      },
      state: {
        active:
          'border-primary bg-primary text-primary-foreground shadow-sm ring-1 ring-accent/35 ring-offset-1 ring-offset-background sm:ring-2 sm:ring-offset-2',
        idle: 'border-border/80 bg-card text-muted-foreground hover:border-primary/35 hover:text-foreground',
      },
    },
    defaultVariants: {
      density: 'default',
      state: 'idle',
    },
  },
)
