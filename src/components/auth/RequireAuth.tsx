import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useAuthStore } from '@/app/store/authStore'
import { APP_ROUTE, REDIRECT_QUERY_KEY } from '@/shared/constants/routes.constants'

export function RequireAuth() {
  const user = useAuthStore((authStore) => authStore.user)
  const location = useLocation()

  if (!user) {
    const redirectTarget = encodeURIComponent(`${location.pathname}${location.search}`)

    return <Navigate to={`${APP_ROUTE.login}?${REDIRECT_QUERY_KEY}=${redirectTarget}`} replace />
  }

  return <Outlet />
}
