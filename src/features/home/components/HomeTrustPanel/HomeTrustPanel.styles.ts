import { cva } from 'class-variance-authority'

export const homeTrustPanelRootVariants = cva(
  'relative isolate rounded-xl border border-border/80 bg-gradient-to-br from-card via-card to-muted/50 p-3 shadow-card ring-1 ring-inset ring-black/5 dark:ring-white/10 sm:rounded-[1.25rem] sm:p-card md:p-form',
)

export const homeTrustPanelGlowVariants = cva(
  'pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl',
)

export const homeTrustPanelInnerVariants = cva(
  'relative z-10 space-y-stack sm:space-y-relaxed',
)

export const homeTrustPanelGridVariants = cva(
  'grid min-w-0 grid-cols-1 gap-x-stack gap-y-stack sm:grid-cols-2 sm:gap-x-relaxed sm:gap-y-relaxed lg:grid-cols-4 lg:items-stretch',
)

export const homeTrustPanelItemVariants = cva(
  'flex h-full min-w-0 flex-col gap-1 border-l-2 border-primary/35 bg-transparent py-0.5 pl-3 sm:min-h-[9.5rem] sm:gap-tight sm:py-1 sm:pl-form',
)

export const homeTrustPanelIconVariants = cva(
  'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:h-10 sm:w-10',
)
