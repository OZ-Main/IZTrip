import { cva } from 'class-variance-authority'

export const categoryBadgeVariants = cva(
  'inline-flex items-center rounded-full border border-primary/15 bg-primary/8 px-2.5 py-0.5 text-caption font-semibold text-primary',
)
