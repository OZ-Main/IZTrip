import { Filter, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useSearchParams } from 'react-router-dom'

import EmptyState from '@/components/feedback/EmptyState/EmptyState'
import FeaturedTrips from '@/features/home/components/FeaturedTrips/FeaturedTrips'
import TripFilters from '@/features/trips/components/TripFilters/TripFilters'
import TripsCatalogHero from '@/features/trips/components/TripsCatalogHero/TripsCatalogHero'
import {
  TRIP_DURATION_FILTER,
  type TripDurationFilter,
} from '@/features/trips/constants/tripDurationFilter.constants'
import { TRIP_SORT_OPTION, type TripSortOption } from '@/features/trips/constants/tripSort.constants'
import { MOCK_TRIPS } from '@/features/trips/data/mockTrips'
import {
  ALL_TRIP_AUDIENCES_FILTER,
  ALL_TRIP_CATEGORIES_FILTER,
  filterTripsByCategoryAndAudience,
  filterTripsByDuration,
  isTripCategory,
  type TripAudienceFilter,
  type TripCategoryFilter,
} from '@/features/trips/helpers/tripFilters.helpers'
import { sortTrips } from '@/features/trips/helpers/tripSort.helpers'
import { tripFiltersChipVariants } from '@/features/trips/components/TripFilters/TripFilters.styles'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { APP_ROUTE } from '@/shared/constants/routes.constants'
import { cn } from '@/shared/utils/cn'

function categoryFilterLabel(t: (key: string) => string, value: TripCategoryFilter) {
  if (value === ALL_TRIP_CATEGORIES_FILTER) {
    return t('trips.filters.all')
  }

  return t(`trips.categories.${value}`)
}

function audienceFilterLabel(t: (key: string) => string, value: TripAudienceFilter) {
  if (value === ALL_TRIP_AUDIENCES_FILTER) {
    return t('trips.filters.all')
  }

  return t(`trips.audiences.${value}`)
}

function durationFilterSummaryLabel(t: (key: string) => string, value: TripDurationFilter) {
  if (value === TRIP_DURATION_FILTER.ALL) {
    return t('trips.filters.durationAll')
  }

  if (value === TRIP_DURATION_FILTER.ONE_DAY) {
    return t('trips.filters.duration1')
  }

  if (value === TRIP_DURATION_FILTER.TWO_DAYS) {
    return t('trips.filters.duration2')
  }

  return t('trips.filters.duration3Plus')
}

type TripsResultsMetaProps = {
  count: number
  hasActiveFilters: boolean
  categoryFilter: TripCategoryFilter
  audienceFilter: TripAudienceFilter
  durationFilter: TripDurationFilter
  t: (key: string, options?: Record<string, unknown>) => string
  onResetFilters?: () => void
  className?: string
}

function TripsResultsMeta({
  count,
  hasActiveFilters,
  categoryFilter,
  audienceFilter,
  durationFilter,
  t,
  onResetFilters,
  className,
}: TripsResultsMetaProps) {
  return (
    <div className={cn('border-t border-border/60 pt-form-field', className)}>
      <div className="flex flex-wrap items-start gap-x-3 gap-y-2 sm:items-center sm:justify-between">
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-x-2 gap-y-2">
          <p className="shrink-0 text-body-sm font-semibold text-foreground tabular-nums sm:text-body">
            {t('trips.results.available', { count })}
          </p>
          {hasActiveFilters ? (
            <div
              className="flex min-w-0 flex-wrap items-center gap-tight"
              aria-label={t('trips.results.activeFilters')}
            >
              {categoryFilter !== ALL_TRIP_CATEGORIES_FILTER ? (
                <span
                  className={cn(
                    tripFiltersChipVariants({ state: 'active' }),
                    'pointer-events-none cursor-default',
                  )}
                >
                  {categoryFilterLabel(t, categoryFilter)}
                </span>
              ) : null}
              {audienceFilter !== ALL_TRIP_AUDIENCES_FILTER ? (
                <span
                  className={cn(
                    tripFiltersChipVariants({ state: 'active' }),
                    'pointer-events-none cursor-default',
                  )}
                >
                  {audienceFilterLabel(t, audienceFilter)}
                </span>
              ) : null}
              {durationFilter !== TRIP_DURATION_FILTER.ALL ? (
                <span
                  className={cn(
                    tripFiltersChipVariants({ state: 'active' }),
                    'pointer-events-none cursor-default',
                  )}
                >
                  {durationFilterSummaryLabel(t, durationFilter)}
                </span>
              ) : null}
            </div>
          ) : null}
        </div>
        {hasActiveFilters && onResetFilters ? (
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-9 shrink-0 gap-1.5"
            onClick={onResetFilters}
          >
            <X className="h-4 w-4" aria-hidden />
            {t('trips.filters.resetAll')}
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export default function TripsPage() {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const [categoryFilter, setCategoryFilter] = useState<TripCategoryFilter>(
    ALL_TRIP_CATEGORIES_FILTER,
  )
  const [audienceFilter, setAudienceFilter] =
    useState<TripAudienceFilter>(ALL_TRIP_AUDIENCES_FILTER)
  const [durationFilter, setDurationFilter] = useState<TripDurationFilter>(TRIP_DURATION_FILTER.ALL)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState<TripSortOption>(TRIP_SORT_OPTION.DATE_ASC)

  useEffect(() => {
    const rawCategory = searchParams.get('category')
    if (rawCategory && isTripCategory(rawCategory)) {
      setCategoryFilter(rawCategory)
    }
  }, [searchParams])

  const filteredTrips = useMemo(() => {
    const byCategoryAndAudience = filterTripsByCategoryAndAudience(
      MOCK_TRIPS,
      categoryFilter,
      audienceFilter,
    )
    return filterTripsByDuration(byCategoryAndAudience, durationFilter)
  }, [audienceFilter, categoryFilter, durationFilter])

  const sortedTrips = useMemo(() => sortTrips(filteredTrips, sortBy), [filteredTrips, sortBy])

  const hasActiveFilters =
    categoryFilter !== ALL_TRIP_CATEGORIES_FILTER ||
    audienceFilter !== ALL_TRIP_AUDIENCES_FILTER ||
    durationFilter !== TRIP_DURATION_FILTER.ALL

  function resetTripListFilters() {
    setCategoryFilter(ALL_TRIP_CATEGORIES_FILTER)
    setAudienceFilter(ALL_TRIP_AUDIENCES_FILTER)
    setDurationFilter(TRIP_DURATION_FILTER.ALL)
  }

  return (
    <div className="space-y-section">
      <TripsCatalogHero />

      <div className="md:hidden">
        <Button
          type="button"
          variant="outline"
          className="h-12 w-full justify-center gap-2"
          onClick={() => setFiltersOpen(true)}
        >
          <Filter className="h-4 w-4 shrink-0" aria-hidden />
          {t('trips.filters.openButton')}
        </Button>
        <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
          <SheetContent
            side="bottom"
            closeLabel={t('common.close')}
            className="max-h-[min(90vh,36rem)] gap-stack overflow-y-auto rounded-t-[1.25rem]"
          >
            <SheetHeader className="pr-10 text-left">
              <SheetTitle>{t('trips.filters.drawerTitle')}</SheetTitle>
              <SheetDescription>{t('trips.filters.drawerDescription')}</SheetDescription>
            </SheetHeader>
            <TripFilters
              categoryFilter={categoryFilter}
              audienceFilter={audienceFilter}
              durationFilter={durationFilter}
              onCategoryFilterChange={setCategoryFilter}
              onAudienceFilterChange={setAudienceFilter}
              onDurationFilterChange={setDurationFilter}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
            <TripsResultsMeta
              count={filteredTrips.length}
              hasActiveFilters={hasActiveFilters}
              categoryFilter={categoryFilter}
              audienceFilter={audienceFilter}
              durationFilter={durationFilter}
              t={t}
              onResetFilters={resetTripListFilters}
            />
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:block">
        <div className="rounded-xl border border-border/80 bg-card p-3 shadow-sm sm:p-4 md:p-5">
          <div className="flex flex-col gap-4">
            <TripFilters
              categoryFilter={categoryFilter}
              audienceFilter={audienceFilter}
              durationFilter={durationFilter}
              onCategoryFilterChange={setCategoryFilter}
              onAudienceFilterChange={setAudienceFilter}
              onDurationFilterChange={setDurationFilter}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
            <TripsResultsMeta
              count={filteredTrips.length}
              hasActiveFilters={hasActiveFilters}
              categoryFilter={categoryFilter}
              audienceFilter={audienceFilter}
              durationFilter={durationFilter}
              t={t}
              onResetFilters={resetTripListFilters}
            />
          </div>
        </div>
      </div>

      {filteredTrips.length === 0 ? (
        <EmptyState
          title={t('trips.empty.title')}
          description={t('trips.empty.description')}
          actionSlot={
            <Button
              type="button"
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={resetTripListFilters}
            >
              {t('trips.empty.resetFilters')}
            </Button>
          }
        />
      ) : (
        <>
          <div key={`${categoryFilter}-${audienceFilter}-${durationFilter}-${sortBy}`}>
            <FeaturedTrips trips={sortedTrips} />
          </div>
        </>
      )}
      <p className="text-center text-body-sm text-muted-foreground">
        <Button type="button" variant="link" className="min-h-11" asChild>
          <Link to={APP_ROUTE.home}>{t('trips.backHome')}</Link>
        </Button>
      </p>
    </div>
  )
}
