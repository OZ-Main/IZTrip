import { cva } from 'class-variance-authority'

export const homeFinalCtaBandRootVariants = cva(
  'relative isolate rounded-xl border border-primary/20 bg-gradient-to-br from-secondary via-primary/8 to-primary/15 px-card py-stack text-center shadow-card ring-1 ring-inset ring-black/5 dark:ring-white/10 sm:rounded-[1.25rem] sm:py-section sm:px-form',
)

export const homeFinalCtaBandWashVariants = cva(
  'pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(38_92%_50%_/_0.12),_transparent_55%)]',
)
