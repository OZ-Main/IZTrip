import { cva } from 'class-variance-authority'

export const sectionHeaderRootVariants = cva(
  'flex flex-col gap-stack sm:flex-row sm:items-end sm:justify-between sm:gap-tight',
)

export const sectionHeaderTitleVariants = cva('font-display text-heading-lg font-semibold')

export const sectionHeaderDescriptionVariants = cva('max-w-xl text-body text-muted-foreground')
