import { cva } from 'class-variance-authority'

export const sheetOverlayVariants = cva(
  'fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
)

export const sheetContentVariants = cva(
  'fixed z-50 flex flex-col gap-stack border border-border bg-background p-dialog shadow-overlay transition ease-motion-emphasized data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-motion-normal data-[state=open]:duration-motion-normal',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 max-h-[85vh] rounded-b-dialog border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom:
          'inset-x-0 bottom-0 max-h-[90vh] rounded-t-dialog border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-[min(100%,20rem)] border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
        right:
          'inset-y-0 right-0 h-full w-[min(100%,22rem)] border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  },
)

export const sheetHeaderVariants = cva('flex flex-col gap-tight text-left')

export const sheetTitleVariants = cva('font-display text-heading-lg font-semibold text-foreground')

export const sheetDescriptionVariants = cva('text-body-sm text-muted-foreground')
