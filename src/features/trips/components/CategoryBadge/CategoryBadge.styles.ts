import { cva } from 'class-variance-authority'

export const categoryBadgeVariants = cva(
  'inline-flex max-w-[calc(100%-0.25rem)] items-center truncate rounded-full border border-primary/15 bg-primary/8 px-2 py-0.5 text-[0.625rem] font-semibold leading-none text-primary sm:max-w-none sm:px-2.5 sm:text-caption',
)
