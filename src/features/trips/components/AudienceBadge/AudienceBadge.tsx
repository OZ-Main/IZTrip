import { useTranslation } from 'react-i18next'

import { audienceBadgeVariants } from '@/features/trips/components/AudienceBadge/AudienceBadge.styles'
import { cn } from '@/shared/utils/cn'
import type { TripAudience } from '@/shared/domain'

type AudienceBadgeProps = {
  audience: TripAudience
  className?: string
}

export default function AudienceBadge({ audience, className }: AudienceBadgeProps) {
  const { t } = useTranslation()

  return (
    <span className={cn(audienceBadgeVariants(), className)}>
      {t(`trips.audiences.${audience}`)}
    </span>
  )
}
