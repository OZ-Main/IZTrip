import { cva } from 'class-variance-authority'

export const audienceBadgeVariants = cva(
  'inline-flex max-w-[calc(100%-0.25rem)] items-center truncate rounded-full border border-accent/35 bg-accent/15 px-2 py-0.5 text-[0.625rem] font-semibold leading-none text-accent dark:border-accent/45 dark:bg-accent/20 dark:text-accent sm:max-w-none sm:px-2.5 sm:text-caption',
)
