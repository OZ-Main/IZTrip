import RouteDocumentHead from '@/components/layout/RouteDocumentHead/RouteDocumentHead'
import Header from '@/components/layout/Header/Header'
import PageOutletTransition from '@/components/layout/AppShell/PageOutletTransition'
import {
  appShellMainInnerVariants,
  appShellMainVariants,
  appShellRootVariants,
} from '@/components/layout/AppShell/AppShell.styles'

export default function AppShell() {
  return (
    <div className={appShellRootVariants()}>
      <RouteDocumentHead />
      <Header />
      <main className={appShellMainVariants()}>
        <div className={appShellMainInnerVariants()}>
          <PageOutletTransition />
        </div>
      </main>
    </div>
  )
}
