import { cva } from 'class-variance-authority'

export const tripDetailsSectionRootVariants = cva(
  'overflow-hidden rounded-[1.1rem] border border-border/80 bg-card/95 shadow-card ring-1 ring-black/[0.03] dark:ring-white/[0.04]',
)

export const tripDetailsSectionInnerVariants = cva('p-card sm:p-form')

export const tripDetailsSectionHeaderVariants = cva('flex items-start gap-tight')

export const tripDetailsSectionIconWrapVariants = cva(
  'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary',
)

export const tripDetailsSectionTitleVariants = cva(
  'min-w-0 flex-1 pt-0.5 font-display text-heading-md font-semibold leading-snug text-foreground',
)

export const tripDetailsSectionBodyVariants = cva('mt-relaxed min-w-0')
