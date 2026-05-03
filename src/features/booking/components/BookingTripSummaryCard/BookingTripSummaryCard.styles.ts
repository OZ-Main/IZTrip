import { cva } from 'class-variance-authority'

export const bookingTripSummaryRootVariants = cva(
  'overflow-hidden rounded-[1.1rem] border border-border/80 bg-card shadow-card ring-1 ring-black/[0.03] dark:ring-white/[0.04]',
)

export const bookingTripSummaryMediaVariants = cva(
  'aspect-[16/10] w-full object-cover sm:aspect-[2/1]',
)

export const bookingTripSummaryBodyVariants = cva('space-y-relaxed p-card sm:p-form')

export const bookingTripSummaryEyebrowVariants = cva(
  'text-caption font-semibold uppercase tracking-wide text-primary',
)

export const bookingTripSummaryTitleVariants = cva(
  'font-display text-heading-lg font-semibold leading-snug text-foreground',
)

export const bookingTripSummaryMetaVariants = cva(
  'grid gap-tight rounded-card border border-border/70 bg-muted/20 p-card sm:grid-cols-2',
)

export const bookingTripSummaryMetaCellVariants = cva('min-w-0')

export const bookingTripSummaryMetaLabelVariants = cva(
  'text-caption font-semibold uppercase tracking-wide text-muted-foreground',
)

export const bookingTripSummaryMetaValueVariants = cva('mt-0.5 text-body-sm font-semibold text-foreground')
