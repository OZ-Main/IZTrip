import { cva } from 'class-variance-authority'

export const tripItineraryTimelineRootVariants = cva('flex flex-col gap-relaxed')

export const tripItineraryTimelineRowVariants = cva('flex gap-tight')

export const tripItineraryTimelineRailVariants = cva(
  'relative flex w-10 shrink-0 flex-col items-center self-stretch',
)

export const tripItineraryTimelineConnectorVariants = cva(
  'pointer-events-none absolute bottom-[calc(-1*(var(--gap-relaxed)+0.875rem))] left-1/2 top-[0.875rem] z-0 w-px -translate-x-1/2 bg-gradient-to-b from-primary/45 via-primary/25 to-primary/10',
)

export const tripItineraryTimelineDotVariants = cva(
  'relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/45 bg-card text-caption font-bold text-primary shadow-sm',
)

export const tripItineraryTimelineCardVariants = cva(
  'min-w-0 flex-1 space-y-tight rounded-[1rem] border border-border/70 bg-gradient-to-br from-card to-muted/20 p-card shadow-sm',
)
