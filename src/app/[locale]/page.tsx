import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
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
    namespace: "hero",
    titleKey: "subtitle",
    descriptionKey: "description",
  });
}

export default async function HomePage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  setRequestLocale(locale)

  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Features />
      <CTASection />
    </main>
  )
}
