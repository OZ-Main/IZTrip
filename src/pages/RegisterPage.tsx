import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import AuthBrandedAside from '@/components/layout/AuthBrandedAside/AuthBrandedAside'
import RegisterForm from '@/features/auth/components/RegisterForm/RegisterForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { APP_ROUTE } from '@/shared/constants/routes.constants'

export default function RegisterPage() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto grid w-full max-w-5xl gap-relaxed py-section lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch">
      <AuthBrandedAside />
      <Card className="shadow-card lg:self-center">
        <CardHeader className="space-y-tight">
          <CardTitle className="font-display text-heading-xl">{t('auth.registerTitle')}</CardTitle>
          <CardDescription className="text-body">{t('auth.registerDescription')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-stack">
          <RegisterForm />
          <p className="text-center text-body-sm text-muted-foreground">
            {t('auth.haveAccount')}{' '}
            <Link
              to={APP_ROUTE.login}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {t('auth.signInInstead')}
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
