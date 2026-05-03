import { cva } from 'class-variance-authority'

export const bookingTrustPanelRootVariants = cva(
  'rounded-[1rem] border border-primary/15 bg-primary/5 p-card text-body-sm text-muted-foreground',
)

export const bookingTrustPanelTitleVariants = cva(
  'font-display text-heading-sm font-semibold text-foreground',
)

export const bookingTrustPanelListVariants = cva('mt-tight space-y-tight')

export const bookingTrustPanelItemVariants = cva('flex gap-tight')

export const bookingTrustPanelDotVariants = cva(
  'mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary',
)
