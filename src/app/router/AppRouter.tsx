import { Fragment } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import ScrollToTop from '@/app/router/ScrollToTop/ScrollToTop'
import { GuestOnly } from '@/components/auth/GuestOnly'
import { RequireAuth } from '@/components/auth/RequireAuth'
import AppShell from '@/components/layout/AppShell/AppShell'
import AboutPage from '@/pages/AboutPage'
import BookingPage from '@/pages/BookingPage'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import SavedTripsPage from '@/pages/SavedTripsPage'
import TripDetailsPage from '@/pages/TripDetailsPage'
import TripsPage from '@/pages/TripsPage'
import { APP_ROUTE, ROUTE_SEGMENT } from '@/shared/constants/routes.constants'

export default function AppRouter() {
  return (
    <Fragment>
      <ScrollToTop />
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTE_SEGMENT.trips} element={<TripsPage />} />
          <Route
            path={`${ROUTE_SEGMENT.trips}/${ROUTE_SEGMENT.tripSlugParam}`}
            element={<TripDetailsPage />}
          />
          <Route path={ROUTE_SEGMENT.saved} element={<SavedTripsPage />} />
          <Route path={ROUTE_SEGMENT.about} element={<AboutPage />} />
          <Route
            path={ROUTE_SEGMENT.login}
            element={
              <GuestOnly>
                <LoginPage />
              </GuestOnly>
            }
          />
          <Route
            path={ROUTE_SEGMENT.register}
            element={
              <GuestOnly>
                <RegisterPage />
              </GuestOnly>
            }
          />
          <Route element={<RequireAuth />}>
            <Route
              path={`${ROUTE_SEGMENT.booking}/${ROUTE_SEGMENT.tripSlugParam}`}
              element={<BookingPage />}
            />
          </Route>
          <Route path={ROUTE_SEGMENT.wildcard} element={<Navigate to={APP_ROUTE.home} replace />} />
        </Route>
      </Routes>
    </Fragment>
  )
}
