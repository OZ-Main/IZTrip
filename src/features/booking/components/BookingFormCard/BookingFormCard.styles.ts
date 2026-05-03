import { cva } from 'class-variance-authority'

export const bookingFormCardRootVariants = cva(
  'animate-iz-surface-in rounded-[1.1rem] border border-border/80 bg-card p-card shadow-card ring-1 ring-black/[0.03] dark:ring-white/[0.04] sm:p-form',
)

export const bookingFormCardEyebrowVariants = cva(
  'text-caption font-semibold uppercase tracking-wide text-primary',
)

export const bookingFormCardTitleVariants = cva(
  'mt-tight font-display text-heading-md font-semibold leading-snug text-foreground',
)

export const bookingFormCardLeadVariants = cva('mt-tight text-body-sm text-muted-foreground')
