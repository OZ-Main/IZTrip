import { cva } from 'class-variance-authority'

export const tripDetailsHeroShellVariants = cva(
  'relative overflow-hidden rounded-[1.25rem] border border-border/80 shadow-overlay',
)

export const tripDetailsHeroImageVariants = cva(
  'aspect-[4/3] w-full object-cover sm:aspect-[16/9] lg:aspect-[21/9]',
)

export const tripDetailsHeroScrimVariants = cva(
  'pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent',
)

export const tripDetailsHeroContentVariants = cva(
  'absolute inset-x-0 bottom-0 space-y-tight bg-gradient-to-t from-background via-background/95 to-transparent p-card pb-card pt-16 sm:p-form sm:pb-form sm:pt-20',
)

export const tripDetailsHeroTitleVariants = cva(
  'font-display text-balance text-display-lg font-semibold tracking-tight text-foreground sm:text-display-xl',
)

export const tripDetailsHeroLeadVariants = cva('max-w-3xl text-body-lg text-muted-foreground')

export const tripDetailsMetaChipRowVariants = cva('flex flex-wrap gap-tight')

export const tripDetailsMetaChipVariants = cva(
  'inline-flex min-h-11 items-center gap-tight rounded-full border border-border/80 bg-card/90 px-4 py-2 text-body-sm font-medium text-foreground shadow-sm backdrop-blur-sm',
)

export const tripDetailsPageGridVariants = cva(
  'lg:grid lg:grid-cols-[minmax(0,1fr)_min(20rem,30vw)] lg:items-start lg:gap-x-relaxed lg:gap-y-0',
)

export const tripDetailsMainColumnVariants = cva('min-w-0 space-y-section')

export const tripDetailsSidebarVariants = cva(
  'hidden min-w-0 lg:sticky lg:top-24 lg:block lg:self-start',
)

export const tripDetailsBookPanelVariants = cva('min-w-0')

export const tripDetailsSectionShellVariants = cva(
  'rounded-[1.05rem] border border-border/80 bg-card/90 p-card shadow-card sm:p-form',
)

export const tripDetailsSectionGridVariants = cva(
  'grid grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-x-tight gap-y-tight',
)

export const tripDetailsSectionIconVariants = cva(
  'row-start-1 col-start-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary',
)

export const tripDetailsSectionTitleVariants = cva(
  'row-start-1 col-start-2 min-w-0 font-display text-heading-md font-semibold leading-snug text-foreground',
)

export const tripDetailsSectionBodyVariants = cva('col-start-2 min-w-0')

export const tripDetailsListItemVariants = cva(
  `relative pl-5 text-body leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/80 before:content-['']`,
)

export const tripDetailsItineraryListVariants = cva('flex flex-col gap-relaxed')

export const tripDetailsItineraryRowVariants = cva('flex gap-tight')

export const tripDetailsItineraryRailVariants = cva(
  'relative flex w-10 shrink-0 flex-col items-center self-stretch',
)

export const tripDetailsItineraryConnectorVariants = cva(
  'pointer-events-none absolute bottom-[calc(-1*(var(--gap-relaxed)+0.875rem))] left-1/2 top-[0.875rem] z-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 via-primary/25 to-primary/15',
)

export const tripDetailsItineraryDotVariants = cva(
  'relative z-[1] flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-background text-caption font-bold text-primary shadow-sm',
)

export const tripDetailsItineraryContentVariants = cva('min-w-0 flex-1 space-y-tight pb-0.5')

export const tripDetailsDateChipsVariants = cva('flex flex-wrap gap-tight')

export const tripDetailsDateChipVariants = cva(
  'inline-flex min-h-11 items-center rounded-full border border-border/80 bg-muted/40 px-4 py-2 text-body-sm font-medium text-foreground',
)

export const tripDetailsPriceBannerVariants = cva(
  'flex flex-col gap-stack rounded-[1.05rem] border border-primary/25 bg-gradient-to-br from-primary/10 via-card to-card p-card shadow-card',
)

export const tripDetailsPriceValueVariants = cva('text-heading-xl font-semibold text-primary')

export const tripDetailsTrustNoteVariants = cva('text-body-sm text-muted-foreground')
