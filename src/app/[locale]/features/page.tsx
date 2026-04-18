import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import Features from "@/components/Features";
import CTASection from "@/components/CTASection";
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
    namespace: "featuresPage",
    titleKey: "title",
    descriptionKey: "subtitle",
    pathname: "/features",
  });
}

export default async function FeaturesPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)
  const t = await getTranslations('featuresPage')
  const blog = await getTranslations('blog')

  const articles = blog.raw('articles')

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
      {/* Blog/Guides Section - SEO Content */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {blog('title')}
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              {blog('subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article: any, index: number) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:border-cta/30 transition-colors"
              >
                <h3 className="font-semibold text-lg text-primary mb-3">
                  {article.title}
                </h3>
                <p className="text-secondary text-sm mb-4">
                  {article.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.keywords.map((keyword: string, i: number) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-cta/10 text-cta rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  )
}
