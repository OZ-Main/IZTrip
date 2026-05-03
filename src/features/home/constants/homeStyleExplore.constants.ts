import type { LucideIcon } from 'lucide-react'
import { Baby, Landmark, Leaf, Tent, UsersRound, Wine } from 'lucide-react'

import { TripCategory } from '@/shared/domain'

type HomeCategoryExploreTone = 'kids' | 'family' | 'adults' | 'nature' | 'culture' | 'weekend'

export const HOME_STYLE_EXPLORE_ITEMS: {
  category: TripCategory
  tone: HomeCategoryExploreTone
  icon: LucideIcon
}[] = [
  { category: TripCategory.KIDS, tone: 'kids', icon: Baby },
  { category: TripCategory.FAMILY, tone: 'family', icon: UsersRound },
  { category: TripCategory.ADULTS, tone: 'adults', icon: Wine },
  { category: TripCategory.NATURE, tone: 'nature', icon: Leaf },
  { category: TripCategory.CULTURE, tone: 'culture', icon: Landmark },
  { category: TripCategory.WEEKEND, tone: 'weekend', icon: Tent },
]
