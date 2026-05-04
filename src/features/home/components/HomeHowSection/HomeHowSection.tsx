import { CalendarRange, Compass, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import SectionHeader from '@/components/layout/SectionHeader/SectionHeader'
import { useIsNarrowViewport } from '@/shared/hooks/useIsNarrowViewport'
import {
  homeHowSectionConnectorVariants,
  homeHowSectionGridVariants,
  homeHowStepBadgeVariants,
  homeHowStepCardVariants,
  homeHowStepIconWrapVariants,
} from '@/features/home/components/HomeHowSection/HomeHowSection.styles'

const STEP_ICONS = [Compass, CalendarRange, Send] as const

export default function HomeHowSection() {
  const { t } = useTranslation()
  const isNarrowViewport = useIsNarrowViewport()
  const steps = [1, 2, 3] as const
  const howTitle = t(isNarrowViewport ? 'home.how.titleShort' : 'home.how.title')
  const howDescription = t(isNarrowViewport ? 'home.how.descriptionShort' : 'home.how.description')

  return (
    <section className="space-y-stack sm:space-y-relaxed">
      <SectionHeader title={howTitle} description={howDescription} />
      <div className={homeHowSectionGridVariants()}>
        <div className={homeHowSectionConnectorVariants()} aria-hidden />
        {steps.map((step, index) => {
          const Icon = STEP_ICONS[index]
          return (
            <article key={step} className={homeHowStepCardVariants()}>
              <div className="flex items-center gap-tight">
                <span className={homeHowStepBadgeVariants()}>
                  {t(`home.how.step${step}.badge`)}
                </span>
                <span className={homeHowStepIconWrapVariants()}>
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                </span>
              </div>
              <h3 className="font-display text-heading-sm font-semibold text-foreground sm:text-heading-md">
                {t(`home.how.step${step}.title`)}
              </h3>
              <p className="line-clamp-3 text-body-sm leading-relaxed text-muted-foreground sm:line-clamp-none sm:text-body">
                {t(`home.how.step${step}.body`)}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
