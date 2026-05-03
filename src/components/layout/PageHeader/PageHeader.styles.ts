import { cva } from 'class-variance-authority'

export const pageHeaderRootVariants = cva('min-w-0 space-y-tight')

export const pageHeaderTitleVariants = cva(
  'font-display text-heading-xl font-semibold tracking-tight',
)

export const pageHeaderDescriptionVariants = cva('max-w-2xl text-body-lg text-muted-foreground')
