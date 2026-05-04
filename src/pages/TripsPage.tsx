import { Filter, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import EmptyState from '@/components/feedback/EmptyState/EmptyState'
import FeaturedTrips from '@/features/home/components/FeaturedTrips/FeaturedTrips'
import TripFilters from '@/features/trips/components/TripFilters/TripFilters'
import { tripFiltersChipVariants } from '@/features/trips/components/TripFilters/TripFilters.styles'
import TripsCatalogHero from '@/features/trips/components/TripsCatalogHero/TripsCatalogHero'
import TripsPaginationBar from '@/features/trips/components/TripsPaginationBar/TripsPaginationBar'
import {
  TRIP_DURATION_FILTER,
  type TripDurationFilter,
} from '@/features/trips/constants/tripDurationFilter.constants'
import { TRIPS_CATALOG_PAGE_SIZE } from '@/features/trips/constants/tripPagination.constants'
import type { TripSortOption } from '@/features/trips/constants/tripSort.constants'
import { MOCK_TRIPS } from '@/features/trips/data/mockTrips'
import {
  ALL_TRIP_AUDIENCES_FILTER,
  ALL_TRIP_CATEGORIES_FILTER,
  buildAvailableAudienceFilters,
  buildAvailableCategoryFilters,
  buildAvailableDurationFilters,
  filterTripsByCategoryAndAudience,
  filterTripsByDuration,
  type TripAudienceFilter,
  type TripCategoryFilter,
} from '@/features/trips/helpers/tripFilters.helpers'
import { sortTrips } from '@/features/trips/helpers/tripSort.helpers'
import { useTripsCatalogUrl } from '@/features/trips/hooks/useTripsCatalogUrl'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { useNavigateBack } from '@/shared/hooks/useNavigateBack'
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
  const navigateBack = useNavigateBack()
  const [filtersOpen, setFiltersOpen] = useState(false)
  const {
    categoryFilter,
    audienceFilter,
    durationFilter,
    sortBy,
    pageFromUrl,
    setCategoryFilter,
    setAudienceFilter,
    setDurationFilter,
    setSortBy,
    setPage,
    resetTripListFilters,
  } = useTripsCatalogUrl()

  const availableCategoryFilters = useMemo(
    () => buildAvailableCategoryFilters(MOCK_TRIPS, audienceFilter, durationFilter),
    [audienceFilter, durationFilter],
  )

  const availableAudienceFilters = useMemo(
    () => buildAvailableAudienceFilters(MOCK_TRIPS, categoryFilter, durationFilter),
    [categoryFilter, durationFilter],
  )

  const availableDurationFilters = useMemo(
    () => buildAvailableDurationFilters(MOCK_TRIPS, categoryFilter, audienceFilter),
    [categoryFilter, audienceFilter],
  )

  useEffect(() => {
    if (!availableCategoryFilters.includes(categoryFilter)) {
      setCategoryFilter(ALL_TRIP_CATEGORIES_FILTER)
    }
  }, [availableCategoryFilters, categoryFilter, setCategoryFilter])

  useEffect(() => {
    if (!availableAudienceFilters.includes(audienceFilter)) {
      setAudienceFilter(ALL_TRIP_AUDIENCES_FILTER)
    }
  }, [availableAudienceFilters, audienceFilter, setAudienceFilter])

  useEffect(() => {
    if (!availableDurationFilters.includes(durationFilter)) {
      setDurationFilter(TRIP_DURATION_FILTER.ALL)
    }
  }, [availableDurationFilters, durationFilter, setDurationFilter])

  const filteredTrips = useMemo(() => {
    const byCategoryAndAudience = filterTripsByCategoryAndAudience(
      MOCK_TRIPS,
      categoryFilter,
      audienceFilter,
    )
    return filterTripsByDuration(byCategoryAndAudience, durationFilter)
  }, [audienceFilter, categoryFilter, durationFilter])

  const sortedTrips = useMemo(() => sortTrips(filteredTrips, sortBy), [filteredTrips, sortBy])

  const pageCount = Math.max(1, Math.ceil(sortedTrips.length / TRIPS_CATALOG_PAGE_SIZE))

  useEffect(() => {
    if (pageFromUrl > pageCount) {
      setPage(Math.min(pageFromUrl, pageCount))
    }
  }, [pageCount, pageFromUrl, setPage])

  const currentPage = Math.min(pageFromUrl, pageCount)
  const paginatedTrips = sortedTrips.slice(
    (currentPage - 1) * TRIPS_CATALOG_PAGE_SIZE,
    currentPage * TRIPS_CATALOG_PAGE_SIZE,
  )

  const hasActiveFilters =
    categoryFilter !== ALL_TRIP_CATEGORIES_FILTER ||
    audienceFilter !== ALL_TRIP_AUDIENCES_FILTER ||
    durationFilter !== TRIP_DURATION_FILTER.ALL

  function handleSortChange(nextSort: TripSortOption) {
    setSortBy(nextSort)
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
              onSortChange={handleSortChange}
              availableCategoryFilters={availableCategoryFilters}
              availableAudienceFilters={availableAudienceFilters}
              availableDurationFilters={availableDurationFilters}
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
              onSortChange={handleSortChange}
              availableCategoryFilters={availableCategoryFilters}
              availableAudienceFilters={availableAudienceFilters}
              availableDurationFilters={availableDurationFilters}
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
          <FeaturedTrips trips={paginatedTrips} />
          <TripsPaginationBar page={currentPage} pageCount={pageCount} onPageChange={setPage} />
        </>
      )}
      <p className="text-center text-body-sm text-muted-foreground">
        <Button type="button" variant="link" className="min-h-11" onClick={() => navigateBack()}>
          {t('trips.backHome')}
        </Button>
      </p>
    </div>
  )
}
