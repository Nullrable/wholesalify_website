import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { generateTranslatedPageMetadata } from "@/components/SEO";
import { locales, type Locale } from "@/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!locales.includes(locale as Locale)) {
    return {};
  }

  return generateTranslatedPageMetadata(locale as Locale, {
    namespace: "contact",
    titleKey: "title",
    descriptionKey: "subtitle",
    pathname: "/contact",
  });
}

export default async function ContactPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)
  const t = await getTranslations('contact')

  return (
    <main className="min-h-screen">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            {t('title')}
          </h1>
          <p className="text-secondary text-lg mb-8">
            {t('subtitle')}
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                {t('name')}
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cta/50"
                placeholder={t('namePlaceholder')}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                {t('email')}
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cta/50"
                placeholder={t('emailPlaceholder')}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                {t('message')}
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cta/50"
                placeholder={t('messagePlaceholder')}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-cta text-white py-3 rounded-lg hover:bg-cta/90 transition-colors cursor-pointer"
            >
              {t('send')}
            </button>
          </form>
          <div className="mt-12 pt-8 border-t">
            <p className="text-secondary">
              {t('orEmail')}{' '}
              <a href="mailto:wholesalify@hotmail.com" className="text-cta hover:underline cursor-pointer">
                wholesalify@hotmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
