import type { ReactNode } from 'react'

import {
  sectionHeaderDescriptionVariants,
  sectionHeaderRootVariants,
  sectionHeaderTitleVariants,
} from '@/components/layout/SectionHeader/SectionHeader.styles'
import { cn } from '@/shared/utils/cn'

type SectionHeaderProps = {
  title: string
  description?: string
  actionSlot?: ReactNode
  className?: string
}

export default function SectionHeader({
  title,
  description,
  actionSlot,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(sectionHeaderRootVariants(), className)}>
      <div className="min-w-0 space-y-tight">
        <h2 className={sectionHeaderTitleVariants()}>{title}</h2>
        {description ? <p className={sectionHeaderDescriptionVariants()}>{description}</p> : null}
      </div>
      {actionSlot ? (
        <div className="w-full shrink-0 md:w-auto [&_a]:block [&_a]:w-full md:[&_a]:inline md:[&_a]:w-auto [&_button]:w-full md:[&_button]:w-auto">
          {actionSlot}
        </div>
      ) : null}
    </div>
  )
}
