import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { locales } from '@/lib/i18n'

export default function RootPage() {
  const headersList = headers()
  const acceptLanguage = headersList.get('accept-language') || 'en'

  const preferredLocale = acceptLanguage
    .split(',')
    .map((lang) => {
      const [code, q] = lang.trim().split(';q=')
      return { code: code?.split('-')[0], quality: q ? parseFloat(q) : 1 }
    })
    .sort((a, b) => b.quality - a.quality)
    .find((l) => locales.includes(l.code as any))

  const locale = preferredLocale?.code || 'en'
  redirect(`/${locale}`)
}
