import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import CTASection from "@/components/CTASection";
import { generatePageMetadata } from "@/components/SEO";
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

  return generatePageMetadata(locale as Locale, {
    title: "About Wholesalify",
    description:
      "Learn how Wholesalify is building a faster, simpler wholesale ordering platform for distributors and B2B suppliers.",
    pathname: "/about",
  });
}

export default async function AboutPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)
  const t = await getTranslations('about')

  return (
    <main className="min-h-screen">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            {t('title')}
          </h1>
          <div className="prose prose-lg max-w-none text-secondary">
            <p className="mb-6">{t('description')}</p>
            <p className="mb-6">{t('mission')}</p>
            <h2 className="text-2xl font-bold text-primary mt-10 mb-4">Our Vision</h2>
            <p>{t('vision')}</p>
          </div>
        </div>
      </div>
      <CTASection />
    </main>
  )
}
