import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import { TRIPS_CATALOG_QUERY } from '@/features/trips/constants/tripsCatalogQuery.constants'
import {
  TRIP_DURATION_FILTER,
  isTripDurationFilter,
  type TripDurationFilter,
} from '@/features/trips/constants/tripDurationFilter.constants'
import { TRIP_SORT_OPTION, type TripSortOption } from '@/features/trips/constants/tripSort.constants'
import {
  ALL_TRIP_AUDIENCES_FILTER,
  ALL_TRIP_CATEGORIES_FILTER,
  isTripAudience,
  isTripCategory,
  type TripAudienceFilter,
  type TripCategoryFilter,
} from '@/features/trips/helpers/tripFilters.helpers'

function parseCategory(raw: string | null): TripCategoryFilter {
  if (!raw || raw === ALL_TRIP_CATEGORIES_FILTER) {
    return ALL_TRIP_CATEGORIES_FILTER
  }

  if (isTripCategory(raw)) {
    return raw
  }

  return ALL_TRIP_CATEGORIES_FILTER
}

function parseAudience(raw: string | null): TripAudienceFilter {
  if (!raw || raw === ALL_TRIP_AUDIENCES_FILTER) {
    return ALL_TRIP_AUDIENCES_FILTER
  }

  if (isTripAudience(raw)) {
    return raw
  }

  return ALL_TRIP_AUDIENCES_FILTER
}

function parseDuration(raw: string | null): TripDurationFilter {
  if (!raw || raw === TRIP_DURATION_FILTER.ALL) {
    return TRIP_DURATION_FILTER.ALL
  }

  if (isTripDurationFilter(raw)) {
    return raw
  }

  return TRIP_DURATION_FILTER.ALL
}

function parseSort(raw: string | null): TripSortOption {
  if (
    raw === TRIP_SORT_OPTION.PRICE_ASC ||
    raw === TRIP_SORT_OPTION.DATE_ASC ||
    raw === TRIP_SORT_OPTION.DURATION_ASC
  ) {
    return raw
  }

  return TRIP_SORT_OPTION.DATE_ASC
}

function parsePage(raw: string | null): number {
  const parsed = Number.parseInt(raw ?? '', 10)

  if (!Number.isFinite(parsed) || parsed < 1) {
    return 1
  }

  return parsed
}

export function useTripsCatalogUrl() {
  const [searchParams, setSearchParams] = useSearchParams()

  const categoryFilter = useMemo(
    () => parseCategory(searchParams.get(TRIPS_CATALOG_QUERY.category)),
    [searchParams],
  )

  const audienceFilter = useMemo(
    () => parseAudience(searchParams.get(TRIPS_CATALOG_QUERY.audience)),
    [searchParams],
  )

  const durationFilter = useMemo(
    () => parseDuration(searchParams.get(TRIPS_CATALOG_QUERY.duration)),
    [searchParams],
  )

  const sortBy = useMemo(() => parseSort(searchParams.get(TRIPS_CATALOG_QUERY.sort)), [searchParams])

  const pageFromUrl = useMemo(
    () => parsePage(searchParams.get(TRIPS_CATALOG_QUERY.page)),
    [searchParams],
  )

  const applySearchParams = useCallback(
    (mutate: (params: URLSearchParams) => void) => {
      setSearchParams(
        (previous) => {
          const next = new URLSearchParams(previous)
          mutate(next)

          return next
        },
        { replace: true },
      )
    },
    [setSearchParams],
  )

  const setCategoryFilter = useCallback(
    (nextCategory: TripCategoryFilter) => {
      applySearchParams((params) => {
        if (nextCategory === ALL_TRIP_CATEGORIES_FILTER) {
          params.delete(TRIPS_CATALOG_QUERY.category)
        } else {
          params.set(TRIPS_CATALOG_QUERY.category, nextCategory)
        }

        params.delete(TRIPS_CATALOG_QUERY.page)
      })
    },
    [applySearchParams],
  )

  const setAudienceFilter = useCallback(
    (nextAudience: TripAudienceFilter) => {
      applySearchParams((params) => {
        if (nextAudience === ALL_TRIP_AUDIENCES_FILTER) {
          params.delete(TRIPS_CATALOG_QUERY.audience)
        } else {
          params.set(TRIPS_CATALOG_QUERY.audience, nextAudience)
        }

        params.delete(TRIPS_CATALOG_QUERY.page)
      })
    },
    [applySearchParams],
  )

  const setDurationFilter = useCallback(
    (nextDuration: TripDurationFilter) => {
      applySearchParams((params) => {
        if (nextDuration === TRIP_DURATION_FILTER.ALL) {
          params.delete(TRIPS_CATALOG_QUERY.duration)
        } else {
          params.set(TRIPS_CATALOG_QUERY.duration, nextDuration)
        }

        params.delete(TRIPS_CATALOG_QUERY.page)
      })
    },
    [applySearchParams],
  )

  const setSortBy = useCallback(
    (nextSort: TripSortOption) => {
      applySearchParams((params) => {
        if (nextSort === TRIP_SORT_OPTION.DATE_ASC) {
          params.delete(TRIPS_CATALOG_QUERY.sort)
        } else {
          params.set(TRIPS_CATALOG_QUERY.sort, nextSort)
        }

        params.delete(TRIPS_CATALOG_QUERY.page)
      })
    },
    [applySearchParams],
  )

  const setPage = useCallback(
    (nextPage: number) => {
      applySearchParams((params) => {
        if (nextPage <= 1) {
          params.delete(TRIPS_CATALOG_QUERY.page)
        } else {
          params.set(TRIPS_CATALOG_QUERY.page, String(nextPage))
        }
      })
    },
    [applySearchParams],
  )

  const resetTripListFilters = useCallback(() => {
    setSearchParams(new URLSearchParams(), { replace: true })
  }, [setSearchParams])

  return {
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
  }
}
