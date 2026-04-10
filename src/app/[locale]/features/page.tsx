import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import Features from '@/components/Features'
import CTASection from '@/components/CTASection'

export default async function FeaturesPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)
  const t = await getTranslations('featuresPage')

  return (
    <main className="min-h-screen">
      <div className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-secondary">
            {t('subtitle')}
          </p>
        </div>
      </div>
      <Features />
      <CTASection />
    </main>
  )
}
