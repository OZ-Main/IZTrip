import { cva } from 'class-variance-authority'

export const tripCardRootVariants = cva(
  'group flex h-full w-full max-w-full flex-col overflow-hidden rounded-[1.05rem] border border-border/80 bg-card text-card-foreground shadow-card transition-[transform,box-shadow] duration-[220ms] ease-motion-out',
)

export const tripCardInteractiveVariants = cva(
  'cursor-pointer motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
)

export const tripCardImageWrapVariants = cva(
  'relative aspect-[16/10] w-full max-w-full overflow-hidden',
)

export const tripCardImageVariants = cva(
  'h-full w-full object-cover transition-transform duration-[240ms] ease-motion-out motion-safe:group-hover:scale-[1.03]',
)

export const tripCardImageOverlayVariants = cva(
  'pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent opacity-95',
)

export const tripCardImageTopVariants = cva(
  'absolute left-card right-card top-card flex flex-wrap items-start justify-between gap-tight',
)

export const tripCardImageBottomMetaVariants = cva(
  'absolute bottom-card left-card right-card flex w-fit max-w-[min(100%,22rem)] flex-col gap-0.5 rounded-md bg-black/55 px-2.5 py-1.5 text-caption font-semibold text-white shadow-sm ring-1 ring-white/20 backdrop-blur-sm',
)

export const tripCardBodyVariants = cva('flex flex-1 flex-col gap-form-field p-card sm:gap-tight')

export const tripCardMetaRowVariants = cva(
  'flex flex-wrap items-center gap-x-tight gap-y-0.5 text-caption text-muted-foreground',
)

export const tripCardTitleVariants = cva(
  'font-display text-heading-md font-semibold text-foreground',
)

export const tripCardDescriptionVariants = cva(
  'line-clamp-2 text-body-sm text-muted-foreground md:line-clamp-3',
)

export const tripCardTrustRowVariants = cva('flex flex-wrap gap-tight')

export const tripCardFooterVariants = cva('mt-auto flex flex-col gap-tight pt-card')

export const tripCardFooterTopVariants = cva(
  'flex flex-col gap-stack sm:flex-row sm:flex-wrap sm:items-end sm:justify-between sm:gap-tight',
)

export const tripCardPriceVariants = cva('text-heading-md font-semibold text-primary')

export const tripCardCtaVariants = cva(
  'inline-flex min-h-11 w-full items-center justify-center rounded-button border border-accent/35 bg-accent/12 px-4 text-label font-semibold text-accent-foreground shadow-sm transition-[background-color,color,transform,border-color,box-shadow] duration-motion-fast ease-motion-out group-hover:border-accent/50 group-hover:bg-accent/18 group-hover:shadow-sm sm:justify-start',
)
