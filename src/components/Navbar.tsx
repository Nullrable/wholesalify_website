'use client'

import Link from 'next/link'
import { useParams, useRouter, usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { locales, localeNames } from '@/lib/i18n'
import { useState } from 'react'

export default function Navbar() {
  const t = useTranslations('nav')
  const params = useParams()
  const router = useRouter()
  const pathname = usePathname()
  const locale = params.locale as string
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const getLocalizedPath = (path: string) => `/${locale}${path}`

  function onLocaleChange(newLocale: string) {
    const currentPath = pathname.replace(`/${locale}`, '') || '/'
    router.push(`/${newLocale}${currentPath}`)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-md rounded-xl px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
        <Link href={getLocalizedPath('/')} className="text-lg md:text-xl font-bold text-primary">
          Wholesalify
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
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

        {/* Desktop Language & CTA */}
        <div className="hidden md:flex items-center gap-3">
          <select
            value={locale}
            onChange={(e) => onLocaleChange(e.target.value)}
            className="appearance-none bg-transparent border border-gray-300 rounded-lg px-2 py-1.5 pr-7 text-sm cursor-pointer hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cta/50 bg-no-repeat bg-right"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundPosition: 'right 6px center' }}
          >
            {locales.map((loc) => (
              <option key={loc} value={loc}>
                {localeNames[loc]}
              </option>
            ))}
          </select>
          <Link
            href={getLocalizedPath('/') + '#waitlist'}
            className="bg-cta text-white px-4 py-2 rounded-lg hover:bg-cta/90 transition-colors cursor-pointer text-sm"
          >
            {t('getEarlyAccess')}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-secondary hover:text-primary cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="max-w-6xl mx-auto mt-2 bg-white/95 backdrop-blur-md rounded-xl px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Link
                href={getLocalizedPath('/features')}
                className="text-secondary hover:text-primary transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('features')}
              </Link>
              <Link
                href={getLocalizedPath('/about')}
                className="text-secondary hover:text-primary transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link
                href={getLocalizedPath('/contact')}
                className="text-secondary hover:text-primary transition-colors py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('contact')}
              </Link>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <label className="text-sm text-gray-600 mb-1 block">Language</label>
              <select
                value={locale}
                onChange={(e) => onLocaleChange(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 text-sm cursor-pointer hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cta/50"
              >
                {locales.map((loc) => (
                  <option key={loc} value={loc}>
                    {localeNames[loc]}
                  </option>
                ))}
              </select>
            </div>

            <Link
              href={getLocalizedPath('/') + '#waitlist'}
              className="w-full bg-cta text-white px-5 py-2.5 rounded-lg hover:bg-cta/90 transition-colors cursor-pointer text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('getEarlyAccess')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
