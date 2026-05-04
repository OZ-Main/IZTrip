import { cva } from 'class-variance-authority'

export const sectionHeaderRootVariants = cva(
  'flex min-w-0 flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-tight',
)

export const sectionHeaderTitleVariants = cva(
  'font-display text-heading-sm font-semibold text-foreground sm:text-heading-md lg:text-heading-lg',
)

export const sectionHeaderDescriptionVariants = cva(
  'max-w-xl text-caption leading-relaxed text-muted-foreground line-clamp-3 sm:line-clamp-none sm:text-body-sm lg:text-body',
)
