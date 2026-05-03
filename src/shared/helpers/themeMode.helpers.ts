import { ThemeMode } from '@/shared/domain'

export function isThemeMode(value: string): value is ThemeMode {
  return (Object.values(ThemeMode) as string[]).includes(value)
}
