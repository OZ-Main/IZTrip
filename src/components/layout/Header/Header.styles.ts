import { cva } from 'class-variance-authority'

export const headerRootVariants = cva(
  'sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md',
)

export const headerInnerVariants = cva(
  'container flex min-h-[3.5rem] flex-nowrap items-center justify-between gap-x-tight gap-y-tight overflow-x-auto py-3 [scrollbar-width:none] sm:min-h-[4rem] sm:gap-stack [&::-webkit-scrollbar]:hidden',
)

export const headerBrandVariants = cva(
  'min-w-0 truncate font-display text-heading-sm font-semibold tracking-tight text-primary sm:text-heading-md',
)

export const headerNavVariants = cva('items-center')

export const headerNavLinkVariants = cva(
  'text-body font-medium text-muted-foreground transition-colors duration-motion-fast ease-motion-out hover:text-foreground',
)

export const headerActionsVariants = cva(
  'flex shrink-0 flex-wrap items-center justify-end gap-1 sm:gap-tight md:gap-stack',
)

export const headerMobileNavVariants = cva(
  'flex flex-wrap items-center justify-end gap-tight md:hidden',
)
