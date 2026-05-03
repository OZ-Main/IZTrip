import { cva } from 'class-variance-authority'

export const homeTrustPanelRootVariants = cva(
  'relative overflow-hidden rounded-[1.25rem] border border-border/80 bg-gradient-to-br from-card via-card to-muted/50 p-card shadow-card sm:p-form',
)

export const homeTrustPanelGlowVariants = cva(
  'pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl',
)

export const homeTrustPanelInnerVariants = cva('relative z-10 space-y-relaxed')

export const homeTrustPanelGridVariants = cva(
  'grid min-w-0 grid-cols-1 gap-x-relaxed gap-y-relaxed sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch',
)

export const homeTrustPanelItemVariants = cva(
  'flex h-full min-w-0 flex-col gap-tight border-l-2 border-primary/35 bg-transparent py-1 pl-relaxed sm:min-h-[9.5rem] sm:pl-form',
)

export const homeTrustPanelIconVariants = cva(
  'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary',
)
