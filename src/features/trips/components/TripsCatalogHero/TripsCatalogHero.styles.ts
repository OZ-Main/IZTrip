import { cva } from 'class-variance-authority'

export const tripsCatalogHeroRootVariants = cva(
  'relative overflow-hidden rounded-[1.25rem] border border-border/80 bg-gradient-to-br from-card via-card to-muted/40 p-card shadow-card sm:p-form',
)

export const tripsCatalogHeroGlowVariants = cva(
  'pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl',
)

export const tripsCatalogHeroStatVariants = cva(
  'flex min-h-[44px] flex-1 flex-col gap-0.5 rounded-card border border-border/70 bg-background/70 px-card py-stack backdrop-blur-sm',
)

export const tripsCatalogHeroStatLabelVariants = cva(
  'text-caption font-semibold uppercase tracking-wide text-muted-foreground',
)

export const tripsCatalogHeroStatValueVariants = cva(
  'font-display text-heading-sm font-semibold leading-snug text-foreground',
)
