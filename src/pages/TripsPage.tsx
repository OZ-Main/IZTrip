import { Filter } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useSearchParams } from 'react-router-dom'

import EmptyState from '@/components/feedback/EmptyState/EmptyState'
import FeaturedTrips from '@/features/home/components/FeaturedTrips/FeaturedTrips'
import TripFilters from '@/features/trips/components/TripFilters/TripFilters'
import TripsCatalogHero from '@/features/trips/components/TripsCatalogHero/TripsCatalogHero'
import { MOCK_TRIPS } from '@/features/trips/data/mockTrips'
import {
  ALL_TRIP_AUDIENCES_FILTER,
  ALL_TRIP_CATEGORIES_FILTER,
  filterTripsByCategoryAndAudience,
  isTripCategory,
  type TripAudienceFilter,
  type TripCategoryFilter,
} from '@/features/trips/helpers/tripFilters.helpers'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { APP_ROUTE } from '@/shared/constants/routes.constants'

export default function TripsPage() {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const [categoryFilter, setCategoryFilter] = useState<TripCategoryFilter>(
    ALL_TRIP_CATEGORIES_FILTER,
  )
  const [audienceFilter, setAudienceFilter] =
    useState<TripAudienceFilter>(ALL_TRIP_AUDIENCES_FILTER)
  const [filtersOpen, setFiltersOpen] = useState(false)

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
        <FeaturedTrips trips={filteredTrips} />
      )}
      <p className="text-center text-body-sm text-muted-foreground">
        <Button type="button" variant="link" className="min-h-11" asChild>
          <Link to={APP_ROUTE.home}>{t('trips.backHome')}</Link>
        </Button>
      </p>
    </div>
  )
}
