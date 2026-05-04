import { cva } from 'class-variance-authority'

export const homeHeroRootVariants = cva(
  'relative isolate rounded-xl border border-primary/15 bg-gradient-to-br from-hero via-primary to-[hsl(158_48%_14%)] px-card py-6 text-hero-foreground shadow-overlay ring-1 ring-inset ring-black/10 dark:ring-white/10 sm:rounded-[1.25rem] sm:px-form sm:py-[2.75rem] lg:py-section',
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
  'relative z-10 mx-auto grid max-w-content gap-stack sm:gap-relaxed lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center',
)

export const homeHeroTrustListVariants = cva(
  'flex w-full min-w-0 flex-row flex-nowrap items-stretch gap-1 text-caption text-hero-foreground/85 sm:flex-wrap sm:items-center sm:gap-x-relaxed sm:text-body-sm',
)

export const homeHeroTrustItemVariants = cva(
  'flex min-w-0 flex-1 basis-0 items-center justify-center gap-0.5 overflow-hidden rounded-full border border-hero-foreground/15 bg-hero-foreground/10 px-1.5 py-1.5 text-center backdrop-blur-sm sm:inline-flex sm:w-auto sm:flex-none sm:basis-auto sm:justify-start sm:gap-tight sm:overflow-visible sm:px-3 sm:py-2 sm:text-left',
)

export const homeHeroPreviewVariants = cva(
  'relative mt-0 rounded-xl border border-hero-foreground/15 bg-hero-foreground/10 p-3 shadow-none backdrop-blur-md sm:rounded-card sm:p-card lg:mt-0',
)

export const homeHeroPreviewImageVariants = cva(
  'block aspect-[4/3] w-full overflow-hidden rounded-[0.75rem] object-cover sm:aspect-[16/10]',
)

export const homeHeroPreviewImageFigureVariants = cva(
  'relative overflow-hidden rounded-[0.75rem]',
)

export const homeHeroPreviewImageMobileCaptionVariants = cva(
  'pointer-events-none absolute inset-x-0 bottom-0 z-[1] bg-gradient-to-t from-black/78 via-black/40 to-transparent px-3 pb-3 pt-12 text-left sm:hidden',
)

export const homeHeroPreviewImageMobileCaptionEyebrowVariants = cva(
  'text-caption font-semibold uppercase tracking-[0.14em] text-white/85',
)

export const homeHeroPreviewImageMobileCaptionTitleVariants = cva(
  'mt-tight line-clamp-2 text-body-sm font-semibold leading-snug text-white',
)

export const homeHeroPreviewImageMobileCaptionMetaVariants = cva(
  'mt-tight text-caption text-white/80',
)

export const homeHeroPreviewStackVariants = cva(
  'absolute -left-3 top-4 z-20 hidden max-w-[11rem] rounded-card border border-border/70 bg-card/95 p-tight text-card-foreground shadow-card backdrop-blur-md sm:block lg:-left-6 lg:top-8',
)

export const homeHeroPreviewImageLinkVariants = cva(
  'relative z-0 block min-h-[44px] rounded-[0.75rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
)

export const homeHeroBadgeRowVariants = cva(
  'relative z-10 mt-tight hidden flex-wrap gap-tight sm:mt-stack sm:flex',
)

export const homeHeroBadgeVariants = cva(
  'rounded-full border border-hero-foreground/15 bg-hero-foreground/10 px-2.5 py-1 text-caption font-semibold text-hero-foreground sm:px-3',
)
