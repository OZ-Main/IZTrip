import { cva } from 'class-variance-authority'

export const tripDetailsHeroVariants = cva(
  'overflow-hidden rounded-card border border-border/80 bg-card shadow-card',
)

export const tripDetailsHeroImageVariants = cva(
  'aspect-[4/3] w-full object-cover sm:aspect-[16/9] lg:aspect-[21/9]',
)

export const tripDetailsPageGridVariants = cva(
  'lg:grid lg:grid-cols-[minmax(0,1fr)_min(18rem,32vw)] lg:items-start lg:gap-x-relaxed lg:gap-y-0',
)

export const tripDetailsMainColumnVariants = cva('min-w-0 space-y-section')

export const tripDetailsSidebarVariants = cva(
  'hidden min-w-0 lg:sticky lg:top-24 lg:block lg:self-start',
)

export const tripDetailsBookPanelVariants = cva('min-w-0')

export const tripDetailsSectionVariants = cva('space-y-tight')

export const tripDetailsSectionTitleVariants = cva('font-display text-heading-md font-semibold')

export const tripDetailsListVariants = cva(
  'list-inside list-disc space-y-relaxed text-body text-muted-foreground sm:space-y-tight',
)

export const tripDetailsItineraryVariants = cva(
  'space-y-relaxed border-l-2 border-primary/25 pl-relaxed sm:space-y-relaxed',
)

export const tripDetailsItineraryDayVariants = cva('space-y-tight')

export const tripDetailsPriceBannerVariants = cva(
  'flex flex-col gap-stack rounded-card border border-primary/20 bg-primary/5 p-card lg:shadow-card',
)

export const tripDetailsPriceValueVariants = cva('text-heading-lg font-semibold text-primary')
