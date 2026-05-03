import { cva } from 'class-variance-authority'

export const emptyStateRootVariants = cva(
  'flex flex-col items-center justify-center gap-stack rounded-card border border-dashed border-border/80 bg-card/40 px-card py-section text-center',
)

export const emptyStateTitleVariants = cva('font-display text-heading-md font-semibold')

export const emptyStateDescriptionVariants = cva('max-w-md text-body text-muted-foreground')
