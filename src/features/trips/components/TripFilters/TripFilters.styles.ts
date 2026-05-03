import { cva } from 'class-variance-authority'

export const tripFiltersRootVariants = cva(
  'flex flex-col gap-stack sm:flex-row sm:items-end sm:gap-form-field',
)

export const tripFiltersFieldVariants = cva('flex min-w-0 flex-1 flex-col gap-tight')

export const tripFiltersLabelVariants = cva('text-label text-muted-foreground')
