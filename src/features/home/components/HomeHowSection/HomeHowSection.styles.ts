import { cva } from 'class-variance-authority'

export const homeHowSectionGridVariants = cva(
  'relative grid gap-relaxed md:grid-cols-3 md:gap-form',
)

export const homeHowSectionConnectorVariants = cva(
  'pointer-events-none absolute left-[8%] right-[8%] top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent md:block',
)

export const homeHowStepCardVariants = cva(
  'relative flex h-full flex-col gap-tight rounded-card border border-border/80 bg-card p-card shadow-card',
)

export const homeHowStepBadgeVariants = cva(
  'inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-label font-bold shadow-sm',
)

export const homeHowStepIconWrapVariants = cva(
  'inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-muted/50 text-primary',
)
