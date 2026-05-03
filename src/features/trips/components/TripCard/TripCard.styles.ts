import { cva } from 'class-variance-authority'

export const tripCardRootVariants = cva(
  'group flex h-full w-full max-w-full flex-col overflow-hidden rounded-card border border-border/80 bg-card text-card-foreground shadow-card transition-[transform,box-shadow] duration-motion-normal ease-motion-out',
)

export const tripCardInteractiveVariants = cva(
  'cursor-pointer motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
)

export const tripCardImageWrapVariants = cva('relative aspect-[16/10] w-full max-w-full overflow-hidden')

export const tripCardImageVariants = cva(
  'h-full w-full object-cover transition-transform duration-motion-slow ease-motion-out motion-safe:group-hover:scale-[1.03]',
)

export const tripCardBodyVariants = cva('flex flex-1 flex-col gap-form-field p-card sm:gap-tight')

export const tripCardMetaRowVariants = cva(
  'flex flex-col gap-0.5 text-caption text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-tight',
)

export const tripCardTitleVariants = cva('font-display text-heading-sm font-semibold text-foreground')

export const tripCardDescriptionVariants = cva(
  'line-clamp-2 text-body-sm text-muted-foreground md:line-clamp-3',
)

export const tripCardFooterVariants = cva(
  'mt-auto flex flex-col gap-stack border-t border-border/60 pt-card sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-tight',
)

export const tripCardPriceVariants = cva('text-heading-sm font-semibold text-primary')
