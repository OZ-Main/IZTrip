import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import SectionHeader from '@/components/layout/SectionHeader/SectionHeader'
import { Button } from '@/components/ui/button'
import FeaturedTrips from '@/features/home/components/FeaturedTrips/FeaturedTrips'
import HomeFinalCtaBand from '@/features/home/components/HomeFinalCtaBand/HomeFinalCtaBand'
import HomeHero from '@/features/home/components/HomeHero/HomeHero'
import HomeHowSection from '@/features/home/components/HomeHowSection/HomeHowSection'
import HomeStyleCategoryCard from '@/features/home/components/HomeStyleCategoryCard/HomeStyleCategoryCard'
import HomeTrustPanel from '@/features/home/components/HomeTrustPanel/HomeTrustPanel'
import { HOME_STYLE_EXPLORE_ITEMS } from '@/features/home/constants/homeStyleExplore.constants'
import { MOCK_TRIPS } from '@/features/trips/data/mockTrips'
import { APP_ROUTE } from '@/shared/constants/routes.constants'
import { useIsNarrowViewport } from '@/shared/hooks/useIsNarrowViewport'
import { cn } from '@/shared/utils/cn'

export default function HomePage() {
  const { t } = useTranslation()
  const isNarrowViewport = useIsNarrowViewport()
  const featuredTrips = MOCK_TRIPS.slice(0, 3)
  const previewTrip = MOCK_TRIPS[0]
  const featuredTitle = t(isNarrowViewport ? 'home.featured.titleShort' : 'home.featured.title')
  const featuredDescription = t(
    isNarrowViewport ? 'home.featured.descriptionShort' : 'home.featured.description',
  )
  const categoriesTitle = t(isNarrowViewport ? 'home.categories.titleShort' : 'home.categories.title')
  const categoriesDescription = t(
    isNarrowViewport ? 'home.categories.descriptionShort' : 'home.categories.description',
  )

  return (
    <div className="space-y-section-sm lg:space-y-section">
      <HomeHero previewTrip={previewTrip} />

      <section
        className={cn(
          'min-w-0 max-w-full space-y-stack sm:space-y-relaxed',
          'border-0 bg-transparent px-0 py-0',
          'sm:rounded-[1.25rem] sm:border sm:border-border/50 sm:bg-muted/10 sm:px-form sm:py-form dark:sm:bg-muted/5',
        )}
      >
        <SectionHeader
          title={featuredTitle}
          description={featuredDescription}
          actionSlot={
            <Button
              type="button"
              variant="outline"
              className="min-h-10 text-caption sm:min-h-11 sm:text-label"
              asChild
            >
              <Link to={APP_ROUTE.trips}>{t('home.featured.viewAll')}</Link>
            </Button>
          }
        />
        <FeaturedTrips trips={featuredTrips} layout="home" />
      </section>

      <HomeHowSection />

      <section className="space-y-stack sm:space-y-relaxed">
        <SectionHeader title={categoriesTitle} description={categoriesDescription} />
        <div className="grid gap-stack sm:gap-relaxed sm:grid-cols-2 xl:grid-cols-3">
          {HOME_STYLE_EXPLORE_ITEMS.map((item) => (
            <HomeStyleCategoryCard
              key={item.category}
              category={item.category}
              href={`${APP_ROUTE.trips}?category=${item.category}`}
              icon={item.icon}
              tone={item.tone}
            />
          ))}
        </div>
      </section>

      <HomeTrustPanel />

      <HomeFinalCtaBand />
    </div>
  )
}
