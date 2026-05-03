import { cva } from 'class-variance-authority'

export const bookingTrustPanelRootVariants = cva(
  'rounded-[1.1rem] border border-primary/20 bg-gradient-to-br from-primary/8 via-card to-card p-card shadow-card sm:p-form',
)

export const bookingTrustPanelTitleVariants = cva(
  'font-display text-heading-sm font-semibold leading-snug text-foreground',
)

export const bookingTrustPanelListVariants = cva('mt-relaxed space-y-tight')

export const bookingTrustPanelItemVariants = cva('flex gap-tight text-body-sm leading-relaxed text-muted-foreground')

export const bookingTrustPanelDotVariants = cva(
  'mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary shadow-sm',
)
