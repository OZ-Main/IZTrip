import { cva } from 'class-variance-authority'

export const tripCardSaveButtonVariants = cva(
  'h-10 w-10 shrink-0 rounded-full border border-white/40 bg-black/45 text-white shadow-md ring-1 ring-black/25 backdrop-blur-md hover:bg-black/55 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:border-white/35 dark:bg-black/50 dark:hover:bg-black/60',
)
