import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'

import {
  createRegisterFormSchema,
  type RegisterFormValues,
} from '@/features/auth/components/RegisterForm/RegisterForm.validation'
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
import { registerWithEmailPassword } from '@/lib/firebase/authService'
import { getFirebaseAuthErrorTranslationKey } from '@/lib/firebase/firebaseAuthErrorMessage.helpers'
import { APP_ROUTE, REDIRECT_QUERY_KEY } from '@/shared/constants/routes.constants'
import { isSafeInternalRedirectPath } from '@/shared/helpers/redirectPath.helpers'

export default function RegisterForm() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [submitting, setSubmitting] = useState(false)
  const registerFormSchema = createRegisterFormSchema(t)

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  async function onSubmit(values: RegisterFormValues) {
    setSubmitting(true)
    try {
      await registerWithEmailPassword({
        email: values.email,
        password: values.password,
        displayName: values.displayName,
      })
      toast.success(t('auth.registered'))
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
          name="displayName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('auth.displayName')}</FormLabel>
              <FormControl>
                <Input autoComplete="name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
                <Input type="password" autoComplete="new-password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('auth.confirmPassword')}</FormLabel>
              <FormControl>
                <Input type="password" autoComplete="new-password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? t('auth.registering') : t('auth.createAccount')}
        </Button>
      </form>
    </Form>
  )
}
