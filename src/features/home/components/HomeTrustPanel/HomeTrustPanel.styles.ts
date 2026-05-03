import { cva } from 'class-variance-authority'

export const homeTrustPanelRootVariants = cva(
  'relative overflow-hidden rounded-[1.25rem] border border-border/80 bg-gradient-to-br from-card via-card to-muted/50 p-card shadow-card sm:p-form',
)

export const homeTrustPanelGlowVariants = cva(
  'pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-primary/10 blur-3xl',
)

export const homeTrustPanelGridVariants = cva(
  'relative z-10 mt-stack grid gap-relaxed sm:grid-cols-2 lg:grid-cols-4',
)

export const homeTrustPanelCardVariants = cva(
  'flex min-h-full flex-col gap-tight rounded-card border border-border/70 bg-card/90 p-card shadow-sm',
)

export const homeTrustPanelIconVariants = cva(
  'inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary',
)
