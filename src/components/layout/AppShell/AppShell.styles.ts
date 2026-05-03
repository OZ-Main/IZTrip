import { cva } from 'class-variance-authority'

export const appShellRootVariants = cva(
  'flex min-h-screen min-w-0 flex-col overflow-x-hidden bg-background',
)

export const appShellMainVariants = cva('min-w-0 flex-1 px-page-padding-x pb-section pt-page-y')

export const appShellMainInnerVariants = cva('container max-w-page min-w-0')
