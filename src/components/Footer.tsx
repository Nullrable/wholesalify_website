'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')
  const params = useParams()
  const locale = params.locale as string

  const getLocalizedPath = (path: string) => `/${locale}${path}`

  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Wholesalify</h3>
            <p className="text-gray-400 text-sm">
              {t('tagline')}
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('product')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href={getLocalizedPath('/features')} className="hover:text-white transition-colors cursor-pointer">{t('features')}</Link></li>
              <li><Link href={getLocalizedPath('/about')} className="hover:text-white transition-colors cursor-pointer">{t('about')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('company')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href={getLocalizedPath('/contact')} className="hover:text-white transition-colors cursor-pointer">{t('contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t('legal')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href={getLocalizedPath('/privacy')} className="hover:text-white transition-colors cursor-pointer">{t('privacy')}</Link></li>
              <li><Link href={getLocalizedPath('/terms')} className="hover:text-white transition-colors cursor-pointer">{t('terms')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          {t('copyright', { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  )
}
