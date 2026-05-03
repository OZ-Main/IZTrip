import { useTranslation } from 'react-i18next'

import { tripFiltersFieldVariants, tripFiltersLabelVariants, tripFiltersRootVariants } from '@/features/trips/components/TripFilters/TripFilters.styles'
import {
  ALL_TRIP_AUDIENCES_FILTER,
  ALL_TRIP_CATEGORIES_FILTER,
  type TripAudienceFilter,
  type TripCategoryFilter,
} from '@/features/trips/helpers/tripFilters.helpers'
import { TripAudience, TripCategory } from '@/shared/domain'
import { cn } from '@/shared/utils/cn'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type TripFiltersProps = {
  categoryFilter: TripCategoryFilter
  audienceFilter: TripAudienceFilter
  onCategoryFilterChange: (next: TripCategoryFilter) => void
  onAudienceFilterChange: (next: TripAudienceFilter) => void
  className?: string
}

export default function TripFilters({
  categoryFilter,
  audienceFilter,
  onCategoryFilterChange,
  onAudienceFilterChange,
  className,
}: TripFiltersProps) {
  const { t } = useTranslation()

  return (
    <div className={cn(tripFiltersRootVariants(), className)}>
      <div className={tripFiltersFieldVariants()}>
        <span className={tripFiltersLabelVariants()}>{t('trips.filters.category')}</span>
        <Select
          value={categoryFilter}
          onValueChange={(value) => onCategoryFilterChange(value as TripCategoryFilter)}
        >
          <SelectTrigger aria-label={t('trips.filters.category')}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL_TRIP_CATEGORIES_FILTER}>{t('trips.filters.all')}</SelectItem>
            <SelectItem value={TripCategory.KIDS}>{t('trips.categories.kids')}</SelectItem>
            <SelectItem value={TripCategory.FAMILY}>{t('trips.categories.family')}</SelectItem>
            <SelectItem value={TripCategory.ADULTS}>{t('trips.categories.adults')}</SelectItem>
            <SelectItem value={TripCategory.NATURE}>{t('trips.categories.nature')}</SelectItem>
            <SelectItem value={TripCategory.CULTURE}>{t('trips.categories.culture')}</SelectItem>
            <SelectItem value={TripCategory.WEEKEND}>{t('trips.categories.weekend')}</SelectItem>
            <SelectItem value={TripCategory.EDUCATIONAL}>
              {t('trips.categories.educational')}
            </SelectItem>
            <SelectItem value={TripCategory.CUSTOM}>{t('trips.categories.custom')}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className={tripFiltersFieldVariants()}>
        <span className={tripFiltersLabelVariants()}>{t('trips.filters.audience')}</span>
        <Select
          value={audienceFilter}
          onValueChange={(value) => onAudienceFilterChange(value as TripAudienceFilter)}
        >
          <SelectTrigger aria-label={t('trips.filters.audience')}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={ALL_TRIP_AUDIENCES_FILTER}>{t('trips.filters.all')}</SelectItem>
            <SelectItem value={TripAudience.KIDS}>{t('trips.audiences.kids')}</SelectItem>
            <SelectItem value={TripAudience.FAMILY}>{t('trips.audiences.family')}</SelectItem>
            <SelectItem value={TripAudience.ADULTS}>{t('trips.audiences.adults')}</SelectItem>
            <SelectItem value={TripAudience.MIXED}>{t('trips.audiences.mixed')}</SelectItem>
            <SelectItem value={TripAudience.GROUP}>{t('trips.audiences.group')}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
