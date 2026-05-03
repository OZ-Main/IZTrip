import { Filter } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useSearchParams } from 'react-router-dom'

import EmptyState from '@/components/feedback/EmptyState/EmptyState'
import FeaturedTrips from '@/features/home/components/FeaturedTrips/FeaturedTrips'
import TripFilters from '@/features/trips/components/TripFilters/TripFilters'
import TripsCatalogHero from '@/features/trips/components/TripsCatalogHero/TripsCatalogHero'
import { TRIP_SORT_OPTION, type TripSortOption } from '@/features/trips/constants/tripSort.constants'
import { MOCK_TRIPS } from '@/features/trips/data/mockTrips'
import {
  ALL_TRIP_AUDIENCES_FILTER,
  ALL_TRIP_CATEGORIES_FILTER,
  filterTripsByCategoryAndAudience,
  isTripCategory,
  type TripAudienceFilter,
  type TripCategoryFilter,
} from '@/features/trips/helpers/tripFilters.helpers'
import { sortTrips } from '@/features/trips/helpers/tripSort.helpers'
import { tripFiltersChipVariants } from '@/features/trips/components/TripFilters/TripFilters.styles'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
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

export default function TripsPage() {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const [categoryFilter, setCategoryFilter] = useState<TripCategoryFilter>(
    ALL_TRIP_CATEGORIES_FILTER,
  )
  const [audienceFilter, setAudienceFilter] =
    useState<TripAudienceFilter>(ALL_TRIP_AUDIENCES_FILTER)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState<TripSortOption>(TRIP_SORT_OPTION.DATE_ASC)

  useEffect(() => {
    const rawCategory = searchParams.get('category')
    if (rawCategory && isTripCategory(rawCategory)) {
      setCategoryFilter(rawCategory)
    }
  }, [searchParams])

  const filteredTrips = useMemo(
    () => filterTripsByCategoryAndAudience(MOCK_TRIPS, categoryFilter, audienceFilter),
    [audienceFilter, categoryFilter],
  )

  const sortedTrips = useMemo(() => sortTrips(filteredTrips, sortBy), [filteredTrips, sortBy])

  const hasActiveFilters =
    categoryFilter !== ALL_TRIP_CATEGORIES_FILTER || audienceFilter !== ALL_TRIP_AUDIENCES_FILTER

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
              onCategoryFilterChange={setCategoryFilter}
              onAudienceFilterChange={setAudienceFilter}
            />
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden rounded-[1.25rem] border border-border/80 bg-card/80 p-card shadow-card md:block md:p-form">
        <TripFilters
          categoryFilter={categoryFilter}
          audienceFilter={audienceFilter}
          onCategoryFilterChange={setCategoryFilter}
          onAudienceFilterChange={setAudienceFilter}
        />
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
              onClick={() => {
                setCategoryFilter(ALL_TRIP_CATEGORIES_FILTER)
                setAudienceFilter(ALL_TRIP_AUDIENCES_FILTER)
              }}
            >
              {t('trips.empty.resetFilters')}
            </Button>
          }
        />
      ) : (
        <>
          <div className="flex flex-col gap-stack rounded-[1.25rem] border border-border/80 bg-card/70 p-card shadow-card sm:flex-row sm:items-end sm:justify-between sm:gap-form md:p-form">
            <div className="min-w-0 space-y-tight">
              <p className="text-body font-semibold text-foreground">
                {t('trips.results.available', { count: filteredTrips.length })}
              </p>
              {hasActiveFilters ? (
                <div className="flex flex-wrap gap-tight" aria-label={t('trips.results.activeFilters')}>
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
                </div>
              ) : null}
            </div>
            <div className="flex w-full min-w-0 flex-col gap-tight sm:max-w-xs sm:items-stretch">
              <Label htmlFor="trips-sort" className="text-label text-muted-foreground">
                {t('trips.sort.label')}
              </Label>
              <Select
                value={sortBy}
                onValueChange={(value) => {
                  if (
                    value === TRIP_SORT_OPTION.PRICE_ASC ||
                    value === TRIP_SORT_OPTION.DATE_ASC ||
                    value === TRIP_SORT_OPTION.DURATION_ASC
                  ) {
                    setSortBy(value)
                  }
                }}
              >
                <SelectTrigger id="trips-sort" className="h-12 w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={TRIP_SORT_OPTION.DATE_ASC}>{t('trips.sort.dateAsc')}</SelectItem>
                  <SelectItem value={TRIP_SORT_OPTION.PRICE_ASC}>{t('trips.sort.priceAsc')}</SelectItem>
                  <SelectItem value={TRIP_SORT_OPTION.DURATION_ASC}>
                    {t('trips.sort.durationAsc')}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div key={`${categoryFilter}-${audienceFilter}-${sortBy}`}>
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
