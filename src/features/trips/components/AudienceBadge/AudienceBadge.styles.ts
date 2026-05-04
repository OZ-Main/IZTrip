import { cva } from 'class-variance-authority'

export const audienceBadgeVariants = cva(
  'inline-flex items-center rounded-full border border-accent/35 bg-accent/15 px-2.5 py-0.5 text-caption font-semibold text-accent dark:border-accent/45 dark:bg-accent/20 dark:text-accent',
)
