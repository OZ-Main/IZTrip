import { cva } from 'class-variance-authority'

export const homeStyleCategoryCardRootVariants = cva(
  'group relative flex min-h-[44px] flex-col gap-1.5 overflow-hidden rounded-xl border p-2.5 shadow-card transition-[transform,box-shadow,border-color] duration-motion-normal ease-motion-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-card-hover sm:gap-tight sm:rounded-card sm:p-card',
  {
    variants: {
      tone: {
        kids: 'border-rose-500/20 bg-gradient-to-br from-rose-500/10 via-card to-card',
        family: 'border-sky-500/20 bg-gradient-to-br from-sky-500/10 via-card to-card',
        adults: 'border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-card to-card',
        nature: 'border-emerald-500/25 bg-gradient-to-br from-emerald-500/12 via-card to-card',
        culture: 'border-amber-500/25 bg-gradient-to-br from-amber-500/12 via-card to-card',
        weekend: 'border-primary/25 bg-gradient-to-br from-primary/10 via-card to-card',
        educational: 'border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-card to-card',
        custom: 'border-border/80 bg-card',
      },
    },
    defaultVariants: {
      tone: 'custom',
    },
  },
)

export const homeStyleCategoryCardIconWrapVariants = cva(
  'inline-flex h-8 w-8 items-center justify-center rounded-full border border-border/60 bg-card/80 text-primary shadow-sm sm:h-11 sm:w-11',
)

export const homeStyleCategoryCardTitleVariants = cva(
  'font-display text-heading-sm font-semibold text-foreground sm:text-heading-md',
)

export const homeStyleCategoryCardBodyVariants = cva(
  'hidden text-caption leading-snug text-muted-foreground sm:block sm:text-body-sm',
)

export const homeStyleCategoryCardArrowVariants = cva(
  'mt-auto text-caption font-semibold text-primary transition-transform duration-motion-fast ease-motion-out group-hover:translate-x-0.5 group-hover:text-accent dark:text-accent dark:group-hover:text-accent sm:text-label',
)
