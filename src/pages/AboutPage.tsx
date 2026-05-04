import { HeartHandshake, MapPinned, ShieldCheck, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { useAuthStore } from '@/app/store/authStore'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { APP_ROUTE } from '@/shared/constants/routes.constants'
import { HERO_SURFACE_DECOR_CLIP_CLASSNAME } from '@/shared/constants/heroDecor.constants'
import { useIsNarrowViewport } from '@/shared/hooks/useIsNarrowViewport'

const PILLAR_ICONS = [MapPinned, Sparkles, ShieldCheck, HeartHandshake] as const

const PILLAR_IDS = ['pillar1', 'pillar2', 'pillar3', 'pillar4'] as const

const AUDIENCE_KEYS = ['families', 'kids', 'friends', 'weekend'] as const

export default function AboutPage() {
  const { t } = useTranslation()
  const user = useAuthStore((authStore) => authStore.user)
  const isNarrowViewport = useIsNarrowViewport()
  const heroSubtitle = t(isNarrowViewport ? 'about.hero.subtitleShort' : 'about.hero.subtitle')
  const missionBody = t(isNarrowViewport ? 'about.mission.bodyShort' : 'about.mission.body')
  const pillarsTitle = t(isNarrowViewport ? 'about.pillars.titleShort' : 'about.pillars.title')
  const pillarsLead = t(isNarrowViewport ? 'about.pillars.leadShort' : 'about.pillars.lead')
  const audienceLead = t(isNarrowViewport ? 'about.audience.leadShort' : 'about.audience.lead')
  const closingTitle = t(isNarrowViewport ? 'about.closing.titleShort' : 'about.closing.title')
  const closingBody = t(isNarrowViewport ? 'about.closing.bodyShort' : 'about.closing.body')

  return (
    <div className="space-y-section-sm lg:space-y-section">
      <section className="relative isolate rounded-xl border border-primary/15 bg-gradient-to-br from-hero via-primary to-[hsl(158_48%_14%)] px-card py-6 text-hero-foreground shadow-overlay ring-1 ring-inset ring-black/10 dark:ring-white/10 sm:rounded-[1.25rem] sm:px-form sm:py-[2.75rem] lg:py-section">
        <div className={HERO_SURFACE_DECOR_CLIP_CLASSNAME} aria-hidden>
          <div className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-accent/25 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto max-w-content space-y-stack sm:space-y-relaxed">
          <p className="text-caption font-semibold uppercase tracking-[0.14em] text-hero-foreground/75 sm:text-label">
            {t('about.hero.kicker')}
          </p>
          <h1 className="text-balance font-display text-heading-lg font-semibold tracking-tight sm:text-display-xl">
            {t('about.hero.title')}
          </h1>
          <p className="max-w-3xl text-body text-hero-foreground/90 sm:text-body-lg">{heroSubtitle}</p>
          <div className="flex flex-col gap-tight sm:flex-row">
            <Button
              type="button"
              size="lg"
              variant="accent"
              className="min-h-10 w-full px-6 py-2.5 text-caption sm:min-h-12 sm:w-auto sm:px-8 sm:py-3 sm:text-label"
              asChild
            >
              <Link to={APP_ROUTE.trips}>{t('about.ctaPrimary')}</Link>
            </Button>
            {user ? null : (
              <Button
                type="button"
                size="lg"
                variant="secondary"
                className="min-h-10 w-full border-2 border-hero-foreground/45 bg-hero-foreground/18 px-6 py-2.5 text-caption text-hero-foreground shadow-sm hover:bg-hero-foreground/28 sm:min-h-12 sm:w-auto sm:px-8 sm:py-3 sm:text-label"
                asChild
              >
                <Link to={APP_ROUTE.register}>{t('about.ctaSecondary')}</Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-border/80 bg-card/90 p-3 shadow-card sm:rounded-[1.25rem] sm:p-card md:p-form">
        <div className="max-w-3xl space-y-tight">
          <h2 className="font-display text-heading-lg font-semibold text-foreground sm:text-heading-xl">
            {t('about.mission.title')}
          </h2>
          <p className="line-clamp-4 text-body-sm text-muted-foreground sm:line-clamp-none sm:text-body-lg">
            {missionBody}
          </p>
        </div>
      </section>

      <section className="space-y-stack sm:space-y-relaxed">
        <header className="space-y-tight">
          <h2 className="font-display text-heading-lg font-semibold text-foreground sm:text-heading-xl">
            {pillarsTitle}
          </h2>
          <p className="max-w-3xl text-body-sm text-muted-foreground sm:text-body-lg">{pillarsLead}</p>
        </header>
        <div className="grid gap-stack sm:gap-relaxed md:grid-cols-2">
          {PILLAR_IDS.map((pillarId, index) => {
            const Icon = PILLAR_ICONS[index]
            return (
              <Card key={pillarId} className="border-border/80 shadow-card">
                <CardContent className="p-3 sm:p-card">
                  <div className="flex items-start gap-tight">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary sm:h-11 sm:w-11">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                    </span>
                    <div className="min-w-0 space-y-tight pt-0.5">
                      <h3 className="line-clamp-2 font-display text-heading-sm font-semibold leading-snug text-foreground sm:line-clamp-none sm:text-heading-md">
                        {t(`about.${pillarId}.title`)}
                      </h3>
                      <p className="line-clamp-3 text-body-sm text-muted-foreground sm:line-clamp-none sm:text-body">
                        {t(`about.${pillarId}.body`)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="rounded-xl border border-border/80 bg-card/90 p-3 shadow-card sm:rounded-[1.25rem] sm:p-card md:p-form">
        <div className="space-y-stack sm:space-y-relaxed">
          <header className="max-w-3xl space-y-tight">
            <h2 className="font-display text-heading-lg font-semibold text-foreground sm:text-heading-xl">
              {t('about.audience.title')}
            </h2>
            <p className="text-body-sm text-muted-foreground sm:text-body-lg">{audienceLead}</p>
          </header>
          <div className="grid gap-stack sm:gap-relaxed sm:grid-cols-2">
            {AUDIENCE_KEYS.map((audienceKey) => (
              <div
                key={audienceKey}
                className="rounded-xl border border-border/80 bg-muted/15 p-stack text-left shadow-sm sm:p-relaxed"
              >
                <p className="line-clamp-4 text-body-sm leading-relaxed text-foreground sm:line-clamp-none sm:text-body">
                  {t(`about.audience.${audienceKey}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate rounded-xl border border-primary/20 bg-gradient-to-br from-secondary via-primary/8 to-primary/15 px-card py-stack text-center shadow-card ring-1 ring-inset ring-black/5 dark:ring-white/10 sm:rounded-[1.25rem] sm:px-form sm:py-section">
        <h2 className="text-balance font-display text-heading-md font-semibold text-foreground sm:text-heading-xl md:text-display-lg">
          {closingTitle}
        </h2>
        <p className="mx-auto mt-tight max-w-2xl text-body-sm text-muted-foreground sm:text-body-lg">
          {closingBody}
        </p>
        <div className="mt-stack flex flex-col items-stretch justify-center gap-tight sm:flex-row sm:justify-center">
          <Button
            type="button"
            size="lg"
            className="min-h-10 w-full px-6 py-2.5 text-caption sm:min-h-12 sm:w-auto sm:px-8 sm:py-3 sm:text-label"
            asChild
          >
            <Link to={APP_ROUTE.trips}>{t('about.ctaPrimary')}</Link>
          </Button>
          {user ? null : (
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="min-h-10 w-full border-2 border-foreground/25 bg-card px-6 py-2.5 text-caption text-foreground shadow-sm hover:border-primary/35 hover:bg-muted/60 sm:min-h-12 sm:w-auto sm:px-8 sm:py-3 sm:text-label"
              asChild
            >
              <Link to={APP_ROUTE.register}>{t('about.ctaSecondary')}</Link>
            </Button>
          )}
        </div>
      </section>
    </div>
  )
}
