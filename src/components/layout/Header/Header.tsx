import { Menu } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, NavLink } from 'react-router-dom'

import { useAuthStore } from '@/app/store/authStore'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher/LanguageSwitcher'
import ThemeSwitcher from '@/components/layout/ThemeSwitcher/ThemeSwitcher'
import {
  headerActionsVariants,
  headerBrandVariants,
  headerInnerVariants,
  headerNavLinkVariants,
  headerNavVariants,
  headerRootVariants,
} from '@/components/layout/Header/Header.styles'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { APP_ROUTE } from '@/shared/constants/routes.constants'
import { cn } from '@/shared/utils/cn'

function navLinkClassName(isActive: boolean) {
  return cn(
    headerNavLinkVariants(),
    'flex min-h-11 items-center rounded-full px-3 py-2 sm:min-h-10 sm:px-3 sm:py-2',
    isActive && 'bg-primary/10 text-primary',
  )
}

export default function Header() {
  const { t } = useTranslation()
  const user = useAuthStore((authStore) => authStore.user)
  const signOutUser = useAuthStore((authStore) => authStore.signOutUser)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  function closeMobileNav() {
    setMobileNavOpen(false)
  }

  return (
    <header className={headerRootVariants()}>
      <div className={headerInnerVariants()}>
        <div className="flex min-w-0 flex-1 items-center gap-tight">
          <div className="flex shrink-0 items-center gap-tight">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="shrink-0 text-foreground hover:bg-accent/15 hover:text-foreground lg:hidden"
              aria-label={t('nav.openMenu')}
              onClick={() => setMobileNavOpen(true)}
            >
              <Menu className="h-6 w-6" aria-hidden />
            </Button>
            <Link
              to={APP_ROUTE.home}
              className="hidden min-w-0 items-center gap-tight lg:flex"
              onClick={closeMobileNav}
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary font-display text-caption font-bold text-primary-foreground shadow-sm sm:h-10 sm:w-10">
                YZ
              </span>
              <span className={cn(headerBrandVariants(), 'min-w-0 truncate')}>{t('brand.name')}</span>
            </Link>
          </div>
          <nav
            className={cn(
              headerNavVariants(),
              'ml-relaxed hidden flex-1 flex-wrap gap-x-relaxed gap-y-tight lg:flex',
            )}
            aria-label={t('nav.mainLabel')}
          >
            <NavLink
              to={APP_ROUTE.home}
              className={({ isActive }) => navLinkClassName(isActive)}
              end
            >
              {t('nav.home')}
            </NavLink>
            <NavLink to={APP_ROUTE.trips} className={({ isActive }) => navLinkClassName(isActive)}>
              {t('nav.trips')}
            </NavLink>
            {user ? (
              <NavLink to={APP_ROUTE.saved} className={({ isActive }) => navLinkClassName(isActive)}>
                {t('nav.saved')}
              </NavLink>
            ) : null}
            <NavLink to={APP_ROUTE.about} className={({ isActive }) => navLinkClassName(isActive)}>
              {t('nav.about')}
            </NavLink>
          </nav>
        </div>
        <div className={cn(headerActionsVariants(), 'max-md:gap-1')}>
          <div className="flex shrink-0 items-center gap-2 sm:gap-tight">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
          <div className="hidden items-center gap-tight lg:flex lg:flex-wrap lg:justify-end">
            {user ? (
              <div className="flex flex-col items-stretch gap-tight sm:flex-row sm:items-center">
                <span className="max-w-[14rem] truncate text-body-sm text-muted-foreground sm:max-w-[12rem] sm:text-left">
                  {user.email}
                </span>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => void signOutUser()}
                >
                  {t('nav.signOut')}
                </Button>
              </div>
            ) : (
              <div className="flex flex-wrap items-center justify-end gap-tight">
                <Button type="button" variant="ghost" size="sm" asChild>
                  <Link to={APP_ROUTE.login}>{t('nav.signIn')}</Link>
                </Button>
                <Button type="button" size="sm" variant="accent" asChild>
                  <Link to={APP_ROUTE.register}>{t('nav.register')}</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
        <SheetContent
          side="right"
          closeLabel={t('common.close')}
          className="gap-stack overflow-y-auto"
        >
          <SheetHeader className="pr-10">
            <SheetTitle>{t('brand.name')}</SheetTitle>
            <SheetDescription>{t('nav.mainLabel')}</SheetDescription>
          </SheetHeader>
          <nav
            className="flex flex-col gap-tight border-t border-border/70 pt-stack"
            aria-label={t('nav.mainLabel')}
          >
            <NavLink
              to={APP_ROUTE.home}
              className={({ isActive }) => navLinkClassName(isActive)}
              end
              onClick={closeMobileNav}
            >
              {t('nav.home')}
            </NavLink>
            <NavLink
              to={APP_ROUTE.trips}
              className={({ isActive }) => navLinkClassName(isActive)}
              onClick={closeMobileNav}
            >
              {t('nav.trips')}
            </NavLink>
            {user ? (
              <NavLink
                to={APP_ROUTE.saved}
                className={({ isActive }) => navLinkClassName(isActive)}
                onClick={closeMobileNav}
              >
                {t('nav.saved')}
              </NavLink>
            ) : null}
            <NavLink
              to={APP_ROUTE.about}
              className={({ isActive }) => navLinkClassName(isActive)}
              onClick={closeMobileNav}
            >
              {t('nav.about')}
            </NavLink>
          </nav>
          <div className="mt-auto flex flex-col gap-form-field border-t border-border/70 pt-stack">
            {user ? (
              <>
                <p className="truncate text-body-sm text-muted-foreground">{user.email}</p>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => void signOutUser()}
                >
                  {t('nav.signOut')}
                </Button>
              </>
            ) : (
              <>
                <Button type="button" variant="outline" className="w-full" asChild>
                  <Link to={APP_ROUTE.login} onClick={closeMobileNav}>
                    {t('nav.signIn')}
                  </Link>
                </Button>
                <Button type="button" variant="accent" className="w-full" asChild>
                  <Link to={APP_ROUTE.register} onClick={closeMobileNav}>
                    {t('nav.register')}
                  </Link>
                </Button>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
