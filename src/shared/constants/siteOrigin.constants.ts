function normalizeOrigin(raw: string): string {
  return raw.replace(/\/$/, '')
}

export function getSiteOrigin(): string {
  const envUrl = import.meta.env.VITE_SITE_URL

  if (typeof envUrl === 'string' && envUrl.trim()) {
    return normalizeOrigin(envUrl.trim())
  }

  if (typeof window !== 'undefined' && window.location?.origin) {
    return normalizeOrigin(window.location.origin)
  }

  return ''
}
