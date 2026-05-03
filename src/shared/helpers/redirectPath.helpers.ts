export function isSafeInternalRedirectPath(path: string | null): path is string {
  if (!path || !path.startsWith('/')) {
    return false
  }

  if (path.startsWith('//') || path.includes('://')) {
    return false
  }

  return true
}
