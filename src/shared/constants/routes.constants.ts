export const REDIRECT_QUERY_KEY = 'redirectTo' as const

export const ROUTE_SEGMENT = {
  trips: 'trips',
  tripSlugParam: ':tripSlug',
  booking: 'booking',
  about: 'about',
  saved: 'saved',
  login: 'login',
  register: 'register',
  wildcard: '*',
} as const

export const APP_ROUTE = {
  home: '/',
  trips: '/trips',
  tripDetails: (tripSlug: string) => `/trips/${tripSlug}`,
  booking: (tripSlug: string) => `/booking/${tripSlug}`,
  about: '/about',
  saved: '/saved',
  login: '/login',
  register: '/register',
} as const
