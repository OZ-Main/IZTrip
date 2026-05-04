import { cva } from 'class-variance-authority'

export const tripDetailsProsePanelVariants = cva(
  'rounded-[1rem] border border-border/60 bg-muted/15 p-tight text-body leading-relaxed text-muted-foreground sm:p-card sm:text-body-lg sm:leading-relaxed md:p-form',
)

export const tripDetailsFeatureListVariants = cva('flex flex-col gap-tight')

export const tripDetailsFeatureRowVariants = cva(
  'flex gap-tight rounded-[1rem] border border-border/60 bg-gradient-to-r from-muted/20 to-card px-tight py-tight sm:px-card sm:py-tight md:px-form md:py-card',
)

export const tripDetailsFeatureIconVariants = cva(
  'mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary sm:h-9 sm:w-9',
)

export const tripDetailsFeatureTextVariants = cva(
  'min-w-0 text-caption leading-snug text-foreground sm:text-body sm:leading-relaxed',
)
