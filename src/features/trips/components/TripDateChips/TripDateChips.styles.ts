import { cva } from 'class-variance-authority'

export const tripDateChipsRootVariants = cva('flex flex-wrap gap-tight')

export const tripDateChipVariants = cva(
  'inline-flex min-h-9 items-center justify-center rounded-full border border-primary/20 bg-gradient-to-br from-card to-muted/30 px-3 py-1.5 text-caption font-semibold text-foreground shadow-sm transition-[transform,box-shadow,border-color,background-color] duration-motion-normal ease-motion-out hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-h-11 sm:px-4 sm:py-2 sm:text-body-sm',
)

export const tripDateChipsMoreVariants = cva(
  'inline-flex min-h-9 items-center rounded-full border border-dashed border-border/80 bg-muted/20 px-3 py-1.5 text-caption font-medium text-muted-foreground sm:min-h-11 sm:px-4 sm:py-2 sm:text-body-sm',
)
