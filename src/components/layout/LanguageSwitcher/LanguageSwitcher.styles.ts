import { cva } from 'class-variance-authority'

export const languageSwitcherRootVariants = cva('inline-flex items-center gap-tight rounded-full border border-border/80 bg-card/80 p-1 shadow-sm')

export const languageSwitcherButtonVariants = cva(
  'min-h-10 min-w-[2.75rem] rounded-full px-3 py-2 text-caption font-semibold transition-colors duration-motion-fast ease-motion-out sm:min-h-0 sm:min-w-0 sm:px-2.5 sm:py-1',
  {
    variants: {
      state: {
        active: 'bg-primary text-primary-foreground shadow-sm',
        idle: 'text-muted-foreground hover:text-foreground',
      },
    },
    defaultVariants: {
      state: 'idle',
    },
  },
)
