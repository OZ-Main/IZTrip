import { cva } from 'class-variance-authority'

export const homeStyleCategoryCardRootVariants = cva(
  'group relative flex min-h-[44px] flex-col gap-tight overflow-hidden rounded-card border p-card shadow-card transition-[transform,box-shadow,border-color] duration-motion-normal ease-motion-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-card-hover',
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
  'inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-card/80 text-primary shadow-sm',
)

export const homeStyleCategoryCardTitleVariants = cva(
  'font-display text-heading-md font-semibold text-foreground',
)

export const homeStyleCategoryCardBodyVariants = cva('text-body-sm text-muted-foreground')

export const homeStyleCategoryCardArrowVariants = cva(
  'mt-auto text-label font-semibold text-primary transition-transform duration-motion-fast ease-motion-out group-hover:translate-x-0.5',
)
