import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'

export default async function TermsPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)
  const t = await getTranslations('terms')

  return (
    <main className="min-h-screen">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">{t('title')}</h1>
          <div className="prose prose-lg max-w-none text-secondary">
            <p>{t('lastUpdated', { date: new Date().toLocaleDateString() })}</p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{t('section1Title')}</h2>
            <p>{t('section1Desc')}</p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{t('section2Title')}</h2>
            <p>{t('section2Desc')}</p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{t('section3Title')}</h2>
            <p>{t('section3Desc')}</p>
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4">{t('section4Title')}</h2>
            <p>
              {t('section4Desc')}{' '}
              <a href="mailto:wholesalify@hotmail.com" className="text-cta hover:underline">
                wholesalify@hotmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
