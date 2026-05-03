import type { TFunction } from 'i18next'
import { z } from 'zod'

export function createRegisterFormSchema(t: TFunction) {
  return z
    .object({
      displayName: z.string().min(1, t('auth.validation.displayNameRequired')),
      email: z
        .string()
        .min(1, t('auth.validation.emailRequired'))
        .email(t('auth.validation.emailInvalid')),
      password: z.string().min(8, t('auth.validation.passwordMin')),
      confirmPassword: z.string().min(1, t('auth.validation.confirmPasswordRequired')),
    })
    .refine((values) => values.password === values.confirmPassword, {
      message: t('auth.validation.passwordsMismatch'),
      path: ['confirmPassword'],
    })
}

export type RegisterFormValues = z.infer<ReturnType<typeof createRegisterFormSchema>>
