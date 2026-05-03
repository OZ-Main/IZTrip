import { cva } from 'class-variance-authority'

export const languageSwitcherRootVariants = cva(
  'inline-flex items-center gap-0.5 rounded-full border border-border/70 bg-card/90 p-0.5 shadow-sm backdrop-blur-sm',
)

export const languageSwitcherButtonVariants = cva(
  'min-h-9 min-w-[2.5rem] rounded-full px-2.5 py-1.5 text-caption font-semibold transition-colors duration-motion-fast ease-motion-out sm:min-h-8 sm:min-w-[2.25rem] sm:px-2 sm:py-1',
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
