import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { useAuthStore } from '@/app/store/authStore'
import { Button } from '@/components/ui/button'
import {
  homeFinalCtaBandRootVariants,
  homeFinalCtaBandWashVariants,
} from '@/features/home/components/HomeFinalCtaBand/HomeFinalCtaBand.styles'
import { HERO_SURFACE_DECOR_CLIP_CLASSNAME } from '@/shared/constants/heroDecor.constants'
import { APP_ROUTE } from '@/shared/constants/routes.constants'
import { useIsNarrowViewport } from '@/shared/hooks/useIsNarrowViewport'
import { cn } from '@/shared/utils/cn'

type HomeFinalCtaBandProps = {
  className?: string
}

export default function HomeFinalCtaBand({ className }: HomeFinalCtaBandProps) {
  const { t } = useTranslation()
  const user = useAuthStore((authStore) => authStore.user)
  const isNarrowViewport = useIsNarrowViewport()
  const bandTitle = t(isNarrowViewport ? 'home.finalCta.titleShort' : 'home.finalCta.title')
  const bandDescription = t(
    isNarrowViewport ? 'home.finalCta.descriptionShort' : 'home.finalCta.description',
  )

  return (
    <section className={cn(homeFinalCtaBandRootVariants(), className)}>
      <div className={HERO_SURFACE_DECOR_CLIP_CLASSNAME} aria-hidden>
        <div className={homeFinalCtaBandWashVariants()} />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl space-y-stack sm:space-y-relaxed">
        <h2 className="text-balance font-display text-heading-lg font-semibold text-foreground sm:text-heading-xl md:text-display-lg">
          {bandTitle}
        </h2>
        <p className="mx-auto max-w-2xl text-body text-muted-foreground sm:text-body-lg">
          {bandDescription}
        </p>
        <div className="flex flex-col items-stretch justify-center gap-tight sm:flex-row sm:items-center sm:justify-center">
          <Button
            type="button"
            size="lg"
            className="min-h-10 w-full px-6 py-2.5 text-caption sm:min-h-12 sm:w-auto sm:px-8 sm:py-3 sm:text-label"
            asChild
          >
            <Link to={APP_ROUTE.trips}>{t('home.finalCta.primary')}</Link>
          </Button>
          {user ? null : (
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="min-h-10 w-full border-2 border-foreground/25 bg-card px-6 py-2.5 text-caption text-foreground shadow-sm hover:border-primary/35 hover:bg-muted/60 sm:min-h-12 sm:w-auto sm:px-8 sm:py-3 sm:text-label"
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
