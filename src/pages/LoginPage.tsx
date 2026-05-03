import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import AuthBrandedAside from '@/components/layout/AuthBrandedAside/AuthBrandedAside'
import LoginForm from '@/features/auth/components/LoginForm/LoginForm'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { APP_ROUTE } from '@/shared/constants/routes.constants'

export default function LoginPage() {
  const { t } = useTranslation()

  return (
    <div className="mx-auto grid w-full max-w-5xl gap-relaxed py-section lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-stretch">
      <AuthBrandedAside />
      <Card className="shadow-card lg:self-center">
        <CardHeader className="space-y-tight">
          <CardTitle className="font-display text-heading-xl">{t('auth.signIn')}</CardTitle>
          <CardDescription className="text-body">{t('auth.signInDescription')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-stack">
          <LoginForm />
          <p className="text-center text-body-sm text-muted-foreground">
            {t('auth.noAccount')}{' '}
            <Link
              to={APP_ROUTE.register}
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              {t('auth.createOne')}
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
