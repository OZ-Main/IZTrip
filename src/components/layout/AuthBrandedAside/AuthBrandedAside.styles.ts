import { cva } from 'class-variance-authority'

export const authBrandedAsideRootVariants = cva(
  'relative hidden h-full min-h-[28rem] overflow-hidden rounded-[1.25rem] border border-primary/20 bg-gradient-to-br from-hero via-primary to-[hsl(158_48%_14%)] p-form text-hero-foreground shadow-overlay lg:flex lg:flex-col lg:justify-between',
)

export const authBrandedAsideGlowVariants = cva(
  'pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-accent/30 blur-3xl',
)

export const authBrandedAsideListVariants = cva(
  'mt-relaxed space-y-tight text-body-sm text-hero-foreground/90',
)

export const authBrandedAsideListItemVariants = cva('flex gap-tight')
export const authBrandedAsideBulletVariants = cva(
  'mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent',
)
