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

export default function HomePage() {
  const { t } = useTranslation()
  const featuredTrips = MOCK_TRIPS.slice(0, 3)
  const previewTrip = MOCK_TRIPS[0]

  return (
    <div className="space-y-section">
      <HomeHero previewTrip={previewTrip} />

      <section className="space-y-relaxed">
        <SectionHeader
          title={t('home.featured.title')}
          description={t('home.featured.description')}
          actionSlot={
            <Button type="button" variant="outline" className="min-h-11" asChild>
              <Link to={APP_ROUTE.trips}>{t('home.featured.viewAll')}</Link>
            </Button>
          }
        />
        <FeaturedTrips trips={featuredTrips} layout="home" />
      </section>

      <HomeHowSection />

      <section className="space-y-relaxed">
        <SectionHeader
          title={t('home.categories.title')}
          description={t('home.categories.description')}
        />
        <div className="grid gap-relaxed sm:grid-cols-2 xl:grid-cols-3">
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
