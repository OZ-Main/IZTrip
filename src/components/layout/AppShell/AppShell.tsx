import { Outlet } from 'react-router-dom'

import Header from '@/components/layout/Header/Header'
import {
  appShellMainInnerVariants,
  appShellMainVariants,
  appShellRootVariants,
} from '@/components/layout/AppShell/AppShell.styles'

export default function AppShell() {
  return (
    <div className={appShellRootVariants()}>
      <Header />
      <main className={appShellMainVariants()}>
        <div className={appShellMainInnerVariants()}>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
