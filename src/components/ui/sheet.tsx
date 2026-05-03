import { forwardRef } from 'react'
import type { ComponentPropsWithoutRef, ElementRef, HTMLAttributes } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  sheetContentVariants,
  sheetDescriptionVariants,
  sheetHeaderVariants,
  sheetOverlayVariants,
  sheetTitleVariants,
} from '@/components/ui/sheet.styles'
import { cn } from '@/shared/utils/cn'

const Sheet = DialogPrimitive.Root

const SheetTrigger = DialogPrimitive.Trigger

const SheetClose = DialogPrimitive.Close

const SheetPortal = DialogPrimitive.Portal

const SheetOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay ref={ref} className={cn(sheetOverlayVariants(), className)} {...props} />
))
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName

type SheetContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
  side?: 'top' | 'bottom' | 'left' | 'right'
  closeLabel?: string
}

const SheetContent = forwardRef<ElementRef<typeof DialogPrimitive.Content>, SheetContentProps>(
  ({ side, className, children, closeLabel = 'Close', ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(sheetContentVariants({ side }), className)}
        {...props}
      >
        {children}
        <DialogPrimitive.Close asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 min-h-11 min-w-11 rounded-full"
            aria-label={closeLabel}
          >
            <X className="h-5 w-5 shrink-0" aria-hidden />
          </Button>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </SheetPortal>
  ),
)
SheetContent.displayName = DialogPrimitive.Content.displayName

function SheetHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(sheetHeaderVariants(), className)} {...props} />
}

const SheetTitle = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn(sheetTitleVariants(), className)} {...props} />
))
SheetTitle.displayName = DialogPrimitive.Title.displayName

const SheetDescription = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn(sheetDescriptionVariants(), className)}
    {...props}
  />
))
SheetDescription.displayName = DialogPrimitive.Description.displayName

export { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger }
