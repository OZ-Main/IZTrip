import { cva } from 'class-variance-authority'

export const trustPillVariants = cva(
  'inline-flex max-w-full items-center rounded-full border border-primary/20 bg-primary/6 px-2 py-0.5 text-[0.625rem] font-semibold leading-tight text-primary shadow-sm backdrop-blur-sm transition-[border-color,background-color,transform] duration-200 ease-motion-out motion-safe:hover:border-primary/35 motion-safe:hover:bg-primary/10 sm:px-2.5 sm:py-1 sm:text-caption',
)
