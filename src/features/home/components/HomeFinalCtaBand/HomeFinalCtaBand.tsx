import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { useAuthStore } from '@/app/store/authStore'
import { Button } from '@/components/ui/button'
import {
  homeFinalCtaBandRootVariants,
  homeFinalCtaBandWashVariants,
} from '@/features/home/components/HomeFinalCtaBand/HomeFinalCtaBand.styles'
import { APP_ROUTE } from '@/shared/constants/routes.constants'
import { cn } from '@/shared/utils/cn'

type HomeFinalCtaBandProps = {
  className?: string
}

export default function HomeFinalCtaBand({ className }: HomeFinalCtaBandProps) {
  const { t } = useTranslation()
  const user = useAuthStore((authStore) => authStore.user)

  return (
    <section className={cn(homeFinalCtaBandRootVariants(), className)}>
      <div className={homeFinalCtaBandWashVariants()} aria-hidden />
      <div className="relative z-10 mx-auto max-w-3xl space-y-relaxed">
        <h2 className="text-balance font-display text-heading-xl font-semibold text-foreground sm:text-display-lg">
          {t('home.finalCta.title')}
        </h2>
        <p className="mx-auto max-w-2xl text-body-lg text-muted-foreground">
          {t('home.finalCta.description')}
        </p>
        <div className="flex flex-col items-stretch justify-center gap-tight sm:flex-row sm:items-center sm:justify-center">
          <Button type="button" size="lg" className="min-h-11 w-full sm:w-auto" asChild>
            <Link to={APP_ROUTE.trips}>{t('home.finalCta.primary')}</Link>
          </Button>
          {user ? null : (
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="min-h-11 w-full border-2 border-foreground/25 bg-card text-foreground shadow-sm hover:border-primary/35 hover:bg-muted/60 sm:w-auto"
              asChild
            >
              <Link to={APP_ROUTE.register}>{t('home.finalCta.secondary')}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
