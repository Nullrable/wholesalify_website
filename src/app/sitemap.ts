import { MetadataRoute } from 'next'
import { articles } from '@/lib/docs'

const BASE_URL = 'https://www.wholesalify.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/contact',
    '/features',
    '/privacy',
    '/terms',
    '/docs',
  ]
  const allLocales = [
    'en',
    'zh',
    'vi',
    'th',
    'id',
    'ms',
    'ar',
    'tr',
    'es-MX',
    'pt-BR',
    'de',
    'fr',
    'it',
    'pl',
    'es-ES',
    'pt-PT',
  ]

  // Marketing routes for all locales.
  const marketingEntries = routes.flatMap((route) =>
    allLocales.map((locale) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
    }))
  )

  // Documentation entries — only English for now.
  const docEntries = articles.flatMap((article) => [
    {
      url: `${BASE_URL}/en${article.href}`,
      lastModified: new Date(article.lastUpdated),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
  ])

  return [...marketingEntries, ...docEntries]
}
