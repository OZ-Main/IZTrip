import { cva } from 'class-variance-authority'

export const tripFiltersRootVariants = cva('flex flex-col gap-form-field')

export const tripFiltersGroupVariants = cva('space-y-tight')

export const tripFiltersLabelVariants = cva('text-label text-muted-foreground')

export const tripFiltersChipRowVariants = cva('flex flex-wrap gap-tight')

export const tripFiltersChipVariants = cva(
  'inline-flex min-h-11 items-center justify-center rounded-full border px-4 py-2 text-body-sm font-semibold transition-[background-color,color,box-shadow,border-color] duration-motion-fast ease-motion-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
  {
    variants: {
      state: {
        active: 'border-primary bg-primary text-primary-foreground shadow-sm',
        idle: 'border-border/80 bg-card text-muted-foreground hover:border-primary/35 hover:text-foreground',
      },
    },
    defaultVariants: {
      state: 'idle',
    },
  },
)
