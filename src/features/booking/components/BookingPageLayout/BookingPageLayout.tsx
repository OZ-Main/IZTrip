import type { ReactNode } from 'react'

import {
  bookingPageLayoutAsideColumnVariants,
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
      <aside className={bookingPageLayoutAsideColumnVariants()}>{asideSlot}</aside>
    </div>
  )
}
