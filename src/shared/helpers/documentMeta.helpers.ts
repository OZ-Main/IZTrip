import { getSiteOrigin } from '@/shared/constants/siteOrigin.constants'

type DocumentMetaInput = {
  title: string
  description: string
  canonicalPath: string
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${CSS.escape(key)}"]`
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

function upsertCanonical(href: string) {
  let link = document.head.querySelector('link[rel="canonical"]')

  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }

  link.setAttribute('href', href)
}

export function applyDocumentMeta({ title, description, canonicalPath }: DocumentMetaInput) {
  document.title = title

  upsertMeta('name', 'description', description)
  upsertMeta('property', 'og:title', title)
  upsertMeta('property', 'og:description', description)
  upsertMeta('property', 'og:type', 'website')
  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', title)
  upsertMeta('name', 'twitter:description', description)

  const origin = getSiteOrigin()

  if (!origin) {
    return
  }

  const normalizedPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`
  const url = `${origin}${normalizedPath}`

  upsertMeta('property', 'og:url', url)
  upsertCanonical(url)
}
