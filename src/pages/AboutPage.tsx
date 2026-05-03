import { HeartHandshake, MapPinned, ShieldCheck, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { useAuthStore } from '@/app/store/authStore'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { APP_ROUTE } from '@/shared/constants/routes.constants'
import { cn } from '@/shared/utils/cn'

const PILLAR_ICONS = [MapPinned, Sparkles, ShieldCheck, HeartHandshake] as const

const PILLAR_IDS = ['pillar1', 'pillar2', 'pillar3', 'pillar4'] as const

const AUDIENCE_KEYS = ['families', 'kids', 'friends', 'weekend'] as const

export default function AboutPage() {
  const { t } = useTranslation()
  const user = useAuthStore((authStore) => authStore.user)

  return (
    <div className="space-y-section">
      <section className="relative overflow-hidden rounded-[1.25rem] border border-primary/15 bg-gradient-to-br from-hero via-primary to-[hsl(158_48%_14%)] px-card py-section text-hero-foreground shadow-overlay sm:px-form sm:py-[2.75rem]">
        <div
          className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-accent/25 blur-3xl"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-content space-y-relaxed">
          <p className="text-label font-semibold uppercase tracking-[0.14em] text-hero-foreground/75">
            {t('about.hero.kicker')}
          </p>
          <h1 className="text-balance font-display text-display-xl font-semibold tracking-tight sm:text-[2.65rem] sm:leading-[1.1]">
            {t('about.hero.title')}
          </h1>
          <p className="max-w-3xl text-body-lg text-hero-foreground/90">
            {t('about.hero.subtitle')}
          </p>
          <div className="flex flex-col gap-tight sm:flex-row">
            <Button
              type="button"
              size="lg"
              variant="accent"
              className="min-h-11 w-full sm:w-auto"
              asChild
            >
              <Link to={APP_ROUTE.trips}>{t('about.ctaPrimary')}</Link>
            </Button>
            {user ? null : (
              <Button
                type="button"
                size="lg"
                variant="secondary"
                className="bg-hero-foreground/18 hover:bg-hero-foreground/28 min-h-11 w-full border-2 border-hero-foreground/45 text-hero-foreground shadow-sm sm:w-auto"
                asChild
              >
                <Link to={APP_ROUTE.register}>{t('about.ctaSecondary')}</Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      <section className="rounded-[1.25rem] border border-border/80 bg-card/90 p-card shadow-card sm:p-form">
        <div className="max-w-3xl space-y-tight">
          <h2 className="font-display text-heading-xl font-semibold text-foreground">
            {t('about.mission.title')}
          </h2>
          <p className="text-body-lg text-muted-foreground">{t('about.mission.body')}</p>
        </div>
      </section>

      <section className="space-y-relaxed">
        <header className="space-y-tight">
          <h2 className="font-display text-heading-xl font-semibold text-foreground">
            {t('about.pillars.title')}
          </h2>
          <p className="max-w-3xl text-body-lg text-muted-foreground">{t('about.pillars.lead')}</p>
        </header>
        <div className="grid gap-relaxed md:grid-cols-2">
          {PILLAR_IDS.map((pillarId, index) => {
            const Icon = PILLAR_ICONS[index]
            return (
              <Card key={pillarId} className="border-border/80 shadow-card">
                <CardContent className="p-card">
                  <div className="flex items-start gap-tight">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div className="min-w-0 space-y-tight pt-0.5">
                      <h3 className="font-display text-heading-md font-semibold text-foreground">
                        {t(`about.${pillarId}.title`)}
                      </h3>
                      <p className="text-body text-muted-foreground">
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

      <section className="rounded-[1.25rem] border border-border/80 bg-gradient-to-br from-muted/50 via-card to-card p-card shadow-card sm:p-form">
        <div className="mx-auto max-w-content space-y-relaxed">
          <header className="space-y-tight">
            <h2 className="font-display text-heading-xl font-semibold text-foreground">
              {t('about.audience.title')}
            </h2>
            <p className="max-w-3xl text-body-lg text-muted-foreground">
              {t('about.audience.lead')}
            </p>
          </header>
          <ul className="grid gap-tight sm:grid-cols-2">
            {AUDIENCE_KEYS.map((audienceKey) => (
              <li
                key={audienceKey}
                className={cn(
                  'rounded-card border border-border/70 bg-background/80 px-card py-tight text-body font-medium text-foreground shadow-sm backdrop-blur-sm',
                )}
              >
                {t(`about.audience.${audienceKey}`)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="via-primary/8 rounded-[1.25rem] border border-primary/20 bg-gradient-to-br from-secondary to-primary/15 px-card py-section text-center shadow-card sm:px-form">
        <h2 className="text-balance font-display text-heading-xl font-semibold text-foreground">
          {t('about.closing.title')}
        </h2>
        <p className="mx-auto mt-tight max-w-2xl text-body-lg text-muted-foreground">
          {t('about.closing.body')}
        </p>
        <div className="mt-stack flex flex-col items-stretch justify-center gap-tight sm:flex-row sm:justify-center">
          <Button type="button" size="lg" className="min-h-11 w-full sm:w-auto" asChild>
            <Link to={APP_ROUTE.trips}>{t('about.ctaPrimary')}</Link>
          </Button>
          {user ? null : (
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="min-h-11 w-full border-2 border-foreground/25 bg-card text-foreground shadow-sm hover:border-primary/35 hover:bg-muted/60 sm:w-auto"
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
