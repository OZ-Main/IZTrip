import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useLayoutEffect(function scrollWindowToTopOnPathChange() {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
