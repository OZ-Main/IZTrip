import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'

import {
  createLoginFormSchema,
  type LoginFormValues,
} from '@/features/auth/components/LoginForm/LoginForm.validation'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { signInWithEmailPassword } from '@/lib/firebase/authService'
import { getFirebaseAuthErrorTranslationKey } from '@/lib/firebase/firebaseAuthErrorMessage.helpers'
import { APP_ROUTE, REDIRECT_QUERY_KEY } from '@/shared/constants/routes.constants'
import { isSafeInternalRedirectPath } from '@/shared/helpers/redirectPath.helpers'

export default function LoginForm() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [submitting, setSubmitting] = useState(false)
  const loginFormSchema = createLoginFormSchema(t)

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: { email: '', password: '' },
  })

  async function onSubmit(values: LoginFormValues) {
    setSubmitting(true)
    try {
      await signInWithEmailPassword(values.email, values.password)
      toast.success(t('auth.signedIn'))
      const redirectTo = searchParams.get(REDIRECT_QUERY_KEY)
      const target = isSafeInternalRedirectPath(redirectTo) ? redirectTo : APP_ROUTE.home
      navigate(target, { replace: true })
    } catch (error: unknown) {
      toast.error(t(getFirebaseAuthErrorTranslationKey(error)))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-stack">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('auth.email')}</FormLabel>
              <FormControl>
                <Input type="email" autoComplete="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('auth.password')}</FormLabel>
              <FormControl>
                <Input type="password" autoComplete="current-password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? t('auth.signingIn') : t('auth.signIn')}
        </Button>
      </form>
    </Form>
  )
}
