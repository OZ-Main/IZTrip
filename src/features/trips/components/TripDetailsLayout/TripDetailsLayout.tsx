import type { ReactNode } from 'react'

import TripBookingCard from '@/features/trips/components/TripBookingCard/TripBookingCard'
import {
  tripDetailsLayoutAsideStickyVariants,
  tripDetailsLayoutAsideVariants,
  tripDetailsLayoutMainVariants,
  tripDetailsLayoutMobileDockInnerVariants,
  tripDetailsLayoutMobileDockVariants,
  tripDetailsLayoutRootVariants,
} from '@/features/trips/components/TripDetailsLayout/TripDetailsLayout.styles'
import type { TripDefinition } from '@/features/trips/types/trip.types'

type TripDetailsLayoutProps = {
  trip: TripDefinition
  bookingPath: string
  children: ReactNode
}

export default function TripDetailsLayout({ trip, bookingPath, children }: TripDetailsLayoutProps) {
  return (
    <div className={tripDetailsLayoutRootVariants()}>
      <div className={tripDetailsLayoutMainVariants()}>{children}</div>
      <aside className={tripDetailsLayoutAsideVariants()}>
        <div className={tripDetailsLayoutAsideStickyVariants()}>
          <TripBookingCard trip={trip} bookingPath={bookingPath} presentation="panel" />
        </div>
      </aside>
      <div className={tripDetailsLayoutMobileDockVariants()}>
        <div className={tripDetailsLayoutMobileDockInnerVariants()}>
          <TripBookingCard trip={trip} bookingPath={bookingPath} presentation="dock" />
        </div>
      </div>
    </div>
  )
}
