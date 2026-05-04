import { cva } from 'class-variance-authority'

export const tripCardRootVariants = cva(
  'group flex h-full w-full max-w-full flex-col overflow-hidden rounded-xl border border-border/80 bg-card text-card-foreground shadow-card transition-[transform,box-shadow] duration-[220ms] ease-motion-out sm:rounded-[1.05rem] [&:visited]:text-card-foreground',
)

export const tripCardInteractiveVariants = cva(
  'cursor-pointer motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
)

export const tripCardImageWrapVariants = cva(
  'relative aspect-[16/9] w-full max-w-full overflow-hidden sm:aspect-[16/10]',
)

export const tripCardImageVariants = cva(
  'h-full w-full object-cover transition-transform duration-[240ms] ease-motion-out motion-safe:group-hover:scale-[1.03]',
)

export const tripCardImageOverlayVariants = cva(
  'pointer-events-none absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent opacity-80',
)

export const tripCardImageTopVariants = cva(
  'absolute left-3 right-11 top-3 flex flex-wrap items-start justify-between gap-1 sm:left-card sm:right-card sm:top-card sm:gap-tight',
)

export const tripCardImageBottomMetaVariants = cva(
  'absolute bottom-3 left-3 right-3 flex w-fit max-w-[min(100%,22rem)] flex-col gap-0.5 rounded-md bg-black/55 px-2 py-1 text-caption font-semibold leading-snug text-white shadow-sm ring-1 ring-white/20 backdrop-blur-sm sm:bottom-card sm:left-card sm:right-card sm:px-2.5 sm:py-1.5',
)

export const tripCardBodyVariants = cva(
  'flex flex-1 flex-col gap-1.5 p-3 sm:gap-form-field sm:gap-tight sm:p-card',
  {
    variants: {
      density: {
        default: '',
        compact: 'gap-1 p-2.5 sm:gap-form-field sm:gap-tight sm:p-card',
      },
    },
    defaultVariants: {
      density: 'default',
    },
  },
)

export const tripCardMetaRowVariants = cva(
  'flex flex-wrap items-center gap-x-tight gap-y-0.5 text-caption font-medium text-muted-foreground',
)

export const tripCardTitleVariants = cva(
  'font-display text-body font-semibold leading-snug text-foreground sm:text-heading-sm',
)

export const tripCardDescriptionVariants = cva(
  'line-clamp-2 text-caption leading-snug text-muted-foreground sm:line-clamp-3',
  {
    variants: {
      density: {
        default: '',
        compact:
          'hidden text-caption leading-snug sm:line-clamp-2 sm:block md:line-clamp-3',
      },
    },
    defaultVariants: {
      density: 'default',
    },
  },
)

export const tripCardTrustRowVariants = cva('hidden flex-wrap gap-tight sm:flex')

export const tripCardFooterVariants = cva(
  'mt-auto flex flex-col gap-1.5 pt-2 sm:gap-tight sm:pt-card',
)

export const tripCardFooterTopVariants = cva(
  'flex flex-row flex-wrap items-start justify-between gap-x-3 gap-y-1 sm:items-end sm:gap-y-2',
)

export const tripCardPriceVariants = cva(
  'text-body font-semibold tabular-nums text-primary sm:text-heading-sm',
)

export const tripCardCtaVariants = cva(
  'relative z-10 inline-flex min-h-10 w-full items-center justify-center rounded-button border border-border/80 bg-muted/40 px-3 py-2 text-caption font-semibold text-foreground shadow-sm transition-[background-color,color,transform,border-color,box-shadow] duration-motion-fast ease-motion-out visited:text-foreground group-hover:border-primary/35 group-hover:bg-muted/60 group-hover:text-foreground sm:min-h-11 sm:justify-start sm:px-4 sm:text-caption',
)
