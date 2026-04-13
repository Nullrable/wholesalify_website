import { MetadataRoute } from 'next'

const BASE_URL = 'https://wholesalify.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/contact', '/features', '/privacy', '/terms']
  const allLocales = ['en', 'zh', 'vi', 'th', 'id', 'ms', 'ar', 'tr', 'es-MX', 'pt-BR', 'de', 'fr', 'it', 'pl', 'es-ES', 'pt-PT']

  const entries = routes.flatMap((route) =>
    allLocales.map((locale) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
    }))
  )

  return entries
}
