import { cva } from 'class-variance-authority'

export const languageSwitcherRootVariants = cva(
  'relative inline-block rounded-full border border-border/70 bg-card/90 p-0.5 shadow-sm backdrop-blur-sm max-md:p-[1px] max-md:shadow-none',
)

export const languageSwitcherTrackVariants = cva(
  'relative z-[1] grid min-h-7 min-w-[6.5rem] grid-cols-3 gap-0 sm:min-h-8 sm:min-w-[8.75rem] sm:gap-0.5 md:min-w-[9.25rem]',
)

export const languageSwitcherButtonVariants = cva(
  'flex w-full min-w-0 items-center justify-center rounded-full bg-transparent px-0.5 py-1 text-[0.65rem] font-semibold leading-none transition-colors duration-motion-fast ease-motion-out sm:px-1 sm:py-1 sm:text-caption md:px-1',
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
