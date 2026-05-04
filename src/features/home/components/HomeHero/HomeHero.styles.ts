import { cva } from 'class-variance-authority'

export const homeHeroRootVariants = cva(
  'relative overflow-hidden rounded-[1.25rem] border border-primary/15 bg-gradient-to-br from-hero via-primary to-[hsl(158_48%_14%)] px-card py-section text-hero-foreground shadow-overlay sm:px-form sm:py-[2.75rem]',
)

export const homeHeroGlowVariants = cva(
  'pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-accent/30 blur-3xl',
)

export const homeHeroGlowSecondaryVariants = cva(
  'pointer-events-none absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-hero-foreground/10 blur-3xl',
)

export const homeHeroMeshVariants = cva(
  'pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,_hsl(0_0%_100%_/_0.14),_transparent_50%),radial-gradient(circle_at_90%_30%,_hsl(38_92%_50%_/_0.12),_transparent_45%)]',
)

export const homeHeroGridVariants = cva(
  'relative z-10 mx-auto grid max-w-content gap-relaxed lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center',
)

export const homeHeroTrustListVariants = cva(
  'mt-relaxed flex flex-col gap-tight text-body-sm text-hero-foreground/85 sm:flex-row sm:flex-wrap sm:gap-x-relaxed',
)

export const homeHeroTrustItemVariants = cva(
  'inline-flex items-center gap-tight rounded-full border border-hero-foreground/15 bg-hero-foreground/10 px-3 py-2 backdrop-blur-sm',
)

export const homeHeroPreviewVariants = cva(
  'relative mt-relaxed rounded-card border border-hero-foreground/15 bg-hero-foreground/10 p-card shadow-none backdrop-blur-md lg:mt-0',
)

export const homeHeroPreviewImageVariants = cva(
  'block aspect-[4/3] w-full overflow-hidden rounded-[0.75rem] object-cover sm:aspect-[16/10]',
)

export const homeHeroPreviewStackVariants = cva(
  'absolute -left-3 top-4 z-20 hidden max-w-[11rem] rounded-card border border-border/70 bg-card/95 p-tight text-card-foreground shadow-card backdrop-blur-md sm:block lg:-left-6 lg:top-8',
)

export const homeHeroPreviewImageLinkVariants = cva(
  'relative z-0 block min-h-[44px] overflow-hidden rounded-[0.75rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
)

export const homeHeroBadgeRowVariants = cva(
  'relative z-10 mt-tight flex flex-wrap gap-tight sm:mt-stack',
)

export const homeHeroBadgeVariants = cva(
  'rounded-full border border-hero-foreground/15 bg-hero-foreground/10 px-3 py-1 text-caption font-semibold text-hero-foreground',
)
