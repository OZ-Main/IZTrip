import { ArrowLeft } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { PAGE_BACK_NAV_BUTTON_CLASSNAME } from '@/shared/constants/pageBackNav.constants'

type PageBackNavLinkProps = {
  to: string
  label: ReactNode
}

export default function PageBackNavLink({ to, label }: PageBackNavLinkProps) {
  return (
    <div className="flex w-full justify-start">
      <Button type="button" variant="ghost" size="sm" className={PAGE_BACK_NAV_BUTTON_CLASSNAME} asChild>
        <Link to={to}>
          <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
          {label}
        </Link>
      </Button>
    </div>
  )
}
