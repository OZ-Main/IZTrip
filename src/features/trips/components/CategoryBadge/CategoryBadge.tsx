import { useTranslation } from 'react-i18next'

import { categoryBadgeVariants } from '@/features/trips/components/CategoryBadge/CategoryBadge.styles'
import { cn } from '@/shared/utils/cn'
import type { TripCategory } from '@/shared/domain'

type CategoryBadgeProps = {
  category: TripCategory
  className?: string
}

export default function CategoryBadge({ category, className }: CategoryBadgeProps) {
  const { t } = useTranslation()

  return (
    <span className={cn(categoryBadgeVariants(), className)}>
      {t(`trips.categories.${category}`)}
    </span>
  )
}
