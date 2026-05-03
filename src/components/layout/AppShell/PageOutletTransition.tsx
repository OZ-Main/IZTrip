import { Outlet, useLocation } from 'react-router-dom'

export default function PageOutletTransition() {
  const location = useLocation()

  return (
    <div key={location.pathname} className="min-w-0">
      <Outlet />
    </div>
  )
}
