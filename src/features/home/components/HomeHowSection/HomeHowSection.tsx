import { CalendarRange, Compass, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import SectionHeader from '@/components/layout/SectionHeader/SectionHeader'
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
  const steps = [1, 2, 3] as const

  return (
    <section className="space-y-relaxed">
      <SectionHeader title={t('home.how.title')} description={t('home.how.description')} />
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
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
              </div>
              <h3 className="font-display text-heading-md font-semibold text-foreground">
                {t(`home.how.step${step}.title`)}
              </h3>
              <p className="text-body text-muted-foreground">{t(`home.how.step${step}.body`)}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
