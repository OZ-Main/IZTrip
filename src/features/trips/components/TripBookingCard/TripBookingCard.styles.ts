import { cva } from 'class-variance-authority'

export const tripBookingCardRootVariants = cva(
  'animate-iz-surface-in rounded-[1.1rem] border border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 p-card shadow-card ring-1 ring-primary/10 sm:p-form',
)

export const tripBookingCardEyebrowVariants = cva(
  'text-caption font-semibold uppercase tracking-wide text-primary',
)

export const tripBookingCardPriceVariants = cva('mt-tight font-display text-heading-xl font-semibold text-primary')

export const tripBookingCardMetaVariants = cva('mt-relaxed space-y-tight rounded-card border border-border/70 bg-muted/25 p-card')

export const tripBookingCardMetaRowVariants = cva('flex items-baseline justify-between gap-tight text-body-sm')

export const tripBookingCardMetaLabelVariants = cva('text-muted-foreground')

export const tripBookingCardMetaValueVariants = cva('text-right font-medium text-foreground')

export const tripBookingCardTrustVariants = cva('mt-stack space-y-tight text-body-sm text-muted-foreground')

export const tripBookingCardTrustHighlightVariants = cva('font-medium text-foreground')
