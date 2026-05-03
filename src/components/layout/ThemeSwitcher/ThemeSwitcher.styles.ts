import { cva } from 'class-variance-authority'

export const themeSwitcherRootVariants = cva(
  'inline-flex items-center gap-0.5 rounded-full border border-border/70 bg-card/90 p-0.5 shadow-sm backdrop-blur-sm',
)

export const themeSwitcherButtonVariants = cva(
  'min-h-9 rounded-full px-2.5 py-1.5 text-caption font-semibold transition-colors duration-motion-fast ease-motion-out sm:min-h-8 sm:px-2 sm:py-1',
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
