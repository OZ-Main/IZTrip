import type { ReactNode } from 'react'

import {
  bookingPageLayoutAsideColumnVariants,
  bookingPageLayoutAsideStickyVariants,
  bookingPageLayoutFormColumnVariants,
  bookingPageLayoutRootVariants,
} from '@/features/booking/components/BookingPageLayout/BookingPageLayout.styles'

type BookingPageLayoutProps = {
  formSlot: ReactNode
  asideSlot: ReactNode
}

export default function BookingPageLayout({ formSlot, asideSlot }: BookingPageLayoutProps) {
  return (
    <div className={bookingPageLayoutRootVariants()}>
      <div className={bookingPageLayoutFormColumnVariants()}>{formSlot}</div>
      <aside className={bookingPageLayoutAsideColumnVariants()}>
        <div className={bookingPageLayoutAsideStickyVariants()}>{asideSlot}</div>
      </aside>
    </div>
  )
}
