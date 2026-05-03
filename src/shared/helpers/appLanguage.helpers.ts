import { AppLanguage } from '@/shared/domain'

export function isAppLanguage(value: string): value is AppLanguage {
  return (Object.values(AppLanguage) as string[]).includes(value)
}
