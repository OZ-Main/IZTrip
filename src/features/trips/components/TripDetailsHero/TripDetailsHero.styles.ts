import { cva } from 'class-variance-authority'

export const tripDetailsHeroRootVariants = cva(
  'overflow-hidden rounded-[1.25rem] border border-border/80 shadow-overlay',
)

export const tripDetailsHeroMediaVariants = cva(
  'relative isolate min-h-[280px] max-h-[340px] w-full overflow-hidden sm:min-h-[360px] sm:max-h-[420px] lg:min-h-[420px] lg:max-h-[520px]',
)

export const tripDetailsHeroImageVariants = cva('absolute inset-0 h-full w-full object-cover')

export const tripDetailsHeroImageFallbackVariants = cva(
  'absolute inset-0 bg-gradient-to-br from-primary/35 via-primary/20 to-muted/60',
)

export const tripDetailsHeroScrimVariants = cva(
  'pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent',
)

export const tripDetailsHeroTintVariants = cva(
  'pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-accent/10 mix-blend-multiply dark:mix-blend-screen',
)

export const tripDetailsHeroBottomVariants = cva(
  'relative z-10 flex w-full flex-col gap-relaxed px-card pb-card pt-20 sm:px-form sm:pb-form sm:pt-24 lg:flex-row lg:items-end lg:justify-between lg:gap-form',
)

export const tripDetailsHeroCopyVariants = cva('min-w-0 max-w-3xl space-y-tight animate-iz-surface-in')

export const tripDetailsHeroBadgeRowVariants = cva('flex flex-wrap gap-tight')

export const tripDetailsHeroLocationVariants = cva(
  'inline-flex items-center gap-1 text-body font-semibold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.85)]',
)

export const tripDetailsHeroTitleVariants = cva(
  'font-display text-balance text-display-lg font-semibold tracking-tight text-foreground sm:text-display-xl',
)

export const tripDetailsHeroLeadVariants = cva(
  'max-w-full text-pretty text-body-lg font-medium leading-relaxed text-foreground/90 line-clamp-4 min-w-0 sm:max-w-2xl sm:line-clamp-none',
)

export const tripDetailsHeroFactsDesktopVariants = cva(
  'hidden w-full max-w-sm shrink-0 animate-iz-surface-in rounded-[1rem] border border-border/70 bg-card/90 p-card shadow-card backdrop-blur-md lg:block',
)

export const tripDetailsHeroFactsMobileVariants = cva(
  'border-t border-border/70 bg-card/95 px-card py-card lg:hidden',
)

export const tripDetailsHeroFactsGridVariants = cva('grid grid-cols-2 gap-tight')

export const tripDetailsHeroFactItemVariants = cva(
  'rounded-card border border-border/60 bg-muted/25 px-tight py-tight sm:px-card sm:py-tight',
)

export const tripDetailsHeroFactLabelVariants = cva(
  'text-caption font-semibold uppercase tracking-wide text-muted-foreground',
)

export const tripDetailsHeroFactValueVariants = cva(
  'mt-0.5 text-body-sm font-semibold leading-snug text-foreground',
)
