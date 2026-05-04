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
import PageBackNavLink from '@/shared/components/PageBackNavLink/PageBackNavLink'
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
  compact?: boolean
  showResetButton?: boolean
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
  compact,
  showResetButton = true,
}: TripsResultsMetaProps) {
  return (
    <div className={cn('border-t border-border/60', compact ? 'pt-3' : 'pt-form-field', className)}>
      <div
        className={cn(
          'flex flex-wrap items-start sm:items-center sm:justify-between',
          compact ? 'gap-x-2 gap-y-1.5' : 'gap-x-3 gap-y-2',
        )}
      >
        <div
          className={cn(
            'flex min-w-0 flex-1 flex-wrap items-center',
            compact ? 'gap-x-1.5 gap-y-1' : 'gap-x-2 gap-y-2',
          )}
        >
          <p
            className={cn(
              'shrink-0 font-semibold tabular-nums text-foreground',
              compact ? 'text-caption' : 'text-body-sm sm:text-body',
            )}
          >
            {t('trips.results.available', { count })}
          </p>
          {hasActiveFilters ? (
            <div
              className={cn(
                'flex min-w-0 flex-wrap items-center',
                compact ? 'gap-1' : 'gap-tight',
              )}
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
        {showResetButton && hasActiveFilters && onResetFilters ? (
          <Button
            type="button"
            variant="outline"
            size="sm"
            className={cn(
              'shrink-0',
              compact ? 'h-8 gap-1 px-2 text-caption' : 'h-9 gap-1.5',
            )}
            onClick={onResetFilters}
          >
            <X className={cn(compact ? 'h-3 w-3' : 'h-4 w-4')} aria-hidden />
            {t('trips.filters.resetAll')}
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export default function TripsPage() {
  const { t } = useTranslation()
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
    <div className="space-y-section-sm sm:space-y-section">
      <TripsCatalogHero />

      <div className="md:hidden">
        <Button
          type="button"
          variant="outline"
          className="h-11 w-full justify-center gap-2 text-caption sm:h-12 sm:text-body"
          onClick={() => setFiltersOpen(true)}
        >
          <Filter className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" aria-hidden />
          {t('trips.filters.openButton')}
        </Button>
        <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
          <SheetContent
            side="bottom"
            closeLabel={t('common.close')}
            className="flex max-h-[min(92vh,42rem)] flex-col gap-0 overflow-hidden rounded-t-[1.25rem] p-0 sm:max-h-[min(90vh,38rem)]"
          >
            <SheetHeader className="border-b border-border/70 px-4 pb-3 pt-4 text-left sm:px-6">
              <SheetTitle className="font-display text-heading-md font-semibold sm:text-heading-lg">
                {t('trips.filters.drawerTitle')}
              </SheetTitle>
              <SheetDescription className="text-caption leading-snug sm:text-body-sm">
                {t('trips.filters.drawerDescription')}
              </SheetDescription>
            </SheetHeader>
            <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-4 pt-3 sm:px-6">
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
                compact
                count={filteredTrips.length}
                hasActiveFilters={hasActiveFilters}
                categoryFilter={categoryFilter}
                audienceFilter={audienceFilter}
                durationFilter={durationFilter}
                t={t}
                showResetButton={false}
                className="mt-4 border-border/50"
              />
            </div>
            <div className="flex shrink-0 items-stretch gap-2 border-t border-border/70 bg-background px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-10px_30px_-12px_rgba(0,0,0,0.12)] sm:px-6">
              {hasActiveFilters ? (
                <Button
                  type="button"
                  variant="ghost"
                  className="h-11 shrink-0 px-3 text-caption font-medium text-muted-foreground hover:text-foreground"
                  onClick={resetTripListFilters}
                >
                  {t('trips.filters.sheetReset')}
                </Button>
              ) : null}
              <Button
                type="button"
                variant="accent"
                className={cn('min-h-11', hasActiveFilters ? 'flex-1' : 'w-full')}
                onClick={() => setFiltersOpen(false)}
              >
                {t('trips.filters.apply')}
              </Button>
            </div>
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
      <PageBackNavLink to={APP_ROUTE.home} label={t('trips.backHome')} />
    </div>
  )
}
