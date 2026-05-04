import { cva } from 'class-variance-authority'

export const tripDetailsSectionRootVariants = cva(
  'overflow-hidden rounded-[1.1rem] border border-border/80 bg-card/95 shadow-card ring-1 ring-black/[0.03] dark:ring-white/[0.04]',
)

export const tripDetailsSectionInnerVariants = cva('p-tight sm:p-card md:p-form')

export const tripDetailsSectionHeaderVariants = cva('flex items-center gap-tight sm:gap-form-field')

export const tripDetailsSectionIconWrapVariants = cva(
  'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:h-11 sm:w-11',
)

export const tripDetailsSectionTitleVariants = cva(
  'min-w-0 flex-1 font-display text-heading-sm font-semibold leading-snug text-foreground sm:text-heading-md',
)

export const tripDetailsSectionBodyVariants = cva('mt-form-field min-w-0 sm:mt-relaxed')
