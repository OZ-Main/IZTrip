import { useTranslation } from 'react-i18next'

import { tripsPaginationBarRootVariants } from '@/features/trips/components/TripsPaginationBar/TripsPaginationBar.styles'
import { Button } from '@/components/ui/button'
import { cn } from '@/shared/utils/cn'

type TripsPaginationBarProps = {
  page: number
  pageCount: number
  onPageChange: (nextPage: number) => void
  className?: string
}

export default function TripsPaginationBar({
  page,
  pageCount,
  onPageChange,
  className,
}: TripsPaginationBarProps) {
  const { t } = useTranslation()

  if (pageCount <= 1) {
    return null
  }

  const canGoPrev = page > 1
  const canGoNext = page < pageCount

  return (
    <nav
      className={cn(tripsPaginationBarRootVariants(), className)}
      aria-label={t('trips.pagination.label')}
    >
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="min-h-10"
        disabled={!canGoPrev}
        onClick={() => onPageChange(page - 1)}
      >
        {t('trips.pagination.prev')}
      </Button>
      <p className="text-body-sm font-medium tabular-nums text-foreground">
        {t('trips.pagination.pageStatus', { page, pageCount })}
      </p>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="min-h-10"
        disabled={!canGoNext}
        onClick={() => onPageChange(page + 1)}
      >
        {t('trips.pagination.next')}
      </Button>
    </nav>
  )
}
