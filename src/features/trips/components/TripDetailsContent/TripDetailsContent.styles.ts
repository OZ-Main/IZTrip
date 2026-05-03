import { cva } from 'class-variance-authority'

export const tripDetailsProsePanelVariants = cva(
  'rounded-[1rem] border border-border/60 bg-muted/15 p-card text-body-lg leading-relaxed text-muted-foreground sm:p-form',
)

export const tripDetailsFeatureListVariants = cva('flex flex-col gap-tight')

export const tripDetailsFeatureRowVariants = cva(
  'flex gap-tight rounded-[1rem] border border-border/60 bg-gradient-to-r from-muted/20 to-card px-card py-tight sm:px-form sm:py-card',
)

export const tripDetailsFeatureIconVariants = cva(
  'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary',
)

export const tripDetailsFeatureTextVariants = cva('min-w-0 text-body leading-relaxed text-foreground')
