import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useMatch } from 'react-router-dom'

import { MOCK_TRIPS } from '@/features/trips/data/mockTrips'
import { findTripBySlug } from '@/features/trips/helpers/tripLookup.helpers'
import { APP_ROUTE } from '@/shared/constants/routes.constants'
import { applyDocumentMeta } from '@/shared/helpers/documentMeta.helpers'

export default function RouteDocumentHead() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const homeMatch = useMatch({ path: '/', end: true })
  const tripsIndexMatch = useMatch({ path: APP_ROUTE.trips, end: true })
  const tripDetailMatch = useMatch({ path: `${APP_ROUTE.trips}/:tripSlug`, end: true })
  const bookingMatch = useMatch({ path: '/booking/:tripSlug', end: true })
  const aboutMatch = useMatch({ path: APP_ROUTE.about, end: true })
  const savedMatch = useMatch({ path: APP_ROUTE.saved, end: true })
  const loginMatch = useMatch({ path: APP_ROUTE.login, end: true })
  const registerMatch = useMatch({ path: APP_ROUTE.register, end: true })

  useEffect(() => {
    const suffix = t('seo.titleSuffix')
    const pathWithSearch = `${location.pathname}${location.search}`
    let title = `${t('seo.defaultTitle')}`
    let description = t('seo.defaultDescription')

    if (homeMatch) {
      title = `${t('seo.home.title')}${suffix}`
      description = t('seo.home.description')
    } else if (tripsIndexMatch) {
      title = `${t('seo.trips.title')}${suffix}`
      description = t('seo.trips.description')
    } else if (tripDetailMatch?.params.tripSlug) {
      const trip = findTripBySlug(MOCK_TRIPS, tripDetailMatch.params.tripSlug)

      if (trip) {
        title = `${t(`trips.catalog.${trip.slug}.title`)}${suffix}`
        description = t(`trips.catalog.${trip.slug}.shortDescription`)
      } else {
        title = `${t('seo.tripMissing.title')}${suffix}`
        description = t('seo.tripMissing.description')
      }
    } else if (bookingMatch?.params.tripSlug) {
      const trip = findTripBySlug(MOCK_TRIPS, bookingMatch.params.tripSlug)

      if (trip) {
        title = `${t('seo.booking.title')} — ${t(`trips.catalog.${trip.slug}.title`)}${suffix}`
        description = t('seo.booking.description')
      } else {
        title = `${t('seo.booking.title')}${suffix}`
        description = t('seo.booking.description')
      }
    } else if (aboutMatch) {
      title = `${t('seo.about.title')}${suffix}`
      description = t('seo.about.description')
    } else if (savedMatch) {
      title = `${t('seo.saved.title')}${suffix}`
      description = t('seo.saved.description')
    } else if (loginMatch) {
      title = `${t('seo.login.title')}${suffix}`
      description = t('seo.login.description')
    } else if (registerMatch) {
      title = `${t('seo.register.title')}${suffix}`
      description = t('seo.register.description')
    }

    applyDocumentMeta({
      title,
      description,
      canonicalPath: pathWithSearch,
    })
  }, [
    aboutMatch,
    bookingMatch,
    homeMatch,
    i18n.language,
    loginMatch,
    location.pathname,
    location.search,
    registerMatch,
    savedMatch,
    t,
    tripDetailMatch,
    tripsIndexMatch,
  ])

  return null
}
