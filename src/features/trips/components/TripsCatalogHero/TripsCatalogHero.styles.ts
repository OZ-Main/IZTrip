import { cva } from 'class-variance-authority'

export const tripsCatalogHeroRootVariants = cva(
  'relative isolate rounded-xl border border-border/80 bg-gradient-to-br from-card via-card to-muted/35 px-3 pb-3 pt-2 shadow-card ring-1 ring-inset ring-black/5 dark:ring-white/10 sm:rounded-[1.25rem] sm:p-card md:p-form',
)

export const tripsCatalogHeroGlowVariants = cva(
  'pointer-events-none absolute -right-10 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl',
)

export const tripsCatalogHeroStatVariants = cva(
  'flex min-h-[40px] flex-1 flex-col gap-0.5 rounded-lg border border-border/80 bg-card px-3 py-2 text-card-foreground shadow-sm backdrop-blur-sm sm:min-h-[3.25rem] sm:rounded-card sm:px-card sm:py-stack',
)

export const tripsCatalogHeroStatLabelVariants = cva(
  'text-[0.625rem] font-semibold uppercase leading-tight tracking-wide text-muted-foreground/95 sm:text-caption',
)

export const tripsCatalogHeroStatValueVariants = cva(
  'font-display text-body-sm font-semibold leading-snug text-foreground sm:text-heading-sm',
)
