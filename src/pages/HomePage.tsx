import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import SectionHeader from '@/components/layout/SectionHeader/SectionHeader'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import FeaturedTrips from '@/features/home/components/FeaturedTrips/FeaturedTrips'
import { HOME_EXPLORE_CATEGORIES } from '@/features/home/constants/homeExploreCategories.constants'
import { MOCK_TRIPS } from '@/features/trips/data/mockTrips'
import { APP_ROUTE } from '@/shared/constants/routes.constants'
import { cn } from '@/shared/utils/cn'

const heroShellClassName =
  'relative overflow-hidden rounded-card border border-primary/15 bg-hero px-card py-section text-hero-foreground shadow-card'
const heroGlowClassName =
  'pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/25 blur-3xl'
const heroGridClassName =
  'pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(0_0%_100%_/_0.12),_transparent_55%)]'

export default function HomePage() {
  const { t } = useTranslation()
  const featuredTrips = MOCK_TRIPS.slice(0, 3)

  return (
    <div className="space-y-section">
      <section className={cn(heroShellClassName, 'animate-iz-surface-in')}>
        <div className={heroGlowClassName} aria-hidden />
        <div className={heroGridClassName} aria-hidden />
        <div className="relative z-10 mx-auto max-w-content space-y-relaxed">
          <p className="text-label uppercase tracking-wide text-hero-foreground/80">
            {t('home.hero.eyebrow')}
          </p>
          <h1 className="font-display text-display-xl text-balance sm:text-[2.75rem] sm:leading-tight">
            {t('home.hero.title')}
          </h1>
          <p className="max-w-2xl text-body-lg text-hero-foreground/90">{t('home.hero.subtitle')}</p>
          <div className="flex flex-col gap-tight sm:flex-row sm:items-center">
            <Button type="button" size="lg" variant="accent" asChild>
              <Link to={APP_ROUTE.trips}>{t('home.hero.primaryCta')}</Link>
            </Button>
            <Button
              type="button"
              size="lg"
              variant="secondary"
              className="bg-hero-foreground/10 text-hero-foreground hover:bg-hero-foreground/16"
              asChild
            >
              <Link to={APP_ROUTE.register}>{t('home.hero.secondaryCta')}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="space-y-relaxed">
        <SectionHeader
          title={t('home.featured.title')}
          description={t('home.featured.description')}
          actionSlot={
            <Button type="button" variant="outline" asChild>
              <Link to={APP_ROUTE.trips}>{t('home.featured.viewAll')}</Link>
            </Button>
          }
        />
        <FeaturedTrips trips={featuredTrips} />
      </section>

      <section className="space-y-relaxed">
        <SectionHeader title={t('home.how.title')} description={t('home.how.description')} />
        <div className="grid gap-relaxed md:grid-cols-3">
          {[1, 2, 3].map((step) => (
            <Card key={step} className="shadow-card">
              <CardContent className="space-y-tight p-card">
                <p className="text-label font-semibold text-primary">{t(`home.how.step${step}.badge`)}</p>
                <h3 className="font-display text-heading-md font-semibold">
                  {t(`home.how.step${step}.title`)}
                </h3>
                <p className="text-body text-muted-foreground">{t(`home.how.step${step}.body`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-relaxed">
        <SectionHeader title={t('home.categories.title')} description={t('home.categories.description')} />
        <div className="grid gap-tight sm:grid-cols-2 lg:grid-cols-3">
          {HOME_EXPLORE_CATEGORIES.map((category) => (
            <Link
              key={category}
              to={`${APP_ROUTE.trips}?category=${category}`}
              className="flex min-h-12 items-center rounded-card border border-border/80 bg-card p-card text-body font-semibold text-foreground shadow-card transition-[transform,box-shadow] duration-motion-normal ease-motion-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {t(`trips.categories.${category}`)}
            </Link>
          ))}
        </div>
      </section>

      <section className="rounded-card border border-border/80 bg-muted/40 p-card shadow-card sm:p-form">
        <SectionHeader title={t('home.trust.title')} description={t('home.trust.description')} />
        <ul className="mt-stack grid gap-tight text-body text-muted-foreground sm:grid-cols-3">
          <li>{t('home.trust.point1')}</li>
          <li>{t('home.trust.point2')}</li>
          <li>{t('home.trust.point3')}</li>
        </ul>
      </section>

      <section className="rounded-card border border-primary/20 bg-primary/5 p-card text-center shadow-card sm:p-form">
        <h2 className="font-display text-heading-xl font-semibold text-foreground">
          {t('home.finalCta.title')}
        </h2>
        <p className="mx-auto mt-tight max-w-2xl text-body-lg text-muted-foreground">
          {t('home.finalCta.description')}
        </p>
        <div className="mt-stack flex flex-col items-center justify-center gap-tight sm:flex-row">
          <Button type="button" size="lg" asChild>
            <Link to={APP_ROUTE.trips}>{t('home.finalCta.primary')}</Link>
          </Button>
          <Button type="button" size="lg" variant="outline" asChild>
            <Link to={APP_ROUTE.login}>{t('home.finalCta.secondary')}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
