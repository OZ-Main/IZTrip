import type { LucideIcon } from 'lucide-react'
import type { CSSProperties, ReactNode } from 'react'

import {
  tripDetailsSectionBodyVariants,
  tripDetailsSectionHeaderVariants,
  tripDetailsSectionIconWrapVariants,
  tripDetailsSectionInnerVariants,
  tripDetailsSectionRootVariants,
  tripDetailsSectionTitleVariants,
} from '@/features/trips/components/TripDetailsSection/TripDetailsSection.styles'
import { cn } from '@/shared/utils/cn'

type TripDetailsSectionProps = {
  title: string
  icon: LucideIcon
  children: ReactNode
  className?: string
  bodyClassName?: string
  style?: CSSProperties
}

export default function TripDetailsSection({
  title,
  icon: Icon,
  children,
  className,
  bodyClassName,
  style,
}: TripDetailsSectionProps) {
  return (
    <section className={cn(tripDetailsSectionRootVariants(), className)} style={style}>
      <div className={tripDetailsSectionInnerVariants()}>
        <div className={tripDetailsSectionHeaderVariants()}>
          <span className={tripDetailsSectionIconWrapVariants()}>
            <Icon className="h-5 w-5" aria-hidden />
          </span>
          <h2 className={tripDetailsSectionTitleVariants()}>{title}</h2>
        </div>
        <div className={cn(tripDetailsSectionBodyVariants(), bodyClassName)}>{children}</div>
      </div>
    </section>
  )
}
