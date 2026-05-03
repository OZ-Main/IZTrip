import { useTranslation } from 'react-i18next'

import {
  bookingTrustPanelDotVariants,
  bookingTrustPanelItemVariants,
  bookingTrustPanelListVariants,
  bookingTrustPanelRootVariants,
  bookingTrustPanelTitleVariants,
} from '@/features/booking/components/BookingTrustPanel/BookingTrustPanel.styles'

const TRUST_KEYS = [
  'booking.trustPoint1',
  'booking.trustPoint2',
  'booking.trustPoint3',
  'booking.trustPoint4',
] as const

export default function BookingTrustPanel() {
  const { t } = useTranslation()

  return (
    <div className={bookingTrustPanelRootVariants()}>
      <p className={bookingTrustPanelTitleVariants()}>{t('booking.nextSteps.title')}</p>
      <ul className={bookingTrustPanelListVariants()}>
        {TRUST_KEYS.map((key) => (
          <li key={key} className={bookingTrustPanelItemVariants()}>
            <span className={bookingTrustPanelDotVariants()} aria-hidden />
            <span>{t(key)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
