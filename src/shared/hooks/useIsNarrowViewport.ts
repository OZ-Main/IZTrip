import { useEffect, useState } from 'react'

import { NARROW_VIEWPORT_MEDIA_QUERY } from '@/shared/constants/viewport.constants'

export function useIsNarrowViewport() {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(NARROW_VIEWPORT_MEDIA_QUERY).matches : false,
  )

  useEffect(() => {
    const mediaQueryList = window.matchMedia(NARROW_VIEWPORT_MEDIA_QUERY)

    function syncMatches() {
      setMatches(mediaQueryList.matches)
    }

    syncMatches()
    mediaQueryList.addEventListener('change', syncMatches)

    return () => mediaQueryList.removeEventListener('change', syncMatches)
  }, [])

  return matches
}
