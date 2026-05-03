import { useTranslation } from 'react-i18next'

import { TRIP_DATE_CHIPS_MAX_VISIBLE } from '@/features/trips/components/TripDateChips/TripDateChips.constants'
import {
  tripDateChipVariants,
  tripDateChipsMoreVariants,
  tripDateChipsRootVariants,
} from '@/features/trips/components/TripDateChips/TripDateChips.styles'
import { formatTripDateDisplay } from '@/features/trips/helpers/tripDates.helpers'
import { getVisibleTripDateIsos } from '@/features/trips/helpers/tripDetailsView.helpers'

type TripDateChipsProps = {
  availableDates: string[]
}

export default function TripDateChips({ availableDates }: TripDateChipsProps) {
  const { t, i18n } = useTranslation()
  const { visible, hiddenCount } = getVisibleTripDateIsos(availableDates, TRIP_DATE_CHIPS_MAX_VISIBLE)

  if (visible.length === 0) {
    return null
  }

  return (
    <div className={tripDateChipsRootVariants()}>
      {visible.map((isoDate) => (
        <span key={isoDate} className={tripDateChipVariants()}>
          {formatTripDateDisplay(isoDate, i18n.language)}
        </span>
      ))}
      {hiddenCount > 0 ? (
        <span className={tripDateChipsMoreVariants()}>{t('tripDetails.moreDates', { count: hiddenCount })}</span>
      ) : null}
    </div>
  )
}
