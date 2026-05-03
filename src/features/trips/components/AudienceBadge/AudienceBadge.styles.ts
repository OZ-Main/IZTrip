import { cva } from 'class-variance-authority'

export const audienceBadgeVariants = cva(
  'inline-flex items-center rounded-full border border-accent/30 bg-accent/12 px-2.5 py-0.5 text-caption font-semibold text-accent-foreground',
)
