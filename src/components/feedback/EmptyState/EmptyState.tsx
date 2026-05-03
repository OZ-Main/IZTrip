import type { ReactNode } from 'react'

import {
  emptyStateDescriptionVariants,
  emptyStateRootVariants,
  emptyStateTitleVariants,
} from '@/components/feedback/EmptyState/EmptyState.styles'
import { cn } from '@/shared/utils/cn'

type EmptyStateProps = {
  title: string
  description: string
  actionSlot?: ReactNode
  className?: string
}

export default function EmptyState({ title, description, actionSlot, className }: EmptyStateProps) {
  return (
    <div className={cn(emptyStateRootVariants(), className)}>
      <h3 className={emptyStateTitleVariants()}>{title}</h3>
      <p className={emptyStateDescriptionVariants()}>{description}</p>
      {actionSlot}
    </div>
  )
}
