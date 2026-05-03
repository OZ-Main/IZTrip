import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import PageHeader from '@/components/layout/PageHeader/PageHeader'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { APP_ROUTE } from '@/shared/constants/routes.constants'

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="space-y-section">
      <PageHeader title={t('about.page.title')} description={t('about.page.lead')} />
      <div className="grid gap-relaxed lg:grid-cols-2">
        <Card className="shadow-card">
          <CardContent className="space-y-tight p-card">
            <h2 className="font-display text-heading-lg font-semibold">{t('about.mission.title')}</h2>
            <p className="text-body text-muted-foreground">{t('about.mission.body')}</p>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="space-y-tight p-card">
            <h2 className="font-display text-heading-lg font-semibold">{t('about.local.title')}</h2>
            <p className="text-body text-muted-foreground">{t('about.local.body')}</p>
          </CardContent>
        </Card>
        <Card className="shadow-card lg:col-span-2">
          <CardContent className="space-y-stack p-card">
            <h2 className="font-display text-heading-lg font-semibold">{t('about.safety.title')}</h2>
            <p className="text-body text-muted-foreground">{t('about.safety.body')}</p>
            <Button type="button" size="lg" className="w-full sm:w-auto" asChild>
              <Link to={APP_ROUTE.trips}>{t('about.cta')}</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
