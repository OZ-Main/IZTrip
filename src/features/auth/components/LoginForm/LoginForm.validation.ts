import type { TFunction } from 'i18next'
import { z } from 'zod'

export function createLoginFormSchema(t: TFunction) {
  return z.object({
    email: z
      .string()
      .min(1, t('auth.validation.emailRequired'))
      .email(t('auth.validation.emailInvalid')),
    password: z.string().min(1, t('auth.validation.passwordRequired')),
  })
}

export type LoginFormValues = z.infer<ReturnType<typeof createLoginFormSchema>>
