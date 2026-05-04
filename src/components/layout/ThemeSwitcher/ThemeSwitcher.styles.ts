import { cva } from 'class-variance-authority'

export const themeSwitcherRootVariants = cva(
  'relative inline-flex items-center gap-0.5 rounded-full border border-border/70 bg-card/90 p-0.5 shadow-sm backdrop-blur-sm max-md:p-[1px] max-md:shadow-none',
)

export const themeSwitcherButtonVariants = cva(
  'relative z-[1] inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-transparent p-0 text-caption font-semibold transition-colors duration-motion-fast ease-motion-out max-md:h-6 max-md:w-6 lg:min-h-8 lg:h-auto lg:w-auto lg:min-w-0 lg:px-2.5 lg:py-1',
  {
    variants: {
      state: {
        active: 'text-primary-foreground',
        idle: 'text-muted-foreground hover:text-foreground',
      },
    },
    defaultVariants: {
      state: 'idle',
    },
  },
)
