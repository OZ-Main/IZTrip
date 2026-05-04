import { cva } from 'class-variance-authority'

export const bookingSuccessViewRootVariants = cva('mx-auto w-full max-w-lg py-section')

export const bookingSuccessViewCardVariants = cva(
  'overflow-hidden rounded-[1.1rem] border text-foreground shadow-card ring-1 ring-black/[0.03] dark:ring-white/[0.04]',
)

export const bookingSuccessViewCardSuccessVariants = cva(
  'border-success/35 bg-gradient-to-br from-success/10 via-card to-card',
)

export const bookingSuccessViewCardWarningVariants = cva(
  'border-amber-500/35 bg-gradient-to-br from-amber-50/95 via-card to-card dark:border-amber-500/30 dark:from-amber-950/30 dark:via-card',
)

export const bookingSuccessViewHeaderVariants = cva('space-y-relaxed p-card sm:p-form')

export const bookingSuccessViewIconRowVariants = cva('flex items-start gap-tight')

export const bookingSuccessViewTitleVariants = cva('font-display text-heading-xl font-semibold leading-snug')

export const bookingSuccessViewTitleSuccessVariants = cva('text-success')

export const bookingSuccessViewTitleWarningVariants = cva('text-amber-950 dark:text-amber-50')

export const bookingSuccessViewDescriptionVariants = cva('text-body text-muted-foreground')

export const bookingSuccessViewTripBannerVariants = cva(
  'rounded-card border border-border/70 bg-muted/25 px-card py-tight text-body-sm text-muted-foreground',
)

export const bookingSuccessViewTripTitleVariants = cva('mt-tight font-display text-heading-sm font-semibold text-foreground')

export const bookingSuccessViewNextVariants = cva(
  'rounded-card border border-border/70 bg-card/90 p-card text-body-sm text-muted-foreground',
)

export const bookingSuccessViewNextTitleVariants = cva('font-display text-heading-sm font-semibold text-foreground')

export const bookingSuccessViewActionsVariants = cva('flex flex-col gap-tight p-card pt-0 sm:flex-row sm:flex-wrap')
