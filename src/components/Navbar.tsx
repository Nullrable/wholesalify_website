'use client'

import Link from 'next/link'
import { useParams, useRouter, usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { locales, localeNames } from '@/lib/i18n'

export default function Navbar() {
  const t = useTranslations('nav')
  const params = useParams()
  const router = useRouter()
  const pathname = usePathname()
  const locale = params.locale as string

  const getLocalizedPath = (path: string) => `/${locale}${path}`

  function onLocaleChange(newLocale: string) {
    const currentPath = pathname.replace(`/${locale}`, '') || '/'
    router.push(`/${newLocale}${currentPath}`)
  }

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-xl px-6 py-4 flex items-center justify-between">
        <Link href={getLocalizedPath('/')} className="text-xl font-bold text-primary">
          Wholesalify
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href={getLocalizedPath('/features')} className="text-secondary hover:text-primary transition-colors cursor-pointer">
            {t('features')}
          </Link>
          <Link href={getLocalizedPath('/about')} className="text-secondary hover:text-primary transition-colors cursor-pointer">
            {t('about')}
          </Link>
          <Link href={getLocalizedPath('/contact')} className="text-secondary hover:text-primary transition-colors cursor-pointer">
            {t('contact')}
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <select
            value={locale}
            onChange={(e) => onLocaleChange(e.target.value)}
            className="appearance-none bg-transparent border border-gray-300 rounded-lg px-3 py-1.5 pr-8 text-sm cursor-pointer hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cta/50"
          >
            {locales.map((loc) => (
              <option key={loc} value={loc}>
                {localeNames[loc]}
              </option>
            ))}
          </select>
          <Link
            href={getLocalizedPath('/') + '#waitlist'}
            className="bg-cta text-white px-5 py-2 rounded-lg hover:bg-cta/90 transition-colors cursor-pointer"
          >
            {t('getEarlyAccess')}
          </Link>
        </div>
      </div>
    </nav>
  )
}
