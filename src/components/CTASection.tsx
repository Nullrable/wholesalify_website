'use client'

import { useTranslations } from 'next-intl'
import EmailForm from './EmailForm'

export default function CTASection() {
  const t = useTranslations('cta')

  return (
    <section className="py-20 px-6 bg-cta">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t('title')}
        </h2>
        <p className="text-white/80 text-lg mb-8">
          {t('subtitle')}
        </p>
        <div className="flex justify-center">
          <EmailForm />
        </div>
      </div>
    </section>
  )
}
