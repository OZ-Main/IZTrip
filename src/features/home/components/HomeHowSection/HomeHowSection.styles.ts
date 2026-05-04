import { cva } from 'class-variance-authority'

export const homeHowSectionGridVariants = cva(
  'relative grid gap-stack md:grid-cols-3 md:gap-form lg:gap-relaxed',
)

export const homeHowSectionConnectorVariants = cva(
  'pointer-events-none absolute left-[8%] right-[8%] top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent md:block',
)

export const homeHowStepCardVariants = cva(
  'relative flex h-full flex-col gap-1 rounded-xl border border-border/80 bg-card p-3 shadow-card sm:gap-tight sm:rounded-card sm:p-card',
)

export const homeHowStepBadgeVariants = cva(
  'inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-caption font-bold text-primary-foreground shadow-sm sm:h-10 sm:w-10 sm:text-label',
)

export const homeHowStepIconWrapVariants = cva(
  'inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-muted/50 text-primary sm:h-10 sm:w-10',
)
