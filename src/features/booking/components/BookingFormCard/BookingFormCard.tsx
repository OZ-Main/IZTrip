import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import {
  bookingFormCardEyebrowVariants,
  bookingFormCardLeadVariants,
  bookingFormCardRootVariants,
  bookingFormCardTitleVariants,
} from '@/features/booking/components/BookingFormCard/BookingFormCard.styles'

type BookingFormCardProps = {
  children: ReactNode
}

export default function BookingFormCard({ children }: BookingFormCardProps) {
  const { t } = useTranslation()

  return (
    <div className={bookingFormCardRootVariants()}>
      <p className={bookingFormCardEyebrowVariants()}>{t('booking.formCard.eyebrow')}</p>
      <h2 className={bookingFormCardTitleVariants()}>{t('booking.formCard.title')}</h2>
      <p className={bookingFormCardLeadVariants()}>{t('booking.formCard.lead')}</p>
      <div className="mt-relaxed min-w-0">{children}</div>
    </div>
  )
}
