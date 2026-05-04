import { cva } from 'class-variance-authority'

export const segmentedToggleThumbVariants = cva(
  'pointer-events-none absolute inset-y-0.5 left-0 z-0 rounded-full bg-primary shadow-sm transition-[transform,width] duration-motion-normal ease-motion-out motion-reduce:transition-none motion-reduce:duration-0',
)
