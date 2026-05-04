import type { LucideIcon } from 'lucide-react'
import type { VariantProps } from 'class-variance-authority'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import {
  homeStyleCategoryCardArrowVariants,
  homeStyleCategoryCardBodyVariants,
  homeStyleCategoryCardIconWrapVariants,
  homeStyleCategoryCardRootVariants,
  homeStyleCategoryCardTitleVariants,
} from '@/features/home/components/HomeStyleCategoryCard/HomeStyleCategoryCard.styles'
import type { TripCategory } from '@/shared/domain'
import { cn } from '@/shared/utils/cn'

type HomeStyleCategoryTone = NonNullable<
  VariantProps<typeof homeStyleCategoryCardRootVariants>['tone']
>

type HomeStyleCategoryCardProps = {
  category: TripCategory
  href: string
  icon: LucideIcon
  tone: HomeStyleCategoryTone
}

export default function HomeStyleCategoryCard({
  category,
  href,
  icon: Icon,
  tone,
}: HomeStyleCategoryCardProps) {
  const { t } = useTranslation()

  return (
    <Link to={href} className={cn(homeStyleCategoryCardRootVariants({ tone }))}>
      <span className={homeStyleCategoryCardIconWrapVariants()}>
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
      </span>
      <span className={homeStyleCategoryCardTitleVariants()}>
        {t(`trips.categories.${category}`)}
      </span>
      <span className={homeStyleCategoryCardBodyVariants()}>
        {t(`home.categoryDescriptions.${category}`)}
      </span>
      <span className={homeStyleCategoryCardArrowVariants()}>{t('home.categories.explore')}</span>
    </Link>
  )
}
