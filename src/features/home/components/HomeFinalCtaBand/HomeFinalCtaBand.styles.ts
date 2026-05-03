import { cva } from 'class-variance-authority'

export const homeFinalCtaBandRootVariants = cva(
  'relative overflow-hidden rounded-[1.25rem] border border-primary/20 bg-gradient-to-br from-secondary via-primary/8 to-primary/15 px-card py-section text-center shadow-card sm:px-form',
)

export const homeFinalCtaBandWashVariants = cva(
  'pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_hsl(38_92%_50%_/_0.12),_transparent_55%)]',
)
