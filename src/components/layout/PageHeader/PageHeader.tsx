import { pageHeaderDescriptionVariants, pageHeaderRootVariants, pageHeaderTitleVariants } from '@/components/layout/PageHeader/PageHeader.styles'
import { cn } from '@/shared/utils/cn'

type PageHeaderProps = {
  title: string
  description?: string
  className?: string
}

export default function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <header className={cn(pageHeaderRootVariants(), className)}>
      <h1 className={cn(pageHeaderTitleVariants(), 'text-balance')}>{title}</h1>
      {description ? (
        <p className={cn(pageHeaderDescriptionVariants(), 'text-pretty')}>{description}</p>
      ) : null}
    </header>
  )
}
