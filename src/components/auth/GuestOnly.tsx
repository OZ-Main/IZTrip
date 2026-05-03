import type { ReactNode } from 'react'
import { Navigate, useSearchParams } from 'react-router-dom'

import { useAuthStore } from '@/app/store/authStore'
import { APP_ROUTE, REDIRECT_QUERY_KEY } from '@/shared/constants/routes.constants'
import { isSafeInternalRedirectPath } from '@/shared/helpers/redirectPath.helpers'

type GuestOnlyProps = {
  children: ReactNode
}

export function GuestOnly({ children }: GuestOnlyProps) {
  const user = useAuthStore((authStore) => authStore.user)
  const [searchParams] = useSearchParams()
  const redirectTo = searchParams.get(REDIRECT_QUERY_KEY)

  if (user) {
    const target = isSafeInternalRedirectPath(redirectTo) ? redirectTo : APP_ROUTE.home

    return <Navigate to={target} replace />
  }

  return <>{children}</>
}
